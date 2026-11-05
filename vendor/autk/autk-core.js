//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, n = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, r = /* @__PURE__ */ function(e) {
	return e.USER = "user", e.MIN_MAX = "minMax", e.PERCENTILE = "percentile", e;
}({}), i = /* @__PURE__ */ function(e) {
	return e.CAT_ACCENT = "schemeAccent", e.CAT_DARK2 = "schemeDark2", e.CAT_CATEGORY10 = "schemeCategory10", e.CAT_OBSERVABLE10 = "schemeObservable10", e.CAT_PAIRED = "schemePaired", e.CAT_PASTEL1 = "schemePastel1", e.CAT_PASTEL2 = "schemePastel2", e.CAT_SET1 = "schemeSet1", e.CAT_SET2 = "schemeSet2", e.CAT_SET3 = "schemeSet3", e.CAT_TABLEAU10 = "schemeTableau10", e.SEQ_REDS = "interpolateReds", e.SEQ_BLUES = "interpolateBlues", e.SEQ_GREENS = "interpolateGreens", e.SEQ_GREYS = "interpolateGreys", e.SEQ_ORANGES = "interpolateOranges", e.SEQ_PURPLES = "interpolatePurples", e.SEQ_TURBO = "interpolateTurbo", e.SEQ_VIRIDIS = "interpolateViridis", e.SEQ_INFERNO = "interpolateInferno", e.SEQ_MAGMA = "interpolateMagma", e.SEQ_PLASMA = "interpolatePlasma", e.SEQ_CIVIDIS = "interpolateCividis", e.SEQ_WARM = "interpolateWarm", e.SEQ_COOL = "interpolateCool", e.SEQ_CUBEHELIX_DEFAULT = "interpolateCubehelixDefault", e.SEQ_BU_GN = "interpolateBuGn", e.SEQ_BU_PU = "interpolateBuPu", e.SEQ_GN_BU = "interpolateGnBu", e.SEQ_OR_RD = "interpolateOrRd", e.SEQ_PU_BU_GN = "interpolatePuBuGn", e.SEQ_PU_BU = "interpolatePuBu", e.SEQ_PU_RD = "interpolatePuRd", e.SEQ_RD_PU = "interpolateRdPu", e.SEQ_YL_GN_BU = "interpolateYlGnBu", e.SEQ_YL_GN = "interpolateYlGn", e.SEQ_YL_OR_BR = "interpolateYlOrBr", e.SEQ_YL_OR_RD = "interpolateYlOrRd", e.DIV_BR_BG = "interpolateBrBG", e.DIV_PR_GN = "interpolatePRGn", e.DIV_PI_YG = "interpolatePiYG", e.DIV_PU_OR = "interpolatePuOr", e.DIV_RED_BLUE = "interpolateRdBu", e.DIV_RED_GREY = "interpolateRdGy", e.DIV_RED_YELLOW_BLUE = "interpolateRdYlBu", e.DIV_RED_YELLOW_GREEN = "interpolateRdYlGn", e.DIV_SPECTRAL = "interpolateSpectral", e;
}({});
//#endregion
//#region ../node_modules/d3-color/src/define.js
function a(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function o(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../node_modules/d3-color/src/color.js
function s() {}
var c = .7, l = 1 / c, u = "\\s*([+-]?\\d+)\\s*", d = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", f = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", p = /^#([0-9a-f]{3,8})$/, m = RegExp(`^rgb\\(${u},${u},${u}\\)$`), h = RegExp(`^rgb\\(${f},${f},${f}\\)$`), g = RegExp(`^rgba\\(${u},${u},${u},${d}\\)$`), _ = RegExp(`^rgba\\(${f},${f},${f},${d}\\)$`), v = RegExp(`^hsl\\(${d},${f},${f}\\)$`), y = RegExp(`^hsla\\(${d},${f},${f},${d}\\)$`), b = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
a(s, T, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: x,
	formatHex: x,
	formatHex8: S,
	formatHsl: C,
	formatRgb: w,
	toString: w
});
function x() {
	return this.rgb().formatHex();
}
function S() {
	return this.rgb().formatHex8();
}
function C() {
	return oe(this).formatHsl();
}
function w() {
	return this.rgb().formatRgb();
}
function T(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = p.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? E(t) : n === 3 ? new A(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? D(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? D(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = m.exec(e)) ? new A(t[1], t[2], t[3], 1) : (t = h.exec(e)) ? new A(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = g.exec(e)) ? D(t[1], t[2], t[3], t[4]) : (t = _.exec(e)) ? D(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = v.exec(e)) ? ae(t[1], t[2] / 100, t[3] / 100, 1) : (t = y.exec(e)) ? ae(t[1], t[2] / 100, t[3] / 100, t[4]) : b.hasOwnProperty(e) ? E(b[e]) : e === "transparent" ? new A(NaN, NaN, NaN, 0) : null;
}
function E(e) {
	return new A(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function D(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new A(e, t, n, r);
}
function O(e) {
	return e instanceof s || (e = T(e)), e ? (e = e.rgb(), new A(e.r, e.g, e.b, e.opacity)) : new A();
}
function k(e, t, n, r) {
	return arguments.length === 1 ? O(e) : new A(e, t, n, r ?? 1);
}
function A(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
a(A, k, o(s, {
	brighter(e) {
		return e = e == null ? l : l ** +e, new A(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? c : c ** +e, new A(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new A(j(this.r), j(this.g), j(this.b), re(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: ee,
	formatHex: ee,
	formatHex8: te,
	formatRgb: ne,
	toString: ne
}));
function ee() {
	return `#${ie(this.r)}${ie(this.g)}${ie(this.b)}`;
}
function te() {
	return `#${ie(this.r)}${ie(this.g)}${ie(this.b)}${ie((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ne() {
	let e = re(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${j(this.r)}, ${j(this.g)}, ${j(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function re(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function j(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ie(e) {
	return e = j(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ae(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new M(e, t, n, r);
}
function oe(e) {
	if (e instanceof M) return new M(e.h, e.s, e.l, e.opacity);
	if (e instanceof s || (e = T(e)), !e) return new M();
	if (e instanceof M) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, c = a - i, l = (a + i) / 2;
	return c ? (o = t === a ? (n - r) / c + (n < r) * 6 : n === a ? (r - t) / c + 2 : (t - n) / c + 4, c /= l < .5 ? a + i : 2 - a - i, o *= 60) : c = l > 0 && l < 1 ? 0 : o, new M(o, c, l, e.opacity);
}
function se(e, t, n, r) {
	return arguments.length === 1 ? oe(e) : new M(e, t, n, r ?? 1);
}
function M(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
a(M, se, o(s, {
	brighter(e) {
		return e = e == null ? l : l ** +e, new M(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? c : c ** +e, new M(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new A(ue(e >= 240 ? e - 240 : e + 120, i, r), ue(e, i, r), ue(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new M(ce(this.h), le(this.s), le(this.l), re(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = re(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${ce(this.h)}, ${le(this.s) * 100}%, ${le(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function ce(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function le(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function ue(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../node_modules/d3-color/src/math.js
var de = Math.PI / 180, fe = 180 / Math.PI, pe = -.14861, me = 1.78277, he = -.29227, ge = -.90649, _e = 1.97294, ve = _e * ge, ye = _e * me, be = me * he - ge * pe;
function xe(e) {
	if (e instanceof Se) return new Se(e.h, e.s, e.l, e.opacity);
	e instanceof A || (e = O(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (be * r + ve * t - ye * n) / (be + ve - ye), a = r - i, o = (_e * (n - i) - he * a) / ge, s = Math.sqrt(o * o + a * a) / (_e * i * (1 - i)), c = s ? Math.atan2(o, a) * fe - 120 : NaN;
	return new Se(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function N(e, t, n, r) {
	return arguments.length === 1 ? xe(e) : new Se(e, t, n, r ?? 1);
}
function Se(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
a(Se, N, o(s, {
	brighter(e) {
		return e = e == null ? l : l ** +e, new Se(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? c : c ** +e, new Se(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * de, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new A(255 * (t + n * (pe * r + me * i)), 255 * (t + n * (he * r + ge * i)), 255 * (t + _e * r * n), this.opacity);
	}
}));
//#endregion
//#region ../node_modules/d3-format/src/formatDecimal.js
function Ce(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function we(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../node_modules/d3-format/src/exponent.js
function Te(e) {
	return e = we(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../node_modules/d3-format/src/formatGroup.js
function Ee(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../node_modules/d3-format/src/formatNumerals.js
function De(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../node_modules/d3-format/src/formatSpecifier.js
var Oe = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ke(e) {
	if (!(t = Oe.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new Ae({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
ke.prototype = Ae.prototype;
function Ae(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ae.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region ../node_modules/d3-format/src/formatTrim.js
function je(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region ../node_modules/d3-format/src/formatPrefixAuto.js
var Me;
function Ne(e, t) {
	var n = we(e, t);
	if (!n) return Me = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (Me = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + we(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../node_modules/d3-format/src/formatRounded.js
function Pe(e, t) {
	var n = we(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../node_modules/d3-format/src/formatTypes.js
var Fe = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: Ce,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => Pe(e * 100, t),
	r: Pe,
	s: Ne,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../node_modules/d3-format/src/identity.js
function Ie(e) {
	return e;
}
//#endregion
//#region ../node_modules/d3-format/src/locale.js
var Le = Array.prototype.map, Re = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function ze(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Ie : Ee(Le.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ie : De(Le.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = ke(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Fe[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = Fe[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = je(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && Me !== void 0 ? Re[8 + Me / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var T = n.length + e.length + r.length, E = T < h ? Array(h - T + 1).join(u) : "";
			switch (g && m && (e = t(E + e, E.length ? h - r.length : Infinity), E = ""), d) {
				case "<":
					e = n + e + r + E;
					break;
				case "=":
					e = n + E + e + r;
					break;
				case "^":
					e = E.slice(0, T = E.length >> 1) + n + e + r + E.slice(T);
					break;
				default: e = E + n + e + r;
			}
			return a(e);
		}
		return w.toString = function() {
			return e + "";
		}, w;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(Te(t) / 3))) * 3, r = 10 ** -n, i = l((e = ke(e), e.type = "f", e), { suffix: Re[8 + n / 3] });
		return function(e) {
			return i(r * e);
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
//#endregion
//#region ../node_modules/d3-format/src/defaultLocale.js
var Be, Ve, He;
Ue({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Ue(e) {
	return Be = ze(e), Ve = Be.format, He = Be.formatPrefix, Be;
}
//#endregion
//#region ../node_modules/d3-format/src/precisionFixed.js
function We(e) {
	return Math.max(0, -Te(Math.abs(e)));
}
//#endregion
//#region ../node_modules/d3-format/src/precisionPrefix.js
function Ge(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Te(t) / 3))) * 3 - Te(Math.abs(e)));
}
//#endregion
//#region ../node_modules/d3-format/src/precisionRound.js
function Ke(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Te(t) - Te(e)) + 1;
}
//#endregion
//#region ../node_modules/d3-array/src/ticks.js
var qe = Math.sqrt(50), Je = Math.sqrt(10), Ye = Math.sqrt(2);
function Xe(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= qe ? 10 : a >= Je ? 5 : a >= Ye ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? Xe(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function Ze(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? Xe(t, e, n) : Xe(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) {
		if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
		else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	} else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function Qe(e, t, n) {
	return t = +t, e = +e, n = +n, Xe(e, t, n)[2];
}
function $e(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? Qe(t, e, n) : Qe(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../node_modules/d3-scale/src/init.js
function et(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default: this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
	}
	return this;
}
//#endregion
//#region ../node_modules/d3-interpolate/src/basis.js
function tt(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function nt(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return tt((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/constant.js
var rt = (e) => () => e;
//#endregion
//#region ../node_modules/d3-interpolate/src/color.js
function it(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function at(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function ot(e, t) {
	var n = t - e;
	return n ? it(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : rt(isNaN(e) ? t : e);
}
function st(e) {
	return (e = +e) == 1 ? ct : function(t, n) {
		return n - t ? at(t, n, e) : rt(isNaN(t) ? n : t);
	};
}
function ct(e, t) {
	var n = t - e;
	return n ? it(e, n) : rt(isNaN(e) ? t : e);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/rgb.js
var lt = (function e(t) {
	var n = st(t);
	function r(e, t) {
		var r = n((e = k(e)).r, (t = k(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = ct(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function ut(e) {
	return function(t) {
		for (var n = t.length, r = Array(n), i = Array(n), a = Array(n), o = 0, s; o < n; ++o) s = k(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var dt = ut(nt);
//#endregion
//#region ../node_modules/d3-interpolate/src/numberArray.js
function ft(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function pt(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/array.js
function mt(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = Ct(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/date.js
function ht(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/number.js
function gt(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/object.js
function _t(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Ct(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/string.js
var vt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yt = new RegExp(vt.source, "g");
function bt(e) {
	return function() {
		return e;
	};
}
function xt(e) {
	return function(t) {
		return e(t) + "";
	};
}
function St(e, t) {
	var n = vt.lastIndex = yt.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = vt.exec(e)) && (i = yt.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: gt(r, i)
	})), n = yt.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? xt(c[0].x) : bt(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../node_modules/d3-interpolate/src/value.js
function Ct(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? rt(t) : (n === "number" ? gt : n === "string" ? (r = T(t)) ? (t = r, lt) : St : t instanceof T ? lt : t instanceof Date ? ht : pt(t) ? ft : Array.isArray(t) ? mt : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _t : gt)(e, t);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/round.js
function wt(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/cubehelix.js
function Tt(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = N(t)).h, (r = N(r)).h), a = ct(t.s, r.s), o = ct(t.l, r.l), s = ct(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
Tt(ot);
var Et = Tt(ct);
//#endregion
//#region ../node_modules/d3-interpolate/src/piecewise.js
function Dt(e, t) {
	t === void 0 && (t = e, e = Ct);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../node_modules/d3-scale/src/continuous.js
function Ot(e) {
	return e;
}
//#endregion
//#region ../node_modules/d3-scale/src/tickFormat.js
function kt(e, t, n, r) {
	var i = $e(e, t, n), a;
	switch (r = ke(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Ge(i, o)) && (r.precision = a), He(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Ke(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = We(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return Ve(r);
}
//#endregion
//#region ../node_modules/d3-scale/src/linear.js
function At(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return Ze(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return kt(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Qe(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
//#endregion
//#region ../node_modules/d3-scale/src/sequential.js
function jt() {
	var e = 0, t = 1, n, r, i, a, o = Ot, s = !1, c;
	function l(e) {
		return e == null || isNaN(e = +e) ? c : o(i === 0 ? .5 : (e = (a(e) - n) * i, s ? Math.max(0, Math.min(1, e)) : e));
	}
	l.domain = function(o) {
		return arguments.length ? ([e, t] = o, n = a(e = +e), r = a(t = +t), i = n === r ? 0 : 1 / (r - n), l) : [e, t];
	}, l.clamp = function(e) {
		return arguments.length ? (s = !!e, l) : s;
	}, l.interpolator = function(e) {
		return arguments.length ? (o = e, l) : o;
	};
	function u(e) {
		return function(t) {
			var n, r;
			return arguments.length ? ([n, r] = t, o = e(n, r), l) : [o(0), o(1)];
		};
	}
	return l.range = u(Ct), l.rangeRound = u(wt), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Mt(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Nt() {
	var e = At(jt()(Ot));
	return e.copy = function() {
		return Mt(e, Nt());
	}, et.apply(e, arguments);
}
//#endregion
//#region ../node_modules/d3-scale/src/diverging.js
function Pt() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = Ot, u, d = !1, f;
	function p(e) {
		return isNaN(e = +e) ? f : (e = .5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c), l(d ? Math.max(0, Math.min(1, e)) : e));
	}
	p.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = u(e = +e), a = u(t = +t), o = u(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p) : [
			e,
			t,
			n
		];
	}, p.clamp = function(e) {
		return arguments.length ? (d = !!e, p) : d;
	}, p.interpolator = function(e) {
		return arguments.length ? (l = e, p) : l;
	};
	function m(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, l = Dt(e, [
				n,
				r,
				i
			]), p) : [
				l(0),
				l(.5),
				l(1)
			];
		};
	}
	return p.range = m(Ct), p.rangeRound = m(wt), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Ft() {
	var e = At(Pt()(Ot));
	return e.copy = function() {
		return Mt(e, Ft());
	}, et.apply(e, arguments);
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/colors.js
function P(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/categorical/category10.js
var It = P("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Lt = P("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Rt = P("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), zt = P("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Bt = P("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Vt = P("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Ht = P("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Ut = P("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Wt = P("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Gt = P("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), Kt = P("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), F = (e) => dt(e[e.length - 1]), qt = [
	,
	,
	,
	"d8b365f5f5f55ab4ac",
	"a6611adfc27d80cdc1018571",
	"a6611adfc27df5f5f580cdc1018571",
	"8c510ad8b365f6e8c3c7eae55ab4ac01665e",
	"8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
	"8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
	"8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
	"5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
	"5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
].map(P), Jt = F(qt), Yt = [
	,
	,
	,
	"af8dc3f7f7f77fbf7b",
	"7b3294c2a5cfa6dba0008837",
	"7b3294c2a5cff7f7f7a6dba0008837",
	"762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
	"762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
	"762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
	"762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
	"40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
	"40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
].map(P), Xt = F(Yt), Zt = [
	,
	,
	,
	"e9a3c9f7f7f7a1d76a",
	"d01c8bf1b6dab8e1864dac26",
	"d01c8bf1b6daf7f7f7b8e1864dac26",
	"c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
	"c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
	"c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
	"c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
	"8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
	"8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
].map(P), Qt = F(Zt), $t = [
	,
	,
	,
	"998ec3f7f7f7f1a340",
	"5e3c99b2abd2fdb863e66101",
	"5e3c99b2abd2f7f7f7fdb863e66101",
	"542788998ec3d8daebfee0b6f1a340b35806",
	"542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
	"5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
	"5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
	"2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
	"2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
].map(P), en = F($t), tn = [
	,
	,
	,
	"ef8a62f7f7f767a9cf",
	"ca0020f4a58292c5de0571b0",
	"ca0020f4a582f7f7f792c5de0571b0",
	"b2182bef8a62fddbc7d1e5f067a9cf2166ac",
	"b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
	"b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
	"b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
	"67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
	"67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
].map(P), nn = F(tn), rn = [
	,
	,
	,
	"ef8a62ffffff999999",
	"ca0020f4a582bababa404040",
	"ca0020f4a582ffffffbababa404040",
	"b2182bef8a62fddbc7e0e0e09999994d4d4d",
	"b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
	"b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
	"b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
	"67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
	"67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
].map(P), an = F(rn), on = [
	,
	,
	,
	"fc8d59ffffbf91bfdb",
	"d7191cfdae61abd9e92c7bb6",
	"d7191cfdae61ffffbfabd9e92c7bb6",
	"d73027fc8d59fee090e0f3f891bfdb4575b4",
	"d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
	"d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
	"d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
	"a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
	"a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
].map(P), sn = F(on), cn = [
	,
	,
	,
	"fc8d59ffffbf91cf60",
	"d7191cfdae61a6d96a1a9641",
	"d7191cfdae61ffffbfa6d96a1a9641",
	"d73027fc8d59fee08bd9ef8b91cf601a9850",
	"d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
	"d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
	"d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
	"a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
	"a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
].map(P), ln = F(cn), un = [
	,
	,
	,
	"fc8d59ffffbf99d594",
	"d7191cfdae61abdda42b83ba",
	"d7191cfdae61ffffbfabdda42b83ba",
	"d53e4ffc8d59fee08be6f59899d5943288bd",
	"d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
	"d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
	"d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
	"9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
	"9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
].map(P), dn = F(un), fn = [
	,
	,
	,
	"e5f5f999d8c92ca25f",
	"edf8fbb2e2e266c2a4238b45",
	"edf8fbb2e2e266c2a42ca25f006d2c",
	"edf8fbccece699d8c966c2a42ca25f006d2c",
	"edf8fbccece699d8c966c2a441ae76238b45005824",
	"f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
	"f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
].map(P), pn = F(fn), mn = [
	,
	,
	,
	"e0ecf49ebcda8856a7",
	"edf8fbb3cde38c96c688419d",
	"edf8fbb3cde38c96c68856a7810f7c",
	"edf8fbbfd3e69ebcda8c96c68856a7810f7c",
	"edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
	"f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
	"f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
].map(P), hn = F(mn), gn = [
	,
	,
	,
	"e0f3dba8ddb543a2ca",
	"f0f9e8bae4bc7bccc42b8cbe",
	"f0f9e8bae4bc7bccc443a2ca0868ac",
	"f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
	"f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
	"f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
	"f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
].map(P), _n = F(gn), vn = [
	,
	,
	,
	"fee8c8fdbb84e34a33",
	"fef0d9fdcc8afc8d59d7301f",
	"fef0d9fdcc8afc8d59e34a33b30000",
	"fef0d9fdd49efdbb84fc8d59e34a33b30000",
	"fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
	"fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
	"fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
].map(P), yn = F(vn), bn = [
	,
	,
	,
	"ece2f0a6bddb1c9099",
	"f6eff7bdc9e167a9cf02818a",
	"f6eff7bdc9e167a9cf1c9099016c59",
	"f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
	"f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
	"fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
	"fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
].map(P), xn = F(bn), Sn = [
	,
	,
	,
	"ece7f2a6bddb2b8cbe",
	"f1eef6bdc9e174a9cf0570b0",
	"f1eef6bdc9e174a9cf2b8cbe045a8d",
	"f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
	"f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
	"fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
	"fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
].map(P), Cn = F(Sn), wn = [
	,
	,
	,
	"e7e1efc994c7dd1c77",
	"f1eef6d7b5d8df65b0ce1256",
	"f1eef6d7b5d8df65b0dd1c77980043",
	"f1eef6d4b9dac994c7df65b0dd1c77980043",
	"f1eef6d4b9dac994c7df65b0e7298ace125691003f",
	"f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
	"f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
].map(P), Tn = F(wn), En = [
	,
	,
	,
	"fde0ddfa9fb5c51b8a",
	"feebe2fbb4b9f768a1ae017e",
	"feebe2fbb4b9f768a1c51b8a7a0177",
	"feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
	"feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
	"fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
	"fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
].map(P), Dn = F(En), On = [
	,
	,
	,
	"edf8b17fcdbb2c7fb8",
	"ffffcca1dab441b6c4225ea8",
	"ffffcca1dab441b6c42c7fb8253494",
	"ffffccc7e9b47fcdbb41b6c42c7fb8253494",
	"ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
	"ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
	"ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
].map(P), kn = F(On), An = [
	,
	,
	,
	"f7fcb9addd8e31a354",
	"ffffccc2e69978c679238443",
	"ffffccc2e69978c67931a354006837",
	"ffffccd9f0a3addd8e78c67931a354006837",
	"ffffccd9f0a3addd8e78c67941ab5d238443005a32",
	"ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
	"ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
].map(P), jn = F(An), Mn = [
	,
	,
	,
	"fff7bcfec44fd95f0e",
	"ffffd4fed98efe9929cc4c02",
	"ffffd4fed98efe9929d95f0e993404",
	"ffffd4fee391fec44ffe9929d95f0e993404",
	"ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
	"ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
	"ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
].map(P), Nn = F(Mn), Pn = [
	,
	,
	,
	"ffeda0feb24cf03b20",
	"ffffb2fecc5cfd8d3ce31a1c",
	"ffffb2fecc5cfd8d3cf03b20bd0026",
	"ffffb2fed976feb24cfd8d3cf03b20bd0026",
	"ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
	"ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
	"ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
].map(P), Fn = F(Pn), In = [
	,
	,
	,
	"deebf79ecae13182bd",
	"eff3ffbdd7e76baed62171b5",
	"eff3ffbdd7e76baed63182bd08519c",
	"eff3ffc6dbef9ecae16baed63182bd08519c",
	"eff3ffc6dbef9ecae16baed64292c62171b5084594",
	"f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
	"f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
].map(P), Ln = F(In), Rn = [
	,
	,
	,
	"e5f5e0a1d99b31a354",
	"edf8e9bae4b374c476238b45",
	"edf8e9bae4b374c47631a354006d2c",
	"edf8e9c7e9c0a1d99b74c47631a354006d2c",
	"edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
	"f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
	"f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
].map(P), zn = F(Rn), Bn = [
	,
	,
	,
	"f0f0f0bdbdbd636363",
	"f7f7f7cccccc969696525252",
	"f7f7f7cccccc969696636363252525",
	"f7f7f7d9d9d9bdbdbd969696636363252525",
	"f7f7f7d9d9d9bdbdbd969696737373525252252525",
	"fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
	"fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
].map(P), Vn = F(Bn), Hn = [
	,
	,
	,
	"efedf5bcbddc756bb1",
	"f2f0f7cbc9e29e9ac86a51a3",
	"f2f0f7cbc9e29e9ac8756bb154278f",
	"f2f0f7dadaebbcbddc9e9ac8756bb154278f",
	"f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
	"fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
	"fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
].map(P), Un = F(Hn), Wn = [
	,
	,
	,
	"fee0d2fc9272de2d26",
	"fee5d9fcae91fb6a4acb181d",
	"fee5d9fcae91fb6a4ade2d26a50f15",
	"fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
	"fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
	"fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
	"fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
].map(P), Gn = F(Wn), Kn = [
	,
	,
	,
	"fee6cefdae6be6550d",
	"feeddefdbe85fd8d3cd94701",
	"feeddefdbe85fd8d3ce6550da63603",
	"feeddefdd0a2fdae6bfd8d3ce6550da63603",
	"feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
	"fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
	"fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
].map(P), qn = F(Kn);
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function Jn(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var Yn = Et(N(300, .5, 0), N(-240, .5, 1)), Xn = Et(N(-100, .75, .35), N(80, 1.5, .8)), Zn = Et(N(260, .75, .35), N(80, 1.5, .8)), Qn = N();
function $n(e) {
	(e < 0 || e > 1) && (e -= Math.floor(e));
	var t = Math.abs(e - .5);
	return Qn.h = 360 * e - 100, Qn.s = 1.5 - 1.5 * t, Qn.l = .8 - .9 * t, Qn + "";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var er = k(), tr = Math.PI / 3, nr = Math.PI * 2 / 3;
function rr(e) {
	var t;
	return e = (.5 - e) * Math.PI, er.r = 255 * (t = Math.sin(e)) * t, er.g = 255 * (t = Math.sin(e + tr)) * t, er.b = 255 * (t = Math.sin(e + nr)) * t, er + "";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function ir(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ar(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
var or = ar(P("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), sr = ar(P("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), cr = ar(P("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), lr = ar(P("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), ur = /* @__PURE__ */ n({
	interpolateBlues: () => Ln,
	interpolateBrBG: () => Jt,
	interpolateBuGn: () => pn,
	interpolateBuPu: () => hn,
	interpolateCividis: () => Jn,
	interpolateCool: () => Zn,
	interpolateCubehelixDefault: () => Yn,
	interpolateGnBu: () => _n,
	interpolateGreens: () => zn,
	interpolateGreys: () => Vn,
	interpolateInferno: () => cr,
	interpolateMagma: () => sr,
	interpolateOrRd: () => yn,
	interpolateOranges: () => qn,
	interpolatePRGn: () => Xt,
	interpolatePiYG: () => Qt,
	interpolatePlasma: () => lr,
	interpolatePuBu: () => Cn,
	interpolatePuBuGn: () => xn,
	interpolatePuOr: () => en,
	interpolatePuRd: () => Tn,
	interpolatePurples: () => Un,
	interpolateRainbow: () => $n,
	interpolateRdBu: () => nn,
	interpolateRdGy: () => an,
	interpolateRdPu: () => Dn,
	interpolateRdYlBu: () => sn,
	interpolateRdYlGn: () => ln,
	interpolateReds: () => Gn,
	interpolateSinebow: () => rr,
	interpolateSpectral: () => dn,
	interpolateTurbo: () => ir,
	interpolateViridis: () => or,
	interpolateWarm: () => Xn,
	interpolateYlGn: () => jn,
	interpolateYlGnBu: () => kn,
	interpolateYlOrBr: () => Nn,
	interpolateYlOrRd: () => Fn,
	schemeAccent: () => Lt,
	schemeBlues: () => In,
	schemeBrBG: () => qt,
	schemeBuGn: () => fn,
	schemeBuPu: () => mn,
	schemeCategory10: () => It,
	schemeDark2: () => Rt,
	schemeGnBu: () => gn,
	schemeGreens: () => Rn,
	schemeGreys: () => Bn,
	schemeObservable10: () => zt,
	schemeOrRd: () => vn,
	schemeOranges: () => Kn,
	schemePRGn: () => Yt,
	schemePaired: () => Bt,
	schemePastel1: () => Vt,
	schemePastel2: () => Ht,
	schemePiYG: () => Zt,
	schemePuBu: () => Sn,
	schemePuBuGn: () => bn,
	schemePuOr: () => $t,
	schemePuRd: () => wn,
	schemePurples: () => Hn,
	schemeRdBu: () => tn,
	schemeRdGy: () => rn,
	schemeRdPu: () => En,
	schemeRdYlBu: () => on,
	schemeRdYlGn: () => cn,
	schemeReds: () => Wn,
	schemeSet1: () => Ut,
	schemeSet2: () => Wt,
	schemeSet3: () => Gt,
	schemeSpectral: () => un,
	schemeTableau10: () => Kt,
	schemeYlGn: () => An,
	schemeYlGnBu: () => On,
	schemeYlOrBr: () => Mn,
	schemeYlOrRd: () => Pn
}), dr = 256, fr = /* @__PURE__ */ new Set([
	i.CAT_ACCENT,
	i.CAT_DARK2,
	i.CAT_CATEGORY10,
	i.CAT_OBSERVABLE10,
	i.CAT_PAIRED,
	i.CAT_PASTEL1,
	i.CAT_PASTEL2,
	i.CAT_SET1,
	i.CAT_SET2,
	i.CAT_SET3,
	i.CAT_TABLEAU10
]), pr = /* @__PURE__ */ new Set([
	i.DIV_BR_BG,
	i.DIV_PR_GN,
	i.DIV_PI_YG,
	i.DIV_PU_OR,
	i.DIV_RED_BLUE,
	i.DIV_RED_GREY,
	i.DIV_RED_YELLOW_BLUE,
	i.DIV_RED_YELLOW_GREEN,
	i.DIV_SPECTRAL
]), mr = class e {
	static getColor(t, n, r) {
		let { r: i, g: a, b: o } = k(e.buildInterpolator(n, r)(t));
		return {
			r: i,
			g: a,
			b: o,
			alpha: 1
		};
	}
	static getColorMap(t, n = 256, r) {
		if (n <= 0) return [];
		if (n === 1) {
			let { r: n, g: i, b: a } = k(e.buildInterpolator(t, r)(.5));
			return [
				n,
				i,
				a,
				1
			];
		}
		let i = e.buildInterpolator(t, r), a = [];
		for (let e = 0; e < n; e++) {
			let { r: t, g: r, b: o } = k(i(e / (n - 1)));
			a.push(t, r, o, 1);
		}
		return a;
	}
	static getColorArray(t, n = 256, r) {
		if (n <= 0) return [];
		if (n === 1) {
			let { r: n, g: i, b: a } = k(e.buildInterpolator(t, r)(.5));
			return [{
				r: n,
				g: i,
				b: a,
				alpha: 1
			}];
		}
		let i = e.buildInterpolator(t, r), a = [];
		for (let e = 0; e < n; e++) {
			let { r: t, g: r, b: o } = k(i(e / (n - 1)));
			a.push({
				r: t,
				g: r,
				b: o,
				alpha: 1
			});
		}
		return a;
	}
	static rgbToHex(e) {
		return k(e.r, e.g, e.b, 1).formatHex();
	}
	static hexToRgb(e) {
		let t = k(e);
		return {
			r: t.r,
			g: t.g,
			b: t.b,
			alpha: 1
		};
	}
	static computeMinMaxRange(e) {
		if (e.length === 0) return [0, 0];
		let t = Infinity, n = -Infinity;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			i < t && (t = i), i > n && (n = i);
		}
		return [t, n];
	}
	static isCategorical(e) {
		return fr.has(e);
	}
	static isDiverging(e) {
		return pr.has(e);
	}
	static getCategoricalSchemeSize(t) {
		return e.isCategorical(t) ? ur[t].length : null;
	}
	static resolveNumericDomainFromConfig(t, n, i) {
		let a = n.domainSpec.type;
		if (a === r.USER) {
			let t = n.domainSpec.params;
			if (!t.length || t.some((e) => typeof e != "number" || !Number.isFinite(e))) throw Error("ColorMap USER domain for numeric interpolators must be number[].");
			let r = t;
			if (e.isDiverging(i)) {
				if (r.length === 3) return [
					r[0],
					r[1],
					r[2]
				];
				if (r.length === 2) {
					let e = (r[0] + r[1]) / 2;
					return [
						r[0],
						e,
						r[1]
					];
				}
				throw Error("Diverging USER domain must have 2 or 3 numeric values.");
			}
			if (r.length < 2) throw Error("Sequential USER domain must have at least 2 numeric values.");
			return [r[0], r[r.length - 1]];
		}
		let o = (ArrayBuffer.isView(t) ? Array.from(t) : t).filter((e) => Number.isFinite(e));
		if (o.length === 0) return e.isDiverging(i) ? [
			0,
			0,
			0
		] : [0, 0];
		if (a === r.PERCENTILE) {
			let [t, r] = n.domainSpec.params ?? [2, 98], a = e.computePercentile(o, t / 100), s = e.computePercentile(o, r / 100);
			return e.isDiverging(i) ? [
				a,
				e.computePercentile(o, 50 / 100),
				s
			] : [a, s];
		}
		let [s, c] = e.computeMinMaxRange(o);
		return e.isDiverging(i) ? [
			s,
			(s + c) / 2,
			c
		] : [s, c];
	}
	static resolveCategoricalDomainFromConfig(e, t) {
		return t.domainSpec.type === r.USER ? t.domainSpec.params.map((e) => String(e)) : Array.from(new Set(e.map((e) => String(e))));
	}
	static computeLabels(e) {
		if (typeof e[0] == "string") return e;
		let t = e, n = t.reduce((e, t) => Math.max(e, Math.abs(t)), 0), r = Ve(n >= 1e6 ? ".3s" : n >= 1 ? ",.2f" : ".3~g");
		return t.map((e) => r(e));
	}
	static resolveDomainFromData(t, n) {
		return e.isCategorical(n.interpolator) || n.domainSpec.type === r.USER && n.domainSpec.params.some((e) => typeof e == "string") || !ArrayBuffer.isView(t) && t.some((e) => typeof e == "string" && isNaN(Number(e))) ? e.resolveCategoricalDomainFromConfig(t, n) : e.resolveNumericDomainFromConfig(t, n, n.interpolator);
	}
	static buildInterpolator(t, n) {
		if (e.isCategorical(t)) {
			let e = ur[t], r = n?.length ?? e.length;
			return (t) => {
				let n = Math.min(Math.round(t * (r - 1)), e.length - 1);
				return e[n];
			};
		}
		return e.isDiverging(t) ? Ft(ur[t]).domain(n ?? [
			0,
			.5,
			1
		]) : Nt(ur[t]).domain(n ?? [0, 1]);
	}
	static computePercentile(e, t) {
		if (e.length === 0) return 0;
		let n = (ArrayBuffer.isView(e) ? new Float32Array(e) : [...e]).sort((e, t) => e - t), r = t * (n.length - 1), i = Math.floor(r), a = Math.ceil(r);
		return n[i] + (n[a] - n[i]) * (r - i);
	}
}, hr = {
	mode: "far-zero",
	opacityMin: 0,
	opacityMax: 1,
	gamma: 1,
	zeroCenter: 0
};
function gr(e, t) {
	let n = {
		...hr,
		...t
	};
	if (e.length === 0) return {
		min: 0,
		max: 0,
		range: 0,
		maxAbsDistance: 0,
		validCount: 0,
		config: n
	};
	let r = e.reduce((e, t) => Math.min(e, t), Infinity), i = e.reduce((e, t) => Math.max(e, t), -Infinity);
	return {
		min: r,
		max: i,
		range: i - r,
		maxAbsDistance: e.reduce((e, t) => Math.max(e, Math.abs(t - n.zeroCenter)), 0),
		validCount: e.length,
		config: n
	};
}
function _r(e, t) {
	if (isNaN(e)) return 0;
	let { config: n, range: r, min: i, maxAbsDistance: a } = t, o;
	o = n.mode === "linear" ? r > 0 ? (e - i) / r : 0 : n.mode === "far-zero" ? a > 0 ? Math.abs(e - n.zeroCenter) / a : 0 : a > 0 ? 1 - Math.abs(e - n.zeroCenter) / a : 1;
	let s = Math.max(0, Math.min(1, o)) ** +Math.max(1e-4, n.gamma), c = n.opacityMin + (n.opacityMax - n.opacityMin) * s;
	return Math.max(0, Math.min(255, Math.round(c * 255)));
}
//#endregion
//#region src/triangulator-points.ts
var vr = class e {
	static buildInstances(t, n) {
		let r = [], i = [], a = t.features;
		for (let t = 0; t < a.length; t++) {
			let o = a[t];
			if (!o.geometry) {
				e.warnSkippedFeature(t, null);
				continue;
			}
			let s = r.length / 2;
			if (o.geometry.type === "Point") e.pushPointInstance(r, o.geometry.coordinates, n);
			else if (o.geometry.type === "MultiPoint") for (let t of o.geometry.coordinates) e.pushPointInstance(r, t, n);
			else if (o.geometry.type === "GeometryCollection") e.pushGeometryCollectionInstances(r, o, n, t);
			else {
				e.warnSkippedFeature(t, o.geometry.type);
				continue;
			}
			let c = r.length / 2 - s;
			c !== 0 && i.push({
				nPoints: c,
				nTriangles: c * 2,
				featureIndex: t,
				featureId: o.id
			});
		}
		return {
			instances: new Float32Array(r),
			components: i
		};
	}
	static pushGeometryCollectionInstances(t, n, r, i) {
		let { geometries: a } = n.geometry;
		for (let n of a) if (n.type === "Point") e.pushPointInstance(t, n.coordinates, r);
		else if (n.type === "MultiPoint") for (let i of n.coordinates) e.pushPointInstance(t, i, r);
		else e.warnSkippedGeometryCollectionChild(i, n.type);
	}
	static pushPointInstance(e, t, n) {
		t.length < 2 || e.push(t[0] - n[0], t[1] - n[1]);
	}
	static warnSkippedFeature(e, t) {
		console.warn(`[autk-core] TriangulatorPoints skipped feature ${e}: expected Point or MultiPoint geometry, got ${t ?? "null"}.`);
	}
	static warnSkippedGeometryCollectionChild(e, t) {
		console.warn(`[autk-core] TriangulatorPoints skipped GeometryCollection child in feature ${e}: expected Point or MultiPoint geometry, got ${t}.`);
	}
}, yr = class e {
	static build(t, n) {
		let r = [], i = [], a = [];
		for (let o = 0; o < t.features.length; o++) {
			let s = t.features[o], c = [];
			e.collectPaths(s.geometry, c);
			let l = 0, u = 0;
			for (let e of c) {
				let t = [], i = !1;
				for (let r of e) {
					let e = Math.fround(r[0] - n[0]), a = Math.fround(r[1] - n[1]);
					if (!Number.isFinite(e) || !Number.isFinite(a)) {
						i = !0;
						break;
					}
					let o = t[t.length - 1];
					(!o || o[0] !== e || o[1] !== a) && t.push([e, a]);
				}
				if (i || t.length < 2) continue;
				let s = t.length > 2 && t[0][0] === t[t.length - 1][0] && t[0][1] === t[t.length - 1][1];
				s && t.pop();
				let c = t.length, d = [], f = [];
				for (let e = 0; e < c; e++) {
					let n = t[e], r = t[e === 0 ? s ? c - 1 : 0 : e - 1], i = t[e === c - 1 ? s ? 0 : e : e + 1];
					a.push(r[0], r[1], i[0], i[1]);
					for (let e = 0; e < 5; e++) d.push(n[0], n[1]);
					let o = e * 5;
					if ((s || e > 0 && e < c - 1) && f.push(o, o + 2, o + 4, o + 1, o + 4, o + 3), s || e < c - 1) {
						let t = (e + 1) % c * 5;
						f.push(o + 2, o + 3, t, o + 3, t + 1, t);
					}
				}
				r.push({
					position: new Float32Array(d),
					indices: new Uint32Array(f),
					featureIndex: o
				}), l += d.length / 2, u += f.length / 3;
			}
			u > 0 && i.push({
				nPoints: l,
				nTriangles: u,
				featureIndex: o,
				featureId: s.id
			});
		}
		return {
			geometry: r,
			components: i,
			attributes: new Float32Array(a)
		};
	}
	static collectPaths(t, n) {
		if (t) switch (t.type) {
			case "LineString":
				n.push(t.coordinates);
				break;
			case "MultiLineString":
				n.push(...t.coordinates);
				break;
			case "GeometryCollection":
				for (let r of t.geometries) e.collectPaths(r, n);
				break;
			default: console.warn(`[autk-core] PolylineBuilder skipped ${t.type}: expected line geometry.`);
		}
	}
};
//#endregion
//#region src/utils-geometry.ts
function br(e, t) {
	let n = e.filter((t, n) => {
		if (n === 0) return !0;
		let r = e[n - 1];
		return t[0] !== r[0] || t[1] !== r[1];
	});
	if (n.length < 2 || t === 0) return [];
	let r = [], i = [];
	for (let e = 0; e < n.length; e++) {
		let a = e > 0 ? n[e - 1] : null, o = n[e], s = e < n.length - 1 ? n[e + 1] : null, c = a ? Cr(a, o) : null, l = s ? Cr(o, s) : null, u = wr(a, o, s, c, l, t, 1), d = wr(a, o, s, c, l, t, -1);
		r.push(u), i.push(d);
	}
	let a = [...r, ...i.reverse()];
	return a.length > 0 && a.push([a[0][0], a[0][1]]), a;
}
function I(e) {
	if (e.length < 2) return [...e];
	let t = [...e], n = t[0], r = t[t.length - 1];
	return n[0] === r[0] && n[1] === r[1] && t.pop(), t;
}
function L(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let [r, i] = e[n], [a, o] = e[(n + 1) % e.length];
		t += r * o - a * i;
	}
	return t * .5;
}
function xr(e) {
	let t = 0, n = e.length;
	for (let r = 0, i = n - 1; r < n; i = r++) {
		let n = e[r][0] - e[i][0], a = e[r][1] - e[i][1];
		t += Math.sqrt(n * n + a * a);
	}
	return t;
}
function Sr(e) {
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
function Cr(e, t) {
	let n = t[0] - e[0], r = t[1] - e[1], i = Math.hypot(n, r);
	return i === 0 ? null : [-r / i, n / i];
}
function wr(e, t, n, r, i, a, o) {
	if (!r && !i) return t;
	if (!e || !r) return [t[0] + i[0] * a * o, t[1] + i[1] * a * o];
	if (!n || !i) return [t[0] + r[0] * a * o, t[1] + r[1] * a * o];
	let s = Tr([e[0] + r[0] * a * o, e[1] + r[1] * a * o], [t[0] + r[0] * a * o, t[1] + r[1] * a * o], [t[0] + i[0] * a * o, t[1] + i[1] * a * o], [n[0] + i[0] * a * o, n[1] + i[1] * a * o]);
	if (s) return s;
	let c = r[0] + i[0], l = r[1] + i[1], u = Math.hypot(c, l);
	return u === 0 ? [t[0] + i[0] * a * o, t[1] + i[1] * a * o] : [t[0] + c / u * a * o, t[1] + l / u * a * o];
}
function Tr(e, t, n, r) {
	let i = e[0], a = e[1], o = t[0], s = t[1], c = n[0], l = n[1], u = r[0], d = r[1], f = (i - o) * (l - d) - (a - s) * (c - u);
	if (Math.abs(f) < 1e-9) return null;
	let p = i * s - a * o, m = c * d - l * u;
	return [(p * (c - u) - (i - o) * m) / f, (p * (l - d) - (a - s) * m) / f];
}
//#endregion
//#region ../node_modules/earcut/src/earcut.js
var Er = /* @__PURE__ */ new Set(), Dr = !1;
function R(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length;
	Er.size && Er.clear();
	let a = Or(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s = 0, c = 0, l = 0;
	if (r && (a = Ir(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return Ar(a, o, s, c, l), o;
}
function Or(e, t, n, r, i) {
	let a = null;
	if (i === _i(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = mi(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = mi(i / r | 0, e[i], e[i + 1], a);
	return a && si(a, a.next) && (hi(a), a = a.next), a;
}
function kr(e, t = e) {
	let n = t === e, r = e, i;
	do
		i = !1, r !== r.next && (Er.size === 0 || !Er.has(r)) && (si(r, r.next) || V(r.prev, r, r.next) === 0) ? ((n || r === t) && (t = r.prev), Dr = !0, hi(r), r = r.prev, i = !0) : (n || r !== t) && (r = r.next, i = !n);
	while (i || r !== t);
	return t;
}
function Ar(e, t, n, r, i) {
	i && ei(e, n, r, i);
	let a = e, o = !1;
	for (; e.prev !== e.next;) {
		let s = e.prev, c = e.next;
		if (V(s, e, c) < 0 && (i ? Mr(e, n, r, i) : jr(e))) t.push(s.i, e.i, c.i), hi(e), e = c, a = c;
		else if (e = c, e === a) {
			if (Dr = !1, e = kr(e), Dr) {
				a = e;
				continue;
			}
			if (!o) {
				e = Nr(e, t), a = e, o = !0;
				continue;
			}
			Pr(e, t, n, r, i);
			break;
		}
	}
}
function jr(e) {
	let t = e.prev, n = e, r = e.next, i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && (i !== m.x || s !== m.y) && ai(i, s, a, c, o, l, m.x, m.y) && V(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function Mr(e, t, n, r) {
	let i = e.prev, a = e, o = e.next, s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = ri(p, m, t, n, r), v = ri(h, g, t, n, r), y = e.prevZ;
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== o && (s !== y.x || u !== y.y) && ai(s, u, c, d, l, f, y.x, y.y) && V(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	let b = e.nextZ;
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== o && (s !== b.x || u !== b.y) && ai(s, u, c, d, l, f, b.x, b.y) && V(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function Nr(e, t) {
	let n = e, r = !1;
	do {
		let i = n.prev, a = n.next.next;
		ci(i, n, n.next, a, !1) && di(i, a) && di(a, i) && (t.push(i.i, n.i, a.i), hi(n), hi(n.next), n = e = a, r = !0), n = n.next;
	} while (n !== e);
	return r ? kr(n) : n;
}
function Pr(e, t, n, r, i) {
	let a = e;
	do {
		let e = a.next.next;
		for (; e !== a.prev;) {
			if (a.i !== e.i && oi(a, e)) {
				let o = pi(a, e);
				a = kr(a, a.next), o = kr(o, o.next), Ar(a, t, n, r, i), Ar(o, t, n, r, i);
				return;
			}
			e = e.next;
		}
		a = a.next;
	} while (a !== e);
}
var Fr = !1;
function Ir(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = Or(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && Er.add(o), i.push(ii(o));
	}
	i.sort(Lr), Ur(e.length / r, t.length), Wr(n, n), Fr = !0;
	for (let e = 0; e < i.length; e++) n = Rr(i[e], n);
	return Fr = !1, kr(n);
}
function Lr(e, t) {
	return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
}
function Rr(e, t) {
	let n = Jr(e, t);
	if (!n) return t;
	let r = pi(n, e), i = r.next;
	return Wr(n, i.next), kr(r, r.next), kr(n, n.next);
}
var zr = 16, z = /* @__PURE__ */ new Float64Array(), Br = 0, Vr = [], Hr = [];
function Ur(e, t) {
	let n = Math.ceil((e + 2 * t) / zr) + t + 2;
	z.length < n * 4 && (z = new Float64Array(n * 4)), Br = 0;
}
function Wr(e, t) {
	let n = e;
	do {
		let e = Br++;
		Vr[e] = n;
		let r = n.x, i = n.y, a = n.x, o = n.y, s = 0;
		do {
			let t = n.next;
			n.z = e, t.x < r && (r = t.x), t.x > a && (a = t.x), t.y < i && (i = t.y), t.y > o && (o = t.y), n = t;
		} while (++s < zr && n !== t);
		Hr[e] = n;
		let c = e * 4;
		z[c] = r, z[c + 1] = i, z[c + 2] = a, z[c + 3] = o;
	} while (n !== t);
}
function Gr(e, t) {
	let n = e.z * 4;
	t.x < z[n] && (z[n] = t.x), t.y < z[n + 1] && (z[n + 1] = t.y), t.x > z[n + 2] && (z[n + 2] = t.x), t.y > z[n + 3] && (z[n + 3] = t.y);
}
function Kr(e) {
	let t = Hr[e];
	for (; t.prev.next !== t;) t = t.next;
	return Hr[e] = t, t;
}
function qr(e) {
	let t = Vr[e];
	for (; t.prev.next !== t;) t = t.next;
	return Vr[e] = t, t;
}
function Jr(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (si(e, n)) return n;
	for (let t = 0, s = 0; t < Br; t++, s += 4) {
		if (i < z[s + 1] || i > z[s + 3] || z[s] > r || z[s + 2] <= a) continue;
		let c = Kr(t);
		n = qr(t);
		do {
			if (n.prev.next === n) {
				if (si(e, n.next)) return n.next;
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
	for (let t = 0, f = 0; t < Br; t++, f += 4) {
		if (z[f + 2] < s || z[f] > r || z[f + 3] < l || z[f + 1] > u) continue;
		let p = Kr(t);
		n = qr(t);
		do {
			if (n.prev.next === n && r >= n.x && n.x >= s && r !== n.x && ai(i < c ? r : a, i, s, c, i < c ? a : r, i, n.x, n.y)) {
				let t = Math.abs(i - n.y) / (r - n.x);
				(di(n, e) || n.y === i && n.next.y === i && n.next.x > r) && (t < d || t === d && (n.x > o.x || n.x === o.x && Yr(o, n))) && (o = n, d = t);
			}
			n = n.next;
		} while (n !== p);
	}
	return o;
}
function Yr(e, t) {
	return V(e.prev, e, t.prev) < 0 && V(t.next, e, e.next) < 0;
}
var B = [], Xr = [], Zr = /* @__PURE__ */ new Uint32Array(), Qr = /* @__PURE__ */ new Uint32Array(), $r = /* @__PURE__ */ new Uint32Array(256);
function ei(e, t, n, r) {
	let i = e, a = 0;
	do
		i.z = ri(i.x, i.y, t, n, r), B[a++] = i, i = i.next;
	while (i !== e);
	ti(a);
	let o = null;
	for (let e = 0; e < a; e++) {
		let t = B[e];
		t.prevZ = o, o && (o.nextZ = t), o = t;
	}
	o.nextZ = null, B.fill(null, 0, a), Xr.fill(null, 0, a);
}
function ti(e) {
	if (e <= 32) for (let t = 1; t < e; t++) {
		let e = B[t], n = e.z, r = t - 1;
		for (; r >= 0 && B[r].z > n;) B[r + 1] = B[r], r--;
		B[r + 1] = e;
	}
	else {
		Zr.length < e && (Zr = new Uint32Array(e), Qr = new Uint32Array(e), Xr = Array(e));
		for (let t = 0; t < e; t++) Zr[t] = B[t].z;
		ni(e, B, Zr, Xr, Qr, 0), ni(e, Xr, Qr, B, Zr, 8), ni(e, B, Zr, Xr, Qr, 16), ni(e, Xr, Qr, B, Zr, 24);
	}
}
function ni(e, t, n, r, i, a) {
	$r.fill(0);
	for (let t = 0; t < e; t++) $r[n[t] >>> a & 255]++;
	let o = 0;
	for (let e = 0; e < 256; e++) {
		let t = $r[e];
		$r[e] = o, o += t;
	}
	for (let o = 0; o < e; o++) {
		let e = n[o], s = $r[e >>> a & 255]++;
		r[s] = t[o], i[s] = e;
	}
}
function ri(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function ii(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function ai(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function oi(e, t) {
	let n = si(e, t) && V(e.prev, e, e.next) > 0 && V(t.prev, t, t.next) > 0;
	return e.next.i !== t.i && (n || di(e, t) && di(t, e) && (V(e.prev, e, t.prev) !== 0 || V(e, t.prev, t) !== 0)) && !ui(e, t) && (n || fi(e, t));
}
function V(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function si(e, t) {
	return e.x === t.x && e.y === t.y;
}
function ci(e, t, n, r, i = !0) {
	let a = V(e, t, n), o = V(e, t, r), s = V(n, r, e), c = V(n, r, t);
	return (a > 0 && o < 0 || a < 0 && o > 0) && (s > 0 && c < 0 || s < 0 && c > 0) ? !0 : i ? !!(a === 0 && li(e, n, t) || o === 0 && li(e, r, t) || s === 0 && li(n, e, r) || c === 0 && li(n, t, r)) : !1;
}
function li(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function ui(e, t) {
	let n = Math.min(e.x, t.x), r = Math.max(e.x, t.x), i = Math.min(e.y, t.y), a = Math.max(e.y, t.y), o = e;
	do {
		let s = o.next;
		if (o.x > r && s.x > r || o.x < n && s.x < n || o.y > a && s.y > a || o.y < i && s.y < i) o = s;
		else {
			if (o.i !== e.i && s.i !== e.i && o.i !== t.i && s.i !== t.i && ci(o, s, e, t)) return !0;
			o = s;
		}
	} while (o !== e);
	return !1;
}
function di(e, t) {
	return V(e.prev, e, e.next) < 0 ? V(e, t, e.next) >= 0 && V(e, e.prev, t) >= 0 : V(e, t, e.prev) < 0 || V(e, e.next, t) < 0;
}
function fi(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do {
		let e = n.next;
		n.y > a != e.y > a && i < (e.x - n.x) * (a - n.y) / (e.y - n.y) + n.x && (r = !r), n = e;
	} while (n !== e);
	return r;
}
function pi(e, t) {
	let n = gi(e.i, e.x, e.y), r = gi(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function mi(e, t, n, r) {
	let i = gi(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function hi(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), Fr && Gr(e.prev, e.next);
}
function gi(e, t, n) {
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
function _i(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
//#endregion
//#region src/triangulator-polylines.ts
var vi = class e {
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
		let r = br(e.geometry.coordinates.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
		if (r.length < 4) return [];
		let i = R(r.flat());
		return [{
			flatCoords: r.map((e) => [e[0], e[1]]).flat(),
			flatIds: i
		}];
	}
	static multiLineStringToPolyline(e, t, n) {
		let { coordinates: r } = e.geometry, i = [];
		for (let e of r) {
			let r = br(e.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
			if (r.length < 4) continue;
			let a = R(r.flat()), o = r.map((e) => [e[0], e[1]]).flat();
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
}, yi = class e {
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
			flatIds: R(r)
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
			let n = e.map((e) => [e[0] - t[0], e[1] - t[1]]).flat(), i = R(n);
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
			flatIds: R(a, i.length > 0 ? i : void 0)
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
			let a = r.map((e) => [e[0] - t[0], e[1] - t[1]]).flat(), o = R(a, i.length > 0 ? i : void 0);
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
}, bi = 30, xi = .05;
function Si(e, t) {
	let n = Math.abs(L(e)), r = xr(e);
	return r > 1e-9 ? 2 * n / r * Math.tan(t * Math.PI / 180) : 0;
}
function Ci(e, t, n) {
	let r = [], i = [];
	for (let a = 0; a < e.length; a++) {
		let o = I(e[a]), s = L(o);
		a === 0 && s < 0 && (o = [...o].reverse()), a > 0 && s > 0 && (o = [...o].reverse());
		let c = o.length;
		for (let e = 0; e < c; e++) {
			let a = (e + 1) % c, [s, l] = o[e], [u, d] = o[a], f = r.length / 3;
			r.push(s, l, t, u, d, t, u, d, n, s, l, n), i.push(f, f + 1, f + 2, f, f + 2, f + 3);
		}
	}
	return {
		flatCoords: r,
		flatIds: i
	};
}
function wi(e, t) {
	let n = I(e[0]);
	L(n) < 0 && (n = [...n].reverse());
	let r = [...n], i = [];
	for (let t = 1; t < e.length; t++) i.push(r.length), r.push(...I(e[t]));
	let a = R(r.flatMap((e) => e), i.length > 0 ? i : void 0);
	return {
		flatCoords: r.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: a
	};
}
function Ti(e, t) {
	let n = I(e[0]);
	L(n) > 0 && (n = [...n].reverse());
	let r = [...n], i = [];
	for (let t = 1; t < e.length; t++) {
		i.push(r.length);
		let n = I(e[t]);
		L(n) < 0 && (n = [...n].reverse()), r.push(...n);
	}
	let a = R(r.flatMap((e) => e), i.length > 0 ? i : void 0);
	return {
		flatCoords: r.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: a
	};
}
function Ei(e, t, n) {
	let r = I(e);
	L(r) < 0 && (r = [...r].reverse());
	let i = r.length, a = r.reduce((e, t) => e + t[0], 0) / i, o = r.reduce((e, t) => e + t[1], 0) / i, s = [], c = [];
	for (let e = 0; e < i; e++) {
		let l = (e + 1) % i, u = s.length / 3;
		s.push(r[e][0], r[e][1], t, r[l][0], r[l][1], t, a, o, t + n), c.push(u, u + 1, u + 2);
	}
	return {
		flatCoords: s,
		flatIds: c
	};
}
function Di(e, t, n) {
	let r = I(e);
	L(r) < 0 && (r = [...r].reverse());
	let i = r.length, a = r.reduce((e, t) => e + t[0], 0) / i, o = r.reduce((e, t) => e + t[1], 0) / i, s = [], c = [], l = [];
	for (let e = 0; e <= 4; e++) {
		let s = e / 4 * (Math.PI / 2), c = Math.cos(s), u = Math.sin(s), d = [];
		if (e === 4) d.push([
			a,
			o,
			t + n
		]);
		else for (let e = 0; e < i; e++) {
			let i = a + (r[e][0] - a) * c, s = o + (r[e][1] - o) * c, l = t + n * u;
			d.push([
				i,
				s,
				l
			]);
		}
		l.push(d);
	}
	for (let e = 0; e < 4; e++) {
		let t = l[e], n = l[e + 1];
		if (e === 3) {
			let e = n[0];
			for (let n = 0; n < i; n++) {
				let r = (n + 1) % i, a = s.length / 3;
				s.push(t[n][0], t[n][1], t[n][2], t[r][0], t[r][1], t[r][2], e[0], e[1], e[2]), c.push(a, a + 1, a + 2);
			}
		} else for (let e = 0; e < i; e++) {
			let r = (e + 1) % i, a = s.length / 3;
			s.push(t[e][0], t[e][1], t[e][2], t[r][0], t[r][1], t[r][2], n[r][0], n[r][1], n[r][2], n[r][0], n[r][1], n[r][2], n[e][0], n[e][1], n[e][2], t[e][0], t[e][1], t[e][2]), c.push(a, a + 1, a + 2, a + 3, a + 4, a + 5);
		}
	}
	return {
		flatCoords: s,
		flatIds: c
	};
}
function Oi(e, t) {
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
function ki(e, t, n) {
	let r = I(e);
	L(r) < 0 && (r = [...r].reverse());
	let i = 0, a = 1, o = 0, s = r.length;
	for (let e = 0; e < s; e++) {
		let t = (e + 1) % s, n = r[t][0] - r[e][0], c = r[t][1] - r[e][1], l = Math.sqrt(n * n + c * c);
		l > i && (i = l, a = n / l, o = c / l);
	}
	let c = -o, l = a, u = r.map(([e, t]) => e * c + t * l), d = Math.min(...u), f = Math.max(...u), p = (d + f) / 2, m = (f - d) / 2, h = R(r.flatMap((e) => e)), g = {
		flatCoords: r.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: h
	};
	g = Oi(g.flatCoords, g.flatIds), g = Oi(g.flatCoords, g.flatIds), g = Oi(g.flatCoords, g.flatIds);
	for (let e = 0; e < g.flatCoords.length; e += 3) {
		let r = g.flatCoords[e], i = g.flatCoords[e + 1], a = r * c + i * l, o = m > 1e-5 ? (a - p) / m : 0;
		o = Math.max(-1, Math.min(1, o)), g.flatCoords[e + 2] = t + n * Math.sqrt(1 - o * o);
	}
	let _ = /* @__PURE__ */ new Map();
	for (let e = 0; e < g.flatIds.length; e += 3) for (let t = 0; t < 3; t++) {
		let n = g.flatIds[e + t], r = g.flatIds[e + (t + 1) % 3], i = `${Math.min(n, r)}_${Math.max(n, r)}`;
		_.set(i, (_.get(i) || 0) + 1);
	}
	let v = [], y = [];
	for (let e = 0; e < g.flatIds.length; e += 3) {
		let t = g.flatIds[e] * 3, n = g.flatIds[e + 1] * 3, r = g.flatIds[e + 2] * 3, i = v.length / 3;
		v.push(g.flatCoords[t], g.flatCoords[t + 1], g.flatCoords[t + 2], g.flatCoords[n], g.flatCoords[n + 1], g.flatCoords[n + 2], g.flatCoords[r], g.flatCoords[r + 1], g.flatCoords[r + 2]), y.push(i, i + 1, i + 2);
	}
	for (let e = 0; e < g.flatIds.length; e += 3) for (let n = 0; n < 3; n++) {
		let r = g.flatIds[e + n], i = g.flatIds[e + (n + 1) % 3], a = Math.min(r, i), o = Math.max(r, i);
		if (_.get(`${a}_${o}`) === 1) {
			let e = g.flatCoords[r * 3], n = g.flatCoords[r * 3 + 1], a = g.flatCoords[r * 3 + 2], o = g.flatCoords[i * 3], s = g.flatCoords[i * 3 + 1], c = g.flatCoords[i * 3 + 2];
			if (a - t < 1e-5 && c - t < 1e-5) continue;
			let l = v.length / 3;
			v.push(e, n, t, o, s, t, o, s, c, e, n, a), y.push(l, l + 1, l + 2, l + 2, l + 3, l);
		}
	}
	return {
		flatCoords: v,
		flatIds: y
	};
}
function Ai(e, t, n, r) {
	let i = I(e);
	L(i) < 0 && (i = [...i].reverse());
	let a = r * Math.PI / 180, o = Math.sin(a), s = Math.cos(a), c = i.map(([e, t]) => e * o + t * s), l = Math.min(...c), u = Math.max(...c), d = u - l, f = c.map((e) => d > 1e-9 ? (u - e) / d * n : 0), p = R(i.flatMap((e) => e)), m = [], h = [];
	for (let e = 0; e < p.length; e += 3) {
		let n = p[e], r = p[e + 1], a = p[e + 2], o = m.length / 3;
		m.push(i[n][0], i[n][1], t + f[n], i[r][0], i[r][1], t + f[r], i[a][0], i[a][1], t + f[a]), h.push(o, o + 1, o + 2);
	}
	let g = i.length;
	for (let e = 0; e < g; e++) {
		let n = (e + 1) % g, r = f[e], a = f[n];
		if (r < 1e-5 && a < 1e-5) continue;
		let o = m.length / 3;
		m.push(i[e][0], i[e][1], t, i[n][0], i[n][1], t, i[n][0], i[n][1], t + a, i[e][0], i[e][1], t + r), h.push(o, o + 1, o + 2, o + 2, o + 3, o);
	}
	return {
		flatCoords: m,
		flatIds: h
	};
}
function ji(e) {
	let t = e.length;
	return e.map((n, r) => {
		let i = (r + 1) % t, a = e[i][0] - e[r][0], o = e[i][1] - e[r][1], s = Math.sqrt(a * a + o * o);
		return s > 1e-10 ? [-o / s, a / s] : [0, 0];
	});
}
function Mi(e, t, n) {
	let r = e.length;
	return e.map((i, a) => {
		let o = (a + r - 1) % r, s = t[o], c = t[a], l = n[e[o].edgeIdx], u = n[i.edgeIdx], d = s[0] * c[1] - s[1] * c[0];
		return Math.abs(d) > 1e-8 ? [(l * c[1] - u * s[1]) / d, (s[0] * u - c[0] * l) / d] : [c[0] * u, c[1] * u];
	});
}
function Ni(e, t, n, r) {
	let i = t[0] - e[0], a = t[1] - e[1], o = n[0] - r[0], s = n[1] - r[1], c = i * o + a * s;
	if (c <= 1e-8) return Infinity;
	let l = o * o + s * s;
	return l < 1e-12 ? Infinity : c / l;
}
function Pi(e, t) {
	let n = [], r = e.length;
	for (let i = 0; i < r; i++) {
		let a = (i + 1) % r, o = e[i].pos[0] - e[a].pos[0], s = e[i].pos[1] - e[a].pos[1];
		Math.sqrt(o * o + s * s) >= t && n.push(e[i]);
	}
	return n;
}
function Fi(e) {
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
function Ii(e, t) {
	let n = e.length, r = Array(n).fill(1);
	if (t.shape === "hipped" || t.shape === "pyramidal" || t.shape === "pyramid" || t.shape === "mansard") return r;
	let i = Fi(e);
	if (t.shape === "gabled") return i.map((e) => +!e);
	if (t.shape === "half-hipped") return i.map((e) => e ? .3 : 1);
	if (t.shape === "saltbox") {
		let e = 0;
		return i.map((t) => t ? 0 : (e++, e === 1 ? 1 : 2));
	}
	return r;
}
function Li(e, t, n) {
	let r = e;
	if (r.length < 3 || !Sr(r)) return {
		faces: [],
		maxH: 0
	};
	let i = Math.min(...r.map((e) => e[0])), a = Math.max(...r.map((e) => e[0])), o = Math.min(...r.map((e) => e[1])), s = Math.max(...r.map((e) => e[1])), c = xi * 10, l = Pi(r.map((e, t) => ({
		pos: [...e],
		h: 0,
		edgeIdx: t
	})), xi), u = [], d = 0;
	for (let e = 0; e < 500 && l.length >= 3; e++) {
		let e = ji(l.map((e) => e.pos)), r = l.length, f = Mi(l, e, t);
		if (f.some((e) => e[0] * e[0] + e[1] * e[1] > 100)) return {
			faces: [],
			maxH: 0
		};
		let p = Infinity;
		for (let e = 0; e < r; e++) {
			let t = (e + 1) % r, n = Ni(l[e].pos, l[t].pos, f[e], f[t]);
			n < p && (p = n);
		}
		let m = !1;
		if ((p !== Infinity && l[0].h + p >= n || p === Infinity) && (p = n - l[0].h, m = !0), p <= 0) break;
		let h = l.map((e, t) => [e.pos[0] + p * f[t][0], e.pos[1] + p * f[t][1]]), g = l.map((e) => e.h + p), _ = Math.max(...g);
		_ > d && (d = _);
		for (let e = 0; e < r; e++) {
			let t = (e + 1) % r, n = [
				l[e].pos[0],
				l[e].pos[1],
				l[e].h
			], i = [
				l[t].pos[0],
				l[t].pos[1],
				l[t].h
			], a = [
				h[e][0],
				h[e][1],
				g[e]
			], o = [
				h[t][0],
				h[t][1],
				g[t]
			], s = h[e][0] - h[t][0], c = h[e][1] - h[t][1];
			if (Math.sqrt(s * s + c * c) < xi) {
				let r = (h[e][0] + h[t][0]) / 2, a = (h[e][1] + h[t][1]) / 2, o = (g[e] + g[t]) / 2;
				u.push([
					n,
					i,
					[
						r,
						a,
						o
					]
				]);
			} else u.push([
				n,
				i,
				o,
				a
			]);
		}
		for (let [e, t] of h) if (e < i - c || e > a + c || t < o - c || t > s + c) return {
			faces: [],
			maxH: 0
		};
		if (m) {
			let e = R(h.flatMap((e) => e));
			for (let t = 0; t < e.length; t += 3) {
				let n = h[e[t]], r = h[e[t + 1]], i = h[e[t + 2]];
				u.push([
					[
						n[0],
						n[1],
						g[e[t]]
					],
					[
						r[0],
						r[1],
						g[e[t + 1]]
					],
					[
						i[0],
						i[1],
						g[e[t + 2]]
					]
				]);
			}
			break;
		}
		let v = [];
		for (let e = 0; e < r; e++) {
			let t = (e + 1) % r, n = h[e][0] - h[t][0], i = h[e][1] - h[t][1];
			Math.sqrt(n * n + i * i) >= xi && v.push({
				pos: h[e],
				h: g[e],
				edgeIdx: l[e].edgeIdx
			});
		}
		l = v;
	}
	return {
		faces: u,
		maxH: d
	};
}
function Ri(e, t, n, r) {
	let i = [], a = [], o = r > 1e-9 ? n / r : 1;
	for (let n of e) if (!(n.length < 3)) {
		if (n.length === 3) {
			let e = i.length / 3;
			i.push(n[0][0], n[0][1], t + n[0][2] * o, n[1][0], n[1][1], t + n[1][2] * o, n[2][0], n[2][1], t + n[2][2] * o), a.push(e, e + 1, e + 2);
		} else if (n.length === 4) {
			let e = i.length / 3;
			i.push(n[0][0], n[0][1], t + n[0][2] * o, n[1][0], n[1][1], t + n[1][2] * o, n[2][0], n[2][1], t + n[2][2] * o, n[2][0], n[2][1], t + n[2][2] * o, n[3][0], n[3][1], t + n[3][2] * o, n[0][0], n[0][1], t + n[0][2] * o), a.push(e, e + 1, e + 2, e + 3, e + 4, e + 5);
		} else {
			let e = R(n.flatMap(([e, t]) => [e, t]));
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
function zi(e, t, n, r, i) {
	let a = I(e);
	L(a) < 0 && (a = [...a].reverse());
	let o = Ii(a, r), s = Infinity;
	if (r.shape === "mansard") {
		let e = Math.abs(L(a)), t = xr(a);
		s = (t > 0 ? 2 * e / t : 0) * .7;
	}
	let { faces: c, maxH: l } = Li(a, o, s);
	return c.length === 0 ? null : Ri(c, t, n, l);
}
function Bi(e) {
	if (!e) return {
		shape: "flat",
		height: 0,
		angle: bi,
		direction: 0
	};
	let t = parseFloat(String(e["roof:angle"] ?? String(bi))) || bi;
	return {
		shape: String(e["roof:shape"] ?? "flat"),
		height: parseFloat(String(e["roof:height"] ?? "0")) || 0,
		angle: Math.min(75, Math.max(5, t)),
		direction: parseFloat(String(e["roof:direction"] ?? "0")) || 0
	};
}
function Vi(e, t, n, r) {
	let i = Bi(r), a = i.height;
	if (a <= 0 && i.shape !== "flat" && (a = Si(I(e[0]), i.angle)), i.shape !== "flat") {
		let t = Si(I(e[0]), 60);
		t > 0 && a > t && (a = t);
	}
	let o = I(e[0]), s = [];
	s.push(Ci(e, t, n)), t > 0 && s.push(Ti(e, t));
	let c;
	switch (i.shape) {
		case "round":
			c = ki(o, n, a);
			break;
		case "cone":
		case "pyramidal":
		case "pyramid":
			c = Ei(o, n, a);
			break;
		case "dome":
			c = Di(o, n, a);
			break;
		case "skillion":
			c = Ai(o, n, a, i.direction);
			break;
		case "gabled":
		case "hipped":
		case "half-hipped":
		case "mansard":
		case "saltbox":
			c = zi(o, n, a, i, e) || wi(e, n);
			break;
		default: c = wi(e, n);
	}
	return s.push(c), s;
}
//#endregion
//#region src/building-feature.ts
function Hi(e) {
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
function Ui(e) {
	let t = Hi(e), { parts: n, ...r } = t.properties, i = new Map(n.map((e) => [e.geometryIndex, e]));
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
//#region src/triangulator-buildings.ts
var Wi = class e {
	static buildMesh(t, n, r = !1) {
		let i = [], a = [], o = 0;
		for (let s = 0; s < t.features.length; s++) {
			let c = t.features[s], l = Ui(c), u = 0, d = 0;
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
					p = Vi([t.map((t) => e.toLocal(t, n))], l[0], l[1], f.properties);
				} else if (a.type === "MultiLineString") {
					let { coordinates: t } = f.geometry;
					for (let r of t) {
						let t = r.map((t) => e.toLocal(t, n));
						p.push(...Vi([t], l[0], l[1], f.properties));
					}
				} else if (a.type === "Polygon") {
					let { coordinates: t } = f.geometry;
					p = Vi(t.map((t) => t.map((t) => e.toLocal(t, n))), l[0], l[1], f.properties);
				} else if (a.type === "MultiPolygon") {
					let { coordinates: t } = f.geometry;
					for (let r of t) {
						let t = r.map((t) => t.map((t) => e.toLocal(t, n)));
						p.push(...Vi(t, l[0], l[1], f.properties));
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
}, Gi = 6, Ki = 20, qi = 3.4, Ji = class {
	static buildMesh(e, t, n) {
		let r = [], i = [];
		for (let n = 0; n < e.features.length; n++) {
			let a = e.features[n];
			for (let e of this.footprints(a)) {
				let o = wi(e.rings.map((e) => e.map((e) => [e[0] - t[0], e[1] - t[1]])), e.height);
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
		let n = Math.max(1, Math.floor(t)), r = [], i = [];
		return e.features.forEach((e, t) => {
			for (let a of this.footprints(e)) {
				let e = (a.height - a.base) / n;
				a.rings.forEach((o, s) => {
					let c = I(o), l = (L(c) >= 0 ? 1 : -1) * (s === 0 ? 1 : -1);
					for (let o = 0; o < c.length; o++) {
						let u = c[o], d = c[(o + 1) % c.length], f = d[0] - u[0], p = d[1] - u[1], m = Math.hypot(f, p);
						if (m < 1e-6) continue;
						let h = f / m, g = p / m, _ = [
							l * g,
							-l * h,
							0
						], v = Math.max(1, Math.floor(m / Gi)), y = m / v;
						for (let c = 0; c < n; c++) for (let n = 0; n < v; n++) {
							let l = y * (n + .5), d = [
								u[0] + h * l,
								u[1] + g * l,
								a.base + (c + .5) * e
							], f = `${t}:${a.geometryIndex}:${a.polygonIndex}:${s}:${o}:${c}:${n}`, p = {
								windowId: f,
								sourceFeatureIndex: t,
								geometryIndex: a.geometryIndex,
								polygonIndex: a.polygonIndex,
								ringIndex: s,
								edgeIndex: o,
								floorIndex: c,
								windowIndex: n,
								center: d,
								normal: _,
								width: y,
								height: e,
								buildingHeight: a.height
							};
							i.push(p), r.push({
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
				features: r
			},
			windows: i
		};
	}
	static resolveHeight(e) {
		let t = Ui(e).map((e) => {
			let t = e.properties, n = t.height ?? t["building:height"];
			if (n !== void 0) {
				let e = Number.parseFloat(String(n));
				return Number.isFinite(e) ? Math.max(0, e) : Ki;
			}
			let r = Number.parseFloat(String(t.levels ?? t["building:levels"] ?? ""));
			return Number.isFinite(r) ? Math.max(0, r * qi) : Ki;
		});
		return t.length ? Math.max(...t) : Ki;
	}
	static footprints(e) {
		let t = [];
		for (let n of Ui(e)) {
			let e = n.geometry, r = e.type === "Polygon" ? [e.coordinates] : e.type === "MultiPolygon" ? e.coordinates : e.type === "LineString" ? [[e.coordinates]] : e.type === "MultiLineString" ? e.coordinates.map((e) => [e]) : [], i = this.resolveHeight({
				type: "Feature",
				geometry: e,
				properties: n.properties
			}), a = n.properties, o = Math.max(0, a.min_height === void 0 ? (Number.parseFloat(String(a.min_level ?? a["building:min_level"] ?? "0")) || 0) * qi : Number.parseFloat(String(a.min_height)) || 0);
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
}, Yi = class {
	static buildMesh(e, t) {
		let n = [], r = [], i = e.bbox;
		if (!i) return console.warn("GeoTIFF feature collection does not have a bounding box."), [n, r];
		let a = [i[0] - t[0], i[1] - t[1]], o = [i[2] - t[0], i[1] - t[1]], s = [i[2] - t[0], i[3] - t[1]], c = [i[0] - t[0], i[3] - t[1]], l = [
			a[0],
			a[1],
			o[0],
			o[1],
			s[0],
			s[1],
			c[0],
			c[1]
		], u = [
			0,
			0,
			1,
			0,
			1,
			1,
			0,
			1
		], d = [
			0,
			1,
			2,
			0,
			2,
			3
		];
		return n.push({
			position: new Float32Array(l),
			texCoord: new Float32Array(u),
			indices: new Uint32Array(d)
		}), r.push({
			nPoints: l.length / 2,
			nTriangles: d.length / 3,
			featureIndex: 0
		}), [n, r];
	}
};
//#endregion
//#region src/utils-data.ts
function Xi(e, t) {
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
function Zi(e) {
	if (typeof e == "number") return Number.isFinite(e);
	if (typeof e == "string") {
		let t = e.trim();
		return t !== "" && Number.isFinite(Number(t));
	}
	return !1;
}
//#endregion
//#region src/heightfield.ts
function Qi(e, t, n) {
	let r = e.features[0]?.properties, i = r ? Xi(r, t) : void 0;
	if (!r || !$i(i) || !e.bbox) throw Error(`Heightfield requires a raster FeatureCollection with bbox and '${t}' band values.`);
	let a = Number(r.rasterResX), o = Number(r.rasterResY);
	if (!Number.isInteger(a) || !Number.isInteger(o) || a < 2 || o < 2) throw Error("Heightfield raster resolution must be at least 2x2.");
	let s = Array.from(i, Number);
	if (s.length !== a * o) throw Error(`Heightfield has ${s.length} cells; expected ${a * o}.`);
	let c = new Float32Array(s), l = Infinity, u = -Infinity, d = 0;
	for (let e = 0; e < c.length; e++) {
		let t = c[e];
		Number.isFinite(t) ? (l = Math.min(l, t), u = Math.max(u, t)) : (c[e] = 0, d++);
	}
	if (!Number.isFinite(l) || !Number.isFinite(u)) throw Error("Heightfield does not contain finite elevation values.");
	d > 0 && console.warn(`Heightfield contains ${d} non-finite elevation values. These were set to 0.`);
	let f = [
		Number(e.bbox[0]) - n[0],
		Number(e.bbox[1]) - n[1],
		Number(e.bbox[2]) - n[0],
		Number(e.bbox[3]) - n[1]
	];
	return {
		width: a,
		height: o,
		originX: f[0],
		originY: f[1],
		cellSizeX: (f[2] - f[0]) / Math.max(1, a - 1),
		cellSizeY: (f[3] - f[1]) / Math.max(1, o - 1),
		minHeight: l,
		maxHeight: u,
		data: c,
		bounds: f
	};
}
function $i(e) {
	return Array.isArray(e) || ArrayBuffer.isView(e);
}
var ea = typeof Float32Array < "u" ? Float32Array : Array;
//#endregion
//#region ../node_modules/gl-matrix/esm/mat4.js
function H() {
	var e = new ea(16);
	return ea != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function ta(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function na(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = n[0], b = n[1], x = n[2], S = n[3];
	return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e;
}
function ra(e, t, n, r, i) {
	var a = 1 / Math.tan(t / 2);
	if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
		var o = 1 / (r - i);
		e[10] = i * o, e[14] = i * r * o;
	} else e[10] = -1, e[14] = -r;
	return e;
}
function ia(e, t, n, r, i, a, o) {
	var s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
	return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = a * l, e[15] = 1, e;
}
function aa(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p, m = t[0], h = t[1], g = t[2], _ = r[0], v = r[1], y = r[2], b = n[0], x = n[1], S = n[2];
	return Math.abs(m - b) < 1e-6 && Math.abs(h - x) < 1e-6 && Math.abs(g - S) < 1e-6 ? ta(e) : (u = m - b, d = h - x, f = g - S, p = 1 / Math.sqrt(u * u + d * d + f * f), u *= p, d *= p, f *= p, i = v * f - y * d, a = y * u - _ * f, o = _ * d - v * u, p = Math.sqrt(i * i + a * a + o * o), p ? (p = 1 / p, i *= p, a *= p, o *= p) : (i = 0, a = 0, o = 0), s = d * o - f * a, c = f * i - u * o, l = u * a - d * i, p = Math.sqrt(s * s + c * c + l * l), p ? (p = 1 / p, s *= p, c *= p, l *= p) : (s = 0, c = 0, l = 0), e[0] = i, e[1] = s, e[2] = u, e[3] = 0, e[4] = a, e[5] = c, e[6] = d, e[7] = 0, e[8] = o, e[9] = l, e[10] = f, e[11] = 0, e[12] = -(i * m + a * h + o * g), e[13] = -(s * m + c * h + l * g), e[14] = -(u * m + d * h + f * g), e[15] = 1, e);
}
var oa = na;
//#endregion
//#region ../node_modules/gl-matrix/esm/vec3.js
function U() {
	var e = new ea(3);
	return ea != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function sa(e) {
	var t = e[0], n = e[1], r = e[2];
	return Math.sqrt(t * t + n * n + r * r);
}
function W(e, t, n) {
	var r = new ea(3);
	return r[0] = e, r[1] = t, r[2] = n, r;
}
function ca(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e;
}
function la(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e;
}
function ua(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function da(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e;
}
function fa(e, t) {
	var n = t[0], r = t[1], i = t[2], a = n * n + r * r + i * i;
	return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e;
}
function pa(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2];
	return e[0] = i * c - a * s, e[1] = a * o - r * c, e[2] = r * s - i * o, e;
}
function ma(e, t, n, r) {
	var i = [], a = [];
	return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), a[2] = i[2], e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e;
}
var ha = la;
(function() {
	var e = U();
	return function(t, n, r, i, a, o) {
		var s, c;
		for (n ||= 3, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
		return t;
	};
})();
//#endregion
//#region src/camera.ts
var ga = class e {
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
		this.wEye = U(), this.wLookAt = U(), this.wEyeDir = U(), this.wUp = U(), this.wNear = 0, this.wFar = 0, this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = H(), this.mViewMatrix = H(), this.viewportWidth = 0, this.viewportHeight = 0, this.resetCamera(t.up, t.lookAt, t.eye);
	}
	resetCamera(e, t, n) {
		this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = H(), this.mViewMatrix = H(), this.wNear = 1, this.wFar = 5e5, this.wLookAt = W(t[0], t[1], t[2]), this.wEye = W(n[0], n[1], n[2]), this.updateEyeDirAndLen(), this.wUp = W(e[0], e[1], e[2]);
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
		return new Float32Array(oa(H(), this.mProjectionMatrix, this.mViewMatrix));
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
		ta(this.mViewMatrix), ia(this.mProjectionMatrix, e, t, n, r, 0, -100), this.wEye = W((e + t) * .5, (n + r) * .5, 100), this.wLookAt = W((e + t) * .5, (n + r) * .5, 0), this.wUp = W(0, 1, 0), this.updateEyeDirAndLen();
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
		da(this.wEye, this.wEye, i, e), da(this.wLookAt, this.wEye, this.wEyeDir, sa(this.wEyeDir));
	}
	translate(e, t) {
		let n = this.wEye[2], r = U();
		fa(r, pa(r, this.wEyeDir, this.wUp));
		let i = ca(U(), ua(U(), r, e * n), ua(U(), this.wUp, t * n));
		ca(this.wEye, this.wEye, i), da(this.wLookAt, this.wEye, this.wEyeDir, sa(this.wEyeDir));
	}
	yaw(e) {
		ma(this.wEyeDir, this.wEyeDir, W(0, 0, 0), e), ma(this.wUp, this.wUp, W(0, 0, 0), e), da(this.wLookAt, this.wEye, this.wEyeDir, sa(this.wEyeDir));
	}
	pitch(e) {
		e = -e, ca(this.wEyeDir, ua(U(), this.wUp, Math.sin(e)), ua(U(), this.wEyeDir, Math.cos(e))), fa(this.wEyeDir, this.wEyeDir), da(this.wLookAt, this.wEye, this.wEyeDir, sa(this.wEyeDir)), pa(this.wUp, pa(U(), this.wEyeDir, this.wUp), this.wEyeDir), fa(this.wUp, this.wUp);
	}
	getZoomScale() {
		return Math.max(Math.abs(this.wEye[2]), 1) / 1e4;
	}
	update() {
		let e = this.viewportWidth / this.viewportHeight;
		aa(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp), ra(this.mProjectionMatrix, this.fovy, e, this.wFar, this.wNear);
	}
	static buildViewProjection(e) {
		let t = aa(H(), e.eye, e.lookAt, e.up), n = ra(H(), e.fovDeg * (Math.PI / 180), e.aspect, e.near, e.far);
		return new Float32Array(oa(H(), n, t));
	}
	screenCoordToWorldDir(e, t) {
		let n = U();
		fa(n, pa(n, this.wEyeDir, this.wUp));
		let r = ua(U(), this.wUp, Math.tan(this.fovy / 2) * (t - .5) * 2), i = this.viewportWidth / this.viewportHeight, a = ua(U(), n, Math.tan(this.fovy / 2) * (e - .5) * 2 * i), o = ca(U(), r, a), s = ca(U(), this.wEyeDir, o);
		return fa(s, s), s;
	}
	updateEyeDirAndLen() {
		this.wEyeDir = U(), ha(this.wEyeDir, this.wLookAt, this.wEye), fa(this.wEyeDir, this.wEyeDir);
	}
}, _a = class {
	constructor() {
		this.steps = [];
	}
	zoomOut(e, t) {
		return this.steps.push({
			type: "zoom",
			amount: Math.abs(e),
			durationMs: t * 1e3
		}), this;
	}
	zoomIn(e, t) {
		return this.steps.push({
			type: "zoom",
			amount: -Math.abs(e),
			durationMs: t * 1e3
		}), this;
	}
	pitch(e, t, n = 0) {
		return this.steps.push({
			type: "pitch",
			amount: Math.PI / 180 * e,
			durationMs: t * 1e3,
			pan: n
		}), this;
	}
	yaw(e, t) {
		return this.steps.push({
			type: "yaw",
			amount: Math.PI / 180 * e,
			durationMs: t * 1e3
		}), this;
	}
	roll(e, t) {
		return this.steps.push({
			type: "roll",
			amount: Math.PI / 180 * e,
			durationMs: t * 1e3
		}), this;
	}
	play(e) {
		return this.steps.reduce((t, n) => t.then(() => this.runStep(e, n)), Promise.resolve());
	}
	easeInOut(e) {
		return e < .5 ? 2 * e * e : 1 - (-2 * e + 2) ** 2 / 2;
	}
	stateFromViewMatrix(e) {
		let t = e.getModelViewMatrix(), n = [
			-(t[0] * t[12] + t[1] * t[13] + t[2] * t[14]),
			-(t[4] * t[12] + t[5] * t[13] + t[6] * t[14]),
			-(t[8] * t[12] + t[9] * t[13] + t[10] * t[14])
		], r = [
			t[0],
			t[4],
			t[8]
		], i = [
			t[1],
			t[5],
			t[9]
		], a = [
			-t[2],
			-t[6],
			-t[10]
		];
		return {
			eye: n,
			right: r,
			forward: a,
			up: i,
			lookAt: [
				n[0] + a[0],
				n[1] + a[1],
				n[2] + a[2]
			]
		};
	}
	rotateAround(e, t, n) {
		let r = Math.cos(n), i = Math.sin(n), a = e[0] * t[0] + e[1] * t[1] + e[2] * t[2], o = t[1] * e[2] - t[2] * e[1], s = t[2] * e[0] - t[0] * e[2], c = t[0] * e[1] - t[1] * e[0];
		return [
			e[0] * r + o * i + t[0] * a * (1 - r),
			e[1] * r + s * i + t[1] * a * (1 - r),
			e[2] * r + c * i + t[2] * a * (1 - r)
		];
	}
	runStep(e, t) {
		return new Promise((n) => {
			let r = performance.now();
			e.update();
			let i = this.stateFromViewMatrix(e), a = i.forward[2] === 0 ? 0 : -i.eye[2] / i.forward[2], o = [
				i.eye[0] + i.forward[0] * a,
				i.eye[1] + i.forward[1] * a,
				0
			], s = [
				i.eye[0] - o[0],
				i.eye[1] - o[1],
				i.eye[2] - o[2]
			], c = (t.amount > 0 ? 1 : -1) * Math.log(Math.abs(t.amount)), l = (a) => {
				let u = Math.min((a - r) / t.durationMs, 1), d = this.easeInOut(u);
				if (t.type === "pitch") {
					let n = this.rotateAround(s, i.right, -t.amount * d), r = this.rotateAround(i.up, i.right, -t.amount * d), a = 0, c = 0, l = t.pan ?? 0;
					if (l !== 0) {
						let e = Math.sqrt(i.up[0] ** 2 + i.up[1] ** 2);
						e > 1e-6 && (a = -i.up[0] / e * l * d, c = -i.up[1] / e * l * d);
					}
					let u = [
						o[0] + a,
						o[1] + c,
						0
					], f = [
						u[0] + n[0],
						u[1] + n[1],
						u[2] + n[2]
					];
					e.resetCamera(r, u, f), e.update();
				} else if (t.type === "yaw") {
					let n = this.rotateAround(s, [
						0,
						0,
						1
					], t.amount * d), r = this.rotateAround(i.up, [
						0,
						0,
						1
					], t.amount * d), a = [
						o[0] + n[0],
						o[1] + n[1],
						o[2] + n[2]
					];
					e.resetCamera(r, o, a), e.update();
				} else if (t.type === "zoom") {
					let t = Math.exp(c * d), n = [
						o[0] + s[0] * t,
						o[1] + s[1] * t,
						o[2] + s[2] * t
					];
					e.resetCamera(i.up, o, n), e.update();
				} else if (t.type === "roll") {
					let n = this.rotateAround(i.up, i.forward, t.amount * d);
					e.resetCamera(n, i.lookAt, i.eye), e.update();
				}
				u < 1 ? requestAnimationFrame(l) : n();
			};
			requestAnimationFrame(l);
		});
	}
}, va = class {
	constructor() {
		this._listeners = {};
	}
	on(e, t) {
		this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t);
	}
	off(e, t) {
		let n = this._listeners[e];
		n && (this._listeners[e] = n.filter((e) => e !== t));
	}
	emit(e, t) {
		this._listeners[e]?.forEach((e) => e(t));
	}
}, ya = [
	"background",
	"surface",
	"parks",
	"water",
	"roads",
	"buildings",
	"points",
	"polygons",
	"polylines",
	"raster"
], ba = [
	"surface",
	"parks",
	"water",
	"roads",
	"buildings"
], G = 6371008.8;
G * 100, G * 100, G * 100, G * 3.28084, G * 3.28084, G * 39.37, G * 39.37, G / 1e3, G / 1e3, G / 1e3, G / 1609.344, G / 1609.344, G * 1e3, G * 1e3, G * 1e3, G / 1852, G / 1852, G * 1.0936, G * 1.0936;
function xa(e, t, n = {}) {
	let r = { type: "Feature" };
	return (n.id === 0 || n.id) && (r.id = n.id), n.bbox && (r.bbox = n.bbox), r.properties = t || {}, r.geometry = e, r;
}
function Sa(e, t, n = {}) {
	if (!e) throw Error("coordinates is required");
	if (!Array.isArray(e)) throw Error("coordinates must be an Array");
	if (e.length < 2) throw Error("coordinates must be at least 2 numbers long");
	if (!Ea(e[0]) || !Ea(e[1])) throw Error("coordinates must contain numbers");
	return xa({
		type: "Point",
		coordinates: e
	}, t, n);
}
function Ca(e, t, n = {}) {
	if (e.length < 2) throw Error("coordinates must be an array of two or more positions");
	return xa({
		type: "LineString",
		coordinates: e
	}, t, n);
}
function wa(e, t = {}) {
	let n = { type: "FeatureCollection" };
	return t.id && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.features = e, n;
}
function Ta(e, t, n = {}) {
	return xa({
		type: "MultiLineString",
		coordinates: e
	}, t, n);
}
function Ea(e) {
	return !isNaN(e) && e !== null && !Array.isArray(e);
}
//#endregion
//#region ../node_modules/@turf/invariant/dist/esm/index.js
function Da(e) {
	if (!e) throw Error("coord is required");
	if (!Array.isArray(e)) {
		if (e.type === "Feature" && e.geometry !== null && e.geometry.type === "Point") return [...e.geometry.coordinates];
		if (e.type === "Point") return [...e.coordinates];
	}
	if (Array.isArray(e) && e.length >= 2 && !Array.isArray(e[0]) && !Array.isArray(e[1])) return [...e];
	throw Error("coord must be GeoJSON Point or an Array of numbers");
}
function Oa(e) {
	return e.type === "Feature" ? e.geometry : e;
}
//#endregion
//#region ../node_modules/@turf/meta/dist/esm/index.js
function ka(e, t, n) {
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
						for (r = 0; r < o.geometries.length; r++) if (ka(o.geometries[r], t, n) === !1) return !1;
						break;
					default: throw Error("Unknown Geometry Type");
				}
			}
		}
	}
}
function Aa(e, t) {
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
function ja(e, t) {
	Aa(e, function(e, n, r, i, a) {
		var o = e === null ? null : e.type;
		switch (o) {
			case null:
			case "Point":
			case "LineString":
			case "Polygon": return t(xa(e, r, {
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
			if (t(xa({
				type: s,
				coordinates: l
			}, r), n, c) === !1) return !1;
		}
	});
}
//#endregion
//#region ../node_modules/@turf/bbox/dist/esm/index.js
function Ma(e, t = {}) {
	if (e.bbox != null && !0 !== t.recompute) return e.bbox;
	let n = [
		Infinity,
		Infinity,
		-Infinity,
		-Infinity
	];
	return ka(e, (e) => {
		n[0] > e[0] && (n[0] = e[0]), n[1] > e[1] && (n[1] = e[1]), n[2] < e[0] && (n[2] = e[0]), n[3] < e[1] && (n[3] = e[1]);
	}), n;
}
//#endregion
//#region ../node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/util.js
var K = 11102230246251565e-32, q = 134217729, Na = 3.000000000000001 * K;
function Pa(e, t, n, r, i) {
	let a, o, s, c, l = t[0], u = r[0], d = 0, f = 0;
	u > l == u > -l ? (a = l, l = t[++d]) : (a = u, u = r[++f]);
	let p = 0;
	if (d < e && f < n) for (u > l == u > -l ? (o = l + a, s = a - (o - l), l = t[++d]) : (o = u + a, s = a - (o - u), u = r[++f]), a = o, s !== 0 && (i[p++] = s); d < e && f < n;) u > l == u > -l ? (o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d]) : (o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f]), a = o, s !== 0 && (i[p++] = s);
	for (; d < e;) o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d], a = o, s !== 0 && (i[p++] = s);
	for (; f < n;) o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f], a = o, s !== 0 && (i[p++] = s);
	return (a !== 0 || p === 0) && (i[p++] = a), p;
}
function Fa(e, t) {
	let n = t[0];
	for (let r = 1; r < e; r++) n += t[r];
	return n;
}
function J(e) {
	return new Float64Array(e);
}
//#endregion
//#region ../node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/orient2d.js
var Ia = (3 + 16 * K) * K, La = (2 + 12 * K) * K, Ra = (9 + 64 * K) * K * K, za = J(4), Ba = J(8), Va = J(12), Ha = J(16), Y = J(4);
function Ua(e, t, n, r, i, a, o) {
	let s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e - i, E = n - i, D = t - a, O = r - a;
	b = T * O, f = q * T, p = f - (f - T), m = T - p, f = q * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = D * E, f = q * D, p = f - (f - D), m = D - p, f = q * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, za[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, za[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, za[2] = v - (w - d) + (_ - d), za[3] = w;
	let k = Fa(4, za), A = La * o;
	if (k >= A || -k >= A || (d = e - T, s = e - (T + d) + (d - i), d = n - E, l = n - (E + d) + (d - i), d = t - D, c = t - (D + d) + (d - a), d = r - O, u = r - (O + d) + (d - a), s === 0 && c === 0 && l === 0 && u === 0) || (A = Ra * o + Na * Math.abs(k), k += T * u + O * s - (D * l + E * c), k >= A || -k >= A)) return k;
	b = s * O, f = q * s, p = f - (f - s), m = s - p, f = q * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = c * E, f = q * c, p = f - (f - c), m = c - p, f = q * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Y[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Y[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Y[2] = v - (w - d) + (_ - d), Y[3] = w;
	let ee = Pa(4, za, 4, Y, Ba);
	b = T * u, f = q * T, p = f - (f - T), m = T - p, f = q * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = D * l, f = q * D, p = f - (f - D), m = D - p, f = q * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Y[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Y[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Y[2] = v - (w - d) + (_ - d), Y[3] = w;
	let te = Pa(ee, Ba, 4, Y, Va);
	return b = s * u, f = q * s, p = f - (f - s), m = s - p, f = q * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = c * l, f = q * c, p = f - (f - c), m = c - p, f = q * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, Y[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, Y[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, Y[2] = v - (w - d) + (_ - d), Y[3] = w, Ha[Pa(te, Va, 4, Y, Ha) - 1];
}
function Wa(e, t, n, r, i, a) {
	let o = (t - a) * (n - i), s = (e - i) * (r - a), c = o - s, l = Math.abs(o + s);
	return Math.abs(c) >= Ia * l ? c : -Ua(e, t, n, r, i, a, l);
}
(7 + 56 * K) * K, (3 + 28 * K) * K, (26 + 288 * K) * K * K, J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(8), J(8), J(8), J(4), J(8), J(8), J(16), J(12), J(192), J(192), (10 + 96 * K) * K, (4 + 48 * K) * K, (44 + 576 * K) * K * K, J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(8), J(8), J(8), J(8), J(8), J(8), J(8), J(8), J(8), J(4), J(4), J(4), J(8), J(16), J(16), J(16), J(32), J(32), J(48), J(64), J(1152), J(1152), (16 + 224 * K) * K, (5 + 72 * K) * K, (71 + 1408 * K) * K * K, J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(4), J(24), J(24), J(24), J(24), J(24), J(24), J(24), J(24), J(24), J(24), J(1152), J(1152), J(1152), J(1152), J(1152), J(2304), J(2304), J(3456), J(5760), J(8), J(8), J(8), J(16), J(24), J(48), J(48), J(96), J(192), J(384), J(384), J(384), J(768), J(96), J(96), J(96), J(1152);
//#endregion
//#region ../node_modules/point-in-polygon-hao/dist/esm/index.js
function Ga(e, t) {
	var n, r, i = 0, a, o, s, c, l, u, d, f = e[0], p = e[1], m = t.length;
	for (n = 0; n < m; n++) {
		r = 0;
		var h = t[n], g = h.length - 1;
		if (u = h[0], u[0] !== h[g][0] && u[1] !== h[g][1]) throw Error("First and last coordinates in a ring must be the same");
		for (o = u[0] - f, s = u[1] - p; r < g; r++) {
			if (d = h[r + 1], c = d[0] - f, l = d[1] - p, s === 0 && l === 0) {
				if (c <= 0 && o >= 0 || o <= 0 && c >= 0) return 0;
			} else if (l >= 0 && s <= 0 || l <= 0 && s >= 0) {
				if (a = Wa(o, c, s, l, 0, 0), a === 0) return 0;
				(a > 0 && l > 0 && s <= 0 || a < 0 && l <= 0 && s > 0) && i++;
			}
			u = d, s = l, o = c;
		}
	}
	return i % 2 != 0;
}
//#endregion
//#region ../node_modules/@turf/boolean-point-in-polygon/dist/esm/index.js
function Ka(e, t, n = {}) {
	if (!e) throw Error("point is required");
	if (!t) throw Error("polygon is required");
	let r = Da(e), i = Oa(t), a = i.type, o = t.bbox, s = i.coordinates;
	if (o && qa(r, o) === !1) return !1;
	a === "Polygon" && (s = [s]);
	for (var c = 0; c < s.length; ++c) {
		let e = Ga(r, s[c]);
		if (e === 0 && !n.ignoreBoundary || e) return !0;
	}
	return !1;
}
function qa(e, t) {
	return t[0] <= e[0] && t[1] <= e[1] && t[2] >= e[0] && t[3] >= e[1];
}
//#endregion
//#region ../node_modules/tinyqueue/index.js
function Ja(e, t) {
	return e < t ? -1 : +(e > t);
}
var Ya, Xa = t((() => {
	Ya = class {
		constructor(e = [], t = Ja) {
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
})), X = 11102230246251565e-32, Z = 134217729, Za = 3.000000000000001 * X;
function Qa(e, t, n, r, i) {
	let a, o, s, c, l = t[0], u = r[0], d = 0, f = 0;
	u > l == u > -l ? (a = l, l = t[++d]) : (a = u, u = r[++f]);
	let p = 0;
	if (d < e && f < n) for (u > l == u > -l ? (o = l + a, s = a - (o - l), l = t[++d]) : (o = u + a, s = a - (o - u), u = r[++f]), a = o, s !== 0 && (i[p++] = s); d < e && f < n;) u > l == u > -l ? (o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d]) : (o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f]), a = o, s !== 0 && (i[p++] = s);
	for (; d < e;) o = a + l, c = o - a, s = a - (o - c) + (l - c), l = t[++d], a = o, s !== 0 && (i[p++] = s);
	for (; f < n;) o = a + u, c = o - a, s = a - (o - c) + (u - c), u = r[++f], a = o, s !== 0 && (i[p++] = s);
	return (a !== 0 || p === 0) && (i[p++] = a), p;
}
function $a(e, t) {
	let n = t[0];
	for (let r = 1; r < e; r++) n += t[r];
	return n;
}
function Q(e) {
	return new Float64Array(e);
}
//#endregion
//#region ../node_modules/robust-predicates/esm/orient2d.js
var eo = (3 + 16 * X) * X, to = (2 + 12 * X) * X, no = (9 + 64 * X) * X * X, ro = Q(4), io = Q(8), ao = Q(12), oo = Q(16), $ = Q(4);
function so(e, t, n, r, i, a, o) {
	let s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e - i, E = n - i, D = t - a, O = r - a;
	b = T * O, f = Z * T, p = f - (f - T), m = T - p, f = Z * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = D * E, f = Z * D, p = f - (f - D), m = D - p, f = Z * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, ro[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, ro[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, ro[2] = v - (w - d) + (_ - d), ro[3] = w;
	let k = $a(4, ro), A = to * o;
	if (k >= A || -k >= A || (d = e - T, s = e - (T + d) + (d - i), d = n - E, l = n - (E + d) + (d - i), d = t - D, c = t - (D + d) + (d - a), d = r - O, u = r - (O + d) + (d - a), s === 0 && c === 0 && l === 0 && u === 0) || (A = no * o + Za * Math.abs(k), k += T * u + O * s - (D * l + E * c), k >= A || -k >= A)) return k;
	b = s * O, f = Z * s, p = f - (f - s), m = s - p, f = Z * O, h = f - (f - O), g = O - h, x = m * g - (b - p * h - m * h - p * g), S = c * E, f = Z * c, p = f - (f - c), m = c - p, f = Z * E, h = f - (f - E), g = E - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, $[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, $[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, $[2] = v - (w - d) + (_ - d), $[3] = w;
	let ee = Qa(4, ro, 4, $, io);
	b = T * u, f = Z * T, p = f - (f - T), m = T - p, f = Z * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = D * l, f = Z * D, p = f - (f - D), m = D - p, f = Z * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, $[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, $[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, $[2] = v - (w - d) + (_ - d), $[3] = w;
	let te = Qa(ee, io, 4, $, ao);
	return b = s * u, f = Z * s, p = f - (f - s), m = s - p, f = Z * u, h = f - (f - u), g = u - h, x = m * g - (b - p * h - m * h - p * g), S = c * l, f = Z * c, p = f - (f - c), m = c - p, f = Z * l, h = f - (f - l), g = l - h, C = m * g - (S - p * h - m * h - p * g), _ = x - C, d = x - _, $[0] = x - (_ + d) + (d - C), v = b + _, d = v - b, y = b - (v - d) + (_ - d), _ = y - S, d = y - _, $[1] = y - (_ + d) + (d - S), w = v + _, d = w - v, $[2] = v - (w - d) + (_ - d), $[3] = w, oo[Qa(te, ao, 4, $, oo) - 1];
}
function co(e, t, n, r, i, a) {
	let o = (t - a) * (n - i), s = (e - i) * (r - a), c = o - s;
	if (o === 0 || s === 0 || o > 0 != s > 0) return c;
	let l = Math.abs(o + s);
	return Math.abs(c) >= eo * l ? c : -so(e, t, n, r, i, a, l);
}
//#endregion
//#region ../node_modules/@turf/line-intersect/dist/esm/index.js
(7 + 56 * X) * X, (3 + 28 * X) * X, (26 + 288 * X) * X * X, Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(8), Q(8), Q(8), Q(4), Q(8), Q(8), Q(8), Q(12), Q(192), Q(192), (10 + 96 * X) * X, (4 + 48 * X) * X, (44 + 576 * X) * X * X, Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(8), Q(8), Q(8), Q(8), Q(8), Q(8), Q(8), Q(8), Q(8), Q(4), Q(4), Q(4), Q(8), Q(16), Q(16), Q(16), Q(32), Q(32), Q(48), Q(64), Q(1152), Q(1152), (16 + 224 * X) * X, (5 + 72 * X) * X, (71 + 1408 * X) * X * X, Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(4), Q(24), Q(24), Q(24), Q(24), Q(24), Q(24), Q(24), Q(24), Q(24), Q(24), Q(1152), Q(1152), Q(1152), Q(1152), Q(1152), Q(2304), Q(2304), Q(3456), Q(5760), Q(8), Q(8), Q(8), Q(16), Q(24), Q(48), Q(48), Q(96), Q(192), Q(384), Q(384), Q(384), Q(768), Q(96), Q(96), Q(96), Q(1152), Xa();
function lo(e, t) {
	let n = new Ya([], uo);
	return po(e, n), yo(n, t);
}
function uo(e, t) {
	return e.p.x > t.p.x ? 1 : e.p.x < t.p.x || e.p.x === t.p.x && (e.featureId !== t.featureId || e.ringId !== t.ringId) && e.isLeftEndpoint && !t.isLeftEndpoint ? -1 : e.p.y === t.p.y || e.p.y > t.p.y ? 1 : -1;
}
function fo(e, t) {
	return e.rightSweepEvent.p.x > t.rightSweepEvent.p.x ? 1 : e.rightSweepEvent.p.x < t.rightSweepEvent.p.x ? -1 : e.rightSweepEvent.p.y === t.rightSweepEvent.p.y || e.rightSweepEvent.p.y < t.rightSweepEvent.p.y ? 1 : -1;
}
function po(e, t) {
	if (e.type === "FeatureCollection") {
		let n = e.features;
		for (let e = 0; e < n.length; e++) _o(n[e], t);
	} else _o(e, t);
}
var mo = 0, ho = 0, go = 0;
function _o(e, t) {
	let n = e.type === "Feature" ? e.geometry : e, r = n.coordinates;
	(n.type === "Polygon" || n.type === "MultiLineString") && (r = [r]), n.type === "LineString" && (r = [[r]]);
	for (let e = 0; e < r.length; e++) for (let n = 0; n < r[e].length; n++) {
		let i = r[e][n][0], a = null;
		ho += 1;
		for (let o = 0; o < r[e][n].length - 1; o++) {
			a = r[e][n][o + 1];
			let s = new vo(i, mo, ho, go), c = new vo(a, mo, ho, go + 1);
			s.otherEvent = c, c.otherEvent = s, uo(s, c) > 0 ? (c.isLeftEndpoint = !0, s.isLeftEndpoint = !1) : (s.isLeftEndpoint = !0, c.isLeftEndpoint = !1), t.push(s), t.push(c), i = a, go += 1;
		}
	}
	mo += 1;
}
var vo = class {
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
function yo(e, t = !1) {
	let n = [], r = new Ya([], fo);
	for (; e.length;) {
		let i = e.pop();
		if (i.isLeftEndpoint) {
			let e = new bo(i);
			for (let a = 0; a < r.data.length; a++) {
				let o = r.data[a];
				if (t && o.leftSweepEvent.featureId === i.featureId) continue;
				let s = xo(e, o);
				s !== !1 && n.push(s);
			}
			r.push(e);
		} else i.isLeftEndpoint === !1 && r.pop();
	}
	return n;
}
var bo = class {
	constructor(e) {
		this.leftSweepEvent = e, this.rightSweepEvent = e.otherEvent;
	}
};
function xo(e, t) {
	if (e === null || t === null) return !1;
	let n = e.leftSweepEvent.p.x, r = e.leftSweepEvent.p.y, i = e.rightSweepEvent.p.x, a = e.rightSweepEvent.p.y, o = t.leftSweepEvent.p.x, s = t.leftSweepEvent.p.y, c = t.rightSweepEvent.p.x, l = t.rightSweepEvent.p.y, u = co(n, r, i, a, o, s), d = co(n, r, i, a, c, l);
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
function So(e, t, n = {}) {
	let { removeDuplicates: r = !0, ignoreSelfIntersections: i = !0 } = n, a = [];
	e.type === "FeatureCollection" ? a = a.concat(e.features) : e.type === "Feature" ? a.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && a.push(xa(e)), t.type === "FeatureCollection" ? a = a.concat(t.features) : t.type === "Feature" ? a.push(t) : (t.type === "LineString" || t.type === "Polygon" || t.type === "MultiLineString" || t.type === "MultiPolygon") && a.push(xa(t));
	let o = lo(wa(a), i), s = [];
	if (r) {
		let e = {};
		o.forEach((t) => {
			let n = t.join(",");
			e[n] || (e[n] = !0, s.push(t));
		});
	} else s = o;
	return wa(s.map((e) => Sa(e)));
}
//#endregion
//#region ../node_modules/@turf/polygon-to-line/dist/esm/index.js
function Co(e, t = {}) {
	let n = Oa(e);
	switch (!t.properties && e.type === "Feature" && (t.properties = e.properties), n.type) {
		case "Polygon": return wo(n, t);
		case "MultiPolygon": return To(n, t);
		default: throw Error("invalid poly");
	}
}
function wo(e, t = {}) {
	let n = Oa(e).coordinates;
	return Eo(n, t.properties ? t.properties : e.type === "Feature" ? e.properties : {});
}
function To(e, t = {}) {
	let n = Oa(e).coordinates, r = t.properties ? t.properties : e.type === "Feature" ? e.properties : {}, i = [];
	return n.forEach((e) => {
		i.push(Eo(e, r));
	}), wa(i);
}
function Eo(e, t) {
	return e.length > 1 ? Ta(e, t) : Ca(e[0], t);
}
//#endregion
//#region ../node_modules/@turf/boolean-disjoint/dist/esm/index.js
function Do(e, t, { ignoreSelfIntersections: n = !0 } = { ignoreSelfIntersections: !0 }) {
	let r = !0;
	return ja(e, (e) => {
		ja(t, (t) => {
			if (r === !1) return !1;
			r = Oo(e.geometry, t.geometry, n);
		});
	}), r;
}
function Oo(e, t, n) {
	switch (e.type) {
		case "Point":
			switch (t.type) {
				case "Point": return !Po(e.coordinates, t.coordinates);
				case "LineString": return !ko(t, e);
				case "Polygon": return !Ka(e, t);
			}
			break;
		case "LineString":
			switch (t.type) {
				case "Point": return !ko(e, t);
				case "LineString": return !Ao(e, t, n);
				case "Polygon": return !jo(t, e, n);
			}
			break;
		case "Polygon": switch (t.type) {
			case "Point": return !Ka(t, e);
			case "LineString": return !jo(e, t, n);
			case "Polygon": return !Mo(t, e, n);
		}
	}
	return !1;
}
function ko(e, t) {
	for (let n = 0; n < e.coordinates.length - 1; n++) if (No(e.coordinates[n], e.coordinates[n + 1], t.coordinates)) return !0;
	return !1;
}
function Ao(e, t, n) {
	if (So(e, t, { ignoreSelfIntersections: n }).features.length > 0) return !0;
	for (let n of e.coordinates) if (ko(t, {
		type: "Point",
		coordinates: n
	})) return !0;
	for (let n of t.coordinates) if (ko(e, {
		type: "Point",
		coordinates: n
	})) return !0;
	return !1;
}
function jo(e, t, n) {
	for (let n of t.coordinates) if (Ka(n, e)) return !0;
	return So(t, Co(e), { ignoreSelfIntersections: n }).features.length > 0;
}
function Mo(e, t, n) {
	for (let n of e.coordinates[0]) if (Ka(n, t)) return !0;
	for (let n of t.coordinates[0]) if (Ka(n, e)) return !0;
	return So(Co(e), Co(t), { ignoreSelfIntersections: n }).features.length > 0;
}
function No(e, t, n) {
	let r = n[0] - e[0], i = n[1] - e[1], a = t[0] - e[0], o = t[1] - e[1];
	return r * o - i * a === 0 ? Math.abs(a) >= Math.abs(o) ? a > 0 ? e[0] <= n[0] && n[0] <= t[0] : t[0] <= n[0] && n[0] <= e[0] : o > 0 ? e[1] <= n[1] && n[1] <= t[1] : t[1] <= n[1] && n[1] <= e[1] : !1;
}
function Po(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
//#endregion
//#region ../node_modules/@turf/boolean-intersects/dist/esm/index.js
function Fo(e, t, { ignoreSelfIntersections: n = !0 } = {}) {
	return !Do(e, t, { ignoreSelfIntersections: n });
}
//#endregion
//#region ../node_modules/quickselect/index.js
function Io(e, t, n = 0, r = e.length - 1, i = Ro) {
	for (; r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1);
			Io(e, t, Math.max(n, Math.floor(t - o * c / a + l)), Math.min(r, Math.floor(t + (a - o) * c / a + l)), i);
		}
		let a = e[t], o = n, s = r;
		for (Lo(e, n, t), i(e[r], a) > 0 && Lo(e, n, r); o < s;) {
			for (Lo(e, o, s), o++, s--; i(e[o], a) < 0;) o++;
			for (; i(e[s], a) > 0;) s--;
		}
		i(e[n], a) === 0 ? Lo(e, n, s) : (s++, Lo(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
}
function Lo(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
function Ro(e, t) {
	return e < t ? -1 : +(e > t);
}
//#endregion
//#region ../node_modules/rbush/index.js
var zo = class {
	constructor(e = 9) {
		this._maxEntries = Math.max(4, e), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * .4)), this.clear();
	}
	all() {
		return this._all(this.data, []);
	}
	search(e) {
		let t = this.data, n = [];
		if (!Zo(e, t)) return n;
		let r = this.toBBox, i = [];
		for (; t;) {
			for (let a = 0; a < t.children.length; a++) {
				let o = t.children[a], s = t.leaf ? r(o) : o;
				Zo(e, s) && (t.leaf ? n.push(o) : Xo(e, s) ? this._all(o, n) : i.push(o));
			}
			t = i.pop();
		}
		return n;
	}
	collides(e) {
		let t = this.data;
		if (!Zo(e, t)) return !1;
		let n = [];
		for (; t;) {
			for (let r = 0; r < t.children.length; r++) {
				let i = t.children[r], a = t.leaf ? this.toBBox(i) : i;
				if (Zo(e, a)) {
					if (t.leaf || Xo(e, a)) return !0;
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
		return this.data = Qo([]), this;
	}
	remove(e, t) {
		if (!e) return this;
		let n = this.data, r = this.toBBox(e), i = [], a = [], o, s, c;
		for (; n || i.length;) {
			if (n || (n = i.pop(), s = i[i.length - 1], o = a.pop(), c = !0), n.leaf) {
				let r = Bo(e, n.children, t);
				if (r !== -1) return n.children.splice(r, 1), i.push(n), this._condense(i), this;
			}
			!c && !n.leaf && Xo(n, r) ? (i.push(n), a.push(o), o = 0, s = n, n = n.children[0]) : s ? (o++, n = s.children[o], c = !1) : n = null;
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
		if (i <= a) return o = Qo(e.slice(t, n + 1)), Vo(o, this.toBBox), o;
		r || (r = Math.ceil(Math.log(i) / Math.log(a)), a = Math.ceil(i / a ** (r - 1))), o = Qo([]), o.leaf = !1, o.height = r;
		let s = Math.ceil(i / a), c = s * Math.ceil(Math.sqrt(a));
		$o(e, t, n, c, this.compareMinX);
		for (let i = t; i <= n; i += c) {
			let t = Math.min(i + c - 1, n);
			$o(e, i, t, s, this.compareMinY);
			for (let n = i; n <= t; n += s) {
				let i = Math.min(n + s - 1, t);
				o.children.push(this._build(e, n, i, r - 1));
			}
		}
		return Vo(o, this.toBBox), o;
	}
	_chooseSubtree(e, t, n, r) {
		for (; r.push(t), !(t.leaf || r.length - 1 === n);) {
			let n = Infinity, r = Infinity, i;
			for (let a = 0; a < t.children.length; a++) {
				let o = t.children[a], s = Ko(o), c = Jo(e, o) - s;
				c < r ? (r = c, n = s < n ? s : n, i = o) : c === r && s < n && (n = s, i = o);
			}
			t = i || t.children[0];
		}
		return t;
	}
	_insert(e, t, n) {
		let r = n ? e : this.toBBox(e), i = [], a = this._chooseSubtree(r, this.data, t, i);
		for (a.children.push(e), Uo(a, r); t >= 0 && i[t].children.length > this._maxEntries;) this._split(i, t), t--;
		this._adjustParentBBoxes(r, i, t);
	}
	_split(e, t) {
		let n = e[t], r = n.children.length, i = this._minEntries;
		this._chooseSplitAxis(n, i, r);
		let a = this._chooseSplitIndex(n, i, r), o = Qo(n.children.splice(a, n.children.length - a));
		o.height = n.height, o.leaf = n.leaf, Vo(n, this.toBBox), Vo(o, this.toBBox), t ? e[t - 1].children.push(o) : this._splitRoot(n, o);
	}
	_splitRoot(e, t) {
		this.data = Qo([e, t]), this.data.height = e.height + 1, this.data.leaf = !1, Vo(this.data, this.toBBox);
	}
	_chooseSplitIndex(e, t, n) {
		let r, i = Infinity, a = Infinity;
		for (let o = t; o <= n - t; o++) {
			let t = Ho(e, 0, o, this.toBBox), s = Ho(e, o, n, this.toBBox), c = Yo(t, s), l = Ko(t) + Ko(s);
			c < i ? (i = c, r = o, a = l < a ? l : a) : c === i && l < a && (a = l, r = o);
		}
		return r || n - t;
	}
	_chooseSplitAxis(e, t, n) {
		let r = e.leaf ? this.compareMinX : Wo, i = e.leaf ? this.compareMinY : Go;
		this._allDistMargin(e, t, n, r) < this._allDistMargin(e, t, n, i) && e.children.sort(r);
	}
	_allDistMargin(e, t, n, r) {
		e.children.sort(r);
		let i = this.toBBox, a = Ho(e, 0, t, i), o = Ho(e, n - t, n, i), s = qo(a) + qo(o);
		for (let r = t; r < n - t; r++) {
			let t = e.children[r];
			Uo(a, e.leaf ? i(t) : t), s += qo(a);
		}
		for (let r = n - t - 1; r >= t; r--) {
			let t = e.children[r];
			Uo(o, e.leaf ? i(t) : t), s += qo(o);
		}
		return s;
	}
	_adjustParentBBoxes(e, t, n) {
		for (let r = n; r >= 0; r--) Uo(t[r], e);
	}
	_condense(e) {
		for (let t = e.length - 1, n; t >= 0; t--) e[t].children.length === 0 ? t > 0 ? (n = e[t - 1].children, n.splice(n.indexOf(e[t]), 1)) : this.clear() : Vo(e[t], this.toBBox);
	}
};
function Bo(e, t, n) {
	if (!n) return t.indexOf(e);
	for (let r = 0; r < t.length; r++) if (n(e, t[r])) return r;
	return -1;
}
function Vo(e, t) {
	Ho(e, 0, e.children.length, t, e);
}
function Ho(e, t, n, r, i) {
	i ||= Qo(null), i.minX = Infinity, i.minY = Infinity, i.maxX = -Infinity, i.maxY = -Infinity;
	for (let a = t; a < n; a++) {
		let t = e.children[a];
		Uo(i, e.leaf ? r(t) : t);
	}
	return i;
}
function Uo(e, t) {
	return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function Wo(e, t) {
	return e.minX - t.minX;
}
function Go(e, t) {
	return e.minY - t.minY;
}
function Ko(e) {
	return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function qo(e) {
	return e.maxX - e.minX + (e.maxY - e.minY);
}
function Jo(e, t) {
	return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function Yo(e, t) {
	let n = Math.max(e.minX, t.minX), r = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), a = Math.min(e.maxY, t.maxY);
	return Math.max(0, i - n) * Math.max(0, a - r);
}
function Xo(e, t) {
	return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function Zo(e, t) {
	return t.minX <= e.maxX && t.minY <= e.maxY && t.maxX >= e.minX && t.maxY >= e.minY;
}
function Qo(e) {
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
function $o(e, t, n, r, i) {
	let a = [t, n];
	for (; a.length;) {
		if (n = a.pop(), t = a.pop(), n - t <= r) continue;
		let o = t + Math.ceil((n - t) / r / 2) * r;
		Io(e, o, t, n, i), a.push(t, o, o, n);
	}
}
//#endregion
//#region src/utils-geojson.ts
function es(e) {
	return typeof e == "object" && !!e && "type" in e && e.type === "FeatureCollection" && "features" in e && Array.isArray(e.features);
}
function ts(e) {
	let t = ns(e);
	return t ? [(t.minLon + t.maxLon) * .5, (t.minLat + t.maxLat) * .5] : [0, 0];
}
function ns(e) {
	if (!e) return null;
	let t = Infinity, n = Infinity, r = -Infinity, i = -Infinity, a = (e) => {
		e[0] < t && (t = e[0]), e[0] > r && (r = e[0]), e[1] < n && (n = e[1]), e[1] > i && (i = e[1]);
	};
	if (e.type === "FeatureCollection") for (let t of e.features) {
		let e = t.geometry;
		e && is(e, a);
	}
	else is(e, a);
	return Number.isFinite(t) ? {
		minLon: t,
		minLat: n,
		maxLon: r,
		maxLat: i
	} : null;
}
function rs(e) {
	if (!e) return null;
	let t = as(e);
	return t ? t.centroid : null;
}
function is(e, t) {
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
		case "GeometryCollection": for (let n of e.geometries) is(n, t);
	}
}
function as(e) {
	switch (e.type) {
		case "Point": return {
			centroid: [
				e.coordinates[0],
				e.coordinates[1],
				e.coordinates[2] ?? 0
			],
			weight: 1
		};
		case "MultiPoint": return os(e.coordinates);
		case "LineString": return ss(e.coordinates);
		case "MultiLineString": return us(e.coordinates.map((e) => ss(e)));
		case "Polygon": return cs(e.coordinates);
		case "MultiPolygon": return us(e.coordinates.map((e) => cs(e)));
		case "GeometryCollection": return us(e.geometries.map((e) => as(e)));
	}
}
function os(e) {
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
function ss(e) {
	if (e.length === 0) return null;
	if (e.length === 1) return os(e);
	let t = 0, n = 0, r = 0, i = 0;
	for (let a = 0; a < e.length - 1; a++) {
		let o = e[a], s = e[a + 1], c = Math.hypot(s[0] - o[0], s[1] - o[1], (s[2] ?? 0) - (o[2] ?? 0));
		c !== 0 && (t += c, n += (o[0] + s[0]) * .5 * c, r += (o[1] + s[1]) * .5 * c, i += ((o[2] ?? 0) + (s[2] ?? 0)) * .5 * c);
	}
	return t === 0 ? os(e) : {
		centroid: [
			n / t,
			r / t,
			i / t
		],
		weight: t
	};
}
function cs(e) {
	let t = e[0];
	if (!t || t.length === 0) return null;
	let n = 0, r = 0, i = 0, a = 0;
	for (let t = 0; t < e.length; t++) {
		let o = e[t], s = ls(o);
		if (!s) continue;
		let c = Math.abs(s.signedArea) * (t === 0 ? 1 : -1);
		n += s.centroid[0] * c, r += s.centroid[1] * c, i += s.centroid[2] * c, a += c;
	}
	let o = Math.abs(a);
	return o === 0 ? os(e.flat()) : {
		centroid: [
			n / a,
			r / a,
			i / a
		],
		weight: o
	};
}
function ls(e) {
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
function us(e) {
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
function ds(e) {
	let t = e.map((e, t) => ({
		...e,
		__idx: t
	})).filter((e) => e.geometry != null), n = t.length;
	if (n === 0) return /* @__PURE__ */ new Map();
	let r = Array(n).fill(0).map((e, t) => t), i = (e) => r[e] === e ? e : r[e] = i(r[e]), a = (e, t) => {
		let n = i(e), a = i(t);
		n !== a && (r[a] = n);
	}, o = new zo(), s = Array(n);
	for (let e = 0; e < n; e++) {
		let [n, r, i, a] = Ma(t[e].geometry);
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
				Fo(t[e].geometry, t[r].geometry) && a(e, r);
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
//#region src/utils-layer.ts
function fs(e) {
	return e === "surface" || e === "water" || e === "parks" || e === "roads" || e === "buildings" || e === "points" || e === "polygons" || e === "polylines" || e === "raster";
}
function ps(e) {
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
export { ga as Camera, _a as CameraMotion, mr as ColorMap, r as ColorMapDomainStrategy, i as ColorMapInterpolator, dr as DEFAULT_COLORMAP_RESOLUTION, hr as DEFAULT_TRANSFER_FUNCTION, va as EventEmitter, ya as LAYER_TYPE_VALUES, ba as OSM_BASE_LAYER_ORDER, yr as PolylineBuilder, Ji as TriangulatorBuildingWithWindows, Wi as TriangulatorBuildings, vr as TriangulatorPoints, yi as TriangulatorPolygons, vi as TriangulatorPolylines, Yi as TriangulatorRaster, gr as buildTransferContext, _r as computeAlphaByte, ns as computeBoundingBox, rs as computeGeometryCentroid, ds as computeIntersectingClusterIds, ts as computeOrigin, Qi as heightfieldFromRaster, es as isFeatureCollection, fs as isLayerType, Zi as isNumericLike, ps as mapGeometryTypeToLayerType, Hi as normalizeBuildingFeature, br as offsetPolyline, Xi as valueAtPath };

//# sourceMappingURL=autk-core.js.map