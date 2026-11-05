import { a as e, c as t, d as n, i as r, l as i, o as a, s as o, t as s } from "./globals-CROzfXE5.js";
import * as c from "@duckdb/duckdb-wasm";
//#region src/consts.ts
var l = "autk", u = "EPSG:4326", d = "EPSG:3395", f = .01, p = "__autk_osm_elements", m = "geometry", h = [
	"dog_park",
	"park",
	"playground",
	"recreation_ground"
], g = [
	"wood",
	"grass",
	"forest",
	"orchard",
	"village_green",
	"vineyard",
	"cemetery",
	"meadow"
], _ = [
	"wood",
	"grass",
	"grassland",
	"forest",
	"scrub",
	"heath",
	"meadow"
], v = [
	"water",
	"wetland",
	"strait",
	"spring"
], y = [
	"pond",
	"reservoir",
	"lagoon",
	"stream_pool",
	"lake",
	"pool",
	"canal",
	"river"
], b = [
	"cycleway",
	"elevator",
	"footway",
	"steps",
	"pedestrian",
	"proposed",
	"construction",
	"abandoned",
	"platform",
	"raceway"
], x = [
	"shed",
	"garage",
	"garages",
	"carport",
	"hut",
	"kiosk",
	"toilets",
	"service",
	"transformer_tower",
	"sty",
	"container"
], S = [
	"",
	"part",
	"outline",
	"outer"
];
//#endregion
//#region src/interfaces.ts
function C(e) {
	return e.type !== void 0;
}
function w(e) {
	return e.type !== void 0 && e.type !== "raster";
}
function T(e) {
	return e.type === "raster";
}
//#endregion
//#region src/use-cases/load-osm-overpass/interfaces.ts
function E(e) {
	return "bbox" in e;
}
function D(e) {
	let t = e.bbox;
	if (!Array.isArray(t) || t.length !== 4 || !Array.from(t).every((e) => typeof e == "number" && Number.isFinite(e))) throw Error("queryArea.bbox must be [west, south, east, north] in finite WGS84 degrees.");
	let [n, r, i, a] = t;
	if (n < -180 || i > 180 || r < -90 || a > 90 || n >= i || r >= a) throw Error("queryArea.bbox must be [west, south, east, north] with west < east and south < north within WGS84 limits.");
	return {
		west: n,
		south: r,
		east: i,
		north: a
	};
}
function O(e) {
	if (e === void 0) return [];
	if (!Array.isArray(e) || e.length > 8) throw Error("tagSets must be a list of at most 8 tag sets.");
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		if (typeof e?.name != "string" || !/^[a-z][a-z0-9_]{0,31}$/.test(e.name) || t.has(e.name)) throw Error("A tag set name must be a unique lowercase identifier starting with a letter (at most 32 characters).");
		if (t.add(e.name), ![
			"points",
			"polylines",
			"polygons"
		].includes(e.type)) throw Error(`Tag set "${e.name}" requires type: points, polylines or polygons.`);
		if (!Array.isArray(e.tags) || e.tags.length === 0 || e.tags.length > 64) throw Error(`Tag set "${e.name}" must have 1 to 64 tags.`);
		let n = /* @__PURE__ */ new Map();
		for (let t of e.tags) {
			let { key: r, value: i } = t ?? {};
			if (typeof r != "string" || !/^[A-Za-z0-9][A-Za-z0-9_:.-]{0,254}$/.test(r)) throw Error(`Tag set "${e.name}" has an invalid OSM tag key.`);
			if (i !== void 0 && (typeof i != "string" || i.length === 0 || i.length > 255 || [...i].some((e) => e.charCodeAt(0) < 32 || e.charCodeAt(0) === 127))) throw Error(`Tag set "${e.name}" has an empty, oversized or control-character tag value.`);
			n.set(JSON.stringify([r, i ?? null]), i === void 0 ? { key: r } : {
				key: r,
				value: i
			});
		}
		return {
			name: e.name,
			type: e.type,
			tags: [...n.entries()].sort(([e], [t]) => e < t ? -1 : +(e > t)).map(([, e]) => e)
		};
	});
}
//#endregion
//#region ../node_modules/@turf/helpers/dist/esm/index.js
var k = 6371008.8;
k * 100, k * 100, k * 100, k * 3.28084, k * 3.28084, k * 39.37, k * 39.37, k / 1e3, k / 1e3, k / 1e3, k / 1609.344, k / 1609.344, k * 1e3, k * 1e3, k * 1e3, k / 1852, k / 1852, k * 1.0936, k * 1.0936;
function ee(e, t, n = {}) {
	let r = { type: "Feature" };
	return (n.id === 0 || n.id) && (r.id = n.id), n.bbox && (r.bbox = n.bbox), r.properties = t || {}, r.geometry = e, r;
}
function te(e, t, n = {}) {
	if (!e) throw Error("coordinates is required");
	if (!Array.isArray(e)) throw Error("coordinates must be an Array");
	if (e.length < 2) throw Error("coordinates must be at least 2 numbers long");
	if (!se(e[0]) || !se(e[1])) throw Error("coordinates must contain numbers");
	return ee({
		type: "Point",
		coordinates: e
	}, t, n);
}
function ne(e, t, n = {}) {
	for (let t of e) {
		if (t.length < 4) throw Error("Each LinearRing of a Polygon must have 4 or more Positions.");
		if (t[t.length - 1].length !== t[0].length) throw Error("First and last Position are not equivalent.");
		for (let e = 0; e < t[t.length - 1].length; e++) if (t[t.length - 1][e] !== t[0][e]) throw Error("First and last Position are not equivalent.");
	}
	return ee({
		type: "Polygon",
		coordinates: e
	}, t, n);
}
function re(e, t, n = {}) {
	if (e.length < 2) throw Error("coordinates must be an array of two or more positions");
	return ee({
		type: "LineString",
		coordinates: e
	}, t, n);
}
function ie(e, t = {}) {
	let n = { type: "FeatureCollection" };
	return t.id && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.features = e, n;
}
function ae(e, t, n = {}) {
	return ee({
		type: "MultiLineString",
		coordinates: e
	}, t, n);
}
function oe(e, t, n = {}) {
	return ee({
		type: "MultiPoint",
		coordinates: e
	}, t, n);
}
function se(e) {
	return !isNaN(e) && e !== null && !Array.isArray(e);
}
//#endregion
//#region ../node_modules/@turf/invariant/dist/esm/index.js
function ce(e) {
	if (!e) throw Error("coord is required");
	if (!Array.isArray(e)) {
		if (e.type === "Feature" && e.geometry !== null && e.geometry.type === "Point") return [...e.geometry.coordinates];
		if (e.type === "Point") return [...e.coordinates];
	}
	if (Array.isArray(e) && e.length >= 2 && !Array.isArray(e[0]) && !Array.isArray(e[1])) return [...e];
	throw Error("coord must be GeoJSON Point or an Array of numbers");
}
function le(e) {
	if (Array.isArray(e)) return e;
	if (e.type === "Feature") {
		if (e.geometry !== null) return e.geometry.coordinates;
	} else if (e.coordinates) return e.coordinates;
	throw Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
function ue(e, t, n) {
	if (!e) throw Error("No feature passed");
	if (!n) throw Error(".featureOf() requires a name");
	if (!e || e.type !== "Feature" || !e.geometry) throw Error("Invalid input to " + n + ", Feature with geometry required");
	if (!e.geometry || e.geometry.type !== t) throw Error("Invalid input to " + n + ": must be a " + t + ", given " + e.geometry.type);
}
function de(e) {
	return e.type === "Feature" ? e.geometry : e;
}
function fe(e, t) {
	return e.type === "FeatureCollection" ? "FeatureCollection" : e.type === "GeometryCollection" ? "GeometryCollection" : e.type === "Feature" && e.geometry !== null ? e.geometry.type : e.type;
}
//#endregion
//#region ../node_modules/@turf/meta/dist/esm/index.js
function pe(e, t, n) {
	if (e !== null) for (var r, i, a, o, s, c, l, u = 0, d = 0, f, p = e.type, m = p === "FeatureCollection", h = p === "Feature", g = m ? e.features.length : 1, _ = 0; _ < g; _++) {
		l = m ? e.features[_].geometry : h ? e.geometry : e, f = l ? l.type === "GeometryCollection" : !1, s = f ? l.geometries.length : 1;
		for (var v = 0; v < s; v++) {
			var y = 0, b = 0;
			if (o = f ? l.geometries[v] : l, o !== null) {
				c = o.coordinates;
				var x = o.type;
				switch (u = n && (x === "Polygon" || x === "MultiPolygon") ? 1 : 0, x) {
					case null: break;
					case "Point":
						if (t(c, d, _, y, b) === !1) return !1;
						d++, y++;
						break;
					case "LineString":
					case "MultiPoint":
						for (r = 0; r < c.length; r++) {
							if (t(c[r], d, _, y, b) === !1) return !1;
							d++, x === "MultiPoint" && y++;
						}
						x === "LineString" && y++;
						break;
					case "Polygon":
					case "MultiLineString":
						for (r = 0; r < c.length; r++) {
							for (i = 0; i < c[r].length - u; i++) {
								if (t(c[r][i], d, _, y, b) === !1) return !1;
								d++;
							}
							x === "MultiLineString" && y++, x === "Polygon" && b++;
						}
						x === "Polygon" && y++;
						break;
					case "MultiPolygon":
						for (r = 0; r < c.length; r++) {
							for (b = 0, i = 0; i < c[r].length; i++) {
								for (a = 0; a < c[r][i].length - u; a++) {
									if (t(c[r][i][a], d, _, y, b) === !1) return !1;
									d++;
								}
								b++;
							}
							y++;
						}
						break;
					case "GeometryCollection":
						for (r = 0; r < o.geometries.length; r++) if (pe(o.geometries[r], t, n) === !1) return !1;
						break;
					default: throw Error("Unknown Geometry Type");
				}
			}
		}
	}
}
function me(e, t, n, r) {
	var i = n;
	return pe(e, function(e, r, a, o, s) {
		i = r === 0 && n === void 0 ? e : t(i, e, r, a, o, s);
	}, r), i;
}
function he(e, t) {
	var n, r, i, a, o, s, c, l, u, d, f = 0, p = e.type === "FeatureCollection", m = e.type === "Feature", h = p ? e.features.length : 1;
	for (n = 0; n < h; n++) {
		for (s = p ? e.features[n].geometry : m ? e.geometry : e, l = p ? e.features[n].properties : m ? e.properties : {}, u = p ? e.features[n].bbox : m ? e.bbox : void 0, d = p ? e.features[n].id : m ? e.id : void 0, c = s ? s.type === "GeometryCollection" : !1, o = c ? s.geometries.length : 1, i = 0; i < o; i++) if (a = c ? s.geometries[i] : s, a === null) {
			if (t(null, f, l, u, d) === !1) return !1;
		} else switch (a.type) {
			case "Point":
			case "LineString":
			case "MultiPoint":
			case "Polygon":
			case "MultiLineString":
			case "MultiPolygon":
				if (t(a, f, l, u, d) === !1) return !1;
				break;
			case "GeometryCollection":
				for (r = 0; r < a.geometries.length; r++) if (t(a.geometries[r], f, l, u, d) === !1) return !1;
				break;
			default: throw Error("Unknown Geometry Type");
		}
		f++;
	}
}
function ge(e, t) {
	he(e, function(e, n, r, i, a) {
		var o = e === null ? null : e.type;
		switch (o) {
			case null:
			case "Point":
			case "LineString":
			case "Polygon": return t(ee(e, r, {
				bbox: i,
				id: a
			}), n, 0) !== !1 && void 0;
		}
		var s;
		switch (o) {
			case "MultiPoint":
				s = "Point";
				break;
			case "MultiLineString":
				s = "LineString";
				break;
			case "MultiPolygon": s = "Polygon";
		}
		for (var c = 0; c < e.coordinates.length; c++) {
			var l = e.coordinates[c];
			if (t(ee({
				type: s,
				coordinates: l
			}, r), n, c) === !1) return !1;
		}
	});
}
//#endregion
//#region ../node_modules/@turf/bbox/dist/esm/index.js
function _e(e, t = {}) {
	if (e.bbox != null && !0 !== t.recompute) return e.bbox;
	let n = [
		Infinity,
		Infinity,
		-Infinity,
		-Infinity
	];
	return pe(e, (e) => {
		n[0] > e[0] && (n[0] = e[0]), n[1] > e[1] && (n[1] = e[1]), n[2] < e[0] && (n[2] = e[0]), n[3] < e[1] && (n[3] = e[1]);
	}), n;
}
//#endregion
//#region ../node_modules/@turf/bbox-polygon/dist/esm/index.js
function ve(e, t = {}) {
	let n = Number(e[0]), r = Number(e[1]), i = Number(e[2]), a = Number(e[3]);
	if (e.length === 6) throw Error("@turf/bbox-polygon does not support BBox with 6 positions");
	let o = [n, r];
	return ne([[
		o,
		[i, r],
		[i, a],
		[n, a],
		o
	]], t.properties, {
		bbox: e,
		id: t.id
	});
}
//#endregion
//#region ../node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/util.js
var A = 11102230246251565e-32, ye = 134217729, be = 3.000000000000001 * A;
function xe(e, t, n, r, i) {
	let a, o, s, c, l = t[0], u = r[0], d = 0, f = 0;
	u > l == u > -l ? (a = l, l = t[++d]) : (a = u, u = r[++f]);
	let p = 0;
	if (d < e && f < n) for (u > l == u > -l ? (o = l + a, s = a - (o - l), l = t[++d]) : (o = u + a, s = a - (o - u), u = r[++f]), a = o, s !== 0 && (i[p++] = s); d < e && f < n;) u > l == u > -l ? (o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d]) : (o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f]), a = o, s !== 0 && (i[p++] = s);
	for (; d < e;) o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d], a = o, s !== 0 && (i[p++] = s);
	for (; f < n;) o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f], a = o, s !== 0 && (i[p++] = s);
	return (a !== 0 || p === 0) && (i[p++] = a), p;
}
function Se(e, t) {
	let n = t[0];
	for (let r = 1; r < e; r++) n += t[r];
	return n;
}
function j(e) {
	return new Float64Array(e);
}
//#endregion
//#region ../node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/orient2d.js
var Ce = (3 + 16 * A) * A, we = (2 + 12 * A) * A, Te = (9 + 64 * A) * A * A, Ee = j(4), De = j(8), Oe = j(12), ke = j(16), Ae = j(4);
function je(e, t, n, r, i, a, o) {
	let s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e - i, E = n - i, D = t - a, O = r - a;
	b = T * O, f = ye * T, p = f - (f - T), m = T - p, f = ye * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = D * E, f = ye * D, p = f - (f - D), m = D - p, f = ye * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Ee[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Ee[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Ee[2] = v - (w - d) + (_ - d), Ee[3] = w;
	let k = Se(4, Ee), ee = we * o;
	if (k >= ee || -k >= ee || (d = e - T, s = e - (T + d) + (d - i), d = n - E, l = n - (E + d) + (d - i), d = t - D, c = t - (D + d) + (d - a), d = r - O, u = r - (O + d) + (d - a), s === 0 && c === 0 && l === 0 && u === 0) || (ee = Te * o + be * Math.abs(k), k += T * u + O * s - (D * l + E * c), k >= ee || -k >= ee)) return k;
	b = s * O, f = ye * s, p = f - (f - s), m = s - p, f = ye * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = c * E, f = ye * c, p = f - (f - c), m = c - p, f = ye * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Ae[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Ae[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Ae[2] = v - (w - d) + (_ - d), Ae[3] = w;
	let te = xe(4, Ee, 4, Ae, De);
	b = T * u, f = ye * T, p = f - (f - T), m = T - p, f = ye * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = D * l, f = ye * D, p = f - (f - D), m = D - p, f = ye * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Ae[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Ae[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Ae[2] = v - (w - d) + (_ - d), Ae[3] = w;
	let ne = xe(te, De, 4, Ae, Oe);
	return b = s * u, f = ye * s, p = f - (f - s), m = s - p, f = ye * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = c * l, f = ye * c, p = f - (f - c), m = c - p, f = ye * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Ae[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Ae[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Ae[2] = v - (w - d) + (_ - d), Ae[3] = w, ke[xe(ne, Oe, 4, Ae, ke) - 1];
}
function Me(e, t, n, r, i, a) {
	let o = (t - a) * (n - i), s = (e - i) * (r - a), c = o - s, l = Math.abs(o + s);
	return Math.abs(c) >= Ce * l ? c : -je(e, t, n, r, i, a, l);
}
(7 + 56 * A) * A, (3 + 28 * A) * A, (26 + 288 * A) * A * A, j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(8), j(8), j(8), j(4), j(8), j(8), j(16), j(12), j(192), j(192), (10 + 96 * A) * A, (4 + 48 * A) * A, (44 + 576 * A) * A * A, j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(8), j(8), j(8), j(8), j(8), j(8), j(8), j(8), j(8), j(4), j(4), j(4), j(8), j(16), j(16), j(16), j(32), j(32), j(48), j(64), j(1152), j(1152), (16 + 224 * A) * A, (5 + 72 * A) * A, (71 + 1408 * A) * A * A, j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(4), j(24), j(24), j(24), j(24), j(24), j(24), j(24), j(24), j(24), j(24), j(1152), j(1152), j(1152), j(1152), j(1152), j(2304), j(2304), j(3456), j(5760), j(8), j(8), j(8), j(16), j(24), j(48), j(48), j(96), j(192), j(384), j(384), j(384), j(768), j(96), j(96), j(96), j(1152);
//#endregion
//#region ../node_modules/point-in-polygon-hao/dist/esm/index.js
function Ne(e, t) {
	var n, r, i = 0, a, o, s, c, l, u, d, f = e[0], p = e[1], m = t.length;
	for (n = 0; n < m; n++) {
		r = 0;
		var h = t[n], g = h.length - 1;
		if (u = h[0], u[0] !== h[g][0] && u[1] !== h[g][1]) throw Error("First and last coordinates in a ring must be the same");
		for (o = u[0] - f, s = u[1] - p; r < g; r++) {
			if (d = h[r + 1], c = d[0] - f, l = d[1] - p, s === 0 && l === 0) {
				if (c <= 0 && o >= 0 || o <= 0 && c >= 0) return 0;
			} else if (l >= 0 && s <= 0 || l <= 0 && s >= 0) {
				if (a = Me(o, c, s, l, 0, 0), a === 0) return 0;
				(a > 0 && l > 0 && s <= 0 || a < 0 && l <= 0 && s > 0) && i++;
			}
			u = d, s = l, o = c;
		}
	}
	return i % 2 != 0;
}
//#endregion
//#region ../node_modules/@turf/boolean-point-in-polygon/dist/esm/index.js
function Pe(e, t, n = {}) {
	if (!e) throw Error("point is required");
	if (!t) throw Error("polygon is required");
	let r = ce(e), i = de(t), a = i.type, o = t.bbox, s = i.coordinates;
	if (o && Fe(r, o) === !1) return !1;
	a === "Polygon" && (s = [s]);
	for (var c = 0; c < s.length; ++c) {
		let e = Ne(r, s[c]);
		if (e === 0 && !n.ignoreBoundary || e) return !0;
	}
	return !1;
}
function Fe(e, t) {
	return t[0] <= e[0] && t[1] <= e[1] && t[2] >= e[0] && t[3] >= e[1];
}
//#endregion
//#region ../node_modules/@turf/boolean-point-on-line/dist/esm/index.js
function Ie(e, t, n = {}) {
	let r = ce(e), i = le(t);
	for (let e = 0; e < i.length - 1; e++) {
		let t = !1;
		if (n.ignoreEndVertices && (e === 0 && (t = "start"), e === i.length - 2 && (t = "end"), e === 0 && e + 1 === i.length - 1 && (t = "both")), Le(i[e], i[e + 1], r, t, n.epsilon === void 0 ? null : n.epsilon)) return !0;
	}
	return !1;
}
function Le(e, t, n, r, i) {
	let a = n[0], o = n[1], s = e[0], c = e[1], l = t[0], u = t[1], d = n[0] - s, f = n[1] - c, p = l - s, m = u - c, h = d * m - f * p;
	if (i !== null) {
		if (Math.abs(h) > i) return !1;
	} else if (h !== 0) return !1;
	return Math.abs(p) === Math.abs(m) && Math.abs(p) === 0 ? !r && n[0] === e[0] && n[1] === e[1] : r ? r === "start" ? Math.abs(p) >= Math.abs(m) ? p > 0 ? s < a && a <= l : l <= a && a < s : m > 0 ? c < o && o <= u : u <= o && o < c : r === "end" ? Math.abs(p) >= Math.abs(m) ? p > 0 ? s <= a && a < l : l < a && a <= s : m > 0 ? c <= o && o < u : u < o && o <= c : r === "both" ? Math.abs(p) >= Math.abs(m) ? p > 0 ? s < a && a < l : l < a && a < s : m > 0 ? c < o && o < u : u < o && o < c : !1 : Math.abs(p) >= Math.abs(m) ? p > 0 ? s <= a && a <= l : l <= a && a <= s : m > 0 ? c <= o && o <= u : u <= o && o <= c;
}
//#endregion
//#region ../node_modules/tinyqueue/index.js
function Re(e, t) {
	return e < t ? -1 : +(e > t);
}
var ze, Be = n((() => {
	ze = class {
		constructor(e = [], t = Re) {
			if (this.data = e, this.length = this.data.length, this.compare = t, this.length > 0) for (let e = (this.length >> 1) - 1; e >= 0; e--) this._down(e);
		}
		push(e) {
			this.data.push(e), this.length++, this._up(this.length - 1);
		}
		pop() {
			if (this.length === 0) return;
			let e = this.data[0], t = this.data.pop();
			return this.length--, this.length > 0 && (this.data[0] = t, this._down(0)), e;
		}
		peek() {
			return this.data[0];
		}
		_up(e) {
			let { data: t, compare: n } = this, r = t[e];
			for (; e > 0;) {
				let i = e - 1 >> 1, a = t[i];
				if (n(r, a) >= 0) break;
				t[e] = a, e = i;
			}
			t[e] = r;
		}
		_down(e) {
			let { data: t, compare: n } = this, r = this.length >> 1, i = t[e];
			for (; e < r;) {
				let r = (e << 1) + 1, a = t[r], o = r + 1;
				if (o < this.length && n(t[o], a) < 0 && (r = o, a = t[o]), n(a, i) >= 0) break;
				t[e] = a, e = r;
			}
			t[e] = i;
		}
	};
})), M = 11102230246251565e-32, Ve = 134217729, He = 3.000000000000001 * M;
function Ue(e, t, n, r, i) {
	let a, o, s, c, l = t[0], u = r[0], d = 0, f = 0;
	u > l == u > -l ? (a = l, l = t[++d]) : (a = u, u = r[++f]);
	let p = 0;
	if (d < e && f < n) for (u > l == u > -l ? (o = l + a, s = a - (o - l), l = t[++d]) : (o = u + a, s = a - (o - u), u = r[++f]), a = o, s !== 0 && (i[p++] = s); d < e && f < n;) u > l == u > -l ? (o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d]) : (o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f]), a = o, s !== 0 && (i[p++] = s);
	for (; d < e;) o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d], a = o, s !== 0 && (i[p++] = s);
	for (; f < n;) o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f], a = o, s !== 0 && (i[p++] = s);
	return (a !== 0 || p === 0) && (i[p++] = a), p;
}
function We(e, t) {
	let n = t[0];
	for (let r = 1; r < e; r++) n += t[r];
	return n;
}
function N(e) {
	return new Float64Array(e);
}
//#endregion
//#region ../node_modules/robust-predicates/esm/orient2d.js
var Ge = (3 + 16 * M) * M, Ke = (2 + 12 * M) * M, qe = (9 + 64 * M) * M * M, Je = N(4), Ye = N(8), Xe = N(12), Ze = N(16), Qe = N(4);
function $e(e, t, n, r, i, a, o) {
	let s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e - i, E = n - i, D = t - a, O = r - a;
	b = T * O, f = Ve * T, p = f - (f - T), m = T - p, f = Ve * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = D * E, f = Ve * D, p = f - (f - D), m = D - p, f = Ve * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Je[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Je[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Je[2] = v - (w - d) + (_ - d), Je[3] = w;
	let k = We(4, Je), ee = Ke * o;
	if (k >= ee || -k >= ee || (d = e - T, s = e - (T + d) + (d - i), d = n - E, l = n - (E + d) + (d - i), d = t - D, c = t - (D + d) + (d - a), d = r - O, u = r - (O + d) + (d - a), s === 0 && c === 0 && l === 0 && u === 0) || (ee = qe * o + He * Math.abs(k), k += T * u + O * s - (D * l + E * c), k >= ee || -k >= ee)) return k;
	b = s * O, f = Ve * s, p = f - (f - s), m = s - p, f = Ve * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = c * E, f = Ve * c, p = f - (f - c), m = c - p, f = Ve * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Qe[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Qe[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Qe[2] = v - (w - d) + (_ - d), Qe[3] = w;
	let te = Ue(4, Je, 4, Qe, Ye);
	b = T * u, f = Ve * T, p = f - (f - T), m = T - p, f = Ve * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = D * l, f = Ve * D, p = f - (f - D), m = D - p, f = Ve * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Qe[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Qe[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Qe[2] = v - (w - d) + (_ - d), Qe[3] = w;
	let ne = Ue(te, Ye, 4, Qe, Xe);
	return b = s * u, f = Ve * s, p = f - (f - s), m = s - p, f = Ve * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = c * l, f = Ve * c, p = f - (f - c), m = c - p, f = Ve * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Qe[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Qe[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Qe[2] = v - (w - d) + (_ - d), Qe[3] = w, Ze[Ue(ne, Xe, 4, Qe, Ze) - 1];
}
function et(e, t, n, r, i, a) {
	let o = (t - a) * (n - i), s = (e - i) * (r - a), c = o - s;
	if (o === 0 || s === 0 || o > 0 != s > 0) return c;
	let l = Math.abs(o + s);
	return Math.abs(c) >= Ge * l ? c : -$e(e, t, n, r, i, a, l);
}
//#endregion
//#region ../node_modules/@turf/line-intersect/dist/esm/index.js
(7 + 56 * M) * M, (3 + 28 * M) * M, (26 + 288 * M) * M * M, N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(8), N(8), N(8), N(4), N(8), N(8), N(8), N(12), N(192), N(192), (10 + 96 * M) * M, (4 + 48 * M) * M, (44 + 576 * M) * M * M, N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(8), N(8), N(8), N(8), N(8), N(8), N(8), N(8), N(8), N(4), N(4), N(4), N(8), N(16), N(16), N(16), N(32), N(32), N(48), N(64), N(1152), N(1152), (16 + 224 * M) * M, (5 + 72 * M) * M, (71 + 1408 * M) * M * M, N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(4), N(24), N(24), N(24), N(24), N(24), N(24), N(24), N(24), N(24), N(24), N(1152), N(1152), N(1152), N(1152), N(1152), N(2304), N(2304), N(3456), N(5760), N(8), N(8), N(8), N(16), N(24), N(48), N(48), N(96), N(192), N(384), N(384), N(384), N(768), N(96), N(96), N(96), N(1152), Be();
function tt(e, t) {
	let n = new ze([], nt);
	return it(e, n), ut(n, t);
}
function nt(e, t) {
	return e.p.x > t.p.x ? 1 : e.p.x < t.p.x || e.p.x === t.p.x && (e.featureId !== t.featureId || e.ringId !== t.ringId) && e.isLeftEndpoint && !t.isLeftEndpoint ? -1 : e.p.y === t.p.y || e.p.y > t.p.y ? 1 : -1;
}
function rt(e, t) {
	return e.rightSweepEvent.p.x > t.rightSweepEvent.p.x ? 1 : e.rightSweepEvent.p.x < t.rightSweepEvent.p.x ? -1 : e.rightSweepEvent.p.y === t.rightSweepEvent.p.y || e.rightSweepEvent.p.y < t.rightSweepEvent.p.y ? 1 : -1;
}
function it(e, t) {
	if (e.type === "FeatureCollection") {
		let n = e.features;
		for (let e = 0; e < n.length; e++) ct(n[e], t);
	} else ct(e, t);
}
var at = 0, ot = 0, st = 0;
function ct(e, t) {
	let n = e.type === "Feature" ? e.geometry : e, r = n.coordinates;
	(n.type === "Polygon" || n.type === "MultiLineString") && (r = [r]), n.type === "LineString" && (r = [[r]]);
	for (let e = 0; e < r.length; e++) for (let n = 0; n < r[e].length; n++) {
		let i = r[e][n][0], a = null;
		ot += 1;
		for (let o = 0; o < r[e][n].length - 1; o++) {
			a = r[e][n][o + 1];
			let s = new lt(i, at, ot, st), c = new lt(a, at, ot, st + 1);
			s.otherEvent = c, c.otherEvent = s, nt(s, c) > 0 ? (c.isLeftEndpoint = !0, s.isLeftEndpoint = !1) : (s.isLeftEndpoint = !0, c.isLeftEndpoint = !1), t.push(s), t.push(c), i = a, st += 1;
		}
	}
	at += 1;
}
var lt = class {
	constructor(e, t, n, r) {
		this.p = {
			x: e[0],
			y: e[1]
		}, this.featureId = t, this.ringId = n, this.eventId = r, this.otherEvent = null, this.isLeftEndpoint = null;
	}
	isSamePoint(e) {
		return this.p.x === e.p.x && this.p.y === e.p.y;
	}
	asNewXY() {
		return [this.p.x, this.p.y];
	}
};
function ut(e, t = !1) {
	let n = [], r = new ze([], rt);
	for (; e.length;) {
		let i = e.pop();
		if (i.isLeftEndpoint) {
			let e = new dt(i);
			for (let a = 0; a < r.data.length; a++) {
				let o = r.data[a];
				if (t && o.leftSweepEvent.featureId === i.featureId) continue;
				let s = ft(e, o);
				s !== !1 && n.push(s);
			}
			r.push(e);
		} else i.isLeftEndpoint === !1 && r.pop();
	}
	return n;
}
var dt = class {
	constructor(e) {
		this.leftSweepEvent = e, this.rightSweepEvent = e.otherEvent;
	}
};
function ft(e, t) {
	if (e === null || t === null) return !1;
	let n = e.leftSweepEvent.p.x, r = e.leftSweepEvent.p.y, i = e.rightSweepEvent.p.x, a = e.rightSweepEvent.p.y, o = t.leftSweepEvent.p.x, s = t.leftSweepEvent.p.y, c = t.rightSweepEvent.p.x, l = t.rightSweepEvent.p.y, u = et(n, r, i, a, o, s), d = et(n, r, i, a, c, l);
	if (u > 0 && d > 0 || u < 0 && d < 0) return !1;
	if (e.leftSweepEvent.ringId === t.leftSweepEvent.ringId) {
		if (e.rightSweepEvent.isSamePoint(t.leftSweepEvent) || e.rightSweepEvent.isSamePoint(t.rightSweepEvent) || e.leftSweepEvent.isSamePoint(t.leftSweepEvent) || e.leftSweepEvent.isSamePoint(t.rightSweepEvent)) return !1;
	} else {
		if (e.rightSweepEvent.isSamePoint(t.leftSweepEvent)) return t.leftSweepEvent.asNewXY();
		if (e.rightSweepEvent.isSamePoint(t.rightSweepEvent)) return t.rightSweepEvent.asNewXY();
		if (e.leftSweepEvent.isSamePoint(t.leftSweepEvent)) return t.leftSweepEvent.asNewXY();
		if (e.leftSweepEvent.isSamePoint(t.rightSweepEvent)) return t.rightSweepEvent.asNewXY();
	}
	let f = (l - s) * (i - n) - (c - o) * (a - r), p = (c - o) * (r - s) - (l - s) * (n - o), m = (i - n) * (r - s) - (a - r) * (n - o);
	if (f === 0) return !1;
	let h = p / f, g = m / f;
	return h >= 0 && h <= 1 && g >= 0 && g <= 1 && [n + h * (i - n), r + h * (a - r)];
}
function pt(e, t, n = {}) {
	let { removeDuplicates: r = !0, ignoreSelfIntersections: i = !0 } = n, a = [];
	e.type === "FeatureCollection" ? a = a.concat(e.features) : e.type === "Feature" ? a.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && a.push(ee(e)), t.type === "FeatureCollection" ? a = a.concat(t.features) : t.type === "Feature" ? a.push(t) : (t.type === "LineString" || t.type === "Polygon" || t.type === "MultiLineString" || t.type === "MultiPolygon") && a.push(ee(t));
	let o = tt(ie(a), i), s = [];
	if (r) {
		let e = {};
		o.forEach((t) => {
			let n = t.join(",");
			e[n] || (e[n] = !0, s.push(t));
		});
	} else s = o;
	return ie(s.map((e) => te(e)));
}
//#endregion
//#region ../node_modules/@turf/polygon-to-line/dist/esm/index.js
function mt(e, t = {}) {
	let n = de(e);
	switch (!t.properties && e.type === "Feature" && (t.properties = e.properties), n.type) {
		case "Polygon": return ht(n, t);
		case "MultiPolygon": return gt(n, t);
		default: throw Error("invalid poly");
	}
}
function ht(e, t = {}) {
	let n = de(e).coordinates;
	return _t(n, t.properties ? t.properties : e.type === "Feature" ? e.properties : {});
}
function gt(e, t = {}) {
	let n = de(e).coordinates, r = t.properties ? t.properties : e.type === "Feature" ? e.properties : {}, i = [];
	return n.forEach((e) => {
		i.push(_t(e, r));
	}), ie(i);
}
function _t(e, t) {
	return e.length > 1 ? ae(e, t) : re(e[0], t);
}
//#endregion
//#region ../node_modules/geojson-equality-ts/dist/esm/index.js
var vt = Object.defineProperty, yt = (e, t) => vt(e, "name", {
	value: t,
	configurable: !0
}), bt = class {
	constructor(e) {
		this.direction = !1, this.compareProperties = !0, this.precision = 10 ** -(e?.precision ?? 17), this.direction = e?.direction ?? !1, this.compareProperties = e?.compareProperties ?? !0;
	}
	compare(e, t) {
		if (e.type !== t.type || !St(e, t)) return !1;
		switch (e.type) {
			case "Point": return this.compareCoord(e.coordinates, t.coordinates);
			case "LineString": return this.compareLine(e.coordinates, t.coordinates);
			case "Polygon": return this.comparePolygon(e, t);
			case "GeometryCollection": return this.compareGeometryCollection(e, t);
			case "Feature": return this.compareFeature(e, t);
			case "FeatureCollection": return this.compareFeatureCollection(e, t);
			default: if (e.type.startsWith("Multi")) {
				let n = Ct(e), r = Ct(t);
				return n.every((e) => r.some((t) => this.compare(e, t)));
			}
		}
		return !1;
	}
	compareCoord(e, t) {
		return e.length === t.length && e.every((e, n) => Math.abs(e - t[n]) < this.precision);
	}
	compareLine(e, t, n = 0, r = !1) {
		if (!St(e, t)) return !1;
		let i = e, a = t;
		if (r && !this.compareCoord(i[0], a[0])) {
			let e = this.fixStartIndex(a, i);
			if (e) a = e;
			else return !1;
		}
		let o = this.compareCoord(i[n], a[n]);
		return this.direction || o ? this.comparePath(i, a) : this.compareCoord(i[n], a[a.length - (1 + n)]) ? this.comparePath(i.slice().reverse(), a) : !1;
	}
	fixStartIndex(e, t) {
		let n, r = -1;
		for (let n = 0; n < e.length; n++) if (this.compareCoord(e[n], t[0])) {
			r = n;
			break;
		}
		return r >= 0 && (n = [].concat(e.slice(r, e.length), e.slice(1, r + 1))), n;
	}
	comparePath(e, t) {
		return e.every((e, n) => this.compareCoord(e, t[n]));
	}
	comparePolygon(e, t) {
		if (this.compareLine(e.coordinates[0], t.coordinates[0], 1, !0)) {
			let n = e.coordinates.slice(1, e.coordinates.length), r = t.coordinates.slice(1, t.coordinates.length);
			return n.every((e) => r.some((t) => this.compareLine(e, t, 1, !0)));
		}
		return !1;
	}
	compareGeometryCollection(e, t) {
		return St(e.geometries, t.geometries) && this.compareBBox(e, t) && e.geometries.every((e, n) => this.compare(e, t.geometries[n]));
	}
	compareFeature(e, t) {
		return e.id === t.id && (!this.compareProperties || Tt(e.properties, t.properties)) && this.compareBBox(e, t) && this.compare(e.geometry, t.geometry);
	}
	compareFeatureCollection(e, t) {
		return St(e.features, t.features) && this.compareBBox(e, t) && e.features.every((e, n) => this.compare(e, t.features[n]));
	}
	compareBBox(e, t) {
		return !e.bbox && !t.bbox || (e.bbox && t.bbox ? this.compareCoord(e.bbox, t.bbox) : !1);
	}
};
yt(bt, "GeojsonEquality");
var xt = bt;
function St(e, t) {
	return e.coordinates ? e.coordinates.length === t.coordinates.length : e.length === t.length;
}
yt(St, "sameLength");
function Ct(e) {
	return e.coordinates.map((t) => ({
		type: e.type.replace("Multi", ""),
		coordinates: t
	}));
}
yt(Ct, "explode");
function wt(e, t, n) {
	return new xt(n).compare(e, t);
}
yt(wt, "geojsonEquality");
function Tt(e, t) {
	if (e === null && t === null) return !0;
	if (e === null || t === null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (var i of n) {
		let n = e[i], r = t[i], a = Et(n) && Et(r);
		if (a && !Tt(n, r) || !a && n !== r) return !1;
	}
	return !0;
}
yt(Tt, "equal");
var Et = /* @__PURE__ */ yt((e) => typeof e == "object" && !!e, "isObject");
//#endregion
//#region ../node_modules/@turf/clean-coords/dist/esm/index.js
function Dt(e, t = {}) {
	var n = typeof t == "object" ? t.mutate : t;
	if (!e) throw Error("geojson is required");
	var r = fe(e), i = [];
	switch (r) {
		case "LineString":
			i = Ot(e, r);
			break;
		case "MultiLineString":
		case "Polygon":
			le(e).forEach(function(e) {
				i.push(Ot(e, r));
			});
			break;
		case "MultiPolygon":
			le(e).forEach(function(e) {
				var t = [];
				e.forEach(function(e) {
					t.push(Ot(e, r));
				}), i.push(t);
			});
			break;
		case "Point": return e;
		case "MultiPoint":
			var a = {};
			le(e).forEach(function(e) {
				var t = e.join("-");
				Object.prototype.hasOwnProperty.call(a, t) || (i.push(e), a[t] = !0);
			});
			break;
		default: throw Error(r + " geometry not supported");
	}
	return e.coordinates ? n === !0 ? (e.coordinates = i, e) : {
		type: r,
		coordinates: i
	} : n === !0 ? (e.geometry.coordinates = i, e) : ee({
		type: r,
		coordinates: i
	}, e.properties, {
		bbox: e.bbox,
		id: e.id
	});
}
function Ot(e, t) {
	let n = le(e);
	if (n.length === 2 && !kt(n[0], n[1])) return n;
	let r = [], i = 0, a = 1, o = 2;
	for (r.push(n[i]); o < n.length;) Ie(n[a], re([n[i], n[o]])) ? a = o : (r.push(n[a]), i = a, a++, o = a), o++;
	if (r.push(n[a]), t === "Polygon" || t === "MultiPolygon") {
		if (Ie(r[0], re([r[1], r[r.length - 2]])) && (r.shift(), r.pop(), r.push(r[0])), r.length < 4) throw Error("invalid polygon, fewer than 4 points");
		if (!kt(r[0], r[r.length - 1])) throw Error("invalid polygon, first and last points not equal");
	}
	return r;
}
function kt(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
//#endregion
//#region ../node_modules/@turf/boolean-equal/dist/esm/index.js
function At(e, t, n = {}) {
	let r = n.precision;
	if (r = r == null || isNaN(r) ? 6 : r, typeof r != "number" || !(r >= 0)) throw Error("precision must be a positive number");
	return de(e).type === de(t).type && wt(Dt(e), Dt(t), { precision: r });
}
//#endregion
//#region ../node_modules/@turf/boolean-crosses/dist/esm/index.js
function jt(e, t) {
	var n = de(e), r = de(t), i = n.type, a = r.type;
	switch (i) {
		case "MultiPoint": switch (a) {
			case "LineString": return Mt(n, r);
			case "Polygon": return Ft(n, r);
			default: throw Error("feature2 " + a + " geometry not supported");
		}
		case "LineString": switch (a) {
			case "MultiPoint": return Mt(r, n);
			case "LineString": return Nt(n, r);
			case "Polygon": return Pt(n, r);
			default: throw Error("feature2 " + a + " geometry not supported");
		}
		case "Polygon": switch (a) {
			case "MultiPoint": return Ft(r, n);
			case "LineString": return Pt(r, n);
			default: throw Error("feature2 " + a + " geometry not supported");
		}
		default: throw Error("feature1 " + i + " geometry not supported");
	}
}
function Mt(e, t) {
	for (var n = !1, r = !1, i = e.coordinates.length, a = 0; a < i && (!n || !r); a++) {
		for (var o = !1, s = 0; s < t.coordinates.length - 1; s++) {
			var c = !0;
			if ((s === 0 || s === t.coordinates.length - 2) && (c = !1), It(t.coordinates[s], t.coordinates[s + 1], e.coordinates[a], c)) {
				o = !0;
				break;
			}
		}
		o ? n = !0 : r = !0;
	}
	return n && r;
}
function Nt(e, t) {
	let n = pt(e, t);
	if (n.features.length === 0) return !1;
	for (let r of n.features) if (!At(r, te(e.coordinates[0])) && !At(r, te(e.coordinates[e.coordinates.length - 1])) && !At(r, te(t.coordinates[0])) && !At(r, te(t.coordinates[t.coordinates.length - 1]))) return !0;
	return !1;
}
function Pt(e, t) {
	return pt(e, mt(t)).features.length > 0;
}
function Ft(e, t) {
	var n = !1, r = !1, i = e.coordinates.length;
	for (let a = 0; a < i && (!n || !r); a++) Pe(te(e.coordinates[a]), t) ? n = !0 : r = !0;
	return r && n;
}
function It(e, t, n, r) {
	var i = n[0] - e[0], a = n[1] - e[1], o = t[0] - e[0], s = t[1] - e[1];
	return i * s - a * o === 0 ? r ? Math.abs(o) >= Math.abs(s) ? o > 0 ? e[0] <= n[0] && n[0] <= t[0] : t[0] <= n[0] && n[0] <= e[0] : s > 0 ? e[1] <= n[1] && n[1] <= t[1] : t[1] <= n[1] && n[1] <= e[1] : Math.abs(o) >= Math.abs(s) ? o > 0 ? e[0] < n[0] && n[0] < t[0] : t[0] < n[0] && n[0] < e[0] : s > 0 ? e[1] < n[1] && n[1] < t[1] : t[1] < n[1] && n[1] < e[1] : !1;
}
//#endregion
//#region ../node_modules/@turf/boolean-disjoint/dist/esm/index.js
function Lt(e, t, { ignoreSelfIntersections: n = !0 } = { ignoreSelfIntersections: !0 }) {
	let r = !0;
	return ge(e, (e) => {
		ge(t, (t) => {
			if (r === !1) return !1;
			r = Rt(e.geometry, t.geometry, n);
		});
	}), r;
}
function Rt(e, t, n) {
	switch (e.type) {
		case "Point":
			switch (t.type) {
				case "Point": return !Wt(e.coordinates, t.coordinates);
				case "LineString": return !zt(t, e);
				case "Polygon": return !Pe(e, t);
			}
			break;
		case "LineString":
			switch (t.type) {
				case "Point": return !zt(e, t);
				case "LineString": return !Bt(e, t, n);
				case "Polygon": return !Vt(t, e, n);
			}
			break;
		case "Polygon": switch (t.type) {
			case "Point": return !Pe(t, e);
			case "LineString": return !Vt(e, t, n);
			case "Polygon": return !Ht(t, e, n);
		}
	}
	return !1;
}
function zt(e, t) {
	for (let n = 0; n < e.coordinates.length - 1; n++) if (Ut(e.coordinates[n], e.coordinates[n + 1], t.coordinates)) return !0;
	return !1;
}
function Bt(e, t, n) {
	if (pt(e, t, { ignoreSelfIntersections: n }).features.length > 0) return !0;
	for (let n of e.coordinates) if (zt(t, {
		type: "Point",
		coordinates: n
	})) return !0;
	for (let n of t.coordinates) if (zt(e, {
		type: "Point",
		coordinates: n
	})) return !0;
	return !1;
}
function Vt(e, t, n) {
	for (let n of t.coordinates) if (Pe(n, e)) return !0;
	return pt(t, mt(e), { ignoreSelfIntersections: n }).features.length > 0;
}
function Ht(e, t, n) {
	for (let n of e.coordinates[0]) if (Pe(n, t)) return !0;
	for (let n of t.coordinates[0]) if (Pe(n, e)) return !0;
	return pt(mt(e), mt(t), { ignoreSelfIntersections: n }).features.length > 0;
}
function Ut(e, t, n) {
	let r = n[0] - e[0], i = n[1] - e[1], a = t[0] - e[0], o = t[1] - e[1];
	return r * o - i * a === 0 ? Math.abs(a) >= Math.abs(o) ? a > 0 ? e[0] <= n[0] && n[0] <= t[0] : t[0] <= n[0] && n[0] <= e[0] : o > 0 ? e[1] <= n[1] && n[1] <= t[1] : t[1] <= n[1] && n[1] <= e[1] : !1;
}
function Wt(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
//#endregion
//#region ../node_modules/@turf/boolean-intersects/dist/esm/index.js
function Gt(e, t, { ignoreSelfIntersections: n = !0 } = {}) {
	return !Lt(e, t, { ignoreSelfIntersections: n });
}
//#endregion
//#region ../node_modules/@turf/boolean-valid/dist/esm/index.js
var Kt = /* @__PURE__ */ new Set([
	"Point",
	"LineString",
	"MultiLineString",
	"MultiPoint",
	"Polygon",
	"MultiPolygon"
]);
function qt(e) {
	if (!e.type) return !1;
	let t = de(e), n = t.type, r = t.coordinates;
	switch (n) {
		case "Point": return r.length > 1;
		case "MultiPoint":
			for (var i = 0; i < r.length; i++) if (r[i].length < 2) return !1;
			return !0;
		case "LineString":
			if (r.length < 2) return !1;
			for (var i = 0; i < r.length; i++) if (r[i].length < 2) return !1;
			return !0;
		case "MultiLineString":
			if (r.length < 1) return !1;
			for (var i = 0; i < r.length; i++) if (r[i].length < 2) return !1;
			return !0;
		case "Polygon":
			for (var i = 0; i < t.coordinates.length; i++) if (r[i].length < 4 || !Jt(r[i]) || Yt(r[i]) || i > 0 && pt(ne([r[0]]), ne([r[i]])).features.length > 1) return !1;
			return !0;
		case "MultiPolygon":
			for (var i = 0; i < t.coordinates.length; i++) for (var a = t.coordinates[i], o = 0; o < a.length; o++) if (a[o].length < 4 || !Jt(a[o]) || Yt(a[o]) || o === 0 && !Xt(a, t.coordinates, i) || o > 0 && pt(ne([a[0]]), ne([a[o]])).features.length > 1) return !1;
			return !0;
		case "GeometryCollection": return t.geometries ? Array.isArray(t.geometries) && t.geometries.length > 0 && t.geometries.every((e) => Kt.has(e.type) && qt(e)) : !1;
		default: return !1;
	}
}
function Jt(e) {
	return e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1];
}
function Yt(e) {
	for (var t = 0; t < e.length - 1; t++) for (var n = e[t], r = t + 1; r < e.length - 2; r++) if (Ie(n, re([e[r], e[r + 1]]))) return !0;
	return !1;
}
function Xt(e, t, n) {
	for (var r = ne(e), i = n + 1; i < t.length; i++) if (!Lt(r, ne(t[i])) && jt(r, re(t[i][0]))) return !1;
	return !0;
}
//#endregion
//#region ../node_modules/@turf/envelope/dist/esm/index.js
function Zt(e) {
	return ve(_e(e));
}
//#endregion
//#region ../node_modules/@turf/polygonize/dist/esm/index.js
function Qt(e) {
	return (e > 0) - (e < 0) || +e;
}
function $t(e, t, n) {
	let r = t[0] - e[0], i = t[1] - e[1], a = n[0] - t[0];
	return Qt(r * (n[1] - t[1]) - a * i);
}
function en(e, t) {
	let n = e.geometry.coordinates[0].map((e) => e[0]), r = e.geometry.coordinates[0].map((e) => e[1]), i = t.geometry.coordinates[0].map((e) => e[0]), a = t.geometry.coordinates[0].map((e) => e[1]);
	return Math.max.apply(null, n) === Math.max.apply(null, i) && Math.max.apply(null, r) === Math.max.apply(null, a) && Math.min.apply(null, n) === Math.min.apply(null, i) && Math.min.apply(null, r) === Math.min.apply(null, a);
}
function tn(e, t) {
	return t.geometry.coordinates[0].every((t) => Pe(te(t), e));
}
function nn(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
var rn = class {
	constructor(e, t) {
		this.id = e, this.coordinates = t, this.innerEdges = [], this.outerEdges = [], this.outerEdgesSorted = !1;
	}
	removeInnerEdge(e) {
		this.innerEdges = this.innerEdges.filter((t) => t.from.id !== e.from.id);
	}
	removeOuterEdge(e) {
		this.outerEdges = this.outerEdges.filter((t) => t.to.id !== e.to.id);
	}
	addOuterEdge(e) {
		this.outerEdges.push(e), this.outerEdgesSorted = !1;
	}
	sortOuterEdges() {
		this.outerEdgesSorted ||= (this.outerEdges.sort((e, t) => {
			let n = e.to, r = t.to;
			if (n.coordinates[0] - this.coordinates[0] >= 0 && r.coordinates[0] - this.coordinates[0] < 0) return 1;
			if (n.coordinates[0] - this.coordinates[0] < 0 && r.coordinates[0] - this.coordinates[0] >= 0) return -1;
			if (n.coordinates[0] - this.coordinates[0] === 0 && r.coordinates[0] - this.coordinates[0] === 0) return n.coordinates[1] - this.coordinates[1] >= 0 || r.coordinates[1] - this.coordinates[1] >= 0 ? n.coordinates[1] - r.coordinates[1] : r.coordinates[1] - n.coordinates[1];
			let i = $t(this.coordinates, n.coordinates, r.coordinates);
			return i < 0 ? 1 : i > 0 ? -1 : (n.coordinates[0] - this.coordinates[0]) ** 2 + (n.coordinates[1] - this.coordinates[1]) ** 2 - ((r.coordinates[0] - this.coordinates[0]) ** 2 + (r.coordinates[1] - this.coordinates[1]) ** 2);
		}), !0);
	}
	getOuterEdges() {
		return this.sortOuterEdges(), this.outerEdges;
	}
	getOuterEdge(e) {
		return this.sortOuterEdges(), this.outerEdges[e];
	}
	addInnerEdge(e) {
		this.innerEdges.push(e);
	}
}, an = class e {
	getSymetric() {
		return this.symetric || (this.symetric = new e(this.to, this.from), this.symetric.symetric = this), this.symetric;
	}
	constructor(e, t) {
		this.from = e, this.to = t, this.next = void 0, this.label = void 0, this.symetric = void 0, this.ring = void 0, this.from.addOuterEdge(this), this.to.addInnerEdge(this);
	}
	deleteEdge() {
		this.from.removeOuterEdge(this), this.to.removeInnerEdge(this);
	}
	isEqual(e) {
		return this.from.id === e.from.id && this.to.id === e.to.id;
	}
	toString() {
		return `Edge { ${this.from.id} -> ${this.to.id} }`;
	}
	toLineString() {
		return re([this.from.coordinates, this.to.coordinates]);
	}
	compareTo(e) {
		return $t(e.from.coordinates, e.to.coordinates, this.to.coordinates);
	}
}, on = class {
	constructor() {
		this.edges = [], this.polygon = void 0, this.envelope = void 0;
	}
	push(e) {
		this.edges.push(e), this.polygon = this.envelope = void 0;
	}
	get(e) {
		return this.edges[e];
	}
	get length() {
		return this.edges.length;
	}
	forEach(e) {
		this.edges.forEach(e);
	}
	map(e) {
		return this.edges.map(e);
	}
	some(e) {
		return this.edges.some(e);
	}
	isValid() {
		return !0;
	}
	isHole() {
		let e = this.edges.reduce((e, t, n) => (t.from.coordinates[1] > this.edges[e].from.coordinates[1] && (e = n), e), 0), t = (e === 0 ? this.length : e) - 1, n = (e + 1) % this.length, r = $t(this.edges[t].from.coordinates, this.edges[e].from.coordinates, this.edges[n].from.coordinates);
		return r === 0 ? this.edges[t].from.coordinates[0] > this.edges[n].from.coordinates[0] : r > 0;
	}
	toMultiPoint() {
		return oe(this.edges.map((e) => e.from.coordinates));
	}
	toPolygon() {
		if (this.polygon) return this.polygon;
		let e = this.edges.map((e) => e.from.coordinates);
		return e.push(this.edges[0].from.coordinates), this.polygon = ne([e]);
	}
	getEnvelope() {
		return this.envelope ? this.envelope : this.envelope = Zt(this.toPolygon());
	}
	static findEdgeRingContaining(e, t) {
		let n = e.getEnvelope(), r, i;
		return t.forEach((t) => {
			let a = t.getEnvelope();
			if (i && (r = i.getEnvelope()), !en(a, n) && tn(a, n)) {
				let n = e.map((e) => e.from.coordinates), o;
				for (let e of n) t.some((t) => nn(e, t.from.coordinates)) || (o = e);
				o && t.inside(te(o)) && (!i || tn(r, a)) && (i = t);
			}
		}), i;
	}
	inside(e) {
		return Pe(e, this.toPolygon());
	}
};
function sn(e) {
	if (!e) throw Error("No geojson passed");
	if (e.type !== "FeatureCollection" && e.type !== "GeometryCollection" && e.type !== "MultiLineString" && e.type !== "LineString" && e.type !== "Feature") throw Error(`Invalid input type '${e.type}'. Geojson must be FeatureCollection, GeometryCollection, LineString, MultiLineString or Feature`);
}
var cn = class e {
	constructor() {
		this.nodes = /* @__PURE__ */ new Map(), this.nodeId = 0, this.edges = /* @__PURE__ */ new Map();
	}
	static fromGeoJson(t) {
		sn(t);
		let n = new e();
		return ge(t, (e) => {
			ue(e, "LineString", "Graph::fromGeoJson"), me(e, (e, t) => {
				if (e) {
					let r = n.getNode(e), i = n.getNode(t);
					n.addEdge(r, i);
				}
				return t;
			});
		}), n;
	}
	getNode(e) {
		let t = this.nodes.get(e[0])?.get(e[1]);
		if (t == null) {
			let t = new rn(this.nodeId++, e), n = this.nodes.get(e[0]);
			return n ?? (n = /* @__PURE__ */ new Map(), this.nodes.set(e[0], n)), n.set(e[1], t), t;
		}
		return t;
	}
	addEdge(e, t) {
		if (this.edges.get(e)?.has(t)) return;
		let n = new an(e, t), r = n.getSymetric(), i = this.edges.get(e);
		i ?? (i = /* @__PURE__ */ new Map(), this.edges.set(e, i)), i.set(t, n);
		let a = this.edges.get(t);
		a ?? (a = /* @__PURE__ */ new Map(), this.edges.set(t, a)), a.set(e, r);
	}
	deleteDangles() {
		this._forEachNode((e) => this._removeIfDangle(e));
	}
	_removeIfDangle(e) {
		if (e.innerEdges.length <= 1) {
			let t = e.getOuterEdges().map((e) => e.to);
			this.removeNode(e), t.forEach((e) => this._removeIfDangle(e));
		}
	}
	deleteCutEdges() {
		this._computeNextCWEdges(), this._findLabeledEdgeRings(), this._forEachEdge((e) => {
			e.label === e.symetric.label && (this.removeEdge(e.symetric), this.removeEdge(e));
		});
	}
	_computeNextCWEdges(e) {
		e == null ? this._forEachNode((e) => this._computeNextCWEdges(e)) : e.getOuterEdges().forEach((t, n) => {
			e.getOuterEdge((n === 0 ? e.getOuterEdges().length : n) - 1).symetric.next = t;
		});
	}
	_computeNextCCWEdges(e, t) {
		let n = e.getOuterEdges(), r, i;
		for (let e = n.length - 1; e >= 0; --e) {
			let a = n[e], o = a.symetric, s, c;
			a.label === t && (s = a), o.label === t && (c = o), s && c && (c && (i = c), s && (i &&= (i.next = s, void 0), r ||= s));
		}
		i && (i.next = r);
	}
	_findLabeledEdgeRings() {
		let e = [], t = 0;
		return this._forEachEdge((n) => {
			if (n.label >= 0) return;
			e.push(n);
			let r = n;
			do
				r.label = t, r = r.next;
			while (!n.isEqual(r));
			t++;
		}), e;
	}
	getEdgeRings() {
		this._computeNextCWEdges(), this._forEachEdge((e) => {
			e.label = void 0;
		}), this._findLabeledEdgeRings().forEach((e) => {
			this._findIntersectionNodes(e).forEach((t) => {
				this._computeNextCCWEdges(t, e.label);
			});
		});
		let e = [];
		return this._forEachEdge((t) => {
			t.ring || e.push(this._findEdgeRing(t));
		}), e;
	}
	_findIntersectionNodes(e) {
		let t = [], n = e;
		do {
			let r = 0;
			n.from.getOuterEdges().forEach((t) => {
				t.label === e.label && ++r;
			}), r > 1 && t.push(n.from), n = n.next;
		} while (!e.isEqual(n));
		return t;
	}
	_findEdgeRing(e) {
		let t = e, n = new on();
		do
			n.push(t), t.ring = n, t = t.next;
		while (!e.isEqual(t));
		return n;
	}
	removeNode(e) {
		var t;
		e.getOuterEdges().forEach((e) => this.removeEdge(e)), e.innerEdges.forEach((e) => this.removeEdge(e)), (t = this.nodes.get(e.coordinates[0])) == null || t.delete(e.coordinates[1]);
	}
	removeEdge(e) {
		var t;
		(t = this.edges.get(e.from)) == null || t.delete(e.to), e.deleteEdge();
	}
	_forEachNode(e) {
		for (let t of this.nodes.values()) for (let n of t.values()) e(n);
	}
	_forEachEdge(e) {
		for (let t of this.edges.values()) for (let n of t.values()) e(n);
	}
};
function ln(e) {
	let t = cn.fromGeoJson(e);
	t.deleteDangles(), t.deleteCutEdges();
	let n = [], r = [];
	return t.getEdgeRings().filter((e) => e.isValid()).forEach((e) => {
		e.isHole() ? n.push(e) : r.push(e);
	}), n.forEach((e) => {
		on.findEdgeRingContaining(e, r) && r.push(e);
	}), ie(r.map((e) => e.toPolygon()));
}
//#endregion
//#region src/internal/process-osm-surface/coastline.ts
function un(e, t) {
	let n = e.filter((e) => e.type === "way" && e.tags?.natural === "coastline");
	if (n.length === 0) console.warn("[autk-db] No coastline available; surface uses the full query area (land and sea are not distinguished). Coastal water is not generated.");
	else try {
		let r = 1e10, i = (e) => e.map((e) => Math.round(e * r) / r), a = (e) => e.join(","), [o, s] = i([t.west, t.south]), [c, l] = i([t.east, t.north]);
		if (o >= c || s >= l) throw Error("extent too small to reconstruct coastline");
		let u = (e) => e[0] === o || e[0] === c || e[1] === s || e[1] === l, d = new Map(e.filter((e) => e.type === "node").map((e) => [e.id, e])), f = [], p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
		for (let e of n) {
			let t = e.geometry?.map((e) => [e.lon, e.lat]) ?? e.nodes?.map((e) => {
				let t = d.get(e);
				return [t?.lon, t?.lat];
			});
			if (!t || t.length < 2 || e.nodes && t.length !== e.nodes.length || t.some((e) => e.some((e) => !Number.isFinite(e)))) throw Error(`coastline way ${e.id} has missing coordinates`);
			for (let e = 1; e < t.length; e++) {
				let n = t[e - 1], r = t[e], u = r[0] - n[0], d = r[1] - n[1];
				if (u === 0 && d === 0) continue;
				let h = 0, g = 1, _ = [
					-u,
					u,
					-d,
					d
				], v = [
					n[0] - o,
					c - n[0],
					n[1] - s,
					l - n[1]
				];
				for (let e = 0; e < 4; e++) _[e] === 0 ? v[e] < 0 && (g = -1) : _[e] < 0 ? h = Math.max(h, v[e] / _[e]) : g = Math.min(g, v[e] / _[e]);
				if (h >= g) continue;
				let y = i([n[0] + h * u, n[1] + h * d]), b = i([n[0] + g * u, n[1] + g * d]);
				if (a(y) === a(b)) continue;
				if (y[0] === b[0] && (y[0] === o || y[0] === c) || y[1] === b[1] && (y[1] === s || y[1] === l)) throw Error("coastline coincides with query extent");
				let x = `${a(y)}|${a(b)}`, S = `${a(b)}|${a(y)}`;
				if (p.has(x) || p.has(S)) throw Error("duplicate or conflicting coastline segment");
				p.set(x, !0), p.set(S, !1), f.push([y, b]);
				for (let [e, t] of [[y, "outgoing"], [b, "incoming"]]) {
					let n = a(e);
					m.has(n) || m.set(n, {
						incoming: 0,
						outgoing: 0,
						point: e
					}), m.get(n)[t]++;
				}
			}
		}
		if (f.length === 0) throw Error("no coastline segments intersect the query extent");
		for (let { point: e, incoming: t, outgoing: n } of m.values()) if (t > 1 || n > 1 || !u(e) && (t !== 1 || n !== 1)) throw Error("incomplete or branching coastline inside query extent");
		let h = [
			[o, s],
			[c, s],
			[c, l],
			[o, l],
			[o, s]
		], g = [...f];
		for (let e = 1; e < h.length; e++) {
			let t = h[e - 1], n = h[e], r = +(t[0] === n[0]), i = [
				t,
				n,
				...[...m.values()].map((e) => e.point).filter((e) => e[1 - r] === t[1 - r] && e[r] >= Math.min(t[r], n[r]) && e[r] <= Math.max(t[r], n[r]))
			], o = [...new Map(i.map((e) => [a(e), e])).values()].sort((e, t) => e[r] - t[r]);
			for (let e = 1; e < o.length; e++) g.push([o[e - 1], o[e]]);
		}
		let _ = ln(ie(g.map((e) => re(e)))), v = /* @__PURE__ */ new Map();
		for (let e of _.features) for (let t of e.geometry.coordinates) {
			let e = t.slice(1).map((e, n) => [a(t[n]), a(e)].sort().join("|")).sort().join(";");
			v.set(e, t);
		}
		let y = [...v.values()], b = y.map((e) => Math.abs(e.slice(1).reduce((t, n, r) => t + (e[r][0] - e[0][0]) * (n[1] - e[0][1]) - (n[0] - e[0][0]) * (e[r][1] - e[0][1]), 0))), x = y.map((e, t) => {
			let n = -1;
			return y.forEach((r, i) => {
				b[i] > b[t] && (n === -1 || b[i] < b[n]) && Pe(e[0], {
					type: "Polygon",
					coordinates: [r]
				}, { ignoreBoundary: !0 }) && (n = i);
			}), n;
		}), S = {
			type: "MultiPolygon",
			coordinates: []
		}, C = 0;
		for (let e = 0; e < y.length; e++) {
			let t = [y[e], ...y.filter((t, n) => x[n] === e)], n = /* @__PURE__ */ new Set();
			if (t.forEach((e, t) => {
				let r = 0;
				for (let t = 1; t < e.length; t++) r += (e[t - 1][0] - e[0][0]) * (e[t][1] - e[0][1]) - (e[t][0] - e[0][0]) * (e[t - 1][1] - e[0][1]);
				let i = r > 0 != t > 0;
				for (let t = 1; t < e.length; t++) {
					let r = p.get(`${a(e[t - 1])}|${a(e[t])}`);
					r !== void 0 && (n.add(r === i), C++);
				}
			}), n.size !== 1) throw Error("coastline faces cannot be consistently classified as land or sea");
			n.has(!0) && S.coordinates.push(t);
		}
		if (y.length === 0 || C !== f.length * 2) throw Error("coastline network has unclosed or unused edges");
		return S;
	} catch (e) {
		console.warn(`[autk-db] Cannot reconstruct coastline surface: ${e instanceof Error ? e.message : String(e)}. Using the full query area instead; coastal water is not generated.`);
		return;
	}
}
//#endregion
//#region src/utils.ts
function dn(e) {
	return e.map((e) => ({
		name: e.column_name,
		type: e.column_type
	}));
}
function fn(e) {
	if (typeof e == "bigint") return e >= BigInt(-(2 ** 53 - 1)) && e <= BigInt(2 ** 53 - 1) ? Number(e) : e.toString();
	if (typeof e != "object" || !e) {
		if (typeof e == "string") {
			let t = e.trim();
			if (t.length >= 2 && t.startsWith("\"") && t.endsWith("\"")) try {
				return JSON.parse(t);
			} catch {}
		}
		return e;
	}
	let t = e;
	return typeof t.toJSON == "function" ? fn(t.toJSON()) : Array.isArray(e) ? e.map((e) => fn(e)) : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, fn(t)]));
}
//#endregion
//#region src/http-cache.ts
var pn = class {
	cache = null;
	cacheName;
	ttl;
	constructor(e, t = 864e5) {
		this.cacheName = e, this.ttl = t;
	}
	async init() {
		if ("caches" in self && !this.cache) try {
			this.cache = await caches.open(this.cacheName);
		} catch {
			this.cache = null;
		}
	}
	toRequest(e) {
		return new Request(`https://cache.local/${encodeURIComponent(e)}`);
	}
	async get(e) {
		if (await this.init(), !this.cache) return null;
		try {
			let t = await this.cache.match(this.toRequest(e));
			if (!t) return null;
			let n = await t.json();
			return Date.now() - n.timestamp > this.ttl ? (await this.cache.delete(this.toRequest(e)), null) : n.data;
		} catch {
			return null;
		}
	}
	async set(e, t) {
		if (await this.init(), this.cache) try {
			let n = new Response(JSON.stringify({
				data: t,
				timestamp: Date.now()
			}), { headers: { "Content-Type": "application/json" } });
			await this.cache.put(this.toRequest(e), n);
		} catch {}
	}
	async delete(e) {
		if (await this.init(), this.cache) try {
			await this.cache.delete(this.toRequest(e));
		} catch {}
	}
	async clear() {
		if (await this.init(), this.cache) try {
			let e = await this.cache.keys();
			await Promise.all(e.map((e) => this.cache.delete(e)));
		} catch {}
	}
};
//#endregion
//#region src/internal/process-osm/named-area.ts
function mn(e, t, n = "PBF") {
	let r = e.filter((e) => e.type === "relation" && !!e.tags?.boundary), i = r.filter((e) => e.tags?.name === t.geocodeArea), a = new Map(e.filter((e) => e.type === "way").map((e) => [e.id, e])), o = new Map(e.filter((e) => e.type === "node").map((e) => [e.id, e])), s;
	try {
		if (i.length === 0) throw Error("region not found in the extract");
		s = [];
		for (let e of i) {
			let t = [];
			for (let n of ["outer", "inner"]) {
				let r = (e.members ?? []).filter((e) => e.type === "way" && (e.role || "outer") === n), i = [], o = /* @__PURE__ */ new Map();
				for (let e of r) {
					let t = a.get(e.ref);
					if (!t?.nodes || t.nodes.length < 2 || t.geometry?.length !== t.nodes.length) throw Error("incomplete region boundary ways/nodes");
					for (let e of [t.nodes[0], t.nodes[t.nodes.length - 1]]) o.set(e, (o.get(e) ?? 0) + 1);
					i.push(re(t.geometry.map((e) => [e.lon, e.lat])));
				}
				if ([...o.values()].some((e) => e !== 2)) throw Error("unclosed region boundary");
				t.push(ln(ie(i)).features.map((e) => e.geometry.coordinates[0]));
			}
			let n = t[0].map((e) => [e]);
			for (let e of t[1]) {
				let t = n.find((t) => Pe(e[0], {
					type: "Polygon",
					coordinates: [t[0]]
				}, { ignoreBoundary: !0 }));
				if (!t) throw Error("invalid inner region boundary");
				t.push(e);
			}
			let r = {
				type: "MultiPolygon",
				coordinates: n
			};
			if (n.length === 0 || !qt(r)) throw Error("invalid region boundary");
			s.push(r);
		}
	} catch (e) {
		s = void 0, console.warn(`[autk-db] Cannot apply ${n} geocodeArea "${t.geocodeArea}": ${e instanceof Error ? e.message : String(e)}; falling back to exact area names without region scoping. Homonymous areas in the extract may be included.`);
	}
	let c = r.filter((e) => t.areas.includes(e.tags.name) && (!s || (e.members ?? []).some((e) => (e.type === "way" ? a.get(e.ref)?.geometry?.map((e) => [e.lon, e.lat]) ?? [] : e.type === "node" && o.get(e.ref)?.lon !== void 0 && o.get(e.ref)?.lat !== void 0 ? [[o.get(e.ref).lon, o.get(e.ref).lat]] : []).some((e) => s?.some((t) => Pe(e, t)))))), l = t.areas.filter((e) => !c.some((t) => t.tags?.name === e));
	if (l.length > 0) {
		let e = s ? ` inside "${t.geocodeArea}"` : "";
		throw Error(`No area boundary found in ${n}${e} for: ${l.map((e) => `"${e}"`).join(", ")}. Verify names and include the requested boundaries in the extract.`);
	}
	if (!s) return { relations: c };
	let [u, d, f, p] = _e({
		type: "MultiPolygon",
		coordinates: s.flatMap((e) => e.coordinates)
	});
	return {
		relations: c,
		geocodeExtent: {
			west: u,
			south: d,
			east: f,
			north: p
		}
	};
}
//#endregion
//#region src/use-cases/load-osm-overpass/use-case.ts
function hn(e) {
	let t = {
		points: /* @__PURE__ */ new Set(),
		polylines: /* @__PURE__ */ new Set(),
		polygons: /* @__PURE__ */ new Set()
	};
	for (let n of e) for (let e of n.tags) t[n.type].add(e.value === void 0 ? `[${JSON.stringify(e.key)}]` : `[${JSON.stringify(e.key)}=${JSON.stringify(e.value)}]`);
	return {
		points: [...t.points].sort(),
		polylines: [...t.polylines].sort(),
		polygons: [...t.polygons].sort()
	};
}
var gn = class e {
	conn;
	cache;
	pipeline;
	constructor(e, t) {
		this.conn = e, this.cache = new pn("overpass-api-cache", 864e5), this.pipeline = t;
	}
	async exec(e) {
		let t = e.workspace || "autk", n = e.outputTableName || "table_osm", r = e.onProgress, i = E(e.queryArea) ? D(e.queryArea) : null, a = O(e.tagSets), o = await this.fetchCombinedOsmData(e.queryArea, e.autoLoadLayers.layers, r, e.forceRefresh, a);
		if (!E(e.queryArea)) {
			let t = new Set(o.elements.filter((e) => e.type === "relation" && e.tags?.boundary && e.tags.name).map((e) => e.tags.name)), n = e.queryArea.areas.filter((e) => !t.has(e));
			if (n.length > 0) throw Error(`No area boundary found in OSM for: ${n.map((e) => `"${e}"`).join(", ")}. Verify the area names match OSM relation names exactly (check openstreetmap.org).`);
		}
		let { osmData: s, boundariesData: c } = i ? {
			osmData: o,
			boundariesData: this.pipeline.boundingBoxBoundary(i)
		} : this.pipeline.splitCombinedResponse(o, e.queryArea), l = i ?? this.pipeline.computeBboxFromElements(c.elements);
		if (!l) throw Error("Failed to compute query-area extent");
		let u = i ?? (o.coastlineExtent === void 0 ? mn(o.elements, e.queryArea, "OSM").geocodeExtent : o.coastlineExtent), d = u ? un(o.coastlines ?? o.elements, u) : void 0;
		console.log(`[autk-db] Split: ${s.elements.length} OSM elements, ${c.elements.length} boundary elements`), r?.("processing-osm-data");
		let f = performance.now();
		await this.pipeline.insertOsmDataUsingJson(n, s, t);
		let p = performance.now() - f;
		console.log(`Successfully inserted ${s.elements.length} OSM elements into ${n}`), r?.("processing-boundaries");
		let m = performance.now();
		await this.pipeline.insertOsmDataUsingJson(`${n}_boundaries`, c, t, !0);
		let h = performance.now() - m;
		console.log(`Successfully inserted ${c.elements.length} boundaries into ${n}_boundaries`);
		let g = `${t}.${n}`, _ = dn((await this.conn.query(`DESCRIBE ${g}`)).toArray());
		return {
			tables: [{
				source: "osm",
				name: n,
				columns: _
			}, {
				source: "osm",
				name: `${n}_boundaries`,
				columns: _
			}],
			surfaceMask: d,
			queryExtent: l,
			coastlineExtent: u ?? void 0,
			osmElementCount: s.elements.length,
			boundaryElementCount: c.elements.length,
			osmDataProcessingMs: p,
			boundariesProcessingMs: h
		};
	}
	getCacheKey(e, t, n = []) {
		let r = n.length > 0 ? `-tag-sets-v1:${JSON.stringify(hn(n))}` : "", i = t && t.length > 0 ? `-layers:${[...t].sort().join("+")}` : "";
		if (E(e)) return `overpass-combined-v4-bbox-${e.bbox.join(",")}${i}${r}`;
		let a = [...e.areas].sort().join(",");
		return `overpass-combined-v5-${e.geocodeArea}-${a}${i}${r}`;
	}
	getFullDataCacheKey(e) {
		if (E(e)) return `overpass-combined-v4-bbox-${e.bbox.join(",")}`;
		let t = [...e.areas].sort().join(",");
		return `overpass-combined-v5-${e.geocodeArea}-${t}`;
	}
	async fetchCombinedOsmData(e, t, n, r = !1, i = []) {
		let a = this.getCacheKey(e, t, i);
		if (r) console.log(`[autk-db] forceRefresh enabled — bypassing Overpass cache for: ${a}`);
		else {
			let t = await this.cache.get(a);
			if (t) return console.log(`[autk-db] Using cached Overpass data: ${a}`), t;
			let n = this.getFullDataCacheKey(e);
			if (n !== a && i.length === 0) {
				let e = await this.cache.get(n);
				if (e) return console.log(`[autk-db] Using cached Overpass full-data superset: ${n}`), e;
			}
		}
		let o = t && t.length > 0 ? t : i.length > 0 ? [] : [
			"roads",
			"buildings",
			"parks",
			"water"
		], s = (e) => new Promise((t) => setTimeout(t, e)), c = 3e3;
		n?.("querying-osm-server");
		let l = { elements: [] }, u;
		if (E(e)) u = D(e), l.coastlineExtent = u;
		else {
			if (console.log("[autk-db] Fetching boundary data from Overpass API…"), l = await (await this.fetchWithRetry(this.buildBoundariesQuery(e))).json(), l.remark) throw Error(`Overpass boundary query returned incomplete data: ${l.remark}`);
			let { geocodeExtent: t } = mn(l.elements, e, "OSM");
			l.coastlineExtent = t ?? null;
			let { boundariesData: n } = this.pipeline.splitCombinedResponse(l, e);
			u = this.pipeline.computeBboxFromElements(n.elements);
		}
		if (n?.("downloading-osm-data"), l.coastlineExtent) {
			await s(c);
			let e = await (await this.fetchWithRetry(this.buildBoundingBoxQuery(l.coastlineExtent, {
				way: ["\"natural\"=\"coastline\""],
				relation: []
			}))).json();
			if (e.remark) throw Error(`Overpass coastline query returned incomplete data: ${e.remark}`);
			l.coastlines = e.elements ?? [];
		}
		let d = [
			["parks+water", ["parks", "water"]],
			["roads", ["roads"]],
			["buildings", ["buildings"]]
		], f = !1;
		for (let [t, n] of d) {
			let r = n.filter((e) => o.includes(e));
			if (r.length === 0) continue;
			if (r.includes("buildings")) {
				let t = u ? this.buildBuildingsTileQueries(e, u) : [this.buildLayerGroupQuery(e, r)], n = 0;
				for (let e = 0; e < t.length; e++) {
					await s(c), console.log(`[autk-db] Fetching buildings tile ${e + 1}/${t.length}…`);
					let r = await (await this.fetchWithRetry(t[e])).json(), i = r.elements?.length ?? 0;
					console.log(`[autk-db] buildings tile ${e + 1}: ${i} elements`), n += i, l = this.mergeResponses(l, r);
				}
				n === 0 && (console.warn("[autk-db] buildings: 0 elements across all tiles — skipping cache."), f = !0);
				continue;
			}
			let i = this.buildLayerGroupQuery(e, r);
			if (!i) continue;
			await s(c), console.log(`[autk-db] Fetching ${t} data from Overpass API…`);
			let a = await (await this.fetchWithRetry(i)).json(), d = a.elements?.length ?? 0;
			console.log(`[autk-db] ${t}: ${d} elements`), d === 0 && (console.warn(`[autk-db] ${t}: 0 elements — skipping cache.`), f = !0), l = this.mergeResponses(l, a);
		}
		if (i.length > 0) {
			await s(c);
			let t = await (await this.fetchWithRetry(this.buildTagSetQuery(e, i))).json();
			(t.elements?.length ?? 0) === 0 && (f = !0), l = this.mergeResponses(l, t);
		}
		return f || await this.cache.set(a, l), l;
	}
	static OVERPASS_ENDPOINT = "https://overpass-api.de/api/interpreter";
	static OVERPASS_STATUS_ENDPOINT = "https://overpass-api.de/api/status";
	static QUERY_TIMEOUTS_S = [
		60,
		45,
		30,
		20,
		15,
		10
	];
	static setQueryTimeout(e, t) {
		return e.replace(/\[timeout:\d+\]/, `[timeout:${t}]`);
	}
	async waitForSlot() {
		let t = (e) => new Promise((t) => setTimeout(t, e));
		for (let n = 0; n < 60; n++) try {
			let n = await fetch(e.OVERPASS_STATUS_ENDPOINT);
			if (!n.ok) return;
			let r = await n.text(), i = r.match(/(\d+) slots available now/);
			if (i && parseInt(i[1]) > 0) return;
			let a = [...r.matchAll(/in (\d+) seconds/g)].map((e) => parseInt(e[1]));
			if (a.length === 0) return;
			let o = Math.min(...a);
			console.log(`[autk-db] No Overpass slots available (next free in ${o}s). Waiting…`), await t(3e3);
		} catch {
			return;
		}
	}
	async fetchWithRetry(t) {
		let n = [
			2e4,
			45e3,
			9e4,
			12e4,
			18e4,
			24e4
		], r = [
			1e4,
			2e4,
			45e3,
			9e4,
			12e4,
			18e4
		], i = e.OVERPASS_ENDPOINT, a = (e) => e * (.9 + Math.random() * .2), o = (e) => new Promise((t) => setTimeout(t, e)), s = (e) => e === 429 || e === 503 || e === 504;
		await this.waitForSlot();
		let c = 0;
		for (let l = 0; l <= 6; l++) {
			let u = e.QUERY_TIMEOUTS_S[c] ?? 10, d = u * 1e3 + 3e4, f = e.setQueryTimeout(t, u), p = new AbortController(), m = setTimeout(() => p.abort(), d), h;
			try {
				h = await fetch(i, {
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					body: "data=" + encodeURIComponent(f),
					signal: p.signal
				});
			} catch (t) {
				if (clearTimeout(m), l < 6) {
					let n = t?.name === "AbortError";
					c++;
					let i = e.QUERY_TIMEOUTS_S[c] ?? 10, s = a(r[l] ?? 18e4);
					console.warn(`[autk-db] Overpass ${n ? "fetch timeout" : "network error"} (attempt ${l + 1}/7): ${t}. Reducing query timeout ${u}s → ${i}s. Retrying in ${(s / 1e3).toFixed(0)}s…`), await o(s);
					continue;
				}
				throw t;
			}
			if (clearTimeout(m), h.ok) return h;
			if (s(h.status) && l < 6) {
				let t = a((h.status === 504 ? r : n)[l] ?? 24e4);
				if (h.status === 504) {
					c++;
					let n = e.QUERY_TIMEOUTS_S[c] ?? 10;
					console.warn(`[autk-db] Overpass 504 (attempt ${l + 1}/7). Reducing query timeout ${u}s → ${n}s. Retrying in ${(t / 1e3).toFixed(0)}s…`);
				} else c = 0, console.warn(`[autk-db] Overpass ${h.status} (attempt ${l + 1}/7). Retrying in ${(t / 1e3).toFixed(0)}s…`);
				await o(t);
				continue;
			}
			let g = (await h.text().catch(() => "")).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 1500);
			throw Error(`Overpass API error: ${h.status} ${h.statusText}${g ? `: ${g}` : ""}`);
		}
		throw Error("Overpass API: max retries exceeded");
	}
	namedAreaLines(e, t) {
		return [`relation["name"="${e}"]["boundary"](area.areaMain)->.rel${t};`, `.rel${t} map_to_area->.area${t};`];
	}
	buildBoundariesQuery(e) {
		let t = `area["name"="${e.geocodeArea}"]["boundary"]->.areaMain;`, n = [], r = [], i = [];
		return e.areas.forEach((e, t) => {
			let a = t + 1;
			n.push(...this.namedAreaLines(e, a)), n.push(`way(r.rel${a})->.boundaryWays${a};`), r.push(`.rel${a};`), i.push(`.boundaryWays${a};`);
		}), `
      [out:json][timeout:60][maxsize:134217728];

      ${t}
      rel(pivot.areaMain)->.geocodeRelations;
      way(r.geocodeRelations)->.geocodeWays;
      ${n.join("\n      ")}

      ( .geocodeRelations; ${r.join(" ")} );
      out body;

      ( .geocodeWays; ${i.join(" ")} );
      out geom qt;
    `;
	}
	buildTagSetQuery(e, t) {
		let n = [], r;
		if (E(e)) {
			let t = D(e);
			r = [`(${t.south},${t.west},${t.north},${t.east})`];
		} else n.push(`area["name"=${JSON.stringify(e.geocodeArea)}]["boundary"]->.areaMain;`), r = e.areas.map((e, t) => (n.push(...this.namedAreaLines(e, t + 1)), `(area.area${t + 1})`));
		let i = hn(t), a = [.../* @__PURE__ */ new Set([...i.polylines, ...i.polygons])], o = r.flatMap((e) => [
			...i.points.map((t) => `node${t}${e};`),
			...a.map((t) => `way${t}${e};`),
			...i.polygons.map((t) => `relation${t}["type"="multipolygon"]${e};`)
		]);
		return `[out:json][timeout:60][maxsize:268435456];
      ${n.join("\n")}
      (${o.join("\n")})->.tagHits;
      ${i.points.length > 0 ? "node.tagHits; out body;" : ""}
      ${i.polygons.length > 0 ? "rel.tagHits[\"type\"=\"multipolygon\"]->.tagAreas;\n        way(r.tagAreas)->.tagAreaWays;\n        .tagAreas out body;" : ""}
      ${a.length > 0 ? `(way.tagHits; ${i.polygons.length > 0 ? ".tagAreaWays;" : ""}); out geom qt;` : ""}`;
	}
	buildLayerGroupQuery(e, t) {
		let n = this.getTagSelectorsForLayers(t);
		if (n.way.length === 0 && n.relation.length === 0) return null;
		if (E(e)) return this.buildBoundingBoxQuery(D(e), n);
		let r = `area["name"="${e.geocodeArea}"]["boundary"]->.areaMain;`, i = [], a = [], o = [], s = [];
		e.areas.forEach((e, t) => {
			let r = t + 1;
			i.push(...this.namedAreaLines(e, r)), n.way.length > 0 && (i.push(`(
        ${n.way.map((e) => `way[${e}](area.area${r});`).join("\n        ")}
      )->.dataWays${r};`), a.push(`.dataWays${r};`)), n.relation.length > 0 && (i.push(`(
        ${n.relation.map((e) => `relation[${e}](area.area${r});`).join("\n        ")}
      )->.dataRelations${r};`), i.push(`way(r.dataRelations${r})->.dataRelationWays${r};`), o.push(`.dataRelations${r};`), s.push(`.dataRelationWays${r};`));
		});
		let c = [...a, ...s], l = o.length > 0 ? `
      ( ${o.join(" ")} );
      out body;` : "", u = c.length > 0 ? `
      ( ${c.join(" ")} );
      out geom qt;` : "";
		return `
      [out:json][timeout:60][maxsize:268435456];

      ${r}
      ${i.join("\n      ")}
      ${l}
      ${u}
    `;
	}
	getTagSelectorsForLayers(e) {
		let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		for (let r of e) switch (r) {
			case "roads":
				t.add(`"highway"]["area"!="yes"]["highway"!~"^(${b.join("|")})$"`);
				break;
			case "buildings":
				t.add(`"building"][${this.buildExcludedValueSelector("building", x)}`), t.add(`"building:part"][${this.buildExcludedValueSelector("building:part", x)}`), t.add("\"type\"=\"building\""), n.add(`"building"][${this.buildExcludedValueSelector("building", x)}`), n.add(`"building:part"][${this.buildExcludedValueSelector("building:part", x)}`), n.add("\"type\"=\"building\"");
				break;
			case "parks":
				t.add(this.buildExactValueSelector("leisure", h)), t.add(this.buildExactValueSelector("landuse", g)), t.add(this.buildExactValueSelector("natural", _)), n.add(this.buildExactValueSelector("leisure", h)), n.add(this.buildExactValueSelector("landuse", g)), n.add(this.buildExactValueSelector("natural", _));
				break;
			case "water": t.add(this.buildExactValueSelector("natural", v)), t.add(this.buildExactValueSelector("water", y)), n.add(this.buildExactValueSelector("natural", v)), n.add(this.buildExactValueSelector("water", y));
		}
		return {
			way: [...t],
			relation: [...n]
		};
	}
	buildExactValueSelector(e, t) {
		return `"${e}"~"^(${t.join("|")})$"`;
	}
	buildExcludedValueSelector(e, t) {
		return `"${e}"!~"^(${t.join("|")})$"`;
	}
	buildBuildingsTileQueries(e, t, n = 2, r = 2) {
		let i = (t.north - t.south) / r, a = (t.east - t.west) / n, o = [];
		for (let s = 0; s < r; s++) for (let r = 0; r < n; r++) {
			let n = t.south + s * i, c = n + i, l = t.west + r * a, u = l + a, d = `${n},${l},${c},${u}`;
			if (E(e)) {
				o.push(this.buildBoundingBoxQuery({
					south: n,
					north: c,
					west: l,
					east: u
				}, this.getTagSelectorsForLayers(["buildings"])));
				continue;
			}
			let f = `area["name"="${e.geocodeArea}"]["boundary"]->.areaMain;`, p = [], m = [], h = [], g = [];
			e.areas.forEach((e, t) => {
				let n = t + 1;
				p.push(...this.namedAreaLines(e, n)), p.push(`(
        way["building"][${this.buildExcludedValueSelector("building", x)}](area.area${n})(${d});
        way["building:part"][${this.buildExcludedValueSelector("building:part", x)}](area.area${n})(${d});
        way["type"="building"](area.area${n})(${d});
      )->.dataWays${n};`), m.push(`.dataWays${n};`), p.push(`(
        relation["building"][${this.buildExcludedValueSelector("building", x)}](area.area${n})(${d});
        relation["building:part"][${this.buildExcludedValueSelector("building:part", x)}](area.area${n})(${d});
        relation["type"="building"](area.area${n})(${d});
      )->.dataRelations${n};`), p.push(`way(r.dataRelations${n})->.dataRelationWays${n};`), h.push(`.dataRelations${n};`), g.push(`.dataRelationWays${n};`);
			});
			let _ = [...m, ...g];
			o.push(`
      [out:json][timeout:60][maxsize:268435456];

      ${f}
      ${p.join("\n      ")}

      ( ${h.join(" ")} );
      out body;

      ( ${_.join(" ")} );
      out geom qt;
    `);
		}
		return o;
	}
	buildBoundingBoxQuery(e, t) {
		let n = `(${e.south},${e.west},${e.north},${e.east})`, r = t.way.map((e) => `way[${e}]${n};`).join("\n"), i = t.relation.map((e) => `relation[${e}]${n};`).join("\n");
		return `[out:json][timeout:60][maxsize:268435456];
      (${r})->.dataWays;
      ${i ? `(${i})->.dataRelations;
      way(r.dataRelations)->.dataRelationWays;
      (.dataRelations;); out body;` : ""}
      (.dataWays; ${i ? ".dataRelationWays;" : ""}); out geom qt;`;
	}
	mergeResponses(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let t of e.elements) n.add(`${t.type}:${t.id}`);
		let r = t.elements.filter((e) => !n.has(`${e.type}:${e.id}`));
		return {
			...e,
			elements: [...e.elements, ...r]
		};
	}
};
//#endregion
//#region src/duckdb-browser.ts
function _n() {
	try {
		let e = import.meta.url;
		if (e.startsWith("file:")) return {
			mvp: {
				mainModule: new URL(
					/* @vite-ignore */
					"./duckdb-mvp.wasm",
					e
				).href,
				mainWorker: new URL(
					/* @vite-ignore */
					"./duckdb-browser-mvp.worker.js",
					e
				).href
			},
			eh: {
				mainModule: new URL(
					/* @vite-ignore */
					"./duckdb-eh.wasm",
					e
				).href,
				mainWorker: new URL(
					/* @vite-ignore */
					"./duckdb-browser-eh.worker.js",
					e
				).href
			}
		};
		if (e.startsWith("http:") || e.startsWith("https:")) {
			let t = new URL(e);
			if (t.hostname === "localhost" || t.hostname === "127.0.0.1" || t.hostname === "[::1]" || t.hostname.endsWith(".local")) return {
				mvp: {
					mainModule: new URL(
						/* @vite-ignore */
						"./duckdb-mvp.wasm",
						e
					).href,
					mainWorker: new URL(
						/* @vite-ignore */
						"./duckdb-browser-mvp.worker.js",
						e
					).href
				},
				eh: {
					mainModule: new URL(
						/* @vite-ignore */
						"./duckdb-eh.wasm",
						e
					).href,
					mainWorker: new URL(
						/* @vite-ignore */
						"./duckdb-browser-eh.worker.js",
						e
					).href
				}
			};
		}
	} catch {}
	return c.getJsDelivrBundles();
}
async function vn() {
	let e = await c.selectBundle(_n()), t = URL.createObjectURL(new Blob([`importScripts(${JSON.stringify(e.mainWorker)});`], { type: "text/javascript" }));
	try {
		let n = new Worker(t), r = new c.AsyncDuckDB(new c.VoidLogger(), n);
		return await r.instantiate(e.mainModule), r;
	} finally {
		URL.revokeObjectURL(t);
	}
}
//#endregion
//#region src/use-cases/drop-table/queries.ts
var yn = (e, t) => `DROP TABLE IF EXISTS ${`${t}.${e}`};`, bn = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e) {
		try {
			let t = e.workspace || "autk";
			return await this.conn.query(yn(e.tableName, t)), {
				success: !0,
				message: `Table ${e.tableName} dropped successfully`
			};
		} catch (t) {
			return {
				success: !1,
				message: `Error dropping table ${e.tableName}: ${t}`
			};
		}
	}
}, xn = (e, t) => `
    WITH geometry_bounds AS (
      SELECT 
        ST_XMin(geometry) as min_x,
        ST_YMin(geometry) as min_y,
        ST_XMax(geometry) as max_x,
        ST_YMax(geometry) as max_y
      FROM ${`${t}.${e}`}
      WHERE geometry IS NOT NULL
    )
    SELECT 
      CAST(MIN(min_x) AS DOUBLE) as minLon,
      CAST(MIN(min_y) AS DOUBLE) as minLat,
      CAST(MAX(max_x) AS DOUBLE) as maxLon,
      CAST(MAX(max_y) AS DOUBLE) as maxLat
    FROM geometry_bounds;
  `, Sn = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e) {
		let t = e.workspace || "autk", n = (await this.conn.query(xn(e.layerTableName, t))).toArray();
		if (n.length === 0) throw Error(`Could not calculate bounding box - no geometries found in table ${e.layerTableName}`);
		let r = n[0];
		if (r.minLon == null || r.minLat == null || r.maxLon == null || r.maxLat == null) throw Error(`Could not calculate bounding box - invalid coordinates found in table ${e.layerTableName}`);
		return {
			minLon: r.minLon,
			minLat: r.minLat,
			maxLon: r.maxLon,
			maxLat: r.maxLat
		};
	}
}, Cn = (e, t, n) => {
	let r = `${t}.${e}`;
	return !n || n === "EPSG:4326" ? `
      SELECT
        CAST(MIN(lon) AS DOUBLE) as minLon,
        CAST(MIN(lat) AS DOUBLE) as minLat,
        CAST(MAX(lon) AS DOUBLE) as maxLon,
        CAST(MAX(lat) AS DOUBLE) as maxLat
      FROM ${r}
      WHERE lat IS NOT NULL AND lon IS NOT NULL;
    ` : `
    WITH raw_bounds AS (
      SELECT
        ST_Point(MIN(lon), MIN(lat)) as min_point,
        ST_Point(MAX(lon), MAX(lat)) as max_point
      FROM ${r}
      WHERE lat IS NOT NULL AND lon IS NOT NULL
    ),
    transformed_bounds AS (
      SELECT
        ST_Transform(min_point, 'EPSG:4326', '${n}', always_xy := true) as min_point,
        ST_Transform(max_point, 'EPSG:4326', '${n}', always_xy := true) as max_point
      FROM raw_bounds
    )
    SELECT
      CAST(ST_X(min_point) AS DOUBLE) as minLon,
      CAST(ST_Y(min_point) AS DOUBLE) as minLat,
      CAST(ST_X(max_point) AS DOUBLE) as maxLon,
      CAST(ST_Y(max_point) AS DOUBLE) as maxLat
    FROM transformed_bounds;
  `;
}, wn = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e) {
		let t = e.workspace || "autk", n = (await this.conn.query(Cn(e.osmTableName, t, e.coordinateFormat))).toArray();
		if (n.length === 0) throw Error(`Could not calculate bounding box - no coordinates found in table ${e.osmTableName}`);
		let r = n[0];
		if (r.minLon == null || r.minLat == null || r.maxLon == null || r.maxLat == null) throw Error(`Could not calculate bounding box - invalid coordinates found in table ${e.osmTableName}`);
		return {
			minLon: r.minLon,
			minLat: r.minLat,
			maxLon: r.maxLon,
			maxLat: r.maxLat
		};
	}
};
//#endregion
//#region ../node_modules/tslib/tslib.es6.mjs
function Tn(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function En(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function P(e) {
	return this instanceof P ? (this.v = e, this) : new P(e);
}
function Dn(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r = n.apply(e, t || []), i, a = [];
	return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function o(e) {
		return function(t) {
			return Promise.resolve(t).then(e, d);
		};
	}
	function s(e, t) {
		r[e] && (i[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || c(e, t);
			});
		}, t && (i[e] = t(i[e])));
	}
	function c(e, t) {
		try {
			l(r[e](t));
		} catch (e) {
			f(a[0][3], e);
		}
	}
	function l(e) {
		e.value instanceof P ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
	}
	function u(e) {
		c("next", e);
	}
	function d(e) {
		c("throw", e);
	}
	function f(e, t) {
		e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function On(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: P(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function kn(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof En == "function" ? En(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
		return this;
	}, n);
	function r(t) {
		n[t] = e[t] && function(n) {
			return new Promise(function(r, a) {
				n = e[t](n), i(r, a, n.done, n.value);
			});
		};
	}
	function i(e, t, n, r) {
		Promise.resolve(r).then(function(t) {
			e({
				value: t,
				done: n
			});
		}, t);
	}
}
//#endregion
//#region ../node_modules/apache-arrow/util/utf8.mjs
var An = new TextDecoder("utf-8"), jn = An.decode.bind(An), Mn = new TextEncoder(), Nn = (e) => Mn.encode(e), Pn = (e) => typeof e == "boolean", Fn = (e) => typeof e == "function", In = (e) => e != null && Object(e) === e, Ln = (e) => In(e) && Fn(e.then), Rn = (e) => In(e) && Fn(e[Symbol.iterator]), zn = (e) => In(e) && Fn(e[Symbol.asyncIterator]), Bn = (e) => In(e) && "done" in e && "value" in e, Vn = (e) => "_getDOMStream" in e && "_getNodeStream" in e, Hn = (e) => In(e) && Fn(e.abort) && Fn(e.getWriter) && !Vn(e), Un = (e) => In(e) && Fn(e.end) && Fn(e.write) && Pn(e.writable) && !Vn(e), Wn = (e) => In(e) && Fn(e.clear) && Fn(e.bytes) && Fn(e.position) && Fn(e.setPosition) && Fn(e.capacity) && Fn(e.getBufferIdentifier) && Fn(e.createLong), Gn = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function Kn(e) {
	let t = e[0] ? [e[0]] : [], n, r, i, a;
	for (let o, s, c = 0, l = 0, u = e.length; ++c < u;) o = t[l], s = e[c], !o || !s || o.buffer !== s.buffer || s.byteOffset < o.byteOffset ? s && (t[++l] = s) : ({byteOffset: n, byteLength: i} = o, {byteOffset: r, byteLength: a} = s, n + i < r || r + a < n ? s && (t[++l] = s) : t[l] = new Uint8Array(o.buffer, n, r - n + a));
	return t;
}
function qn(e, t, n = 0, r = t.byteLength) {
	let i = e.byteLength, a = new Uint8Array(e.buffer, e.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(r, i));
	return a.set(o, n), e;
}
function Jn(e, t) {
	let n = Kn(e), r = n.reduce((e, t) => e + t.byteLength, 0), i, a, o, s = 0, c = -1, l = Math.min(t || Infinity, r);
	for (let e = n.length; ++c < e;) {
		if (i = n[c], a = i.subarray(0, Math.min(i.length, l - s)), l <= s + a.length) {
			a.length < i.length ? n[c] = i.subarray(a.length) : a.length === i.length && c++, o ? qn(o, a, s) : o = a;
			break;
		}
		qn(o ||= new Uint8Array(l), a, s), s += a.length;
	}
	return [
		o || /* @__PURE__ */ new Uint8Array(),
		n.slice(c),
		r - (o ? o.byteLength : 0)
	];
}
function Yn(e, t) {
	let n = Bn(t) ? t.value : t;
	return n instanceof e ? e === Uint8Array ? new e(n.buffer, n.byteOffset, n.byteLength) : n : n ? (typeof n == "string" && (n = Nn(n)), n instanceof ArrayBuffer || n instanceof Gn ? new e(n) : Wn(n) ? Yn(e, n.bytes()) : ArrayBuffer.isView(n) ? n.byteLength <= 0 ? new e(0) : new e(n.buffer, n.byteOffset, n.byteLength / e.BYTES_PER_ELEMENT) : e.from(n)) : new e(0);
}
var Xn = (e) => Yn(Int32Array, e), Zn = (e) => Yn(BigInt64Array, e), F = (e) => Yn(Uint8Array, e), Qn = (e) => (e.next(), e);
function* $n(e, t) {
	let n = function* (e) {
		yield e;
	};
	return yield* Qn((function* (t) {
		let n = null;
		do
			n = t.next(yield Yn(e, n));
		while (!n.done);
	})((typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Gn ? n(t) : Rn(t) ? t : n(t))[Symbol.iterator]())), new e();
}
var er = (e) => $n(Uint8Array, e);
function tr(e, t) {
	return Dn(this, arguments, function* () {
		if (Ln(t)) return yield P(yield P(yield* On(kn(tr(e, yield P(t))))));
		let n = function(e) {
			return Dn(this, arguments, function* () {
				yield yield P(yield P(e));
			});
		};
		return yield P(yield* On(kn(Qn((function(t) {
			return Dn(this, arguments, function* () {
				let n = null;
				do
					n = yield P(t.next(yield yield P(Yn(e, n))));
				while (!n.done);
			});
		})((typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Gn ? n(t) : Rn(t) ? function(e) {
			return Dn(this, arguments, function* () {
				yield P(yield* On(kn(Qn((function* (e) {
					let t = null;
					do
						t = e.next(yield t?.value);
					while (!t.done);
				})(e[Symbol.iterator]())))));
			});
		}(t) : zn(t) ? t : n(t))[Symbol.asyncIterator]()))))), yield P(new e());
	});
}
var nr = (e) => tr(Uint8Array, e);
function rr(e, t, n) {
	if (e !== 0) {
		n = n.slice(0, t);
		let r = typeof n[0] == "bigint" ? BigInt(e) : e;
		for (let e = -1, t = n.length; ++e < t;) n[e] += r;
	}
	return n.subarray(0, t);
}
function ir(e, t) {
	let n = 0, r = e.length;
	if (r !== t.length) return !1;
	if (r > 0) do
		if (e[n] !== t[n]) return !1;
	while (++n < r);
	return !0;
}
//#endregion
//#region ../node_modules/apache-arrow/io/adapters.mjs
var ar = {
	fromIterable(e) {
		return or(sr(e));
	},
	fromAsyncIterable(e) {
		return or(cr(e));
	},
	fromDOMStream(e) {
		return or(lr(e));
	},
	fromNodeStream(e) {
		return or(fr(e));
	},
	toDOMStream(e, t) {
		throw Error("\"toDOMStream\" not available in this environment");
	},
	toNodeStream(e, t) {
		throw Error("\"toNodeStream\" not available in this environment");
	}
}, or = (e) => (e.next(), e);
function* sr(e) {
	let t, n = !1, r = [], i, a, o, s = 0;
	function c() {
		return a === "peek" ? Jn(r, o)[0] : ([i, r, s] = Jn(r, o), i);
	}
	({cmd: a, size: o} = (yield null) || {
		cmd: "read",
		size: 0
	});
	let l = er(e)[Symbol.iterator]();
	try {
		do
			if ({done: t, value: i} = Number.isNaN(o - s) ? l.next() : l.next(o - s), !t && i.byteLength > 0 && (r.push(i), s += i.byteLength), t || o <= s) do
				({cmd: a, size: o} = yield c());
			while (o < s);
		while (!t);
	} catch (e) {
		n = !0, typeof l.throw == "function" && l.throw(e);
	} finally {
		n === !1 && typeof l.return == "function" && l.return(null);
	}
	return null;
}
function cr(e) {
	return Dn(this, arguments, function* () {
		let t, n = !1, r = [], i, a, o, s = 0;
		function c() {
			return a === "peek" ? Jn(r, o)[0] : ([i, r, s] = Jn(r, o), i);
		}
		({cmd: a, size: o} = (yield yield P(null)) || {
			cmd: "read",
			size: 0
		});
		let l = nr(e)[Symbol.asyncIterator]();
		try {
			do
				if ({done: t, value: i} = Number.isNaN(o - s) ? yield P(l.next()) : yield P(l.next(o - s)), !t && i.byteLength > 0 && (r.push(i), s += i.byteLength), t || o <= s) do
					({cmd: a, size: o} = yield yield P(c()));
				while (o < s);
			while (!t);
		} catch (e) {
			n = !0, typeof l.throw == "function" && (yield P(l.throw(e)));
		} finally {
			n === !1 && typeof l.return == "function" && (yield P(l.return(/* @__PURE__ */ new Uint8Array())));
		}
		return yield P(null);
	});
}
function lr(e) {
	return Dn(this, arguments, function* () {
		let t = !1, n = !1, r = [], i, a, o, s = 0;
		function c() {
			return a === "peek" ? Jn(r, o)[0] : ([i, r, s] = Jn(r, o), i);
		}
		({cmd: a, size: o} = (yield yield P(null)) || {
			cmd: "read",
			size: 0
		});
		let l = new ur(e);
		try {
			do
				if ({done: t, value: i} = Number.isNaN(o - s) ? yield P(l.read()) : yield P(l.read(o - s)), !t && i.byteLength > 0 && (r.push(F(i)), s += i.byteLength), t || o <= s) do
					({cmd: a, size: o} = yield yield P(c()));
				while (o < s);
			while (!t);
		} catch (e) {
			n = !0, yield P(l.cancel(e));
		} finally {
			n === !1 ? yield P(l.cancel()) : e.locked && l.releaseLock();
		}
		return yield P(null);
	});
}
var ur = class {
	constructor(e) {
		this.source = e, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {});
	}
	get closed() {
		return this.reader ? this.reader.closed.catch(() => {}) : Promise.resolve();
	}
	releaseLock() {
		this.reader && this.reader.releaseLock(), this.reader = null;
	}
	cancel(e) {
		return Tn(this, void 0, void 0, function* () {
			let { reader: t, source: n } = this;
			t && (yield t.cancel(e).catch(() => {})), n && n.locked && this.releaseLock();
		});
	}
	read(e) {
		return Tn(this, void 0, void 0, function* () {
			if (e === 0) return {
				done: this.reader == null,
				value: /* @__PURE__ */ new Uint8Array()
			};
			let t = yield this.reader.read();
			return !t.done && (t.value = F(t)), t;
		});
	}
}, dr = (e, t) => {
	let n = (e) => r([t, e]), r;
	return [
		t,
		n,
		new Promise((i) => (r = i) && e.once(t, n))
	];
};
function fr(e) {
	return Dn(this, arguments, function* () {
		let t = [], n = "error", r = !1, i = null, a, o, s = 0, c = [], l;
		function u() {
			return a === "peek" ? Jn(c, o)[0] : ([l, c, s] = Jn(c, o), l);
		}
		if ({cmd: a, size: o} = (yield yield P(null)) || {
			cmd: "read",
			size: 0
		}, e.isTTY) return yield yield P(/* @__PURE__ */ new Uint8Array()), yield P(null);
		try {
			t[0] = dr(e, "end"), t[1] = dr(e, "error");
			do {
				if (t[2] = dr(e, "readable"), [n, i] = yield P(Promise.race(t.map((e) => e[2]))), n === "error") break;
				if ((r = n === "end") || (Number.isFinite(o - s) ? (l = F(e.read(o - s)), l.byteLength < o - s && (l = F(e.read()))) : l = F(e.read()), l.byteLength > 0 && (c.push(l), s += l.byteLength)), r || o <= s) do
					({cmd: a, size: o} = yield yield P(u()));
				while (o < s);
			} while (!r);
		} finally {
			yield P(d(t, n === "error" ? i : null));
		}
		return yield P(null);
		function d(t, n) {
			return l = c = null, new Promise((r, i) => {
				for (let [n, r] of t) e.off(n, r);
				try {
					let t = e.destroy;
					t && t.call(e, n), n = void 0;
				} catch (e) {
					n = e || n;
				} finally {
					n == null ? r() : i(n);
				}
			});
		}
	});
}
//#endregion
//#region ../node_modules/apache-arrow/fb/metadata-version.mjs
var pr;
(function(e) {
	e[e.V1 = 0] = "V1", e[e.V2 = 1] = "V2", e[e.V3 = 2] = "V3", e[e.V4 = 3] = "V4", e[e.V5 = 4] = "V5";
})(pr ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/union-mode.mjs
var mr;
(function(e) {
	e[e.Sparse = 0] = "Sparse", e[e.Dense = 1] = "Dense";
})(mr ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/precision.mjs
var hr;
(function(e) {
	e[e.HALF = 0] = "HALF", e[e.SINGLE = 1] = "SINGLE", e[e.DOUBLE = 2] = "DOUBLE";
})(hr ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/date-unit.mjs
var gr;
(function(e) {
	e[e.DAY = 0] = "DAY", e[e.MILLISECOND = 1] = "MILLISECOND";
})(gr ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/time-unit.mjs
var I;
(function(e) {
	e[e.SECOND = 0] = "SECOND", e[e.MILLISECOND = 1] = "MILLISECOND", e[e.MICROSECOND = 2] = "MICROSECOND", e[e.NANOSECOND = 3] = "NANOSECOND";
})(I ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/interval-unit.mjs
var _r;
(function(e) {
	e[e.YEAR_MONTH = 0] = "YEAR_MONTH", e[e.DAY_TIME = 1] = "DAY_TIME", e[e.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(_r ||= {});
//#endregion
//#region ../node_modules/flatbuffers/mjs/utils.js
var vr = /* @__PURE__ */ new Int32Array(2), yr = new Float32Array(vr.buffer), br = new Float64Array(vr.buffer), xr = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1, Sr;
(function(e) {
	e[e.UTF8_BYTES = 1] = "UTF8_BYTES", e[e.UTF16_STRING = 2] = "UTF16_STRING";
})(Sr ||= {});
//#endregion
//#region ../node_modules/flatbuffers/mjs/byte-buffer.js
var Cr = class e {
	constructor(e) {
		this.bytes_ = e, this.position_ = 0, this.text_decoder_ = new TextDecoder();
	}
	static allocate(t) {
		return new e(new Uint8Array(t));
	}
	clear() {
		this.position_ = 0;
	}
	bytes() {
		return this.bytes_;
	}
	position() {
		return this.position_;
	}
	setPosition(e) {
		this.position_ = e;
	}
	capacity() {
		return this.bytes_.length;
	}
	readInt8(e) {
		return this.readUint8(e) << 24 >> 24;
	}
	readUint8(e) {
		return this.bytes_[e];
	}
	readInt16(e) {
		return this.readUint16(e) << 16 >> 16;
	}
	readUint16(e) {
		return this.bytes_[e] | this.bytes_[e + 1] << 8;
	}
	readInt32(e) {
		return this.bytes_[e] | this.bytes_[e + 1] << 8 | this.bytes_[e + 2] << 16 | this.bytes_[e + 3] << 24;
	}
	readUint32(e) {
		return this.readInt32(e) >>> 0;
	}
	readInt64(e) {
		return BigInt.asIntN(64, BigInt(this.readUint32(e)) + (BigInt(this.readUint32(e + 4)) << BigInt(32)));
	}
	readUint64(e) {
		return BigInt.asUintN(64, BigInt(this.readUint32(e)) + (BigInt(this.readUint32(e + 4)) << BigInt(32)));
	}
	readFloat32(e) {
		return vr[0] = this.readInt32(e), yr[0];
	}
	readFloat64(e) {
		return vr[+!xr] = this.readInt32(e), vr[+!!xr] = this.readInt32(e + 4), br[0];
	}
	writeInt8(e, t) {
		this.bytes_[e] = t;
	}
	writeUint8(e, t) {
		this.bytes_[e] = t;
	}
	writeInt16(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8;
	}
	writeUint16(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8;
	}
	writeInt32(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8, this.bytes_[e + 2] = t >> 16, this.bytes_[e + 3] = t >> 24;
	}
	writeUint32(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8, this.bytes_[e + 2] = t >> 16, this.bytes_[e + 3] = t >> 24;
	}
	writeInt64(e, t) {
		this.writeInt32(e, Number(BigInt.asIntN(32, t))), this.writeInt32(e + 4, Number(BigInt.asIntN(32, t >> BigInt(32))));
	}
	writeUint64(e, t) {
		this.writeUint32(e, Number(BigInt.asUintN(32, t))), this.writeUint32(e + 4, Number(BigInt.asUintN(32, t >> BigInt(32))));
	}
	writeFloat32(e, t) {
		yr[0] = t, this.writeInt32(e, vr[0]);
	}
	writeFloat64(e, t) {
		br[0] = t, this.writeInt32(e, vr[+!xr]), this.writeInt32(e + 4, vr[+!!xr]);
	}
	getBufferIdentifier() {
		if (this.bytes_.length < this.position_ + 4 + 4) throw Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
		let e = "";
		for (let t = 0; t < 4; t++) e += String.fromCharCode(this.readInt8(this.position_ + 4 + t));
		return e;
	}
	__offset(e, t) {
		let n = e - this.readInt32(e);
		return t < this.readInt16(n) ? this.readInt16(n + t) : 0;
	}
	__union(e, t) {
		return e.bb_pos = t + this.readInt32(t), e.bb = this, e;
	}
	__string(e, t) {
		e += this.readInt32(e);
		let n = this.readInt32(e);
		e += 4;
		let r = this.bytes_.subarray(e, e + n);
		return t === Sr.UTF8_BYTES ? r : this.text_decoder_.decode(r);
	}
	__union_with_string(e, t) {
		return typeof e == "string" ? this.__string(t) : this.__union(e, t);
	}
	__indirect(e) {
		return e + this.readInt32(e);
	}
	__vector(e) {
		return e + this.readInt32(e) + 4;
	}
	__vector_len(e) {
		return this.readInt32(e + this.readInt32(e));
	}
	__has_identifier(e) {
		if (e.length != 4) throw Error("FlatBuffers: file identifier must be length 4");
		for (let t = 0; t < 4; t++) if (e.charCodeAt(t) != this.readInt8(this.position() + 4 + t)) return !1;
		return !0;
	}
	createScalarList(e, t) {
		let n = [];
		for (let r = 0; r < t; ++r) {
			let t = e(r);
			t !== null && n.push(t);
		}
		return n;
	}
	createObjList(e, t) {
		let n = [];
		for (let r = 0; r < t; ++r) {
			let t = e(r);
			t !== null && n.push(t.unpack());
		}
		return n;
	}
}, wr = class e {
	constructor(e) {
		this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
		let t;
		t = e || 1024, this.bb = Cr.allocate(t), this.space = t;
	}
	clear() {
		this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
	}
	forceDefaults(e) {
		this.force_defaults = e;
	}
	dataBuffer() {
		return this.bb;
	}
	asUint8Array() {
		return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
	}
	prep(t, n) {
		t > this.minalign && (this.minalign = t);
		let r = ~(this.bb.capacity() - this.space + n) + 1 & t - 1;
		for (; this.space < r + t + n;) {
			let t = this.bb.capacity();
			this.bb = e.growByteBuffer(this.bb), this.space += this.bb.capacity() - t;
		}
		this.pad(r);
	}
	pad(e) {
		for (let t = 0; t < e; t++) this.bb.writeInt8(--this.space, 0);
	}
	writeInt8(e) {
		this.bb.writeInt8(--this.space, e);
	}
	writeInt16(e) {
		this.bb.writeInt16(this.space -= 2, e);
	}
	writeInt32(e) {
		this.bb.writeInt32(this.space -= 4, e);
	}
	writeInt64(e) {
		this.bb.writeInt64(this.space -= 8, e);
	}
	writeFloat32(e) {
		this.bb.writeFloat32(this.space -= 4, e);
	}
	writeFloat64(e) {
		this.bb.writeFloat64(this.space -= 8, e);
	}
	addInt8(e) {
		this.prep(1, 0), this.writeInt8(e);
	}
	addInt16(e) {
		this.prep(2, 0), this.writeInt16(e);
	}
	addInt32(e) {
		this.prep(4, 0), this.writeInt32(e);
	}
	addInt64(e) {
		this.prep(8, 0), this.writeInt64(e);
	}
	addFloat32(e) {
		this.prep(4, 0), this.writeFloat32(e);
	}
	addFloat64(e) {
		this.prep(8, 0), this.writeFloat64(e);
	}
	addFieldInt8(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt8(t), this.slot(e));
	}
	addFieldInt16(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt16(t), this.slot(e));
	}
	addFieldInt32(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt32(t), this.slot(e));
	}
	addFieldInt64(e, t, n) {
		(this.force_defaults || t !== n) && (this.addInt64(t), this.slot(e));
	}
	addFieldFloat32(e, t, n) {
		(this.force_defaults || t != n) && (this.addFloat32(t), this.slot(e));
	}
	addFieldFloat64(e, t, n) {
		(this.force_defaults || t != n) && (this.addFloat64(t), this.slot(e));
	}
	addFieldOffset(e, t, n) {
		(this.force_defaults || t != n) && (this.addOffset(t), this.slot(e));
	}
	addFieldStruct(e, t, n) {
		t != n && (this.nested(t), this.slot(e));
	}
	nested(e) {
		if (e != this.offset()) throw TypeError("FlatBuffers: struct must be serialized inline.");
	}
	notNested() {
		if (this.isNested) throw TypeError("FlatBuffers: object serialization must not be nested.");
	}
	slot(e) {
		this.vtable !== null && (this.vtable[e] = this.offset());
	}
	offset() {
		return this.bb.capacity() - this.space;
	}
	static growByteBuffer(e) {
		let t = e.capacity();
		if (t & 3221225472) throw Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
		let n = t << 1, r = Cr.allocate(n);
		return r.setPosition(n - t), r.bytes().set(e.bytes(), n - t), r;
	}
	addOffset(e) {
		this.prep(4, 0), this.writeInt32(this.offset() - e + 4);
	}
	startObject(e) {
		this.notNested(), this.vtable ??= [], this.vtable_in_use = e;
		for (let t = 0; t < e; t++) this.vtable[t] = 0;
		this.isNested = !0, this.object_start = this.offset();
	}
	endObject() {
		if (this.vtable == null || !this.isNested) throw Error("FlatBuffers: endObject called without startObject");
		this.addInt32(0);
		let e = this.offset(), t = this.vtable_in_use - 1;
		for (; t >= 0 && this.vtable[t] == 0; t--);
		let n = t + 1;
		for (; t >= 0; t--) this.addInt16(this.vtable[t] == 0 ? 0 : e - this.vtable[t]);
		this.addInt16(e - this.object_start);
		let r = (n + 2) * 2;
		this.addInt16(r);
		let i = 0, a = this.space;
		outer_loop: for (t = 0; t < this.vtables.length; t++) {
			let e = this.bb.capacity() - this.vtables[t];
			if (r == this.bb.readInt16(e)) {
				for (let t = 2; t < r; t += 2) if (this.bb.readInt16(a + t) != this.bb.readInt16(e + t)) continue outer_loop;
				i = this.vtables[t];
				break;
			}
		}
		return i ? (this.space = this.bb.capacity() - e, this.bb.writeInt32(this.space, i - e)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - e, this.offset() - e)), this.isNested = !1, e;
	}
	finish(e, t, n) {
		let r = n ? 4 : 0;
		if (t) {
			let e = t;
			if (this.prep(this.minalign, 8 + r), e.length != 4) throw TypeError("FlatBuffers: file identifier must be length 4");
			for (let t = 3; t >= 0; t--) this.writeInt8(e.charCodeAt(t));
		}
		this.prep(this.minalign, 4 + r), this.addOffset(e), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
	}
	finishSizePrefixed(e, t) {
		this.finish(e, t, !0);
	}
	requiredField(e, t) {
		let n = this.bb.capacity() - e, r = n - this.bb.readInt32(n);
		if (!(t < this.bb.readInt16(r) && this.bb.readInt16(r + t) != 0)) throw TypeError("FlatBuffers: field " + t + " must be set");
	}
	startVector(e, t, n) {
		this.notNested(), this.vector_num_elems = t, this.prep(4, e * t), this.prep(n, e * t);
	}
	endVector() {
		return this.writeInt32(this.vector_num_elems), this.offset();
	}
	createSharedString(e) {
		if (!e) return 0;
		if (this.string_maps ||= /* @__PURE__ */ new Map(), this.string_maps.has(e)) return this.string_maps.get(e);
		let t = this.createString(e);
		return this.string_maps.set(e, t), t;
	}
	createString(e) {
		if (e == null) return 0;
		let t;
		return t = e instanceof Uint8Array ? e : this.text_encoder.encode(e), this.addInt8(0), this.startVector(1, t.length, 1), this.bb.setPosition(this.space -= t.length), this.bb.bytes().set(t, this.space), this.endVector();
	}
	createByteVector(e) {
		return e == null ? 0 : (this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length), this.bb.bytes().set(e, this.space), this.endVector());
	}
	createObjectOffset(e) {
		return e === null ? 0 : typeof e == "string" ? this.createString(e) : e.pack(this);
	}
	createObjectOffsetList(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) {
			let r = e[n];
			if (r !== null) t.push(this.createObjectOffset(r));
			else throw TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
		}
		return t;
	}
	createStructOffsetList(e, t) {
		return t(this, e.length), this.createObjectOffsetList(e.slice().reverse()), this.endVector();
	}
}, Tr;
(function(e) {
	e[e.BUFFER = 0] = "BUFFER";
})(Tr ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/compression-type.mjs
var Er;
(function(e) {
	e[e.LZ4_FRAME = 0] = "LZ4_FRAME", e[e.ZSTD = 1] = "ZSTD";
})(Er ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/body-compression.mjs
var Dr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBodyCompression(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBodyCompression(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	codec() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt8(this.bb_pos + e) : Er.LZ4_FRAME;
	}
	method() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readInt8(this.bb_pos + e) : Tr.BUFFER;
	}
	static startBodyCompression(e) {
		e.startObject(2);
	}
	static addCodec(e, t) {
		e.addFieldInt8(0, t, Er.LZ4_FRAME);
	}
	static addMethod(e, t) {
		e.addFieldInt8(1, t, Tr.BUFFER);
	}
	static endBodyCompression(e) {
		return e.endObject();
	}
	static createBodyCompression(t, n, r) {
		return e.startBodyCompression(t), e.addCodec(t, n), e.addMethod(t, r), e.endBodyCompression(t);
	}
}, Or = class {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	offset() {
		return this.bb.readInt64(this.bb_pos);
	}
	length() {
		return this.bb.readInt64(this.bb_pos + 8);
	}
	static sizeOf() {
		return 16;
	}
	static createBuffer(e, t, n) {
		return e.prep(8, 16), e.writeInt64(BigInt(n ?? 0)), e.writeInt64(BigInt(t ?? 0)), e.offset();
	}
}, kr = class {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	length() {
		return this.bb.readInt64(this.bb_pos);
	}
	nullCount() {
		return this.bb.readInt64(this.bb_pos + 8);
	}
	static sizeOf() {
		return 16;
	}
	static createFieldNode(e, t, n) {
		return e.prep(8, 16), e.writeInt64(BigInt(n ?? 0)), e.writeInt64(BigInt(t ?? 0)), e.offset();
	}
}, Ar = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsRecordBatch(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsRecordBatch(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	length() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	nodes(e, t) {
		let n = this.bb.__offset(this.bb_pos, 6);
		return n ? (t || new kr()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb) : null;
	}
	nodesLength() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	buffers(e, t) {
		let n = this.bb.__offset(this.bb_pos, 8);
		return n ? (t || new Or()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb) : null;
	}
	buffersLength() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	compression(e) {
		let t = this.bb.__offset(this.bb_pos, 10);
		return t ? (e || new Dr()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	variadicBufferCounts(e) {
		let t = this.bb.__offset(this.bb_pos, 12);
		return t ? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8) : BigInt(0);
	}
	variadicBufferCountsLength() {
		let e = this.bb.__offset(this.bb_pos, 12);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startRecordBatch(e) {
		e.startObject(5);
	}
	static addLength(e, t) {
		e.addFieldInt64(0, t, BigInt("0"));
	}
	static addNodes(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static startNodesVector(e, t) {
		e.startVector(16, t, 8);
	}
	static addBuffers(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static startBuffersVector(e, t) {
		e.startVector(16, t, 8);
	}
	static addCompression(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static addVariadicBufferCounts(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static createVariadicBufferCountsVector(e, t) {
		e.startVector(8, t.length, 8);
		for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
		return e.endVector();
	}
	static startVariadicBufferCountsVector(e, t) {
		e.startVector(8, t, 8);
	}
	static endRecordBatch(e) {
		return e.endObject();
	}
}, jr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDictionaryBatch(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDictionaryBatch(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	id() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	data(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? (e || new Ar()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	isDelta() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	static startDictionaryBatch(e) {
		e.startObject(3);
	}
	static addId(e, t) {
		e.addFieldInt64(0, t, BigInt("0"));
	}
	static addData(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static addIsDelta(e, t) {
		e.addFieldInt8(2, +t, 0);
	}
	static endDictionaryBatch(e) {
		return e.endObject();
	}
}, Mr;
(function(e) {
	e[e.Little = 0] = "Little", e[e.Big = 1] = "Big";
})(Mr ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/dictionary-kind.mjs
var Nr;
(function(e) {
	e[e.DenseArray = 0] = "DenseArray";
})(Nr ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/int.mjs
var Pr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsInt(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsInt(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	bitWidth() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	isSigned() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	static startInt(e) {
		e.startObject(2);
	}
	static addBitWidth(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static addIsSigned(e, t) {
		e.addFieldInt8(1, +t, 0);
	}
	static endInt(e) {
		return e.endObject();
	}
	static createInt(t, n, r) {
		return e.startInt(t), e.addBitWidth(t, n), e.addIsSigned(t, r), e.endInt(t);
	}
}, Fr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDictionaryEncoding(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDictionaryEncoding(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	id() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	indexType(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? (e || new Pr()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	isOrdered() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	dictionaryKind() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.readInt16(this.bb_pos + e) : Nr.DenseArray;
	}
	static startDictionaryEncoding(e) {
		e.startObject(4);
	}
	static addId(e, t) {
		e.addFieldInt64(0, t, BigInt("0"));
	}
	static addIndexType(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static addIsOrdered(e, t) {
		e.addFieldInt8(2, +t, 0);
	}
	static addDictionaryKind(e, t) {
		e.addFieldInt16(3, t, Nr.DenseArray);
	}
	static endDictionaryEncoding(e) {
		return e.endObject();
	}
}, Ir = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsKeyValue(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsKeyValue(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	key(e) {
		let t = this.bb.__offset(this.bb_pos, 4);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	value(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	static startKeyValue(e) {
		e.startObject(2);
	}
	static addKey(e, t) {
		e.addFieldOffset(0, t, 0);
	}
	static addValue(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static endKeyValue(e) {
		return e.endObject();
	}
	static createKeyValue(t, n, r) {
		return e.startKeyValue(t), e.addKey(t, n), e.addValue(t, r), e.endKeyValue(t);
	}
}, Lr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBinary(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBinary(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startBinary(e) {
		e.startObject(0);
	}
	static endBinary(e) {
		return e.endObject();
	}
	static createBinary(t) {
		return e.startBinary(t), e.endBinary(t);
	}
}, Rr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBinaryView(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBinaryView(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startBinaryView(e) {
		e.startObject(0);
	}
	static endBinaryView(e) {
		return e.endObject();
	}
	static createBinaryView(t) {
		return e.startBinaryView(t), e.endBinaryView(t);
	}
}, zr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBool(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBool(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startBool(e) {
		e.startObject(0);
	}
	static endBool(e) {
		return e.endObject();
	}
	static createBool(t) {
		return e.startBool(t), e.endBool(t);
	}
}, Br = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDate(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDate(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : gr.MILLISECOND;
	}
	static startDate(e) {
		e.startObject(1);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, gr.MILLISECOND);
	}
	static endDate(e) {
		return e.endObject();
	}
	static createDate(t, n) {
		return e.startDate(t), e.addUnit(t, n), e.endDate(t);
	}
}, Vr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDecimal(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDecimal(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	precision() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	scale() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	bitWidth() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.readInt32(this.bb_pos + e) : 128;
	}
	static startDecimal(e) {
		e.startObject(3);
	}
	static addPrecision(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static addScale(e, t) {
		e.addFieldInt32(1, t, 0);
	}
	static addBitWidth(e, t) {
		e.addFieldInt32(2, t, 128);
	}
	static endDecimal(e) {
		return e.endObject();
	}
	static createDecimal(t, n, r, i) {
		return e.startDecimal(t), e.addPrecision(t, n), e.addScale(t, r), e.addBitWidth(t, i), e.endDecimal(t);
	}
}, Hr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDuration(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDuration(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : I.MILLISECOND;
	}
	static startDuration(e) {
		e.startObject(1);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, I.MILLISECOND);
	}
	static endDuration(e) {
		return e.endObject();
	}
	static createDuration(t, n) {
		return e.startDuration(t), e.addUnit(t, n), e.endDuration(t);
	}
}, Ur = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFixedSizeBinary(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFixedSizeBinary(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	byteWidth() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	static startFixedSizeBinary(e) {
		e.startObject(1);
	}
	static addByteWidth(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static endFixedSizeBinary(e) {
		return e.endObject();
	}
	static createFixedSizeBinary(t, n) {
		return e.startFixedSizeBinary(t), e.addByteWidth(t, n), e.endFixedSizeBinary(t);
	}
}, Wr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFixedSizeList(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFixedSizeList(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	listSize() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	static startFixedSizeList(e) {
		e.startObject(1);
	}
	static addListSize(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static endFixedSizeList(e) {
		return e.endObject();
	}
	static createFixedSizeList(t, n) {
		return e.startFixedSizeList(t), e.addListSize(t, n), e.endFixedSizeList(t);
	}
}, Gr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFloatingPoint(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFloatingPoint(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	precision() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : hr.HALF;
	}
	static startFloatingPoint(e) {
		e.startObject(1);
	}
	static addPrecision(e, t) {
		e.addFieldInt16(0, t, hr.HALF);
	}
	static endFloatingPoint(e) {
		return e.endObject();
	}
	static createFloatingPoint(t, n) {
		return e.startFloatingPoint(t), e.addPrecision(t, n), e.endFloatingPoint(t);
	}
}, Kr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsInterval(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsInterval(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : _r.YEAR_MONTH;
	}
	static startInterval(e) {
		e.startObject(1);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, _r.YEAR_MONTH);
	}
	static endInterval(e) {
		return e.endObject();
	}
	static createInterval(t, n) {
		return e.startInterval(t), e.addUnit(t, n), e.endInterval(t);
	}
}, qr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsLargeBinary(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsLargeBinary(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startLargeBinary(e) {
		e.startObject(0);
	}
	static endLargeBinary(e) {
		return e.endObject();
	}
	static createLargeBinary(t) {
		return e.startLargeBinary(t), e.endLargeBinary(t);
	}
}, Jr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsLargeList(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsLargeList(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startLargeList(e) {
		e.startObject(0);
	}
	static endLargeList(e) {
		return e.endObject();
	}
	static createLargeList(t) {
		return e.startLargeList(t), e.endLargeList(t);
	}
}, Yr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsLargeUtf8(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsLargeUtf8(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startLargeUtf8(e) {
		e.startObject(0);
	}
	static endLargeUtf8(e) {
		return e.endObject();
	}
	static createLargeUtf8(t) {
		return e.startLargeUtf8(t), e.endLargeUtf8(t);
	}
}, Xr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsList(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsList(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startList(e) {
		e.startObject(0);
	}
	static endList(e) {
		return e.endObject();
	}
	static createList(t) {
		return e.startList(t), e.endList(t);
	}
}, Zr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsMap(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsMap(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	keysSorted() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	static startMap(e) {
		e.startObject(1);
	}
	static addKeysSorted(e, t) {
		e.addFieldInt8(0, +t, 0);
	}
	static endMap(e) {
		return e.endObject();
	}
	static createMap(t, n) {
		return e.startMap(t), e.addKeysSorted(t, n), e.endMap(t);
	}
}, Qr = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsNull(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsNull(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startNull(e) {
		e.startObject(0);
	}
	static endNull(e) {
		return e.endObject();
	}
	static createNull(t) {
		return e.startNull(t), e.endNull(t);
	}
}, $r = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsStruct_(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsStruct_(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startStruct_(e) {
		e.startObject(0);
	}
	static endStruct_(e) {
		return e.endObject();
	}
	static createStruct_(t) {
		return e.startStruct_(t), e.endStruct_(t);
	}
}, ei = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsTime(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsTime(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : I.MILLISECOND;
	}
	bitWidth() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readInt32(this.bb_pos + e) : 32;
	}
	static startTime(e) {
		e.startObject(2);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, I.MILLISECOND);
	}
	static addBitWidth(e, t) {
		e.addFieldInt32(1, t, 32);
	}
	static endTime(e) {
		return e.endObject();
	}
	static createTime(t, n, r) {
		return e.startTime(t), e.addUnit(t, n), e.addBitWidth(t, r), e.endTime(t);
	}
}, ti = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsTimestamp(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsTimestamp(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : I.SECOND;
	}
	timezone(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	static startTimestamp(e) {
		e.startObject(2);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, I.SECOND);
	}
	static addTimezone(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static endTimestamp(e) {
		return e.endObject();
	}
	static createTimestamp(t, n, r) {
		return e.startTimestamp(t), e.addUnit(t, n), e.addTimezone(t, r), e.endTimestamp(t);
	}
}, ni = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsUnion(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsUnion(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	mode() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : mr.Sparse;
	}
	typeIds(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? this.bb.readInt32(this.bb.__vector(this.bb_pos + t) + e * 4) : 0;
	}
	typeIdsLength() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	typeIdsArray() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e), this.bb.__vector_len(this.bb_pos + e)) : null;
	}
	static startUnion(e) {
		e.startObject(2);
	}
	static addMode(e, t) {
		e.addFieldInt16(0, t, mr.Sparse);
	}
	static addTypeIds(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static createTypeIdsVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addInt32(t[n]);
		return e.endVector();
	}
	static startTypeIdsVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endUnion(e) {
		return e.endObject();
	}
	static createUnion(t, n, r) {
		return e.startUnion(t), e.addMode(t, n), e.addTypeIds(t, r), e.endUnion(t);
	}
}, ri = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsUtf8(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsUtf8(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startUtf8(e) {
		e.startObject(0);
	}
	static endUtf8(e) {
		return e.endObject();
	}
	static createUtf8(t) {
		return e.startUtf8(t), e.endUtf8(t);
	}
}, ii = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsUtf8View(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsUtf8View(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startUtf8View(e) {
		e.startObject(0);
	}
	static endUtf8View(e) {
		return e.endObject();
	}
	static createUtf8View(t) {
		return e.startUtf8View(t), e.endUtf8View(t);
	}
}, ai;
(function(e) {
	e[e.NONE = 0] = "NONE", e[e.Null = 1] = "Null", e[e.Int = 2] = "Int", e[e.FloatingPoint = 3] = "FloatingPoint", e[e.Binary = 4] = "Binary", e[e.Utf8 = 5] = "Utf8", e[e.Bool = 6] = "Bool", e[e.Decimal = 7] = "Decimal", e[e.Date = 8] = "Date", e[e.Time = 9] = "Time", e[e.Timestamp = 10] = "Timestamp", e[e.Interval = 11] = "Interval", e[e.List = 12] = "List", e[e.Struct_ = 13] = "Struct_", e[e.Union = 14] = "Union", e[e.FixedSizeBinary = 15] = "FixedSizeBinary", e[e.FixedSizeList = 16] = "FixedSizeList", e[e.Map = 17] = "Map", e[e.Duration = 18] = "Duration", e[e.LargeBinary = 19] = "LargeBinary", e[e.LargeUtf8 = 20] = "LargeUtf8", e[e.LargeList = 21] = "LargeList", e[e.RunEndEncoded = 22] = "RunEndEncoded", e[e.BinaryView = 23] = "BinaryView", e[e.Utf8View = 24] = "Utf8View", e[e.ListView = 25] = "ListView", e[e.LargeListView = 26] = "LargeListView";
})(ai ||= {});
//#endregion
//#region ../node_modules/apache-arrow/fb/field.mjs
var oi = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsField(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsField(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	name(e) {
		let t = this.bb.__offset(this.bb_pos, 4);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	nullable() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	typeType() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.readUint8(this.bb_pos + e) : ai.NONE;
	}
	type(e) {
		let t = this.bb.__offset(this.bb_pos, 10);
		return t ? this.bb.__union(e, this.bb_pos + t) : null;
	}
	dictionary(e) {
		let t = this.bb.__offset(this.bb_pos, 12);
		return t ? (e || new Fr()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	children(t, n) {
		let r = this.bb.__offset(this.bb_pos, 14);
		return r ? (n || new e()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
	}
	childrenLength() {
		let e = this.bb.__offset(this.bb_pos, 14);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 16);
		return n ? (t || new Ir()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 16);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startField(e) {
		e.startObject(7);
	}
	static addName(e, t) {
		e.addFieldOffset(0, t, 0);
	}
	static addNullable(e, t) {
		e.addFieldInt8(1, +t, 0);
	}
	static addTypeType(e, t) {
		e.addFieldInt8(2, t, ai.NONE);
	}
	static addType(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static addDictionary(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static addChildren(e, t) {
		e.addFieldOffset(5, t, 0);
	}
	static createChildrenVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startChildrenVector(e, t) {
		e.startVector(4, t, 4);
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(6, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endField(e) {
		return e.endObject();
	}
}, si = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsSchema(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsSchema(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	endianness() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : Mr.Little;
	}
	fields(e, t) {
		let n = this.bb.__offset(this.bb_pos, 6);
		return n ? (t || new oi()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	fieldsLength() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 8);
		return n ? (t || new Ir()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	features(e) {
		let t = this.bb.__offset(this.bb_pos, 10);
		return t ? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8) : BigInt(0);
	}
	featuresLength() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startSchema(e) {
		e.startObject(4);
	}
	static addEndianness(e, t) {
		e.addFieldInt16(0, t, Mr.Little);
	}
	static addFields(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static createFieldsVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startFieldsVector(e, t) {
		e.startVector(4, t, 4);
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static addFeatures(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static createFeaturesVector(e, t) {
		e.startVector(8, t.length, 8);
		for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
		return e.endVector();
	}
	static startFeaturesVector(e, t) {
		e.startVector(8, t, 8);
	}
	static endSchema(e) {
		return e.endObject();
	}
	static createSchema(t, n, r, i, a) {
		return e.startSchema(t), e.addEndianness(t, n), e.addFields(t, r), e.addCustomMetadata(t, i), e.addFeatures(t, a), e.endSchema(t);
	}
}, ci;
(function(e) {
	e[e.NONE = 0] = "NONE", e[e.Schema = 1] = "Schema", e[e.DictionaryBatch = 2] = "DictionaryBatch", e[e.RecordBatch = 3] = "RecordBatch", e[e.Tensor = 4] = "Tensor", e[e.SparseTensor = 5] = "SparseTensor";
})(ci ||= {});
//#endregion
//#region ../node_modules/apache-arrow/enum.mjs
var L;
(function(e) {
	e[e.NONE = 0] = "NONE", e[e.Null = 1] = "Null", e[e.Int = 2] = "Int", e[e.Float = 3] = "Float", e[e.Binary = 4] = "Binary", e[e.Utf8 = 5] = "Utf8", e[e.Bool = 6] = "Bool", e[e.Decimal = 7] = "Decimal", e[e.Date = 8] = "Date", e[e.Time = 9] = "Time", e[e.Timestamp = 10] = "Timestamp", e[e.Interval = 11] = "Interval", e[e.List = 12] = "List", e[e.Struct = 13] = "Struct", e[e.Union = 14] = "Union", e[e.FixedSizeBinary = 15] = "FixedSizeBinary", e[e.FixedSizeList = 16] = "FixedSizeList", e[e.Map = 17] = "Map", e[e.Duration = 18] = "Duration", e[e.LargeBinary = 19] = "LargeBinary", e[e.LargeUtf8 = 20] = "LargeUtf8", e[e.LargeList = 21] = "LargeList", e[e.BinaryView = 23] = "BinaryView", e[e.Utf8View = 24] = "Utf8View", e[e.Dictionary = -1] = "Dictionary", e[e.Int8 = -2] = "Int8", e[e.Int16 = -3] = "Int16", e[e.Int32 = -4] = "Int32", e[e.Int64 = -5] = "Int64", e[e.Uint8 = -6] = "Uint8", e[e.Uint16 = -7] = "Uint16", e[e.Uint32 = -8] = "Uint32", e[e.Uint64 = -9] = "Uint64", e[e.Float16 = -10] = "Float16", e[e.Float32 = -11] = "Float32", e[e.Float64 = -12] = "Float64", e[e.DateDay = -13] = "DateDay", e[e.DateMillisecond = -14] = "DateMillisecond", e[e.TimestampSecond = -15] = "TimestampSecond", e[e.TimestampMillisecond = -16] = "TimestampMillisecond", e[e.TimestampMicrosecond = -17] = "TimestampMicrosecond", e[e.TimestampNanosecond = -18] = "TimestampNanosecond", e[e.TimeSecond = -19] = "TimeSecond", e[e.TimeMillisecond = -20] = "TimeMillisecond", e[e.TimeMicrosecond = -21] = "TimeMicrosecond", e[e.TimeNanosecond = -22] = "TimeNanosecond", e[e.DenseUnion = -23] = "DenseUnion", e[e.SparseUnion = -24] = "SparseUnion", e[e.IntervalDayTime = -25] = "IntervalDayTime", e[e.IntervalYearMonth = -26] = "IntervalYearMonth", e[e.DurationSecond = -27] = "DurationSecond", e[e.DurationMillisecond = -28] = "DurationMillisecond", e[e.DurationMicrosecond = -29] = "DurationMicrosecond", e[e.DurationNanosecond = -30] = "DurationNanosecond", e[e.IntervalMonthDayNano = -31] = "IntervalMonthDayNano";
})(L ||= {});
var li;
(function(e) {
	e[e.OFFSET = 0] = "OFFSET", e[e.DATA = 1] = "DATA", e[e.VALIDITY = 2] = "VALIDITY", e[e.TYPE = 3] = "TYPE";
})(li ||= {});
//#endregion
//#region ../node_modules/apache-arrow/util/pretty.mjs
var ui = void 0;
function di(e) {
	if (e === null) return "null";
	if (e === ui) return "undefined";
	switch (typeof e) {
		case "number": return `${e}`;
		case "bigint": return `${e}`;
		case "string": return `"${e}"`;
	}
	return typeof e[Symbol.toPrimitive] == "function" ? e[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e) ? e instanceof BigInt64Array || e instanceof BigUint64Array ? `[${[...e].map((e) => di(e))}]` : `[${e}]` : ArrayBuffer.isView(e) ? `[${e}]` : JSON.stringify(e, (e, t) => typeof t == "bigint" ? `${t}` : t);
}
//#endregion
//#region ../node_modules/apache-arrow/util/bigint.mjs
function R(e) {
	if (typeof e == "bigint" && (e < -(2 ** 53 - 1) || e > 2 ** 53 - 1)) throw TypeError(`${e} is not safe to convert to a number.`);
	return Number(e);
}
function fi(e, t) {
	return R(e / t) + R(e % t) / R(t);
}
//#endregion
//#region ../node_modules/apache-arrow/util/bn.mjs
var pi = Symbol.for("isArrowBigNum");
function mi(e, ...t) {
	return t.length === 0 ? Object.setPrototypeOf(Yn(this.TypedArray, e), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e, ...t), this.constructor.prototype);
}
mi.prototype[pi] = !0, mi.prototype.toJSON = function() {
	return `"${bi(this)}"`;
}, mi.prototype.valueOf = function(e) {
	return yi(this, e);
}, mi.prototype.toString = function() {
	return bi(this);
}, mi.prototype[Symbol.toPrimitive] = function(e = "default") {
	switch (e) {
		case "number": return yi(this);
		case "string": return bi(this);
		case "default": return xi(this);
	}
	return bi(this);
};
function hi(...e) {
	return mi.apply(this, e);
}
function gi(...e) {
	return mi.apply(this, e);
}
function _i(...e) {
	return mi.apply(this, e);
}
Object.setPrototypeOf(hi.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(gi.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(_i.prototype, Object.create(Uint32Array.prototype)), Object.assign(hi.prototype, mi.prototype, {
	constructor: hi,
	signed: !0,
	TypedArray: Int32Array,
	BigIntArray: BigInt64Array
}), Object.assign(gi.prototype, mi.prototype, {
	constructor: gi,
	signed: !1,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
}), Object.assign(_i.prototype, mi.prototype, {
	constructor: _i,
	signed: !0,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
});
var vi = BigInt(4294967296) * BigInt(4294967296) - BigInt(1);
function yi(e, t) {
	let { buffer: n, byteOffset: r, byteLength: i, signed: a } = e, o = new BigUint64Array(n, r, i / 8), s = a && o.at(-1) & BigInt(1) << BigInt(63), c = BigInt(0), l = 0;
	if (s) {
		for (let e of o) c |= (e ^ vi) * (BigInt(1) << BigInt(64 * l++));
		c *= BigInt(-1), c -= BigInt(1);
	} else for (let e of o) c |= e * (BigInt(1) << BigInt(64 * l++));
	if (typeof t == "number" && t > 0) {
		let e = BigInt("1".padEnd(t + 1, "0")), n = c / e, r = s ? -(c % e) : c % e, i = R(n), a = `${r}`.padStart(t, "0");
		return +`${s && i === 0 ? "-" : ""}${i}.${a}`;
	}
	return R(c);
}
function bi(e) {
	if (e.byteLength === 8) return `${new e.BigIntArray(e.buffer, e.byteOffset, 1)[0]}`;
	if (!e.signed) return Si(e);
	let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2);
	if (new Int16Array([t.at(-1)])[0] >= 0) return Si(e);
	t = t.slice();
	let n = 1;
	for (let e = 0; e < t.length; e++) {
		let r = t[e], i = ~r + n;
		t[e] = i, n &= +(r === 0);
	}
	return `-${Si(t)}`;
}
function xi(e) {
	return e.byteLength === 8 ? new e.BigIntArray(e.buffer, e.byteOffset, 1)[0] : bi(e);
}
function Si(e) {
	let t = "", n = /* @__PURE__ */ new Uint32Array(2), r = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2), i = new Uint32Array((r = new Uint16Array(r).reverse()).buffer), a = -1, o = r.length - 1;
	do {
		for (n[0] = r[a = 0]; a < o;) r[a++] = n[1] = n[0] / 10, n[0] = (n[0] - n[1] * 10 << 16) + r[a];
		r[a] = n[1] = n[0] / 10, n[0] -= n[1] * 10, t = `${n[0]}${t}`;
	} while (i[0] || i[1] || i[2] || i[3]);
	return t ?? "0";
}
var Ci = class e {
	static new(e, t) {
		switch (t) {
			case !0: return new hi(e);
			case !1: return new gi(e);
		}
		switch (e.constructor) {
			case Int8Array:
			case Int16Array:
			case Int32Array:
			case BigInt64Array: return new hi(e);
		}
		return e.byteLength === 16 ? new _i(e) : new gi(e);
	}
	static signed(e) {
		return new hi(e);
	}
	static unsigned(e) {
		return new gi(e);
	}
	static decimal(e) {
		return new _i(e);
	}
	constructor(t, n) {
		return e.new(t, n);
	}
}, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi = Symbol.for("apache-arrow/DataType"), z = class e {
	static isDataType(e) {
		return e?.[Yi] === !0;
	}
	static isNull(e) {
		return e?.typeId === L.Null;
	}
	static isInt(e) {
		return e?.typeId === L.Int;
	}
	static isFloat(e) {
		return e?.typeId === L.Float;
	}
	static isBinary(e) {
		return e?.typeId === L.Binary;
	}
	static isBinaryView(e) {
		return e?.typeId === L.BinaryView;
	}
	static isLargeBinary(e) {
		return e?.typeId === L.LargeBinary;
	}
	static isUtf8(e) {
		return e?.typeId === L.Utf8;
	}
	static isUtf8View(e) {
		return e?.typeId === L.Utf8View;
	}
	static isLargeUtf8(e) {
		return e?.typeId === L.LargeUtf8;
	}
	static isBool(e) {
		return e?.typeId === L.Bool;
	}
	static isDecimal(e) {
		return e?.typeId === L.Decimal;
	}
	static isDate(e) {
		return e?.typeId === L.Date;
	}
	static isTime(e) {
		return e?.typeId === L.Time;
	}
	static isTimestamp(e) {
		return e?.typeId === L.Timestamp;
	}
	static isInterval(e) {
		return e?.typeId === L.Interval;
	}
	static isDuration(e) {
		return e?.typeId === L.Duration;
	}
	static isList(e) {
		return e?.typeId === L.List;
	}
	static isLargeList(e) {
		return e?.typeId === L.LargeList;
	}
	static isStruct(e) {
		return e?.typeId === L.Struct;
	}
	static isUnion(e) {
		return e?.typeId === L.Union;
	}
	static isFixedSizeBinary(e) {
		return e?.typeId === L.FixedSizeBinary;
	}
	static isFixedSizeList(e) {
		return e?.typeId === L.FixedSizeList;
	}
	static isMap(e) {
		return e?.typeId === L.Map;
	}
	static isDictionary(e) {
		return e?.typeId === L.Dictionary;
	}
	static isDenseUnion(t) {
		return e.isUnion(t) && t.mode === mr.Dense;
	}
	static isSparseUnion(t) {
		return e.isUnion(t) && t.mode === mr.Sparse;
	}
	constructor(e) {
		this.typeId = e;
	}
};
wi = Symbol.toStringTag, z[wi] = ((e) => (e.children = null, e.ArrayType = Array, e.OffsetArrayType = Int32Array, e[Yi] = !0, e[Symbol.toStringTag] = "DataType"))(z.prototype);
var Xi = class extends z {
	constructor() {
		super(L.Null);
	}
	toString() {
		return "Null";
	}
};
Ti = Symbol.toStringTag, Xi[Ti] = ((e) => e[Symbol.toStringTag] = "Null")(Xi.prototype);
var Zi = class extends z {
	constructor(e, t) {
		super(L.Int), this.isSigned = e, this.bitWidth = t;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 8: return this.isSigned ? Int8Array : Uint8Array;
			case 16: return this.isSigned ? Int16Array : Uint16Array;
			case 32: return this.isSigned ? Int32Array : Uint32Array;
			case 64: return this.isSigned ? BigInt64Array : BigUint64Array;
		}
		throw Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
	}
};
Ei = Symbol.toStringTag, Zi[Ei] = ((e) => (e.isSigned = null, e.bitWidth = null, e[Symbol.toStringTag] = "Int"))(Zi.prototype);
var Qi = class extends Zi {
	constructor() {
		super(!0, 8);
	}
	get ArrayType() {
		return Int8Array;
	}
}, $i = class extends Zi {
	constructor() {
		super(!0, 16);
	}
	get ArrayType() {
		return Int16Array;
	}
}, ea = class extends Zi {
	constructor() {
		super(!0, 32);
	}
	get ArrayType() {
		return Int32Array;
	}
}, ta = class extends Zi {
	constructor() {
		super(!0, 64);
	}
	get ArrayType() {
		return BigInt64Array;
	}
}, na = class extends Zi {
	constructor() {
		super(!1, 8);
	}
	get ArrayType() {
		return Uint8Array;
	}
}, ra = class extends Zi {
	constructor() {
		super(!1, 16);
	}
	get ArrayType() {
		return Uint16Array;
	}
}, ia = class extends Zi {
	constructor() {
		super(!1, 32);
	}
	get ArrayType() {
		return Uint32Array;
	}
}, aa = class extends Zi {
	constructor() {
		super(!1, 64);
	}
	get ArrayType() {
		return BigUint64Array;
	}
};
Object.defineProperty(Qi.prototype, "ArrayType", { value: Int8Array }), Object.defineProperty($i.prototype, "ArrayType", { value: Int16Array }), Object.defineProperty(ea.prototype, "ArrayType", { value: Int32Array }), Object.defineProperty(ta.prototype, "ArrayType", { value: BigInt64Array }), Object.defineProperty(na.prototype, "ArrayType", { value: Uint8Array }), Object.defineProperty(ra.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(ia.prototype, "ArrayType", { value: Uint32Array }), Object.defineProperty(aa.prototype, "ArrayType", { value: BigUint64Array });
var oa = class extends z {
	constructor(e) {
		super(L.Float), this.precision = e;
	}
	get ArrayType() {
		switch (this.precision) {
			case hr.HALF: return Uint16Array;
			case hr.SINGLE: return Float32Array;
			case hr.DOUBLE: return Float64Array;
		}
		throw Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `Float${this.precision << 5 || 16}`;
	}
};
Di = Symbol.toStringTag, oa[Di] = ((e) => (e.precision = null, e[Symbol.toStringTag] = "Float"))(oa.prototype);
var sa = class extends oa {
	constructor() {
		super(hr.HALF);
	}
}, ca = class extends oa {
	constructor() {
		super(hr.SINGLE);
	}
}, la = class extends oa {
	constructor() {
		super(hr.DOUBLE);
	}
};
Object.defineProperty(sa.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(ca.prototype, "ArrayType", { value: Float32Array }), Object.defineProperty(la.prototype, "ArrayType", { value: Float64Array });
var ua = class extends z {
	constructor() {
		super(L.Binary);
	}
	toString() {
		return "Binary";
	}
};
Oi = Symbol.toStringTag, ua[Oi] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Binary"))(ua.prototype);
var B = class extends z {
	constructor() {
		super(L.BinaryView);
	}
	toString() {
		return "BinaryView";
	}
};
ki = Symbol.toStringTag, B.ELEMENT_WIDTH = 16, B.INLINE_CAPACITY = 12, B.LENGTH_OFFSET = 0, B.INLINE_OFFSET = 4, B.BUFFER_INDEX_OFFSET = 8, B.BUFFER_OFFSET_OFFSET = 12, B[ki] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "BinaryView"))(B.prototype);
var da = class extends z {
	constructor() {
		super(L.LargeBinary);
	}
	toString() {
		return "LargeBinary";
	}
};
Ai = Symbol.toStringTag, da[Ai] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeBinary"))(da.prototype);
var fa = class extends z {
	constructor() {
		super(L.Utf8);
	}
	toString() {
		return "Utf8";
	}
};
ji = Symbol.toStringTag, fa[ji] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Utf8"))(fa.prototype);
var pa = class extends z {
	constructor() {
		super(L.Utf8View);
	}
	toString() {
		return "Utf8View";
	}
};
Mi = Symbol.toStringTag, pa.ELEMENT_WIDTH = B.ELEMENT_WIDTH, pa.INLINE_CAPACITY = B.INLINE_CAPACITY, pa[Mi] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Utf8View"))(pa.prototype);
var ma = class extends z {
	constructor() {
		super(L.LargeUtf8);
	}
	toString() {
		return "LargeUtf8";
	}
};
Ni = Symbol.toStringTag, ma[Ni] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeUtf8"))(ma.prototype);
var ha = class extends z {
	constructor() {
		super(L.Bool);
	}
	toString() {
		return "Bool";
	}
};
Pi = Symbol.toStringTag, ha[Pi] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Bool"))(ha.prototype);
var ga = class extends z {
	constructor(e, t, n = 128) {
		super(L.Decimal), this.scale = e, this.precision = t, this.bitWidth = n;
	}
	toString() {
		return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
	}
};
Fi = Symbol.toStringTag, ga[Fi] = ((e) => (e.scale = null, e.precision = null, e.ArrayType = Uint32Array, e[Symbol.toStringTag] = "Decimal"))(ga.prototype);
var _a = class extends z {
	constructor(e) {
		super(L.Date), this.unit = e;
	}
	toString() {
		return `Date${(this.unit + 1) * 32}<${gr[this.unit]}>`;
	}
	get ArrayType() {
		return this.unit === gr.DAY ? Int32Array : BigInt64Array;
	}
};
Ii = Symbol.toStringTag, _a[Ii] = ((e) => (e.unit = null, e[Symbol.toStringTag] = "Date"))(_a.prototype);
var va = class extends z {
	constructor(e, t) {
		super(L.Time), this.unit = e, this.bitWidth = t;
	}
	toString() {
		return `Time${this.bitWidth}<${I[this.unit]}>`;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 32: return Int32Array;
			case 64: return BigInt64Array;
		}
		throw Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
};
Li = Symbol.toStringTag, va[Li] = ((e) => (e.unit = null, e.bitWidth = null, e[Symbol.toStringTag] = "Time"))(va.prototype);
var ya = class extends z {
	constructor(e, t) {
		super(L.Timestamp), this.unit = e, this.timezone = t;
	}
	toString() {
		return `Timestamp<${I[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
	}
};
Ri = Symbol.toStringTag, ya[Ri] = ((e) => (e.unit = null, e.timezone = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Timestamp"))(ya.prototype);
var ba = class extends ya {
	constructor(e) {
		super(I.MILLISECOND, e);
	}
}, xa = class extends z {
	constructor(e) {
		super(L.Interval), this.unit = e;
	}
	toString() {
		return `Interval<${_r[this.unit]}>`;
	}
};
zi = Symbol.toStringTag, xa[zi] = ((e) => (e.unit = null, e.ArrayType = Int32Array, e[Symbol.toStringTag] = "Interval"))(xa.prototype);
var Sa = class extends z {
	constructor(e) {
		super(L.Duration), this.unit = e;
	}
	toString() {
		return `Duration<${I[this.unit]}>`;
	}
};
Bi = Symbol.toStringTag, Sa[Bi] = ((e) => (e.unit = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Duration"))(Sa.prototype);
var Ca = class extends z {
	constructor(e) {
		super(L.List), this.children = [e];
	}
	toString() {
		return `List<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
Vi = Symbol.toStringTag, Ca[Vi] = ((e) => (e.children = null, e[Symbol.toStringTag] = "List"))(Ca.prototype);
var wa = class extends z {
	constructor(e) {
		super(L.LargeList), this.children = [e];
	}
	toString() {
		return `LargeList<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
Hi = Symbol.toStringTag, wa[Hi] = ((e) => (e.children = null, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeList"))(wa.prototype);
var Ta = class extends z {
	constructor(e) {
		super(L.Struct), this.children = e;
	}
	toString() {
		return `Struct<{${this.children.map((e) => `${e.name}:${e.type}`).join(", ")}}>`;
	}
};
Ui = Symbol.toStringTag, Ta[Ui] = ((e) => (e.children = null, e[Symbol.toStringTag] = "Struct"))(Ta.prototype);
var Ea = class extends z {
	constructor(e, t, n) {
		super(L.Union), this.mode = e, this.children = n, this.typeIds = t = Int32Array.from(t), this.typeIdToChildIndex = t.reduce((e, t, n) => (e[t] = n) && e || e, Object.create(null));
	}
	toString() {
		return `${this[Symbol.toStringTag]}<${this.children.map((e) => `${e.type}`).join(" | ")}>`;
	}
};
Wi = Symbol.toStringTag, Ea[Wi] = ((e) => (e.mode = null, e.typeIds = null, e.children = null, e.typeIdToChildIndex = null, e.ArrayType = Int8Array, e[Symbol.toStringTag] = "Union"))(Ea.prototype);
var Da = class extends z {
	constructor(e) {
		super(L.FixedSizeBinary), this.byteWidth = e;
	}
	toString() {
		return `FixedSizeBinary[${this.byteWidth}]`;
	}
};
Gi = Symbol.toStringTag, Da[Gi] = ((e) => (e.byteWidth = null, e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "FixedSizeBinary"))(Da.prototype);
var Oa = class extends z {
	constructor(e, t) {
		super(L.FixedSizeList), this.listSize = e, this.children = [t];
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
	toString() {
		return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
	}
};
Ki = Symbol.toStringTag, Oa[Ki] = ((e) => (e.children = null, e.listSize = null, e[Symbol.toStringTag] = "FixedSizeList"))(Oa.prototype);
var ka = class extends z {
	constructor(e, t = !1) {
		if (super(L.Map), this.children = [e], this.keysSorted = t, e && (e.name = "entries", e?.type?.children)) {
			let t = (e?.type)?.children[0];
			t && (t.name = "key");
			let n = (e?.type)?.children[1];
			n && (n.name = "value");
		}
	}
	get keyType() {
		return this.children[0].type.children[0].type;
	}
	get valueType() {
		return this.children[0].type.children[1].type;
	}
	get childType() {
		return this.children[0].type;
	}
	toString() {
		return `Map<{${this.children[0].type.children.map((e) => `${e.name}:${e.type}`).join(", ")}}>`;
	}
};
qi = Symbol.toStringTag, ka[qi] = ((e) => (e.children = null, e.keysSorted = null, e[Symbol.toStringTag] = "Map_"))(ka.prototype);
var Aa = ((e) => () => ++e)(-1), ja = class extends z {
	constructor(e, t, n, r) {
		super(L.Dictionary), this.indices = t, this.dictionary = e, this.isOrdered = r || !1, this.id = n == null ? Aa() : R(n);
	}
	get children() {
		return this.dictionary.children;
	}
	get valueType() {
		return this.dictionary;
	}
	get ArrayType() {
		return this.dictionary.ArrayType;
	}
	toString() {
		return `Dictionary<${this.indices}, ${this.dictionary}>`;
	}
};
Ji = Symbol.toStringTag, ja[Ji] = ((e) => (e.id = null, e.indices = null, e.isOrdered = null, e.dictionary = null, e[Symbol.toStringTag] = "Dictionary"))(ja.prototype);
function Ma(e) {
	let t = e;
	switch (e.typeId) {
		case L.Decimal: return e.bitWidth / 32;
		case L.Interval: return t.unit === _r.MONTH_DAY_NANO ? 4 : 1 + t.unit;
		case L.BinaryView:
		case L.Utf8View: return 16;
		case L.FixedSizeList: return t.listSize;
		case L.FixedSizeBinary: return t.byteWidth;
		default: return 1;
	}
}
//#endregion
//#region ../node_modules/apache-arrow/visitor.mjs
var V = class {
	visitMany(e, ...t) {
		return e.map((e, n) => this.visit(e, ...t.map((e) => e[n])));
	}
	visit(...e) {
		return this.getVisitFn(e[0], !1).apply(this, e);
	}
	getVisitFn(e, t = !0) {
		return Na(this, e, t);
	}
	getVisitFnByTypeId(e, t = !0) {
		return Pa(this, e, t);
	}
	visitNull(e, ...t) {
		return null;
	}
	visitBool(e, ...t) {
		return null;
	}
	visitInt(e, ...t) {
		return null;
	}
	visitFloat(e, ...t) {
		return null;
	}
	visitUtf8(e, ...t) {
		return null;
	}
	visitLargeUtf8(e, ...t) {
		return null;
	}
	visitUtf8View(e, ...t) {
		return null;
	}
	visitBinary(e, ...t) {
		return null;
	}
	visitLargeBinary(e, ...t) {
		return null;
	}
	visitBinaryView(e, ...t) {
		return null;
	}
	visitFixedSizeBinary(e, ...t) {
		return null;
	}
	visitDate(e, ...t) {
		return null;
	}
	visitTimestamp(e, ...t) {
		return null;
	}
	visitTime(e, ...t) {
		return null;
	}
	visitDecimal(e, ...t) {
		return null;
	}
	visitList(e, ...t) {
		return null;
	}
	visitLargeList(e, ...t) {
		return null;
	}
	visitStruct(e, ...t) {
		return null;
	}
	visitUnion(e, ...t) {
		return null;
	}
	visitDictionary(e, ...t) {
		return null;
	}
	visitInterval(e, ...t) {
		return null;
	}
	visitDuration(e, ...t) {
		return null;
	}
	visitFixedSizeList(e, ...t) {
		return null;
	}
	visitMap(e, ...t) {
		return null;
	}
};
function Na(e, t, n = !0) {
	return typeof t == "number" ? Pa(e, t, n) : typeof t == "string" && t in L ? Pa(e, L[t], n) : t && t instanceof z ? Pa(e, Fa(t), n) : t?.type && t.type instanceof z ? Pa(e, Fa(t.type), n) : Pa(e, L.NONE, n);
}
function Pa(e, t, n = !0) {
	let r = null;
	switch (t) {
		case L.Null:
			r = e.visitNull;
			break;
		case L.Bool:
			r = e.visitBool;
			break;
		case L.Int:
			r = e.visitInt;
			break;
		case L.Int8:
			r = e.visitInt8 || e.visitInt;
			break;
		case L.Int16:
			r = e.visitInt16 || e.visitInt;
			break;
		case L.Int32:
			r = e.visitInt32 || e.visitInt;
			break;
		case L.Int64:
			r = e.visitInt64 || e.visitInt;
			break;
		case L.Uint8:
			r = e.visitUint8 || e.visitInt;
			break;
		case L.Uint16:
			r = e.visitUint16 || e.visitInt;
			break;
		case L.Uint32:
			r = e.visitUint32 || e.visitInt;
			break;
		case L.Uint64:
			r = e.visitUint64 || e.visitInt;
			break;
		case L.Float:
			r = e.visitFloat;
			break;
		case L.Float16:
			r = e.visitFloat16 || e.visitFloat;
			break;
		case L.Float32:
			r = e.visitFloat32 || e.visitFloat;
			break;
		case L.Float64:
			r = e.visitFloat64 || e.visitFloat;
			break;
		case L.Utf8:
			r = e.visitUtf8;
			break;
		case L.LargeUtf8:
			r = e.visitLargeUtf8;
			break;
		case L.Utf8View:
			r = e.visitUtf8View || e.visitUtf8;
			break;
		case L.Binary:
			r = e.visitBinary;
			break;
		case L.LargeBinary:
			r = e.visitLargeBinary;
			break;
		case L.BinaryView:
			r = e.visitBinaryView || e.visitBinary;
			break;
		case L.FixedSizeBinary:
			r = e.visitFixedSizeBinary;
			break;
		case L.Date:
			r = e.visitDate;
			break;
		case L.DateDay:
			r = e.visitDateDay || e.visitDate;
			break;
		case L.DateMillisecond:
			r = e.visitDateMillisecond || e.visitDate;
			break;
		case L.Timestamp:
			r = e.visitTimestamp;
			break;
		case L.TimestampSecond:
			r = e.visitTimestampSecond || e.visitTimestamp;
			break;
		case L.TimestampMillisecond:
			r = e.visitTimestampMillisecond || e.visitTimestamp;
			break;
		case L.TimestampMicrosecond:
			r = e.visitTimestampMicrosecond || e.visitTimestamp;
			break;
		case L.TimestampNanosecond:
			r = e.visitTimestampNanosecond || e.visitTimestamp;
			break;
		case L.Time:
			r = e.visitTime;
			break;
		case L.TimeSecond:
			r = e.visitTimeSecond || e.visitTime;
			break;
		case L.TimeMillisecond:
			r = e.visitTimeMillisecond || e.visitTime;
			break;
		case L.TimeMicrosecond:
			r = e.visitTimeMicrosecond || e.visitTime;
			break;
		case L.TimeNanosecond:
			r = e.visitTimeNanosecond || e.visitTime;
			break;
		case L.Decimal:
			r = e.visitDecimal;
			break;
		case L.List:
			r = e.visitList;
			break;
		case L.LargeList:
			r = e.visitLargeList;
			break;
		case L.Struct:
			r = e.visitStruct;
			break;
		case L.Union:
			r = e.visitUnion;
			break;
		case L.DenseUnion:
			r = e.visitDenseUnion || e.visitUnion;
			break;
		case L.SparseUnion:
			r = e.visitSparseUnion || e.visitUnion;
			break;
		case L.Dictionary:
			r = e.visitDictionary;
			break;
		case L.Interval:
			r = e.visitInterval;
			break;
		case L.IntervalDayTime:
			r = e.visitIntervalDayTime || e.visitInterval;
			break;
		case L.IntervalYearMonth:
			r = e.visitIntervalYearMonth || e.visitInterval;
			break;
		case L.IntervalMonthDayNano:
			r = e.visitIntervalMonthDayNano || e.visitInterval;
			break;
		case L.Duration:
			r = e.visitDuration;
			break;
		case L.DurationSecond:
			r = e.visitDurationSecond || e.visitDuration;
			break;
		case L.DurationMillisecond:
			r = e.visitDurationMillisecond || e.visitDuration;
			break;
		case L.DurationMicrosecond:
			r = e.visitDurationMicrosecond || e.visitDuration;
			break;
		case L.DurationNanosecond:
			r = e.visitDurationNanosecond || e.visitDuration;
			break;
		case L.FixedSizeList:
			r = e.visitFixedSizeList;
			break;
		case L.Map: r = e.visitMap;
	}
	if (typeof r == "function") return r;
	if (!n) return () => null;
	throw Error(`Unrecognized type '${L[t]}'`);
}
function Fa(e) {
	switch (e.typeId) {
		case L.Null: return L.Null;
		case L.Int: {
			let { bitWidth: t, isSigned: n } = e;
			switch (t) {
				case 8: return n ? L.Int8 : L.Uint8;
				case 16: return n ? L.Int16 : L.Uint16;
				case 32: return n ? L.Int32 : L.Uint32;
				case 64: return n ? L.Int64 : L.Uint64;
			}
			return L.Int;
		}
		case L.Float:
			switch (e.precision) {
				case hr.HALF: return L.Float16;
				case hr.SINGLE: return L.Float32;
				case hr.DOUBLE: return L.Float64;
			}
			return L.Float;
		case L.Binary: return L.Binary;
		case L.LargeBinary: return L.LargeBinary;
		case L.BinaryView: return L.BinaryView;
		case L.Utf8: return L.Utf8;
		case L.LargeUtf8: return L.LargeUtf8;
		case L.Utf8View: return L.Utf8View;
		case L.Bool: return L.Bool;
		case L.Decimal: return L.Decimal;
		case L.Time:
			switch (e.unit) {
				case I.SECOND: return L.TimeSecond;
				case I.MILLISECOND: return L.TimeMillisecond;
				case I.MICROSECOND: return L.TimeMicrosecond;
				case I.NANOSECOND: return L.TimeNanosecond;
			}
			return L.Time;
		case L.Timestamp:
			switch (e.unit) {
				case I.SECOND: return L.TimestampSecond;
				case I.MILLISECOND: return L.TimestampMillisecond;
				case I.MICROSECOND: return L.TimestampMicrosecond;
				case I.NANOSECOND: return L.TimestampNanosecond;
			}
			return L.Timestamp;
		case L.Date:
			switch (e.unit) {
				case gr.DAY: return L.DateDay;
				case gr.MILLISECOND: return L.DateMillisecond;
			}
			return L.Date;
		case L.Interval:
			switch (e.unit) {
				case _r.DAY_TIME: return L.IntervalDayTime;
				case _r.YEAR_MONTH: return L.IntervalYearMonth;
				case _r.MONTH_DAY_NANO: return L.IntervalMonthDayNano;
			}
			return L.Interval;
		case L.Duration:
			switch (e.unit) {
				case I.SECOND: return L.DurationSecond;
				case I.MILLISECOND: return L.DurationMillisecond;
				case I.MICROSECOND: return L.DurationMicrosecond;
				case I.NANOSECOND: return L.DurationNanosecond;
			}
			return L.Duration;
		case L.Map: return L.Map;
		case L.List: return L.List;
		case L.LargeList: return L.LargeList;
		case L.Struct: return L.Struct;
		case L.Union:
			switch (e.mode) {
				case mr.Dense: return L.DenseUnion;
				case mr.Sparse: return L.SparseUnion;
			}
			return L.Union;
		case L.FixedSizeBinary: return L.FixedSizeBinary;
		case L.FixedSizeList: return L.FixedSizeList;
		case L.Dictionary: return L.Dictionary;
	}
	throw Error(`Unrecognized type '${L[e.typeId]}'`);
}
V.prototype.visitInt8 = null, V.prototype.visitInt16 = null, V.prototype.visitInt32 = null, V.prototype.visitInt64 = null, V.prototype.visitUint8 = null, V.prototype.visitUint16 = null, V.prototype.visitUint32 = null, V.prototype.visitUint64 = null, V.prototype.visitFloat16 = null, V.prototype.visitFloat32 = null, V.prototype.visitFloat64 = null, V.prototype.visitDateDay = null, V.prototype.visitDateMillisecond = null, V.prototype.visitTimestampSecond = null, V.prototype.visitTimestampMillisecond = null, V.prototype.visitTimestampMicrosecond = null, V.prototype.visitTimestampNanosecond = null, V.prototype.visitTimeSecond = null, V.prototype.visitTimeMillisecond = null, V.prototype.visitTimeMicrosecond = null, V.prototype.visitTimeNanosecond = null, V.prototype.visitDenseUnion = null, V.prototype.visitSparseUnion = null, V.prototype.visitIntervalDayTime = null, V.prototype.visitIntervalYearMonth = null, V.prototype.visitIntervalMonthDayNano = null, V.prototype.visitDuration = null, V.prototype.visitDurationSecond = null, V.prototype.visitDurationMillisecond = null, V.prototype.visitDurationMicrosecond = null, V.prototype.visitDurationNanosecond = null;
//#endregion
//#region ../node_modules/apache-arrow/util/math.mjs
var Ia = /* @__PURE__ */ new Float64Array(1), La = new Uint32Array(Ia.buffer);
function Ra(e) {
	let t = (e & 31744) >> 10, n = (e & 1023) / 1024, r = (-1) ** ((e & 32768) >> 15);
	switch (t) {
		case 31: return r * (n ? NaN : 1 / 0);
		case 0: return r * (n ? 6103515625e-14 * n : 0);
	}
	return r * 2 ** (t - 15) * (1 + n);
}
function za(e) {
	if (e !== e) return 32256;
	Ia[0] = e;
	let t = (La[1] & 2147483648) >> 16 & 65535, n = La[1] & 2146435072, r = 0;
	return n >= 1089470464 ? La[0] > 0 ? n = 31744 : (n = (n & 2080374784) >> 16, r = (La[1] & 1048575) >> 10) : n <= 1056964608 ? (r = 1048576 + (La[1] & 1048575), r = 1048576 + (r << (n >> 20) - 998) >> 21, n = 0) : (n = n - 1056964608 >> 10, r = (La[1] & 1048575) + 512 >> 10), t | n | r & 65535;
}
//#endregion
//#region ../node_modules/apache-arrow/visitor/set.mjs
var H = class extends V {};
function U(e) {
	return (t, n, r) => {
		if (t.setValid(n, r != null)) return e(t, n, r);
	};
}
var Ba = (e, t, n) => {
	e[t] = Math.floor(n / 864e5);
}, Va = (e, t, n, r) => {
	if (n + 1 < t.length) {
		let i = R(t[n]), a = R(t[n + 1]);
		e.set(r.subarray(0, a - i), i);
	}
}, Ha = ({ offset: e, values: t }, n, r) => {
	let i = e + n;
	r ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, Ua = ({ values: e }, t, n) => {
	e[t] = n;
}, Wa = ({ values: e }, t, n) => {
	e[t] = n;
}, Ga = ({ values: e }, t, n) => {
	e[t] = za(n);
}, Ka = (e, t, n) => {
	switch (e.type.precision) {
		case hr.HALF: return Ga(e, t, n);
		case hr.SINGLE:
		case hr.DOUBLE: return Wa(e, t, n);
	}
}, qa = ({ values: e }, t, n) => {
	Ba(e, t, n.valueOf());
}, Ja = ({ values: e }, t, n) => {
	e[t] = BigInt(n);
}, Ya = ({ stride: e, values: t }, n, r) => {
	t.set(r.subarray(0, e), e * n);
}, Xa = ({ values: e, valueOffsets: t }, n, r) => Va(e, t, n, r), Za = (e) => {
	let t = e.variadicBuffers;
	return (!Array.isArray(t) || Object.isFrozen(t)) && (t = Array.from(t), e.variadicBuffers = t), t;
}, Qa = (e, t, n) => {
	let r = e.values;
	if (!r) throw Error("BinaryView data is missing view buffer");
	let i = B.ELEMENT_WIDTH, a = t * i, o = a + i;
	if (a < 0 || o > r.length) throw RangeError(`BinaryView index ${t} out of bounds`);
	r.fill(0, a, o);
	let s = new DataView(r.buffer, r.byteOffset + a, i), c = n.length;
	if (s.setInt32(B.LENGTH_OFFSET, c, !0), c <= B.INLINE_CAPACITY) {
		r.set(n, a + B.INLINE_OFFSET);
		return;
	}
	let l = (n[0] ?? 0) | (n[1] ?? 0) << 8 | (n[2] ?? 0) << 16 | (n[3] ?? 0) << 24;
	s.setUint32(B.INLINE_OFFSET, l >>> 0, !0);
	let u = Za(e), d = n.slice(), f = u.push(d) - 1;
	s.setInt32(B.BUFFER_INDEX_OFFSET, f, !0), s.setInt32(B.BUFFER_OFFSET_OFFSET, 0, !0);
}, $a = (e, t, n) => {
	Qa(e, t, n instanceof Uint8Array ? n : new Uint8Array(n));
}, eo = ({ values: e, valueOffsets: t }, n, r) => Va(e, t, n, Nn(r)), to = (e, t, n) => {
	Qa(e, t, Nn(n));
}, no = (e, t, n) => {
	e.type.unit === gr.DAY ? qa(e, t, n) : Ja(e, t, n);
}, ro = ({ values: e }, t, n) => {
	e[t] = BigInt(n / 1e3);
}, io = ({ values: e }, t, n) => {
	e[t] = BigInt(n);
}, ao = ({ values: e }, t, n) => {
	e[t] = BigInt(n * 1e3);
}, oo = ({ values: e }, t, n) => {
	e[t] = BigInt(n * 1e6);
}, so = (e, t, n) => {
	switch (e.type.unit) {
		case I.SECOND: return ro(e, t, n);
		case I.MILLISECOND: return io(e, t, n);
		case I.MICROSECOND: return ao(e, t, n);
		case I.NANOSECOND: return oo(e, t, n);
	}
}, co = ({ values: e }, t, n) => {
	e[t] = n;
}, lo = ({ values: e }, t, n) => {
	e[t] = n;
}, uo = ({ values: e }, t, n) => {
	e[t] = n;
}, fo = ({ values: e }, t, n) => {
	e[t] = n;
}, po = (e, t, n) => {
	switch (e.type.unit) {
		case I.SECOND: return co(e, t, n);
		case I.MILLISECOND: return lo(e, t, n);
		case I.MICROSECOND: return uo(e, t, n);
		case I.NANOSECOND: return fo(e, t, n);
	}
}, mo = ({ values: e, stride: t }, n, r) => {
	e.set(r.subarray(0, t), t * n);
}, ho = (e, t, n) => {
	let r = e.children[0], i = e.valueOffsets, a = Io.getVisitFn(r), o = R(i[t]), s = R(i[t + 1]);
	if (Array.isArray(n)) for (let e = -1, t = o; t < s;) a(r, t++, n[++e]);
	else for (let e = -1, t = o; t < s;) a(r, t++, n.get(++e));
}, go = (e, t, n) => {
	let r = e.children[0], { valueOffsets: i } = e, a = Io.getVisitFn(r), { [t]: o, [t + 1]: s } = i, c = n instanceof Map ? n.entries() : Object.entries(n);
	for (let e of c) if (a(r, o, e), ++o >= s) break;
}, _o = (e, t) => (n, r, i, a) => r && n(r, e, t[a]), vo = (e, t) => (n, r, i, a) => r && n(r, e, t.get(a)), yo = (e, t) => (n, r, i, a) => r && n(r, e, t.get(i.name)), bo = (e, t) => (n, r, i, a) => r && n(r, e, t[i.name]), xo = (e, t, n) => {
	let r = e.type.children.map((e) => Io.getVisitFn(e.type)), i = n instanceof Map ? yo(t, n) : n instanceof Z ? vo(t, n) : Array.isArray(n) ? _o(t, n) : bo(t, n);
	e.type.children.forEach((t, n) => i(r[n], e.children[n], t, n));
}, So = (e, t, n) => {
	e.type.mode === mr.Dense ? Co(e, t, n) : wo(e, t, n);
}, Co = (e, t, n) => {
	let r = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[r];
	Io.visit(i, e.valueOffsets[t], n);
}, wo = (e, t, n) => {
	let r = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[r];
	Io.visit(i, t, n);
}, To = (e, t, n) => {
	var r;
	(r = e.dictionary) == null || r.set(e.values[t], n);
}, Eo = (e, t, n) => {
	switch (e.type.unit) {
		case _r.YEAR_MONTH: return Oo(e, t, n);
		case _r.DAY_TIME: return Do(e, t, n);
		case _r.MONTH_DAY_NANO: return ko(e, t, n);
	}
}, Do = ({ values: e }, t, n) => {
	e.set(n.subarray(0, 2), 2 * t);
}, Oo = ({ values: e }, t, n) => {
	e[t] = n[0] * 12 + n[1] % 12;
}, ko = ({ values: e, stride: t }, n, r) => {
	e.set(r.subarray(0, t), t * n);
}, Ao = ({ values: e }, t, n) => {
	e[t] = n;
}, jo = ({ values: e }, t, n) => {
	e[t] = n;
}, Mo = ({ values: e }, t, n) => {
	e[t] = n;
}, No = ({ values: e }, t, n) => {
	e[t] = n;
}, Po = (e, t, n) => {
	switch (e.type.unit) {
		case I.SECOND: return Ao(e, t, n);
		case I.MILLISECOND: return jo(e, t, n);
		case I.MICROSECOND: return Mo(e, t, n);
		case I.NANOSECOND: return No(e, t, n);
	}
}, Fo = (e, t, n) => {
	let { stride: r } = e, i = e.children[0], a = Io.getVisitFn(i);
	if (Array.isArray(n)) for (let e = -1, o = t * r; ++e < r;) a(i, o + e, n[e]);
	else for (let e = -1, o = t * r; ++e < r;) a(i, o + e, n.get(e));
};
H.prototype.visitBool = U(Ha), H.prototype.visitInt = U(Ua), H.prototype.visitInt8 = U(Ua), H.prototype.visitInt16 = U(Ua), H.prototype.visitInt32 = U(Ua), H.prototype.visitInt64 = U(Ua), H.prototype.visitUint8 = U(Ua), H.prototype.visitUint16 = U(Ua), H.prototype.visitUint32 = U(Ua), H.prototype.visitUint64 = U(Ua), H.prototype.visitFloat = U(Ka), H.prototype.visitFloat16 = U(Ga), H.prototype.visitFloat32 = U(Wa), H.prototype.visitFloat64 = U(Wa), H.prototype.visitUtf8 = U(eo), H.prototype.visitLargeUtf8 = U(eo), H.prototype.visitUtf8View = U(to), H.prototype.visitBinary = U(Xa), H.prototype.visitLargeBinary = U(Xa), H.prototype.visitBinaryView = U($a), H.prototype.visitFixedSizeBinary = U(Ya), H.prototype.visitDate = U(no), H.prototype.visitDateDay = U(qa), H.prototype.visitDateMillisecond = U(Ja), H.prototype.visitTimestamp = U(so), H.prototype.visitTimestampSecond = U(ro), H.prototype.visitTimestampMillisecond = U(io), H.prototype.visitTimestampMicrosecond = U(ao), H.prototype.visitTimestampNanosecond = U(oo), H.prototype.visitTime = U(po), H.prototype.visitTimeSecond = U(co), H.prototype.visitTimeMillisecond = U(lo), H.prototype.visitTimeMicrosecond = U(uo), H.prototype.visitTimeNanosecond = U(fo), H.prototype.visitDecimal = U(mo), H.prototype.visitList = U(ho), H.prototype.visitLargeList = U(ho), H.prototype.visitStruct = U(xo), H.prototype.visitUnion = U(So), H.prototype.visitDenseUnion = U(Co), H.prototype.visitSparseUnion = U(wo), H.prototype.visitDictionary = U(To), H.prototype.visitInterval = U(Eo), H.prototype.visitIntervalDayTime = U(Do), H.prototype.visitIntervalYearMonth = U(Oo), H.prototype.visitIntervalMonthDayNano = U(ko), H.prototype.visitDuration = U(Po), H.prototype.visitDurationSecond = U(Ao), H.prototype.visitDurationMillisecond = U(jo), H.prototype.visitDurationMicrosecond = U(Mo), H.prototype.visitDurationNanosecond = U(No), H.prototype.visitFixedSizeList = U(Fo), H.prototype.visitMap = U(go);
var Io = new H(), Lo = Symbol.for("parent"), Ro = Symbol.for("rowIndex"), zo = class {
	constructor(e, t) {
		return this[Lo] = e, this[Ro] = t, new Proxy(this, Vo);
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		let e = this[Ro], t = this[Lo], n = t.type.children, r = {};
		for (let i = -1, a = n.length; ++i < a;) r[n[i].name] = Is.visit(t.children[i], e);
		return r;
	}
	toString() {
		return `{${[...this].map(([e, t]) => `${di(e)}: ${di(t)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
	[Symbol.iterator]() {
		return new Bo(this[Lo], this[Ro]);
	}
}, Bo = class {
	constructor(e, t) {
		this.childIndex = 0, this.children = e.children, this.rowIndex = t, this.childFields = e.type.children, this.numChildren = this.childFields.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this.childIndex;
		return e < this.numChildren ? (this.childIndex = e + 1, {
			done: !1,
			value: [this.childFields[e].name, Is.visit(this.children[e], this.rowIndex)]
		}) : {
			done: !0,
			value: null
		};
	}
};
Object.defineProperties(zo.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[Lo]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[Ro]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: -1
	}
});
var Vo = new class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(e) {
		return e[Lo].type.children.map((e) => e.name);
	}
	has(e, t) {
		return e[Lo].type.children.some((e) => e.name === t);
	}
	getOwnPropertyDescriptor(e, t) {
		if (e[Lo].type.children.some((e) => e.name === t)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(e, t) {
		if (Reflect.has(e, t)) return e[t];
		let n = e[Lo].type.children.findIndex((e) => e.name === t);
		if (n !== -1) {
			let r = Is.visit(e[Lo].children[n], e[Ro]);
			return Reflect.set(e, t, r), r;
		}
	}
	set(e, t, n) {
		let r = e[Lo].type.children.findIndex((e) => e.name === t);
		return r === -1 ? Reflect.has(e, t) || typeof t == "symbol" ? Reflect.set(e, t, n) : !1 : (Io.visit(e[Lo].children[r], e[Ro], n), Reflect.set(e, t, n));
	}
}(), W = class extends V {};
function G(e) {
	return (t, n) => t.getValid(n) ? e(t, n) : null;
}
var Ho = (e, t) => 864e5 * e[t], Uo = 16, Wo = 12, Go = (e, t) => null, Ko = (e, t, n) => {
	if (n + 1 >= t.length) return null;
	let r = R(t[n]), i = R(t[n + 1]);
	return e.subarray(r, i);
}, qo = ({ offset: e, values: t }, n) => {
	let r = e + n;
	return !!(t[r >> 3] & 1 << r % 8);
}, Jo = ({ values: e }, t) => Ho(e, t), Yo = ({ values: e }, t) => R(e[t]), Xo = ({ stride: e, values: t }, n) => t[e * n], Zo = ({ stride: e, values: t }, n) => Ra(t[e * n]), Qo = ({ values: e }, t) => e[t], $o = ({ stride: e, values: t }, n) => t.subarray(e * n, e * (n + 1)), es = ({ values: e, valueOffsets: t }, n) => Ko(e, t, n), ts = (e, t) => {
	let n = e.values;
	if (!n) throw Error("BinaryView data is missing view buffer");
	let r = t * Uo, i = r + Uo;
	if (r < 0 || i > n.length) throw Error(`BinaryView data buffer is too short: expected ${Uo} bytes, got ${Math.max(0, n.length - r)}`);
	let a = n.subarray(r, i);
	if (a.length < Uo) throw Error(`BinaryView data buffer is too short: expected ${Uo} bytes, got ${a.length}`);
	let o = new DataView(n.buffer, a.byteOffset, Uo), s = o.getInt32(0, !0);
	if (s <= 0) return /* @__PURE__ */ new Uint8Array();
	if (s <= Wo) return a.subarray(4, 4 + s);
	let c = o.getInt32(8, !0), l = o.getInt32(12, !0), u = e.variadicBuffers?.[c];
	if (!u) throw Error(`BinaryView variadic buffer ${c} is missing`);
	return u.subarray(l, l + s);
}, ns = (e, t) => ts(e, t), rs = ({ values: e, valueOffsets: t }, n) => {
	let r = Ko(e, t, n);
	return r === null ? null : jn(r);
}, is = (e, t) => jn(ts(e, t)), as = ({ values: e }, t) => e[t], os = ({ type: e, values: t }, n) => e.precision === hr.HALF ? Ra(t[n]) : t[n], ss = (e, t) => e.type.unit === gr.DAY ? Jo(e, t) : Yo(e, t), cs = ({ values: e }, t) => 1e3 * R(e[t]), ls = ({ values: e }, t) => R(e[t]), us = ({ values: e }, t) => fi(e[t], BigInt(1e3)), ds = ({ values: e }, t) => fi(e[t], BigInt(1e6)), fs = (e, t) => {
	switch (e.type.unit) {
		case I.SECOND: return cs(e, t);
		case I.MILLISECOND: return ls(e, t);
		case I.MICROSECOND: return us(e, t);
		case I.NANOSECOND: return ds(e, t);
	}
}, ps = ({ values: e }, t) => e[t], ms = ({ values: e }, t) => e[t], hs = ({ values: e }, t) => e[t], gs = ({ values: e }, t) => e[t], _s = (e, t) => {
	switch (e.type.unit) {
		case I.SECOND: return ps(e, t);
		case I.MILLISECOND: return ms(e, t);
		case I.MICROSECOND: return hs(e, t);
		case I.NANOSECOND: return gs(e, t);
	}
}, vs = ({ values: e, stride: t }, n) => Ci.decimal(e.subarray(t * n, t * (n + 1))), ys = (e, t) => {
	let { valueOffsets: n, stride: r, children: i } = e, a = R(n[t * r]), o = R(n[t * r + 1]);
	return new Z([i[0].slice(a, o - a)]);
}, bs = (e, t) => {
	let { valueOffsets: n, children: r } = e, { [t]: i, [t + 1]: a } = n, o = r[0];
	return new Vs(o.slice(i, a - i));
}, xs = (e, t) => new zo(e, t), Ss = (e, t) => e.type.mode === mr.Dense ? Cs(e, t) : ws(e, t), Cs = (e, t) => {
	let n = e.type.typeIdToChildIndex[e.typeIds[t]], r = e.children[n];
	return Is.visit(r, e.valueOffsets[t]);
}, ws = (e, t) => {
	let n = e.type.typeIdToChildIndex[e.typeIds[t]], r = e.children[n];
	return Is.visit(r, t);
}, Ts = (e, t) => e.dictionary?.get(e.values[t]), Es = (e, t) => e.type.unit === _r.MONTH_DAY_NANO ? ks(e, t) : e.type.unit === _r.DAY_TIME ? Ds(e, t) : Os(e, t), Ds = ({ values: e }, t) => e.subarray(2 * t, 2 * (t + 1)), Os = ({ values: e }, t) => {
	let n = e[t], r = /* @__PURE__ */ new Int32Array(2);
	return r[0] = Math.trunc(n / 12), r[1] = Math.trunc(n % 12), r;
}, ks = ({ values: e }, t) => e.subarray(4 * t, 4 * (t + 1)), As = ({ values: e }, t) => e[t], js = ({ values: e }, t) => e[t], Ms = ({ values: e }, t) => e[t], Ns = ({ values: e }, t) => e[t], Ps = (e, t) => {
	switch (e.type.unit) {
		case I.SECOND: return As(e, t);
		case I.MILLISECOND: return js(e, t);
		case I.MICROSECOND: return Ms(e, t);
		case I.NANOSECOND: return Ns(e, t);
	}
}, Fs = (e, t) => {
	let { stride: n, children: r } = e;
	return new Z([r[0].slice(t * n, n)]);
};
W.prototype.visitNull = G(Go), W.prototype.visitBool = G(qo), W.prototype.visitInt = G(as), W.prototype.visitInt8 = G(Xo), W.prototype.visitInt16 = G(Xo), W.prototype.visitInt32 = G(Xo), W.prototype.visitInt64 = G(Qo), W.prototype.visitUint8 = G(Xo), W.prototype.visitUint16 = G(Xo), W.prototype.visitUint32 = G(Xo), W.prototype.visitUint64 = G(Qo), W.prototype.visitFloat = G(os), W.prototype.visitFloat16 = G(Zo), W.prototype.visitFloat32 = G(Xo), W.prototype.visitFloat64 = G(Xo), W.prototype.visitUtf8 = G(rs), W.prototype.visitLargeUtf8 = G(rs), W.prototype.visitUtf8View = G(is), W.prototype.visitBinary = G(es), W.prototype.visitLargeBinary = G(es), W.prototype.visitBinaryView = G(ns), W.prototype.visitFixedSizeBinary = G($o), W.prototype.visitDate = G(ss), W.prototype.visitDateDay = G(Jo), W.prototype.visitDateMillisecond = G(Yo), W.prototype.visitTimestamp = G(fs), W.prototype.visitTimestampSecond = G(cs), W.prototype.visitTimestampMillisecond = G(ls), W.prototype.visitTimestampMicrosecond = G(us), W.prototype.visitTimestampNanosecond = G(ds), W.prototype.visitTime = G(_s), W.prototype.visitTimeSecond = G(ps), W.prototype.visitTimeMillisecond = G(ms), W.prototype.visitTimeMicrosecond = G(hs), W.prototype.visitTimeNanosecond = G(gs), W.prototype.visitDecimal = G(vs), W.prototype.visitList = G(ys), W.prototype.visitLargeList = G(ys), W.prototype.visitStruct = G(xs), W.prototype.visitUnion = G(Ss), W.prototype.visitDenseUnion = G(Cs), W.prototype.visitSparseUnion = G(ws), W.prototype.visitDictionary = G(Ts), W.prototype.visitInterval = G(Es), W.prototype.visitIntervalDayTime = G(Ds), W.prototype.visitIntervalYearMonth = G(Os), W.prototype.visitIntervalMonthDayNano = G(ks), W.prototype.visitDuration = G(Ps), W.prototype.visitDurationSecond = G(As), W.prototype.visitDurationMillisecond = G(js), W.prototype.visitDurationMicrosecond = G(Ms), W.prototype.visitDurationNanosecond = G(Ns), W.prototype.visitFixedSizeList = G(Fs), W.prototype.visitMap = G(bs);
var Is = new W(), Ls = Symbol.for("keys"), Rs = Symbol.for("vals"), zs = Symbol.for("kKeysAsStrings"), Bs = Symbol.for("_kKeysAsStrings"), Vs = class {
	constructor(e) {
		return this[Ls] = new Z([e.children[0]]).memoize(), this[Rs] = e.children[1], new Proxy(this, new Us());
	}
	get [zs]() {
		return this[Bs] || (this[Bs] = Array.from(this[Ls].toArray(), String));
	}
	[Symbol.iterator]() {
		return new Hs(this[Ls], this[Rs]);
	}
	get size() {
		return this[Ls].length;
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		let e = this[Ls], t = this[Rs], n = {};
		for (let r = -1, i = e.length; ++r < i;) n[e.get(r)] = Is.visit(t, r);
		return n;
	}
	toString() {
		return `{${[...this].map(([e, t]) => `${di(e)}: ${di(t)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
}, Hs = class {
	constructor(e, t) {
		this.keys = e, this.vals = t, this.keyIndex = 0, this.numKeys = e.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this.keyIndex;
		return e === this.numKeys ? {
			done: !0,
			value: null
		} : (this.keyIndex++, {
			done: !1,
			value: [this.keys.get(e), Is.visit(this.vals, e)]
		});
	}
}, Us = class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(e) {
		return e[zs];
	}
	has(e, t) {
		return e[zs].includes(t);
	}
	getOwnPropertyDescriptor(e, t) {
		if (e[zs].indexOf(t) !== -1) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(e, t) {
		if (Reflect.has(e, t)) return e[t];
		let n = e[zs].indexOf(t);
		if (n !== -1) {
			let r = Is.visit(Reflect.get(e, Rs), n);
			return Reflect.set(e, t, r), r;
		}
	}
	set(e, t, n) {
		let r = e[zs].indexOf(t);
		return r === -1 ? Reflect.has(e, t) ? Reflect.set(e, t, n) : !1 : (Io.visit(Reflect.get(e, Rs), r, n), Reflect.set(e, t, n));
	}
};
Object.defineProperties(Vs.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[Ls]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[Rs]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[Bs]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	}
});
//#endregion
//#region ../node_modules/apache-arrow/util/vector.mjs
var Ws;
function Gs(e, t, n, r) {
	let { length: i = 0 } = e, a = typeof t == "number" ? t : 0, o = typeof n == "number" ? n : i;
	return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (Ws = a, a = o, o = Ws), o > i && (o = i), r ? r(e, a, o) : [a, o];
}
var Ks = (e, t) => e < 0 ? t + e : e, qs = (e) => e !== e;
function Js(e) {
	if (typeof e != "object" || !e) return qs(e) ? qs : (t) => t === e;
	if (e instanceof Date) {
		let t = e.valueOf();
		return (e) => e instanceof Date && e.valueOf() === t;
	}
	return ArrayBuffer.isView(e) ? (t) => t ? ir(e, t) : !1 : e instanceof Map ? Xs(e) : Array.isArray(e) ? Ys(e) : e instanceof Z ? Zs(e) : Qs(e, !0);
}
function Ys(e) {
	let t = [];
	for (let n = -1, r = e.length; ++n < r;) t[n] = Js(e[n]);
	return $s(t);
}
function Xs(e) {
	let t = -1, n = [];
	for (let r of e.values()) n[++t] = Js(r);
	return $s(n);
}
function Zs(e) {
	let t = [];
	for (let n = -1, r = e.length; ++n < r;) t[n] = Js(e.get(n));
	return $s(t);
}
function Qs(e, t = !1) {
	let n = Object.keys(e);
	if (!t && n.length === 0) return () => !1;
	let r = [];
	for (let t = -1, i = n.length; ++t < i;) r[t] = Js(e[n[t]]);
	return $s(r, n);
}
function $s(e, t) {
	return (n) => {
		if (!n || typeof n != "object") return !1;
		switch (n.constructor) {
			case Array: return ec(e, n);
			case Map: return nc(e, n, n.keys());
			case Vs:
			case zo:
			case Object:
			case void 0: return nc(e, n, t || Object.keys(n));
		}
		return n instanceof Z && tc(e, n);
	};
}
function ec(e, t) {
	let n = e.length;
	if (t.length !== n) return !1;
	for (let r = -1; ++r < n;) if (!e[r](t[r])) return !1;
	return !0;
}
function tc(e, t) {
	let n = e.length;
	if (t.length !== n) return !1;
	for (let r = -1; ++r < n;) if (!e[r](t.get(r))) return !1;
	return !0;
}
function nc(e, t, n) {
	let r = n[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), a = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator](), o = 0, s = e.length, c = a.next(), l = r.next(), u = i.next();
	for (; o < s && !l.done && !u.done && !c.done && l.value === u.value && e[o](c.value); ++o, l = r.next(), u = i.next(), c = a.next());
	return o === s && l.done && u.done && c.done ? !0 : (r.return && r.return(), i.return && i.return(), a.return && a.return(), !1);
}
//#endregion
//#region ../node_modules/apache-arrow/util/bit.mjs
function rc(e, t, n, r) {
	return !!(n & 1 << r);
}
function ic(e, t, n, r) {
	return (n & 1 << r) >> r;
}
function ac(e, t, n) {
	let r = n.byteLength + 7 & -8;
	if (e > 0 || n.byteLength < r) {
		let i = new Uint8Array(r);
		return i.set(e % 8 == 0 ? n.subarray(e >> 3) : oc(new sc(n, e, t, null, rc)).subarray(0, r)), i;
	}
	return n;
}
function oc(e) {
	let t = [], n = 0, r = 0, i = 0;
	for (let a of e) a && (i |= 1 << r), ++r === 8 && (t[n++] = i, i = r = 0);
	(n === 0 || r > 0) && (t[n++] = i);
	let a = new Uint8Array(t.length + 7 & -8);
	return a.set(t), a;
}
var sc = class {
	constructor(e, t, n, r, i) {
		this.bytes = e, this.length = n, this.context = r, this.get = i, this.bit = t % 8, this.byteIndex = t >> 3, this.byte = e[this.byteIndex++], this.index = 0;
	}
	next() {
		return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), { value: this.get(this.context, this.index++, this.byte, this.bit++) }) : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function cc(e, t, n) {
	if (n - t <= 0) return 0;
	if (n - t < 8) {
		let r = 0;
		for (let i of new sc(e, t, n - t, e, ic)) r += i;
		return r;
	}
	let r = n >> 3 << 3, i = t + (t % 8 == 0 ? 0 : 8 - t % 8);
	return cc(e, t, i) + cc(e, r, n) + lc(e, i >> 3, r - i >> 3);
}
function lc(e, t, n) {
	let r = 0, i = Math.trunc(t), a = new DataView(e.buffer, e.byteOffset, e.byteLength), o = n === void 0 ? e.byteLength : i + n;
	for (; o - i >= 4;) r += uc(a.getUint32(i)), i += 4;
	for (; o - i >= 2;) r += uc(a.getUint16(i)), i += 2;
	for (; o - i >= 1;) r += uc(a.getUint8(i)), i += 1;
	return r;
}
function uc(e) {
	let t = Math.trunc(e);
	return t -= t >>> 1 & 1431655765, t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
var dc = Symbol.for("apache-arrow/Data"), K = class e {
	static isData(e) {
		return e?.[dc] === !0;
	}
	get typeId() {
		return this.type.typeId;
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get buffers() {
		return [
			this.valueOffsets,
			this.values,
			this.nullBitmap,
			this.typeIds
		];
	}
	get nullable() {
		if (this._nullCount !== 0) {
			let { type: e } = this;
			return z.isSparseUnion(e) || z.isDenseUnion(e) ? this.children.some((e) => e.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
		}
		return !0;
	}
	get byteLength() {
		let e = 0, { valueOffsets: t, values: n, nullBitmap: r, typeIds: i } = this;
		return t && (e += t.byteLength), n && (e += n.byteLength), r && (e += r.byteLength), i && (e += i.byteLength), e += this.variadicBuffers.reduce((e, t) => e + (t?.byteLength ?? 0), 0), this.children.reduce((e, t) => e + t.byteLength, e);
	}
	get nullCount() {
		if (z.isUnion(this.type)) return this.children.reduce((e, t) => e + t.nullCount, 0);
		let e = this._nullCount, t;
		return e <= -1 && (t = this.nullBitmap) && (this._nullCount = e = t.length === 0 ? 0 : this.length - cc(t, this.offset, this.offset + this.length)), e;
	}
	constructor(t, n, r, i, a, o = [], s, c = []) {
		this.type = t, this.children = o, this.dictionary = s, this.offset = Math.floor(Math.max(n || 0, 0)), this.length = Math.floor(Math.max(r || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1));
		let l;
		a instanceof e ? (this.stride = a.stride, this.values = a.values, this.typeIds = a.typeIds, this.nullBitmap = a.nullBitmap, this.valueOffsets = a.valueOffsets, this.variadicBuffers = a.variadicBuffers) : (this.stride = Ma(t), a && ((l = a[0]) && (this.valueOffsets = l), (l = a[1]) && (this.values = l), (l = a[2]) && (this.nullBitmap = l), (l = a[3]) && (this.typeIds = l)), this.variadicBuffers = c), this.variadicBuffers ??= [];
	}
	getValid(e) {
		let { type: t } = this;
		if (z.isUnion(t)) {
			let n = t, r = this.typeIds[e], i = n.typeIdToChildIndex[r], a = this.children[i], o = this.valueOffsets, s = n.mode === mr.Dense && o ? Number(o[e]) : e;
			return a.getValid(s);
		}
		if (this.nullable && this.nullCount > 0) {
			let t = this.offset + e;
			return !!(this.nullBitmap[t >> 3] & 1 << t % 8);
		}
		return !0;
	}
	setValid(e, t) {
		let n, { type: r } = this;
		if (z.isUnion(r)) {
			let i = r, a = this.typeIds[e], o = i.typeIdToChildIndex[a], s = this.children[o], c = this.valueOffsets, l = i.mode === mr.Dense && c ? Number(c[e]) : e;
			n = s.getValid(l), s.setValid(l, t);
		} else {
			let { nullBitmap: r } = this, { offset: i, length: a } = this, o = i + e, s = 1 << o % 8, c = o >> 3;
			(!r || r.byteLength <= c) && (r = new Uint8Array((i + a + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (r.set(ac(i, a, this.nullBitmap), 0), Object.assign(this, { nullBitmap: r })) : Object.assign(this, {
				nullBitmap: r,
				_nullCount: 0
			}));
			let l = r[c];
			n = (l & s) !== 0, r[c] = t ? l | s : l & ~s;
		}
		return n !== !!t && (this._nullCount = this.nullCount + (t ? -1 : 1)), t;
	}
	clone(t = this.type, n = this.offset, r = this.length, i = this._nullCount, a = this, o = this.children, s = this.variadicBuffers) {
		return new e(t, n, r, i, a, o, this.dictionary, s);
	}
	slice(e, t) {
		let { stride: n, typeId: r, children: i } = this, a = (this._nullCount === 0) - 1, o = r === 16 ? n : 1, s = this._sliceBuffers(e, t, n, r);
		return this.clone(this.type, this.offset + e, t, a, s, i.length === 0 || this.valueOffsets ? i : this._sliceChildren(i, o * e, o * t), this.variadicBuffers);
	}
	_changeLengthAndBackfillNullBitmap(e) {
		if (this.typeId === L.Null) return this.clone(this.type, 0, e, 0, this.buffers, this.children, this.variadicBuffers);
		let { length: t, nullCount: n } = this, r = new Uint8Array((e + 63 & -64) >> 3).fill(255, 0, t >> 3);
		r[t >> 3] = (1 << t - (t & -8)) - 1, n > 0 && r.set(ac(this.offset, t, this.nullBitmap), 0);
		let i = this.buffers;
		return i[li.VALIDITY] = r, this.clone(this.type, 0, e, n + (e - t), i, this.children, this.variadicBuffers);
	}
	_sliceBuffers(e, t, n, r) {
		let i, { buffers: a } = this;
		if ((i = a[li.TYPE]) && (a[li.TYPE] = i.subarray(e, e + t)), z.isBinaryView(this.type) || z.isUtf8View(this.type)) {
			let n = B.ELEMENT_WIDTH;
			(i = a[li.DATA]) && (a[li.DATA] = i.subarray(e * n, (e + t) * n));
		} else (i = a[li.OFFSET]) && (a[li.OFFSET] = i.subarray(e, e + t + 1)) || (i = a[li.DATA]) && (a[li.DATA] = r === 6 ? i : i.subarray(n * e, n * (e + t)));
		return a;
	}
	_sliceChildren(e, t, n) {
		return e.map((e) => e.slice(t, n));
	}
};
K.prototype.children = Object.freeze([]), K.prototype[dc] = !0, Object.defineProperty(K, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === K && K.isData(e);
} });
var fc = new class e extends V {
	visit(e) {
		return this.getVisitFn(e.type).call(this, e);
	}
	visitNull(e) {
		let { type: t, offset: n = 0, length: r = 0 } = e;
		return new K(t, n, r, r);
	}
	visitBool(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length >> 3, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitInt(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitFloat(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitUtf8(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.data), i = F(e.nullBitmap), a = Xn(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitUtf8View(e) {
		let { type: t, offset: n = 0 } = e, r = Yn(t.ArrayType, e.views), i = F(e.nullBitmap), a = (e.variadicBuffers || []).map((e) => F(e));
		return new K(t, n, e.length ?? Math.trunc(r.length / pa.ELEMENT_WIDTH), e.nullBitmap ? -1 : 0, [
			void 0,
			r,
			i
		], [], void 0, a);
	}
	visitLargeUtf8(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.data), i = F(e.nullBitmap), a = Zn(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitBinary(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.data), i = F(e.nullBitmap), a = Xn(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitBinaryView(e) {
		let { type: t, offset: n = 0 } = e, r = Yn(t.ArrayType, e.views), i = F(e.nullBitmap), a = (e.variadicBuffers || []).map((e) => F(e));
		return new K(t, n, e.length ?? Math.trunc(r.length / B.ELEMENT_WIDTH), e.nullBitmap ? -1 : 0, [
			void 0,
			r,
			i
		], [], void 0, a);
	}
	visitLargeBinary(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.data), i = F(e.nullBitmap), a = Zn(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitFixedSizeBinary(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length / Ma(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitDate(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length / Ma(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitTimestamp(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length / Ma(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitTime(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length / Ma(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitDecimal(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length / Ma(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitList(e) {
		let { type: t, offset: n = 0, child: r } = e, i = F(e.nullBitmap), a = Xn(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, o, s, [
			a,
			void 0,
			i
		], [r]);
	}
	visitLargeList(e) {
		let { type: t, offset: n = 0, child: r } = e, i = F(e.nullBitmap), a = Zn(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, o, s, [
			a,
			void 0,
			i
		], [r]);
	}
	visitStruct(e) {
		let { type: t, offset: n = 0, children: r = [] } = e, i = F(e.nullBitmap), { length: a = r.reduce((e, { length: t }) => Math.max(e, t), 0), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			void 0,
			i
		], r);
	}
	visitUnion(e) {
		let { type: t, offset: n = 0, children: r = [] } = e, i = Yn(t.ArrayType, e.typeIds), { length: a = i.length, nullCount: o = -1 } = e;
		return z.isSparseUnion(t) ? new K(t, n, a, o, [
			void 0,
			void 0,
			void 0,
			i
		], r) : new K(t, n, a, o, [
			Xn(e.valueOffsets),
			void 0,
			void 0,
			i
		], r);
	}
	visitDictionary(t) {
		let { type: n, offset: r = 0 } = t, i = F(t.nullBitmap), a = Yn(n.indices.ArrayType, t.data), { dictionary: o = new Z([new e().visit({ type: n.dictionary })]) } = t, { length: s = a.length, nullCount: c = t.nullBitmap ? -1 : 0 } = t;
		return new K(n, r, s, c, [
			void 0,
			a,
			i
		], [], o);
	}
	visitInterval(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length / Ma(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitDuration(e) {
		let { type: t, offset: n = 0 } = e, r = F(e.nullBitmap), i = Yn(t.ArrayType, e.data), { length: a = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new K(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitFixedSizeList(t) {
		let { type: n, offset: r = 0, child: i = new e().visit({ type: n.valueType }) } = t, a = F(t.nullBitmap), { length: o = i.length / Ma(n), nullCount: s = t.nullBitmap ? -1 : 0 } = t;
		return new K(n, r, o, s, [
			void 0,
			void 0,
			a
		], [i]);
	}
	visitMap(t) {
		let { type: n, offset: r = 0, child: i = new e().visit({ type: n.childType }) } = t, a = F(t.nullBitmap), o = Xn(t.valueOffsets), { length: s = o.length - 1, nullCount: c = t.nullBitmap ? -1 : 0 } = t;
		return new K(n, r, s, c, [
			o,
			void 0,
			a
		], [i]);
	}
}();
function pc(e) {
	return fc.visit(e);
}
//#endregion
//#region ../node_modules/apache-arrow/util/chunk.mjs
var mc = class {
	constructor(e = 0, t) {
		this.numChunks = e, this.getChunkIterator = t, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
	}
	next() {
		for (; this.chunkIndex < this.numChunks;) {
			let e = this.chunkIterator.next();
			if (!e.done) return e;
			++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
		}
		return {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function hc(e) {
	return e.some((e) => e.nullable);
}
function gc(e) {
	return e.reduce((e, t) => e + t.nullCount, 0);
}
function _c(e) {
	return e.reduce((e, t, n) => (e[n + 1] = e[n] + t.length, e), new Uint32Array(e.length + 1));
}
function vc(e, t, n, r) {
	let i = [];
	for (let a = -1, o = e.length; ++a < o;) {
		let o = e[a], s = t[a], { length: c } = o;
		if (s >= r) break;
		if (n >= s + c) continue;
		if (s >= n && s + c <= r) {
			i.push(o);
			continue;
		}
		let l = Math.max(0, n - s), u = Math.min(r - s, c);
		i.push(o.slice(l, u - l));
	}
	return i.length === 0 && i.push(e[0].slice(0, 0)), i;
}
function yc(e, t, n, r) {
	let i = 0, a = 0, o = t.length - 1;
	do {
		if (i >= o - 1) return n < t[o] ? r(e, i, n - t[i]) : null;
		a = i + Math.trunc((o - i) * .5), n < t[a] ? o = a : i = a;
	} while (i < o);
}
function bc(e, t) {
	return e.getValid(t);
}
function xc(e) {
	function t(t, n, r) {
		return e(t[n], r);
	}
	return function(e) {
		let n = this.data;
		return yc(n, this._offsets, e, t);
	};
}
function Sc(e) {
	let t;
	function n(n, r, i) {
		return e(n[r], i, t);
	}
	return function(e, r) {
		let i = this.data;
		t = r;
		let a = yc(i, this._offsets, e, n);
		return t = void 0, a;
	};
}
function Cc(e) {
	let t;
	function n(n, r, i) {
		let a = i, o = 0, s = 0;
		for (let i = r - 1, c = n.length; ++i < c;) {
			let r = n[i];
			if (~(o = e(r, t, a))) return s + o;
			a = 0, s += r.length;
		}
		return -1;
	}
	return function(e, r) {
		t = e;
		let i = this.data, a = typeof r == "number" ? yc(i, this._offsets, r, n) : n(i, 0, 0);
		return t = void 0, a;
	};
}
//#endregion
//#region ../node_modules/apache-arrow/visitor/indexof.mjs
var q = class extends V {};
function wc(e, t) {
	return t === null && e.length > 0 ? 0 : -1;
}
function Tc(e, t) {
	let { nullBitmap: n } = e;
	if (!n || e.nullCount <= 0) return -1;
	let r = 0;
	for (let i of new sc(n, e.offset + (t || 0), e.length, n, rc)) {
		if (!i) return r;
		++r;
	}
	return -1;
}
function J(e, t, n) {
	if (t === void 0) return -1;
	if (t === null) switch (e.typeId) {
		case L.Union: break;
		case L.Dictionary: break;
		default: return Tc(e, n);
	}
	let r = Is.getVisitFn(e), i = Js(t);
	for (let t = (n || 0) - 1, a = e.length; ++t < a;) if (i(r(e, t))) return t;
	return -1;
}
function Ec(e, t, n) {
	let r = Is.getVisitFn(e), i = Js(t);
	for (let t = (n || 0) - 1, a = e.length; ++t < a;) if (i(r(e, t))) return t;
	return -1;
}
q.prototype.visitNull = wc, q.prototype.visitBool = J, q.prototype.visitInt = J, q.prototype.visitInt8 = J, q.prototype.visitInt16 = J, q.prototype.visitInt32 = J, q.prototype.visitInt64 = J, q.prototype.visitUint8 = J, q.prototype.visitUint16 = J, q.prototype.visitUint32 = J, q.prototype.visitUint64 = J, q.prototype.visitFloat = J, q.prototype.visitFloat16 = J, q.prototype.visitFloat32 = J, q.prototype.visitFloat64 = J, q.prototype.visitUtf8 = J, q.prototype.visitLargeUtf8 = J, q.prototype.visitUtf8View = J, q.prototype.visitBinary = J, q.prototype.visitLargeBinary = J, q.prototype.visitBinaryView = J, q.prototype.visitFixedSizeBinary = J, q.prototype.visitDate = J, q.prototype.visitDateDay = J, q.prototype.visitDateMillisecond = J, q.prototype.visitTimestamp = J, q.prototype.visitTimestampSecond = J, q.prototype.visitTimestampMillisecond = J, q.prototype.visitTimestampMicrosecond = J, q.prototype.visitTimestampNanosecond = J, q.prototype.visitTime = J, q.prototype.visitTimeSecond = J, q.prototype.visitTimeMillisecond = J, q.prototype.visitTimeMicrosecond = J, q.prototype.visitTimeNanosecond = J, q.prototype.visitDecimal = J, q.prototype.visitList = J, q.prototype.visitLargeList = J, q.prototype.visitStruct = J, q.prototype.visitUnion = J, q.prototype.visitDenseUnion = Ec, q.prototype.visitSparseUnion = Ec, q.prototype.visitDictionary = J, q.prototype.visitInterval = J, q.prototype.visitIntervalDayTime = J, q.prototype.visitIntervalYearMonth = J, q.prototype.visitIntervalMonthDayNano = J, q.prototype.visitDuration = J, q.prototype.visitDurationSecond = J, q.prototype.visitDurationMillisecond = J, q.prototype.visitDurationMicrosecond = J, q.prototype.visitDurationNanosecond = J, q.prototype.visitFixedSizeList = J, q.prototype.visitMap = J;
var Dc = new q(), Y = class extends V {};
function X(e) {
	let { type: t } = e;
	if (e.nullCount === 0 && e.stride === 1 && (z.isInt(t) && t.bitWidth !== 64 || z.isTime(t) && t.bitWidth !== 64 || z.isFloat(t) && t.precision !== hr.HALF)) return new mc(e.data.length, (t) => {
		let n = e.data[t];
		return n.values.subarray(0, n.length)[Symbol.iterator]();
	});
	let n = 0;
	return new mc(e.data.length, (t) => {
		let r = e.data[t].length, i = e.slice(n, n + r);
		return n += r, new Oc(i);
	});
}
var Oc = class {
	constructor(e) {
		this.vector = e, this.index = 0;
	}
	next() {
		return this.index < this.vector.length ? { value: this.vector.get(this.index++) } : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
Y.prototype.visitNull = X, Y.prototype.visitBool = X, Y.prototype.visitInt = X, Y.prototype.visitInt8 = X, Y.prototype.visitInt16 = X, Y.prototype.visitInt32 = X, Y.prototype.visitInt64 = X, Y.prototype.visitUint8 = X, Y.prototype.visitUint16 = X, Y.prototype.visitUint32 = X, Y.prototype.visitUint64 = X, Y.prototype.visitFloat = X, Y.prototype.visitFloat16 = X, Y.prototype.visitFloat32 = X, Y.prototype.visitFloat64 = X, Y.prototype.visitUtf8 = X, Y.prototype.visitLargeUtf8 = X, Y.prototype.visitUtf8View = X, Y.prototype.visitBinary = X, Y.prototype.visitLargeBinary = X, Y.prototype.visitBinaryView = X, Y.prototype.visitFixedSizeBinary = X, Y.prototype.visitDate = X, Y.prototype.visitDateDay = X, Y.prototype.visitDateMillisecond = X, Y.prototype.visitTimestamp = X, Y.prototype.visitTimestampSecond = X, Y.prototype.visitTimestampMillisecond = X, Y.prototype.visitTimestampMicrosecond = X, Y.prototype.visitTimestampNanosecond = X, Y.prototype.visitTime = X, Y.prototype.visitTimeSecond = X, Y.prototype.visitTimeMillisecond = X, Y.prototype.visitTimeMicrosecond = X, Y.prototype.visitTimeNanosecond = X, Y.prototype.visitDecimal = X, Y.prototype.visitList = X, Y.prototype.visitLargeList = X, Y.prototype.visitStruct = X, Y.prototype.visitUnion = X, Y.prototype.visitDenseUnion = X, Y.prototype.visitSparseUnion = X, Y.prototype.visitDictionary = X, Y.prototype.visitInterval = X, Y.prototype.visitIntervalDayTime = X, Y.prototype.visitIntervalYearMonth = X, Y.prototype.visitIntervalMonthDayNano = X, Y.prototype.visitDuration = X, Y.prototype.visitDurationSecond = X, Y.prototype.visitDurationMillisecond = X, Y.prototype.visitDurationMicrosecond = X, Y.prototype.visitDurationNanosecond = X, Y.prototype.visitFixedSizeList = X, Y.prototype.visitMap = X;
var kc = new Y(), Ac, jc = Symbol.for("apache-arrow/Vector"), Mc = {}, Nc = {}, Z = class e {
	static isVector(e) {
		return e?.[jc] === !0;
	}
	constructor(t) {
		let n = t[0] instanceof e ? t.flatMap((e) => e.data) : t;
		if (n.length === 0 || n.some((e) => !(e instanceof K))) throw TypeError("Vector constructor expects an Array of Data instances.");
		let r = n[0]?.type;
		switch (n.length) {
			case 0:
				this._offsets = [0];
				break;
			case 1: {
				let { get: e, set: t, indexOf: i } = Mc[r.typeId], a = n[0];
				this.isValid = (e) => bc(a, e), this.get = (t) => e(a, t), this.set = (e, n) => t(a, e, n), this.indexOf = (e) => i(a, e), this._offsets = [0, a.length];
				break;
			}
			default: Object.setPrototypeOf(this, Nc[r.typeId]), this._offsets = _c(n);
		}
		this.data = n, this.type = r, this.stride = Ma(r), this.numChildren = r.children?.length ?? 0, this.length = this._offsets.at(-1);
	}
	get byteLength() {
		return this.data.reduce((e, t) => e + t.byteLength, 0);
	}
	get nullable() {
		return hc(this.data);
	}
	get nullCount() {
		return gc(this.data);
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get [Symbol.toStringTag]() {
		return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
	}
	get VectorName() {
		return `${L[this.type.typeId]}Vector`;
	}
	isValid(e) {
		return !1;
	}
	get(e) {
		return null;
	}
	at(e) {
		return this.get(Ks(e, this.length));
	}
	set(e, t) {}
	indexOf(e, t) {
		return -1;
	}
	includes(e, t) {
		return this.indexOf(e, t) > -1;
	}
	[Symbol.iterator]() {
		return kc.visit(this);
	}
	concat(...t) {
		return new e(this.data.concat(t.flatMap((e) => e.data).flat(Infinity)));
	}
	slice(t, n) {
		return new e(Gs(this, t, n, ({ data: e, _offsets: t }, n, r) => vc(e, t, n, r)));
	}
	toJSON() {
		return [...this];
	}
	toArray() {
		let { type: e, data: t, length: n, stride: r, ArrayType: i } = this;
		switch (e.typeId) {
			case L.Int:
			case L.Float:
			case L.Decimal:
			case L.Time:
			case L.Timestamp: switch (t.length) {
				case 0: return new i();
				case 1: return t[0].values.subarray(0, n * r);
				default: return t.reduce((e, { values: t, length: n }) => (e.array.set(t.subarray(0, n * r), e.offset), e.offset += n * r, e), {
					array: new i(n * r),
					offset: 0
				}).array;
			}
		}
		return [...this];
	}
	toString() {
		return `[${[...this].join(",")}]`;
	}
	getChild(e) {
		return this.getChildAt(this.type.children?.findIndex((t) => t.name === e));
	}
	getChildAt(t) {
		return t > -1 && t < this.numChildren ? new e(this.data.map(({ children: e }) => e[t])) : null;
	}
	get isMemoized() {
		return z.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
	}
	memoize() {
		if (z.isDictionary(this.type)) {
			let t = new Pc(this.data[0].dictionary), n = this.data.map((e) => {
				let n = e.clone();
				return n.dictionary = t, n;
			});
			return new e(n);
		}
		return new Pc(this);
	}
	unmemoize() {
		if (z.isDictionary(this.type) && this.isMemoized) {
			let t = this.data[0].dictionary.unmemoize(), n = this.data.map((e) => {
				let n = e.clone();
				return n.dictionary = t, n;
			});
			return new e(n);
		}
		return this;
	}
};
Ac = Symbol.toStringTag, Z[Ac] = ((e) => {
	e.type = z.prototype, e.data = [], e.length = 0, e.stride = 1, e.numChildren = 0, e._offsets = new Uint32Array([0]), e[Symbol.isConcatSpreadable] = !0, e[jc] = !0;
	let t = Object.keys(L).map((e) => L[e]).filter((e) => typeof e == "number" && e !== L.NONE);
	for (let n of t) Mc[n] = {
		get: Is.getVisitFnByTypeId(n),
		set: Io.getVisitFnByTypeId(n),
		indexOf: Dc.getVisitFnByTypeId(n)
	}, Nc[n] = Object.create(e, {
		isValid: { value: xc(bc) },
		get: { value: xc(Is.getVisitFnByTypeId(n)) },
		set: { value: Sc(Io.getVisitFnByTypeId(n)) },
		indexOf: { value: Cc(Dc.getVisitFnByTypeId(n)) }
	});
	return "Vector";
})(Z.prototype), Object.defineProperty(Z, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === Z && Z.isVector(e);
} });
var Pc = class e extends Z {
	constructor(t) {
		super(t.data);
		let n = this.get, r = this.set, i = this.slice, a = Array(this.length);
		Object.defineProperty(this, "get", { value(e) {
			let t = a[e];
			if (t !== void 0) return t;
			let r = n.call(this, e);
			return a[e] = r, r;
		} }), Object.defineProperty(this, "set", { value(e, t) {
			r.call(this, e, t), a[e] = t;
		} }), Object.defineProperty(this, "slice", { value: (t, n) => new e(i.call(this, t, n)) }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", { value: () => new Z(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
	}
};
function Fc(e) {
	if (e) {
		if (e instanceof K) return new Z([e]);
		if (e instanceof Z) return new Z(e.data);
		if (e.type instanceof z) return new Z([pc(e)]);
		if (Array.isArray(e)) return new Z(e.flatMap((e) => Ic(e)));
		if (ArrayBuffer.isView(e)) {
			e instanceof DataView && (e = new Uint8Array(e.buffer));
			let t = {
				offset: 0,
				length: e.length,
				nullCount: -1,
				data: e
			};
			if (e instanceof Int8Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new Qi() }))]);
			if (e instanceof Int16Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new $i() }))]);
			if (e instanceof Int32Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new ea() }))]);
			if (e instanceof BigInt64Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new ta() }))]);
			if (e instanceof Uint8Array || e instanceof Uint8ClampedArray) return new Z([pc(Object.assign(Object.assign({}, t), { type: new na() }))]);
			if (e instanceof Uint16Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new ra() }))]);
			if (e instanceof Uint32Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new ia() }))]);
			if (e instanceof BigUint64Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new aa() }))]);
			if (e instanceof Float32Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new ca() }))]);
			if (e instanceof Float64Array) return new Z([pc(Object.assign(Object.assign({}, t), { type: new la() }))]);
			throw Error("Unrecognized input");
		}
	}
	throw Error("Unrecognized input");
}
function Ic(e) {
	return e instanceof K ? [e] : e instanceof Z ? e.data : Fc(e).data;
}
//#endregion
//#region ../node_modules/apache-arrow/builder/valid.mjs
function Lc(e) {
	if (!e || e.length <= 0) return function(e) {
		return !0;
	};
	let t = "", n = e.filter((e) => e === e);
	return n.length > 0 && (t = `
    switch (x) {${n.map((e) => `
        case ${Rc(e)}:`).join("")}
            return false;
    }`), e.length !== n.length && (t = `if (x !== x) return false;\n${t}`), Function("x", `${t}\nreturn true;`);
}
function Rc(e) {
	return typeof e == "bigint" ? `${di(e)}n` : di(e);
}
//#endregion
//#region ../node_modules/apache-arrow/builder/buffer.mjs
function zc(e, t) {
	let n = Math.ceil(e) * t - 1;
	return (n - n % 64 + 64 || 64) / t;
}
function Bc(e, t = 0) {
	return e.length >= t ? e.subarray(0, t) : qn(new e.constructor(t), e, 0);
}
var Vc = class {
	constructor(e, t = 0, n = 1) {
		this.length = Math.ceil(t / n), this.buffer = new e(this.length), this.stride = n, this.BYTES_PER_ELEMENT = e.BYTES_PER_ELEMENT, this.ArrayType = e;
	}
	get byteLength() {
		return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT;
	}
	get reservedLength() {
		return this.buffer.length / this.stride;
	}
	get reservedByteLength() {
		return this.buffer.byteLength;
	}
	set(e, t) {
		return this;
	}
	append(e) {
		return this.set(this.length, e);
	}
	reserve(e) {
		if (e > 0) {
			this.length += e;
			let t = this.stride, n = this.length * t, r = this.buffer.length;
			n >= r && this._resize(zc(r === 0 ? n * 1 : n * 2, this.BYTES_PER_ELEMENT));
		}
		return this;
	}
	flush(e = this.length) {
		e = zc(e * this.stride, this.BYTES_PER_ELEMENT);
		let t = Bc(this.buffer, e);
		return this.clear(), t;
	}
	clear() {
		return this.length = 0, this.buffer = new this.ArrayType(), this;
	}
	_resize(e) {
		return this.buffer = Bc(this.buffer, e);
	}
}, Hc = class extends Vc {
	last() {
		return this.get(this.length - 1);
	}
	get(e) {
		return this.buffer[e];
	}
	set(e, t) {
		return this.reserve(e - this.length + 1), this.buffer[e * this.stride] = t, this;
	}
}, Uc = class extends Hc {
	constructor() {
		super(Uint8Array, 0, 1 / 8), this.numValid = 0;
	}
	get numInvalid() {
		return this.length - this.numValid;
	}
	get(e) {
		return this.buffer[e >> 3] >> e % 8 & 1;
	}
	set(e, t) {
		let { buffer: n } = this.reserve(e - this.length + 1), r = e >> 3, i = e % 8, a = n[r] >> i & 1;
		return t ? a === 0 && (n[r] |= 1 << i, ++this.numValid) : a === 1 && (n[r] &= ~(1 << i), --this.numValid), this;
	}
	clear() {
		return this.numValid = 0, super.clear();
	}
}, Wc = class extends Hc {
	constructor(e) {
		super(e.OffsetArrayType, 1, 1);
	}
	append(e) {
		return this.set(this.length - 1, e);
	}
	set(e, t) {
		let n = this.length - 1, r = this.reserve(e - n + 1).buffer;
		return n < e++ && n >= 0 && r.fill(r[n], n, e), r[e] = r[e - 1] + t, this;
	}
	flush(e = this.length - 1) {
		return e > this.length && this.set(e - 1, this.BYTES_PER_ELEMENT > 4 ? BigInt(0) : 0), super.flush(e + 1);
	}
}, Gc = class {
	static throughNode(e) {
		throw Error("\"throughNode\" not available in this environment");
	}
	static throughDOM(e) {
		throw Error("\"throughDOM\" not available in this environment");
	}
	constructor({ type: e, nullValues: t }) {
		this.length = 0, this.finished = !1, this.type = e, this.children = [], this.nullValues = t, this.stride = Ma(e), this._nulls = new Uc(), t && t.length > 0 && (this._isValid = Lc(t));
	}
	toVector() {
		return new Z([this.flush()]);
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get nullCount() {
		return this._nulls.numInvalid;
	}
	get numChildren() {
		return this.children.length;
	}
	get byteLength() {
		let e = 0, { _offsets: t, _values: n, _nulls: r, _typeIds: i, children: a } = this;
		return t && (e += t.byteLength), n && (e += n.byteLength), r && (e += r.byteLength), i && (e += i.byteLength), a.reduce((e, t) => e + t.byteLength, e);
	}
	get reservedLength() {
		return this._nulls.reservedLength;
	}
	get reservedByteLength() {
		let e = 0;
		return this._offsets && (e += this._offsets.reservedByteLength), this._values && (e += this._values.reservedByteLength), this._nulls && (e += this._nulls.reservedByteLength), this._typeIds && (e += this._typeIds.reservedByteLength), this.children.reduce((e, t) => e + t.reservedByteLength, e);
	}
	get valueOffsets() {
		return this._offsets ? this._offsets.buffer : null;
	}
	get values() {
		return this._values ? this._values.buffer : null;
	}
	get nullBitmap() {
		return this._nulls ? this._nulls.buffer : null;
	}
	get typeIds() {
		return this._typeIds ? this._typeIds.buffer : null;
	}
	append(e) {
		return this.set(this.length, e);
	}
	isValid(e) {
		return this._isValid(e);
	}
	set(e, t) {
		return this.setValid(e, this.isValid(t)) && this.setValue(e, t), this;
	}
	setValue(e, t) {
		this._setValue(this, e, t);
	}
	setValid(e, t) {
		return this.length = this._nulls.set(e, +t).length, t;
	}
	addChild(e, t = `${this.numChildren}`) {
		throw Error(`Cannot append children to non-nested type "${this.type}"`);
	}
	getChildAt(e) {
		return this.children[e] || null;
	}
	flush() {
		let e, t, n, r, { type: i, length: a, nullCount: o, _typeIds: s, _offsets: c, _values: l, _nulls: u } = this;
		(t = s?.flush(a)) ? r = c?.flush(a) : e = (r = c?.flush(a)) ? l?.flush(c.last()) : l?.flush(a), o > 0 && (n = u?.flush(a));
		let d = this.children.map((e) => e.flush());
		return this.clear(), pc({
			type: i,
			length: a,
			nullCount: o,
			children: d,
			child: d[0],
			data: e,
			typeIds: t,
			nullBitmap: n,
			valueOffsets: r
		});
	}
	finish() {
		this.finished = !0;
		for (let e of this.children) e.finish();
		return this;
	}
	clear() {
		var e, t, n, r;
		this.length = 0, (e = this._nulls) == null || e.clear(), (t = this._values) == null || t.clear(), (n = this._offsets) == null || n.clear(), (r = this._typeIds) == null || r.clear();
		for (let e of this.children) e.clear();
		return this;
	}
};
Gc.prototype.length = 1, Gc.prototype.stride = 1, Gc.prototype.children = null, Gc.prototype.finished = !1, Gc.prototype.nullValues = null, Gc.prototype._isValid = () => !0;
var Kc = class extends Gc {
	constructor(e) {
		super(e), this._values = new Hc(this.ArrayType, 0, this.stride);
	}
	setValue(e, t) {
		let n = this._values;
		return n.reserve(e - n.length + 1), super.setValue(e, t);
	}
}, qc = class extends Gc {
	constructor(e) {
		super(e), this._pendingLength = 0, this._offsets = new Wc(e.type);
	}
	setValue(e, t) {
		let n = this._pending ||= /* @__PURE__ */ new Map(), r = n.get(e);
		r && (this._pendingLength -= r.length), this._pendingLength += t instanceof Vs ? t[Ls].length : t.length, n.set(e, t);
	}
	setValid(e, t) {
		return super.setValid(e, t) ? !0 : ((this._pending ||= /* @__PURE__ */ new Map()).set(e, void 0), !1);
	}
	clear() {
		return this._pendingLength = 0, this._pending = void 0, super.clear();
	}
	flush() {
		return this._flush(), super.flush();
	}
	finish() {
		return this._flush(), super.finish();
	}
	_flush() {
		let e = this._pending, t = this._pendingLength;
		return this._pendingLength = 0, this._pending = void 0, e && e.size > 0 && this._flushPending(e, t), this;
	}
}, Jc = class {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	offset() {
		return this.bb.readInt64(this.bb_pos);
	}
	metaDataLength() {
		return this.bb.readInt32(this.bb_pos + 8);
	}
	bodyLength() {
		return this.bb.readInt64(this.bb_pos + 16);
	}
	static sizeOf() {
		return 24;
	}
	static createBlock(e, t, n, r) {
		return e.prep(8, 24), e.writeInt64(BigInt(r ?? 0)), e.pad(4), e.writeInt32(n), e.writeInt64(BigInt(t ?? 0)), e.offset();
	}
}, Yc = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFooter(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFooter(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	version() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : pr.V1;
	}
	schema(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? (e || new si()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	dictionaries(e, t) {
		let n = this.bb.__offset(this.bb_pos, 8);
		return n ? (t || new Jc()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb) : null;
	}
	dictionariesLength() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	recordBatches(e, t) {
		let n = this.bb.__offset(this.bb_pos, 10);
		return n ? (t || new Jc()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb) : null;
	}
	recordBatchesLength() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 12);
		return n ? (t || new Ir()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 12);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startFooter(e) {
		e.startObject(5);
	}
	static addVersion(e, t) {
		e.addFieldInt16(0, t, pr.V1);
	}
	static addSchema(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static addDictionaries(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static startDictionariesVector(e, t) {
		e.startVector(24, t, 8);
	}
	static addRecordBatches(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static startRecordBatchesVector(e, t) {
		e.startVector(24, t, 8);
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endFooter(e) {
		return e.endObject();
	}
	static finishFooterBuffer(e, t) {
		e.finish(t);
	}
	static finishSizePrefixedFooterBuffer(e, t) {
		e.finish(t, void 0, !0);
	}
}, Xc = Symbol.for("apache-arrow/Schema"), Zc = Symbol.for("apache-arrow/Field"), Qc = class e {
	static isSchema(e) {
		return e?.[Xc] === !0;
	}
	constructor(e = [], t, n, r = pr.V5) {
		this.fields = e || [], this.metadata = t || /* @__PURE__ */ new Map(), n ||= el(this.fields), this.dictionaries = n, this.metadataVersion = r;
	}
	get [Symbol.toStringTag]() {
		return "Schema";
	}
	get names() {
		return this.fields.map((e) => e.name);
	}
	toString() {
		return `Schema<{ ${this.fields.map((e, t) => `${t}: ${e}`).join(", ")} }>`;
	}
	select(t) {
		let n = new Set(t), r = this.fields.filter((e) => n.has(e.name));
		return new e(r, this.metadata);
	}
	selectAt(t) {
		let n = t.map((e) => this.fields[e]).filter(Boolean);
		return new e(n, this.metadata);
	}
	assign(...t) {
		let n = t[0] instanceof e ? t[0] : Array.isArray(t[0]) ? new e(t[0]) : new e(t), r = [...this.fields], i = $c($c(/* @__PURE__ */ new Map(), this.metadata), n.metadata), a = n.fields.filter((e) => {
			let t = r.findIndex((t) => t.name === e.name);
			return !~t || (r[t] = e.clone({ metadata: $c($c(/* @__PURE__ */ new Map(), r[t].metadata), e.metadata) })) && !1;
		}), o = el(a, /* @__PURE__ */ new Map());
		return new e([...r, ...a], i, new Map([...this.dictionaries, ...o]));
	}
};
Qc.prototype.fields = null, Qc.prototype.metadata = null, Qc.prototype.dictionaries = null, Qc.prototype[Xc] = !0, Object.defineProperty(Qc, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === Qc && Qc.isSchema(e);
} });
var Q = class e {
	static isField(e) {
		return e?.[Zc] === !0;
	}
	static new(...t) {
		let [n, r, i, a] = t;
		return t[0] && typeof t[0] == "object" && ({name: n} = t[0], r === void 0 && (r = t[0].type), i === void 0 && (i = t[0].nullable), a === void 0 && (a = t[0].metadata)), new e(`${n}`, r, i, a);
	}
	constructor(e, t, n = !1, r) {
		this.name = e, this.type = t, this.nullable = n, this.metadata = r || /* @__PURE__ */ new Map();
	}
	get typeId() {
		return this.type.typeId;
	}
	get [Symbol.toStringTag]() {
		return "Field";
	}
	toString() {
		return `${this.name}: ${this.type}`;
	}
	clone(...t) {
		let [n, r, i, a] = t;
		return !t[0] || typeof t[0] != "object" ? [n = this.name, r = this.type, i = this.nullable, a = this.metadata] = t : {name: n = this.name, type: r = this.type, nullable: i = this.nullable, metadata: a = this.metadata} = t[0], e.new(n, r, i, a);
	}
};
Q.prototype.type = null, Q.prototype.name = null, Q.prototype.nullable = null, Q.prototype.metadata = null, Q.prototype[Zc] = !0, Object.defineProperty(Q, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === Q && Q.isField(e);
} });
function $c(e, t) {
	return new Map([...e || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function el(e, t = /* @__PURE__ */ new Map()) {
	for (let n = -1, r = e.length; ++n < r;) {
		let r = e[n].type;
		if (z.isDictionary(r)) {
			if (!t.has(r.id)) t.set(r.id, r.dictionary);
			else if (t.get(r.id) !== r.dictionary) throw Error("Cannot create Schema containing two different dictionaries with the same Id");
		}
		r.children && r.children.length > 0 && el(r.children, t);
	}
	return t;
}
//#endregion
//#region ../node_modules/apache-arrow/ipc/metadata/file.mjs
var tl = wr, nl = Cr, rl = class {
	static decode(e) {
		e = new nl(F(e));
		let t = Yc.getRootAsFooter(e);
		return new il(Qc.decode(t.schema(), /* @__PURE__ */ new Map(), t.version()), t);
	}
	static encode(e) {
		let t = new tl(), n = Qc.encode(t, e.schema);
		Yc.startRecordBatchesVector(t, e.numRecordBatches);
		for (let n of [...e.recordBatches()].slice().reverse()) al.encode(t, n);
		let r = t.endVector();
		Yc.startDictionariesVector(t, e.numDictionaries);
		for (let n of [...e.dictionaryBatches()].slice().reverse()) al.encode(t, n);
		let i = t.endVector();
		return Yc.startFooter(t), Yc.addSchema(t, n), Yc.addVersion(t, pr.V5), Yc.addRecordBatches(t, r), Yc.addDictionaries(t, i), Yc.finishFooterBuffer(t, Yc.endFooter(t)), t.asUint8Array();
	}
	get numRecordBatches() {
		return this._recordBatches.length;
	}
	get numDictionaries() {
		return this._dictionaryBatches.length;
	}
	constructor(e, t = pr.V5, n, r) {
		this.schema = e, this.version = t, n && (this._recordBatches = n), r && (this._dictionaryBatches = r);
	}
	*recordBatches() {
		for (let e, t = -1, n = this.numRecordBatches; ++t < n;) (e = this.getRecordBatch(t)) && (yield e);
	}
	*dictionaryBatches() {
		for (let e, t = -1, n = this.numDictionaries; ++t < n;) (e = this.getDictionaryBatch(t)) && (yield e);
	}
	getRecordBatch(e) {
		return e >= 0 && e < this.numRecordBatches && this._recordBatches[e] || null;
	}
	getDictionaryBatch(e) {
		return e >= 0 && e < this.numDictionaries && this._dictionaryBatches[e] || null;
	}
}, il = class extends rl {
	get numRecordBatches() {
		return this._footer.recordBatchesLength();
	}
	get numDictionaries() {
		return this._footer.dictionariesLength();
	}
	constructor(e, t) {
		super(e, t.version()), this._footer = t;
	}
	getRecordBatch(e) {
		if (e >= 0 && e < this.numRecordBatches) {
			let t = this._footer.recordBatches(e);
			if (t) return al.decode(t);
		}
		return null;
	}
	getDictionaryBatch(e) {
		if (e >= 0 && e < this.numDictionaries) {
			let t = this._footer.dictionaries(e);
			if (t) return al.decode(t);
		}
		return null;
	}
}, al = class e {
	static decode(t) {
		return new e(t.metaDataLength(), t.bodyLength(), t.offset());
	}
	static encode(e, t) {
		let { metaDataLength: n } = t, r = BigInt(t.offset), i = BigInt(t.bodyLength);
		return Jc.createBlock(e, r, n, i);
	}
	constructor(e, t, n) {
		this.metaDataLength = e, this.offset = R(n), this.bodyLength = R(t);
	}
}, ol = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsMessage(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsMessage(t, n) {
		return t.setPosition(t.position() + 4), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	version() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : pr.V1;
	}
	headerType() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readUint8(this.bb_pos + e) : ci.NONE;
	}
	header(e) {
		let t = this.bb.__offset(this.bb_pos, 8);
		return t ? this.bb.__union(e, this.bb_pos + t) : null;
	}
	bodyLength() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 12);
		return n ? (t || new Ir()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 12);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startMessage(e) {
		e.startObject(5);
	}
	static addVersion(e, t) {
		e.addFieldInt16(0, t, pr.V1);
	}
	static addHeaderType(e, t) {
		e.addFieldInt8(1, t, ci.NONE);
	}
	static addHeader(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static addBodyLength(e, t) {
		e.addFieldInt64(3, t, BigInt("0"));
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endMessage(e) {
		return e.endObject();
	}
	static finishMessageBuffer(e, t) {
		e.finish(t);
	}
	static finishSizePrefixedMessageBuffer(e, t) {
		e.finish(t, void 0, !0);
	}
	static createMessage(t, n, r, i, a, o) {
		return e.startMessage(t), e.addVersion(t, n), e.addHeaderType(t, r), e.addHeader(t, i), e.addBodyLength(t, a), e.addCustomMetadata(t, o), e.endMessage(t);
	}
}, sl = new class extends V {
	visit(e, t) {
		return e == null || t == null ? void 0 : super.visit(e, t);
	}
	visitNull(e, t) {
		return Qr.startNull(t), Qr.endNull(t);
	}
	visitInt(e, t) {
		return Pr.startInt(t), Pr.addBitWidth(t, e.bitWidth), Pr.addIsSigned(t, e.isSigned), Pr.endInt(t);
	}
	visitFloat(e, t) {
		return Gr.startFloatingPoint(t), Gr.addPrecision(t, e.precision), Gr.endFloatingPoint(t);
	}
	visitBinary(e, t) {
		return Lr.startBinary(t), Lr.endBinary(t);
	}
	visitBinaryView(e, t) {
		return Rr.startBinaryView(t), Rr.endBinaryView(t);
	}
	visitLargeBinary(e, t) {
		return qr.startLargeBinary(t), qr.endLargeBinary(t);
	}
	visitBool(e, t) {
		return zr.startBool(t), zr.endBool(t);
	}
	visitUtf8(e, t) {
		return ri.startUtf8(t), ri.endUtf8(t);
	}
	visitUtf8View(e, t) {
		return ii.startUtf8View(t), ii.endUtf8View(t);
	}
	visitLargeUtf8(e, t) {
		return Yr.startLargeUtf8(t), Yr.endLargeUtf8(t);
	}
	visitDecimal(e, t) {
		return Vr.startDecimal(t), Vr.addScale(t, e.scale), Vr.addPrecision(t, e.precision), Vr.addBitWidth(t, e.bitWidth), Vr.endDecimal(t);
	}
	visitDate(e, t) {
		return Br.startDate(t), Br.addUnit(t, e.unit), Br.endDate(t);
	}
	visitTime(e, t) {
		return ei.startTime(t), ei.addUnit(t, e.unit), ei.addBitWidth(t, e.bitWidth), ei.endTime(t);
	}
	visitTimestamp(e, t) {
		let n = e.timezone && t.createString(e.timezone) || void 0;
		return ti.startTimestamp(t), ti.addUnit(t, e.unit), n !== void 0 && ti.addTimezone(t, n), ti.endTimestamp(t);
	}
	visitInterval(e, t) {
		return Kr.startInterval(t), Kr.addUnit(t, e.unit), Kr.endInterval(t);
	}
	visitDuration(e, t) {
		return Hr.startDuration(t), Hr.addUnit(t, e.unit), Hr.endDuration(t);
	}
	visitList(e, t) {
		return Xr.startList(t), Xr.endList(t);
	}
	visitLargeList(e, t) {
		return Jr.startLargeList(t), Jr.endLargeList(t);
	}
	visitStruct(e, t) {
		return $r.startStruct_(t), $r.endStruct_(t);
	}
	visitUnion(e, t) {
		ni.startTypeIdsVector(t, e.typeIds.length);
		let n = ni.createTypeIdsVector(t, e.typeIds);
		return ni.startUnion(t), ni.addMode(t, e.mode), ni.addTypeIds(t, n), ni.endUnion(t);
	}
	visitDictionary(e, t) {
		let n = this.visit(e.indices, t);
		return Fr.startDictionaryEncoding(t), Fr.addId(t, BigInt(e.id)), Fr.addIsOrdered(t, e.isOrdered), n !== void 0 && Fr.addIndexType(t, n), Fr.endDictionaryEncoding(t);
	}
	visitFixedSizeBinary(e, t) {
		return Ur.startFixedSizeBinary(t), Ur.addByteWidth(t, e.byteWidth), Ur.endFixedSizeBinary(t);
	}
	visitFixedSizeList(e, t) {
		return Wr.startFixedSizeList(t), Wr.addListSize(t, e.listSize), Wr.endFixedSizeList(t);
	}
	visitMap(e, t) {
		return Zr.startMap(t), Zr.addKeysSorted(t, e.keysSorted), Zr.endMap(t);
	}
}();
//#endregion
//#region ../node_modules/apache-arrow/ipc/metadata/json.mjs
function cl(e, t = /* @__PURE__ */ new Map()) {
	return new Qc(dl(e, t), vl(e.metadata), t);
}
function ll(e) {
	return new wl(e.count, pl(e.columns), ml(e.columns), null, gl(e.columns));
}
function ul(e) {
	return new Tl(ll(e.data), e.id, e.isDelta);
}
function dl(e, t) {
	return (e.fields || []).filter(Boolean).map((e) => Q.fromJSON(e, t));
}
function fl(e, t) {
	return (e.children || []).filter(Boolean).map((e) => Q.fromJSON(e, t));
}
function pl(e) {
	return (e || []).reduce((e, t) => [
		...e,
		new Dl(t.count, hl(t.VALIDITY)),
		...pl(t.children)
	], []);
}
function ml(e, t = []) {
	for (let n = -1, r = (e || []).length; ++n < r;) {
		let r = e[n];
		if (r.VALIDITY && t.push(new El(t.length, r.VALIDITY.length)), r.TYPE_ID && t.push(new El(t.length, r.TYPE_ID.length)), r.OFFSET && t.push(new El(t.length, r.OFFSET.length)), r.DATA && t.push(new El(t.length, r.DATA.length)), r.VIEWS && t.push(new El(t.length, r.VIEWS.length)), r.VARIADIC_DATA_BUFFERS) for (let e of r.VARIADIC_DATA_BUFFERS) t.push(new El(t.length, e.length));
		t = ml(r.children, t);
	}
	return t;
}
function hl(e) {
	return (e || []).reduce((e, t) => e + +(t === 0), 0);
}
function gl(e) {
	return (e || []).reduce((e, t) => [
		...e,
		...t.VARIADIC_DATA_BUFFERS ? [t.VARIADIC_DATA_BUFFERS.length] : [],
		...gl(t.children)
	], []);
}
function _l(e, t) {
	let n, r, i, a, o, s;
	return !t || !(a = e.dictionary) ? (o = bl(e, fl(e, t)), i = new Q(e.name, o, e.nullable, vl(e.metadata))) : t.has(n = a.id) ? (r = (r = a.indexType) ? yl(r) : new ea(), s = new ja(t.get(n), r, n, a.isOrdered), i = new Q(e.name, s, e.nullable, vl(e.metadata))) : (r = (r = a.indexType) ? yl(r) : new ea(), t.set(n, o = bl(e, fl(e, t))), s = new ja(o, r, n, a.isOrdered), i = new Q(e.name, s, e.nullable, vl(e.metadata))), i || null;
}
function vl(e = []) {
	return new Map(e.map(({ key: e, value: t }) => [e, t]));
}
function yl(e) {
	return new Zi(e.isSigned, e.bitWidth);
}
function bl(e, t) {
	let n = e.type.name;
	switch (n) {
		case "NONE": return new Xi();
		case "null": return new Xi();
		case "binary": return new ua();
		case "largebinary": return new da();
		case "binaryview": return new B();
		case "utf8": return new fa();
		case "largeutf8": return new ma();
		case "utf8view": return new pa();
		case "bool": return new ha();
		case "list": return new Ca((t || [])[0]);
		case "largelist": return new wa((t || [])[0]);
		case "struct": return new Ta(t || []);
		case "struct_": return new Ta(t || []);
	}
	switch (n) {
		case "int": {
			let t = e.type;
			return new Zi(t.isSigned, t.bitWidth);
		}
		case "floatingpoint": {
			let t = e.type;
			return new oa(hr[t.precision]);
		}
		case "decimal": {
			let t = e.type;
			return new ga(t.scale, t.precision, t.bitWidth);
		}
		case "date": {
			let t = e.type;
			return new _a(gr[t.unit]);
		}
		case "time": {
			let t = e.type;
			return new va(I[t.unit], t.bitWidth);
		}
		case "timestamp": {
			let t = e.type;
			return new ya(I[t.unit], t.timezone);
		}
		case "interval": {
			let t = e.type;
			return new xa(_r[t.unit]);
		}
		case "duration": {
			let t = e.type;
			return new Sa(I[t.unit]);
		}
		case "union": {
			let n = e.type, [r, ...i] = (n.mode + "").toLowerCase(), a = r.toUpperCase() + i.join("");
			return new Ea(mr[a], n.typeIds || [], t || []);
		}
		case "fixedsizebinary": {
			let t = e.type;
			return new Da(t.byteWidth);
		}
		case "fixedsizelist": {
			let n = e.type;
			return new Oa(n.listSize, (t || [])[0]);
		}
		case "map": {
			let n = e.type;
			return new ka((t || [])[0], n.keysSorted);
		}
	}
	throw Error(`Unrecognized type: "${n}"`);
}
//#endregion
//#region ../node_modules/apache-arrow/ipc/metadata/message.mjs
var xl = wr, Sl = Cr, Cl = class e {
	static fromJSON(t, n) {
		let r = new e(0, pr.V5, n);
		return r._createHeader = kl(t, n), r;
	}
	static decode(t) {
		t = new Sl(F(t));
		let n = ol.getRootAsMessage(t), r = n.bodyLength(), i = n.version(), a = n.headerType(), o = Ul(n), s = new e(r, i, a, void 0, o);
		return s._createHeader = Al(n, a), s;
	}
	static encode(e) {
		let t = new xl(), n = -1;
		e.isSchema() ? n = Qc.encode(t, e.header()) : e.isRecordBatch() ? n = wl.encode(t, e.header()) : e.isDictionaryBatch() && (n = Tl.encode(t, e.header()));
		let r = e.metadata && e.metadata.size > 0 ? ol.createCustomMetadataVector(t, [...e.metadata].map(([e, n]) => {
			let r = t.createString(`${e}`), i = t.createString(`${n}`);
			return Ir.startKeyValue(t), Ir.addKey(t, r), Ir.addValue(t, i), Ir.endKeyValue(t);
		})) : -1;
		return ol.startMessage(t), ol.addVersion(t, pr.V5), ol.addHeader(t, n), ol.addHeaderType(t, e.headerType), ol.addBodyLength(t, BigInt(e.bodyLength)), r !== -1 && ol.addCustomMetadata(t, r), ol.finishMessageBuffer(t, ol.endMessage(t)), t.asUint8Array();
	}
	static from(t, n = 0) {
		if (t instanceof Qc) return new e(0, pr.V5, ci.Schema, t);
		if (t instanceof wl) return new e(n, pr.V5, ci.RecordBatch, t, t.metadata);
		if (t instanceof Tl) return new e(n, pr.V5, ci.DictionaryBatch, t);
		throw Error(`Unrecognized Message header: ${t}`);
	}
	get type() {
		return this.headerType;
	}
	get version() {
		return this._version;
	}
	get headerType() {
		return this._headerType;
	}
	get compression() {
		return this._compression;
	}
	get bodyLength() {
		return this._bodyLength;
	}
	get metadata() {
		return this._metadata;
	}
	header() {
		return this._createHeader();
	}
	isSchema() {
		return this.headerType === ci.Schema;
	}
	isRecordBatch() {
		return this.headerType === ci.RecordBatch;
	}
	isDictionaryBatch() {
		return this.headerType === ci.DictionaryBatch;
	}
	constructor(e, t, n, r, i) {
		this._version = t, this._headerType = n, this.body = /* @__PURE__ */ new Uint8Array(), this._compression = r?.compression, r && (this._createHeader = () => r), this._bodyLength = R(e), this._metadata = i || /* @__PURE__ */ new Map();
	}
}, wl = class {
	get nodes() {
		return this._nodes;
	}
	get length() {
		return this._length;
	}
	get buffers() {
		return this._buffers;
	}
	get compression() {
		return this._compression;
	}
	get variadicBufferCounts() {
		return this._variadicBufferCounts;
	}
	get metadata() {
		return this._metadata;
	}
	constructor(e, t, n, r, i = [], a) {
		this._nodes = t, this._buffers = n, this._length = R(e), this._compression = r, this._variadicBufferCounts = i, this._metadata = a || /* @__PURE__ */ new Map();
	}
}, Tl = class {
	get id() {
		return this._id;
	}
	get data() {
		return this._data;
	}
	get isDelta() {
		return this._isDelta;
	}
	get length() {
		return this.data.length;
	}
	get nodes() {
		return this.data.nodes;
	}
	get buffers() {
		return this.data.buffers;
	}
	constructor(e, t, n = !1) {
		this._data = e, this._isDelta = n, this._id = R(t);
	}
}, El = class {
	constructor(e, t) {
		this.offset = R(e), this.length = R(t);
	}
}, Dl = class {
	constructor(e, t) {
		this.length = R(e), this.nullCount = R(t);
	}
}, Ol = class {
	constructor(e, t = Tr.BUFFER) {
		this.type = e, this.method = t;
	}
};
function kl(e, t) {
	return (() => {
		switch (t) {
			case ci.Schema: return Qc.fromJSON(e);
			case ci.RecordBatch: return wl.fromJSON(e);
			case ci.DictionaryBatch: return Tl.fromJSON(e);
		}
		throw Error(`Unrecognized Message type: { name: ${ci[t]}, type: ${t} }`);
	});
}
function Al(e, t) {
	return (() => {
		switch (t) {
			case ci.Schema: return Qc.decode(e.header(new si()), /* @__PURE__ */ new Map(), e.version());
			case ci.RecordBatch: return wl.decode(e.header(new Ar()), e.version());
			case ci.DictionaryBatch: return Tl.decode(e.header(new jr()), e.version());
		}
		throw Error(`Unrecognized Message type: { name: ${ci[t]}, type: ${t} }`);
	});
}
Q.encode = Jl, Q.decode = Vl, Q.fromJSON = _l, Qc.encode = ql, Qc.decode = jl, Qc.fromJSON = cl, wl.encode = Yl, wl.decode = Ml, wl.fromJSON = ll, Tl.encode = Zl, Tl.decode = Nl, Tl.fromJSON = ul, Dl.encode = Ql, Dl.decode = Fl, El.encode = $l, El.decode = Pl, Ol.encode = Xl, Ol.decode = Kl;
function jl(e, t = /* @__PURE__ */ new Map(), n = pr.V5) {
	return new Qc(zl(e, t), Hl(e), t, n);
}
function Ml(e, t = pr.V5) {
	return new wl(e.length(), Il(e), Ll(e, t), Kl(e.compression()), Rl(e));
}
function Nl(e, t = pr.V5) {
	return new Tl(wl.decode(e.data(), t), e.id(), e.isDelta());
}
function Pl(e) {
	return new El(e.offset(), e.length());
}
function Fl(e) {
	return new Dl(e.length(), e.nullCount());
}
function Il(e) {
	let t = [];
	for (let n, r = -1, i = -1, a = e.nodesLength(); ++r < a;) (n = e.nodes(r)) && (t[++i] = Dl.decode(n));
	return t;
}
function Ll(e, t) {
	let n = [];
	for (let r, i = -1, a = -1, o = e.buffersLength(); ++i < o;) (r = e.buffers(i)) && (t < pr.V4 && (r.bb_pos += 8 * (i + 1)), n[++a] = El.decode(r));
	return n;
}
function Rl(e) {
	let t = [], n = Math.trunc(e.variadicBufferCountsLength());
	for (let r = 0; r < n; ++r) t.push(R(e.variadicBufferCounts(r)));
	return t;
}
function zl(e, t) {
	let n = [];
	for (let r, i = -1, a = -1, o = e.fieldsLength(); ++i < o;) (r = e.fields(i)) && (n[++a] = Q.decode(r, t));
	return n;
}
function Bl(e, t) {
	let n = [];
	for (let r, i = -1, a = -1, o = e.childrenLength(); ++i < o;) (r = e.children(i)) && (n[++a] = Q.decode(r, t));
	return n;
}
function Vl(e, t) {
	let n, r, i, a, o, s;
	return !t || !(s = e.dictionary()) ? (i = Gl(e, Bl(e, t)), r = new Q(e.name(), i, e.nullable(), Hl(e))) : t.has(n = R(s.id())) ? (a = (a = s.indexType()) ? Wl(a) : new ea(), o = new ja(t.get(n), a, n, s.isOrdered()), r = new Q(e.name(), o, e.nullable(), Hl(e))) : (a = (a = s.indexType()) ? Wl(a) : new ea(), t.set(n, i = Gl(e, Bl(e, t))), o = new ja(i, a, n, s.isOrdered()), r = new Q(e.name(), o, e.nullable(), Hl(e))), r || null;
}
function Hl(e) {
	let t = /* @__PURE__ */ new Map();
	if (e) for (let n, r, i = -1, a = Math.trunc(e.customMetadataLength()); ++i < a;) (n = e.customMetadata(i)) && (r = n.key()) != null && t.set(r, n.value());
	return t;
}
function Ul(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n, r, i = -1, a = Math.trunc(e.customMetadataLength()); ++i < a;) (n = e.customMetadata(i)) && (r = n.key()) != null && t.set(r, n.value());
	return t;
}
function Wl(e) {
	return new Zi(e.isSigned(), e.bitWidth());
}
function Gl(e, t) {
	let n = e.typeType();
	switch (n) {
		case ai.NONE: return new Xi();
		case ai.Null: return new Xi();
		case ai.Binary: return new ua();
		case ai.LargeBinary: return new da();
		case ai.BinaryView: return new B();
		case ai.Utf8: return new fa();
		case ai.LargeUtf8: return new ma();
		case ai.Utf8View: return new pa();
		case ai.Bool: return new ha();
		case ai.List: return new Ca((t || [])[0]);
		case ai.LargeList: return new wa((t || [])[0]);
		case ai.Struct_: return new Ta(t || []);
	}
	switch (n) {
		case ai.Int: {
			let t = e.type(new Pr());
			return new Zi(t.isSigned(), t.bitWidth());
		}
		case ai.FloatingPoint: return new oa(e.type(new Gr()).precision());
		case ai.Decimal: {
			let t = e.type(new Vr());
			return new ga(t.scale(), t.precision(), t.bitWidth());
		}
		case ai.Date: return new _a(e.type(new Br()).unit());
		case ai.Time: {
			let t = e.type(new ei());
			return new va(t.unit(), t.bitWidth());
		}
		case ai.Timestamp: {
			let t = e.type(new ti());
			return new ya(t.unit(), t.timezone());
		}
		case ai.Interval: return new xa(e.type(new Kr()).unit());
		case ai.Duration: return new Sa(e.type(new Hr()).unit());
		case ai.Union: {
			let n = e.type(new ni());
			return new Ea(n.mode(), n.typeIdsArray() || [], t || []);
		}
		case ai.FixedSizeBinary: return new Da(e.type(new Ur()).byteWidth());
		case ai.FixedSizeList: return new Oa(e.type(new Wr()).listSize(), (t || [])[0]);
		case ai.Map: {
			let n = e.type(new Zr());
			return new ka((t || [])[0], n.keysSorted());
		}
	}
	throw Error(`Unrecognized type: "${ai[n]}" (${n})`);
}
function Kl(e) {
	return e ? new Ol(e.codec(), e.method()) : null;
}
function ql(e, t) {
	let n = t.fields.map((t) => Q.encode(e, t));
	si.startFieldsVector(e, n.length);
	let r = si.createFieldsVector(e, n), i = t.metadata && t.metadata.size > 0 ? si.createCustomMetadataVector(e, [...t.metadata].map(([t, n]) => {
		let r = e.createString(`${t}`), i = e.createString(`${n}`);
		return Ir.startKeyValue(e), Ir.addKey(e, r), Ir.addValue(e, i), Ir.endKeyValue(e);
	})) : -1;
	return si.startSchema(e), si.addFields(e, r), si.addEndianness(e, eu ? Mr.Little : Mr.Big), i !== -1 && si.addCustomMetadata(e, i), si.endSchema(e);
}
function Jl(e, t) {
	let n = -1, r = -1, i = -1, a = t.type, o = t.typeId;
	z.isDictionary(a) ? (o = a.dictionary.typeId, i = sl.visit(a, e), r = sl.visit(a.dictionary, e)) : r = sl.visit(a, e);
	let s = (a.children || []).map((t) => Q.encode(e, t)), c = oi.createChildrenVector(e, s), l = t.metadata && t.metadata.size > 0 ? oi.createCustomMetadataVector(e, [...t.metadata].map(([t, n]) => {
		let r = e.createString(`${t}`), i = e.createString(`${n}`);
		return Ir.startKeyValue(e), Ir.addKey(e, r), Ir.addValue(e, i), Ir.endKeyValue(e);
	})) : -1;
	return t.name && (n = e.createString(t.name)), oi.startField(e), oi.addType(e, r), oi.addTypeType(e, o), oi.addChildren(e, c), oi.addNullable(e, !!t.nullable), n !== -1 && oi.addName(e, n), i !== -1 && oi.addDictionary(e, i), l !== -1 && oi.addCustomMetadata(e, l), oi.endField(e);
}
function Yl(e, t) {
	let n = t.nodes || [], r = t.buffers || [], i = t.variadicBufferCounts || [];
	Ar.startNodesVector(e, n.length);
	for (let t of n.slice().reverse()) Dl.encode(e, t);
	let a = e.endVector();
	Ar.startBuffersVector(e, r.length);
	for (let t of r.slice().reverse()) El.encode(e, t);
	let o = e.endVector(), s = null;
	t.compression !== null && (s = Xl(e, t.compression));
	let c = -1;
	return i.length > 0 && (c = Ar.createVariadicBufferCountsVector(e, i.map(BigInt))), Ar.startRecordBatch(e), Ar.addLength(e, BigInt(t.length)), Ar.addNodes(e, a), Ar.addBuffers(e, o), t.compression !== null && s && Ar.addCompression(e, s), c !== -1 && Ar.addVariadicBufferCounts(e, c), Ar.endRecordBatch(e);
}
function Xl(e, t) {
	return Dr.startBodyCompression(e), Dr.addCodec(e, t.type), Dr.addMethod(e, t.method), Dr.endBodyCompression(e);
}
function Zl(e, t) {
	let n = wl.encode(e, t.data);
	return jr.startDictionaryBatch(e), jr.addId(e, BigInt(t.id)), jr.addIsDelta(e, t.isDelta), jr.addData(e, n), jr.endDictionaryBatch(e);
}
function Ql(e, t) {
	return kr.createFieldNode(e, BigInt(t.length), BigInt(t.nullCount));
}
function $l(e, t) {
	return Or.createBuffer(e, BigInt(t.offset), BigInt(t.length));
}
var eu = (() => {
	let e = /* @__PURE__ */ new ArrayBuffer(2);
	return new DataView(e).setInt16(0, 256, !0), new Int16Array(e)[0] === 256;
})(), tu = Object.freeze({
	done: !0,
	value: void 0
}), nu = class {
	tee() {
		return this._getDOMStream().tee();
	}
	pipe(e, t) {
		return this._getNodeStream().pipe(e, t);
	}
	pipeTo(e, t) {
		return this._getDOMStream().pipeTo(e, t);
	}
	pipeThrough(e, t) {
		return this._getDOMStream().pipeThrough(e, t);
	}
	_getDOMStream() {
		return this._DOMStream ||= this.toDOMStream();
	}
	_getNodeStream() {
		return this._nodeStream ||= this.toNodeStream();
	}
}, ru = class extends nu {
	constructor() {
		super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
	}
	get closed() {
		return this._closedPromise;
	}
	cancel(e) {
		return Tn(this, void 0, void 0, function* () {
			yield this.return(e);
		});
	}
	write(e) {
		this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(e) : this.resolvers.shift().resolve({
			done: !1,
			value: e
		}));
	}
	abort(e) {
		this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: e } : this.resolvers.shift().reject({
			done: !0,
			value: e
		}));
	}
	close() {
		if (this._closedPromiseResolve) {
			let { resolvers: e } = this;
			for (; e.length > 0;) e.shift().resolve(tu);
			this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
		}
	}
	[Symbol.asyncIterator]() {
		return this;
	}
	toDOMStream(e) {
		return ar.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, e);
	}
	toNodeStream(e) {
		return ar.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, e);
	}
	throw(e) {
		return Tn(this, void 0, void 0, function* () {
			return yield this.abort(e), tu;
		});
	}
	return(e) {
		return Tn(this, void 0, void 0, function* () {
			return yield this.close(), tu;
		});
	}
	read(e) {
		return Tn(this, void 0, void 0, function* () {
			return (yield this.next(e, "read")).value;
		});
	}
	peek(e) {
		return Tn(this, void 0, void 0, function* () {
			return (yield this.next(e, "peek")).value;
		});
	}
	next(...e) {
		return this._values.length > 0 ? Promise.resolve({
			done: !1,
			value: this._values.shift()
		}) : this._error ? Promise.reject({
			done: !0,
			value: this._error.error
		}) : this._closedPromiseResolve ? new Promise((e, t) => {
			this.resolvers.push({
				resolve: e,
				reject: t
			});
		}) : Promise.resolve(tu);
	}
	_ensureOpen() {
		if (this._closedPromiseResolve) return !0;
		throw Error("AsyncQueue is closed");
	}
}, iu = class extends ru {
	write(e) {
		if ((e = F(e)).byteLength > 0) return super.write(e);
	}
	toString(e = !1) {
		return e ? jn(this.toUint8Array(!0)) : this.toUint8Array(!1).then(jn);
	}
	toUint8Array(e = !1) {
		return e ? Jn(this._values)[0] : Tn(this, void 0, void 0, function* () {
			var e, t, n, r;
			let i = [], a = 0;
			try {
				for (var o = !0, s = kn(this), c; c = yield s.next(), e = c.done, !e; o = !0) {
					r = c.value, o = !1;
					let e = r;
					i.push(e), a += e.byteLength;
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					!o && !e && (n = s.return) && (yield n.call(s));
				} finally {
					if (t) throw t.error;
				}
			}
			return Jn(i, a)[0];
		});
	}
}, au = class extends qc {
	constructor(e) {
		super(e), this._values = new Vc(Uint8Array);
	}
	get byteLength() {
		let e = this._pendingLength + this.length * 4;
		return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
	}
	setValue(e, t) {
		return super.setValue(e, F(t));
	}
	_flushPending(e, t) {
		let n = this._offsets, r = this._values.reserve(t).buffer, i = 0;
		for (let [t, a] of e) if (a === void 0) n.set(t, 0);
		else {
			let e = a.length;
			r.set(a, i), n.set(t, e), i += e;
		}
	}
}, ou = class extends qc {
	constructor(e) {
		super(e), this._values = new Vc(Uint8Array);
	}
	get byteLength() {
		let e = this._pendingLength + this.length * 4;
		return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
	}
	setValue(e, t) {
		return super.setValue(e, F(t));
	}
	_flushPending(e, t) {
		let n = this._offsets, r = this._values.reserve(t).buffer, i = 0;
		for (let [t, a] of e) if (a === void 0) n.set(t, BigInt(0));
		else {
			let e = a.length;
			r.set(a, i), n.set(t, BigInt(e)), i += e;
		}
	}
}, su = class extends Gc {
	constructor(e) {
		super(e), this._values = new Uc();
	}
	setValue(e, t) {
		this._values.set(e, +t);
	}
}, cu = class extends Kc {};
cu.prototype._setValue = no;
var lu = class extends cu {};
lu.prototype._setValue = qa;
var uu = class extends cu {};
uu.prototype._setValue = Ja;
//#endregion
//#region ../node_modules/apache-arrow/builder/decimal.mjs
var du = class extends Kc {};
du.prototype._setValue = mo;
//#endregion
//#region ../node_modules/apache-arrow/builder/dictionary.mjs
var fu = class extends Gc {
	constructor({ type: e, nullValues: t, dictionaryHashFunction: n }) {
		super({ type: new ja(e.dictionary, e.indices, e.id, e.isOrdered) }), this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), this.indices = Td({
			type: this.type.indices,
			nullValues: t
		}), this.dictionary = Td({
			type: this.type.dictionary,
			nullValues: null
		}), typeof n == "function" && (this.valueToKey = n);
	}
	get values() {
		return this.indices.values;
	}
	get nullCount() {
		return this.indices.nullCount;
	}
	get nullBitmap() {
		return this.indices.nullBitmap;
	}
	get byteLength() {
		return this.indices.byteLength + this.dictionary.byteLength;
	}
	get reservedLength() {
		return this.indices.reservedLength + this.dictionary.reservedLength;
	}
	get reservedByteLength() {
		return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
	}
	isValid(e) {
		return this.indices.isValid(e);
	}
	setValid(e, t) {
		let n = this.indices;
		return t = n.setValid(e, t), this.length = n.length, t;
	}
	setValue(e, t) {
		let n = this._keysToIndices, r = this.valueToKey(t), i = n[r];
		return i === void 0 && (n[r] = i = this._dictionaryOffset + this.dictionary.append(t).length - 1), this.indices.setValue(e, i);
	}
	flush() {
		let e = this.type, t = this._dictionary, n = this.dictionary.toVector(), r = this.indices.flush().clone(e);
		return r.dictionary = t ? t.concat(n) : n, this.finished || (this._dictionaryOffset += n.length), this._dictionary = r.dictionary, this.clear(), r;
	}
	finish() {
		return this.indices.finish(), this.dictionary.finish(), this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), super.finish();
	}
	clear() {
		return this.indices.clear(), this.dictionary.clear(), super.clear();
	}
	valueToKey(e) {
		return typeof e == "string" ? e : `${e}`;
	}
}, pu = class extends Kc {};
pu.prototype._setValue = Ya;
//#endregion
//#region ../node_modules/apache-arrow/builder/fixedsizelist.mjs
var mu = class extends Gc {
	setValue(e, t) {
		let [n] = this.children, r = e * this.stride;
		for (let e = -1, i = this.stride; ++e < i;) n.set(r + e, t[e]);
	}
	setValid(e, t) {
		return super.setValid(e, t) || this.children[0].setValid((e + 1) * this.stride - 1, !1), t;
	}
	addChild(e, t = "0") {
		if (this.numChildren > 0) throw Error("FixedSizeListBuilder can only have one child.");
		let n = this.children.push(e);
		return this.type = new Oa(this.type.listSize, new Q(t, e.type, !0)), n;
	}
}, hu = class extends Kc {
	setValue(e, t) {
		this._values.set(e, t);
	}
}, gu = class extends hu {
	setValue(e, t) {
		super.setValue(e, za(t));
	}
}, _u = class extends hu {}, vu = class extends hu {}, yu = class extends Kc {};
yu.prototype._setValue = Eo;
var bu = class extends yu {};
bu.prototype._setValue = Do;
var xu = class extends yu {};
xu.prototype._setValue = Oo;
var Su = class extends yu {};
Su.prototype._setValue = ko;
//#endregion
//#region ../node_modules/apache-arrow/builder/duration.mjs
var Cu = class extends Kc {};
Cu.prototype._setValue = Po;
var wu = class extends Cu {};
wu.prototype._setValue = Ao;
var Tu = class extends Cu {};
Tu.prototype._setValue = jo;
var Eu = class extends Cu {};
Eu.prototype._setValue = Mo;
var Du = class extends Cu {};
Du.prototype._setValue = No;
//#endregion
//#region ../node_modules/apache-arrow/builder/int.mjs
var Ou = class extends Kc {
	setValue(e, t) {
		this._values.set(e, t);
	}
}, ku = class extends Ou {}, Au = class extends Ou {}, ju = class extends Ou {}, Mu = class extends Ou {}, Nu = class extends Ou {}, Pu = class extends Ou {}, Fu = class extends Ou {}, Iu = class extends Ou {}, Lu = class extends qc {
	constructor(e) {
		super(e), this._offsets = new Wc(e.type);
	}
	addChild(e, t = "0") {
		if (this.numChildren > 0) throw Error("ListBuilder can only have one child.");
		return this.children[this.numChildren] = e, this.type = new Ca(new Q(t, e.type, !0)), this.numChildren - 1;
	}
	_flushPending(e) {
		let t = this._offsets, [n] = this.children;
		for (let [r, i] of e) if (i === void 0) t.set(r, 0);
		else {
			let e = i, a = e.length, o = t.set(r, a).buffer[r];
			for (let t = -1; ++t < a;) n.set(o + t, e[t]);
		}
	}
}, Ru = class extends qc {
	constructor(e) {
		super(e), this._offsets = new Wc(e.type);
	}
	addChild(e, t = "0") {
		if (this.numChildren > 0) throw Error("LargeListBuilder can only have one child.");
		return this.children[this.numChildren] = e, this.type = new wa(new Q(t, e.type, !0)), this.numChildren - 1;
	}
	_flushPending(e) {
		let t = this._offsets, [n] = this.children;
		for (let [r, i] of e) if (i === void 0) t.set(r, BigInt(0));
		else {
			let e = i, a = e.length, o = R(t.set(r, BigInt(a)).buffer[r]);
			for (let t = -1; ++t < a;) n.set(o + t, e[t]);
		}
	}
}, zu = class extends qc {
	set(e, t) {
		return super.set(e, t);
	}
	setValue(e, t) {
		let n = t instanceof Map ? t : new Map(Object.entries(t)), r = this._pending ||= /* @__PURE__ */ new Map(), i = r.get(e);
		i && (this._pendingLength -= i.size), this._pendingLength += n.size, r.set(e, n);
	}
	addChild(e, t = `${this.numChildren}`) {
		if (this.numChildren > 0) throw Error("ListBuilder can only have one child.");
		return this.children[this.numChildren] = e, this.type = new ka(new Q(t, e.type, !0), this.type.keysSorted), this.numChildren - 1;
	}
	_flushPending(e) {
		let t = this._offsets, [n] = this.children;
		for (let [r, i] of e) if (i === void 0) t.set(r, 0);
		else {
			let { [r]: e, [r + 1]: a } = t.set(r, i.size).buffer;
			for (let t of i.entries()) if (n.set(e, t), ++e >= a) break;
		}
	}
}, Bu = class extends Gc {
	setValue(e, t) {}
	setValid(e, t) {
		return this.length = Math.max(e + 1, this.length), t;
	}
}, Vu = class extends Gc {
	setValue(e, t) {
		let { children: n, type: r } = this;
		switch (Array.isArray(t) || t.constructor) {
			case !0: return r.children.forEach((r, i) => n[i].set(e, t[i]));
			case Map: return r.children.forEach((r, i) => n[i].set(e, t.get(r.name)));
			default: return r.children.forEach((r, i) => n[i].set(e, t[r.name]));
		}
	}
	setValid(e, t) {
		return super.setValid(e, t) || this.children.forEach((n) => n.setValid(e, t)), t;
	}
	addChild(e, t = `${this.numChildren}`) {
		let n = this.children.push(e);
		return this.type = new Ta([...this.type.children, new Q(t, e.type, !0)]), n;
	}
}, Hu = class extends Kc {};
Hu.prototype._setValue = so;
var Uu = class extends Hu {};
Uu.prototype._setValue = ro;
var Wu = class extends Hu {};
Wu.prototype._setValue = io;
var Gu = class extends Hu {};
Gu.prototype._setValue = ao;
var Ku = class extends Hu {};
Ku.prototype._setValue = oo;
//#endregion
//#region ../node_modules/apache-arrow/builder/time.mjs
var qu = class extends Kc {};
qu.prototype._setValue = po;
var Ju = class extends qu {};
Ju.prototype._setValue = co;
var Yu = class extends qu {};
Yu.prototype._setValue = lo;
var Xu = class extends qu {};
Xu.prototype._setValue = uo;
var Zu = class extends qu {};
Zu.prototype._setValue = fo;
//#endregion
//#region ../node_modules/apache-arrow/builder/union.mjs
var Qu = class extends Gc {
	constructor(e) {
		super(e), this._typeIds = new Hc(Int8Array, 0, 1), typeof e.valueToChildTypeId == "function" && (this._valueToChildTypeId = e.valueToChildTypeId);
	}
	get typeIdToChildIndex() {
		return this.type.typeIdToChildIndex;
	}
	append(e, t) {
		return this.set(this.length, e, t);
	}
	set(e, t, n) {
		return n === void 0 && (n = this._valueToChildTypeId(this, t, e)), this.setValue(e, t, n), this;
	}
	setValue(e, t, n) {
		this._typeIds.set(e, n);
		let r = this.type.typeIdToChildIndex[n];
		this.children[r]?.set(e, t), this.length = Math.max(e + 1, this.length);
	}
	addChild(e, t = `${this.children.length}`) {
		let n = this.children.push(e), { type: { children: r, mode: i, typeIds: a } } = this, o = [...r, new Q(t, e.type)];
		return this.type = new Ea(i, [...a, n], o), n;
	}
	_valueToChildTypeId(e, t, n) {
		throw Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.");
	}
}, $u = class extends Qu {}, ed = class extends Qu {
	constructor(e) {
		super(e), this._offsets = new Hc(Int32Array);
	}
	setValue(e, t, n) {
		let r = this._typeIds.set(e, n).buffer[e], i = this.getChildAt(this.type.typeIdToChildIndex[r]), a = this._offsets.set(e, i.length).buffer[e];
		i?.set(a, t), this.length = Math.max(e + 1, this.length);
	}
}, td = class extends qc {
	constructor(e) {
		super(e), this._values = new Vc(Uint8Array);
	}
	get byteLength() {
		let e = this._pendingLength + this.length * 4;
		return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
	}
	setValue(e, t) {
		return super.setValue(e, Nn(t));
	}
	_flushPending(e, t) {}
};
td.prototype._flushPending = au.prototype._flushPending;
//#endregion
//#region ../node_modules/apache-arrow/builder/largeutf8.mjs
var nd = class extends qc {
	constructor(e) {
		super(e), this._values = new Vc(Uint8Array);
	}
	get byteLength() {
		let e = this._pendingLength + this.length * 4;
		return this._offsets && (e += this._offsets.byteLength), this._values && (e += this._values.byteLength), this._nulls && (e += this._nulls.byteLength), e;
	}
	setValue(e, t) {
		return super.setValue(e, Nn(t));
	}
	_flushPending(e, t) {}
};
nd.prototype._flushPending = ou.prototype._flushPending;
//#endregion
//#region ../node_modules/apache-arrow/builder/binaryview.mjs
var rd = class extends Gc {
	constructor(e) {
		super(e), this._variadicBuffers = [], this._currentBuffer = null, this._currentBufferIndex = 0, this._currentBufferOffset = 0, this._bufferSize = 33554432, this._views = new Vc(Uint8Array);
	}
	get byteLength() {
		let e = 0;
		this._views && (e += this._views.byteLength), this._nulls && (e += this._nulls.byteLength);
		for (let t of this._variadicBuffers) e += t.byteLength;
		return this._currentBuffer && (e += this._currentBuffer.byteLength), e;
	}
	setValue(e, t) {
		return this.writeBinaryValue(e, this.encodeValue(t));
	}
	writeBinaryValue(e, t) {
		let n = t.length, r = (e + 1) * B.ELEMENT_WIDTH, i = this._views.length;
		r > i && this._views.reserve(r - i);
		let a = this._views.buffer, o = e * B.ELEMENT_WIDTH, s = new DataView(a.buffer, a.byteOffset + o, B.ELEMENT_WIDTH);
		if (s.setInt32(B.LENGTH_OFFSET, n, !0), n <= B.INLINE_CAPACITY) {
			a.set(t, o + B.INLINE_OFFSET);
			for (let e = n; e < B.INLINE_CAPACITY; e++) a[o + B.INLINE_OFFSET + e] = 0;
		} else {
			let e = new DataView(t.buffer, t.byteOffset, Math.min(4, n));
			s.setUint32(B.INLINE_OFFSET, e.getUint32(0, !0), !0), (!this._currentBuffer || this._currentBufferOffset + n > this._bufferSize) && (this._currentBuffer && this._variadicBuffers.push(this._currentBuffer.buffer.slice(0, this._currentBufferOffset)), this._currentBuffer = new Vc(Uint8Array), this._currentBufferIndex = this._variadicBuffers.length, this._currentBufferOffset = 0), this._currentBuffer.reserve(n).buffer.set(t, this._currentBufferOffset), s.setInt32(B.BUFFER_INDEX_OFFSET, this._currentBufferIndex, !0), s.setInt32(B.BUFFER_OFFSET_OFFSET, this._currentBufferOffset, !0), this._currentBufferOffset += n;
		}
		return this;
	}
	encodeValue(e) {
		return F(e);
	}
	setValid(e, t) {
		let n = (e + 1) * B.ELEMENT_WIDTH, r = this._views.length;
		n > r && this._views.reserve(n - r);
		let i = super.setValid(e, t);
		if (!i) {
			let t = this._views.buffer, n = e * B.ELEMENT_WIDTH;
			for (let e = 0; e < B.ELEMENT_WIDTH; e++) t[n + e] = 0;
		}
		return i;
	}
	clear() {
		return this._variadicBuffers = [], this._currentBuffer = null, this._currentBufferIndex = 0, this._currentBufferOffset = 0, this._views.clear(), super.clear();
	}
	flush() {
		let { type: e, length: t, nullCount: n, _views: r, _nulls: i } = this;
		this._currentBuffer && this._currentBufferOffset > 0 && (this._variadicBuffers.push(this._currentBuffer.buffer.slice(0, this._currentBufferOffset)), this._currentBuffer = null, this._currentBufferOffset = 0);
		let a = r.flush(t * B.ELEMENT_WIDTH), o = n > 0 ? i.flush(t) : void 0, s = this._variadicBuffers.slice();
		return this._variadicBuffers = [], this._currentBufferIndex = 0, this.clear(), pc({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: o,
			views: a,
			variadicBuffers: s
		});
	}
	finish() {
		return this.finished = !0, this;
	}
}, id = class extends rd {
	constructor(e) {
		super(e);
	}
	setValue(e, t) {
		return this.writeBinaryValue(e, Nn(t));
	}
}, ad = new class extends V {
	visitNull() {
		return Bu;
	}
	visitBool() {
		return su;
	}
	visitInt() {
		return Ou;
	}
	visitInt8() {
		return ku;
	}
	visitInt16() {
		return Au;
	}
	visitInt32() {
		return ju;
	}
	visitInt64() {
		return Mu;
	}
	visitUint8() {
		return Nu;
	}
	visitUint16() {
		return Pu;
	}
	visitUint32() {
		return Fu;
	}
	visitUint64() {
		return Iu;
	}
	visitFloat() {
		return hu;
	}
	visitFloat16() {
		return gu;
	}
	visitFloat32() {
		return _u;
	}
	visitFloat64() {
		return vu;
	}
	visitUtf8() {
		return td;
	}
	visitLargeUtf8() {
		return nd;
	}
	visitBinary() {
		return au;
	}
	visitLargeBinary() {
		return ou;
	}
	visitFixedSizeBinary() {
		return pu;
	}
	visitDate() {
		return cu;
	}
	visitDateDay() {
		return lu;
	}
	visitDateMillisecond() {
		return uu;
	}
	visitTimestamp() {
		return Hu;
	}
	visitTimestampSecond() {
		return Uu;
	}
	visitTimestampMillisecond() {
		return Wu;
	}
	visitTimestampMicrosecond() {
		return Gu;
	}
	visitTimestampNanosecond() {
		return Ku;
	}
	visitTime() {
		return qu;
	}
	visitTimeSecond() {
		return Ju;
	}
	visitTimeMillisecond() {
		return Yu;
	}
	visitTimeMicrosecond() {
		return Xu;
	}
	visitTimeNanosecond() {
		return Zu;
	}
	visitDecimal() {
		return du;
	}
	visitList() {
		return Lu;
	}
	visitLargeList() {
		return Ru;
	}
	visitStruct() {
		return Vu;
	}
	visitUnion() {
		return Qu;
	}
	visitDenseUnion() {
		return ed;
	}
	visitSparseUnion() {
		return $u;
	}
	visitDictionary() {
		return fu;
	}
	visitInterval() {
		return yu;
	}
	visitIntervalDayTime() {
		return bu;
	}
	visitIntervalYearMonth() {
		return xu;
	}
	visitIntervalMonthDayNano() {
		return Su;
	}
	visitDuration() {
		return Cu;
	}
	visitDurationSecond() {
		return wu;
	}
	visitDurationMillisecond() {
		return Tu;
	}
	visitDurationMicrosecond() {
		return Eu;
	}
	visitDurationNanosecond() {
		return Du;
	}
	visitFixedSizeList() {
		return mu;
	}
	visitMap() {
		return zu;
	}
	visitBinaryView() {
		return rd;
	}
	visitUtf8View() {
		return id;
	}
}(), $ = class extends V {
	compareSchemas(e, t) {
		return e === t || t instanceof e.constructor && this.compareManyFields(e.fields, t.fields);
	}
	compareManyFields(e, t) {
		return e === t || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => this.compareFields(e, t[n]));
	}
	compareFields(e, t) {
		return e === t || t instanceof e.constructor && e.name === t.name && e.nullable === t.nullable && this.visit(e.type, t.type);
	}
};
function od(e, t) {
	return t instanceof e.constructor;
}
function sd(e, t) {
	return e === t || od(e, t);
}
function cd(e, t) {
	return e === t || od(e, t) && e.bitWidth === t.bitWidth && e.isSigned === t.isSigned;
}
function ld(e, t) {
	return e === t || od(e, t) && e.precision === t.precision;
}
function ud(e, t) {
	return e === t || od(e, t) && e.byteWidth === t.byteWidth;
}
function dd(e, t) {
	return e === t || od(e, t) && e.unit === t.unit;
}
function fd(e, t) {
	return e === t || od(e, t) && e.unit === t.unit && e.timezone === t.timezone;
}
function pd(e, t) {
	return e === t || od(e, t) && e.unit === t.unit && e.bitWidth === t.bitWidth;
}
function md(e, t) {
	return e === t || od(e, t) && e.children.length === t.children.length && Sd.compareManyFields(e.children, t.children);
}
function hd(e, t) {
	return e === t || od(e, t) && e.children.length === t.children.length && Sd.compareManyFields(e.children, t.children);
}
function gd(e, t) {
	return e === t || od(e, t) && e.mode === t.mode && e.typeIds.every((e, n) => e === t.typeIds[n]) && Sd.compareManyFields(e.children, t.children);
}
function _d(e, t) {
	return e === t || od(e, t) && e.id === t.id && e.isOrdered === t.isOrdered && Sd.visit(e.indices, t.indices) && Sd.visit(e.dictionary, t.dictionary);
}
function vd(e, t) {
	return e === t || od(e, t) && e.unit === t.unit;
}
function yd(e, t) {
	return e === t || od(e, t) && e.unit === t.unit;
}
function bd(e, t) {
	return e === t || od(e, t) && e.listSize === t.listSize && e.children.length === t.children.length && Sd.compareManyFields(e.children, t.children);
}
function xd(e, t) {
	return e === t || od(e, t) && e.keysSorted === t.keysSorted && e.children.length === t.children.length && Sd.compareManyFields(e.children, t.children);
}
$.prototype.visitNull = sd, $.prototype.visitBool = sd, $.prototype.visitInt = cd, $.prototype.visitInt8 = cd, $.prototype.visitInt16 = cd, $.prototype.visitInt32 = cd, $.prototype.visitInt64 = cd, $.prototype.visitUint8 = cd, $.prototype.visitUint16 = cd, $.prototype.visitUint32 = cd, $.prototype.visitUint64 = cd, $.prototype.visitFloat = ld, $.prototype.visitFloat16 = ld, $.prototype.visitFloat32 = ld, $.prototype.visitFloat64 = ld, $.prototype.visitUtf8 = sd, $.prototype.visitLargeUtf8 = sd, $.prototype.visitUtf8View = sd, $.prototype.visitBinary = sd, $.prototype.visitLargeBinary = sd, $.prototype.visitBinaryView = sd, $.prototype.visitFixedSizeBinary = ud, $.prototype.visitDate = dd, $.prototype.visitDateDay = dd, $.prototype.visitDateMillisecond = dd, $.prototype.visitTimestamp = fd, $.prototype.visitTimestampSecond = fd, $.prototype.visitTimestampMillisecond = fd, $.prototype.visitTimestampMicrosecond = fd, $.prototype.visitTimestampNanosecond = fd, $.prototype.visitTime = pd, $.prototype.visitTimeSecond = pd, $.prototype.visitTimeMillisecond = pd, $.prototype.visitTimeMicrosecond = pd, $.prototype.visitTimeNanosecond = pd, $.prototype.visitDecimal = sd, $.prototype.visitList = md, $.prototype.visitLargeList = md, $.prototype.visitStruct = hd, $.prototype.visitUnion = gd, $.prototype.visitDenseUnion = gd, $.prototype.visitSparseUnion = gd, $.prototype.visitDictionary = _d, $.prototype.visitInterval = vd, $.prototype.visitIntervalDayTime = vd, $.prototype.visitIntervalYearMonth = vd, $.prototype.visitIntervalMonthDayNano = vd, $.prototype.visitDuration = yd, $.prototype.visitDurationSecond = yd, $.prototype.visitDurationMillisecond = yd, $.prototype.visitDurationMicrosecond = yd, $.prototype.visitDurationNanosecond = yd, $.prototype.visitFixedSizeList = bd, $.prototype.visitMap = xd;
var Sd = new $();
function Cd(e, t) {
	return Sd.compareSchemas(e, t);
}
function wd(e, t) {
	return Sd.visit(e, t);
}
//#endregion
//#region ../node_modules/apache-arrow/factories.mjs
function Td(e) {
	let t = e.type, n = new (ad.getVisitFn(t)())(e);
	if (t.children && t.children.length > 0) {
		let r = e.children || [], i = { nullValues: e.nullValues }, a = Array.isArray(r) ? ((e, t) => r[t] || i) : (({ name: e }) => r[e] || i);
		for (let [e, r] of t.children.entries()) {
			let { type: t } = r, i = a(r, e);
			n.children.push(Td(Object.assign(Object.assign({}, i), { type: t })));
		}
	}
	return n;
}
function Ed(e, t) {
	if (e instanceof K || e instanceof Z || e.type instanceof z || ArrayBuffer.isView(e)) return Fc(e);
	let n = [...Od({
		type: t ?? Dd(e),
		nullValues: [null]
	})(e)], r = n.length === 1 ? n[0] : n.reduce((e, t) => e.concat(t));
	return z.isDictionary(r.type) ? r.memoize() : r;
}
function Dd(e) {
	if (e.length === 0) return new Xi();
	let t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0;
	for (let l of e) if (l == null) ++t;
	else {
		switch (typeof l) {
			case "bigint":
				++o;
				continue;
			case "boolean":
				++s;
				continue;
			case "number":
				++i;
				continue;
			case "string":
				++a;
				continue;
			case "object":
				Array.isArray(l) ? ++n : Object.prototype.toString.call(l) === "[object Date]" ? ++c : ++r;
				continue;
		}
		throw TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
	}
	if (i + t === e.length) return new la();
	if (a + t === e.length) return new ja(new fa(), new ea());
	if (o + t === e.length) return new ta();
	if (s + t === e.length) return new ha();
	if (c + t === e.length) return new ba();
	if (n + t === e.length) {
		let t = e, n = Dd(t[t.findIndex((e) => e != null)]);
		if (t.every((e) => e == null || wd(n, Dd(e)))) return new Ca(new Q("", n, !0));
	} else if (r + t === e.length) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) for (let e of Object.keys(n)) !t.has(e) && n[e] != null && t.set(e, new Q(e, Dd([n[e]]), !0));
		return new Ta([...t.values()]);
	}
	throw TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
}
function Od(e) {
	let { queueingStrategy: t = "count" } = e, { highWaterMark: n = t === "bytes" ? 2 ** 14 : Infinity } = e, r = t === "bytes" ? "byteLength" : "length";
	return function* (t) {
		let i = 0, a = Td(e);
		for (let e of t) a.append(e)[r] >= n && ++i && (yield a.toVector());
		(a.finish().length > 0 || i === 0) && (yield a.toVector());
	};
}
//#endregion
//#region ../node_modules/apache-arrow/util/recordbatch.mjs
function kd(e, t) {
	return Ad(e, t.map((e) => e.data.concat()));
}
function Ad(e, t) {
	let n = [...e.fields], r = [], i = { numBatches: t.reduce((e, t) => Math.max(e, t.length), 0) }, a = 0, o = 0, s = -1, c = t.length, l, u = [];
	for (; i.numBatches-- > 0;) {
		for (o = Infinity, s = -1; ++s < c;) u[s] = l = t[s].shift(), o = Math.min(o, l ? l.length : o);
		Number.isFinite(o) && (u = jd(n, o, u, t, i), o > 0 && (r[a++] = pc({
			type: new Ta(n),
			length: o,
			nullCount: 0,
			children: u.slice()
		})));
	}
	return [e = e.assign(n), r.map((t) => new Ld(e, t))];
}
function jd(e, t, n, r, i) {
	let a = (t + 63 & -64) >> 3;
	for (let o = -1, s = r.length; ++o < s;) {
		let s = n[o], c = s?.length;
		if (c >= t) c === t ? n[o] = s : (n[o] = s.slice(0, t), i.numBatches = Math.max(i.numBatches, r[o].unshift(s.slice(t, c - t))));
		else {
			let r = e[o];
			e[o] = r.clone({ nullable: !0 }), n[o] = s?._changeLengthAndBackfillNullBitmap(t) ?? pc({
				type: r.type,
				length: t,
				nullCount: t,
				nullBitmap: new Uint8Array(a)
			});
		}
	}
	return n;
}
//#endregion
//#region ../node_modules/apache-arrow/table.mjs
var Md, Nd = Symbol.for("apache-arrow/Table"), Pd = class e {
	static isTable(e) {
		return e?.[Nd] === !0;
	}
	constructor(...t) {
		if (t.length === 0) return this.batches = [], this.schema = new Qc([]), this._offsets = [0], this;
		let n, r;
		t[0] instanceof Qc && (n = t.shift()), t.at(-1) instanceof Uint32Array && (r = t.pop());
		let i = (t) => {
			if (t) {
				if (t instanceof Ld) return [t];
				if (t instanceof e) return t.batches;
				if (t instanceof K) {
					if (t.type instanceof Ta) return [new Ld(new Qc(t.type.children), t)];
				} else if (Array.isArray(t)) return t.flatMap((e) => i(e));
				else if (typeof t[Symbol.iterator] == "function") return [...t].flatMap((e) => i(e));
				else if (typeof t == "object") {
					let e = Object.keys(t), r = e.map((e) => new Z([t[e]])), [, i] = kd(n ?? new Qc(e.map((e, t) => new Q(String(e), r[t].type, r[t].nullable))), r);
					return i.length === 0 ? [new Ld(t)] : i;
				}
			}
			return [];
		}, a = t.flatMap((e) => i(e));
		if (n = n ?? a[0]?.schema ?? new Qc([]), !(n instanceof Qc)) throw TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
		for (let e of a) {
			if (!(e instanceof Ld)) throw TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
			if (!Cd(n, e.schema)) throw TypeError("Table and inner RecordBatch schemas must be equivalent.");
		}
		this.schema = n, this.batches = a, this._offsets = r ?? _c(this.data);
	}
	get data() {
		return this.batches.map(({ data: e }) => e);
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.reduce((e, t) => e + t.length, 0);
	}
	get nullCount() {
		return this._nullCount === -1 && (this._nullCount = gc(this.data)), this._nullCount;
	}
	isValid(e) {
		return !1;
	}
	get(e) {
		return null;
	}
	at(e) {
		return this.get(Ks(e, this.numRows));
	}
	set(e, t) {}
	indexOf(e, t) {
		return -1;
	}
	[Symbol.iterator]() {
		return this.batches.length > 0 ? kc.visit(new Z(this.data)) : [][Symbol.iterator]();
	}
	toArray() {
		return [...this];
	}
	toString() {
		return `[\n  ${this.toArray().join(",\n  ")}\n]`;
	}
	concat(...t) {
		let n = this.schema, r = this.data.concat(t.flatMap(({ data: e }) => e));
		return new e(n, r.map((e) => new Ld(n, e)));
	}
	slice(t, n) {
		let r = this.schema;
		[t, n] = Gs({ length: this.numRows }, t, n);
		let i = vc(this.data, this._offsets, t, n);
		return new e(r, i.map((e) => new Ld(r, e)));
	}
	getChild(e) {
		return this.getChildAt(this.schema.fields.findIndex((t) => t.name === e));
	}
	getChildAt(e) {
		if (e > -1 && e < this.schema.fields.length) {
			let t = this.data.map((t) => t.children[e]);
			if (t.length === 0) {
				let { type: n } = this.schema.fields[e], r = pc({
					type: n,
					length: 0,
					nullCount: 0
				});
				t.push(r._changeLengthAndBackfillNullBitmap(this.numRows));
			}
			return new Z(t);
		}
		return null;
	}
	setChild(e, t) {
		return this.setChildAt(this.schema.fields?.findIndex((t) => t.name === e), t);
	}
	setChildAt(t, n) {
		let r = this.schema, i = [...this.batches];
		if (t > -1 && t < this.numCols) {
			n ||= new Z([pc({
				type: new Xi(),
				length: this.numRows
			})]);
			let e = r.fields.slice(), a = e[t].clone({ type: n.type }), o = this.schema.fields.map((e, t) => this.getChildAt(t));
			[e[t], o[t]] = [a, n], [r, i] = kd(r, o);
		}
		return new e(r, i);
	}
	select(e) {
		let t = this.schema.fields.reduce((e, t, n) => e.set(t.name, n), /* @__PURE__ */ new Map());
		return this.selectAt(e.map((e) => t.get(e)).filter((e) => e > -1));
	}
	selectAt(t) {
		let n = this.schema.selectAt(t), r = this.batches.map((e) => e.selectAt(t));
		return new e(n, r);
	}
	assign(t) {
		let n = this.schema.fields, [r, i] = t.schema.fields.reduce((e, t, r) => {
			let [i, a] = e, o = n.findIndex((e) => e.name === t.name);
			return ~o ? a[o] = r : i.push(r), e;
		}, [[], []]), a = this.schema.assign(t.schema), o = [...n.map((e, t) => [t, i[t]]).map(([e, n]) => n === void 0 ? this.getChildAt(e) : t.getChildAt(n)), ...r.map((e) => t.getChildAt(e))].filter(Boolean);
		return new e(...kd(a, o));
	}
};
Md = Symbol.toStringTag, Pd[Md] = ((e) => (e.schema = null, e.batches = [], e._offsets = new Uint32Array([0]), e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, e[Nd] = !0, e.isValid = xc(bc), e.get = xc(Is.getVisitFn(L.Struct)), e.set = Sc(Io.getVisitFn(L.Struct)), e.indexOf = Cc(Dc.getVisitFn(L.Struct)), "Table"))(Pd.prototype), Object.defineProperty(Pd, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === Pd && Pd.isTable(e);
} });
//#endregion
//#region ../node_modules/apache-arrow/recordbatch.mjs
var Fd, Id = Symbol.for("apache-arrow/RecordBatch"), Ld = class e {
	static isRecordBatch(e) {
		return e?.[Id] === !0;
	}
	constructor(...e) {
		switch (e.length) {
			case 3:
			case 2:
				if ([this.schema] = e, !(this.schema instanceof Qc) || ([, this.data = pc({
					nullCount: 0,
					type: new Ta(this.schema.fields),
					children: this.schema.fields.map((e) => pc({
						type: e.type,
						nullCount: 0
					}))
				}), this._metadata = /* @__PURE__ */ new Map()] = e, !(this.data instanceof K))) throw TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				[this.schema, this.data] = Rd(this.schema, this.data.children, this.data.length);
				break;
			case 1: {
				let [t] = e, { fields: n, children: r, length: i } = Object.keys(t).reduce((e, n, r) => (e.children[r] = t[n], e.length = Math.max(e.length, t[n].length), e.fields[r] = Q.new({
					name: n,
					type: t[n].type,
					nullable: !0
				}), e), {
					length: 0,
					fields: [],
					children: []
				}), a = new Qc(n), o = pc({
					type: new Ta(n),
					length: i,
					children: r,
					nullCount: 0
				});
				[this.schema, this.data] = Rd(a, o.children, i), this._metadata = /* @__PURE__ */ new Map();
				break;
			}
			default: throw TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
		}
	}
	get metadata() {
		return this._metadata;
	}
	get dictionaries() {
		return this._dictionaries ||= zd(this.schema.fields, this.data.children);
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.length;
	}
	get nullCount() {
		return this.data.nullCount;
	}
	isValid(e) {
		return this.data.getValid(e);
	}
	get(e) {
		return Is.visit(this.data, e);
	}
	at(e) {
		return this.get(Ks(e, this.numRows));
	}
	set(e, t) {
		return Io.visit(this.data, e, t);
	}
	indexOf(e, t) {
		return Dc.visit(this.data, e, t);
	}
	[Symbol.iterator]() {
		return kc.visit(new Z([this.data]));
	}
	toArray() {
		return [...this];
	}
	concat(...e) {
		return new Pd(this.schema, [this, ...e]);
	}
	slice(t, n) {
		let [r] = new Z([this.data]).slice(t, n).data;
		return new e(this.schema, r, this._metadata);
	}
	getChild(e) {
		return this.getChildAt(this.schema.fields?.findIndex((t) => t.name === e));
	}
	getChildAt(e) {
		return e > -1 && e < this.schema.fields.length ? new Z([this.data.children[e]]) : null;
	}
	setChild(e, t) {
		return this.setChildAt(this.schema.fields?.findIndex((t) => t.name === e), t);
	}
	setChildAt(t, n) {
		let r = this.schema, i = this.data;
		if (t > -1 && t < this.numCols) {
			n ||= new Z([pc({
				type: new Xi(),
				length: this.numRows
			})]);
			let e = r.fields.slice(), a = i.children.slice(), o = e[t].clone({ type: n.type });
			[e[t], a[t]] = [o, n.data[0]], r = new Qc(e, new Map(this.schema.metadata)), i = pc({
				type: new Ta(e),
				length: i.length,
				children: a
			});
		}
		return new e(r, i, this._metadata);
	}
	select(t) {
		let n = this.schema.select(t), r = new Ta(n.fields), i = [];
		for (let e of t) {
			let t = this.schema.fields.findIndex((t) => t.name === e);
			~t && (i[t] = this.data.children[t]);
		}
		return new e(n, pc({
			type: r,
			length: this.numRows,
			children: i
		}), this._metadata);
	}
	selectAt(t) {
		let n = this.schema.selectAt(t), r = t.map((e) => this.data.children[e]).filter(Boolean), i = pc({
			type: new Ta(n.fields),
			length: this.numRows,
			children: r
		});
		return new e(n, i, this._metadata);
	}
};
Fd = Symbol.toStringTag, Ld[Fd] = ((e) => (e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, e[Id] = !0, "RecordBatch"))(Ld.prototype), Object.defineProperty(Ld, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === Ld && Ld.isRecordBatch(e);
} });
function Rd(e, t, n = t.reduce((e, t) => Math.max(e, t.length), 0)) {
	let r = [...e.fields], i = [...t], a = (n + 63 & -64) >> 3;
	for (let [o, s] of e.fields.entries()) {
		let e = t[o];
		(!e || e.length !== n) && (r[o] = s.clone({ nullable: !0 }), i[o] = e?._changeLengthAndBackfillNullBitmap(n) ?? pc({
			type: s.type,
			length: n,
			nullCount: n,
			nullBitmap: new Uint8Array(a)
		}));
	}
	return [e.assign(r), pc({
		type: new Ta(r),
		length: n,
		children: i
	})];
}
function zd(e, t, n = /* @__PURE__ */ new Map()) {
	if ((e?.length ?? 0) > 0 && e?.length === t?.length) for (let r = -1, i = e.length; ++r < i;) {
		let { type: i } = e[r], a = t[r];
		for (let e of [a, ...a?.dictionary?.data || []]) zd(i.children, e?.children, n);
		if (z.isDictionary(i)) {
			let { id: e } = i;
			if (!n.has(e)) a?.dictionary && n.set(e, a.dictionary);
			else if (n.get(e) !== a.dictionary) throw Error("Cannot create Schema containing two different dictionaries with the same Id");
		}
	}
	return n;
}
var Bd = class extends Ld {
	constructor(e, t) {
		let n = e.fields.map((e) => pc({ type: e.type })), r = pc({
			type: new Ta(e.fields),
			length: 0,
			nullCount: 0,
			children: n
		});
		super(e, r, t || /* @__PURE__ */ new Map());
	}
}, Vd = "ARROW1", Hd = /* @__PURE__ */ new Uint8Array(6);
for (let e = 0; e < 6; e += 1) Hd[e] = Vd.codePointAt(e);
var Ud = Hd.length;
Ud + 4, Ud * 2 + 4;
//#endregion
//#region ../node_modules/apache-arrow/ipc/compression/validators.mjs
var Wd = class {
	constructor() {
		this.LZ4_FRAME_MAGIC = new Uint8Array([
			4,
			34,
			77,
			24
		]), this.MIN_HEADER_LENGTH = 7;
	}
	isValidCodecEncode(e) {
		let t = new Uint8Array([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		]), n = e.encode(t);
		return this._isValidCompressed(n);
	}
	_isValidCompressed(e) {
		return this._hasMinimumLength(e) && this._hasValidMagicNumber(e) && this._hasValidVersion(e);
	}
	_hasMinimumLength(e) {
		return e.length >= this.MIN_HEADER_LENGTH;
	}
	_hasValidMagicNumber(e) {
		return this.LZ4_FRAME_MAGIC.every((t, n) => e[n] === t);
	}
	_hasValidVersion(e) {
		return (e[4] & 192) >> 6 == 1;
	}
}, Gd = class {
	constructor() {
		this.ZSTD_MAGIC = new Uint8Array([
			40,
			181,
			47,
			253
		]), this.MIN_HEADER_LENGTH = 6;
	}
	isValidCodecEncode(e) {
		let t = new Uint8Array([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		]), n = e.encode(t);
		return this._isValidCompressed(n);
	}
	_isValidCompressed(e) {
		return this._hasMinimumLength(e) && this._hasValidMagicNumber(e);
	}
	_hasMinimumLength(e) {
		return e.length >= this.MIN_HEADER_LENGTH;
	}
	_hasValidMagicNumber(e) {
		return this.ZSTD_MAGIC.every((t, n) => e[n] === t);
	}
}, Kd = {
	[Er.LZ4_FRAME]: new Wd(),
	[Er.ZSTD]: new Gd()
}, qd = new class {
	constructor() {
		this.registry = {};
	}
	set(e, t) {
		if (t?.encode && typeof t.encode == "function" && !Kd[e].isValidCodecEncode(t)) throw Error(`Encoder for ${Er[e]} is not valid.`);
		this.registry[e] = t;
	}
	get(e) {
		return this.registry?.[e] || null;
	}
}(), Jd = class e extends V {
	static assemble(...t) {
		let n = (e) => e.flatMap((e) => Array.isArray(e) ? n(e) : e instanceof Ld ? e.data.children : e.data), r = new e();
		return r.visitMany(n(t)), r;
	}
	constructor() {
		super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [], this._variadicBufferCounts = [];
	}
	visit(e) {
		if (e instanceof Z) return this.visitMany(e.data), this;
		let { type: t } = e;
		if (!z.isDictionary(t)) {
			let { length: n } = e;
			if (n > 2147483647)
 /* istanbul ignore next */
			throw RangeError("Cannot write arrays larger than 2^31 - 1 in length");
			if (z.isUnion(t)) this.nodes.push(new Dl(n, 0));
			else {
				let { nullCount: r } = e;
				z.isNull(t) || Yd.call(this, r <= 0 ? /* @__PURE__ */ new Uint8Array() : ac(e.offset, n, e.nullBitmap)), this.nodes.push(new Dl(n, r));
			}
		}
		return super.visit(e);
	}
	visitNull(e) {
		return this;
	}
	visitDictionary(e) {
		return this.visit(e.clone(e.type.indices));
	}
	get nodes() {
		return this._nodes;
	}
	get buffers() {
		return this._buffers;
	}
	get byteLength() {
		return this._byteLength;
	}
	get bufferRegions() {
		return this._bufferRegions;
	}
	get variadicBufferCounts() {
		return this._variadicBufferCounts;
	}
};
function Yd(e) {
	let t = e.byteLength + 7 & -8;
	return this.buffers.push(e), this.bufferRegions.push(new El(this._byteLength, t)), this._byteLength += t, this;
}
function Xd(e) {
	let { type: t, length: n, typeIds: r, valueOffsets: i } = e;
	if (Yd.call(this, r), t.mode === mr.Sparse) return nf.call(this, e);
	if (t.mode === mr.Dense) {
		if (e.offset <= 0) return Yd.call(this, i), nf.call(this, e);
		{
			let a = new Int32Array(n), o = Object.create(null), s = Object.create(null);
			for (let e, t, c = -1; ++c < n;) (e = r[c]) !== void 0 && ((t = o[e]) === void 0 && (t = o[e] = i[c]), a[c] = i[c] - t, s[e] = (s[e] ?? 0) + 1);
			Yd.call(this, a), this.visitMany(e.children.map((e, r) => {
				let i = t.typeIds[r], a = o[i], c = s[i];
				return e.slice(a, Math.min(n, c));
			}));
		}
	}
	return this;
}
function Zd(e) {
	let t;
	/* istanbul ignore next */
	return e.nullCount >= e.length ? Yd.call(this, new Uint8Array(e.length + 7 >> 3)) : (t = e.values) instanceof Uint8Array ? Yd.call(this, ac(e.offset, e.length, t)) : Yd.call(this, oc(e.values));
}
function Qd(e) {
	return Yd.call(this, e.values.subarray(0, e.length * e.stride));
}
function $d(e) {
	let { length: t, values: n, valueOffsets: r } = e, i = R(r[0]), a = R(r[t]), o = Math.min(a - i, n.byteLength - i);
	return Yd.call(this, rr(-i, t + 1, r)), Yd.call(this, n.subarray(i, i + o)), this;
}
function ef(e) {
	let { offset: t, length: n, stride: r, values: i, variadicBuffers: a = [] } = e;
	if (!i) throw Error("BinaryView data is missing view buffer");
	let o = t * r, s = o + n * r;
	Yd.call(this, i.subarray(o, s));
	for (let e of a) Yd.call(this, e);
	return this._variadicBufferCounts.push(a.length), this;
}
function tf(e) {
	let { length: t, valueOffsets: n } = e;
	if (n) {
		let r = R(n[0]), i = R(n[t]);
		return Yd.call(this, rr(-r, t + 1, n)), this.visit(e.children[0].slice(r, i - r));
	}
	return this.visit(e.children[0]);
}
function nf(e) {
	return this.visitMany(e.type.children.map((t, n) => e.children[n]).filter(Boolean))[0];
}
Jd.prototype.visitBool = Zd, Jd.prototype.visitInt = Qd, Jd.prototype.visitFloat = Qd, Jd.prototype.visitUtf8 = $d, Jd.prototype.visitLargeUtf8 = $d, Jd.prototype.visitUtf8View = ef, Jd.prototype.visitBinary = $d, Jd.prototype.visitLargeBinary = $d, Jd.prototype.visitBinaryView = ef, Jd.prototype.visitFixedSizeBinary = Qd, Jd.prototype.visitDate = Qd, Jd.prototype.visitTimestamp = Qd, Jd.prototype.visitTime = Qd, Jd.prototype.visitDecimal = Qd, Jd.prototype.visitList = tf, Jd.prototype.visitLargeList = tf, Jd.prototype.visitStruct = nf, Jd.prototype.visitUnion = Xd, Jd.prototype.visitInterval = Qd, Jd.prototype.visitDuration = Qd, Jd.prototype.visitFixedSizeList = tf, Jd.prototype.visitMap = tf;
//#endregion
//#region ../node_modules/apache-arrow/ipc/writer.mjs
var rf = class extends nu {
	static throughNode(e) {
		throw Error("\"throughNode\" not available in this environment");
	}
	static throughDOM(e, t) {
		throw Error("\"throughDOM\" not available in this environment");
	}
	constructor(e) {
		if (super(), this._position = 0, this._started = !1, this._compression = null, this._sink = new iu(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), In(e) || (e = {
			autoDestroy: !0,
			writeLegacyIpcFormat: !1,
			compressionType: null
		}), this._autoDestroy = typeof e.autoDestroy != "boolean" || e.autoDestroy, this._writeLegacyIpcFormat = typeof e.writeLegacyIpcFormat == "boolean" && e.writeLegacyIpcFormat, e.compressionType != null) {
			if (this._writeLegacyIpcFormat) throw Error("Legacy IPC format does not support columnar compression. Use modern IPC format (writeLegacyIpcFormat=false).");
			if (Object.values(Er).includes(e.compressionType)) this._compression = new Ol(e.compressionType);
			else {
				let t = Object.values(Er).filter((e) => typeof e == "string");
				throw Error(`Unsupported compressionType: ${e.compressionType} Available types: ${t.join(", ")}`);
			}
		} else this._compression = null;
	}
	toString(e = !1) {
		return this._sink.toString(e);
	}
	toUint8Array(e = !1) {
		return this._sink.toUint8Array(e);
	}
	writeAll(e) {
		return Ln(e) ? e.then((e) => this.writeAll(e)) : zn(e) ? cf(this, e) : sf(this, e);
	}
	get closed() {
		return this._sink.closed;
	}
	[Symbol.asyncIterator]() {
		return this._sink[Symbol.asyncIterator]();
	}
	toDOMStream(e) {
		return this._sink.toDOMStream(e);
	}
	toNodeStream(e) {
		return this._sink.toNodeStream(e);
	}
	close() {
		return this.reset()._sink.close();
	}
	abort(e) {
		return this.reset()._sink.abort(e);
	}
	finish() {
		return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
	}
	reset(e = this._sink, t = null) {
		return e === this._sink || e instanceof iu ? this._sink = e : (this._sink = new iu(), e && Hn(e) ? this.toDOMStream({ type: "bytes" }).pipeTo(e) : e && Un(e) && this.toNodeStream({ objectMode: !1 }).pipe(e)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!t || !Cd(t, this._schema)) && (t == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = t, this._writeSchema(t))), this;
	}
	write(e) {
		let t = null;
		if (!this._sink) throw Error("RecordBatchWriter is closed");
		if (e == null || e instanceof Pd && !(t = e.schema) || e instanceof Ld && !(t = e.schema)) return this.finish() && void 0;
		if (t && !Cd(t, this._schema)) {
			if (this._started && this._autoDestroy) return this.close();
			this.reset(this._sink, t);
		}
		e instanceof Ld ? e instanceof Bd || this._writeRecordBatch(e) : e instanceof Pd ? this.writeAll(e.batches) : Rn(e) && this.writeAll(e);
	}
	_writeMessage(e, t = 8) {
		let n = t - 1, r = Cl.encode(e), i = r.byteLength, a = this._writeLegacyIpcFormat ? 4 : 8, o = i + a + n & ~n, s = o - i - a;
		return e.headerType === ci.RecordBatch ? this._recordBatchBlocks.push(new al(o, e.bodyLength, this._position)) : e.headerType === ci.DictionaryBatch && this._dictionaryBlocks.push(new al(o, e.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(o - a)), i > 0 && this._write(r), this._writePadding(s);
	}
	_write(e) {
		if (this._started) {
			let t = F(e);
			t && t.byteLength > 0 && (this._sink.write(t), this._position += t.byteLength);
		}
		return this;
	}
	_writeSchema(e) {
		return this._writeMessage(Cl.from(e));
	}
	_writeFooter(e) {
		return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
	}
	_writeMagic() {
		return this._write(Hd);
	}
	_writePadding(e) {
		return e > 0 ? this._write(new Uint8Array(e)) : this;
	}
	_writeRecordBatch(e) {
		let { byteLength: t, nodes: n, bufferRegions: r, buffers: i, variadicBufferCounts: a } = this._assembleRecordBatch(e), o = new wl(e.numRows, n, r, this._compression, a, e.metadata), s = Cl.from(o, t);
		return this._writeDictionaries(e)._writeMessage(s)._writeBodyBuffers(i);
	}
	_assembleRecordBatch(e) {
		let { byteLength: t, nodes: n, bufferRegions: r, buffers: i, variadicBufferCounts: a } = Jd.assemble(e);
		return this._compression != null && ({byteLength: t, bufferRegions: r, buffers: i} = this._compressBodyBuffers(i)), {
			byteLength: t,
			nodes: n,
			bufferRegions: r,
			buffers: i,
			variadicBufferCounts: a
		};
	}
	_compressBodyBuffers(e) {
		let t = qd.get(this._compression.type);
		if (!t?.encode || typeof t.encode != "function") throw Error(`Codec for compression type "${Er[this._compression.type]}" has invalid encode method`);
		let n = 0, r = [], i = [];
		for (let a of e) {
			let e = F(a);
			if (e.length === 0) {
				r.push(/* @__PURE__ */ new Uint8Array(), /* @__PURE__ */ new Uint8Array()), i.push(new El(n, 0));
				continue;
			}
			let o = t.encode(e), s = o.length < e.length, c = s ? o : e, l = s ? c.length : -1, u = new Cr(/* @__PURE__ */ new Uint8Array(8));
			u.writeInt64(0, BigInt(l)), r.push(u.bytes(), new Uint8Array(c));
			let d = (n + 7 & -8) - n;
			n += d;
			let f = 8 + c.length;
			i.push(new El(n, f)), n += f;
		}
		let a = (n + 7 & -8) - n;
		return n += a, {
			byteLength: n,
			bufferRegions: i,
			buffers: r
		};
	}
	_writeDictionaryBatch(e, t, n = !1) {
		let { byteLength: r, nodes: i, bufferRegions: a, buffers: o, variadicBufferCounts: s } = this._assembleRecordBatch(new Z([e])), c = new Tl(new wl(e.length, i, a, this._compression, s), t, n), l = Cl.from(c, r);
		return this._writeMessage(l)._writeBodyBuffers(o);
	}
	_writeBodyBuffers(e) {
		let t = this._compression == null ? 1 : 2, n = Array(t);
		for (let r = 0; r < e.length; r += t) {
			let i = 0;
			for (let a = -1; ++a < t;) n[a] = e[r + a], i += n[a].byteLength;
			if (i === 0) continue;
			for (let e of n) this._write(e);
			let a = (i + 7 & -8) - i;
			a > 0 && this._writePadding(a);
		}
		return this;
	}
	_writeDictionaries(e) {
		for (let [t, n] of e.dictionaries) {
			let e = n?.data ?? [], r = this._seenDictionaries.get(t), i = this._dictionaryDeltaOffsets.get(t) ?? 0;
			if (!r || r.data[0] !== e[0]) for (let [n, r] of e.entries()) this._writeDictionaryBatch(r, t, n > 0);
			else if (i < e.length) for (let n of e.slice(i)) this._writeDictionaryBatch(n, t, !0);
			this._seenDictionaries.set(t, n), this._dictionaryDeltaOffsets.set(t, e.length);
		}
		return this;
	}
}, af = class e extends rf {
	static writeAll(t, n) {
		let r = new e(n);
		return Ln(t) ? t.then((e) => r.writeAll(e)) : zn(t) ? cf(r, t) : sf(r, t);
	}
}, of = class e extends rf {
	static writeAll(t, n) {
		let r = new e(n);
		return Ln(t) ? t.then((e) => r.writeAll(e)) : zn(t) ? cf(r, t) : sf(r, t);
	}
	constructor(e) {
		super(e), this._autoDestroy = !0, this._writeLegacyIpcFormat = !1;
	}
	_writeSchema(e) {
		return this._writeMagic()._writePadding(2);
	}
	_writeDictionaryBatch(e, t, n = !1) {
		if (!n && this._seenDictionaries.has(t)) throw Error("The Arrow File format does not support replacement dictionaries. ");
		return super._writeDictionaryBatch(e, t, n);
	}
	_writeFooter(e) {
		let t = rl.encode(new rl(e, pr.V5, this._recordBatchBlocks, this._dictionaryBlocks));
		return super._writeFooter(e)._write(t)._write(Int32Array.of(t.byteLength))._writeMagic();
	}
};
function sf(e, t) {
	let n = t;
	t instanceof Pd && (n = t.batches, e.reset(void 0, t.schema));
	for (let t of n) e.write(t);
	return e.finish();
}
function cf(e, t) {
	return Tn(this, void 0, void 0, function* () {
		var n, r, i, a, o, s, c;
		try {
			for (n = !0, r = kn(t); i = yield r.next(), a = i.done, !a; n = !0) {
				c = i.value, n = !1;
				let t = c;
				e.write(t);
			}
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				!n && !a && (s = r.return) && (yield s.call(r));
			} finally {
				if (o) throw o.error;
			}
		}
		return e.finish();
	});
}
//#endregion
//#region ../node_modules/apache-arrow/ipc/serialization.mjs
function lf(e, t = "stream", n = null) {
	let r = { compressionType: n };
	return (t === "stream" ? af : of).writeAll(e, r).toUint8Array(!0);
}
//#endregion
//#region src/raster-store.ts
var uf = /* @__PURE__ */ new Map();
function df(e, t) {
	return `${e}.${t}`;
}
function ff(e, t, n) {
	uf.set(df(e, t), n);
}
function pf(e, t) {
	return uf.get(df(e, t));
}
function mf(e, t) {
	uf.delete(df(e, t));
}
//#endregion
//#region src/use-cases/spatial-join/queries.ts
var hf = "csv_candidates", gf = (e, t) => `${e}.${t}`, _f = (e) => {
	let t = e.spatialPredicate === "NEAR", n = gf(e.workspace, e.tableRoot.name), r = gf(e.workspace, e.tableJoin.name), i = {
		...e.tableRoot,
		name: "autk_root_feature"
	}, a = {
		...e.tableJoin,
		name: t && !e.rasterCandidates ? hf : "autk_join_feature"
	}, o = vf({
		tableRoot: i,
		tableJoin: a,
		tableJoinNameForKeys: e.tableJoin.name,
		geometricColumnRoot: e.geometricColumnRoot,
		geometricColumnJoin: e.geometricColumnJoin,
		nearUseCentroid: e.nearUseCentroid,
		groupBy: e.groupBy
	}), s = Mf({
		spatialPredicate: e.spatialPredicate,
		qualifiedTableJoinName: r,
		tableJoin: a,
		tableRoot: i,
		geometricColumnRoot: e.geometricColumnRoot,
		geometricColumnJoin: e.geometricColumnJoin,
		nearDistance: e.nearDistance,
		nearUseCentroid: e.nearUseCentroid,
		rasterCandidates: e.rasterCandidates
	}), c = "autk_root_feature_key";
	for (; e.tableRoot.columns.some((e) => e.name.toLowerCase() === c);) c += "_";
	let l = `autk_root_features AS (
    SELECT *, ROW_NUMBER() OVER () AS ${Lf(c)} FROM ${n}
  )`, u = Nf(i, c), d = (t, n) => e.nearUseCentroid ? `ST_Centroid(${t}.${Lf(n)})` : `${t}.${Lf(n)}`, f = t && !e.rasterCandidates ? `${hf} AS (
        SELECT * FROM ${r} AS ${e.tableJoin.name}
        WHERE ST_Intersects(
          (SELECT ST_Expand(ST_Envelope_Agg(${d(i.name, e.geometricColumnRoot)}), ${e.nearDistance}) FROM ${n} AS ${i.name}),
          ${d(e.tableJoin.name, e.geometricColumnJoin)}
        )
      )` : null, p = `
    ${o}
    FROM autk_root_features AS ${i.name}
    ${s}
    ${u}
  `, m = e.groupBy?.filter((e) => e.normalize) ?? [];
	if (m.length > 0) {
		let t = [
			l,
			...f ? [f] : [],
			`sjoin_base AS (${p})`
		], n = Af(m, e.tableJoin.name);
		return `
      WITH ${t.join(",\n")}
      SELECT * REPLACE (${n} AS properties)
      FROM sjoin_base;
    `;
	}
	return `
    WITH ${l}${f ? `, ${f}` : ""}
    ${p};
  `;
};
function vf(e) {
	if (e.groupBy) {
		let { aggregatesByFunction: t, nonAggregateColumns: n } = yf(e.groupBy), r = bf(t, n, {
			tableJoin: e.tableJoin,
			tableJoinNameForKeys: e.tableJoinNameForKeys,
			geometricColumnRoot: e.geometricColumnRoot,
			geometricColumnJoin: e.geometricColumnJoin,
			nearUseCentroid: e.nearUseCentroid,
			tableRoot: e.tableRoot
		}), i = Pf(e.tableRoot), a = i.length > 0 ? `,\n        ${i.join(",\n        ")}` : "";
		return `
      SELECT 
        ${e.tableRoot.name}.geometry,
        json_merge_patch(
          ${Df(e.tableRoot)},
          json_object(
            'sjoin', json_object(
              ${r}
            )
          )
        ) AS properties${a}
    `;
	}
	return jf(e.tableRoot, e.tableJoin, e.geometricColumnJoin);
}
function yf(e) {
	let t = {}, n = [];
	return e.forEach((e) => {
		if (e.aggregateFn) {
			let n = e.aggregateFn.toLowerCase();
			t[n] || (t[n] = []), t[n].push({ column: e.column });
		} else n.push({ column: e.column });
	}), {
		aggregatesByFunction: t,
		nonAggregateColumns: n
	};
}
function bf(e, t, n) {
	let r = [];
	return Object.entries(e).forEach(([e, t]) => {
		if (e === "count") {
			let e = t[0].column, i = e === "*" ? `${n.tableJoin.name}.${Lf(n.geometricColumnJoin)}` : Ef(n.tableJoin, e);
			r.push(`'count', json_object('${Rf(n.tableJoinNameForKeys)}', COUNT(${i}))`);
		} else e === "weighted" ? r.push(xf(t[0], n)) : e === "collect" ? r.push(Sf(t[0], n.tableJoin, n.tableJoinNameForKeys)) : r.push(Cf(e, t, n.tableJoin, n.tableJoinNameForKeys));
	}), t.length > 0 && r.push(wf(t, n.tableJoin)), r.join(", ");
}
function xf(e, t) {
	let { tableRoot: n, tableJoin: r, geometricColumnRoot: i, geometricColumnJoin: a, nearUseCentroid: o, tableJoinNameForKeys: s } = t, c = o ? `ST_Centroid(${n.name}.${Lf(i)})` : `${n.name}.${Lf(i)}`, l = o ? `ST_Centroid(${r.name}.${Lf(a)})` : `${r.name}.${Lf(a)}`;
	return `'weighted', json_object('${Rf(s)}', SUM(1.0 / (ST_Distance(${c}, ${l}) + 1.0)))`;
}
function Sf(e, t, n) {
	let r = Tf(t, e.column, "COLLECT");
	return `'collect', json_object('${Rf(n)}', ${r})`;
}
function Cf(e, t, n, r) {
	let i = t.map((t) => {
		let i = Tf(n, t.column, e.toUpperCase());
		return `'${Rf(`${r}.${t.column}`)}', ${i}`;
	}).join(", ");
	return `'${Rf(e)}', json_object(${i})`;
}
function wf(e, t) {
	return e.map((e) => {
		let n = Ef(t, e.column);
		return `'${Rf(e.column)}', COALESCE(to_json(list(${n}) FILTER (WHERE ${t.name}.geometry IS NOT NULL)), '[]'::JSON)`;
	}).join(", ");
}
function Tf(e, t, n) {
	if (n === "COLLECT") {
		if (t === "*") return `COALESCE(to_json(list(${Ff(e) ? `CAST(${e.name}.properties AS JSON)` : Of(e)}) FILTER (WHERE ${e.name}.geometry IS NOT NULL)), '[]'::JSON)`;
		let n = Ef(e, t);
		return `COALESCE(to_json(list(json_object('${Rf(t)}', ${n})) FILTER (WHERE ${e.name}.geometry IS NOT NULL)), '[]'::JSON)`;
	}
	let r = Ef(e, t);
	return `${n}(${n === "COUNT" ? r : `CAST(${r} AS DOUBLE)`})`;
}
function Ef(e, t) {
	return Ff(e) ? kf(e.name, t) : If(e.name, t);
}
function Df(e) {
	return Ff(e) ? `COALESCE(CAST(${e.name}.properties AS JSON), '{}'::JSON)` : Of(e);
}
function Of(e) {
	let t = e.columns.filter((e) => e.type !== "GEOMETRY" && e.name !== "properties" && e.name !== "geojson_id");
	return t.length === 0 ? "'{}'::JSON" : `json_object(${t.map((t) => `'${Rf(t.name)}', ${If(e.name, t.name)}`).join(", ")})`;
}
function kf(e, t) {
	let n = t.split("."), r = n.pop();
	return `${n.reduce((e, t) => `${e}->'${Rf(t)}'`, `${e}.properties`)}->>'${Rf(r)}'`;
}
function Af(e, t) {
	let n = {};
	for (let r of e) {
		let e = r.aggregateFn?.toLowerCase() ?? "value", i = e === "count" || e === "weighted" || e === "collect" ? t : `${t}.${r.column}`, a = `$.sjoin.${e}.${JSON.stringify(i)}`;
		n[e] || (n[e] = []), n[e].push({
			colKey: i,
			jsonPath: a
		});
	}
	return `json_merge_patch(
      properties,
      json_object('sjoin', json_object(
        ${Object.entries(n).map(([e, t]) => {
		let n = t.map(({ colKey: e, jsonPath: t }) => {
			let n = `COALESCE(json_extract(properties, '${Rf(t)}')::DOUBLE, 0)`, r = `(${n} - MIN(${n}) OVER ()) / NULLIF(MAX(${n}) OVER () - MIN(${n}) OVER (), 0)`;
			return `'${Rf(e)}_norm', ${r}`;
		}).join(",\n          ");
		return `'${Rf(e)}', json_object(${n})`;
	}).join(",\n      ")}
      ))
    )`;
}
function jf(e, t, n) {
	let r = Pf(e), i = r.length > 0 ? `,\n        ${r.join(",\n        ")}` : "", a = Ff(t) ? `COALESCE(CAST(${t.name}.properties AS JSON), '{}'::JSON)` : `json_object(${t.columns.filter((e) => e.name !== n && e.type !== "GEOMETRY").map((e) => `'${Rf(e.name)}', ${If(t.name, e.name)}`).join(", ")})`, o = t.columns.find((e) => e.name === "geojson_id") ?? t.columns.find((e) => e.name === "id"), s = `json_object(${o ? `'id', ${t.name}.${Lf(o.name)},` : ""} 'properties', ${a})`;
	return `
      SELECT 
        ${e.name}.geometry,
        json_merge_patch(
          ${Df(e)},
          json_object('sjoin', json_object('matches',
            COALESCE(to_json(list(${s}) FILTER (WHERE ${t.name}.${Lf(n)} IS NOT NULL)), '[]'::JSON)))
        ) AS properties${i}
    `;
}
function Mf({ spatialPredicate: e, qualifiedTableJoinName: t, tableJoin: n, tableRoot: r, geometricColumnRoot: i, geometricColumnJoin: a, nearDistance: o, nearUseCentroid: s, rasterCandidates: c }) {
	let l = `ST_Intersects(${r.name}.${Lf(i)}, ${n.name}.${Lf(a)})`;
	if (e === "NEAR") {
		let e = s ? `ST_Centroid(${r.name}.${Lf(i)})` : `${r.name}.${Lf(i)}`, t = s ? `ST_Centroid(${n.name}.${Lf(a)})` : `${n.name}.${Lf(a)}`;
		l = `NOT ST_IsEmpty(${e}) AND NOT ST_IsEmpty(${t}) AND ST_Distance(${e}, ${t}) <= ${o}`;
	}
	return c ? `LEFT JOIN LATERAL (SELECT * FROM (${c}) AS ${n.name} WHERE ${l}) AS ${n.name} ON TRUE` : `LEFT JOIN ${e === "NEAR" ? n.name : `${t} AS ${n.name}`} ON ${l}`;
}
function Nf(e, t) {
	let n = Pf(e);
	return `
    GROUP BY ${[
		`${e.name}.${Lf(t)}`,
		`${e.name}.geometry`,
		...Ff(e) ? [`${e.name}.properties`] : [],
		...n
	].join(", ")}
  `;
}
function Pf(e) {
	return e.columns.filter((e) => e.name !== "geometry" && e.name !== "properties").map((t) => `${e.name}.${Lf(t.name)}`);
}
function Ff(e) {
	return e.columns.some((e) => e.name === "properties");
}
function If(e, t) {
	return `${e}.${Lf(t)}`;
}
function Lf(e) {
	return `"${e.replace(/"/g, "\"\"")}"`;
}
function Rf(e) {
	return e.replace(/'/g, "''");
}
//#endregion
//#region src/use-cases/spatial-join/raster.ts
var zf = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e, t, n, r, i = {}) {
		let a = pf(r, n.name);
		if (!a) throw Error(`Raster payload for ${r}.${n.name} is not available. Reload the raster before joining.`);
		let { width: o, height: s, sourceMinX: c, sourceMinY: l, resX: u, resY: d, sourceCrs: f } = a;
		if (![o, s].every((e) => Number.isInteger(e) && e > 0) || ![
			c,
			l,
			u,
			d
		].every(Number.isFinite) || u <= 0 || d <= 0) throw Error(`Invalid source grid for raster ${n.name}.`);
		if (e.near && (!Number.isFinite(e.near.distance) || e.near.distance < 0)) throw Error("Raster near distance must be finite and non-negative.");
		let p = a.bands.map((e) => e.id), m = e.groupBy?.length ? e.groupBy : null, h = !m || m.some((e) => e.aggregateFn === "collect" && e.column === "*"), g = new Set(h ? p : []);
		for (let e of m ?? []) if (e.aggregateFn !== "weighted" && (e.column !== "*" || e.aggregateFn !== "count" && e.aggregateFn !== "collect")) {
			if (!p.includes(e.column)) throw Error(`Unknown raster band ${e.column} in ${n.name}.`);
			g.add(e.column);
		}
		let _ = [...g];
		for (let e of _) if (a.values[e]?.length !== o * s) throw Error(`Invalid values for raster band ${e}.`);
		let v = _.length ? new Pd(Object.fromEntries(_.map((e) => [e, Ed([a.values[e]], new Ca(new Q("item", new ca())))]))) : new Pd({ seed: Ed(new Int32Array([1])) }), y = `_autk_raster_join_${Date.now()}_${Math.random().toString(36).slice(2)}`, b = `"${r.replace(/"/g, "\"\"")}"."${y}"`;
		try {
			await this.conn.insertArrowFromIPCStream(lf(v, "stream"), {
				name: y,
				schema: r,
				create: !0
			});
			let p = i.coordinateFormat ?? a.targetCrs, h = i.precisionGrid ?? 0, g = t.columns.find((e) => e.type === "GEOMETRY").name, x = `autk_root_feature."${g.replace(/"/g, "\"\"")}"`, S = `ST_Expand(ST_Envelope(${e.near && (e.near.useCentroid ?? !0) ? `ST_Centroid(${x})` : x}), ${(e.near?.distance ?? 0) + h})`, C = f.replace(/'/g, "''"), w = p.replace(/'/g, "''"), T = f === p, E = /* @__PURE__ */ new Set(["EPSG:3395", "EPSG:3857"]), D = f === "EPSG:4326", O = p === "EPSG:4326", k = Math.PI * 6378137, ee = E.has(f) && c >= -k && c + o * u <= k, te = T || D && E.has(p) && c >= -180 && c + o * u <= 180 || O && ee || ee && E.has(p), ne = `ST_MakeEnvelope(${c}, ${l}, ${c + o * u}, ${l + s * d})`;
			if (te) {
				let e = T ? S : `ST_Transform(${S}, '${w}', '${C}', always_xy := true)`;
				ne = O && !T ? `CASE WHEN ST_XMin(${S}) >= -180 AND ST_XMax(${S}) <= 180 AND ST_YMin(${S}) > -90 AND ST_YMax(${S}) < 90 THEN ${e} ELSE ${ne} END` : E.has(p) && !T ? `CASE WHEN ST_XMin(${S}) >= ${-k} AND ST_XMax(${S}) <= ${k} THEN ${e} ELSE ${ne} END` : e;
			}
			let re = `ST_Point(${c} + (col + 0.5) * ${u}, ${l} + (row + 0.5) * ${d})`, ie = T ? re : `ST_Transform(${re}, '${C}', '${w}', always_xy := true)`, ae = h > 0 ? `ST_ReducePrecision(${ie}, ${h})` : ie, oe = _.map((e) => {
				let t = `"${e.replace(/"/g, "\"\"")}"`, n = `packed.${t}[row * ${o} + col + 1]`;
				return `CASE WHEN isfinite(${n}) THEN ${n} ELSE NULL END AS ${t}`;
			}), se = `
        WITH bounds AS (SELECT ${ne} AS box WHERE ${x} IS NOT NULL AND NOT ST_IsEmpty(${x}))
        SELECT ${ae} AS geometry${oe.length ? `, ${oe.join(", ")}` : ""}
        FROM bounds, ${b} AS packed,
          LATERAL range(GREATEST(0, LEAST(${o}, FLOOR((ST_XMin(box) - ${c}) / ${u} - 0.5) - 1))::BIGINT,
                        GREATEST(0, LEAST(${o}, CEIL((ST_XMax(box) - ${c}) / ${u} - 0.5) + 2))::BIGINT) AS x(col),
          LATERAL range(GREATEST(0, LEAST(${s}, FLOOR((ST_YMin(box) - ${l}) / ${d} - 0.5) - 1))::BIGINT,
                        GREATEST(0, LEAST(${s}, CEIL((ST_YMax(box) - ${l}) / ${d} - 0.5) + 2))::BIGINT) AS y(row)
      `, ce = _f({
				workspace: r,
				tableRoot: t,
				tableJoin: {
					...n,
					columns: [{
						name: "geometry",
						type: "GEOMETRY"
					}, ..._.map((e) => ({
						name: e,
						type: "FLOAT"
					}))]
				},
				geometricColumnRoot: g,
				geometricColumnJoin: "geometry",
				spatialPredicate: e.near ? "NEAR" : "INTERSECT",
				nearDistance: e.near?.distance,
				nearUseCentroid: e.near?.useCentroid ?? !0,
				groupBy: m,
				rasterCandidates: se
			}), le = await this.conn.query(`CREATE OR REPLACE TABLE ${r}.${t.name} AS ${ce}
        DESCRIBE ${r}.${t.name};`);
			return {
				...t,
				columns: dn(le.toArray())
			};
		} finally {
			await this.conn.query(`DROP TABLE IF EXISTS ${b};`);
		}
	}
}, Bf = class extends Error {
	constructor(e) {
		super(`Table ${e} not found`), this.name = "TableNotFoundError";
	}
}, Vf = class extends Error {
	constructor(e) {
		super(`Table ${e} does not have a geometry column`), this.name = "GeometryColumnNotFoundError";
	}
}, Hf = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e, t, n, r = {}) {
		let i = t.find((t) => t.name === e.tableRootName);
		if (!i) throw new Bf(e.tableRootName);
		let a = t.find((t) => t.name === e.tableJoinName);
		if (!a) throw new Bf(e.tableJoinName);
		let o = i.columns.find((e) => e.type === "GEOMETRY")?.name;
		if (!o) throw i.type === "raster" ? Error("spatialQuery requires a vector root; compact rasters are supported as tableJoinName.") : new Vf(i.name);
		let s = a.columns.find((e) => e.type === "GEOMETRY")?.name;
		if (!s && a.type === "raster") return new zf(this.conn).exec(e, i, a, n, r);
		if (!s) throw new Vf(a.name);
		let c = _f({
			workspace: n,
			tableRoot: i,
			tableJoin: a,
			geometricColumnRoot: o,
			geometricColumnJoin: s,
			spatialPredicate: e.near ? "NEAR" : "INTERSECT",
			groupBy: e.groupBy?.length ? e.groupBy : null,
			nearDistance: e.near?.distance,
			nearUseCentroid: e.near?.useCentroid ?? !0
		}), l = await this.conn.query(`
      CREATE OR REPLACE TABLE ${n}.${i.name} AS ${c}
      DESCRIBE ${n}.${i.name};
    `);
		return {
			...i,
			columns: dn(l.toArray())
		};
	}
}, Uf = class {
	conn;
	spatialJoinUseCase;
	constructor(e) {
		this.conn = e, this.spatialJoinUseCase = new Hf(e);
	}
	async exec(e, t, n, r, i = d) {
		if (!n) throw Error("Bounding box is required to build a heatmap.");
		if (!t.find((t) => t.name === e.tableJoinName)) throw Error(`Table ${e.tableJoinName} not found.`);
		let a = e.outputTableName, o = await this.createGridTable({
			boundingBox: n,
			rows: e.grid.rows,
			columns: e.grid.columns,
			outputTableName: a,
			workspace: r
		});
		await this.spatialJoinUseCase.exec({
			tableRootName: a,
			tableJoinName: e.tableJoinName,
			near: e.near,
			groupBy: e.groupBy
		}, [...t, o], r, { coordinateFormat: i });
		let s = this.getRasterBands(e);
		return await this.transformToRasterFormat(a, s, r), await this.materializeCompactRaster(a, s, n, e.grid.rows, e.grid.columns, r, i), {
			source: "user",
			type: "raster",
			name: a,
			columns: dn((await this.conn.query(`DESCRIBE ${r}.${a}`)).toArray()),
			bands: s.map(({ id: e, label: t }) => ({
				id: e,
				label: t
			}))
		};
	}
	async createGridTable(e) {
		let { boundingBox: t, rows: n, columns: r, outputTableName: i, workspace: a } = e, o = `${a}.${i}`;
		if (n <= 0 || r <= 0) throw Error("Rows and columns must be positive integers.");
		let { minLon: s, minLat: c, maxLon: l, maxLat: u } = t;
		await this.conn.query(`CREATE OR REPLACE TABLE ${o} (
            row_index INTEGER,
            column_index INTEGER,
            geometry GEOMETRY,
            properties STRUCT(band_1 DOUBLE)
        );`);
		let d = (l - s) / r, f = (u - c) / n, p = [];
		for (let e = 0; e < n; e++) for (let t = 0; t < r; t++) {
			let n = s + (t + .5) * d, r = c + (e + .5) * f;
			p.push(`(${e}, ${t}, ST_Point(${n}, ${r}), {'band_1': 0::DOUBLE})`);
		}
		return await this.conn.query(`INSERT INTO ${o} VALUES ${p.join(",")};`), await this.conn.query(`CREATE INDEX idx_${i}_geometry ON ${o} USING RTREE (geometry);`), {
			source: "user",
			type: "raster",
			name: i,
			columns: dn((await this.conn.query(`DESCRIBE ${o}`)).toArray()),
			bands: [{
				id: "band_1",
				label: "band_1"
			}]
		};
	}
	async transformToRasterFormat(e, t, n) {
		let r = `${n}.${e}`, i = `
            CREATE OR REPLACE TABLE ${r} AS
            SELECT 
                row_index,
                column_index,
                geometry,
                {
${t.map((e) => `                    '${e.id}': COALESCE(json_extract(properties, '${e.jsonPath}')::DOUBLE, 0)`).join(",\n")}
                } AS properties
            FROM ${r};
        `;
		await this.conn.query(i);
	}
	async materializeCompactRaster(e, t, n, r, i, a, o) {
		let s = `${a}.${e}`, c = t.map((e) => `properties.${e.id} AS ${e.id}`).join(",\n          "), l = await this.conn.query(`
          SELECT
            row_index,
            column_index,
            ${c}
          FROM ${s}
          ORDER BY row_index ASC, column_index ASC;
        `), u = r * i, d = Object.fromEntries(t.map((e) => [e.id, new Float32Array(u)]));
		for (let e of l.toArray()) {
			let n = fn(e.toJSON()), r = Number(n.row_index), a = Number(n.column_index), o = r * i + a;
			for (let e of t) {
				let t = Number(n[e.id]);
				d[e.id][o] = Number.isFinite(t) ? t : 0;
			}
		}
		let { minLon: f, minLat: p, maxLon: m, maxLat: h } = n, g = (m - f) / i, _ = (h - p) / r;
		ff(a, e, {
			width: i,
			height: r,
			originalWidth: i,
			originalHeight: r,
			minX: f,
			minY: p,
			maxX: m,
			maxY: h,
			originX: f,
			originY: h,
			sourceMinX: f,
			sourceMinY: p,
			resX: g,
			resY: _,
			sourceCrs: o,
			targetCrs: o,
			bands: t.map(({ id: e, label: t }) => ({
				id: e,
				label: t
			})),
			values: d
		}), await this.conn.query(`
          CREATE OR REPLACE TABLE ${s} AS
          SELECT
            ${i}::INTEGER AS width,
            ${r}::INTEGER AS height,
            ${i}::INTEGER AS original_width,
            ${r}::INTEGER AS original_height,
            ${f}::DOUBLE AS min_x,
            ${p}::DOUBLE AS min_y,
            ${m}::DOUBLE AS max_x,
            ${h}::DOUBLE AS max_y,
            ${f}::DOUBLE AS origin_x,
            ${h}::DOUBLE AS origin_y,
            ${g}::DOUBLE AS res_x,
            ${_}::DOUBLE AS res_y,
            '${o}'::VARCHAR AS source_crs,
            '${o}'::VARCHAR AS target_crs;
        `);
	}
	getRasterBands(e) {
		return (e.groupBy && e.groupBy.length > 0 ? e.groupBy : [{
			column: "*",
			aggregateFn: "count"
		}]).map((t, n) => {
			let r = (t.aggregateFn ?? "value").toLowerCase(), i = r === "count" || r === "weighted" ? e.tableJoinName : `${e.tableJoinName}.${t.column}`;
			return {
				id: `band_${n + 1}`,
				label: `${r}_${e.tableJoinName}`,
				jsonPath: `$.sjoin.${r}.${i}`
			};
		});
	}
}, Wf = (e, t) => {
	let n = `${t}.${e.name}`, r = Kf(e), i = e.columns?.find((e) => e.name === "geojson_id") ?? e.columns?.find((e) => e.name === "id"), a = i ? `'id', ${qf(i.name)},` : "";
	return e.type === "raster" ? `
      SELECT json_object(
           'type', 'FeatureCollection',
           'features', json_array(
             json_object(
               'type', 'Feature',
               'geometry', NULL,
               'properties', json_object(
                 'rasterResX', COUNT(DISTINCT ROUND(ST_X(geometry), 8))::INTEGER,
                 'rasterResY', COUNT(DISTINCT ROUND(ST_Y(geometry), 8))::INTEGER,
                 'raster', list(properties ORDER BY ST_Y(geometry) ASC, ST_X(geometry) ASC)
               )
             )
           )
         ) AS geojson
      FROM ${n};
    ` : `
    SELECT json_object(
         'type', 'FeatureCollection',
         'features', COALESCE(json_group_array(feature), '[]'::JSON)
       ) AS geojson
    FROM (
      SELECT json_object(
        'type', 'Feature',
        ${a}
        'geometry', CAST(ST_AsGeoJSON(geometry) AS JSON),
        'properties', ${r}
      ) AS feature
      FROM ${n}
    ) sub;
  `;
}, Gf = (e, t) => {
	let n = `${qf(t)}.${qf(e.name)}`, r = e.type === "buildings";
	return `WITH source_rows AS MATERIALIZED (
      SELECT CAST(ST_AsGeoJSON(geometry) AS JSON) source_geometry, ${p}${r ? ", building_id" : ""}
      FROM ${n}
    )
    SELECT json_object('type', 'FeatureCollection', 'features', COALESCE(json_group_array(feature), '[]'::JSON)) geojson
    FROM (
      SELECT json_object('type', 'Feature',
        'id', (element.value->>'osm_type') || '/' || (element.value->>'osm_id'),
        'geometry', ${r ? "source_geometry->'geometries'->CAST(element.value->>'geometryIndex' AS INTEGER)" : "source_geometry"},
        'properties', json_merge_patch(element.value->'tags', json_object(
          'osm_type', element.value->>'osm_type', 'osm_id', element.value->'osm_id'
          ${r ? ", 'building_id', building_id" : ""}))) feature
      FROM source_rows, LATERAL json_each(${p}) element
      ORDER BY ${r ? "building_id," : ""} element.value->>'osm_type', CAST(element.value->>'osm_id' AS BIGINT)
    ) ordered_elements;`;
};
function Kf(e) {
	if (e.columns.some((e) => e.name === "properties")) return "COALESCE(CAST(properties AS JSON), '{}'::JSON)";
	let t = e.columns.filter((e) => e.type !== "GEOMETRY" && e.name !== "geojson_id" && e.name !== "__autk_osm_elements");
	return t.length === 0 ? "'{}'::JSON" : `json_object(${t.map((e) => `'${e.name.replace(/'/g, "''")}', ${qf(e.name)}`).join(", ")})`;
}
function qf(e) {
	return `"${e.replace(/"/g, "\"\"")}"`;
}
//#endregion
//#region src/use-cases/get-layer/use-case.ts
var Jf = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e, t = l, n = {}) {
		let r = !!(n.osmElements && e.source === "osm" && e.type !== "surface" && e.type !== "raster" && e.columns.some((e) => e.name === "__autk_osm_elements" && e.type === "JSON") && (e.type !== "buildings" || e.columns.some((e) => e.name === "building_id")));
		r &&= (await this.conn.query(`SELECT 1 FROM "${t.replace(/"/g, "\"\"")}"."${e.name.replace(/"/g, "\"\"")}"
        WHERE ${p} IS NULL LIMIT 1`)).numRows === 0;
		let i = r ? Gf(e, t) : Wf(e, t), a = (await this.conn.query(i)).toArray()[0]?.geojson ?? "{\"type\":\"FeatureCollection\",\"features\":[]}", o = JSON.parse(r ? a : a.replace(/\bNaN\b/g, "null"));
		o.__autk_layer = e.type;
		for (let e of o.features) e.properties && typeof e.properties == "object" && "__autk_layer" in e.properties && delete e.properties.__autk_layer;
		return o;
	}
}, Yf = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e, t = l) {
		let n = `${t}.${e}`, r = (await this.conn.query(`SELECT width, height, min_x, min_y, max_x, max_y FROM ${n} LIMIT 1`)).toArray()[0];
		if (!r) throw Error(`No data found in raster table ${e}.`);
		let i = pf(t, e);
		if (!i) throw Error(`Raster payload for table ${e} is not available in memory.`);
		let a = {
			rasterResX: i.width,
			rasterResY: i.height,
			bands: i.bands,
			originalRasterResX: i.originalWidth,
			originalRasterResY: i.originalHeight
		};
		for (let e of i.bands) a[e.id] = i.values[e.id];
		return {
			type: "FeatureCollection",
			bbox: [
				Number(r.min_x),
				Number(r.min_y),
				Number(r.max_x),
				Number(r.max_y)
			],
			features: [{
				type: "Feature",
				geometry: null,
				properties: a
			}]
		};
	}
}, Xf = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e, t = l) {
		let n = `${t}.${e}`;
		return (await this.conn.query(`SELECT * FROM ${n}`)).toArray().map((e) => fn(e.toJSON()));
	}
}, Zf = (e, t, n, r) => {
	let i = `${r}.${t}`;
	return `
        CREATE OR REPLACE TABLE ${i} AS
            SELECT * FROM READ_CSV(
                '${e}',
                delim='${n}',
                HEADER=TRUE,
                AUTO_DETECT=TRUE
            );

        DESCRIBE ${i};
  `;
}, Qf = ({ csvFileUrl: e, tableName: t, delimiter: n, latColumnName: r, longColumnName: i, sourceCrs: a, targetCrs: o, workspace: s }) => {
	let c = `${s}.${t}`;
	return `
    CREATE TABLE ${c} AS
      SELECT
          *,
          ST_Transform(
              ST_Point(CAST(${i} AS DOUBLE), CAST(${r} AS DOUBLE)),
              '${a}',
              '${o}',
              always_xy := true
          ) AS ${m}
      FROM READ_CSV(
          '${e}',
          delim='${n}',
          HEADER=TRUE,
          AUTO_DETECT=TRUE
      );

    DESCRIBE ${c};
  `;
}, $f = ({ csvFileUrl: e, tableName: t, delimiter: n, wktColumnName: r, sourceCrs: i, targetCrs: a, workspace: o }) => {
	let s = `${o}.${t}`;
	return `
    CREATE TABLE ${s} AS
      SELECT
          *,
          ST_Transform(
              ST_GeomFromText(CAST(${r} AS VARCHAR)),
              '${i}',
              '${a}',
              always_xy := true
          ) AS ${m}
      FROM READ_CSV(
          '${e}',
          delim='${n}',
          HEADER=TRUE,
          AUTO_DETECT=TRUE
      );

    DESCRIBE ${s};
  `;
}, ep = class {
	db;
	conn;
	constructor(e, t) {
		this.db = e, this.conn = t;
	}
	async exec({ csvFileUrl: e, csvObject: t, outputTableName: n, geometryColumns: r, delimiter: i = ",", workspace: a = l, workspaceCoordinateFormat: o = d }) {
		if (!e && !t) throw Error("Either csvFileUrl or csvObject must be provided");
		if (e && t) throw Error("Cannot provide both csvFileUrl and csvObject. Please provide only one.");
		let s = e ? await fetch(e).then((t) => {
			if (!t.ok) throw Error(`HTTP error! Error to load ${e}! Status: ${t.status}`);
			return t.text();
		}) : this.buildCsvString(t, i), c = `temp_csv_${Date.now()}_${Math.random().toString(36).slice(2, 11)}.csv`;
		await this.db.registerFileText(c, s);
		let f = `${a}.${n}`, p = !1, h, g = r === !0 ? {
			mode: "lat-lng",
			latColumnName: "Latitude",
			longColumnName: "Longitude",
			coordinateFormat: u
		} : r && "wktColumnName" in r ? {
			mode: "wkt",
			wktColumnName: r.wktColumnName,
			coordinateFormat: r.coordinateFormat || "EPSG:4326"
		} : r ? {
			mode: "lat-lng",
			latColumnName: r.latColumnName,
			longColumnName: r.longColumnName,
			coordinateFormat: r.coordinateFormat || "EPSG:4326"
		} : null;
		if (g?.mode === "lat-lng" && (!g.latColumnName.trim() || !g.longColumnName.trim())) throw Error("Both latColumnName and longColumnName must be provided when using CSV latitude/longitude geometry columns.");
		if (g?.mode === "wkt" && !g.wktColumnName.trim()) throw Error("wktColumnName must be provided when using CSV WKT geometry columns.");
		let _;
		g?.mode === "lat-lng" ? (_ = Qf({
			csvFileUrl: c,
			tableName: n,
			delimiter: i,
			latColumnName: g.latColumnName,
			longColumnName: g.longColumnName,
			sourceCrs: g.coordinateFormat,
			targetCrs: o,
			workspace: a
		}), h = "points") : _ = g?.mode === "wkt" ? $f({
			csvFileUrl: c,
			tableName: n,
			delimiter: i,
			wktColumnName: g.wktColumnName,
			sourceCrs: g.coordinateFormat,
			targetCrs: o,
			workspace: a
		}) : Zf(c, n, i, a);
		try {
			let e = await this.conn.query(_);
			p = !0;
			let t = dn(e.toArray());
			if (g) {
				await this.ensureAllRowsHaveGeometry(f), g.mode === "wkt" && (h = await this.inferWktLayerType(f, g.wktColumnName));
				let e = `idx_${n}_geometry`;
				await this.conn.query(`CREATE INDEX ${e} ON ${f} USING RTREE (${m});`);
			}
			return {
				source: "csv",
				name: n,
				columns: t,
				type: h
			};
		} catch (e) {
			p && await this.conn.query(`DROP TABLE IF EXISTS ${f}`);
			let t = e instanceof Error ? e.message : String(e);
			if (g?.mode === "wkt") {
				let n = /* @__PURE__ */ Error(`Failed to load CSV geometry from WKT column '${g.wktColumnName}': ${t}`);
				throw n.cause = e, n;
			}
			if (g?.mode === "lat-lng") {
				let n = /* @__PURE__ */ Error(`Failed to load CSV geometry from latitude/longitude columns '${g.latColumnName}' and '${g.longColumnName}': ${t}`);
				throw n.cause = e, n;
			}
			throw e;
		} finally {
			await this.db.dropFile(c);
		}
	}
	async ensureAllRowsHaveGeometry(e) {
		let t = (await this.conn.query(`
      SELECT COUNT(*) AS total_rows, COUNT(${m}) AS geometry_rows
      FROM ${e}
    `)).toArray()[0], n = Number(t?.total_rows ?? 0), r = Number(t?.geometry_rows ?? 0);
		if (n !== r) throw Error(`Geometry creation produced ${n - r} null geometries.`);
	}
	async inferWktLayerType(e, t) {
		let n = (await this.conn.query(`
      SELECT DISTINCT CAST(ST_GeometryType(${m}) AS VARCHAR) AS geometry_type
      FROM ${e}
      WHERE ${m} IS NOT NULL
      ORDER BY geometry_type
    `)).toArray().map((e) => String(e.geometry_type ?? "").toUpperCase());
		if (n.length === 0) throw Error(`Could not infer a layer type from WKT column '${t}' because no non-null geometries were created.`);
		let r = /* @__PURE__ */ new Set();
		for (let e of n) switch (e) {
			case "POINT":
			case "MULTIPOINT":
				r.add("points");
				break;
			case "LINESTRING":
			case "MULTILINESTRING":
				r.add("polylines");
				break;
			case "POLYGON":
			case "MULTIPOLYGON":
				r.add("polygons");
				break;
			default: throw Error(`Unsupported WKT geometry type '${e}' in column '${t}'.`);
		}
		if (r.size !== 1) throw Error(`WKT column '${t}' contains mixed geometry families: ${n.join(", ")}.`);
		return Array.from(r)[0];
	}
	buildCsvString(e, t) {
		return e.map((e) => e.map((e) => `"${String(e ?? "").replace(/"/g, "\"\"")}"`).join(t)).join("\n");
	}
}, tp = 104857600, np = (e) => `
  SELECT feature->>'id' AS id
  FROM read_json('${e}', columns = {type: 'VARCHAR', features: 'JSON[]'}, maximum_object_size=${tp}),
    UNNEST(features) AS t(feature)
  WHERE NOT ST_IsValid(ST_GeomFromGeoJSON(feature->'geometry'))
  LIMIT 1;
`, rp = (e, t, n) => `
    CREATE OR REPLACE TABLE ${`${n}.${t}`} AS
    SELECT * FROM read_json('${e}', columns = {type: 'VARCHAR', features: 'JSON[]'}, maximum_object_size=${tp});
  `, ip = (e, t, n, r, i, a, o = !0) => {
	let s = `${i}.${e}`, c = `${i}.${t}`, l = `ST_Transform(
    ST_GeomFromGeoJSON(feature->'geometry'),
    '${n}',
    '${r}',
    always_xy := true
  )`;
	return `
    CREATE OR REPLACE TABLE ${c} AS
    SELECT
      row_number() OVER () AS id,
      feature->'id' AS geojson_id,
      ${a && o ? `ST_Intersection(
        ${l},
        ST_MakeEnvelope(${a.minLon}, ${a.minLat}, ${a.maxLon}, ${a.maxLat})
      )` : l} AS geometry,
      feature->'properties' AS properties
    FROM (
      SELECT UNNEST(features) AS feature
      FROM ${s}
    )
    ${a ? "WHERE ST_Intersects(" + l + ", ST_MakeEnvelope(" + a.minLon + ", " + a.minLat + ", " + a.maxLon + ", " + a.maxLat + "))" : ""};

    DROP TABLE ${s};

    DESCRIBE ${c};
  `;
}, ap = /* @__PURE__ */ function(e) {
	return e.CAT_ACCENT = "schemeAccent", e.CAT_DARK2 = "schemeDark2", e.CAT_CATEGORY10 = "schemeCategory10", e.CAT_OBSERVABLE10 = "schemeObservable10", e.CAT_PAIRED = "schemePaired", e.CAT_PASTEL1 = "schemePastel1", e.CAT_PASTEL2 = "schemePastel2", e.CAT_SET1 = "schemeSet1", e.CAT_SET2 = "schemeSet2", e.CAT_SET3 = "schemeSet3", e.CAT_TABLEAU10 = "schemeTableau10", e.SEQ_REDS = "interpolateReds", e.SEQ_BLUES = "interpolateBlues", e.SEQ_GREENS = "interpolateGreens", e.SEQ_GREYS = "interpolateGreys", e.SEQ_ORANGES = "interpolateOranges", e.SEQ_PURPLES = "interpolatePurples", e.SEQ_TURBO = "interpolateTurbo", e.SEQ_VIRIDIS = "interpolateViridis", e.SEQ_INFERNO = "interpolateInferno", e.SEQ_MAGMA = "interpolateMagma", e.SEQ_PLASMA = "interpolatePlasma", e.SEQ_CIVIDIS = "interpolateCividis", e.SEQ_WARM = "interpolateWarm", e.SEQ_COOL = "interpolateCool", e.SEQ_CUBEHELIX_DEFAULT = "interpolateCubehelixDefault", e.SEQ_BU_GN = "interpolateBuGn", e.SEQ_BU_PU = "interpolateBuPu", e.SEQ_GN_BU = "interpolateGnBu", e.SEQ_OR_RD = "interpolateOrRd", e.SEQ_PU_BU_GN = "interpolatePuBuGn", e.SEQ_PU_BU = "interpolatePuBu", e.SEQ_PU_RD = "interpolatePuRd", e.SEQ_RD_PU = "interpolateRdPu", e.SEQ_YL_GN_BU = "interpolateYlGnBu", e.SEQ_YL_GN = "interpolateYlGn", e.SEQ_YL_OR_BR = "interpolateYlOrBr", e.SEQ_YL_OR_RD = "interpolateYlOrRd", e.DIV_BR_BG = "interpolateBrBG", e.DIV_PR_GN = "interpolatePRGn", e.DIV_PI_YG = "interpolatePiYG", e.DIV_PU_OR = "interpolatePuOr", e.DIV_RED_BLUE = "interpolateRdBu", e.DIV_RED_GREY = "interpolateRdGy", e.DIV_RED_YELLOW_BLUE = "interpolateRdYlBu", e.DIV_RED_YELLOW_GREEN = "interpolateRdYlGn", e.DIV_SPECTRAL = "interpolateSpectral", e;
}({});
ap.CAT_ACCENT, ap.CAT_DARK2, ap.CAT_CATEGORY10, ap.CAT_OBSERVABLE10, ap.CAT_PAIRED, ap.CAT_PASTEL1, ap.CAT_PASTEL2, ap.CAT_SET1, ap.CAT_SET2, ap.CAT_SET3, ap.CAT_TABLEAU10, ap.DIV_BR_BG, ap.DIV_PR_GN, ap.DIV_PI_YG, ap.DIV_PU_OR, ap.DIV_RED_BLUE, ap.DIV_RED_GREY, ap.DIV_RED_YELLOW_BLUE, ap.DIV_RED_YELLOW_GREEN, ap.DIV_SPECTRAL;
//#endregion
//#region ../autk-core/src/utils-geometry.ts
function op(e, t) {
	let n = e.filter((t, n) => {
		if (n === 0) return !0;
		let r = e[n - 1];
		return t[0] !== r[0] || t[1] !== r[1];
	});
	if (n.length < 2 || t === 0) return [];
	let r = [], i = [];
	for (let e = 0; e < n.length; e++) {
		let a = e > 0 ? n[e - 1] : null, o = n[e], s = e < n.length - 1 ? n[e + 1] : null, c = a ? sp(a, o) : null, l = s ? sp(o, s) : null, u = cp(a, o, s, c, l, t, 1), d = cp(a, o, s, c, l, t, -1);
		r.push(u), i.push(d);
	}
	let a = [...r, ...i.reverse()];
	return a.length > 0 && a.push([a[0][0], a[0][1]]), a;
}
function sp(e, t) {
	let n = t[0] - e[0], r = t[1] - e[1], i = Math.hypot(n, r);
	return i === 0 ? null : [-r / i, n / i];
}
function cp(e, t, n, r, i, a, o) {
	if (!r && !i) return t;
	if (!e || !r) return [t[0] + i[0] * a * o, t[1] + i[1] * a * o];
	if (!n || !i) return [t[0] + r[0] * a * o, t[1] + r[1] * a * o];
	let s = lp([e[0] + r[0] * a * o, e[1] + r[1] * a * o], [t[0] + r[0] * a * o, t[1] + r[1] * a * o], [t[0] + i[0] * a * o, t[1] + i[1] * a * o], [n[0] + i[0] * a * o, n[1] + i[1] * a * o]);
	if (s) return s;
	let c = r[0] + i[0], l = r[1] + i[1], u = Math.hypot(c, l);
	return u === 0 ? [t[0] + i[0] * a * o, t[1] + i[1] * a * o] : [t[0] + c / u * a * o, t[1] + l / u * a * o];
}
function lp(e, t, n, r) {
	let i = e[0], a = e[1], o = t[0], s = t[1], c = n[0], l = n[1], u = r[0], d = r[1], f = (i - o) * (l - d) - (a - s) * (c - u);
	if (Math.abs(f) < 1e-9) return null;
	let p = i * s - a * o, m = c * d - l * u;
	return [(p * (c - u) - (i - o) * m) / f, (p * (l - d) - (a - s) * m) / f];
}
//#endregion
//#region ../node_modules/earcut/src/earcut.js
var up = /* @__PURE__ */ new Set(), dp = !1;
function fp(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length;
	up.size && up.clear();
	let a = pp(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s = 0, c = 0, l = 0;
	if (r && (a = xp(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return hp(a, o, s, c, l), o;
}
function pp(e, t, n, r, i) {
	let a = null;
	if (i === am(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = nm(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = nm(i / r | 0, e[i], e[i + 1], a);
	return a && Yp(a, a.next) && (rm(a), a = a.next), a;
}
function mp(e, t = e) {
	let n = t === e, r = e, i;
	do
		i = !1, r !== r.next && (up.size === 0 || !up.has(r)) && (Yp(r, r.next) || Jp(r.prev, r, r.next) === 0) ? ((n || r === t) && (t = r.prev), dp = !0, rm(r), r = r.prev, i = !0) : (n || r !== t) && (r = r.next, i = !n);
	while (i || r !== t);
	return t;
}
function hp(e, t, n, r, i) {
	i && Vp(e, n, r, i);
	let a = e, o = !1;
	for (; e.prev !== e.next;) {
		let s = e.prev, c = e.next;
		if (Jp(s, e, c) < 0 && (i ? _p(e, n, r, i) : gp(e))) t.push(s.i, e.i, c.i), rm(e), e = c, a = c;
		else if (e = c, e === a) {
			if (dp = !1, e = mp(e), dp) {
				a = e;
				continue;
			}
			if (!o) {
				e = vp(e, t), a = e, o = !0;
				continue;
			}
			yp(e, t, n, r, i);
			break;
		}
	}
}
function gp(e) {
	let t = e.prev, n = e, r = e.next, i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && (i !== m.x || s !== m.y) && Kp(i, s, a, c, o, l, m.x, m.y) && Jp(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function _p(e, t, n, r) {
	let i = e.prev, a = e, o = e.next, s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = Wp(p, m, t, n, r), v = Wp(h, g, t, n, r), y = e.prevZ;
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== o && (s !== y.x || u !== y.y) && Kp(s, u, c, d, l, f, y.x, y.y) && Jp(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	let b = e.nextZ;
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== o && (s !== b.x || u !== b.y) && Kp(s, u, c, d, l, f, b.x, b.y) && Jp(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function vp(e, t) {
	let n = e, r = !1;
	do {
		let i = n.prev, a = n.next.next;
		Xp(i, n, n.next, a, !1) && $p(i, a) && $p(a, i) && (t.push(i.i, n.i, a.i), rm(n), rm(n.next), n = e = a, r = !0), n = n.next;
	} while (n !== e);
	return r ? mp(n) : n;
}
function yp(e, t, n, r, i) {
	let a = e;
	do {
		let e = a.next.next;
		for (; e !== a.prev;) {
			if (a.i !== e.i && qp(a, e)) {
				let o = tm(a, e);
				a = mp(a, a.next), o = mp(o, o.next), hp(a, t, n, r, i), hp(o, t, n, r, i);
				return;
			}
			e = e.next;
		}
		a = a.next;
	} while (a !== e);
}
var bp = !1;
function xp(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = pp(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && up.add(o), i.push(Gp(o));
	}
	i.sort(Sp), kp(e.length / r, t.length), Ap(n, n), bp = !0;
	for (let e = 0; e < i.length; e++) n = Cp(i[e], n);
	return bp = !1, mp(n);
}
function Sp(e, t) {
	return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
}
function Cp(e, t) {
	let n = Pp(e, t);
	if (!n) return t;
	let r = tm(n, e), i = r.next;
	return Ap(n, i.next), mp(r, r.next), mp(n, n.next);
}
var wp = 16, Tp = /* @__PURE__ */ new Float64Array(), Ep = 0, Dp = [], Op = [];
function kp(e, t) {
	let n = Math.ceil((e + 2 * t) / wp) + t + 2;
	Tp.length < n * 4 && (Tp = new Float64Array(n * 4)), Ep = 0;
}
function Ap(e, t) {
	let n = e;
	do {
		let e = Ep++;
		Dp[e] = n;
		let r = n.x, i = n.y, a = n.x, o = n.y, s = 0;
		do {
			let t = n.next;
			n.z = e, t.x < r && (r = t.x), t.x > a && (a = t.x), t.y < i && (i = t.y), t.y > o && (o = t.y), n = t;
		} while (++s < wp && n !== t);
		Op[e] = n;
		let c = e * 4;
		Tp[c] = r, Tp[c + 1] = i, Tp[c + 2] = a, Tp[c + 3] = o;
	} while (n !== t);
}
function jp(e, t) {
	let n = e.z * 4;
	t.x < Tp[n] && (Tp[n] = t.x), t.y < Tp[n + 1] && (Tp[n + 1] = t.y), t.x > Tp[n + 2] && (Tp[n + 2] = t.x), t.y > Tp[n + 3] && (Tp[n + 3] = t.y);
}
function Mp(e) {
	let t = Op[e];
	for (; t.prev.next !== t;) t = t.next;
	return Op[e] = t, t;
}
function Np(e) {
	let t = Dp[e];
	for (; t.prev.next !== t;) t = t.next;
	return Dp[e] = t, t;
}
function Pp(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (Yp(e, n)) return n;
	for (let t = 0, s = 0; t < Ep; t++, s += 4) {
		if (i < Tp[s + 1] || i > Tp[s + 3] || Tp[s] > r || Tp[s + 2] <= a) continue;
		let c = Mp(t);
		n = Np(t);
		do {
			if (n.prev.next === n) {
				if (Yp(e, n.next)) return n.next;
				if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
					let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
					if (e <= r && e > a && (a = e, o = n.x < n.next.x ? n : n.next, e === r)) return o;
				}
			}
			n = n.next;
		} while (n !== c);
	}
	if (!o) return null;
	let s = o.x, c = o.y, l = Math.min(i, c), u = Math.max(i, c), d = Infinity;
	for (let t = 0, f = 0; t < Ep; t++, f += 4) {
		if (Tp[f + 2] < s || Tp[f] > r || Tp[f + 3] < l || Tp[f + 1] > u) continue;
		let p = Mp(t);
		n = Np(t);
		do {
			if (n.prev.next === n && r >= n.x && n.x >= s && r !== n.x && Kp(i < c ? r : a, i, s, c, i < c ? a : r, i, n.x, n.y)) {
				let t = Math.abs(i - n.y) / (r - n.x);
				($p(n, e) || n.y === i && n.next.y === i && n.next.x > r) && (t < d || t === d && (n.x > o.x || n.x === o.x && Fp(o, n))) && (o = n, d = t);
			}
			n = n.next;
		} while (n !== p);
	}
	return o;
}
function Fp(e, t) {
	return Jp(e.prev, e, t.prev) < 0 && Jp(t.next, e, e.next) < 0;
}
var Ip = [], Lp = [], Rp = /* @__PURE__ */ new Uint32Array(), zp = /* @__PURE__ */ new Uint32Array(), Bp = /* @__PURE__ */ new Uint32Array(256);
function Vp(e, t, n, r) {
	let i = e, a = 0;
	do
		i.z = Wp(i.x, i.y, t, n, r), Ip[a++] = i, i = i.next;
	while (i !== e);
	Hp(a);
	let o = null;
	for (let e = 0; e < a; e++) {
		let t = Ip[e];
		t.prevZ = o, o && (o.nextZ = t), o = t;
	}
	o.nextZ = null, Ip.fill(null, 0, a), Lp.fill(null, 0, a);
}
function Hp(e) {
	if (e <= 32) for (let t = 1; t < e; t++) {
		let e = Ip[t], n = e.z, r = t - 1;
		for (; r >= 0 && Ip[r].z > n;) Ip[r + 1] = Ip[r], r--;
		Ip[r + 1] = e;
	}
	else {
		Rp.length < e && (Rp = new Uint32Array(e), zp = new Uint32Array(e), Lp = Array(e));
		for (let t = 0; t < e; t++) Rp[t] = Ip[t].z;
		Up(e, Ip, Rp, Lp, zp, 0), Up(e, Lp, zp, Ip, Rp, 8), Up(e, Ip, Rp, Lp, zp, 16), Up(e, Lp, zp, Ip, Rp, 24);
	}
}
function Up(e, t, n, r, i, a) {
	Bp.fill(0);
	for (let t = 0; t < e; t++) Bp[n[t] >>> a & 255]++;
	let o = 0;
	for (let e = 0; e < 256; e++) {
		let t = Bp[e];
		Bp[e] = o, o += t;
	}
	for (let o = 0; o < e; o++) {
		let e = n[o], s = Bp[e >>> a & 255]++;
		r[s] = t[o], i[s] = e;
	}
}
function Wp(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Gp(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function Kp(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function qp(e, t) {
	let n = Yp(e, t) && Jp(e.prev, e, e.next) > 0 && Jp(t.prev, t, t.next) > 0;
	return e.next.i !== t.i && (n || $p(e, t) && $p(t, e) && (Jp(e.prev, e, t.prev) !== 0 || Jp(e, t.prev, t) !== 0)) && !Qp(e, t) && (n || em(e, t));
}
function Jp(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Yp(e, t) {
	return e.x === t.x && e.y === t.y;
}
function Xp(e, t, n, r, i = !0) {
	let a = Jp(e, t, n), o = Jp(e, t, r), s = Jp(n, r, e), c = Jp(n, r, t);
	return (a > 0 && o < 0 || a < 0 && o > 0) && (s > 0 && c < 0 || s < 0 && c > 0) ? !0 : i ? !!(a === 0 && Zp(e, n, t) || o === 0 && Zp(e, r, t) || s === 0 && Zp(n, e, r) || c === 0 && Zp(n, t, r)) : !1;
}
function Zp(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function Qp(e, t) {
	let n = Math.min(e.x, t.x), r = Math.max(e.x, t.x), i = Math.min(e.y, t.y), a = Math.max(e.y, t.y), o = e;
	do {
		let s = o.next;
		if (o.x > r && s.x > r || o.x < n && s.x < n || o.y > a && s.y > a || o.y < i && s.y < i) o = s;
		else {
			if (o.i !== e.i && s.i !== e.i && o.i !== t.i && s.i !== t.i && Xp(o, s, e, t)) return !0;
			o = s;
		}
	} while (o !== e);
	return !1;
}
function $p(e, t) {
	return Jp(e.prev, e, e.next) < 0 ? Jp(e, t, e.next) >= 0 && Jp(e, e.prev, t) >= 0 : Jp(e, t, e.prev) < 0 || Jp(e, e.next, t) < 0;
}
function em(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do {
		let e = n.next;
		n.y > a != e.y > a && i < (e.x - n.x) * (a - n.y) / (e.y - n.y) + n.x && (r = !r), n = e;
	} while (n !== e);
	return r;
}
function tm(e, t) {
	let n = im(e.i, e.x, e.y), r = im(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function nm(e, t, n, r) {
	let i = im(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function rm(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), bp && jp(e.prev, e.next);
}
function im(e, t, n) {
	return {
		i: e,
		x: t,
		y: n,
		prev: null,
		next: null,
		z: 0,
		prevZ: null,
		nextZ: null
	};
}
function am(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
(class e {
	static {
		this.offset = 5;
	}
	static {
		this.ROAD_HALF_WIDTH_BY_HIGHWAY = {
			motorway: 10,
			motorway_link: 3.5,
			trunk: 8,
			trunk_link: 3.5,
			primary: 6,
			primary_link: 3,
			secondary: 5,
			secondary_link: 2.5,
			tertiary: 4,
			tertiary_link: 2,
			unclassified: 3.5,
			residential: 3.5,
			service: 2.5,
			living_street: 2.5,
			road: 3.5,
			track: 1.5,
			path: .75
		};
	}
	static {
		this.DEFAULT_ROAD_HALF_WIDTH = 3.5;
	}
	static {
		this.defaultOffsetResolver = (t, n) => e.offset;
	}
	static buildMesh(t, n, r = e.defaultOffsetResolver) {
		let i = [], a = [], o = t.features, s;
		for (let t = 0; t < o.length; t++) {
			let c = o[t];
			if (!c.geometry) {
				e.warnSkippedFeature(t, null);
				continue;
			}
			let l = r(c, t), u = Number.isFinite(l) && l > 0 ? l : e.offset;
			if (c.geometry.type === "LineString") s = e.lineStringToPolyline(c, n, u);
			else if (c.geometry.type === "MultiLineString") s = e.multiLineStringToPolyline(c, n, u);
			else if (c.geometry.type === "GeometryCollection") s = e.geometryCollectionToPolyline(c, n, u, t);
			else {
				e.warnSkippedFeature(t, c.geometry.type);
				continue;
			}
			let d = 0, f = 0;
			for (let e of s) i.push({
				position: new Float32Array(e.flatCoords),
				indices: new Uint32Array(e.flatIds),
				featureIndex: t
			}), d += e.flatCoords.length / 2, f += e.flatIds.length / 3;
			a.push({
				nPoints: d,
				nTriangles: f,
				featureIndex: t,
				featureId: c.id
			});
		}
		return [i, a];
	}
	static lineStringToPolyline(e, t, n) {
		let r = op(e.geometry.coordinates.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
		if (r.length < 4) return [];
		let i = fp(r.flat());
		return [{
			flatCoords: r.map((e) => [e[0], e[1]]).flat(),
			flatIds: i
		}];
	}
	static multiLineStringToPolyline(e, t, n) {
		let { coordinates: r } = e.geometry, i = [];
		for (let e of r) {
			let r = op(e.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
			if (r.length < 4) continue;
			let a = fp(r.flat()), o = r.map((e) => [e[0], e[1]]).flat();
			i.push({
				flatCoords: o,
				flatIds: a
			});
		}
		return i;
	}
	static geometryCollectionToPolyline(t, n, r, i) {
		let { geometries: a } = t.geometry, o = [];
		for (let s of a) {
			let a = {
				...t,
				geometry: s
			};
			s.type === "LineString" ? o.push(...e.lineStringToPolyline(a, n, r)) : s.type === "MultiLineString" ? o.push(...e.multiLineStringToPolyline(a, n, r)) : e.warnSkippedGeometryCollectionChild(i, s.type);
		}
		return o;
	}
	static resolveRoadHalfWidth(t) {
		let n = e.normalizeRoadHighwayValue(t.properties?.highway);
		return n ? e.ROAD_HALF_WIDTH_BY_HIGHWAY[n] ?? e.DEFAULT_ROAD_HALF_WIDTH : e.DEFAULT_ROAD_HALF_WIDTH;
	}
	static normalizeRoadHighwayValue(e) {
		let t = Array.isArray(e) ? e : typeof e == "string" ? e.split(";") : [];
		for (let e of t) {
			if (typeof e != "string") continue;
			let t = e.trim().toLowerCase();
			if (t.length > 0) return t;
		}
		return null;
	}
	static warnSkippedFeature(e, t) {
		console.warn(`[autk-core] TriangulatorPolylines skipped feature ${e}: expected LineString or MultiLineString geometry, got ${t ?? "null"}.`);
	}
	static warnSkippedGeometryCollectionChild(e, t) {
		console.warn(`[autk-core] TriangulatorPolylines skipped GeometryCollection child in feature ${e}: expected LineString or MultiLineString geometry, got ${t}.`);
	}
});
//#endregion
//#region ../autk-core/src/building-feature.ts
function om(e) {
	let t = e.geometry, n = `Building ${String(e.id ?? "(without id)")}`;
	if (!t) throw Error(`${n}: missing geometry`);
	let r = t.type === "GeometryCollection" ? t.geometries : [t];
	for (let e of r) {
		if (e.type === "GeometryCollection") throw Error(`${n}: nested GeometryCollection is not supported`);
		if (![
			"Polygon",
			"MultiPolygon",
			"LineString",
			"MultiLineString"
		].includes(e.type)) throw Error(`${n}: unsupported part geometry ${e.type}`);
	}
	let i = e.properties?.parts ?? [];
	if (!Array.isArray(i)) throw Error(`${n}: parts must be an array`);
	let a = i.some((e) => e && typeof e == "object" && "geometryIndex" in e), o = /* @__PURE__ */ new Set(), s = i.map((e, t) => {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`${n}: invalid part metadata at index ${t}`);
		let i = a ? e.geometryIndex : t;
		if (!Number.isInteger(i) || i < 0 || i >= r.length || o.has(i)) throw Error(`${n}: invalid or duplicate geometryIndex ${String(i)}`);
		return o.add(i), {
			...e,
			geometryIndex: i
		};
	});
	return {
		...e,
		geometry: {
			type: "GeometryCollection",
			geometries: r
		},
		properties: {
			...e.properties,
			parts: s
		}
	};
}
var sm = typeof Float32Array < "u" ? Float32Array : Array;
//#endregion
//#region ../node_modules/gl-matrix/esm/mat4.js
function cm() {
	var e = new sm(16);
	return sm != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function lm(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function um(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = n[0], b = n[1], x = n[2], S = n[3];
	return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e;
}
function dm(e, t, n, r, i) {
	var a = 1 / Math.tan(t / 2);
	if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
		var o = 1 / (r - i);
		e[10] = i * o, e[14] = i * r * o;
	} else e[10] = -1, e[14] = -r;
	return e;
}
function fm(e, t, n, r, i, a, o) {
	var s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
	return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = a * l, e[15] = 1, e;
}
function pm(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p, m = t[0], h = t[1], g = t[2], _ = r[0], v = r[1], y = r[2], b = n[0], x = n[1], S = n[2];
	return Math.abs(m - b) < 1e-6 && Math.abs(h - x) < 1e-6 && Math.abs(g - S) < 1e-6 ? lm(e) : (u = m - b, d = h - x, f = g - S, p = 1 / Math.sqrt(u * u + d * d + f * f), u *= p, d *= p, f *= p, i = v * f - y * d, a = y * u - _ * f, o = _ * d - v * u, p = Math.sqrt(i * i + a * a + o * o), p ? (p = 1 / p, i *= p, a *= p, o *= p) : (i = 0, a = 0, o = 0), s = d * o - f * a, c = f * i - u * o, l = u * a - d * i, p = Math.sqrt(s * s + c * c + l * l), p ? (p = 1 / p, s *= p, c *= p, l *= p) : (s = 0, c = 0, l = 0), e[0] = i, e[1] = s, e[2] = u, e[3] = 0, e[4] = a, e[5] = c, e[6] = d, e[7] = 0, e[8] = o, e[9] = l, e[10] = f, e[11] = 0, e[12] = -(i * m + a * h + o * g), e[13] = -(s * m + c * h + l * g), e[14] = -(u * m + d * h + f * g), e[15] = 1, e);
}
var mm = um;
//#endregion
//#region ../node_modules/gl-matrix/esm/vec3.js
function hm() {
	var e = new sm(3);
	return sm != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function gm(e) {
	var t = e[0], n = e[1], r = e[2];
	return Math.sqrt(t * t + n * n + r * r);
}
function _m(e, t, n) {
	var r = new sm(3);
	return r[0] = e, r[1] = t, r[2] = n, r;
}
function vm(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e;
}
function ym(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e;
}
function bm(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function xm(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e;
}
function Sm(e, t) {
	var n = t[0], r = t[1], i = t[2], a = n * n + r * r + i * i;
	return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e;
}
function Cm(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2];
	return e[0] = i * c - a * s, e[1] = a * o - r * c, e[2] = r * s - i * o, e;
}
function wm(e, t, n, r) {
	var i = [], a = [];
	return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), a[2] = i[2], e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e;
}
var Tm = ym;
(function() {
	var e = hm();
	return function(t, n, r, i, a, o) {
		var s, c;
		for (n ||= 3, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
		return t;
	};
})(), class e {
	static {
		this.defaultParams = {
			up: [
				0,
				1,
				0
			],
			eye: [
				0,
				0,
				1e4
			],
			lookAt: [
				0,
				0,
				0
			]
		};
	}
	constructor(t = e.defaultParams) {
		this.wEye = hm(), this.wLookAt = hm(), this.wEyeDir = hm(), this.wUp = hm(), this.wNear = 0, this.wFar = 0, this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = cm(), this.mViewMatrix = cm(), this.viewportWidth = 0, this.viewportHeight = 0, this.resetCamera(t.up, t.lookAt, t.eye);
	}
	resetCamera(e, t, n) {
		this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = cm(), this.mViewMatrix = cm(), this.wNear = 1, this.wFar = 5e5, this.wLookAt = _m(t[0], t[1], t[2]), this.wEye = _m(n[0], n[1], n[2]), this.updateEyeDirAndLen(), this.wUp = _m(e[0], e[1], e[2]);
	}
	getProjectionMatrix() {
		return this.mProjectionMatrix;
	}
	getEye() {
		return [
			this.wEye[0],
			this.wEye[1],
			this.wEye[2]
		];
	}
	getLookAt() {
		return [
			this.wLookAt[0],
			this.wLookAt[1],
			this.wLookAt[2]
		];
	}
	getUp() {
		return [
			this.wUp[0],
			this.wUp[1],
			this.wUp[2]
		];
	}
	getFovyRadians() {
		return this.fovy;
	}
	getNear() {
		return this.wNear;
	}
	getFar() {
		return this.wFar;
	}
	getViewportHeight() {
		return this.viewportHeight;
	}
	getViewportWidth() {
		return this.viewportWidth;
	}
	getViewProjectionMatrix() {
		return new Float32Array(mm(cm(), this.mProjectionMatrix, this.mViewMatrix));
	}
	getWorldRayDirection(e, t) {
		let n = this.screenCoordToWorldDir(e, t);
		return [
			n[0],
			n[1],
			n[2]
		];
	}
	setOrthographicBounds(e, t, n, r) {
		lm(this.mViewMatrix), fm(this.mProjectionMatrix, e, t, n, r, 0, -100), this.wEye = _m((e + t) * .5, (n + r) * .5, 100), this.wLookAt = _m((e + t) * .5, (n + r) * .5, 0), this.wUp = _m(0, 1, 0), this.updateEyeDirAndLen();
	}
	getModelViewMatrix() {
		return this.mViewMatrix;
	}
	resize(e, t) {
		this.viewportWidth = e, this.viewportHeight = t, this.update();
	}
	zoom(e, t, n) {
		let r = Math.max(Math.abs(this.wEye[2]), 1) * .2;
		e = -e * r;
		let i = this.screenCoordToWorldDir(t, n);
		xm(this.wEye, this.wEye, i, e), xm(this.wLookAt, this.wEye, this.wEyeDir, gm(this.wEyeDir));
	}
	translate(e, t) {
		let n = this.wEye[2], r = hm();
		Sm(r, Cm(r, this.wEyeDir, this.wUp));
		let i = vm(hm(), bm(hm(), r, e * n), bm(hm(), this.wUp, t * n));
		vm(this.wEye, this.wEye, i), xm(this.wLookAt, this.wEye, this.wEyeDir, gm(this.wEyeDir));
	}
	yaw(e) {
		wm(this.wEyeDir, this.wEyeDir, _m(0, 0, 0), e), wm(this.wUp, this.wUp, _m(0, 0, 0), e), xm(this.wLookAt, this.wEye, this.wEyeDir, gm(this.wEyeDir));
	}
	pitch(e) {
		e = -e, vm(this.wEyeDir, bm(hm(), this.wUp, Math.sin(e)), bm(hm(), this.wEyeDir, Math.cos(e))), Sm(this.wEyeDir, this.wEyeDir), xm(this.wLookAt, this.wEye, this.wEyeDir, gm(this.wEyeDir)), Cm(this.wUp, Cm(hm(), this.wEyeDir, this.wUp), this.wEyeDir), Sm(this.wUp, this.wUp);
	}
	getZoomScale() {
		return Math.max(Math.abs(this.wEye[2]), 1) / 1e4;
	}
	update() {
		let e = this.viewportWidth / this.viewportHeight;
		pm(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp), dm(this.mProjectionMatrix, this.fovy, e, this.wFar, this.wNear);
	}
	static buildViewProjection(e) {
		let t = pm(cm(), e.eye, e.lookAt, e.up), n = dm(cm(), e.fovDeg * (Math.PI / 180), e.aspect, e.near, e.far);
		return new Float32Array(mm(cm(), n, t));
	}
	screenCoordToWorldDir(e, t) {
		let n = hm();
		Sm(n, Cm(n, this.wEyeDir, this.wUp));
		let r = bm(hm(), this.wUp, Math.tan(this.fovy / 2) * (t - .5) * 2), i = this.viewportWidth / this.viewportHeight, a = bm(hm(), n, Math.tan(this.fovy / 2) * (e - .5) * 2 * i), o = vm(hm(), r, a), s = vm(hm(), this.wEyeDir, o);
		return Sm(s, s), s;
	}
	updateEyeDirAndLen() {
		this.wEyeDir = hm(), Tm(this.wEyeDir, this.wLookAt, this.wEye), Sm(this.wEyeDir, this.wEyeDir);
	}
};
//#endregion
//#region ../node_modules/quickselect/index.js
function Em(e, t, n = 0, r = e.length - 1, i = Om) {
	for (; r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1);
			Em(e, t, Math.max(n, Math.floor(t - o * c / a + l)), Math.min(r, Math.floor(t + (a - o) * c / a + l)), i);
		}
		let a = e[t], o = n, s = r;
		for (Dm(e, n, t), i(e[r], a) > 0 && Dm(e, n, r); o < s;) {
			for (Dm(e, o, s), o++, s--; i(e[o], a) < 0;) o++;
			for (; i(e[s], a) > 0;) s--;
		}
		i(e[n], a) === 0 ? Dm(e, n, s) : (s++, Dm(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
}
function Dm(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
function Om(e, t) {
	return e < t ? -1 : +(e > t);
}
//#endregion
//#region ../node_modules/rbush/index.js
var km = class {
	constructor(e = 9) {
		this._maxEntries = Math.max(4, e), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * .4)), this.clear();
	}
	all() {
		return this._all(this.data, []);
	}
	search(e) {
		let t = this.data, n = [];
		if (!Vm(e, t)) return n;
		let r = this.toBBox, i = [];
		for (; t;) {
			for (let a = 0; a < t.children.length; a++) {
				let o = t.children[a], s = t.leaf ? r(o) : o;
				Vm(e, s) && (t.leaf ? n.push(o) : Bm(e, s) ? this._all(o, n) : i.push(o));
			}
			t = i.pop();
		}
		return n;
	}
	collides(e) {
		let t = this.data;
		if (!Vm(e, t)) return !1;
		let n = [];
		for (; t;) {
			for (let r = 0; r < t.children.length; r++) {
				let i = t.children[r], a = t.leaf ? this.toBBox(i) : i;
				if (Vm(e, a)) {
					if (t.leaf || Bm(e, a)) return !0;
					n.push(i);
				}
			}
			t = n.pop();
		}
		return !1;
	}
	load(e) {
		if (!(e && e.length)) return this;
		if (e.length < this._minEntries) {
			for (let t = 0; t < e.length; t++) this.insert(e[t]);
			return this;
		}
		let t = this._build(e.slice(), 0, e.length - 1, 0);
		if (!this.data.children.length) this.data = t;
		else if (this.data.height === t.height) this._splitRoot(this.data, t);
		else {
			if (this.data.height < t.height) {
				let e = this.data;
				this.data = t, t = e;
			}
			this._insert(t, this.data.height - t.height - 1, !0);
		}
		return this;
	}
	insert(e) {
		return e && this._insert(e, this.data.height - 1), this;
	}
	clear() {
		return this.data = Hm([]), this;
	}
	remove(e, t) {
		if (!e) return this;
		let n = this.data, r = this.toBBox(e), i = [], a = [], o, s, c;
		for (; n || i.length;) {
			if (n || (n = i.pop(), s = i[i.length - 1], o = a.pop(), c = !0), n.leaf) {
				let r = Am(e, n.children, t);
				if (r !== -1) return n.children.splice(r, 1), i.push(n), this._condense(i), this;
			}
			!c && !n.leaf && Bm(n, r) ? (i.push(n), a.push(o), o = 0, s = n, n = n.children[0]) : s ? (o++, n = s.children[o], c = !1) : n = null;
		}
		return this;
	}
	toBBox(e) {
		return e;
	}
	compareMinX(e, t) {
		return e.minX - t.minX;
	}
	compareMinY(e, t) {
		return e.minY - t.minY;
	}
	toJSON() {
		return this.data;
	}
	fromJSON(e) {
		return this.data = e, this;
	}
	_all(e, t) {
		let n = [];
		for (; e;) e.leaf ? t.push(...e.children) : n.push(...e.children), e = n.pop();
		return t;
	}
	_build(e, t, n, r) {
		let i = n - t + 1, a = this._maxEntries, o;
		if (i <= a) return o = Hm(e.slice(t, n + 1)), jm(o, this.toBBox), o;
		r || (r = Math.ceil(Math.log(i) / Math.log(a)), a = Math.ceil(i / a ** (r - 1))), o = Hm([]), o.leaf = !1, o.height = r;
		let s = Math.ceil(i / a), c = s * Math.ceil(Math.sqrt(a));
		Um(e, t, n, c, this.compareMinX);
		for (let i = t; i <= n; i += c) {
			let t = Math.min(i + c - 1, n);
			Um(e, i, t, s, this.compareMinY);
			for (let n = i; n <= t; n += s) {
				let i = Math.min(n + s - 1, t);
				o.children.push(this._build(e, n, i, r - 1));
			}
		}
		return jm(o, this.toBBox), o;
	}
	_chooseSubtree(e, t, n, r) {
		for (; r.push(t), !(t.leaf || r.length - 1 === n);) {
			let n = Infinity, r = Infinity, i;
			for (let a = 0; a < t.children.length; a++) {
				let o = t.children[a], s = Im(o), c = Rm(e, o) - s;
				c < r ? (r = c, n = s < n ? s : n, i = o) : c === r && s < n && (n = s, i = o);
			}
			t = i || t.children[0];
		}
		return t;
	}
	_insert(e, t, n) {
		let r = n ? e : this.toBBox(e), i = [], a = this._chooseSubtree(r, this.data, t, i);
		for (a.children.push(e), Nm(a, r); t >= 0 && i[t].children.length > this._maxEntries;) this._split(i, t), t--;
		this._adjustParentBBoxes(r, i, t);
	}
	_split(e, t) {
		let n = e[t], r = n.children.length, i = this._minEntries;
		this._chooseSplitAxis(n, i, r);
		let a = this._chooseSplitIndex(n, i, r), o = Hm(n.children.splice(a, n.children.length - a));
		o.height = n.height, o.leaf = n.leaf, jm(n, this.toBBox), jm(o, this.toBBox), t ? e[t - 1].children.push(o) : this._splitRoot(n, o);
	}
	_splitRoot(e, t) {
		this.data = Hm([e, t]), this.data.height = e.height + 1, this.data.leaf = !1, jm(this.data, this.toBBox);
	}
	_chooseSplitIndex(e, t, n) {
		let r, i = Infinity, a = Infinity;
		for (let o = t; o <= n - t; o++) {
			let t = Mm(e, 0, o, this.toBBox), s = Mm(e, o, n, this.toBBox), c = zm(t, s), l = Im(t) + Im(s);
			c < i ? (i = c, r = o, a = l < a ? l : a) : c === i && l < a && (a = l, r = o);
		}
		return r || n - t;
	}
	_chooseSplitAxis(e, t, n) {
		let r = e.leaf ? this.compareMinX : Pm, i = e.leaf ? this.compareMinY : Fm;
		this._allDistMargin(e, t, n, r) < this._allDistMargin(e, t, n, i) && e.children.sort(r);
	}
	_allDistMargin(e, t, n, r) {
		e.children.sort(r);
		let i = this.toBBox, a = Mm(e, 0, t, i), o = Mm(e, n - t, n, i), s = Lm(a) + Lm(o);
		for (let r = t; r < n - t; r++) {
			let t = e.children[r];
			Nm(a, e.leaf ? i(t) : t), s += Lm(a);
		}
		for (let r = n - t - 1; r >= t; r--) {
			let t = e.children[r];
			Nm(o, e.leaf ? i(t) : t), s += Lm(o);
		}
		return s;
	}
	_adjustParentBBoxes(e, t, n) {
		for (let r = n; r >= 0; r--) Nm(t[r], e);
	}
	_condense(e) {
		for (let t = e.length - 1, n; t >= 0; t--) e[t].children.length === 0 ? t > 0 ? (n = e[t - 1].children, n.splice(n.indexOf(e[t]), 1)) : this.clear() : jm(e[t], this.toBBox);
	}
};
function Am(e, t, n) {
	if (!n) return t.indexOf(e);
	for (let r = 0; r < t.length; r++) if (n(e, t[r])) return r;
	return -1;
}
function jm(e, t) {
	Mm(e, 0, e.children.length, t, e);
}
function Mm(e, t, n, r, i) {
	i ||= Hm(null), i.minX = Infinity, i.minY = Infinity, i.maxX = -Infinity, i.maxY = -Infinity;
	for (let a = t; a < n; a++) {
		let t = e.children[a];
		Nm(i, e.leaf ? r(t) : t);
	}
	return i;
}
function Nm(e, t) {
	return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function Pm(e, t) {
	return e.minX - t.minX;
}
function Fm(e, t) {
	return e.minY - t.minY;
}
function Im(e) {
	return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function Lm(e) {
	return e.maxX - e.minX + (e.maxY - e.minY);
}
function Rm(e, t) {
	return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function zm(e, t) {
	let n = Math.max(e.minX, t.minX), r = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), a = Math.min(e.maxY, t.maxY);
	return Math.max(0, i - n) * Math.max(0, a - r);
}
function Bm(e, t) {
	return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function Vm(e, t) {
	return t.minX <= e.maxX && t.minY <= e.maxY && t.maxX >= e.minX && t.maxY >= e.minY;
}
function Hm(e) {
	return {
		children: e,
		height: 1,
		leaf: !0,
		minX: Infinity,
		minY: Infinity,
		maxX: -Infinity,
		maxY: -Infinity
	};
}
function Um(e, t, n, r, i) {
	let a = [t, n];
	for (; a.length;) {
		if (n = a.pop(), t = a.pop(), n - t <= r) continue;
		let o = t + Math.ceil((n - t) / r / 2) * r;
		Em(e, o, t, n, i), a.push(t, o, o, n);
	}
}
//#endregion
//#region ../autk-core/src/utils-geojson.ts
function Wm(e) {
	return typeof e == "object" && !!e && "type" in e && e.type === "FeatureCollection" && "features" in e && Array.isArray(e.features);
}
function Gm(e) {
	let t = e.map((e, t) => ({
		...e,
		__idx: t
	})).filter((e) => e.geometry != null), n = t.length;
	if (n === 0) return /* @__PURE__ */ new Map();
	let r = Array(n).fill(0).map((e, t) => t), i = (e) => r[e] === e ? e : r[e] = i(r[e]), a = (e, t) => {
		let n = i(e), a = i(t);
		n !== a && (r[a] = n);
	}, o = new km(), s = Array(n);
	for (let e = 0; e < n; e++) {
		let [n, r, i, a] = _e(t[e].geometry);
		s[e] = {
			minX: n,
			minY: r,
			maxX: i,
			maxY: a,
			idx: e
		};
	}
	o.load(s);
	for (let e = 0; e < n; e++) {
		let n = s[e], r = o.search(n);
		for (let n of r) {
			let r = n.idx;
			if (!(r <= e)) try {
				Gt(t[e].geometry, t[r].geometry) && a(e, r);
			} catch {}
		}
	}
	let c = /* @__PURE__ */ new Map(), l = 0, u = /* @__PURE__ */ new Map();
	for (let e = 0; e < n; e++) {
		let n = i(e);
		c.has(n) || c.set(n, l++);
		let r = c.get(n), a = String(t[e].id);
		u.set(a, r);
	}
	return u;
}
//#endregion
//#region ../autk-core/src/utils-layer.ts
function Km(e) {
	switch (e) {
		case "Point":
		case "MultiPoint": return "points";
		case "LineString":
		case "MultiLineString": return "polylines";
		case "Polygon":
		case "MultiPolygon":
		case "GeometryCollection": return "polygons";
	}
}
//#endregion
//#region src/use-cases/load-geojson/use-case.ts
var qm = class {
	db;
	conn;
	constructor(e, t) {
		this.db = e, this.conn = t;
	}
	async exec({ geojsonFileUrl: e, geojsonObject: t, outputTableName: n, coordinateFormat: r, boundingBox: i, workspace: a = l, layerType: o, workspaceCoordinateFormat: s = d }) {
		if (!e && !t) throw Error("Either geojsonFileUrl or geojsonObject must be provided");
		if (e && t) throw Error("Cannot provide both geojsonFileUrl and geojsonObject. Please provide only one.");
		let c;
		if (e) {
			let t = await fetch(e);
			if (!t.ok) throw Error(`HTTP error! Error to load ${e}! Status: ${t.status}`);
			c = await t.json();
		} else c = t;
		if (c.type !== "FeatureCollection") throw Error("Invalid GeoJSON type! Just accepting FeatureCollection for now!");
		if (!c.features || c.features.length === 0) throw Error("FeatureCollection is empty - no features found");
		let u = c.features[0];
		if (!u.geometry || !u.geometry.type) throw Error("First feature has no geometry or geometry type");
		let f = o ?? Km(u.geometry.type), p = /* @__PURE__ */ new Set(), m = new Set(c.features.filter((e) => e.id != null).map((e) => JSON.stringify(e.id))), h = c.features.map((e, t) => {
			let n = e.id ?? `autk-feature-${t}`;
			if (e.id == null) for (; m.has(JSON.stringify(n)) || p.has(JSON.stringify(n));) n = `${n}-generated`;
			if (typeof n != "string" && typeof n != "number" || typeof n == "number" && !Number.isFinite(n)) throw Error(`Invalid GeoJSON feature ID at index ${t}`);
			let r = JSON.stringify(n);
			if (p.has(r)) throw Error(`Duplicate GeoJSON feature ID: ${r}`);
			p.add(r);
			let i = {
				...e,
				id: n
			};
			return f === "buildings" ? om(i) : i;
		});
		c = {
			...c,
			features: h
		};
		let g = r || "EPSG:4326";
		return {
			source: "geojson",
			type: f,
			columns: dn((await this.createTableFromFeatureCollection(c, n, g, s, a, i, f !== "buildings")).toArray()),
			name: n
		};
	}
	async createTableFromFeatureCollection(e, t, n, r, i, a, o = !0) {
		let s = `temp_geojson_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.json`;
		await this.db.registerFileText(s, JSON.stringify(e));
		let c = `${t}_feature_collection_${Date.now()}`;
		try {
			if (!o) {
				let e = (await this.conn.query(np(s))).toArray()[0];
				if (e) throw Error(`Building ${e.id} has invalid geometry; original coordinates were not changed`);
			}
			return await this.conn.query(rp(s, c, i)), await this.conn.query(ip(c, t, n, r, i, a, o));
		} finally {
			try {
				await this.conn.query(`DROP TABLE IF EXISTS ${i}.${c}`);
			} finally {
				await this.db.dropFile(s);
			}
		}
	}
};
//#endregion
//#region ../node_modules/@petamoriken/float16/src/_util/primordials.mjs
function Jm(e) {
	return (t, ...n) => Xm(e, t, n);
}
function Ym(e, t) {
	return Jm(eh(e, t).get);
}
var { apply: Xm, construct: Zm, defineProperty: Qm, get: $m, getOwnPropertyDescriptor: eh, getPrototypeOf: th, has: nh, ownKeys: rh, set: ih, setPrototypeOf: ah } = Reflect, { EPSILON: oh, MAX_SAFE_INTEGER: sh, isFinite: ch, isNaN: lh } = Number, { iterator: uh, species: dh, toStringTag: fh, for: ph } = Symbol, mh = Object, { create: hh, defineProperty: gh, freeze: _h, is: vh } = mh, yh = mh.prototype;
yh.__lookupGetter__ && yh.__lookupGetter__, mh.hasOwn || yh.hasOwnProperty;
var bh = Array;
bh.isArray;
var xh = bh.prototype;
xh.join, xh.push, xh.toLocaleString;
var Sh = xh[uh], Ch = Jm(Sh), { abs: wh, trunc: Th } = Math, Eh = ArrayBuffer;
Eh.isView;
var Dh = Eh.prototype;
Dh.slice, Ym(Dh, "byteLength");
var Oh = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
Oh && Ym(Oh.prototype, "byteLength");
var kh = th(Uint8Array);
kh.from;
var Ah = kh.prototype;
Ah[uh], Ah.keys, Ah.values, Ah.entries, Ah.set, Ah.reverse, Ah.fill, Ah.copyWithin, Ah.sort, Ah.slice, Ah.subarray, Ym(Ah, "buffer"), Ym(Ah, "byteOffset"), Ym(Ah, "length"), Ym(Ah, fh);
var jh = Uint8Array, Mh = Uint16Array, Nh = Uint32Array, Ph = Float32Array, Fh = th([][uh]()), Ih = Jm(Fh.next), Lh = Jm((function* () {})().next), Rh = th(Fh), zh = DataView.prototype, Bh = Jm(zh.getUint16);
zh.setUint16;
var Vh = WeakSet.prototype;
Vh.add, Vh.has;
var Hh = WeakMap, Uh = Hh.prototype, Wh = Jm(Uh.get);
Uh.has;
var Gh = Jm(Uh.set), Kh = new Hh(), qh = hh(null, {
	next: { value: function() {
		return Ih(Wh(Kh, this));
	} },
	[uh]: { value: function() {
		return this;
	} }
});
function Jh(e) {
	if (e[uh] === Sh && Fh.next === Ih) return e;
	let t = hh(qh);
	return Gh(Kh, t, Ch(e)), t;
}
var Yh = new Hh(), Xh = hh(Rh, { next: {
	value: function() {
		return Lh(Wh(Yh, this));
	},
	writable: !0,
	configurable: !0
} });
for (let e of rh(Fh)) e !== "next" && gh(Xh, e, eh(Fh, e));
//#endregion
//#region ../node_modules/@petamoriken/float16/src/_util/converter.mjs
var Zh = 1 / oh, Qh = 6103515625e-14, $h = .0009765625;
$h * Qh, $h * Zh;
var eg = new Eh(4), tg = new Ph(eg), ng = new Nh(eg), rg = new Mh(512), ig = new jh(512);
for (let e = 0; e < 256; ++e) {
	let t = e - 127;
	t < -24 ? (rg[e] = 0, rg[e | 256] = 32768, ig[e] = 24, ig[e | 256] = 24) : t < -14 ? (rg[e] = 1024 >> -t - 14, rg[e | 256] = 1024 >> -t - 14 | 32768, ig[e] = -t - 1, ig[e | 256] = -t - 1) : t <= 15 ? (rg[e] = t + 15 << 10, rg[e | 256] = t + 15 << 10 | 32768, ig[e] = 13, ig[e | 256] = 13) : t < 128 ? (rg[e] = 31744, rg[e | 256] = 64512, ig[e] = 24, ig[e | 256] = 24) : (rg[e] = 31744, rg[e | 256] = 64512, ig[e] = 13, ig[e | 256] = 13);
}
var ag = new Nh(2048);
for (let e = 1; e < 1024; ++e) {
	let t = e << 13, n = 0;
	for (; !(t & 8388608);) t <<= 1, n -= 8388608;
	t &= -8388609, n += 947912704, ag[e] = t | n;
}
for (let e = 1024; e < 2048; ++e) ag[e] = 939524096 + (e - 1024 << 13);
var og = new Nh(64);
for (let e = 1; e < 31; ++e) og[e] = e << 23;
og[31] = 1199570944, og[32] = 2147483648;
for (let e = 33; e < 63; ++e) og[e] = 2147483648 + (e - 32 << 23);
og[63] = 3347054592;
var sg = new Mh(64);
for (let e = 1; e < 64; ++e) e !== 32 && (sg[e] = 1024);
function cg(e) {
	let t = e >> 10;
	return ng[0] = ag[sg[t] + (e & 1023)] + og[t], tg[0];
}
//#endregion
//#region ../node_modules/@petamoriken/float16/src/DataView.mjs
function lg(e, t, ...n) {
	return cg(Bh(e, t, ...Jh(n)));
}
//#endregion
//#region ../node_modules/xml-utils/get-attribute.mjs
function ug(e, t, n) {
	let r = n && n.debug || !1;
	r && console.log("[xml-utils] getting " + t + " in " + e);
	let i = typeof e == "object" ? e.outer : e, a = i.slice(0, i.indexOf(">") + 1), o = ["\"", "'"];
	for (let e = 0; e < o.length; e++) {
		let n = o[e], i = t + "\\=" + n + "([^" + n + "]*)" + n;
		r && console.log("[xml-utils] pattern:", i);
		let s = new RegExp(i).exec(a);
		if (r && console.log("[xml-utils] match:", s), s) return s[1];
	}
}
//#endregion
//#region ../node_modules/xml-utils/index-of-match.mjs
function dg(e, t, n) {
	let r = new RegExp(t).exec(e.slice(n));
	return r ? n + r.index : -1;
}
//#endregion
//#region ../node_modules/xml-utils/index-of-match-end.mjs
function fg(e, t, n) {
	let r = new RegExp(t).exec(e.slice(n));
	return r ? n + r.index + r[0].length - 1 : -1;
}
//#endregion
//#region ../node_modules/xml-utils/count-substring.mjs
function pg(e, t) {
	let n = new RegExp(t, "g"), r = e.match(n);
	return r ? r.length : 0;
}
//#endregion
//#region ../node_modules/xml-utils/find-tag-by-name.mjs
function mg(e, t, n) {
	let r = n && n.debug || !1, i = !(n && typeof n.nested === !1), a = n && n.startIndex || 0;
	r && console.log("[xml-utils] starting findTagByName with", t, " and ", n);
	let o = dg(e, `\<${t}[ \n\>\/]`, a);
	if (r && console.log("[xml-utils] start:", o), o === -1) return;
	let s = e.slice(o + t.length), c = fg(s, "^[^<]*[ /]>", 0), l = c !== -1 && s[c - 1] === "/";
	if (r && console.log("[xml-utils] selfClosing:", l), l === !1) {
		if (i) {
			let e = 0, n = 1, r = 0;
			for (; (c = fg(s, "[ /]" + t + ">", e)) !== -1;) {
				let i = s.substring(e, c + 1);
				if (n += pg(i, "<" + t + "[ \n	>]"), r += pg(i, "</" + t + ">"), r >= n) break;
				e = c;
			}
		} else c = fg(s, "[ /]" + t + ">", 0);
	}
	let u = o + t.length + c + 1;
	if (r && console.log("[xml-utils] end:", u), u === -1) return;
	let d = e.slice(o, u), f;
	return f = l ? null : d.slice(d.indexOf(">") + 1, d.lastIndexOf("<")), {
		inner: f,
		outer: d,
		start: o,
		end: u
	};
}
//#endregion
//#region ../node_modules/xml-utils/find-tags-by-name.mjs
function hg(e, t, n) {
	let r = [], i = n && n.debug || !1, a = n && typeof n.nested == "boolean" ? n.nested : !0, o = n && n.startIndex || 0, s;
	for (; s = mg(e, t, {
		debug: i,
		startIndex: o
	});) o = a ? s.start + 1 + t.length : s.end, r.push(s);
	return i && console.log("findTagsByName found", r.length, "tags"), r;
}
//#endregion
//#region ../node_modules/geotiff/dist-module/rgb.js
function gg(e, t) {
	let { width: n, height: r } = e, i = new Uint8Array(n * r * 3), a;
	for (let n = 0, r = 0; n < e.length; ++n, r += 3) a = 256 - e[n] / t * 256, i[r] = a, i[r + 1] = a, i[r + 2] = a;
	return i;
}
function _g(e, t) {
	let { width: n, height: r } = e, i = new Uint8Array(n * r * 3), a;
	for (let n = 0, r = 0; n < e.length; ++n, r += 3) a = e[n] / t * 256, i[r] = a, i[r + 1] = a, i[r + 2] = a;
	return i;
}
function vg(e, t) {
	let { width: n, height: r } = e, i = new Uint8Array(n * r * 3), a = t.length / 3, o = t.length / 3 * 2;
	for (let n = 0, r = 0; n < e.length; ++n, r += 3) {
		let s = e[n];
		i[r] = t[s] / 65536 * 256, i[r + 1] = t[s + a] / 65536 * 256, i[r + 2] = t[s + o] / 65536 * 256;
	}
	return i;
}
function yg(e) {
	let { width: t, height: n } = e, r = new Uint8Array(t * n * 3);
	for (let t = 0, n = 0; t < e.length; t += 4, n += 3) {
		let i = e[t], a = e[t + 1], o = e[t + 2], s = e[t + 3];
		r[n] = 255 * ((255 - i) / 256) * ((255 - s) / 256), r[n + 1] = 255 * ((255 - a) / 256) * ((255 - s) / 256), r[n + 2] = 255 * ((255 - o) / 256) * ((255 - s) / 256);
	}
	return r;
}
function bg(e) {
	let { width: t, height: n } = e, r = new Uint8ClampedArray(t * n * 3);
	for (let t = 0, n = 0; t < e.length; t += 3, n += 3) {
		let i = e[t], a = e[t + 1], o = e[t + 2];
		r[n] = i + 1.402 * (o - 128), r[n + 1] = i - .34414 * (a - 128) - .71414 * (o - 128), r[n + 2] = i + 1.772 * (a - 128);
	}
	return r;
}
var xg = .95047, Sg = 1, Cg = 1.08883;
function wg(e) {
	let { width: t, height: n } = e, r = new Uint8Array(t * n * 3);
	for (let t = 0, n = 0; t < e.length; t += 3, n += 3) {
		let i = e[t + 0], a = e[t + 1] << 24 >> 24, o = e[t + 2] << 24 >> 24, s = (i + 16) / 116, c = a / 500 + s, l = s - o / 200, u, d, f;
		c = xg * (c * c * c > .008856 ? c * c * c : (c - 16 / 116) / 7.787), s = Sg * (s * s * s > .008856 ? s * s * s : (s - 16 / 116) / 7.787), l = Cg * (l * l * l > .008856 ? l * l * l : (l - 16 / 116) / 7.787), u = c * 3.2406 + s * -1.5372 + l * -.4986, d = c * -.9689 + s * 1.8758 + l * .0415, f = c * .0557 + s * -.204 + l * 1.057, u = u > .0031308 ? 1.055 * u ** (1 / 2.4) - .055 : 12.92 * u, d = d > .0031308 ? 1.055 * d ** (1 / 2.4) - .055 : 12.92 * d, f = f > .0031308 ? 1.055 * f ** (1 / 2.4) - .055 : 12.92 * f, r[n] = Math.max(0, Math.min(1, u)) * 255, r[n + 1] = Math.max(0, Math.min(1, d)) * 255, r[n + 2] = Math.max(0, Math.min(1, f)) * 255;
	}
	return r;
}
//#endregion
//#region ../node_modules/geotiff/dist-module/compression/index.js
var Tg = /* @__PURE__ */ new Map();
async function Eg(e) {
	let t = !e.hasTag("StripOffsets");
	return {
		tileWidth: t ? await e.loadValue("TileWidth") : await e.loadValue("ImageWidth"),
		tileHeight: t ? await e.loadValue("TileLength") : await e.loadValue("RowsPerStrip") || await e.loadValue("ImageLength"),
		planarConfiguration: await e.loadValue("PlanarConfiguration"),
		bitsPerSample: await e.loadValue("BitsPerSample"),
		predictor: await e.loadValue("Predictor") || 1
	};
}
function Dg(e, t, n = Eg, r = !0) {
	Array.isArray(e) || (e = [e]), e.forEach((e) => {
		Tg.set(e, {
			importFn: t,
			decoderParameterFn: n,
			preferWorker: r
		});
	});
}
async function Og(e, t) {
	if (!Tg.has(e)) throw Error(`Unknown compression method identifier: ${e}`);
	let { decoderParameterFn: n } = Tg.get(e);
	return n(t);
}
async function kg(e, t) {
	if (!Tg.has(e)) throw Error(`Unknown compression method identifier: ${e}`);
	let { importFn: n } = Tg.get(e);
	return new (await (n()))(t);
}
var Ag = [
	{
		cases: [void 0, 1],
		importFn: () => import("./raw-CNcwZ0is.js").then((e) => e.default),
		preferWorker: !1
	},
	{
		cases: 5,
		importFn: () => import("./lzw-BF8U7Q_5.js").then((e) => e.default)
	},
	{
		cases: 6,
		importFn: () => {
			throw Error("old style JPEG compression is not supported.");
		}
	},
	{
		cases: 7,
		importFn: () => import("./jpeg-Dy2XzdIQ.js").then((e) => e.default),
		decoderParameterFn: async (e) => ({
			...await Eg(e),
			JPEGTables: await e.loadValue("JPEGTables")
		})
	},
	{
		cases: [8, 32946],
		importFn: () => import("./deflate-B86QzlYN.js").then((e) => e.default)
	},
	{
		cases: 32773,
		importFn: () => import("./packbits-BzvSNjld.js").then((e) => e.default)
	},
	{
		cases: 34887,
		importFn: () => import("./lerc-Df5Xl_Ap.js").then(async (e) => (await e.zstd.init(), e)).then((e) => e.default),
		decoderParameterFn: async (e) => ({
			...await Eg(e),
			LercParameters: await e.loadValue("LercParameters")
		})
	},
	{
		cases: 5e4,
		importFn: () => import("./zstd-CHwjMBSb.js").then(async (e) => (await e.zstd.init(), e)).then((e) => e.default)
	},
	{
		cases: 50001,
		importFn: () => import("./webimage-CG9lPt4C.js").then((e) => e.default),
		decoderParameterFn: async (e) => ({
			...await Eg(e),
			samplesPerPixel: Number(await e.loadValue("SamplesPerPixel")) || 4
		}),
		preferWorker: !1
	}
];
for (let e of Ag) {
	let { cases: t, importFn: n, decoderParameterFn: r, preferWorker: i } = e;
	Dg(t, n, r, i);
}
//#endregion
//#region ../node_modules/geotiff/dist-module/resample.js
function jg(e, t, n, r = 1) {
	return new (Object.getPrototypeOf(e)).constructor(t * n * r);
}
function Mg(e, t, n, r, i) {
	let a = t / r, o = n / i;
	return e.map((e) => {
		let s = jg(e, r, i);
		for (let c = 0; c < i; ++c) {
			let i = Math.min(Math.round(o * c), n - 1);
			for (let n = 0; n < r; ++n) {
				let o = Math.min(Math.round(a * n), t - 1), l = e[i * t + o];
				s[c * r + n] = l;
			}
		}
		return s;
	});
}
function Ng(e, t, n) {
	return (1 - n) * e + n * t;
}
function Pg(e, t, n, r, i) {
	let a = t / r, o = n / i;
	return e.map((e) => {
		let s = jg(e, r, i);
		for (let c = 0; c < i; ++c) {
			let i = o * c, l = Math.floor(i), u = Math.min(Math.ceil(i), n - 1);
			for (let n = 0; n < r; ++n) {
				let o = a * n, d = o % 1, f = Math.floor(o), p = Math.min(Math.ceil(o), t - 1), m = e[l * t + f], h = e[l * t + p], g = e[u * t + f], _ = e[u * t + p], v = Ng(Ng(m, h, d), Ng(g, _, d), i % 1);
				s[c * r + n] = v;
			}
		}
		return s;
	});
}
function Fg(e, t, n, r, i, a = "nearest") {
	switch (a.toLowerCase()) {
		case "nearest": return Mg(e, t, n, r, i);
		case "bilinear":
		case "linear": return Pg(e, t, n, r, i);
		default: throw Error(`Unsupported resampling method: '${a}'`);
	}
}
function Ig(e, t, n, r, i, a) {
	let o = t / r, s = n / i, c = jg(e, r, i, a);
	for (let l = 0; l < i; ++l) {
		let i = Math.min(Math.round(s * l), n - 1);
		for (let n = 0; n < r; ++n) {
			let s = Math.min(Math.round(o * n), t - 1);
			for (let o = 0; o < a; ++o) {
				let u = e[i * t * a + s * a + o];
				c[l * r * a + n * a + o] = u;
			}
		}
	}
	return c;
}
function Lg(e, t, n, r, i, a) {
	let o = t / r, s = n / i, c = jg(e, r, i, a);
	for (let l = 0; l < i; ++l) {
		let i = s * l, u = Math.floor(i), d = Math.min(Math.ceil(i), n - 1);
		for (let n = 0; n < r; ++n) {
			let s = o * n, f = s % 1, p = Math.floor(s), m = Math.min(Math.ceil(s), t - 1);
			for (let o = 0; o < a; ++o) {
				let s = e[u * t * a + p * a + o], h = e[u * t * a + m * a + o], g = e[d * t * a + p * a + o], _ = e[d * t * a + m * a + o], v = Ng(Ng(s, h, f), Ng(g, _, f), i % 1);
				c[l * r * a + n * a + o] = v;
			}
		}
	}
	return c;
}
function Rg(e, t, n, r, i, a, o = "nearest") {
	switch (o.toLowerCase()) {
		case "nearest": return Ig(e, t, n, r, i, a);
		case "bilinear":
		case "linear": return Lg(e, t, n, r, i, a);
		default: throw Error(`Unsupported resampling method: '${o}'`);
	}
}
//#endregion
//#region ../node_modules/geotiff/dist-module/geotiffimage.js
function zg(e, t, n) {
	let r = 0;
	for (let i = t; i < n; ++i) r += e[i];
	return r;
}
function Bg(e, t, n) {
	let r;
	switch (e) {
		case 1:
			t <= 8 ? r = Uint8Array : t <= 16 ? r = Uint16Array : t <= 32 && (r = Uint32Array);
			break;
		case 2:
			t === 8 ? r = Int8Array : t === 16 ? r = Int16Array : t === 32 && (r = Int32Array);
			break;
		case 3: switch (t) {
			case 16:
			case 32:
				r = Float32Array;
				break;
			case 64: r = Float64Array;
		}
	}
	if (r && (typeof n == "number" || n instanceof ArrayBuffer)) return new r(n);
	throw Error("Unsupported data format/bitsPerSample");
}
function Vg(e, t) {
	return !((e === 1 || e === 2) && t <= 32 && t % 8 == 0 || e === 3 && (t === 16 || t === 32 || t === 64));
}
function Hg(e, t, n, r, i, a, o) {
	let s = new DataView(e), c = n === 2 ? o * a : o * a * r, l = n === 2 ? 1 : r, u = Bg(t, i, c), d = parseInt("1".repeat(i), 2);
	if (t === 1) {
		let e;
		e = n === 1 ? r * i : i;
		let t = a * e;
		t & 7 && (t = t + 7 & -8);
		for (let e = 0; e < o; ++e) {
			let n = e * t;
			for (let t = 0; t < a; ++t) {
				let r = n + t * l * i;
				for (let n = 0; n < l; ++n) {
					let o = r + n * i, c = (e * a + t) * l + n, f = Math.floor(o / 8), p = o % 8;
					u[c] = p + i <= 8 ? s.getUint8(f) >> 8 - i - p & d : p + i <= 16 ? s.getUint16(f) >> 16 - i - p & d : p + i <= 24 ? (s.getUint16(f) << 8 | s.getUint8(f + 2)) >> 24 - i - p & d : s.getUint32(f) >> 32 - i - p & d;
				}
			}
		}
	}
	return u.buffer;
}
var Ug = class {
	constructor(e, t, n, r) {
		this.fileDirectory = e, this.littleEndian = t, this.tiles = n ? [] : null, this.isTiled = !e.hasTag("StripOffsets");
		let i = e.getValue("PlanarConfiguration") ?? 1;
		if (i !== 1 && i !== 2) throw Error("Invalid planar configuration.");
		this.planarConfiguration = i, this.source = r;
	}
	getFileDirectory() {
		return this.fileDirectory;
	}
	getGeoKeys() {
		return this.fileDirectory.parseGeoKeyDirectory();
	}
	getWidth() {
		return this.fileDirectory.getValue("ImageWidth") || 0;
	}
	getHeight() {
		return this.fileDirectory.getValue("ImageLength") || 0;
	}
	getSamplesPerPixel() {
		return this.fileDirectory.getValue("SamplesPerPixel") ?? 1;
	}
	getTileWidth() {
		return this.isTiled ? this.fileDirectory.getValue("TileWidth") || 0 : this.getWidth();
	}
	getTileHeight() {
		if (this.isTiled) return this.fileDirectory.getValue("TileLength") || 0;
		let e = this.fileDirectory.hasTag("RowsPerStrip") && this.fileDirectory.getValue("RowsPerStrip");
		return e ? Math.min(e, this.getHeight()) : this.getHeight();
	}
	getBlockWidth() {
		return this.getTileWidth();
	}
	getBlockHeight(e) {
		return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
	}
	getBytesPerPixel() {
		let e = 0, t = this.fileDirectory.getValue("BitsPerSample") || [];
		for (let n = 0; n < t.length; ++n) e += this.getSampleByteSize(n);
		return e;
	}
	getSampleByteSize(e) {
		let t = this.fileDirectory.getValue("BitsPerSample") || [];
		if (e >= t.length) throw RangeError(`Sample index ${e} is out of range.`);
		return Math.ceil(t[e] / 8);
	}
	getReaderForSample(e) {
		let t = this.fileDirectory.getValue("SampleFormat"), n = t ? t[e] : 1, r = (this.fileDirectory.getValue("BitsPerSample") || [])[e];
		switch (n) {
			case 1:
				if (r <= 8) return DataView.prototype.getUint8;
				if (r <= 16) return DataView.prototype.getUint16;
				if (r <= 32) return DataView.prototype.getUint32;
				break;
			case 2:
				if (r <= 8) return DataView.prototype.getInt8;
				if (r <= 16) return DataView.prototype.getInt16;
				if (r <= 32) return DataView.prototype.getInt32;
				break;
			case 3: switch (r) {
				case 16: return function(e, t) {
					return lg(this, e, t);
				};
				case 32: return DataView.prototype.getFloat32;
				case 64: return DataView.prototype.getFloat64;
			}
		}
		throw Error("Unsupported data format/bitsPerSample");
	}
	getSampleFormat(e = 0) {
		let t = this.fileDirectory.getValue("SampleFormat");
		return t ? t[e] : 1;
	}
	getBitsPerSample(e = 0) {
		let t = this.fileDirectory.getValue("BitsPerSample");
		return t ? t[e] : 0;
	}
	getArrayForSample(e, t) {
		return Bg(this.getSampleFormat(e), this.getBitsPerSample(e), t);
	}
	async getTileOrStrip(e, t, n, r, i) {
		let a = Math.ceil(this.getWidth() / this.getTileWidth()), o = Math.ceil(this.getHeight() / this.getTileHeight()), s, { tiles: c } = this;
		if (this.planarConfiguration === 1 ? s = t * a + e : this.planarConfiguration === 2 && (s = n * a * o + t * a + e), s === void 0) throw Error("Could not determine tile or strip index.");
		let l, u;
		if (this.isTiled ? (l = Number(await this.fileDirectory.loadValueIndexed("TileOffsets", s)), u = Number(await this.fileDirectory.loadValueIndexed("TileByteCounts", s))) : (l = Number(await this.fileDirectory.loadValueIndexed("StripOffsets", s)), u = Number(await this.fileDirectory.loadValueIndexed("StripByteCounts", s))), u === 0) {
			let r = this.getBlockHeight(t) * this.getTileWidth(), i = this.planarConfiguration === 2 ? this.getSampleByteSize(n) : this.getBytesPerPixel(), a = new ArrayBuffer(r * i);
			return this.getArrayForSample(n, a).fill(this.getGDALNoData() || 0), {
				x: e,
				y: t,
				sample: n,
				data: a
			};
		}
		let d = (await this.source.fetch([{
			offset: l,
			length: u
		}], i))[0], f;
		return c === null || !c[s] ? (f = (async () => {
			let e = await r.decode(d), n = this.getSampleFormat(), i = this.getBitsPerSample();
			return Vg(n, i) && (e = Hg(e, n, this.planarConfiguration, this.getSamplesPerPixel(), i, this.getTileWidth(), this.getBlockHeight(t))), e;
		})(), c !== null && (c[s] = f)) : f = c[s], {
			x: e,
			y: t,
			sample: n,
			data: await f
		};
	}
	async _readRaster(e, t, n, r, i, a, o, s, c) {
		let l = this.getTileWidth(), u = this.getTileHeight(), d = this.getWidth(), f = this.getHeight(), p = Math.max(Math.floor(e[0] / l), 0), m = Math.min(Math.ceil(e[2] / l), Math.ceil(d / l)), h = Math.max(Math.floor(e[1] / u), 0), g = Math.min(Math.ceil(e[3] / u), Math.ceil(f / u)), _ = e[2] - e[0], v = this.getBytesPerPixel(), y = [], b = [];
		for (let e = 0; e < t.length; ++e) {
			if (this.planarConfiguration === 1) {
				let n = await this.fileDirectory.loadValue("BitsPerSample");
				if (typeof n != "object") throw Error("Expected BitsPerSample to be an array or typed array.");
				y.push(zg(n, 0, t[e]) / 8);
			} else y.push(0);
			b.push(this.getReaderForSample(t[e]));
		}
		let x = [], { littleEndian: S } = this;
		for (let a = h; a < g; ++a) for (let o = p; o < m; ++o) {
			let s;
			this.planarConfiguration === 1 && (s = this.getTileOrStrip(o, a, 0, i, c));
			for (let p = 0; p < t.length; ++p) {
				let m = p, h = t[p];
				if (this.planarConfiguration === 2 && (v = this.getSampleByteSize(h), s = this.getTileOrStrip(o, a, h, i, c)), !s) throw Error("Could not get tile or strip data.");
				let g = s.then((i) => {
					let a = i.data, o = new DataView(a), s = this.getBlockHeight(i.y), c = i.y * u, p = i.x * l, h = c + s, g = (i.x + 1) * l, x = b[m], C = Math.min(s, s - (h - e[3]), f - c), w = Math.min(l, l - (g - e[2]), d - p);
					for (let i = Math.max(0, e[1] - c); i < C; ++i) for (let a = Math.max(0, e[0] - p); a < w; ++a) {
						let s = (i * l + a) * v, u = x.call(o, s + y[m], S), d;
						r ? (d = (i + c - e[1]) * _ * t.length + (a + p - e[0]) * t.length + m, n[d] = u) : (d = (i + c - e[1]) * _ + a + p - e[0], n[m][d] = u);
					}
				});
				x.push(g);
			}
		}
		if (await Promise.all(x), a && e[2] - e[0] !== a || o && e[3] - e[1] !== o) {
			let i;
			i = r ? Rg(n, e[2] - e[0], e[3] - e[1], a, o, t.length, s) : Fg(n, e[2] - e[0], e[3] - e[1], a, o, s);
			let c = i;
			return c.width = a ?? e[2] - e[0], c.height = o ?? e[3] - e[1], c;
		}
		let C = n;
		return C.width = a || e[2] - e[0], C.height = o || e[3] - e[1], C;
	}
	async readRasters(e = {}) {
		let { window: t, samples: n = [], pool: r = null, width: i, height: a, resampleMethod: o, fillValue: s, signal: c } = e, l = "interleave" in e && e.interleave, u = t || [
			0,
			0,
			this.getWidth(),
			this.getHeight()
		];
		if (u[0] > u[2] || u[1] > u[3]) throw Error("Invalid subsets");
		let d = (u[2] - u[0]) * (u[3] - u[1]), f = this.getSamplesPerPixel();
		if (!n || !n.length) for (let e = 0; e < f; ++e) n.push(e);
		else for (let e = 0; e < n.length; ++e) if (n[e] >= f) return Promise.reject(/* @__PURE__ */ RangeError(`Invalid sample index '${n[e]}'.`));
		let p;
		if (l) {
			let { fileDirectory: e } = this, t = e.getValue("SampleFormat"), r = t ? Math.max.apply(null, Array.from(t)) : 1;
			if (r !== 1 && r !== 2 && r !== 3) throw Error("Unsupported sample format for interleaved data. Must be 1, 2, or 3.");
			let i = e.getValue("BitsPerSample");
			if (p = Bg(r, i ? Math.max.apply(null, Array.from(i)) : 8, d * n.length), s) {
				if (Array.isArray(s)) throw Error("When reading interleaved data, fillValue must be a single number.");
				p.fill(s);
			}
		} else {
			p = [];
			for (let e = 0; e < n.length; ++e) {
				let t = this.getArrayForSample(n[e], d);
				Array.isArray(s) && e < s.length ? t.fill(s[e]) : s && !Array.isArray(s) && t.fill(s), p.push(t);
			}
		}
		let m = this.fileDirectory.getValue("Compression") || 1, h = await Og(m, this.fileDirectory), g = r ? r.bindParameters(m, h) : await kg(m, h);
		return await this._readRaster(u, n, p, l, g, i, a, o, c);
	}
	async readRGB(e = {}) {
		let { window: t, pool: n = null, width: r, height: i, resampleMethod: a, enableAlpha: c = !1, signal: l } = e, u = ("interleave" in e && e.interleave) ?? !1, d = t || [
			0,
			0,
			this.getWidth(),
			this.getHeight()
		];
		if (d[0] > d[2] || d[1] > d[3]) throw Error("Invalid subsets");
		let f = this.fileDirectory.getValue("PhotometricInterpretation");
		if (f === o.RGB) {
			let e = [
				0,
				1,
				2
			], o = this.fileDirectory.getValue("ExtraSamples");
			if (o && o[0] !== s.Unspecified && c) {
				e = [];
				let t = this.fileDirectory.getValue("BitsPerSample") || [];
				for (let n = 0; n < t.length; n += 1) e.push(n);
			}
			return this.readRasters({
				window: t,
				interleave: u,
				samples: e,
				pool: n,
				width: r,
				height: i,
				resampleMethod: a,
				signal: l
			});
		}
		let p;
		switch (f) {
			case o.WhiteIsZero:
			case o.BlackIsZero:
			case o.Palette:
				p = [0];
				break;
			case o.CMYK:
				p = [
					0,
					1,
					2,
					3
				];
				break;
			case o.YCbCr:
			case o.CIELab:
				p = [
					0,
					1,
					2
				];
				break;
			default: throw Error("Invalid or unsupported photometric interpretation.");
		}
		let m = {
			window: d,
			interleave: !0,
			samples: p,
			pool: n,
			width: r,
			height: i,
			resampleMethod: a,
			signal: l
		}, { fileDirectory: h } = this, g = await this.readRasters(m), _ = 2 ** this.getBitsPerSample(0), v;
		switch (f) {
			case o.WhiteIsZero:
				v = gg(g, _);
				break;
			case o.BlackIsZero:
				v = _g(g, _);
				break;
			case o.Palette:
				v = vg(g, await h.loadValue("ColorMap"));
				break;
			case o.CMYK:
				v = yg(g);
				break;
			case o.YCbCr:
				v = bg(g);
				break;
			case o.CIELab:
				v = wg(g);
				break;
			default: throw Error("Unsupported photometric interpretation.");
		}
		if (!u) {
			let e = new Uint8Array(v.length / 3), t = new Uint8Array(v.length / 3), n = new Uint8Array(v.length / 3);
			for (let r = 0, i = 0; r < v.length; r += 3, ++i) e[i] = v[r], t[i] = v[r + 1], n[i] = v[r + 2];
			v = [
				e,
				t,
				n
			];
		}
		let y = v;
		return y.width = g.width, y.height = g.height, y;
	}
	async getTiePoints() {
		if (!this.fileDirectory.hasTag("ModelTiepoint")) return [];
		let e = await this.fileDirectory.loadValue("ModelTiepoint");
		if (typeof e != "object") throw Error("Expected ModelTiepoint to be an array or typed array.");
		let t = [];
		for (let n = 0; n < e.length; n += 6) t.push({
			i: e[n],
			j: e[n + 1],
			k: e[n + 2],
			x: e[n + 3],
			y: e[n + 4],
			z: e[n + 5]
		});
		return t;
	}
	async getGDALMetadata(e = null) {
		let t = {};
		if (!this.fileDirectory.hasTag("GDAL_METADATA")) return null;
		let n = hg(await this.fileDirectory.loadValue("GDAL_METADATA"), "Item");
		n = e === null ? n.filter((e) => ug(e, "sample") === void 0) : n.filter((t) => Number(ug(t, "sample")) === e);
		for (let e = 0; e < n.length; ++e) {
			let r = n[e];
			t[ug(r, "name")] = r.inner;
		}
		return t;
	}
	getGDALNoData() {
		let e = this.fileDirectory.hasTag("GDAL_NODATA") && this.fileDirectory.getValue("GDAL_NODATA");
		return e ? Number(e.substring(0, e.length - 1)) : null;
	}
	getOrigin() {
		let e = this.fileDirectory.getValue("ModelTiepoint"), t = this.fileDirectory.getValue("ModelTransformation");
		if (e && e.length === 6) return [
			e[3],
			e[4],
			e[5]
		];
		if (t) return [
			t[3],
			t[7],
			t[11]
		];
		throw Error("The image does not have an affine transformation.");
	}
	getResolution(e = null) {
		let t = this.fileDirectory.getValue("ModelPixelScale"), n = this.fileDirectory.getValue("ModelTransformation");
		if (t) return [
			t[0],
			-t[1],
			t[2]
		];
		if (n) return n[1] === 0 && n[4] === 0 ? [
			n[0],
			-n[5],
			n[10]
		] : [
			Math.sqrt(n[0] * n[0] + n[4] * n[4]),
			-Math.sqrt(n[1] * n[1] + n[5] * n[5]),
			n[10]
		];
		if (e) {
			let [t, n, r] = e.getResolution();
			return [
				t * e.getWidth() / this.getWidth(),
				n * e.getHeight() / this.getHeight(),
				r * e.getWidth() / this.getWidth()
			];
		}
		throw Error("The image does not have an affine transformation.");
	}
	pixelIsArea() {
		return this.getGeoKeys()?.GTRasterTypeGeoKey === 1;
	}
	getBoundingBox(e = !1) {
		let t = this.getHeight(), n = this.getWidth(), r = this.fileDirectory.getValue("ModelTransformation");
		if (r && !e) {
			let [e, i, , a, o, s, , c] = r, l = [
				[0, 0],
				[0, t],
				[n, 0],
				[n, t]
			].map(([t, n]) => [a + e * t + i * n, c + o * t + s * n]), u = l.map((e) => e[0]), d = l.map((e) => e[1]);
			return [
				Math.min(...u),
				Math.min(...d),
				Math.max(...u),
				Math.max(...d)
			];
		}
		{
			let e = this.getOrigin(), r = this.getResolution(), i = e[0], a = e[1], o = i + r[0] * n, s = a + r[1] * t;
			return [
				Math.min(i, o),
				Math.min(a, s),
				Math.max(i, o),
				Math.max(a, s)
			];
		}
	}
}, Wg = class {
	constructor(e) {
		this._dataView = new DataView(e);
	}
	get buffer() {
		return this._dataView.buffer;
	}
	getUint64(e, t) {
		let n = this.getUint32(e, t), r = this.getUint32(e + 4, t), i;
		if (t) {
			if (i = n + 2 ** 32 * r, !Number.isSafeInteger(i)) throw Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
			return i;
		}
		if (i = 2 ** 32 * n + r, !Number.isSafeInteger(i)) throw Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
		return i;
	}
	getInt64(e, t) {
		let n = 0, r = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0, i = !0;
		for (let a = 0; a < 8; a++) {
			let o = this._dataView.getUint8(e + (t ? a : 7 - a));
			r && (i ? o !== 0 && (o = ~(o - 1) & 255, i = !1) : o = ~o & 255), n += o * 256 ** a;
		}
		return r && (n = -n), n;
	}
	getUint8(e) {
		return this._dataView.getUint8(e);
	}
	getInt8(e) {
		return this._dataView.getInt8(e);
	}
	getUint16(e, t) {
		return this._dataView.getUint16(e, t);
	}
	getInt16(e, t) {
		return this._dataView.getInt16(e, t);
	}
	getUint32(e, t) {
		return this._dataView.getUint32(e, t);
	}
	getInt32(e, t) {
		return this._dataView.getInt32(e, t);
	}
	getFloat16(e, t) {
		return lg(this._dataView, e, t);
	}
	getFloat32(e, t) {
		return this._dataView.getFloat32(e, t);
	}
	getFloat64(e, t) {
		return this._dataView.getFloat64(e, t);
	}
}, Gg = class {
	constructor(e, t, n, r) {
		this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = n, this._bigTiff = r;
	}
	get sliceOffset() {
		return this._sliceOffset;
	}
	get sliceTop() {
		return this._sliceOffset + this.buffer.byteLength;
	}
	get littleEndian() {
		return this._littleEndian;
	}
	get bigTiff() {
		return this._bigTiff;
	}
	get buffer() {
		return this._dataView.buffer;
	}
	covers(e, t) {
		return this.sliceOffset <= e && this.sliceTop >= e + t;
	}
	readUint8(e) {
		return this._dataView.getUint8(e - this._sliceOffset);
	}
	readInt8(e) {
		return this._dataView.getInt8(e - this._sliceOffset);
	}
	readUint16(e) {
		return this._dataView.getUint16(e - this._sliceOffset, this._littleEndian);
	}
	readInt16(e) {
		return this._dataView.getInt16(e - this._sliceOffset, this._littleEndian);
	}
	readUint32(e) {
		return this._dataView.getUint32(e - this._sliceOffset, this._littleEndian);
	}
	readInt32(e) {
		return this._dataView.getInt32(e - this._sliceOffset, this._littleEndian);
	}
	readFloat32(e) {
		return this._dataView.getFloat32(e - this._sliceOffset, this._littleEndian);
	}
	readFloat64(e) {
		return this._dataView.getFloat64(e - this._sliceOffset, this._littleEndian);
	}
	readUint64(e) {
		let t = this.readUint32(e), n = this.readUint32(e + 4), r;
		if (this._littleEndian) {
			if (r = t + 2 ** 32 * n, !Number.isSafeInteger(r)) throw Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
			return r;
		}
		if (r = 2 ** 32 * t + n, !Number.isSafeInteger(r)) throw Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
		return r;
	}
	readInt64(e) {
		let t = 0, n = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0, r = !0;
		for (let i = 0; i < 8; i++) {
			let a = this._dataView.getUint8(e + (this._littleEndian ? i : 7 - i));
			n && (r ? a !== 0 && (a = ~(a - 1) & 255, r = !1) : a = ~a & 255), t += a * 256 ** i;
		}
		return n && (t = -t), t;
	}
	readOffset(e) {
		return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
	}
}, Kg = class {
	async fetch(e, t) {
		return Promise.all(e.map(async (e) => (await this.fetchSlice(e, t)).data));
	}
	async fetchSlice(e, t) {
		throw Error(`fetching of slice ${e} not possible, not implemented`);
	}
	get fileSize() {
		return null;
	}
	async close() {}
}, qg = class e extends Error {
	constructor(...t) {
		super(...t), Error.captureStackTrace && Error.captureStackTrace(this, e), this.name = "AbortError", this.signal = void 0;
	}
}, Jg = class extends Kg {
	constructor(e) {
		super(), this.arrayBuffer = e;
	}
	fetchSlice(e, t) {
		if (t && t.aborted) throw new qg("Request aborted");
		return Promise.resolve({
			data: this.arrayBuffer.slice(e.offset, e.offset + e.length),
			offset: e.offset,
			length: e.length
		});
	}
};
function Yg(e) {
	return new Jg(e);
}
//#endregion
//#region ../node_modules/geotiff/dist-module/imagefiledirectory.js
function Xg(e, t) {
	switch (e) {
		case r.BYTE:
		case r.ASCII:
		case r.UNDEFINED: return new Uint8Array(t);
		case r.SBYTE: return new Int8Array(t);
		case r.SHORT: return new Uint16Array(t);
		case r.SSHORT: return new Int16Array(t);
		case r.LONG:
		case r.IFD: return new Uint32Array(t);
		case r.SLONG: return new Int32Array(t);
		case r.LONG8:
		case r.IFD8: return Array(t);
		case r.SLONG8: return Array(t);
		case r.RATIONAL: return new Uint32Array(t * 2);
		case r.SRATIONAL: return new Int32Array(t * 2);
		case r.FLOAT: return new Float32Array(t);
		case r.DOUBLE: return new Float64Array(t);
		default: throw RangeError(`Invalid field type: ${e}`);
	}
}
function Zg(e, t) {
	switch (t) {
		case r.BYTE:
		case r.ASCII:
		case r.UNDEFINED: return e.readUint8;
		case r.SBYTE: return e.readInt8;
		case r.SHORT: return e.readUint16;
		case r.SSHORT: return e.readInt16;
		case r.LONG:
		case r.IFD: return e.readUint32;
		case r.SLONG: return e.readInt32;
		case r.LONG8:
		case r.IFD8: return e.readUint64;
		case r.SLONG8: return e.readInt64;
		case r.RATIONAL: return e.readUint32;
		case r.SRATIONAL: return e.readInt32;
		case r.FLOAT: return e.readFloat32;
		case r.DOUBLE: return e.readFloat64;
		default: throw RangeError(`Invalid field type: ${t}`);
	}
}
function Qg(e = null, t, n, i, o, s, c = !1) {
	let l = a(i), u = e || Xg(i, o), d = i === r.RATIONAL || i === r.SRATIONAL;
	if (d) for (let e = 0; e < o; e += 2) u[e] = t.call(n, s + e * l), u[e + 1] = t.call(n, s + (e * l + 4));
	else for (let e = 0; e < o; ++e) u[e] = t.call(n, s + e * l);
	return i === r.ASCII ? new TextDecoder("utf-8").decode(u) : o === 1 && !c && !d ? u[0] : u;
}
var $g = class {
	constructor(e, t, n, r, i) {
		this.source = e, this.arrayOffset = t, this.littleEndian = n, this.fieldType = r, this.length = i, this.data = Xg(r, i), this.itemSize = a(r), this.maskBitmap = new Uint8Array(Math.ceil(i / 8)), this.fetchIndexPromises = /* @__PURE__ */ new Map(), this.fullFetchPromise = null;
	}
	async loadAll() {
		return this.fullFetchPromise ||= this.source.fetch([{
			offset: this.arrayOffset,
			length: this.itemSize * this.length
		}]).then((e) => {
			let t = new Gg(e[0], this.arrayOffset, !0, !1), n = Qg(this.data, Zg(t, this.fieldType), t, this.fieldType, this.length, this.arrayOffset, !0);
			return this.maskBitmap.fill(255), this.fetchIndexPromises.clear(), n;
		}), this.fullFetchPromise;
	}
	async get(e) {
		if (e < 0 || e >= this.data.length) throw RangeError(`Index ${e} out of bounds for length ${this.data.length}`);
		let t = Math.floor(e / 8), n = 1 << e % 8, r = this.arrayOffset + e * this.itemSize;
		if ((this.maskBitmap[t] & n) === 0) {
			if (!this.fetchIndexPromises.has(e)) {
				let i = this.source.fetch([{
					offset: r,
					length: this.itemSize
				}]).then((i) => {
					let a = new Gg(i[0], this.arrayOffset + e * this.itemSize, !0, !1), o = Zg(a, this.fieldType).call(a, r);
					return this.data[e] = o, this.maskBitmap[t] |= n, this.fetchIndexPromises.delete(e), o;
				});
				this.fetchIndexPromises.set(e, i);
			}
			return this.fetchIndexPromises.get(e);
		}
		return this.data[e];
	}
}, e_ = class {
	constructor(e, t, n, r) {
		this.actualizedFields = e, this.deferredFields = t, this.deferredFieldsBeingResolved = /* @__PURE__ */ new Map(), this.deferredArrays = n, this.nextIFDByteOffset = r;
	}
	hasTag(e) {
		let n = t(e);
		return this.actualizedFields.has(n) || this.deferredFields.has(n) || this.deferredArrays.has(n);
	}
	getValue(e) {
		let n = t(e);
		if (this.deferredFields.has(n) || this.deferredArrays.has(n)) {
			let e = i[n]?.name || `Tag${n}`;
			throw Error(`Field '${e}' (${n}) is deferred. Use loadValue() to load it asynchronously.`);
		}
		if (this.actualizedFields.has(n)) return this.actualizedFields.get(n);
	}
	async loadValue(e) {
		let n = t(e);
		if (this.actualizedFields.has(n)) return this.actualizedFields.get(n);
		if (this.deferredFieldsBeingResolved.has(n)) return this.deferredFieldsBeingResolved.get(n);
		let r = this.deferredFields.get(n);
		if (r) {
			this.deferredFields.delete(n);
			let e = (async () => {
				try {
					let e = await r();
					return this.actualizedFields.set(n, e), e;
				} finally {
					this.deferredFieldsBeingResolved.delete(n);
				}
			})();
			return this.deferredFieldsBeingResolved.set(n, e), e;
		}
		let i = this.deferredArrays.get(n);
		if (i) return i.loadAll();
	}
	async loadValueIndexed(e, n) {
		let r = t(e);
		if (this.actualizedFields.has(r)) return this.actualizedFields.get(r)[n];
		if (this.deferredArrays.has(r)) return this.deferredArrays.get(r).get(n);
		if (this.hasTag(r)) {
			let e = await this.loadValue(r);
			if (e && typeof e != "number") return e[n];
		}
	}
	parseGeoKeyDirectory() {
		let t = this.getValue("GeoKeyDirectory");
		if (!t) return null;
		let n = {};
		for (let r = 4; r <= t[3] * 4; r += 4) {
			let i = e[t[r]], a = t[r + 1] || null, o = t[r + 2], s = t[r + 3], c = null;
			if (!a) c = s;
			else {
				if (c = this.getValue(a), c == null) throw Error(`Could not get value of geoKey '${i}'.`);
				typeof c == "string" ? c = c.substring(s, s + o - 1) : c.subarray && (c = c.subarray(s, s + o), o === 1 && (c = c[0]));
			}
			n[i] = c;
		}
		return n;
	}
	toObject() {
		let e = {};
		for (let [t, n] of this.actualizedFields.entries()) {
			let r = typeof t == "number" ? i[t] : void 0, a = r ? r.name : `Tag${t}`;
			e[a] = n;
		}
		return e;
	}
}, t_ = class {
	constructor(e, t, n, r = !1) {
		this.source = e, this.littleEndian = t, this.bigTiff = n, this.eager = r;
	}
	async getSlice(e, t) {
		let n = this.bigTiff ? 4048 : 1024;
		return new Gg((await this.source.fetch([{
			offset: e,
			length: t === void 0 ? n : t
		}]))[0], e, this.littleEndian, this.bigTiff);
	}
	async parseFileDirectoryAt(e) {
		let t = this.bigTiff ? 20 : 12, n = this.bigTiff ? 8 : 2, r = await this.getSlice(e), o = this.bigTiff ? r.readUint64(e) : r.readUint16(e), s = o * (t + (this.bigTiff ? 16 : 6));
		r.covers(e, s) || (r = await this.getSlice(e, s));
		let c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = e + (this.bigTiff ? 8 : 2);
		for (let e = 0; e < o; d += t, ++e) {
			let e = r.readUint16(d), t = r.readUint16(d + 2), n = this.bigTiff ? r.readUint64(d + 4) : r.readUint32(d + 4), o = null, s = null, f = null, p = a(t), m = d + (this.bigTiff ? 12 : 8), h = i[e]?.isArray, g = i[e]?.eager || this.eager;
			if (p * n <= (this.bigTiff ? 8 : 4)) o = Qg(Xg(t, n), Zg(r, t), r, t, n, m, h);
			else {
				let e = r.readOffset(m), i = a(t) * n;
				if (r.covers(e, i)) o = Qg(Xg(t, n), Zg(r, t), r, t, n, e, h);
				else if (g) {
					let r = await this.getSlice(e, i);
					o = Qg(Xg(t, n), Zg(r, t), r, t, n, e, h);
				} else h ? f = new $g(this.source, e, this.littleEndian, t, n) : s = async () => {
					let r = await this.getSlice(e, i);
					return Qg(Xg(t, n), Zg(r, t), r, t, n, e, h);
				};
			}
			o === null ? s === null ? f !== null && u.set(e, f) : l.set(e, s) : c.set(e, o);
		}
		return new e_(c, l, u, r.readOffset(e + n + t * o));
	}
};
//#endregion
//#region ../node_modules/geotiff/dist-module/geotiff.js
function n_(e, t, n, i) {
	let o = null, s = null, c = a(t);
	switch (t) {
		case r.BYTE:
		case r.ASCII:
		case r.UNDEFINED:
			o = new Uint8Array(n), s = e.readUint8;
			break;
		case r.SBYTE:
			o = new Int8Array(n), s = e.readInt8;
			break;
		case r.SHORT:
			o = new Uint16Array(n), s = e.readUint16;
			break;
		case r.SSHORT:
			o = new Int16Array(n), s = e.readInt16;
			break;
		case r.LONG:
		case r.IFD:
			o = new Uint32Array(n), s = e.readUint32;
			break;
		case r.SLONG:
			o = new Int32Array(n), s = e.readInt32;
			break;
		case r.LONG8:
		case r.IFD8:
			o = Array(n), s = e.readUint64;
			break;
		case r.SLONG8:
			o = Array(n), s = e.readInt64;
			break;
		case r.RATIONAL:
			o = new Uint32Array(n * 2), s = e.readUint32;
			break;
		case r.SRATIONAL:
			o = new Int32Array(n * 2), s = e.readInt32;
			break;
		case r.FLOAT:
			o = new Float32Array(n), s = e.readFloat32;
			break;
		case r.DOUBLE: o = new Float64Array(n), s = e.readFloat64;
	}
	if (o === null || s === null) throw RangeError(`Invalid field type: ${t}`);
	if (t !== r.RATIONAL && t !== r.SRATIONAL) for (let t = 0; t < n; ++t) o[t] = s.call(e, i + t * c);
	else for (let t = 0; t < n; t += 2) o[t] = s.call(e, i + t * c), o[t + 1] = s.call(e, i + (t * c + 4));
	return t === r.ASCII ? new TextDecoder("utf-8").decode(o) : o;
}
var r_ = class extends Error {
	constructor(e) {
		super(`No image at index ${e}`), this.index = e;
	}
}, i_ = class {
	async getImage(e = 0) {
		throw Error("Not implemented");
	}
	async getImageCount() {
		throw Error("Not implemented");
	}
	async readRasters(e = {}) {
		let { window: t, width: n, height: r } = e, { resX: i, resY: a, bbox: o } = e, s = await this.getImage(), c = s, l = await this.getImageCount(), u = s.getBoundingBox();
		if (t && o) throw Error("Both \"bbox\" and \"window\" passed.");
		if (n || r) {
			if (t) {
				let [e, n] = s.getOrigin(), [r, i] = s.getResolution();
				o = [
					e + t[0] * r,
					n + t[1] * i,
					e + t[2] * r,
					n + t[3] * i
				];
			}
			let e = o || u;
			if (n) {
				if (i) throw Error("Both width and resX passed");
				i = (e[2] - e[0]) / n;
			}
			if (r) {
				if (a) throw Error("Both width and resY passed");
				a = (e[3] - e[1]) / r;
			}
		}
		if (i || a) {
			let e = [];
			for (let t = 0; t < l; ++t) {
				let n = await this.getImage(t), r = n.fileDirectory.getValue("SubfileType"), i = n.fileDirectory.getValue("NewSubfileType");
				(t === 0 || r === 2 || (i || 0) & 1) && e.push(n);
			}
			e.sort((e, t) => e.getWidth() - t.getWidth());
			for (let t = 0; t < e.length; ++t) {
				let n = e[t], r = (u[2] - u[0]) / n.getWidth(), o = (u[3] - u[1]) / n.getHeight();
				if (c = n, i && i > r || a && a > o) break;
			}
		}
		let d = t;
		if (o) {
			let [e, t] = s.getOrigin(), [n, r] = c.getResolution(s);
			d = [
				Math.round((o[0] - e) / n),
				Math.round((o[1] - t) / r),
				Math.round((o[2] - e) / n),
				Math.round((o[3] - t) / r)
			], d = [
				Math.min(d[0], d[2]),
				Math.min(d[1], d[3]),
				Math.max(d[0], d[2]),
				Math.max(d[1], d[3])
			];
		}
		return c.readRasters({
			...e,
			window: d
		});
	}
}, a_ = class e extends i_ {
	constructor(e, t, n, r, i = {}) {
		super(), this.source = e, this.parser = new t_(e, t, n, !1), this.littleEndian = t, this.bigTiff = n, this.firstIFDOffset = r, this.cache = i.cache || !1, this.ifdRequests = [], this.ghostValues = null;
	}
	async getSlice(e, t) {
		let n = this.bigTiff ? 4048 : 1024;
		return new Gg((await this.source.fetch([{
			offset: e,
			length: t === void 0 ? n : t
		}]))[0], e, this.littleEndian, this.bigTiff);
	}
	async requestIFD(e) {
		if (this.ifdRequests[e]) return this.ifdRequests[e];
		if (e === 0) return this.ifdRequests[e] = this.parser.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[e];
		if (!this.ifdRequests[e - 1]) try {
			this.ifdRequests[e - 1] = this.requestIFD(e - 1);
		} catch (t) {
			throw t instanceof r_ ? new r_(e) : t;
		}
		return this.ifdRequests[e] = (async () => {
			let t = this.ifdRequests[e - 1];
			if (!t) throw Error("Previous IFD request missing");
			let n = await t;
			if (n.nextIFDByteOffset === 0) throw new r_(e);
			return this.parser.parseFileDirectoryAt(n.nextIFDByteOffset);
		})(), this.ifdRequests[e];
	}
	async getImage(e = 0) {
		return new Ug(await this.requestIFD(e), this.littleEndian, this.cache, this.source);
	}
	async getImageCount() {
		let e = 0, t = !0;
		for (; t;) try {
			await this.requestIFD(e), ++e;
		} catch (e) {
			if (e instanceof r_) t = !1;
			else throw e;
		}
		return e;
	}
	async getGhostValues() {
		let e = this.bigTiff ? 16 : 8;
		if (this.ghostValues !== null) return this.ghostValues;
		let t = await this.getSlice(e, 130);
		if (n_(t, r.ASCII, 30, e) === "GDAL_STRUCTURAL_METADATA_SIZE=") {
			let n = n_(t, r.ASCII, 130, e).split("\n")[0], i = Number(n.split("=")[1].split(" ")[0]) + n.length;
			i > 130 && (t = await this.getSlice(e, i));
			let a = n_(t, r.ASCII, i, e), o = {};
			a.split("\n").filter((e) => e.length > 0).map((e) => e.split("=")).forEach(([e, t]) => {
				o[e] = t;
			}), this.ghostValues = o;
		}
		return this.ghostValues;
	}
	static async fromSource(t, n, r) {
		let i = (await t.fetch([{
			offset: 0,
			length: 1024
		}], r))[0], a = new Wg(i), o = a.getUint16(0, !1), s;
		if (o === 18761) s = !0;
		else if (o === 19789) s = !1;
		else throw TypeError("Invalid byte order value.");
		let c = a.getUint16(2, s), l;
		if (c === 42) l = !1;
		else if (c === 43) {
			if (l = !0, a.getUint16(4, s) !== 8) throw Error("Unsupported offset byte-size.");
		} else throw TypeError("Invalid magic number.");
		let u = l ? a.getUint64(8, s) : a.getUint32(4, s);
		return new e(t, s, l, u, n);
	}
	close() {
		return typeof this.source.close == "function" && this.source.close();
	}
};
async function o_(e, t) {
	return a_.fromSource(Yg(e), void 0, t);
}
//#endregion
//#region src/use-cases/load-geotiff/use-case.ts
var s_ = 1e6, c_ = class {
	conn;
	constructor(e, t) {
		this.conn = t;
	}
	async exec(e) {
		let { geotiffFileUrl: t, geotiffArrayBuffer: n, outputTableName: r, coordinateFormat: i, workspace: a = l, workspaceCoordinateFormat: o = d, maxRasterCells: s, maxPixels: c, resampleMethod: u = "bilinear" } = e;
		if (!t && !n) throw Error("Either geotiffFileUrl or geotiffArrayBuffer must be provided.");
		if (t && n) throw Error("Cannot provide both geotiffFileUrl and geotiffArrayBuffer.");
		let f = i || "EPSG:4326", p = o, m = `${a}.${r}`, h = Math.max(1, Math.floor(s ?? c ?? s_)), g;
		if (t) {
			let e = await fetch(t);
			if (!e.ok) throw Error(`Failed to fetch GeoTIFF from ${t}: HTTP ${e.status}`);
			g = await e.arrayBuffer();
		} else g = n;
		let _ = await (await o_(g)).getImage(0), v = _.getOrigin(), y = _.getFileDirectory().getValue("ModelTransformation");
		if (y && (y[1] !== 0 || y[4] !== 0)) throw Error("Rotated or sheared GeoTIFF grids are not supported by compact rasters.");
		let b = y ? [y[0], y[5]] : _.getResolution(), x = _.getBoundingBox(), S = Number(v[0]), C = Number(v[1]), w = Math.min(Number(x[0]), Number(x[2])), T = Math.min(Number(x[1]), Number(x[3])), E = Math.max(Number(x[0]), Number(x[2])), D = Math.max(Number(x[1]), Number(x[3])), O = Number(_.getWidth()), k = Number(_.getHeight()), ee = Number(_.getSamplesPerPixel()), te = O * k, ne = te > h ? Math.sqrt(h / te) : 1, re = Math.max(1, Math.min(O, Math.floor(O * ne))), ie = Math.max(1, Math.min(k, Math.floor(k * ne))), ae = (E - w) / re, oe = (D - T) / ie, se = await _.readRasters({
			width: re,
			height: ie,
			resampleMethod: u,
			interleave: !1
		}), ce = [], le = {}, ue = this.getNoDataValue(_);
		for (let e = 0; e < ee; e++) {
			let t = `band_${e + 1}`;
			ce.push(t);
			let n = se[e], r = new Float32Array(n.length);
			for (let e = 0; e < ie; e++) {
				let t = e * re, i = (b[1] < 0 ? ie - 1 - e : e) * re;
				for (let e = 0; e < re; e++) {
					let a = Number(n[t + e]), o = b[0] < 0 ? re - 1 - e : e;
					r[i + o] = Number.isFinite(a) && (ue === null || a !== ue) ? a : NaN;
				}
			}
			le[t] = r;
		}
		let de = await this.resolveBounds(w, T, E, D, f, p);
		return this.assertFiniteBounds(de, f, p), await this.conn.query(`
      CREATE OR REPLACE TABLE ${m} AS
      SELECT
        ${re}::INTEGER AS width,
        ${ie}::INTEGER AS height,
        ${O}::INTEGER AS original_width,
        ${k}::INTEGER AS original_height,
        ${de.minX}::DOUBLE AS min_x,
        ${de.minY}::DOUBLE AS min_y,
        ${de.maxX}::DOUBLE AS max_x,
        ${de.maxY}::DOUBLE AS max_y,
        ${S}::DOUBLE AS origin_x,
        ${C}::DOUBLE AS origin_y,
        ${ae}::DOUBLE AS res_x,
        ${oe}::DOUBLE AS res_y,
        '${f.replace(/'/g, "''")}'::VARCHAR AS source_crs,
        '${p.replace(/'/g, "''")}'::VARCHAR AS target_crs;
    `), ff(a, r, {
			width: re,
			height: ie,
			originalWidth: O,
			originalHeight: k,
			minX: de.minX,
			minY: de.minY,
			maxX: de.maxX,
			maxY: de.maxY,
			originX: S,
			originY: C,
			sourceMinX: w,
			sourceMinY: T,
			resX: ae,
			resY: oe,
			sourceCrs: f,
			targetCrs: p,
			bands: ce.map((e) => ({
				id: e,
				label: e
			})),
			values: le
		}), {
			source: "geotiff",
			type: "raster",
			name: r,
			columns: dn((await this.conn.query(`DESCRIBE ${m};`)).toArray()),
			bands: ce.map((e) => ({
				id: e,
				label: e
			}))
		};
	}
	getNoDataValue(e) {
		let t = typeof e.getGDALNoData == "function" ? e.getGDALNoData() : null;
		if (t == null) return null;
		let n = Number(t);
		return Number.isFinite(n) ? n : null;
	}
	async resolveBounds(e, t, n, r, i, a) {
		if (i === a) return {
			minX: e,
			minY: t,
			maxX: n,
			maxY: r
		};
		let o = (await this.conn.query(`
      WITH corners AS (
        SELECT ST_Transform(ST_Point(x, y), '${i.replace(/'/g, "''")}', '${a.replace(/'/g, "''")}', always_xy := true) AS geom
        FROM (VALUES
          (${e}, ${t}),
          (${e}, ${r}),
          (${n}, ${t}),
          (${n}, ${r})
        ) AS pts(x, y)
      )
      SELECT
        MIN(ST_X(geom)) AS min_x,
        MIN(ST_Y(geom)) AS min_y,
        MAX(ST_X(geom)) AS max_x,
        MAX(ST_Y(geom)) AS max_y
      FROM corners;
    `)).toArray()[0];
		return o ? {
			minX: Number(o.min_x),
			minY: Number(o.min_y),
			maxX: Number(o.max_x),
			maxY: Number(o.max_y)
		} : {
			minX: e,
			minY: t,
			maxX: n,
			maxY: r
		};
	}
	assertFiniteBounds(e, t, n) {
		if (![
			e.minX,
			e.minY,
			e.maxX,
			e.maxY
		].every((e) => Number.isFinite(e))) throw Error(`Failed to transform GeoTIFF bounds from ${t} to ${n}. The loader assumes EPSG:4326 (lat/lng) when coordinateFormat is not provided. If the raster is not in EPSG:4326, pass the correct coordinateFormat explicitly.`);
	}
}, l_ = (e, t, n) => {
	let r = `${n}.${t}`;
	return `
        CREATE OR REPLACE TABLE ${r} AS
            SELECT * FROM read_json_auto('${e}');

        DESCRIBE ${r};
  `;
}, u_ = ({ jsonFileUrl: e, tableName: t, latColumnName: n, longColumnName: r, sourceCrs: i, targetCrs: a, workspace: o }) => {
	let s = `${o}.${t}`;
	return `
    CREATE TABLE ${s} AS
      SELECT
          *,
          ST_Transform(
              ST_Point(CAST(${r} AS DOUBLE), CAST(${n} AS DOUBLE)),
              '${i}',
              '${a}',
              always_xy := true
          ) AS ${m}
      FROM read_json_auto('${e}');

    DESCRIBE ${s};
  `;
}, d_ = ({ jsonFileUrl: e, tableName: t, wktColumnName: n, sourceCrs: r, targetCrs: i, workspace: a }) => {
	let o = `${a}.${t}`;
	return `
    CREATE TABLE ${o} AS
      SELECT
          *,
          ST_Transform(
              ST_GeomFromText(CAST(${n} AS VARCHAR)),
              '${r}',
              '${i}',
              always_xy := true
          ) AS ${m}
      FROM read_json_auto('${e}');

    DESCRIBE ${o};
  `;
}, f_ = class {
	db;
	conn;
	constructor(e, t) {
		this.db = e, this.conn = t;
	}
	async exec({ jsonFileUrl: e, jsonObject: t, outputTableName: n, geometryColumns: r, workspace: i = l, workspaceCoordinateFormat: a = d }) {
		if (!e && !t) throw Error("Either jsonFileUrl or jsonObject must be provided");
		if (e && t) throw Error("Cannot provide both jsonFileUrl and jsonObject. Please provide only one.");
		let o = e ? await fetch(e).then((t) => {
			if (!t.ok) throw Error(`HTTP error! Error to load ${e}! Status: ${t.status}`);
			return t.text();
		}) : JSON.stringify(t), s = `temp_json_${Date.now()}_${Math.random().toString(36).slice(2, 11)}.json`;
		await this.db.registerFileText(s, o);
		let c = `${i}.${n}`, f = !1, p, h = r === !0 ? {
			mode: "lat-lng",
			latColumnName: "Latitude",
			longColumnName: "Longitude",
			coordinateFormat: u
		} : r && "wktColumnName" in r ? {
			mode: "wkt",
			wktColumnName: r.wktColumnName,
			coordinateFormat: r.coordinateFormat || "EPSG:4326"
		} : r ? {
			mode: "lat-lng",
			latColumnName: r.latColumnName,
			longColumnName: r.longColumnName,
			coordinateFormat: r.coordinateFormat || "EPSG:4326"
		} : null;
		if (h?.mode === "lat-lng" && (!h.latColumnName.trim() || !h.longColumnName.trim())) throw Error("Both latColumnName and longColumnName must be provided when using JSON latitude/longitude geometry columns.");
		if (h?.mode === "wkt" && !h.wktColumnName.trim()) throw Error("wktColumnName must be provided when using JSON WKT geometry columns.");
		let g;
		h?.mode === "lat-lng" ? (g = u_({
			jsonFileUrl: s,
			tableName: n,
			latColumnName: h.latColumnName,
			longColumnName: h.longColumnName,
			sourceCrs: h.coordinateFormat,
			targetCrs: a,
			workspace: i
		}), p = "points") : g = h?.mode === "wkt" ? d_({
			jsonFileUrl: s,
			tableName: n,
			wktColumnName: h.wktColumnName,
			sourceCrs: h.coordinateFormat,
			targetCrs: a,
			workspace: i
		}) : l_(s, n, i);
		try {
			let e = await this.conn.query(g);
			f = !0;
			let t = dn(e.toArray());
			if (h) {
				await this.ensureAllRowsHaveGeometry(c), h.mode === "wkt" && (p = await this.inferWktLayerType(c, h.wktColumnName));
				let e = `idx_${n}_geometry`;
				await this.conn.query(`CREATE INDEX ${e} ON ${c} USING RTREE (${m});`);
			}
			return {
				source: "json",
				name: n,
				columns: t,
				type: p
			};
		} catch (e) {
			f && await this.conn.query(`DROP TABLE IF EXISTS ${c}`);
			let t = e instanceof Error ? e.message : String(e);
			if (h?.mode === "wkt") {
				let n = /* @__PURE__ */ Error(`Failed to load JSON geometry from WKT column '${h.wktColumnName}': ${t}`);
				throw n.cause = e, n;
			}
			if (h?.mode === "lat-lng") {
				let n = /* @__PURE__ */ Error(`Failed to load JSON geometry from latitude/longitude columns '${h.latColumnName}' and '${h.longColumnName}': ${t}`);
				throw n.cause = e, n;
			}
			throw e;
		} finally {
			await this.db.dropFile(s);
		}
	}
	async ensureAllRowsHaveGeometry(e) {
		let t = (await this.conn.query(`
      SELECT COUNT(*) AS total_rows, COUNT(${m}) AS geometry_rows
      FROM ${e}
    `)).toArray()[0], n = Number(t?.total_rows ?? 0), r = Number(t?.geometry_rows ?? 0);
		if (n !== r) throw Error(`Geometry creation produced ${n - r} null geometries.`);
	}
	async inferWktLayerType(e, t) {
		let n = (await this.conn.query(`
      SELECT DISTINCT CAST(ST_GeometryType(${m}) AS VARCHAR) AS geometry_type
      FROM ${e}
      WHERE ${m} IS NOT NULL
      ORDER BY geometry_type
    `)).toArray().map((e) => String(e.geometry_type ?? "").toUpperCase());
		if (n.length === 0) throw Error(`Could not infer a layer type from WKT column '${t}' because no non-null geometries were created.`);
		let r = /* @__PURE__ */ new Set();
		for (let e of n) switch (e) {
			case "POINT":
			case "MULTIPOINT":
				r.add("points");
				break;
			case "LINESTRING":
			case "MULTILINESTRING":
				r.add("polylines");
				break;
			case "POLYGON":
			case "MULTIPOLYGON":
				r.add("polygons");
				break;
			default: throw Error(`Unsupported WKT geometry type '${e}' in column '${t}'.`);
		}
		if (r.size !== 1) throw Error(`WKT column '${t}' contains mixed geometry families: ${n.join(", ")}.`);
		return Array.from(r)[0];
	}
}, p_ = [
	"buildings",
	"parks",
	"water"
], m_ = ({ tableName: e, layer: t, sourceCrs: n, targetCrs: r, outputTableName: i, boundingBox: a, workspace: o = l }) => {
	let s = v_(t), c = `${o}.${e}`, u = `${o}.${i}`, d = c;
	if (t === "surface") {
		let t = `${o}.`;
		d = `${o}.${e.startsWith(t) ? e.slice(t.length) : e}_boundaries`;
	}
	return `
    ${s(d)}
    CREATE OR REPLACE TEMP TABLE ${t}_with_nodes_refs AS
      SELECT id, UNNEST(refs) as ref, UNNEST(range(length(refs))) as ref_idx
        FROM ${d}
        SEMI JOIN ${t} USING (id)
          WHERE kind = 'way';

    CREATE OR REPLACE TEMP TABLE ${t}_required_nodes_with_geometries AS
      SELECT id, ST_POINT(lon, lat) geometry
        FROM ${d} nodes
        SEMI JOIN ${t}_with_nodes_refs
        ON nodes.id = ${t}_with_nodes_refs.ref
        WHERE kind = 'node';

    CREATE OR REPLACE TABLE ${u} AS
      SELECT
          ${t}.id,
          ${t}.tags properties,
          ${t}.refs,
          ${g_({
		sourceCrs: n,
		targetCrs: r,
		boundingBox: a,
		layer: t
	})} geometry,
          json_array(json_object('osm_type', 'way', 'osm_id', ${t}.id, 'geometryIndex', 0,
            'tags', COALESCE(CAST(${t}.tags AS JSON), '{}'::JSON))) AS ${p}
      FROM ${t}
      JOIN ${t}_with_nodes_refs
      ON ${t}.id = ${t}_with_nodes_refs.id
      JOIN ${t}_required_nodes_with_geometries nodes
      ON ${t}_with_nodes_refs.ref = nodes.id
      GROUP BY 1, 2, 3
      ${__({
		sourceCrs: n,
		targetCrs: r,
		boundingBox: a,
		layer: t
	})};

    DESCRIBE ${u};
  `;
};
function h_(e, t, n) {
	let r = `
    CASE
      WHEN refs[1] = refs[array_length(refs)] AND array_length(refs) > 3 THEN
        ST_Transform(
          ST_MakePolygon(
            ST_MakeLine(
              list(nodes.geometry ORDER BY ref_idx ASC)
            )
          ),
          '${e}',
          '${t}',
          always_xy := true
        )
      ELSE
        ST_Transform(
          ST_MakeLine(
            list(nodes.geometry ORDER BY ref_idx ASC)
          ),
          '${e}',
          '${t}',
          always_xy := true
        )
    END`;
	return n ? `ST_Intersection(${r}, ${`ST_MakeEnvelope(${n.minLon}, ${n.minLat}, ${n.maxLon}, ${n.maxLat})`})` : r;
}
function g_({ sourceCrs: e, targetCrs: t, boundingBox: n, layer: r }) {
	return p_.includes(r) ? h_(e, t, n) : `ST_Transform(
        ST_MakeLine(
          list(nodes.geometry ORDER BY ref_idx ASC)
        ),
        '${e}',
        '${t}',
        always_xy := true
      )`;
}
function __({ sourceCrs: e, targetCrs: t, boundingBox: n, layer: r }) {
	return !n || !p_.includes(r) ? "" : `HAVING ST_Intersects(${h_(e, t, n)}, ${`ST_MakeEnvelope(${n.minLon}, ${n.minLat}, ${n.maxLon}, ${n.maxLat})`})`;
}
function v_(e) {
	switch (e) {
		case "parks": return y_;
		case "water": return b_;
		case "buildings": return x_;
		case "roads": return S_;
		case "surface": return C_;
		default: return () => "";
	}
}
var y_ = (e) => `
  CREATE OR REPLACE TEMP TABLE parks AS
    SELECT id, tags, refs FROM ${e}
      WHERE kind = 'way' AND map_extract(tags, '__autk_layer')[1] = 'parks';
`, b_ = (e) => `
  CREATE OR REPLACE TEMP TABLE water AS
    SELECT id, tags, refs FROM ${e}
      WHERE kind = 'way' AND map_extract(tags, '__autk_layer')[1] = 'water';
`, x_ = (e) => `
  CREATE OR REPLACE TEMP TABLE buildings AS
    WITH relation_members AS (
      SELECT UNNEST(refs) AS member_id, UNNEST(ref_types) AS member_type, UNNEST(ref_roles) AS member_role
      FROM ${e}
      WHERE kind = 'relation' AND map_extract(tags, 'type')[1] = 'building'
    )
    SELECT id, tags, refs FROM ${e} w
      WHERE kind = 'way' AND (
        map_extract(tags, '__autk_layer')[1] = 'buildings'
        OR EXISTS (SELECT 1 FROM relation_members m WHERE m.member_type = 'way' AND m.member_id = w.id
          AND COALESCE(m.member_role, '') IN (${S.map((e) => `'${e}'`).join(", ")}))
      );
`, S_ = (e) => `
  CREATE OR REPLACE TEMP TABLE roads AS
    SELECT id, tags, refs FROM ${e}
      WHERE kind = 'way' AND map_extract(tags, '__autk_layer')[1] = 'roads' AND array_length(refs) > 1;
`, C_ = (e) => `
  CREATE OR REPLACE TEMP TABLE surface AS
    SELECT id, tags, refs FROM ${e}
      WHERE kind IN ('way');
`;
//#endregion
//#region src/use-cases/load-osm-layer/tag-set-queries.ts
function w_(e) {
	return `(${e.map(({ key: e, value: t }) => {
		let n = `map_extract(tags, '${e.replace(/'/g, "''")}')[1]`;
		return t === void 0 ? `${n} IS NOT NULL` : `${n} = '${t.replace(/'/g, "''")}'`;
	}).join(" OR ")})`;
}
function T_(e) {
	let { inputTable: t, outputTable: n, tagSet: r, sourceCrs: i, targetCrs: a } = e, o = w_(r.tags), s = (e) => `ST_Transform(${e}, '${i}', '${a}', always_xy := true)`, c = `json_array(json_object('osm_type', '${r.type === "points" ? "node" : "way"}', 'osm_id', id, 'geometryIndex', 0,
    'tags', COALESCE(CAST(tags AS JSON), '{}'::JSON))) AS ${p}`;
	if (r.type === "points") return `CREATE OR REPLACE TABLE ${n} AS
      SELECT id, tags AS properties, []::BIGINT[] AS refs,
        ${s("ST_Point(lon, lat)")} AS geometry, ${c}
      FROM ${t} WHERE kind = 'node' AND ${o} AND isfinite(lon) AND isfinite(lat);`;
	let l = "(COALESCE(map_extract(tags, 'area')[1] = 'no', false) OR\n    ((map_contains(tags, 'highway') OR map_contains(tags, 'barrier') OR map_contains(tags, 'railway')\n      OR map_contains(tags, 'waterway')) AND COALESCE(map_extract(tags, 'area')[1], '') <> 'yes'))", u = "(len(refs) > 3 AND refs[1] = refs[len(refs)])", d = r.type === "polygons" ? `${u} AND NOT ${l}` : `(NOT ${u} OR ${l})`, f = "ST_MakeLine(list(n.geometry ORDER BY r.ref_idx))";
	return `CREATE OR REPLACE TABLE ${n} AS
    WITH ways AS (
      SELECT id, tags, refs FROM ${t}
      WHERE kind = 'way' AND len(refs) > 1 AND ${o} AND ${d}
    ), way_refs AS (
      SELECT id, UNNEST(refs) AS ref, UNNEST(range(len(refs))) AS ref_idx FROM ways
    ), nodes AS (
      SELECT id, ST_Point(lon, lat) AS geometry FROM ${t}
      WHERE kind = 'node' AND isfinite(lon) AND isfinite(lat)
    )
    SELECT w.id, w.tags AS properties, w.refs,
      CASE WHEN COUNT(n.id) = len(w.refs) THEN ${s(r.type === "polygons" ? `ST_MakePolygon(${f})` : f)} ELSE NULL END AS geometry,
      json_array(json_object('osm_type', 'way', 'osm_id', w.id, 'geometryIndex', 0,
        'tags', COALESCE(CAST(w.tags AS JSON), '{}'::JSON))) AS ${p}
    FROM ways w JOIN way_refs r ON w.id = r.id LEFT JOIN nodes n ON r.ref = n.id
    GROUP BY w.id, w.tags, w.refs;`;
}
//#endregion
//#region src/internal/process-osm-buildings/queries.ts
var E_ = (e, t = !1) => `
  SELECT id, CAST(properties AS JSON) AS properties_json, CAST(ST_AsGeoJSON(geometry) AS JSON) AS geometry_json, ST_IsValid(geometry) AS valid_geometry, ST_IsEmpty(geometry) AS empty_geometry,
    ${t ? `json_extract_string(${p}, '$[0].osm_type')` : "'way'"} AS osm_type,
    ${t ? `json_extract_string(${p}, '$[0].osm_id')` : "CAST(id AS VARCHAR)"} AS osm_id
  FROM ${e}
  ORDER BY id
`, D_ = (e, t, n) => `
  WITH outlines AS (
    SELECT value->>'id' id, value->>'relationId' relation_id
    FROM json_each('${JSON.stringify(t).replace(/'/g, "''")}'::JSON)
  ), orphans AS (
    SELECT json_extract_string(value, '$') id
    FROM json_each('${JSON.stringify(n).replace(/'/g, "''")}'::JSON)
  )
  SELECT DISTINCT CAST(p.id AS VARCHAR) id, o.relation_id
  FROM ${e} p
  JOIN orphans a ON a.id = CAST(p.id AS VARCHAR)
  CROSS JOIN outlines o
  JOIN ${e} boundary ON o.id = CAST(boundary.id AS VARCHAR)
  WHERE ST_Covers(boundary.geometry, p.geometry)
  ORDER BY p.id, o.relation_id
`, O_ = (e, t, n = !1) => `
  CREATE OR REPLACE TABLE ${e} AS
  WITH indexed_parts AS (
    SELECT p.id, p.geometry, COALESCE(CAST(p.properties AS JSON), '{}'::JSON) AS properties,
      ${n ? `p.${p},` : ""}
      m.building_id, m.building_properties,
      ROW_NUMBER() OVER (PARTITION BY m.building_id ORDER BY p.id) - 1 AS geometry_index,
      COUNT(*) OVER (PARTITION BY m.building_id) AS part_count
    FROM ${e} p
    JOIN read_json('${t}', columns = {id: 'BIGINT', building_id: 'BIGINT', building_properties: 'JSON'}) m ON p.id = m.id
  ), common_attributes AS (
    SELECT building_id, e.key, first(e.value) AS value
    FROM indexed_parts, LATERAL json_each(properties) e
    WHERE e.key NOT IN ('parts', 'building_id', 'geometryIndex', 'id')
    GROUP BY building_id, e.key
    HAVING COUNT(*) = MAX(part_count) AND COUNT(DISTINCT e.value) = 1
  ), common_properties AS (
    SELECT building_id, json_group_object(key, value) AS properties
    FROM common_attributes GROUP BY building_id
  )
  SELECT
    p.building_id AS id,
    p.building_id,
    ST_GeomFromGeoJSON(json_object('type', 'GeometryCollection',
      'geometries', to_json(list(CAST(ST_AsGeoJSON(geometry) AS JSON) ORDER BY geometry_index)))) AS geometry,
    json_merge_patch(COALESCE(c.properties, '{}'::JSON), first(p.building_properties),
      json_object('building_id', p.building_id, 'parts',
        to_json(list(json_merge_patch(p.properties,
          json_object('id', ${n ? `CAST(p.${p}->0->>'osm_id' AS BIGINT)` : "p.id"}, 'geometryIndex', geometry_index)) ORDER BY geometry_index)))) AS properties
    ${n ? `, to_json(list(json_merge_patch(p.${p}->0,
      json_object('geometryIndex', geometry_index)) ORDER BY geometry_index)) AS ${p}` : ""}
  FROM indexed_parts p
  LEFT JOIN common_properties c ON p.building_id = c.building_id
  GROUP BY p.building_id, c.properties;
`, k_ = class {
	db;
	conn;
	constructor(e, t) {
		this.db = e, this.conn = t;
	}
	async exec(e) {
		let { tableName: t, workspace: n = l } = e, r = `${n}.${t}`, i = dn((await this.conn.query(`DESCRIBE ${r}`)).toArray()).some((e) => e.name === p), a = (await this.conn.query(E_(r, i))).toArray(), o = new Map(a.map((e) => [String(e.id), e.osm_type])), s = new Map(a.filter((e) => e.osm_type === "relation").map((e) => [String(e.osm_id), String(e.id)]));
		if (new Set(a.map((e) => String(e.id))).size !== a.length) throw Error("OSM building part IDs must be unique");
		let c = [], u = /* @__PURE__ */ new Set();
		for (let e of a) {
			let t = e.properties_json == null ? {} : JSON.parse(e.properties_json);
			if (t.location === "underground") {
				u.add(String(e.id)), console.warn(`[autk-db] Skipping OSM building part ${String(e.id)} in ${r}: location=underground is excluded from the surface building layer.`);
				continue;
			}
			let n = e.geometry_json == null ? null : JSON.parse(e.geometry_json), i = n == null ? "missing geometry" : e.valid_geometry ? e.empty_geometry ? "empty geometry" : n.type !== "Polygon" && n.type !== "MultiPolygon" ? "non-polygonal geometry" : null : "invalid geometry";
			i ? console.warn(`[autk-db] Skipping OSM building part ${String(e.id)} in ${r}: ${i}; coordinates were not repaired.`) : c.push({
				id: String(e.id),
				geometry: n,
				properties: t
			});
		}
		let d = new Map(c.map((e) => [e.id, e])), f = (e) => o.get(e.id) === (e.type ?? "way"), m = (e.relations ?? []).map((e) => ({
			relation: e,
			members: e.members.map((e) => ({
				...e,
				osmId: e.id,
				id: e.type === "relation" ? s.get(e.id) ?? `relation/${e.id}` : e.id
			})).filter((t) => e.skipReason !== void 0 || S.includes(t.role) || f(t) && d.get(t.id)?.properties.__autk_layer === "buildings")
		})), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Set();
		for (let { relation: e, members: t } of m) {
			if (g.has(e.id)) throw Error(`Duplicate OSM building relation ${e.id}`);
			let n = e.skipReason ?? (t.length === 0 ? "no way members" : void 0);
			n && (_.add(e.id), console.warn(`[autk-db] Skipping OSM building relation ${e.id} in ${r}: ${n}; all direct member ways omitted to avoid a partial building.`)), e.properties.location === "underground" && (_.add(e.id), console.warn(`[autk-db] Skipping OSM building relation ${e.id} in ${r}: location=underground is excluded from the surface building layer.`));
			let i = t.filter((e) => (!d.has(e.id) || !f(e)) && !(u.has(e.id) && f(e)));
			if (i.length > 0) {
				_.add(e.id);
				let t = i.filter((e) => !e.type).map((e) => e.osmId), n = i.filter((e) => e.type).map((e) => e.osmId), a = [t.length ? `ways ${t.join(", ")}` : "", n.length ? `relations ${n.join(", ")}` : ""];
				console.warn(`[autk-db] Skipping OSM building relation ${e.id} in ${r}: missing or unusable geometry for ${a.filter(Boolean).join(" and ")}; all member ways omitted to avoid a partial building.`);
			}
			for (let n of t) {
				if (o.has(n.id) && !f(n)) continue;
				let t = h.get(n.id);
				t && t !== e.id ? (_.add(t), _.add(e.id), console.warn(`[autk-db] Skipping OSM building relations ${t}, ${e.id} in ${r}: ${n.type ?? "way"} ${n.osmId} has conflicting ownership; all member ways omitted.`)) : h.set(n.id, e.id);
			}
			g.set(e.id, {
				...e.properties,
				osmRelation: {
					id: e.id,
					members: e.members,
					properties: e.properties
				}
			});
		}
		let v = c.filter((e) => !_.has(h.get(e.id))), y = m.filter(({ relation: e }) => !_.has(e.id)).flatMap(({ relation: e, members: t }) => t.filter((e) => {
			let t = d.get(e.id);
			if (!t || !f(e)) return !1;
			let n = t.properties;
			return e.role === "outline" || (e.role === "" || e.role === "outer") && !!n.building && n.building !== "no" && (!n["building:part"] || n["building:part"] === "no");
		}).map((t) => ({
			id: t.id,
			relationId: e.id
		}))), b = v.filter((e) => !h.has(e.id) && !!e.properties["building:part"] && e.properties["building:part"] !== "no").map((e) => e.id);
		if (y.length > 0 && b.length > 0) {
			let e = (await this.conn.query(D_(r, y, b))).toArray(), t = /* @__PURE__ */ new Map();
			for (let n of e) t.has(n.id) || t.set(n.id, /* @__PURE__ */ new Set()), t.get(n.id).add(n.relation_id);
			let n = /* @__PURE__ */ new Map();
			for (let [e, i] of t) {
				if (i.size !== 1) {
					console.warn(`[autk-db] OSM building part ${e} in ${r} has ambiguous outline containment in relations ${[...i].join(", ")}; ownership was not inferred.`);
					continue;
				}
				let t = [...i][0];
				h.set(e, t), n.has(t) || n.set(t, []), n.get(t).push(e);
			}
			for (let [e, t] of n) {
				let n = g.get(e);
				n.osmRelation = {
					...n.osmRelation,
					inferredParts: t.map((e) => ({
						id: e,
						method: "outline-containment"
					}))
				};
			}
		}
		let x = Gm(v.filter((e) => !h.has(e.id))), C = /* @__PURE__ */ new Map(), w = v.map((e) => {
			let t = h.get(e.id), n = t ? `relation:${t}` : `cluster:${x.get(e.id)}`;
			return C.has(n) || C.set(n, e.id), {
				id: e.id,
				building_id: C.get(n),
				building_properties: t ? g.get(t) : {}
			};
		}), T = `building_parts_${Date.now()}_${Math.random().toString(36).slice(2)}.json`;
		await this.db.registerFileText(T, JSON.stringify(w));
		try {
			await this.conn.query("BEGIN TRANSACTION");
			try {
				await this.conn.query(O_(r, T, i)), await this.conn.query("COMMIT");
			} catch (e) {
				throw await this.conn.query("ROLLBACK"), e;
			}
		} finally {
			await this.db.dropFile(T);
		}
		return dn((await this.conn.query(`DESCRIBE ${r}`)).toArray());
	}
}, A_ = {
	surface: {
		type: "surface",
		processesRelations: !1,
		createsPolygons: !1,
		postProcessing: "surface-polygonization"
	},
	water: {
		type: "water",
		processesRelations: !0,
		createsPolygons: !0,
		postProcessing: null
	},
	parks: {
		type: "parks",
		processesRelations: !0,
		createsPolygons: !0,
		postProcessing: null
	},
	roads: {
		type: "roads",
		processesRelations: !1,
		createsPolygons: !1,
		postProcessing: null
	},
	buildings: {
		type: "buildings",
		processesRelations: !0,
		createsPolygons: !0,
		postProcessing: "building-aggregation"
	},
	points: {
		type: "points",
		processesRelations: !1,
		createsPolygons: !1,
		postProcessing: null
	},
	polygons: {
		type: "polygons",
		processesRelations: !1,
		createsPolygons: !0,
		postProcessing: null
	},
	polylines: {
		type: "polylines",
		processesRelations: !1,
		createsPolygons: !1,
		postProcessing: null
	},
	raster: {
		type: "raster",
		processesRelations: !1,
		createsPolygons: !1,
		postProcessing: null
	}
};
function j_(e) {
	return e === "background" ? null : A_[e];
}
//#endregion
//#region src/use-cases/load-osm-layer/use-case.ts
var M_ = class {
	db;
	conn;
	processOsmBuildingsUseCase;
	constructor(e, t) {
		this.db = e, this.conn = t, this.processOsmBuildingsUseCase = new k_(e, t);
	}
	async exec(e) {
		let t = e.coordinateFormat || "EPSG:4326", n = e.workspaceCoordinateFormat || "EPSG:3395", r = e.workspace || "autk", i = e.outputTableName || `${e.osmInputTableName}_${e.layer}`, a = `${r}.${i}`, o = m_({
			layer: e.layer,
			tableName: e.osmInputTableName,
			sourceCrs: t,
			targetCrs: n,
			outputTableName: i,
			boundingBox: e.boundingBox,
			workspace: r
		}), s = dn((await this.conn.query(o)).toArray()), c = 0, l = j_(e.layer);
		if (!l) throw Error(`Unsupported layer type for OSM processing: ${e.layer}`);
		return l.processesRelations && (c = await this.appendRelationAreaGeometries({
			inputTableName: e.osmInputTableName,
			outputTableName: i,
			layer: e.layer,
			sourceCrs: t,
			targetCrs: n,
			boundingBox: e.boundingBox,
			workspace: r
		}), s = dn((await this.conn.query(`DESCRIBE ${a}`)).toArray())), c > 0 && console.warn(`[LoadOsmLayerUseCase] loaded ${e.layer}: ${c} relations skipped.`), l.postProcessing === "building-aggregation" && (s = await this.processOsmBuildingsUseCase.exec({
			tableName: i,
			workspace: r,
			relations: await this.loadBuildingRelations(e.osmInputTableName, r)
		})), {
			source: "osm",
			type: e.layer,
			columns: s,
			name: i
		};
	}
	async execTagSet(e) {
		let { tagSet: t, workspace: n } = e, r = `${e.osmInputTableName}_${t.name}_${t.type}`, i = `${n}.${r}`;
		await this.conn.query(T_({
			inputTable: `${n}.${e.osmInputTableName}`,
			outputTable: i,
			tagSet: t,
			sourceCrs: e.coordinateFormat,
			targetCrs: e.workspaceCoordinateFormat
		})), t.type === "polygons" && await this.appendRelationAreaGeometries({
			inputTableName: e.osmInputTableName,
			outputTableName: r,
			layer: t.type,
			sourceCrs: e.coordinateFormat,
			targetCrs: e.workspaceCoordinateFormat,
			workspace: n,
			relationWhere: `map_extract(tags, 'type')[1] = 'multipolygon' AND ${w_(t.tags)}`
		});
		let a = "geometry IS NULL OR ST_IsEmpty(geometry) OR NOT ST_IsValid(geometry)", o = (await this.conn.query(`SELECT id FROM ${i} WHERE ${a}`)).toArray();
		for (let e of o) console.warn(`[autk-db] Skipping invalid OSM ${t.type} element ${String(e.id)} in tag set ${t.name}.`);
		await this.conn.query(`DELETE FROM ${i} WHERE ${a}`);
		let s = await this.conn.query(`DESCRIBE ${i}`);
		return {
			source: "osm",
			type: t.type,
			name: r,
			columns: dn(s.toArray())
		};
	}
	async loadBuildingRelations(e, t) {
		return (await this.conn.query(`
      SELECT id, refs, ref_roles, ref_types, CAST(tags AS JSON) AS tags_json
      FROM ${t}.${e}
      WHERE kind = 'relation' AND map_extract(tags, 'type')[1] = 'building'
      ORDER BY id;
    `)).toArray().map((e) => {
			let t = Array.from(e.refs, String), n = this.toStringArray(e.ref_roles), r = this.toStringArray(e.ref_types), i = /* @__PURE__ */ new Map(), a;
			return t.forEach((e, t) => {
				if (r[t] === "node") return;
				let o = n[t] ?? "", s = r[t] === "relation", c = s ? `relation/${e}` : e;
				i.has(c) && i.get(c).role !== o && (a ??= `conflicting roles for ${s ? "relation" : "way"} ${e}`), i.set(c, s ? {
					id: e,
					role: o,
					type: "relation"
				} : {
					id: e,
					role: o
				});
			}), {
				id: String(e.id),
				members: [...i.values()],
				properties: this.parseTags(e.tags_json),
				skipReason: a
			};
		});
	}
	async appendRelationAreaGeometries(e) {
		let { records: t, skipped: n } = await this.buildRelationAreaRecords(e.inputTableName, e.layer, e.workspace, e.relationWhere);
		if (t.length === 0) return n;
		let r = `temp_${e.layer}_relations_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.json`;
		await this.db.registerFileText(r, JSON.stringify(t));
		let i = `${e.workspace}.${e.outputTableName}`, a = `ST_Transform(ST_GeomFromGeoJSON(JSON(geometry)), '${e.sourceCrs}', '${e.targetCrs}', always_xy := true)`, o = e.boundingBox ? `ST_MakeEnvelope(${e.boundingBox.minLon}, ${e.boundingBox.minLat}, ${e.boundingBox.maxLon}, ${e.boundingBox.maxLat})` : null, s = o ? `ST_Intersection(${a}, ${o})` : a, c = o ? `WHERE ST_Intersects(${a}, ${o})` : "";
		try {
			await this.conn.query(`
        INSERT INTO ${i} (id, properties, refs, geometry, ${p})
        SELECT
          ${e.layer === "buildings" ? `CASE WHEN EXISTS (SELECT 1 FROM ${i} existing WHERE existing.id = records.id::BIGINT)
            THEN -records.id::BIGINT ELSE records.id::BIGINT END` : "records.id::BIGINT"},
          CASE
            WHEN tags IS NULL OR tags = [] THEN NULL
            ELSE map_from_entries(tags)
          END AS properties,
          []::BIGINT[] AS refs,
          ${s} AS geometry,
          json_array(json_object('osm_type', 'relation', 'osm_id', records.id::BIGINT, 'geometryIndex', 0,
            'tags', CASE WHEN tags IS NULL OR tags = [] THEN '{}'::JSON ELSE CAST(map_from_entries(tags) AS JSON) END))
        FROM '${r}' records
        ${c};
      `);
		} finally {
			await this.db.dropFile(r);
		}
		return n;
	}
	async buildRelationAreaRecords(e, t, n, r = `map_extract(tags, '__autk_layer')[1] = '${t}'`) {
		let i = `${n}.${e}`, a = (await this.conn.query(`
      SELECT id, refs, ref_roles, ref_types, CAST(tags AS JSON) AS tags_json
        FROM ${i}
        WHERE kind = 'relation' AND ${r}
          ${t === "buildings" ? "AND COALESCE(map_extract(tags, 'type')[1], '') <> 'building'" : ""};
    `)).toArray();
		if (a.length === 0) return {
			records: [],
			skipped: 0
		};
		let o = (await this.conn.query(`
      SELECT id, refs
      FROM ${i}
      WHERE kind = 'way';
    `)).toArray(), s = (await this.conn.query(`
      SELECT id, lat, lon
      FROM ${i}
      WHERE kind = 'node';
    `)).toArray(), c = /* @__PURE__ */ new Map();
		for (let e of o) c.set(this.toNumber(e.id), this.toNumberArray(e.refs));
		let l = /* @__PURE__ */ new Map();
		for (let e of s) l.set(this.toNumber(e.id), [e.lon, e.lat]);
		let u = [], d = 0;
		for (let e of a) {
			let t = this.buildRelationGeometry(e, c, l);
			if (!t) {
				d++;
				continue;
			}
			let n = this.parseTags(e.tags_json);
			u.push({
				id: this.toNumber(e.id),
				tags: Object.entries(n).map(([e, t]) => ({
					k: e,
					v: t
				})),
				geometry: t
			});
		}
		return d > 0 && console.warn(`[autk-db] ${t}: ${d} relations skipped (missing member ways or geometry).`), {
			records: u,
			skipped: d
		};
	}
	buildRelationGeometry(e, t, n) {
		let r = this.toNumberArray(e.refs), i = this.toStringArray(e.ref_roles), a = this.toStringArray(e.ref_types), o = [], s = [];
		r.forEach((e, t) => {
			if (a[t] !== "way") return;
			let n = i[t] ?? "";
			n === "inner" ? s.push(e) : (n === "outer" || n === "") && o.push(e);
		});
		let c = this.buildClosedRings(o, t, n), l = this.buildClosedRings(s, t, n);
		if (c.length === 0) return null;
		let u = c.map((e) => [e.coordinates]);
		for (let t of l) {
			let n = c.length === 1 ? 0 : c.findIndex((e) => this.ringContainsPosition(e.coordinates, t.coordinates[0]));
			n === -1 ? console.warn(`[autk-db] Skipped unmatched inner ring in relation ${String(e.id)}.`) : u[n].push(t.coordinates);
		}
		return u.length === 1 ? {
			type: "Polygon",
			coordinates: u[0]
		} : {
			type: "MultiPolygon",
			coordinates: u
		};
	}
	buildClosedRings(e, t, n) {
		let r = [], i = [];
		for (let a of e) {
			let e = t.get(a);
			if (!e || e.length < 2) continue;
			let o = e.map((e) => n.get(e));
			if (o.some((e) => !e)) continue;
			let s = {
				refs: [...e],
				coordinates: o
			};
			e.length > 3 && e[0] === e[e.length - 1] ? r.push(s) : i.push(s);
		}
		return [...r, ...this.stitchOpenWaySegmentsIntoRings(i)];
	}
	stitchOpenWaySegmentsIntoRings(e) {
		let t = [...e], n = [];
		for (; t.length > 0;) {
			let e = t.shift(), r = !0;
			for (; r;) {
				r = !1;
				for (let n = 0; n < t.length; n++) {
					let i = this.tryMergeRings(e, t[n]);
					if (i) {
						e = i, t.splice(n, 1), r = !0;
						break;
					}
				}
			}
			e.refs.length > 3 && e.refs[0] === e.refs[e.refs.length - 1] && n.push(e);
		}
		return n;
	}
	tryMergeRings(e, t) {
		let n = e.refs[0], r = e.refs[e.refs.length - 1], i = t.refs[0], a = t.refs[t.refs.length - 1];
		return r === i ? this.concatRings(e, t) : r === a ? this.concatRings(e, this.reverseRing(t)) : n === a ? this.concatRings(t, e) : n === i ? this.concatRings(this.reverseRing(t), e) : null;
	}
	concatRings(e, t) {
		return {
			refs: [...e.refs, ...t.refs.slice(1)],
			coordinates: [...e.coordinates, ...t.coordinates.slice(1)]
		};
	}
	reverseRing(e) {
		return {
			refs: [...e.refs].reverse(),
			coordinates: [...e.coordinates].reverse()
		};
	}
	ringContainsPosition(e, t) {
		let [n, r] = t, i = !1;
		for (let t = 0, a = e.length - 1; t < e.length; a = t++) {
			let [o, s] = e[t], [c, l] = e[a];
			s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
		}
		return i;
	}
	parseTags(e) {
		let t = typeof e == "string" ? JSON.parse(e) : e;
		if (!t) return {};
		if (t instanceof Map) return Object.fromEntries([...t.entries()].map(([e, t]) => [String(e), String(t)]));
		if (Array.isArray(t)) {
			let e = t.flatMap((e) => {
				if (!e || typeof e != "object") return [];
				let t = e;
				return "k" in t && "v" in t ? [[String(t.k), String(t.v)]] : "key" in t && "value" in t ? [[String(t.key), String(t.value)]] : [];
			});
			return Object.fromEntries(e);
		}
		return typeof t == "object" ? Object.fromEntries(Object.entries(t).map(([e, t]) => [e, String(t)])) : {};
	}
	toNumberArray(e) {
		return e ? Array.from(e).map((e) => this.toNumber(e)) : [];
	}
	toStringArray(e) {
		return e ? Array.from(e).map((e) => String(e)) : [];
	}
	toNumber(e) {
		return Number(e);
	}
}, N_ = 4294967296;
1 / N_;
var P_ = 12, F_ = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8"), I_ = 0, L_ = 1, R_ = 2, z_ = 5, B_ = class {
	constructor(e) {
		this.buf = ArrayBuffer.isView(e) ? e : new Uint8Array(e), this.dataView = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.pos = 0, this.type = 0, this._valueStart = -1, this.length = this.buf.length;
	}
	readFields(e, t, n = this.length) {
		let r;
		for (; r = this.nextField(n);) e(r, t, this);
		return t;
	}
	readMessage(e, t) {
		return this.readFields(e, t, this.readVarint() + this.pos);
	}
	readFixed32() {
		let e = this.dataView.getUint32(this.pos, !0);
		return this.pos += 4, e;
	}
	readSFixed32() {
		let e = this.dataView.getInt32(this.pos, !0);
		return this.pos += 4, e;
	}
	readFixed64() {
		let e = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * N_;
		return this.pos += 8, e;
	}
	readSFixed64() {
		let e = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * N_;
		return this.pos += 8, e;
	}
	readFloat() {
		let e = this.dataView.getFloat32(this.pos, !0);
		return this.pos += 4, e;
	}
	readDouble() {
		let e = this.dataView.getFloat64(this.pos, !0);
		return this.pos += 8, e;
	}
	readVarint(e) {
		let t = this.buf, n = t[this.pos++];
		if (n < 128) return n;
		let r = n & 127, i;
		return i = t[this.pos++], r |= (i & 127) << 7, i < 128 || (i = t[this.pos++], r |= (i & 127) << 14, i < 128) || (i = t[this.pos++], r |= (i & 127) << 21, i < 128) ? r : (i = t[this.pos], r |= (i & 15) << 28, V_(r, e, this));
	}
	readSVarint() {
		let e = this.readVarint();
		return e % 2 == 1 ? (e + 1) / -2 : e / 2;
	}
	readBoolean() {
		return !!this.readVarint();
	}
	readString() {
		let e = this.readVarint() + this.pos, t = this.pos;
		return this.pos = e, e - t >= P_ && F_ ? F_.decode(this.buf.subarray(t, e)) : U_(this.buf, t, e);
	}
	readBytes() {
		let e = this.readVarint() + this.pos, t = this.buf.subarray(this.pos, e);
		return this.pos = e, t;
	}
	readPackedVarint(e = [], t) {
		let n = this.readPackedEnd();
		for (; this.pos < n;) e.push(this.readVarint(t));
		return e;
	}
	readPackedSVarint(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readSVarint());
		return e;
	}
	readPackedBoolean(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readBoolean());
		return e;
	}
	readPackedFloat(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readFloat());
		return e;
	}
	readPackedDouble(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readDouble());
		return e;
	}
	readPackedFixed32(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readFixed32());
		return e;
	}
	readPackedSFixed32(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readSFixed32());
		return e;
	}
	readPackedFixed64(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readFixed64());
		return e;
	}
	readPackedSFixed64(e = []) {
		let t = this.readPackedEnd();
		for (; this.pos < t;) e.push(this.readSFixed64());
		return e;
	}
	readPackedEnd() {
		return this.type === R_ ? this.readVarint() + this.pos : this.pos + 1;
	}
	nextField(e = this.length) {
		if (this.pos === this._valueStart && this.skip(this.type), this.pos >= e) return 0;
		let t = this.readVarint();
		return this.type = t & 7, this._valueStart = this.pos, t >>> 3;
	}
	skip(e) {
		let t = e & 7;
		if (t === I_) for (; this.buf[this.pos++] > 127;);
		else if (t === R_) this.pos = this.readVarint() + this.pos;
		else if (t === z_) this.pos += 4;
		else if (t === L_) this.pos += 8;
		else throw Error(`Unimplemented type: ${t}`);
	}
};
function V_(e, t, n) {
	let r = n.buf, i, a;
	if (a = r[n.pos++], i = (a & 112) >> 4, a < 128 || (a = r[n.pos++], i |= (a & 127) << 3, a < 128) || (a = r[n.pos++], i |= (a & 127) << 10, a < 128) || (a = r[n.pos++], i |= (a & 127) << 17, a < 128) || (a = r[n.pos++], i |= (a & 127) << 24, a < 128) || (a = r[n.pos++], i |= (a & 1) << 31, a < 128)) return H_(e, i, t);
	throw Error("Expected varint not more than 10 bytes");
}
function H_(e, t, n) {
	return n ? t * 4294967296 + (e >>> 0) : (t >>> 0) * 4294967296 + (e >>> 0);
}
function U_(e, t, n) {
	let r = "", i = t;
	for (; i < n;) {
		let t = e[i], a = null, o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
		if (i + o > n) break;
		let s, c, l;
		o === 1 ? t < 128 && (a = t) : o === 2 ? (s = e[i + 1], (s & 192) == 128 && (a = (t & 31) << 6 | s & 63, a <= 127 && (a = null))) : o === 3 ? (s = e[i + 1], c = e[i + 2], (s & 192) == 128 && (c & 192) == 128 && (a = (t & 15) << 12 | (s & 63) << 6 | c & 63, (a <= 2047 || a >= 55296 && a <= 57343) && (a = null))) : o === 4 && (s = e[i + 1], c = e[i + 2], l = e[i + 3], (s & 192) == 128 && (c & 192) == 128 && (l & 192) == 128 && (a = (t & 15) << 18 | (s & 63) << 12 | (c & 63) << 6 | l & 63, (a <= 65535 || a >= 1114112) && (a = null))), a === null ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r += String.fromCharCode(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r += String.fromCharCode(a), i += o;
	}
	return r;
}
//#endregion
//#region ../node_modules/@osmix/pbf/dist/proto/osmformat.js
function W_(e, t) {
	return e.readFields(G_, {
		required_features: [],
		optional_features: []
	}, t);
}
function G_(e, t, n) {
	e === 1 ? t.bbox = K_(n, n.readVarint() + n.pos) : e === 4 ? t.required_features.push(n.readString()) : e === 5 ? t.optional_features.push(n.readString()) : e === 16 ? t.writingprogram = n.readString() : e === 17 ? t.source = n.readString() : e === 32 ? t.osmosis_replication_timestamp = n.readVarint(!0) : e === 33 ? t.osmosis_replication_sequence_number = n.readVarint(!0) : e === 34 && (t.osmosis_replication_base_url = n.readString());
}
function K_(e, t) {
	return e.readFields(q_, {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, t);
}
function q_(e, t, n) {
	e === 1 ? t.left = n.readSVarint() / 1e9 : e === 2 ? t.right = n.readSVarint() / 1e9 : e === 3 ? t.top = n.readSVarint() / 1e9 : e === 4 && (t.bottom = n.readSVarint() / 1e9);
}
function J_(e, t) {
	return e.readFields(Y_, {
		stringtable: [],
		primitivegroup: []
	}, t);
}
function Y_(e, t, n) {
	e === 1 ? t.stringtable = Q_(n, n.readVarint() + n.pos) : e === 2 ? t.primitivegroup.push(X_(n, n.readVarint() + n.pos)) : e === 17 ? (t.granularity = n.readVarint(!0), t.granularity = t.granularity ? 1e9 / t.granularity : 1e7) : e === 19 ? t.lat_offset = n.readVarint(!0) * 1e-9 : e === 20 ? t.lon_offset = n.readVarint(!0) * 1e-9 : e === 18 && (t.date_granularity = n.readVarint(!0) ?? 1e3);
}
function X_(e, t) {
	return e.readFields(Z_, {
		nodes: [],
		ways: [],
		relations: []
	}, t);
}
function Z_(e, t, n) {
	e === 1 ? t.nodes.push(iv(n, n.readVarint() + n.pos)) : e === 2 ? t.dense = ov(n, n.readVarint() + n.pos) : e === 3 ? t.ways.push(cv(n, n.readVarint() + n.pos)) : e === 4 && t.relations.push(uv(n, n.readVarint() + n.pos));
}
function Q_(e, t) {
	return e.readFields($_, [], t);
}
function $_(e, t, n) {
	e === 1 && t.push(n.readBytes());
}
function ev(e, t) {
	return e.readFields(tv, {}, t);
}
function tv(e, t, n) {
	e === 1 ? t.version = n.readVarint(!0) : e === 2 ? t.timestamp = n.readVarint(!0) : e === 3 ? t.changeset = n.readVarint(!0) : e === 4 ? t.uid = n.readVarint(!0) : e === 5 ? t.user_sid = n.readVarint() : e === 6 && (t.visible = n.readBoolean());
}
function nv(e, t) {
	return e.readFields(rv, {
		version: [],
		timestamp: [],
		changeset: [],
		uid: [],
		user_sid: [],
		visible: []
	}, t);
}
function rv(e, t, n) {
	e === 1 ? n.readPackedVarint(t.version, !0) : e === 2 ? n.readPackedSVarint(t.timestamp) : e === 3 ? n.readPackedSVarint(t.changeset) : e === 4 ? n.readPackedSVarint(t.uid) : e === 5 ? n.readPackedSVarint(t.user_sid) : e === 6 && n.readPackedBoolean(t.visible);
}
function iv(e, t) {
	return e.readFields(av, {
		id: 0,
		keys: [],
		vals: [],
		lat: 0,
		lon: 0
	}, t);
}
function av(e, t, n) {
	e === 1 ? t.id = n.readSVarint() : e === 2 ? n.readPackedVarint(t.keys) : e === 3 ? n.readPackedVarint(t.vals) : e === 4 ? t.info = ev(n, n.readVarint() + n.pos) : e === 8 ? t.lat = n.readSVarint() : e === 9 && (t.lon = n.readSVarint());
}
function ov(e, t) {
	return e.readFields(sv, {
		id: [],
		lat: [],
		lon: [],
		keys_vals: []
	}, t);
}
function sv(e, t, n) {
	e === 1 ? n.readPackedSVarint(t.id) : e === 5 ? t.denseinfo = nv(n, n.readVarint() + n.pos) : e === 8 ? n.readPackedSVarint(t.lat) : e === 9 ? n.readPackedSVarint(t.lon) : e === 10 && n.readPackedVarint(t.keys_vals, !0);
}
function cv(e, t) {
	return e.readFields(lv, {
		id: 0,
		keys: [],
		vals: [],
		refs: [],
		lat: [],
		lon: []
	}, t);
}
function lv(e, t, n) {
	e === 1 ? t.id = n.readVarint(!0) : e === 2 ? n.readPackedVarint(t.keys) : e === 3 ? n.readPackedVarint(t.vals) : e === 4 ? t.info = ev(n, n.readVarint() + n.pos) : e === 8 && n.readPackedSVarint(t.refs);
}
function uv(e, t) {
	return e.readFields(dv, {
		id: 0,
		keys: [],
		vals: [],
		roles_sid: [],
		memids: [],
		types: []
	}, t);
}
function dv(e, t, n) {
	e === 1 ? t.id = n.readVarint(!0) : e === 2 ? n.readPackedVarint(t.keys) : e === 3 ? n.readPackedVarint(t.vals) : e === 4 ? t.info = ev(n, n.readVarint() + n.pos) : e === 8 ? n.readPackedVarint(t.roles_sid, !0) : e === 9 ? n.readPackedSVarint(t.memids) : e === 10 && n.readPackedVarint(t.types);
}
var fv = 65536, pv = 33554432;
//#endregion
//#region ../node_modules/@osmix/pbf/dist/utils.js
async function* mv(e) {
	let t = await e;
	if (t == null) throw Error("Value is null");
	if (t instanceof ReadableStream) {
		let e = t.getReader(), n = !1;
		try {
			for (;;) {
				let { done: t, value: r } = await e.read();
				if (t) {
					n = !0;
					break;
				}
				yield r;
			}
		} finally {
			n || await e.cancel().catch(() => void 0), e.releaseLock();
		}
	} else if (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) yield t;
	else if (typeof t == "object" && Symbol.asyncIterator in t) for await (let e of t) yield e;
	else if (typeof t == "object" && Symbol.iterator in t) for (let e of t) yield e;
	else yield t;
}
function hv(e) {
	return new ReadableStream({ start(t) {
		t.enqueue(e), t.close();
	} });
}
async function gv(e, t = Infinity) {
	let n = e.getReader(), r = [], i = 0;
	try {
		for (;;) {
			let { done: e, value: a } = await n.read();
			if (e) break;
			if (a !== void 0) {
				if (a.byteLength > t - i) throw await n.cancel("Decompressed output exceeds the maximum size"), Error(`Decompressed blob exceeds ${t} bytes`);
				r.push(a), i += a.byteLength;
			}
		}
	} finally {
		n.releaseLock();
	}
	let a = new Uint8Array(new ArrayBuffer(i)), o = 0;
	for (let e of r) a.set(e, o), o += e.length;
	return a;
}
async function _v(e, t, n = Infinity) {
	return gv(hv(e).pipeThrough(t), n);
}
async function vv(e, t = pv) {
	return _v(e, new DecompressionStream("deflate"), t);
}
//#endregion
//#region ../node_modules/@osmix/pbf/dist/pbf-to-blocks.js
async function yv(e) {
	let t = Tv(), n = Ov((async function* () {
		for await (let n of mv(e)) for (let e of t.nextChunk(n)) yield e;
		t.finish();
	})()), r = (await n.next()).value;
	if (r == null || !("required_features" in r)) throw Error("OSM PBF header block not found");
	return {
		header: r,
		blocks: n
	};
}
TransformStream;
//#endregion
//#region ../node_modules/@osmix/pbf/dist/proto/fileformat.js
function bv(e, t) {
	return e.readFields(xv, { raw_size: 0 }, t);
}
function xv(e, t, n) {
	e === 2 ? t.raw_size = n.readVarint(!0) : e === 1 ? t.raw = n.readBytes() : e === 3 && (t.zlib_data = n.readBytes());
}
function Sv(e, t) {
	return e.readFields(Cv, {
		type: "OSMData",
		datasize: 0
	}, t);
}
function Cv(e, t, n) {
	e === 1 ? t.type = n.readString() : e === 3 && (t.datasize = n.readVarint(!0));
}
//#endregion
//#region ../node_modules/@osmix/pbf/dist/pbf-to-blobs.js
var wv = (e) => /* @__PURE__ */ Error(`Invalid PBF frame: ${e}`);
function Tv() {
	let e = new B_(/* @__PURE__ */ new Uint8Array()), t = "header-length", n = 4, r = null;
	return {
		nextChunk: function* (i) {
			let a = i instanceof Uint8Array ? i : new Uint8Array(i), o = e.buf.subarray(e.pos);
			if (o.byteLength === 0) e = new B_(a);
			else {
				let t = new Uint8Array(o.byteLength + a.byteLength);
				t.set(o), t.set(a, o.byteLength), e = new B_(t);
			}
			for (; e.pos + n <= e.length;) if (t === "header-length") {
				let r = new DataView(e.buf.buffer, e.buf.byteOffset, e.buf.byteLength).getUint32(e.pos, !1);
				if (r === 0) throw wv("header length is zero");
				if (r > 65536) throw wv(`header length exceeds ${fv} bytes`);
				e.pos += 4, n = r, t = "header";
			} else if (t === "header") {
				if (r = Sv(e, e.pos + n), r.datasize === 0) throw wv("blob size is zero");
				if (r.datasize > 33554432) throw wv(`blob size exceeds ${pv} bytes`);
				n = r.datasize, t = "blob";
			} else {
				if (r == null) throw Error("Blob header has not been read");
				let i = bv(e, e.pos + n);
				if (i.zlib_data === void 0 || i.zlib_data.length === 0) throw Error("Blob has no zlib data. Format is unsupported.");
				if (i.raw_size === 0) throw wv("raw size is zero");
				if (i.raw_size != null && i.raw_size > 33554432) throw wv(`raw size exceeds ${pv} bytes`);
				yield {
					data: i.zlib_data,
					rawSize: i.raw_size && i.raw_size > 0 ? i.raw_size : void 0
				}, t = "header-length", n = 4, r = null;
			}
		},
		finish: () => {
			if (t !== "header-length" || e.pos !== e.length) throw wv(`truncated ${t}`);
		}
	};
}
//#endregion
//#region ../node_modules/@osmix/pbf/dist/blobs-to-blocks.js
function Ev(e) {
	return e instanceof Uint8Array ? { data: e } : e;
}
async function Dv(e, t) {
	let n = await t(e.data, pv);
	if (n.byteLength > 33554432) throw Error(`Decompressed blob exceeds ${pv} bytes`);
	if (e.rawSize !== void 0 && n.byteLength !== e.rawSize) throw Error(`Decompressed blob size ${n.byteLength} does not match declared raw size ${e.rawSize}`);
	return n;
}
async function* Ov(e, t = vv) {
	let n = !1;
	for await (let r of e) {
		let e = Ev(r);
		n ? yield Av(e, t) : (n = !0, yield kv(e, t));
	}
}
async function kv(e, t = vv) {
	return W_(new B_(await Dv(Ev(e), t)));
}
async function Av(e, t = vv) {
	return J_(new B_(await Dv(Ev(e), t)));
}
TransformStream;
//#endregion
//#region src/use-cases/load-osm-pbf/osm-pbf-parser.ts
var jv = new TextDecoder();
function Mv(e) {
	let t = [], n = e.stringtable, r = (e) => jv.decode(n[e]);
	for (let n of e.primitivegroup) {
		for (let i of n.nodes ?? []) t.push(Nv(i, e, r));
		n.dense && t.push(...Pv(n.dense, e, r));
		for (let i of n.ways ?? []) t.push(Fv(i, e, r));
		for (let i of n.relations ?? []) t.push(Iv(i, e, r));
	}
	return t;
}
function Nv(e, t, n) {
	return {
		type: "node",
		id: e.id,
		lat: Rv(t, e.lat),
		lon: zv(t, e.lon),
		tags: Lv(e.keys, e.vals, t, n)
	};
}
function Pv(e, t, n) {
	let r = [], { id: i, lat: a, lon: o, keys_vals: s } = e, c = 0, l = 0, u = 0, d = 0;
	for (let e = 0; e < i.length; e++) {
		c += i[e], l += a[e], u += o[e];
		let f = {};
		for (; d < s.length;) {
			let e = s[d];
			if (e === 0) {
				d++;
				break;
			}
			let t = s[d + 1];
			f[n(e)] = n(t), d += 2;
		}
		r.push({
			type: "node",
			id: c,
			lat: Rv(t, l),
			lon: zv(t, u),
			tags: Object.keys(f).length > 0 ? f : void 0
		});
	}
	return r;
}
function Fv(e, t, n) {
	let r = [], i = 0;
	for (let t of e.refs) i += t, r.push(i);
	return {
		type: "way",
		id: e.id,
		nodes: r,
		geometry: void 0,
		tags: Lv(e.keys, e.vals, t, n)
	};
}
function Iv(e, t, n) {
	let r = [], i = 0;
	for (let t = 0; t < e.memids.length; t++) {
		i += e.memids[t];
		let a = e.types[t];
		r.push({
			type: {
				0: "node",
				1: "way",
				2: "relation"
			}[a] ?? "node",
			ref: i,
			role: e.roles_sid[t] === void 0 ? "" : n(e.roles_sid[t])
		});
	}
	return {
		type: "relation",
		id: e.id,
		members: r,
		tags: Lv(e.keys, e.vals, t, n)
	};
}
function Lv(e, t, n, r) {
	if (e.length === 0) return;
	let i = {};
	for (let n = 0; n < e.length; n++) i[r(e[n])] = r(t[n]);
	return i;
}
function Rv(e, t) {
	return t / (e.granularity ?? 1e7) + (e.lat_offset ?? 0);
}
function zv(e, t) {
	return t / (e.granularity ?? 1e7) + (e.lon_offset ?? 0);
}
function Bv(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) n.type === "node" && n.lat !== void 0 && n.lon !== void 0 && t.set(n.id, {
		lat: n.lat,
		lon: n.lon
	});
	for (let n of e) if (n.type === "way" && n.nodes && n.nodes.length > 0) {
		let e = [];
		for (let r of n.nodes) {
			let n = t.get(r);
			n && e.push(n);
		}
		e.length > 0 && (n.geometry = e);
	}
	return t;
}
//#endregion
//#region src/use-cases/load-osm-pbf/use-case.ts
var Vv = class {
	bits;
	bitCount;
	constructor(e = 1 << 27) {
		this.bitCount = e, this.bits = new Uint8Array(Math.ceil(e / 8));
	}
	add(e) {
		this.setBit(this.hash1(e)), this.setBit(this.hash2(e)), this.setBit(this.hash3(e));
	}
	has(e) {
		return this.getBit(this.hash1(e)) && this.getBit(this.hash2(e)) && this.getBit(this.hash3(e));
	}
	setBit(e) {
		this.bits[e >> 3] |= 1 << (e & 7);
	}
	getBit(e) {
		return !!(this.bits[e >> 3] & 1 << (e & 7));
	}
	hash1(e) {
		return this.mix(e, 2654435761);
	}
	hash2(e) {
		return this.mix(e, 2246822507);
	}
	hash3(e) {
		return this.mix(e, 3266489909);
	}
	mix(e, t) {
		let n = Math.floor(e) ^ t;
		return n = Math.imul(n ^ n >>> 16, 73244475), n = Math.imul(n ^ n >>> 16, 73244475), n ^= n >>> 16, (n >>> 0) % this.bitCount;
	}
}, Hv = class {
	conn;
	pipeline;
	constructor(e, t) {
		this.conn = e, this.pipeline = t;
	}
	async exec(e) {
		if (O(e.tagSets).length > 0) throw Error("tagSets are not supported with pbfFileUrl.");
		let t = e.pbfFileUrl;
		if (!t) throw Error("pbfFileUrl must be provided for PBF loading");
		let n = e.workspace || "autk", r = e.outputTableName || "table_osm", i = e.onProgress, a = this.getRequestedLayers(e);
		i?.("downloading-osm-data");
		let o = E(e.queryArea) ? D(e.queryArea) : null, s = o ? {
			boundaryRelationIds: /* @__PURE__ */ new Set(),
			boundaryWayIds: /* @__PURE__ */ new Set(),
			bbox: o,
			geocodeExtent: o
		} : await this.collectBoundaryContext(t, e.queryArea), c = s.bbox;
		i?.("processing-osm-data"), console.log("[autk-db] PBF pass 3/3: thematic collection started");
		let l = await this.collectCandidateWaysAndRelations(t, s.boundaryRelationIds, s.boundaryWayIds, a);
		await this.collectRequiredNodes(t, l.requiredNodeIds, l.elements), Bv(l.elements);
		let u = this.filterFinalElements(l.elements, c, s.boundaryRelationIds, s.boundaryWayIds), d = this.buildGroupedCollections(u, s.boundaryRelationIds, s.boundaryWayIds);
		console.log("[autk-db] PBF pass 3/3: thematic collection finished"), console.log(`[autk-db] PBF filter summary: boundaries=${d.boundaries.elements.length}, parks+water=${d.parksWater.elements.length}, roads=${d.roads.elements.length}, buildings=${d.buildings.elements.length}, total=${u.length}`);
		let f = s.geocodeExtent, p = l.elements.filter((e) => e.type === "way" && e.tags?.natural === "coastline" && (!f || !e.geometry || this.wayIntersectsBbox(e, f))), m = f ? un(p, f) : void 0;
		f || console.warn("[autk-db] No complete geocode boundary in PBF; coastal water is not generated. Include the geocode region and all its bbox coastlines in the extract.");
		let h = this.mergeResponses(this.mergeResponses(d.boundaries, d.parksWater), this.mergeResponses(d.roads, d.buildings)), { osmData: g, boundariesData: _ } = o ? {
			osmData: h,
			boundariesData: this.pipeline.boundingBoxBoundary(o)
		} : this.pipeline.splitCombinedResponse(h, e.queryArea), v = performance.now();
		await this.pipeline.insertOsmDataUsingJson(r, g, n);
		let y = performance.now() - v;
		i?.("processing-boundaries");
		let b = performance.now();
		await this.pipeline.insertOsmDataUsingJson(`${r}_boundaries`, _, n, !0);
		let x = performance.now() - b, S = `${n}.${r}`, C = dn((await this.conn.query(`DESCRIBE ${S}`)).toArray());
		return {
			tables: [{
				source: "osm",
				name: r,
				columns: C
			}, {
				source: "osm",
				name: `${r}_boundaries`,
				columns: C
			}],
			surfaceMask: m,
			queryExtent: c,
			coastlineExtent: f,
			osmElementCount: g.elements.length,
			boundaryElementCount: _.elements.length,
			osmDataProcessingMs: y,
			boundariesProcessingMs: x
		};
	}
	getRequestedLayers(e) {
		return e.autoLoadLayers.layers.filter((e) => e === "roads" || e === "buildings" || e === "parks" || e === "water");
	}
	async collectBoundaryContext(e, t) {
		console.log("[autk-db] PBF pass 1/3: boundary discovery started");
		let n = /* @__PURE__ */ new Set([t.geocodeArea, ...t.areas]), r = [], i = /* @__PURE__ */ new Set(), a = new Vv();
		await this.streamPbfBlocks(e, async (e) => {
			for (let t of e) if (t.type === "relation" && t.tags?.boundary && n.has(t.tags.name)) {
				r.push(t);
				for (let e of t.members ?? []) e.type === "way" && i.add(e.ref), e.type === "node" && a.add(e.ref);
			}
		}), console.log("[autk-db] PBF pass 2/3: scoped boundary geometry collection started"), await this.streamPbfBlocks(e, async (e) => {
			for (let t of e) if (t.type === "way" && i.has(t.id)) {
				r.push(t);
				for (let e of t.nodes ?? []) a.add(e);
			}
		}), await this.collectRequiredNodes(e, a, r), Bv(r);
		let { relations: o, geocodeExtent: s } = mn(r, t), c = new Set(o.map((e) => e.id)), l = new Set(o.flatMap((e) => (e.members ?? []).filter((e) => e.type === "way").map((e) => e.ref))), u = this.pipeline.computeBboxFromElements(r.filter((e) => e.type === "way" && l.has(e.id)));
		if (!u) throw Error("Failed to compute bounding box from scoped boundary elements");
		return console.log(`[autk-db] PBF scoped boundary discovery finished (${c.size} relations, ${l.size} ways)`), {
			boundaryRelationIds: c,
			boundaryWayIds: l,
			bbox: u,
			geocodeExtent: s
		};
	}
	async collectCandidateWaysAndRelations(e, t, n, r) {
		let i = [], a = /* @__PURE__ */ new Set();
		await this.streamPbfBlocks(e, async (e) => {
			for (let n of e) if (n.type === "relation" && (t.has(n.id) || this.matchesRequestedRelationLayers(n.tags, r))) {
				i.push(n);
				for (let e of n.members ?? []) e.type === "way" && a.add(e.ref);
			}
		});
		let o = new Vv();
		return await this.streamPbfBlocks(e, async (e) => {
			for (let t of e) if (t.type === "way" && (n.has(t.id) || t.tags?.natural === "coastline" || a.has(t.id) || this.matchesRequestedWayLayers(t.tags, r))) {
				i.push(t);
				for (let e of t.nodes ?? []) o.add(e);
			}
		}), {
			elements: i,
			requiredNodeIds: o
		};
	}
	async collectRequiredNodes(e, t, n) {
		await this.streamPbfBlocks(e, async (e) => {
			for (let r of e) r.type === "node" && t.has(r.id) && n.push(r);
		});
	}
	filterFinalElements(e, t, n, r) {
		let i = new Vv();
		for (let n of e) n.type === "way" && (r.has(n.id) || this.wayIntersectsBbox(n, t)) && i.add(n.id);
		let a = new Vv(), o = new Vv();
		for (let t of e) {
			if (t.type !== "relation") continue;
			if (n.has(t.id)) {
				a.add(t.id);
				for (let e of t.members ?? []) e.type === "way" && o.add(e.ref);
				continue;
			}
			let e = this.getRelationWayRefs(t);
			if (e.some((e) => i.has(e))) {
				a.add(t.id);
				for (let t of e) o.add(t);
			}
		}
		let s = new Vv();
		for (let t of e) t.type === "way" && (i.has(t.id) || o.has(t.id)) && s.add(t.id);
		let c = new Vv();
		for (let t of e) if (t.type === "way" && s.has(t.id)) for (let e of t.nodes ?? []) c.add(e);
		return e.filter((e) => e.type === "way" ? s.has(e.id) : e.type === "node" ? c.has(e.id) : e.type === "relation" && a.has(e.id));
	}
	buildGroupedCollections(e, t, n) {
		let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = new Vv(), c = new Vv(), l = new Vv(), u = new Vv(), d = [], f = [], p = [], m = [], h = (e, t) => {
			for (let n of e ?? []) t.add(n);
		};
		for (let n of e) if (n.type === "relation") {
			if (t.has(n.id)) {
				d.push(n);
				for (let e of n.members ?? []) e.type === "way" && r.add(e.ref);
			} else if (this.isBuildingTagSet(n.tags ?? {})) {
				m.push(n);
				for (let e of n.members ?? []) e.type === "way" && o.add(e.ref);
			} else if (this.isRoadTagSet(n.tags ?? {})) {
				p.push(n);
				for (let e of n.members ?? []) e.type === "way" && a.add(e.ref);
			} else if (this.isParkTagSet(n.tags ?? {}) || this.isWaterTagSet(n.tags ?? {})) {
				f.push(n);
				for (let e of n.members ?? []) e.type === "way" && i.add(e.ref);
			}
		}
		for (let t of e) t.type === "way" && (n.has(t.id) || r.has(t.id) ? (d.push(t), r.add(t.id), h(t.nodes, s)) : o.has(t.id) || this.isBuildingTagSet(t.tags ?? {}) ? (m.push(t), o.add(t.id), h(t.nodes, u)) : a.has(t.id) || this.isRoadTagSet(t.tags ?? {}) ? (p.push(t), a.add(t.id), h(t.nodes, l)) : (i.has(t.id) || this.isParkTagSet(t.tags ?? {}) || this.isWaterTagSet(t.tags ?? {})) && (f.push(t), i.add(t.id), h(t.nodes, c)));
		for (let t of e) t.type === "node" && (s.has(t.id) && d.push(t), c.has(t.id) && f.push(t), l.has(t.id) && p.push(t), u.has(t.id) && m.push(t));
		return {
			boundaries: { elements: d },
			parksWater: { elements: f },
			roads: { elements: p },
			buildings: { elements: m }
		};
	}
	mergeResponses(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let t of e.elements) n.add(`${t.type}:${t.id}`);
		let r = t.elements.filter((e) => !n.has(`${e.type}:${e.id}`));
		return { elements: [...e.elements, ...r] };
	}
	getRelationWayRefs(e) {
		return (e.members ?? []).filter((e) => e.type === "way").map((e) => e.ref);
	}
	wayIntersectsBbox(e, t) {
		let n = e.geometry;
		if (!n || n.length === 0) return !1;
		let r = Infinity, i = -Infinity, a = Infinity, o = -Infinity;
		for (let e of n) e.lat < r && (r = e.lat), e.lat > i && (i = e.lat), e.lon < a && (a = e.lon), e.lon > o && (o = e.lon);
		return !(i < t.south || r > t.north || o < t.west || a > t.east);
	}
	async streamPbfBlocks(e, t) {
		let n = await fetch(e);
		if (!n.ok || !n.body) throw Error(`Failed to fetch PBF file: ${n.status} ${n.statusText}`);
		let { blocks: r } = await yv(n.body);
		for await (let e of r) await t(Mv(e));
	}
	matchesRequestedWayLayers(e, t) {
		if (!e) return !1;
		for (let n of t) switch (n) {
			case "roads":
				if (this.isRoadTagSet(e)) return !0;
				break;
			case "buildings":
				if (this.isBuildingTagSet(e)) return !0;
				break;
			case "parks":
				if (this.isParkTagSet(e)) return !0;
				break;
			case "water": if (this.isWaterTagSet(e)) return !0;
		}
		return !1;
	}
	matchesRequestedRelationLayers(e, t) {
		return this.matchesRequestedWayLayers(e, t);
	}
	isRoadTagSet(e) {
		return e.highway !== void 0 && e.area !== "yes" && !this.hasTagValue(e, "highway", b);
	}
	isBuildingTagSet(e) {
		return e.building !== void 0 && !this.hasTagValue(e, "building", x) || e["building:part"] !== void 0 && !this.hasTagValue(e, "building:part", x) || e.type === "building" || e.type === "multipolygon" && e.building !== void 0 && !this.hasTagValue(e, "building", x) || e.type === "multipolygon" && e["building:part"] !== void 0 && !this.hasTagValue(e, "building:part", x);
	}
	isParkTagSet(e) {
		return this.hasTagValue(e, "leisure", h) || this.hasTagValue(e, "landuse", g) || this.hasTagValue(e, "natural", _);
	}
	isWaterTagSet(e) {
		return this.hasTagValue(e, "natural", v) || this.hasTagValue(e, "water", y);
	}
	hasTagValue(e, t, n) {
		let r = e[t];
		return r !== void 0 && n.includes(r);
	}
}, Uv = (e, t) => `
  CREATE OR REPLACE TABLE ${`${t}.${e}`} (
    kind VARCHAR,
    id BIGINT,
    tags MAP(VARCHAR, VARCHAR),
    refs BIGINT[],
    lat DOUBLE,
    lon DOUBLE,
    ref_roles VARCHAR[],
    ref_types VARCHAR[]
  );
`, Wv = (e, t, n, r = !1) => `
  INSERT INTO ${`${n}.${e}`} 
  SELECT 
    kind::VARCHAR,
    id::BIGINT,
    ${r ? "NULL" : "CASE \n      WHEN tags IS NULL OR tags = [] THEN NULL\n      ELSE map_from_entries(CAST(tags AS STRUCT(k VARCHAR, v VARCHAR)[]))\n    END"} AS tags,
    refs::BIGINT[],
    lat::DOUBLE,
    lon::DOUBLE,
    ref_roles::VARCHAR[],
    ref_types::VARCHAR[]
  FROM read_json('${t}', format = 'array', columns = {
    kind: 'VARCHAR', id: 'BIGINT', tags: 'STRUCT(k VARCHAR, v VARCHAR)[]',
    refs: 'BIGINT[]', lat: 'DOUBLE', lon: 'DOUBLE', ref_roles: 'VARCHAR[]', ref_types: 'VARCHAR[]'
  });
`, Gv = class {
	db;
	conn;
	constructor(e, t) {
		this.db = e, this.conn = t;
	}
	splitCombinedResponse(e, t) {
		let n = e.elements ?? [], r = this.getBoundaryRelationIds(n, t.areas), i = /* @__PURE__ */ new Set();
		for (let e of n) if (e.type === "relation" && r.has(e.id) && e.members) for (let t of e.members) t.type === "way" && i.add(t.ref);
		let a = { elements: n.filter((e) => e.type !== "relation" || !r.has(e.id)) }, o = /* @__PURE__ */ new Set();
		for (let e of n) e.type === "way" && i.has(e.id) && e.nodes && e.nodes.forEach((e) => o.add(e));
		return {
			osmData: a,
			boundariesData: { elements: n.filter((e) => e.type === "way" && i.has(e.id) || e.type === "node" && o.has(e.id)) }
		};
	}
	boundingBoxBoundary(e) {
		let t = [
			{
				lon: e.west,
				lat: e.south
			},
			{
				lon: e.east,
				lat: e.south
			},
			{
				lon: e.east,
				lat: e.north
			},
			{
				lon: e.west,
				lat: e.north
			}
		];
		return { elements: [{
			type: "way",
			id: -1,
			nodes: [
				-1,
				-2,
				-3,
				-4,
				-1
			],
			geometry: [...t, t[0]],
			tags: { boundary: "bounding_box" }
		}] };
	}
	computeBboxFromElements(e) {
		let t = Infinity, n = -Infinity, r = Infinity, i = -Infinity, a = !1;
		for (let o of e) if (o.type === "node" && o.lat !== void 0 && o.lon !== void 0 && (o.lat < t && (t = o.lat), o.lat > n && (n = o.lat), o.lon < r && (r = o.lon), o.lon > i && (i = o.lon), a = !0), o.type === "way" && o.geometry) for (let e of o.geometry) e.lat < t && (t = e.lat), e.lat > n && (n = e.lat), e.lon < r && (r = e.lon), e.lon > i && (i = e.lon), a = !0;
		return a ? {
			south: t,
			north: n,
			west: r,
			east: i
		} : null;
	}
	getBoundaryRelationIds(e, t) {
		let n = /* @__PURE__ */ new Set(), r = new Set(t);
		for (let t of e) t.type === "relation" && t.tags?.boundary && t.tags.name && r.has(t.tags.name) && n.add(t.id);
		return n.size === 0 && console.warn(`[autk-db] Requested area boundary relations were not found by exact name match: ${t.join(", ")}`), n;
	}
	async insertOsmDataUsingJson(e, t, n, r = !1) {
		if ((t.elements?.length ?? 0) === 0) {
			await this.conn.query(Uv(e, n));
			return;
		}
		let i = this.formatOsmDataForJson(t);
		if (i.length === 0) {
			await this.conn.query(Uv(e, n));
			return;
		}
		let a = JSON.stringify(i);
		if (!a || a.trim().length === 0) throw Error(`Failed to serialize OSM JSON payload for table ${e}`);
		let o = `osm_data_${e}_${Date.now()}_${Math.random().toString(36).slice(2)}.json`;
		await this.db.registerFileText(o, a), await this.conn.query(Uv(e, n)), await this.conn.query(Wv(e, o, n, r));
		try {
			await this.db.dropFile(o);
		} catch (e) {
			console.warn(`Failed to cleanup file ${o}:`, e);
		}
	}
	formatOsmDataForJson(e) {
		let t = [], n = /* @__PURE__ */ new Map(), r = (e, r, i, a) => {
			let o = n.get(e);
			if (o) {
				a && (o.tags = Object.entries(a).map(([e, t]) => ({
					k: e,
					v: t
				})), o.lat = r, o.lon = i);
				return;
			}
			let s = {
				kind: "node",
				id: e,
				tags: a ? Object.entries(a).map(([e, t]) => ({
					k: e,
					v: t
				})) : [],
				refs: [],
				lat: r,
				lon: i,
				ref_roles: [],
				ref_types: []
			};
			n.set(e, s), t.push(s);
		};
		return e.elements.forEach((e) => {
			switch (e.type) {
				case "node":
					e.lat !== void 0 && e.lon !== void 0 && r(e.id, e.lat, e.lon, e.tags);
					break;
				case "way": {
					let n = e.nodes ?? [], i = this.withDerivedLayerTag(e.tags);
					if (e.geometry && e.geometry.length > 0 && e.nodes) for (let t = 0; t < e.nodes.length; t++) {
						let n = e.geometry[t];
						n && r(e.nodes[t], n.lat, n.lon);
					}
					t.push({
						kind: "way",
						id: e.id,
						tags: i ? Object.entries(i).map(([e, t]) => ({
							k: e,
							v: t
						})) : [],
						refs: n,
						lat: null,
						lon: null,
						ref_roles: [],
						ref_types: []
					});
					break;
				}
				case "relation": {
					let n = [], r = [], i = [], a = this.withDerivedLayerTag(e.tags);
					e.members && e.members.forEach((e) => {
						n.push(e.ref), r.push(e.role || ""), i.push(e.type);
					}), t.push({
						kind: "relation",
						id: e.id,
						tags: a ? Object.entries(a).map(([e, t]) => ({
							k: e,
							v: t
						})) : [],
						refs: n,
						lat: null,
						lon: null,
						ref_roles: r,
						ref_types: i
					});
					break;
				}
			}
		}), t;
	}
	getDerivedLayerTag(e) {
		return e ? this.isBuildingTagSet(e) ? "buildings" : this.isRoadTagSet(e) ? "roads" : this.hasTagValue(e, "leisure", h) || this.hasTagValue(e, "landuse", g) || this.hasTagValue(e, "natural", _) ? "parks" : this.hasTagValue(e, "natural", v) || this.hasTagValue(e, "water", y) ? "water" : null : null;
	}
	isRoadTagSet(e) {
		return e.highway !== void 0 && e.area !== "yes" && !this.hasTagValue(e, "highway", b);
	}
	isBuildingTagSet(e) {
		return e.building !== void 0 && !this.hasTagValue(e, "building", x) || e["building:part"] !== void 0 && !this.hasTagValue(e, "building:part", x) || e.type === "building" || e.type === "multipolygon" && e.building !== void 0 && !this.hasTagValue(e, "building", x) || e.type === "multipolygon" && e["building:part"] !== void 0 && !this.hasTagValue(e, "building:part", x);
	}
	hasTagValue(e, t, n) {
		let r = e[t];
		return r !== void 0 && n.includes(r);
	}
	withDerivedLayerTag(e) {
		if (!e) return e;
		let t = this.getDerivedLayerTag(e);
		return t ? {
			...e,
			__autk_layer: t
		} : e;
	}
}, Kv = (e, t, n) => {
	let r = `${n}.${e}`, i = `${n}.${t}`;
	return `
    CREATE OR REPLACE TABLE ${i} AS
    SELECT
      ST_GeomFromGeoJSON(JSON(feature.geometry)) AS geometry,
      feature.properties AS properties
    FROM (
      SELECT UNNEST(features) AS feature
      FROM ${r}
    );

    DROP TABLE ${r};

    DESCRIBE ${i};
  `;
}, qv = class {
	db;
	conn;
	getLayerUseCase;
	constructor(e, t) {
		this.db = e, this.conn = t, this.getLayerUseCase = new Jf(t);
	}
	async exec(e, t) {
		let { surfaceTableName: n, workspace: r = l } = e, i = `${r}.${n}`, a = `${r}.${n}_feature_collection`, o = ln(await this.getLayerUseCase.exec(t, r));
		await this.conn.query(`DROP TABLE IF EXISTS ${i};`), await this.conn.query(`DROP TABLE IF EXISTS ${a};`);
		let s = `temp_polygonized_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.json`;
		await this.db.registerFileText(s, JSON.stringify(o));
		let c = rp(s, `${n}_feature_collection`, r);
		await this.conn.query(c);
		let u = Kv(`${n}_feature_collection`, n, r), d = await this.conn.query(u);
		return await this.db.dropFile(s), console.log("Loaded polygonized layer!"), {
			source: "osm",
			type: "surface",
			columns: dn(d.toArray()),
			name: n
		};
	}
}, Jv = class extends Error {
	constructor() {
		super("Only SELECT queries are allowed for raw queries."), this.name = "NonSelectQueryError";
	}
}, Yv = class {
	conn;
	constructor(e) {
		this.conn = e;
	}
	async exec(e, t) {
		if (this.validateQuery(e.query), await this.conn.query(`USE ${t}`), e.output.type === "CREATE_TABLE") {
			if (!e.output.tableName) throw Error("output.tableName must be provided when output.type is \"CREATE_TABLE\"");
			let n = e.output.tableName, r = `${t}.${n}`, i = `CREATE OR REPLACE TABLE ${r} AS\n${e.query};\n\nDESCRIBE ${r};`, a = await this.conn.query(i);
			return {
				source: e.output.source || "user",
				...e.output.tableType ? { type: e.output.tableType } : {},
				name: n,
				columns: dn(a.toArray())
			};
		}
		return (await this.conn.query(e.query)).toArray().map((e) => fn(e.toJSON()));
	}
	validateQuery(e) {
		let t = e.trim().toLowerCase(), n = t.startsWith("select") || t.startsWith("with"), r = [
			"insert",
			"update",
			"delete",
			"create",
			"alter",
			"drop",
			"truncate",
			"replace"
		].some((e) => RegExp(`\\b${e}\\b`, "i").test(t));
		if (!n || r) throw new Jv();
	}
};
//#endregion
//#region src/use-cases/update-table/interfaces.ts
function Xv(e) {
	if (e.startsWith("properties.")) {
		let t = e.slice(11);
		return {
			isPropertiesPath: !0,
			columnName: t,
			sqlExpression: `properties->>'${t}'`
		};
	}
	return {
		isPropertiesPath: !1,
		columnName: e,
		sqlExpression: e
	};
}
//#endregion
//#region src/use-cases/update-table/queries.ts
var Zv = (e, t, n) => {
	let r = `${n}.${t}`;
	return `
    CREATE OR REPLACE TABLE ${r} AS
    SELECT
      row_number() OVER () AS id,
      feature->'id' AS geojson_id,
      ST_GeomFromGeoJSON(feature->'geometry') AS geometry,
      feature->'properties' AS properties
    FROM (
      SELECT UNNEST(features) AS feature
      FROM read_json('${e}', columns = {type: 'VARCHAR', features: 'JSON[]'})
    );
    
    DESCRIBE ${r};
  `;
}, Qv = (e, t, n) => {
	let r = `${n}.${t}`;
	return `
    CREATE OR REPLACE TABLE ${r} AS
    SELECT * FROM read_json_auto('${e}');
    
    DESCRIBE ${r};
  `;
}, $v = (e, t) => `
    CREATE OR REPLACE TEMP TABLE ${t} AS
    SELECT
      TRY_CAST(feature->>'id' AS BIGINT) AS id,
      feature->'id' AS geojson_id,
      ST_GeomFromGeoJSON(feature->'geometry') AS geometry,
      feature->'properties' AS properties
    FROM (
      SELECT UNNEST(features) AS feature
      FROM read_json('${e}', columns = {type: 'VARCHAR', features: 'JSON[]'})
    );
  `, ey = (e, t) => `
    CREATE OR REPLACE TEMP TABLE ${t} AS
    SELECT * FROM read_json_auto('${e}');
  `, ty = (e, t, n, r) => {
	let i = `${r}.${e}`;
	return `
    UPDATE ${i}
    SET 
      geometry = staging.geometry,
      properties = staging.properties
    FROM ${t} AS staging
    WHERE ${i}.${n} = staging.${n};
  `;
}, ny = (e, t, n, r) => `
    DELETE FROM ${`${r}.${e}`}
    WHERE ${n} IN (
      SELECT ${n} FROM ${t}
    );
  `, ry = (e, t, n) => `
    INSERT INTO ${`${n}.${e}`}
    SELECT * FROM ${t};
  `, iy = (e) => `DROP TABLE IF EXISTS ${e};`, ay = (e, t) => `DESCRIBE ${`${t}.${e}`};`, oy = class {
	db;
	conn;
	constructor(e, t) {
		this.db = e, this.conn = t;
	}
	async exec(e, t) {
		let { strategy: n, workspace: r = l } = e;
		if (n === "update" && !e.idColumn) throw Error("idColumn is required when using the update strategy");
		let i = w(t);
		if (i && Wm(e.data)) {
			let r = /* @__PURE__ */ new Set(), i = new Set(e.data.features.filter((e) => e.id != null).map((e) => JSON.stringify(e.id))), a = e.data.features.map((a, o) => {
				if (n === "update" && (e.idColumn === "geojson_id" || e.idColumn === "id") && a.id == null) throw Error(`Feature ID is required for an update by ${e.idColumn} at index ${o}`);
				let s = a.id ?? `autk-feature-${o}`;
				if (a.id == null) for (; i.has(JSON.stringify(s)) || r.has(JSON.stringify(s));) s = `${s}-generated`;
				if (typeof s != "string" && typeof s != "number" || typeof s == "number" && !Number.isFinite(s)) throw Error(`Invalid GeoJSON feature ID at index ${o}`);
				let c = JSON.stringify(s);
				if (r.has(c)) throw Error(`Duplicate GeoJSON feature ID: ${c}`);
				r.add(c);
				let l = {
					...a,
					id: s
				};
				return t.type === "buildings" ? om(l) : l;
			});
			e = {
				...e,
				data: {
					...e.data,
					features: a
				}
			};
		}
		return n === "replace" ? this.executeReplaceStrategy(e, t, i, r) : this.executeUpdateStrategy(e, t, i, r);
	}
	validateDataFormat(e, t) {
		if (t) {
			if (!Wm(e)) throw Error("Layer tables require a GeoJSON FeatureCollection as input data");
		} else if (Wm(e)) throw Error("Non-layer tables (CSV/JSON) require an array of objects as input data");
	}
	async createTempFile(e) {
		let t = `temp_update_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.json`;
		return await this.db.registerFileText(t, JSON.stringify(e)), t;
	}
	async cleanupTempFile(e) {
		try {
			await this.db.dropFile(e);
		} catch {}
	}
	async executeReplaceStrategy(e, t, n, r) {
		let { tableName: i, data: a } = e;
		this.validateDataFormat(a, n);
		let o = await this.createTempFile(a);
		try {
			if (n && t.type === "buildings") {
				let e = (await this.conn.query(np(o))).toArray()[0];
				if (e) throw Error(`Building ${e.id} has invalid geometry; original coordinates were not changed`);
			}
			let e;
			e = n ? Zv(o, i, r) : Qv(o, i, r);
			let a = dn((await this.conn.query(e)).toArray());
			return {
				table: {
					...t,
					columns: a
				},
				updatedColumns: a
			};
		} finally {
			await this.cleanupTempFile(o);
		}
	}
	async executeUpdateStrategy(e, t, n, r) {
		let { tableName: i, data: a, idColumn: o } = e;
		this.validateDataFormat(a, n);
		let { sqlExpression: s } = Xv(o), c = `_staging_${i}_${Date.now()}`, l = await this.createTempFile(a);
		try {
			if (n && t.type === "buildings") {
				let e = (await this.conn.query(np(l))).toArray()[0];
				if (e) throw Error(`Building ${e.id} has invalid geometry; original coordinates were not changed`);
			}
			let e;
			if (e = n ? $v(l, c) : ey(l, c), await this.conn.query(e), n) {
				let e = ty(i, c, s, r);
				await this.conn.query(e);
			} else {
				let e = ny(i, c, s, r);
				await this.conn.query(e);
				let t = ry(i, c, r);
				await this.conn.query(t);
			}
			let a = iy(c);
			await this.conn.query(a);
			let o = ay(i, r), u = dn((await this.conn.query(o)).toArray());
			return {
				table: {
					...t,
					columns: u
				},
				updatedColumns: u
			};
		} finally {
			await this.cleanupTempFile(l);
			try {
				await this.conn.query(iy(c));
			} catch {}
		}
	}
}, sy = class {
	db;
	conn;
	currentWorkspace = l;
	workspaces = /* @__PURE__ */ new Map();
	osmProcessingPipeline;
	loadOsmFromOverpassApiUseCase;
	loadOsmFromPbfUseCase;
	loadCsvUseCase;
	loadOsmLayerUseCase;
	loadGeojsonUseCase;
	loadJsonUseCase;
	getLayerUseCase;
	spatialJoinUseCase;
	getLayerBboxUseCase;
	dropTableUseCase;
	loadGeoTiffUseCase;
	rawQueryUseCase;
	getOsmBboxUseCase;
	polygonizeOsmSurfaceUseCase;
	buildHeatmapUseCase;
	getTableUseCase;
	getRasterUseCase;
	updateTableUseCase;
	getTablesMetadata() {
		return this.getCurrentWorkspaceData().tables;
	}
	async init() {
		this.db = await vn(), this.conn = await this.db.connect(), await this.conn.query("INSTALL spatial; LOAD spatial;"), await this.conn.query(`CREATE SCHEMA IF NOT EXISTS ${l}`), await this.conn.query(`USE ${l}`), this.workspaces.set(l, {
			tables: [],
			coordinateFormat: d,
			precisionGrid: f,
			workspaceBoundingBox: void 0,
			workspaceCropLayer: null
		}), this.osmProcessingPipeline = new Gv(this.db, this.conn), this.loadOsmFromOverpassApiUseCase = new gn(this.conn, this.osmProcessingPipeline), this.loadOsmFromPbfUseCase = new Hv(this.conn, this.osmProcessingPipeline), this.loadCsvUseCase = new ep(this.db, this.conn), this.loadJsonUseCase = new f_(this.db, this.conn), this.loadOsmLayerUseCase = new M_(this.db, this.conn), this.loadGeojsonUseCase = new qm(this.db, this.conn), this.loadGeoTiffUseCase = new c_(this.db, this.conn), this.polygonizeOsmSurfaceUseCase = new qv(this.db, this.conn), this.spatialJoinUseCase = new Hf(this.conn), this.buildHeatmapUseCase = new Uf(this.conn), this.getLayerBboxUseCase = new Sn(this.conn), this.getLayerUseCase = new Jf(this.conn), this.getRasterUseCase = new Yf(this.conn), this.getOsmBboxUseCase = new wn(this.conn), this.getTableUseCase = new Xf(this.conn), this.updateTableUseCase = new oy(this.db, this.conn), this.dropTableUseCase = new bn(this.conn), this.rawQueryUseCase = new Yv(this.conn);
	}
	async setWorkspace(e, t) {
		if (!this.conn) throw Error("Database not initialized. Please call init() first.");
		t && this.validateWorkspaceConfiguration(t);
		let n = this.workspaces.get(e);
		if (!n) await this.conn.query(`CREATE SCHEMA IF NOT EXISTS ${e}`), this.workspaces.set(e, {
			tables: [],
			...t ?? {
				coordinateFormat: "EPSG:3395",
				precisionGrid: .01
			},
			workspaceBoundingBox: void 0,
			workspaceCropLayer: null
		});
		else if (t && (t.coordinateFormat !== n.coordinateFormat || t.precisionGrid !== n.precisionGrid)) {
			if (n.tables.length > 0) throw Error(`Cannot change the CRS or precision grid of non-empty workspace '${e}'. Create a new workspace or reload its layers.`);
			n.coordinateFormat = t.coordinateFormat, n.precisionGrid = t.precisionGrid, n.workspaceBoundingBox = void 0, n.workspaceCropLayer = null;
		}
		await this.conn.query(`USE ${e}`), this.currentWorkspace = e;
	}
	getWorkspaces() {
		return Array.from(this.workspaces.keys());
	}
	getCurrentWorkspace() {
		return this.currentWorkspace;
	}
	getWorkspaceConfiguration() {
		let { coordinateFormat: e, precisionGrid: t } = this.getCurrentWorkspaceData();
		return {
			coordinateFormat: e,
			precisionGrid: t
		};
	}
	async loadOsm(e) {
		if (!this.db || !this.conn || !this.loadOsmFromOverpassApiUseCase || !this.loadOsmFromPbfUseCase || !this.dropTableUseCase || !this.getOsmBboxUseCase || !this.polygonizeOsmSurfaceUseCase || !this.loadOsmLayerUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = O(e.tagSets);
		if (t.length > 0 && e.pbfFileUrl) throw Error("tagSets are not supported with pbfFileUrl.");
		let n = this.getCurrentWorkspaceData();
		if (n.tables.some((e) => e.source !== "osm")) {
			let e = "OpenStreetMap data must be loaded before non-OSM layers so it can establish the workspace context.";
			throw console.error(e), Error(e);
		}
		let r = n.coordinateFormat, i = e.autoLoadLayers.coordinateFormat ?? "EPSG:4326", a = e.outputTableName ?? "table_osm", o = {
			...e,
			tagSets: t,
			outputTableName: a,
			workspace: this.currentWorkspace
		}, s = e.pbfFileUrl ? await this.loadOsmFromPbfUseCase.exec(o) : await this.loadOsmFromOverpassApiUseCase.exec(o);
		try {
			for (let e of s.tables) this.registerTable(e);
			let o = {
				osmElementCount: s.osmElementCount,
				boundaryElementCount: s.boundaryElementCount,
				osmDataProcessingMs: s.osmDataProcessingMs,
				boundariesProcessingMs: s.boundariesProcessingMs,
				layers: []
			}, c = `${a}_boundaries`, l = await this.getOsmBboxUseCase.exec({
				osmTableName: c,
				workspace: this.currentWorkspace,
				coordinateFormat: r
			});
			n.workspaceBoundingBox ||= l;
			let u = null, d = null, f = [], m = e.autoLoadLayers.layers, h = [.../* @__PURE__ */ new Set([...m, "surface"])];
			for (let e of h) {
				let t = e !== "buildings", c = {
					osmInputTableName: a,
					coordinateFormat: i,
					layer: e
				};
				c.boundingBox = t ? l : void 0;
				let p = performance.now(), h = await this.loadOsmLayer({
					...c,
					workspaceCoordinateFormat: r
				}), g = performance.now() - p, _ = await this.conn.query(`SELECT COUNT(*) as cnt FROM ${this.currentWorkspace}.${h.name}`), v = Number(_.toArray()[0].cnt);
				if (m.includes(e) && o.layers.push({
					layerName: h.name,
					layerType: e,
					loadMs: g,
					featureCount: v
				}), e === "surface") {
					let e = await this.polygonizeOsmSurfaceUseCase.exec({
						surfaceTableName: h.name,
						workspace: this.currentWorkspace
					}, h), t = n.tables.findIndex((e) => e.name === h.name);
					if (t !== -1 && (n.tables[t] = e), await this.normalizeGeometryPrecision(e), s.surfaceMask) {
						let e = JSON.stringify(s.surfaceMask).replace(/'/g, "''"), t = `ST_ReducePrecision(ST_Transform(ST_GeomFromGeoJSON('${e}'), 'EPSG:4326', '${r}', always_xy := true), ${n.precisionGrid})`, i = (await this.conn.query(`SELECT ST_IsValid(${t}) AS valid_geometry,
                            NOT ST_IsEmpty(ST_GeomFromGeoJSON('${e}')) AND ST_IsEmpty(${t}) AS collapsed`)).toArray()[0];
						if (i.collapsed) throw Error(`Workspace precisionGrid ${n.precisionGrid} collapses the coastline mask; use a finer grid in a new workspace.`);
						if (i.valid_geometry) {
							d = e, await this.conn.query("BEGIN TRANSACTION");
							try {
								await this.conn.query(`UPDATE ${this.currentWorkspace}.${h.name}
                                    SET geometry = ST_ReducePrecision(ST_CollectionExtract(ST_Intersection(ST_MakeValid(geometry), ${t}), 3), ${n.precisionGrid});
                                    DELETE FROM ${this.currentWorkspace}.${h.name} WHERE ST_IsEmpty(geometry);`), await this.conn.query("COMMIT");
							} catch (e) {
								throw await this.conn.query("ROLLBACK"), e;
							}
						} else console.warn("[autk-db] Invalid reconstructed coastline mask; surface uses the full query area instead and coastal water is not generated.");
					}
					n.internalLayerNames = (n.internalLayerNames ??= []).filter((e) => e !== h.name), m.includes("surface") || n.internalLayerNames.push(h.name), await this.refreshStoredBoundingBox(h.name), n.workspaceCropLayer = h.name, u = h.name;
				} else f.push(h.name);
			}
			if (u && f.length > 0) for (let e of f) {
				let t = !e.endsWith("_buildings");
				await this.clipLayerToLayer(e, u, this.currentWorkspace, t), await this.refreshStoredBoundingBox(e);
			}
			if (m.includes("water") && d && s.coastlineExtent) {
				let e = performance.now(), t = s.queryExtent, i = s.coastlineExtent, c = `ST_ReducePrecision(ST_Transform(ST_CollectionExtract(
                    ST_Difference(${`ST_Intersection(ST_MakeEnvelope(${t.west}, ${t.south}, ${t.east}, ${t.north}),
                    ST_MakeEnvelope(${i.west}, ${i.south}, ${i.east}, ${i.north}))`}, ST_GeomFromGeoJSON('${d}')), 3),
                    'EPSG:4326', '${r}', always_xy := true), ${n.precisionGrid})`, l = `${a}_water`, u = `${this.currentWorkspace}.${l}`;
				await this.conn.query("BEGIN TRANSACTION");
				try {
					await this.conn.query(`INSERT INTO ${u} (id, properties, refs, geometry, ${p})
                        SELECT (SELECT COALESCE(LEAST(MIN(id), 0), 0) - 1 FROM ${u}),
                            map(['natural', 'water', 'generated'], ['water', 'sea', 'coastline']), []::BIGINT[], geometry, '[]'::JSON
                        FROM (SELECT ${c} AS geometry) WHERE NOT ST_IsEmpty(geometry);`), await this.conn.query("COMMIT");
				} catch (e) {
					throw await this.conn.query("ROLLBACK"), e;
				}
				await this.refreshStoredBoundingBox(l);
				let f = o.layers.find((e) => e.layerName === l);
				f.loadMs += performance.now() - e, f.featureCount = Number((await this.conn.query(`SELECT COUNT(*) AS cnt FROM ${u}`)).toArray()[0].cnt);
			}
			for (let e of t) {
				let t = [...n.tables], s = performance.now();
				await this.conn.query("BEGIN TRANSACTION");
				try {
					let t = await this.loadOsmLayerUseCase.execTagSet({
						osmInputTableName: a,
						tagSet: e,
						coordinateFormat: i,
						workspaceCoordinateFormat: r,
						workspace: this.currentWorkspace
					});
					this.registerTable(t), await this.normalizeGeometryPrecision(t), await this.clipLayerToLayer(t.name, u, this.currentWorkspace, e.type !== "points", !1);
					let c = `${this.currentWorkspace}.${t.name}`, l = e.type === "points" ? 1 : e.type === "polylines" ? 2 : 3;
					await this.conn.query(`UPDATE ${c} SET geometry = ST_CollectionExtract(geometry, ${l});
                        DELETE FROM ${c} WHERE geometry IS NULL OR ST_IsEmpty(geometry);`);
					let d = Number((await this.conn.query(`SELECT COUNT(*) AS cnt FROM ${c}`)).toArray()[0].cnt);
					for (let r of [
						"points",
						"polylines",
						"polygons"
					]) {
						let i = `${a}_${e.name}_${r}`;
						i === t.name && d > 0 || (await this.conn.query(`DROP TABLE IF EXISTS ${this.currentWorkspace}.${i}`), n.tables = n.tables.filter((e) => e.name !== i));
					}
					d > 0 && await this.initializeSpatialMetadata(t), await this.conn.query("COMMIT"), d > 0 && o.layers.push({
						layerName: t.name,
						layerType: t.type,
						tagSet: e.name,
						loadMs: performance.now() - s,
						featureCount: d
					});
				} catch (e) {
					throw await this.conn.query("ROLLBACK"), n.tables = t, e;
				}
			}
			return console.log(`OSM data loaded and completed in workspace '${this.currentWorkspace}'!`), o;
		} finally {
			for (let e of s.tables) {
				let t = await this.dropTableUseCase.exec({
					tableName: e.name,
					workspace: o.workspace
				});
				t.success ? n.tables = n.tables.filter((t) => t.name !== e.name) : console.warn(`[AutkDb.loadOsm] Could not clean staging table ${o.workspace}.${e.name}: ${t.message}`);
			}
		}
	}
	async loadCsv(e) {
		if (!this.db || !this.conn || !this.loadCsvUseCase) throw Error("Database not initialized. Please call init() first.");
		return this.loadVectorTable(() => this.loadCsvUseCase.exec({
			...e,
			workspace: this.currentWorkspace,
			workspaceCoordinateFormat: this.getCurrentWorkspaceData().coordinateFormat
		}));
	}
	async loadJson(e) {
		if (!this.db || !this.conn || !this.loadJsonUseCase) throw Error("Database not initialized. Please call init() first.");
		return this.loadVectorTable(() => this.loadJsonUseCase.exec({
			...e,
			workspace: this.currentWorkspace,
			workspaceCoordinateFormat: this.getCurrentWorkspaceData().coordinateFormat
		}));
	}
	async loadOsmLayer(e) {
		if (!this.db || !this.conn || !this.loadOsmLayerUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getTablesMetadata().find((t) => t.name === e.osmInputTableName);
		if (!t) throw Error(`Table ${e.osmInputTableName} not found.`);
		if (t.source !== "osm" || t.type !== void 0) throw Error(`Table ${e.osmInputTableName} is not a raw OSM table.`);
		let n = this.getCurrentWorkspaceData(), r = await this.loadOsmLayerUseCase.exec({
			...e,
			workspace: this.currentWorkspace,
			workspaceCoordinateFormat: e.workspaceCoordinateFormat ?? n.coordinateFormat
		});
		return this.registerTable(r), r.type !== "surface" && await this.normalizeGeometryPrecision(r), this.initializeSpatialMetadata(r);
	}
	async loadGeojson(e) {
		if (!this.db || !this.conn || !this.loadGeojsonUseCase || !this.getLayerBboxUseCase) throw Error("Database not initialized. Please call init() first.");
		return this.loadVectorTable(() => this.loadGeojsonUseCase.exec({
			...e,
			workspace: this.currentWorkspace,
			workspaceCoordinateFormat: this.getCurrentWorkspaceData().coordinateFormat
		}));
	}
	async loadGeoTiff(e) {
		if (!this.db || !this.conn || !this.loadGeoTiffUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getCurrentWorkspaceData(), n = !!t.workspaceBoundingBox, r = await this.loadGeoTiffUseCase.exec({
			...e,
			workspace: this.currentWorkspace,
			workspaceCoordinateFormat: t.coordinateFormat
		});
		return this.registerTable(r), n && await this.applyWorkspaceConstraints(r.name), this.initializeSpatialMetadata(r);
	}
	async getRaster(e) {
		if (!this.db || !this.conn || !this.getRasterUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getTablesMetadata().find((t) => t.name === e);
		if (!t || !T(t) || this.tableHasGeometry(t)) throw Error(`Table ${e} is not a compact raster table.`);
		return this.getRasterUseCase.exec(e, this.currentWorkspace);
	}
	async getLayer(e, t = {}) {
		if (!this.db || !this.conn || !this.getLayerUseCase) throw Error("Database not initialized. Please call init() first.");
		let n = this.getTablesMetadata().find((t) => t.name === e);
		if (!n) throw Error(`Table ${e} not found.`);
		if (!C(n)) throw Error(`Table ${e} is not a renderable layer.`);
		let r = n.type === "raster" && !this.tableHasGeometry(n) ? await this.getRaster(e) : await this.getLayerUseCase.exec(n, this.currentWorkspace, t), i = this.getCurrentWorkspaceData();
		if (i.workspaceBoundingBox) r.bbox = [
			i.workspaceBoundingBox.minLon,
			i.workspaceBoundingBox.minLat,
			i.workspaceBoundingBox.maxLon,
			i.workspaceBoundingBox.maxLat
		];
		else {
			let t = this.tableHasGeometry(n) ? (await this.refreshStoredBoundingBox(e)).boundingBox : await this.getBoundingBoxFromLayer(e);
			t && (r.bbox = [
				t.minLon,
				t.minLat,
				t.maxLon,
				t.maxLat
			]);
		}
		return r;
	}
	async getBoundingBoxFromLayer(e) {
		if (!this.db || !this.conn || !this.getLayerBboxUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getTablesMetadata().find((t) => t.name === e);
		if (!t) throw Error(`Table ${e} not found.`);
		if (!t.columns.find((e) => e.type === "GEOMETRY")) throw Error(`Table ${e} does not have a geometry column. This method only works with layer tables that contain geometries.`);
		if (t.boundingBox) return t.boundingBox;
		let n = await this.getLayerBboxUseCase.exec({
			layerTableName: e,
			workspace: this.currentWorkspace
		});
		return t.boundingBox = n, n;
	}
	getLayersMetadata() {
		return this.getTablesMetadata().filter((e) => w(e) && !this.getCurrentWorkspaceData().internalLayerNames?.includes(e.name));
	}
	getRastersMetadata() {
		return this.getTablesMetadata().filter((e) => T(e));
	}
	async getTable(e) {
		if (!this.db || !this.conn || !this.getTableUseCase) throw Error("Database not initialized. Please call init() first.");
		if (!this.getTablesMetadata().find((t) => t.name === e)) throw Error(`Table ${e} not found.`);
		return this.getTableUseCase.exec(e, this.currentWorkspace);
	}
	async updateTable(e) {
		if (!this.db || !this.conn || !this.updateTableUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getTablesMetadata().find((t) => t.name === e.tableName);
		if (!t) throw Error(`Table ${e.tableName} not found.`);
		let n = this.getCurrentWorkspaceData(), r = n.tables.map((e) => ({ ...e }));
		await this.conn.query("BEGIN TRANSACTION");
		try {
			let r = await this.updateTableUseCase.exec({
				...e,
				workspace: this.currentWorkspace
			}, t), i = n.tables.findIndex((t) => t.name === e.tableName);
			i !== -1 && (n.tables[i] = r.table), r.table.source === "osm" && r.table.columns.some((e) => e.name === "__autk_osm_elements" && e.type === "JSON") && await this.conn.query(`UPDATE "${this.currentWorkspace.replace(/"/g, "\"\"")}"."${e.tableName.replace(/"/g, "\"\"")}"
                    SET ${p} = NULL`), await this.normalizeGeometryPrecision(r.table);
			let a = await this.refreshStoredBoundingBox(e.tableName);
			return await this.conn.query("COMMIT"), a;
		} catch (e) {
			throw await this.conn.query("ROLLBACK"), n.tables = r, e;
		}
	}
	async spatialQuery(e) {
		if (!this.db || !this.conn || !this.spatialJoinUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getCurrentWorkspaceData(), n = await this.spatialJoinUseCase.exec(e, t.tables, this.currentWorkspace, t);
		return t.tables = t.tables.map((e) => e.name === n.name ? n : e), n;
	}
	async rawQuery(e) {
		if (!this.db || !this.conn || !this.rawQueryUseCase) throw Error("Database not initialized. Please call init() first.");
		return e.output.type === "CREATE_TABLE" ? this.loadVectorTable(async () => await this.rawQueryUseCase.exec(e, this.currentWorkspace), !1) : await this.rawQueryUseCase.exec(e, this.currentWorkspace);
	}
	async removeLayer(e) {
		if (!this.conn || !this.dropTableUseCase) throw Error("Database not initialized. Please call init() first.");
		await this.dropTableUseCase.exec({
			tableName: e,
			workspace: this.currentWorkspace
		});
		let t = this.getCurrentWorkspaceData(), n = t.tables.find((t) => t.name === e);
		n && T(n) && !this.tableHasGeometry(n) && mf(this.currentWorkspace, e), t.tables = t.tables.filter((t) => t.name !== e), t.internalLayerNames = t.internalLayerNames?.filter((t) => t !== e), t.workspaceCropLayer === e && (t.workspaceCropLayer = null);
	}
	async buildHeatmap(e) {
		if (!this.db || !this.conn || !this.buildHeatmapUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getCurrentWorkspaceData(), n = await this.buildHeatmapUseCase.exec(e, t.tables, t.workspaceBoundingBox, this.currentWorkspace, t.coordinateFormat);
		return this.registerTable(n), this.refreshStoredBoundingBox(n.name);
	}
	getCurrentWorkspaceData() {
		let e = this.workspaces.get(this.currentWorkspace);
		if (!e) throw Error(`Workspace '${this.currentWorkspace}' not found. This should not happen.`);
		return e;
	}
	validateWorkspaceConfiguration(e) {
		if (!e.coordinateFormat?.trim() || !Number.isFinite(e.precisionGrid) || e.precisionGrid <= 0) throw Error("Workspace coordinateFormat and precisionGrid must be provided together; precisionGrid must be a finite number greater than zero.");
	}
	async loadVectorTable(e, t = !0) {
		let n = this.getCurrentWorkspaceData(), r = !!n.workspaceBoundingBox, i = {
			...n,
			tables: n.tables.map((e) => ({ ...e }))
		};
		await this.conn.query("BEGIN TRANSACTION");
		try {
			let n = await e();
			this.registerTable(n), await this.normalizeGeometryPrecision(n), t && r && await this.applyWorkspaceConstraints(n.name, !1);
			let i = await this.initializeSpatialMetadata(n);
			return await this.conn.query("COMMIT"), i;
		} catch (e) {
			throw await this.conn.query("ROLLBACK"), Object.assign(n, i), e;
		}
	}
	async normalizeGeometryPrecision(e) {
		if (!this.tableHasGeometry(e) || e.type === "raster") return;
		let t = this.getCurrentWorkspaceData().precisionGrid, n = `"${this.currentWorkspace.replace(/"/g, "\"\"")}"."${e.name.replace(/"/g, "\"\"")}"`, r = e.type === "buildings" ? `ST_GeomFromGeoJSON(json_object('type', 'GeometryCollection', 'geometries',
                to_json(list_transform(CAST(CASE WHEN ST_GeometryType(geometry) = 'GEOMETRYCOLLECTION'
                    THEN ST_AsGeoJSON(geometry)->'geometries' ELSE json_array(CAST(ST_AsGeoJSON(geometry) AS JSON)) END AS JSON[]),
                    part -> CAST(ST_AsGeoJSON(ST_ReducePrecision(ST_GeomFromGeoJSON(part), ${t})) AS JSON)))))` : `ST_ReducePrecision(geometry, ${t})`;
		if ((await this.conn.query(e.type === "buildings" ? `SELECT 1 FROM ${n},
                UNNEST(CAST(ST_AsGeoJSON(${r})->'geometries' AS JSON[])) t(part)
                WHERE geometry IS NOT NULL AND NOT ST_IsEmpty(geometry)
                  AND (ST_IsEmpty(ST_GeomFromGeoJSON(part)) OR NOT ST_IsValid(ST_GeomFromGeoJSON(part))) LIMIT 1` : `SELECT 1 FROM ${n} WHERE geometry IS NOT NULL AND NOT ST_IsEmpty(geometry)
                AND (ST_IsEmpty(${r}) OR NOT ST_IsValid(${r})) LIMIT 1`)).numRows > 0) throw Error(`Workspace precisionGrid ${t} collapses or invalidates ${e.type === "buildings" ? "a building part" : "a geometry"} in ${e.name}; use a finer grid in a new workspace.`);
		await this.conn.query(`UPDATE ${n}
            SET geometry = ${r}
            WHERE geometry IS NOT NULL AND NOT ST_IsEmpty(geometry)`);
	}
	tableHasGeometry(e) {
		return e.columns.some((e) => e.type === "GEOMETRY");
	}
	isPolygonalTable(e) {
		return e.type === "surface" || e.type === "parks" || e.type === "water" || e.type === "buildings" || e.type === "polygons";
	}
	shouldCropGeometry(e) {
		return e.type !== "points" && e.type !== "buildings" && e.type !== "raster";
	}
	async applyWorkspaceConstraints(e, t = !0) {
		let n = this.getCurrentWorkspaceData(), r = n.tables.find((t) => t.name === e);
		if (r && this.tableHasGeometry(r) && n.workspaceBoundingBox) {
			t && await this.conn.query("BEGIN TRANSACTION");
			try {
				await this.clipLayerToBoundingBox(e, n.workspaceBoundingBox, this.currentWorkspace), n.workspaceCropLayer && n.workspaceCropLayer !== e && await this.clipLayerToLayer(e, n.workspaceCropLayer, this.currentWorkspace, this.shouldCropGeometry(r), !1), t && await this.conn.query("COMMIT");
			} catch (e) {
				throw t && await this.conn.query("ROLLBACK"), e;
			}
		}
	}
	async refreshStoredBoundingBox(e) {
		if (!this.conn || !this.getLayerBboxUseCase) throw Error("Database not initialized. Please call init() first.");
		let t = this.getCurrentWorkspaceData().tables.find((t) => t.name === e);
		if (!t) throw Error(`Table ${e} not found.`);
		return this.tableHasGeometry(t) ? (await this.conn.query(`
            SELECT 1 FROM "${this.currentWorkspace.replace(/"/g, "\"\"")}"."${e.replace(/"/g, "\"\"")}"
            WHERE geometry IS NOT NULL AND NOT ST_IsEmpty(geometry) LIMIT 1
        `)).numRows === 0 ? (t.boundingBox = void 0, t) : (t.boundingBox = await this.getLayerBboxUseCase.exec({
			layerTableName: e,
			workspace: this.currentWorkspace
		}), t) : t;
	}
	async initializeSpatialMetadata(e) {
		if (!this.tableHasGeometry(e)) return e;
		let t = await this.refreshStoredBoundingBox(e.name), n = this.getCurrentWorkspaceData();
		return !n.workspaceBoundingBox && t.boundingBox && (n.workspaceBoundingBox = t.boundingBox, this.isPolygonalTable(t) && (n.workspaceCropLayer = t.name)), t;
	}
	registerTable(e) {
		let t = this.getCurrentWorkspaceData(), n = t.tables.findIndex((t) => t.name === e.name);
		n === -1 ? t.tables.push(e) : (console.warn(`Table '${e.name}' already exists in workspace '${this.currentWorkspace}'. Overwriting...`), t.tables[n] = e);
	}
	async clipLayerToBoundingBox(e, t, n) {
		let r = `${n}.${e}`, i = `ST_MakeEnvelope(${t.minLon}, ${t.minLat}, ${t.maxLon}, ${t.maxLat})`;
		await this.conn.query(`
      DELETE FROM ${r}
      WHERE NOT ST_Intersects(geometry, ${i});
    `);
	}
	async clipLayerToLayer(e, t, n, r = !0, i = !0) {
		let a = `${n}.${e}`, o = `${n}.${t}`, s = this.getCurrentWorkspaceData(), c = s.precisionGrid, l = s.tables.find((t) => t.name === e), u = "ST_Intersection(ST_MakeValid(l.geometry), crop.geom)", d = l && this.isPolygonalTable(l) ? `ST_CollectionExtract(${u}, 3)` : u;
		if (!r && l?.type === "buildings" && l.source === "osm") {
			let e = `(SELECT ST_Union_Agg(ST_MakeValid(geometry)) FROM ${o})`;
			i && await this.conn.query("BEGIN TRANSACTION");
			try {
				await this.conn.query(`
      CREATE TEMP TABLE contained_building_parts AS
      WITH parts AS (
        SELECT l.id, p.value AS properties, p.key::INTEGER AS old_index,
          ST_GeomFromGeoJSON(json_extract(ST_AsGeoJSON(l.geometry),
            '$.geometries[' || (p.value->>'geometryIndex') || ']')) AS geometry,
          json_extract(l.${p},
            '$[' || (p.value->>'geometryIndex') || ']') AS osm_element
        FROM (SELECT * FROM ${a} WHERE NOT ST_CoveredBy(geometry, ${e})) l,
          LATERAL json_each(l.properties, '$.parts') p
      ), retained AS (
        SELECT *, row_number() OVER (PARTITION BY id ORDER BY old_index) - 1 AS geometry_index
        FROM parts
        WHERE ST_CoveredBy(geometry, ${e})
      )
      SELECT id, ST_GeomFromGeoJSON(json_object('type', 'GeometryCollection',
          'geometries', to_json(list(ST_AsGeoJSON(geometry)::JSON ORDER BY geometry_index)))) AS geometry,
        to_json(list(json_merge_patch(properties, json_object('geometryIndex', geometry_index)) ORDER BY geometry_index)) AS parts,
        to_json(list(json_merge_patch(osm_element, json_object('geometryIndex', geometry_index)) ORDER BY geometry_index)) AS osm_elements
      FROM retained GROUP BY id;
      UPDATE ${a} AS l SET geometry = p.geometry,
        properties = json_merge_patch(l.properties, json_object('parts', p.parts)),
        ${p} = p.osm_elements
      FROM contained_building_parts p WHERE l.id = p.id;
      DELETE FROM ${a}
      WHERE NOT ST_CoveredBy(geometry, ${e}) AND id NOT IN (SELECT id FROM contained_building_parts);
      DROP TABLE contained_building_parts;
    `), i && await this.conn.query("COMMIT");
			} catch (e) {
				throw i && await this.conn.query("ROLLBACK"), e;
			}
		} else if (!r) await this.conn.query(`
      DELETE FROM ${a} AS l
      WHERE NOT EXISTS (
        SELECT 1
        FROM ${o} crop
        WHERE ST_Intersects(l.geometry, ST_MakeValid(crop.geometry))
      );
    `);
		else {
			i && await this.conn.query("BEGIN TRANSACTION");
			try {
				await this.conn.query(`
      DELETE FROM ${a} AS l
      WHERE NOT EXISTS (
        SELECT 1
        FROM ${o} crop
        WHERE ST_Intersects(l.geometry, ST_MakeValid(crop.geometry))
      );
    `), await this.conn.query(`
      UPDATE ${a} AS l
      SET geometry = ST_ReducePrecision(${d}, ${c})
      FROM (
        SELECT ST_ReducePrecision(ST_Union_Agg(ST_MakeValid(geometry)), ${c}) AS geom FROM ${o}
      ) crop
      WHERE ST_Intersects(l.geometry, crop.geom);
    `), await this.conn.query(`DELETE FROM ${a} WHERE ST_IsEmpty(geometry);`), i && await this.conn.query("COMMIT");
			} catch (e) {
				throw i && await this.conn.query("ROLLBACK"), e;
			}
		}
	}
};
//#endregion
export { sy as AutkDb, u as DEFAULT_INPUT_COORDINATE_FORMAT, d as DEFAULT_WORKSPACE_COORDINATE_FORMAT, l as DEFAULT_WORKSPACE_NAME, f as DEFAULT_WORKSPACE_PRECISION_GRID, x as EXCLUDED_BUILDING_VALUES, b as EXCLUDED_ROADS_VALUES, g as PARKS_LANDUSE_VALUES, h as PARKS_LEISURE_VALUES, _ as PARKS_NATURAL_VALUES, y as WATER_FEATURE_VALUES, v as WATER_NATURAL_VALUES, E as isBoundingBoxArea, T as isRasterTable, C as isRenderableTable, w as isVectorTable };

//# sourceMappingURL=browser.js.map