// Records Overpass responses into data/osm/ so the tutorial works when the public server is down.
//
//   node scripts/record-overpass.mjs            # starts a recorder on http://localhost:8001
//   (with `npm start` running in another terminal) open, and run all cells of, these pages:
//     http://localhost:8000/db.html?overpass=record:http://localhost:8001
//     http://localhost:8000/compute.html?overpass=record:http://localhost:8001
//     http://localhost:8000/formats.html?overpass=record:http://localhost:8001
//
// The pages send each Overpass query here; the recorder asks a live Overpass mirror (from Node, so no CORS)
// and saves the answer, gzipped, as data/osm/<query hash>.json.gz (or .xml.gz), plus an entry in data/osm/manifest.json.
// Re-record after changing a query or upgrading Autark (queries are built by autk-db).
import {createServer} from "node:http";
import {existsSync, readFileSync, writeFileSync, mkdirSync} from "node:fs";
import {gzipSync, gunzipSync} from "node:zlib";
import {queryKey, isXml} from "../overpass-fallback.js";

const MIRRORS = [
  "https://overpass.openstreetmap.fr/api/interpreter",
  "https://overpass-api.de/api/interpreter",
  "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];
const DIR = new URL("../data/osm/", import.meta.url).pathname;
const MANIFEST = DIR + "manifest.json";
mkdirSync(DIR, {recursive: true});
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};

const inflight = {};
async function fromMirrors(query) {
  const errors = [];
  for (const mirror of MIRRORS) {
    try {
      const r = await fetch(mirror, {
        method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded", "User-Agent": "autark-tutorial-recorder"},
        // The server-side timeout autk-db asks for (60 s) is too short for its biggest query (about 95 s); the key ignores it.
        body: "data=" + encodeURIComponent(query.replace(/\[timeout:\d+\]/, "[timeout:300]")), signal: AbortSignal.timeout(330000),
      });
      const text = await r.text();
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      if (!isXml(query)) { const j = JSON.parse(text); if (j.remark) throw new Error(j.remark); }
      return {text, mirror};
    } catch (e) { errors.push(`${mirror}: ${e.message}`); console.warn("  failed:", errors.at(-1)); }
  }
  throw new Error("every mirror failed:\n" + errors.join("\n"));
}

createServer(async (req, res) => {
  const cors = {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*"};
  if (req.method === "OPTIONS") return res.writeHead(204, cors).end();
  if (req.method !== "POST" || req.url !== "/overpass") return res.writeHead(404, cors).end();
  let query = "";
  for await (const chunk of req) query += chunk;
  try {
    const key = await queryKey(query), file = `${key}.${isXml(query) ? "xml" : "json"}.gz`;
    if (!existsSync(DIR + file)) {
      console.log(`recording ${file}: ${query.replace(/\s+/g, " ").trim().slice(0, 90)}…`);
      inflight[file] ??= fromMirrors(query).finally(() => delete inflight[file]);
      const {text, mirror} = await inflight[file];
      if (existsSync(DIR + file)) return res.writeHead(200, cors).end(gunzipSync(readFileSync(DIR + file)));
      writeFileSync(DIR + file, gzipSync(text));
      manifest[file] = {recorded: new Date().toISOString().slice(0, 10), mirror, bytes: text.length, query: query.replace(/\s+/g, " ").trim().slice(0, 160)};
      writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
      console.log(`  saved ${(text.length / 1e6).toFixed(2)} MB from ${mirror}`);
    } else console.log(`already have ${file}`);
    res.writeHead(200, cors).end(gunzipSync(readFileSync(DIR + file)));
  } catch (e) { console.error(e.message); res.writeHead(502, cors).end(String(e.message)); }
}).listen(8001, () => console.log("recorder listening on http://localhost:8001"));
