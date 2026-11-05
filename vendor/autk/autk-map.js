//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = 64, r = 12, i = /* @__PURE__ */ function(e) {
	return e.USER = "user", e.MIN_MAX = "minMax", e.PERCENTILE = "percentile", e;
}({}), a = /* @__PURE__ */ function(e) {
	return e.CAT_ACCENT = "schemeAccent", e.CAT_DARK2 = "schemeDark2", e.CAT_CATEGORY10 = "schemeCategory10", e.CAT_OBSERVABLE10 = "schemeObservable10", e.CAT_PAIRED = "schemePaired", e.CAT_PASTEL1 = "schemePastel1", e.CAT_PASTEL2 = "schemePastel2", e.CAT_SET1 = "schemeSet1", e.CAT_SET2 = "schemeSet2", e.CAT_SET3 = "schemeSet3", e.CAT_TABLEAU10 = "schemeTableau10", e.SEQ_REDS = "interpolateReds", e.SEQ_BLUES = "interpolateBlues", e.SEQ_GREENS = "interpolateGreens", e.SEQ_GREYS = "interpolateGreys", e.SEQ_ORANGES = "interpolateOranges", e.SEQ_PURPLES = "interpolatePurples", e.SEQ_TURBO = "interpolateTurbo", e.SEQ_VIRIDIS = "interpolateViridis", e.SEQ_INFERNO = "interpolateInferno", e.SEQ_MAGMA = "interpolateMagma", e.SEQ_PLASMA = "interpolatePlasma", e.SEQ_CIVIDIS = "interpolateCividis", e.SEQ_WARM = "interpolateWarm", e.SEQ_COOL = "interpolateCool", e.SEQ_CUBEHELIX_DEFAULT = "interpolateCubehelixDefault", e.SEQ_BU_GN = "interpolateBuGn", e.SEQ_BU_PU = "interpolateBuPu", e.SEQ_GN_BU = "interpolateGnBu", e.SEQ_OR_RD = "interpolateOrRd", e.SEQ_PU_BU_GN = "interpolatePuBuGn", e.SEQ_PU_BU = "interpolatePuBu", e.SEQ_PU_RD = "interpolatePuRd", e.SEQ_RD_PU = "interpolateRdPu", e.SEQ_YL_GN_BU = "interpolateYlGnBu", e.SEQ_YL_GN = "interpolateYlGn", e.SEQ_YL_OR_BR = "interpolateYlOrBr", e.SEQ_YL_OR_RD = "interpolateYlOrRd", e.DIV_BR_BG = "interpolateBrBG", e.DIV_PR_GN = "interpolatePRGn", e.DIV_PI_YG = "interpolatePiYG", e.DIV_PU_OR = "interpolatePuOr", e.DIV_RED_BLUE = "interpolateRdBu", e.DIV_RED_GREY = "interpolateRdGy", e.DIV_RED_YELLOW_BLUE = "interpolateRdYlBu", e.DIV_RED_YELLOW_GREEN = "interpolateRdYlGn", e.DIV_SPECTRAL = "interpolateSpectral", e;
}({});
//#endregion
//#region ../node_modules/d3-color/src/define.js
function o(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function s(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../node_modules/d3-color/src/color.js
function c() {}
var l = .7, u = 1 / l, d = "\\s*([+-]?\\d+)\\s*", f = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", p = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", m = /^#([0-9a-f]{3,8})$/, h = RegExp(`^rgb\\(${d},${d},${d}\\)$`), g = RegExp(`^rgb\\(${p},${p},${p}\\)$`), _ = RegExp(`^rgba\\(${d},${d},${d},${f}\\)$`), v = RegExp(`^rgba\\(${p},${p},${p},${f}\\)$`), y = RegExp(`^hsl\\(${f},${p},${p}\\)$`), b = RegExp(`^hsla\\(${f},${p},${p},${f}\\)$`), x = {
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
o(c, C, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: S,
	formatHex: S,
	formatHex8: ee,
	formatHsl: te,
	formatRgb: ne,
	toString: ne
});
function S() {
	return this.rgb().formatHex();
}
function ee() {
	return this.rgb().formatHex8();
}
function te() {
	return de(this).formatHsl();
}
function ne() {
	return this.rgb().formatRgb();
}
function C(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = m.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? re(t) : n === 3 ? new T(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ie(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ie(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = h.exec(e)) ? new T(t[1], t[2], t[3], 1) : (t = g.exec(e)) ? new T(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _.exec(e)) ? ie(t[1], t[2], t[3], t[4]) : (t = v.exec(e)) ? ie(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = y.exec(e)) ? ue(t[1], t[2] / 100, t[3] / 100, 1) : (t = b.exec(e)) ? ue(t[1], t[2] / 100, t[3] / 100, t[4]) : x.hasOwnProperty(e) ? re(x[e]) : e === "transparent" ? new T(NaN, NaN, NaN, 0) : null;
}
function re(e) {
	return new T(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ie(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new T(e, t, n, r);
}
function ae(e) {
	return e instanceof c || (e = C(e)), e ? (e = e.rgb(), new T(e.r, e.g, e.b, e.opacity)) : new T();
}
function w(e, t, n, r) {
	return arguments.length === 1 ? ae(e) : new T(e, t, n, r ?? 1);
}
function T(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
o(T, w, s(c, {
	brighter(e) {
		return e = e == null ? u : u ** +e, new T(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? l : l ** +e, new T(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new T(E(this.r), E(this.g), E(this.b), le(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: oe,
	formatHex: oe,
	formatHex8: se,
	formatRgb: ce,
	toString: ce
}));
function oe() {
	return `#${D(this.r)}${D(this.g)}${D(this.b)}`;
}
function se() {
	return `#${D(this.r)}${D(this.g)}${D(this.b)}${D((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ce() {
	let e = le(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${E(this.r)}, ${E(this.g)}, ${E(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function le(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function E(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function D(e) {
	return e = E(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ue(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new O(e, t, n, r);
}
function de(e) {
	if (e instanceof O) return new O(e.h, e.s, e.l, e.opacity);
	if (e instanceof c || (e = C(e)), !e) return new O();
	if (e instanceof O) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, l = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= l < .5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new O(o, s, l, e.opacity);
}
function fe(e, t, n, r) {
	return arguments.length === 1 ? de(e) : new O(e, t, n, r ?? 1);
}
function O(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
o(O, fe, s(c, {
	brighter(e) {
		return e = e == null ? u : u ** +e, new O(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? l : l ** +e, new O(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new T(he(e >= 240 ? e - 240 : e + 120, i, r), he(e, i, r), he(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new O(pe(this.h), me(this.s), me(this.l), le(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = le(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${pe(this.h)}, ${me(this.s) * 100}%, ${me(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function pe(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function me(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function he(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../node_modules/d3-color/src/math.js
var ge = Math.PI / 180, _e = 180 / Math.PI, ve = -.14861, ye = 1.78277, be = -.29227, xe = -.90649, Se = 1.97294, Ce = Se * xe, we = Se * ye, Te = ye * be - xe * ve;
function Ee(e) {
	if (e instanceof De) return new De(e.h, e.s, e.l, e.opacity);
	e instanceof T || (e = ae(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (Te * r + Ce * t - we * n) / (Te + Ce - we), a = r - i, o = (Se * (n - i) - be * a) / xe, s = Math.sqrt(o * o + a * a) / (Se * i * (1 - i)), c = s ? Math.atan2(o, a) * _e - 120 : NaN;
	return new De(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function k(e, t, n, r) {
	return arguments.length === 1 ? Ee(e) : new De(e, t, n, r ?? 1);
}
function De(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
o(De, k, s(c, {
	brighter(e) {
		return e = e == null ? u : u ** +e, new De(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? l : l ** +e, new De(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * ge, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new T(255 * (t + n * (ve * r + ye * i)), 255 * (t + n * (be * r + xe * i)), 255 * (t + Se * r * n), this.opacity);
	}
}));
//#endregion
//#region ../node_modules/d3-format/src/formatDecimal.js
function Oe(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ke(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../node_modules/d3-format/src/exponent.js
function Ae(e) {
	return e = ke(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../node_modules/d3-format/src/formatGroup.js
function je(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../node_modules/d3-format/src/formatNumerals.js
function Me(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../node_modules/d3-format/src/formatSpecifier.js
var Ne = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Pe(e) {
	if (!(t = Ne.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new Fe({
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
Pe.prototype = Fe.prototype;
function Fe(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Fe.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region ../node_modules/d3-format/src/formatTrim.js
function Ie(e) {
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
var Le;
function Re(e, t) {
	var n = ke(e, t);
	if (!n) return Le = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (Le = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + ke(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../node_modules/d3-format/src/formatRounded.js
function ze(e, t) {
	var n = ke(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../node_modules/d3-format/src/formatTypes.js
var Be = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: Oe,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => ze(e * 100, t),
	r: ze,
	s: Re,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../node_modules/d3-format/src/identity.js
function Ve(e) {
	return e;
}
//#endregion
//#region ../node_modules/d3-format/src/locale.js
var He = Array.prototype.map, Ue = [
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
function We(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Ve : je(He.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ve : Me(He.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = Pe(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Be[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = Be[y], ee = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function te(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var te = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = Ie(e)), te && +e == 0 && f !== "+" && (te = !1), n = (te ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && Le !== void 0 ? Ue[8 + Le / 3] : "") + r + (te && f === "(" ? ")" : ""), ee) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var ne = n.length + e.length + r.length, C = ne < h ? Array(h - ne + 1).join(u) : "";
			switch (g && m && (e = t(C + e, C.length ? h - r.length : Infinity), C = ""), d) {
				case "<":
					e = n + e + r + C;
					break;
				case "=":
					e = n + C + e + r;
					break;
				case "^":
					e = C.slice(0, ne = C.length >> 1) + n + e + r + C.slice(ne);
					break;
				default: e = C + n + e + r;
			}
			return a(e);
		}
		return te.toString = function() {
			return e + "";
		}, te;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(Ae(t) / 3))) * 3, r = 10 ** -n, i = l((e = Pe(e), e.type = "f", e), { suffix: Ue[8 + n / 3] });
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
var Ge, Ke, qe;
Je({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Je(e) {
	return Ge = We(e), Ke = Ge.format, qe = Ge.formatPrefix, Ge;
}
//#endregion
//#region ../node_modules/d3-format/src/precisionFixed.js
function Ye(e) {
	return Math.max(0, -Ae(Math.abs(e)));
}
//#endregion
//#region ../node_modules/d3-format/src/precisionPrefix.js
function Xe(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ae(t) / 3))) * 3 - Ae(Math.abs(e)));
}
//#endregion
//#region ../node_modules/d3-format/src/precisionRound.js
function Ze(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ae(t) - Ae(e)) + 1;
}
//#endregion
//#region ../node_modules/d3-array/src/ticks.js
var Qe = Math.sqrt(50), $e = Math.sqrt(10), et = Math.sqrt(2);
function tt(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= Qe ? 10 : a >= $e ? 5 : a >= et ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? tt(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function nt(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? tt(t, e, n) : tt(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) {
		if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
		else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	} else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function rt(e, t, n) {
	return t = +t, e = +e, n = +n, tt(e, t, n)[2];
}
function it(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? rt(t, e, n) : rt(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../node_modules/d3-scale/src/init.js
function at(e, t) {
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
function ot(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function st(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return ot((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/constant.js
var ct = (e) => () => e;
//#endregion
//#region ../node_modules/d3-interpolate/src/color.js
function lt(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function ut(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function dt(e, t) {
	var n = t - e;
	return n ? lt(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : ct(isNaN(e) ? t : e);
}
function ft(e) {
	return (e = +e) == 1 ? pt : function(t, n) {
		return n - t ? ut(t, n, e) : ct(isNaN(t) ? n : t);
	};
}
function pt(e, t) {
	var n = t - e;
	return n ? lt(e, n) : ct(isNaN(e) ? t : e);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/rgb.js
var mt = (function e(t) {
	var n = ft(t);
	function r(e, t) {
		var r = n((e = w(e)).r, (t = w(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = pt(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function ht(e) {
	return function(t) {
		for (var n = t.length, r = Array(n), i = Array(n), a = Array(n), o = 0, s; o < n; ++o) s = w(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var gt = ht(st);
//#endregion
//#region ../node_modules/d3-interpolate/src/numberArray.js
function _t(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function vt(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/array.js
function yt(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = Dt(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/date.js
function bt(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/number.js
function A(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/object.js
function xt(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Dt(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/string.js
var St = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ct = new RegExp(St.source, "g");
function wt(e) {
	return function() {
		return e;
	};
}
function Tt(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Et(e, t) {
	var n = St.lastIndex = Ct.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = St.exec(e)) && (i = Ct.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: A(r, i)
	})), n = Ct.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Tt(c[0].x) : wt(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../node_modules/d3-interpolate/src/value.js
function Dt(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? ct(t) : (n === "number" ? A : n === "string" ? (r = C(t)) ? (t = r, mt) : Et : t instanceof C ? mt : t instanceof Date ? bt : vt(t) ? _t : Array.isArray(t) ? yt : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? xt : A)(e, t);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/round.js
function Ot(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/transform/decompose.js
var kt = 180 / Math.PI, At = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function jt(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * kt,
		skewX: Math.atan(c) * kt,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/transform/parse.js
var Mt;
function Nt(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? At : jt(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Pt(e) {
	return e == null || (Mt ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Mt.setAttribute("transform", e), !(e = Mt.transform.baseVal.consolidate())) ? At : (e = e.matrix, jt(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../node_modules/d3-interpolate/src/transform/index.js
function Ft(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: A(e, i)
			}, {
				i: c - 2,
				x: A(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: A(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: A(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: A(e, n)
			}, {
				i: s - 2,
				x: A(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var It = Ft(Nt, "px, ", "px)", "deg)"), Lt = Ft(Pt, ", ", ")", ")");
//#endregion
//#region ../node_modules/d3-interpolate/src/cubehelix.js
function Rt(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = k(t)).h, (r = k(r)).h), a = pt(t.s, r.s), o = pt(t.l, r.l), s = pt(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
Rt(dt);
var zt = Rt(pt);
//#endregion
//#region ../node_modules/d3-interpolate/src/piecewise.js
function Bt(e, t) {
	t === void 0 && (t = e, e = Dt);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../node_modules/d3-scale/src/continuous.js
function Vt(e) {
	return e;
}
//#endregion
//#region ../node_modules/d3-scale/src/tickFormat.js
function Ht(e, t, n, r) {
	var i = it(e, t, n), a;
	switch (r = Pe(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Xe(i, o)) && (r.precision = a), qe(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Ze(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = Ye(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return Ke(r);
}
//#endregion
//#region ../node_modules/d3-scale/src/linear.js
function Ut(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return nt(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Ht(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = rt(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
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
function Wt() {
	var e = 0, t = 1, n, r, i, a, o = Vt, s = !1, c;
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
	return l.range = u(Dt), l.rangeRound = u(Ot), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Gt(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Kt() {
	var e = Ut(Wt()(Vt));
	return e.copy = function() {
		return Gt(e, Kt());
	}, at.apply(e, arguments);
}
//#endregion
//#region ../node_modules/d3-scale/src/diverging.js
function qt() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = Vt, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = Bt(e, [
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
	return p.range = m(Dt), p.rangeRound = m(Ot), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Jt() {
	var e = Ut(qt()(Vt));
	return e.copy = function() {
		return Gt(e, Jt());
	}, at.apply(e, arguments);
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/colors.js
function j(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/categorical/category10.js
var Yt = j("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Xt = j("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Zt = j("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Qt = j("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), $t = j("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), en = j("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), tn = j("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), nn = j("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), rn = j("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), an = j("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), on = j("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), M = (e) => gt(e[e.length - 1]), sn = [
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
].map(j), cn = M(sn), ln = [
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
].map(j), un = M(ln), dn = [
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
].map(j), fn = M(dn), pn = [
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
].map(j), mn = M(pn), hn = [
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
].map(j), gn = M(hn), _n = [
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
].map(j), vn = M(_n), yn = [
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
].map(j), bn = M(yn), xn = [
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
].map(j), Sn = M(xn), Cn = [
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
].map(j), wn = M(Cn), Tn = [
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
].map(j), En = M(Tn), Dn = [
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
].map(j), On = M(Dn), kn = [
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
].map(j), An = M(kn), jn = [
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
].map(j), Mn = M(jn), Nn = [
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
].map(j), Pn = M(Nn), Fn = [
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
].map(j), In = M(Fn), Ln = [
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
].map(j), Rn = M(Ln), zn = [
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
].map(j), Bn = M(zn), Vn = [
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
].map(j), Hn = M(Vn), Un = [
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
].map(j), Wn = M(Un), Gn = [
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
].map(j), Kn = M(Gn), qn = [
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
].map(j), Jn = M(qn), Yn = [
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
].map(j), Xn = M(Yn), Zn = [
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
].map(j), Qn = M(Zn), $n = [
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
].map(j), er = M($n), tr = [
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
].map(j), nr = M(tr), rr = [
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
].map(j), ir = M(rr), ar = [
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
].map(j), or = M(ar);
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function sr(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cr = zt(k(300, .5, 0), k(-240, .5, 1)), lr = zt(k(-100, .75, .35), k(80, 1.5, .8)), ur = zt(k(260, .75, .35), k(80, 1.5, .8)), dr = k();
function fr(e) {
	(e < 0 || e > 1) && (e -= Math.floor(e));
	var t = Math.abs(e - .5);
	return dr.h = 360 * e - 100, dr.s = 1.5 - 1.5 * t, dr.l = .8 - .9 * t, dr + "";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var pr = w(), mr = Math.PI / 3, hr = Math.PI * 2 / 3;
function gr(e) {
	var t;
	return e = (.5 - e) * Math.PI, pr.r = 255 * (t = Math.sin(e)) * t, pr.g = 255 * (t = Math.sin(e + mr)) * t, pr.b = 255 * (t = Math.sin(e + hr)) * t, pr + "";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function _r(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function vr(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
var yr = vr(j("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), br = vr(j("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), xr = vr(j("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Sr = vr(j("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), Cr = /* @__PURE__ */ t({
	interpolateBlues: () => Xn,
	interpolateBrBG: () => cn,
	interpolateBuGn: () => En,
	interpolateBuPu: () => On,
	interpolateCividis: () => sr,
	interpolateCool: () => ur,
	interpolateCubehelixDefault: () => cr,
	interpolateGnBu: () => An,
	interpolateGreens: () => Qn,
	interpolateGreys: () => er,
	interpolateInferno: () => xr,
	interpolateMagma: () => br,
	interpolateOrRd: () => Mn,
	interpolateOranges: () => or,
	interpolatePRGn: () => un,
	interpolatePiYG: () => fn,
	interpolatePlasma: () => Sr,
	interpolatePuBu: () => In,
	interpolatePuBuGn: () => Pn,
	interpolatePuOr: () => mn,
	interpolatePuRd: () => Rn,
	interpolatePurples: () => nr,
	interpolateRainbow: () => fr,
	interpolateRdBu: () => gn,
	interpolateRdGy: () => vn,
	interpolateRdPu: () => Bn,
	interpolateRdYlBu: () => bn,
	interpolateRdYlGn: () => Sn,
	interpolateReds: () => ir,
	interpolateSinebow: () => gr,
	interpolateSpectral: () => wn,
	interpolateTurbo: () => _r,
	interpolateViridis: () => yr,
	interpolateWarm: () => lr,
	interpolateYlGn: () => Wn,
	interpolateYlGnBu: () => Hn,
	interpolateYlOrBr: () => Kn,
	interpolateYlOrRd: () => Jn,
	schemeAccent: () => Xt,
	schemeBlues: () => Yn,
	schemeBrBG: () => sn,
	schemeBuGn: () => Tn,
	schemeBuPu: () => Dn,
	schemeCategory10: () => Yt,
	schemeDark2: () => Zt,
	schemeGnBu: () => kn,
	schemeGreens: () => Zn,
	schemeGreys: () => $n,
	schemeObservable10: () => Qt,
	schemeOrRd: () => jn,
	schemeOranges: () => ar,
	schemePRGn: () => ln,
	schemePaired: () => $t,
	schemePastel1: () => en,
	schemePastel2: () => tn,
	schemePiYG: () => dn,
	schemePuBu: () => Fn,
	schemePuBuGn: () => Nn,
	schemePuOr: () => pn,
	schemePuRd: () => Ln,
	schemePurples: () => tr,
	schemeRdBu: () => hn,
	schemeRdGy: () => _n,
	schemeRdPu: () => zn,
	schemeRdYlBu: () => yn,
	schemeRdYlGn: () => xn,
	schemeReds: () => rr,
	schemeSet1: () => nn,
	schemeSet2: () => rn,
	schemeSet3: () => an,
	schemeSpectral: () => Cn,
	schemeTableau10: () => on,
	schemeYlGn: () => Un,
	schemeYlGnBu: () => Vn,
	schemeYlOrBr: () => Gn,
	schemeYlOrRd: () => qn
}), wr = /* @__PURE__ */ new Set([
	a.CAT_ACCENT,
	a.CAT_DARK2,
	a.CAT_CATEGORY10,
	a.CAT_OBSERVABLE10,
	a.CAT_PAIRED,
	a.CAT_PASTEL1,
	a.CAT_PASTEL2,
	a.CAT_SET1,
	a.CAT_SET2,
	a.CAT_SET3,
	a.CAT_TABLEAU10
]), Tr = /* @__PURE__ */ new Set([
	a.DIV_BR_BG,
	a.DIV_PR_GN,
	a.DIV_PI_YG,
	a.DIV_PU_OR,
	a.DIV_RED_BLUE,
	a.DIV_RED_GREY,
	a.DIV_RED_YELLOW_BLUE,
	a.DIV_RED_YELLOW_GREEN,
	a.DIV_SPECTRAL
]), N = class e {
	static getColor(t, n, r) {
		let { r: i, g: a, b: o } = w(e.buildInterpolator(n, r)(t));
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
			let { r: n, g: i, b: a } = w(e.buildInterpolator(t, r)(.5));
			return [
				n,
				i,
				a,
				1
			];
		}
		let i = e.buildInterpolator(t, r), a = [];
		for (let e = 0; e < n; e++) {
			let { r: t, g: r, b: o } = w(i(e / (n - 1)));
			a.push(t, r, o, 1);
		}
		return a;
	}
	static getColorArray(t, n = 256, r) {
		if (n <= 0) return [];
		if (n === 1) {
			let { r: n, g: i, b: a } = w(e.buildInterpolator(t, r)(.5));
			return [{
				r: n,
				g: i,
				b: a,
				alpha: 1
			}];
		}
		let i = e.buildInterpolator(t, r), a = [];
		for (let e = 0; e < n; e++) {
			let { r: t, g: r, b: o } = w(i(e / (n - 1)));
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
		return w(e.r, e.g, e.b, 1).formatHex();
	}
	static hexToRgb(e) {
		let t = w(e);
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
		return wr.has(e);
	}
	static isDiverging(e) {
		return Tr.has(e);
	}
	static getCategoricalSchemeSize(t) {
		return e.isCategorical(t) ? Cr[t].length : null;
	}
	static resolveNumericDomainFromConfig(t, n, r) {
		let a = n.domainSpec.type;
		if (a === i.USER) {
			let t = n.domainSpec.params;
			if (!t.length || t.some((e) => typeof e != "number" || !Number.isFinite(e))) throw Error("ColorMap USER domain for numeric interpolators must be number[].");
			let i = t;
			if (e.isDiverging(r)) {
				if (i.length === 3) return [
					i[0],
					i[1],
					i[2]
				];
				if (i.length === 2) {
					let e = (i[0] + i[1]) / 2;
					return [
						i[0],
						e,
						i[1]
					];
				}
				throw Error("Diverging USER domain must have 2 or 3 numeric values.");
			}
			if (i.length < 2) throw Error("Sequential USER domain must have at least 2 numeric values.");
			return [i[0], i[i.length - 1]];
		}
		let o = (ArrayBuffer.isView(t) ? Array.from(t) : t).filter((e) => Number.isFinite(e));
		if (o.length === 0) return e.isDiverging(r) ? [
			0,
			0,
			0
		] : [0, 0];
		if (a === i.PERCENTILE) {
			let [t, i] = n.domainSpec.params ?? [2, 98], a = e.computePercentile(o, t / 100), s = e.computePercentile(o, i / 100);
			return e.isDiverging(r) ? [
				a,
				e.computePercentile(o, 50 / 100),
				s
			] : [a, s];
		}
		let [s, c] = e.computeMinMaxRange(o);
		return e.isDiverging(r) ? [
			s,
			(s + c) / 2,
			c
		] : [s, c];
	}
	static resolveCategoricalDomainFromConfig(e, t) {
		return t.domainSpec.type === i.USER ? t.domainSpec.params.map((e) => String(e)) : Array.from(new Set(e.map((e) => String(e))));
	}
	static computeLabels(e) {
		if (typeof e[0] == "string") return e;
		let t = e, n = t.reduce((e, t) => Math.max(e, Math.abs(t)), 0), r = Ke(n >= 1e6 ? ".3s" : n >= 1 ? ",.2f" : ".3~g");
		return t.map((e) => r(e));
	}
	static resolveDomainFromData(t, n) {
		return e.isCategorical(n.interpolator) || n.domainSpec.type === i.USER && n.domainSpec.params.some((e) => typeof e == "string") || !ArrayBuffer.isView(t) && t.some((e) => typeof e == "string" && isNaN(Number(e))) ? e.resolveCategoricalDomainFromConfig(t, n) : e.resolveNumericDomainFromConfig(t, n, n.interpolator);
	}
	static buildInterpolator(t, n) {
		if (e.isCategorical(t)) {
			let e = Cr[t], r = n?.length ?? e.length;
			return (t) => {
				let n = Math.min(Math.round(t * (r - 1)), e.length - 1);
				return e[n];
			};
		}
		return e.isDiverging(t) ? Jt(Cr[t]).domain(n ?? [
			0,
			.5,
			1
		]) : Kt(Cr[t]).domain(n ?? [0, 1]);
	}
	static computePercentile(e, t) {
		if (e.length === 0) return 0;
		let n = (ArrayBuffer.isView(e) ? new Float32Array(e) : [...e]).sort((e, t) => e - t), r = t * (n.length - 1), i = Math.floor(r), a = Math.ceil(r);
		return n[i] + (n[a] - n[i]) * (r - i);
	}
}, Er = {
	mode: "far-zero",
	opacityMin: 0,
	opacityMax: 1,
	gamma: 1,
	zeroCenter: 0
};
function Dr(e, t) {
	let n = {
		...Er,
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
function Or(e, t) {
	if (isNaN(e)) return 0;
	let { config: n, range: r, min: i, maxAbsDistance: a } = t, o;
	o = n.mode === "linear" ? r > 0 ? (e - i) / r : 0 : n.mode === "far-zero" ? a > 0 ? Math.abs(e - n.zeroCenter) / a : 0 : a > 0 ? 1 - Math.abs(e - n.zeroCenter) / a : 1;
	let s = Math.max(0, Math.min(1, o)) ** +Math.max(1e-4, n.gamma), c = n.opacityMin + (n.opacityMax - n.opacityMin) * s;
	return Math.max(0, Math.min(255, Math.round(c * 255)));
}
//#endregion
//#region ../autk-core/src/triangulator-points.ts
var kr = class e {
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
}, Ar = class e {
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
//#region ../autk-core/src/utils-geometry.ts
function jr(e, t) {
	let n = e.filter((t, n) => {
		if (n === 0) return !0;
		let r = e[n - 1];
		return t[0] !== r[0] || t[1] !== r[1];
	});
	if (n.length < 2 || t === 0) return [];
	let r = [], i = [];
	for (let e = 0; e < n.length; e++) {
		let a = e > 0 ? n[e - 1] : null, o = n[e], s = e < n.length - 1 ? n[e + 1] : null, c = a ? Pr(a, o) : null, l = s ? Pr(o, s) : null, u = Fr(a, o, s, c, l, t, 1), d = Fr(a, o, s, c, l, t, -1);
		r.push(u), i.push(d);
	}
	let a = [...r, ...i.reverse()];
	return a.length > 0 && a.push([a[0][0], a[0][1]]), a;
}
function P(e) {
	if (e.length < 2) return [...e];
	let t = [...e], n = t[0], r = t[t.length - 1];
	return n[0] === r[0] && n[1] === r[1] && t.pop(), t;
}
function F(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let [r, i] = e[n], [a, o] = e[(n + 1) % e.length];
		t += r * o - a * i;
	}
	return t * .5;
}
function Mr(e) {
	let t = 0, n = e.length;
	for (let r = 0, i = n - 1; r < n; i = r++) {
		let n = e[r][0] - e[i][0], a = e[r][1] - e[i][1];
		t += Math.sqrt(n * n + a * a);
	}
	return t;
}
function Nr(e) {
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
function Pr(e, t) {
	let n = t[0] - e[0], r = t[1] - e[1], i = Math.hypot(n, r);
	return i === 0 ? null : [-r / i, n / i];
}
function Fr(e, t, n, r, i, a, o) {
	if (!r && !i) return t;
	if (!e || !r) return [t[0] + i[0] * a * o, t[1] + i[1] * a * o];
	if (!n || !i) return [t[0] + r[0] * a * o, t[1] + r[1] * a * o];
	let s = Ir([e[0] + r[0] * a * o, e[1] + r[1] * a * o], [t[0] + r[0] * a * o, t[1] + r[1] * a * o], [t[0] + i[0] * a * o, t[1] + i[1] * a * o], [n[0] + i[0] * a * o, n[1] + i[1] * a * o]);
	if (s) return s;
	let c = r[0] + i[0], l = r[1] + i[1], u = Math.hypot(c, l);
	return u === 0 ? [t[0] + i[0] * a * o, t[1] + i[1] * a * o] : [t[0] + c / u * a * o, t[1] + l / u * a * o];
}
function Ir(e, t, n, r) {
	let i = e[0], a = e[1], o = t[0], s = t[1], c = n[0], l = n[1], u = r[0], d = r[1], f = (i - o) * (l - d) - (a - s) * (c - u);
	if (Math.abs(f) < 1e-9) return null;
	let p = i * s - a * o, m = c * d - l * u;
	return [(p * (c - u) - (i - o) * m) / f, (p * (l - d) - (a - s) * m) / f];
}
//#endregion
//#region ../node_modules/earcut/src/earcut.js
var Lr = /* @__PURE__ */ new Set(), Rr = !1;
function I(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length;
	Lr.size && Lr.clear();
	let a = zr(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s = 0, c = 0, l = 0;
	if (r && (a = qr(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return Vr(a, o, s, c, l), o;
}
function zr(e, t, n, r, i) {
	let a = null;
	if (i === Oi(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = Ti(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = Ti(i / r | 0, e[i], e[i + 1], a);
	return a && vi(a, a.next) && (Ei(a), a = a.next), a;
}
function Br(e, t = e) {
	let n = t === e, r = e, i;
	do
		i = !1, r !== r.next && (Lr.size === 0 || !Lr.has(r)) && (vi(r, r.next) || z(r.prev, r, r.next) === 0) ? ((n || r === t) && (t = r.prev), Rr = !0, Ei(r), r = r.prev, i = !0) : (n || r !== t) && (r = r.next, i = !n);
	while (i || r !== t);
	return t;
}
function Vr(e, t, n, r, i) {
	i && di(e, n, r, i);
	let a = e, o = !1;
	for (; e.prev !== e.next;) {
		let s = e.prev, c = e.next;
		if (z(s, e, c) < 0 && (i ? Ur(e, n, r, i) : Hr(e))) t.push(s.i, e.i, c.i), Ei(e), e = c, a = c;
		else if (e = c, e === a) {
			if (Rr = !1, e = Br(e), Rr) {
				a = e;
				continue;
			}
			if (!o) {
				e = Wr(e, t), a = e, o = !0;
				continue;
			}
			Gr(e, t, n, r, i);
			break;
		}
	}
}
function Hr(e) {
	let t = e.prev, n = e, r = e.next, i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && (i !== m.x || s !== m.y) && gi(i, s, a, c, o, l, m.x, m.y) && z(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function Ur(e, t, n, r) {
	let i = e.prev, a = e, o = e.next, s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = mi(p, m, t, n, r), v = mi(h, g, t, n, r), y = e.prevZ;
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== o && (s !== y.x || u !== y.y) && gi(s, u, c, d, l, f, y.x, y.y) && z(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	let b = e.nextZ;
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== o && (s !== b.x || u !== b.y) && gi(s, u, c, d, l, f, b.x, b.y) && z(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function Wr(e, t) {
	let n = e, r = !1;
	do {
		let i = n.prev, a = n.next.next;
		yi(i, n, n.next, a, !1) && Si(i, a) && Si(a, i) && (t.push(i.i, n.i, a.i), Ei(n), Ei(n.next), n = e = a, r = !0), n = n.next;
	} while (n !== e);
	return r ? Br(n) : n;
}
function Gr(e, t, n, r, i) {
	let a = e;
	do {
		let e = a.next.next;
		for (; e !== a.prev;) {
			if (a.i !== e.i && _i(a, e)) {
				let o = wi(a, e);
				a = Br(a, a.next), o = Br(o, o.next), Vr(a, t, n, r, i), Vr(o, t, n, r, i);
				return;
			}
			e = e.next;
		}
		a = a.next;
	} while (a !== e);
}
var Kr = !1;
function qr(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = zr(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && Lr.add(o), i.push(hi(o));
	}
	i.sort(Jr), ei(e.length / r, t.length), ti(n, n), Kr = !0;
	for (let e = 0; e < i.length; e++) n = Yr(i[e], n);
	return Kr = !1, Br(n);
}
function Jr(e, t) {
	return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
}
function Yr(e, t) {
	let n = ai(e, t);
	if (!n) return t;
	let r = wi(n, e), i = r.next;
	return ti(n, i.next), Br(r, r.next), Br(n, n.next);
}
var Xr = 16, L = /* @__PURE__ */ new Float64Array(), Zr = 0, Qr = [], $r = [];
function ei(e, t) {
	let n = Math.ceil((e + 2 * t) / Xr) + t + 2;
	L.length < n * 4 && (L = new Float64Array(n * 4)), Zr = 0;
}
function ti(e, t) {
	let n = e;
	do {
		let e = Zr++;
		Qr[e] = n;
		let r = n.x, i = n.y, a = n.x, o = n.y, s = 0;
		do {
			let t = n.next;
			n.z = e, t.x < r && (r = t.x), t.x > a && (a = t.x), t.y < i && (i = t.y), t.y > o && (o = t.y), n = t;
		} while (++s < Xr && n !== t);
		$r[e] = n;
		let c = e * 4;
		L[c] = r, L[c + 1] = i, L[c + 2] = a, L[c + 3] = o;
	} while (n !== t);
}
function ni(e, t) {
	let n = e.z * 4;
	t.x < L[n] && (L[n] = t.x), t.y < L[n + 1] && (L[n + 1] = t.y), t.x > L[n + 2] && (L[n + 2] = t.x), t.y > L[n + 3] && (L[n + 3] = t.y);
}
function ri(e) {
	let t = $r[e];
	for (; t.prev.next !== t;) t = t.next;
	return $r[e] = t, t;
}
function ii(e) {
	let t = Qr[e];
	for (; t.prev.next !== t;) t = t.next;
	return Qr[e] = t, t;
}
function ai(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (vi(e, n)) return n;
	for (let t = 0, s = 0; t < Zr; t++, s += 4) {
		if (i < L[s + 1] || i > L[s + 3] || L[s] > r || L[s + 2] <= a) continue;
		let c = ri(t);
		n = ii(t);
		do {
			if (n.prev.next === n) {
				if (vi(e, n.next)) return n.next;
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
	for (let t = 0, f = 0; t < Zr; t++, f += 4) {
		if (L[f + 2] < s || L[f] > r || L[f + 3] < l || L[f + 1] > u) continue;
		let p = ri(t);
		n = ii(t);
		do {
			if (n.prev.next === n && r >= n.x && n.x >= s && r !== n.x && gi(i < c ? r : a, i, s, c, i < c ? a : r, i, n.x, n.y)) {
				let t = Math.abs(i - n.y) / (r - n.x);
				(Si(n, e) || n.y === i && n.next.y === i && n.next.x > r) && (t < d || t === d && (n.x > o.x || n.x === o.x && oi(o, n))) && (o = n, d = t);
			}
			n = n.next;
		} while (n !== p);
	}
	return o;
}
function oi(e, t) {
	return z(e.prev, e, t.prev) < 0 && z(t.next, e, e.next) < 0;
}
var R = [], si = [], ci = /* @__PURE__ */ new Uint32Array(), li = /* @__PURE__ */ new Uint32Array(), ui = /* @__PURE__ */ new Uint32Array(256);
function di(e, t, n, r) {
	let i = e, a = 0;
	do
		i.z = mi(i.x, i.y, t, n, r), R[a++] = i, i = i.next;
	while (i !== e);
	fi(a);
	let o = null;
	for (let e = 0; e < a; e++) {
		let t = R[e];
		t.prevZ = o, o && (o.nextZ = t), o = t;
	}
	o.nextZ = null, R.fill(null, 0, a), si.fill(null, 0, a);
}
function fi(e) {
	if (e <= 32) for (let t = 1; t < e; t++) {
		let e = R[t], n = e.z, r = t - 1;
		for (; r >= 0 && R[r].z > n;) R[r + 1] = R[r], r--;
		R[r + 1] = e;
	}
	else {
		ci.length < e && (ci = new Uint32Array(e), li = new Uint32Array(e), si = Array(e));
		for (let t = 0; t < e; t++) ci[t] = R[t].z;
		pi(e, R, ci, si, li, 0), pi(e, si, li, R, ci, 8), pi(e, R, ci, si, li, 16), pi(e, si, li, R, ci, 24);
	}
}
function pi(e, t, n, r, i, a) {
	ui.fill(0);
	for (let t = 0; t < e; t++) ui[n[t] >>> a & 255]++;
	let o = 0;
	for (let e = 0; e < 256; e++) {
		let t = ui[e];
		ui[e] = o, o += t;
	}
	for (let o = 0; o < e; o++) {
		let e = n[o], s = ui[e >>> a & 255]++;
		r[s] = t[o], i[s] = e;
	}
}
function mi(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function hi(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function gi(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function _i(e, t) {
	let n = vi(e, t) && z(e.prev, e, e.next) > 0 && z(t.prev, t, t.next) > 0;
	return e.next.i !== t.i && (n || Si(e, t) && Si(t, e) && (z(e.prev, e, t.prev) !== 0 || z(e, t.prev, t) !== 0)) && !xi(e, t) && (n || Ci(e, t));
}
function z(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function vi(e, t) {
	return e.x === t.x && e.y === t.y;
}
function yi(e, t, n, r, i = !0) {
	let a = z(e, t, n), o = z(e, t, r), s = z(n, r, e), c = z(n, r, t);
	return (a > 0 && o < 0 || a < 0 && o > 0) && (s > 0 && c < 0 || s < 0 && c > 0) ? !0 : i ? !!(a === 0 && bi(e, n, t) || o === 0 && bi(e, r, t) || s === 0 && bi(n, e, r) || c === 0 && bi(n, t, r)) : !1;
}
function bi(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function xi(e, t) {
	let n = Math.min(e.x, t.x), r = Math.max(e.x, t.x), i = Math.min(e.y, t.y), a = Math.max(e.y, t.y), o = e;
	do {
		let s = o.next;
		if (o.x > r && s.x > r || o.x < n && s.x < n || o.y > a && s.y > a || o.y < i && s.y < i) o = s;
		else {
			if (o.i !== e.i && s.i !== e.i && o.i !== t.i && s.i !== t.i && yi(o, s, e, t)) return !0;
			o = s;
		}
	} while (o !== e);
	return !1;
}
function Si(e, t) {
	return z(e.prev, e, e.next) < 0 ? z(e, t, e.next) >= 0 && z(e, e.prev, t) >= 0 : z(e, t, e.prev) < 0 || z(e, e.next, t) < 0;
}
function Ci(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do {
		let e = n.next;
		n.y > a != e.y > a && i < (e.x - n.x) * (a - n.y) / (e.y - n.y) + n.x && (r = !r), n = e;
	} while (n !== e);
	return r;
}
function wi(e, t) {
	let n = Di(e.i, e.x, e.y), r = Di(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function Ti(e, t, n, r) {
	let i = Di(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function Ei(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), Kr && ni(e.prev, e.next);
}
function Di(e, t, n) {
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
function Oi(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
//#endregion
//#region ../autk-core/src/triangulator-polylines.ts
var ki = class e {
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
		let r = jr(e.geometry.coordinates.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
		if (r.length < 4) return [];
		let i = I(r.flat());
		return [{
			flatCoords: r.map((e) => [e[0], e[1]]).flat(),
			flatIds: i
		}];
	}
	static multiLineStringToPolyline(e, t, n) {
		let { coordinates: r } = e.geometry, i = [];
		for (let e of r) {
			let r = jr(e.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
			if (r.length < 4) continue;
			let a = I(r.flat()), o = r.map((e) => [e[0], e[1]]).flat();
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
}, Ai = class e {
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
			flatIds: I(r)
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
			let n = e.map((e) => [e[0] - t[0], e[1] - t[1]]).flat(), i = I(n);
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
			flatIds: I(a, i.length > 0 ? i : void 0)
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
			let a = r.map((e) => [e[0] - t[0], e[1] - t[1]]).flat(), o = I(a, i.length > 0 ? i : void 0);
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
}, ji = 30, Mi = .05;
function Ni(e, t) {
	let n = Math.abs(F(e)), r = Mr(e);
	return r > 1e-9 ? 2 * n / r * Math.tan(t * Math.PI / 180) : 0;
}
function Pi(e, t, n) {
	let r = [], i = [];
	for (let a = 0; a < e.length; a++) {
		let o = P(e[a]), s = F(o);
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
function Fi(e, t) {
	let n = P(e[0]);
	F(n) < 0 && (n = [...n].reverse());
	let r = [...n], i = [];
	for (let t = 1; t < e.length; t++) i.push(r.length), r.push(...P(e[t]));
	let a = I(r.flatMap((e) => e), i.length > 0 ? i : void 0);
	return {
		flatCoords: r.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: a
	};
}
function Ii(e, t) {
	let n = P(e[0]);
	F(n) > 0 && (n = [...n].reverse());
	let r = [...n], i = [];
	for (let t = 1; t < e.length; t++) {
		i.push(r.length);
		let n = P(e[t]);
		F(n) < 0 && (n = [...n].reverse()), r.push(...n);
	}
	let a = I(r.flatMap((e) => e), i.length > 0 ? i : void 0);
	return {
		flatCoords: r.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: a
	};
}
function Li(e, t, n) {
	let r = P(e);
	F(r) < 0 && (r = [...r].reverse());
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
function Ri(e, t, n) {
	let r = P(e);
	F(r) < 0 && (r = [...r].reverse());
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
function zi(e, t) {
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
function Bi(e, t, n) {
	let r = P(e);
	F(r) < 0 && (r = [...r].reverse());
	let i = 0, a = 1, o = 0, s = r.length;
	for (let e = 0; e < s; e++) {
		let t = (e + 1) % s, n = r[t][0] - r[e][0], c = r[t][1] - r[e][1], l = Math.sqrt(n * n + c * c);
		l > i && (i = l, a = n / l, o = c / l);
	}
	let c = -o, l = a, u = r.map(([e, t]) => e * c + t * l), d = Math.min(...u), f = Math.max(...u), p = (d + f) / 2, m = (f - d) / 2, h = I(r.flatMap((e) => e)), g = {
		flatCoords: r.flatMap(([e, n]) => [
			e,
			n,
			t
		]),
		flatIds: h
	};
	g = zi(g.flatCoords, g.flatIds), g = zi(g.flatCoords, g.flatIds), g = zi(g.flatCoords, g.flatIds);
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
function Vi(e, t, n, r) {
	let i = P(e);
	F(i) < 0 && (i = [...i].reverse());
	let a = r * Math.PI / 180, o = Math.sin(a), s = Math.cos(a), c = i.map(([e, t]) => e * o + t * s), l = Math.min(...c), u = Math.max(...c), d = u - l, f = c.map((e) => d > 1e-9 ? (u - e) / d * n : 0), p = I(i.flatMap((e) => e)), m = [], h = [];
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
function Hi(e) {
	let t = e.length;
	return e.map((n, r) => {
		let i = (r + 1) % t, a = e[i][0] - e[r][0], o = e[i][1] - e[r][1], s = Math.sqrt(a * a + o * o);
		return s > 1e-10 ? [-o / s, a / s] : [0, 0];
	});
}
function Ui(e, t, n) {
	let r = e.length;
	return e.map((i, a) => {
		let o = (a + r - 1) % r, s = t[o], c = t[a], l = n[e[o].edgeIdx], u = n[i.edgeIdx], d = s[0] * c[1] - s[1] * c[0];
		return Math.abs(d) > 1e-8 ? [(l * c[1] - u * s[1]) / d, (s[0] * u - c[0] * l) / d] : [c[0] * u, c[1] * u];
	});
}
function Wi(e, t, n, r) {
	let i = t[0] - e[0], a = t[1] - e[1], o = n[0] - r[0], s = n[1] - r[1], c = i * o + a * s;
	if (c <= 1e-8) return Infinity;
	let l = o * o + s * s;
	return l < 1e-12 ? Infinity : c / l;
}
function Gi(e, t) {
	let n = [], r = e.length;
	for (let i = 0; i < r; i++) {
		let a = (i + 1) % r, o = e[i].pos[0] - e[a].pos[0], s = e[i].pos[1] - e[a].pos[1];
		Math.sqrt(o * o + s * s) >= t && n.push(e[i]);
	}
	return n;
}
function Ki(e) {
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
function qi(e, t) {
	let n = e.length, r = Array(n).fill(1);
	if (t.shape === "hipped" || t.shape === "pyramidal" || t.shape === "pyramid" || t.shape === "mansard") return r;
	let i = Ki(e);
	if (t.shape === "gabled") return i.map((e) => +!e);
	if (t.shape === "half-hipped") return i.map((e) => e ? .3 : 1);
	if (t.shape === "saltbox") {
		let e = 0;
		return i.map((t) => t ? 0 : (e++, e === 1 ? 1 : 2));
	}
	return r;
}
function Ji(e, t, n) {
	let r = e;
	if (r.length < 3 || !Nr(r)) return {
		faces: [],
		maxH: 0
	};
	let i = Math.min(...r.map((e) => e[0])), a = Math.max(...r.map((e) => e[0])), o = Math.min(...r.map((e) => e[1])), s = Math.max(...r.map((e) => e[1])), c = Mi * 10, l = Gi(r.map((e, t) => ({
		pos: [...e],
		h: 0,
		edgeIdx: t
	})), Mi), u = [], d = 0;
	for (let e = 0; e < 500 && l.length >= 3; e++) {
		let e = Hi(l.map((e) => e.pos)), r = l.length, f = Ui(l, e, t);
		if (f.some((e) => e[0] * e[0] + e[1] * e[1] > 100)) return {
			faces: [],
			maxH: 0
		};
		let p = Infinity;
		for (let e = 0; e < r; e++) {
			let t = (e + 1) % r, n = Wi(l[e].pos, l[t].pos, f[e], f[t]);
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
			if (Math.sqrt(s * s + c * c) < Mi) {
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
			let e = I(h.flatMap((e) => e));
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
			Math.sqrt(n * n + i * i) >= Mi && v.push({
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
function Yi(e, t, n, r) {
	let i = [], a = [], o = r > 1e-9 ? n / r : 1;
	for (let n of e) if (!(n.length < 3)) {
		if (n.length === 3) {
			let e = i.length / 3;
			i.push(n[0][0], n[0][1], t + n[0][2] * o, n[1][0], n[1][1], t + n[1][2] * o, n[2][0], n[2][1], t + n[2][2] * o), a.push(e, e + 1, e + 2);
		} else if (n.length === 4) {
			let e = i.length / 3;
			i.push(n[0][0], n[0][1], t + n[0][2] * o, n[1][0], n[1][1], t + n[1][2] * o, n[2][0], n[2][1], t + n[2][2] * o, n[2][0], n[2][1], t + n[2][2] * o, n[3][0], n[3][1], t + n[3][2] * o, n[0][0], n[0][1], t + n[0][2] * o), a.push(e, e + 1, e + 2, e + 3, e + 4, e + 5);
		} else {
			let e = I(n.flatMap(([e, t]) => [e, t]));
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
function Xi(e, t, n, r, i) {
	let a = P(e);
	F(a) < 0 && (a = [...a].reverse());
	let o = qi(a, r), s = Infinity;
	if (r.shape === "mansard") {
		let e = Math.abs(F(a)), t = Mr(a);
		s = (t > 0 ? 2 * e / t : 0) * .7;
	}
	let { faces: c, maxH: l } = Ji(a, o, s);
	return c.length === 0 ? null : Yi(c, t, n, l);
}
function Zi(e) {
	if (!e) return {
		shape: "flat",
		height: 0,
		angle: ji,
		direction: 0
	};
	let t = parseFloat(String(e["roof:angle"] ?? String(ji))) || ji;
	return {
		shape: String(e["roof:shape"] ?? "flat"),
		height: parseFloat(String(e["roof:height"] ?? "0")) || 0,
		angle: Math.min(75, Math.max(5, t)),
		direction: parseFloat(String(e["roof:direction"] ?? "0")) || 0
	};
}
function Qi(e, t, n, r) {
	let i = Zi(r), a = i.height;
	if (a <= 0 && i.shape !== "flat" && (a = Ni(P(e[0]), i.angle)), i.shape !== "flat") {
		let t = Ni(P(e[0]), 60);
		t > 0 && a > t && (a = t);
	}
	let o = P(e[0]), s = [];
	s.push(Pi(e, t, n)), t > 0 && s.push(Ii(e, t));
	let c;
	switch (i.shape) {
		case "round":
			c = Bi(o, n, a);
			break;
		case "cone":
		case "pyramidal":
		case "pyramid":
			c = Li(o, n, a);
			break;
		case "dome":
			c = Ri(o, n, a);
			break;
		case "skillion":
			c = Vi(o, n, a, i.direction);
			break;
		case "gabled":
		case "hipped":
		case "half-hipped":
		case "mansard":
		case "saltbox":
			c = Xi(o, n, a, i, e) || Fi(e, n);
			break;
		default: c = Fi(e, n);
	}
	return s.push(c), s;
}
//#endregion
//#region ../autk-core/src/building-feature.ts
function $i(e) {
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
function ea(e) {
	let t = $i(e), { parts: n, ...r } = t.properties, i = new Map(n.map((e) => [e.geometryIndex, e]));
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
var ta = class e {
	static buildMesh(t, n, r = !1) {
		let i = [], a = [], o = 0;
		for (let s = 0; s < t.features.length; s++) {
			let c = t.features[s], l = ea(c), u = 0, d = 0;
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
					p = Qi([t.map((t) => e.toLocal(t, n))], l[0], l[1], f.properties);
				} else if (a.type === "MultiLineString") {
					let { coordinates: t } = f.geometry;
					for (let r of t) {
						let t = r.map((t) => e.toLocal(t, n));
						p.push(...Qi([t], l[0], l[1], f.properties));
					}
				} else if (a.type === "Polygon") {
					let { coordinates: t } = f.geometry;
					p = Qi(t.map((t) => t.map((t) => e.toLocal(t, n))), l[0], l[1], f.properties);
				} else if (a.type === "MultiPolygon") {
					let { coordinates: t } = f.geometry;
					for (let r of t) {
						let t = r.map((t) => t.map((t) => e.toLocal(t, n)));
						p.push(...Qi(t, l[0], l[1], f.properties));
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
}, na = class {
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
//#region ../autk-core/src/utils-data.ts
function ra(e, t) {
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
function ia(e) {
	if (typeof e == "number") return Number.isFinite(e);
	if (typeof e == "string") {
		let t = e.trim();
		return t !== "" && Number.isFinite(Number(t));
	}
	return !1;
}
//#endregion
//#region ../autk-core/src/heightfield.ts
function aa(e, t, n) {
	let r = e.features[0]?.properties, i = r ? ra(r, t) : void 0;
	if (!r || !oa(i) || !e.bbox) throw Error(`Heightfield requires a raster FeatureCollection with bbox and '${t}' band values.`);
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
function oa(e) {
	return Array.isArray(e) || ArrayBuffer.isView(e);
}
var sa = typeof Float32Array < "u" ? Float32Array : Array;
//#endregion
//#region ../node_modules/gl-matrix/esm/mat4.js
function B() {
	var e = new sa(16);
	return sa != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function ca(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function la(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = n[0], b = n[1], x = n[2], S = n[3];
	return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e;
}
function ua(e, t, n, r, i) {
	var a = 1 / Math.tan(t / 2);
	if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
		var o = 1 / (r - i);
		e[10] = i * o, e[14] = i * r * o;
	} else e[10] = -1, e[14] = -r;
	return e;
}
function da(e, t, n, r, i, a, o) {
	var s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
	return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = a * l, e[15] = 1, e;
}
function fa(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p, m = t[0], h = t[1], g = t[2], _ = r[0], v = r[1], y = r[2], b = n[0], x = n[1], S = n[2];
	return Math.abs(m - b) < 1e-6 && Math.abs(h - x) < 1e-6 && Math.abs(g - S) < 1e-6 ? ca(e) : (u = m - b, d = h - x, f = g - S, p = 1 / Math.sqrt(u * u + d * d + f * f), u *= p, d *= p, f *= p, i = v * f - y * d, a = y * u - _ * f, o = _ * d - v * u, p = Math.sqrt(i * i + a * a + o * o), p ? (p = 1 / p, i *= p, a *= p, o *= p) : (i = 0, a = 0, o = 0), s = d * o - f * a, c = f * i - u * o, l = u * a - d * i, p = Math.sqrt(s * s + c * c + l * l), p ? (p = 1 / p, s *= p, c *= p, l *= p) : (s = 0, c = 0, l = 0), e[0] = i, e[1] = s, e[2] = u, e[3] = 0, e[4] = a, e[5] = c, e[6] = d, e[7] = 0, e[8] = o, e[9] = l, e[10] = f, e[11] = 0, e[12] = -(i * m + a * h + o * g), e[13] = -(s * m + c * h + l * g), e[14] = -(u * m + d * h + f * g), e[15] = 1, e);
}
var pa = la;
//#endregion
//#region ../node_modules/gl-matrix/esm/vec3.js
function V() {
	var e = new sa(3);
	return sa != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function ma(e) {
	var t = e[0], n = e[1], r = e[2];
	return Math.sqrt(t * t + n * n + r * r);
}
function H(e, t, n) {
	var r = new sa(3);
	return r[0] = e, r[1] = t, r[2] = n, r;
}
function ha(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e;
}
function ga(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e;
}
function _a(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function va(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e;
}
function ya(e, t) {
	var n = t[0], r = t[1], i = t[2], a = n * n + r * r + i * i;
	return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e;
}
function ba(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2];
	return e[0] = i * c - a * s, e[1] = a * o - r * c, e[2] = r * s - i * o, e;
}
function xa(e, t, n, r) {
	var i = [], a = [];
	return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), a[2] = i[2], e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e;
}
var Sa = ga;
(function() {
	var e = V();
	return function(t, n, r, i, a, o) {
		var s, c;
		for (n ||= 3, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
		return t;
	};
})();
//#endregion
//#region ../autk-core/src/camera.ts
var Ca = class e {
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
		this.wEye = V(), this.wLookAt = V(), this.wEyeDir = V(), this.wUp = V(), this.wNear = 0, this.wFar = 0, this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = B(), this.mViewMatrix = B(), this.viewportWidth = 0, this.viewportHeight = 0, this.resetCamera(t.up, t.lookAt, t.eye);
	}
	resetCamera(e, t, n) {
		this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = B(), this.mViewMatrix = B(), this.wNear = 1, this.wFar = 5e5, this.wLookAt = H(t[0], t[1], t[2]), this.wEye = H(n[0], n[1], n[2]), this.updateEyeDirAndLen(), this.wUp = H(e[0], e[1], e[2]);
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
		return new Float32Array(pa(B(), this.mProjectionMatrix, this.mViewMatrix));
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
		ca(this.mViewMatrix), da(this.mProjectionMatrix, e, t, n, r, 0, -100), this.wEye = H((e + t) * .5, (n + r) * .5, 100), this.wLookAt = H((e + t) * .5, (n + r) * .5, 0), this.wUp = H(0, 1, 0), this.updateEyeDirAndLen();
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
		va(this.wEye, this.wEye, i, e), va(this.wLookAt, this.wEye, this.wEyeDir, ma(this.wEyeDir));
	}
	translate(e, t) {
		let n = this.wEye[2], r = V();
		ya(r, ba(r, this.wEyeDir, this.wUp));
		let i = ha(V(), _a(V(), r, e * n), _a(V(), this.wUp, t * n));
		ha(this.wEye, this.wEye, i), va(this.wLookAt, this.wEye, this.wEyeDir, ma(this.wEyeDir));
	}
	yaw(e) {
		xa(this.wEyeDir, this.wEyeDir, H(0, 0, 0), e), xa(this.wUp, this.wUp, H(0, 0, 0), e), va(this.wLookAt, this.wEye, this.wEyeDir, ma(this.wEyeDir));
	}
	pitch(e) {
		e = -e, ha(this.wEyeDir, _a(V(), this.wUp, Math.sin(e)), _a(V(), this.wEyeDir, Math.cos(e))), ya(this.wEyeDir, this.wEyeDir), va(this.wLookAt, this.wEye, this.wEyeDir, ma(this.wEyeDir)), ba(this.wUp, ba(V(), this.wEyeDir, this.wUp), this.wEyeDir), ya(this.wUp, this.wUp);
	}
	getZoomScale() {
		return Math.max(Math.abs(this.wEye[2]), 1) / 1e4;
	}
	update() {
		let e = this.viewportWidth / this.viewportHeight;
		fa(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp), ua(this.mProjectionMatrix, this.fovy, e, this.wFar, this.wNear);
	}
	static buildViewProjection(e) {
		let t = fa(B(), e.eye, e.lookAt, e.up), n = ua(B(), e.fovDeg * (Math.PI / 180), e.aspect, e.near, e.far);
		return new Float32Array(pa(B(), n, t));
	}
	screenCoordToWorldDir(e, t) {
		let n = V();
		ya(n, ba(n, this.wEyeDir, this.wUp));
		let r = _a(V(), this.wUp, Math.tan(this.fovy / 2) * (t - .5) * 2), i = this.viewportWidth / this.viewportHeight, a = _a(V(), n, Math.tan(this.fovy / 2) * (e - .5) * 2 * i), o = ha(V(), r, a), s = ha(V(), this.wEyeDir, o);
		return ya(s, s), s;
	}
	updateEyeDirAndLen() {
		this.wEyeDir = V(), Sa(this.wEyeDir, this.wLookAt, this.wEye), ya(this.wEyeDir, this.wEyeDir);
	}
}, wa = class {
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
}, Ta = [
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
], Ea = [
	"surface",
	"parks",
	"water",
	"roads",
	"buildings"
];
//#endregion
//#region ../autk-core/src/utils-geojson.ts
function Da(e) {
	let t = Oa(e);
	return t ? [(t.minLon + t.maxLon) * .5, (t.minLat + t.maxLat) * .5] : [0, 0];
}
function Oa(e) {
	if (!e) return null;
	let t = Infinity, n = Infinity, r = -Infinity, i = -Infinity, a = (e) => {
		e[0] < t && (t = e[0]), e[0] > r && (r = e[0]), e[1] < n && (n = e[1]), e[1] > i && (i = e[1]);
	};
	if (e.type === "FeatureCollection") for (let t of e.features) {
		let e = t.geometry;
		e && ka(e, a);
	}
	else ka(e, a);
	return Number.isFinite(t) ? {
		minLon: t,
		minLat: n,
		maxLon: r,
		maxLat: i
	} : null;
}
function ka(e, t) {
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
		case "GeometryCollection": for (let n of e.geometries) ka(n, t);
	}
}
//#endregion
//#region ../autk-core/src/utils-layer.ts
function Aa(e) {
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
//#region src/events-key.ts
var ja = class {
	_map;
	_onKeyUp;
	constructor(e) {
		this._map = e, this._onKeyUp = this.keyUp.bind(this);
	}
	bindEvents() {
		let e = this._map.canvas;
		e.tabIndex < 0 && (e.tabIndex = 0), e.style.outline = "none", e.removeEventListener("keyup", this._onKeyUp, !1), e.addEventListener("keyup", this._onKeyUp, !1);
	}
	destroyEvents() {
		this._map.canvas.removeEventListener("keyup", this._onKeyUp, !1);
	}
	keyUp(e) {
		if (e.key.toLowerCase() === "s") {
			let e = this._map.style.availableStyles, t = this._map.style.currentStyle, n = (e.indexOf(t) + 1) % e.length;
			this._map.style.setPredefinedStyle(e[n]);
		}
		e.key.toLowerCase() === "b" && this._map.toggleTerrainOverlayBoundsDebug(), e.key.toLowerCase() === "r" && this._map.resetCamera();
	}
}, Ma = /* @__PURE__ */ function(e) {
	return e.PICKING = "picking", e;
}({}), U = /* @__PURE__ */ function(e) {
	return e.IDLE = "mouseIdle", e.DRAG = "mouseDrag", e;
}({}), Na = class {
	_map;
	_lastPoint;
	_status;
	_activePointers = /* @__PURE__ */ new Map();
	_lastGestureCenter = null;
	_lastGestureDistance = null;
	_onWheel;
	_onPointerDown;
	_onPointerUp;
	_onPointerCancel;
	_onContextMenu;
	_onPointerMove;
	_onDblClick;
	_previousTouchAction = "";
	_previousWebkitTouchCallout = "";
	constructor(e) {
		this._map = e, this._lastPoint = [0, 0], this._status = U.IDLE, this._onWheel = this.mouseWheel.bind(this), this._onPointerDown = this.pointerDown.bind(this), this._onPointerUp = this.pointerUp.bind(this), this._onPointerCancel = this.pointerUp.bind(this), this._onContextMenu = this.contextMenu.bind(this), this._onPointerMove = this.pointerMove.bind(this), this._onDblClick = this.mouseDoubleClick.bind(this);
	}
	bindEvents() {
		let e = this._map.renderer.canvas, t = e.style;
		this._previousTouchAction = t.touchAction, this._previousWebkitTouchCallout = t.getPropertyValue("-webkit-touch-callout"), t.touchAction = "none", t.setProperty("-webkit-touch-callout", "none"), e.addEventListener("wheel", this._onWheel, { passive: !1 }), e.addEventListener("contextmenu", this._onContextMenu, !1), e.addEventListener("dblclick", this._onDblClick, !1), document.addEventListener("pointerdown", this._onPointerDown, { capture: !0 }), document.addEventListener("pointermove", this._onPointerMove, { capture: !0 }), document.addEventListener("pointerup", this._onPointerUp, { capture: !0 }), document.addEventListener("pointercancel", this._onPointerCancel, { capture: !0 });
	}
	destroyEvents() {
		let e = this._map.renderer.canvas, t = e.style;
		t.touchAction = this._previousTouchAction, t.setProperty("-webkit-touch-callout", this._previousWebkitTouchCallout), e.removeEventListener("wheel", this._onWheel), e.removeEventListener("contextmenu", this._onContextMenu), e.removeEventListener("dblclick", this._onDblClick), document.removeEventListener("pointerdown", this._onPointerDown, { capture: !0 }), document.removeEventListener("pointermove", this._onPointerMove, { capture: !0 }), document.removeEventListener("pointerup", this._onPointerUp, { capture: !0 }), document.removeEventListener("pointercancel", this._onPointerCancel, { capture: !0 });
	}
	contextMenu(e) {
		e.preventDefault(), e.stopPropagation();
	}
	pointerDown(e) {
		let t = this._map.renderer.canvas;
		if (e.target === t && (this._map.canvas.focus({ preventScroll: !0 }), e.button === 0 || e.button === 1)) {
			e.preventDefault(), e.stopPropagation();
			let n = this._getPoint(e);
			this._lastPoint = n, this._status = U.DRAG, e.pointerType === "touch" && (this._activePointers.set(e.pointerId, n), t.setPointerCapture?.(e.pointerId), this._activePointers.size >= 2 && this._updateGestureState());
		}
	}
	pointerMove(e) {
		if (e.pointerType === "touch" && this._activePointers.has(e.pointerId) && (this._activePointers.set(e.pointerId, this._getPoint(e)), this._activePointers.size >= 2)) {
			this._handleMultiTouchMove(e);
			return;
		}
		if (this._status === U.IDLE && (e.buttons === 1 || e.buttons === 4) && e.target === this._map.renderer.canvas && (this._lastPoint = this._getPoint(e), this._status = U.DRAG), this._status !== U.DRAG) return;
		let t = this._map.renderer.cssWidth, n = this._map.renderer.cssHeight;
		e.preventDefault(), e.stopPropagation();
		let r = this._getPoint(e), i = -r[0] + this._lastPoint[0], a = r[1] - this._lastPoint[1];
		(e.buttons & 1) == 1 && e.shiftKey ? (this._map.camera.yaw(i / t), this._map.camera.pitch(a / n)) : this._map.camera.translate(i / t, a / n), this._lastPoint = r, e.pointerType === "touch" && this._activePointers.set(e.pointerId, r);
	}
	pointerUp(e) {
		let t = this._map.renderer.canvas, n = this._activePointers.delete(e.pointerId);
		t.hasPointerCapture?.(e.pointerId) && t.releasePointerCapture(e.pointerId), n ? (this._activePointers.size >= 2 ? this._updateGestureState() : this._activePointers.size === 1 ? (this._lastPoint = Array.from(this._activePointers.values())[0], this._clearGestureState(), this._status = U.DRAG) : (this._clearGestureState(), this._status = U.IDLE), e.preventDefault(), e.stopPropagation()) : this._status === U.DRAG && (e.preventDefault(), e.stopPropagation(), this._status = U.IDLE);
	}
	mouseWheel(e) {
		e.preventDefault(), e.stopPropagation();
		let t = this._map.renderer.canvas.getBoundingClientRect(), n = (e.clientX - t.left) / this._map.renderer.cssWidth, r = 1 - (e.clientY - t.top) / this._map.renderer.cssHeight;
		this._map.camera.zoom(e.deltaY * .01, n, r);
	}
	mouseDoubleClick(e) {
		e.preventDefault(), e.stopPropagation();
		let t = this._map.renderer.canvas.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top, i = this._map.activePickingLayer;
		i?.layerRenderInfo.isPick && (i.layerRenderInfo.pickedComps = [n, r], this._map.requestRender());
	}
	_handleMultiTouchMove(e) {
		e.preventDefault(), e.stopPropagation();
		let t = this._getGesture();
		if (!t) return;
		let { center: n, distance: r } = t, i = this._map.renderer.cssWidth, a = this._map.renderer.cssHeight;
		if (this._lastGestureCenter && this._lastGestureDistance !== null) {
			let e = r - this._lastGestureDistance, t = -n[0] + this._lastGestureCenter[0], o = n[1] - this._lastGestureCenter[1];
			Math.abs(e) > 1 ? this._map.camera.zoom(-e * .01, n[0] / i, 1 - n[1] / a) : (this._map.camera.yaw(t / i), this._map.camera.pitch(o / a));
		}
		this._lastGestureCenter = n, this._lastGestureDistance = r;
	}
	_updateGestureState() {
		let e = this._getGesture();
		this._lastGestureCenter = e?.center ?? null, this._lastGestureDistance = e?.distance ?? null;
	}
	_clearGestureState() {
		this._lastGestureCenter = null, this._lastGestureDistance = null;
	}
	_getGesture() {
		let e = Array.from(this._activePointers.values());
		if (e.length < 2) return null;
		let [t, n] = e, r = n[0] - t[0], i = n[1] - t[1];
		return {
			center: [(t[0] + n[0]) * .5, (t[1] + n[1]) * .5],
			distance: Math.hypot(r, i)
		};
	}
	_getPoint(e) {
		let t = this._map.renderer.canvas.getBoundingClientRect();
		return [e.clientX - t.left, e.clientY - t.top];
	}
}, Pa = class {
	_map;
	_onResize;
	constructor(e) {
		this._map = e, this._onResize = this.resize.bind(this);
	}
	bindEvents() {
		window.addEventListener("resize", this._onResize);
	}
	destroyEvents() {
		window.removeEventListener("resize", this._onResize);
	}
	resize() {
		let e = this._map.canvas, t = e.offsetWidth, n = e.offsetHeight, r = window.devicePixelRatio || 1;
		this._map.camera.resize(t, n), this._map.renderer.resize(t, n, r), this._map.ui.handleResize();
	}
}, Fa = class e {
	_style;
	static PICK_READBACK_BYTES_PER_ROW = 256;
	static PICK_READBACK_BUFFER_COUNT = 2;
	static _sharedDevicePromise = null;
	_canvas;
	_device;
	_context;
	_multisampleTexture;
	_frameBuffer;
	_depthTexture;
	_depthBuffer;
	_pickingBuffer;
	_pickingTexture;
	_pickingDepthBuffer;
	_pickingDepthTexture;
	_commandEncoder = null;
	_pickReadbackBuffers = Array.from({ length: e.PICK_READBACK_BUFFER_COUNT }, () => ({
		buffer: null,
		size: 0,
		busy: !1
	}));
	_sampleCount = 4;
	_pickingSampleCount = 1;
	_canvasFormat;
	_isInitialized = !1;
	_cssWidth = 1;
	_cssHeight = 1;
	_pixelWidth = 1;
	_pixelHeight = 1;
	_devicePixelRatio = 1;
	_overlayTexture;
	_overlayMultisampleTexture;
	_overlayDepthTexture;
	_overlayPickingTexture;
	_overlayPickingDepthTexture;
	_overlayTextureView;
	_overlayMultisampleTextureView;
	_overlayDepthTextureView;
	_overlayPickingTextureView;
	_overlayPickingDepthTextureView;
	_overlayWidth = 0;
	_overlayHeight = 0;
	_terrainDepthTexture;
	_terrainDepthTextureView;
	_terrainDepthWidth = 0;
	_terrainDepthHeight = 0;
	constructor(e, t) {
		this._style = t, this._canvas = e, this._syncCanvasMetrics(e.offsetWidth || e.width, e.offsetHeight || e.height, window.devicePixelRatio || 1);
	}
	get style() {
		return this._style;
	}
	get canvas() {
		return this._canvas;
	}
	get cssWidth() {
		return this._cssWidth;
	}
	get cssHeight() {
		return this._cssHeight;
	}
	get pixelWidth() {
		return this._pixelWidth;
	}
	get pixelHeight() {
		return this._pixelHeight;
	}
	get overlayWidth() {
		return this._overlayWidth;
	}
	get overlayHeight() {
		return this._overlayHeight;
	}
	get terrainDepthTextureView() {
		if (!this._terrainDepthTextureView) throw Error("Terrain depth texture has not been configured.");
		return this._terrainDepthTextureView;
	}
	get devicePixelRatio() {
		return this._devicePixelRatio;
	}
	get canvasFormat() {
		return this._canvasFormat;
	}
	get context() {
		return this._context;
	}
	get device() {
		return this._device;
	}
	get frameBuffer() {
		return this._frameBuffer;
	}
	get depthBuffer() {
		return this._depthBuffer;
	}
	get commandEncoder() {
		if (!this._commandEncoder) throw Error("Renderer command encoder requested outside an active frame.");
		return this._commandEncoder;
	}
	get sampleCount() {
		return this._sampleCount;
	}
	get pickingTexture() {
		return this._pickingTexture;
	}
	get pickingBuffer() {
		return this._pickingBuffer;
	}
	get pickingDepthBuffer() {
		return this._pickingDepthBuffer;
	}
	get depthTextureView() {
		return this._depthBuffer.view;
	}
	get overlayTextureView() {
		if (!this._overlayTextureView) throw Error("Overlay texture has not been configured.");
		return this._overlayTextureView;
	}
	get overlayPickingTextureView() {
		if (!this._overlayPickingTextureView) throw Error("Overlay picking texture has not been configured.");
		return this._overlayPickingTextureView;
	}
	async init() {
		await this.initWebGPU() ? (this.configureContext(), this.configureFrameBuffer(), this.configureDepthBuffer(), this.configurePickingBuffer(), this._isInitialized = !0) : (this._isInitialized = !1, console.error("Renderer initialization failed: WebGPU is not available."));
	}
	async initWebGPU() {
		try {
			let t = navigator.gpu;
			if (!t) return !1;
			this._canvasFormat = t.getPreferredCanvasFormat(), e._sharedDevicePromise ||= (async () => {
				let e = await t.requestAdapter();
				return e === null ? null : e.requestDevice();
			})();
			let n = await e._sharedDevicePromise;
			if (n === null) return e._sharedDevicePromise = null, !1;
			this._device = n;
		} catch (e) {
			return console.error(e), !1;
		}
		return !0;
	}
	resize(e, t, n = window.devicePixelRatio || 1) {
		this._syncCanvasMetrics(e, t, n), this._isInitialized && (this.configureContext(), this.configureFrameBuffer(), this.configureDepthBuffer(), this.configurePickingBuffer());
	}
	configureContext() {
		if (this._device && (this._context ||= this._canvas.getContext("webgpu"), this._context)) {
			let e = {
				device: this._device,
				format: this._canvasFormat,
				usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
				alphaMode: "premultiplied"
			};
			this._context.configure(e);
		}
	}
	configurePickingBuffer() {
		if (!this._device) return;
		this._pickingTexture?.destroy(), this._pickingDepthTexture?.destroy();
		let e = {
			size: [this._pixelWidth, this._pixelHeight],
			format: "rgba8unorm",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
			sampleCount: this._pickingSampleCount
		};
		this._pickingTexture = this._device.createTexture(e);
		let t = this._pickingTexture.createView();
		this._pickingBuffer = {
			view: t,
			clearValue: {
				r: 0,
				g: 0,
				b: 0,
				a: 1
			},
			loadOp: "clear",
			storeOp: "store"
		};
		let n = {
			size: [this._pixelWidth, this._pixelHeight],
			format: "depth32float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT,
			sampleCount: this._pickingSampleCount
		};
		this._pickingDepthTexture = this._device.createTexture(n);
		let r = this._pickingDepthTexture.createView();
		this._pickingDepthBuffer = {
			view: r,
			depthClearValue: 0,
			depthLoadOp: "clear",
			depthStoreOp: "store"
		};
	}
	configureFrameBuffer() {
		if (!this._device) return;
		if (!this._context) {
			console.error("GPU canvas context is null.");
			return;
		}
		let e;
		try {
			e = this._context.getCurrentTexture().createView();
		} catch {
			return;
		}
		this._multisampleTexture?.destroy();
		let t = {
			size: [this._pixelWidth, this._pixelHeight],
			sampleCount: this._sampleCount,
			format: this._canvasFormat,
			usage: GPUTextureUsage.RENDER_ATTACHMENT
		};
		this._multisampleTexture = this._device.createTexture(t);
		let n = this._multisampleTexture.createView(), r = this._style.getColor("background");
		this._frameBuffer = {
			view: n,
			resolveTarget: e,
			clearValue: {
				r: r.r / 255,
				g: r.g / 255,
				b: r.b / 255,
				a: 1
			},
			loadOp: "clear",
			storeOp: "store"
		};
	}
	configureDepthBuffer() {
		if (!this._device) return;
		this._depthTexture?.destroy();
		let e = {
			size: [
				this._pixelWidth,
				this._pixelHeight,
				1
			],
			sampleCount: this._sampleCount,
			dimension: "2d",
			format: "depth32float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING
		};
		this._depthTexture = this._device.createTexture(e);
		let t = this._depthTexture.createView();
		this._depthBuffer = {
			view: t,
			depthClearValue: 0,
			depthLoadOp: "clear",
			depthStoreOp: "store"
		};
	}
	start() {
		if (!this._isInitialized) return;
		if (!this._context) {
			console.error("GPU canvas context is null.");
			return;
		}
		let e;
		try {
			e = this._context.getCurrentTexture().createView();
		} catch {
			return;
		}
		this._frameBuffer.loadOp = "clear", this._frameBuffer.resolveTarget = e;
		let t = this._style.getColor("background");
		this._frameBuffer.clearValue = {
			r: t.r / 255,
			g: t.g / 255,
			b: t.b / 255,
			a: 1
		}, this._beginFrame();
	}
	beginMainRenderPass() {
		if (!this._isInitialized) throw Error("Renderer main pass requested before initialization.");
		if (!this._context) throw Error("GPU canvas context is null.");
		this._frameBuffer.loadOp = "clear", this._frameBuffer.resolveTarget = this._context.getCurrentTexture().createView(), this._depthBuffer.depthLoadOp = "clear";
		let e = {
			colorAttachments: [this._frameBuffer],
			depthStencilAttachment: this._depthBuffer
		};
		return this.commandEncoder.beginRenderPass(e);
	}
	beginMainColorRenderPass(e = "load") {
		if (!this._isInitialized || !this._context) throw Error("Renderer color pass requested before initialization.");
		return this._frameBuffer.loadOp = e, this._frameBuffer.resolveTarget = this._context.getCurrentTexture().createView(), this.commandEncoder.beginRenderPass({ colorAttachments: [this._frameBuffer] });
	}
	configureTerrainDepthTexture(e, t) {
		return !this._device || this._terrainDepthTexture && e === this._terrainDepthWidth && t === this._terrainDepthHeight ? !1 : (this._terrainDepthTexture?.destroy(), this._terrainDepthWidth = e, this._terrainDepthHeight = t, this._terrainDepthTexture = this._device.createTexture({
			label: "Terrain composite depth texture",
			size: [e, t],
			format: "depth32float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
		}), this._terrainDepthTextureView = this._terrainDepthTexture.createView(), !0);
	}
	beginTerrainDepthRenderPass() {
		if (!this._terrainDepthTextureView) throw Error("Renderer terrain depth pass requested before terrain depth texture configuration.");
		return this.commandEncoder.beginRenderPass({
			label: "Terrain composite depth pass",
			colorAttachments: [],
			depthStencilAttachment: {
				view: this._terrainDepthTextureView,
				depthClearValue: 0,
				depthLoadOp: "clear",
				depthStoreOp: "store"
			}
		});
	}
	configureOverlayTexture(e, t) {
		return !this._device || this._overlayTexture && e === this._overlayWidth && t === this._overlayHeight ? !1 : (this._overlayTexture?.destroy(), this._overlayMultisampleTexture?.destroy(), this._overlayDepthTexture?.destroy(), this._overlayPickingTexture?.destroy(), this._overlayPickingDepthTexture?.destroy(), this._overlayWidth = e, this._overlayHeight = t, this._overlayTexture = this._device.createTexture({
			label: "Terrain overlay texture",
			size: [e, t],
			format: this._canvasFormat,
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
		}), this._overlayMultisampleTexture = this._device.createTexture({
			label: "Terrain overlay MSAA texture",
			size: [e, t],
			sampleCount: this._sampleCount,
			format: this._canvasFormat,
			usage: GPUTextureUsage.RENDER_ATTACHMENT
		}), this._overlayDepthTexture = this._device.createTexture({
			label: "Terrain overlay depth texture",
			size: [e, t],
			sampleCount: this._sampleCount,
			format: "depth32float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT
		}), this._overlayPickingTexture = this._device.createTexture({
			label: "Terrain overlay picking texture",
			size: [e, t],
			format: "rgba8unorm",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
		}), this._overlayPickingDepthTexture = this._device.createTexture({
			label: "Terrain overlay picking depth texture",
			size: [e, t],
			format: "depth32float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT
		}), this._overlayTextureView = this._overlayTexture.createView(), this._overlayMultisampleTextureView = this._overlayMultisampleTexture.createView(), this._overlayDepthTextureView = this._overlayDepthTexture.createView(), this._overlayPickingTextureView = this._overlayPickingTexture.createView(), this._overlayPickingDepthTextureView = this._overlayPickingDepthTexture.createView(), !0);
	}
	beginOverlayRenderPass() {
		if (!this._overlayTextureView || !this._overlayMultisampleTextureView || !this._overlayDepthTextureView) throw Error("Renderer overlay pass requested before overlay texture configuration.");
		return this.commandEncoder.beginRenderPass({
			label: "Terrain overlay render pass",
			colorAttachments: [{
				view: this._overlayMultisampleTextureView,
				resolveTarget: this._overlayTextureView,
				clearValue: {
					r: 0,
					g: 0,
					b: 0,
					a: 0
				},
				loadOp: "clear",
				storeOp: "store"
			}],
			depthStencilAttachment: {
				view: this._overlayDepthTextureView,
				depthClearValue: 0,
				depthLoadOp: "clear",
				depthStoreOp: "store"
			}
		});
	}
	beginOverlayPickingRenderPass() {
		if (!this._overlayPickingTextureView || !this._overlayPickingDepthTextureView) throw Error("Renderer overlay picking pass requested before overlay texture configuration.");
		return this.commandEncoder.beginRenderPass({
			label: "Terrain overlay picking render pass",
			colorAttachments: [{
				view: this._overlayPickingTextureView,
				clearValue: {
					r: 0,
					g: 0,
					b: 0,
					a: 1
				},
				loadOp: "clear",
				storeOp: "store"
			}],
			depthStencilAttachment: {
				view: this._overlayPickingDepthTextureView,
				depthClearValue: 0,
				depthLoadOp: "clear",
				depthStoreOp: "store"
			}
		});
	}
	finish() {
		this._isInitialized && this._commandEncoder && (this._device.queue.submit([this._commandEncoder.finish()]), this._commandEncoder = null);
	}
	startPickingRenderPass() {
		if (!this._isInitialized) return;
		this._pickingBuffer.loadOp = "clear", this._pickingDepthBuffer.depthLoadOp = "clear";
		let e = {
			colorAttachments: [this._pickingBuffer],
			depthStencilAttachment: this._pickingDepthBuffer
		};
		this._beginFrame(), this._beginEmptyRenderPass(e);
	}
	beginPickingRenderPass(e = "clear") {
		if (!this._isInitialized) throw Error("Renderer picking pass requested before initialization.");
		return this._pickingBuffer.loadOp = "clear", this._pickingDepthBuffer.depthLoadOp = e, this.commandEncoder.beginRenderPass({
			colorAttachments: [this._pickingBuffer],
			depthStencilAttachment: this._pickingDepthBuffer
		});
	}
	beginPickingDepthRenderPass() {
		if (!this._isInitialized) throw Error("Renderer picking depth pass requested before initialization.");
		return this.commandEncoder.beginRenderPass({
			label: "Picking depth render pass",
			colorAttachments: [],
			depthStencilAttachment: {
				view: this._pickingDepthBuffer.view,
				depthClearValue: 0,
				depthLoadOp: "clear",
				depthStoreOp: "store"
			}
		});
	}
	reservePickingReadbackSlot(t) {
		if (!this._isInitialized || t <= 0) return null;
		let n = e.PICK_READBACK_BYTES_PER_ROW * t;
		for (let e = 0; e < this._pickReadbackBuffers.length; e++) {
			let t = this._pickReadbackBuffers[e];
			if (!t.busy) return (!t.buffer || t.size < n) && (t.buffer?.destroy(), t.buffer = this._device.createBuffer({
				label: `Picking readback buffer ${e}`,
				size: n,
				usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
			}), t.size = n), t.busy = !0, e;
		}
		return null;
	}
	enqueuePickingReadback(t, n, r, i) {
		let a = this._pickReadbackBuffers[t];
		if (!a?.buffer) throw Error(`Picking readback slot ${t} is not reserved.`);
		let [o, s] = this.toPixelCoordinates(r, i);
		this.commandEncoder.copyTextureToBuffer({
			texture: this._pickingTexture,
			origin: {
				x: o,
				y: s
			}
		}, {
			buffer: a.buffer,
			offset: n * e.PICK_READBACK_BYTES_PER_ROW,
			bytesPerRow: e.PICK_READBACK_BYTES_PER_ROW
		}, {
			width: 1,
			height: 1,
			depthOrArrayLayers: 1
		});
	}
	async readPickingResults(t, n) {
		let r = this._pickReadbackBuffers[t];
		if (!r?.buffer) return [];
		try {
			await r.buffer.mapAsync(GPUMapMode.READ);
			let t = r.buffer.getMappedRange(), i = new Uint8Array(t), a = [];
			for (let t = 0; t < n; t++) {
				let n = t * e.PICK_READBACK_BYTES_PER_ROW;
				a.push(this._decodeColorToId(i[n], i[n + 1], i[n + 2]));
			}
			return a;
		} finally {
			r.buffer.mapState === "mapped" && r.buffer.unmap(), r.busy = !1;
		}
	}
	destroy() {
		this._isInitialized = !1, this._multisampleTexture?.destroy(), this._depthTexture?.destroy(), this._pickingTexture?.destroy(), this._pickingDepthTexture?.destroy(), this._overlayTexture?.destroy(), this._overlayMultisampleTexture?.destroy(), this._overlayDepthTexture?.destroy(), this._overlayPickingTexture?.destroy(), this._overlayPickingDepthTexture?.destroy(), this._terrainDepthTexture?.destroy(), this._pickReadbackBuffers.forEach((e) => e.buffer?.destroy()), this._context?.unconfigure(), this._commandEncoder = null;
	}
	_beginFrame() {
		this._commandEncoder ||= this._device.createCommandEncoder();
	}
	_beginEmptyRenderPass(e) {
		this.commandEncoder.beginRenderPass(e).end();
	}
	_decodeColorToId(e, t, n) {
		return (e & 255 | (t & 255) << 8 | (n & 255) << 16) - 1;
	}
	toPixelCoordinates(e, t) {
		let n = this._cssWidth > 0 ? this._pixelWidth / this._cssWidth : 1, r = this._cssHeight > 0 ? this._pixelHeight / this._cssHeight : 1;
		return [Math.max(0, Math.min(this._pixelWidth - 1, Math.floor(e * n))), Math.max(0, Math.min(this._pixelHeight - 1, Math.floor(t * r)))];
	}
	_syncCanvasMetrics(e, t, n) {
		this._cssWidth = Math.max(1, Math.floor(e)), this._cssHeight = Math.max(1, Math.floor(t)), this._devicePixelRatio = Number.isFinite(n) && n > 0 ? n : 1, this._pixelWidth = Math.max(1, Math.floor(this._cssWidth * this._devicePixelRatio)), this._pixelHeight = Math.max(1, Math.floor(this._cssHeight * this._devicePixelRatio)), this._canvas.width = this._pixelWidth, this._canvas.height = this._pixelHeight;
	}
}, Ia = class {
	_layerInfo;
	_layerRenderInfo;
	_renderInfoIsDirty = !1;
	_dataIsDirty = !1;
	_onChange = null;
	constructor(e, t) {
		this._layerInfo = e, this._layerRenderInfo = { ...t }, delete this._layerRenderInfo.pointSize, delete this._layerRenderInfo.polylinesWidth, e.typeLayer === "points" && (this._layerRenderInfo.pointSize = 64), e.typeLayer === "polylines" && (this._layerRenderInfo.polylinesWidth = 12), this.updateLayerRenderInfo(t);
	}
	get supportsPicking() {
		return !1;
	}
	get supportsHighlight() {
		return !1;
	}
	get layerInfo() {
		return this._layerInfo;
	}
	get layerRenderInfo() {
		return this._layerRenderInfo;
	}
	updateLayerInfo(e) {
		this._layerInfo = {
			...this._layerInfo,
			...e
		}, this.makeLayerDataDirty();
	}
	updateLayerRenderInfo(e) {
		let t = this.supportsPicking && this.supportsHighlight, n = { ...e };
		for (let e of ["pointSize", "polylinesWidth"]) {
			if (!(e in n)) continue;
			let t = n[e];
			(typeof t != "number" || !Number.isFinite(Math.fround(t)) || Math.fround(t) <= 0) && (console.warn(`Layer '${this._layerInfo.id}': ${e} must be a finite positive float32 number.`), delete n[e]);
		}
		"isPick" in n && n.isPick === !0 && !t && (n.isPick = !1, n.pickedComps = void 0), this._layerRenderInfo = {
			...this._layerRenderInfo,
			...n
		}, this.makeLayerRenderInfoDirty();
	}
	setChangeListener(e) {
		this._onChange = e;
	}
	makeLayerDataDirty() {
		this._dataIsDirty = !0, this._onChange?.();
	}
	makeLayerRenderInfoDirty() {
		this._renderInfoIsDirty = !0, this._onChange?.();
	}
	prepareRender(e) {}
	renderPickingPass(e, t) {}
	clearHighlightedIds() {}
	setHighlightedIds(e) {}
	setSkippedIds(e) {}
	clearSkippedIds() {}
	destroy() {}
}, La = "@group(1) @binding(0) var<uniform> modelView: mat4x4f;\n@group(1) @binding(1) var<uniform> projection: mat4x4f;\n@group(1) @binding(2) var<uniform> zIndex: f32;\n\nstruct VSOut {\n    @builtin(position) outPosition: vec4<f32>,\n    @location(0) outTexCoord: vec2<f32>,\n };\n\n@vertex\nfn main(@location(0) inPosition: vec2f, @location(1) inTexCoord: vec2f) -> VSOut {\n    var vsOut: VSOut;\n\n    vsOut.outPosition = projection * modelView * vec4f(inPosition.x, inPosition.y, zIndex, 1);\n    vsOut.outTexCoord = inTexCoord;\n\n    return vsOut;\n}", Ra = "@group(0) @binding(6) var<uniform> opacity : f32;\n\n@group(2) @binding(0) var rasterData : texture_2d<f32>;\n@group(2) @binding(1) var rasterSampler : sampler;\n\n@fragment \nfn main(@location(0) inTexCoord: vec2f) -> @location(0) vec4f {\n    var color = textureSample(rasterData, rasterSampler, inTexCoord);\n\n    let alpha = color.a * opacity;\n    return vec4f(color.rgb * alpha, alpha);\n}", za = 1, W = class {
	_renderer;
	_mviewBuffer;
	_projectionBuffer;
	_zIndexBuffer;
	_cameraBindGroup;
	_cameraBindGroupLayout;
	_colorBuffer;
	_highlightColorBuffer;
	_invalidValueColorBuffer;
	_cMapTexture;
	_useColorMap;
	_useHighlight;
	_opacity;
	_domainBuffer;
	_renderInfoBindGroup;
	_renderInfoBindGroupLayout;
	_mviewData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(16 * Float32Array.BYTES_PER_ELEMENT));
	_projectionData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(16 * Float32Array.BYTES_PER_ELEMENT));
	_zIndexData = new Float32Array(new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT));
	_colorData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(4 * Float32Array.BYTES_PER_ELEMENT));
	_highlightColorData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(4 * Float32Array.BYTES_PER_ELEMENT));
	_invalidValueColorData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(4 * Float32Array.BYTES_PER_ELEMENT));
	_useColorMapData = new Float32Array(new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT));
	_useHighlightData = new Float32Array(new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT));
	_opacityData = new Float32Array(new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT));
	_domainData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(4 * Float32Array.BYTES_PER_ELEMENT));
	constructor(e) {
		this._renderer = e;
	}
	createCameraUniformBindGroup() {
		this._mviewBuffer = this._renderer.device.createBuffer({
			label: "ModelView matrix buffer",
			size: 64,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._projectionBuffer = this._renderer.device.createBuffer({
			label: "Projection matrix buffer",
			size: 64,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._zIndexBuffer = this._renderer.device.createBuffer({
			label: "Z index buffer",
			size: 4,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._cameraBindGroupLayout = this._renderer.device.createBindGroupLayout({ entries: [
			{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				buffer: {}
			},
			{
				binding: 1,
				visibility: GPUShaderStage.VERTEX,
				buffer: {}
			},
			{
				binding: 2,
				visibility: GPUShaderStage.VERTEX,
				buffer: {}
			}
		] }), this._cameraBindGroup = this._renderer.device.createBindGroup({
			layout: this._cameraBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: this._mviewBuffer }
				},
				{
					binding: 1,
					resource: { buffer: this._projectionBuffer }
				},
				{
					binding: 2,
					resource: { buffer: this._zIndexBuffer }
				}
			]
		});
	}
	updateCameraUniforms(e) {
		this._mviewData.set(e.getModelViewMatrix()), this._projectionData.set(e.getProjectionMatrix()), this._renderer.device.queue.writeBuffer(this._mviewBuffer, 0, this._mviewData), this._renderer.device.queue.writeBuffer(this._projectionBuffer, 0, this._projectionData);
	}
	updateZIndex(e) {
		this._zIndexData[0] = e, this._renderer.device.queue.writeBuffer(this._zIndexBuffer, 0, this._zIndexData);
	}
	createColorUniformBindGroup() {
		this._colorBuffer = this._renderer.device.createBuffer({
			label: "Fixed color buffer",
			size: 16,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._highlightColorBuffer = this._renderer.device.createBuffer({
			label: "Highlight color buffer",
			size: 16,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._invalidValueColorBuffer = this._renderer.device.createBuffer({
			label: "Invalid thematic value color buffer",
			size: 16,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._useColorMap = this._renderer.device.createBuffer({
			label: "Enable colormap on render",
			size: 4,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._useHighlight = this._renderer.device.createBuffer({
			label: "Enable highlight on render",
			size: 4,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._cMapTexture = this._renderer.device.createTexture({
			label: "Colormap texture",
			size: {
				width: 256,
				height: za
			},
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
			format: "rgba8unorm"
		});
		let e = this._renderer.device.createSampler({
			label: "Fixed color buffer",
			magFilter: "linear",
			minFilter: "linear",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge"
		});
		this._opacity = this._renderer.device.createBuffer({
			label: "Enable opacity on render",
			size: 4,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._domainBuffer = this._renderer.device.createBuffer({
			label: "Colormap domain buffer",
			size: 16,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._renderInfoBindGroupLayout = this._renderer.device.createBindGroupLayout({ entries: [
			{
				binding: 0,
				visibility: GPUShaderStage.FRAGMENT,
				buffer: {}
			},
			{
				binding: 1,
				visibility: GPUShaderStage.FRAGMENT,
				buffer: {}
			},
			{
				binding: 2,
				visibility: GPUShaderStage.FRAGMENT,
				buffer: {}
			},
			{
				binding: 3,
				visibility: GPUShaderStage.FRAGMENT,
				buffer: {}
			},
			{
				binding: 4,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {}
			},
			{
				binding: 5,
				visibility: GPUShaderStage.FRAGMENT,
				sampler: {}
			},
			{
				binding: 6,
				visibility: GPUShaderStage.FRAGMENT,
				buffer: {}
			},
			{
				binding: 7,
				visibility: GPUShaderStage.FRAGMENT,
				buffer: {}
			},
			{
				binding: 8,
				visibility: GPUShaderStage.FRAGMENT,
				buffer: {}
			}
		] }), this._renderInfoBindGroup = this._renderer.device.createBindGroup({
			layout: this._renderInfoBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: this._colorBuffer }
				},
				{
					binding: 1,
					resource: { buffer: this._highlightColorBuffer }
				},
				{
					binding: 2,
					resource: { buffer: this._useColorMap }
				},
				{
					binding: 3,
					resource: { buffer: this._useHighlight }
				},
				{
					binding: 4,
					resource: this._cMapTexture.createView()
				},
				{
					binding: 5,
					resource: e
				},
				{
					binding: 6,
					resource: { buffer: this._opacity }
				},
				{
					binding: 7,
					resource: { buffer: this._domainBuffer }
				},
				{
					binding: 8,
					resource: { buffer: this._invalidValueColorBuffer }
				}
			]
		});
	}
	resolveLayerColor(e) {
		return e.layerRenderInfo.color ?? this._renderer.style.getColor(e.layerInfo.typeLayer);
	}
	updateColorUniforms(e) {
		let t = e.layerRenderInfo.colormap.computedDomain, n = Array.isArray(t) && t.length > 0 && t.every((e) => typeof e == "number"), r = Array.isArray(t) && t.length > 0 && t.every((e) => typeof e == "string"), i = {
			color: this.resolveLayerColor(e),
			highlightColor: this._renderer.style.getHighlightColor(),
			invalidValueColor: this._renderer.style.getInvalidValueColor(),
			colorMap: N.getColorMap(e.layerRenderInfo.colormap.config.interpolator, void 0, r ? t : void 0),
			useColorMap: !!e.layerRenderInfo.isColorMap,
			useHighlight: !!e.layerRenderInfo.isPick,
			opacity: e.layerRenderInfo.opacity
		}, a = n ? Number(t[0]) : 0, o = n ? Number(t[t.length - 1]) : 1, s = r ? t.length : 0;
		this._colorData[0] = i.color.r, this._colorData[1] = i.color.g, this._colorData[2] = i.color.b, this._colorData[3] = 1, this._highlightColorData[0] = i.highlightColor.r, this._highlightColorData[1] = i.highlightColor.g, this._highlightColorData[2] = i.highlightColor.b, this._highlightColorData[3] = 1, this._invalidValueColorData[0] = i.invalidValueColor.r, this._invalidValueColorData[1] = i.invalidValueColor.g, this._invalidValueColorData[2] = i.invalidValueColor.b, this._invalidValueColorData[3] = 1, this._useColorMapData[0] = +!!i.useColorMap, this._useHighlightData[0] = +!!i.useHighlight, this._opacityData[0] = i.opacity, this._domainData[0] = a, this._domainData[1] = o, this._domainData[2] = n ? 1 : r ? 2 : 0, this._domainData[3] = s;
		let c = new Uint8Array(i.colorMap);
		this._renderer.device.queue.writeBuffer(this._colorBuffer, 0, this._colorData), this._renderer.device.queue.writeBuffer(this._highlightColorBuffer, 0, this._highlightColorData), this._renderer.device.queue.writeBuffer(this._invalidValueColorBuffer, 0, this._invalidValueColorData), this._renderer.device.queue.writeBuffer(this._useHighlight, 0, this._useHighlightData), this._renderer.device.queue.writeBuffer(this._useColorMap, 0, this._useColorMapData), this._renderer.device.queue.writeTexture({ texture: this._cMapTexture }, c, {}, {
			width: 256,
			height: za
		}), this._renderer.device.queue.writeBuffer(this._opacity, 0, this._opacityData), this._renderer.device.queue.writeBuffer(this._domainBuffer, 0, this._domainData);
	}
	destroy() {
		this._mviewBuffer?.destroy(), this._projectionBuffer?.destroy(), this._zIndexBuffer?.destroy(), this._colorBuffer?.destroy(), this._highlightColorBuffer?.destroy(), this._invalidValueColorBuffer?.destroy(), this._useColorMap?.destroy(), this._useHighlight?.destroy(), this._opacity?.destroy(), this._domainBuffer?.destroy(), this._cMapTexture?.destroy();
	}
	_syncFloatData(e, t) {
		return (!e || e.length !== t.length) && (e = new Float32Array(new ArrayBuffer(t.length * Float32Array.BYTES_PER_ELEMENT))), e.set(t), e;
	}
	_syncUintData(e, t) {
		return (!e || e.length !== t.length) && (e = new Uint32Array(new ArrayBuffer(t.length * Uint32Array.BYTES_PER_ELEMENT))), e.set(t), e;
	}
	_syncU8Data(e, t) {
		return (!e || e.length !== t.length) && (e = new Uint8Array(new ArrayBuffer(t.length * Uint8Array.BYTES_PER_ELEMENT))), e.set(t), e;
	}
	_syncFloatLength(e, t) {
		return (!e || e.length !== t) && (e = new Float32Array(new ArrayBuffer(t * Float32Array.BYTES_PER_ELEMENT))), e;
	}
	prepareRender(e) {}
}, Ba = class extends W {
	_positionBuffer;
	_texCoordBuffer;
	_indicesBuffer;
	_vertModule;
	_fragModule;
	_pipeline;
	_rasterBuffer;
	_rasterBindGroup;
	_rasterBindGroupLayout;
	_positionData = null;
	_texCoordData = null;
	_indicesData = null;
	_rasterTextureData = null;
	constructor(e) {
		super(e);
	}
	destroy() {
		this._positionBuffer?.destroy(), this._texCoordBuffer?.destroy(), this._indicesBuffer?.destroy(), this._rasterBuffer?.destroy(), super.destroy();
	}
	build(e) {
		this.createShaders(), this.createVertexBuffers(e), this.createRasterUniformBindGroup(e), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.updateVertexBuffers(e), this.updateColorUniforms(e), this.updateRasterUniforms(e), this.createPipeline();
	}
	createShaders() {
		let e = { code: La };
		this._vertModule = this._renderer.device.createShaderModule(e);
		let t = { code: Ra };
		this._fragModule = this._renderer.device.createShaderModule(t);
	}
	createVertexBuffers(e) {
		this._positionBuffer = this._renderer.device.createBuffer({
			label: "Position buffer",
			size: e.position.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._texCoordBuffer = this._renderer.device.createBuffer({
			label: "Texture coordinates buffer",
			size: e.texCoord.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._indicesBuffer = this._renderer.device.createBuffer({
			label: "Primitive indices buffer",
			size: e.indices.length * 4,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		});
	}
	updateVertexBuffers(e) {
		this._positionData = this._syncFloatData(this._positionData, e.position), this._texCoordData = this._syncFloatData(this._texCoordData, e.texCoord), this._indicesData = this._syncUintData(this._indicesData, e.indices), this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, this._positionData), this._renderer.device.queue.writeBuffer(this._texCoordBuffer, 0, this._texCoordData), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, this._indicesData);
	}
	createRasterUniformBindGroup(e) {
		this._rasterBuffer = this._renderer.device.createTexture({
			label: "Raster texture",
			size: {
				width: e.rasterResX,
				height: e.rasterResY
			},
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
			format: "rgba8unorm"
		});
		let t = this._renderer.device.createSampler({
			label: "Raster sampler",
			magFilter: "linear",
			minFilter: "linear",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge"
		});
		this._rasterBindGroupLayout = this._renderer.device.createBindGroupLayout({
			label: "Raster bind group layout",
			entries: [{
				binding: 0,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {}
			}, {
				binding: 1,
				visibility: GPUShaderStage.FRAGMENT,
				sampler: {}
			}]
		}), this._rasterBindGroup = this._renderer.device.createBindGroup({
			layout: this._rasterBindGroupLayout,
			label: "Raster bind group",
			entries: [{
				binding: 0,
				resource: this._rasterBuffer.createView()
			}, {
				binding: 1,
				resource: t
			}]
		});
	}
	updateRasterUniforms(e) {
		e.rasterData && e.rasterData.length !== 0 && (this._rasterTextureData = this._syncU8Data(this._rasterTextureData, e.rasterData), this._renderer.device.queue.writeTexture({ texture: this._rasterBuffer }, this._rasterTextureData, {
			bytesPerRow: e.rasterResX * 4,
			rowsPerImage: e.rasterResY
		}, {
			width: e.rasterResX,
			height: e.rasterResY
		}));
	}
	createPipeline() {
		let e = {
			shaderLocation: 0,
			offset: 0,
			format: "float32x2"
		}, t = {
			shaderLocation: 1,
			offset: 0,
			format: "float32x2"
		}, n = {
			attributes: [e],
			arrayStride: 8,
			stepMode: "vertex"
		}, r = {
			attributes: [t],
			arrayStride: 8,
			stepMode: "vertex"
		}, i = {
			module: this._vertModule,
			entryPoint: "main",
			buffers: [n, r]
		}, a = {
			module: this._fragModule,
			entryPoint: "main",
			targets: [{
				format: this._renderer.canvasFormat,
				blend: {
					color: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					},
					alpha: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					}
				}
			}]
		}, o = {
			frontFace: "cw",
			cullMode: "none",
			topology: "triangle-list"
		}, s = { count: this._renderer.sampleCount }, c = {
			depthWriteEnabled: !1,
			depthCompare: "greater-equal",
			format: "depth32float"
		}, l = { bindGroupLayouts: [
			this._renderInfoBindGroupLayout,
			this._cameraBindGroupLayout,
			this._rasterBindGroupLayout
		] }, u = {
			layout: this._renderer.device.createPipelineLayout(l),
			vertex: i,
			fragment: a,
			primitive: o,
			depthStencil: c,
			multisample: s,
			label: "Pipeline Raster"
		};
		this._pipeline = this._renderer.device.createRenderPipeline(u);
	}
	renderPass(e, t) {
		t.setPipeline(this._pipeline), this.updateCameraUniforms(e), t.setVertexBuffer(0, this._positionBuffer), t.setVertexBuffer(1, this._texCoordBuffer), t.setIndexBuffer(this._indicesBuffer, "uint32"), t.setBindGroup(0, this._renderInfoBindGroup), t.setBindGroup(1, this._cameraBindGroup), t.setBindGroup(2, this._rasterBindGroup);
		let n = this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT;
		n > 0 && t.drawIndexed(n);
	}
}, Va = class extends Ia {
	_position;
	_indices;
	_texCoord;
	_components = [];
	_rasterResX;
	_rasterResY;
	_rasterData;
	_rasterValues = /* @__PURE__ */ new Float32Array();
	_transferFunction = { ...Er };
	_pipeline;
	constructor(e, t, n) {
		super(e, t), this.loadLayerData(n);
	}
	get position() {
		return this._position;
	}
	get indices() {
		return this._indices;
	}
	get texCoord() {
		return this._texCoord;
	}
	get components() {
		return this._components;
	}
	get rasterResX() {
		return this._rasterResX;
	}
	get rasterResY() {
		return this._rasterResY;
	}
	get rasterData() {
		return this._rasterData;
	}
	get rasterValues() {
		return this._rasterValues;
	}
	setTransferFunction(e) {
		this._transferFunction = {
			...this._transferFunction,
			...e
		};
	}
	loadLayerData(e) {
		this.loadGeometry(e.geometry), this.loadComponent(e.components), e.rasterResX !== void 0 && e.rasterResY !== void 0 && (this._rasterResX = e.rasterResX, this._rasterResY = e.rasterResY), e.raster && e.raster.length && this.loadRaster(e.raster);
	}
	loadGeometry(e) {
		let t = 0, n = 0, r = 0;
		for (let i of e) t += i.position.length, n += i.indices?.length ?? 0, r += i.texCoord?.length ?? 0;
		let i = new Float32Array(t), a = new Uint32Array(n), o = new Float32Array(r), s = 0, c = 0, l = 0, u = 0;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (i.set(n.position, s), n.indices) {
				for (let e = 0; e < n.indices.length; e++) a[c + e] = n.indices[e] + u;
				c += n.indices.length;
			}
			n.texCoord && (o.set(n.texCoord, l), l += n.texCoord.length), s += n.position.length, u += n.position.length / 2;
		}
		console.assert(i.length % 2 == 0, "Raster geometry position length must be a multiple of 2."), console.assert(o.length % 2 == 0, "Raster geometry texCoord length must be a multiple of 2."), console.assert(i.length === o.length, "Raster geometry and texCoord arrays should have matching lengths."), this._position = i, this._indices = a, this._texCoord = o;
	}
	loadComponent(e) {
		this._components = [];
		let t = {
			nPoints: 0,
			nTriangles: 0
		};
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			t.nPoints += r.nPoints, t.nTriangles += r.nTriangles, this._components.push({
				nPoints: t.nPoints,
				nTriangles: t.nTriangles,
				featureIndex: r.featureIndex,
				featureId: r.featureId
			});
		}
	}
	loadRaster(e) {
		if (!e || e.length === 0) return;
		this._rasterValues = e;
		let t = e.length === this._rasterResX * this._rasterResY * 4, n = new Float32Array(t ? e.length : this._rasterResX * this._rasterResY * 4);
		if (t) n.set(e);
		else {
			let t = [];
			for (let n = 0; n < e.length; n++) isNaN(e[n]) || t.push(e[n]);
			let r = this._layerRenderInfo.colormap.computedDomain, i = Array.isArray(r) && r.length > 0 && r.every((e) => typeof e == "number") ? r : null, a = i ? t.filter((e) => e >= i[0] && e <= i[i.length - 1]) : t, o = Dr(a.length > 0 ? a : t, this._transferFunction);
			if (o.validCount === 0) {
				n.fill(0), this._rasterData = n;
				return;
			}
			for (let t = 0; t < e.length; t++) {
				let r = e[t], a = t * 4;
				if (isNaN(r)) {
					n[a] = 0, n[a + 1] = 0, n[a + 2] = 0, n[a + 3] = 0;
					continue;
				}
				let s = i ?? [o.min, o.max], c = N.getColor(r, this._layerRenderInfo.colormap.config.interpolator, s), l = Or(r, o);
				n[a] = c.r, n[a + 1] = c.g, n[a + 2] = c.b, n[a + 3] = l;
			}
		}
		this._rasterData = n;
	}
	createPipeline(e) {
		this._pipeline = new Ba(e), this._pipeline.build(this);
	}
	renderPass(e, t) {
		if (this._dataIsDirty) {
			let e = this._pipeline;
			e.updateVertexBuffers(this), e.updateRasterUniforms(this), this._dataIsDirty = !1;
		}
		this._renderInfoIsDirty &&= (this._pipeline.updateColorUniforms(this), !1), this._pipeline.updateZIndex(this._layerInfo.zIndex), this._pipeline.renderPass(e, t);
	}
	destroy() {
		this._pipeline?.destroy();
	}
}, Ha = "@group(1) @binding(0) var<uniform> modelView: mat4x4f;\n@group(1) @binding(1) var<uniform> projection: mat4x4f;\n@group(1) @binding(2) var<uniform> zIndex: f32;\n\nstruct VSOut {\n    @builtin(position) outPosition: vec4<f32>,\n    @location(0) outThematic: f32,\n    @location(1) outHighlighted: f32,\n    @location(2) outThematicValid: f32,\n    @location(3) outSkipped: f32\n };\n\n@vertex\nfn main(@location(0) inPosition: vec2f, @location(1) inThematic: f32, @location(2) inHighlighted: f32, @location(3) inThematicValid: f32, @location(4) inSkipped: f32) -> VSOut {\n    var vsOut: VSOut;\n\n    vsOut.outPosition = projection * modelView * vec4f(inPosition.x, inPosition.y, zIndex, 1);\n    vsOut.outThematic = inThematic;\n    vsOut.outHighlighted = inHighlighted;\n    vsOut.outThematicValid = inThematicValid;\n    vsOut.outSkipped = inSkipped;\n\n    return vsOut;\n}", Ua = "@group(0) @binding(0) var<uniform> color : vec4f;\n@group(0) @binding(1) var<uniform> highlightColor : vec4f;\n@group(0) @binding(2) var<uniform> showThematic : f32;\n@group(0) @binding(3) var<uniform> showHighlight : f32;\n@group(0) @binding(4) var cMapTex : texture_2d<f32>;\n@group(0) @binding(5) var cMapSampler : sampler;\n@group(0) @binding(6) var<uniform> opacity : f32;\n@group(0) @binding(7) var<uniform> domainParams : vec4f;\n@group(0) @binding(8) var<uniform> invalidValueColor : vec4f;\n\n@fragment \nfn main(@location(0) inThematic: f32, @location(1) inHighlighted: f32, @location(2) inThematicValid: f32, @location(3) inSkipped: f32) -> @location(0) vec4f {\n\n    if (inSkipped > 0.0) {\n        discard;\n    }\n\n    var color = vec4f(color.r / 255, color.g / 255, color.b / 255, color.a);\n\n    var thematicValue = inThematic;\n    if (domainParams.z > 1.5) {\n        let nCategories = domainParams.w;\n        let denom = max(1.0, nCategories - 1.0);\n        thematicValue = clamp(inThematic / denom, 0.0, 1.0);\n    } else if (domainParams.z > 0.5) {\n        let minVal = domainParams.x;\n        let maxVal = domainParams.y;\n        let range = maxVal - minVal;\n        thematicValue = select(0.0, clamp((inThematic - minVal) / range, 0.0, 1.0), range > 0.0);\n    }\n\n    var sampledColor = textureSample(cMapTex, cMapSampler, vec2f(thematicValue, 0.0));\n\n    if(showHighlight > 0 && inHighlighted > 0) {\n        color = vec4f(highlightColor.r / 255, highlightColor.g / 255, highlightColor.b / 255, highlightColor.a);\n    }\n    else if (showThematic > 0 && inThematicValid < 0.5) {\n        color = vec4f(invalidValueColor.r / 255, invalidValueColor.g / 255, invalidValueColor.b / 255, invalidValueColor.a);\n    }\n    else if (showThematic > 0) {\n        color = sampledColor;\n    }\n    return vec4f(color.rgb * opacity, opacity);\n}", Wa = class extends W {
	_positionBuffer;
	_thematicBuffer;
	_thematicValidityBuffer;
	_highlightedBuffer;
	_skippedBuffer;
	_indicesBuffer;
	_vertModule;
	_fragModule;
	_pipeline;
	_positionData = null;
	_thematicData = null;
	_thematicValidityData = null;
	_highlightedData = null;
	_skippedData = null;
	_indicesData = null;
	constructor(e) {
		super(e);
	}
	destroy() {
		this._positionBuffer?.destroy(), this._thematicBuffer?.destroy(), this._thematicValidityBuffer?.destroy(), this._highlightedBuffer?.destroy(), this._skippedBuffer?.destroy(), this._indicesBuffer?.destroy(), super.destroy();
	}
	build(e) {
		this.createShaders(), this.createVertexBuffers(e), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.updateVertexBuffers(e), this.updateColorUniforms(e), this.createPipeline();
	}
	createShaders() {
		let e = { code: Ha };
		this._vertModule = this._renderer.device.createShaderModule(e);
		let t = { code: Ua };
		this._fragModule = this._renderer.device.createShaderModule(t);
	}
	createVertexBuffers(e) {
		this._positionBuffer = this._renderer.device.createBuffer({
			label: "Position buffer",
			size: e.position.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._thematicBuffer = this._renderer.device.createBuffer({
			label: "Thematic data buffer",
			size: e.thematic.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._thematicValidityBuffer = this._renderer.device.createBuffer({
			label: "Thematic validity buffer",
			size: e.thematicValidity.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._highlightedBuffer = this._renderer.device.createBuffer({
			label: "Highlighted data buffer",
			size: e.highlightedVertices.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._skippedBuffer = this._renderer.device.createBuffer({
			label: "Skipped data buffer",
			size: e.skippedVertices.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._indicesBuffer = this._renderer.device.createBuffer({
			label: "Primitive indices buffer",
			size: e.indices.length * 4,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		});
	}
	updateVertexBuffers(e) {
		this._positionData = this._syncFloatData(this._positionData, e.position), this._thematicData = this._syncFloatData(this._thematicData, e.thematic), this._thematicValidityData = this._syncFloatData(this._thematicValidityData, e.thematicValidity), this._highlightedData = this._syncFloatData(this._highlightedData, e.highlightedVertices), this._skippedData = this._syncFloatData(this._skippedData, e.skippedVertices), this._indicesData = this._syncUintData(this._indicesData, e.indices), this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, this._positionData), this._renderer.device.queue.writeBuffer(this._thematicBuffer, 0, this._thematicData), this._renderer.device.queue.writeBuffer(this._thematicValidityBuffer, 0, this._thematicValidityData), this._renderer.device.queue.writeBuffer(this._highlightedBuffer, 0, this._highlightedData), this._renderer.device.queue.writeBuffer(this._skippedBuffer, 0, this._skippedData), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, this._indicesData);
	}
	createPipeline() {
		let e = {
			shaderLocation: 0,
			offset: 0,
			format: "float32x2"
		}, t = {
			shaderLocation: 1,
			offset: 0,
			format: "float32"
		}, n = {
			shaderLocation: 2,
			offset: 0,
			format: "float32"
		}, r = {
			shaderLocation: 3,
			offset: 0,
			format: "float32"
		}, i = {
			shaderLocation: 4,
			offset: 0,
			format: "float32"
		}, a = {
			attributes: [e],
			arrayStride: 8,
			stepMode: "vertex"
		}, o = {
			attributes: [t],
			arrayStride: 4,
			stepMode: "vertex"
		}, s = {
			attributes: [n],
			arrayStride: 4,
			stepMode: "vertex"
		}, c = {
			attributes: [r],
			arrayStride: 4,
			stepMode: "vertex"
		}, l = {
			attributes: [i],
			arrayStride: 4,
			stepMode: "vertex"
		}, u = {
			module: this._vertModule,
			entryPoint: "main",
			buffers: [
				a,
				o,
				s,
				c,
				l
			]
		}, d = {
			module: this._fragModule,
			entryPoint: "main",
			targets: [{
				format: this._renderer.canvasFormat,
				blend: {
					color: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					},
					alpha: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					}
				}
			}]
		}, f = {
			frontFace: "cw",
			cullMode: "none",
			topology: "triangle-list"
		}, p = { count: this._renderer.sampleCount }, m = {
			depthWriteEnabled: !1,
			depthCompare: "greater-equal",
			format: "depth32float"
		}, h = { bindGroupLayouts: [this._renderInfoBindGroupLayout, this._cameraBindGroupLayout] }, g = {
			layout: this._renderer.device.createPipelineLayout(h),
			vertex: u,
			fragment: d,
			primitive: f,
			depthStencil: m,
			multisample: p,
			label: "Pipeline triangle flat"
		};
		this._pipeline = this._renderer.device.createRenderPipeline(g);
	}
	renderPass(e, t) {
		t.setPipeline(this._pipeline), this.updateCameraUniforms(e), t.setVertexBuffer(0, this._positionBuffer), t.setVertexBuffer(1, this._thematicBuffer), t.setVertexBuffer(2, this._highlightedBuffer), t.setVertexBuffer(3, this._thematicValidityBuffer), t.setVertexBuffer(4, this._skippedBuffer), t.setIndexBuffer(this._indicesBuffer, "uint32"), t.setBindGroup(0, this._renderInfoBindGroup), t.setBindGroup(1, this._cameraBindGroup);
		let n = this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT;
		n > 0 && t.drawIndexed(n);
	}
}, Ga = "@group(0) @binding(0) var<uniform> modelView: mat4x4f;\n@group(0) @binding(1) var<uniform> projection: mat4x4f;\n@group(0) @binding(2) var<uniform> zIndex: f32;\n\nstruct VSOut {\n    @builtin(position) position: vec4<f32>,\n    @location(0) color: vec3<f32>,\n };\n\n@vertex\nfn main(@builtin(vertex_index) i: u32, @location(0) inPosition: vec2f, @location(1) objectId: vec3<f32>) -> VSOut {\n    var vsOut: VSOut;\n    vsOut.position = projection * modelView * vec4f(inPosition.x, inPosition.y, zIndex, 1);\n    vsOut.color = objectId;\n\n    return vsOut;\n}", Ka = "@fragment\nfn main(@location(0) color: vec3<f32>) -> @location(0) vec4<f32> {\n    return vec4<f32>(color, 1.0);\n}", qa = "@group(0) @binding(0) var<uniform> modelView: mat4x4f;\n@group(0) @binding(1) var<uniform> projection: mat4x4f;\n@group(0) @binding(2) var<uniform> zIndex: f32;\n\nstruct TerrainUniform {\n    heightOriginCell: vec4<f32>,\n    heightDimsEnabled: vec4<f32>,\n};\n\n@group(1) @binding(0) var<uniform> terrain: TerrainUniform;\n@group(1) @binding(1) var terrainHeightTexture: texture_2d<f32>;\n\nstruct VSOut {\n    @builtin(position) position: vec4<f32>,\n    @location(0) color: vec3<f32>,\n };\n\nfn terrainHeight(xy: vec2<f32>) -> f32 {\n    if (terrain.heightDimsEnabled.z < 0.5) {\n        return 0.0;\n    }\n\n    let origin = terrain.heightOriginCell.xy;\n    let cellSize = terrain.heightOriginCell.zw;\n    let dims = vec2<i32>(i32(terrain.heightDimsEnabled.x), i32(terrain.heightDimsEnabled.y));\n    let texel = clamp((xy - origin) / cellSize, vec2<f32>(0.0), vec2<f32>(f32(dims.x - 2), f32(dims.y - 2)));\n    let base = vec2<i32>(floor(texel));\n    let blend = fract(texel);\n    let h00 = textureLoad(terrainHeightTexture, base, 0).r;\n    let h10 = textureLoad(terrainHeightTexture, base + vec2<i32>(1, 0), 0).r;\n    let h01 = textureLoad(terrainHeightTexture, base + vec2<i32>(0, 1), 0).r;\n    let h11 = textureLoad(terrainHeightTexture, base + vec2<i32>(1, 1), 0).r;\n\n    return mix(mix(h00, h10, blend.x), mix(h01, h11, blend.x), blend.y);\n}\n\n@vertex\nfn main(@location(0) inPosition: vec3f, @location(1) objectId: vec3<f32>) -> VSOut {\n    var vsOut: VSOut;\n    let terrainZ = terrainHeight(inPosition.xy);\n    vsOut.position = projection * modelView * vec4f(inPosition.x, inPosition.y, inPosition.z + terrainZ + zIndex, 1);\n    vsOut.color = objectId;\n\n    return vsOut;\n}", Ja = class extends W {
	_positionBuffer;
	_objectIdsBuffer;
	_indicesBuffer;
	_pipeline;
	_vertModule;
	_fragModule;
	_dimension;
	_terrainUniformBuffer;
	_terrainBindGroupLayout;
	_terrainBindGroup;
	_dummyTerrainTexture;
	_terrainUniformData = /* @__PURE__ */ new Float32Array(8);
	_positionData = null;
	_indicesData = null;
	_objectIdsData = null;
	constructor(e, t = 2) {
		super(e), this._dimension = t;
	}
	destroy() {
		this._positionBuffer?.destroy(), this._objectIdsBuffer?.destroy(), this._indicesBuffer?.destroy(), this._terrainUniformBuffer?.destroy(), this._dummyTerrainTexture?.destroy(), super.destroy();
	}
	build(e) {
		this.createShaders(), this.createVertexBuffers(e), this.createCameraUniformBindGroup(), this._dimension === 3 && this.createTerrainHeightBindGroup(), this.updateVertexBuffers(e), this.createPipeline();
	}
	createShaders() {
		let e = { code: this._dimension === 3 ? qa : Ga };
		this._vertModule = this._renderer.device.createShaderModule(e);
		let t = { code: Ka };
		this._fragModule = this._renderer.device.createShaderModule(t);
	}
	createVertexBuffers(e) {
		this._positionBuffer = this._renderer.device.createBuffer({
			label: "Position buffer",
			size: e.position.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._objectIdsBuffer = this._renderer.device.createBuffer({
			label: "Object id buffer",
			size: e.position.length / this._dimension * 3 * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._indicesBuffer = this._renderer.device.createBuffer({
			label: "Primitive indices buffer",
			size: e.indices.length * 4,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		});
	}
	createTerrainHeightBindGroup() {
		this._terrainUniformBuffer = this._renderer.device.createBuffer({
			label: "Picking terrain height uniform",
			size: 8 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._dummyTerrainTexture = this._renderer.device.createTexture({
			label: "Picking dummy terrain height texture",
			size: [2, 2],
			format: "r32float",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
		}), this._terrainBindGroupLayout = this._renderer.device.createBindGroupLayout({
			label: "Picking terrain height bind group layout",
			entries: [{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				buffer: { type: "uniform" }
			}, {
				binding: 1,
				visibility: GPUShaderStage.VERTEX,
				texture: { sampleType: "unfilterable-float" }
			}]
		}), this._terrainBindGroup = this._renderer.device.createBindGroup({
			label: "Picking terrain height bind group",
			layout: this._terrainBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._terrainUniformBuffer }
			}, {
				binding: 1,
				resource: this._dummyTerrainTexture.createView()
			}]
		}), this.clearTerrainHeightSource();
	}
	setTerrainHeightSource(e, t) {
		this._terrainUniformBuffer && this._terrainBindGroupLayout && (this._terrainUniformData.set([
			e.originX,
			e.originY,
			e.cellSizeX,
			e.cellSizeY,
			e.width,
			e.height,
			1,
			0
		]), this._renderer.device.queue.writeBuffer(this._terrainUniformBuffer, 0, this._terrainUniformData), this._terrainBindGroup = this._renderer.device.createBindGroup({
			label: "Picking terrain height bind group",
			layout: this._terrainBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._terrainUniformBuffer }
			}, {
				binding: 1,
				resource: t
			}]
		}));
	}
	clearTerrainHeightSource() {
		this._terrainUniformBuffer && this._terrainBindGroupLayout && this._dummyTerrainTexture && (this._terrainUniformData.fill(0), this._terrainUniformData[4] = 2, this._terrainUniformData[5] = 2, this._renderer.device.queue.writeBuffer(this._terrainUniformBuffer, 0, this._terrainUniformData), this._terrainBindGroup = this._renderer.device.createBindGroup({
			label: "Picking terrain height bind group",
			layout: this._terrainBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._terrainUniformBuffer }
			}, {
				binding: 1,
				resource: this._dummyTerrainTexture.createView()
			}]
		}));
	}
	updateVertexBuffers(e) {
		this._positionData = this._syncFloatData(this._positionData, e.position), this._indicesData = this._syncUintData(this._indicesData, e.indices), this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, this._positionData), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, this._indicesData);
		let t = e.position.length / this._dimension;
		this._objectIdsData = this._syncFloatLength(this._objectIdsData, t * 3), this._objectIdsData.fill(0);
		for (let t = 0; t < e.components.length; t++) {
			let n = this._encodeIdToRGB(t), r = e.components[t], i = t > 0 ? e.components[t - 1].nTriangles : 0, a = r.nTriangles;
			for (let t = i * 3; t < a * 3; t++) {
				let r = e.indices[t] * 3;
				this._objectIdsData[r + 0] = n[0], this._objectIdsData[r + 1] = n[1], this._objectIdsData[r + 2] = n[2];
			}
		}
		this._renderer.device.queue.writeBuffer(this._objectIdsBuffer, 0, this._objectIdsData);
	}
	_encodeIdToRGB(e) {
		let t = e + 1;
		return [
			(t & 255) / 255,
			(t >> 8 & 255) / 255,
			(t >> 16 & 255) / 255
		];
	}
	createPipeline() {
		let e = {
			shaderLocation: 0,
			offset: 0,
			format: this._dimension === 3 ? "float32x3" : "float32x2"
		}, t = {
			shaderLocation: 1,
			offset: 0,
			format: "float32x3"
		}, n = {
			attributes: [e],
			arrayStride: 4 * this._dimension,
			stepMode: "vertex"
		}, r = {
			attributes: [t],
			arrayStride: 12,
			stepMode: "vertex"
		}, i = {
			module: this._vertModule,
			entryPoint: "main",
			buffers: [n, r]
		}, a = {
			module: this._fragModule,
			entryPoint: "main",
			targets: [{ format: "rgba8unorm" }]
		}, o = {
			frontFace: "cw",
			cullMode: "none",
			topology: "triangle-list"
		}, s = {
			depthWriteEnabled: !0,
			depthCompare: "greater-equal",
			format: "depth32float"
		}, c = { bindGroupLayouts: this._dimension === 3 ? [this._cameraBindGroupLayout, this._terrainBindGroupLayout] : [this._cameraBindGroupLayout] }, l = {
			layout: this._renderer.device.createPipelineLayout(c),
			vertex: i,
			fragment: a,
			primitive: o,
			depthStencil: s,
			label: "Pipeline triangle picking"
		};
		this._pipeline = this._renderer.device.createRenderPipeline(l);
	}
	renderPass(e, t) {
		if (!this._renderer) return;
		let n = !t;
		t ??= this._renderer.commandEncoder.beginRenderPass({
			colorAttachments: [this._renderer.pickingBuffer],
			depthStencilAttachment: this._renderer.pickingDepthBuffer
		}), t.setPipeline(this._pipeline), this.updateCameraUniforms(e), t.setVertexBuffer(0, this._positionBuffer), t.setVertexBuffer(1, this._objectIdsBuffer), t.setIndexBuffer(this._indicesBuffer, "uint32"), t.setBindGroup(0, this._cameraBindGroup), this._dimension === 3 && this._terrainBindGroup && t.setBindGroup(1, this._terrainBindGroup);
		let r = this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT;
		r > 0 && t.drawIndexed(r), n && t.end();
	}
}, Ya = class extends Ia {
	_dimension;
	_position;
	_thematic;
	_thematicValidity;
	_indices;
	_components = [];
	_highlightedIds;
	_highlightedVertices;
	_skippedIds;
	_skippedVertices;
	_pipeline;
	_pipelinePicking;
	get _vertexCount() {
		return this._position.length / this._dimension;
	}
	constructor(e, t, n, r = 2) {
		super(e, t), this._dimension = r, this.loadLayerData(n);
	}
	get supportsPicking() {
		return !0;
	}
	get supportsHighlight() {
		return !0;
	}
	get position() {
		return this._position;
	}
	get thematic() {
		return this._thematic;
	}
	get thematicValidity() {
		return this._thematicValidity;
	}
	get indices() {
		return this._indices;
	}
	get components() {
		return this._components;
	}
	get highlightedIds() {
		return Array.from(this._highlightedIds);
	}
	get highlightedVertices() {
		return this._highlightedVertices;
	}
	get skippedIds() {
		return Array.from(this._skippedIds);
	}
	get skippedVertices() {
		return this._skippedVertices;
	}
	loadLayerData(e) {
		this.loadGeometry(e.geometry), this.loadComponent(e.components), this._resetInteractionState(), e.thematic && e.thematic.length && this.loadThematic(e.thematic);
	}
	loadGeometry(e) {
		let t = 0, n = 0;
		for (let r of e) t += r.position.length, n += r.indices?.length ?? 0;
		let r = new Float32Array(t), i = new Uint32Array(n), a = 0, o = 0, s = 0;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (r.set(n.position, a), n.indices) {
				for (let e = 0; e < n.indices.length; e++) i[o + e] = n.indices[e] + s;
				o += n.indices.length;
			}
			let c = n.position.length / this._dimension;
			a += n.position.length, s += c;
		}
		this._position = r, this._indices = i;
	}
	loadComponent(e) {
		this._components = [];
		let t = {
			nPoints: 0,
			nTriangles: 0
		};
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			t.nPoints += r.nPoints, t.nTriangles += r.nTriangles, this._components.push({
				nPoints: t.nPoints,
				nTriangles: t.nTriangles,
				featureIndex: r.featureIndex,
				featureId: r.featureId
			});
		}
	}
	loadThematic(e) {
		if (e.length !== this._components.length) return console.error(`VectorLayer.loadThematic: expected ${this._components.length} thematic entries, got ${e.length}.`), !1;
		let t = new Float32Array(this._vertexCount), n = new Float32Array(this._vertexCount), r = 0;
		for (let i = 0; i < e.length; i++) {
			let a = this.aggregateThematicComponent(i, e[i]);
			t.set(a.value, r), n.set(a.valid, r), r += a.value.length;
		}
		return r === this._vertexCount ? (this._thematic = t, this._thematicValidity = n, !0) : (console.error(`VectorLayer.loadThematic: filled ${r} thematic values for ${this._vertexCount} vertices.`), !1);
	}
	createPipeline(e) {
		this._pipeline = new Wa(e), this._pipeline.build(this), this._pipelinePicking = new Ja(e, this._dimension), this._pipelinePicking.build(this);
	}
	renderPass(e, t) {
		this._renderInfoIsDirty &&= (this._pipeline.updateColorUniforms(this), !1), this._dataIsDirty &&= (this._pipeline.updateVertexBuffers(this), this._pipelinePicking.updateVertexBuffers(this), !1), this._pipeline.updateZIndex(this._layerInfo.zIndex), this._pipeline.renderPass(e, t);
	}
	renderPickingPass(e, t) {
		this._pipelinePicking.updateZIndex(this._layerInfo.zIndex), this._pipelinePicking.renderPass(e, t);
	}
	toggleHighlightedIds(e) {
		e.forEach((e) => {
			this._highlightedIds.has(e) ? this._highlightedIds.delete(e) : this._highlightedIds.add(e);
		}), this._forEachUniqueVertexInComponents(e, (e) => {
			this._highlightedVertices[e] = 1 - this._highlightedVertices[e];
		}), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
	}
	setHighlightedIds(e) {
		this.clearHighlightedIds(), this._highlightedIds = new Set(e), this._forEachUniqueVertexInComponents(e, (e) => {
			this._highlightedVertices[e] = 1;
		}), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
	}
	setSkippedIds(e) {
		e.forEach((e) => {
			this._skippedIds.has(e) ? this._skippedIds.delete(e) : this._skippedIds.add(e);
		}), this._forEachUniqueVertexInComponents(e, (e) => {
			this._skippedVertices[e] = 1 - this._skippedVertices[e];
		}), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
	}
	clearHighlightedIds() {
		this._highlightedVertices.fill(0), this._highlightedIds.clear(), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
	}
	clearSkippedIds() {
		this._skippedVertices.fill(0), this._skippedIds.clear(), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
	}
	destroy() {
		this._pipeline?.destroy(), this._pipelinePicking?.destroy();
	}
	aggregateThematicComponent(e, t) {
		let n = e > 0 ? this._components[e - 1].nPoints : 0, r = this._components[e].nPoints - n, i = new Float32Array(r), a = new Float32Array(r), o = t.value ?? 0;
		return i.fill(o), a.fill(t.valid ?? 0), {
			value: i,
			valid: a
		};
	}
	_resetInteractionState() {
		this._highlightedVertices = new Float32Array(this._vertexCount).fill(0), this._highlightedIds = /* @__PURE__ */ new Set(), this._skippedVertices = new Float32Array(this._vertexCount).fill(0), this._skippedIds = /* @__PURE__ */ new Set();
	}
	_forEachUniqueVertexInComponents(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let r of e) {
			if (r < 0 || r >= this._components.length) continue;
			let e = r > 0 ? this._components[r - 1].nTriangles : 0, i = this._components[r].nTriangles;
			for (let r = 3 * e; r < 3 * i; r++) {
				let e = this._indices[r];
				n.has(e) || (n.add(e), t(e));
			}
		}
	}
}, Xa = "@group(1) @binding(0) var<uniform> modelView: mat4x4f;\n@group(1) @binding(1) var<uniform> projection: mat4x4f;\n@group(1) @binding(2) var<uniform> zIndex: f32;\n\nstruct TerrainUniform {\n    heightOriginCell: vec4<f32>,\n    heightDimsEnabled: vec4<f32>,\n};\n\n@group(2) @binding(0) var<uniform> terrain: TerrainUniform;\n@group(2) @binding(1) var terrainHeightTexture: texture_2d<f32>;\n\nstruct VSOut {\n    @builtin(position) outPosition: vec4<f32>,\n    @location(0) outNormal: vec3<f32>,\n    @location(1) outThematic: f32,\n    @location(2) outHighlighted: f32,\n    @location(3) outThematicValid: f32,\n    @location(4) outSkipped: f32\n };\n\nfn terrainHeight(xy: vec2<f32>) -> f32 {\n    if (terrain.heightDimsEnabled.z < 0.5) {\n        return 0.0;\n    }\n\n    let origin = terrain.heightOriginCell.xy;\n    let cellSize = terrain.heightOriginCell.zw;\n    let dims = vec2<i32>(i32(terrain.heightDimsEnabled.x), i32(terrain.heightDimsEnabled.y));\n    let texel = clamp((xy - origin) / cellSize, vec2<f32>(0.0), vec2<f32>(f32(dims.x - 2), f32(dims.y - 2)));\n    let base = vec2<i32>(floor(texel));\n    let blend = fract(texel);\n    let h00 = textureLoad(terrainHeightTexture, base, 0).r;\n    let h10 = textureLoad(terrainHeightTexture, base + vec2<i32>(1, 0), 0).r;\n    let h01 = textureLoad(terrainHeightTexture, base + vec2<i32>(0, 1), 0).r;\n    let h11 = textureLoad(terrainHeightTexture, base + vec2<i32>(1, 1), 0).r;\n\n    return mix(mix(h00, h10, blend.x), mix(h01, h11, blend.x), blend.y);\n}\n\n@vertex\nfn main(@location(0) inPosition: vec3f, @location(1) inNormal: vec3f, @location(2) inThematic: f32, @location(3) inHighlighted: f32, @location(4) inThematicValid: f32, @location(5) inSkipped: f32) -> VSOut {\n    var vsOut: VSOut;\n\n    let terrainZ = terrainHeight(inPosition.xy);\n    vsOut.outPosition = projection * modelView * vec4f(inPosition.x, inPosition.y, inPosition.z + terrainZ, 1);\n    vsOut.outNormal = inNormal;\n    vsOut.outThematic = inThematic;\n    vsOut.outHighlighted = inHighlighted;\n    vsOut.outThematicValid = inThematicValid;\n    vsOut.outSkipped = inSkipped;\n\n    return vsOut;\n}", Za = "@group(0) @binding(0) var<uniform> color : vec4f;\n@group(0) @binding(1) var<uniform> highlightColor : vec4f;\n@group(0) @binding(2) var<uniform> showThematic : f32;\n@group(0) @binding(3) var<uniform> showHighlight : f32;\n@group(0) @binding(4) var cMapTex : texture_2d<f32>;\n@group(0) @binding(5) var cMapSampler : sampler;\n@group(0) @binding(6) var<uniform> opacity : f32;\n@group(0) @binding(7) var<uniform> domainParams : vec4f;\n@group(0) @binding(8) var<uniform> invalidValueColor : vec4f;\n\nstruct BufferOut {\n    @location(0) color  : vec4f,\n    @location(1) normal : vec4f,\n}\n\n@fragment\nfn main(@builtin(position) fragPos: vec4f, @location(0) inNormal: vec3f, @location(1) inThematic: f32, @location(2) inHighlighted: f32, @location(3) inThematicValid: f32, @location(4) inSkipped: f32) -> BufferOut {\n\n    if (inSkipped > 0.0) {\n        discard;\n    }\n\n    \n    \n    \n    var light: vec3f = normalize(vec3f(0.8, 0.5, 1.5));\n\n    var normal: vec3f = normalize(inNormal);\n\n    var diffuse: f32 = 0.28 * max(dot(normal, light), 0.0);\n    var ambient: f32 = 0.62;\n\n    var color = vec4f(color.r / 255, color.g / 255, color.b / 255, color.a);\n\n    var thematicValue = inThematic;\n    if (domainParams.z > 1.5) {\n        let nCategories = domainParams.w;\n        let denom = max(1.0, nCategories - 1.0);\n        thematicValue = clamp(inThematic / denom, 0.0, 1.0);\n    } else if (domainParams.z > 0.5) {\n        let minVal = domainParams.x;\n        let maxVal = domainParams.y;\n        let range = maxVal - minVal;\n        thematicValue = select(0.0, clamp((inThematic - minVal) / range, 0.0, 1.0), range > 0.0);\n    }\n\n    var sampledColor = textureSample(cMapTex, cMapSampler, vec2f(thematicValue, 0.0));\n\n    if(showHighlight > 0 && inHighlighted > 0) {\n        color = vec4f(highlightColor.r / 255, highlightColor.g / 255, highlightColor.b / 255, highlightColor.a);\n    }\n    else if (showThematic > 0 && inThematicValid < 0.5) {\n        color = vec4f(invalidValueColor.r / 255, invalidValueColor.g / 255, invalidValueColor.b / 255, invalidValueColor.a);\n    }\n    else if (showThematic > 0) {\n        color = sampledColor;\n    }\n\n    var shade: vec4f = color * (diffuse + ambient);\n\n    var output : BufferOut;\n    output.color  = vec4f(shade.rgb * opacity, opacity);\n    \n    \n    output.normal = vec4f(normal * 0.5 + 0.5, fragPos.z * 0.998 + 0.001);\n\n    return output;\n}", Qa = "struct VSOut {\n    @builtin(position) Position: vec4<f32>,\n    @location(0) uvs : vec2<f32>,\n};\n\n@vertex \nfn main(@builtin(vertex_index) VertexIndex : u32) -> VSOut {\n \n    var pos = array( \n        vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),\n        vec2(-1.0,  1.0), vec2(1.0, -1.0), vec2( 1.0, 1.0),\n    );\n\n    var vsOut: VSOut;\n    vsOut.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n    vsOut.uvs = (pos[VertexIndex] + 1.0) * 0.5;\n\n    return vsOut;\n}", $a = "fn rand(n: f32) -> f32 { return fract(sin(n) * 43758.5453123); }\n\n@group(0) @binding(0) var texSampler: sampler;\n@group(0) @binding(1) var colorTex: texture_2d<f32>;\n@group(0) @binding(2) var normalTex: texture_2d<f32>;\n\n@fragment\nfn main(@location(0) uvs : vec2<f32>) -> @location(0) vec4f {\n    var fuvs = vec2f(uvs.x, 1.0 - uvs.y);\n\n    var n0tex = textureSample(normalTex, texSampler, fuvs);\n    var n0    = normalize(n0tex.xyz * 2.0 - 1.0);\n\n    \n    \n    \n    let num = 32;\n    var sss = 0.0;\n    for(var i: i32 = 0; i < num; i = i + 1)\n    {\n        var off = f32(i);\n        var dd = 0.0003;\n        if ( i % 5  == 0 ) { dd = 0.001; };\n        if ( i % 10 == 0 ) { dd = 0.002; };\n        let sx = (rand(off)        * 2.0 - 1.0) * dd;\n        let sy = (rand(off*2000.0) * 2.0 - 1.0) * dd;\n\n        var n1tex = textureSample(normalTex, texSampler, fuvs + vec2<f32>(sx, sy));\n\n        if (n1tex.a > 0.0005) {\n            var n1 = normalize(n1tex.xyz * 2.0 - 1.0);\n            sss = sss + dot(n0, n1);\n        } else {\n            sss = sss + 1.0;\n        }\n    }\n\n    let fr = 1.0 / f32(num);\n    let cc = clamp( (sss * fr), 0.40, 1.0);\n\n    let color = textureSample(colorTex, texSampler, fuvs);\n    var result = cc * color.rgb;\n\nreturn vec4<f32>(result, color.a);\n}", eo = "fn rand(n: f32) -> f32 { return fract(sin(n) * 43758.5453123); }\n\n@group(0) @binding(0) var texSampler: sampler;\n@group(0) @binding(1) var colorTex: texture_2d<f32>;\n@group(0) @binding(2) var normalTex: texture_2d<f32>;\n@group(0) @binding(3) var terrainDepthTex: texture_depth_2d;\n@group(0) @binding(4) var buildingDepthTex: texture_depth_2d;\n\nfn terrainDepthAt(uv: vec2<f32>) -> f32 {\n    let dims = vec2<i32>(textureDimensions(terrainDepthTex));\n    let coords = clamp(vec2<i32>(floor(uv * vec2<f32>(dims))), vec2<i32>(0), dims - vec2<i32>(1));\n    return textureLoad(terrainDepthTex, coords, 0);\n}\n\nfn buildingDepthAt(uv: vec2<f32>) -> f32 {\n    let dims = vec2<i32>(textureDimensions(buildingDepthTex));\n    let coords = clamp(vec2<i32>(floor(uv * vec2<f32>(dims))), vec2<i32>(0), dims - vec2<i32>(1));\n    return textureLoad(buildingDepthTex, coords, 0);\n}\n\n@fragment\nfn main(@location(0) uvs : vec2<f32>) -> @location(0) vec4f {\n    var fuvs = vec2f(uvs.x, 1.0 - uvs.y);\n\n    let n0tex = textureSample(normalTex, texSampler, fuvs);\n    let color = textureSample(colorTex, texSampler, fuvs);\n    let terrainDepth = terrainDepthAt(fuvs);\n    let buildingDepth = buildingDepthAt(fuvs);\n    let visible = color.a > 0.0005 && buildingDepth >= terrainDepth - 0.00001;\n    let visibleFactor = select(0.0, 1.0, visible);\n\n    let n0 = normalize(n0tex.xyz * 2.0 - 1.0);\n    let num = 32;\n    var sss = 0.0;\n    for(var i: i32 = 0; i < num; i = i + 1)\n    {\n        var off = f32(i);\n        var dd = 0.0003;\n        if ( i % 5  == 0 ) { dd = 0.001; };\n        if ( i % 10 == 0 ) { dd = 0.002; };\n        let sx = (rand(off)        * 2.0 - 1.0) * dd;\n        let sy = (rand(off*2000.0) * 2.0 - 1.0) * dd;\n\n        var n1tex = textureSample(normalTex, texSampler, fuvs + vec2<f32>(sx, sy));\n\n        if (n1tex.a > 0.0005) {\n            var n1 = normalize(n1tex.xyz * 2.0 - 1.0);\n            sss = sss + dot(n0, n1);\n        } else {\n            sss = sss + 1.0;\n        }\n    }\n\n    let fr = 1.0 / f32(num);\n    let cc = clamp( (sss * fr), 0.40, 1.0);\n    var result = cc * color.rgb;\n\n    return vec4<f32>(result * color.a * visibleFactor, color.a * visibleFactor);\n}", to = class e extends W {
	static _sharedState = /* @__PURE__ */ new WeakMap();
	_positionBuffer;
	_normalBuffer;
	_thematicBuffer;
	_thematicValidityBuffer;
	_highlightedBuffer;
	_skippedBuffer;
	_indicesBuffer;
	_vertModule01;
	_fragModule01;
	_pipeline01;
	_positionData = null;
	_normalData = null;
	_thematicData = null;
	_thematicValidityData = null;
	_highlightedData = null;
	_skippedData = null;
	_indicesData = null;
	_terrainUniformBuffer;
	_terrainBindGroupLayout;
	_terrainBindGroup;
	_dummyTerrainTexture;
	_terrainUniformData = /* @__PURE__ */ new Float32Array(8);
	constructor(e) {
		super(e);
	}
	destroy() {
		this._positionBuffer?.destroy(), this._normalBuffer?.destroy(), this._thematicBuffer?.destroy(), this._thematicValidityBuffer?.destroy(), this._highlightedBuffer?.destroy(), this._skippedBuffer?.destroy(), this._indicesBuffer?.destroy(), this._terrainUniformBuffer?.destroy(), this._dummyTerrainTexture?.destroy(), super.destroy();
	}
	static beginSharedGeometryPass(e) {
		let t = this._ensureSharedState(e);
		return t.colorsSharedBuffer.loadOp = "clear", t.normalsSharedBuffer.loadOp = "clear", t.depthBufferPass01.depthLoadOp = "clear", e.commandEncoder.beginRenderPass({
			colorAttachments: [t.colorsSharedBuffer, t.normalsSharedBuffer],
			depthStencilAttachment: t.depthBufferPass01
		});
	}
	static compositeSharedPass(e, t) {
		let n = this._ensureSharedState(e);
		t.setPipeline(n.pipeline02), t.setBindGroup(0, n.texturesPass02BindGroup), t.draw(6);
	}
	static compositeSharedPassWithTerrainDepth(e, t, n) {
		let r = this._ensureSharedState(e), i = e.device.createBindGroup({
			layout: r.terrainCompositeBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: r.texSampler
				},
				{
					binding: 1,
					resource: r.colorsSharedBuffer.view
				},
				{
					binding: 2,
					resource: r.normalsSharedBuffer.view
				},
				{
					binding: 3,
					resource: n
				},
				{
					binding: 4,
					resource: r.depthBufferPass01.view
				}
			]
		});
		t.setPipeline(r.terrainCompositePipeline), t.setBindGroup(0, i), t.draw(6);
	}
	build(t) {
		this.createShaders(), this.createVertexBuffers(t), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.createTerrainHeightBindGroup(), this.updateVertexBuffers(t), this.updateColorUniforms(t), this.createPipeline01(), e._ensureSharedState(this._renderer);
	}
	createShaders() {
		this._vertModule01 = this._renderer.device.createShaderModule({
			label: "Buildings ssao: vertex shader pass 01",
			code: Xa
		}), this._fragModule01 = this._renderer.device.createShaderModule({
			label: "Buildings ssao: fragment shader pass 01",
			code: Za
		});
	}
	createVertexBuffers(e) {
		this._positionBuffer = this._renderer.device.createBuffer({
			label: "Position buffer",
			size: e.position.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._normalBuffer = this._renderer.device.createBuffer({
			label: "Normal buffer",
			size: e.normal.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._thematicBuffer = this._renderer.device.createBuffer({
			label: "Thematic data buffer",
			size: e.thematic.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._thematicValidityBuffer = this._renderer.device.createBuffer({
			label: "Thematic validity buffer",
			size: e.thematicValidity.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._highlightedBuffer = this._renderer.device.createBuffer({
			label: "Highlighted data buffer",
			size: e.highlightedVertices.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._skippedBuffer = this._renderer.device.createBuffer({
			label: "Skipped data buffer",
			size: e.skippedVertices.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._indicesBuffer = this._renderer.device.createBuffer({
			label: "Primitive indices buffer",
			size: e.indices.length * 4,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		});
	}
	createTerrainHeightBindGroup() {
		this._terrainUniformBuffer = this._renderer.device.createBuffer({
			label: "Building terrain height uniform",
			size: 8 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._dummyTerrainTexture = this._renderer.device.createTexture({
			label: "Building dummy terrain height texture",
			size: [2, 2],
			format: "r32float",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
		}), this._terrainBindGroupLayout = this._renderer.device.createBindGroupLayout({
			label: "Building terrain height bind group layout",
			entries: [{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				buffer: { type: "uniform" }
			}, {
				binding: 1,
				visibility: GPUShaderStage.VERTEX,
				texture: { sampleType: "unfilterable-float" }
			}]
		}), this._terrainBindGroup = this._renderer.device.createBindGroup({
			label: "Building terrain height bind group",
			layout: this._terrainBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._terrainUniformBuffer }
			}, {
				binding: 1,
				resource: this._dummyTerrainTexture.createView()
			}]
		}), this.clearTerrainHeightSource();
	}
	setTerrainHeightSource(e, t) {
		this._terrainUniformData.set([
			e.originX,
			e.originY,
			e.cellSizeX,
			e.cellSizeY,
			e.width,
			e.height,
			1,
			0
		]), this._renderer.device.queue.writeBuffer(this._terrainUniformBuffer, 0, this._terrainUniformData), this._terrainBindGroup = this._renderer.device.createBindGroup({
			label: "Building terrain height bind group",
			layout: this._terrainBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._terrainUniformBuffer }
			}, {
				binding: 1,
				resource: t
			}]
		});
	}
	clearTerrainHeightSource() {
		this._terrainUniformData.fill(0), this._terrainUniformData[4] = 2, this._terrainUniformData[5] = 2, this._renderer.device.queue.writeBuffer(this._terrainUniformBuffer, 0, this._terrainUniformData), this._terrainBindGroup = this._renderer.device.createBindGroup({
			label: "Building terrain height bind group",
			layout: this._terrainBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._terrainUniformBuffer }
			}, {
				binding: 1,
				resource: this._dummyTerrainTexture.createView()
			}]
		});
	}
	updateVertexBuffers(e) {
		this._normalData = this._syncFloatData(this._normalData, e.normal), this._thematicData = this._syncFloatData(this._thematicData, e.thematic), this._thematicValidityData = this._syncFloatData(this._thematicValidityData, e.thematicValidity), this._highlightedData = this._syncFloatData(this._highlightedData, e.highlightedVertices), this._skippedData = this._syncFloatData(this._skippedData, e.skippedVertices), this._positionData = this._syncFloatData(this._positionData, e.position), this._indicesData = this._syncUintData(this._indicesData, e.indices), this._renderer.device.queue.writeBuffer(this._normalBuffer, 0, this._normalData), this._renderer.device.queue.writeBuffer(this._thematicBuffer, 0, this._thematicData), this._renderer.device.queue.writeBuffer(this._thematicValidityBuffer, 0, this._thematicValidityData), this._renderer.device.queue.writeBuffer(this._highlightedBuffer, 0, this._highlightedData), this._renderer.device.queue.writeBuffer(this._skippedBuffer, 0, this._skippedData), this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, this._positionData), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, this._indicesData);
	}
	createPipeline01() {
		let e = {
			module: this._vertModule01,
			entryPoint: "main",
			buffers: [
				{
					attributes: [{
						shaderLocation: 0,
						offset: 0,
						format: "float32x3"
					}],
					arrayStride: 12,
					stepMode: "vertex"
				},
				{
					attributes: [{
						shaderLocation: 1,
						offset: 0,
						format: "float32x3"
					}],
					arrayStride: 12,
					stepMode: "vertex"
				},
				{
					attributes: [{
						shaderLocation: 2,
						offset: 0,
						format: "float32"
					}],
					arrayStride: 4,
					stepMode: "vertex"
				},
				{
					attributes: [{
						shaderLocation: 3,
						offset: 0,
						format: "float32"
					}],
					arrayStride: 4,
					stepMode: "vertex"
				},
				{
					attributes: [{
						shaderLocation: 4,
						offset: 0,
						format: "float32"
					}],
					arrayStride: 4,
					stepMode: "vertex"
				},
				{
					attributes: [{
						shaderLocation: 5,
						offset: 0,
						format: "float32"
					}],
					arrayStride: 4,
					stepMode: "vertex"
				}
			]
		}, t = {
			module: this._fragModule01,
			entryPoint: "main",
			targets: [{ format: "rgba16float" }, { format: "rgba16float" }]
		}, n = {
			frontFace: "cw",
			cullMode: "none",
			topology: "triangle-list"
		}, r = {
			depthWriteEnabled: !0,
			depthCompare: "greater-equal",
			format: "depth32float"
		}, i = this._renderer.device.createPipelineLayout({ bindGroupLayouts: [
			this._renderInfoBindGroupLayout,
			this._cameraBindGroupLayout,
			this._terrainBindGroupLayout
		] });
		this._pipeline01 = this._renderer.device.createRenderPipeline({
			layout: i,
			vertex: e,
			fragment: t,
			primitive: n,
			depthStencil: r,
			label: "Pipeline triangle ssao 01"
		});
	}
	renderGeometryPass(e, t) {
		t.setPipeline(this._pipeline01), this.updateCameraUniforms(e), t.setVertexBuffer(0, this._positionBuffer), t.setVertexBuffer(1, this._normalBuffer), t.setVertexBuffer(2, this._thematicBuffer), t.setVertexBuffer(3, this._highlightedBuffer), t.setVertexBuffer(4, this._thematicValidityBuffer), t.setVertexBuffer(5, this._skippedBuffer), t.setIndexBuffer(this._indicesBuffer, "uint32"), t.setBindGroup(0, this._renderInfoBindGroup), t.setBindGroup(1, this._cameraBindGroup), t.setBindGroup(2, this._terrainBindGroup);
		let n = this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT;
		n > 0 && t.drawIndexed(n);
	}
	prepareRender(e) {}
	renderPass(e, t) {}
	static _ensureSharedState(e) {
		let t = 2 * e.pixelWidth, n = 2 * e.pixelHeight, r = this._sharedState.get(e);
		if (r && r.width === t && r.height === n) return r;
		r?.colorsSharedTexture.destroy(), r?.normalsSharedTexture.destroy(), r?.depthTexturePass01.destroy();
		let i = e.device.createTexture({
			label: "Shared colors texture",
			size: [t, n],
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
			format: "rgba16float"
		}), a = e.device.createTexture({
			label: "Shared normals texture",
			size: [t, n],
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
			format: "rgba16float"
		}), o = e.device.createTexture({
			label: "Shared building depth texture",
			size: [t, n],
			format: "depth32float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
		}), s = {
			view: i.createView(),
			clearValue: [
				0,
				0,
				0,
				0
			],
			loadOp: "clear",
			storeOp: "store"
		}, c = {
			view: a.createView(),
			clearValue: [
				0,
				0,
				0,
				0
			],
			loadOp: "clear",
			storeOp: "store"
		}, l = {
			view: o.createView(),
			depthClearValue: 0,
			depthLoadOp: "clear",
			depthStoreOp: "store"
		}, u = e.device.createSampler({
			label: "Shared building pass 02 sampler",
			magFilter: "linear",
			minFilter: "linear",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge"
		}), d = e.device.createBindGroupLayout({ entries: [
			{
				binding: 0,
				visibility: GPUShaderStage.FRAGMENT,
				sampler: {}
			},
			{
				binding: 1,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {}
			},
			{
				binding: 2,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {}
			}
		] }), f = e.device.createBindGroupLayout({ entries: [
			{
				binding: 0,
				visibility: GPUShaderStage.FRAGMENT,
				sampler: {}
			},
			{
				binding: 1,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {}
			},
			{
				binding: 2,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {}
			},
			{
				binding: 3,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {
					sampleType: "depth",
					viewDimension: "2d"
				}
			},
			{
				binding: 4,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {
					sampleType: "depth",
					viewDimension: "2d"
				}
			}
		] }), p = e.device.createBindGroup({
			layout: d,
			entries: [
				{
					binding: 0,
					resource: u
				},
				{
					binding: 1,
					resource: s.view
				},
				{
					binding: 2,
					resource: c.view
				}
			]
		}), m = e.device.createShaderModule({
			label: "Buildings ssao: vertex shader pass 02",
			code: Qa
		}), h = e.device.createShaderModule({
			label: "Buildings ssao: fragment shader pass 02",
			code: $a
		}), g = e.device.createShaderModule({
			label: "Buildings ssao: terrain-aware fragment shader pass 02",
			code: eo
		}), _ = {
			colorsSharedBuffer: s,
			normalsSharedBuffer: c,
			depthBufferPass01: l,
			colorsSharedTexture: i,
			normalsSharedTexture: a,
			depthTexturePass01: o,
			texSampler: u,
			texturesPass02BindGroup: p,
			texturesPass02BindGroupLayout: d,
			pipeline02: e.device.createRenderPipeline({
				layout: e.device.createPipelineLayout({ bindGroupLayouts: [d] }),
				vertex: {
					module: m,
					entryPoint: "main"
				},
				fragment: {
					module: h,
					entryPoint: "main",
					targets: [{
						format: e.canvasFormat,
						blend: {
							color: {
								srcFactor: "one",
								dstFactor: "one-minus-src-alpha"
							},
							alpha: {
								srcFactor: "one",
								dstFactor: "one-minus-src-alpha"
							}
						}
					}]
				},
				primitive: {
					topology: "triangle-strip",
					stripIndexFormat: "uint32"
				},
				depthStencil: {
					depthWriteEnabled: !1,
					depthCompare: "greater-equal",
					format: "depth32float"
				},
				multisample: { count: e.sampleCount },
				label: "Pipeline triangle ssao 02 shared"
			}),
			terrainCompositeBindGroupLayout: f,
			terrainCompositePipeline: e.device.createRenderPipeline({
				layout: e.device.createPipelineLayout({ bindGroupLayouts: [f] }),
				vertex: {
					module: m,
					entryPoint: "main"
				},
				fragment: {
					module: g,
					entryPoint: "main",
					targets: [{
						format: e.canvasFormat,
						blend: {
							color: {
								srcFactor: "one",
								dstFactor: "one-minus-src-alpha"
							},
							alpha: {
								srcFactor: "one",
								dstFactor: "one-minus-src-alpha"
							}
						}
					}]
				},
				primitive: {
					topology: "triangle-strip",
					stripIndexFormat: "uint32"
				},
				multisample: { count: e.sampleCount },
				label: "Pipeline triangle ssao 02 terrain shared"
			}),
			width: t,
			height: n
		};
		return this._sharedState.set(e, _), _;
	}
}, G = class extends Ya {
	_normal = /* @__PURE__ */ new Float32Array();
	_normalsAreDirty = !1;
	COORD_DIM = 3;
	constructor(e, t, n) {
		super(e, t, n, 3), this.computeNormals();
	}
	get normal() {
		return this._normal;
	}
	loadGeometry(e) {
		super.loadGeometry(e), this._normalsAreDirty = !0;
	}
	createPipeline(e) {
		this._pipeline = new to(e), this._pipeline.build(this), this._pipelinePicking = new Ja(e, this._dimension), this._pipelinePicking.build(this);
	}
	renderPass(e, t) {
		this._normalsAreDirty && this.computeNormals(), super.renderPass(e, t);
	}
	prepareRender(e) {
		this._normalsAreDirty && this.computeNormals();
	}
	renderSceneGeometry(e, t) {
		this._normalsAreDirty && this.computeNormals(), this._renderInfoIsDirty &&= (this._pipeline.updateColorUniforms(this), !1), this._dataIsDirty &&= (this._pipeline.updateVertexBuffers(this), this._pipelinePicking.updateVertexBuffers(this), !1), this._pipeline.updateZIndex(this._layerInfo.zIndex), this._pipeline.renderGeometryPass(e, t);
	}
	setTerrainHeightSource(e, t) {
		this._pipeline.setTerrainHeightSource(e, t), this._pipelinePicking.setTerrainHeightSource(e, t);
	}
	clearTerrainHeightSource() {
		this._pipeline.clearTerrainHeightSource(), this._pipelinePicking.clearTerrainHeightSource();
	}
	computeNormals() {
		if (this._position.length === 0 || this._indices.length === 0) {
			this._normal = /* @__PURE__ */ new Float32Array(), this._normalsAreDirty = !1;
			return;
		}
		let e = this._position.length / this.COORD_DIM;
		this._normal = new Float32Array(e * this.COORD_DIM), this._accumulateFaceNormals(), this._normalizeVertexNormals(), this._normalsAreDirty = !1;
	}
	_accumulateFaceNormals() {
		for (let e = 0; e < this._indices.length; e += 3) {
			let t = this._indices[e], n = this._indices[e + 1], r = this._indices[e + 2], i = t * this.COORD_DIM, a = n * this.COORD_DIM, o = r * this.COORD_DIM, s = this._position[a] - this._position[i], c = this._position[a + 1] - this._position[i + 1], l = this._position[a + 2] - this._position[i + 2], u = this._position[o] - this._position[i], d = this._position[o + 1] - this._position[i + 1], f = this._position[o + 2] - this._position[i + 2], p = c * f - l * d, m = l * u - s * f, h = s * d - c * u;
			for (let e of [
				t,
				n,
				r
			]) {
				let t = e * this.COORD_DIM;
				this._normal[t] += p, this._normal[t + 1] += m, this._normal[t + 2] += h;
			}
		}
	}
	_normalizeVertexNormals() {
		let e = this._normal.length / this.COORD_DIM;
		for (let t = 0; t < e; t++) {
			let e = t * this.COORD_DIM, n = this._normal[e], r = this._normal[e + 1], i = this._normal[e + 2], a = Math.sqrt(n * n + r * r + i * i);
			a > 1e-6 ? (this._normal[e] = n / a, this._normal[e + 1] = r / a, this._normal[e + 2] = i / a) : (this._normal[e] = 0, this._normal[e + 1] = 1, this._normal[e + 2] = 0);
		}
	}
}, no = "@group(1) @binding(0) var<uniform> modelView: mat4x4f;\n@group(1) @binding(1) var<uniform> projection: mat4x4f;\n@group(1) @binding(2) var<uniform> zIndex: f32;\n\nstruct VSOut {\n    @builtin(position) outPosition: vec4<f32>,\n    @location(0) outSkipped: f32\n };\n\n@vertex\nfn main(@location(0) inPosition: vec2f, @location(3) inSkipped: f32) -> VSOut {\n    var vsOut: VSOut;\n\n    vsOut.outPosition = projection * modelView * vec4f(inPosition.x, inPosition.y, zIndex, 1);\n    vsOut.outSkipped = inSkipped;\n\n    return vsOut;\n}", ro = "@group(0) @binding(0) var<uniform> color : vec4f;\n@group(0) @binding(6) var<uniform> opacity : f32;\n\n@fragment\nfn main(@location(0) inSkipped: f32) -> @location(0) vec4f {\n    if (inSkipped > 0.0) {\n        discard;\n    }\n\n    let outColor = vec4f(color.r / 255.0, color.g / 255.0, color.b / 255.0, color.a);\n    return vec4f(outColor.rgb * opacity, opacity);\n}", io = {
	r: 0,
	g: 0,
	b: 0,
	alpha: 1
}, ao = class extends W {
	_positionBuffer;
	_borderIndicesBuffer;
	_skippedBuffer;
	_vertModule;
	_fragModule;
	_pipeline;
	_positionData = null;
	_indicesData = null;
	_skippedData = null;
	constructor(e) {
		super(e);
	}
	resolveLayerColor(e) {
		return e.layerRenderInfo.strokeColor ?? io;
	}
	destroy() {
		this._positionBuffer?.destroy(), this._borderIndicesBuffer?.destroy(), this._skippedBuffer?.destroy(), super.destroy();
	}
	build(e) {
		this.createShaders(), this.createVertexBuffers(e), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.updateVertexBuffers(e), this.updateColorUniforms(e), this.createPipeline();
	}
	createShaders() {
		let e = { code: no };
		this._vertModule = this._renderer.device.createShaderModule(e);
		let t = { code: ro };
		this._fragModule = this._renderer.device.createShaderModule(t);
	}
	createVertexBuffers(e) {
		this._positionBuffer = this._renderer.device.createBuffer({
			label: "Position buffer",
			size: e.borderPosition.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._borderIndicesBuffer = this._renderer.device.createBuffer({
			label: "Primitive indices buffer",
			size: e.borderIndices.length * 4,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		}), this._skippedBuffer = this._renderer.device.createBuffer({
			label: "Skipped data buffer",
			size: e.skippedVertices.length * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		});
	}
	updateVertexBuffers(e) {
		this._positionData = this._syncFloatData(this._positionData, e.borderPosition), this._indicesData = this._syncUintData(this._indicesData, e.borderIndices), this._skippedData = this._syncFloatData(this._skippedData, e.skippedVertices), this._renderer.device.queue.writeBuffer(this._positionBuffer, 0, this._positionData), this._renderer.device.queue.writeBuffer(this._borderIndicesBuffer, 0, this._indicesData), this._renderer.device.queue.writeBuffer(this._skippedBuffer, 0, this._skippedData);
	}
	createPipeline() {
		let e = {
			module: this._vertModule,
			entryPoint: "main",
			buffers: [{
				attributes: [{
					shaderLocation: 0,
					offset: 0,
					format: "float32x2"
				}],
				arrayStride: 8,
				stepMode: "vertex"
			}, {
				attributes: [{
					shaderLocation: 3,
					offset: 0,
					format: "float32"
				}],
				arrayStride: 4,
				stepMode: "vertex"
			}]
		}, t = {
			module: this._fragModule,
			entryPoint: "main",
			targets: [{
				format: this._renderer.canvasFormat,
				blend: {
					color: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					},
					alpha: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					}
				}
			}]
		}, n = { topology: "line-list" }, r = { count: this._renderer.sampleCount }, i = {
			depthWriteEnabled: !1,
			depthCompare: "greater-equal",
			format: "depth32float"
		}, a = { bindGroupLayouts: [this._renderInfoBindGroupLayout, this._cameraBindGroupLayout] }, o = {
			layout: this._renderer.device.createPipelineLayout(a),
			vertex: e,
			fragment: t,
			primitive: n,
			depthStencil: i,
			multisample: r,
			label: "Pipeline border flat"
		};
		this._pipeline = this._renderer.device.createRenderPipeline(o);
	}
	renderPass(e, t) {
		t.setPipeline(this._pipeline), this.updateCameraUniforms(e), t.setVertexBuffer(0, this._positionBuffer), t.setVertexBuffer(1, this._skippedBuffer), t.setIndexBuffer(this._borderIndicesBuffer, "uint32"), t.setBindGroup(0, this._renderInfoBindGroup), t.setBindGroup(1, this._cameraBindGroup);
		let n = this._borderIndicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT;
		n > 0 && t.drawIndexed(n);
	}
}, oo = class extends Ya {
	_borderPosition = /* @__PURE__ */ new Float32Array();
	_borderIndices = /* @__PURE__ */ new Uint32Array();
	_borderComponents = [];
	_pipelineBorder;
	constructor(e, t, n) {
		super(e, t, n, 2), this.loadBorderGeometry(n.border ?? []), this.loadBorderComponent(n.borderComponents ?? []);
	}
	get borderPosition() {
		return this._borderPosition;
	}
	get borderIndices() {
		return this._borderIndices;
	}
	get borderComponents() {
		return this._borderComponents;
	}
	loadLayerData(e) {
		super.loadLayerData(e), this.loadBorderGeometry(e.border ?? []), this.loadBorderComponent(e.borderComponents ?? []);
	}
	loadBorderGeometry(e) {
		let t = 0, n = 0;
		for (let r of e) t += r.position.length, n += r.indices.length;
		let r = new Float32Array(t), i = new Uint32Array(n), a = 0, o = 0, s = 0;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			r.set(n.position, a);
			for (let e = 0; e < n.indices.length; e++) i[o + e] = n.indices[e] + s;
			let c = n.position.length / 2;
			a += n.position.length, o += n.indices.length, s += c;
		}
		this._borderPosition = r, this._borderIndices = i;
	}
	loadBorderComponent(e) {
		this._borderComponents = [];
		let t = {
			nPoints: 0,
			nLines: 0
		};
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			t.nPoints += r.nPoints, t.nLines += r.nLines, this._borderComponents.push({
				nPoints: t.nPoints,
				nLines: t.nLines
			});
		}
	}
	createPipeline(e) {
		super.createPipeline(e), this._borderPosition.length > 0 && (this._pipelineBorder = new ao(e), this._pipelineBorder.build(this));
	}
	renderPass(e, t) {
		let n = this._dataIsDirty, r = this._renderInfoIsDirty;
		super.renderPass(e, t), this._pipelineBorder && (n && this._pipelineBorder.updateVertexBuffers(this), r && this._pipelineBorder.updateColorUniforms(this), this._layerRenderInfo.showBorders !== !1 && (this._pipelineBorder.updateZIndex(this._layerInfo.zIndex), this._pipelineBorder.renderPass(e, t)));
	}
	destroy() {
		super.destroy(), this._pipelineBorder?.destroy();
	}
}, so = "@group(1) @binding(0) var<uniform> modelView: mat4x4f;\n@group(1) @binding(1) var<uniform> projection: mat4x4f;\n@group(1) @binding(2) var<uniform> zIndex: f32;\n@group(2) @binding(0) var<uniform> pointSize: f32;\n\nstruct VSOut {\n    @builtin(position) outPosition: vec4<f32>,\n    @location(0) outLocal: vec2<f32>,\n    @location(1) outThematic: f32,\n    @location(2) outHighlighted: f32,\n    @location(3) outThematicValid: f32,\n    @location(4) outSkipped: f32,\n };\n\n@vertex\nfn main(\n    @location(0) inLocal: vec2f,\n    @location(1) inCenter: vec2f,\n    @location(2) inThematic: f32,\n    @location(3) inHighlighted: f32,\n    @location(4) inThematicValid: f32,\n    @location(5) inSkipped: f32,\n) -> VSOut {\n    var vsOut: VSOut;\n    let worldPosition = inCenter + inLocal * pointSize;\n\n    vsOut.outPosition = projection * modelView * vec4f(worldPosition.x, worldPosition.y, zIndex, 1.0);\n    vsOut.outLocal = inLocal;\n    vsOut.outThematic = inThematic;\n    vsOut.outHighlighted = inHighlighted;\n    vsOut.outThematicValid = inThematicValid;\n    vsOut.outSkipped = inSkipped;\n\n    return vsOut;\n}", co = "@group(0) @binding(0) var<uniform> color : vec4f;\n@group(0) @binding(1) var<uniform> highlightColor : vec4f;\n@group(0) @binding(2) var<uniform> showThematic : f32;\n@group(0) @binding(3) var<uniform> showHighlight : f32;\n@group(0) @binding(4) var cMapTex : texture_2d<f32>;\n@group(0) @binding(5) var cMapSampler : sampler;\n@group(0) @binding(6) var<uniform> opacity : f32;\n@group(0) @binding(7) var<uniform> domainParams : vec4f;\n@group(0) @binding(8) var<uniform> invalidValueColor : vec4f;\n\n@fragment\nfn main(\n    @location(0) inLocal: vec2<f32>,\n    @location(1) inThematic: f32,\n    @location(2) inHighlighted: f32,\n    @location(3) inThematicValid: f32,\n    @location(4) inSkipped: f32,\n) -> @location(0) vec4f {\n    if (dot(inLocal, inLocal) > 1.0) {\n        discard;\n    }\n\n    if (inSkipped > 0.0) {\n        discard;\n    }\n\n    var outColor = vec4f(color.r / 255.0, color.g / 255.0, color.b / 255.0, color.a);\n\n    var thematicValue = inThematic;\n    if (domainParams.z > 1.5) {\n        let nCategories = domainParams.w;\n        let denom = max(1.0, nCategories - 1.0);\n        thematicValue = clamp(inThematic / denom, 0.0, 1.0);\n    } else if (domainParams.z > 0.5) {\n        let minVal = domainParams.x;\n        let maxVal = domainParams.y;\n        let range = maxVal - minVal;\n        thematicValue = select(0.0, clamp((inThematic - minVal) / range, 0.0, 1.0), range > 0.0);\n    }\n\n    let sampledColor = textureSample(cMapTex, cMapSampler, vec2f(thematicValue, 0.0));\n\n    if (showHighlight > 0.0 && inHighlighted > 0.0) {\n        outColor = vec4f(highlightColor.r / 255.0, highlightColor.g / 255.0, highlightColor.b / 255.0, highlightColor.a);\n    } else if (showThematic > 0.0 && inThematicValid < 0.5) {\n        outColor = vec4f(invalidValueColor.r / 255.0, invalidValueColor.g / 255.0, invalidValueColor.b / 255.0, invalidValueColor.a);\n    } else if (showThematic > 0.0) {\n        outColor = sampledColor;\n    }\n\n    return vec4f(outColor.rgb * opacity, opacity);\n}", lo = class extends W {
	_quadBuffer;
	_instanceBuffer;
	_thematicBuffer;
	_highlightedBuffer;
	_thematicValidityBuffer;
	_skippedBuffer;
	_indicesBuffer;
	_pointSizeBuffer;
	_pointBindGroup;
	_pointBindGroupLayout;
	_vertModule;
	_fragModule;
	_pipeline;
	_quadData = null;
	_instanceData = null;
	_thematicData = null;
	_highlightedData = null;
	_thematicValidityData = null;
	_skippedData = null;
	_indicesData = null;
	_pointSizeData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(4));
	constructor(e) {
		super(e);
	}
	destroy() {
		this._quadBuffer?.destroy(), this._instanceBuffer?.destroy(), this._thematicBuffer?.destroy(), this._highlightedBuffer?.destroy(), this._thematicValidityBuffer?.destroy(), this._skippedBuffer?.destroy(), this._indicesBuffer?.destroy(), this._pointSizeBuffer?.destroy(), super.destroy();
	}
	build(e) {
		this.createShaders(), this.createVertexBuffers(e), this.createColorUniformBindGroup(), this.createCameraUniformBindGroup(), this.createPointUniformBindGroup(), this.updateVertexBuffers(e), this.updateColorUniforms(e), this.updatePointSize(e.pointSize), this.createPipeline();
	}
	createShaders() {
		this._vertModule = this._renderer.device.createShaderModule({ code: so }), this._fragModule = this._renderer.device.createShaderModule({ code: co });
	}
	createVertexBuffers(e) {
		this._quadBuffer = this._renderer.device.createBuffer({
			label: "Point quad buffer",
			size: 8 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._instanceBuffer = this._renderer.device.createBuffer({
			label: "Point instance center buffer",
			size: e.pointInstances.length * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._thematicBuffer = this._renderer.device.createBuffer({
			label: "Point thematic buffer",
			size: e.thematic.length * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._highlightedBuffer = this._renderer.device.createBuffer({
			label: "Point highlighted buffer",
			size: e.highlightedVertices.length * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._thematicValidityBuffer = this._renderer.device.createBuffer({
			label: "Point thematic validity buffer",
			size: e.thematicValidity.length * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._skippedBuffer = this._renderer.device.createBuffer({
			label: "Point skipped buffer",
			size: e.skippedVertices.length * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._indicesBuffer = this._renderer.device.createBuffer({
			label: "Point quad indices buffer",
			size: 6 * Uint32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		});
	}
	updateVertexBuffers(e) {
		this._quadData = this._syncFloatData(this._quadData, [
			-1,
			-1,
			1,
			-1,
			1,
			1,
			-1,
			1
		]), this._instanceData = this._syncFloatData(this._instanceData, e.pointInstances), this._thematicData = this._syncFloatData(this._thematicData, e.thematic), this._highlightedData = this._syncFloatData(this._highlightedData, e.highlightedVertices), this._thematicValidityData = this._syncFloatData(this._thematicValidityData, e.thematicValidity), this._skippedData = this._syncFloatData(this._skippedData, e.skippedVertices), this._indicesData = this._syncUintData(this._indicesData, [
			0,
			1,
			2,
			0,
			2,
			3
		]), this._renderer.device.queue.writeBuffer(this._quadBuffer, 0, this._quadData), this._renderer.device.queue.writeBuffer(this._instanceBuffer, 0, this._instanceData), this._renderer.device.queue.writeBuffer(this._thematicBuffer, 0, this._thematicData), this._renderer.device.queue.writeBuffer(this._highlightedBuffer, 0, this._highlightedData), this._renderer.device.queue.writeBuffer(this._thematicValidityBuffer, 0, this._thematicValidityData), this._renderer.device.queue.writeBuffer(this._skippedBuffer, 0, this._skippedData), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, this._indicesData);
	}
	createPointUniformBindGroup() {
		this._pointSizeBuffer = this._renderer.device.createBuffer({
			label: "Point size buffer",
			size: Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._pointBindGroupLayout = this._renderer.device.createBindGroupLayout({ entries: [{
			binding: 0,
			visibility: GPUShaderStage.VERTEX,
			buffer: {}
		}] }), this._pointBindGroup = this._renderer.device.createBindGroup({
			layout: this._pointBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._pointSizeBuffer }
			}]
		});
	}
	updatePointSize(e) {
		this._pointSizeData[0] = e, this._renderer.device.queue.writeBuffer(this._pointSizeBuffer, 0, this._pointSizeData);
	}
	createPipeline() {
		let e = {
			attributes: [{
				shaderLocation: 0,
				offset: 0,
				format: "float32x2"
			}],
			arrayStride: 2 * Float32Array.BYTES_PER_ELEMENT,
			stepMode: "vertex"
		}, t = {
			attributes: [{
				shaderLocation: 1,
				offset: 0,
				format: "float32x2"
			}],
			arrayStride: 2 * Float32Array.BYTES_PER_ELEMENT,
			stepMode: "instance"
		}, n = {
			attributes: [{
				shaderLocation: 2,
				offset: 0,
				format: "float32"
			}],
			arrayStride: Float32Array.BYTES_PER_ELEMENT,
			stepMode: "instance"
		}, r = {
			attributes: [{
				shaderLocation: 3,
				offset: 0,
				format: "float32"
			}],
			arrayStride: Float32Array.BYTES_PER_ELEMENT,
			stepMode: "instance"
		}, i = {
			attributes: [{
				shaderLocation: 4,
				offset: 0,
				format: "float32"
			}],
			arrayStride: Float32Array.BYTES_PER_ELEMENT,
			stepMode: "instance"
		}, a = {
			attributes: [{
				shaderLocation: 5,
				offset: 0,
				format: "float32"
			}],
			arrayStride: Float32Array.BYTES_PER_ELEMENT,
			stepMode: "instance"
		}, o = {
			module: this._vertModule,
			entryPoint: "main",
			buffers: [
				e,
				t,
				n,
				r,
				i,
				a
			]
		}, s = {
			module: this._fragModule,
			entryPoint: "main",
			targets: [{
				format: this._renderer.canvasFormat,
				blend: {
					color: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					},
					alpha: {
						srcFactor: "one",
						dstFactor: "one-minus-src-alpha"
					}
				}
			}]
		}, c = {
			frontFace: "cw",
			cullMode: "none",
			topology: "triangle-list"
		}, l = { count: this._renderer.sampleCount }, u = {
			depthWriteEnabled: !1,
			depthCompare: "greater-equal",
			format: "depth32float"
		}, d = this._renderer.device.createPipelineLayout({ bindGroupLayouts: [
			this._renderInfoBindGroupLayout,
			this._cameraBindGroupLayout,
			this._pointBindGroupLayout
		] });
		this._pipeline = this._renderer.device.createRenderPipeline({
			layout: d,
			vertex: o,
			fragment: s,
			primitive: c,
			depthStencil: u,
			multisample: l,
			label: "Pipeline sprite"
		});
	}
	renderPass(e, t) {
		t.setPipeline(this._pipeline), this.updateCameraUniforms(e), t.setVertexBuffer(0, this._quadBuffer), t.setVertexBuffer(1, this._instanceBuffer), t.setVertexBuffer(2, this._thematicBuffer), t.setVertexBuffer(3, this._highlightedBuffer), t.setVertexBuffer(4, this._thematicValidityBuffer), t.setVertexBuffer(5, this._skippedBuffer), t.setIndexBuffer(this._indicesBuffer, "uint32"), t.setBindGroup(0, this._renderInfoBindGroup), t.setBindGroup(1, this._cameraBindGroup), t.setBindGroup(2, this._pointBindGroup);
		let n = this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT;
		n > 0 && this._instanceBuffer.size > 0 && t.drawIndexed(n, this._instanceBuffer.size / (2 * Float32Array.BYTES_PER_ELEMENT));
	}
}, uo = "@group(0) @binding(0) var<uniform> modelView: mat4x4f;\n@group(0) @binding(1) var<uniform> projection: mat4x4f;\n@group(0) @binding(2) var<uniform> zIndex: f32;\n@group(1) @binding(0) var<uniform> pointSize: f32;\n\nstruct VSOut {\n    @builtin(position) position: vec4<f32>,\n    @location(0) color: vec3<f32>,\n    @location(1) local: vec2<f32>,\n };\n\n@vertex\nfn main(\n    @location(0) inLocal: vec2f,\n    @location(1) inCenter: vec2f,\n    @location(2) objectId: vec3<f32>,\n) -> VSOut {\n    var vsOut: VSOut;\n    let worldPosition = inCenter + inLocal * pointSize;\n    vsOut.position = projection * modelView * vec4f(worldPosition.x, worldPosition.y, zIndex, 1.0);\n    vsOut.color = objectId;\n    vsOut.local = inLocal;\n    return vsOut;\n}", fo = "@fragment\nfn main(@location(0) color: vec3<f32>, @location(1) local: vec2<f32>) -> @location(0) vec4<f32> {\n    if (dot(local, local) > 1.0) {\n        discard;\n    }\n    return vec4<f32>(color, 1.0);\n}", po = class extends W {
	_quadBuffer;
	_instanceBuffer;
	_objectIdsBuffer;
	_indicesBuffer;
	_pointSizeBuffer;
	_pointBindGroup;
	_pointBindGroupLayout;
	_vertModule;
	_fragModule;
	_pipeline;
	_quadData = null;
	_instanceData = null;
	_objectIdsData = null;
	_indicesData = null;
	_pointSizeData = new Float32Array(/* @__PURE__ */ new ArrayBuffer(4));
	constructor(e) {
		super(e);
	}
	destroy() {
		this._quadBuffer?.destroy(), this._instanceBuffer?.destroy(), this._objectIdsBuffer?.destroy(), this._indicesBuffer?.destroy(), this._pointSizeBuffer?.destroy(), super.destroy();
	}
	build(e) {
		this.createShaders(), this.createVertexBuffers(e), this.createCameraUniformBindGroup(), this.createPointUniformBindGroup(), this.updateVertexBuffers(e), this.updatePointSize(e.pointSize), this.createPipeline();
	}
	createShaders() {
		this._vertModule = this._renderer.device.createShaderModule({ code: uo }), this._fragModule = this._renderer.device.createShaderModule({ code: fo });
	}
	createVertexBuffers(e) {
		this._quadBuffer = this._renderer.device.createBuffer({
			label: "Point picking quad buffer",
			size: 8 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._instanceBuffer = this._renderer.device.createBuffer({
			label: "Point picking center buffer",
			size: e.pointInstances.length * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._objectIdsBuffer = this._renderer.device.createBuffer({
			label: "Point picking ids buffer",
			size: e.instanceCount * 3 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._indicesBuffer = this._renderer.device.createBuffer({
			label: "Point picking quad indices buffer",
			size: 6 * Uint32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		});
	}
	updateVertexBuffers(e) {
		this._quadData = this._syncFloatData(this._quadData, [
			-1,
			-1,
			1,
			-1,
			1,
			1,
			-1,
			1
		]), this._instanceData = this._syncFloatData(this._instanceData, e.pointInstances), this._indicesData = this._syncUintData(this._indicesData, [
			0,
			1,
			2,
			0,
			2,
			3
		]), this._objectIdsData = this._syncFloatLength(this._objectIdsData, e.instanceCount * 3), this._objectIdsData.fill(0);
		for (let t = 0; t < e.components.length; t++) {
			let n = this._encodeIdToRGB(t), r = t > 0 ? e.components[t - 1].nPoints : 0, i = e.components[t].nPoints;
			for (let e = r; e < i; e++) {
				let t = e * 3;
				this._objectIdsData[t + 0] = n[0], this._objectIdsData[t + 1] = n[1], this._objectIdsData[t + 2] = n[2];
			}
		}
		this._renderer.device.queue.writeBuffer(this._quadBuffer, 0, this._quadData), this._renderer.device.queue.writeBuffer(this._instanceBuffer, 0, this._instanceData), this._renderer.device.queue.writeBuffer(this._objectIdsBuffer, 0, this._objectIdsData), this._renderer.device.queue.writeBuffer(this._indicesBuffer, 0, this._indicesData);
	}
	_encodeIdToRGB(e) {
		let t = e + 1;
		return [
			(t & 255) / 255,
			(t >> 8 & 255) / 255,
			(t >> 16 & 255) / 255
		];
	}
	createPointUniformBindGroup() {
		this._pointSizeBuffer = this._renderer.device.createBuffer({
			label: "Point picking size buffer",
			size: Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._pointBindGroupLayout = this._renderer.device.createBindGroupLayout({ entries: [{
			binding: 0,
			visibility: GPUShaderStage.VERTEX,
			buffer: {}
		}] }), this._pointBindGroup = this._renderer.device.createBindGroup({
			layout: this._pointBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._pointSizeBuffer }
			}]
		});
	}
	updatePointSize(e) {
		this._pointSizeData[0] = e, this._renderer.device.queue.writeBuffer(this._pointSizeBuffer, 0, this._pointSizeData);
	}
	createPipeline() {
		let e = {
			attributes: [{
				shaderLocation: 0,
				offset: 0,
				format: "float32x2"
			}],
			arrayStride: 2 * Float32Array.BYTES_PER_ELEMENT,
			stepMode: "vertex"
		}, t = {
			attributes: [{
				shaderLocation: 1,
				offset: 0,
				format: "float32x2"
			}],
			arrayStride: 2 * Float32Array.BYTES_PER_ELEMENT,
			stepMode: "instance"
		}, n = {
			attributes: [{
				shaderLocation: 2,
				offset: 0,
				format: "float32x3"
			}],
			arrayStride: 3 * Float32Array.BYTES_PER_ELEMENT,
			stepMode: "instance"
		}, r = {
			module: this._vertModule,
			entryPoint: "main",
			buffers: [
				e,
				t,
				n
			]
		}, i = {
			module: this._fragModule,
			entryPoint: "main",
			targets: [{ format: "rgba8unorm" }]
		}, a = {
			frontFace: "cw",
			cullMode: "none",
			topology: "triangle-list"
		}, o = {
			depthWriteEnabled: !1,
			depthCompare: "greater-equal",
			format: "depth32float"
		}, s = this._renderer.device.createPipelineLayout({ bindGroupLayouts: [this._cameraBindGroupLayout, this._pointBindGroupLayout] });
		this._pipeline = this._renderer.device.createRenderPipeline({
			layout: s,
			vertex: r,
			fragment: i,
			primitive: a,
			depthStencil: o,
			label: "Pipeline sprite picking"
		});
	}
	renderPass(e, t) {
		let n = !t;
		t ??= this._renderer.commandEncoder.beginRenderPass({
			colorAttachments: [this._renderer.pickingBuffer],
			depthStencilAttachment: this._renderer.pickingDepthBuffer
		}), t.setPipeline(this._pipeline), this.updateCameraUniforms(e), t.setVertexBuffer(0, this._quadBuffer), t.setVertexBuffer(1, this._instanceBuffer), t.setVertexBuffer(2, this._objectIdsBuffer), t.setIndexBuffer(this._indicesBuffer, "uint32"), t.setBindGroup(0, this._cameraBindGroup), t.setBindGroup(1, this._pointBindGroup);
		let r = this._indicesBuffer.size / Uint32Array.BYTES_PER_ELEMENT;
		r > 0 && this._instanceBuffer.size > 0 && t.drawIndexed(r, this._instanceBuffer.size / (2 * Float32Array.BYTES_PER_ELEMENT)), n && t.end();
	}
}, mo = class extends Ia {
	_pointInstances = /* @__PURE__ */ new Float32Array();
	_components = [];
	_thematic = /* @__PURE__ */ new Float32Array();
	_thematicValidity = /* @__PURE__ */ new Float32Array();
	_highlightedVertices = /* @__PURE__ */ new Float32Array();
	_skippedVertices = /* @__PURE__ */ new Float32Array();
	_pipeline;
	_pipelinePicking;
	_highlightedIds = /* @__PURE__ */ new Set();
	_skippedIds = /* @__PURE__ */ new Set();
	constructor(e, t, n) {
		super(e, t), this.loadLayerData(n);
	}
	get supportsPicking() {
		return !0;
	}
	get supportsHighlight() {
		return !0;
	}
	get components() {
		return this._components;
	}
	get highlightedIds() {
		return Array.from(this._highlightedIds);
	}
	get pointInstances() {
		return this._pointInstances;
	}
	get pointSize() {
		return this._layerRenderInfo.pointSize ?? 64;
	}
	get thematic() {
		return this._thematic;
	}
	get thematicValidity() {
		return this._thematicValidity;
	}
	get highlightedVertices() {
		return this._highlightedVertices;
	}
	get skippedVertices() {
		return this._skippedVertices;
	}
	get instanceCount() {
		return this._pointInstances.length / 2;
	}
	loadLayerData(e) {
		this._pointInstances = e.pointInstances ?? /* @__PURE__ */ new Float32Array(), this.loadComponent(e.components), this._resetInteractionState(), e.thematic && e.thematic.length ? this.loadThematic(e.thematic) : (this._thematic = new Float32Array(this.instanceCount), this._thematicValidity = new Float32Array(this.instanceCount), this._thematicValidity.fill(1));
	}
	loadComponent(e) {
		let t = {
			nPoints: 0,
			nTriangles: 0
		};
		this._components = e.map((e) => (t.nPoints += e.nPoints, t.nTriangles += e.nTriangles, {
			...e,
			nPoints: t.nPoints,
			nTriangles: t.nTriangles
		}));
	}
	loadThematic(e) {
		if (e.length !== this._components.length) return console.error(`SpriteLayer.loadThematic: expected ${this._components.length} thematic entries, got ${e.length}.`), !1;
		let t = new Float32Array(this.instanceCount), n = new Float32Array(this.instanceCount), r = 0;
		for (let i = 0; i < e.length; i++) {
			let a = i > 0 ? this._components[i - 1].nPoints : 0, o = this._components[i].nPoints - a;
			t.fill(e[i].value, r, r + o), n.fill(e[i].valid, r, r + o), r += o;
		}
		return r === this.instanceCount ? (this._thematic = t, this._thematicValidity = n, !0) : (console.error(`SpriteLayer.loadThematic: filled ${r} thematic values for ${this.instanceCount} instances.`), !1);
	}
	createPipeline(e) {
		this._pipeline = new lo(e), this._pipeline.build(this), this._pipelinePicking = new po(e), this._pipelinePicking.build(this);
	}
	renderPass(e, t) {
		this._renderInfoIsDirty &&= (this._pipeline.updateColorUniforms(this), !1), this._dataIsDirty &&= (this._pipeline.updateVertexBuffers(this), this._pipelinePicking.updateVertexBuffers(this), !1), this._pipeline.updateZIndex(this._layerInfo.zIndex), this._pipeline.updatePointSize(this.pointSize), this._pipeline.renderPass(e, t);
	}
	renderPickingPass(e, t) {
		this._pipelinePicking.updateZIndex(this._layerInfo.zIndex), this._pipelinePicking.updatePointSize(this.pointSize), this._pipelinePicking.renderPass(e, t);
	}
	toggleHighlightedIds(e) {
		for (let t of e) {
			if (t < 0 || t >= this._components.length) continue;
			this._highlightedIds.has(t) ? this._highlightedIds.delete(t) : this._highlightedIds.add(t);
			let e = t > 0 ? this._components[t - 1].nPoints : 0, n = this._components[t].nPoints;
			for (let t = e; t < n; t++) this._highlightedVertices[t] = 1 - this._highlightedVertices[t];
		}
		this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
	}
	clearHighlightedIds() {
		this._highlightedIds.clear(), this._highlightedVertices.fill(0), this.makeLayerRenderInfoDirty(), this.makeLayerDataDirty();
	}
	setHighlightedIds(e) {
		this.clearHighlightedIds();
		for (let t of e) {
			if (t < 0 || t >= this._components.length) continue;
			this._highlightedIds.add(t);
			let e = t > 0 ? this._components[t - 1].nPoints : 0, n = this._components[t].nPoints;
			this._highlightedVertices.fill(1, e, n);
		}
		this.makeLayerDataDirty();
	}
	setSkippedIds(e) {
		this.clearSkippedIds();
		for (let t of e) {
			if (t < 0 || t >= this._components.length) continue;
			this._skippedIds.add(t);
			let e = t > 0 ? this._components[t - 1].nPoints : 0, n = this._components[t].nPoints;
			this._skippedVertices.fill(1, e, n);
		}
		this.makeLayerDataDirty();
	}
	clearSkippedIds() {
		this._skippedIds.clear(), this._skippedVertices.fill(0), this.makeLayerDataDirty();
	}
	destroy() {
		this._pipeline?.destroy(), this._pipelinePicking?.destroy();
	}
	_resetInteractionState() {
		this._highlightedIds = /* @__PURE__ */ new Set(), this._skippedIds = /* @__PURE__ */ new Set(), this._highlightedVertices = new Float32Array(this.instanceCount), this._skippedVertices = new Float32Array(this.instanceCount);
	}
}, ho = "struct PolylineAdjacency {\n    previous: vec2f,\n    next: vec2f,\n};\n\nfn polylineSideRole(vertexIndex: u32) -> vec2f {\n    let vertex = vertexIndex % 5u;\n    if (vertex == 4u) { return vec2f(0.0); }\n    let side = select(-1.0, 1.0, vertex % 2u == 0u);\n    let role = select(-1.0, 1.0, vertex >= 2u);\n    return vec2f(side, role);\n}\n\nfn expandPolyline(center: vec2f, previous: vec2f, next: vec2f, sideRole: vec2f, width: f32) -> vec2f {\n    let side = sideRole.x;\n    let role = sideRole.y;\n    if (side == 0.0) { return center; }\n\n    let before = center - previous;\n    let after = next - center;\n    let beforeLength = length(before);\n    let afterLength = length(after);\n    var incoming = before / select(1.0, beforeLength, beforeLength > 0.0);\n    var outgoing = after / select(1.0, afterLength, afterLength > 0.0);\n    if (beforeLength == 0.0) { incoming = outgoing; }\n    if (afterLength == 0.0) { outgoing = incoming; }\n    let incomingNormal = vec2f(-incoming.y, incoming.x);\n    let outgoingNormal = vec2f(-outgoing.y, outgoing.x);\n    let sum = incomingNormal + outgoingNormal;\n    let sumLength = length(sum);\n\n    \n    if (sumLength > 0.000001) {\n        let miter = sum / sumLength;\n        let denominator = dot(miter, outgoingNormal);\n        if (denominator >= 0.25) {\n            return center + miter * (side * width * 0.5 / denominator);\n        }\n    }\n    let normal = select(incomingNormal, outgoingNormal, role > 0.0);\n    return center + normal * (side * width * 0.5);\n}", go = "@group(1) @binding(0) var<uniform> modelView: mat4x4f;\n@group(1) @binding(1) var<uniform> projection: mat4x4f;\n@group(1) @binding(2) var<uniform> zIndex: f32;\n@group(2) @binding(0) var<uniform> widthOverride: f32;\n@group(2) @binding(1) var<storage, read> adjacency: array<PolylineAdjacency>;\n\nstruct VSOut {\n    @builtin(position) outPosition: vec4f,\n    @location(0) outThematic: f32,\n    @location(1) outHighlighted: f32,\n    @location(2) outThematicValid: f32,\n    @location(3) outSkipped: f32,\n};\n\n@vertex\nfn main(\n    @builtin(vertex_index) vertexIndex: u32,\n    @location(0) center: vec2f,\n    @location(4) defaultWidth: f32,\n    @location(5) thematic: f32,\n    @location(6) highlighted: f32,\n    @location(7) thematicValid: f32,\n    @location(8) skipped: f32,\n) -> VSOut {\n    let width = select(defaultWidth, widthOverride, widthOverride > 0.0);\n    let node = adjacency[vertexIndex / 5u];\n    let position = expandPolyline(center, node.previous, node.next, polylineSideRole(vertexIndex), width);\n    var out: VSOut;\n    out.outPosition = projection * modelView * vec4f(position, zIndex, 1.0);\n    out.outThematic = thematic;\n    out.outHighlighted = highlighted;\n    out.outThematicValid = thematicValid;\n    out.outSkipped = skipped;\n    return out;\n}", _o = "@group(0) @binding(0) var<uniform> modelView: mat4x4f;\n@group(0) @binding(1) var<uniform> projection: mat4x4f;\n@group(0) @binding(2) var<uniform> zIndex: f32;\n@group(1) @binding(0) var<uniform> widthOverride: f32;\n@group(1) @binding(1) var<storage, read> adjacency: array<PolylineAdjacency>;\n\nstruct VSOut {\n    @builtin(position) position: vec4f,\n    @location(0) color: vec3f,\n    @location(1) skipped: f32,\n};\n\n@vertex\nfn main(\n    @builtin(vertex_index) vertexIndex: u32,\n    @location(0) center: vec2f,\n    @location(4) defaultWidth: f32,\n    @location(5) objectId: vec3f,\n    @location(8) skipped: f32,\n) -> VSOut {\n    let width = select(defaultWidth, widthOverride, widthOverride > 0.0);\n    let node = adjacency[vertexIndex / 5u];\n    let position = expandPolyline(center, node.previous, node.next, polylineSideRole(vertexIndex), width);\n    var out: VSOut;\n    out.position = projection * modelView * vec4f(position, zIndex, 1.0);\n    out.color = objectId;\n    out.skipped = skipped;\n    return out;\n}", vo = "struct FSIn {\n    @location(0) color: vec3f,\n    @location(1) skipped: f32,\n};\n\n@fragment\nfn main(in: FSIn) -> @location(0) vec4f {\n    if (in.skipped > 0.5) { discard; }\n    return vec4f(in.color, 1.0);\n}", yo = class extends W {
	picking;
	_positionBuffer;
	_attributesBuffer;
	_widthsBuffer;
	_stateBuffer;
	_indicesBuffer;
	_widthBuffer;
	_widthBindGroup;
	_widthBindGroupLayout;
	_pipeline;
	_indexCount = 0;
	_widthData = /* @__PURE__ */ new Float32Array(1);
	_stateData = null;
	_positionData = null;
	_attributesData = null;
	_indicesData = null;
	_widthsData = null;
	_defaultWidths;
	constructor(e, t = !1) {
		super(e), this.picking = t;
	}
	build(e) {
		this.createVertexBuffers(e), this.createCameraUniformBindGroup(), this.picking || this.createColorUniformBindGroup(), this._widthBuffer = this._renderer.device.createBuffer({
			label: "Polyline width override",
			size: 4,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this._widthBindGroupLayout = this._renderer.device.createBindGroupLayout({ entries: [{
			binding: 0,
			visibility: GPUShaderStage.VERTEX,
			buffer: {}
		}, {
			binding: 1,
			visibility: GPUShaderStage.VERTEX,
			buffer: { type: "read-only-storage" }
		}] }), this._widthBindGroup = this._renderer.device.createBindGroup({
			layout: this._widthBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this._widthBuffer }
			}, {
				binding: 1,
				resource: { buffer: this._attributesBuffer }
			}]
		}), this.updateVertexBuffers(e), this.updateColorUniforms(e);
		let t = this._renderer.device, n = this.picking ? [{
			shaderLocation: 5,
			offset: 0,
			format: "float32x3"
		}, {
			shaderLocation: 8,
			offset: 12,
			format: "float32"
		}] : [
			5,
			6,
			7,
			8
		].map((e, t) => ({
			shaderLocation: e,
			offset: t * 4,
			format: "float32"
		}));
		this._pipeline = t.createRenderPipeline({
			label: this.picking ? "Pipeline polyline picking" : "Pipeline polyline",
			layout: t.createPipelineLayout({ bindGroupLayouts: this.picking ? [this._cameraBindGroupLayout, this._widthBindGroupLayout] : [
				this._renderInfoBindGroupLayout,
				this._cameraBindGroupLayout,
				this._widthBindGroupLayout
			] }),
			vertex: {
				module: t.createShaderModule({ code: `${ho}\n${this.picking ? _o : go}` }),
				entryPoint: "main",
				buffers: [
					{
						arrayStride: 8,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x2"
						}]
					},
					{
						arrayStride: 4,
						attributes: [{
							shaderLocation: 4,
							offset: 0,
							format: "float32"
						}]
					},
					{
						arrayStride: 16,
						attributes: n
					}
				]
			},
			fragment: {
				module: t.createShaderModule({ code: this.picking ? vo : Ua }),
				entryPoint: "main",
				targets: [{
					format: this.picking ? "rgba8unorm" : this._renderer.canvasFormat,
					...this.picking ? {} : { blend: {
						color: {
							srcFactor: "one",
							dstFactor: "one-minus-src-alpha"
						},
						alpha: {
							srcFactor: "one",
							dstFactor: "one-minus-src-alpha"
						}
					} }
				}]
			},
			primitive: {
				topology: "triangle-list",
				frontFace: "cw",
				cullMode: "none"
			},
			depthStencil: {
				format: "depth32float",
				depthWriteEnabled: this.picking,
				depthCompare: "greater-equal"
			},
			multisample: { count: this.picking ? 1 : this._renderer.sampleCount }
		});
	}
	createVertexBuffers(e) {
		let t = this._renderer.device, n = e.position.length / 2;
		this._positionBuffer = t.createBuffer({
			label: "Polyline centers",
			size: e.position.byteLength,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._attributesBuffer = t.createBuffer({
			label: "Polyline adjacency",
			size: e.polylineAttributes.byteLength,
			usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
		}), this._widthsBuffer = t.createBuffer({
			label: "Polyline default widths",
			size: n * 4,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._stateBuffer = t.createBuffer({
			label: "Polyline feature state",
			size: n * 16,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this._indicesBuffer = t.createBuffer({
			label: "Polyline topology",
			size: e.indices.byteLength,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
		});
	}
	updateVertexBuffers(e) {
		this._positionData = this._syncFloatData(this._positionData, e.position), this._attributesData = this._syncFloatData(this._attributesData, e.polylineAttributes), this._indicesData = this._syncUintData(this._indicesData, e.indices), this._indexCount = e.indices.length;
		let t = e.position.length / 2;
		this._stateData = this._syncFloatLength(this._stateData, t * 4);
		for (let t = 0; t < e.components.length; t++) {
			let n = t === 0 ? 0 : e.components[t - 1].nPoints, r = e.components[t].nPoints, i = t + 1;
			for (let t = n; t < r; t++) this._stateData[t * 4] = this.picking ? (i & 255) / 255 : e.thematic[t], this._stateData[t * 4 + 1] = this.picking ? (i >> 8 & 255) / 255 : e.highlightedVertices[t], this._stateData[t * 4 + 2] = this.picking ? (i >> 16 & 255) / 255 : e.thematicValidity[t], this._stateData[t * 4 + 3] = e.skippedVertices[t];
		}
		let n = this._renderer.device.queue;
		n.writeBuffer(this._positionBuffer, 0, this._positionData), n.writeBuffer(this._attributesBuffer, 0, this._attributesData), n.writeBuffer(this._indicesBuffer, 0, this._indicesData), n.writeBuffer(this._stateBuffer, 0, this._stateData), this._widthsData = null, this.updateWidth(e);
	}
	updateWidth(e) {
		this._widthData[0] = e.layerRenderInfo.polylinesWidth ?? 0, this._renderer.device.queue.writeBuffer(this._widthBuffer, 0, this._widthData);
		let t = e.layerRenderInfo.polylinesWidthByComponent;
		if (!(this._widthsData && t === this._defaultWidths)) {
			this._defaultWidths = t, this._widthsData = this._syncFloatLength(this._widthsData, e.position.length / 2);
			for (let n = 0; n < e.components.length; n++) {
				let r = n === 0 ? 0 : e.components[n - 1].nPoints, i = e.components[n].nPoints, a = t?.[n], o = e.layerInfo.typeLayer === "roads" ? ki.DEFAULT_ROAD_HALF_WIDTH * 2 : 12;
				this._widthsData.fill(typeof a == "number" && Number.isFinite(a) && a > 0 ? a : o, r, i);
			}
			this._renderer.device.queue.writeBuffer(this._widthsBuffer, 0, this._widthsData);
		}
	}
	updateColorUniforms(e) {
		this.picking || super.updateColorUniforms(e), this.updateWidth(e);
	}
	renderPass(e, t) {
		let n = !t;
		(t || this.picking) && (t ??= this._renderer.commandEncoder.beginRenderPass({
			colorAttachments: [this._renderer.pickingBuffer],
			depthStencilAttachment: this._renderer.pickingDepthBuffer
		}), this.updateCameraUniforms(e), t.setPipeline(this._pipeline), t.setVertexBuffer(0, this._positionBuffer), t.setVertexBuffer(1, this._widthsBuffer), t.setVertexBuffer(2, this._stateBuffer), t.setIndexBuffer(this._indicesBuffer, "uint32"), this.picking || t.setBindGroup(0, this._renderInfoBindGroup), t.setBindGroup(+!this.picking, this._cameraBindGroup), t.setBindGroup(this.picking ? 1 : 2, this._widthBindGroup), this._indexCount > 0 && t.drawIndexed(this._indexCount), n && t.end());
	}
	destroy() {
		this._positionBuffer?.destroy(), this._attributesBuffer?.destroy(), this._widthsBuffer?.destroy(), this._stateBuffer?.destroy(), this._indicesBuffer?.destroy(), this._widthBuffer?.destroy(), super.destroy();
	}
}, bo = class extends Ya {
	get polylineAttributes() {
		return this._polylineAttributes;
	}
	loadLayerData(e) {
		let t = e.geometry.reduce((e, t) => e + t.position.length / 2, 0);
		if (!e.polylineAttributes || t % 5 != 0 || e.polylineAttributes.length !== t / 5 * 4) throw Error("PolylineLayer requires width-independent adjacency attributes for every centerline node.");
		this._polylineAttributes = e.polylineAttributes, super.loadLayerData(e);
	}
	createPipeline(e) {
		this._pipeline = new yo(e), this._pipeline.build(this), this._pipelinePicking = new yo(e, !0), this._pipelinePicking.build(this);
	}
	renderPass(e, t) {
		this._pipelinePicking.updateWidth(this), super.renderPass(e, t);
	}
	renderPickingPass(e, t) {
		this._dataIsDirty &&= (this._pipeline.updateVertexBuffers(this), this._pipelinePicking.updateVertexBuffers(this), !1), this._pipelinePicking.updateWidth(this), super.renderPickingPass(e, t);
	}
}, xo = class {
	_layers = [];
	_origin;
	_dynamicOrder = [];
	get layers() {
		return this._layers;
	}
	get origin() {
		if (!this._origin) throw Error("Layer origin has not been initialized");
		return this._origin;
	}
	get hasOrigin() {
		return this._origin !== void 0;
	}
	initializeOrigin(e) {
		this._origin = Da(e);
	}
	addLayer(e, t, n) {
		if (this._layers.some((t) => t.layerInfo.id === e.id)) return console.error(`LayerManager: layer id '${e.id}' already exists.`), null;
		let r = e.typeLayer === "buildings" ? new G(e, t, n) : e.typeLayer === "raster" ? new Va(e, t, n) : e.typeLayer === "points" ? new mo(e, t, n) : n.polylineAttributes ? new bo(e, t, n) : new oo(e, t, n);
		return !Ea.includes(e.typeLayer) && e.typeLayer !== "buildings" && this._dynamicOrder.push(e.id), this._layers.push(r), this._recomputeZIndices(), this._layers.sort((e, t) => e.layerInfo.zIndex - t.layerInfo.zIndex), r;
	}
	removeLayerById(e) {
		let t = this.searchByLayerId(e);
		t && (t.setChangeListener(null), t.destroy(), this._layers = this._layers.filter((t) => t.layerInfo.id !== e), this._dynamicOrder = this._dynamicOrder.filter((t) => t !== e), this._recomputeZIndices());
	}
	searchByLayerId(e) {
		return this._layers.find((t) => t.layerInfo.id === e) ?? null;
	}
	computeZindex(e) {
		let t = Ea.indexOf(e);
		return t === -1 ? 0 : t;
	}
	_recomputeZIndices() {
		for (let e of this._layers) {
			let { typeLayer: t, id: n } = e.layerInfo, r = Ea.indexOf(t);
			r === -1 ? t === "buildings" ? e.layerInfo.zIndex = 0 : e.layerInfo.zIndex = Ea.length + this._dynamicOrder.indexOf(n) : e.layerInfo.zIndex = r;
		}
	}
}, So = { value: () => {} };
function Co() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new wo(n);
}
function wo(e) {
	this._ = e;
}
function To(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
wo.prototype = Co.prototype = {
	constructor: wo,
	on: function(e, t) {
		var n = this._, r = To(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = Eo(n[i], e.name))) return i;
		} else {
			if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
			for (; ++a < o;) if (i = (e = r[a]).type) n[i] = Do(n[i], e.name, t);
			else if (t == null) for (i in n) n[i] = Do(n[i], e.name, null);
			return this;
		}
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new wo(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function Eo(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function Do(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = So, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var Oo = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region ../node_modules/d3-selection/src/namespace.js
function ko(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Oo.hasOwnProperty(t) ? {
		space: Oo[t],
		local: e
	} : e;
}
//#endregion
//#region ../node_modules/d3-selection/src/creator.js
function Ao(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function jo(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function Mo(e) {
	var t = ko(e);
	return (t.local ? jo : Ao)(t);
}
//#endregion
//#region ../node_modules/d3-selection/src/selector.js
function No() {}
function Po(e) {
	return e == null ? No : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/select.js
function Fo(e) {
	typeof e != "function" && (e = Po(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new K(r, this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/array.js
function Io(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region ../node_modules/d3-selection/src/selectorAll.js
function Lo() {
	return [];
}
function Ro(e) {
	return e == null ? Lo : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/selectAll.js
function zo(e) {
	return function() {
		return Io(e.apply(this, arguments));
	};
}
function Bo(e) {
	e = typeof e == "function" ? zo(e) : Ro(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new K(r, i);
}
//#endregion
//#region ../node_modules/d3-selection/src/matcher.js
function Vo(e) {
	return function() {
		return this.matches(e);
	};
}
function Ho(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/selectChild.js
var Uo = Array.prototype.find;
function Wo(e) {
	return function() {
		return Uo.call(this.children, e);
	};
}
function Go() {
	return this.firstElementChild;
}
function Ko(e) {
	return this.select(e == null ? Go : Wo(typeof e == "function" ? e : Ho(e)));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/selectChildren.js
var qo = Array.prototype.filter;
function Jo() {
	return Array.from(this.children);
}
function Yo(e) {
	return function() {
		return qo.call(this.children, e);
	};
}
function Xo(e) {
	return this.selectAll(e == null ? Jo : Yo(typeof e == "function" ? e : Ho(e)));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/filter.js
function Zo(e) {
	typeof e != "function" && (e = Vo(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new K(r, this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/sparse.js
function Qo(e) {
	return Array(e.length);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/enter.js
function $o() {
	return new K(this._enter || this._groups.map(Qo), this._parents);
}
function es(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
es.prototype = {
	constructor: es,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region ../node_modules/d3-selection/src/constant.js
function ts(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/data.js
function ns(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new es(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function rs(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new es(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function is(e) {
	return e.__data__;
}
function as(e, t) {
	if (!arguments.length) return Array.from(this, is);
	var n = t ? rs : ns, r = this._parents, i = this._groups;
	typeof e != "function" && (e = ts(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = os(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new K(o, r), o._enter = s, o._exit = c, o;
}
function os(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/exit.js
function ss() {
	return new K(this._exit || this._groups.map(Qo), this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/join.js
function cs(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/merge.js
function ls(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new K(s, this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/order.js
function us() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/sort.js
function ds(e) {
	e ||= fs;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new K(i, this._parents).order();
}
function fs(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/call.js
function ps() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/nodes.js
function ms() {
	return Array.from(this);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/node.js
function hs() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/size.js
function gs() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/empty.js
function _s() {
	return !this.node();
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/each.js
function vs(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/attr.js
function ys(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function bs(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function xs(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Ss(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Cs(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function ws(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Ts(e, t) {
	var n = ko(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? bs : ys : typeof t == "function" ? n.local ? ws : Cs : n.local ? Ss : xs)(n, t));
}
//#endregion
//#region ../node_modules/d3-selection/src/window.js
function Es(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/style.js
function Ds(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Os(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function ks(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function As(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Ds : typeof t == "function" ? ks : Os)(e, t, n ?? "")) : js(this.node(), e);
}
function js(e, t) {
	return e.style.getPropertyValue(t) || Es(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/property.js
function Ms(e) {
	return function() {
		delete this[e];
	};
}
function Ns(e, t) {
	return function() {
		this[e] = t;
	};
}
function Ps(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function Fs(e, t) {
	return arguments.length > 1 ? this.each((t == null ? Ms : typeof t == "function" ? Ps : Ns)(e, t)) : this.node()[e];
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/classed.js
function Is(e) {
	return e.trim().split(/^|\s+/);
}
function Ls(e) {
	return e.classList || new Rs(e);
}
function Rs(e) {
	this._node = e, this._names = Is(e.getAttribute("class") || "");
}
Rs.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function zs(e, t) {
	for (var n = Ls(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function Bs(e, t) {
	for (var n = Ls(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function Vs(e) {
	return function() {
		zs(this, e);
	};
}
function Hs(e) {
	return function() {
		Bs(this, e);
	};
}
function Us(e, t) {
	return function() {
		(t.apply(this, arguments) ? zs : Bs)(this, e);
	};
}
function Ws(e, t) {
	var n = Is(e + "");
	if (arguments.length < 2) {
		for (var r = Ls(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? Us : t ? Vs : Hs)(n, t));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/text.js
function Gs() {
	this.textContent = "";
}
function Ks(e) {
	return function() {
		this.textContent = e;
	};
}
function qs(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function Js(e) {
	return arguments.length ? this.each(e == null ? Gs : (typeof e == "function" ? qs : Ks)(e)) : this.node().textContent;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/html.js
function Ys() {
	this.innerHTML = "";
}
function Xs(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Zs(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Qs(e) {
	return arguments.length ? this.each(e == null ? Ys : (typeof e == "function" ? Zs : Xs)(e)) : this.node().innerHTML;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/raise.js
function $s() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function ec() {
	return this.each($s);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/lower.js
function tc() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function nc() {
	return this.each(tc);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/append.js
function rc(e) {
	var t = typeof e == "function" ? e : Mo(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/insert.js
function ic() {
	return null;
}
function ac(e, t) {
	var n = typeof e == "function" ? e : Mo(e), r = t == null ? ic : typeof t == "function" ? t : Po(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/remove.js
function oc() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function sc() {
	return this.each(oc);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/clone.js
function cc() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function lc() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function uc(e) {
	return this.select(e ? lc : cc);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/datum.js
function dc(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/on.js
function fc(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function pc(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function mc(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function hc(e, t, n) {
	return function() {
		var r = this.__on, i, a = fc(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function gc(e, t, n) {
	var r = pc(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
	} else {
		for (s = t ? hc : mc, i = 0; i < a; ++i) this.each(s(r[i], t, n));
		return this;
	}
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/dispatch.js
function _c(e, t, n) {
	var r = Es(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function vc(e, t) {
	return function() {
		return _c(this, e, t);
	};
}
function yc(e, t) {
	return function() {
		return _c(this, e, t.apply(this, arguments));
	};
}
function bc(e, t) {
	return this.each((typeof t == "function" ? yc : vc)(e, t));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/iterator.js
function* xc() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/index.js
var Sc = [null];
function K(e, t) {
	this._groups = e, this._parents = t;
}
function Cc() {
	return new K([[document.documentElement]], Sc);
}
function wc() {
	return this;
}
K.prototype = Cc.prototype = {
	constructor: K,
	select: Fo,
	selectAll: Bo,
	selectChild: Ko,
	selectChildren: Xo,
	filter: Zo,
	data: as,
	enter: $o,
	exit: ss,
	join: cs,
	merge: ls,
	selection: wc,
	order: us,
	sort: ds,
	call: ps,
	nodes: ms,
	node: hs,
	size: gs,
	empty: _s,
	each: vs,
	attr: Ts,
	style: As,
	property: Fs,
	classed: Ws,
	text: Js,
	html: Qs,
	raise: ec,
	lower: nc,
	append: rc,
	insert: ac,
	remove: sc,
	clone: uc,
	datum: dc,
	on: gc,
	dispatch: bc,
	[Symbol.iterator]: xc
};
//#endregion
//#region ../node_modules/d3-selection/src/select.js
function Tc(e) {
	return typeof e == "string" ? new K([[document.querySelector(e)]], [document.documentElement]) : new K([[e]], Sc);
}
//#endregion
//#region ../node_modules/d3-timer/src/timer.js
var Ec = 0, Dc = 0, Oc = 0, kc = 1e3, Ac, jc, Mc = 0, Nc = 0, Pc = 0, Fc = typeof performance == "object" && performance.now ? performance : Date, Ic = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Lc() {
	return Nc ||= (Ic(Rc), Fc.now() + Pc);
}
function Rc() {
	Nc = 0;
}
function zc() {
	this._call = this._time = this._next = null;
}
zc.prototype = Bc.prototype = {
	constructor: zc,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Lc() : +n) + (t == null ? 0 : +t), !this._next && jc !== this && (jc ? jc._next = this : Ac = this, jc = this), this._call = e, this._time = n, Gc();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, Gc());
	}
};
function Bc(e, t, n) {
	var r = new zc();
	return r.restart(e, t, n), r;
}
function Vc() {
	Lc(), ++Ec;
	for (var e = Ac, t; e;) (t = Nc - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Ec;
}
function Hc() {
	Nc = (Mc = Fc.now()) + Pc, Ec = Dc = 0;
	try {
		Vc();
	} finally {
		Ec = 0, Wc(), Nc = 0;
	}
}
function Uc() {
	var e = Fc.now(), t = e - Mc;
	t > kc && (Pc -= t, Mc = e);
}
function Wc() {
	for (var e, t = Ac, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ac = n);
	jc = e, Gc(r);
}
function Gc(e) {
	Ec || (Dc &&= clearTimeout(Dc), e - Nc > 24 ? (e < Infinity && (Dc = setTimeout(Hc, e - Fc.now() - Pc)), Oc &&= clearInterval(Oc)) : (Oc ||= (Mc = Fc.now(), setInterval(Uc, kc)), Ec = 1, Ic(Hc)));
}
//#endregion
//#region ../node_modules/d3-timer/src/timeout.js
function Kc(e, t, n) {
	var r = new zc();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/schedule.js
var qc = Co("start", "end", "cancel", "interrupt"), Jc = [];
function Yc(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Zc(e, n, {
		name: t,
		index: r,
		group: i,
		on: qc,
		tween: Jc,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function Xc(e, t) {
	var n = J(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function q(e, t) {
	var n = J(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function J(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Zc(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Bc(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return Kc(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (Kc(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region ../node_modules/d3-transition/src/interrupt.js
function Qc(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) (r = n[o]).name === t ? (i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o]) : a = !1;
		a && delete e.__transition;
	}
}
//#endregion
//#region ../node_modules/d3-transition/src/selection/interrupt.js
function $c(e) {
	return this.each(function() {
		Qc(this, e);
	});
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/tween.js
function el(e, t) {
	var n, r;
	return function() {
		var i = q(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function tl(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = q(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function nl(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = J(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? el : tl)(n, e, t));
}
function rl(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = q(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return J(e, r).value[t];
	};
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/interpolate.js
function il(e, t) {
	var n;
	return (typeof t == "number" ? A : t instanceof C ? mt : (n = C(t)) ? (t = n, mt) : Et)(e, t);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/attr.js
function al(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function ol(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function sl(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function cl(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function ll(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function ul(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function dl(e, t) {
	var n = ko(e), r = n === "transform" ? Lt : il;
	return this.attrTween(e, typeof t == "function" ? (n.local ? ul : ll)(n, r, rl(this, "attr." + e, t)) : t == null ? (n.local ? ol : al)(n) : (n.local ? cl : sl)(n, r, t));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/attrTween.js
function fl(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function pl(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function ml(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && pl(e, i)), n;
	}
	return i._value = t, i;
}
function hl(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && fl(e, i)), n;
	}
	return i._value = t, i;
}
function gl(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = ko(e);
	return this.tween(n, (r.local ? ml : hl)(r, t));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/delay.js
function _l(e, t) {
	return function() {
		Xc(this, e).delay = +t.apply(this, arguments);
	};
}
function vl(e, t) {
	return t = +t, function() {
		Xc(this, e).delay = t;
	};
}
function yl(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? _l : vl)(t, e)) : J(this.node(), t).delay;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/duration.js
function bl(e, t) {
	return function() {
		q(this, e).duration = +t.apply(this, arguments);
	};
}
function xl(e, t) {
	return t = +t, function() {
		q(this, e).duration = t;
	};
}
function Sl(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? bl : xl)(t, e)) : J(this.node(), t).duration;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/ease.js
function Cl(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		q(this, e).ease = t;
	};
}
function wl(e) {
	var t = this._id;
	return arguments.length ? this.each(Cl(t, e)) : J(this.node(), t).ease;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/easeVarying.js
function Tl(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		q(this, e).ease = n;
	};
}
function El(e) {
	if (typeof e != "function") throw Error();
	return this.each(Tl(this._id, e));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/filter.js
function Dl(e) {
	typeof e != "function" && (e = Vo(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Y(r, this._parents, this._name, this._id);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/merge.js
function Ol(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new Y(o, this._parents, this._name, this._id);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/on.js
function kl(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Al(e, t, n) {
	var r, i, a = kl(t) ? Xc : q;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function jl(e, t) {
	var n = this._id;
	return arguments.length < 2 ? J(this.node(), n).on.on(e) : this.each(Al(n, e, t));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/remove.js
function Ml(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Nl() {
	return this.on("end.remove", Ml(this._id));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/select.js
function Pl(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = Po(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, Yc(l[f], t, n, f, l, J(u, n)));
	return new Y(a, this._parents, t, n);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/selectAll.js
function Fl(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = Ro(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = J(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && Yc(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new Y(a, o, t, n);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/selection.js
var Il = Cc.prototype.constructor;
function Ll() {
	return new Il(this._groups, this._parents);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/style.js
function Rl(e, t) {
	var n, r, i;
	return function() {
		var a = js(this, e), o = (this.style.removeProperty(e), js(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function zl(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Bl(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = js(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Vl(e, t, n) {
	var r, i, a;
	return function() {
		var o = js(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), js(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function Hl(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = q(this, e), l = c.on, u = c.value[a] == null ? s ||= zl(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function Ul(e, t, n) {
	var r = (e += "") == "transform" ? It : il;
	return t == null ? this.styleTween(e, Rl(e, r)).on("end.style." + e, zl(e)) : typeof t == "function" ? this.styleTween(e, Vl(e, r, rl(this, "style." + e, t))).each(Hl(this._id, e)) : this.styleTween(e, Bl(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/styleTween.js
function Wl(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Gl(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && Wl(e, a, n)), r;
	}
	return a._value = t, a;
}
function Kl(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Gl(e, t, n ?? ""));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/text.js
function ql(e) {
	return function() {
		this.textContent = e;
	};
}
function Jl(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function Yl(e) {
	return this.tween("text", typeof e == "function" ? Jl(rl(this, "text", e)) : ql(e == null ? "" : e + ""));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/textTween.js
function Xl(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function Zl(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && Xl(r)), t;
	}
	return r._value = e, r;
}
function Ql(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, Zl(e));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/transition.js
function $l() {
	for (var e = this._name, t = this._id, n = nu(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = J(c, t);
		Yc(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new Y(r, this._parents, e, n);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/end.js
function eu() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = q(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/index.js
var tu = 0;
function Y(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function nu() {
	return ++tu;
}
var X = Cc.prototype;
Y.prototype = {
	constructor: Y,
	select: Pl,
	selectAll: Fl,
	selectChild: X.selectChild,
	selectChildren: X.selectChildren,
	filter: Dl,
	merge: Ol,
	selection: Ll,
	transition: $l,
	call: X.call,
	nodes: X.nodes,
	node: X.node,
	size: X.size,
	empty: X.empty,
	each: X.each,
	on: jl,
	attr: dl,
	attrTween: gl,
	style: Ul,
	styleTween: Kl,
	text: Yl,
	textTween: Ql,
	remove: Nl,
	tween: nl,
	delay: yl,
	duration: Sl,
	ease: wl,
	easeVarying: El,
	end: eu,
	[Symbol.iterator]: X[Symbol.iterator]
};
//#endregion
//#region ../node_modules/d3-ease/src/cubic.js
function ru(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../node_modules/d3-transition/src/selection/transition.js
var iu = {
	time: null,
	delay: 0,
	duration: 250,
	ease: ru
};
function au(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function ou(e) {
	var t, n;
	e instanceof Y ? (t = e._id, e = e._name) : (t = nu(), (n = iu).time = Lc(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && Yc(c, e, t, l, o, n || au(c, t));
	return new Y(r, this._parents, e, t);
}
Cc.prototype.interrupt = $c, Cc.prototype.transition = ou;
//#endregion
//#region ../node_modules/d3-brush/src/brush.js
var { abs: su, max: cu, min: lu } = Math;
["w", "e"].map(uu), ["n", "s"].map(uu), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(uu);
function uu(e) {
	return { type: e };
}
//#endregion
//#region ../node_modules/d3-zoom/src/transform.js
function du(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
du.prototype = {
	constructor: du,
	scale: function(e) {
		return e === 1 ? this : new du(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new du(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var fu = new du(1, 0, 0);
pu.prototype = du.prototype;
function pu(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return fu;
	return e.__zoom;
}
//#endregion
//#region src/map-ui.ts
var mu = "<svg viewBox=\"0 0 16 16\" width=\"20\" height=\"20\" fill=\"#555\"><path d=\"M8 3C4.134 3 1 8 1 8s3.134 5 7 5 7-5 7-5-3.134-5-7-5zm0 8.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-5.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"/></svg>", hu = "<svg viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><rect x=\"1\"   y=\"6\" width=\"3.5\" height=\"5\" rx=\"1\" fill=\"#4169e1\"/><rect x=\"4.5\" y=\"6\" width=\"3\"   height=\"5\"        fill=\"#44cccc\"/><rect x=\"7.5\" y=\"6\" width=\"3\"   height=\"5\"        fill=\"#fdd34d\"/><rect x=\"10.5\" y=\"6\" width=\"3.5\" height=\"5\" rx=\"1\" fill=\"#e04444\"/></svg>", gu = "<svg viewBox=\"0 0 16 16\" width=\"20\" height=\"20\" fill=\"#555\"><path d=\"M2 1l4.5 13 2.1-5.1L14 6.8z\"/></svg>", _u = class {
	_map;
	_uiMargin = 10;
	_activeLayer = null;
	_menuIcon = null;
	_subMenu = null;
	_legend = null;
	_performanceOverlay = null;
	_onMenuIconClick = null;
	_branding = null;
	_brandingResizeObserver = null;
	constructor(e) {
		this._map = e;
	}
	get map() {
		return this._map;
	}
	set map(e) {
		this._map = e;
	}
	get activeLayer() {
		return this._activeLayer;
	}
	set activeLayer(e) {
		this._activeLayer = e;
	}
	handleResize() {
		if (this._branding) {
			let e = this.map.canvas;
			Object.assign(this._branding.style, {
				left: `${e.offsetLeft}px`,
				top: `${e.offsetTop}px`,
				width: `${e.offsetWidth}px`,
				height: `${e.offsetHeight}px`,
				display: e.offsetWidth > 0 && e.offsetHeight > 0 ? "block" : "none"
			});
		}
		if (this._menuIcon && (this._menuIcon.style.top = this.map.canvas.offsetTop + this._uiMargin + "px", this._menuIcon.style.left = this.map.canvas.offsetLeft + this._uiMargin + "px"), this._subMenu && (this._subMenu.style.top = this.map.canvas.offsetTop + 35 + 2 * this._uiMargin + "px", this._subMenu.style.left = this.map.canvas.offsetLeft + this._uiMargin + "px"), this._legend) {
			let e = parseInt(this._legend.style.width || "0", 10) || 0, t = parseInt(this._legend.style.height || "0", 10) || 0;
			this._legend.style.left = this.map.canvas.offsetLeft + this.map.canvas.clientWidth - 2 - e - this._uiMargin + "px", this._legend.style.top = this.map.canvas.offsetTop + this.map.canvas.clientHeight - 2 - t - this._uiMargin + "px";
		}
		this._performanceOverlay && (this._performanceOverlay.style.left = this.map.canvas.offsetLeft + this.map.canvas.clientWidth - 92 - this._uiMargin + "px", this._performanceOverlay.style.top = this.map.canvas.offsetTop + this._uiMargin + "px");
	}
	buildBranding() {
		!this._branding && this.map.canvas.parentElement && (this._branding = document.createElement("div"), this._branding.className = "autk-map-branding", Object.assign(this._branding.style, {
			position: "absolute",
			pointerEvents: "none",
			zIndex: "10",
			overflow: "hidden"
		}), this._branding.innerHTML = "<span class=\"autk-map-credit\" style=\"position:absolute;right:10px;bottom:10px;font:11px system-ui,sans-serif;color:#555;opacity:0.6;white-space:nowrap\">made with autark</span>", this.map.canvas.parentElement.appendChild(this._branding), typeof ResizeObserver < "u" && (this._brandingResizeObserver = new ResizeObserver(() => this.handleResize()), this._brandingResizeObserver.observe(this.map.canvas)), this.handleResize());
	}
	changeActiveLayer(e) {
		e = this._resolveActiveLayer(e), e && (this._activeLayer = e, this._map.layerManager.layers.forEach((t) => {
			t.layerInfo.id !== e.layerInfo.id && this.map.updateRenderInfo(t.layerInfo.id, { renderInfo: { isPick: !1 } });
		}), this.map.updateRenderInfo(e.layerInfo.id, { renderInfo: { isPick: !0 } }), this.updateLegendContent());
	}
	buildUi() {
		this.buildMenuIcon(), this.buildSubMenu(), this.buildLayerList(), this.buildLegend();
	}
	destroy() {
		this._menuIcon && this._onMenuIconClick && this._menuIcon.removeEventListener("click", this._onMenuIconClick), this._brandingResizeObserver?.disconnect(), this._branding?.remove(), this._branding = null, this._brandingResizeObserver = null, this._menuIcon?.remove(), this._subMenu?.remove(), this._legend?.remove(), this._performanceOverlay?.remove(), this._onMenuIconClick = null, this._menuIcon = null, this._subMenu = null, this._legend = null, this._performanceOverlay = null, this._activeLayer = null;
	}
	updatePerformance(e, t) {
		this._performanceOverlay && (this._performanceOverlay.innerHTML = `<div style="font-weight:600;">${e.toFixed(1)} fps</div><div>${t.toFixed(1)} ms</div>`);
	}
	handleLayerRemoved(e) {
		this._activeLayer?.layerInfo.id === e && (this._activeLayer = null), this.syncLegendVisibility();
	}
	refreshLegend(e) {
		let t = this._resolveActiveLayer(e);
		t && t.layerRenderInfo.isColorMap && (this._activeLayer = t), this.syncLegendVisibility();
	}
	refreshLayerList() {
		this._subMenu?.style.visibility === "visible" && this.populateLayerList();
	}
	syncLegendVisibility() {
		if (!this._legend) return;
		this._activeLayer = this._resolveActiveLayer(this._activeLayer);
		let e = this._activeLayer?.layerRenderInfo.isColorMap ?? !1;
		this._legend.style.visibility = e ? "visible" : "hidden", this.updateLegendContent();
	}
	buildMenuIcon() {
		this._menuIcon || (this._menuIcon = document.createElement("div"), this._menuIcon.id = "autkMapUi", Object.assign(this._menuIcon.style, {
			width: "40px",
			height: "40px",
			position: "absolute",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: "11",
			backgroundColor: "#fff",
			border: "none",
			borderRadius: "10px",
			cursor: "pointer",
			boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
			fontFamily: "system-ui, sans-serif",
			top: this.map.canvas.offsetTop + this._uiMargin + "px",
			left: this.map.canvas.offsetLeft + this._uiMargin + "px"
		}), this._menuIcon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n            <rect x=\"8\"  y=\"10\"   rx=\"1.5\" ry=\"1.5\" width=\"24\" height=\"3.5\" fill=\"#666\" stroke=\"none\"></rect>\n            <rect x=\"8\"  y=\"18.5\" rx=\"1.5\" ry=\"1.5\" width=\"24\" height=\"3.5\" fill=\"#666\" stroke=\"none\"></rect>\n            <rect x=\"8\"  y=\"27\"   rx=\"1.5\" ry=\"1.5\" width=\"24\" height=\"3.5\" fill=\"#666\" stroke=\"none\"></rect>\n        </svg>", this.map.canvas.parentElement?.appendChild(this._menuIcon), this._onMenuIconClick = (e) => {
			if (e.stopPropagation(), !this._subMenu) return;
			let t = this._subMenu.style.visibility !== "visible";
			t && this.populateLayerList(), this._subMenu.style.visibility = t ? "visible" : "hidden";
		}, this._menuIcon.addEventListener("click", this._onMenuIconClick));
	}
	buildSubMenu() {
		this._subMenu || (this._subMenu = document.createElement("div"), this._subMenu.id = "autkMapSubMenu", Object.assign(this._subMenu.style, {
			position: "absolute",
			width: "260px",
			display: "block",
			zIndex: "11",
			backgroundColor: "#fff",
			border: "none",
			borderRadius: "10px",
			padding: "0",
			visibility: "hidden",
			boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
			fontFamily: "system-ui, sans-serif",
			fontSize: "14px",
			overflow: "hidden",
			top: this.map.canvas.offsetTop + 35 + 2 * this._uiMargin + "px",
			left: this.map.canvas.offsetLeft + this._uiMargin + "px"
		}), this.map.canvas.parentElement?.appendChild(this._subMenu));
	}
	buildLayerList() {
		if (!this._subMenu || this._subMenu.querySelector("#layersTitle")) return;
		this._subMenu.appendChild(this.makeHeading("layersTitle", "Layers"));
		let e = document.createElement("div");
		e.id = "layerListSection", Object.assign(e.style, { padding: "4px 0 6px" }), this._subMenu.appendChild(e);
	}
	buildLegend(e = 250, t = 80) {
		this._legend || (this._legend = document.createElement("div"), this._legend.id = "autkMapLegend", Object.assign(this._legend.style, {
			position: "absolute",
			display: "block",
			zIndex: "11",
			visibility: "hidden",
			backgroundColor: "#fff",
			border: "none",
			borderRadius: "10px",
			boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
			fontFamily: "system-ui, sans-serif",
			fontSize: "14px",
			width: e + "px",
			height: t + "px",
			left: this.map.canvas.offsetLeft + this.map.canvas.clientWidth - 2 - e - this._uiMargin + "px",
			top: this.map.canvas.offsetTop + this.map.canvas.clientHeight - 2 - t - this._uiMargin + "px"
		}), this.map.canvas.parentElement?.appendChild(this._legend));
	}
	buildPerformanceOverlay() {
		this._performanceOverlay || (this._performanceOverlay = document.createElement("div"), this._performanceOverlay.id = "autkMapPerformanceOverlay", Object.assign(this._performanceOverlay.style, {
			position: "absolute",
			display: "block",
			zIndex: "11",
			minWidth: "82px",
			padding: "8px 10px",
			backgroundColor: "rgba(255,255,255,0.92)",
			borderRadius: "10px",
			boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
			fontFamily: "system-ui, sans-serif",
			fontSize: "12px",
			color: "#222",
			textAlign: "right",
			left: this.map.canvas.offsetLeft + this.map.canvas.clientWidth - 92 - this._uiMargin - 10 + "px",
			top: this.map.canvas.offsetTop + this._uiMargin + "px"
		}), this._performanceOverlay.innerHTML = "<div style=\"font-weight:600;\">0.0 fps</div><div>0.0 ms</div>", this.map.canvas.parentElement?.appendChild(this._performanceOverlay));
	}
	populateLayerList() {
		let e = this._subMenu?.querySelector("#layerListSection");
		if (!e) return;
		e.innerHTML = "";
		let t = this.map.layerManager.layers;
		for (let n of t) e.appendChild(this.makeLayerRow(n));
	}
	updateLegendContent(e = 250, t = 80) {
		if (!this._legend) return;
		if (this._activeLayer = this._resolveActiveLayer(this._activeLayer), !this._activeLayer) {
			this._legend.innerHTML = "";
			return;
		}
		this._legend.innerHTML = "";
		let n = document.createElement("div");
		n.textContent = this._activeLayer.layerInfo.id, Object.assign(n.style, {
			padding: "10px 14px 6px",
			fontWeight: "600",
			fontSize: "14px",
			color: "#222",
			borderBottom: "1px solid #e8e8e8",
			textAlign: "center"
		}), this._legend.appendChild(n);
		let r = this._uiMargin, i = e - 4 * r, a = t - 40, o = this._activeLayer.layerRenderInfo.colormap.config.interpolator, s = this._activeLayer.layerRenderInfo.colormap.computedLabels ?? [], c = N.getCategoricalSchemeSize(o), l = c !== null, u = l ? c : 100, d = l ? Math.min(s.length, c) : 100, f = N.getColorArray(o, u).slice(0, d), p = Tc(this._legend).append("svg").attr("width", e).attr("height", a), m = i / f.length, h = a * .3, g = p.append("g").attr("transform", `translate(${2 * r}, 0)`);
		g.selectAll("rect").data(f).join("rect").attr("x", (e, t) => t * m).attr("y", 0).attr("width", m).attr("height", h).style("fill", (e) => `rgb(${e.r},${e.g},${e.b})`).style("stroke", (e) => `rgb(${e.r},${e.g},${e.b})`).style("stroke-width", "1px");
		let _ = s.map((e, t) => ({
			label: e,
			pos: l ? t * m + m / 2 : t * (i / (s.length - 1))
		}));
		g.selectAll("text").data(_).join("text").text((e) => e.label).attr("x", (e) => e.pos).attr("y", h + 12).style("font-size", "12px").style("fill", "#333").style("text-anchor", "middle");
	}
	makeLayerRow(e) {
		let t = document.createElement("div");
		Object.assign(t.style, {
			display: "flex",
			alignItems: "center",
			gap: "2px",
			padding: "4px 10px 4px 14px"
		});
		let n = this.makeIconButton(mu, !e.layerRenderInfo.isSkip, () => {
			this.map.updateRenderInfo(e.layerInfo.id, { renderInfo: { isSkip: !e.layerRenderInfo.isSkip } });
		}), r = this.makeIconButton(hu, e.layerRenderInfo.isColorMap ?? !1, () => {
			this.map.updateRenderInfo(e.layerInfo.id, { renderInfo: { isColorMap: !e.layerRenderInfo.isColorMap } });
		}), i = e.layerInfo.typeLayer === "raster" ? (() => {
			let e = document.createElement("span");
			return e.style.width = "28px", e.style.flexShrink = "0", e;
		})() : this.makeIconButton(gu, e.layerRenderInfo.isPick ?? !1, () => {
			this.changeActiveLayer(this.map.layerManager.searchByLayerId(e.layerInfo.id));
		}), a = document.createElement("span");
		return a.textContent = e.layerInfo.id, Object.assign(a.style, {
			flex: "1",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			fontSize: "13px",
			color: "#333",
			marginLeft: "4px"
		}), t.appendChild(n), t.appendChild(r), t.appendChild(i), t.appendChild(a), t;
	}
	makeIconButton(e, t, n) {
		let r = document.createElement("button");
		return r.innerHTML = e, Object.assign(r.style, {
			width: "28px",
			height: "28px",
			flexShrink: "0",
			border: "none",
			borderRadius: "4px",
			cursor: "pointer",
			background: "none",
			padding: "2px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			opacity: t ? "1" : "0.25"
		}), r.addEventListener("click", n), r;
	}
	makeHeading(e, t) {
		let n = document.createElement("div");
		return n.id = e, n.textContent = t, Object.assign(n.style, {
			padding: "10px 14px 6px",
			fontWeight: "600",
			fontSize: "14px",
			color: "#222",
			borderBottom: "1px solid #e8e8e8"
		}), n;
	}
	_resolveActiveLayer(e) {
		if (!e) return null;
		let t = this.map.layerManager.searchByLayerId(e.layerInfo.id);
		return t === e ? t : null;
	}
}, vu = {
	background: "#b2c7cd",
	surface: "#e2eaed",
	parks: "#b8ccb0",
	water: "#9ec0cb",
	roads: "#b98c0f",
	buildings: "#c7d3d8",
	points: "#9ea4a6",
	polylines: "#b5bbbe",
	polygons: "#cbd3d5"
}, yu = {
	background: "#f2f3f2",
	surface: "#e6e8e7",
	parks: "#dde5d8",
	water: "#dce8f0",
	roads: "#b7bdc4",
	buildings: "#d4d8d6",
	points: "#a1a2a2",
	polylines: "#b8bab9",
	polygons: "#cfd1d0"
}, bu = {
	background: "#eeeae4",
	surface: "#e2ddd5",
	parks: "#a9e3ad",
	water: "#86c9e8",
	roads: "#a3b2c2",
	buildings: "#cfc7bc",
	points: "#9e9b95",
	polylines: "#b5b1aa",
	polygons: "#cbc7c0"
}, xu = {
	background: "#e8eff2",
	surface: "#f4f4f2",
	parks: "#d5eacb",
	water: "#b8def5",
	roads: "#c3cdd4",
	buildings: "#d8dde0",
	points: "#ababa9",
	polylines: "#c3c3c2",
	polygons: "#dcdcda"
}, Su = {
	background: "#eee9e1",
	surface: "#f7f3eb",
	parks: "#cdebb0",
	water: "#a9d3f5",
	roads: "#d2c0a5",
	buildings: "#decfb6",
	points: "#adaaa5",
	polylines: "#c6c2bc",
	polygons: "#dedbd4"
}, Cu = {
	background: "#e6eef4",
	surface: "#ffffff",
	parks: "#ffffff",
	water: "#e6eef4",
	roads: "#353535",
	buildings: "#e2e2e2",
	points: "#666666",
	polylines: "#444444",
	polygons: "#eeeeee"
}, wu = [
	"apple",
	"default",
	"light",
	"google",
	"osm",
	"poster"
], Tu = Ta.filter((e) => e !== "raster"), Eu = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Du = class e {
	static _presets = {
		default: e._normalizeStyle(vu, "default"),
		light: e._normalizeStyle(yu, "light"),
		google: e._normalizeStyle(bu, "google"),
		apple: e._normalizeStyle(xu, "apple"),
		osm: e._normalizeStyle(Su, "osm"),
		poster: e._normalizeStyle(Cu, "poster")
	};
	static _defaultStyleId = "apple";
	_invalidValue = "#FFFFFF";
	_highlight = "#5dade2";
	_current;
	_currentStyle;
	_onChange = null;
	constructor(t = e._defaultStyleId) {
		let n = e._isPresetId(t) ? t : e._defaultStyleId;
		this._current = e._presets[n], this._currentStyle = n;
	}
	get currentStyle() {
		return this._currentStyle;
	}
	get availableStyles() {
		return e.availableStyles;
	}
	static get availableStyles() {
		return [...wu];
	}
	getColor(e) {
		let t = (Object.prototype.hasOwnProperty.call(this._current, e) ? this._current[e] : void 0) ?? this._current.polygons;
		return N.hexToRgb(t);
	}
	getInvalidValueColor() {
		return N.hexToRgb(this._invalidValue);
	}
	setChangeListener(e) {
		this._onChange = e;
	}
	setPredefinedStyle(t) {
		let n = e._isPresetId(t) ? t : e._defaultStyleId;
		this._current = e._presets[n], this._currentStyle = n, this._onChange?.();
	}
	setCustomStyle(t) {
		this._current = e._normalizeStyle(t, "custom"), this._currentStyle = "custom", this._onChange?.();
	}
	getHighlightColor() {
		return N.hexToRgb(this._highlight);
	}
	setHighlightColor(e) {
		this._highlight = e, this._onChange?.();
	}
	setInvalidValueColor(e) {
		this._invalidValue = e, this._onChange?.();
	}
	static _isPresetId(e) {
		return wu.includes(e);
	}
	static _normalizeStyle(e, t) {
		let n = {};
		for (let r of Tu) {
			let i = e[r];
			if (typeof i != "string" || i.trim().length === 0) throw Error(`MapStyle(${t}): missing required key "${r}".`);
			let a = i.trim();
			if (!Eu.test(a)) throw Error(`MapStyle(${t}): key "${r}" must be a hex color (#RGB, #RRGGBB or #RRGGBBAA).`);
			n[r] = a;
		}
		return n;
	}
}, Ou = class extends Ca {
	_onChange;
	constructor(e) {
		super(), this._onChange = e;
	}
	resetCamera(e, t, n) {
		super.resetCamera(e, t, n), this._onChange?.();
	}
	resize(e, t) {
		super.resize(e, t), this._onChange?.();
	}
	zoom(e, t, n) {
		super.zoom(e, t, n), this._onChange?.();
	}
	translate(e, t) {
		super.translate(e, t), this._onChange?.();
	}
	yaw(e) {
		super.yaw(e), this._onChange?.();
	}
	pitch(e) {
		super.pitch(e), this._onChange?.();
	}
	setOrthographicBounds(e, t, n, r) {
		super.setOrthographicBounds(e, t, n, r), this._onChange?.();
	}
}, ku = class {
	renderer;
	camera;
	layerManager;
	picking;
	constructor(e, t, n, r) {
		this.renderer = e, this.camera = t, this.layerManager = n, this.picking = r;
	}
	resetCamera() {
		this.camera.resetCamera([
			0,
			1,
			0
		], [
			0,
			0,
			0
		], [
			0,
			0,
			1e4
		]), this.camera.resize(this.renderer.pixelWidth, this.renderer.pixelHeight);
	}
	renderFrame() {
		let e = this.picking.consumePendingPick();
		this.renderer.start();
		let t = this.layerManager.layers.filter((e) => !e.layerRenderInfo.isSkip && e instanceof G);
		if (this.layerManager.layers.forEach((e) => {
			e.layerRenderInfo.isSkip || e.prepareRender(this.camera);
		}), t.length > 0) {
			let e = to.beginSharedGeometryPass(this.renderer);
			t.forEach((t) => {
				t.renderSceneGeometry(this.camera, e);
			}), e.end();
		}
		let n = this.renderer.beginMainRenderPass();
		this.layerManager.layers.forEach((e) => {
			!e.layerRenderInfo.isSkip && !(e instanceof G) && e.renderPass(this.camera, n);
		}), t.length > 0 && to.compositeSharedPass(this.renderer, n), n.end();
		let r = null;
		e && (this.renderer.startPickingRenderPass(), e.layer.renderPickingPass(this.camera), r = this.picking.enqueuePickingReadback(e)), this.renderer.finish(), this.picking.resolvePickingReadback(e, r);
	}
}, Au = class {
	renderer;
	layerManager;
	mapEvents;
	constructor(e, t, n) {
		this.renderer = e, this.layerManager = t, this.mapEvents = n;
	}
	consumePendingPick() {
		let e = this.layerManager.layers.find((e) => e.layerRenderInfo.isPick) ?? null;
		if (!e || e.layerRenderInfo.isSkip || !e.layerRenderInfo.pickedComps) return null;
		let [t, n] = e.layerRenderInfo.pickedComps;
		return e.layerRenderInfo.pickedComps = void 0, !(e instanceof Ya) && !(e instanceof mo) ? (e.clearHighlightedIds(), null) : {
			layer: e,
			pickableLayer: e,
			x: t,
			y: n
		};
	}
	enqueuePickingReadback(e) {
		let t = this.renderer.reservePickingReadbackSlot(1);
		return t === null ? (console.warn("Picking readback buffers are still busy; skipping this picking frame."), null) : (this.renderer.enqueuePickingReadback(t, 0, e.x, e.y), t);
	}
	resolvePickingReadback(e, t) {
		t !== null && e && this.renderer.readPickingResults(t, 1).then((t) => {
			let n = t[0] ?? -1, { layer: r, pickableLayer: i } = e;
			n >= 0 ? (i.toggleHighlightedIds([n]), this.mapEvents.emit(Ma.PICKING, {
				selection: i.highlightedIds,
				layerId: r.layerInfo.id
			})) : (r.clearHighlightedIds(), this.mapEvents.emit(Ma.PICKING, {
				selection: [],
				layerId: r.layerInfo.id
			}));
		});
	}
}, ju = "struct CameraUniform {\n  viewProjection: mat4x4<f32>,\n  cameraPosition: vec4<f32>,\n  lightDirection: vec4<f32>,\n  settings: vec4<f32>,\n  heightOriginCell: vec4<f32>,\n  heightDims: vec4<f32>,\n  overlayBounds: vec4<f32>,\n  overlayUvRect: vec4<f32>,\n  waterColor: vec4<f32>,\n};\n\nstruct VertexOutput {\n  @builtin(position) clipPosition: vec4<f32>,\n  @location(0) worldPosition: vec3<f32>,\n  @location(1) normal: vec3<f32>,\n  @location(2) level: f32,\n};\n\n@group(0) @binding(0) var<uniform> camera: CameraUniform;\n@group(0) @binding(2) var overlaySampler: sampler;\n@group(0) @binding(3) var overlayTexture: texture_2d<f32>;\n\nfn insideUnit(uv: vec2<f32>) -> bool {\n  return uv.x >= 0.0 && uv.y >= 0.0 && uv.x <= 1.0 && uv.y <= 1.0;\n}\n\nfn overlayUv(xy: vec2<f32>) -> vec2<f32> {\n  let uv = (xy - camera.overlayBounds.xy) / camera.overlayBounds.zw;\n  return camera.overlayUvRect.xy + vec2<f32>(uv.x, 1.0 - uv.y) * camera.overlayUvRect.zw;\n}\n\nfn inOverlayBounds(xy: vec2<f32>) -> bool {\n  let uv = (xy - camera.overlayBounds.xy) / camera.overlayBounds.zw;\n  return insideUnit(uv);\n}\n\nfn lodDebugColor(level: f32) -> vec3<f32> {\n  let lod = i32(round(level));\n  if (lod == 0) { return vec3<f32>(1.00, 0.10, 0.10); }\n  if (lod == 1) { return vec3<f32>(1.00, 0.55, 0.00); }\n  if (lod == 2) { return vec3<f32>(1.00, 0.95, 0.00); }\n  if (lod == 3) { return vec3<f32>(0.20, 0.90, 0.20); }\n  if (lod == 4) { return vec3<f32>(0.00, 0.85, 1.00); }\n  if (lod == 5) { return vec3<f32>(0.15, 0.35, 1.00); }\n  if (lod == 6) { return vec3<f32>(0.65, 0.25, 1.00); }\n  return vec3<f32>(1.00, 0.20, 0.85);\n}\n\n@fragment\nfn fragmentMain(input: VertexOutput) -> @location(0) vec4<f32> {\n  let overlay = textureSample(overlayTexture, overlaySampler, overlayUv(input.worldPosition.xy));\n  if (!inOverlayBounds(input.worldPosition.xy) || overlay.a <= 0.001) {\n    discard;\n  }\n\n  let n = normalize(input.normal);\n  let l = normalize(vec3<f32>(0.35, -0.45, 0.82));\n  let diffuse = max(dot(n, l), 0.0);\n  let shade = clamp(0.74 + 0.28 * diffuse, 0.70, 1.02);\n  let unpremultipliedOverlay = overlay.rgb / max(overlay.a, 0.0001);\n  let isWater = distance(unpremultipliedOverlay, camera.waterColor.rgb) <= camera.waterColor.a;\n  let finalShade = select(shade, 1.0, isWater);\n\n  return vec4<f32>(overlay.rgb * finalShade, overlay.a);\n}\n\n@fragment\nfn meshFragmentMain(input: VertexOutput) -> @location(0) vec4<f32> {\n  return vec4<f32>(lodDebugColor(input.level), 1.0);\n}\n\n@fragment\nfn boundsFragmentMain(input: VertexOutput) -> @location(0) vec4<f32> {\n  _ = input;\n  return vec4<f32>(1.0, 1.0, 0.0, 1.0);\n}\n\n@fragment\nfn visibleBoundsFragmentMain(input: VertexOutput) -> @location(0) vec4<f32> {\n  return vec4<f32>(input.worldPosition.x, input.worldPosition.y, input.worldPosition.x, input.worldPosition.y);\n}", Mu = "struct CameraUniform {\n  viewProjection: mat4x4<f32>,\n  cameraPosition: vec4<f32>,\n  lightDirection: vec4<f32>,\n  settings: vec4<f32>,\n  heightOriginCell: vec4<f32>,\n  heightDims: vec4<f32>,\n  overlayBounds: vec4<f32>,\n  overlayUvRect: vec4<f32>,\n  waterColor: vec4<f32>,\n};\n\nstruct VertexOutput {\n  @builtin(position) clipPosition: vec4<f32>,\n  @location(0) worldPosition: vec3<f32>,\n  @location(1) normal: vec3<f32>,\n  @location(2) level: f32,\n};\n\n@group(0) @binding(0) var<uniform> camera: CameraUniform;\n@group(0) @binding(3) var overlayTexture: texture_2d<f32>;\n\nfn insideUnit(uv: vec2<f32>) -> bool {\n  return uv.x >= 0.0 && uv.y >= 0.0 && uv.x <= 1.0 && uv.y <= 1.0;\n}\n\nfn overlayUv(xy: vec2<f32>) -> vec2<f32> {\n  let uv = (xy - camera.overlayBounds.xy) / camera.overlayBounds.zw;\n  return camera.overlayUvRect.xy + vec2<f32>(uv.x, 1.0 - uv.y) * camera.overlayUvRect.zw;\n}\n\nfn inOverlayBounds(xy: vec2<f32>) -> bool {\n  let uv = (xy - camera.overlayBounds.xy) / camera.overlayBounds.zw;\n  return insideUnit(uv);\n}\n\n@fragment\nfn pickingFragmentMain(input: VertexOutput) -> @location(0) vec4<f32> {\n  if (!inOverlayBounds(input.worldPosition.xy)) {\n    return vec4<f32>(0.0, 0.0, 0.0, 1.0);\n  }\n\n  let dims = vec2<i32>(textureDimensions(overlayTexture));\n  let uv = overlayUv(input.worldPosition.xy);\n  let coords = clamp(vec2<i32>(floor(uv * vec2<f32>(dims))), vec2<i32>(0), dims - vec2<i32>(1));\n  let color = textureLoad(overlayTexture, coords, 0);\n  return vec4<f32>(color.rgb, 1.0);\n}", Nu = "struct CameraUniform {\n  viewProjection: mat4x4<f32>,\n  cameraPosition: vec4<f32>,\n  lightDirection: vec4<f32>,\n  settings: vec4<f32>,\n  heightOriginCell: vec4<f32>,\n  heightDims: vec4<f32>,\n  overlayBounds: vec4<f32>,\n  overlayUvRect: vec4<f32>,\n  waterColor: vec4<f32>,\n};\n\nstruct VertexOutput {\n  @builtin(position) clipPosition: vec4<f32>,\n  @location(0) worldPosition: vec3<f32>,\n  @location(1) normal: vec3<f32>,\n  @location(2) level: f32,\n};\n\n@group(0) @binding(0) var<uniform> camera: CameraUniform;\n@group(0) @binding(1) var heightFieldTexture: texture_2d<f32>;\n\nfn terrainHeight(xy: vec2<f32>) -> f32 {\n  let origin = camera.heightOriginCell.xy;\n  let cellSize = camera.heightOriginCell.zw;\n  let dims = vec2<i32>(i32(camera.heightDims.x), i32(camera.heightDims.y));\n  let texel = clamp((xy - origin) / cellSize, vec2<f32>(0.0), vec2<f32>(f32(dims.x - 2), f32(dims.y - 2)));\n  let base = vec2<i32>(floor(texel));\n  let blend = fract(texel);\n  let h00 = textureLoad(heightFieldTexture, base, 0).r;\n  let h10 = textureLoad(heightFieldTexture, base + vec2<i32>(1, 0), 0).r;\n  let h01 = textureLoad(heightFieldTexture, base + vec2<i32>(0, 1), 0).r;\n  let h11 = textureLoad(heightFieldTexture, base + vec2<i32>(1, 1), 0).r;\n\n  return mix(mix(h00, h10, blend.x), mix(h01, h11, blend.x), blend.y);\n}\n\nfn terrainNormal(xy: vec2<f32>, sampleDistance: f32) -> vec3<f32> {\n  let d = max(sampleDistance, 1.0);\n  let hL = terrainHeight(xy - vec2<f32>(d, 0.0));\n  let hR = terrainHeight(xy + vec2<f32>(d, 0.0));\n  let hD = terrainHeight(xy - vec2<f32>(0.0, d));\n  let hU = terrainHeight(xy + vec2<f32>(0.0, d));\n  return normalize(vec3<f32>(hL - hR, hD - hU, 2.0 * d));\n}\n\n@vertex\nfn vertexMain(\n  @location(0) localPosition: vec2<f32>,\n  @location(1) levelData: vec4<f32>,\n  @location(2) unused: f32,\n  @location(3) seamData: vec4<f32>,\n) -> VertexOutput {\n  _ = unused;\n  _ = seamData;\n  let blockOrigin = levelData.xy;\n  let blockSize = levelData.z;\n  let level = levelData.w;\n  let scale = blockSize / camera.settings.w;\n  let worldXY = blockOrigin + localPosition * blockSize;\n  let height = terrainHeight(worldXY);\n  let worldPosition = vec3<f32>(worldXY.x, worldXY.y, height);\n\n  var output: VertexOutput;\n  output.clipPosition = camera.viewProjection * vec4<f32>(worldPosition, 1.0);\n  output.worldPosition = worldPosition;\n  output.normal = terrainNormal(worldXY, scale);\n  output.level = level;\n  return output;\n}\n\n@vertex\nfn meshVertexMain(\n  @location(0) localPosition: vec2<f32>,\n  @location(1) levelData: vec4<f32>,\n  @location(2) unused: f32,\n  @location(3) seamData: vec4<f32>,\n) -> VertexOutput {\n  _ = unused;\n  _ = seamData;\n  let blockOrigin = levelData.xy;\n  let blockSize = levelData.z;\n  let level = levelData.w;\n  let scale = blockSize / camera.settings.w;\n  let worldXY = blockOrigin + localPosition * blockSize;\n  let height = terrainHeight(worldXY);\n  let normal = terrainNormal(worldXY, scale);\n  let worldPosition = vec3<f32>(worldXY.x, worldXY.y, height) + normal * max(0.6, scale * 0.08);\n\n  var output: VertexOutput;\n  output.clipPosition = camera.viewProjection * vec4<f32>(worldPosition, 1.0);\n  output.worldPosition = worldPosition;\n  output.normal = normal;\n  output.level = level;\n  return output;\n}\n\n@vertex\nfn boundsVertexMain(@location(0) position: vec3<f32>) -> VertexOutput {\n  var output: VertexOutput;\n  output.clipPosition = camera.viewProjection * vec4<f32>(position, 1.0);\n  output.worldPosition = position;\n  output.normal = vec3<f32>(0.0, 0.0, 1.0);\n  output.level = 0.0;\n  return output;\n}\n\n@vertex\nfn visibleBoundsVertexMain(\n  @location(0) localPosition: vec2<f32>,\n  @location(1) levelData: vec4<f32>,\n  @location(2) unused: f32,\n  @location(3) seamData: vec4<f32>,\n) -> VertexOutput {\n  _ = unused;\n  _ = seamData;\n  let blockOrigin = levelData.xy;\n  let blockSize = levelData.z;\n  let level = levelData.w;\n  let scale = blockSize / camera.settings.w;\n  let worldXY = blockOrigin + localPosition * blockSize;\n  let height = terrainHeight(worldXY);\n  let worldPosition = vec3<f32>(worldXY.x, worldXY.y, height);\n\n  var output: VertexOutput;\n  output.clipPosition = camera.viewProjection * vec4<f32>(worldPosition, 1.0);\n  output.worldPosition = worldPosition;\n  output.normal = terrainNormal(worldXY, scale);\n  output.level = level;\n  return output;\n}", Pu = "struct Params {\n  total: u32,\n  width: u32,\n  height: u32,\n  _pad: u32,\n};\n\nstruct BoundsBuffer {\n  values: array<vec4<f32>>,\n};\n\n@group(0) @binding(0) var inputTexture: texture_2d<f32>;\n@group(0) @binding(1) var<storage, read_write> outputBuffer: BoundsBuffer;\n@group(0) @binding(2) var<uniform> params: Params;\n\n@group(1) @binding(0) var<storage, read> inputBuffer: BoundsBuffer;\n@group(1) @binding(1) var<storage, read_write> nextOutputBuffer: BoundsBuffer;\n@group(1) @binding(2) var<uniform> bufferParams: Params;\n\nvar<workgroup> partial: array<vec4<f32>, 256>;\n\nfn emptyBounds() -> vec4<f32> {\n  return vec4<f32>(1.0e20, 1.0e20, -1.0e20, -1.0e20);\n}\n\nfn mergeBounds(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {\n  return vec4<f32>(min(a.x, b.x), min(a.y, b.y), max(a.z, b.z), max(a.w, b.w));\n}\n\n@compute @workgroup_size(256)\nfn reduceTexture(\n  @builtin(local_invocation_id) localId: vec3<u32>,\n  @builtin(workgroup_id) workgroupId: vec3<u32>,\n) {\n  let localIndex = localId.x;\n  let globalIndex = workgroupId.x * 256u + localIndex;\n  var value = emptyBounds();\n\n  if (globalIndex < params.total) {\n    let x = i32(globalIndex % params.width);\n    let y = i32(globalIndex / params.width);\n    value = textureLoad(inputTexture, vec2<i32>(x, y), 0);\n  }\n\n  partial[localIndex] = value;\n  workgroupBarrier();\n\n  var stride = 128u;\n  loop {\n    if (stride == 0u) {\n      break;\n    }\n    if (localIndex < stride) {\n      partial[localIndex] = mergeBounds(partial[localIndex], partial[localIndex + stride]);\n    }\n    workgroupBarrier();\n    stride = stride / 2u;\n  }\n\n  if (localIndex == 0u) {\n    outputBuffer.values[workgroupId.x] = partial[0];\n  }\n}\n\n@compute @workgroup_size(256)\nfn reduceBuffer(\n  @builtin(local_invocation_id) localId: vec3<u32>,\n  @builtin(workgroup_id) workgroupId: vec3<u32>,\n) {\n  let localIndex = localId.x;\n  let globalIndex = workgroupId.x * 256u + localIndex;\n  var value = emptyBounds();\n\n  if (globalIndex < bufferParams.total) {\n    value = inputBuffer.values[globalIndex];\n  }\n\n  partial[localIndex] = value;\n  workgroupBarrier();\n\n  var stride = 128u;\n  loop {\n    if (stride == 0u) {\n      break;\n    }\n    if (localIndex < stride) {\n      partial[localIndex] = mergeBounds(partial[localIndex], partial[localIndex + stride]);\n    }\n    workgroupBarrier();\n    stride = stride / 2u;\n  }\n\n  if (localIndex == 0u) {\n    nextOutputBuffer.values[workgroupId.x] = partial[0];\n  }\n}", Z = 32, Fu = 33, Iu = 7, Lu = 4096, Ru = 30, zu = 0, Q = 512, Bu = 256, Vu = Q * Q, Hu = Math.ceil(Vu / Bu), Uu = Math.ceil(Hu / Bu), Wu = Math.ceil(Uu / Bu), Gu = class {
	device;
	_heightfield;
	stats = {
		selectedBlocks: 0,
		triangles: 0,
		culledBlocks: 0
	};
	bounds;
	pipeline;
	depthPipeline;
	meshPipeline;
	pickingPipeline;
	boundsPipeline;
	visibleBoundsPipeline;
	reduceTexturePipeline;
	reduceBufferPipeline;
	cameraBuffer;
	bindGroup;
	pickingBindGroup;
	instanceBuffer;
	boundsVertexBuffer;
	heightTexture;
	heightTextureView;
	visibleBoundsTexture;
	visibleBoundsDepthTexture;
	visibleBoundsTextureView;
	visibleBoundsDepthTextureView;
	reduceParamsTextureBuffer;
	reduceParamsPass2Buffer;
	reduceParamsPass3Buffer;
	reducePartialA;
	reducePartialB;
	reduceFinal;
	reduceReadback;
	reduceTextureBindGroup;
	reducePass2BindGroup;
	reducePass3BindGroup;
	mesh;
	instanceData = new Float32Array(Lu * 8);
	lastBlocks = [];
	latestReducedBounds = null;
	boundsReadbackPending = !1;
	boundsReadbackInFlight = !1;
	boundsReadbackSkipped = !1;
	instanceCount = 0;
	constructor(e, t, n, r, i, a, o) {
		this.device = e, this._heightfield = i, this.bounds = this._heightfield.bounds, this.mesh = Ku(e), this.cameraBuffer = e.createBuffer({
			label: "Terrain camera uniform buffer",
			size: 192,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		}), this.instanceBuffer = e.createBuffer({
			label: "Terrain block instance buffer",
			size: this.instanceData.byteLength,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this.boundsVertexBuffer = e.createBuffer({
			label: "Terrain overlay bounds debug vertices",
			size: 36 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
		}), this.heightTexture = e.createTexture({
			label: "Terrain height field texture",
			size: [this._heightfield.width, this._heightfield.height],
			format: "r32float",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
		}), this.heightTextureView = this.heightTexture.createView(), e.queue.writeTexture({ texture: this.heightTexture }, this._heightfield.data, {
			bytesPerRow: this._heightfield.width * Float32Array.BYTES_PER_ELEMENT,
			rowsPerImage: this._heightfield.height
		}, {
			width: this._heightfield.width,
			height: this._heightfield.height
		}), this.visibleBoundsTexture = e.createTexture({
			label: "Terrain visible bounds prepass texture",
			size: [Q, Q],
			format: "rgba16float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
		}), this.visibleBoundsDepthTexture = e.createTexture({
			label: "Terrain visible bounds prepass depth texture",
			size: [Q, Q],
			format: "depth32float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT
		}), this.visibleBoundsTextureView = this.visibleBoundsTexture.createView(), this.visibleBoundsDepthTextureView = this.visibleBoundsDepthTexture.createView(), this.reduceParamsTextureBuffer = rd(e, Vu, Q, Q), this.reduceParamsPass2Buffer = rd(e, Hu, 0, 0), this.reduceParamsPass3Buffer = rd(e, Uu, 0, 0), this.reducePartialA = nd(e, Hu, "Terrain bounds reduce partial A"), this.reducePartialB = nd(e, Uu, "Terrain bounds reduce partial B"), this.reduceFinal = nd(e, Wu, "Terrain bounds reduce final"), this.reduceReadback = e.createBuffer({
			label: "Terrain bounds readback buffer",
			size: 4 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
		});
		let s = e.createSampler({
			label: "Terrain overlay sampler",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge",
			magFilter: "linear",
			minFilter: "linear"
		}), c = e.createBindGroupLayout({
			label: "Terrain bind group layout",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
					buffer: { type: "uniform" }
				},
				{
					binding: 1,
					visibility: GPUShaderStage.VERTEX,
					texture: { sampleType: "unfilterable-float" }
				},
				{
					binding: 2,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 3,
					visibility: GPUShaderStage.FRAGMENT,
					texture: { sampleType: "float" }
				}
			]
		});
		this.bindGroup = e.createBindGroup({
			label: "Terrain bind group",
			layout: c,
			entries: [
				{
					binding: 0,
					resource: { buffer: this.cameraBuffer }
				},
				{
					binding: 1,
					resource: this.heightTextureView
				},
				{
					binding: 2,
					resource: s
				},
				{
					binding: 3,
					resource: a
				}
			]
		}), this.pickingBindGroup = e.createBindGroup({
			label: "Terrain picking bind group",
			layout: c,
			entries: [
				{
					binding: 0,
					resource: { buffer: this.cameraBuffer }
				},
				{
					binding: 1,
					resource: this.heightTextureView
				},
				{
					binding: 2,
					resource: s
				},
				{
					binding: 3,
					resource: o
				}
			]
		});
		let l = e.createShaderModule({
			label: "Terrain vertex shader",
			code: Nu
		}), u = e.createShaderModule({
			label: "Terrain fragment shader",
			code: ju
		}), d = e.createShaderModule({
			label: "Terrain picking fragment shader",
			code: Mu
		}), f = e.createShaderModule({
			label: "Terrain bounds reduce shader",
			code: Pu
		}), p = [{
			arrayStride: 12,
			attributes: [{
				shaderLocation: 0,
				offset: 0,
				format: "float32x2"
			}, {
				shaderLocation: 2,
				offset: 8,
				format: "float32"
			}]
		}, {
			arrayStride: 32,
			stepMode: "instance",
			attributes: [{
				shaderLocation: 1,
				offset: 0,
				format: "float32x4"
			}, {
				shaderLocation: 3,
				offset: 16,
				format: "float32x4"
			}]
		}], m = e.createPipelineLayout({
			label: "Terrain pipeline layout",
			bindGroupLayouts: [c]
		});
		this.pipeline = e.createRenderPipeline({
			label: "LOD terrain pipeline",
			layout: m,
			vertex: {
				module: l,
				entryPoint: "vertexMain",
				buffers: p
			},
			fragment: {
				module: u,
				entryPoint: "fragmentMain",
				targets: [{ format: t }]
			},
			primitive: {
				topology: "triangle-list",
				cullMode: "none"
			},
			depthStencil: {
				depthWriteEnabled: !0,
				depthCompare: "greater-equal",
				format: n
			},
			multisample: { count: r }
		}), this.depthPipeline = e.createRenderPipeline({
			label: "LOD terrain composite depth pipeline",
			layout: m,
			vertex: {
				module: l,
				entryPoint: "vertexMain",
				buffers: p
			},
			primitive: {
				topology: "triangle-list",
				cullMode: "none"
			},
			depthStencil: {
				depthWriteEnabled: !0,
				depthCompare: "greater-equal",
				format: "depth32float"
			}
		}), this.meshPipeline = e.createRenderPipeline({
			label: "LOD terrain mesh overlay pipeline",
			layout: m,
			vertex: {
				module: l,
				entryPoint: "meshVertexMain",
				buffers: p
			},
			fragment: {
				module: u,
				entryPoint: "meshFragmentMain",
				targets: [{ format: t }]
			},
			primitive: { topology: "line-list" },
			depthStencil: {
				depthWriteEnabled: !1,
				depthCompare: "greater-equal",
				format: n
			},
			multisample: { count: r }
		}), this.pickingPipeline = e.createRenderPipeline({
			label: "LOD terrain picking pipeline",
			layout: m,
			vertex: {
				module: l,
				entryPoint: "vertexMain",
				buffers: p
			},
			fragment: {
				module: d,
				entryPoint: "pickingFragmentMain",
				targets: [{ format: "rgba8unorm" }]
			},
			primitive: {
				topology: "triangle-list",
				cullMode: "none"
			},
			depthStencil: {
				depthWriteEnabled: !0,
				depthCompare: "greater-equal",
				format: "depth32float"
			}
		}), this.boundsPipeline = e.createRenderPipeline({
			label: "Terrain overlay bounds debug pipeline",
			layout: m,
			vertex: {
				module: l,
				entryPoint: "boundsVertexMain",
				buffers: [{
					arrayStride: 3 * Float32Array.BYTES_PER_ELEMENT,
					attributes: [{
						shaderLocation: 0,
						offset: 0,
						format: "float32x3"
					}]
				}]
			},
			fragment: {
				module: u,
				entryPoint: "boundsFragmentMain",
				targets: [{ format: t }]
			},
			primitive: { topology: "line-list" },
			depthStencil: {
				depthWriteEnabled: !1,
				depthCompare: "greater-equal",
				format: n
			},
			multisample: { count: r }
		}), this.visibleBoundsPipeline = e.createRenderPipeline({
			label: "Terrain visible bounds prepass pipeline",
			layout: m,
			vertex: {
				module: l,
				entryPoint: "visibleBoundsVertexMain",
				buffers: p
			},
			fragment: {
				module: u,
				entryPoint: "visibleBoundsFragmentMain",
				targets: [{ format: "rgba16float" }]
			},
			primitive: {
				topology: "triangle-list",
				cullMode: "none"
			},
			depthStencil: {
				depthWriteEnabled: !0,
				depthCompare: "greater-equal",
				format: "depth32float"
			}
		});
		let h = e.createBindGroupLayout({
			label: "Terrain bounds texture reduce bind group layout",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					texture: { sampleType: "unfilterable-float" }
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" }
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" }
				}
			]
		}), g = e.createBindGroupLayout({
			label: "Terrain bounds buffer reduce bind group layout",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "read-only-storage" }
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" }
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" }
				}
			]
		}), _ = e.createBindGroupLayout({
			label: "Terrain bounds empty bind group layout",
			entries: []
		});
		this.reduceTexturePipeline = e.createComputePipeline({
			label: "Terrain bounds texture reduce pipeline",
			layout: e.createPipelineLayout({ bindGroupLayouts: [h] }),
			compute: {
				module: f,
				entryPoint: "reduceTexture"
			}
		}), this.reduceBufferPipeline = e.createComputePipeline({
			label: "Terrain bounds buffer reduce pipeline",
			layout: e.createPipelineLayout({ bindGroupLayouts: [_, g] }),
			compute: {
				module: f,
				entryPoint: "reduceBuffer"
			}
		}), this.reduceTextureBindGroup = e.createBindGroup({
			label: "Terrain bounds texture reduce bind group",
			layout: h,
			entries: [
				{
					binding: 0,
					resource: this.visibleBoundsTextureView
				},
				{
					binding: 1,
					resource: { buffer: this.reducePartialA }
				},
				{
					binding: 2,
					resource: { buffer: this.reduceParamsTextureBuffer }
				}
			]
		}), this.reducePass2BindGroup = e.createBindGroup({
			label: "Terrain bounds reduce pass 2 bind group",
			layout: g,
			entries: [
				{
					binding: 0,
					resource: { buffer: this.reducePartialA }
				},
				{
					binding: 1,
					resource: { buffer: this.reducePartialB }
				},
				{
					binding: 2,
					resource: { buffer: this.reduceParamsPass2Buffer }
				}
			]
		}), this.reducePass3BindGroup = e.createBindGroup({
			label: "Terrain bounds reduce pass 3 bind group",
			layout: g,
			entries: [
				{
					binding: 0,
					resource: { buffer: this.reducePartialB }
				},
				{
					binding: 1,
					resource: { buffer: this.reduceFinal }
				},
				{
					binding: 2,
					resource: { buffer: this.reduceParamsPass3Buffer }
				}
			]
		});
	}
	get heightfield() {
		return this._heightfield;
	}
	get terrainHeightTextureView() {
		return this.heightTextureView;
	}
	get visibleBounds() {
		return this.latestReducedBounds;
	}
	update(e, t, n, r, i = {}) {
		let a = /* @__PURE__ */ new Float32Array(48);
		a.set(e.getViewProjectionMatrix(), 0), a.set([...e.getEye(), 1], 16), a.set([
			.42,
			-.46,
			-.78,
			0
		], 20), a.set([
			performance.now() / 1e3,
			8,
			Math.min(this._heightfield.cellSizeX, this._heightfield.cellSizeY),
			Z
		], 24), a.set([
			this._heightfield.originX,
			this._heightfield.originY,
			this._heightfield.cellSizeX,
			this._heightfield.cellSizeY
		], 28), a.set([
			this._heightfield.width,
			this._heightfield.height,
			this._heightfield.minHeight,
			this._heightfield.maxHeight
		], 32), a.set([
			t[0],
			t[1],
			t[2] - t[0],
			t[3] - t[1]
		], 36), a.set(n, 40), a.set([
			r[0],
			r[1],
			r[2],
			.08
		], 44), this.device.queue.writeBuffer(this.cameraBuffer, 0, a), (!i.freezeLod || this.lastBlocks.length === 0) && this.selectBlocks(e, i.enableCulling !== !1), this.instanceCount = Math.min(this.lastBlocks.length, Lu);
		for (let e = 0; e < this.instanceCount; e += 1) {
			let t = this.lastBlocks[e], n = e * 8;
			this.instanceData[n] = t.x, this.instanceData[n + 1] = t.y, this.instanceData[n + 2] = t.size, this.instanceData[n + 3] = t.level, this.instanceData[n + 4] = t.seamXMin, this.instanceData[n + 5] = t.seamXMax, this.instanceData[n + 6] = t.seamYMin, this.instanceData[n + 7] = t.seamYMax;
		}
		this.device.queue.writeBuffer(this.instanceBuffer, 0, this.instanceData.subarray(0, this.instanceCount * 8)), this.stats.selectedBlocks = this.instanceCount, this.stats.triangles = this.mesh.indexCount / 3 * this.instanceCount;
	}
	render(e, t = !1) {
		this.instanceCount !== 0 && (e.setBindGroup(0, this.bindGroup), e.setVertexBuffer(0, this.mesh.vertexBuffer), e.setVertexBuffer(1, this.instanceBuffer), e.setPipeline(this.pipeline), e.setIndexBuffer(this.mesh.indexBuffer, "uint32"), e.drawIndexed(this.mesh.indexCount, this.instanceCount), t && (e.setPipeline(this.meshPipeline), e.setIndexBuffer(this.mesh.lineIndexBuffer, "uint32"), e.drawIndexed(this.mesh.lineIndexCount, this.instanceCount)));
	}
	renderDepth(e) {
		this.instanceCount !== 0 && (e.setBindGroup(0, this.bindGroup), e.setVertexBuffer(0, this.mesh.vertexBuffer), e.setVertexBuffer(1, this.instanceBuffer), e.setPipeline(this.depthPipeline), e.setIndexBuffer(this.mesh.indexBuffer, "uint32"), e.drawIndexed(this.mesh.indexCount, this.instanceCount));
	}
	renderPicking(e) {
		this.instanceCount !== 0 && (e.setBindGroup(0, this.pickingBindGroup), e.setVertexBuffer(0, this.mesh.vertexBuffer), e.setVertexBuffer(1, this.instanceBuffer), e.setPipeline(this.pickingPipeline), e.setIndexBuffer(this.mesh.indexBuffer, "uint32"), e.drawIndexed(this.mesh.indexCount, this.instanceCount));
	}
	encodeVisibleBoundsReduction(e) {
		if (this.instanceCount === 0) return;
		let t = e.beginRenderPass({
			label: "Terrain visible bounds prepass",
			colorAttachments: [{
				view: this.visibleBoundsTextureView,
				clearValue: {
					r: 65504,
					g: 65504,
					b: -65504,
					a: -65504
				},
				loadOp: "clear",
				storeOp: "store"
			}],
			depthStencilAttachment: {
				view: this.visibleBoundsDepthTextureView,
				depthClearValue: 0,
				depthLoadOp: "clear",
				depthStoreOp: "store"
			}
		});
		t.setBindGroup(0, this.bindGroup), t.setVertexBuffer(0, this.mesh.vertexBuffer), t.setVertexBuffer(1, this.instanceBuffer), t.setPipeline(this.visibleBoundsPipeline), t.setIndexBuffer(this.mesh.indexBuffer, "uint32"), t.drawIndexed(this.mesh.indexCount, this.instanceCount), t.end();
		let n = e.beginComputePass({ label: "Terrain visible bounds reduction" });
		n.setPipeline(this.reduceTexturePipeline), n.setBindGroup(0, this.reduceTextureBindGroup), n.dispatchWorkgroups(Hu), n.setPipeline(this.reduceBufferPipeline), n.setBindGroup(1, this.reducePass2BindGroup), n.dispatchWorkgroups(Uu), n.setBindGroup(1, this.reducePass3BindGroup), n.dispatchWorkgroups(Wu), n.end(), !this.boundsReadbackPending && !this.boundsReadbackInFlight && (e.copyBufferToBuffer(this.reduceFinal, 0, this.reduceReadback, 0, 4 * Float32Array.BYTES_PER_ELEMENT), this.boundsReadbackPending = !0);
	}
	resolveVisibleBoundsReadback(e) {
		this.boundsReadbackInFlight ? this.boundsReadbackSkipped = !0 : this.boundsReadbackPending && (this.boundsReadbackPending = !1, this.boundsReadbackInFlight = !0, this.reduceReadback.mapAsync(GPUMapMode.READ).then(() => {
			let t = new Float32Array(this.reduceReadback.getMappedRange().slice(0));
			this.reduceReadback.unmap(), this.boundsReadbackInFlight = !1;
			let n = this.boundsReadbackSkipped;
			this.boundsReadbackSkipped = !1;
			let r = !1, [i, a, o, s] = t;
			if (Number.isFinite(i) && Number.isFinite(a) && Number.isFinite(o) && Number.isFinite(s) && i <= o && a <= s) {
				let e = this.latestReducedBounds, t = [
					i,
					a,
					o,
					s
				];
				this.latestReducedBounds = t, r = !e || t.some((t, n) => t !== e[n]);
			}
			(r || n) && e?.();
		}).catch((e) => {
			this.boundsReadbackInFlight = !1, console.warn("Terrain visible bounds readback failed:", e);
		}));
	}
	renderOverlayBounds(e, t, n) {
		let r = this._heightfield.maxHeight + 20, [i, a, o, s] = t, c = [
			i,
			a,
			r,
			o,
			a,
			r,
			o,
			a,
			r,
			o,
			s,
			r,
			o,
			s,
			r,
			i,
			s,
			r,
			i,
			s,
			r,
			i,
			a,
			r
		];
		if (n) {
			let e = Math.max(o - i, s - a) * .025, [t, l] = n;
			c.push(t - e, l, r, t + e, l, r, t, l - e, r, t, l + e, r);
		}
		let l = new Float32Array(c);
		this.device.queue.writeBuffer(this.boundsVertexBuffer, 0, l), e.setBindGroup(0, this.bindGroup), e.setPipeline(this.boundsPipeline), e.setVertexBuffer(0, this.boundsVertexBuffer), e.draw(l.length / 3);
	}
	destroy() {
		this.heightTexture.destroy(), this.visibleBoundsTexture.destroy(), this.visibleBoundsDepthTexture.destroy(), this.mesh.vertexBuffer.destroy(), this.mesh.indexBuffer.destroy(), this.mesh.lineIndexBuffer.destroy(), this.cameraBuffer.destroy(), this.instanceBuffer.destroy(), this.boundsVertexBuffer.destroy(), this.reduceParamsTextureBuffer.destroy(), this.reduceParamsPass2Buffer.destroy(), this.reduceParamsPass3Buffer.destroy(), this.reducePartialA.destroy(), this.reducePartialB.destroy(), this.reduceFinal.destroy(), this.reduceReadback.destroy();
	}
	selectBlocks(e, t) {
		let n = Qu(e.getViewProjectionMatrix()), r = Math.max(e.getViewportHeight(), 1) / (2 * Math.tan(e.getFovyRadians() / 2)), [i, a, o, s] = this.bounds, c = td(Math.max(o - i, s - a)), l = [Ju(i, a, c, Math.min(Iu, Math.max(0, Math.ceil(Math.log2(c / (Z * Math.min(this._heightfield.cellSizeX, this._heightfield.cellSizeY)))))))], u = [];
		for (this.stats.culledBlocks = 0; l.length > 0 && u.length < Lu;) {
			let c = l.pop();
			if (ed(c.x, c.x + c.size, i, o) && ed(c.y, c.y + c.size, a, s)) {
				if (t && !Zu(c, n, this._heightfield.minHeight, this._heightfield.maxHeight)) this.stats.culledBlocks += 1;
				else if (Yu(c, e, r, Math.min(this._heightfield.cellSizeX, this._heightfield.cellSizeY))) {
					let e = c.size * .5, t = c.level - 1;
					l.push(Ju(c.x, c.y, e, t), Ju(c.x + e, c.y, e, t), Ju(c.x, c.y + e, e, t), Ju(c.x + e, c.y + e, e, t));
				} else u.push(c);
			}
		}
		this.lastBlocks.length = 0, this.lastBlocks.push(...u.sort((e, t) => e.level - t.level));
	}
};
function Ku(e) {
	let t = [];
	for (let e = 0; e <= Z; e += 1) for (let n = 0; n <= Z; n += 1) t.push(n / Z, e / Z, 0);
	let n = [];
	for (let e = 0; e < Z; e += 1) for (let t = 0; t < Z; t += 1) {
		let r = $(t, e), i = $(t + 1, e), a = $(t, e + 1), o = $(t + 1, e + 1);
		n.push(r, a, i, i, a, o);
	}
	let r = qu(), i = new Float32Array(t), a = new Uint32Array(n), o = new Uint32Array(r), s = e.createBuffer({
		label: "Terrain patch vertices",
		size: i.byteLength,
		usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
	}), c = e.createBuffer({
		label: "Terrain patch indices",
		size: a.byteLength,
		usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
	}), l = e.createBuffer({
		label: "Terrain patch line indices",
		size: o.byteLength,
		usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
	});
	return e.queue.writeBuffer(s, 0, i), e.queue.writeBuffer(c, 0, a), e.queue.writeBuffer(l, 0, o), {
		vertexBuffer: s,
		indexBuffer: c,
		lineIndexBuffer: l,
		indexCount: a.length,
		lineIndexCount: o.length
	};
}
function qu() {
	let e = [];
	for (let t = 0; t <= Z; t += 1) for (let n = 0; n < Z; n += 1) e.push($(n, t), $(n + 1, t));
	for (let t = 0; t <= Z; t += 1) for (let n = 0; n < Z; n += 1) e.push($(t, n), $(t, n + 1));
	return e;
}
function $(e, t) {
	return t * Fu + e;
}
function Ju(e, t, n, r) {
	return {
		x: e,
		y: t,
		size: n,
		level: r,
		seamXMin: 0,
		seamXMax: 0,
		seamYMin: 0,
		seamYMax: 0
	};
}
function Yu(e, t, n, r) {
	if (e.level === 0) return !1;
	let i = t.getEye(), a = t.getLookAt(), o = Math.max(1, Math.min(Xu(i[0], i[1], i[2], e), Xu(a[0], a[1], a[2], e)));
	return r * 2 ** e.level * n / o > Ru;
}
function Xu(e, t, n, r) {
	let i = Math.max(r.x - e, 0, e - (r.x + r.size)), a = Math.max(r.y - t, 0, t - (r.y + r.size));
	return Math.hypot(i, a, Math.abs(n - zu));
}
function Zu(e, t, n, r) {
	for (let i of t) {
		let t = i[0] >= 0 ? e.x + e.size : e.x, a = i[1] >= 0 ? e.y + e.size : e.y, o = i[2] >= 0 ? r : n;
		if (i[0] * t + i[1] * a + i[2] * o + i[3] < 0) return !1;
	}
	return !0;
}
function Qu(e) {
	return [
		$u([
			e[3] + e[0],
			e[7] + e[4],
			e[11] + e[8],
			e[15] + e[12]
		]),
		$u([
			e[3] - e[0],
			e[7] - e[4],
			e[11] - e[8],
			e[15] - e[12]
		]),
		$u([
			e[3] + e[1],
			e[7] + e[5],
			e[11] + e[9],
			e[15] + e[13]
		]),
		$u([
			e[3] - e[1],
			e[7] - e[5],
			e[11] - e[9],
			e[15] - e[13]
		]),
		$u([
			e[2],
			e[6],
			e[10],
			e[14]
		]),
		$u([
			e[3] - e[2],
			e[7] - e[6],
			e[11] - e[10],
			e[15] - e[14]
		])
	];
}
function $u(e) {
	let t = Math.hypot(e[0], e[1], e[2]) || 1;
	return [
		e[0] / t,
		e[1] / t,
		e[2] / t,
		e[3] / t
	];
}
function ed(e, t, n, r) {
	return e < r && n < t;
}
function td(e) {
	return 2 ** Math.ceil(Math.log2(Math.max(1, e)));
}
function nd(e, t, n) {
	return e.createBuffer({
		label: n,
		size: Math.max(1, t) * 4 * Float32Array.BYTES_PER_ELEMENT,
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST
	});
}
function rd(e, t, n, r) {
	let i = new Uint32Array([
		t,
		n,
		r,
		0
	]), a = e.createBuffer({
		label: "Terrain bounds reduce params",
		size: i.byteLength,
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
	});
	return e.queue.writeBuffer(a, 0, i), a;
}
//#endregion
//#region src/map-terrain.ts
var id = 4096, ad = class {
	renderer;
	camera;
	layerManager;
	picking;
	style;
	heightfield;
	requestRender;
	terrainRenderer = null;
	frozenTerrainOverlayBounds = null;
	frozenTerrainCameraPosition = null;
	terrainOverlayCamera = new Ca();
	terrainDebug = {
		showMesh: !1,
		enableCulling: !0,
		freezeLod: !1
	};
	constructor(e, t, n, r, i, a, o) {
		this.renderer = e, this.camera = t, this.layerManager = n, this.picking = r, this.style = i, this.heightfield = a, this.requestRender = o, this.fitCameraToTerrainBounds();
		let s = this.getTerrainOverlayTextureSize();
		this.renderer.configureOverlayTexture(s, s), this.rebuildTerrainRenderer();
	}
	renderFrame() {
		if (!this.terrainRenderer) return;
		this.renderer.start();
		let e = this.getTerrainOverlayTextureSize();
		this.renderer.configureOverlayTexture(e, e) && this.rebuildTerrainRenderer();
		let t = this.terrainRenderer;
		if (!t) return;
		let n = this.picking.consumePendingPick(), r = this.computeTerrainVisibleBounds(t.bounds), i = this.getTerrainWaterColor();
		t.update(this.camera, r, [
			0,
			0,
			1,
			1
		], i, this.terrainDebug);
		let a = t.visibleBounds, o = a && this.isUsableTerrainOverlayBounds(a, r, t.bounds) ? a : r, s = this.computeTerrainOverlayPixelRect(o), c = [
			s.x / this.renderer.overlayWidth,
			s.y / this.renderer.overlayHeight,
			s.width / this.renderer.overlayWidth,
			s.height / this.renderer.overlayHeight
		];
		try {
			t.encodeVisibleBoundsReduction(this.renderer.commandEncoder);
		} catch (e) {
			console.warn("Terrain visible bounds prepass failed; using fallback bounds:", e);
		}
		this.terrainOverlayCamera.setOrthographicBounds(o[0], o[2], o[1], o[3]), this.layerManager.layers.forEach((e) => {
			!e.layerRenderInfo.isSkip && !(e instanceof G) && e.prepareRender(this.terrainOverlayCamera);
		});
		let l = this.renderer.beginOverlayRenderPass();
		l.setViewport(s.x, s.y, s.width, s.height, 0, 1), l.setScissorRect(s.x, s.y, s.width, s.height), this.layerManager.layers.forEach((e) => {
			!e.layerRenderInfo.isSkip && !(e instanceof G) && e.renderPass(this.terrainOverlayCamera, l);
		}), l.end(), t.update(this.camera, o, c, i, this.terrainDebug);
		let u = this.renderer.beginMainRenderPass();
		t.render(u, this.terrainDebug.showMesh), this.frozenTerrainOverlayBounds && t.renderOverlayBounds(u, this.frozenTerrainOverlayBounds, this.frozenTerrainCameraPosition ?? void 0), u.end(), this.renderer.configureTerrainDepthTexture(2 * this.renderer.pixelWidth, 2 * this.renderer.pixelHeight);
		let d = this.renderer.beginTerrainDepthRenderPass();
		t.renderDepth(d), d.end();
		let f = this.layerManager.layers.filter((e) => !e.layerRenderInfo.isSkip && e instanceof G);
		if (f.length > 0) {
			let e = t.heightfield, n = t.terrainHeightTextureView, r = to.beginSharedGeometryPass(this.renderer);
			f.forEach((t) => {
				t.setTerrainHeightSource(e, n), t.renderSceneGeometry(this.camera, r);
			}), r.end();
			let i = this.renderer.beginMainColorRenderPass("load");
			to.compositeSharedPassWithTerrainDepth(this.renderer, i, this.renderer.terrainDepthTextureView), i.end();
		}
		let p = this.renderTerrainPickingPass(n, t, s);
		this.renderer.finish(), this.picking.resolvePickingReadback(n, p), t.resolveVisibleBoundsReadback(this.requestRender);
	}
	resetCamera() {
		this.fitCameraToTerrainBounds();
	}
	updateDebug(e) {
		this.terrainDebug = {
			...this.terrainDebug,
			...e
		};
	}
	toggleOverlayBoundsDebug() {
		if (this.frozenTerrainOverlayBounds) {
			this.frozenTerrainOverlayBounds = null, this.frozenTerrainCameraPosition = null, console.log("Terrain overlay bounds debug: cleared");
			return;
		}
		if (!this.terrainRenderer) {
			console.warn("Terrain overlay bounds debug requires terrain mode.");
			return;
		}
		this.frozenTerrainOverlayBounds = this.computeTerrainVisibleBounds(this.terrainRenderer.bounds);
		let [e, t] = this.camera.getEye();
		this.frozenTerrainCameraPosition = [e, t], console.log("Terrain overlay bounds debug:", this.frozenTerrainOverlayBounds, "camera:", this.frozenTerrainCameraPosition);
	}
	destroy() {
		this.layerManager.layers.forEach((e) => {
			e instanceof G && e.clearTerrainHeightSource();
		}), this.terrainRenderer?.destroy(), this.terrainRenderer = null;
	}
	getTerrainOverlayTextureSize() {
		return Math.min(id, this.renderer.device.limits.maxTextureDimension2D);
	}
	rebuildTerrainRenderer() {
		this.terrainRenderer?.destroy(), this.terrainRenderer = new Gu(this.renderer.device, this.renderer.canvasFormat, "depth32float", this.renderer.sampleCount, this.heightfield, this.renderer.overlayTextureView, this.renderer.overlayPickingTextureView);
	}
	fitCameraToTerrainBounds() {
		let e = this.heightfield.bounds, t = Math.max(e[2] - e[0], 1), n = Math.max(e[3] - e[1], 1), r = (e[0] + e[2]) * .5, i = (e[1] + e[3]) * .5, a = Math.max(this.renderer.pixelWidth / Math.max(this.renderer.pixelHeight, 1), 1e-6), o = Math.tan(this.camera.getFovyRadians() * .5), s = n / (2 * o), c = t / (2 * o * a), l = Math.max(s, c) * 1.08;
		this.camera.resetCamera([
			0,
			1,
			0
		], [
			r,
			i,
			0
		], [
			r,
			i,
			l
		]), this.camera.resize(this.renderer.pixelWidth, this.renderer.pixelHeight);
	}
	renderTerrainPickingPass(e, t, n) {
		if (!e) return null;
		if (e.layer instanceof G) {
			let n = this.renderer.beginPickingDepthRenderPass();
			t.renderDepth(n), n.end();
			let r = this.renderer.beginPickingRenderPass("load");
			return e.layer.setTerrainHeightSource(t.heightfield, t.terrainHeightTextureView), e.layer.renderPickingPass(this.camera, r), r.end(), this.picking.enqueuePickingReadback(e);
		}
		let r = this.renderer.beginOverlayPickingRenderPass();
		r.setViewport(n.x, n.y, n.width, n.height, 0, 1), r.setScissorRect(n.x, n.y, n.width, n.height), e.layer.renderPickingPass(this.terrainOverlayCamera, r), r.end();
		let i = this.renderer.beginPickingRenderPass();
		return t.renderPicking(i), i.end(), this.picking.enqueuePickingReadback(e);
	}
	getTerrainWaterColor() {
		let e = this.style.getColor("water");
		return [
			e.r / 255,
			e.g / 255,
			e.b / 255
		];
	}
	computeTerrainVisibleBounds(e) {
		let t = [], n = this.camera.getEye(), r = Math.hypot(e[2] - e[0], e[3] - e[1]), i = Math.min(this.camera.getFar(), Math.max(Math.abs(n[2]) * 8, r * .05, 1));
		for (let [e, r] of [
			[0, 0],
			[1, 0],
			[1, 1],
			[0, 1]
		]) {
			let a = this.camera.getWorldRayDirection(e, r), o = Math.abs(a[2]) > 1e-6 ? -n[2] / a[2] : Infinity, s = o > 0 ? Math.min(o, i) : i;
			t.push([n[0] + a[0] * s, n[1] + a[1] * s]);
		}
		if (t.length === 0) {
			let e = this.camera.getLookAt();
			t.push([e[0], e[1]]);
		}
		let a = Math.min(...t.map((e) => e[0])), o = Math.max(...t.map((e) => e[0]));
		return [
			a,
			Math.min(...t.map((e) => e[1])),
			o,
			Math.max(...t.map((e) => e[1]))
		];
	}
	computeTerrainOverlayPixelRect(e) {
		let t = Math.max(1, this.renderer.overlayWidth), n = Math.max(1, this.renderer.overlayHeight), r = Math.max(e[2] - e[0], 1) / Math.max(e[3] - e[1], 1), i = t / n, a, o;
		return r >= i ? (a = t, o = Math.max(1, Math.floor(t / r))) : (o = n, a = Math.max(1, Math.floor(n * r))), {
			x: Math.floor((t - a) * .5),
			y: Math.floor((n - o) * .5),
			width: a,
			height: o
		};
	}
	isUsableTerrainOverlayBounds(e, t, n) {
		if (!e.every(Number.isFinite)) return !1;
		let r = e[2] - e[0], i = e[3] - e[1];
		if (r <= 1 || i <= 1) return !1;
		let a = e[0] < n[2] && e[2] > n[0] && e[1] < n[3] && e[3] > n[1], o = e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1];
		return a && o;
	}
}, od = class {
	_camera;
	_renderer;
	_style;
	_layerManager;
	_keyEvents;
	_mouseEvents;
	_resizeEvents;
	_mapEvents;
	_ui;
	_showUi = !0;
	_canvas;
	_animationFrameId = null;
	_onDemand = !1;
	_isDestroyed = !1;
	_renderErrorLogged = !1;
	_flatRenderPath;
	_terrainRenderPath = null;
	_picking;
	constructor(e, t = !0) {
		this._canvas = e, this._showUi = t, this._style = new Du(), this._style.setChangeListener(() => {
			for (let e of this._layerManager.layers) e.makeLayerRenderInfoDirty();
			this.requestRender();
		}), this._renderer = new Fa(e, this._style), this._camera = new Ou(() => this.requestRender()), this._layerManager = new xo(), this._keyEvents = new ja(this), this._mouseEvents = new Na(this), this._resizeEvents = new Pa(this), this._mapEvents = new wa(), this._picking = new Au(this._renderer, this._layerManager, this._mapEvents), this._flatRenderPath = new ku(this._renderer, this._camera, this._layerManager, this._picking), this._ui = new _u(this);
	}
	get camera() {
		return this._camera;
	}
	get style() {
		return this._style;
	}
	get renderer() {
		return this._renderer;
	}
	get layerManager() {
		return this._layerManager;
	}
	get canvas() {
		return this._canvas;
	}
	get ui() {
		return this._ui;
	}
	get showUi() {
		return this._showUi;
	}
	get events() {
		return this._mapEvents;
	}
	get activePickingLayer() {
		return this._layerManager.layers.find((e) => e.layerRenderInfo.isPick) ?? null;
	}
	async init() {
		this._isDestroyed || (await this._renderer.init(), this._keyEvents.bindEvents(), this._mouseEvents.bindEvents(), this._resizeEvents.bindEvents(), this._resizeEvents.resize(), this.render(), this._showUi && this._ui.buildUi(), this._ui.buildBranding());
	}
	loadCollection(e, { collection: t, type: n = null, property: r, loadConfig: i }) {
		this.layerManager.hasOrigin || this.layerManager.initializeOrigin(t);
		let a = n ?? this.inferCollectionLayerType(t, e);
		if (a) {
			switch (a) {
				case "surface":
				case "water":
				case "parks":
				case "polygons":
					this.createPolygonsLayer(e, t, a, typeof r == "string" ? r : void 0);
					break;
				case "roads":
				case "polylines":
					this.createPolylinesLayer(e, t, a, typeof r == "string" ? r : void 0);
					break;
				case "points":
					this.createPointsLayer(e, t, a, typeof r == "string" ? r : void 0);
					break;
				case "buildings":
					this.createBuildingsLayer(e, t, a, typeof r == "string" ? r : void 0, i?.buildingsZeroHeight);
					break;
				case "raster":
					if (typeof r != "string") {
						console.error(`Layer "${e}": property path string is required for raster layers.`);
						return;
					}
					this.createRasterLayer(e, t, r);
					break;
				default: console.error(`Collection of layer ${e} has an unknown layer type: ${a}.`);
			}
			this._ui.refreshLayerList();
		}
	}
	loadMesh(e, { geometry: t, components: n, thematic: r, type: i = "buildings" }) {
		if (!this.layerManager.hasOrigin) throw Error(`Layer '${e}': map origin must be initialized before loading a mesh.`);
		let a = {
			id: e,
			zIndex: this._layerManager.computeZindex(i),
			typeLayer: i
		}, o = {
			opacity: 1,
			colormap: { config: this.defaultColorMap() },
			isColorMap: !1,
			isPick: !1,
			isSkip: !1
		}, s = {
			geometry: t,
			components: n,
			thematic: r ?? n.map(() => ({
				value: 0,
				valid: 1
			}))
		};
		this.createLayer(a, o, s), this._ui.refreshLayerList();
	}
	updateThematic(e, { collection: t, property: n }) {
		let r = this._layerManager.searchByLayerId(e);
		if (!r || r.layerInfo.typeLayer === "raster") return;
		let i = t.features;
		if (i.length === 0) return;
		let a = r.components;
		if (a.length === 0) return;
		let o = (e) => ra(e, n), s = i.map((e) => o(e)).find((e) => e != null);
		if (s == null) {
			console.warn(`Thematic property not found on layer '${e}': ${n}`), this.updateRenderInfo(e, { renderInfo: { isColorMap: !1 } });
			return;
		}
		let c = ia(s) ? "number" : typeof s;
		if (c !== "number" && c !== "string") {
			console.warn(`Unsupported thematic property type on layer '${e}': ${c}`), this.updateRenderInfo(e, { renderInfo: { isColorMap: !1 } });
			return;
		}
		let l = [], u = r.layerRenderInfo.colormap.config, d = [], f = a.every((e) => e.featureId !== void 0) && i.every((e) => e.id !== void 0) ? /* @__PURE__ */ new Map() : null, p = (t, n, r) => {
			let a = {
				value: n,
				valid: r
			};
			if (d[t] = a, !f) return !0;
			let o = i[t].id;
			return f.has(o) ? (console.error(`Layer '${e}': duplicate feature id '${o}' prevents thematic matching.`), !1) : (f.set(o, a), !0);
		};
		if (c === "number") {
			let t = i.map((e) => {
				let t = o(e), n = Number(t);
				return Number.isFinite(n) ? n : void 0;
			}), r = t.filter((e) => e !== void 0);
			if (r.length === 0) {
				console.warn(`No valid numeric thematic values found on layer '${e}': ${n}`), this.updateRenderInfo(e, { renderInfo: { isColorMap: !1 } });
				return;
			}
			l = N.resolveDomainFromData(r, u);
			for (let e = 0; e < t.length; e++) {
				let n = t[e];
				if (!p(e, n ?? 0, n === void 0 ? 0 : 1)) return;
			}
		} else if (c === "string") {
			let t = i.map((e) => {
				let t = o(e);
				return t == null ? void 0 : String(t);
			}), r = t.filter((e) => e !== void 0);
			if (r.length === 0) {
				console.warn(`No valid categorical thematic values found on layer '${e}': ${n}`), this.updateRenderInfo(e, { renderInfo: { isColorMap: !1 } });
				return;
			}
			let a = N.resolveDomainFromData(r, u);
			l = a;
			for (let e = 0; e < t.length; e++) {
				let n = t[e], r = n === void 0 ? 0 : a.indexOf(n);
				if (!p(e, r >= 0 ? r : 0, +(n !== void 0 && r >= 0))) return;
			}
		}
		let m = [];
		if (f) for (let t of a) {
			let n = f.get(t.featureId);
			if (!n) {
				console.error(`Layer '${e}': missing thematic value for feature id '${String(t.featureId)}'.`);
				return;
			}
			m.push(n);
		}
		else for (let t of a) {
			let n = d[t.featureIndex];
			if (!n) {
				console.error(`Layer '${e}': missing thematic value for source feature index ${t.featureIndex}.`);
				return;
			}
			m.push(n);
		}
		r.loadThematic(m) && (r.updateLayerRenderInfo({ colormap: {
			...r.layerRenderInfo.colormap,
			computedDomain: l,
			computedLabels: N.computeLabels(l)
		} }), this._ui.refreshLegend(r), r.makeLayerDataDirty());
	}
	updateRaster(e, { collection: t, property: n, transferFunction: r }) {
		let i = this._layerManager.searchByLayerId(e);
		if (!i || i.layerInfo.typeLayer !== "raster") return;
		if (t.features.length === 0) {
			console.warn(`Raster update skipped for layer '${e}': empty collection.`);
			return;
		}
		let a = t.features[0].properties;
		if (!a) {
			console.warn(`Raster update skipped for layer '${e}': invalid raster payload.`);
			return;
		}
		let o = ra(a, n), s = o instanceof Float32Array ? o : ArrayBuffer.isView(o) && !(o instanceof DataView) ? new Float32Array(Array.from(o, (e) => {
			let t = Number(e);
			return Number.isFinite(t) ? t : NaN;
		})) : Array.isArray(o) ? new Float32Array(o.map((e) => {
			let t = Number(e);
			return Number.isFinite(t) ? t : NaN;
		})) : null;
		if (!s || s.length === 0) {
			console.warn(`Raster update skipped for layer '${e}': invalid raster band '${n}'.`);
			return;
		}
		let c = i, l = i.layerRenderInfo.colormap.config, u = N.resolveDomainFromData(s, l);
		i.updateLayerRenderInfo({ colormap: {
			...i.layerRenderInfo.colormap,
			computedDomain: u,
			computedLabels: N.computeLabels(u)
		} }), this._ui.refreshLegend(i), r && c.setTransferFunction(r), c.loadRaster(s), c.makeLayerDataDirty();
	}
	updateColorMap(e, { colorMap: t }) {
		let n = this._layerManager.searchByLayerId(e);
		if (!n) return;
		let r = n.layerRenderInfo.colormap.config, o = {
			interpolator: t.interpolator ?? r.interpolator ?? a.SEQ_BLUES,
			domainSpec: t.domainSpec ?? r.domainSpec ?? { type: i.MIN_MAX }
		}, s = {
			...n.layerRenderInfo.colormap,
			config: o
		};
		if (n.layerInfo.typeLayer === "raster") {
			let e = n, t = e.rasterValues;
			if (t.length > 0) {
				let r = N.resolveDomainFromData(t, o);
				s.computedDomain = r, s.computedLabels = N.computeLabels(r), n.updateLayerRenderInfo({ colormap: s }), e.loadRaster(t), e.makeLayerDataDirty(), this._ui.refreshLegend(n);
				return;
			}
		} else {
			let e = n.thematic;
			if (e.length > 0) {
				let t = n.layerRenderInfo.colormap.computedDomain, r = Array.isArray(t) && t.length > 0 && t.every((e) => typeof e == "string") ? t : N.resolveDomainFromData(e, o);
				s.computedDomain = r, s.computedLabels = N.computeLabels(r);
			}
		}
		n.updateLayerRenderInfo({ colormap: s }), this._ui.refreshLegend(n);
	}
	updateRenderInfo(e, t) {
		let n = this._layerManager.searchByLayerId(e);
		if (!n) return;
		let r = "renderInfo" in t ? t.renderInfo : t, i = { ...r }, a = !1, o = !1;
		"isColorMap" in r && (a = !0, o = !0), "isSkip" in r && (o = !0), "isPick" in i && (i.isPick === !0 ? this.deactivateOtherPickingLayers(e) : i.isPick === !1 && (n.clearHighlightedIds(), i.pickedComps = void 0), o = !0), n.updateLayerRenderInfo(i), a && this._ui.refreshLegend(n), o && this._ui.refreshLayerList();
	}
	removeLayer(e) {
		let t = this._layerManager.searchByLayerId(e) !== null;
		this._layerManager.removeLayerById(e), this._ui.handleLayerRemoved(e), this._ui.refreshLayerList(), t && this.requestRender();
	}
	setHighlightedIds(e, t) {
		let n = this._layerManager.searchByLayerId(e);
		n && n.supportsHighlight && n.setHighlightedIds(t);
	}
	clearHighlightedIds(e) {
		let t = this._layerManager.searchByLayerId(e);
		t && t.supportsHighlight && t.clearHighlightedIds();
	}
	setSkippedIds(e, t) {
		let n = this._layerManager.searchByLayerId(e);
		n instanceof Ya && n.setSkippedIds(t);
	}
	clearSkippedIds(e) {
		let t = this._layerManager.searchByLayerId(e);
		t instanceof Ya && t.clearSkippedIds();
	}
	enableTerrainMode(e, t) {
		if (!this.layerManager.hasOrigin) throw Error("Terrain mode requires at least one map layer to initialize the map origin first.");
		let n = aa(e, t, this.layerManager.origin);
		this._terrainRenderPath?.destroy(), this._terrainRenderPath = new ad(this._renderer, this._camera, this._layerManager, this._picking, this._style, n, () => this.requestRender()), this.requestRender();
	}
	disableTerrainMode() {
		this._terrainRenderPath && (this._terrainRenderPath.destroy(), this._terrainRenderPath = null, this.requestRender());
	}
	updateTerrainDebug(e) {
		this._terrainRenderPath && (this._terrainRenderPath.updateDebug(e), this.requestRender());
	}
	resetCamera() {
		(this._terrainRenderPath ?? this._flatRenderPath).resetCamera();
	}
	toggleTerrainOverlayBoundsDebug() {
		this._terrainRenderPath ? (this._terrainRenderPath.toggleOverlayBoundsDebug(), this.requestRender()) : console.warn("Terrain overlay bounds debug requires terrain mode.");
	}
	draw(e = {}) {
		if (this._isDestroyed) return;
		this._animationFrameId !== null && (cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null);
		let t = typeof e == "number" ? { fps: e } : e;
		if (this._onDemand = t.onDemand ?? t.fps === void 0, this._onDemand) {
			this.requestRender();
			return;
		}
		let n = t.fps ?? 60, r = 0, i = (e) => {
			if (this._isDestroyed) {
				this._animationFrameId = null;
				return;
			}
			this._animationFrameId = requestAnimationFrame(i);
			let t = e - r;
			n && t < 1e3 / n || (this.render(), r = e);
		};
		this._animationFrameId = requestAnimationFrame(i);
	}
	requestRender() {
		!this._isDestroyed && this._onDemand && this._animationFrameId === null && (this._animationFrameId = requestAnimationFrame(() => {
			this._animationFrameId = null, this._isDestroyed || this.render();
		}));
	}
	destroy() {
		this._isDestroyed ||= (this._animationFrameId !== null && (cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null), this._keyEvents.destroyEvents(), this._mouseEvents.destroyEvents(), this._resizeEvents.destroyEvents(), this._terrainRenderPath?.destroy(), this._terrainRenderPath = null, this._style.setChangeListener(null), this._layerManager.layers.forEach((e) => {
			e.setChangeListener(null), e.destroy();
		}), this._ui.destroy(), this._renderer.destroy(), !0);
	}
	inferCollectionLayerType(e, t) {
		let n = /* @__PURE__ */ new Set(), r = (e, i) => {
			if (!e) console.warn(`Layer "${t}": feature ${i} has null geometry and will be ignored during type inference.`);
			else if (e.type === "GeometryCollection") for (let t of e.geometries) r(t, i);
			else n.add(Aa(e.type));
		};
		for (let i = 0; i < e.features.length; i++) {
			let a = e.features[i];
			if (r(a.geometry, i), n.size > 1) return console.error(`Layer "${t}": cannot infer layer type from mixed geometry families. Pass an explicit type or split the collection.`), null;
		}
		let [i] = n;
		return i || (console.error(`Layer "${t}": cannot infer layer type from an empty or geometry-less collection.`), null);
	}
	render() {
		try {
			this._renderFrame();
		} catch (e) {
			this._renderErrorLogged ||= (console.warn("AutkMap render skipped:", e), !0);
		}
	}
	_renderFrame() {
		this._camera.update(), this._terrainRenderPath ? this._terrainRenderPath.renderFrame() : this._flatRenderPath.renderFrame();
	}
	deactivateOtherPickingLayers(e) {
		this._layerManager.layers.forEach((t) => {
			t.layerInfo.id !== e && t.layerRenderInfo.isPick && (t.clearHighlightedIds(), t.updateLayerRenderInfo({
				isPick: !1,
				pickedComps: void 0
			}));
		});
	}
	createPolygonsLayer(e, t, n, r) {
		let i = {
			id: `${e}`,
			zIndex: this._layerManager.computeZindex(n),
			typeLayer: n
		}, a = {
			opacity: 1,
			colormap: { config: this.defaultColorMap() },
			isColorMap: !1,
			isPick: !1,
			isSkip: !1
		}, o = Ai.buildMesh(t, this.layerManager.origin);
		if (o[0].length === 0 || o[1].length === 0) {
			console.error("Invalid Polygon Layer");
			return;
		}
		let s;
		if (n === "polygons") {
			if (s = Ai.buildBorder(t, this.layerManager.origin), !s[0] || !s[1] || s[0].length === 0 || s[1].length === 0) {
				console.error("Invalid Polygon Layer border.");
				return;
			}
		} else s = [[], []];
		let c = {
			geometry: o[0],
			components: o[1],
			border: s[0],
			borderComponents: s[1],
			thematic: o[1].map(() => ({
				value: 0,
				valid: 1
			}))
		};
		this.createLayer(i, a, c), r && this.updateThematic(e, {
			collection: t,
			property: r
		});
	}
	createPolylinesLayer(e, t, n, r) {
		let i = {
			id: `${e}`,
			zIndex: this._layerManager.computeZindex(n),
			typeLayer: n
		}, a = {
			opacity: 1,
			colormap: { config: this.defaultColorMap() },
			isColorMap: !1,
			isPick: !1,
			isSkip: !1
		}, o = Ar.build(t, this.layerManager.origin);
		if (o.geometry.length === 0 || o.components.length === 0) {
			console.error("Invalid Polyline Layer.");
			return;
		}
		n === "roads" ? a.polylinesWidthByComponent = new Float32Array(o.components.map((e) => ki.resolveRoadHalfWidth(t.features[e.featureIndex]) * 2)) : a.polylinesWidth = 12;
		let s = {
			geometry: o.geometry,
			components: o.components,
			polylineAttributes: o.attributes,
			thematic: o.components.map(() => ({
				value: 0,
				valid: 1
			}))
		};
		this.createLayer(i, a, s), r && this.updateThematic(e, {
			collection: t,
			property: r
		});
	}
	createPointsLayer(e, t, n, r) {
		let i = {
			id: `${e}`,
			zIndex: this._layerManager.computeZindex(n),
			typeLayer: n
		}, a = {
			opacity: 1,
			colormap: { config: this.defaultColorMap() },
			isColorMap: !1,
			isPick: !1,
			isSkip: !1
		}, o = kr.buildInstances(t, this.layerManager.origin);
		if (o.instances.length === 0 || o.components.length === 0) {
			console.error("Invalid Points Layer.");
			return;
		}
		let s = {
			geometry: [],
			components: o.components,
			pointInstances: o.instances,
			pointInstanceCount: o.instances.length / 2,
			thematic: o.components.map(() => ({
				value: 0,
				valid: 1
			}))
		};
		this.createLayer(i, a, s), r && this.updateThematic(e, {
			collection: t,
			property: r
		});
	}
	createBuildingsLayer(e, t, n, r, i) {
		let a = {
			id: `${e}`,
			zIndex: this._layerManager.computeZindex(n),
			typeLayer: "buildings"
		}, o = {
			opacity: 1,
			colormap: { config: this.defaultColorMap() },
			isColorMap: !1,
			isPick: !1,
			isSkip: !1
		}, s = ta.buildMesh(t, this.layerManager.origin, i);
		if (s[0].length === 0 || s[1].length === 0) {
			console.error("Invalid Building Layer.");
			return;
		}
		let c = {
			geometry: s[0],
			components: s[1],
			thematic: s[1].map(() => ({
				value: 0,
				valid: 1
			}))
		};
		this.createLayer(a, o, c), r && this.updateThematic(e, {
			collection: t,
			property: r
		});
	}
	createRasterLayer(e, t, n) {
		let r = {
			id: `${e}`,
			zIndex: this._layerManager.computeZindex("raster"),
			typeLayer: "raster"
		}, i = {
			opacity: 1,
			colormap: { config: this.defaultColorMap() },
			isColorMap: !1,
			isPick: !1,
			isSkip: !1
		}, a = na.buildMesh(t, this.layerManager.origin);
		if (a[0].length === 0 || a[1].length === 0) {
			console.error("Invalid Feature Layer.");
			return;
		}
		let o = t.features[0].properties;
		if (!o) {
			console.error("GeoTIFF properties are missing.");
			return;
		}
		let s = {
			geometry: a[0],
			components: a[1],
			rasterResX: o.rasterResX,
			rasterResY: o.rasterResY
		};
		this.createLayer(r, i, s), this.updateRaster(e, {
			collection: t,
			property: n
		});
	}
	createLayer(e, t, n) {
		let r = this._layerManager.addLayer(e, t, n);
		r && (r.createPipeline(this._renderer), r.setChangeListener(() => this.requestRender()), this.requestRender());
	}
	defaultColorMap() {
		return {
			interpolator: a.SEQ_REDS,
			domainSpec: { type: i.MIN_MAX }
		};
	}
};
//#endregion
export { od as AutkMap, _u as AutkMapUi, r as DEFAULT_LINE_WIDTH, n as DEFAULT_POINT_SIZE, Ia as Layer, xo as LayerManager, Ma as MapEvent, Du as MapStyle, U as MouseStatus, Fa as Renderer };

//# sourceMappingURL=autk-map.js.map