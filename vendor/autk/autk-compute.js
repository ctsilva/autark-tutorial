//#region ../autk-core/src/types-colormap.ts
var e = /* @__PURE__ */ function(e) {
	return e.CAT_ACCENT = "schemeAccent", e.CAT_DARK2 = "schemeDark2", e.CAT_CATEGORY10 = "schemeCategory10", e.CAT_OBSERVABLE10 = "schemeObservable10", e.CAT_PAIRED = "schemePaired", e.CAT_PASTEL1 = "schemePastel1", e.CAT_PASTEL2 = "schemePastel2", e.CAT_SET1 = "schemeSet1", e.CAT_SET2 = "schemeSet2", e.CAT_SET3 = "schemeSet3", e.CAT_TABLEAU10 = "schemeTableau10", e.SEQ_REDS = "interpolateReds", e.SEQ_BLUES = "interpolateBlues", e.SEQ_GREENS = "interpolateGreens", e.SEQ_GREYS = "interpolateGreys", e.SEQ_ORANGES = "interpolateOranges", e.SEQ_PURPLES = "interpolatePurples", e.SEQ_TURBO = "interpolateTurbo", e.SEQ_VIRIDIS = "interpolateViridis", e.SEQ_INFERNO = "interpolateInferno", e.SEQ_MAGMA = "interpolateMagma", e.SEQ_PLASMA = "interpolatePlasma", e.SEQ_CIVIDIS = "interpolateCividis", e.SEQ_WARM = "interpolateWarm", e.SEQ_COOL = "interpolateCool", e.SEQ_CUBEHELIX_DEFAULT = "interpolateCubehelixDefault", e.SEQ_BU_GN = "interpolateBuGn", e.SEQ_BU_PU = "interpolateBuPu", e.SEQ_GN_BU = "interpolateGnBu", e.SEQ_OR_RD = "interpolateOrRd", e.SEQ_PU_BU_GN = "interpolatePuBuGn", e.SEQ_PU_BU = "interpolatePuBu", e.SEQ_PU_RD = "interpolatePuRd", e.SEQ_RD_PU = "interpolateRdPu", e.SEQ_YL_GN_BU = "interpolateYlGnBu", e.SEQ_YL_GN = "interpolateYlGn", e.SEQ_YL_OR_BR = "interpolateYlOrBr", e.SEQ_YL_OR_RD = "interpolateYlOrRd", e.DIV_BR_BG = "interpolateBrBG", e.DIV_PR_GN = "interpolatePRGn", e.DIV_PI_YG = "interpolatePiYG", e.DIV_PU_OR = "interpolatePuOr", e.DIV_RED_BLUE = "interpolateRdBu", e.DIV_RED_GREY = "interpolateRdGy", e.DIV_RED_YELLOW_BLUE = "interpolateRdYlBu", e.DIV_RED_YELLOW_GREEN = "interpolateRdYlGn", e.DIV_SPECTRAL = "interpolateSpectral", e;
}({});
e.CAT_ACCENT, e.CAT_DARK2, e.CAT_CATEGORY10, e.CAT_OBSERVABLE10, e.CAT_PAIRED, e.CAT_PASTEL1, e.CAT_PASTEL2, e.CAT_SET1, e.CAT_SET2, e.CAT_SET3, e.CAT_TABLEAU10, e.DIV_BR_BG, e.DIV_PR_GN, e.DIV_PI_YG, e.DIV_PU_OR, e.DIV_RED_BLUE, e.DIV_RED_GREY, e.DIV_RED_YELLOW_BLUE, e.DIV_RED_YELLOW_GREEN, e.DIV_SPECTRAL;
//#endregion
//#region ../autk-core/src/utils-geometry.ts
function t(e, t) {
	let n = e.filter((t, n) => {
		if (n === 0) return !0;
		let r = e[n - 1];
		return t[0] !== r[0] || t[1] !== r[1];
	});
	if (n.length < 2 || t === 0) return [];
	let r = [], i = [];
	for (let e = 0; e < n.length; e++) {
		let a = e > 0 ? n[e - 1] : null, c = n[e], l = e < n.length - 1 ? n[e + 1] : null, u = a ? o(a, c) : null, d = l ? o(c, l) : null, f = s(a, c, l, u, d, t, 1), p = s(a, c, l, u, d, t, -1);
		r.push(f), i.push(p);
	}
	let a = [...r, ...i.reverse()];
	return a.length > 0 && a.push([a[0][0], a[0][1]]), a;
}
function n(e) {
	if (e.length < 2) return [...e];
	let t = [...e], n = t[0], r = t[t.length - 1];
	return n[0] === r[0] && n[1] === r[1] && t.pop(), t;
}
function r(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let [r, i] = e[n], [a, o] = e[(n + 1) % e.length];
		t += r * o - a * i;
	}
	return t * .5;
}
function i(e) {
	let t = 0, n = e.length;
	for (let r = 0, i = n - 1; r < n; i = r++) {
		let n = e[r][0] - e[i][0], a = e[r][1] - e[i][1];
		t += Math.sqrt(n * n + a * a);
	}
	return t;
}
function a(e) {
	let t = e.length, n = 0;
	for (let r = 0; r < t; r++) {
		let i = (r + t - 1) % t, a = (r + 1) % t, o = e[r][0] - e[i][0], s = e[r][1] - e[i][1], c = e[a][0] - e[r][0], l = o * (e[a][1] - e[r][1]) - s * c;
		if (Math.abs(l) < 1e-10) continue;
		let u = l > 0 ? 1 : -1;
		if (n === 0) n = u;
		else if (u !== n) return !1;
	}
	return !0;
}
function o(e, t) {
	let n = t[0] - e[0], r = t[1] - e[1], i = Math.hypot(n, r);
	return i === 0 ? null : [-r / i, n / i];
}
function s(e, t, n, r, i, a, o) {
	if (!r && !i) return t;
	if (!e || !r) return [t[0] + i[0] * a * o, t[1] + i[1] * a * o];
	if (!n || !i) return [t[0] + r[0] * a * o, t[1] + r[1] * a * o];
	let s = c([e[0] + r[0] * a * o, e[1] + r[1] * a * o], [t[0] + r[0] * a * o, t[1] + r[1] * a * o], [t[0] + i[0] * a * o, t[1] + i[1] * a * o], [n[0] + i[0] * a * o, n[1] + i[1] * a * o]);
	if (s) return s;
	let l = r[0] + i[0], u = r[1] + i[1], d = Math.hypot(l, u);
	return d === 0 ? [t[0] + i[0] * a * o, t[1] + i[1] * a * o] : [t[0] + l / d * a * o, t[1] + u / d * a * o];
}
function c(e, t, n, r) {
	let i = e[0], a = e[1], o = t[0], s = t[1], c = n[0], l = n[1], u = r[0], d = r[1], f = (i - o) * (l - d) - (a - s) * (c - u);
	if (Math.abs(f) < 1e-9) return null;
	let p = i * s - a * o, m = c * d - l * u;
	return [(p * (c - u) - (i - o) * m) / f, (p * (l - d) - (a - s) * m) / f];
}
//#endregion
//#region ../node_modules/earcut/src/earcut.js
var l = /* @__PURE__ */ new Set(), u = !1;
function d(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length;
	l.size && l.clear();
	let a = f(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s = 0, c = 0, u = 0;
	if (r && (a = b(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		u = Math.max(t - s, r - c), u = u === 0 ? 0 : 32767 / u;
	}
	return m(a, o, s, c, u), o;
}
function f(e, t, n, r, i) {
	let a = null;
	if (i === ve(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = ge(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = ge(i / r | 0, e[i], e[i + 1], a);
	return a && I(a, a.next) && (z(a), a = a.next), a;
}
function p(e, t = e) {
	let n = t === e, r = e, i;
	do
		i = !1, r !== r.next && (l.size === 0 || !l.has(r)) && (I(r, r.next) || F(r.prev, r, r.next) === 0) ? ((n || r === t) && (t = r.prev), u = !0, z(r), r = r.prev, i = !0) : (n || r !== t) && (r = r.next, i = !n);
	while (i || r !== t);
	return t;
}
function m(e, t, n, r, i) {
	i && oe(e, n, r, i);
	let a = e, o = !1;
	for (; e.prev !== e.next;) {
		let s = e.prev, c = e.next;
		if (F(s, e, c) < 0 && (i ? g(e, n, r, i) : h(e))) t.push(s.i, e.i, c.i), z(e), e = c, a = c;
		else if (e = c, e === a) {
			if (u = !1, e = p(e), u) {
				a = e;
				continue;
			}
			if (!o) {
				e = _(e, t), a = e, o = !0;
				continue;
			}
			v(e, t, n, r, i);
			break;
		}
	}
}
function h(e) {
	let t = e.prev, n = e, r = e.next, i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && (i !== m.x || s !== m.y) && P(i, s, a, c, o, l, m.x, m.y) && F(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function g(e, t, n, r) {
	let i = e.prev, a = e, o = e.next, s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = le(p, m, t, n, r), v = le(h, g, t, n, r), y = e.prevZ;
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== o && (s !== y.x || u !== y.y) && P(s, u, c, d, l, f, y.x, y.y) && F(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	let b = e.nextZ;
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== o && (s !== b.x || u !== b.y) && P(s, u, c, d, l, f, b.x, b.y) && F(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function _(e, t) {
	let n = e, r = !1;
	do {
		let i = n.prev, a = n.next.next;
		fe(i, n, n.next, a, !1) && R(i, a) && R(a, i) && (t.push(i.i, n.i, a.i), z(n), z(n.next), n = e = a, r = !0), n = n.next;
	} while (n !== e);
	return r ? p(n) : n;
}
function v(e, t, n, r, i) {
	let a = e;
	do {
		let e = a.next.next;
		for (; e !== a.prev;) {
			if (a.i !== e.i && de(a, e)) {
				let o = he(a, e);
				a = p(a, a.next), o = p(o, o.next), m(a, t, n, r, i), m(o, t, n, r, i);
				return;
			}
			e = e.next;
		}
		a = a.next;
	} while (a !== e);
}
var y = !1;
function b(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = f(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && l.add(o), i.push(ue(o));
	}
	i.sort(x), D(e.length / r, t.length), O(n, n), y = !0;
	for (let e = 0; e < i.length; e++) n = S(i[e], n);
	return y = !1, p(n);
}
function x(e, t) {
	return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
}
function S(e, t) {
	let n = ie(e, t);
	if (!n) return t;
	let r = he(n, e), i = r.next;
	return O(n, i.next), p(r, r.next), p(n, n.next);
}
var ee = 16, C = /* @__PURE__ */ new Float64Array(), w = 0, T = [], E = [];
function D(e, t) {
	let n = Math.ceil((e + 2 * t) / ee) + t + 2;
	C.length < n * 4 && (C = new Float64Array(n * 4)), w = 0;
}
function O(e, t) {
	let n = e;
	do {
		let e = w++;
		T[e] = n;
		let r = n.x, i = n.y, a = n.x, o = n.y, s = 0;
		do {
			let t = n.next;
			n.z = e, t.x < r && (r = t.x), t.x > a && (a = t.x), t.y < i && (i = t.y), t.y > o && (o = t.y), n = t;
		} while (++s < ee && n !== t);
		E[e] = n;
		let c = e * 4;
		C[c] = r, C[c + 1] = i, C[c + 2] = a, C[c + 3] = o;
	} while (n !== t);
}
function te(e, t) {
	let n = e.z * 4;
	t.x < C[n] && (C[n] = t.x), t.y < C[n + 1] && (C[n + 1] = t.y), t.x > C[n + 2] && (C[n + 2] = t.x), t.y > C[n + 3] && (C[n + 3] = t.y);
}
function ne(e) {
	let t = E[e];
	for (; t.prev.next !== t;) t = t.next;
	return E[e] = t, t;
}
function re(e) {
	let t = T[e];
	for (; t.prev.next !== t;) t = t.next;
	return T[e] = t, t;
}
function ie(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (I(e, n)) return n;
	for (let t = 0, s = 0; t < w; t++, s += 4) {
		if (i < C[s + 1] || i > C[s + 3] || C[s] > r || C[s + 2] <= a) continue;
		let c = ne(t);
		n = re(t);
		do {
			if (n.prev.next === n) {
				if (I(e, n.next)) return n.next;
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
	for (let t = 0, f = 0; t < w; t++, f += 4) {
		if (C[f + 2] < s || C[f] > r || C[f + 3] < l || C[f + 1] > u) continue;
		let p = ne(t);
		n = re(t);
		do {
			if (n.prev.next === n && r >= n.x && n.x >= s && r !== n.x && P(i < c ? r : a, i, s, c, i < c ? a : r, i, n.x, n.y)) {
				let t = Math.abs(i - n.y) / (r - n.x);
				(R(n, e) || n.y === i && n.next.y === i && n.next.x > r) && (t < d || t === d && (n.x > o.x || n.x === o.x && ae(o, n))) && (o = n, d = t);
			}
			n = n.next;
		} while (n !== p);
	}
	return o;
}
function ae(e, t) {
	return F(e.prev, e, t.prev) < 0 && F(t.next, e, e.next) < 0;
}
var k = [], A = [], j = /* @__PURE__ */ new Uint32Array(), M = /* @__PURE__ */ new Uint32Array(), N = /* @__PURE__ */ new Uint32Array(256);
function oe(e, t, n, r) {
	let i = e, a = 0;
	do
		i.z = le(i.x, i.y, t, n, r), k[a++] = i, i = i.next;
	while (i !== e);
	se(a);
	let o = null;
	for (let e = 0; e < a; e++) {
		let t = k[e];
		t.prevZ = o, o && (o.nextZ = t), o = t;
	}
	o.nextZ = null, k.fill(null, 0, a), A.fill(null, 0, a);
}
function se(e) {
	if (e <= 32) for (let t = 1; t < e; t++) {
		let e = k[t], n = e.z, r = t - 1;
		for (; r >= 0 && k[r].z > n;) k[r + 1] = k[r], r--;
		k[r + 1] = e;
	}
	else {
		j.length < e && (j = new Uint32Array(e), M = new Uint32Array(e), A = Array(e));
		for (let t = 0; t < e; t++) j[t] = k[t].z;
		ce(e, k, j, A, M, 0), ce(e, A, M, k, j, 8), ce(e, k, j, A, M, 16), ce(e, A, M, k, j, 24);
	}
}
function ce(e, t, n, r, i, a) {
	N.fill(0);
	for (let t = 0; t < e; t++) N[n[t] >>> a & 255]++;
	let o = 0;
	for (let e = 0; e < 256; e++) {
		let t = N[e];
		N[e] = o, o += t;
	}
	for (let o = 0; o < e; o++) {
		let e = n[o], s = N[e >>> a & 255]++;
		r[s] = t[o], i[s] = e;
	}
}
function le(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function ue(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function P(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function de(e, t) {
	let n = I(e, t) && F(e.prev, e, e.next) > 0 && F(t.prev, t, t.next) > 0;
	return e.next.i !== t.i && (n || R(e, t) && R(t, e) && (F(e.prev, e, t.prev) !== 0 || F(e, t.prev, t) !== 0)) && !pe(e, t) && (n || me(e, t));
}
function F(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function I(e, t) {
	return e.x === t.x && e.y === t.y;
}
function fe(e, t, n, r, i = !0) {
	let a = F(e, t, n), o = F(e, t, r), s = F(n, r, e), c = F(n, r, t);
	return (a > 0 && o < 0 || a < 0 && o > 0) && (s > 0 && c < 0 || s < 0 && c > 0) ? !0 : i ? !!(a === 0 && L(e, n, t) || o === 0 && L(e, r, t) || s === 0 && L(n, e, r) || c === 0 && L(n, t, r)) : !1;
}
function L(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function pe(e, t) {
	let n = Math.min(e.x, t.x), r = Math.max(e.x, t.x), i = Math.min(e.y, t.y), a = Math.max(e.y, t.y), o = e;
	do {
		let s = o.next;
		if (o.x > r && s.x > r || o.x < n && s.x < n || o.y > a && s.y > a || o.y < i && s.y < i) o = s;
		else {
			if (o.i !== e.i && s.i !== e.i && o.i !== t.i && s.i !== t.i && fe(o, s, e, t)) return !0;
			o = s;
		}
	} while (o !== e);
	return !1;
}
function R(e, t) {
	return F(e.prev, e, e.next) < 0 ? F(e, t, e.next) >= 0 && F(e, e.prev, t) >= 0 : F(e, t, e.prev) < 0 || F(e, e.next, t) < 0;
}
function me(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do {
		let e = n.next;
		n.y > a != e.y > a && i < (e.x - n.x) * (a - n.y) / (e.y - n.y) + n.x && (r = !r), n = e;
	} while (n !== e);
	return r;
}
function he(e, t) {
	let n = _e(e.i, e.x, e.y), r = _e(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function ge(e, t, n, r) {
	let i = _e(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function z(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), y && te(e.prev, e.next);
}
function _e(e, t, n) {
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
function ve(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
//#endregion
//#region ../autk-core/src/triangulator-polylines.ts
var ye = class e {
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
	static lineStringToPolyline(e, n, r) {
		let i = t(e.geometry.coordinates.map((e) => [e[0] - n[0], e[1] - n[1]]), r);
		if (i.length < 4) return [];
		let a = d(i.flat());
		return [{
			flatCoords: i.map((e) => [e[0], e[1]]).flat(),
			flatIds: a
		}];
	}
	static multiLineStringToPolyline(e, n, r) {
		let { coordinates: i } = e.geometry, a = [];
		for (let e of i) {
			let i = t(e.map((e) => [e[0] - n[0], e[1] - n[1]]), r);
			if (i.length < 4) continue;
			let o = d(i.flat()), s = i.map((e) => [e[0], e[1]]).flat();
			a.push({
				flatCoords: s,
				flatIds: o
			});
		}
		return a;
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
}, be = class e {
	static buildMesh(t, n) {
		let r = [], i = [], a = t.features, o;
		for (let t = 0; t < a.length; t++) {
			let s = a[t];
			if (!s.geometry) {
				e.warnSkippedFeature(t, null);
				continue;
			}
			if (s.geometry.type === "LineString") o = e.lineStringToMesh(s, n);
			else if (s.geometry.type === "MultiLineString") o = e.multiLineStringToMesh(s, n);
			else if (s.geometry.type === "Polygon") o = e.polygonToMesh(s, n);
			else if (s.geometry.type === "MultiPolygon") o = e.multiPolygonToMesh(s, n);
			else if (s.geometry.type === "GeometryCollection") o = e.geometryCollectionToMesh(s, n, t);
			else {
				e.warnSkippedFeature(t, s.geometry.type);
				continue;
			}
			let c = 0, l = 0;
			for (let e of o) r.push({
				position: new Float32Array(e.flatCoords),
				indices: new Uint32Array(e.flatIds),
				featureIndex: t
			}), c += e.flatCoords.length / 2, l += e.flatIds.length / 3;
			i.push({
				nPoints: c,
				nTriangles: l,
				featureIndex: t,
				featureId: s.id
			});
		}
		return [r, i];
	}
	static buildBorder(t, n) {
		let r = [], i = [], a = t.features, o;
		for (let t = 0; t < a.length; t++) {
			let s = a[t];
			if (!s.geometry) {
				e.warnSkippedFeature(t, null);
				continue;
			}
			if (s.geometry.type === "LineString") o = e.lineStringToBorderMesh(s, n);
			else if (s.geometry.type === "MultiLineString") o = e.multiLineStringToBorderMesh(s, n);
			else if (s.geometry.type === "Polygon") o = e.polygonToBorderMesh(s, n);
			else if (s.geometry.type === "MultiPolygon") o = e.multiPolygonToBorderMesh(s, n);
			else if (s.geometry.type === "GeometryCollection") o = e.geometryCollectionToBorderMesh(s, n, t);
			else {
				e.warnSkippedFeature(t, s.geometry.type);
				continue;
			}
			let c = 0, l = 0;
			for (let e of o) r.push({
				position: new Float32Array(e.flatCoords),
				indices: new Uint32Array(e.flatIds)
			}), c += e.flatCoords.length / 2, l += e.flatIds.length / 2;
			i.push({
				nPoints: c,
				nLines: l
			});
		}
		return [r, i];
	}
	static lineStringToMesh(e, t) {
		let { coordinates: n } = e.geometry, r = n.map((e) => [e[0] - t[0], e[1] - t[1]]).flat();
		return [{
			flatCoords: r,
			flatIds: d(r)
		}];
	}
	static lineStringToBorderMesh(t, n) {
		let { coordinates: r } = t.geometry, i = r.map((e) => [e[0] - n[0], e[1] - n[1]]).flat();
		return [{
			flatCoords: i,
			flatIds: e.generateOpenBorderIds(i.length / 2)
		}];
	}
	static multiLineStringToMesh(e, t) {
		let { coordinates: n } = e.geometry, r = [];
		for (let e of n) {
			let n = e.map((e) => [e[0] - t[0], e[1] - t[1]]).flat(), i = d(n);
			r.push({
				flatCoords: n,
				flatIds: i
			});
		}
		return r;
	}
	static multiLineStringToBorderMesh(t, n) {
		let { coordinates: r } = t.geometry, i = [];
		for (let t of r) {
			let r = t.map((e) => [e[0] - n[0], e[1] - n[1]]).flat(), a = e.generateOpenBorderIds(r.length / 2);
			i.push({
				flatCoords: r,
				flatIds: a
			});
		}
		return i;
	}
	static polygonToMesh(e, t) {
		let { coordinates: n } = e.geometry, r = n[0].map((e) => e), i = [];
		for (let e = 1; e < n.length; e++) i.push(r.length), n[e].forEach((e) => r.push(e));
		let a = r.map((e) => [e[0] - t[0], e[1] - t[1]]).flat();
		return [{
			flatCoords: a,
			flatIds: d(a, i.length > 0 ? i : void 0)
		}];
	}
	static polygonToBorderMesh(t, n) {
		let { coordinates: r } = t.geometry;
		return r.map((t) => ({
			flatCoords: t.map((e) => [e[0] - n[0], e[1] - n[1]]).flat(),
			flatIds: e.generateClosedBorderIds(t)
		}));
	}
	static multiPolygonToMesh(e, t) {
		let n = [], { coordinates: r } = e.geometry;
		for (let e of r) {
			let r = e[0].map((e) => e), i = [];
			for (let t = 1; t < e.length; t++) i.push(r.length), e[t].forEach((e) => r.push(e));
			let a = r.map((e) => [e[0] - t[0], e[1] - t[1]]).flat(), o = d(a, i.length > 0 ? i : void 0);
			n.push({
				flatCoords: a,
				flatIds: o
			});
		}
		return n;
	}
	static multiPolygonToBorderMesh(t, n) {
		let r = [], { coordinates: i } = t.geometry;
		for (let t of i) for (let i of t) {
			let t = i.map((e) => [e[0] - n[0], e[1] - n[1]]).flat(), a = e.generateClosedBorderIds(i);
			r.push({
				flatCoords: t,
				flatIds: a
			});
		}
		return r;
	}
	static geometryCollectionToMesh(t, n, r) {
		let { geometries: i } = t.geometry, a = [];
		for (let o of i) {
			let i = {
				...t,
				geometry: o
			};
			o.type === "LineString" ? a.push(...e.lineStringToMesh(i, n)) : o.type === "MultiLineString" ? a.push(...e.multiLineStringToMesh(i, n)) : o.type === "Polygon" ? a.push(...e.polygonToMesh(i, n)) : o.type === "MultiPolygon" ? a.push(...e.multiPolygonToMesh(i, n)) : e.warnSkippedGeometryCollectionChild(r, o.type);
		}
		return a;
	}
	static geometryCollectionToBorderMesh(t, n, r) {
		let { geometries: i } = t.geometry, a = [];
		for (let o of i) {
			let i = {
				...t,
				geometry: o
			};
			o.type === "LineString" ? a.push(...e.lineStringToBorderMesh(i, n)) : o.type === "MultiLineString" ? a.push(...e.multiLineStringToBorderMesh(i, n)) : o.type === "Polygon" ? a.push(...e.polygonToBorderMesh(i, n)) : o.type === "MultiPolygon" ? a.push(...e.multiPolygonToBorderMesh(i, n)) : e.warnSkippedGeometryCollectionChild(r, o.type);
		}
		return a;
	}
	static warnSkippedFeature(e, t) {
		console.warn(`[autk-core] TriangulatorPolygons skipped feature ${e}: expected LineString, MultiLineString, Polygon, or MultiPolygon geometry, got ${t ?? "null"}.`);
	}
	static warnSkippedGeometryCollectionChild(e, t) {
		console.warn(`[autk-core] TriangulatorPolygons skipped GeometryCollection child in feature ${e}: expected LineString, MultiLineString, Polygon, or MultiPolygon geometry, got ${t}.`);
	}
	static generateOpenBorderIds(e) {
		let t = [];
		for (let n = 0; n < e - 1; n++) t.push(n, n + 1);
		return t;
	}
	static generateClosedBorderIds(t) {
		let n = t.length;
		if (n < 2) return [];
		let r = n > 1 && t[0][0] === t[n - 1][0] && t[0][1] === t[n - 1][1] && (t[0][2] ?? 0) === (t[n - 1][2] ?? 0) ? n - 1 : n, i = e.generateOpenBorderIds(r);
		return r > 1 && i.push(r - 1, 0), i;
	}
}, xe = 30, B = .05;
function Se(e, t) {
	let n = Math.abs(r(e)), a = i(e);
	return a > 1e-9 ? 2 * n / a * Math.tan(t * Math.PI / 180) : 0;
}
function Ce(e, t, i) {
	let a = [], o = [];
	for (let s = 0; s < e.length; s++) {
		let c = n(e[s]), l = r(c);
		s === 0 && l < 0 && (c = [...c].reverse()), s > 0 && l > 0 && (c = [...c].reverse());
		let u = c.length;
		for (let e = 0; e < u; e++) {
			let n = (e + 1) % u, [r, s] = c[e], [l, d] = c[n], f = a.length / 3;
			a.push(r, s, t, l, d, t, l, d, i, r, s, i), o.push(f, f + 1, f + 2, f, f + 2, f + 3);
		}
	}
	return {
		flatCoords: a,
		flatIds: o
	};
}
function we(e, t) {
	let i = n(e[0]);
	r(i) < 0 && (i = [...i].reverse());
	let a = [...i], o = [];
	for (let t = 1; t < e.length; t++) o.push(a.length), a.push(...n(e[t]));
	let s = d(a.flatMap((e) => e), o.length > 0 ? o : void 0);
	return {
		flatCoords: a.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: s
	};
}
function Te(e, t) {
	let i = n(e[0]);
	r(i) > 0 && (i = [...i].reverse());
	let a = [...i], o = [];
	for (let t = 1; t < e.length; t++) {
		o.push(a.length);
		let i = n(e[t]);
		r(i) < 0 && (i = [...i].reverse()), a.push(...i);
	}
	let s = d(a.flatMap((e) => e), o.length > 0 ? o : void 0);
	return {
		flatCoords: a.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: s
	};
}
function Ee(e, t, i) {
	let a = n(e);
	r(a) < 0 && (a = [...a].reverse());
	let o = a.length, s = a.reduce((e, t) => e + t[0], 0) / o, c = a.reduce((e, t) => e + t[1], 0) / o, l = [], u = [];
	for (let e = 0; e < o; e++) {
		let n = (e + 1) % o, r = l.length / 3;
		l.push(a[e][0], a[e][1], t, a[n][0], a[n][1], t, s, c, t + i), u.push(r, r + 1, r + 2);
	}
	return {
		flatCoords: l,
		flatIds: u
	};
}
function De(e, t, i) {
	let a = n(e);
	r(a) < 0 && (a = [...a].reverse());
	let o = a.length, s = a.reduce((e, t) => e + t[0], 0) / o, c = a.reduce((e, t) => e + t[1], 0) / o, l = [], u = [], d = [];
	for (let e = 0; e <= 4; e++) {
		let n = e / 4 * (Math.PI / 2), r = Math.cos(n), l = Math.sin(n), u = [];
		if (e === 4) u.push([
			s,
			c,
			t + i
		]);
		else for (let e = 0; e < o; e++) {
			let n = s + (a[e][0] - s) * r, o = c + (a[e][1] - c) * r, d = t + i * l;
			u.push([
				n,
				o,
				d
			]);
		}
		d.push(u);
	}
	for (let e = 0; e < 4; e++) {
		let t = d[e], n = d[e + 1];
		if (e === 3) {
			let e = n[0];
			for (let n = 0; n < o; n++) {
				let r = (n + 1) % o, i = l.length / 3;
				l.push(t[n][0], t[n][1], t[n][2], t[r][0], t[r][1], t[r][2], e[0], e[1], e[2]), u.push(i, i + 1, i + 2);
			}
		} else for (let e = 0; e < o; e++) {
			let r = (e + 1) % o, i = l.length / 3;
			l.push(t[e][0], t[e][1], t[e][2], t[r][0], t[r][1], t[r][2], n[r][0], n[r][1], n[r][2], n[r][0], n[r][1], n[r][2], n[e][0], n[e][1], n[e][2], t[e][0], t[e][1], t[e][2]), u.push(i, i + 1, i + 2, i + 3, i + 4, i + 5);
		}
	}
	return {
		flatCoords: l,
		flatIds: u
	};
}
function Oe(e, t) {
	let n = [...e], r = [], i = /* @__PURE__ */ new Map();
	function a(t, r) {
		let a = `${Math.min(t, r)}_${Math.max(t, r)}`;
		if (i.has(a)) return i.get(a);
		let o = (e[t * 3] + e[r * 3]) / 2, s = (e[t * 3 + 1] + e[r * 3 + 1]) / 2, c = (e[t * 3 + 2] + e[r * 3 + 2]) / 2, l = n.length / 3;
		return n.push(o, s, c), i.set(a, l), l;
	}
	for (let e = 0; e < t.length; e += 3) {
		let n = t[e], i = t[e + 1], o = t[e + 2], s = a(n, i), c = a(i, o), l = a(o, n);
		r.push(n, s, l, i, c, s, o, l, c, s, c, l);
	}
	return {
		flatCoords: n,
		flatIds: r
	};
}
function ke(e, t, i) {
	let a = n(e);
	r(a) < 0 && (a = [...a].reverse());
	let o = 0, s = 1, c = 0, l = a.length;
	for (let e = 0; e < l; e++) {
		let t = (e + 1) % l, n = a[t][0] - a[e][0], r = a[t][1] - a[e][1], i = Math.sqrt(n * n + r * r);
		i > o && (o = i, s = n / i, c = r / i);
	}
	let u = -c, f = s, p = a.map(([e, t]) => e * u + t * f), m = Math.min(...p), h = Math.max(...p), g = (m + h) / 2, _ = (h - m) / 2, v = d(a.flatMap((e) => e)), y = {
		flatCoords: a.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: v
	};
	y = Oe(y.flatCoords, y.flatIds), y = Oe(y.flatCoords, y.flatIds), y = Oe(y.flatCoords, y.flatIds);
	for (let e = 0; e < y.flatCoords.length; e += 3) {
		let n = y.flatCoords[e], r = y.flatCoords[e + 1], a = n * u + r * f, o = _ > 1e-5 ? (a - g) / _ : 0;
		o = Math.max(-1, Math.min(1, o)), y.flatCoords[e + 2] = t + i * Math.sqrt(1 - o * o);
	}
	let b = /* @__PURE__ */ new Map();
	for (let e = 0; e < y.flatIds.length; e += 3) for (let t = 0; t < 3; t++) {
		let n = y.flatIds[e + t], r = y.flatIds[e + (t + 1) % 3], i = `${Math.min(n, r)}_${Math.max(n, r)}`;
		b.set(i, (b.get(i) || 0) + 1);
	}
	let x = [], S = [];
	for (let e = 0; e < y.flatIds.length; e += 3) {
		let t = y.flatIds[e] * 3, n = y.flatIds[e + 1] * 3, r = y.flatIds[e + 2] * 3, i = x.length / 3;
		x.push(y.flatCoords[t], y.flatCoords[t + 1], y.flatCoords[t + 2], y.flatCoords[n], y.flatCoords[n + 1], y.flatCoords[n + 2], y.flatCoords[r], y.flatCoords[r + 1], y.flatCoords[r + 2]), S.push(i, i + 1, i + 2);
	}
	for (let e = 0; e < y.flatIds.length; e += 3) for (let n = 0; n < 3; n++) {
		let r = y.flatIds[e + n], i = y.flatIds[e + (n + 1) % 3], a = Math.min(r, i), o = Math.max(r, i);
		if (b.get(`${a}_${o}`) === 1) {
			let e = y.flatCoords[r * 3], n = y.flatCoords[r * 3 + 1], a = y.flatCoords[r * 3 + 2], o = y.flatCoords[i * 3], s = y.flatCoords[i * 3 + 1], c = y.flatCoords[i * 3 + 2];
			if (a - t < 1e-5 && c - t < 1e-5) continue;
			let l = x.length / 3;
			x.push(e, n, t, o, s, t, o, s, c, e, n, a), S.push(l, l + 1, l + 2, l + 2, l + 3, l);
		}
	}
	return {
		flatCoords: x,
		flatIds: S
	};
}
function Ae(e, t, i, a) {
	let o = n(e);
	r(o) < 0 && (o = [...o].reverse());
	let s = a * Math.PI / 180, c = Math.sin(s), l = Math.cos(s), u = o.map(([e, t]) => e * c + t * l), f = Math.min(...u), p = Math.max(...u), m = p - f, h = u.map((e) => m > 1e-9 ? (p - e) / m * i : 0), g = d(o.flatMap((e) => e)), _ = [], v = [];
	for (let e = 0; e < g.length; e += 3) {
		let n = g[e], r = g[e + 1], i = g[e + 2], a = _.length / 3;
		_.push(o[n][0], o[n][1], t + h[n], o[r][0], o[r][1], t + h[r], o[i][0], o[i][1], t + h[i]), v.push(a, a + 1, a + 2);
	}
	let y = o.length;
	for (let e = 0; e < y; e++) {
		let n = (e + 1) % y, r = h[e], i = h[n];
		if (r < 1e-5 && i < 1e-5) continue;
		let a = _.length / 3;
		_.push(o[e][0], o[e][1], t, o[n][0], o[n][1], t, o[n][0], o[n][1], t + i, o[e][0], o[e][1], t + r), v.push(a, a + 1, a + 2, a + 2, a + 3, a);
	}
	return {
		flatCoords: _,
		flatIds: v
	};
}
function je(e) {
	let t = e.length;
	return e.map((n, r) => {
		let i = (r + 1) % t, a = e[i][0] - e[r][0], o = e[i][1] - e[r][1], s = Math.sqrt(a * a + o * o);
		return s > 1e-10 ? [-o / s, a / s] : [0, 0];
	});
}
function Me(e, t, n) {
	let r = e.length;
	return e.map((i, a) => {
		let o = (a + r - 1) % r, s = t[o], c = t[a], l = n[e[o].edgeIdx], u = n[i.edgeIdx], d = s[0] * c[1] - s[1] * c[0];
		return Math.abs(d) > 1e-8 ? [(l * c[1] - u * s[1]) / d, (s[0] * u - c[0] * l) / d] : [c[0] * u, c[1] * u];
	});
}
function Ne(e, t, n, r) {
	let i = t[0] - e[0], a = t[1] - e[1], o = n[0] - r[0], s = n[1] - r[1], c = i * o + a * s;
	if (c <= 1e-8) return Infinity;
	let l = o * o + s * s;
	return l < 1e-12 ? Infinity : c / l;
}
function Pe(e, t) {
	let n = [], r = e.length;
	for (let i = 0; i < r; i++) {
		let a = (i + 1) % r, o = e[i].pos[0] - e[a].pos[0], s = e[i].pos[1] - e[a].pos[1];
		Math.sqrt(o * o + s * s) >= t && n.push(e[i]);
	}
	return n;
}
function Fe(e) {
	let t = e.length, n = e.map((n, r) => {
		let i = e[(r + 1) % t], a = i[0] - n[0], o = i[1] - n[1], s = Math.sqrt(a * a + o * o);
		return {
			dx: a / s,
			dy: o / s,
			len: s
		};
	}), r = 0, i = 0, a = 0;
	for (let e of n) e.len > r && (r = e.len, i = e.dx, a = e.dy);
	return n.map((e) => Math.abs(e.dx * i + e.dy * a) < .8);
}
function Ie(e, t) {
	let n = e.length, r = Array(n).fill(1);
	if (t.shape === "hipped" || t.shape === "pyramidal" || t.shape === "pyramid" || t.shape === "mansard") return r;
	let i = Fe(e);
	if (t.shape === "gabled") return i.map((e) => +!e);
	if (t.shape === "half-hipped") return i.map((e) => e ? .3 : 1);
	if (t.shape === "saltbox") {
		let e = 0;
		return i.map((t) => t ? 0 : (e++, e === 1 ? 1 : 2));
	}
	return r;
}
function Le(e, t, n) {
	let r = e;
	if (r.length < 3 || !a(r)) return {
		faces: [],
		maxH: 0
	};
	let i = Math.min(...r.map((e) => e[0])), o = Math.max(...r.map((e) => e[0])), s = Math.min(...r.map((e) => e[1])), c = Math.max(...r.map((e) => e[1])), l = B * 10, u = Pe(r.map((e, t) => ({
		pos: [...e],
		h: 0,
		edgeIdx: t
	})), B), f = [], p = 0;
	for (let e = 0; e < 500 && u.length >= 3; e++) {
		let e = je(u.map((e) => e.pos)), r = u.length, a = Me(u, e, t);
		if (a.some((e) => e[0] * e[0] + e[1] * e[1] > 100)) return {
			faces: [],
			maxH: 0
		};
		let m = Infinity;
		for (let e = 0; e < r; e++) {
			let t = (e + 1) % r, n = Ne(u[e].pos, u[t].pos, a[e], a[t]);
			n < m && (m = n);
		}
		let h = !1;
		if ((m !== Infinity && u[0].h + m >= n || m === Infinity) && (m = n - u[0].h, h = !0), m <= 0) break;
		let g = u.map((e, t) => [e.pos[0] + m * a[t][0], e.pos[1] + m * a[t][1]]), _ = u.map((e) => e.h + m), v = Math.max(..._);
		v > p && (p = v);
		for (let e = 0; e < r; e++) {
			let t = (e + 1) % r, n = [
				u[e].pos[0],
				u[e].pos[1],
				u[e].h
			], i = [
				u[t].pos[0],
				u[t].pos[1],
				u[t].h
			], a = [
				g[e][0],
				g[e][1],
				_[e]
			], o = [
				g[t][0],
				g[t][1],
				_[t]
			], s = g[e][0] - g[t][0], c = g[e][1] - g[t][1];
			if (Math.sqrt(s * s + c * c) < B) {
				let r = (g[e][0] + g[t][0]) / 2, a = (g[e][1] + g[t][1]) / 2, o = (_[e] + _[t]) / 2;
				f.push([
					n,
					i,
					[
						r,
						a,
						o
					]
				]);
			} else f.push([
				n,
				i,
				o,
				a
			]);
		}
		for (let [e, t] of g) if (e < i - l || e > o + l || t < s - l || t > c + l) return {
			faces: [],
			maxH: 0
		};
		if (h) {
			let e = d(g.flatMap((e) => e));
			for (let t = 0; t < e.length; t += 3) {
				let n = g[e[t]], r = g[e[t + 1]], i = g[e[t + 2]];
				f.push([
					[
						n[0],
						n[1],
						_[e[t]]
					],
					[
						r[0],
						r[1],
						_[e[t + 1]]
					],
					[
						i[0],
						i[1],
						_[e[t + 2]]
					]
				]);
			}
			break;
		}
		let y = [];
		for (let e = 0; e < r; e++) {
			let t = (e + 1) % r, n = g[e][0] - g[t][0], i = g[e][1] - g[t][1];
			Math.sqrt(n * n + i * i) >= B && y.push({
				pos: g[e],
				h: _[e],
				edgeIdx: u[e].edgeIdx
			});
		}
		u = y;
	}
	return {
		faces: f,
		maxH: p
	};
}
function Re(e, t, n, r) {
	let i = [], a = [], o = r > 1e-9 ? n / r : 1;
	for (let n of e) if (!(n.length < 3)) {
		if (n.length === 3) {
			let e = i.length / 3;
			i.push(n[0][0], n[0][1], t + n[0][2] * o, n[1][0], n[1][1], t + n[1][2] * o, n[2][0], n[2][1], t + n[2][2] * o), a.push(e, e + 1, e + 2);
		} else if (n.length === 4) {
			let e = i.length / 3;
			i.push(n[0][0], n[0][1], t + n[0][2] * o, n[1][0], n[1][1], t + n[1][2] * o, n[2][0], n[2][1], t + n[2][2] * o, n[2][0], n[2][1], t + n[2][2] * o, n[3][0], n[3][1], t + n[3][2] * o, n[0][0], n[0][1], t + n[0][2] * o), a.push(e, e + 1, e + 2, e + 3, e + 4, e + 5);
		} else {
			let e = d(n.flatMap(([e, t]) => [e, t]));
			for (let r = 0; r < e.length; r += 3) {
				let s = e[r], c = e[r + 1], l = e[r + 2], u = i.length / 3;
				i.push(n[s][0], n[s][1], t + n[s][2] * o, n[c][0], n[c][1], t + n[c][2] * o, n[l][0], n[l][1], t + n[l][2] * o), a.push(u, u + 1, u + 2);
			}
		}
	}
	return {
		flatCoords: i,
		flatIds: a
	};
}
function ze(e, t, a, o, s) {
	let c = n(e);
	r(c) < 0 && (c = [...c].reverse());
	let l = Ie(c, o), u = Infinity;
	if (o.shape === "mansard") {
		let e = Math.abs(r(c)), t = i(c);
		u = (t > 0 ? 2 * e / t : 0) * .7;
	}
	let { faces: d, maxH: f } = Le(c, l, u);
	return d.length === 0 ? null : Re(d, t, a, f);
}
function Be(e) {
	if (!e) return {
		shape: "flat",
		height: 0,
		angle: xe,
		direction: 0
	};
	let t = parseFloat(String(e["roof:angle"] ?? String(xe))) || xe;
	return {
		shape: String(e["roof:shape"] ?? "flat"),
		height: parseFloat(String(e["roof:height"] ?? "0")) || 0,
		angle: Math.min(75, Math.max(5, t)),
		direction: parseFloat(String(e["roof:direction"] ?? "0")) || 0
	};
}
function V(e, t, r, i) {
	let a = Be(i), o = a.height;
	if (o <= 0 && a.shape !== "flat" && (o = Se(n(e[0]), a.angle)), a.shape !== "flat") {
		let t = Se(n(e[0]), 60);
		t > 0 && o > t && (o = t);
	}
	let s = n(e[0]), c = [];
	c.push(Ce(e, t, r)), t > 0 && c.push(Te(e, t));
	let l;
	switch (a.shape) {
		case "round":
			l = ke(s, r, o);
			break;
		case "cone":
		case "pyramidal":
		case "pyramid":
			l = Ee(s, r, o);
			break;
		case "dome":
			l = De(s, r, o);
			break;
		case "skillion":
			l = Ae(s, r, o, a.direction);
			break;
		case "gabled":
		case "hipped":
		case "half-hipped":
		case "mansard":
		case "saltbox":
			l = ze(s, r, o, a, e) || we(e, r);
			break;
		default: l = we(e, r);
	}
	return c.push(l), c;
}
//#endregion
//#region ../autk-core/src/building-feature.ts
function Ve(e) {
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
function He(e) {
	let t = Ve(e), { parts: n, ...r } = t.properties, i = new Map(n.map((e) => [e.geometryIndex, e]));
	return t.geometry.geometries.map((e, t) => {
		let n = i.get(t) ?? {}, a = {
			...r,
			...n
		};
		for (let e of [[
			"height",
			"building:height",
			"levels",
			"building:levels"
		], [
			"min_height",
			"min_level",
			"building:min_level"
		]]) if (e.some((e) => Object.prototype.hasOwnProperty.call(n, e))) for (let t of e) Object.prototype.hasOwnProperty.call(n, t) || delete a[t];
		return {
			geometry: e,
			geometryIndex: t,
			properties: a
		};
	});
}
//#endregion
//#region ../autk-core/src/triangulator-buildings.ts
var Ue = class e {
	static buildMesh(t, n, r = !1) {
		let i = [], a = [], o = 0;
		for (let s = 0; s < t.features.length; s++) {
			let c = t.features[s], l = He(c), u = 0, d = 0;
			for (let t of l) {
				let a = t.geometry, c = t.properties, l = e.computeBuildingHeights(c);
				if (!l.length) {
					o++;
					let e = [
						"height",
						"building:height",
						"levels",
						"building:levels"
					].some((e) => e in c);
					if (!r || e) continue;
					l = [0, (3 + 4 * Math.random()) * 3.4];
				}
				let f = {
					type: "Feature",
					geometry: a,
					properties: c
				}, p = [];
				if (a.type === "LineString") {
					let { coordinates: t } = f.geometry;
					p = V([t.map((t) => e.toLocal(t, n))], l[0], l[1], f.properties);
				} else if (a.type === "MultiLineString") {
					let { coordinates: t } = f.geometry;
					for (let r of t) {
						let t = r.map((t) => e.toLocal(t, n));
						p.push(...V([t], l[0], l[1], f.properties));
					}
				} else if (a.type === "Polygon") {
					let { coordinates: t } = f.geometry;
					p = V(t.map((t) => t.map((t) => e.toLocal(t, n))), l[0], l[1], f.properties);
				} else if (a.type === "MultiPolygon") {
					let { coordinates: t } = f.geometry;
					for (let r of t) {
						let t = r.map((t) => t.map((t) => e.toLocal(t, n)));
						p.push(...V(t, l[0], l[1], f.properties));
					}
				} else {
					console.warn("Unsupported geometry type in building part:", a.type);
					continue;
				}
				for (let e of p) i.push({
					position: new Float32Array(e.flatCoords),
					indices: new Uint32Array(e.flatIds),
					featureIndex: s
				}), u += e.flatCoords.length / 3, d += e.flatIds.length / 3;
			}
			a.push({
				nPoints: u,
				nTriangles: d,
				featureIndex: s,
				featureId: c.id
			});
		}
		return o > 0 && console.warn(`[TriangulatorBuildings] ${o} parts: no valid height metadata`), [i, a];
	}
	static computeBuildingHeights(e) {
		let t = 3.4;
		if (e === null) return [];
		let n = (e) => parseFloat(String(e)) || 0, r = 0;
		"height" in e ? r = n(e.height) : "building:height" in e ? r = n(e["building:height"]) : "levels" in e ? r = t * n(e.levels) : "building:levels" in e && (r = t * n(e["building:levels"]));
		let i = 0;
		return "min_height" in e ? i = n(e.min_height) : "min_level" in e && n(e.min_level) >= 0 ? i = t * n(e.min_level) : "building:min_level" in e && (i = t * n(e["building:min_level"])), r <= i ? [] : [i, r];
	}
	static toLocal(e, t) {
		return [e[0] - t[0], e[1] - t[1]];
	}
}, We = 6, Ge = 20, Ke = 3.4, qe = class {
	static buildMesh(e, t, n) {
		let r = [], i = [];
		for (let n = 0; n < e.features.length; n++) {
			let a = e.features[n];
			for (let e of this.footprints(a)) {
				let o = we(e.rings.map((e) => e.map((e) => [e[0] - t[0], e[1] - t[1]])), e.height);
				r.push({
					position: new Float32Array(o.flatCoords),
					indices: new Uint32Array(o.flatIds),
					featureIndex: n
				}), i.push({
					nPoints: o.flatCoords.length / 3,
					nTriangles: o.flatIds.length / 3,
					featureIndex: n,
					featureId: a.id
				});
			}
		}
		let a = this.buildWindowLayout(e, n);
		for (let e of a.windows) {
			let n = [-e.normal[1], e.normal[0]], a = e.width * .5, o = e.height * .5, s = new Float32Array([
				e.center[0] - n[0] * a - t[0],
				e.center[1] - n[1] * a - t[1],
				e.center[2] - o,
				e.center[0] + n[0] * a - t[0],
				e.center[1] + n[1] * a - t[1],
				e.center[2] - o,
				e.center[0] + n[0] * a - t[0],
				e.center[1] + n[1] * a - t[1],
				e.center[2] + o,
				e.center[0] - n[0] * a - t[0],
				e.center[1] - n[1] * a - t[1],
				e.center[2] + o
			]);
			r.push({
				position: s,
				indices: new Uint32Array([
					0,
					1,
					2,
					0,
					2,
					3
				]),
				featureIndex: e.sourceFeatureIndex
			}), i.push({
				nPoints: 4,
				nTriangles: 2,
				featureIndex: e.sourceFeatureIndex,
				featureId: e.windowId
			});
		}
		return [r, i];
	}
	static buildWindowLayout(e, t) {
		if (!Number.isFinite(t)) throw Error("Window floors must be finite");
		let i = Math.max(1, Math.floor(t)), a = [], o = [];
		return e.features.forEach((e, t) => {
			for (let s of this.footprints(e)) {
				let e = (s.height - s.base) / i;
				s.rings.forEach((c, l) => {
					let u = n(c), d = (r(u) >= 0 ? 1 : -1) * (l === 0 ? 1 : -1);
					for (let n = 0; n < u.length; n++) {
						let r = u[n], c = u[(n + 1) % u.length], f = c[0] - r[0], p = c[1] - r[1], m = Math.hypot(f, p);
						if (m < 1e-6) continue;
						let h = f / m, g = p / m, _ = [
							d * g,
							-d * h,
							0
						], v = Math.max(1, Math.floor(m / We)), y = m / v;
						for (let c = 0; c < i; c++) for (let i = 0; i < v; i++) {
							let u = y * (i + .5), d = [
								r[0] + h * u,
								r[1] + g * u,
								s.base + (c + .5) * e
							], f = `${t}:${s.geometryIndex}:${s.polygonIndex}:${l}:${n}:${c}:${i}`, p = {
								windowId: f,
								sourceFeatureIndex: t,
								geometryIndex: s.geometryIndex,
								polygonIndex: s.polygonIndex,
								ringIndex: l,
								edgeIndex: n,
								floorIndex: c,
								windowIndex: i,
								center: d,
								normal: _,
								width: y,
								height: e,
								buildingHeight: s.height
							};
							o.push(p), a.push({
								type: "Feature",
								id: f,
								geometry: {
									type: "Point",
									coordinates: d
								},
								properties: { ...p }
							});
						}
					}
				});
			}
		}), {
			collection: {
				type: "FeatureCollection",
				features: a
			},
			windows: o
		};
	}
	static resolveHeight(e) {
		let t = He(e).map((e) => {
			let t = e.properties, n = t.height ?? t["building:height"];
			if (n !== void 0) {
				let e = Number.parseFloat(String(n));
				return Number.isFinite(e) ? Math.max(0, e) : Ge;
			}
			let r = Number.parseFloat(String(t.levels ?? t["building:levels"] ?? ""));
			return Number.isFinite(r) ? Math.max(0, r * Ke) : Ge;
		});
		return t.length ? Math.max(...t) : Ge;
	}
	static footprints(e) {
		let t = [];
		for (let n of He(e)) {
			let e = n.geometry, r = e.type === "Polygon" ? [e.coordinates] : e.type === "MultiPolygon" ? e.coordinates : e.type === "LineString" ? [[e.coordinates]] : e.type === "MultiLineString" ? e.coordinates.map((e) => [e]) : [], i = this.resolveHeight({
				type: "Feature",
				geometry: e,
				properties: n.properties
			}), a = n.properties, o = Math.max(0, a.min_height === void 0 ? (Number.parseFloat(String(a.min_level ?? a["building:min_level"] ?? "0")) || 0) * Ke : Number.parseFloat(String(a.min_height)) || 0);
			i <= o || r.forEach((e, r) => {
				e[0]?.length >= 3 && t.push({
					rings: e,
					geometryIndex: n.geometryIndex,
					polygonIndex: r,
					height: i,
					base: o
				});
			});
		}
		return t;
	}
};
//#endregion
//#region ../autk-core/src/utils-data.ts
function Je(e, t) {
	let n = t.split("."), r = e, i = !0;
	for (let e of n) {
		if (typeof r != "object" || !r || !(e in r)) {
			i = !1;
			break;
		}
		r = r[e];
	}
	if (i) return r;
	r = e;
	for (let e = 0; e < n.length; e++) {
		if (typeof r != "object" || !r) return;
		let t = r, i = n.slice(e).join(".");
		if (Object.prototype.hasOwnProperty.call(t, i)) return t[i];
		r = t[n[e]];
	}
	return r;
}
var H = typeof Float32Array < "u" ? Float32Array : Array;
//#endregion
//#region ../node_modules/gl-matrix/esm/mat4.js
function U() {
	var e = new H(16);
	return H != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function Ye(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Xe(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = n[0], b = n[1], x = n[2], S = n[3];
	return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e;
}
function Ze(e, t, n, r, i) {
	var a = 1 / Math.tan(t / 2);
	if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
		var o = 1 / (r - i);
		e[10] = i * o, e[14] = i * r * o;
	} else e[10] = -1, e[14] = -r;
	return e;
}
function Qe(e, t, n, r, i, a, o) {
	var s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
	return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = a * l, e[15] = 1, e;
}
function $e(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p, m = t[0], h = t[1], g = t[2], _ = r[0], v = r[1], y = r[2], b = n[0], x = n[1], S = n[2];
	return Math.abs(m - b) < 1e-6 && Math.abs(h - x) < 1e-6 && Math.abs(g - S) < 1e-6 ? Ye(e) : (u = m - b, d = h - x, f = g - S, p = 1 / Math.sqrt(u * u + d * d + f * f), u *= p, d *= p, f *= p, i = v * f - y * d, a = y * u - _ * f, o = _ * d - v * u, p = Math.sqrt(i * i + a * a + o * o), p ? (p = 1 / p, i *= p, a *= p, o *= p) : (i = 0, a = 0, o = 0), s = d * o - f * a, c = f * i - u * o, l = u * a - d * i, p = Math.sqrt(s * s + c * c + l * l), p ? (p = 1 / p, s *= p, c *= p, l *= p) : (s = 0, c = 0, l = 0), e[0] = i, e[1] = s, e[2] = u, e[3] = 0, e[4] = a, e[5] = c, e[6] = d, e[7] = 0, e[8] = o, e[9] = l, e[10] = f, e[11] = 0, e[12] = -(i * m + a * h + o * g), e[13] = -(s * m + c * h + l * g), e[14] = -(u * m + d * h + f * g), e[15] = 1, e);
}
var et = Xe;
//#endregion
//#region ../node_modules/gl-matrix/esm/vec3.js
function W() {
	var e = new H(3);
	return H != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function G(e) {
	var t = e[0], n = e[1], r = e[2];
	return Math.sqrt(t * t + n * n + r * r);
}
function K(e, t, n) {
	var r = new H(3);
	return r[0] = e, r[1] = t, r[2] = n, r;
}
function q(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e;
}
function tt(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e;
}
function J(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function Y(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e;
}
function X(e, t) {
	var n = t[0], r = t[1], i = t[2], a = n * n + r * r + i * i;
	return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e;
}
function Z(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2];
	return e[0] = i * c - a * s, e[1] = a * o - r * c, e[2] = r * s - i * o, e;
}
function nt(e, t, n, r) {
	var i = [], a = [];
	return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), a[2] = i[2], e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e;
}
var rt = tt;
(function() {
	var e = W();
	return function(t, n, r, i, a, o) {
		var s, c;
		for (n ||= 3, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
		return t;
	};
})();
//#endregion
//#region ../autk-core/src/camera.ts
var it = class e {
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
		this.wEye = W(), this.wLookAt = W(), this.wEyeDir = W(), this.wUp = W(), this.wNear = 0, this.wFar = 0, this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = U(), this.mViewMatrix = U(), this.viewportWidth = 0, this.viewportHeight = 0, this.resetCamera(t.up, t.lookAt, t.eye);
	}
	resetCamera(e, t, n) {
		this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = U(), this.mViewMatrix = U(), this.wNear = 1, this.wFar = 5e5, this.wLookAt = K(t[0], t[1], t[2]), this.wEye = K(n[0], n[1], n[2]), this.updateEyeDirAndLen(), this.wUp = K(e[0], e[1], e[2]);
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
		return new Float32Array(et(U(), this.mProjectionMatrix, this.mViewMatrix));
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
		Ye(this.mViewMatrix), Qe(this.mProjectionMatrix, e, t, n, r, 0, -100), this.wEye = K((e + t) * .5, (n + r) * .5, 100), this.wLookAt = K((e + t) * .5, (n + r) * .5, 0), this.wUp = K(0, 1, 0), this.updateEyeDirAndLen();
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
		Y(this.wEye, this.wEye, i, e), Y(this.wLookAt, this.wEye, this.wEyeDir, G(this.wEyeDir));
	}
	translate(e, t) {
		let n = this.wEye[2], r = W();
		X(r, Z(r, this.wEyeDir, this.wUp));
		let i = q(W(), J(W(), r, e * n), J(W(), this.wUp, t * n));
		q(this.wEye, this.wEye, i), Y(this.wLookAt, this.wEye, this.wEyeDir, G(this.wEyeDir));
	}
	yaw(e) {
		nt(this.wEyeDir, this.wEyeDir, K(0, 0, 0), e), nt(this.wUp, this.wUp, K(0, 0, 0), e), Y(this.wLookAt, this.wEye, this.wEyeDir, G(this.wEyeDir));
	}
	pitch(e) {
		e = -e, q(this.wEyeDir, J(W(), this.wUp, Math.sin(e)), J(W(), this.wEyeDir, Math.cos(e))), X(this.wEyeDir, this.wEyeDir), Y(this.wLookAt, this.wEye, this.wEyeDir, G(this.wEyeDir)), Z(this.wUp, Z(W(), this.wEyeDir, this.wUp), this.wEyeDir), X(this.wUp, this.wUp);
	}
	getZoomScale() {
		return Math.max(Math.abs(this.wEye[2]), 1) / 1e4;
	}
	update() {
		let e = this.viewportWidth / this.viewportHeight;
		$e(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp), Ze(this.mProjectionMatrix, this.fovy, e, this.wFar, this.wNear);
	}
	static buildViewProjection(e) {
		let t = $e(U(), e.eye, e.lookAt, e.up), n = Ze(U(), e.fovDeg * (Math.PI / 180), e.aspect, e.near, e.far);
		return new Float32Array(et(U(), n, t));
	}
	screenCoordToWorldDir(e, t) {
		let n = W();
		X(n, Z(n, this.wEyeDir, this.wUp));
		let r = J(W(), this.wUp, Math.tan(this.fovy / 2) * (t - .5) * 2), i = this.viewportWidth / this.viewportHeight, a = J(W(), n, Math.tan(this.fovy / 2) * (e - .5) * 2 * i), o = q(W(), r, a), s = q(W(), this.wEyeDir, o);
		return X(s, s), s;
	}
	updateEyeDirAndLen() {
		this.wEyeDir = W(), rt(this.wEyeDir, this.wLookAt, this.wEye), X(this.wEyeDir, this.wEyeDir);
	}
};
//#endregion
//#region ../autk-core/src/utils-geojson.ts
function at(e) {
	let t = ot(e);
	return t ? [(t.minLon + t.maxLon) * .5, (t.minLat + t.maxLat) * .5] : [0, 0];
}
function ot(e) {
	if (!e) return null;
	let t = Infinity, n = Infinity, r = -Infinity, i = -Infinity, a = (e) => {
		e[0] < t && (t = e[0]), e[0] > r && (r = e[0]), e[1] < n && (n = e[1]), e[1] > i && (i = e[1]);
	};
	if (e.type === "FeatureCollection") for (let t of e.features) {
		let e = t.geometry;
		e && ct(e, a);
	}
	else ct(e, a);
	return Number.isFinite(t) ? {
		minLon: t,
		minLat: n,
		maxLon: r,
		maxLat: i
	} : null;
}
function st(e) {
	if (!e) return null;
	let t = lt(e);
	return t ? t.centroid : null;
}
function ct(e, t) {
	switch (e.type) {
		case "Point":
			t(e.coordinates);
			break;
		case "MultiPoint":
		case "LineString":
			for (let n of e.coordinates) t(n);
			break;
		case "MultiLineString":
			for (let n of e.coordinates) for (let e of n) t(e);
			break;
		case "Polygon":
			for (let n of e.coordinates) for (let e of n) t(e);
			break;
		case "MultiPolygon":
			for (let n of e.coordinates) for (let e of n) for (let n of e) t(n);
			break;
		case "GeometryCollection": for (let n of e.geometries) ct(n, t);
	}
}
function lt(e) {
	switch (e.type) {
		case "Point": return {
			centroid: [
				e.coordinates[0],
				e.coordinates[1],
				e.coordinates[2] ?? 0
			],
			weight: 1
		};
		case "MultiPoint": return Q(e.coordinates);
		case "LineString": return ut(e.coordinates);
		case "MultiLineString": return pt(e.coordinates.map((e) => ut(e)));
		case "Polygon": return dt(e.coordinates);
		case "MultiPolygon": return pt(e.coordinates.map((e) => dt(e)));
		case "GeometryCollection": return pt(e.geometries.map((e) => lt(e)));
	}
}
function Q(e) {
	if (e.length === 0) return null;
	let t = 0, n = 0, r = 0;
	for (let i of e) t += i[0], n += i[1], r += i[2] ?? 0;
	return {
		centroid: [
			t / e.length,
			n / e.length,
			r / e.length
		],
		weight: e.length
	};
}
function ut(e) {
	if (e.length === 0) return null;
	if (e.length === 1) return Q(e);
	let t = 0, n = 0, r = 0, i = 0;
	for (let a = 0; a < e.length - 1; a++) {
		let o = e[a], s = e[a + 1], c = Math.hypot(s[0] - o[0], s[1] - o[1], (s[2] ?? 0) - (o[2] ?? 0));
		c !== 0 && (t += c, n += (o[0] + s[0]) * .5 * c, r += (o[1] + s[1]) * .5 * c, i += ((o[2] ?? 0) + (s[2] ?? 0)) * .5 * c);
	}
	return t === 0 ? Q(e) : {
		centroid: [
			n / t,
			r / t,
			i / t
		],
		weight: t
	};
}
function dt(e) {
	let t = e[0];
	if (!t || t.length === 0) return null;
	let n = 0, r = 0, i = 0, a = 0;
	for (let t = 0; t < e.length; t++) {
		let o = e[t], s = ft(o);
		if (!s) continue;
		let c = Math.abs(s.signedArea) * (t === 0 ? 1 : -1);
		n += s.centroid[0] * c, r += s.centroid[1] * c, i += s.centroid[2] * c, a += c;
	}
	let o = Math.abs(a);
	return o === 0 ? Q(e.flat()) : {
		centroid: [
			n / a,
			r / a,
			i / a
		],
		weight: o
	};
}
function ft(e) {
	if (e.length < 3) return null;
	let t = 0, n = 0, r = 0, i = 0;
	for (let a = 0; a < e.length - 1; a++) {
		let o = e[a], s = e[a + 1], c = o[0] * s[1] - s[0] * o[1];
		t += c, n += (o[0] + s[0]) * c, r += (o[1] + s[1]) * c, i += ((o[2] ?? 0) + (s[2] ?? 0)) * .5 * c;
	}
	let a = t * .5;
	return a === 0 ? null : {
		centroid: [
			n / (6 * a),
			r / (6 * a),
			i / t
		],
		signedArea: a
	};
}
function pt(e) {
	let t = 0, n = 0, r = 0, i = 0;
	for (let a of e) a && a.weight !== 0 && (t += a.weight, n += a.centroid[0] * a.weight, r += a.centroid[1] * a.weight, i += a.centroid[2] * a.weight);
	return t === 0 ? null : {
		centroid: [
			n / t,
			r / t,
			i / t
		],
		weight: t
	};
}
//#endregion
//#region src/device-manager.ts
var $ = null;
async function mt() {
	if (!$) {
		let e;
		e = (async () => {
			try {
				if (!("gpu" in navigator)) throw Error("WebGPU not supported.");
				let t = await navigator.gpu.requestAdapter();
				if (t ||= (await new Promise((e) => window.setTimeout(e, 150)), await navigator.gpu.requestAdapter()), !t) throw Error("Failed to get GPU adapter.");
				let n = await t.requestDevice({ requiredLimits: {
					maxBufferSize: t.limits.maxBufferSize,
					maxStorageBufferBindingSize: t.limits.maxStorageBufferBindingSize,
					maxStorageBuffersPerShaderStage: t.limits.maxStorageBuffersPerShaderStage
				} });
				return n.lost.then((t) => {
					console.error(`WebGPU device lost: ${t.message}`), $ === e && ($ = null);
				}), n;
			} catch (t) {
				throw $ === e && ($ = null), t;
			}
		})(), $ = e;
	}
	return $;
}
//#endregion
//#region src/compute-pipeline.ts
var ht = [
	"validation",
	"out-of-memory",
	"internal"
], gt = class {
	async getDevice() {
		return mt();
	}
	createBuffer(e, t, n, r) {
		let i = e.createBuffer({
			size: t,
			usage: n
		});
		return r && e.queue.writeBuffer(i, 0, r.buffer, r.byteOffset, r.byteLength), i;
	}
	createStagingBuffer(e, t) {
		return e.createBuffer({
			size: t,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
		});
	}
	async mapReadBuffer(e, t) {
		await e.mapAsync(GPUMapMode.READ);
		let n = new t(e.getMappedRange().slice(0));
		return e.unmap(), n;
	}
	async submitInErrorScopes(e, t, n) {
		for (let t of ht) e.pushErrorScope(t);
		let r, i;
		try {
			r = n();
		} finally {
			i = Promise.all(ht.map(() => e.popErrorScope()).reverse());
		}
		let a = (await i).flatMap((e, t) => e ? [`GPU ${ht[t]} error: ${e.message}`] : []);
		if (a.length > 0) throw Error(`${t}: ${a.join("\n")}`);
		return r;
	}
	alignTo(e, t) {
		let n = e % t;
		return n === 0 ? e : e + (t - n);
	}
}, _t = /^[A-Za-z_][A-Za-z0-9_]*$/, vt = /* @__PURE__ */ new Set(/* @__PURE__ */ "array.atomic.bitcast.bool.break.case.const.continue.continuing.default.discard.else.enable.f16.f32.false.fn.for.if.i32.let.loop.mat2x2.mat2x3.mat2x4.mat3x2.mat3x3.mat3x4.mat4x2.mat4x3.mat4x4.override.private.ptr.return.sampler.sampler_comparison.storage.struct.switch.texture_1d.texture_2d.texture_2d_array.texture_3d.texture_cube.texture_cube_array.texture_depth_2d.texture_depth_2d_array.texture_depth_cube.texture_depth_cube_array.texture_depth_multisampled_2d.texture_external.texture_multisampled_2d.texture_storage_1d.texture_storage_2d.texture_storage_2d_array.texture_storage_3d.true.type.u32.uniform.var.vec2.vec2f.vec2h.vec2i.vec2u.vec3.vec3f.vec3h.vec3i.vec3u.vec4.vec4f.vec4h.vec4i.vec4u.while._".split(".")), yt = /* @__PURE__ */ new Set([
	"ArrayF32",
	"OutputArray",
	"compute_value",
	"main",
	"idx",
	"id",
	"i"
]), bt = class extends gt {
	async run(e) {
		let { collection: t, variableMapping: n, attributeArrays: r = {}, attributeMatrices: i = {}, wgslBody: a } = e, o = e.outputColumns ?? (e.resultField ? [e.resultField] : []);
		if (o.length === 0) throw Error("resultField or outputColumns must be provided");
		let s = t.features ?? [], c = s.length;
		if (c === 0) return t;
		this.validateShaderIdentifiers(e);
		let { orderedVarNames: l, inputArrays: u, scalarVars: d, arrayVars: f, matrixVars: p } = this.extractInputData(s, n, r, i, c), { globalVarNames: m, globalInputArrays: h, globalMeta: g } = this.extractGlobalData(e), _ = this.buildShader(d, f, p, g, a, o.length), v = {
			...u,
			...h
		}, y = new Set(g.filter((e) => e.kind !== "scalar").map((e) => e.name)), b = await this.dispatch(l, m, y, v, _, c, o.length);
		return this.applyResultsToFeatures(t, s, b, o);
	}
	async runCompute(e) {
		let t = await this.getDevice(), { shader: n, entryPoint: r = "main", dispatchSize: i, inputs: a, outputs: o } = e, s = Object.values(a).filter((e) => e.type === "storage").length + Object.keys(o).length;
		if (s > t.limits.maxStorageBuffersPerShaderStage) throw Error(`ComputeGpgpu: dispatch requires ${s} storage buffers; device limit is ${t.limits.maxStorageBuffersPerShaderStage}.`);
		let c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
		try {
			await this.submitInErrorScopes(t, "ComputeGpgpu", () => {
				let e = t.createShaderModule({ code: n }), s = t.createComputePipeline({
					layout: "auto",
					compute: {
						module: e,
						entryPoint: r
					}
				}), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
				for (let [e, n] of Object.entries(a)) {
					let r = n.group ?? 0, i = n.type === "uniform" ? GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST : GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST, a = this.alignTo(n.data.byteLength, n.type === "uniform" ? 16 : 4), o = this.createBuffer(t, a, i, n.data);
					c.set(e, o);
					let s = f.get(r) ?? [];
					s.push({
						binding: n.binding,
						resource: { buffer: o }
					}), f.set(r, s);
				}
				for (let [e, n] of Object.entries(o)) {
					let r = n.group ?? 0, i = this.alignTo(n.size, 4), a = this.createBuffer(t, i, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
					l.set(e, a), d.set(e, i);
					let o = f.get(r) ?? [];
					o.push({
						binding: n.binding,
						resource: { buffer: a }
					}), f.set(r, o);
				}
				let p = [...f.keys()].sort((e, t) => e - t), m = /* @__PURE__ */ new Map();
				for (let e of p) m.set(e, t.createBindGroup({
					layout: s.getBindGroupLayout(e),
					entries: f.get(e)
				}));
				let h = t.createCommandEncoder(), g = h.beginComputePass();
				g.setPipeline(s);
				for (let e of p) g.setBindGroup(e, m.get(e));
				g.dispatchWorkgroups(i[0] ?? 1, i[1] ?? 1, i[2] ?? 1), g.end();
				for (let [e, n] of l) {
					let r = d.get(e), i = this.createStagingBuffer(t, r);
					u.set(e, i), h.copyBufferToBuffer(n, 0, i, 0, r);
				}
				t.queue.submit([h.finish()]);
			});
			let e = {};
			for (let [t, n] of u) {
				let r = o[t].arrayType ?? Uint8Array;
				e[t] = await this.mapReadBuffer(n, r);
			}
			return e;
		} finally {
			for (let e of u.values()) e.destroy();
			for (let e of c.values()) e.destroy();
			for (let e of l.values()) e.destroy();
		}
	}
	async dispatch(e, t, n, r, i, a, o) {
		let s = {}, c = 0;
		e.forEach((e) => {
			s[e] = {
				type: "storage",
				data: r[e],
				binding: c++
			};
		}), t.forEach((e) => {
			s[e] = {
				type: n.has(e) ? "storage" : "uniform",
				data: r[e],
				binding: c++
			};
		});
		let l = {};
		for (let e = 0; e < o; e++) l[`out${e}`] = {
			size: a * 4,
			binding: c + e,
			arrayType: Float32Array
		};
		return this.runCompute({
			shader: i,
			dispatchSize: [
				Math.ceil(a / 64),
				1,
				1
			],
			inputs: s,
			outputs: l
		});
	}
	validateShaderIdentifiers(e) {
		let { variableMapping: t, attributeArrays: n = {}, attributeMatrices: r = {}, uniforms: i = {}, uniformArrays: a = {}, uniformMatrices: o = {} } = e, s = Object.keys(t), c = [
			...Object.keys(i),
			...Object.keys(a),
			...Object.keys(o)
		];
		for (let e of s) this.validateWgslIdentifier(e, "variableMapping");
		for (let e of c) {
			let t = e in i ? "uniforms" : e in a ? "uniformArrays" : "uniformMatrices";
			this.validateWgslIdentifier(e, t);
		}
		let l = /* @__PURE__ */ new Map();
		for (let e of yt) l.set(e, "internal WGSL symbol");
		for (let e of s) {
			let t = e in r ? "matrix" : e in n ? "array" : "scalar";
			this.claimGeneratedSymbols(l, this.getFeatureGeneratedSymbols(e, t), `feature "${e}"`);
		}
		for (let e of Object.keys(i)) this.claimGeneratedSymbols(l, this.getGlobalGeneratedSymbols(e, "scalar"), `uniform "${e}"`);
		for (let e of Object.keys(a)) this.claimGeneratedSymbols(l, this.getGlobalGeneratedSymbols(e, "array"), `uniform array "${e}"`);
		for (let e of Object.keys(o)) this.claimGeneratedSymbols(l, this.getGlobalGeneratedSymbols(e, "matrix"), `uniform matrix "${e}"`);
	}
	validateWgslIdentifier(e, t) {
		if (!_t.test(e)) throw Error(`ComputeGpgpu: invalid WGSL identifier "${e}" in ${t}.`);
		if (vt.has(e)) throw Error(`ComputeGpgpu: WGSL identifier "${e}" is reserved and cannot be used in ${t}.`);
	}
	claimGeneratedSymbols(e, t, n) {
		for (let r of t) {
			let t = e.get(r);
			if (t) throw Error(`ComputeGpgpu: generated WGSL symbol collision for "${r}" between ${t} and ${n}.`);
			e.set(r, n);
		}
	}
	getFeatureGeneratedSymbols(e, t) {
		let n = [e, `${e}Buf`];
		if (t !== "scalar" && n.push(`${e}_offset`), t === "array") n.push(`${e}_Array`, `${e}_length`);
		else if (t === "matrix") {
			let t = `${e}__varrows`;
			n.push(`${e}_Matrix`, `${e}_rows`, `${e}_cols`, t, `${t}Buf`);
		}
		return n;
	}
	getGlobalGeneratedSymbols(e, t) {
		let n = t === "scalar" ? [
			e,
			`${e}Buf`,
			`${e}_Uniform`
		] : [e];
		return t === "array" ? n.push(`${e}_Array`, `${e}_length`) : t === "matrix" && n.push(`${e}_Matrix`, `${e}_rows`, `${e}_cols`), n;
	}
	extractInputData(e, t, n, r, i) {
		let a = Object.keys(t), o = {}, s = [], c = [], l = [], u = a.map((e) => {
			let a = this.normalizePropertyPath(t[e]), o = e in n, s = e in r, c = "scalar", l = 0, u = 0, d = 0;
			if (s) {
				let t = r[e];
				l = t.cols, t.rows === "auto" ? c = "matrix_auto" : (c = "matrix_fixed", u = t.rows);
			} else o && (c = "array", d = n[e]);
			return {
				varName: e,
				path: a,
				kind: c,
				cols: l,
				rows: u,
				length: d,
				maxRows: 0,
				actualRows: new Float32Array(i)
			};
		});
		for (let t = 0; t < i; t++) {
			let n = e[t];
			for (let e of u) if (e.kind === "matrix_auto") {
				let r = Je(n, e.path), i = Array.isArray(r) ? r.length : 0;
				e.actualRows[t] = i, i > e.maxRows && (e.maxRows = i);
			}
		}
		for (let e of u) if (e.kind === "scalar") o[e.varName] = new Float32Array(i), s.push(e.varName);
		else if (e.kind === "array") o[e.varName] = new Float32Array(i * e.length), c.push({
			name: e.varName,
			length: e.length
		});
		else if (e.kind === "matrix_fixed") o[e.varName] = new Float32Array(i * e.rows * e.cols), l.push({
			name: e.varName,
			rows: e.rows,
			cols: e.cols
		});
		else if (e.kind === "matrix_auto") {
			o[e.varName] = new Float32Array(i * e.maxRows * e.cols);
			let t = `${e.varName}__varrows`;
			o[t] = e.actualRows, l.push({
				name: e.varName,
				rows: e.maxRows,
				cols: e.cols,
				variableRows: !0,
				rowsVarName: t
			});
		}
		for (let t = 0; t < i; t++) {
			let n = e[t];
			for (let e of u) {
				let r = Je(n, e.path), i = o[e.varName];
				if (e.kind === "scalar") {
					let e = Number(r);
					i[t] = Number.isFinite(e) ? e : 0;
				} else if (e.kind === "array") {
					let n = Array.isArray(r) ? r : [], a = t * e.length;
					for (let t = 0; t < e.length; t++) {
						let e = t < n.length ? Number(n[t]) : 0;
						i[a + t] = Number.isFinite(e) ? e : 0;
					}
				} else if (e.kind === "matrix_fixed" || e.kind === "matrix_auto") {
					let n = e.kind === "matrix_fixed" ? e.rows : e.maxRows, a = Array.isArray(r) ? r : [], o = t * n * e.cols;
					for (let t = 0; t < n; t++) {
						let n = Array.isArray(a[t]) ? a[t] : [];
						for (let r = 0; r < e.cols; r++) {
							let a = r < n.length ? Number(n[r]) : 0;
							i[o + t * e.cols + r] = Number.isFinite(a) ? a : 0;
						}
					}
				}
			}
		}
		let d = [...s];
		for (let e of c) d.push(e.name);
		for (let e of l) d.push(e.name), e.variableRows && e.rowsVarName && d.push(e.rowsVarName);
		return {
			orderedVarNames: d,
			inputArrays: o,
			scalarVars: s,
			arrayVars: c,
			matrixVars: l
		};
	}
	extractGlobalData(e) {
		let { uniforms: t = {}, uniformArrays: n = {}, uniformMatrices: r = {} } = e, i = [], a = {}, o = [];
		for (let [e, n] of Object.entries(t)) a[e] = this.packUniformFloats([Number.isFinite(n) ? n : 0]), o.push({
			kind: "scalar",
			name: e
		}), i.push(e);
		for (let [e, t] of Object.entries(n)) a[e] = this.packUniformFloats(t.map((e) => Number.isFinite(Number(e)) ? Number(e) : 0)), o.push({
			kind: "array",
			name: e,
			length: t.length
		}), i.push(e);
		for (let [e, { data: t, cols: n }] of Object.entries(r)) {
			let r = t.length, s = new Float32Array(r * n);
			for (let e = 0; e < r; e++) for (let r = 0; r < n; r++) {
				let i = Number(t[e]?.[r] ?? 0);
				s[e * n + r] = Number.isFinite(i) ? i : 0;
			}
			a[e] = this.packUniformFloats(s), o.push({
				kind: "matrix",
				name: e,
				rows: r,
				cols: n
			}), i.push(e);
		}
		return {
			globalVarNames: i,
			globalInputArrays: a,
			globalMeta: o
		};
	}
	applyResultsToFeatures(e, t, n, r) {
		let i = t.map((e, t) => {
			let i = e.properties ? { ...e.properties } : {}, a = i.compute ? { ...i.compute } : {};
			return r.forEach((e, r) => {
				a[e] = n[`out${r}`][t];
			}), i.compute = a, {
				...e,
				properties: i
			};
		});
		return {
			...e,
			features: i
		};
	}
	buildShader(e, t, n, r, i, a) {
		let o = 0, s = [], c = [], l = [], u = [], d = [], f = [];
		for (let t of e) s.push(`@group(0) @binding(${o++}) var<storage, read> ${t}Buf: ArrayF32;`), c.push(`  let ${t}: f32 = ${t}Buf.data[idx];`), u.push(`${t}: f32`), d.push(t);
		for (let { name: e, length: n } of t) s.push(`@group(0) @binding(${o++}) var<storage, read> ${e}Buf: ArrayF32;`), f.push(`alias ${e}_Array = array<f32, ${n}>;`), c.push(`  let ${e}_offset: u32 = idx * ${n}u;`), l.push(`  var ${e}: ${e}_Array;`), l.push(`  for (var i = 0u; i < ${n}u; i++) { ${e}[i] = ${e}Buf.data[${e}_offset + i]; }`), u.push(`${e}: ${e}_Array`, `${e}_length: u32`), d.push(e, `${n}u`);
		for (let { name: e, rows: t, cols: r, variableRows: i, rowsVarName: a } of n) {
			s.push(`@group(0) @binding(${o++}) var<storage, read> ${e}Buf: ArrayF32;`), i && a && (s.push(`@group(0) @binding(${o++}) var<storage, read> ${a}Buf: ArrayF32;`), c.push(`  let ${e}_rows: u32 = u32(${a}Buf.data[idx]);`));
			let n = t * r;
			f.push(`alias ${e}_Matrix = array<f32, ${n}>;`), c.push(`  let ${e}_offset: u32 = idx * ${n}u;`), l.push(`  var ${e}: ${e}_Matrix;`), l.push(`  for (var i = 0u; i < ${n}u; i++) { ${e}[i] = ${e}Buf.data[${e}_offset + i]; }`), u.push(`${e}: ${e}_Matrix`, `${e}_rows: u32`, `${e}_cols: u32`), d.push(e, i ? `${e}_rows` : `${t}u`, `${r}u`);
		}
		for (let e of r) {
			if (e.kind === "scalar") {
				let t = `${e.name}_Uniform`;
				s.push(`struct ${t} { data: array<vec4f, 1>, }`), s.push(`@group(0) @binding(${o++}) var<uniform> ${e.name}Buf: ${t};`), c.push(`  let ${e.name}: f32 = ${e.name}Buf.data[0].x;`), u.push(`${e.name}: f32`), d.push(e.name);
				continue;
			}
			let t = e.kind === "array", n = t ? e.length : e.rows * e.cols, r = t ? `${e.name}_Array` : `${e.name}_Matrix`;
			f.push(`alias ${r} = array<f32, ${Math.max(1, n)}>;`), s.push(`@group(0) @binding(${o++}) var<storage, read> ${e.name}: ${r};`), c.push(`  _ = ${e.name}[0];`), t ? (u.push(`${e.name}_length: u32`), d.push(`${e.length}u`)) : (u.push(`${e.name}_rows: u32`, `${e.name}_cols: u32`), d.push(`${e.rows}u`, `${e.cols}u`));
		}
		let p = o, m = a > 1, h = Array.from({ length: a }, (e, t) => `@group(0) @binding(${p + t}) var<storage, read_write> out${t}Buf: ArrayF32;`), g = m ? "OutputArray" : "f32", _ = m ? `alias OutputArray = array<f32, ${a}>;` : "", v = m ? Array.from({ length: a }, (e, t) => `            out${t}Buf.data[idx] = result[${t}];`).join("\n") : "            out0Buf.data[idx] = result;";
		return `
        struct ArrayF32 { data: array<f32> }
        ${_}
        ${f.join("\n        ")}
        ${s.join("\n        ")}
        ${h.join("\n        ")}

        fn compute_value(${u.join(", ")}) -> ${g} { ${i} }

        @compute @workgroup_size(64)
        fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
            let idx: u32 = gid.x;
            if (idx >= arrayLength(&out0Buf.data)) { return; }
            ${c.join("\n")}
            ${l.join("\n")}
            let result = compute_value(${d.join(", ")});
            ${v}
        }`;
	}
	packUniformFloats(e) {
		let t = new Float32Array(Math.max(4, Math.ceil(e.length / 4) * 4));
		for (let n = 0; n < e.length; n++) t[n] = Number(e[n]) || 0;
		return t;
	}
	normalizePropertyPath(e) {
		return e.startsWith("properties.") || e.startsWith("geometry.") || e === "id" ? e : `properties.${e}`;
	}
}, xt = "struct Params {\n    gridSize   : u32,\n    tileSize   : u32,\n    totalTiles : u32,\n    classCount : u32,\n    objectCount: u32,\n    flags      : u32,\n    _pad0      : u32,\n    _pad1      : u32,\n}\n\n@group(0) @binding(0) var tiledTex : texture_2d<f32>;\n@group(0) @binding(1) var<storage, read_write> classResults: array<atomic<u32>>;\n@group(0) @binding(2) var<storage, read_write> objectResults: array<atomic<u32>>;\n@group(0) @binding(3) var<storage, read> sampleSources: array<u32>;\n@group(0) @binding(4) var<uniform> params: Params;\n\nfn decodeByte(value: f32) -> u32 {\n    return u32(round(clamp(value, 0.0, 1.0) * 255.0));\n}\n\n@compute @workgroup_size(8, 8, 1)\nfn main(@builtin(global_invocation_id) gid: vec3u) {\n    let ti = gid.z;\n    if ti >= params.totalTiles { return; }\n    if gid.x >= params.tileSize || gid.y >= params.tileSize { return; }\n\n    let col = ti % params.gridSize;\n    let row = ti / params.gridSize;\n    let px  = col * params.tileSize + gid.x;\n    let py  = row * params.tileSize + gid.y;\n\n    let pixel = textureLoad(tiledTex, vec2u(px, py), 0);\n    let sourceIndex = sampleSources[ti];\n\n    if pixel.a < 0.5 {\n        if (params.flags & 4u) != 0u && (params.flags & 1u) != 0u && params.classCount > 0u {\n            atomicAdd(&classResults[sourceIndex * params.classCount + (params.classCount - 1u)], 1u);\n        }\n        return;\n    }\n\n    let classByte = decodeByte(pixel.r);\n    if classByte == 0u { return; }\n    let classIndex = classByte - 1u;\n\n    if (params.flags & 1u) != 0u && classIndex < params.classCount {\n        atomicAdd(&classResults[sourceIndex * params.classCount + classIndex], 1u);\n    }\n\n    let objectCode = decodeByte(pixel.g) + decodeByte(pixel.b) * 256u;\n    if objectCode == 0u { return; }\n    let objectIndex = objectCode - 1u;\n\n    if (params.flags & 2u) != 0u && objectIndex < params.objectCount {\n        atomicStore(&objectResults[ti * params.objectCount + objectIndex], 1u);\n    }\n}\n", St = "@group(1) @binding(0) var<uniform> idColor: vec4f;\n@fragment\nfn main() -> @location(0) vec4f {\n    return idColor;\n}\n", Ct = "@group(0) @binding(0) var<uniform> viewProj: mat4x4f;\n@vertex\nfn main(@location(0) pos: vec3f) -> @builtin(position) vec4f {\n    return viewProj * vec4f(pos, 1.0);\n}\n", wt = [
	-30,
	0,
	30
];
function Tt(e) {
	let t = [];
	return e.features.forEach((e, n) => {
		if (!e.geometry) return;
		let r = st(e.geometry);
		r && t.push({
			collectionIndex: n,
			origin: r
		});
	}), t;
}
function Et(e, t = {}) {
	let n = Math.max(1, Math.floor(t.directions ?? 1)), r = t.azimuthOffsetDeg ?? 0, i = jt(t.pitchDeg ?? 0), a = [];
	for (let t of e) for (let e = 0; e < n; e++) {
		let o = jt(r + 360 / n * e), s = Math.cos(i), c = Math.cos(o) * s, l = Math.sin(o) * s, u = Math.sin(i);
		a.push({
			collectionIndex: t.collectionIndex,
			eye: [...t.origin],
			lookAt: [
				t.origin[0] + c,
				t.origin[1] + l,
				t.origin[2] + u
			]
		});
	}
	return a;
}
function Dt(e) {
	let t = e.collection, n = e.strategy ?? { type: "centroid" }, r = e.sampling ?? {};
	if (n.type === "building-windows") {
		let e = qe.buildWindowLayout(t, n.floors);
		return {
			collection: e.collection,
			samples: kt(e.windows),
			windows: e.windows
		};
	}
	return {
		collection: t,
		samples: Et(Tt(t), r)
	};
}
function Ot(e, t, n, r, i) {
	let a = new Float32Array(e.length * 16);
	for (let o = 0; o < e.length; o++) {
		let s = e[o], c = [
			s.eye[0] - t[0],
			s.eye[1] - t[1],
			s.eye[2]
		], l = [
			s.lookAt[0] - t[0],
			s.lookAt[1] - t[1],
			s.lookAt[2]
		];
		a.set(it.buildViewProjection({
			eye: c,
			lookAt: l,
			up: [
				0,
				0,
				1
			],
			fovDeg: n,
			aspect: 1,
			near: r,
			far: i
		}), o * 16);
	}
	return a;
}
function kt(e) {
	let t = [];
	return e.forEach((e, n) => {
		for (let r of wt) {
			let i = At(e.normal, r);
			t.push({
				collectionIndex: n,
				eye: [...e.center],
				lookAt: [
					e.center[0] + i[0],
					e.center[1] + i[1],
					e.center[2] + i[2]
				]
			});
		}
	}), t;
}
function At(e, t) {
	let n = jt(t), r = Math.cos(n), i = Math.sin(n);
	return [
		e[0] * r - e[1] * i,
		e[0] * i + e[1] * r,
		e[2]
	];
}
function jt(e) {
	return e * Math.PI / 180;
}
//#endregion
//#region src/compute-render.ts
var Mt = 255, Nt = 65535, Pt = 255, Ft = Uint32Array.BYTES_PER_ELEMENT, It = 268435456, Lt = class extends gt {
	renderPipelineCache = /* @__PURE__ */ new WeakMap();
	countPipelineCache = /* @__PURE__ */ new WeakMap();
	async run(e) {
		let { layers: t, viewpoints: n, aggregation: r, camera: i, tileSize: a = 64 } = e, o = i?.fov ?? 90, s = i?.clip?.near ?? 1, c = i?.clip?.far ?? 5e3;
		if (t.length === 0) throw Error("ComputeRender: at least one layer is required.");
		if (a % 8 != 0) throw Error("ComputeRender: tileSize must be a multiple of 8.");
		let l = Dt(n), u = l.collection, d = l.samples, f = this.buildRenderMetadata(t, r), p = d.length;
		if (p === 0) return this.applyAggregation(u, d, f, /* @__PURE__ */ new Uint32Array(), /* @__PURE__ */ new Uint32Array(), a);
		let m = at(u), h = t.map((e, t) => this.triangulateLayer(e, m, t)).filter((e) => e !== null), g = Ot(d, m, o, s, c), _ = await this.getDevice(), v = _.limits.minUniformBufferOffsetAlignment, y = Math.max(64, v);
		this.validateAggregationBufferSizes(_, u.features.length, f), this.validateObjectAggregationCpuBufferSize(u.features.length, f);
		let b = this.computeMaxBatchSize(_, a, y, f), x = [];
		try {
			let e = f.includeObjects ? h.flatMap((e) => this.uploadLayerToGpu(_, e, f.featureMetaByLayer[e.layerIndex])) : h.flatMap((e) => this.uploadMergedLayerToGpu(_, e, f.layerTypeIndexByLayer[e.layerIndex] ?? 0));
			for (let t of e) x.push(t.vBuf, t.iBuf, t.idBuf);
			let { renderPipeline: t, camBGL: n, idBGL: r } = this.getRenderPipeline(_), { countPipeline: i, countBGL: o } = this.getCountPipeline(_), s = e.map((e) => _.createBindGroup({
				layout: r,
				entries: [{
					binding: 0,
					resource: { buffer: e.idBuf }
				}]
			})), c = f.includeClasses ? new Uint32Array(u.features.length * f.layerTypes.length) : /* @__PURE__ */ new Uint32Array(), l = f.includeObjects ? new Uint32Array(u.features.length * f.objectKeys.length) : /* @__PURE__ */ new Uint32Array();
			for (let r = 0; r < p; r += b) {
				let m = d.slice(r, Math.min(p, r + b)), h = m.length, x = Math.ceil(Math.sqrt(h)), S = x * a, ee = g.subarray(r * 16, (r + h) * 16), C = this.createTileTexture(_, S), w = this.createDepthTexture(_, S), T = this.buildCameraBuffer(_, ee, h, v).cameraBuf, E = this.buildCountBuffers(_, u.features.length, h, x, a, m, f), D = null, O = null;
				try {
					let r = C.createView(), u = w.createView(), d = this.buildCountBindGroup(_, o, r, E), p = _.createBindGroup({
						layout: n,
						entries: [{
							binding: 0,
							resource: {
								buffer: T,
								offset: 0,
								size: 64
							}
						}]
					}), g = _.createCommandEncoder();
					this.encodeRenderPasses(g, h, x, a, r, u, t, p, y, e, s), this.encodeCountPass(g, i, d, a, h), D = E.layerTypeSize > 0 ? this.createStagingBuffer(_, E.layerTypeSize) : null, O = E.objectSize > 0 ? this.createStagingBuffer(_, E.objectSize) : null, D && g.copyBufferToBuffer(E.layerTypeBuf, 0, D, 0, E.layerTypeSize), O && g.copyBufferToBuffer(E.objectBuf, 0, O, 0, E.objectSize), _.queue.submit([g.finish()]);
					let v = D ? await this.mapReadBuffer(D, Uint32Array) : null, b = O ? await this.mapReadBuffer(O, Uint32Array) : null;
					if (v) for (let e = 0; e < c.length; e++) c[e] += v[e] ?? 0;
					b && this.accumulateObjectVisibilityCounts(l, b, m, f.objectKeys.length);
				} finally {
					D?.destroy(), O?.destroy(), w.destroy(), C.destroy(), T.destroy(), E.layerTypeBuf.destroy(), E.objectBuf.destroy(), E.sampleSourcesBuf.destroy(), E.paramsBuf.destroy();
				}
			}
			return this.applyAggregation(u, d, f, c, l, a);
		} finally {
			for (let e of x) e.destroy();
		}
	}
	computeMaxBatchSize(e, t, n, r) {
		let i = Math.floor(e.limits.maxTextureDimension2D / t), a = i * i, o = Math.floor(e.limits.maxBufferSize / n), s = Math.floor(e.limits.maxStorageBufferBindingSize / 4), c = e.limits.maxComputeWorkgroupsPerDimension, l = r.includeObjects ? Math.max(1, r.objectKeys.length) * 4 : 4, u = r.includeObjects ? Math.floor(e.limits.maxStorageBufferBindingSize / l) : 2 ** 53 - 1, d = Math.min(a, o, s, c, u);
		if (d < 1) throw Error("ComputeRender: tileSize exceeds WebGPU device limits.");
		return d;
	}
	validateAggregationBufferSizes(e, t, n) {
		if (!n.includeClasses) return;
		let r = t * n.layerTypes.length * 4;
		if (r > e.limits.maxStorageBufferBindingSize) throw Error(`RenderPipeline: class aggregation requires ${r} bytes, exceeding maxStorageBufferBindingSize ${e.limits.maxStorageBufferBindingSize}.`);
	}
	validateObjectAggregationCpuBufferSize(e, t) {
		if (!t.includeObjects) return;
		let n = e * t.objectKeys.length * Ft;
		if (n > It) throw Error(`ComputeRender: object aggregation requires ${n} bytes on the CPU, exceeding the supported accumulation limit of ${It} bytes.`);
	}
	buildRenderMetadata(e, t) {
		let n = [], r = /* @__PURE__ */ new Map(), i = [], a = [], o = [], s = t.type === "classes", c = t.type === "objects", l = t.type === "classes" && !!t.includeBackground, u = c ? /* @__PURE__ */ new Set() : null;
		if (e.forEach((e) => {
			let t = r.get(e.type);
			if (t === void 0 && (t = n.length, n.push(e.type), r.set(e.type, t)), i.push(t), c) {
				if (e.id.length === 0) throw Error("ComputeRender: layer id must be non-empty when object aggregation is enabled.");
				if (u?.has(e.id)) throw Error(`ComputeRender: duplicate layer id "${e.id}" is not allowed for object aggregation.`);
				u?.add(e.id);
				let n = e.objectIdProperty ? /* @__PURE__ */ new Set() : null, r = e.collection.features.map((r, i) => {
					let o = e.objectIdProperty ? r.properties?.[e.objectIdProperty] : void 0, s = o == null ? this.buildObjectKey(e.id, i) : this.buildObjectKey(e.id, o);
					if (n?.has(s)) throw Error(`ComputeRender: duplicate ${e.objectIdProperty} value "${String(o)}" in layer "${e.id}" is not allowed for object aggregation.`);
					n?.add(s);
					let c = a.length;
					return a.push(s), {
						layerTypeIndex: t,
						objectIndex: c
					};
				});
				o.push(r);
			} else o.push([]);
		}), l) {
			let e = t.backgroundLayerType ?? "background";
			if (r.has(e)) throw Error(`ComputeRender: backgroundLayerType "${e}" must not match a rendered layer type when class aggregation includes background.`);
			n.push(e);
		}
		if (s && n.length > Mt) throw Error(`ComputeRender: class aggregation currently supports at most ${Mt} layer types.`);
		let d = 0;
		if (s && (d |= 1), c && (d |= 2), l && (d |= 4), c && a.length > Nt) throw Error(`ComputeRender: object visibility currently supports at most ${Nt} objects.`);
		return {
			layerTypes: n,
			objectKeys: a,
			layerTypeIndexByLayer: i,
			featureMetaByLayer: o,
			includeClasses: s,
			includeObjects: c,
			flags: d
		};
	}
	triangulateLayer(e, t, n) {
		let r;
		switch (e.type) {
			case "buildings":
				[r] = Ue.buildMesh(e.collection, t);
				break;
			case "polygons":
			case "surface":
			case "water":
			case "parks":
				[r] = be.buildMesh(e.collection, t);
				break;
			case "roads":
			case "polylines":
				[r] = ye.buildMesh(e.collection, t);
				break;
			default: return console.warn(`ComputeRender: unsupported layer type "${e.type}", skipping.`), null;
		}
		return {
			geometries: r,
			layer: e,
			layerIndex: n
		};
	}
	uploadLayerToGpu(e, t, n) {
		let r = /* @__PURE__ */ new Map();
		for (let e of t.geometries) {
			let t = e.featureIndex ?? 0;
			r.has(t) || r.set(t, []), r.get(t).push(e);
		}
		let i = [];
		for (let [t, a] of r.entries()) {
			let r = n[t];
			if (!r) continue;
			let o = 0, s = 0;
			for (let e of a) {
				let t = e.position.length % 2 == 0 && e.position.length % 3 != 0;
				o += (t ? e.position.length / 2 : e.position.length / 3) * 3, s += e.indices?.length ?? 0;
			}
			let c = new Float32Array(o), l = new Uint32Array(s), u = 0, d = 0, f = 0;
			for (let e of a) {
				let t = e.position.length % 2 == 0 && e.position.length % 3 != 0;
				if (t) for (let t = 0, n = 0; t < e.position.length; t += 2, n += 3) c[u + n] = e.position[t], c[u + n + 1] = e.position[t + 1];
				else c.set(e.position, u);
				if (e.indices) {
					for (let t = 0; t < e.indices.length; t++) l[d + t] = e.indices[t] + f;
					d += e.indices.length;
				}
				let n = t ? e.position.length / 2 : e.position.length / 3;
				u += n * 3, f += n;
			}
			let p = this.createBuffer(e, c.byteLength, GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST, c), m = this.createBuffer(e, l.byteLength, GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST, l), h = this.createBuffer(e, 16, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST, this.encodeIds(r.layerTypeIndex, r.objectIndex));
			i.push({
				vBuf: p,
				iBuf: m,
				indexCount: l.length,
				idBuf: h
			});
		}
		return i;
	}
	uploadMergedLayerToGpu(e, t, n) {
		let r = t.layer.type === "buildings" ? 3 : 2, i = 0, a = 0;
		for (let e of t.geometries) {
			if (e.position.length % r !== 0) throw Error(`ComputeRender: layer '${t.layer.id}' has invalid position data for ${r}D geometry.`);
			i += e.position.length / r * 3, a += e.indices?.length ?? 0;
		}
		let o = new Float32Array(i), s = new Uint32Array(a), c = 0, l = 0, u = 0;
		for (let e of t.geometries) {
			let t = e.position.length / r;
			if (r === 2) for (let t = 0, n = 0; t < e.position.length; t += 2, n += 3) o[c + n] = e.position[t], o[c + n + 1] = e.position[t + 1], o[c + n + 2] = 0;
			else o.set(e.position, c);
			if (e.indices) {
				for (let t = 0; t < e.indices.length; t++) s[l + t] = e.indices[t] + u;
				l += e.indices.length;
			}
			c += t * 3, u += t;
		}
		let d = {
			positions: o,
			indices: s
		};
		if (d.indices.length === 0) return [];
		let f = this.createBuffer(e, d.positions.byteLength, GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST, d.positions), p = this.createBuffer(e, d.indices.byteLength, GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST, d.indices), m = this.createBuffer(e, 16, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST, this.encodeIds(n, 0));
		return [{
			vBuf: f,
			iBuf: p,
			indexCount: d.indices.length,
			idBuf: m
		}];
	}
	encodeIds(e, t) {
		let n = t + 1, r = n & Pt, i = n >> 8 & Pt;
		return new Float32Array([
			(e + 1) / Mt,
			r / Pt,
			i / Pt,
			1
		]);
	}
	buildObjectKey(e, t) {
		return `${encodeURIComponent(e)}:${encodeURIComponent(String(t))}`;
	}
	createTileTexture(e, t) {
		return e.createTexture({
			size: [t, t],
			format: "rgba8unorm",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
		});
	}
	createDepthTexture(e, t) {
		return e.createTexture({
			size: [t, t],
			format: "depth24plus",
			usage: GPUTextureUsage.RENDER_ATTACHMENT
		});
	}
	buildCameraBuffer(e, t, n, r) {
		let i = Math.max(64, r), a = new ArrayBuffer(n * i);
		for (let e = 0; e < n; e++) new Float32Array(a, e * i, 16).set(t.subarray(e * 16, e * 16 + 16));
		return {
			cameraBuf: this.createBuffer(e, n * i, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST, new Uint8Array(a)),
			cameraStride: i
		};
	}
	buildCountBuffers(e, t, n, r, i, a, o) {
		let s = o.includeClasses ? t * o.layerTypes.length * 4 : 0, c = o.includeObjects ? n * o.objectKeys.length * 4 : 0, l = Math.max(4, n * 4), u = e.createBuffer({
			size: Math.max(4, s),
			usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
		}), d = e.createBuffer({
			size: Math.max(4, c),
			usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
		}), f = this.createBuffer(e, l, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST, new Uint32Array(a.map((e) => e.collectionIndex))), p = /* @__PURE__ */ new ArrayBuffer(32), m = new DataView(p);
		return m.setUint32(0, r, !0), m.setUint32(4, i, !0), m.setUint32(8, n, !0), m.setUint32(12, o.layerTypes.length, !0), m.setUint32(16, o.objectKeys.length, !0), m.setUint32(20, o.flags, !0), {
			layerTypeBuf: u,
			objectBuf: d,
			sampleSourcesBuf: f,
			paramsBuf: this.createBuffer(e, 32, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST, new Uint8Array(p)),
			layerTypeSize: s,
			objectSize: c
		};
	}
	buildRenderPipeline(e) {
		let t = e.createBindGroupLayout({ entries: [{
			binding: 0,
			visibility: GPUShaderStage.VERTEX,
			buffer: {
				type: "uniform",
				hasDynamicOffset: !0,
				minBindingSize: 64
			}
		}] }), n = e.createBindGroupLayout({ entries: [{
			binding: 0,
			visibility: GPUShaderStage.FRAGMENT,
			buffer: {
				type: "uniform",
				minBindingSize: 16
			}
		}] });
		return {
			renderPipeline: e.createRenderPipeline({
				layout: e.createPipelineLayout({ bindGroupLayouts: [t, n] }),
				vertex: {
					module: e.createShaderModule({ code: Ct }),
					entryPoint: "main",
					buffers: [{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					}]
				},
				fragment: {
					module: e.createShaderModule({ code: St }),
					entryPoint: "main",
					targets: [{ format: "rgba8unorm" }]
				},
				depthStencil: {
					format: "depth24plus",
					depthWriteEnabled: !0,
					depthCompare: "less"
				},
				primitive: {
					topology: "triangle-list",
					cullMode: "none"
				}
			}),
			camBGL: t,
			idBGL: n
		};
	}
	getRenderPipeline(e) {
		let t = this.renderPipelineCache.get(e);
		if (t) return t;
		let n = this.buildRenderPipeline(e);
		return this.renderPipelineCache.set(e, n), n;
	}
	buildCountPipeline(e) {
		let t = e.createBindGroupLayout({ entries: [
			{
				binding: 0,
				visibility: GPUShaderStage.COMPUTE,
				texture: {
					sampleType: "float",
					viewDimension: "2d"
				}
			},
			{
				binding: 1,
				visibility: GPUShaderStage.COMPUTE,
				buffer: { type: "storage" }
			},
			{
				binding: 2,
				visibility: GPUShaderStage.COMPUTE,
				buffer: { type: "storage" }
			},
			{
				binding: 3,
				visibility: GPUShaderStage.COMPUTE,
				buffer: { type: "read-only-storage" }
			},
			{
				binding: 4,
				visibility: GPUShaderStage.COMPUTE,
				buffer: {
					type: "uniform",
					minBindingSize: 32
				}
			}
		] });
		return {
			countPipeline: e.createComputePipeline({
				layout: e.createPipelineLayout({ bindGroupLayouts: [t] }),
				compute: {
					module: e.createShaderModule({ code: xt }),
					entryPoint: "main"
				}
			}),
			countBGL: t
		};
	}
	getCountPipeline(e) {
		let t = this.countPipelineCache.get(e);
		if (t) return t;
		let n = this.buildCountPipeline(e);
		return this.countPipelineCache.set(e, n), n;
	}
	buildCountBindGroup(e, t, n, r) {
		return e.createBindGroup({
			layout: t,
			entries: [
				{
					binding: 0,
					resource: n
				},
				{
					binding: 1,
					resource: { buffer: r.layerTypeBuf }
				},
				{
					binding: 2,
					resource: { buffer: r.objectBuf }
				},
				{
					binding: 3,
					resource: { buffer: r.sampleSourcesBuf }
				},
				{
					binding: 4,
					resource: { buffer: r.paramsBuf }
				}
			]
		});
	}
	encodeRenderPasses(e, t, n, r, i, a, o, s, c, l, u) {
		for (let d = 0; d < t; d++) {
			let t = d % n, f = Math.floor(d / n), p = e.beginRenderPass({
				colorAttachments: [{
					view: i,
					loadOp: d === 0 ? "clear" : "load",
					storeOp: "store",
					clearValue: {
						r: 0,
						g: 0,
						b: 0,
						a: 0
					}
				}],
				depthStencilAttachment: {
					view: a,
					depthLoadOp: d === 0 ? "clear" : "load",
					depthStoreOp: "store",
					depthClearValue: 1
				}
			});
			p.setPipeline(o), p.setViewport(t * r, f * r, r, r, 0, 1), p.setScissorRect(t * r, f * r, r, r), p.setBindGroup(0, s, [d * c]);
			for (let e = 0; e < l.length; e++) {
				let t = l[e];
				p.setBindGroup(1, u[e]), p.setVertexBuffer(0, t.vBuf), p.setIndexBuffer(t.iBuf, "uint32"), p.drawIndexed(t.indexCount);
			}
			p.end();
		}
	}
	encodeCountPass(e, t, n, r, i) {
		let a = r / 8, o = e.beginComputePass();
		o.setPipeline(t), o.setBindGroup(0, n), o.dispatchWorkgroups(a, a, i), o.end();
	}
	applyAggregation(e, t, n, r, i, a) {
		let o = a * a, s = new Uint32Array(e.features.length);
		for (let e of t) s[e.collectionIndex] += 1;
		return {
			...e,
			features: e.features.map((e, t) => {
				let a = s[t], c = { sampleCount: a };
				if (n.includeClasses) {
					let e = {};
					for (let i = 0; i < n.layerTypes.length; i++) {
						let s = r[t * n.layerTypes.length + i] ?? 0;
						e[n.layerTypes[i]] = a > 0 ? s / (o * a) : 0;
					}
					c.classes = e;
				}
				if (n.includeObjects) {
					let e = {};
					for (let r = 0; r < n.objectKeys.length; r++) {
						let o = i[t * n.objectKeys.length + r] ?? 0;
						o > 0 && (e[n.objectKeys[r]] = {
							visible: !0,
							sampleRatio: a > 0 ? o / a : 0
						});
					}
					c.objects = e;
				}
				return {
					...e,
					properties: {
						...e.properties,
						compute: {
							...e.properties?.compute ?? {},
							render: {
								...e.properties?.compute?.render ?? {},
								...c
							}
						}
					}
				};
			})
		};
	}
	accumulateObjectVisibilityCounts(e, t, n, r) {
		for (let i = 0; i < n.length; i++) {
			let a = n[i]?.collectionIndex;
			if (a === void 0) continue;
			let o = i * r, s = a * r;
			for (let n = 0; n < r; n++) (t[o + n] ?? 0) > 0 && (e[s + n] += 1);
		}
	}
}, Rt = class {
	_gpgpu = new bt();
	_render = new Lt();
	async gpgpuPipeline(e) {
		return this._gpgpu.run(e);
	}
	async renderPipeline(e) {
		return this._render.run(e);
	}
};
//#endregion
export { Rt as AutkComputeEngine, bt as ComputeGpgpu, Lt as ComputeRender, Ot as buildCameraMatrices, Et as expandCameraSamples, Tt as generateViewOrigins };

//# sourceMappingURL=autk-compute.js.map