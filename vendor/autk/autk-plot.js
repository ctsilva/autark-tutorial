//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
//#endregion
//#region ../node_modules/d3-array/src/ascending.js
function n(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../node_modules/d3-array/src/descending.js
function r(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../node_modules/d3-array/src/bisector.js
function i(e) {
	let t, i, o;
	e.length === 2 ? (t = e === n || e === r ? e : a, i = e, o = e) : (t = n, i = (t, r) => n(e(t), r), o = (t, n) => e(t) - n);
	function s(e, n, r = 0, a = e.length) {
		if (r < a) {
			if (t(n, n) !== 0) return a;
			do {
				let t = r + a >>> 1;
				i(e[t], n) < 0 ? r = t + 1 : a = t;
			} while (r < a);
		}
		return r;
	}
	function c(e, n, r = 0, a = e.length) {
		if (r < a) {
			if (t(n, n) !== 0) return a;
			do {
				let t = r + a >>> 1;
				i(e[t], n) <= 0 ? r = t + 1 : a = t;
			} while (r < a);
		}
		return r;
	}
	function l(e, t, n = 0, r = e.length) {
		let i = s(e, t, n, r - 1);
		return i > n && o(e[i - 1], t) > -o(e[i], t) ? i - 1 : i;
	}
	return {
		left: s,
		center: l,
		right: c
	};
}
function a() {
	return 0;
}
//#endregion
//#region ../node_modules/d3-array/src/number.js
function o(e) {
	return e === null ? NaN : +e;
}
//#endregion
//#region ../node_modules/d3-array/src/bisect.js
var s = i(n), c = s.right;
s.left, i(o).center;
//#endregion
//#region ../node_modules/d3-array/src/extent.js
function l(e, t) {
	let n, r;
	if (t === void 0) for (let t of e) t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
	}
	return [n, r];
}
//#endregion
//#region ../node_modules/internmap/src/index.js
var u = class extends Map {
	constructor(e, t = m) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(d(this, e));
	}
	has(e) {
		return super.has(d(this, e));
	}
	set(e, t) {
		return super.set(f(this, e), t);
	}
	delete(e) {
		return super.delete(p(this, e));
	}
};
function d({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function f({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function p({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function m(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../node_modules/d3-array/src/ticks.js
var h = Math.sqrt(50), g = Math.sqrt(10), _ = Math.sqrt(2);
function v(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= h ? 10 : a >= g ? 5 : a >= _ ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? v(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function y(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? v(t, e, n) : v(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) {
		if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
		else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	} else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function b(e, t, n) {
	return t = +t, e = +e, n = +n, v(e, t, n)[2];
}
function x(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? b(t, e, n) : b(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../node_modules/d3-array/src/range.js
function S(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region ../node_modules/d3-axis/src/identity.js
function C(e) {
	return e;
}
//#endregion
//#region ../node_modules/d3-axis/src/axis.js
var w = 1, T = 2, E = 3, D = 4, O = 1e-6;
function ee(e) {
	return "translate(" + e + ",0)";
}
function te(e) {
	return "translate(0," + e + ")";
}
function ne(e) {
	return (t) => +e(t);
}
function re(e, t) {
	return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function k() {
	return !this.__axis;
}
function A(e, t) {
	var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, l = e === w || e === D ? -1 : 1, u = e === D || e === T ? "x" : "y", d = e === w || e === E ? ee : te;
	function f(f) {
		var p = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : C), h = Math.max(a, 0) + s, g = t.range(), _ = +g[0] + c, v = +g[g.length - 1] + c, y = (t.bandwidth ? re : ne)(t.copy(), c), b = f.selection ? f.selection() : f, x = b.selectAll(".domain").data([null]), S = b.selectAll(".tick").data(p, t).order(), ee = S.exit(), te = S.enter().append("g").attr("class", "tick"), A = S.select("line"), j = S.select("text");
		x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(te), A = A.merge(te.append("line").attr("stroke", "currentColor").attr(u + "2", l * a)), j = j.merge(te.append("text").attr("fill", "currentColor").attr(u, l * h).attr("dy", e === w ? "0em" : e === E ? "0.71em" : "0.32em")), f !== b && (x = x.transition(f), S = S.transition(f), A = A.transition(f), j = j.transition(f), ee = ee.transition(f).attr("opacity", O).attr("transform", function(e) {
			return isFinite(e = y(e)) ? d(e + c) : this.getAttribute("transform");
		}), te.attr("opacity", O).attr("transform", function(e) {
			var t = this.parentNode.__axis;
			return d((t && isFinite(t = t(e)) ? t : y(e)) + c);
		})), ee.remove(), x.attr("d", e === D || e === T ? o ? "M" + l * o + "," + _ + "H" + c + "V" + v + "H" + l * o : "M" + c + "," + _ + "V" + v : o ? "M" + _ + "," + l * o + "V" + c + "H" + v + "V" + l * o : "M" + _ + "," + c + "H" + v), S.attr("opacity", 1).attr("transform", function(e) {
			return d(y(e) + c);
		}), A.attr(u + "2", l * a), j.attr(u, l * h).text(m), b.filter(k).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === T ? "start" : e === D ? "end" : "middle"), b.each(function() {
			this.__axis = y;
		});
	}
	return f.scale = function(e) {
		return arguments.length ? (t = e, f) : t;
	}, f.ticks = function() {
		return n = Array.from(arguments), f;
	}, f.tickArguments = function(e) {
		return arguments.length ? (n = e == null ? [] : Array.from(e), f) : n.slice();
	}, f.tickValues = function(e) {
		return arguments.length ? (r = e == null ? null : Array.from(e), f) : r && r.slice();
	}, f.tickFormat = function(e) {
		return arguments.length ? (i = e, f) : i;
	}, f.tickSize = function(e) {
		return arguments.length ? (a = o = +e, f) : a;
	}, f.tickSizeInner = function(e) {
		return arguments.length ? (a = +e, f) : a;
	}, f.tickSizeOuter = function(e) {
		return arguments.length ? (o = +e, f) : o;
	}, f.tickPadding = function(e) {
		return arguments.length ? (s = +e, f) : s;
	}, f.offset = function(e) {
		return arguments.length ? (c = +e, f) : c;
	}, f;
}
function j(e) {
	return A(E, e);
}
function M(e) {
	return A(D, e);
}
//#endregion
//#region ../node_modules/d3-dispatch/src/dispatch.js
var ie = { value: () => {} };
function ae() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new N(n);
}
function N(e) {
	this._ = e;
}
function oe(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
N.prototype = ae.prototype = {
	constructor: N,
	on: function(e, t) {
		var n = this._, r = oe(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = se(n[i], e.name))) return i;
		} else {
			if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
			for (; ++a < o;) if (i = (e = r[a]).type) n[i] = ce(n[i], e.name, t);
			else if (t == null) for (i in n) n[i] = ce(n[i], e.name, null);
			return this;
		}
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new N(e);
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
function se(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function ce(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = ie, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var le = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region ../node_modules/d3-selection/src/namespace.js
function ue(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), le.hasOwnProperty(t) ? {
		space: le[t],
		local: e
	} : e;
}
//#endregion
//#region ../node_modules/d3-selection/src/creator.js
function de(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function fe(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function pe(e) {
	var t = ue(e);
	return (t.local ? fe : de)(t);
}
//#endregion
//#region ../node_modules/d3-selection/src/selector.js
function me() {}
function he(e) {
	return e == null ? me : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/select.js
function ge(e) {
	typeof e != "function" && (e = he(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new P(r, this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/array.js
function _e(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region ../node_modules/d3-selection/src/selectorAll.js
function ve() {
	return [];
}
function ye(e) {
	return e == null ? ve : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/selectAll.js
function be(e) {
	return function() {
		return _e(e.apply(this, arguments));
	};
}
function xe(e) {
	e = typeof e == "function" ? be(e) : ye(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new P(r, i);
}
//#endregion
//#region ../node_modules/d3-selection/src/matcher.js
function Se(e) {
	return function() {
		return this.matches(e);
	};
}
function Ce(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/selectChild.js
var we = Array.prototype.find;
function Te(e) {
	return function() {
		return we.call(this.children, e);
	};
}
function Ee() {
	return this.firstElementChild;
}
function De(e) {
	return this.select(e == null ? Ee : Te(typeof e == "function" ? e : Ce(e)));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/selectChildren.js
var Oe = Array.prototype.filter;
function ke() {
	return Array.from(this.children);
}
function Ae(e) {
	return function() {
		return Oe.call(this.children, e);
	};
}
function je(e) {
	return this.selectAll(e == null ? ke : Ae(typeof e == "function" ? e : Ce(e)));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/filter.js
function Me(e) {
	typeof e != "function" && (e = Se(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new P(r, this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/sparse.js
function Ne(e) {
	return Array(e.length);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/enter.js
function Pe() {
	return new P(this._enter || this._groups.map(Ne), this._parents);
}
function Fe(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Fe.prototype = {
	constructor: Fe,
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
function Ie(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/data.js
function Le(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Fe(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function Re(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Fe(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function ze(e) {
	return e.__data__;
}
function Be(e, t) {
	if (!arguments.length) return Array.from(this, ze);
	var n = t ? Re : Le, r = this._parents, i = this._groups;
	typeof e != "function" && (e = Ie(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Ve(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new P(o, r), o._enter = s, o._exit = c, o;
}
function Ve(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/exit.js
function He() {
	return new P(this._exit || this._groups.map(Ne), this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/join.js
function Ue(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/merge.js
function We(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new P(s, this._parents);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/order.js
function Ge() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/sort.js
function Ke(e) {
	e ||= qe;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new P(i, this._parents).order();
}
function qe(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/call.js
function Je() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/nodes.js
function Ye() {
	return Array.from(this);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/node.js
function Xe() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/size.js
function Ze() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/empty.js
function Qe() {
	return !this.node();
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/each.js
function $e(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/attr.js
function et(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function tt(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function nt(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function rt(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function it(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function at(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function ot(e, t) {
	var n = ue(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? tt : et : typeof t == "function" ? n.local ? at : it : n.local ? rt : nt)(n, t));
}
//#endregion
//#region ../node_modules/d3-selection/src/window.js
function st(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/style.js
function ct(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function lt(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function ut(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function dt(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? ct : typeof t == "function" ? ut : lt)(e, t, n ?? "")) : ft(this.node(), e);
}
function ft(e, t) {
	return e.style.getPropertyValue(t) || st(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/property.js
function pt(e) {
	return function() {
		delete this[e];
	};
}
function mt(e, t) {
	return function() {
		this[e] = t;
	};
}
function ht(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function gt(e, t) {
	return arguments.length > 1 ? this.each((t == null ? pt : typeof t == "function" ? ht : mt)(e, t)) : this.node()[e];
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/classed.js
function _t(e) {
	return e.trim().split(/^|\s+/);
}
function vt(e) {
	return e.classList || new yt(e);
}
function yt(e) {
	this._node = e, this._names = _t(e.getAttribute("class") || "");
}
yt.prototype = {
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
function bt(e, t) {
	for (var n = vt(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function xt(e, t) {
	for (var n = vt(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function St(e) {
	return function() {
		bt(this, e);
	};
}
function Ct(e) {
	return function() {
		xt(this, e);
	};
}
function wt(e, t) {
	return function() {
		(t.apply(this, arguments) ? bt : xt)(this, e);
	};
}
function Tt(e, t) {
	var n = _t(e + "");
	if (arguments.length < 2) {
		for (var r = vt(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? wt : t ? St : Ct)(n, t));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/text.js
function Et() {
	this.textContent = "";
}
function Dt(e) {
	return function() {
		this.textContent = e;
	};
}
function Ot(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function kt(e) {
	return arguments.length ? this.each(e == null ? Et : (typeof e == "function" ? Ot : Dt)(e)) : this.node().textContent;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/html.js
function At() {
	this.innerHTML = "";
}
function jt(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Mt(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Nt(e) {
	return arguments.length ? this.each(e == null ? At : (typeof e == "function" ? Mt : jt)(e)) : this.node().innerHTML;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/raise.js
function Pt() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Ft() {
	return this.each(Pt);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/lower.js
function It() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Lt() {
	return this.each(It);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/append.js
function Rt(e) {
	var t = typeof e == "function" ? e : pe(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/insert.js
function zt() {
	return null;
}
function Bt(e, t) {
	var n = typeof e == "function" ? e : pe(e), r = t == null ? zt : typeof t == "function" ? t : he(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/remove.js
function Vt() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Ht() {
	return this.each(Vt);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/clone.js
function Ut() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Wt() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Gt(e) {
	return this.select(e ? Wt : Ut);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/datum.js
function Kt(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/on.js
function qt(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Jt(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Yt(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Xt(e, t, n) {
	return function() {
		var r = this.__on, i, a = qt(t);
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
function Zt(e, t, n) {
	var r = Jt(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
	} else {
		for (s = t ? Xt : Yt, i = 0; i < a; ++i) this.each(s(r[i], t, n));
		return this;
	}
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/dispatch.js
function Qt(e, t, n) {
	var r = st(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function $t(e, t) {
	return function() {
		return Qt(this, e, t);
	};
}
function en(e, t) {
	return function() {
		return Qt(this, e, t.apply(this, arguments));
	};
}
function tn(e, t) {
	return this.each((typeof t == "function" ? en : $t)(e, t));
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/iterator.js
function* nn() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region ../node_modules/d3-selection/src/selection/index.js
var rn = [null];
function P(e, t) {
	this._groups = e, this._parents = t;
}
function an() {
	return new P([[document.documentElement]], rn);
}
function on() {
	return this;
}
P.prototype = an.prototype = {
	constructor: P,
	select: ge,
	selectAll: xe,
	selectChild: De,
	selectChildren: je,
	filter: Me,
	data: Be,
	enter: Pe,
	exit: He,
	join: Ue,
	merge: We,
	selection: on,
	order: Ge,
	sort: Ke,
	call: Je,
	nodes: Ye,
	node: Xe,
	size: Ze,
	empty: Qe,
	each: $e,
	attr: ot,
	style: dt,
	property: gt,
	classed: Tt,
	text: kt,
	html: Nt,
	raise: Ft,
	lower: Lt,
	append: Rt,
	insert: Bt,
	remove: Ht,
	clone: Gt,
	datum: Kt,
	on: Zt,
	dispatch: tn,
	[Symbol.iterator]: nn
};
//#endregion
//#region ../node_modules/d3-selection/src/select.js
function F(e) {
	return typeof e == "string" ? new P([[document.querySelector(e)]], [document.documentElement]) : new P([[e]], rn);
}
//#endregion
//#region ../node_modules/d3-selection/src/sourceEvent.js
function sn(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region ../node_modules/d3-selection/src/pointer.js
function cn(e, t) {
	if (e = sn(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region ../node_modules/d3-drag/src/noevent.js
var ln = {
	capture: !0,
	passive: !1
};
function un(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../node_modules/d3-drag/src/nodrag.js
function dn(e) {
	var t = e.document.documentElement, n = F(e).on("dragstart.drag", un, ln);
	"onselectstart" in t ? n.on("selectstart.drag", un, ln) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function fn(e, t) {
	var n = e.document.documentElement, r = F(e).on("dragstart.drag", null);
	t && (r.on("click.drag", un, ln), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region ../node_modules/d3-color/src/define.js
function pn(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function mn(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../node_modules/d3-color/src/color.js
function hn() {}
var gn = .7, _n = 1 / gn, vn = "\\s*([+-]?\\d+)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", I = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", bn = /^#([0-9a-f]{3,8})$/, xn = RegExp(`^rgb\\(${vn},${vn},${vn}\\)$`), Sn = RegExp(`^rgb\\(${I},${I},${I}\\)$`), Cn = RegExp(`^rgba\\(${vn},${vn},${vn},${yn}\\)$`), wn = RegExp(`^rgba\\(${I},${I},${I},${yn}\\)$`), Tn = RegExp(`^hsl\\(${yn},${I},${I}\\)$`), En = RegExp(`^hsla\\(${yn},${I},${I},${yn}\\)$`), Dn = {
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
pn(hn, Mn, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: On,
	formatHex: On,
	formatHex8: kn,
	formatHsl: An,
	formatRgb: jn,
	toString: jn
});
function On() {
	return this.rgb().formatHex();
}
function kn() {
	return this.rgb().formatHex8();
}
function An() {
	return Un(this).formatHsl();
}
function jn() {
	return this.rgb().formatRgb();
}
function Mn(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = bn.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Nn(t) : n === 3 ? new R(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Pn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Pn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = xn.exec(e)) ? new R(t[1], t[2], t[3], 1) : (t = Sn.exec(e)) ? new R(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Cn.exec(e)) ? Pn(t[1], t[2], t[3], t[4]) : (t = wn.exec(e)) ? Pn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Tn.exec(e)) ? Hn(t[1], t[2] / 100, t[3] / 100, 1) : (t = En.exec(e)) ? Hn(t[1], t[2] / 100, t[3] / 100, t[4]) : Dn.hasOwnProperty(e) ? Nn(Dn[e]) : e === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Nn(e) {
	return new R(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Pn(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new R(e, t, n, r);
}
function Fn(e) {
	return e instanceof hn || (e = Mn(e)), e ? (e = e.rgb(), new R(e.r, e.g, e.b, e.opacity)) : new R();
}
function L(e, t, n, r) {
	return arguments.length === 1 ? Fn(e) : new R(e, t, n, r ?? 1);
}
function R(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
pn(R, L, mn(hn, {
	brighter(e) {
		return e = e == null ? _n : _n ** +e, new R(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? gn : gn ** +e, new R(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new R(Bn(this.r), Bn(this.g), Bn(this.b), zn(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: In,
	formatHex: In,
	formatHex8: Ln,
	formatRgb: Rn,
	toString: Rn
}));
function In() {
	return `#${Vn(this.r)}${Vn(this.g)}${Vn(this.b)}`;
}
function Ln() {
	return `#${Vn(this.r)}${Vn(this.g)}${Vn(this.b)}${Vn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Rn() {
	let e = zn(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Bn(this.r)}, ${Bn(this.g)}, ${Bn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zn(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Bn(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Vn(e) {
	return e = Bn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Hn(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new z(e, t, n, r);
}
function Un(e) {
	if (e instanceof z) return new z(e.h, e.s, e.l, e.opacity);
	if (e instanceof hn || (e = Mn(e)), !e) return new z();
	if (e instanceof z) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new z(o, s, c, e.opacity);
}
function Wn(e, t, n, r) {
	return arguments.length === 1 ? Un(e) : new z(e, t, n, r ?? 1);
}
function z(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
pn(z, Wn, mn(hn, {
	brighter(e) {
		return e = e == null ? _n : _n ** +e, new z(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? gn : gn ** +e, new z(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new R(qn(e >= 240 ? e - 240 : e + 120, i, r), qn(e, i, r), qn(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new z(Gn(this.h), Kn(this.s), Kn(this.l), zn(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = zn(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Gn(this.h)}, ${Kn(this.s) * 100}%, ${Kn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Gn(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Kn(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function qn(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../node_modules/d3-color/src/math.js
var Jn = Math.PI / 180, Yn = 180 / Math.PI, Xn = -.14861, Zn = 1.78277, Qn = -.29227, $n = -.90649, er = 1.97294, tr = er * $n, nr = er * Zn, rr = Zn * Qn - $n * Xn;
function ir(e) {
	if (e instanceof or) return new or(e.h, e.s, e.l, e.opacity);
	e instanceof R || (e = Fn(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (rr * r + tr * t - nr * n) / (rr + tr - nr), a = r - i, o = (er * (n - i) - Qn * a) / $n, s = Math.sqrt(o * o + a * a) / (er * i * (1 - i)), c = s ? Math.atan2(o, a) * Yn - 120 : NaN;
	return new or(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function ar(e, t, n, r) {
	return arguments.length === 1 ? ir(e) : new or(e, t, n, r ?? 1);
}
function or(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
pn(or, ar, mn(hn, {
	brighter(e) {
		return e = e == null ? _n : _n ** +e, new or(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? gn : gn ** +e, new or(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * Jn, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new R(255 * (t + n * (Xn * r + Zn * i)), 255 * (t + n * (Qn * r + $n * i)), 255 * (t + er * r * n), this.opacity);
	}
}));
//#endregion
//#region ../node_modules/d3-interpolate/src/basis.js
function sr(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function cr(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return sr((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/constant.js
var lr = (e) => () => e;
//#endregion
//#region ../node_modules/d3-interpolate/src/color.js
function ur(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function dr(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function fr(e, t) {
	var n = t - e;
	return n ? ur(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : lr(isNaN(e) ? t : e);
}
function pr(e) {
	return (e = +e) == 1 ? mr : function(t, n) {
		return n - t ? dr(t, n, e) : lr(isNaN(t) ? n : t);
	};
}
function mr(e, t) {
	var n = t - e;
	return n ? ur(e, n) : lr(isNaN(e) ? t : e);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/rgb.js
var hr = (function e(t) {
	var n = pr(t);
	function r(e, t) {
		var r = n((e = L(e)).r, (t = L(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = mr(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function gr(e) {
	return function(t) {
		for (var n = t.length, r = Array(n), i = Array(n), a = Array(n), o = 0, s; o < n; ++o) s = L(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var _r = gr(cr);
//#endregion
//#region ../node_modules/d3-interpolate/src/numberArray.js
function vr(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function yr(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/array.js
function br(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = Or(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/date.js
function xr(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/number.js
function B(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/object.js
function Sr(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Or(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/string.js
var Cr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wr = new RegExp(Cr.source, "g");
function Tr(e) {
	return function() {
		return e;
	};
}
function Er(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Dr(e, t) {
	var n = Cr.lastIndex = wr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Cr.exec(e)) && (i = wr.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: B(r, i)
	})), n = wr.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Er(c[0].x) : Tr(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../node_modules/d3-interpolate/src/value.js
function Or(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? lr(t) : (n === "number" ? B : n === "string" ? (r = Mn(t)) ? (t = r, hr) : Dr : t instanceof Mn ? hr : t instanceof Date ? xr : yr(t) ? vr : Array.isArray(t) ? br : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Sr : B)(e, t);
}
//#endregion
//#region ../node_modules/d3-interpolate/src/round.js
function kr(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/transform/decompose.js
var Ar = 180 / Math.PI, jr = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Mr(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Ar,
		skewX: Math.atan(c) * Ar,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../node_modules/d3-interpolate/src/transform/parse.js
var Nr;
function Pr(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? jr : Mr(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Fr(e) {
	return e == null || (Nr ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Nr.setAttribute("transform", e), !(e = Nr.transform.baseVal.consolidate())) ? jr : (e = e.matrix, Mr(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../node_modules/d3-interpolate/src/transform/index.js
function Ir(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: B(e, i)
			}, {
				i: c - 2,
				x: B(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: B(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: B(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: B(e, n)
			}, {
				i: s - 2,
				x: B(t, r)
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
var Lr = Ir(Pr, "px, ", "px)", "deg)"), Rr = Ir(Fr, ", ", ")", ")");
//#endregion
//#region ../node_modules/d3-interpolate/src/cubehelix.js
function zr(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = ar(t)).h, (r = ar(r)).h), a = mr(t.s, r.s), o = mr(t.l, r.l), s = mr(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
zr(fr);
var Br = zr(mr);
//#endregion
//#region ../node_modules/d3-interpolate/src/piecewise.js
function Vr(e, t) {
	t === void 0 && (t = e, e = Or);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../node_modules/d3-timer/src/timer.js
var Hr = 0, Ur = 0, Wr = 0, Gr = 1e3, Kr, qr, Jr = 0, Yr = 0, Xr = 0, Zr = typeof performance == "object" && performance.now ? performance : Date, Qr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function $r() {
	return Yr ||= (Qr(ei), Zr.now() + Xr);
}
function ei() {
	Yr = 0;
}
function ti() {
	this._call = this._time = this._next = null;
}
ti.prototype = ni.prototype = {
	constructor: ti,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? $r() : +n) + (t == null ? 0 : +t), !this._next && qr !== this && (qr ? qr._next = this : Kr = this, qr = this), this._call = e, this._time = n, si();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, si());
	}
};
function ni(e, t, n) {
	var r = new ti();
	return r.restart(e, t, n), r;
}
function ri() {
	$r(), ++Hr;
	for (var e = Kr, t; e;) (t = Yr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Hr;
}
function ii() {
	Yr = (Jr = Zr.now()) + Xr, Hr = Ur = 0;
	try {
		ri();
	} finally {
		Hr = 0, oi(), Yr = 0;
	}
}
function ai() {
	var e = Zr.now(), t = e - Jr;
	t > Gr && (Xr -= t, Jr = e);
}
function oi() {
	for (var e, t = Kr, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Kr = n);
	qr = e, si(r);
}
function si(e) {
	Hr || (Ur &&= clearTimeout(Ur), e - Yr > 24 ? (e < Infinity && (Ur = setTimeout(ii, e - Zr.now() - Xr)), Wr &&= clearInterval(Wr)) : (Wr ||= (Jr = Zr.now(), setInterval(ai, Gr)), Hr = 1, Qr(ii)));
}
//#endregion
//#region ../node_modules/d3-timer/src/timeout.js
function ci(e, t, n) {
	var r = new ti();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/schedule.js
var li = ae("start", "end", "cancel", "interrupt"), ui = [];
function di(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	mi(e, n, {
		name: t,
		index: r,
		group: i,
		on: li,
		tween: ui,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function fi(e, t) {
	var n = V(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function pi(e, t) {
	var n = V(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function V(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function mi(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = ni(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return ci(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (ci(function() {
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
function hi(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) (r = n[o]).name === t ? (i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o]) : a = !1;
		a && delete e.__transition;
	}
}
//#endregion
//#region ../node_modules/d3-transition/src/selection/interrupt.js
function gi(e) {
	return this.each(function() {
		hi(this, e);
	});
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/tween.js
function _i(e, t) {
	var n, r;
	return function() {
		var i = pi(this, e), a = i.tween;
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
function vi(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = pi(this, e), o = a.tween;
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
function yi(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = V(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? _i : vi)(n, e, t));
}
function bi(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = pi(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return V(e, r).value[t];
	};
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/interpolate.js
function xi(e, t) {
	var n;
	return (typeof t == "number" ? B : t instanceof Mn ? hr : (n = Mn(t)) ? (t = n, hr) : Dr)(e, t);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/attr.js
function Si(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Ci(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function wi(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Ti(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Ei(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Di(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Oi(e, t) {
	var n = ue(e), r = n === "transform" ? Rr : xi;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Di : Ei)(n, r, bi(this, "attr." + e, t)) : t == null ? (n.local ? Ci : Si)(n) : (n.local ? Ti : wi)(n, r, t));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/attrTween.js
function ki(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Ai(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function ji(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Ai(e, i)), n;
	}
	return i._value = t, i;
}
function Mi(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && ki(e, i)), n;
	}
	return i._value = t, i;
}
function Ni(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = ue(e);
	return this.tween(n, (r.local ? ji : Mi)(r, t));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/delay.js
function Pi(e, t) {
	return function() {
		fi(this, e).delay = +t.apply(this, arguments);
	};
}
function Fi(e, t) {
	return t = +t, function() {
		fi(this, e).delay = t;
	};
}
function Ii(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Pi : Fi)(t, e)) : V(this.node(), t).delay;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/duration.js
function Li(e, t) {
	return function() {
		pi(this, e).duration = +t.apply(this, arguments);
	};
}
function Ri(e, t) {
	return t = +t, function() {
		pi(this, e).duration = t;
	};
}
function zi(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Li : Ri)(t, e)) : V(this.node(), t).duration;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/ease.js
function Bi(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		pi(this, e).ease = t;
	};
}
function Vi(e) {
	var t = this._id;
	return arguments.length ? this.each(Bi(t, e)) : V(this.node(), t).ease;
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/easeVarying.js
function Hi(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		pi(this, e).ease = n;
	};
}
function Ui(e) {
	if (typeof e != "function") throw Error();
	return this.each(Hi(this._id, e));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/filter.js
function Wi(e) {
	typeof e != "function" && (e = Se(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new ya(r, this._parents, this._name, this._id);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/merge.js
function Gi(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new ya(o, this._parents, this._name, this._id);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/on.js
function Ki(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function qi(e, t, n) {
	var r, i, a = Ki(t) ? fi : pi;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Ji(e, t) {
	var n = this._id;
	return arguments.length < 2 ? V(this.node(), n).on.on(e) : this.each(qi(n, e, t));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/remove.js
function Yi(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Xi() {
	return this.on("end.remove", Yi(this._id));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/select.js
function Zi(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = he(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, di(l[f], t, n, f, l, V(u, n)));
	return new ya(a, this._parents, t, n);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/selectAll.js
function Qi(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = ye(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = V(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && di(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new ya(a, o, t, n);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/selection.js
var $i = an.prototype.constructor;
function ea() {
	return new $i(this._groups, this._parents);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/style.js
function ta(e, t) {
	var n, r, i;
	return function() {
		var a = ft(this, e), o = (this.style.removeProperty(e), ft(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function na(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function ra(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = ft(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function ia(e, t, n) {
	var r, i, a;
	return function() {
		var o = ft(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), ft(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function aa(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = pi(this, e), l = c.on, u = c.value[a] == null ? s ||= na(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function oa(e, t, n) {
	var r = (e += "") == "transform" ? Lr : xi;
	return t == null ? this.styleTween(e, ta(e, r)).on("end.style." + e, na(e)) : typeof t == "function" ? this.styleTween(e, ia(e, r, bi(this, "style." + e, t))).each(aa(this._id, e)) : this.styleTween(e, ra(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/styleTween.js
function sa(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function ca(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && sa(e, a, n)), r;
	}
	return a._value = t, a;
}
function la(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, ca(e, t, n ?? ""));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/text.js
function ua(e) {
	return function() {
		this.textContent = e;
	};
}
function da(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function fa(e) {
	return this.tween("text", typeof e == "function" ? da(bi(this, "text", e)) : ua(e == null ? "" : e + ""));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/textTween.js
function pa(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function ma(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && pa(r)), t;
	}
	return r._value = e, r;
}
function ha(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, ma(e));
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/transition.js
function ga() {
	for (var e = this._name, t = this._id, n = ba(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = V(c, t);
		di(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new ya(r, this._parents, e, n);
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/end.js
function _a() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = pi(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region ../node_modules/d3-transition/src/transition/index.js
var va = 0;
function ya(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ba() {
	return ++va;
}
var xa = an.prototype;
ya.prototype = {
	constructor: ya,
	select: Zi,
	selectAll: Qi,
	selectChild: xa.selectChild,
	selectChildren: xa.selectChildren,
	filter: Wi,
	merge: Gi,
	selection: ea,
	transition: ga,
	call: xa.call,
	nodes: xa.nodes,
	node: xa.node,
	size: xa.size,
	empty: xa.empty,
	each: xa.each,
	on: Ji,
	attr: Oi,
	attrTween: Ni,
	style: oa,
	styleTween: la,
	text: fa,
	textTween: ha,
	remove: Xi,
	tween: yi,
	delay: Ii,
	duration: zi,
	ease: Vi,
	easeVarying: Ui,
	end: _a,
	[Symbol.iterator]: xa[Symbol.iterator]
};
//#endregion
//#region ../node_modules/d3-ease/src/cubic.js
function Sa(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../node_modules/d3-transition/src/selection/transition.js
var Ca = {
	time: null,
	delay: 0,
	duration: 250,
	ease: Sa
};
function wa(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function Ta(e) {
	var t, n;
	e instanceof ya ? (t = e._id, e = e._name) : (t = ba(), (n = Ca).time = $r(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && di(c, e, t, l, o, n || wa(c, t));
	return new ya(r, this._parents, e, t);
}
an.prototype.interrupt = gi, an.prototype.transition = Ta;
//#endregion
//#region ../node_modules/d3-brush/src/constant.js
var Ea = (e) => () => e;
//#endregion
//#region ../node_modules/d3-brush/src/event.js
function Da(e, { sourceEvent: t, target: n, selection: r, mode: i, dispatch: a }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		selection: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		mode: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		_: { value: a }
	});
}
//#endregion
//#region ../node_modules/d3-brush/src/noevent.js
function Oa(e) {
	e.stopImmediatePropagation();
}
function ka(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../node_modules/d3-brush/src/brush.js
var Aa = { name: "drag" }, ja = { name: "space" }, Ma = { name: "handle" }, Na = { name: "center" }, { abs: Pa, max: H, min: U } = Math;
function Fa(e) {
	return [+e[0], +e[1]];
}
function Ia(e) {
	return [Fa(e[0]), Fa(e[1])];
}
var La = {
	name: "x",
	handles: ["w", "e"].map(Ga),
	input: function(e, t) {
		return e == null ? null : [[+e[0], t[0][1]], [+e[1], t[1][1]]];
	},
	output: function(e) {
		return e && [e[0][0], e[1][0]];
	}
}, Ra = {
	name: "y",
	handles: ["n", "s"].map(Ga),
	input: function(e, t) {
		return e == null ? null : [[t[0][0], +e[0]], [t[1][0], +e[1]]];
	},
	output: function(e) {
		return e && [e[0][1], e[1][1]];
	}
}, za = {
	name: "xy",
	handles: [
		"n",
		"w",
		"e",
		"s",
		"nw",
		"ne",
		"sw",
		"se"
	].map(Ga),
	input: function(e) {
		return e == null ? null : Ia(e);
	},
	output: function(e) {
		return e;
	}
}, Ba = {
	overlay: "crosshair",
	selection: "move",
	n: "ns-resize",
	e: "ew-resize",
	s: "ns-resize",
	w: "ew-resize",
	nw: "nwse-resize",
	ne: "nesw-resize",
	se: "nwse-resize",
	sw: "nesw-resize"
}, Va = {
	e: "w",
	w: "e",
	nw: "ne",
	ne: "nw",
	se: "sw",
	sw: "se"
}, Ha = {
	n: "s",
	s: "n",
	nw: "sw",
	ne: "se",
	se: "ne",
	sw: "nw"
}, Ua = {
	overlay: 1,
	selection: 1,
	n: null,
	e: 1,
	s: null,
	w: -1,
	nw: -1,
	ne: 1,
	se: 1,
	sw: -1
}, Wa = {
	overlay: 1,
	selection: 1,
	n: -1,
	e: null,
	s: 1,
	w: null,
	nw: -1,
	ne: -1,
	se: 1,
	sw: 1
};
function Ga(e) {
	return { type: e };
}
function Ka(e) {
	return !e.ctrlKey && !e.button;
}
function qa() {
	var e = this.ownerSVGElement || this;
	return e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
}
function Ja() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ya(e) {
	for (; !e.__brush;) if (!(e = e.parentNode)) return;
	return e.__brush;
}
function Xa(e) {
	return e[0][0] === e[1][0] || e[0][1] === e[1][1];
}
function Za() {
	return eo(La);
}
function Qa() {
	return eo(Ra);
}
function $a() {
	return eo(za);
}
function eo(e) {
	var t = qa, n = Ka, r = Ja, i = !0, a = ae("start", "brush", "end"), o = 6, s;
	function c(t) {
		var n = t.property("__brush", h).selectAll(".overlay").data([Ga("overlay")]);
		n.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Ba.overlay).merge(n).each(function() {
			var e = Ya(this).extent;
			F(this).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]);
		}), t.selectAll(".selection").data([Ga("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Ba.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
		var i = t.selectAll(".handle").data(e.handles, function(e) {
			return e.type;
		});
		i.exit().remove(), i.enter().append("rect").attr("class", function(e) {
			return "handle handle--" + e.type;
		}).attr("cursor", function(e) {
			return Ba[e.type];
		}), t.each(l).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", f).filter(r).on("touchstart.brush", f).on("touchmove.brush", p).on("touchend.brush touchcancel.brush", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	c.move = function(t, n, r) {
		t.tween ? t.on("start.brush", function(e) {
			u(this, arguments).beforestart().start(e);
		}).on("interrupt.brush end.brush", function(e) {
			u(this, arguments).end(e);
		}).tween("brush", function() {
			var t = this, r = t.__brush, i = u(t, arguments), a = r.selection, o = e.input(typeof n == "function" ? n.apply(this, arguments) : n, r.extent), s = Or(a, o);
			function c(e) {
				r.selection = e === 1 && o === null ? null : s(e), l.call(t), i.brush();
			}
			return a !== null && o !== null ? c : c(1);
		}) : t.each(function() {
			var t = this, i = arguments, a = t.__brush, o = e.input(typeof n == "function" ? n.apply(t, i) : n, a.extent), s = u(t, i).beforestart();
			hi(t), a.selection = o === null ? null : o, l.call(t), s.start(r).brush(r).end(r);
		});
	}, c.clear = function(e, t) {
		c.move(e, null, t);
	};
	function l() {
		var e = F(this), t = Ya(this).selection;
		t ? (e.selectAll(".selection").style("display", null).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]), e.selectAll(".handle").style("display", null).attr("x", function(e) {
			return e.type[e.type.length - 1] === "e" ? t[1][0] - o / 2 : t[0][0] - o / 2;
		}).attr("y", function(e) {
			return e.type[0] === "s" ? t[1][1] - o / 2 : t[0][1] - o / 2;
		}).attr("width", function(e) {
			return e.type === "n" || e.type === "s" ? t[1][0] - t[0][0] + o : o;
		}).attr("height", function(e) {
			return e.type === "e" || e.type === "w" ? t[1][1] - t[0][1] + o : o;
		})) : e.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
	}
	function u(e, t, n) {
		var r = e.__brush.emitter;
		return r && (!n || !r.clean) ? r : new d(e, t, n);
	}
	function d(e, t, n) {
		this.that = e, this.args = t, this.state = e.__brush, this.active = 0, this.clean = n;
	}
	d.prototype = {
		beforestart: function() {
			return ++this.active === 1 && (this.state.emitter = this, this.starting = !0), this;
		},
		start: function(e, t) {
			return this.starting ? (this.starting = !1, this.emit("start", e, t)) : this.emit("brush", e), this;
		},
		brush: function(e, t) {
			return this.emit("brush", e, t), this;
		},
		end: function(e, t) {
			return --this.active === 0 && (delete this.state.emitter, this.emit("end", e, t)), this;
		},
		emit: function(t, n, r) {
			var i = F(this.that).datum();
			a.call(t, this.that, new Da(t, {
				sourceEvent: n,
				target: c,
				selection: e.output(this.state.selection),
				mode: r,
				dispatch: a
			}), i);
		}
	};
	function f(t) {
		if (s && !t.touches || !n.apply(this, arguments)) return;
		var r = this, a = t.target.__data__.type, o = (i && t.metaKey ? a = "overlay" : a) === "selection" ? Aa : i && t.altKey ? Na : Ma, c = e === Ra ? null : Ua[a], d = e === La ? null : Wa[a], f = Ya(r), p = f.extent, m = f.selection, h = p[0][0], g, _, v = p[0][1], y, b, x = p[1][0], S, C, w = p[1][1], T, E, D = 0, O = 0, ee, te = c && d && i && t.shiftKey, ne, re, k = Array.from(t.touches || [t], (e) => {
			let t = e.identifier;
			return e = cn(e, r), e.point0 = e.slice(), e.identifier = t, e;
		});
		hi(r);
		var A = u(r, arguments, !0).beforestart();
		if (a === "overlay") {
			m && (ee = !0);
			let n = [k[0], k[1] || k[0]];
			f.selection = m = [[g = e === Ra ? h : U(n[0][0], n[1][0]), y = e === La ? v : U(n[0][1], n[1][1])], [S = e === Ra ? x : H(n[0][0], n[1][0]), T = e === La ? w : H(n[0][1], n[1][1])]], k.length > 1 && N(t);
		} else g = m[0][0], y = m[0][1], S = m[1][0], T = m[1][1];
		_ = g, b = y, C = S, E = T;
		var j = F(r).attr("pointer-events", "none"), M = j.selectAll(".overlay").attr("cursor", Ba[a]);
		if (t.touches) A.moved = ae, A.ended = oe;
		else {
			var ie = F(t.view).on("mousemove.brush", ae, !0).on("mouseup.brush", oe, !0);
			i && ie.on("keydown.brush", se, !0).on("keyup.brush", ce, !0), dn(t.view);
		}
		l.call(r), A.start(t, o.name);
		function ae(e) {
			for (let t of e.changedTouches || [e]) for (let e of k) e.identifier === t.identifier && (e.cur = cn(t, r));
			if (te && !ne && !re && k.length === 1) {
				let e = k[0];
				Pa(e.cur[0] - e[0]) > Pa(e.cur[1] - e[1]) ? re = !0 : ne = !0;
			}
			for (let e of k) e.cur && (e[0] = e.cur[0], e[1] = e.cur[1]);
			ee = !0, ka(e), N(e);
		}
		function N(e) {
			let t = k[0], n = t.point0;
			var i;
			switch (D = t[0] - n[0], O = t[1] - n[1], o) {
				case ja:
				case Aa:
					c && (D = H(h - g, U(x - S, D)), _ = g + D, C = S + D), d && (O = H(v - y, U(w - T, O)), b = y + O, E = T + O);
					break;
				case Ma:
					k[1] ? (c &&= (_ = H(h, U(x, k[0][0])), C = H(h, U(x, k[1][0])), 1), d &&= (b = H(v, U(w, k[0][1])), E = H(v, U(w, k[1][1])), 1)) : (c < 0 ? (D = H(h - g, U(x - g, D)), _ = g + D, C = S) : c > 0 && (D = H(h - S, U(x - S, D)), _ = g, C = S + D), d < 0 ? (O = H(v - y, U(w - y, O)), b = y + O, E = T) : d > 0 && (O = H(v - T, U(w - T, O)), b = y, E = T + O));
					break;
				case Na: c && (_ = H(h, U(x, g - D * c)), C = H(h, U(x, S + D * c))), d && (b = H(v, U(w, y - O * d)), E = H(v, U(w, T + O * d)));
			}
			C < _ && (c *= -1, i = g, g = S, S = i, i = _, _ = C, C = i, a in Va && M.attr("cursor", Ba[a = Va[a]])), E < b && (d *= -1, i = y, y = T, T = i, i = b, b = E, E = i, a in Ha && M.attr("cursor", Ba[a = Ha[a]])), f.selection && (m = f.selection), ne && (_ = m[0][0], C = m[1][0]), re && (b = m[0][1], E = m[1][1]), (m[0][0] !== _ || m[0][1] !== b || m[1][0] !== C || m[1][1] !== E) && (f.selection = [[_, b], [C, E]], l.call(r), A.brush(e, o.name));
		}
		function oe(e) {
			if (Oa(e), e.touches) {
				if (e.touches.length) return;
				s && clearTimeout(s), s = setTimeout(function() {
					s = null;
				}, 500);
			} else fn(e.view, ee), ie.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
			j.attr("pointer-events", "all"), M.attr("cursor", Ba.overlay), f.selection && (m = f.selection), Xa(m) && (f.selection = null, l.call(r)), A.end(e, o.name);
		}
		function se(e) {
			switch (e.keyCode) {
				case 16:
					te = c && d;
					break;
				case 18:
					o === Ma && (c && (S = C - D * c, g = _ + D * c), d && (T = E - O * d, y = b + O * d), o = Na, N(e));
					break;
				case 32:
					(o === Ma || o === Na) && (c < 0 ? S = C - D : c > 0 && (g = _ - D), d < 0 ? T = E - O : d > 0 && (y = b - O), o = ja, M.attr("cursor", Ba.selection), N(e));
					break;
				default: return;
			}
			ka(e);
		}
		function ce(e) {
			switch (e.keyCode) {
				case 16:
					te && (ne = re = te = !1, N(e));
					break;
				case 18:
					o === Na && (c < 0 ? S = C : c > 0 && (g = _), d < 0 ? T = E : d > 0 && (y = b), o = Ma, N(e));
					break;
				case 32:
					o === ja && (e.altKey ? (c && (S = C - D * c, g = _ + D * c), d && (T = E - O * d, y = b + O * d), o = Na) : (c < 0 ? S = C : c > 0 && (g = _), d < 0 ? T = E : d > 0 && (y = b), o = Ma), M.attr("cursor", Ba[a]), N(e));
					break;
				default: return;
			}
			ka(e);
		}
	}
	function p(e) {
		u(this, arguments).moved(e);
	}
	function m(e) {
		u(this, arguments).ended(e);
	}
	function h() {
		var n = this.__brush || { selection: null };
		return n.extent = Ia(t.apply(this, arguments)), n.dim = e, n;
	}
	return c.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Ea(Ia(e)), c) : t;
	}, c.filter = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Ea(!!e), c) : n;
	}, c.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Ea(!!e), c) : r;
	}, c.handleSize = function(e) {
		return arguments.length ? (o = +e, c) : o;
	}, c.keyModifiers = function(e) {
		return arguments.length ? (i = !!e, c) : i;
	}, c.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? c : e;
	}, c;
}
//#endregion
//#region ../node_modules/d3-path/src/path.js
var to = Math.PI, no = 2 * to, ro = 1e-6, io = no - ro;
function ao(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function oo(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return ao;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var so = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? ao : oo(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, t, n, r, i) {
		if (e = +e, t = +t, n = +n, r = +r, i = +i, i < 0) throw Error(`negative radius: ${i}`);
		let a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = t}`;
		else if (d > ro) {
			if (!(Math.abs(u * s - c * l) > ro) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
			else {
				let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((to - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
				Math.abs(y - 1) > ro && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
			}
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > ro || Math.abs(this._y1 - l) > ro) && this._append`L${c},${l}`, n && (d < 0 && (d = d % no + no), d > io ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > ro && this._append`A${n},${n},0,${+(d >= to)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
so.prototype;
//#endregion
//#region ../node_modules/d3-format/src/formatDecimal.js
function co(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function lo(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../node_modules/d3-format/src/exponent.js
function uo(e) {
	return e = lo(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../node_modules/d3-format/src/formatGroup.js
function fo(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../node_modules/d3-format/src/formatNumerals.js
function po(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../node_modules/d3-format/src/formatSpecifier.js
var mo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ho(e) {
	if (!(t = mo.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new go({
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
ho.prototype = go.prototype;
function go(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
go.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region ../node_modules/d3-format/src/formatTrim.js
function _o(e) {
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
var vo;
function yo(e, t) {
	var n = lo(e, t);
	if (!n) return vo = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (vo = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + lo(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../node_modules/d3-format/src/formatRounded.js
function bo(e, t) {
	var n = lo(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../node_modules/d3-format/src/formatTypes.js
var xo = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: co,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => bo(e * 100, t),
	r: bo,
	s: yo,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../node_modules/d3-format/src/identity.js
function So(e) {
	return e;
}
//#endregion
//#region ../node_modules/d3-format/src/locale.js
var Co = Array.prototype.map, wo = [
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
function To(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? So : fo(Co.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? So : po(Co.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = ho(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : xo[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = xo[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = _o(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && vo !== void 0 ? wo[8 + vo / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
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
		var n = Math.max(-8, Math.min(8, Math.floor(uo(t) / 3))) * 3, r = 10 ** -n, i = l((e = ho(e), e.type = "f", e), { suffix: wo[8 + n / 3] });
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
var Eo, W, Do;
Oo({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Oo(e) {
	return Eo = To(e), W = Eo.format, Do = Eo.formatPrefix, Eo;
}
//#endregion
//#region ../node_modules/d3-format/src/precisionFixed.js
function ko(e) {
	return Math.max(0, -uo(Math.abs(e)));
}
//#endregion
//#region ../node_modules/d3-format/src/precisionPrefix.js
function Ao(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(uo(t) / 3))) * 3 - uo(Math.abs(e)));
}
//#endregion
//#region ../node_modules/d3-format/src/precisionRound.js
function jo(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, uo(t) - uo(e)) + 1;
}
//#endregion
//#region ../node_modules/d3-scale/src/init.js
function Mo(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function No(e, t) {
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
//#region ../node_modules/d3-scale/src/ordinal.js
var Po = Symbol("implicit");
function Fo() {
	var e = new u(), t = [], n = [], r = Po;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Po) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new u();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Fo(t, n).unknown(r);
	}, Mo.apply(i, arguments), i;
}
//#endregion
//#region ../node_modules/d3-scale/src/band.js
function Io() {
	var e = Fo().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, a, o, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		var e = t().length, d = i < r, f = d ? i : r, p = d ? r : i;
		a = (p - f) / Math.max(1, e - c + l * 2), s && (a = Math.floor(a)), f += (p - f - a * (e - c)) * u, o = a * (1 - c), s && (f = Math.round(f), o = Math.round(o));
		var m = S(e).map(function(e) {
			return f + a * e;
		});
		return n(d ? m.reverse() : m);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), d()) : t();
	}, e.range = function(e) {
		return arguments.length ? ([r, i] = e, r = +r, i = +i, d()) : [r, i];
	}, e.rangeRound = function(e) {
		return [r, i] = e, r = +r, i = +i, s = !0, d();
	}, e.bandwidth = function() {
		return o;
	}, e.step = function() {
		return a;
	}, e.round = function(e) {
		return arguments.length ? (s = !!e, d()) : s;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.min(1, l = +e), d()) : c;
	}, e.paddingInner = function(e) {
		return arguments.length ? (c = Math.min(1, e), d()) : c;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (l = +e, d()) : l;
	}, e.align = function(e) {
		return arguments.length ? (u = Math.max(0, Math.min(1, e)), d()) : u;
	}, e.copy = function() {
		return Io(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, Mo.apply(d(), arguments);
}
function Lo(e) {
	var t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
		return Lo(t());
	}, e;
}
function Ro() {
	return Lo(Io.apply(null, arguments).paddingInner(1));
}
//#endregion
//#region ../node_modules/d3-scale/src/constant.js
function zo(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../node_modules/d3-scale/src/number.js
function Bo(e) {
	return +e;
}
//#endregion
//#region ../node_modules/d3-scale/src/continuous.js
var Vo = [0, 1];
function Ho(e) {
	return e;
}
function Uo(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : zo(isNaN(t) ? NaN : .5);
}
function Wo(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Go(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Uo(i, r), a = n(o, a)) : (r = Uo(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Ko(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Uo(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = c(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function qo(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Jo() {
	var e = Vo, t = Vo, n = Or, r, i, a, o = Ho, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== Ho && (o = Wo(e[0], e[n - 1])), s = n > 2 ? Ko : Go, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), B))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Bo), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = kr, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : Ho, u()) : o !== Ho;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function Yo() {
	return Jo()(Ho, Ho);
}
//#endregion
//#region ../node_modules/d3-scale/src/tickFormat.js
function Xo(e, t, n, r) {
	var i = x(e, t, n), a;
	switch (r = ho(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Ao(i, o)) && (r.precision = a), Do(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = jo(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = ko(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return W(r);
}
//#endregion
//#region ../node_modules/d3-scale/src/linear.js
function Zo(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return y(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Xo(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = b(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Qo() {
	var e = Yo();
	return e.copy = function() {
		return qo(e, Qo());
	}, Mo.apply(e, arguments), Zo(e);
}
//#endregion
//#region ../node_modules/d3-scale/src/sequential.js
function $o() {
	var e = 0, t = 1, n, r, i, a, o = Ho, s = !1, c;
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
	return l.range = u(Or), l.rangeRound = u(kr), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function es(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function ts() {
	var e = Zo($o()(Ho));
	return e.copy = function() {
		return es(e, ts());
	}, No.apply(e, arguments);
}
//#endregion
//#region ../node_modules/d3-scale/src/diverging.js
function ns() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = Ho, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = Vr(e, [
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
	return p.range = m(Or), p.rangeRound = m(kr), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function rs() {
	var e = Zo(ns()(Ho));
	return e.copy = function() {
		return es(e, rs());
	}, No.apply(e, arguments);
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/colors.js
function G(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/categorical/category10.js
var is = G("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), as = G("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), os = G("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), ss = G("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), cs = G("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), ls = G("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), us = G("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), ds = G("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), fs = G("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), ps = G("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), ms = G("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), K = (e) => _r(e[e.length - 1]), hs = [
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
].map(G), gs = K(hs), _s = [
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
].map(G), vs = K(_s), ys = [
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
].map(G), bs = K(ys), xs = [
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
].map(G), Ss = K(xs), Cs = [
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
].map(G), ws = K(Cs), Ts = [
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
].map(G), Es = K(Ts), Ds = [
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
].map(G), Os = K(Ds), ks = [
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
].map(G), As = K(ks), js = [
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
].map(G), Ms = K(js), Ns = [
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
].map(G), Ps = K(Ns), Fs = [
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
].map(G), Is = K(Fs), Ls = [
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
].map(G), Rs = K(Ls), zs = [
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
].map(G), Bs = K(zs), Vs = [
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
].map(G), Hs = K(Vs), Us = [
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
].map(G), Ws = K(Us), Gs = [
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
].map(G), Ks = K(Gs), qs = [
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
].map(G), Js = K(qs), Ys = [
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
].map(G), Xs = K(Ys), Zs = [
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
].map(G), Qs = K(Zs), $s = [
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
].map(G), ec = K($s), tc = [
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
].map(G), nc = K(tc), rc = [
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
].map(G), ic = K(rc), ac = [
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
].map(G), oc = K(ac), sc = [
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
].map(G), cc = K(sc), lc = [
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
].map(G), uc = K(lc), dc = [
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
].map(G), fc = K(dc), pc = [
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
].map(G), mc = K(pc);
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function hc(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var gc = Br(ar(300, .5, 0), ar(-240, .5, 1)), _c = Br(ar(-100, .75, .35), ar(80, 1.5, .8)), vc = Br(ar(260, .75, .35), ar(80, 1.5, .8)), yc = ar();
function bc(e) {
	(e < 0 || e > 1) && (e -= Math.floor(e));
	var t = Math.abs(e - .5);
	return yc.h = 360 * e - 100, yc.s = 1.5 - 1.5 * t, yc.l = .8 - .9 * t, yc + "";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var xc = L(), Sc = Math.PI / 3, Cc = Math.PI * 2 / 3;
function wc(e) {
	var t;
	return e = (.5 - e) * Math.PI, xc.r = 255 * (t = Math.sin(e)) * t, xc.g = 255 * (t = Math.sin(e + Sc)) * t, xc.b = 255 * (t = Math.sin(e + Cc)) * t, xc + "";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function Tc(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
//#endregion
//#region ../node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function Ec(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
var Dc = Ec(G("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), Oc = Ec(G("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), kc = Ec(G("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Ac = Ec(G("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), jc = /* @__PURE__ */ t({
	interpolateBlues: () => ic,
	interpolateBrBG: () => gs,
	interpolateBuGn: () => Ps,
	interpolateBuPu: () => Is,
	interpolateCividis: () => hc,
	interpolateCool: () => vc,
	interpolateCubehelixDefault: () => gc,
	interpolateGnBu: () => Rs,
	interpolateGreens: () => oc,
	interpolateGreys: () => cc,
	interpolateInferno: () => kc,
	interpolateMagma: () => Oc,
	interpolateOrRd: () => Bs,
	interpolateOranges: () => mc,
	interpolatePRGn: () => vs,
	interpolatePiYG: () => bs,
	interpolatePlasma: () => Ac,
	interpolatePuBu: () => Ws,
	interpolatePuBuGn: () => Hs,
	interpolatePuOr: () => Ss,
	interpolatePuRd: () => Ks,
	interpolatePurples: () => uc,
	interpolateRainbow: () => bc,
	interpolateRdBu: () => ws,
	interpolateRdGy: () => Es,
	interpolateRdPu: () => Js,
	interpolateRdYlBu: () => Os,
	interpolateRdYlGn: () => As,
	interpolateReds: () => fc,
	interpolateSinebow: () => wc,
	interpolateSpectral: () => Ms,
	interpolateTurbo: () => Tc,
	interpolateViridis: () => Dc,
	interpolateWarm: () => _c,
	interpolateYlGn: () => Qs,
	interpolateYlGnBu: () => Xs,
	interpolateYlOrBr: () => ec,
	interpolateYlOrRd: () => nc,
	schemeAccent: () => as,
	schemeBlues: () => rc,
	schemeBrBG: () => hs,
	schemeBuGn: () => Ns,
	schemeBuPu: () => Fs,
	schemeCategory10: () => is,
	schemeDark2: () => os,
	schemeGnBu: () => Ls,
	schemeGreens: () => ac,
	schemeGreys: () => sc,
	schemeObservable10: () => ss,
	schemeOrRd: () => zs,
	schemeOranges: () => pc,
	schemePRGn: () => _s,
	schemePaired: () => cs,
	schemePastel1: () => ls,
	schemePastel2: () => us,
	schemePiYG: () => ys,
	schemePuBu: () => Us,
	schemePuBuGn: () => Vs,
	schemePuOr: () => xs,
	schemePuRd: () => Gs,
	schemePurples: () => lc,
	schemeRdBu: () => Cs,
	schemeRdGy: () => Ts,
	schemeRdPu: () => qs,
	schemeRdYlBu: () => Ds,
	schemeRdYlGn: () => ks,
	schemeReds: () => dc,
	schemeSet1: () => ds,
	schemeSet2: () => fs,
	schemeSet3: () => ps,
	schemeSpectral: () => js,
	schemeTableau10: () => ms,
	schemeYlGn: () => Zs,
	schemeYlGnBu: () => Ys,
	schemeYlOrBr: () => $s,
	schemeYlOrRd: () => tc
});
//#endregion
//#region ../node_modules/d3-shape/src/constant.js
function Mc(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../node_modules/d3-shape/src/path.js
function Nc(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new so(t);
}
Array.prototype.slice;
function Pc(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region ../node_modules/d3-shape/src/curve/linear.js
function Fc(e) {
	this._context = e;
}
Fc.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._context.lineTo(e, t);
		}
	}
};
function Ic(e) {
	return new Fc(e);
}
//#endregion
//#region ../node_modules/d3-shape/src/point.js
function Lc(e) {
	return e[0];
}
function Rc(e) {
	return e[1];
}
//#endregion
//#region ../node_modules/d3-shape/src/line.js
function zc(e, t) {
	var n = Mc(!0), r = null, i = Ic, a = null, o = Nc(s);
	e = typeof e == "function" ? e : e === void 0 ? Lc : Mc(e), t = typeof t == "function" ? t : t === void 0 ? Rc : Mc(t);
	function s(s) {
		var c, l = (s = Pc(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Mc(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Mc(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Mc(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
//#endregion
//#region ../node_modules/d3-zoom/src/transform.js
function Bc(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
Bc.prototype = {
	constructor: Bc,
	scale: function(e) {
		return e === 1 ? this : new Bc(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new Bc(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Vc = new Bc(1, 0, 0);
Hc.prototype = Bc.prototype;
function Hc(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return Vc;
	return e.__zoom;
}
//#endregion
//#region ../autk-core/src/types-colormap.ts
var Uc = /* @__PURE__ */ function(e) {
	return e.USER = "user", e.MIN_MAX = "minMax", e.PERCENTILE = "percentile", e;
}({}), q = /* @__PURE__ */ function(e) {
	return e.CAT_ACCENT = "schemeAccent", e.CAT_DARK2 = "schemeDark2", e.CAT_CATEGORY10 = "schemeCategory10", e.CAT_OBSERVABLE10 = "schemeObservable10", e.CAT_PAIRED = "schemePaired", e.CAT_PASTEL1 = "schemePastel1", e.CAT_PASTEL2 = "schemePastel2", e.CAT_SET1 = "schemeSet1", e.CAT_SET2 = "schemeSet2", e.CAT_SET3 = "schemeSet3", e.CAT_TABLEAU10 = "schemeTableau10", e.SEQ_REDS = "interpolateReds", e.SEQ_BLUES = "interpolateBlues", e.SEQ_GREENS = "interpolateGreens", e.SEQ_GREYS = "interpolateGreys", e.SEQ_ORANGES = "interpolateOranges", e.SEQ_PURPLES = "interpolatePurples", e.SEQ_TURBO = "interpolateTurbo", e.SEQ_VIRIDIS = "interpolateViridis", e.SEQ_INFERNO = "interpolateInferno", e.SEQ_MAGMA = "interpolateMagma", e.SEQ_PLASMA = "interpolatePlasma", e.SEQ_CIVIDIS = "interpolateCividis", e.SEQ_WARM = "interpolateWarm", e.SEQ_COOL = "interpolateCool", e.SEQ_CUBEHELIX_DEFAULT = "interpolateCubehelixDefault", e.SEQ_BU_GN = "interpolateBuGn", e.SEQ_BU_PU = "interpolateBuPu", e.SEQ_GN_BU = "interpolateGnBu", e.SEQ_OR_RD = "interpolateOrRd", e.SEQ_PU_BU_GN = "interpolatePuBuGn", e.SEQ_PU_BU = "interpolatePuBu", e.SEQ_PU_RD = "interpolatePuRd", e.SEQ_RD_PU = "interpolateRdPu", e.SEQ_YL_GN_BU = "interpolateYlGnBu", e.SEQ_YL_GN = "interpolateYlGn", e.SEQ_YL_OR_BR = "interpolateYlOrBr", e.SEQ_YL_OR_RD = "interpolateYlOrRd", e.DIV_BR_BG = "interpolateBrBG", e.DIV_PR_GN = "interpolatePRGn", e.DIV_PI_YG = "interpolatePiYG", e.DIV_PU_OR = "interpolatePuOr", e.DIV_RED_BLUE = "interpolateRdBu", e.DIV_RED_GREY = "interpolateRdGy", e.DIV_RED_YELLOW_BLUE = "interpolateRdYlBu", e.DIV_RED_YELLOW_GREEN = "interpolateRdYlGn", e.DIV_SPECTRAL = "interpolateSpectral", e;
}({}), Wc = /* @__PURE__ */ new Set([
	q.CAT_ACCENT,
	q.CAT_DARK2,
	q.CAT_CATEGORY10,
	q.CAT_OBSERVABLE10,
	q.CAT_PAIRED,
	q.CAT_PASTEL1,
	q.CAT_PASTEL2,
	q.CAT_SET1,
	q.CAT_SET2,
	q.CAT_SET3,
	q.CAT_TABLEAU10
]), Gc = /* @__PURE__ */ new Set([
	q.DIV_BR_BG,
	q.DIV_PR_GN,
	q.DIV_PI_YG,
	q.DIV_PU_OR,
	q.DIV_RED_BLUE,
	q.DIV_RED_GREY,
	q.DIV_RED_YELLOW_BLUE,
	q.DIV_RED_YELLOW_GREEN,
	q.DIV_SPECTRAL
]), Kc = class e {
	static getColor(t, n, r) {
		let { r: i, g: a, b: o } = L(e.buildInterpolator(n, r)(t));
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
			let { r: n, g: i, b: a } = L(e.buildInterpolator(t, r)(.5));
			return [
				n,
				i,
				a,
				1
			];
		}
		let i = e.buildInterpolator(t, r), a = [];
		for (let e = 0; e < n; e++) {
			let { r: t, g: r, b: o } = L(i(e / (n - 1)));
			a.push(t, r, o, 1);
		}
		return a;
	}
	static getColorArray(t, n = 256, r) {
		if (n <= 0) return [];
		if (n === 1) {
			let { r: n, g: i, b: a } = L(e.buildInterpolator(t, r)(.5));
			return [{
				r: n,
				g: i,
				b: a,
				alpha: 1
			}];
		}
		let i = e.buildInterpolator(t, r), a = [];
		for (let e = 0; e < n; e++) {
			let { r: t, g: r, b: o } = L(i(e / (n - 1)));
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
		return L(e.r, e.g, e.b, 1).formatHex();
	}
	static hexToRgb(e) {
		let t = L(e);
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
		return Wc.has(e);
	}
	static isDiverging(e) {
		return Gc.has(e);
	}
	static getCategoricalSchemeSize(t) {
		return e.isCategorical(t) ? jc[t].length : null;
	}
	static resolveNumericDomainFromConfig(t, n, r) {
		let i = n.domainSpec.type;
		if (i === Uc.USER) {
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
		let a = (ArrayBuffer.isView(t) ? Array.from(t) : t).filter((e) => Number.isFinite(e));
		if (a.length === 0) return e.isDiverging(r) ? [
			0,
			0,
			0
		] : [0, 0];
		if (i === Uc.PERCENTILE) {
			let [t, i] = n.domainSpec.params ?? [2, 98], o = e.computePercentile(a, t / 100), s = e.computePercentile(a, i / 100);
			return e.isDiverging(r) ? [
				o,
				e.computePercentile(a, 50 / 100),
				s
			] : [o, s];
		}
		let [o, s] = e.computeMinMaxRange(a);
		return e.isDiverging(r) ? [
			o,
			(o + s) / 2,
			s
		] : [o, s];
	}
	static resolveCategoricalDomainFromConfig(e, t) {
		return t.domainSpec.type === Uc.USER ? t.domainSpec.params.map((e) => String(e)) : Array.from(new Set(e.map((e) => String(e))));
	}
	static computeLabels(e) {
		if (typeof e[0] == "string") return e;
		let t = e, n = t.reduce((e, t) => Math.max(e, Math.abs(t)), 0), r = W(n >= 1e6 ? ".3s" : n >= 1 ? ",.2f" : ".3~g");
		return t.map((e) => r(e));
	}
	static resolveDomainFromData(t, n) {
		return e.isCategorical(n.interpolator) || n.domainSpec.type === Uc.USER && n.domainSpec.params.some((e) => typeof e == "string") || !ArrayBuffer.isView(t) && t.some((e) => typeof e == "string" && isNaN(Number(e))) ? e.resolveCategoricalDomainFromConfig(t, n) : e.resolveNumericDomainFromConfig(t, n, n.interpolator);
	}
	static buildInterpolator(t, n) {
		if (e.isCategorical(t)) {
			let e = jc[t], r = n?.length ?? e.length;
			return (t) => {
				let n = Math.min(Math.round(t * (r - 1)), e.length - 1);
				return e[n];
			};
		}
		return e.isDiverging(t) ? rs(jc[t]).domain(n ?? [
			0,
			.5,
			1
		]) : ts(jc[t]).domain(n ?? [0, 1]);
	}
	static computePercentile(e, t) {
		if (e.length === 0) return 0;
		let n = (ArrayBuffer.isView(e) ? new Float32Array(e) : [...e]).sort((e, t) => e - t), r = t * (n.length - 1), i = Math.floor(r), a = Math.ceil(r);
		return n[i] + (n[a] - n[i]) * (r - i);
	}
};
//#endregion
//#region ../autk-core/src/utils-geometry.ts
function qc(e, t) {
	let n = e.filter((t, n) => {
		if (n === 0) return !0;
		let r = e[n - 1];
		return t[0] !== r[0] || t[1] !== r[1];
	});
	if (n.length < 2 || t === 0) return [];
	let r = [], i = [];
	for (let e = 0; e < n.length; e++) {
		let a = e > 0 ? n[e - 1] : null, o = n[e], s = e < n.length - 1 ? n[e + 1] : null, c = a ? Jc(a, o) : null, l = s ? Jc(o, s) : null, u = Yc(a, o, s, c, l, t, 1), d = Yc(a, o, s, c, l, t, -1);
		r.push(u), i.push(d);
	}
	let a = [...r, ...i.reverse()];
	return a.length > 0 && a.push([a[0][0], a[0][1]]), a;
}
function Jc(e, t) {
	let n = t[0] - e[0], r = t[1] - e[1], i = Math.hypot(n, r);
	return i === 0 ? null : [-r / i, n / i];
}
function Yc(e, t, n, r, i, a, o) {
	if (!r && !i) return t;
	if (!e || !r) return [t[0] + i[0] * a * o, t[1] + i[1] * a * o];
	if (!n || !i) return [t[0] + r[0] * a * o, t[1] + r[1] * a * o];
	let s = Xc([e[0] + r[0] * a * o, e[1] + r[1] * a * o], [t[0] + r[0] * a * o, t[1] + r[1] * a * o], [t[0] + i[0] * a * o, t[1] + i[1] * a * o], [n[0] + i[0] * a * o, n[1] + i[1] * a * o]);
	if (s) return s;
	let c = r[0] + i[0], l = r[1] + i[1], u = Math.hypot(c, l);
	return u === 0 ? [t[0] + i[0] * a * o, t[1] + i[1] * a * o] : [t[0] + c / u * a * o, t[1] + l / u * a * o];
}
function Xc(e, t, n, r) {
	let i = e[0], a = e[1], o = t[0], s = t[1], c = n[0], l = n[1], u = r[0], d = r[1], f = (i - o) * (l - d) - (a - s) * (c - u);
	if (Math.abs(f) < 1e-9) return null;
	let p = i * s - a * o, m = c * d - l * u;
	return [(p * (c - u) - (i - o) * m) / f, (p * (l - d) - (a - s) * m) / f];
}
//#endregion
//#region ../node_modules/earcut/src/earcut.js
var Zc = /* @__PURE__ */ new Set(), Qc = !1;
function $c(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length;
	Zc.size && Zc.clear();
	let a = el(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s = 0, c = 0, l = 0;
	if (r && (a = cl(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return nl(a, o, s, c, l), o;
}
function el(e, t, n, r, i) {
	let a = null;
	if (i === Ul(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = Bl(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = Bl(i / r | 0, e[i], e[i + 1], a);
	return a && Nl(a, a.next) && (Vl(a), a = a.next), a;
}
function tl(e, t = e) {
	let n = t === e, r = e, i;
	do
		i = !1, r !== r.next && (Zc.size === 0 || !Zc.has(r)) && (Nl(r, r.next) || X(r.prev, r, r.next) === 0) ? ((n || r === t) && (t = r.prev), Qc = !0, Vl(r), r = r.prev, i = !0) : (n || r !== t) && (r = r.next, i = !n);
	while (i || r !== t);
	return t;
}
function nl(e, t, n, r, i) {
	i && El(e, n, r, i);
	let a = e, o = !1;
	for (; e.prev !== e.next;) {
		let s = e.prev, c = e.next;
		if (X(s, e, c) < 0 && (i ? il(e, n, r, i) : rl(e))) t.push(s.i, e.i, c.i), Vl(e), e = c, a = c;
		else if (e = c, e === a) {
			if (Qc = !1, e = tl(e), Qc) {
				a = e;
				continue;
			}
			if (!o) {
				e = al(e, t), a = e, o = !0;
				continue;
			}
			ol(e, t, n, r, i);
			break;
		}
	}
}
function rl(e) {
	let t = e.prev, n = e, r = e.next, i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && (i !== m.x || s !== m.y) && jl(i, s, a, c, o, l, m.x, m.y) && X(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function il(e, t, n, r) {
	let i = e.prev, a = e, o = e.next, s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = kl(p, m, t, n, r), v = kl(h, g, t, n, r), y = e.prevZ;
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== o && (s !== y.x || u !== y.y) && jl(s, u, c, d, l, f, y.x, y.y) && X(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	let b = e.nextZ;
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== o && (s !== b.x || u !== b.y) && jl(s, u, c, d, l, f, b.x, b.y) && X(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function al(e, t) {
	let n = e, r = !1;
	do {
		let i = n.prev, a = n.next.next;
		Pl(i, n, n.next, a, !1) && Ll(i, a) && Ll(a, i) && (t.push(i.i, n.i, a.i), Vl(n), Vl(n.next), n = e = a, r = !0), n = n.next;
	} while (n !== e);
	return r ? tl(n) : n;
}
function ol(e, t, n, r, i) {
	let a = e;
	do {
		let e = a.next.next;
		for (; e !== a.prev;) {
			if (a.i !== e.i && Ml(a, e)) {
				let o = zl(a, e);
				a = tl(a, a.next), o = tl(o, o.next), nl(a, t, n, r, i), nl(o, t, n, r, i);
				return;
			}
			e = e.next;
		}
		a = a.next;
	} while (a !== e);
}
var sl = !1;
function cl(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = el(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && Zc.add(o), i.push(Al(o));
	}
	i.sort(ll), hl(e.length / r, t.length), gl(n, n), sl = !0;
	for (let e = 0; e < i.length; e++) n = ul(i[e], n);
	return sl = !1, tl(n);
}
function ll(e, t) {
	return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
}
function ul(e, t) {
	let n = bl(e, t);
	if (!n) return t;
	let r = zl(n, e), i = r.next;
	return gl(n, i.next), tl(r, r.next), tl(n, n.next);
}
var dl = 16, J = /* @__PURE__ */ new Float64Array(), fl = 0, pl = [], ml = [];
function hl(e, t) {
	let n = Math.ceil((e + 2 * t) / dl) + t + 2;
	J.length < n * 4 && (J = new Float64Array(n * 4)), fl = 0;
}
function gl(e, t) {
	let n = e;
	do {
		let e = fl++;
		pl[e] = n;
		let r = n.x, i = n.y, a = n.x, o = n.y, s = 0;
		do {
			let t = n.next;
			n.z = e, t.x < r && (r = t.x), t.x > a && (a = t.x), t.y < i && (i = t.y), t.y > o && (o = t.y), n = t;
		} while (++s < dl && n !== t);
		ml[e] = n;
		let c = e * 4;
		J[c] = r, J[c + 1] = i, J[c + 2] = a, J[c + 3] = o;
	} while (n !== t);
}
function _l(e, t) {
	let n = e.z * 4;
	t.x < J[n] && (J[n] = t.x), t.y < J[n + 1] && (J[n + 1] = t.y), t.x > J[n + 2] && (J[n + 2] = t.x), t.y > J[n + 3] && (J[n + 3] = t.y);
}
function vl(e) {
	let t = ml[e];
	for (; t.prev.next !== t;) t = t.next;
	return ml[e] = t, t;
}
function yl(e) {
	let t = pl[e];
	for (; t.prev.next !== t;) t = t.next;
	return pl[e] = t, t;
}
function bl(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (Nl(e, n)) return n;
	for (let t = 0, s = 0; t < fl; t++, s += 4) {
		if (i < J[s + 1] || i > J[s + 3] || J[s] > r || J[s + 2] <= a) continue;
		let c = vl(t);
		n = yl(t);
		do {
			if (n.prev.next === n) {
				if (Nl(e, n.next)) return n.next;
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
	for (let t = 0, f = 0; t < fl; t++, f += 4) {
		if (J[f + 2] < s || J[f] > r || J[f + 3] < l || J[f + 1] > u) continue;
		let p = vl(t);
		n = yl(t);
		do {
			if (n.prev.next === n && r >= n.x && n.x >= s && r !== n.x && jl(i < c ? r : a, i, s, c, i < c ? a : r, i, n.x, n.y)) {
				let t = Math.abs(i - n.y) / (r - n.x);
				(Ll(n, e) || n.y === i && n.next.y === i && n.next.x > r) && (t < d || t === d && (n.x > o.x || n.x === o.x && xl(o, n))) && (o = n, d = t);
			}
			n = n.next;
		} while (n !== p);
	}
	return o;
}
function xl(e, t) {
	return X(e.prev, e, t.prev) < 0 && X(t.next, e, e.next) < 0;
}
var Y = [], Sl = [], Cl = /* @__PURE__ */ new Uint32Array(), wl = /* @__PURE__ */ new Uint32Array(), Tl = /* @__PURE__ */ new Uint32Array(256);
function El(e, t, n, r) {
	let i = e, a = 0;
	do
		i.z = kl(i.x, i.y, t, n, r), Y[a++] = i, i = i.next;
	while (i !== e);
	Dl(a);
	let o = null;
	for (let e = 0; e < a; e++) {
		let t = Y[e];
		t.prevZ = o, o && (o.nextZ = t), o = t;
	}
	o.nextZ = null, Y.fill(null, 0, a), Sl.fill(null, 0, a);
}
function Dl(e) {
	if (e <= 32) for (let t = 1; t < e; t++) {
		let e = Y[t], n = e.z, r = t - 1;
		for (; r >= 0 && Y[r].z > n;) Y[r + 1] = Y[r], r--;
		Y[r + 1] = e;
	}
	else {
		Cl.length < e && (Cl = new Uint32Array(e), wl = new Uint32Array(e), Sl = Array(e));
		for (let t = 0; t < e; t++) Cl[t] = Y[t].z;
		Ol(e, Y, Cl, Sl, wl, 0), Ol(e, Sl, wl, Y, Cl, 8), Ol(e, Y, Cl, Sl, wl, 16), Ol(e, Sl, wl, Y, Cl, 24);
	}
}
function Ol(e, t, n, r, i, a) {
	Tl.fill(0);
	for (let t = 0; t < e; t++) Tl[n[t] >>> a & 255]++;
	let o = 0;
	for (let e = 0; e < 256; e++) {
		let t = Tl[e];
		Tl[e] = o, o += t;
	}
	for (let o = 0; o < e; o++) {
		let e = n[o], s = Tl[e >>> a & 255]++;
		r[s] = t[o], i[s] = e;
	}
}
function kl(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Al(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function jl(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function Ml(e, t) {
	let n = Nl(e, t) && X(e.prev, e, e.next) > 0 && X(t.prev, t, t.next) > 0;
	return e.next.i !== t.i && (n || Ll(e, t) && Ll(t, e) && (X(e.prev, e, t.prev) !== 0 || X(e, t.prev, t) !== 0)) && !Il(e, t) && (n || Rl(e, t));
}
function X(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Nl(e, t) {
	return e.x === t.x && e.y === t.y;
}
function Pl(e, t, n, r, i = !0) {
	let a = X(e, t, n), o = X(e, t, r), s = X(n, r, e), c = X(n, r, t);
	return (a > 0 && o < 0 || a < 0 && o > 0) && (s > 0 && c < 0 || s < 0 && c > 0) ? !0 : i ? !!(a === 0 && Fl(e, n, t) || o === 0 && Fl(e, r, t) || s === 0 && Fl(n, e, r) || c === 0 && Fl(n, t, r)) : !1;
}
function Fl(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function Il(e, t) {
	let n = Math.min(e.x, t.x), r = Math.max(e.x, t.x), i = Math.min(e.y, t.y), a = Math.max(e.y, t.y), o = e;
	do {
		let s = o.next;
		if (o.x > r && s.x > r || o.x < n && s.x < n || o.y > a && s.y > a || o.y < i && s.y < i) o = s;
		else {
			if (o.i !== e.i && s.i !== e.i && o.i !== t.i && s.i !== t.i && Pl(o, s, e, t)) return !0;
			o = s;
		}
	} while (o !== e);
	return !1;
}
function Ll(e, t) {
	return X(e.prev, e, e.next) < 0 ? X(e, t, e.next) >= 0 && X(e, e.prev, t) >= 0 : X(e, t, e.prev) < 0 || X(e, e.next, t) < 0;
}
function Rl(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do {
		let e = n.next;
		n.y > a != e.y > a && i < (e.x - n.x) * (a - n.y) / (e.y - n.y) + n.x && (r = !r), n = e;
	} while (n !== e);
	return r;
}
function zl(e, t) {
	let n = Hl(e.i, e.x, e.y), r = Hl(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function Bl(e, t, n, r) {
	let i = Hl(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function Vl(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), sl && _l(e.prev, e.next);
}
function Hl(e, t, n) {
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
function Ul(e, t, n, r) {
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
		let r = qc(e.geometry.coordinates.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
		if (r.length < 4) return [];
		let i = $c(r.flat());
		return [{
			flatCoords: r.map((e) => [e[0], e[1]]).flat(),
			flatIds: i
		}];
	}
	static multiLineStringToPolyline(e, t, n) {
		let { coordinates: r } = e.geometry, i = [];
		for (let e of r) {
			let r = qc(e.map((e) => [e[0] - t[0], e[1] - t[1]]), n);
			if (r.length < 4) continue;
			let a = $c(r.flat()), o = r.map((e) => [e[0], e[1]]).flat();
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
//#region ../autk-core/src/utils-data.ts
function Z(e, t) {
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
var Wl = typeof Float32Array < "u" ? Float32Array : Array;
//#endregion
//#region ../node_modules/gl-matrix/esm/mat4.js
function Gl() {
	var e = new Wl(16);
	return Wl != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function Kl(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function ql(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = n[0], b = n[1], x = n[2], S = n[3];
	return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e;
}
function Jl(e, t, n, r, i) {
	var a = 1 / Math.tan(t / 2);
	if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
		var o = 1 / (r - i);
		e[10] = i * o, e[14] = i * r * o;
	} else e[10] = -1, e[14] = -r;
	return e;
}
function Yl(e, t, n, r, i, a, o) {
	var s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
	return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = a * l, e[15] = 1, e;
}
function Xl(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p, m = t[0], h = t[1], g = t[2], _ = r[0], v = r[1], y = r[2], b = n[0], x = n[1], S = n[2];
	return Math.abs(m - b) < 1e-6 && Math.abs(h - x) < 1e-6 && Math.abs(g - S) < 1e-6 ? Kl(e) : (u = m - b, d = h - x, f = g - S, p = 1 / Math.sqrt(u * u + d * d + f * f), u *= p, d *= p, f *= p, i = v * f - y * d, a = y * u - _ * f, o = _ * d - v * u, p = Math.sqrt(i * i + a * a + o * o), p ? (p = 1 / p, i *= p, a *= p, o *= p) : (i = 0, a = 0, o = 0), s = d * o - f * a, c = f * i - u * o, l = u * a - d * i, p = Math.sqrt(s * s + c * c + l * l), p ? (p = 1 / p, s *= p, c *= p, l *= p) : (s = 0, c = 0, l = 0), e[0] = i, e[1] = s, e[2] = u, e[3] = 0, e[4] = a, e[5] = c, e[6] = d, e[7] = 0, e[8] = o, e[9] = l, e[10] = f, e[11] = 0, e[12] = -(i * m + a * h + o * g), e[13] = -(s * m + c * h + l * g), e[14] = -(u * m + d * h + f * g), e[15] = 1, e);
}
var Zl = ql;
//#endregion
//#region ../node_modules/gl-matrix/esm/vec3.js
function Q() {
	var e = new Wl(3);
	return Wl != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function Ql(e) {
	var t = e[0], n = e[1], r = e[2];
	return Math.sqrt(t * t + n * n + r * r);
}
function $l(e, t, n) {
	var r = new Wl(3);
	return r[0] = e, r[1] = t, r[2] = n, r;
}
function eu(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e;
}
function tu(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e;
}
function nu(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function ru(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e;
}
function iu(e, t) {
	var n = t[0], r = t[1], i = t[2], a = n * n + r * r + i * i;
	return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e;
}
function au(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2];
	return e[0] = i * c - a * s, e[1] = a * o - r * c, e[2] = r * s - i * o, e;
}
function ou(e, t, n, r) {
	var i = [], a = [];
	return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), a[2] = i[2], e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e;
}
var su = tu;
(function() {
	var e = Q();
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
		this.wEye = Q(), this.wLookAt = Q(), this.wEyeDir = Q(), this.wUp = Q(), this.wNear = 0, this.wFar = 0, this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = Gl(), this.mViewMatrix = Gl(), this.viewportWidth = 0, this.viewportHeight = 0, this.resetCamera(t.up, t.lookAt, t.eye);
	}
	resetCamera(e, t, n) {
		this.fovy = 45 * Math.PI / 180, this.mProjectionMatrix = Gl(), this.mViewMatrix = Gl(), this.wNear = 1, this.wFar = 5e5, this.wLookAt = $l(t[0], t[1], t[2]), this.wEye = $l(n[0], n[1], n[2]), this.updateEyeDirAndLen(), this.wUp = $l(e[0], e[1], e[2]);
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
		return new Float32Array(Zl(Gl(), this.mProjectionMatrix, this.mViewMatrix));
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
		Kl(this.mViewMatrix), Yl(this.mProjectionMatrix, e, t, n, r, 0, -100), this.wEye = $l((e + t) * .5, (n + r) * .5, 100), this.wLookAt = $l((e + t) * .5, (n + r) * .5, 0), this.wUp = $l(0, 1, 0), this.updateEyeDirAndLen();
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
		ru(this.wEye, this.wEye, i, e), ru(this.wLookAt, this.wEye, this.wEyeDir, Ql(this.wEyeDir));
	}
	translate(e, t) {
		let n = this.wEye[2], r = Q();
		iu(r, au(r, this.wEyeDir, this.wUp));
		let i = eu(Q(), nu(Q(), r, e * n), nu(Q(), this.wUp, t * n));
		eu(this.wEye, this.wEye, i), ru(this.wLookAt, this.wEye, this.wEyeDir, Ql(this.wEyeDir));
	}
	yaw(e) {
		ou(this.wEyeDir, this.wEyeDir, $l(0, 0, 0), e), ou(this.wUp, this.wUp, $l(0, 0, 0), e), ru(this.wLookAt, this.wEye, this.wEyeDir, Ql(this.wEyeDir));
	}
	pitch(e) {
		e = -e, eu(this.wEyeDir, nu(Q(), this.wUp, Math.sin(e)), nu(Q(), this.wEyeDir, Math.cos(e))), iu(this.wEyeDir, this.wEyeDir), ru(this.wLookAt, this.wEye, this.wEyeDir, Ql(this.wEyeDir)), au(this.wUp, au(Q(), this.wEyeDir, this.wUp), this.wEyeDir), iu(this.wUp, this.wUp);
	}
	getZoomScale() {
		return Math.max(Math.abs(this.wEye[2]), 1) / 1e4;
	}
	update() {
		let e = this.viewportWidth / this.viewportHeight;
		Xl(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp), Jl(this.mProjectionMatrix, this.fovy, e, this.wFar, this.wNear);
	}
	static buildViewProjection(e) {
		let t = Xl(Gl(), e.eye, e.lookAt, e.up), n = Jl(Gl(), e.fovDeg * (Math.PI / 180), e.aspect, e.near, e.far);
		return new Float32Array(Zl(Gl(), n, t));
	}
	screenCoordToWorldDir(e, t) {
		let n = Q();
		iu(n, au(n, this.wEyeDir, this.wUp));
		let r = nu(Q(), this.wUp, Math.tan(this.fovy / 2) * (t - .5) * 2), i = this.viewportWidth / this.viewportHeight, a = nu(Q(), n, Math.tan(this.fovy / 2) * (e - .5) * 2 * i), o = eu(Q(), r, a), s = eu(Q(), this.wEyeDir, o);
		return iu(s, s), s;
	}
	updateEyeDirAndLen() {
		this.wEyeDir = Q(), su(this.wEyeDir, this.wLookAt, this.wEye), iu(this.wEyeDir, this.wEyeDir);
	}
};
//#endregion
//#region ../autk-core/src/event-emitter.ts
var cu = class {
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
}, lu = class e {
	static _default = "#bfbfbf";
	static _highlight = "#5dade2";
	static get default() {
		return e._default;
	}
	static get highlight() {
		return e._highlight;
	}
	static setHighlightColor(t) {
		e._highlight = t;
	}
	static setDefaultColor(t) {
		e._default = t;
	}
}, $ = /* @__PURE__ */ function(e) {
	return e.CLICK = "click", e.BRUSH = "brush", e.BRUSH_Y = "brushY", e.BRUSH_X = "brushX", e;
}({});
//#endregion
//#region src/transforms/kernel.ts
function uu(e) {
	let { rows: t, bucketOf: n, valueOf: r, reducer: i } = e, a = /* @__PURE__ */ new Map();
	return t.forEach((e, t) => {
		let i = n(e);
		if (!i) return;
		let o = Array.isArray(e.autkIds) ? e.autkIds.filter((e) => typeof e == "number" && Number.isFinite(e)) : [], s = o.length > 0 ? o : [t], c = a.get(i);
		c || (c = {
			count: 0,
			sum: 0,
			min: Infinity,
			max: -Infinity,
			autkIds: /* @__PURE__ */ new Set()
		}, a.set(i, c));
		let l = r ? r(e) : 1;
		l !== null && Number.isFinite(l) && (c.count += 1, c.sum += l, c.min = Math.min(c.min, l), c.max = Math.max(c.max, l), s.forEach((e) => c.autkIds.add(e)));
	}), Array.from(a.entries()).map(([e, t]) => {
		let n;
		return n = i === "count" ? t.count : i === "sum" ? t.sum : i === "avg" ? t.count > 0 ? t.sum / t.count : 0 : i === "min" ? t.count > 0 ? t.min : 0 : t.count > 0 ? t.max : 0, {
			key: e,
			value: n,
			count: t.count,
			autkIds: Array.from(t.autkIds)
		};
	}).filter((e) => e.count > 0);
}
//#endregion
//#region src/transforms/presets/binning-1d.ts
function du(e, t, n) {
	let r = n[0] ?? "", i = t.options?.reducer ?? "count", a = fu(e, r, t.options?.bins ?? 10);
	return {
		preset: "binning-1d",
		rows: uu({
			rows: e,
			bucketOf: (e) => a.label(Z(e, r)),
			valueOf: i === "count" ? void 0 : (e) => {
				let n = t.options?.value ?? r, i = Number(Z(e, n));
				return Number.isFinite(i) ? i : null;
			},
			reducer: i
		}).map((e) => ({
			label: e.key,
			order: a.order(e.key),
			value: e.value,
			count: e.count,
			autkIds: e.autkIds
		})).sort((e, t) => e.order - t.order)
	};
}
function fu(e, t, n) {
	let r = e.map((e) => e ? Z(e, t) : null).filter((e) => e != null), i = (e) => {
		if (typeof e == "number") return Number.isFinite(e);
		if (typeof e != "string") return !1;
		let t = e.trim();
		return t.length > 0 && Number.isFinite(Number(t));
	};
	if (r.some((e) => typeof e == "number" && !Number.isFinite(e) || typeof e == "string" && !i(e) || typeof e != "number" && typeof e != "string")) {
		let e = /* @__PURE__ */ new Map(), t = (t) => (e.has(t) || e.set(t, e.size), e.get(t));
		return {
			label: (e) => {
				let n = String(e ?? "");
				return t(n), n;
			},
			order: (e) => t(e)
		};
	}
	let a = r.map(Number).filter(Number.isFinite);
	if (a.length === 0) return {
		label: (e) => String(e ?? ""),
		order: () => 0
	};
	let o = Math.min(...a), s = Math.max(...a), c = s - o, l = c === 0 ? 1 : c / n, u = Math.round(o), d = (Math.max(u + 1, Math.round(s)) - u) / n, f = W(".2s"), p = /* @__PURE__ */ new Map();
	for (let e = 0; e < n; e++) {
		let t = `${f(u + Math.round(e * d))}-${f(u + Math.round((e + 1) * d))}`;
		p.has(t) || p.set(t, e);
	}
	return c === 0 && p.set(f(u), 0), {
		label: (e) => {
			let t = Number(e);
			if (!Number.isFinite(t)) return "unknown";
			let r = c === 0 ? 0 : (t - o) / l, i = Math.max(0, Math.min(Math.floor(r), n - 1));
			return c === 0 ? f(u) : `${f(u + Math.round(i * d))}-${f(u + Math.round((i + 1) * d))}`;
		},
		order: (e) => p.get(e) ?? 0
	};
}
//#endregion
//#region src/transforms/presets/binning-2d.ts
function pu(e, t, n) {
	let r = n[0] ?? "", i = n[1] ?? "", a = t.options?.value, o = t.options?.reducer ?? "count", s = t.options?.binsX ?? 10, c = t.options?.binsY ?? 10, l = fu(e, r, s), u = fu(e, i, c);
	return {
		preset: "binning-2d",
		rows: uu({
			rows: e,
			bucketOf: (e) => `${l.label(Z(e, r))} ${u.label(Z(e, i))}`,
			valueOf: o === "count" || !a ? void 0 : (e) => {
				let t = Number(Z(e, a));
				return Number.isFinite(t) ? t : null;
			},
			reducer: o
		}).map((e) => {
			let t = e.key.indexOf("\0"), n = e.key.slice(0, t), r = e.key.slice(t + 1);
			return {
				x: n,
				y: r,
				xOrder: l.order(n),
				yOrder: u.order(r),
				value: e.value,
				count: e.count,
				autkIds: e.autkIds
			};
		})
	};
}
//#endregion
//#region src/transforms/presets/sort.ts
function mu(e, t, n) {
	let r = t.options?.column ?? n[0] ?? "", i = t.options?.direction ?? "asc";
	return {
		preset: "sort",
		rows: [...e].sort((e, t) => {
			let n = e ? Z(e, r) : null, a = t ? Z(t, r) : null;
			if (n == null) return 1;
			if (a == null) return -1;
			let o = Number(n), s = Number(a);
			return !isNaN(o) && !isNaN(s) ? i === "asc" ? o - s : s - o : i === "asc" ? String(n).localeCompare(String(a)) : String(a).localeCompare(String(n));
		})
	};
}
//#endregion
//#region src/transforms/presets/binning-events.ts
function hu(e, t, n) {
	let r = n[0] ?? "", i = t.options?.timestamp ?? "timestamp", a = t.options?.value ?? "value", o = t.options?.resolution ?? "month", s = t.options?.reducer ?? "count", c = [];
	return e.forEach((e, t) => {
		let n = Array.isArray(e?.autkIds) ? e.autkIds : [], l = n.length > 0 ? n : [t], u = Z(e, r);
		Array.isArray(u) && u.forEach((e) => {
			if (!e || typeof e != "object") return;
			let t = Z(e, i);
			if (t == null) return;
			let n = typeof t == "string" ? t.replace(" ", "T") : t, r = n instanceof Date ? n : new Date(n);
			if (!Number.isFinite(r.getTime())) return;
			let u = null;
			if (s !== "count") {
				let t = Number(Z(e, a));
				u = Number.isFinite(t) ? t : null;
			}
			c.push({
				autkIds: l,
				__bucket: gu(r, o),
				__value: u
			});
		});
	}), {
		preset: "binning-events",
		rows: uu({
			rows: c,
			bucketOf: (e) => String(e.__bucket ?? ""),
			valueOf: s === "count" ? void 0 : (e) => {
				let t = e.__value;
				return typeof t == "number" && Number.isFinite(t) ? t : null;
			},
			reducer: s
		}).map((e) => ({
			bucket: e.key,
			value: e.value,
			count: e.count,
			autkIds: e.autkIds
		}))
	};
}
function gu(e, t) {
	let n = (e) => String(e).padStart(2, "0");
	return t === "hour" ? `${e.getUTCFullYear()}-${n(e.getUTCMonth() + 1)}-${n(e.getUTCDate())} ${n(e.getUTCHours())}:00` : t === "day" ? `${e.getUTCFullYear()}-${n(e.getUTCMonth() + 1)}-${n(e.getUTCDate())}` : t === "weekday" ? String(e.getUTCDay()) : t === "monthday" ? n(e.getUTCDate()) : t === "month" ? `${e.getUTCFullYear()}-${n(e.getUTCMonth() + 1)}` : String(e.getUTCFullYear());
}
//#endregion
//#region src/transforms/presets/reduce-series.ts
function _u(e, t, n) {
	let r = n[0] ?? "", i = t.options?.timestamp ?? "timestamp", a = t.options?.value ?? "value", o = t.options?.reducer ?? "avg", s = [];
	return e.forEach((e, t) => {
		let n = Array.isArray(e?.autkIds) ? e.autkIds : [], o = n.length > 0 ? n : [t], c = Z(e, r);
		Array.isArray(c) && c.forEach((e, t) => {
			if (typeof e == "number" && Number.isFinite(e)) {
				s.push({
					autkIds: o,
					__bucket: String(t),
					__value: e
				});
				return;
			}
			if (!e || typeof e != "object") return;
			let n = Z(e, i);
			if (n == null) return;
			let r = typeof n == "string" ? n.replace(" ", "T") : n, c = r instanceof Date ? r : new Date(r);
			if (!Number.isFinite(c.getTime())) return;
			let l = typeof r == "string" ? r : String(n), u = Number(Z(e, a));
			Number.isFinite(u) && s.push({
				autkIds: o,
				__bucket: l,
				__value: u
			});
		});
	}), {
		preset: "reduce-series",
		rows: uu({
			rows: s,
			bucketOf: (e) => String(e.__bucket ?? ""),
			valueOf: (e) => {
				let t = e.__value;
				return typeof t == "number" && Number.isFinite(t) ? t : null;
			},
			reducer: o
		}).map((e) => ({
			bucket: e.key,
			value: e.value,
			count: e.count,
			autkIds: e.autkIds
		}))
	};
}
//#endregion
//#region src/transforms/index.ts
function vu(e, t, n) {
	return t.preset === "binning-1d" ? du(e, t, n) : t.preset === "binning-2d" ? pu(e, t, n) : t.preset === "sort" ? mu(e, t, n) : t.preset === "binning-events" ? hu(e, t, n) : _u(e, t, n);
}
//#endregion
//#region src/plot-base-data.ts
var yu = class {
	_div;
	_sourceFeatures;
	_data;
	_sourceAxisAttributes;
	_transformAttributes = void 0;
	_axisLabels;
	_sourceColorAttribute = void 0;
	_transformColorAttribute = void 0;
	_title;
	_tickFormats;
	_width = 800;
	_height = 500;
	_margins;
	_resolvedDomain = void 0;
	_transformConfig;
	_domainSpec = void 0;
	_colorMapInterpolator = q.SEQ_REDS;
	_categoricalColorMapInterpolator = q.CAT_OBSERVABLE10;
	constructor(e) {
		this._div = e.div, this._sourceFeatures = e.collection.features, this._data = this._sourceFeatures.map((e, t) => ({
			...e.properties ?? {},
			autkIds: [t]
		}));
		let t = [...e.attributes?.axis ?? [], e.attributes?.color].includes("@transform");
		if (e.transform?.preset === "sort" && t) throw Error("PlotBaseData: '@transform' cannot be used with the 'sort' preset.");
		let n = e.attributes?.axis;
		if (!n || n.length === 0) throw Error("PlotBaseData: attributes.axis must contain at least one attribute.");
		let r = e.labels?.axis ?? [];
		this.validateSourceAttributeBindings(n, e.attributes?.color, e.transform), this._axisLabels = r.length > 0 ? r : [...n], this._sourceAxisAttributes = [...n], this._sourceColorAttribute = e.attributes?.color, this._title = e.labels?.title || "Autk Plot", this._tickFormats = e.tickFormats ?? ["", ""], this._width = e.width || 800, this._height = e.height || 500, this._margins = e.margins || {
			left: 40,
			right: 20,
			top: 80,
			bottom: 50
		}, this._domainSpec = e.domainSpec, this._colorMapInterpolator = e.colorMapInterpolator ?? q.SEQ_REDS, this._categoricalColorMapInterpolator = e.categoricalColorMapInterpolator ?? q.CAT_OBSERVABLE10, this._transformConfig = e.transform;
	}
	draw() {
		this._data = this.buildSourceRows(), this._transformAttributes = void 0, this._transformColorAttribute = void 0, this.applyConfiguredTransform(), this.afterDataRefresh(), this.validateRenderedAttributeBindings(), this.computeColorDomain(), this.render();
	}
	applyConfiguredTransform() {
		if (!this._transformConfig) return;
		let e = this._sourceAxisAttributes.filter((e) => e !== "@transform"), t = vu(this._data, this._transformConfig, e), n = this.resolveTransformResult(t);
		this._data = n.rows, this._transformAttributes = n.axisAttributes, this._transformColorAttribute = n.colorAttribute;
	}
	validateSourceAttributeBindings(e, t, n) {
		let r = [...e.map((e, t) => ({
			attribute: e,
			channel: `attributes.axis[${t}]`
		})), ...t ? [{
			attribute: t,
			channel: "attributes.color"
		}] : []];
		for (let { attribute: e, channel: t } of r) if (e === "@transform") {
			if (!n) throw Error(`PlotBaseData: ${t} cannot be "@transform" without a transform configuration.`);
		} else if (!this.hasAttribute(this._data, e)) throw Error(`PlotBaseData: ${t} "${e}" does not exist in the source data.`);
	}
	validateRenderedAttributeBindings() {
		for (let [e, t] of this.renderAxisAttributes.entries()) if (!this.hasAttribute(this._data, t)) throw Error(`PlotBaseData: attributes.axis[${e}] "${t}" does not exist in the rendered data.`);
		let e = this.renderColorAttribute;
		if (e && !this.hasAttribute(this._data, e)) throw Error(`PlotBaseData: attributes.color "${e}" does not exist in the rendered data.`);
	}
	hasAttribute(e, t) {
		return e.length === 0 || e.some((e) => Z(e, t) !== void 0);
	}
	buildSourceRows() {
		return this._sourceFeatures.map((e, t) => ({
			...e.properties ?? {},
			autkIds: [t]
		}));
	}
	afterDataRefresh() {}
	resolveTransformResult(e) {
		switch (e.preset) {
			case "binning-1d": return {
				rows: e.rows,
				axisAttributes: ["label", "value"]
			};
			case "binning-2d": return {
				rows: e.rows,
				axisAttributes: ["x", "y"],
				colorAttribute: "value"
			};
			case "sort": return { rows: e.rows };
			case "binning-events":
			case "reduce-series": return {
				rows: e.rows,
				axisAttributes: ["bucket", "value"]
			};
		}
	}
	get renderAxisAttributes() {
		return this._transformAttributes ?? this._sourceAxisAttributes;
	}
	get renderColorAttribute() {
		if (this._transformColorAttribute !== null) return this._transformColorAttribute ?? this._sourceColorAttribute;
	}
	setRenderColorAttribute(e) {
		this._transformAttributes ? this._transformColorAttribute = e ?? null : this._sourceColorAttribute = e;
	}
	computeColorDomain() {
		this._resolvedDomain = void 0;
		let e = this.renderColorAttribute;
		if (!e) return;
		let t = this._data.filter((e) => e != null).map((t) => Z(t, e)).filter((e) => e != null && !(typeof e == "number" && !Number.isFinite(e)));
		if (t.length === 0) return;
		let n = t.some((e) => typeof e == "string" && isNaN(Number(e))) ? this._categoricalColorMapInterpolator : this._colorMapInterpolator;
		this._resolvedDomain = Kc.resolveDomainFromData(t, {
			interpolator: n,
			domainSpec: this._domainSpec ?? { type: Uc.MIN_MAX }
		});
	}
}, bu = class extends yu {
	_enabledEvents = [];
	_colorProperty = "fill";
	_selectedMarkDatums = /* @__PURE__ */ new Set();
	_selectedFeatureIds = /* @__PURE__ */ new Set();
	_selectionOrigin = null;
	_selectionProjection = "bijective";
	_plotEvents;
	_activeBrushes = /* @__PURE__ */ new Map();
	_brushBehaviors = /* @__PURE__ */ new Map();
	_suppressBrushEvents = !1;
	_MODE = "and";
	constructor(e) {
		super(e), this._plotEvents = new cu(), this._enabledEvents = e.events ?? [], this._selectionProjection = this.resolveSelectionProjection(e.transform);
	}
	get selection() {
		return Array.from(this._selectedFeatureIds);
	}
	get events() {
		return this._plotEvents;
	}
	updateCollection(e) {
		this._sourceFeatures = e.features, this._selectedMarkDatums = /* @__PURE__ */ new Set(), this._selectedFeatureIds = /* @__PURE__ */ new Set(), this._selectionOrigin = null, this._activeBrushes.clear(), this.clearBrushVisuals(), this._brushBehaviors.clear(), this.draw();
	}
	setSelection(e) {
		this._selectedFeatureIds = new Set(e), this._selectionOrigin = e.length > 0 ? "external" : null, this.syncSelectedMarksFromFeatures(), e.length === 0 && (this._activeBrushes.clear(), this.clearBrushVisuals()), this.renderSelection();
	}
	afterDataRefresh() {
		this.restoreLocalSelectionAfterDraw();
	}
	configureSignalListeners() {
		this.configureTouchInteractionStyles();
		for (let e of this._enabledEvents) e === $.CLICK ? this.clickEvent() : e === $.BRUSH ? this.brushEvent() : e === $.BRUSH_X ? this.brushXEvent() : e === $.BRUSH_Y && this.brushYEvent();
	}
	configureTouchInteractionStyles() {
		let e = F(this._div);
		e.selectAll("svg").style("touch-action", "none"), e.selectAll(".autkBrush, .autkMarksGroup").style("touch-action", "none"), e.selectAll(".autkClear").style("touch-action", "none");
	}
	getMarkColor(e) {
		let t = e;
		if (this.isMarkHighlighted(e)) return lu.highlight;
		let n = this.renderColorAttribute;
		if (!n || !this._resolvedDomain) return lu.default;
		if (typeof this._resolvedDomain[0] == "string") {
			let e = this._resolvedDomain, r = Z(t, n);
			if (r == null) return lu.default;
			let i = String(r), a = e.indexOf(i);
			if (a < 0) return lu.default;
			let o = e.length <= 1 ? .5 : Math.max(0, a) / (e.length - 1), s = this._categoricalColorMapInterpolator ?? q.CAT_OBSERVABLE10, { r: c, g: l, b: u } = Kc.getColor(o, s, e);
			return `rgb(${c},${l},${u})`;
		}
		let r = Z(t, n), i = Number(r);
		if (r == null || !Number.isFinite(i)) return lu.default;
		let a = this._resolvedDomain, o = this._colorMapInterpolator ?? q.SEQ_REDS, { r: s, g: c, b: l } = Kc.getColor(i, o, a);
		return `rgb(${s},${c},${l})`;
	}
	isMarkHighlighted(e) {
		if (typeof e != "object" || !e) return !1;
		let t = e;
		return this._selectionProjection === "aggregated" ? this._selectionOrigin === "local" ? this._selectedMarkDatums.has(e) : this._selectionOrigin === "external" && (t.autkIds ?? []).some((e) => this._selectedFeatureIds.has(e)) : this._selectedMarkDatums.has(e) ? !0 : this._selectedFeatureIds.size > 0 && (t.autkIds ?? []).some((e) => this._selectedFeatureIds.has(e));
	}
	clickEvent() {
		let e = F(this._div).selectAll(".autkMark"), t = F(this._div).selectAll(".autkClear"), n = this;
		e.each(function(e) {
			F(this).on("click", function() {
				typeof e == "object" && e && (n._selectedMarkDatums.has(e) ? n._selectedMarkDatums.delete(e) : n._selectedMarkDatums.add(e), n.syncSelectedFeaturesFromMarks(), n._selectionOrigin = n._selectedFeatureIds.size > 0 ? "local" : null, n.renderSelection(), n.events.emit($.CLICK, { selection: n.selection }));
			});
		}), t.on("click", function() {
			n._selectedMarkDatums = /* @__PURE__ */ new Set(), n._selectedFeatureIds = /* @__PURE__ */ new Set(), n._selectionOrigin = null, n.renderSelection(), n.events.emit($.CLICK, { selection: [] });
		});
	}
	brushEvent() {
		let e = F(this._div).selectAll(".autkBrush"), t = this;
		e.each(function(e, n) {
			let r = F(this), i = r.attr("autkBrushId"), a = i && i.length > 0 ? i : String(n), o = $a().extent([[0, 0], [t._width - t._margins.left - t._margins.right, t._height - t._margins.top - t._margins.bottom]]).on("start brush end", function(e) {
				if (!t._suppressBrushEvents) {
					if (e.selection) {
						let [n, r] = e.selection[0], [i, o] = e.selection[1];
						t._activeBrushes.set(a, [
							n,
							r,
							i,
							o
						]), t.resolveSelectionFromRects(t._activeBrushes), t.renderSelection(), t.events.emit($.BRUSH, { selection: t.selection });
					} else t._activeBrushes.delete(a), t.commitBrushSelection($.BRUSH, t._activeBrushes);
				}
			});
			t._brushBehaviors.set(a, o), r.call(o);
		});
	}
	brushXEvent() {
		let e = F(this._div).selectAll(".autkBrush"), t = this, n = e.size() > 1 ? [[-10, 0], [10, t._height - t._margins.top - t._margins.bottom]] : [[0, 0], [t._width - t._margins.left - t._margins.right, t._height - t._margins.top - t._margins.bottom]];
		e.each(function(e, r) {
			let i = F(this), a = i.attr("autkBrushId"), o = a && a.length > 0 ? a : String(r), s = Za().extent(n).on("start brush end", function(e) {
				if (!t._suppressBrushEvents) {
					if (e.selection) {
						let n = e.selection[0], r = e.selection[1], i = t._height;
						t._activeBrushes.set(o, [
							n,
							-10,
							r,
							i
						]), t.resolveSelectionFromRects(t._activeBrushes), t.renderSelection(), t.events.emit($.BRUSH_X, { selection: t.selection });
					} else t._activeBrushes.delete(o), t.commitBrushSelection($.BRUSH_X, t._activeBrushes);
				}
			});
			t._brushBehaviors.set(o, s), i.call(s);
		});
	}
	brushYEvent() {
		let e = F(this._div).selectAll(".autkBrush"), t = F(this._div).select(".autkMarksGroup"), n = this, r = e.size() > 1 ? [[-10, 0], [10, n._height - n._margins.top - n._margins.bottom]] : [[0, 0], [n._width - n._margins.left - n._margins.right, n._height - n._margins.top - n._margins.bottom]];
		e.each(function(e, i) {
			let a = F(this), o = a.attr("autkBrushId"), s = o && o.length > 0 ? o : String(i), c = Qa().extent(r).on("start brush end", function(e) {
				if (!n._suppressBrushEvents) {
					if (e.selection) {
						let r = a.attr("transform"), i = t.attr("transform"), o = (e) => {
							let t = e?.match(/translate\(([-\d.]+),\s*([-\d.]+)\)/);
							return [t ? parseFloat(t[1]) : 0, t ? parseFloat(t[2]) : 0];
						}, [c, l] = o(r), [u, d] = o(i), f = c - u, p = l - d, m = f - 10, h = e.selection[0] + p, g = f + 10, _ = e.selection[1] + p;
						n._activeBrushes.set(s, [
							m,
							h,
							g,
							_
						]), n.resolveSelectionFromRects(n._activeBrushes), n.renderSelection(), n.events.emit($.BRUSH_Y, { selection: n.selection });
					} else n._activeBrushes.delete(s), n.commitBrushSelection($.BRUSH_Y, n._activeBrushes);
				}
			});
			n._brushBehaviors.set(s, c), a.call(c);
		});
	}
	renderSelection() {
		let e = F(this._div).selectAll(".autkMark");
		this.applyMarkStyles(e), this.onSelectionUpdated();
	}
	applyMarkStyles(e) {
		e.style(this._colorProperty, (e) => this.getMarkColor(e));
	}
	onSelectionUpdated() {}
	resolveSelectionFromRects(e) {
		let t = Array.from(e.values());
		if (t.length === 0) return [];
		let n = F(this._div).select(".autkMarksGroup");
		return this._selectedMarkDatums = /* @__PURE__ */ new Set(), n.selectAll(".autkMark").each((e, n, r) => {
			let i = r[n];
			if (!i) return;
			let a = t.map(([e, t, n, r]) => this.markIntersectsRect(i, e, t, n, r));
			(this._MODE === "and" ? a.every(Boolean) : a.some(Boolean)) && typeof e == "object" && e && this._selectedMarkDatums.add(e);
		}), this.syncSelectedFeaturesFromMarks(), this._selectionOrigin = this._selectedFeatureIds.size > 0 ? "local" : null, this.selection;
	}
	markIntersectsRect(e, t, n, r, i) {
		return e.tagName.toLowerCase() === "path" ? this.pathIntersectsRect(e, t, n, r, i) : this.nodeIntersectsRect(e, t, n, r, i);
	}
	nodeIntersectsRect(e, t, n, r, i) {
		let a = Math.min(t, r), o = Math.max(t, r), s = Math.min(n, i), c = Math.max(n, i), l = e.getBBox(), u = l.x, d = l.y, f = l.x + l.width, p = l.y + l.height;
		if (f < a || u > o || p < s || d > c) return !1;
		if (u >= a && f <= o && d >= s && p <= c) return !0;
		let m = e;
		if (typeof m.getTotalLength == "function" && typeof m.getPointAtLength == "function") {
			let e = m.getTotalLength();
			if (e > 0) {
				let t = Math.min(128, Math.max(8, Math.ceil(e / 12)));
				for (let n = 0; n <= t; n++) {
					let r = m.getPointAtLength(n / t * e);
					if (r.x >= a && r.x <= o && r.y >= s && r.y <= c) return !0;
				}
				return !1;
			}
		}
		return !0;
	}
	restoreLocalSelectionAfterDraw() {
		if (this._selectionProjection !== "aggregated" || this._selectionOrigin !== "local") return;
		let e = /* @__PURE__ */ new Set();
		for (let t of this._data) (t.autkIds ?? []).some((e) => this._selectedFeatureIds.has(e)) && e.add(t);
		this._selectedMarkDatums = e;
	}
	pathIntersectsRect(e, t, n, r, i) {
		let a = Math.min(t, r), o = Math.max(t, r), s = Math.min(n, i), c = Math.max(n, i), l = this.extractPathPoints(e);
		if (l.length >= 2) {
			let e = (e, t) => e >= a && e <= o && t >= s && t <= c, t = (e, t, n, r, i, a, o, s) => {
				let c = (e, t, n, r, i, a) => (r - t) * (i - n) - (n - e) * (a - r), l = (e, t, n, r, i, a) => n >= Math.min(e, i) && n <= Math.max(e, i) && r >= Math.min(t, a) && r <= Math.max(t, a), u = c(e, t, n, r, i, a), d = c(e, t, n, r, o, s), f = c(i, a, o, s, e, t), p = c(i, a, o, s, n, r);
				return u === 0 && l(e, t, i, a, n, r) || d === 0 && l(e, t, o, s, n, r) || f === 0 && l(i, a, e, t, o, s) || p === 0 && l(i, a, n, r, o, s) ? !0 : u > 0 != d > 0 && f > 0 != p > 0;
			}, n = (e, n, r, i) => Math.max(e, r) < a || Math.min(e, r) > o || Math.max(n, i) < s || Math.min(n, i) > c ? !1 : t(e, n, r, i, a, s, o, s) || t(e, n, r, i, o, s, o, c) || t(e, n, r, i, o, c, a, c) || t(e, n, r, i, a, c, a, s);
			for (let t = 0; t < l.length - 1; t++) {
				let [r, i] = l[t], [a, o] = l[t + 1];
				if (e(r, i) || e(a, o) || n(r, i, a, o)) return !0;
			}
			return !1;
		}
		return this.nodeIntersectsRect(e, t, n, r, i);
	}
	extractPathPoints(e) {
		let t = e.getAttribute("d") ?? "";
		if (!/[MmLlHhVv]/.test(t) || /[CcSsQqTtAa]/.test(t)) return [];
		let n = t.match(/[MLHVZmlhvz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? [], r = [], i = 0, a = "", o = 0, s = 0, c = 0, l = 0;
		for (; i < n.length;) {
			let e = n[i];
			if (/^[MLHVZmlhvz]$/.test(e)) a = e, i += 1, (a === "Z" || a === "z") && r.push([c, l]);
			else if (a === "M" || a === "L") {
				let e = Number(n[i]), t = Number(n[i + 1]);
				if (!Number.isFinite(e) || !Number.isFinite(t)) return [];
				o = e, s = t, a === "M" && r.length === 0 && (c = e, l = t, a = "L"), r.push([o, s]), i += 2;
			} else if (a === "m" || a === "l") {
				let e = Number(n[i]), t = Number(n[i + 1]);
				if (!Number.isFinite(e) || !Number.isFinite(t)) return [];
				o += e, s += t, a === "m" && r.length === 0 && (c = o, l = s, a = "l"), r.push([o, s]), i += 2;
			} else if (a === "H") {
				let e = Number(n[i]);
				if (!Number.isFinite(e)) return [];
				o = e, r.push([o, s]), i += 1;
			} else if (a === "h") {
				let e = Number(n[i]);
				if (!Number.isFinite(e)) return [];
				o += e, r.push([o, s]), i += 1;
			} else if (a === "V") {
				let e = Number(n[i]);
				if (!Number.isFinite(e)) return [];
				s = e, r.push([o, s]), i += 1;
			} else if (a === "v") {
				let e = Number(n[i]);
				if (!Number.isFinite(e)) return [];
				s += e, r.push([o, s]), i += 1;
			} else return [];
		}
		return r;
	}
	clearBrushVisuals() {
		this._suppressBrushEvents = !0;
		let e = this;
		F(this._div).selectAll(".autkBrush").each(function(t, n) {
			let r = F(this), i = r.attr("autkBrushId"), a = i && i.length > 0 ? i : String(n), o = e._brushBehaviors.get(a);
			o && o.move(r, null);
		}), this._suppressBrushEvents = !1;
	}
	commitBrushSelection(e, t) {
		t.size === 0 ? (this._selectedMarkDatums = /* @__PURE__ */ new Set(), this._selectedFeatureIds = /* @__PURE__ */ new Set(), this._selectionOrigin = null) : this.resolveSelectionFromRects(t), this.renderSelection(), this.events.emit(e, { selection: this.selection });
	}
	resolveSelectionProjection(e) {
		let t = e?.preset;
		return t === "binning-1d" || t === "binning-2d" || t === "binning-events" || t === "reduce-series" ? "aggregated" : "bijective";
	}
	syncSelectedFeaturesFromMarks() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this._selectedMarkDatums) {
			let n = t.autkIds ?? [];
			for (let t of n) e.add(t);
		}
		this._selectedFeatureIds = e;
	}
	syncSelectedMarksFromFeatures() {
		let e = /* @__PURE__ */ new Set();
		this._selectedFeatureIds.size === 0 || F(this._div).selectAll(".autkMark").each((t) => {
			typeof t == "object" && t && (t.autkIds ?? []).some((e) => this._selectedFeatureIds.has(e)) && e.add(t);
		}), this._selectedMarkDatums = e;
	}
}, xu = class extends bu {
	mapX;
	mapY;
	constructor(e) {
		if (e.events === void 0 && (e.events = []), e.tickFormats === void 0 && (e.tickFormats = ["~s", "~s"]), e.transform) {
			if (e.transform.preset !== "binning-1d") throw Error("Barchart only supports the binning-1d transform preset.");
			e.labels = {
				axis: e.labels?.axis ?? ["label", "value"],
				title: e.labels?.title ?? "Distribution"
			};
		}
		super(e), this.draw();
	}
	render() {
		let e = F(this._div).selectAll("#plot").data([0]).join("svg").attr("id", "plot").style("width", `${this._width}px`).style("height", `${this._height}px`).style("visibility", "visible"), t = e.node();
		if (!e || !t) throw Error("SVG element could not be created.");
		e.attr("width", this._width).attr("height", this._height);
		let n = this._width - this._margins.left - this._margins.right, r = this._height - this._margins.top - this._margins.bottom;
		this._title && this._title.length > 0 && e.selectAll("#plotTitle").data([this._title]).join("text").attr("id", "plotTitle").attr("class", "plot-title").attr("x", this._margins.left + n / 2).attr("y", Math.max(this._margins.top * .5, 10)).attr("text-anchor", "middle").style("font-weight", "600").style("visibility", "visible").text((e) => e);
		let i = this._data.map((e) => {
			let t = e ? Z(e, this.renderAxisAttributes[0]) : "unknown";
			return String(t);
		});
		this.mapX = Io().domain(i).range([0, n]).padding(.25);
		let a = l(this._data, (e) => e && Number(Z(e, this.renderAxisAttributes[1])) || 0);
		this.mapY = Qo().domain([0, Math.max(a[1], 1)]).range([r, 0]);
		let o = j(this.mapX).tickSizeOuter(0).tickFormat((e) => {
			let t = String(e), n = Number(t);
			return Number.isFinite(n) && t.trim() !== "" ? W(this._tickFormats[0] || "~s")(n) : t;
		}), s = e.selectAll("#axisX").data([0]).join("g").attr("id", "axisX").attr("class", "x axis").attr("transform", `translate(${this._margins.left}, ${this._height - this._margins.bottom})`).style("visibility", "visible");
		s.call(o).selectAll("text").style("text-anchor", "end").attr("dx", "-.8em").attr("dy", "-.40em").attr("transform", "rotate(-90)"), s.selectAll(".axis-label").data([this._axisLabels[0]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("x", n).attr("y", this._margins.bottom / 2 + 10).style("visibility", "visible").text((e) => e);
		let c = M(this.mapY).tickSizeInner(-n).tickFormat(W(this._tickFormats[1])), u = e.selectAll("#axisY").data([0]).join("g").attr("id", "axisY").attr("class", "y axis").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`).style("visibility", "visible");
		u.call(c), u.selectAll(".axis-label").data([this._axisLabels[1]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("y", -this._margins.left / 2 - 7).attr("x", -this._margins.top).style("visibility", "visible").text((e) => e);
		let d = e.selectAll(".autkBrush").data([0]).join("g").attr("class", "autkBrush autkMarksGroup").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`);
		d.selectAll(".autkClear").data([0]).join("rect").attr("class", "autkClear").attr("width", n).attr("height", r).style("fill", "white").style("opacity", 0).style("visibility", "visible"), d.selectAll(".autkMark").data(this._data).join("rect").attr("class", "autkMark").attr("x", (e) => {
			let t = e ? Z(e, this.renderAxisAttributes[0]) : "unknown";
			return this.mapX(String(t)) || 0;
		}).attr("y", (e) => this.mapY(e && Number(Z(e, this.renderAxisAttributes[1])) || 0)).attr("height", (e) => r - this.mapY(e && Number(Z(e, this.renderAxisAttributes[1])) || 0)).attr("width", this.mapX.bandwidth()).style("fill", (e) => this.getMarkColor(e)).style("stroke", "#2f2f2f").style("visibility", "inherit"), this.configureSignalListeners();
	}
}, Su = class extends bu {
	constructor(e) {
		if (e.events === void 0 && (e.events = []), e.tickFormats === void 0 && (e.tickFormats = ["~s", "~s"]), !e.transform) throw Error("Linechart requires a transform configuration.");
		if (e.transform.preset !== "reduce-series" && e.transform.preset !== "binning-events") throw Error("Linechart only supports reduce-series and binning-events transform presets.");
		e.labels = {
			axis: e.labels?.axis ?? (e.transform.preset === "reduce-series" ? ["time", "value"] : ["bucket", "value"]),
			title: e.labels?.title ?? (e.transform.preset === "reduce-series" ? "Series" : "Events over time")
		}, super(e), this.draw();
	}
	resolveTransformResult(e) {
		let t = super.resolveTransformResult(e);
		return e.preset !== "binning-events" && e.preset !== "reduce-series" ? t : {
			rows: [...e.rows].sort((e, t) => this.compareBuckets(e.bucket, t.bucket)).map((e, t) => ({
				x: t,
				label: this.formatBucketLabel(e.bucket),
				y: e.value,
				autkIds: e.autkIds
			})),
			axisAttributes: ["label", "y"]
		};
	}
	render() {
		let e = this._data, t = this._width - this._margins.left - this._margins.right, n = this._height - this._margins.top - this._margins.bottom, r = F(this._div).selectAll("#plot").data([0]).join("svg").attr("id", "plot").style("width", `${this._width}px`).style("height", `${this._height}px`).style("visibility", "visible"), i = r.node();
		if (!r || !i) throw Error("SVG element could not be created.");
		r.attr("width", this._width).attr("height", this._height), this._title && this._title.length > 0 && r.selectAll("#plotTitle").data([this._title]).join("text").attr("id", "plotTitle").attr("class", "plot-title").attr("x", this._margins.left + t / 2).attr("y", Math.max(this._margins.top * .5, 10)).attr("text-anchor", "middle").style("font-weight", "600").style("visibility", "visible").text((e) => e);
		let a = Math.max(e.length, 1), o = e.map((e) => e.y), s = o.length > 0 ? Math.min(...o) : 0, c = o.length > 0 ? Math.max(...o) : 50, l = (c - s) * .1 || 1, u = Qo().domain([0, a - 1]).range([0, t]), d = Qo().domain([s - l, c + l]).range([n, 0]), f = j(u).ticks(Math.min(a, 12)).tickFormat((t) => e[+t]?.label ?? W(this._tickFormats[0])(+t)), p = r.selectAll("#axisX").data([0]).join("g").attr("id", "axisX").attr("class", "x axis").attr("transform", `translate(${this._margins.left}, ${this._height - this._margins.bottom})`).style("visibility", "visible");
		p.call(f), p.selectAll("text").style("font-size", "11px").attr("transform", "rotate(-45)").attr("text-anchor", "end").attr("dx", "-0.4em").attr("dy", "0.4em"), p.selectAll(".axis-label").data([this._axisLabels[0]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("x", t).attr("y", this._margins.bottom / 2 + 10).style("visibility", "visible").text((e) => e);
		let m = M(d).ticks(5).tickSizeInner(-t).tickFormat(W(this._tickFormats[1])), h = r.selectAll("#axisY").data([0]).join("g").attr("id", "axisY").attr("class", "y axis").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`).style("visibility", "visible");
		h.call(m), h.selectAll(".tick line").style("stroke", "#e0e0e0"), h.selectAll(".axis-label").data([this._axisLabels[1]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("y", -this._margins.left / 2 - 7).attr("x", -this._margins.top).style("visibility", "visible").text((e) => e);
		let g = r.selectAll(".autkBrush").data([0]).join("g").attr("class", "autkBrush autkMarksGroup").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`);
		g.selectAll(".autkClear").data([0]).join("rect").attr("class", "autkClear").attr("width", t).attr("height", n).style("fill", "white").style("opacity", 0).style("visibility", "visible");
		let _ = zc().x((e) => u(e.x)).y((e) => d(e.y));
		g.selectAll(".autk-line").data([e]).join("path").attr("class", "autk-line").attr("fill", "none").attr("stroke", "#4472c4").attr("stroke-width", 1.5).attr("d", _), g.selectAll(".autkMark").data(e).join("circle").attr("class", "autkMark").attr("cx", (e) => u(e.x)).attr("cy", (e) => d(e.y)).attr("r", 5).style("fill", lu.default).style("visibility", "inherit"), g.selectAll(".autk-empty").data(e.length === 0 ? ["No series data available"] : []).join("text").attr("class", "autk-empty").attr("x", t / 2).attr("y", n / 2).attr("text-anchor", "middle").style("font-size", "12px").style("fill", "#aaa").text((e) => e), this.configureSignalListeners();
	}
	formatBucketLabel(e) {
		let t = Number(e);
		return Number.isFinite(t) && String(t) === e ? W(this._tickFormats[0])(t) : e;
	}
	compareBuckets(e, t) {
		let n = new Date(e), r = new Date(t), i = Number.isFinite(n.getTime()), a = Number.isFinite(r.getTime());
		if (i && a) return n.getTime() - r.getTime();
		let o = Number(e), s = Number(t);
		return Number.isFinite(o) && Number.isFinite(s) ? o - s : e.localeCompare(t);
	}
}, Cu = class extends bu {
	scales = /* @__PURE__ */ new Map();
	axisPositions;
	dimensionTypes = /* @__PURE__ */ new Map();
	constructor(e) {
		e.events === void 0 && (e.events = []), e.tickFormats === void 0 && (e.tickFormats = ["~s", "~s"]), super(e), this._colorProperty = "stroke", this.axisPositions = Ro(), this.draw();
	}
	render() {
		let e = this.renderAxisAttributes, t = F(this._div).selectAll("#plot").data([0]).join("svg").attr("id", "plot").style("width", `${this._width}px`).style("height", `${this._height}px`).style("visibility", "visible"), n = t.node();
		if (!t || !n) throw Error("SVG element could not be created.");
		t.attr("width", this._width).attr("height", this._height);
		let r = this._width - this._margins.left - this._margins.right, i = this._height - this._margins.top - this._margins.bottom;
		this._title && this._title.length > 0 && t.selectAll("#plotTitle").data([this._title]).join("text").attr("id", "plotTitle").attr("class", "plot-title").attr("x", this._margins.left + r / 2).attr("y", Math.max(this._margins.top * .5, 10)).attr("text-anchor", "middle").style("font-weight", "600").style("visibility", "visible").text((e) => e), e.forEach((e) => {
			if (this._data.map((t) => t ? Z(t, e) : null).filter((e) => e != null).every((e) => !isNaN(Number(e)))) {
				this.dimensionTypes.set(e, "numerical");
				let t = l(this._data, (t) => t && Number(Z(t, e)) || 0);
				this.scales.set(e, Qo().domain(t).range([i, 0]));
			} else {
				this.dimensionTypes.set(e, "categorical");
				let t = Array.from(new Set(this._data.map((t) => t ? String(Z(t, e)) : "unknown")));
				this.scales.set(e, Ro().domain(t).range([i, 0]).padding(.5));
			}
		}), this.axisPositions = Ro().domain(e).range([0, r]).padding(.1);
		let a = t.selectAll(".autkMarksGroup").data([0]).join("g").attr("class", "autkMarksGroup").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`);
		a.selectAll(".autkClear").data([0]).join("rect").attr("class", "autkClear").attr("x", -this._margins.left).attr("y", -this._margins.top).attr("width", this._width).attr("height", this._height).style("fill", "transparent").style("visibility", "visible"), a.selectAll(".autkMark").data(this._data).join("path").attr("class", "autkMark").attr("data-idx", (e, t) => t).attr("d", (e) => this.path(e)).style("fill", "none").style("stroke", lu.default).style("stroke-width", 2).style("opacity", .7).style("visibility", "inherit");
		let o = t.selectAll(".autkBrush").data(e).join("g").attr("class", "autkBrush").attr("transform", (e) => `translate(${this._margins.left + (this.axisPositions(e) || 0)}, ${this._margins.top})`).style("visibility", "inherit");
		o.attr("autkBrushId", (e) => e), o.each((e, t, n) => {
			let r = this.scales.get(e), i = this.dimensionTypes.get(e);
			r && i === "numerical" ? F(n[t]).call(M(r).ticks(5).tickFormat((e) => W(this._tickFormats[0] || "~s")(Number(e)))) : r && i === "categorical" && F(n[t]).call(M(r));
		}), this.configureSignalListeners(), t.selectAll(".autkAxisLabels").data([0]).join("g").attr("class", "autkAxisLabels").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`).selectAll(".axis-label").data(e).join("text").attr("class", "axis-label").attr("text-anchor", "middle").attr("x", (e) => this.axisPositions(e) || 0).attr("y", -9).style("font-weight", "600").style("cursor", "pointer").style("visibility", "visible").text((e, t) => this._axisLabels[t] ?? e).on("click", (e, t) => {
			this.setRenderColorAttribute(this.renderColorAttribute === t ? void 0 : t), this.renderColorAttribute ? this.computeColorDomain() : this._resolvedDomain = void 0, this.updateAxisLabelStyles(), this.renderSelection();
		}), this.updateAxisLabelStyles(), this.renderSelection();
	}
	applyMarkStyles(e) {
		super.applyMarkStyles(e);
		let t = e;
		t.style("opacity", (e) => this.isMarkHighlighted(e) ? 1 : .7).style("stroke-width", (e) => this.isMarkHighlighted(e) ? 3 : 2), t.filter((e) => this.isMarkHighlighted(e)).raise();
	}
	updateAxisLabelStyles() {
		F(this._div).selectAll(".axis-label").style("fill", (e) => this.renderColorAttribute === e ? "#cc3300" : "#000").style("text-decoration", (e) => this.renderColorAttribute === e ? "underline" : "none");
	}
	path(e) {
		return zc()(this.renderAxisAttributes.map((t) => {
			let n = this.axisPositions(t) || 0, r = this.scales.get(t), i = this.dimensionTypes.get(t), a = 0;
			return r && i === "numerical" ? a = r(Number(Z(e, t)) || 0) : r && i === "categorical" && (a = r(String(Z(e, t))) ?? 0), [n, a];
		})) || "";
	}
}, wu = class extends bu {
	mapX;
	mapY;
	constructor(e) {
		if (e.events === void 0 && (e.events = []), e.tickFormats === void 0 && (e.tickFormats = ["~s", "~s"]), super(e), this.renderAxisAttributes.length < 2) throw Error("Scatterplot requires two dimensions.");
		this.draw();
	}
	render() {
		let [e, t] = this.renderAxisAttributes, n = F(this._div).selectAll("#plot").data([0]).join("svg").attr("id", "plot").style("width", `${this._width}px`).style("height", `${this._height}px`).style("visibility", "visible"), r = n.node();
		if (!n || !r) throw Error("SVG element could not be created.");
		n.attr("width", this._width).attr("height", this._height);
		let i = this._width - this._margins.left - this._margins.right, a = this._height - this._margins.top - this._margins.bottom;
		n.selectAll("#plotTitle").data([this._title]).join("text").attr("id", "plotTitle").attr("class", "plot-title").attr("x", this._margins.left + i / 2).attr("y", Math.max(this._margins.top * .5, 10)).attr("text-anchor", "middle").style("font-weight", "600").style("visibility", "visible").text((e) => e);
		let o = l(this._data, (t) => t && Number(Z(t, e)) || 0);
		this.mapX = Qo().domain(o).range([0, i]);
		let s = l(this._data, (e) => e && Number(Z(e, t)) || 0);
		this.mapY = Qo().domain(s).range([a, 0]);
		let c = j(this.mapX).tickSizeInner(-a).tickFormat(W(this._tickFormats[0])), u = n.selectAll("#axisX").data([0]).join("g").attr("id", "axisX").attr("class", "x axis").attr("transform", `translate(${this._margins.left}, ${this._height - this._margins.bottom})`).style("visibility", "visible");
		u.call(c), u.selectAll(".tick line").style("stroke", "#e0e0e0"), u.selectAll(".axis-label").data([this._axisLabels[0]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("x", i).attr("y", this._margins.bottom / 2 + 10).style("visibility", "visible").text((e) => e);
		let d = M(this.mapY).tickSizeInner(-i).tickFormat(W(this._tickFormats[1])), f = n.selectAll("#axisY").data([0]).join("g").attr("id", "axisY").attr("class", "y axis").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`).style("visibility", "visible");
		f.call(d), f.selectAll(".tick line").style("stroke", "#e0e0e0"), f.selectAll(".axis-label").data([this._axisLabels[1]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("y", -this._margins.left / 2 - 7).attr("x", -this._margins.top).style("visibility", "visible").text((e) => e);
		let p = n.selectAll(".autkBrush").data([0]).join("g").attr("class", "autkBrush autkMarksGroup").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`);
		p.selectAll(".autkClear").data([0]).join("rect").attr("class", "autkClear").attr("width", i).attr("height", a).style("fill", "white").style("opacity", 0).style("visibility", "visible"), p.selectAll(".autkMark").data(this._data).join("circle").attr("class", "autkMark").attr("cx", (t) => this.mapX(t && Number(Z(t, e)) || 0)).attr("cy", (e) => this.mapY(e && Number(Z(e, t)) || 0)).attr("r", 5).style("fill", lu.default).style("visibility", "inherit"), this.configureSignalListeners();
	}
}, Tu = class extends bu {
	constructor(e) {
		if (e.events === void 0 && (e.events = []), e.transform && e.transform.preset !== "sort") throw Error("TableVis only supports the sort transform preset.");
		e.transform ||= {
			preset: "sort",
			options: {
				column: e.attributes?.axis?.[0] ?? "",
				direction: "asc"
			}
		}, super(e), this.draw();
	}
	render() {
		let e = F(this._div).selectAll(".autk-table-container").data([0]).join("div").attr("class", "autk-table-container").style("width", "100%").style("height", "100%").style("overflow", "auto").style("border", "1px solid #ddd").style("border-radius", "4px").selectAll(".autk-table").data([0]).join("table").attr("class", "autk-table").style("width", "100%").style("border-collapse", "collapse").style("font-family", "sans-serif").style("font-size", "12px").style("text-align", "left");
		if (!e.node()) throw Error("Table element could not be created.");
		e.selectAll("thead").data([0]).join("thead").selectAll("tr").data([0]).join("tr").selectAll("th").data(this._axisLabels).join("th").style("padding", "8px").style("border-bottom", "2px solid #bbb").style("background-color", "#f8f8f8").style("position", "sticky").style("top", "0").style("text-align", "center").style("cursor", "pointer").style("user-select", "none").text((e) => String(e)).on("click", (e, t) => {
			let n = this._axisLabels.indexOf(t), r = n >= 0 ? this.renderAxisAttributes[n] : t, i = this._transformConfig;
			if ((i.options?.column ?? this.renderAxisAttributes[0]) === r) {
				let e = i.options?.direction === "asc" ? "desc" : "asc";
				this._transformConfig = {
					preset: "sort",
					options: {
						column: r,
						direction: e
					}
				};
			} else this._transformConfig = {
				preset: "sort",
				options: {
					column: r,
					direction: "asc"
				}
			};
			this.draw();
		});
		let t = e.selectAll("tbody").data([0]).join("tbody");
		this.renderRows(t), this.configureSignalListeners(), this.updateHeaderStyles();
	}
	renderRows(e) {
		let t = this._data.filter((e) => this.isMarkHighlighted(e)), n = this._data.filter((e) => !this.isMarkHighlighted(e)), r = [...t, ...n], i = W("");
		e.selectAll("tr").data(r, (e) => String(e?.autkIds?.[0] ?? "")).join("tr").attr("class", "autkMark").style("border-bottom", "1px solid #eee").style("cursor", "pointer").style("background-color", (e) => this.isMarkHighlighted(e) ? lu.highlight : "transparent").style("color", (e) => this.isMarkHighlighted(e) ? "#ffffff" : "#000000").selectAll("td").data((e) => this.renderAxisAttributes.map((t, n) => ({
			column: this._axisLabels[n] ?? t,
			value: e ? Z(e, t) : "unknown"
		}))).join("td").style("padding", "6px 8px").style("text-align", "center").text((e) => typeof e.value == "number" ? i(e.value) : String(e.value));
	}
	onSelectionUpdated() {
		let e = F(this._div).select(".autk-table tbody");
		e.node() && (this.renderRows(e), this.clickEvent());
	}
	updateHeaderStyles() {
		F(this._div).selectAll("th").style("color", (e) => {
			let t = this._axisLabels.indexOf(e), n = t >= 0 ? this.renderAxisAttributes[t] : e;
			return (this._transformConfig?.options?.column ?? this.renderAxisAttributes[0]) === n ? "#cc3300" : "#000";
		}).style("text-decoration", (e) => {
			let t = this._axisLabels.indexOf(e), n = t >= 0 ? this.renderAxisAttributes[t] : e;
			return (this._transformConfig?.options?.column ?? this.renderAxisAttributes[0]) === n ? "underline" : "none";
		});
	}
}, Eu = class extends bu {
	constructor(e) {
		if (e.events === void 0 && (e.events = []), e.tickFormats === void 0 && (e.tickFormats = ["", ""]), !e.transform || e.transform.preset !== "binning-2d") throw Error("Heatmatrix requires a binning-2d transform preset.");
		super(e), this.draw();
	}
	render() {
		let e = F(this._div).selectAll("#plot").data([0]).join("svg").attr("id", "plot").attr("width", this._width).attr("height", this._height).style("visibility", "visible"), t = e.node();
		if (!e || !t) throw Error("SVG element could not be created.");
		let n = this._width - this._margins.left - this._margins.right, r = this._height - this._margins.top - this._margins.bottom;
		this._title && this._title.length > 0 && e.selectAll("#plotTitle").data([this._title]).join("text").attr("id", "plotTitle").attr("class", "plot-title").attr("x", this._margins.left + n / 2).attr("y", Math.max(this._margins.top * .5, 10)).attr("text-anchor", "middle").style("font-weight", "600").style("visibility", "visible").text((e) => e);
		let i = Array.from(new Map(this._data.map((e) => [e.x, e.xOrder])).entries()).sort((e, t) => e[1] - t[1]).map(([e]) => e), a = Array.from(new Map(this._data.map((e) => [e.y, e.yOrder])).entries()).sort((e, t) => e[1] - t[1]).map(([e]) => e), o = Io().domain(i).range([0, n]).padding(.05), s = Io().domain(a).range([0, r]).padding(.05), c = e.selectAll("#axisX").data([0]).join("g").attr("id", "axisX").attr("class", "x axis").attr("transform", `translate(${this._margins.left}, ${this._height - this._margins.bottom})`).style("visibility", "visible");
		c.call(j(o).tickSizeOuter(0)), c.selectAll(".tick text").style("text-anchor", "end").attr("dx", "-0.6em").attr("dy", "0.1em").attr("transform", "rotate(-45)"), c.selectAll(".axis-label").data([this._axisLabels[0]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("x", n).attr("y", this._margins.bottom / 2 + 10).style("visibility", "visible").text((e) => e);
		let l = e.selectAll("#axisY").data([0]).join("g").attr("id", "axisY").attr("class", "y axis").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`).style("visibility", "visible");
		l.call(M(s).tickSizeOuter(0)), l.selectAll(".axis-label").data([this._axisLabels[1]]).join("text").attr("class", "axis-label title").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("y", -this._margins.left / 2 - 7).attr("x", -this._margins.top).style("visibility", "visible").text((e) => e);
		let u = e.selectAll(".autkBrush").data([0]).join("g").attr("class", "autkBrush autkMarksGroup").attr("transform", `translate(${this._margins.left}, ${this._margins.top})`);
		u.selectAll(".autkClear").data([0]).join("rect").attr("class", "autkClear").attr("width", n).attr("height", r).style("fill", "white").style("opacity", 0).style("visibility", "visible"), u.selectAll(".autkMark").data(this._data).join("rect").attr("class", "autkMark").attr("x", (e) => o(e ? String(Z(e, this.renderAxisAttributes[0])) : "") ?? 0).attr("y", (e) => s(e ? String(Z(e, this.renderAxisAttributes[1])) : "") ?? 0).attr("width", o.bandwidth()).attr("height", s.bandwidth()).style("fill", (e) => this.getMarkColor(e)).style("visibility", "inherit"), this.configureSignalListeners();
	}
}, Du = class {
	_plot;
	_type;
	constructor(e, t) {
		this._type = t.type, this._plot = this.createPlot(e, t);
	}
	get type() {
		return this._type;
	}
	get instance() {
		return this._plot;
	}
	get selection() {
		return this._plot.selection;
	}
	get events() {
		return this._plot.events;
	}
	setSelection(e) {
		this._plot.setSelection(e);
	}
	updateCollection(e) {
		this._plot.updateCollection(e);
	}
	draw() {
		this._plot.draw();
	}
	createPlot(e, t) {
		switch (t.type) {
			case "scatterplot": {
				let { type: n, ...r } = t;
				return new wu({
					div: e,
					...r
				});
			}
			case "barchart": {
				let { type: n, ...r } = t;
				return new xu({
					div: e,
					...r
				});
			}
			case "parallel-coordinates": {
				let { type: n, ...r } = t;
				return new Cu({
					div: e,
					...r
				});
			}
			case "table": {
				let { type: n, ...r } = t;
				return new Tu({
					div: e,
					...r
				});
			}
			case "linechart": {
				let { type: n, ...r } = t;
				return new Su({
					div: e,
					...r
				});
			}
			case "heatmatrix": {
				let { type: n, ...r } = t;
				return new Eu({
					div: e,
					...r
				});
			}
			default: throw Error(`Unsupported plot type: ${t.type}`);
		}
	}
};
//#endregion
export { Du as AutkPlot, yu as PlotBaseData, bu as PlotBaseInteractive, $ as PlotEvent, lu as PlotStyle, uu as reduceBuckets, vu as run };

//# sourceMappingURL=autk-plot.js.map