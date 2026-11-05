// Copies the pinned Autark 4.1.1 packages (and the few libraries the pages use) from
// node_modules into vendor/, so the tutorial runs without a CDN. Run: npm install && npm run vendor
import {build} from "esbuild";
import {cpSync, mkdirSync, readdirSync, rmSync, writeFileSync} from "node:fs";

const nm = "node_modules";
rmSync("vendor", {recursive: true, force: true});
mkdirSync("vendor/autk", {recursive: true});

// core, map, plot and compute ship as single-file ES modules.
for (const [pkg, file] of [["core", "autk-core.js"], ["map", "autk-map.js"], ["plot", "autk-plot.js"], ["compute", "autk-compute.js"]]) {
  cpSync(`${nm}/@urban-toolkit/autk-${pkg}/dist/${file}`, `vendor/autk/${file}`);
}

// autk-db finds DuckDB's wasm next to its own module when served from localhost, so keep its dist
// folder together. The MVP build is only for browsers without exception-handling support; skipped (40 MB).
const dbDist = `${nm}/@urban-toolkit/autk-db/dist`;
mkdirSync("vendor/autk-db", {recursive: true});
for (const f of readdirSync(dbDist, {withFileTypes: true}).filter(e => e.isFile()).map(e => e.name)) {
  if (f === "node.js" || f.includes("mvp") || f.endsWith(".d.ts") || f.endsWith(".map")) continue;
  cpSync(`${dbDist}/${f}`, `vendor/autk-db/${f}`);
}

// Same shape as the `@urban-toolkit/autk` package: autk.core, autk.map, autk.db, autk.compute, autk.plot.
writeFileSync("vendor/autk/index.js", [
  'import * as core from "./autk-core.js";',
  'import * as map from "./autk-map.js";',
  'import * as db from "../autk-db/browser.js";',
  'import * as compute from "./autk-compute.js";',
  'import * as plot from "./autk-plot.js";',
  "export { core, map, db, compute, plot };",
  "",
].join("\n"));

// Libraries bundled to single ES modules (resolved through the import map in each page).
const bundle = (entry, outfile) => build({entryPoints: [entry], outfile, bundle: true, format: "esm", minify: true, logLevel: "warning"});
await bundle(`${nm}/@duckdb/duckdb-wasm/dist/duckdb-browser.mjs`, "vendor/duckdb-wasm.js");
await bundle(`${nm}/geotiff/dist-module/geotiff.js`, "vendor/geotiff.js");
await bundle(`${nm}/d3/src/index.js`, "vendor/d3.js");
await bundle("scripts/codemirror-entry.mjs", "vendor/codemirror.js");
console.log("vendor/ ready");
