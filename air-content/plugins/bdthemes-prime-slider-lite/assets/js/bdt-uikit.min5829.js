/*! bdtUIkit 3.16.24 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */ !(function (t, e) {
  "object" == typeof exports && typeof module < "u"
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("uikit", e)
    : ((t = typeof globalThis < "u" ? globalThis : t || self).bdtUIkit = e());
})(this, function () {
  "use strict";
  const { hasOwnProperty: t, toString: e } = Object.prototype;
  function i(e, i) {
    return t.call(e, i);
  }
  const n = /\B([A-Z])/g,
    s = Z((t) => t.replace(n, "-$1").toLowerCase()),
    o = /-(\w)/g,
    r = Z((t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(o, (t, e) => e.toUpperCase())),
    a = Z((t) => t.charAt(0).toUpperCase() + t.slice(1));
  function l(t, e) {
    var i;
    return null == (i = null == t ? void 0 : t.startsWith) ? void 0 : i.call(t, e);
  }
  function h(t, e) {
    var i;
    return null == (i = null == t ? void 0 : t.endsWith) ? void 0 : i.call(t, e);
  }
  function c(t, e) {
    var i;
    return null == (i = null == t ? void 0 : t.includes) ? void 0 : i.call(t, e);
  }
  function d(t, e) {
    var i;
    return null == (i = null == t ? void 0 : t.findIndex) ? void 0 : i.call(t, e);
  }
  const { isArray: u, from: f } = Array,
    { assign: p } = Object;
  function m(t) {
    return "function" == typeof t;
  }
  function g(t) {
    return null !== t && "object" == typeof t;
  }
  function v(t) {
    return "[object Object]" === e.call(t);
  }
  function b(t) {
    return g(t) && t === t.window;
  }
  function w(t) {
    return 9 === y(t);
  }
  function $(t) {
    return y(t) >= 1;
  }
  function x(t) {
    return 1 === y(t);
  }
  function y(t) {
    return !b(t) && g(t) && t.nodeType;
  }
  function S(t) {
    return "boolean" == typeof t;
  }
  function I(t) {
    return "string" == typeof t;
  }
  function k(t) {
    return "number" == typeof t;
  }
  function C(t) {
    return k(t) || (I(t) && !isNaN(t - parseFloat(t)));
  }
  function T(t) {
    return !(u(t) ? t.length : g(t) && Object.keys(t).length);
  }
  function E(t) {
    return void 0 === t;
  }
  function A(t) {
    return S(t) ? t : "true" === t || "1" === t || "" === t || ("false" !== t && "0" !== t && t);
  }
  function B(t) {
    const e = Number(t);
    return !isNaN(e) && e;
  }
  function _(t) {
    return parseFloat(t) || 0;
  }
  function P(t) {
    return D(t)[0];
  }
  function D(t) {
    return $(t) ? [t] : Array.from(t || []).filter($);
  }
  function M(t) {
    if (b(t)) return t;
    const e = w((t = P(t))) ? t : null == t ? void 0 : t.ownerDocument;
    return (null == e ? void 0 : e.defaultView) || window;
  }
  function O(t, e) {
    return t === e || (g(t) && g(e) && Object.keys(t).length === Object.keys(e).length && H(t, (t, i) => t === e[i]));
  }
  function N(t, e, i) {
    return t.replace(new RegExp(`${e}|${i}`, "g"), (t) => (t === e ? i : e));
  }
  function z(t) {
    return t[t.length - 1];
  }
  function H(t, e) {
    for (const i in t) if (!1 === e(t[i], i)) return !1;
    return !0;
  }
  function F(t, e) {
    return t.slice().sort(({ [e]: t = 0 }, { [e]: i = 0 }) => (t > i ? 1 : i > t ? -1 : 0));
  }
  function j(t, e) {
    return t.reduce((t, i) => t + _(m(e) ? e(i) : i[e]), 0);
  }
  function L(t, e) {
    const i = new Set();
    return t.filter(({ [e]: t }) => !i.has(t) && i.add(t));
  }
  function q(t, e) {
    return e.reduce((e, i) => ({ ...e, [i]: t[i] }), {});
  }
  function W(t, e = 0, i = 1) {
    return Math.min(Math.max(B(t) || 0, e), i);
  }
  function V() {}
  function R(...t) {
    return [
      ["bottom", "top"],
      ["right", "left"],
    ].every(([e, i]) => Math.min(...t.map(({ [e]: t }) => t)) - Math.max(...t.map(({ [i]: t }) => t)) > 0);
  }
  function U(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  function Y(t, e, i) {
    const n = "width" === e ? "height" : "width";
    return { [n]: t[e] ? Math.round((i * t[n]) / t[e]) : t[n], [e]: i };
  }
  function X(t, e) {
    t = { ...t };
    for (const i in t) t = t[i] > e[i] ? Y(t, i, e[i]) : t;
    return t;
  }
  const J = {
    ratio: Y,
    contain: X,
    cover: function (t, e) {
      t = X(t, e);
      for (const i in t) t = t[i] < e[i] ? Y(t, i, e[i]) : t;
      return t;
    },
  };
  function G(t, e, i = 0, n = !1) {
    e = D(e);
    const { length: s } = e;
    return s
      ? ((t = C(t) ? B(t) : "next" === t ? i + 1 : "previous" === t ? i - 1 : "last" === t ? s - 1 : e.indexOf(P(t))),
        n ? W(t, 0, s - 1) : (t %= s) < 0 ? t + s : t)
      : -1;
  }
  function Z(t) {
    const e = Object.create(null);
    return (i) => e[i] || (e[i] = t(i));
  }
  function K(t, e, i) {
    var n;
    if (g(e)) for (const i in e) K(t, i, e[i]);
    else {
      if (E(i)) return null == (n = P(t)) ? void 0 : n.getAttribute(e);
      for (const n of D(t)) m(i) && (i = i.call(n, K(n, e))), null === i ? tt(n, e) : n.setAttribute(e, i);
    }
  }
  function Q(t, e) {
    return D(t).some((t) => t.hasAttribute(e));
  }
  function tt(t, e) {
    D(t).forEach((t) => t.removeAttribute(e));
  }
  function et(t, e) {
    for (const i of [e, `data-${e}`]) if (Q(t, i)) return K(t, i);
  }
  const it = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  function nt(t) {
    return D(t).some((t) => it[t.tagName.toLowerCase()]);
  }
  function st(t) {
    return D(t).some((t) => t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }
  const ot = "input,select,textarea,button";
  function rt(t) {
    return D(t).some((t) => dt(t, ot));
  }
  const at = `${ot},a[href],[tabindex]`;
  function lt(t) {
    return dt(t, at);
  }
  function ht(t) {
    var e;
    return null == (e = P(t)) ? void 0 : e.parentElement;
  }
  function ct(t, e) {
    return D(t).filter((t) => dt(t, e));
  }
  function dt(t, e) {
    return D(t).some((t) => t.matches(e));
  }
  function ut(t, e) {
    return x(t)
      ? t.closest(l(e, ">") ? e.slice(1) : e)
      : D(t)
          .map((t) => ut(t, e))
          .filter(Boolean);
  }
  function ft(t, e) {
    return I(e) ? !!ut(t, e) : P(e).contains(P(t));
  }
  function pt(t, e) {
    const i = [];
    for (; (t = ht(t)); ) (!e || dt(t, e)) && i.push(t);
    return i;
  }
  function mt(t, e) {
    const i = (t = P(t)) ? f(t.children) : [];
    return e ? ct(i, e) : i;
  }
  function gt(t, e) {
    return e ? D(t).indexOf(P(e)) : mt(ht(t)).indexOf(t);
  }
  function vt(t) {
    return (t = P(t)) && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
  }
  function bt(t) {
    if (vt(t)) {
      t = P(t);
      const e = decodeURIComponent(t.hash).substring(1);
      return document.getElementById(e) || document.getElementsByName(e)[0];
    }
  }
  function wt(t, e) {
    return xt(t, kt(t, e));
  }
  function $t(t, e) {
    return yt(t, kt(t, e));
  }
  function xt(t, e) {
    return P(Et(t, P(e), "querySelector"));
  }
  function yt(t, e) {
    return D(Et(t, P(e), "querySelectorAll"));
  }
  const St = /(^|[^\\],)\s*[!>+~-]/,
    It = Z((t) => t.match(St));
  function kt(t, e = document) {
    return (I(t) && It(t)) || w(e) ? e : e.ownerDocument;
  }
  const Ct = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
    Tt = Z((t) => t.replace(Ct, "$1 *"));
  function Et(t, e = document, i) {
    if (!t || !I(t)) return t;
    if (((t = Tt(t)), It(t))) {
      const i = Bt(t);
      t = "";
      for (let n of i) {
        let s = e;
        if ("!" === n[0]) {
          const t = n.substr(1).trim().split(" ");
          if (((s = ut(ht(e), t[0])), (n = t.slice(1).join(" ").trim()), !n.length && 1 === i.length)) return s;
        }
        if ("-" === n[0]) {
          const t = n.substr(1).trim().split(" "),
            i = (s || e).previousElementSibling;
          (s = dt(i, n.substr(1)) ? i : null), (n = t.slice(1).join(" "));
        }
        s && (t += `${t ? "," : ""}${_t(s)} ${n}`);
      }
      e = document;
    }
    try {
      return e[i](t);
    } catch {
      return null;
    }
  }
  const At = /.*?[^\\](?:,|$)/g,
    Bt = Z((t) => t.match(At).map((t) => t.replace(/,$/, "").trim()));
  function _t(t) {
    const e = [];
    for (; t.parentNode; ) {
      const i = K(t, "id");
      if (i) {
        e.unshift(`#${Pt(i)}`);
        break;
      }
      {
        let { tagName: i } = t;
        "HTML" !== i && (i += `:nth-child(${gt(t) + 1})`), e.unshift(i), (t = t.parentNode);
      }
    }
    return e.join(" > ");
  }
  function Pt(t) {
    return I(t) ? CSS.escape(t) : "";
  }
  function Dt(...t) {
    let [e, i, n, s, o = !1] = Ht(t);
    s.length > 1 &&
      (s = (function (t) {
        return (e) => (u(e.detail) ? t(e, ...e.detail) : t(e));
      })(s)),
      null != o &&
        o.self &&
        (s = (function (t) {
          return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e);
          };
        })(s)),
      n &&
        (s = (function (t, e) {
          return (i) => {
            const n =
              ">" === t[0]
                ? yt(t, i.currentTarget)
                    .reverse()
                    .filter((t) => ft(i.target, t))[0]
                : ut(i.target, t);
            n && ((i.current = n), e.call(this, i), delete i.current);
          };
        })(n, s));
    for (const t of i) for (const i of e) i.addEventListener(t, s, o);
    return () => Mt(e, i, s, o);
  }
  function Mt(...t) {
    let [e, i, , n, s = !1] = Ht(t);
    for (const t of i) for (const i of e) i.removeEventListener(t, n, s);
  }
  function Ot(...t) {
    const [e, i, n, s, o = !1, r] = Ht(t),
      a = Dt(
        e,
        i,
        n,
        (t) => {
          const e = !r || r(t);
          e && (a(), s(t, e));
        },
        o,
      );
    return a;
  }
  function Nt(t, e, i) {
    return Lt(t).every((t) => t.dispatchEvent(zt(e, !0, !0, i)));
  }
  function zt(t, e = !0, i = !1, n) {
    return I(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: n })), t;
  }
  function Ht(t) {
    return (t[0] = Lt(t[0])), I(t[1]) && (t[1] = t[1].split(" ")), m(t[2]) && t.splice(2, 0, !1), t;
  }
  function Ft(t) {
    return t && "addEventListener" in t;
  }
  function jt(t) {
    return Ft(t) ? t : P(t);
  }
  function Lt(t) {
    return u(t) ? t.map(jt).filter(Boolean) : I(t) ? yt(t) : Ft(t) ? [t] : D(t);
  }
  function qt(t) {
    return "touch" === t.pointerType || !!t.touches;
  }
  function Wt(t) {
    var e, i;
    const { clientX: n, clientY: s } =
      (null == (e = t.touches) ? void 0 : e[0]) || (null == (i = t.changedTouches) ? void 0 : i[0]) || t;
    return { x: n, y: s };
  }
  const Vt = {
    "animation-iteration-count": !0,
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    "stroke-dasharray": !0,
    "stroke-dashoffset": !0,
    widows: !0,
    "z-index": !0,
    zoom: !0,
  };
  function Rt(t, e, i, n) {
    const s = D(t);
    for (const t of s)
      if (I(e)) {
        if (((e = Ut(e)), E(i))) return getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, C(i) && !Vt[e] ? `${i}px` : i || k(i) ? i : "", n);
      } else {
        if (u(e)) {
          const i = {};
          for (const n of e) i[n] = Rt(t, n);
          return i;
        }
        g(e) && ((n = i), H(e, (e, i) => Rt(t, i, e, n)));
      }
    return s[0];
  }
  const Ut = Z((t) =>
    (function (t) {
      if (l(t, "--")) return t;
      t = s(t);
      const { style: e } = document.documentElement;
      if (t in e) return t;
      for (const i of ["webkit", "moz"]) {
        const n = `-${i}-${t}`;
        if (n in e) return n;
      }
    })(t),
  );
  function Yt(t, ...e) {
    Qt(t, e, "add");
  }
  function Xt(t, ...e) {
    Qt(t, e, "remove");
  }
  function Jt(t, e) {
    K(t, "class", (t) => (t || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""));
  }
  function Gt(t, ...e) {
    e[0] && Xt(t, e[0]), e[1] && Yt(t, e[1]);
  }
  function Zt(t, e) {
    return ([e] = te(e)), !!e && D(t).some((t) => t.classList.contains(e));
  }
  function Kt(t, e, i) {
    const n = te(e);
    E(i) || (i = !!i);
    for (const e of D(t)) for (const t of n) e.classList.toggle(t, i);
  }
  function Qt(t, e, i) {
    e = e.reduce((t, e) => t.concat(te(e)), []);
    for (const n of D(t)) n.classList[i](...e);
  }
  function te(t) {
    return String(t).split(/[ ,]/).filter(Boolean);
  }
  const ee = {
      start: function (t, e, i = 400, n = "linear") {
        return (
          (i = Math.round(i)),
          Promise.all(
            D(t).map(
              (t) =>
                new Promise((s, o) => {
                  for (const i in e) {
                    const e = Rt(t, i);
                    "" === e && Rt(t, i, e);
                  }
                  const r = setTimeout(() => Nt(t, "transitionend"), i);
                  Ot(
                    t,
                    "transitionend transitioncanceled",
                    ({ type: e }) => {
                      clearTimeout(r),
                        Xt(t, "bdt-transition"),
                        Rt(t, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }),
                        "transitioncanceled" === e ? o() : s(t);
                    },
                    { self: !0 },
                  ),
                    Yt(t, "bdt-transition"),
                    Rt(t, {
                      transitionProperty: Object.keys(e).map(Ut).join(","),
                      transitionDuration: `${i}ms`,
                      transitionTimingFunction: n,
                      ...e,
                    });
                }),
            ),
          )
        );
      },
      async stop(t) {
        Nt(t, "transitionend"), await Promise.resolve();
      },
      async cancel(t) {
        Nt(t, "transitioncanceled"), await Promise.resolve();
      },
      inProgress: (t) => Zt(t, "bdt-transition"),
    },
    ie = "bdt-animation-";
  function ne(t, e, i = 200, n, s) {
    return Promise.all(
      D(t).map(
        (t) =>
          new Promise((o, r) => {
            Nt(t, "animationcanceled");
            const a = setTimeout(() => Nt(t, "animationend"), i);
            Ot(
              t,
              "animationend animationcanceled",
              ({ type: e }) => {
                clearTimeout(a),
                  "animationcanceled" === e ? r() : o(t),
                  Rt(t, "animationDuration", ""),
                  Jt(t, `${ie}\\S*`);
              },
              { self: !0 },
            ),
              Rt(t, "animationDuration", `${i}ms`),
              Yt(t, e, ie + (s ? "leave" : "enter")),
              l(e, ie) && (n && Yt(t, `bdt-transform-origin-${n}`), s && Yt(t, `${ie}reverse`));
          }),
      ),
    );
  }
  const se = new RegExp(`${ie}(enter|leave)`),
    oe = {
      in: ne,
      out: (t, e, i, n) => ne(t, e, i, n, !0),
      inProgress: (t) => se.test(K(t, "class")),
      cancel(t) {
        Nt(t, "animationcanceled");
      },
    };
  function re(t, ...e) {
    return e.some((e) => {
      var i;
      return (null == (i = null == t ? void 0 : t.tagName) ? void 0 : i.toLowerCase()) === e.toLowerCase();
    });
  }
  function ae(t) {
    return ((t = Se(t)).innerHTML = ""), t;
  }
  function le(t, e) {
    return E(e) ? Se(t).innerHTML : ce(ae(t), e);
  }
  const he = fe("prepend"),
    ce = fe("append"),
    de = fe("before"),
    ue = fe("after");
  function fe(t) {
    return function (e, i) {
      var n;
      const s = D(I(i) ? $e(i) : i);
      return null == (n = Se(e)) || n[t](...s), xe(s);
    };
  }
  function pe(t) {
    D(t).forEach((t) => t.remove());
  }
  function me(t, e) {
    for (e = P(de(t, e)); e.firstChild; ) e = e.firstChild;
    return ce(e, t), e;
  }
  function ge(t, e) {
    return D(D(t).map((t) => (t.hasChildNodes() ? me(f(t.childNodes), e) : ce(t, e))));
  }
  function ve(t) {
    D(t)
      .map(ht)
      .filter((t, e, i) => i.indexOf(t) === e)
      .forEach((t) => t.replaceWith(...t.childNodes));
  }
  const be = /^\s*<(\w+|!)[^>]*>/,
    we = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function $e(t) {
    const e = we.exec(t);
    if (e) return document.createElement(e[1]);
    const i = document.createElement("div");
    return be.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : (i.textContent = t), xe(i.childNodes);
  }
  function xe(t) {
    return t.length > 1 ? t : t[0];
  }
  function ye(t, e) {
    if (x(t))
      for (e(t), t = t.firstElementChild; t; ) {
        const i = t.nextElementSibling;
        ye(t, e), (t = i);
      }
  }
  function Se(t, e) {
    return ke(t) ? P($e(t)) : xt(t, e);
  }
  function Ie(t, e) {
    return ke(t) ? D($e(t)) : yt(t, e);
  }
  function ke(t) {
    return I(t) && l(t.trim(), "<");
  }
  const Ce = { width: ["left", "right"], height: ["top", "bottom"] };
  function Te(t) {
    const e = x(t) ? P(t).getBoundingClientRect() : { height: _e(t), width: Pe(t), top: 0, left: 0 };
    return {
      height: e.height,
      width: e.width,
      top: e.top,
      left: e.left,
      bottom: e.top + e.height,
      right: e.left + e.width,
    };
  }
  function Ee(t, e) {
    e && Rt(t, { left: 0, top: 0 });
    const i = Te(t);
    if (t) {
      const { scrollY: e, scrollX: n } = M(t),
        s = { height: e, width: n };
      for (const t in Ce) for (const e of Ce[t]) i[e] += s[t];
    }
    if (!e) return i;
    for (const n of ["left", "top"]) Rt(t, n, e[n] - i[n]);
  }
  function Ae(t) {
    let { top: e, left: i } = Ee(t);
    const {
      ownerDocument: { body: n, documentElement: s },
      offsetParent: o,
    } = P(t);
    let r = o || s;
    for (; r && (r === n || r === s) && "static" === Rt(r, "position"); ) r = r.parentNode;
    if (x(r)) {
      const t = Ee(r);
      (e -= t.top + _(Rt(r, "borderTopWidth"))), (i -= t.left + _(Rt(r, "borderLeftWidth")));
    }
    return { top: e - _(Rt(t, "marginTop")), left: i - _(Rt(t, "marginLeft")) };
  }
  function Be(t) {
    const e = [(t = P(t)).offsetTop, t.offsetLeft];
    for (; (t = t.offsetParent); )
      if (
        ((e[0] += t.offsetTop + _(Rt(t, "borderTopWidth"))),
        (e[1] += t.offsetLeft + _(Rt(t, "borderLeftWidth"))),
        "fixed" === Rt(t, "position"))
      ) {
        const i = M(t);
        return (e[0] += i.scrollY), (e[1] += i.scrollX), e;
      }
    return e;
  }
  const _e = De("height"),
    Pe = De("width");
  function De(t) {
    const e = a(t);
    return (i, n) => {
      if (E(n)) {
        if (b(i)) return i[`inner${e}`];
        if (w(i)) {
          const t = i.documentElement;
          return Math.max(t[`offset${e}`], t[`scroll${e}`]);
        }
        return (n = "auto" === (n = Rt((i = P(i)), t)) ? i[`offset${e}`] : _(n) || 0) - Me(i, t);
      }
      return Rt(i, t, n || 0 === n ? +n + Me(i, t) + "px" : "");
    };
  }
  function Me(t, e, i = "border-box") {
    return Rt(t, "boxSizing") === i ? j(Ce[e].map(a), (e) => _(Rt(t, `padding${e}`)) + _(Rt(t, `border${e}Width`))) : 0;
  }
  function Oe(t) {
    for (const e in Ce) for (const i in Ce[e]) if (Ce[e][i] === t) return Ce[e][1 - i];
    return t;
  }
  function Ne(t, e = "width", i = window, n = !1) {
    return I(t)
      ? j(He(t), (t) => {
          const s = je(t);
          return s
            ? (function (t, e) {
                return (t * _(e)) / 100;
              })(
                "vh" === s
                  ? Le ||
                      (qe ||
                        ((qe = Se("<div>")),
                        Rt(qe, { height: "100vh", position: "fixed" }),
                        Dt(window, "resize", () => (Le = null))),
                      ce(document.body, qe),
                      (Le = qe.clientHeight),
                      pe(qe),
                      Le)
                  : "vw" === s
                  ? Pe(M(i))
                  : n
                  ? i[`offset${a(e)}`]
                  : Te(i)[e],
                t,
              )
            : t;
        })
      : _(t);
  }
  const ze = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
    He = Z((t) => t.toString().replace(/\s/g, "").match(ze) || []),
    Fe = /(?:v[hw]|%)$/,
    je = Z((t) => (t.match(Fe) || [])[0]);
  let Le, qe;
  const We = typeof window < "u",
    Ve = We && "rtl" === document.dir,
    Re = We && "ontouchstart" in window,
    Ue = We && window.PointerEvent,
    Ye = Ue ? "pointerdown" : Re ? "touchstart" : "mousedown",
    Xe = Ue ? "pointermove" : Re ? "touchmove" : "mousemove",
    Je = Ue ? "pointerup" : Re ? "touchend" : "mouseup",
    Ge = Ue ? "pointerenter" : Re ? "" : "mouseenter",
    Ze = Ue ? "pointerleave" : Re ? "" : "mouseleave",
    Ke = Ue ? "pointercancel" : "touchcancel",
    Qe = {
      reads: [],
      writes: [],
      read(t) {
        return this.reads.push(t), ii(), t;
      },
      write(t) {
        return this.writes.push(t), ii(), t;
      },
      clear(t) {
        si(this.reads, t), si(this.writes, t);
      },
      flush: ti,
    };
  function ti(t) {
    ni(Qe.reads), ni(Qe.writes.splice(0)), (Qe.scheduled = !1), (Qe.reads.length || Qe.writes.length) && ii(t + 1);
  }
  const ei = 4;
  function ii(t) {
    Qe.scheduled ||
      ((Qe.scheduled = !0), t && t < ei ? Promise.resolve().then(() => ti(t)) : requestAnimationFrame(() => ti(1)));
  }
  function ni(t) {
    let e;
    for (; (e = t.shift()); )
      try {
        e();
      } catch (t) {
        console.error(t);
      }
  }
  function si(t, e) {
    const i = t.indexOf(e);
    return ~i && t.splice(i, 1);
  }
  function oi() {}
  function ri(t, e, i = {}, { intersecting: n = !0 } = {}) {
    const s = new IntersectionObserver(
      n
        ? (t, i) => {
            t.some((t) => t.isIntersecting) && e(t, i);
          }
        : e,
      i,
    );
    for (const e of D(t)) s.observe(e);
    return s;
  }
  oi.prototype = {
    positions: [],
    init() {
      let t;
      (this.positions = []),
        (this.unbind = Dt(document, "mousemove", (e) => (t = Wt(e)))),
        (this.interval = setInterval(() => {
          t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift());
        }, 50));
    },
    cancel() {
      var t;
      null == (t = this.unbind) || t.call(this), clearInterval(this.interval);
    },
    movesTo(t) {
      if (this.positions.length < 2) return !1;
      const e = t.getBoundingClientRect(),
        { left: i, right: n, top: s, bottom: o } = e,
        [r] = this.positions,
        a = z(this.positions),
        l = [r, a];
      return (
        !U(a, e) &&
        [
          [
            { x: i, y: s },
            { x: n, y: o },
          ],
          [
            { x: i, y: o },
            { x: n, y: s },
          ],
        ].some((t) => {
          const i = (function ([{ x: t, y: e }, { x: i, y: n }], [{ x: s, y: o }, { x: r, y: a }]) {
            const l = (a - o) * (i - t) - (r - s) * (n - e);
            if (0 === l) return !1;
            const h = ((r - s) * (e - o) - (a - o) * (t - s)) / l;
            return !(h < 0) && { x: t + h * (i - t), y: e + h * (n - e) };
          })(l, t);
          return i && U(i, e);
        })
      );
    },
  };
  const ai = We && window.ResizeObserver;
  function li(t, e, i = { box: "border-box" }) {
    if (ai) return di(ResizeObserver, t, e, i);
    const n = [Dt(window, "load resize", e), Dt(document, "loadedmetadata load", e, !0)];
    return { disconnect: () => n.map((t) => t()) };
  }
  function hi(t) {
    return { disconnect: Dt([window, window.visualVieairort], "resize", t) };
  }
  function ci(t, e, i) {
    return di(MutationObserver, t, e, i);
  }
  function di(t, e, i, n) {
    const s = new t(i);
    for (const t of D(e)) s.observe(t, n);
    return s;
  }
  function ui(t) {
    if ((vi(t) && $i(t, { func: "playVideo", method: "play" }), gi(t)))
      try {
        t.play().catch(V);
      } catch {}
  }
  function fi(t) {
    vi(t) && $i(t, { func: "pauseVideo", method: "pause" }), gi(t) && t.pause();
  }
  function pi(t) {
    vi(t) && $i(t, { func: "mute", method: "setVolume", value: 0 }), gi(t) && (t.muted = !0);
  }
  function mi(t) {
    return gi(t) || vi(t);
  }
  function gi(t) {
    return re(t, "video");
  }
  function vi(t) {
    return re(t, "iframe") && (bi(t) || wi(t));
  }
  function bi(t) {
    return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }
  function wi(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }
  async function $i(t, e) {
    await (function (t) {
      if (t[yi]) return t[yi];
      const e = bi(t),
        i = wi(t),
        n = ++Si;
      let s;
      return (t[yi] = new Promise((o) => {
        e &&
          Ot(t, "load", () => {
            const e = () => xi(t, { event: "listening", id: n });
            (s = setInterval(e, 100)), e();
          }),
          Ot(window, "message", o, !1, ({ data: t }) => {
            try {
              return (
                (t = JSON.parse(t)),
                (e && (null == t ? void 0 : t.id) === n && "onReady" === t.event) ||
                  (i && Number(null == t ? void 0 : t.player_id) === n)
              );
            } catch {}
          }),
          (t.src = `${t.src}${c(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${n}`}`);
      }).then(() => clearInterval(s)));
    })(t),
      xi(t, e);
  }
  function xi(t, e) {
    try {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    } catch {}
  }
  const yi = "_ukPlayer";
  let Si = 0;
  function Ii(t, e = 0, i = 0) {
    return (
      !!st(t) &&
      R(
        ...Ai(t)
          .map((t) => {
            const { top: n, left: s, bottom: o, right: r } = Bi(t);
            return { top: n - e, left: s - i, bottom: o + e, right: r + i };
          })
          .concat(Ee(t)),
      )
    );
  }
  function ki(t, { offset: e = 0 } = {}) {
    const i = st(t) ? Ti(t, !1, ["hidden"]) : [];
    return i.reduce(
      (n, s, o) => {
        const { scrollTop: r, scrollHeight: a, offsetHeight: l } = s,
          h = Bi(s),
          c = a - h.height,
          { height: d, top: u } = i[o - 1] ? Bi(i[o - 1]) : Ee(t);
        let f = Math.ceil(u - h.top - e + r);
        return (
          e > 0 && l < d + e ? (f += e) : (e = 0),
          f > c ? ((e -= f - c), (f = c)) : f < 0 && ((e -= f), (f = 0)),
          () =>
            (function (t, e) {
              return new Promise((i) => {
                const n = t.scrollTop,
                  s = (function (t) {
                    return 40 * Math.pow(t, 0.375);
                  })(Math.abs(e)),
                  o = Date.now();
                !(function r() {
                  const a = (function (t) {
                    return 0.5 * (1 - Math.cos(Math.PI * t));
                  })(W((Date.now() - o) / s));
                  (t.scrollTop = n + e * a), 1 === a ? i() : requestAnimationFrame(r);
                })();
              });
            })(s, f - r).then(n)
        );
      },
      () => Promise.resolve(),
    )();
  }
  function Ci(t, e = 0, i = 0) {
    if (!st(t)) return 0;
    const n = Ei(t, !0),
      { scrollHeight: s, scrollTop: o } = n,
      { height: r } = Bi(n),
      a = s - r,
      l = Be(t)[0] - Be(n)[0],
      h = Math.max(0, l - r + e);
    return W((o - h) / (Math.min(a, l + t.offsetHeight - i) - h));
  }
  function Ti(t, e = !1, i = []) {
    const n = _i(t);
    let s = pt(t).reverse();
    s = s.slice(s.indexOf(n) + 1);
    const o = d(s, (t) => "fixed" === Rt(t, "position"));
    return (
      ~o && (s = s.slice(o)),
      [n]
        .concat(
          s.filter(
            (t) =>
              Rt(t, "overflow")
                .split(" ")
                .some((t) => c(["auto", "scroll", ...i], t)) &&
              (!e || t.scrollHeight > Bi(t).height),
          ),
        )
        .reverse()
    );
  }
  function Ei(...t) {
    return Ti(...t)[0];
  }
  function Ai(t) {
    return Ti(t, !1, ["hidden", "clip"]);
  }
  function Bi(t) {
    const e = M(t),
      {
        visualVieairort: i,
        document: { documentElement: n },
      } = e;
    let s = t === _i(t) ? e : t;
    if (b(s) && i) {
      let { height: t, width: e, scale: n, pageTop: s, pageLeft: o } = i;
      return (
        (t = Math.round(t * n)),
        (e = Math.round(e * n)),
        { height: t, width: e, top: s, left: o, bottom: s + t, right: o + e }
      );
    }
    let o = Ee(s);
    if ("inline" === Rt(s, "display")) return o;
    for (let [t, e, i, r] of [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"],
    ]) {
      b(s) ? (s = n) : (o[i] += _(Rt(s, `border-${i}-width`)));
      const l = o[t] % 1;
      (o[t] = o[e] = s[`client${a(t)}`] - (l ? (l < 0.5 ? -l : 1 - l) : 0)), (o[r] = o[t] + o[i]);
    }
    return o;
  }
  function _i(t) {
    return M(t).document.scrollingElement;
  }
  const Pi = [
    ["width", "x", "left", "right"],
    ["height", "y", "top", "bottom"],
  ];
  function Di(t, e, i) {
    (i = {
      attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach },
      offset: [0, 0],
      placement: [],
      ...i,
    }),
      u(e) || (e = [e, e]),
      Ee(t, Mi(t, e, i));
  }
  function Mi(t, e, i) {
    const n = Oi(t, e, i),
      { boundary: s, vieairortOffset: o = 0, placement: r } = i;
    let a = n;
    for (const [l, [h, , c, d]] of Object.entries(Pi)) {
      const u = Hi(t, e[l], o, s, l);
      if (qi(n, u, l)) continue;
      let f = 0;
      if ("flip" === r[l]) {
        const s = i.attach.target[l];
        if ((s === d && n[d] <= u[d]) || (s === c && n[c] >= u[c])) continue;
        f = Wi(t, e, i, l)[c] - n[c];
        const r = Fi(t, e[l], o, l);
        if (!qi(Ni(n, f, l), r, l)) {
          if (qi(n, r, l)) continue;
          if (i.recursion) return !1;
          const s = Vi(t, e, i);
          if (s && qi(s, r, 1 - l)) return s;
          continue;
        }
      } else if ("shift" === r[l]) {
        const t = Ee(e[l]),
          { offset: s } = i;
        f = W(W(n[c], u[c], u[d] - n[h]), t[c] - n[h] + s[l], t[d] - s[l]) - n[c];
      }
      a = Ni(a, f, l);
    }
    return a;
  }
  function Oi(t, e, i) {
    let { attach: n, offset: s } = {
        attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach },
        offset: [0, 0],
        ...i,
      },
      o = Ee(t);
    for (const [t, [i, , r, a]] of Object.entries(Pi)) {
      const l = n.target[t] === n.element[t] ? Bi(e[t]) : Ee(e[t]);
      o = Ni(o, l[r] - o[r] + zi(n.target[t], a, l[i]) - zi(n.element[t], a, o[i]) + +s[t], t);
    }
    return o;
  }
  function Ni(t, e, i) {
    const [, n, s, o] = Pi[i],
      r = { ...t };
    return (r[s] = t[n] = t[s] + e), (r[o] += e), r;
  }
  function zi(t, e, i) {
    return "center" === t ? i / 2 : t === e ? i : 0;
  }
  function Hi(t, e, i, n, s) {
    let o = Li(...ji(t, e).map(Bi));
    return i && ((o[Pi[s][2]] += i), (o[Pi[s][3]] -= i)), n && (o = Li(o, Ee(u(n) ? n[s] : n))), o;
  }
  function Fi(t, e, i, n) {
    const [s, o, r, l] = Pi[n],
      [h] = ji(t, e),
      c = Bi(h);
    return (
      ["auto", "scroll"].includes(Rt(h, `overflow-${o}`)) &&
        ((c[r] -= h[`scroll${a(r)}`]), (c[l] = c[r] + h[`scroll${a(s)}`])),
      (c[r] += i),
      (c[l] -= i),
      c
    );
  }
  function ji(t, e) {
    return Ai(e).filter((e) => ft(t, e));
  }
  function Li(...t) {
    let e = {};
    for (const i of t)
      for (const [, , t, n] of Pi)
        (e[t] = Math.max(e[t] || 0, i[t])), (e[n] = Math.min(...[e[n], i[n]].filter(Boolean)));
    return e;
  }
  function qi(t, e, i) {
    const [, , n, s] = Pi[i];
    return t[n] >= e[n] && t[s] <= e[s];
  }
  function Wi(t, e, { offset: i, attach: n }, s) {
    return Oi(t, e, { attach: { element: Ri(n.element, s), target: Ri(n.target, s) }, offset: Yi(i, s) });
  }
  function Vi(t, e, i) {
    return Mi(t, e, {
      ...i,
      attach: { element: i.attach.element.map(Ui).reverse(), target: i.attach.target.map(Ui).reverse() },
      offset: i.offset.reverse(),
      placement: i.placement.reverse(),
      recursion: !0,
    });
  }
  function Ri(t, e) {
    const i = [...t],
      n = Pi[e].indexOf(t[e]);
    return ~n && (i[e] = Pi[e][1 - (n % 2) + 2]), i;
  }
  function Ui(t) {
    for (let e = 0; e < Pi.length; e++) {
      const i = Pi[e].indexOf(t);
      if (~i) return Pi[1 - e][(i % 2) + 2];
    }
  }
  function Yi(t, e) {
    return ((t = [...t])[e] *= -1), t;
  }
  var Xi = Object.freeze({
    __proto__: null,
    $: Se,
    $$: Ie,
    Animation: oe,
    Dimensions: J,
    MouseTracker: oi,
    Transition: ee,
    addClass: Yt,
    after: ue,
    append: ce,
    apply: ye,
    assign: p,
    attr: K,
    before: de,
    boxModelAdjust: Me,
    camelize: r,
    children: mt,
    clamp: W,
    closest: ut,
    createEvent: zt,
    css: Rt,
    data: et,
    dimensions: Te,
    each: H,
    empty: ae,
    endsWith: h,
    escape: Pt,
    fastdom: Qe,
    filter: ct,
    find: xt,
    findAll: yt,
    findIndex: d,
    flipPosition: Oe,
    fragment: $e,
    getEventPos: Wt,
    getIndex: G,
    getTargetedElement: bt,
    hasAttr: Q,
    hasClass: Zt,
    hasOwn: i,
    hasTouch: Re,
    height: _e,
    html: le,
    hyphenate: s,
    inBrowser: We,
    includes: c,
    index: gt,
    intersectRect: R,
    isArray: u,
    isBoolean: S,
    isDocument: w,
    isElement: x,
    isEmpty: T,
    isEqual: O,
    isFocusable: lt,
    isFunction: m,
    isInView: Ii,
    isInput: rt,
    isNode: $,
    isNumber: k,
    isNumeric: C,
    isObject: g,
    isPlainObject: v,
    isRtl: Ve,
    isSameSiteAnchor: vt,
    isString: I,
    isTag: re,
    isTouch: qt,
    isUndefined: E,
    isVideo: mi,
    isVisible: st,
    isVoidElement: nt,
    isWindow: b,
    last: z,
    matches: dt,
    memoize: Z,
    mute: pi,
    noop: V,
    observeIntersection: ri,
    observeMutation: ci,
    observeResize: li,
    observeVieairortResize: hi,
    off: Mt,
    offset: Ee,
    offsetPosition: Be,
    offsetVieairort: Bi,
    on: Dt,
    once: Ot,
    overfloairarents: Ai,
    parent: ht,
    parents: pt,
    pause: fi,
    pick: q,
    play: ui,
    pointInRect: U,
    pointerCancel: Ke,
    pointerDown: Ye,
    pointerEnter: Ge,
    pointerLeave: Ze,
    pointerMove: Xe,
    pointerUp: Je,
    position: Ae,
    positionAt: Di,
    prepend: he,
    propName: Ut,
    query: wt,
    queryAll: $t,
    ready: function (t) {
      "loading" === document.readyState ? Ot(document, "DOMContentLoaded", t) : t();
    },
    remove: pe,
    removeAttr: tt,
    removeClass: Xt,
    removeClasses: Jt,
    replaceClass: Gt,
    scrollIntoView: ki,
    scrollParent: Ei,
    scrollParents: Ti,
    scrolledOver: Ci,
    selFocusable: at,
    selInput: ot,
    sortBy: F,
    startsWith: l,
    sumBy: j,
    swap: N,
    toArray: f,
    toBoolean: A,
    toEventTargets: Lt,
    toFloat: _,
    toNode: P,
    toNodes: D,
    toNumber: B,
    toPx: Ne,
    toWindow: M,
    toggleClass: Kt,
    trigger: Nt,
    ucfirst: a,
    uniqueBy: L,
    unwrap: ve,
    width: Pe,
    within: ft,
    wrapAll: me,
    wrapInner: ge,
  });
  function Ji(t, e, i) {
    t._watches.push({ name: i, ...(v(e) ? e : { handler: e }) });
  }
  function Gi(t, e = "update") {
    t._connected &&
      t._updates.length &&
      (t._queued ||
        ((t._queued = new Set()),
        Qe.read(() => {
          t._connected &&
            (function (t, e) {
              for (const { read: i, write: n, events: s = [] } of t._updates) {
                if (!e.has("update") && !s.some((t) => e.has(t))) continue;
                let o;
                i && ((o = i.call(t, t._data, e)), o && v(o) && p(t._data, o)),
                  n &&
                    !1 !== o &&
                    Qe.write(() => {
                      t._connected && n.call(t, t._data, e);
                    });
              }
            })(t, t._queued),
            delete t._queued;
        })),
      t._queued.add(e.type || e));
  }
  function Zi(t, e, n) {
    (t._hasComputed = !0),
      Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: s, $props: o, $el: r } = t;
          return i(s, e) || (s[e] = (n.get || n).call(t, o, r)), s[e];
        },
        set(i) {
          const { _computed: s } = t;
          (s[e] = n.set ? n.set.call(t, i) : i), E(s[e]) && delete s[e];
        },
      });
  }
  function Ki(t) {
    t._hasComputed &&
      ((function (t, e) {
        t._updates.unshift(e);
      })(t, {
        read: () =>
          (function (t, e) {
            for (const { name: n, handler: s, immediate: o = !0 } of t._watches)
              ((t._initial && o) || (i(e, n) && !O(e[n], t[n]))) && s.call(t, t[n], e[n]);
            t._initial = !1;
          })(t, Qi(t)),
        events: ["resize", "computed"],
      }),
      tn ||
        ((en = new Set()),
        (tn = new MutationObserver(() => {
          for (const t of en) Gi(t, "computed");
        })),
        tn.observe(document, { childList: !0, subtree: !0 })),
      en.add(t));
  }
  function Qi(t) {
    const e = { ...t._computed };
    return (t._computed = {}), e;
  }
  let tn, en;
  function nn(t, e, i) {
    let {
      name: n,
      el: s,
      handler: o,
      capture: r,
      passive: a,
      delegate: l,
      filter: h,
      self: c,
    } = v(e) ? e : { name: i, handler: e };
    (s = m(s) ? s.call(t, t) : s || t.$el),
      u(s)
        ? s.forEach((n) => nn(t, { ...e, el: n }, i))
        : !s ||
          (h && !h.call(t)) ||
          t._events.push(
            Dt(s, n, l ? (I(l) ? l : l.call(t, t)) : null, I(o) ? t[o] : o.bind(t), {
              passive: a,
              capture: r,
              self: c,
            }),
          );
  }
  function sn(t, ...e) {
    t._observers.push(...e);
  }
  function on(t, e) {
    let { observe: n, target: s = t.$el, handler: o, options: r, filter: a, args: l } = e;
    if (a && !a.call(t, t)) return;
    const h = `_observe${t._observers.length}`;
    m(s) && !i(t, h) && Zi(t, h, () => s.call(t, t)), (o = I(o) ? t[o] : o.bind(t)), m(r) && (r = r.call(t, t));
    const c = n(i(t, h) ? t[h] : s, o, r, l);
    m(s) && u(t[h]) && c.unobserve && Ji(t, { handler: rn(c), immediate: !1 }, h), sn(t, c);
  }
  function rn(t) {
    return (e, i) => {
      for (const n of i) !c(e, n) && t.unobserve(n);
      for (const n of e) !c(i, n) && t.observe(n);
    };
  }
  const an = {};
  function ln(t, e, i) {
    return an.computed(m(t) ? t.call(i, i) : t, m(e) ? e.call(i, i) : e);
  }
  function hn(t, e) {
    return (t = t && !u(t) ? [t] : t), e ? (t ? t.concat(e) : u(e) ? e : [e]) : t;
  }
  function cn(t, e) {
    return E(e) ? t : e;
  }
  function dn(t, e, n) {
    const s = {};
    if ((m(e) && (e = e.options), e.extends && (t = dn(t, e.extends, n)), e.mixins))
      for (const i of e.mixins) t = dn(t, i, n);
    for (const e in t) o(e);
    for (const n in e) i(t, n) || o(n);
    function o(i) {
      s[i] = (an[i] || cn)(t[i], e[i], n);
    }
    return s;
  }
  function un(t, e = []) {
    try {
      return t
        ? l(t, "{")
          ? JSON.parse(t)
          : e.length && !c(t, ":")
          ? { [e[0]]: t }
          : t.split(";").reduce((t, e) => {
              const [i, n] = e.split(/:(.*)/);
              return i && !E(n) && (t[i.trim()] = n.trim()), t;
            }, {})
        : {};
    } catch {
      return {};
    }
  }
  function fn(t, e) {
    return t === Boolean
      ? A(e)
      : t === Number
      ? B(e)
      : "list" === t
      ? (function (t) {
          return u(t) ? t : I(t) ? t.split(/,(?![^(]*\))/).map((t) => (C(t) ? B(t) : A(t.trim()))) : [t];
        })(e)
      : t === Object && I(e)
      ? un(e)
      : t
      ? t(e)
      : e;
  }
  function pn(t) {
    const e = {},
      { args: i = [], props: n = {}, el: o, id: a } = t;
    if (!n) return e;
    for (const t in n) {
      const i = s(t);
      let r = et(o, i);
      E(r) || ((r = (n[t] === Boolean && "" === r) || fn(n[t], r)), ("target" !== i || !l(r, "_")) && (e[t] = r));
    }
    const h = un(et(o, a), i);
    for (const t in h) {
      const i = r(t);
      E(n[i]) || (e[i] = fn(n[i], h[t]));
    }
    return e;
  }
  function mn(t, e) {
    return t.every((t) => !t || !i(t, e));
  }
  function gn(t, e) {
    var i;
    null == (i = t.$options[e]) || i.forEach((e) => e.call(t));
  }
  function vn(t) {
    t._connected ||
      ((function (t) {
        const e = pn(t.$options);
        for (let i in e) E(e[i]) || (t.$props[i] = e[i]);
        const i = [t.$options.computed, t.$options.methods];
        for (let n in t.$props) n in e && mn(i, n) && (t[n] = t.$props[n]);
      })(t),
      gn(t, "beforeConnect"),
      (t._connected = !0),
      (function (t) {
        t._events = [];
        for (const e of t.$options.events || [])
          if (i(e, "handler")) nn(t, e);
          else for (const i in e) nn(t, e[i], i);
      })(t),
      (function (t) {
        (t._data = {}), (t._updates = [...(t.$options.update || [])]);
      })(t),
      (function (t) {
        t._watches = [];
        for (const e of t.$options.watch || []) for (const [i, n] of Object.entries(e)) Ji(t, n, i);
        t._initial = !0;
      })(t),
      (function (t) {
        t._observers = [];
        for (const e of t.$options.observe || [])
          if (i(e, "handler")) on(t, e);
          else for (const i of e) on(t, i);
      })(t),
      (function (t) {
        const { $options: e, $props: i } = t,
          { id: n, props: o, el: a } = e;
        if (!o) return;
        const l = Object.keys(o),
          h = l.map((t) => s(t)).concat(n),
          c = new MutationObserver((s) => {
            const o = pn(e);
            s.some(({ attributeName: t }) => {
              const e = t.replace("data-", "");
              return (e === n ? l : [r(e), r(t)]).some((t) => !E(o[t]) && o[t] !== i[t]);
            }) && t.$reset();
          });
        c.observe(a, { attributes: !0, attributeFilter: h.concat(h.map((t) => `data-${t}`)) }), sn(t, c);
      })(t),
      Ki(t),
      gn(t, "connected"),
      Gi(t));
  }
  function bn(t) {
    t._connected &&
      (gn(t, "beforeDisconnect"),
      (function (t) {
        t._events.forEach((t) => t()), delete t._events;
      })(t),
      (function (t) {
        delete t._data;
      })(t),
      (function (t) {
        for (const e of t._observers) e.disconnect();
      })(t),
      (function (t) {
        null == en || en.delete(t), Qi(t);
      })(t),
      gn(t, "disconnected"),
      (t._connected = !1));
  }
  (an.events =
    an.watch =
    an.observe =
    an.created =
    an.beforeConnect =
    an.connected =
    an.beforeDisconnect =
    an.disconnected =
    an.destroy =
      hn),
    (an.args = function (t, e) {
      return !1 !== e && hn(e || t);
    }),
    (an.update = function (t, e) {
      return F(hn(t, m(e) ? { read: e } : e), "order");
    }),
    (an.props = function (t, e) {
      if (u(e)) {
        const t = {};
        for (const i of e) t[i] = String;
        e = t;
      }
      return an.methods(t, e);
    }),
    (an.computed = an.methods =
      function (t, e) {
        return e ? (t ? { ...t, ...e } : e) : t;
      }),
    (an.i18n = an.data =
      function (t, e, i) {
        return i
          ? ln(t, e, i)
          : e
          ? t
            ? function (i) {
                return ln(t, e, i);
              }
            : e
          : t;
      });
  let wn = 0;
  function $n(t, e = {}) {
    (e.data = (function ({ data: t = {} }, { args: e = [], props: i = {} }) {
      u(t) && (t = t.slice(0, e.length).reduce((t, i, n) => (v(i) ? p(t, i) : (t[e[n]] = i), t), {}));
      for (const e in t) E(t[e]) ? delete t[e] : i[e] && (t[e] = fn(i[e], t[e]));
      return t;
    })(e, t.constructor.options)),
      (t.$options = dn(t.constructor.options, e, t)),
      (t.$props = {}),
      (t._uid = wn++),
      (function (t) {
        const { data: e = {} } = t.$options;
        for (const i in e) t.$props[i] = t[i] = e[i];
      })(t),
      (function (t) {
        const { methods: e } = t.$options;
        if (e) for (const i in e) t[i] = e[i].bind(t);
      })(t),
      (function (t) {
        const { computed: e } = t.$options;
        if (((t._computed = {}), e)) for (const i in e) Zi(t, i, e[i]);
      })(t),
      gn(t, "created"),
      e.el && t.$mount(e.el);
  }
  const xn = function (t) {
    $n(this, t);
  };
  (xn.util = Xi), (xn.options = {}), (xn.version = "3.16.24");
  const yn = "bdt-",
    Sn = "__uikit__",
    In = {};
  function kn(t, e) {
    var i;
    const n = yn + s(t);
    if (!e) return v(In[n]) && (In[n] = xn.extend(In[n])), In[n];
    (t = r(t)), (xn[t] = (e, i) => Cn(t, e, i));
    const o = v(e) ? { ...e } : e.options;
    return (
      (o.id = n),
      (o.name = t),
      null == (i = o.install) || i.call(o, xn, o, t),
      xn._initialized && !o.functional && requestAnimationFrame(() => Cn(t, `[${n}],[data-${n}]`)),
      (In[n] = o)
    );
  }
  function Cn(t, e, i, ...n) {
    const s = kn(t);
    return s.options.functional ? new s({ data: v(e) ? e : [e, i, ...n] }) : e ? Ie(e).map(o)[0] : o();
    function o(e) {
      const n = En(e, t);
      if (n) {
        if (!i) return n;
        n.$destroy();
      }
      return new s({ el: e, data: i });
    }
  }
  function Tn(t) {
    return (null == t ? void 0 : t[Sn]) || {};
  }
  function En(t, e) {
    return Tn(t)[e];
  }
  function An(t, e) {
    t = t ? P(t) : document.body;
    for (const i of pt(t).reverse()) Bn(i, e);
    ye(t, (t) => Bn(t, e));
  }
  function Bn(t, e) {
    const i = Tn(t);
    for (const t in i) Gi(i[t], e);
  }
  function _n(t, e = t.$el, i = "") {
    if (e.id) return e.id;
    let n = `${t.$options.id}-${t._uid}${i}`;
    return Se(`#${n}`) && (n = _n(t, e, `${i}-2`)), n;
  }
  var Pn;
  function Dn(t) {
    Nt(document, "uikit:init", t),
      document.body && ye(document.body, Nn),
      new MutationObserver((t) => t.forEach(Mn)).observe(document, { childList: !0, subtree: !0 }),
      new MutationObserver((t) => t.forEach(On)).observe(document, { attributes: !0, subtree: !0 }),
      (t._initialized = !0);
  }
  function Mn({ addedNodes: t, removedNodes: e }) {
    for (const e of t) ye(e, Nn);
    for (const t of e) ye(t, zn);
  }
  function On({ target: t, attributeName: e }) {
    var i;
    const n = Hn(e);
    if (n) {
      if (Q(t, e)) return void Cn(n, t);
      null == (i = En(t, n)) || i.$destroy();
    }
  }
  function Nn(t) {
    const e = Tn(t);
    for (const i in Tn(t)) vn(e[i]);
    for (const e of t.getAttributeNames()) {
      const i = Hn(e);
      i && Cn(i, t);
    }
  }
  function zn(t) {
    const e = Tn(t);
    for (const i in Tn(t)) bn(e[i]);
  }
  function Hn(t) {
    l(t, "data-") && (t = t.slice(5));
    const e = In[t];
    return e && (v(e) ? e : e.options).name;
  }
  (function (t) {
    let e;
    (t.component = kn),
      (t.getComponents = Tn),
      (t.getComponent = En),
      (t.update = An),
      (t.use = function (t) {
        if (!t.installed) return t.call(null, this), (t.installed = !0), this;
      }),
      (t.mixin = function (t, e) {
        (e = (I(e) ? this.component(e) : e) || this).options = dn(e.options, t);
      }),
      (t.extend = function (t) {
        t || (t = {});
        const e = this,
          i = function (t) {
            $n(this, t);
          };
        return (
          ((i.prototype = Object.create(e.prototype)).constructor = i),
          (i.options = dn(e.options, t)),
          (i.super = e),
          (i.extend = e.extend),
          i
        );
      }),
      Object.defineProperty(t, "container", {
        get: () => e || document.body,
        set(t) {
          e = Se(t);
        },
      });
  })(xn),
    ((Pn = xn).prototype.$mount = function (t) {
      const e = this;
      (function (t, e) {
        t[Sn] || (t[Sn] = {}), (t[Sn][e.$options.name] = e);
      })(t, e),
        (e.$options.el = t),
        ft(t, document) && vn(e);
    }),
    (Pn.prototype.$destroy = function (t = !1) {
      const e = this,
        { el: i } = e.$options;
      i && bn(e),
        gn(e, "destroy"),
        (function (t, e) {
          var i;
          null == (i = t[Sn]) || delete i[e.$options.name], T(t[Sn]) || delete t[Sn];
        })(i, e),
        t && pe(e.$el);
    }),
    (Pn.prototype.$create = Cn),
    (Pn.prototype.$emit = function (t) {
      Gi(this, t);
    }),
    (Pn.prototype.$update = function (t = this.$el, e) {
      An(t, e);
    }),
    (Pn.prototype.$reset = function () {
      bn(this), vn(this);
    }),
    (Pn.prototype.$getComponent = En),
    Object.defineProperties(Pn.prototype, {
      $el: {
        get() {
          return this.$options.el;
        },
      },
      $container: Object.getOwnPropertyDescriptor(Pn, "container"),
    });
  var Fn = {
      connected() {
        Yt(this.$el, this.$options.id);
      },
    },
    jn = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String,
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        velocity: 0.2,
        origin: !1,
        transition: "ease",
        clsEnter: "bdt-togglabe-enter",
        clsLeave: "bdt-togglabe-leave",
      },
      computed: {
        hasAnimation: ({ animation: t }) => !!t[0],
        hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => l(t[0], e)),
      },
      methods: {
        async toggleElement(t, e, i) {
          try {
            return (
              await Promise.all(
                D(t).map((t) => {
                  const n = S(e) ? e : !this.isToggled(t);
                  if (!Nt(t, "before" + (n ? "show" : "hide"), [this])) return Promise.reject();
                  const s = (m(i) ? i : !1 !== i && this.hasAnimation ? (this.hasTransition ? qn : Wn) : Ln)(
                      t,
                      n,
                      this,
                    ),
                    o = n ? this.clsEnter : this.clsLeave;
                  Yt(t, o), Nt(t, n ? "show" : "hide", [this]);
                  const r = () => {
                    Xt(t, o), Nt(t, n ? "shown" : "hidden", [this]);
                  };
                  return s ? s.then(r, () => (Xt(t, o), Promise.reject())) : r();
                }),
              ),
              !0
            );
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return (
            !!Zt((t = P(t)), this.clsEnter) ||
            (!Zt(t, this.clsLeave) && (this.cls ? Zt(t, this.cls.split(" ")[0]) : st(t)))
          );
        },
        _toggle(t, e) {
          if (!t) return;
          let i;
          (e = !!e),
            this.cls
              ? ((i = c(this.cls, " ") || e !== Zt(t, this.cls)), i && Kt(t, this.cls, c(this.cls, " ") ? void 0 : e))
              : ((i = e === t.hidden), i && (t.hidden = !e)),
            Ie("[autofocus]", t).some((t) => (st(t) ? t.focus() || !0 : t.blur())),
            i && Nt(t, "toggled", [e, this]);
        },
      },
    };
  function Ln(t, e, { _toggle: i }) {
    return oe.cancel(t), ee.cancel(t), i(t, e);
  }
  async function qn(t, e, { animation: i, duration: n, velocity: s, transition: o, _toggle: r }) {
    var a;
    const [l = "reveal", h = "top"] = (null == (a = i[0]) ? void 0 : a.split("-")) || [],
      d = [
        ["left", "right"],
        ["top", "bottom"],
      ],
      u = d[c(d[0], h) ? 0 : 1],
      f = u[1] === h,
      p = ["width", "height"][d.indexOf(u)],
      m = `margin-${u[0]}`,
      g = `margin-${h}`;
    let v = Te(t)[p];
    const b = ee.inProgress(t);
    await ee.cancel(t), e && r(t, !0);
    const w = Object.fromEntries(
        ["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", m, g].map((e) => [
          e,
          t.style[e],
        ]),
      ),
      $ = Te(t),
      x = _(Rt(t, m)),
      y = _(Rt(t, g)),
      S = $[p] + y;
    !b && !e && (v += y);
    const [I] = ge(t, "<div>");
    Rt(I, {
      boxSizing: "border-box",
      height: $.height,
      width: $.width,
      ...Rt(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", g]),
    }),
      Rt(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [g]: 0,
        width: $.width,
        height: $.height,
        overflow: "hidden",
        [p]: v,
      });
    const k = v / S;
    n = (s * S + n) * (e ? 1 - k : k);
    const C = { [p]: e ? S : 0 };
    f && (Rt(t, m, S - v + x), (C[m] = e ? x : S + x)),
      !f ^ ("reveal" === l) && (Rt(I, m, -S + v), ee.start(I, { [m]: e ? 0 : -S }, n, o));
    try {
      await ee.start(t, C, n, o);
    } finally {
      Rt(t, w), ve(I.firstChild), e || r(t, !1);
    }
  }
  function Wn(t, e, i) {
    oe.cancel(t);
    const { animation: n, duration: s, _toggle: o } = i;
    return e ? (o(t, !0), oe.in(t, n[0], s, i.origin)) : oe.out(t, n[1] || n[0], s, i.origin).then(() => o(t, !1));
  }
  const Vn = 9,
    Rn = 27,
    Un = 32,
    Yn = 35,
    Xn = 36,
    Jn = 37,
    Gn = 38,
    Zn = 39,
    Kn = 40;
  function Qn(t) {
    return rs(li, t, "resize");
  }
  function ts(t) {
    return rs(ri, t);
  }
  function es(t) {
    return rs(ci, t);
  }
  function is(t = {}) {
    return ts({
      handler: function (e, i) {
        const { targets: n = this.$el, preload: s = 5 } = t;
        for (const t of D(m(n) ? n(this) : n))
          Ie('[loading="lazy"]', t)
            .slice(0, s - 1)
            .forEach((t) => tt(t, "loading"));
        for (const t of e.filter(({ isIntersecting: t }) => t).map(({ target: t }) => t)) i.unobserve(t);
      },
      ...t,
    });
  }
  function ns() {
    return rs((t, e) => hi(e));
  }
  function ss(t) {
    return rs(
      (t, e) => ({ disconnect: Dt(t, "scroll", e, { passive: !0, capture: !0 }) }),
      { target: () => document, ...t },
      "scroll",
    );
  }
  function os(t) {
    return {
      observe: (t, e) => ({ observe: V, unobserve: V, disconnect: Dt(t, Ye, e, { passive: !0 }) }),
      handler(t) {
        if (!qt(t)) return;
        const e = Wt(t),
          i = "tagName" in t.target ? t.target : ht(t.target);
        Ot(document, `${Je} ${Ke} scroll`, (t) => {
          const { x: n, y: s } = Wt(t);
          (("scroll" !== t.type && i && n && Math.abs(e.x - n) > 100) || (s && Math.abs(e.y - s) > 100)) &&
            setTimeout(() => {
              Nt(i, "swipe"),
                Nt(
                  i,
                  `swipe${(function (t, e, i, n) {
                    return Math.abs(t - i) >= Math.abs(e - n)
                      ? t - i > 0
                        ? "Left"
                        : "Right"
                      : e - n > 0
                      ? "Up"
                      : "Down";
                  })(e.x, e.y, n, s)}`,
                );
            });
        });
      },
      ...t,
    };
  }
  function rs(t, e, i) {
    return {
      observe: t,
      handler() {
        this.$emit(i);
      },
      ...e,
    };
  }
  var as = {
    mixins: [Fn, jn],
    props: {
      animation: Boolean,
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      offset: Number,
    },
    data: {
      targets: "> *",
      active: !1,
      animation: !0,
      collapsible: !0,
      multiple: !1,
      clsOpen: "bdt-open",
      toggle: "> .bdt-accordion-title",
      content: "> .bdt-accordion-content",
      offset: 0,
    },
    computed: {
      items: ({ targets: t }, e) => Ie(t, e),
      toggles({ toggle: t }) {
        return this.items.map((e) => Se(t, e));
      },
      contents({ content: t }) {
        return this.items.map((e) => {
          var i;
          return (null == (i = e._wrapper) ? void 0 : i.firstElementChild) || Se(t, e);
        });
      },
    },
    watch: {
      items(t, e) {
        if (e || Zt(t, this.clsOpen)) return;
        const i = (!1 !== this.active && t[Number(this.active)]) || (!this.collapsible && t[0]);
        i && this.toggle(i, !1);
      },
      toggles() {
        this.$emit();
      },
      contents(t) {
        for (const e of t) {
          const t = Zt(
            this.items.find((t) => ft(e, t)),
            this.clsOpen,
          );
          ls(e, !t);
        }
        this.$emit();
      },
    },
    observe: is(),
    events: [
      {
        name: "click keydown",
        delegate() {
          return `${this.targets} ${this.$props.toggle}`;
        },
        async handler(t) {
          var e;
          ("keydown" === t.type && t.keyCode !== Un) ||
            (t.preventDefault(),
            null == (e = this._off) || e.call(this),
            (this._off = (function (t) {
              const e = Ei(t, !0);
              let i;
              return (
                (function n() {
                  i = requestAnimationFrame(() => {
                    const { top: i } = t.getBoundingClientRect();
                    i < 0 && (e.scrollTop += i), n();
                  });
                })(),
                () => requestAnimationFrame(() => cancelAnimationFrame(i))
              );
            })(t.target)),
            await this.toggle(gt(this.toggles, t.current)),
            this._off());
        },
      },
      {
        name: "shown hidden",
        self: !0,
        delegate() {
          return this.targets;
        },
        handler() {
          this.$emit();
        },
      },
    ],
    update() {
      const t = ct(this.items, `.${this.clsOpen}`);
      for (const e in this.items) {
        const i = this.toggles[e],
          n = this.contents[e];
        if (!i || !n) continue;
        (i.id = _n(this, i, `-title-${e}`)), (n.id = _n(this, n, `-content-${e}`));
        const s = c(t, this.items[e]);
        K(i, {
          role: re(i, "a") ? "button" : null,
          "aria-controls": n.id,
          "aria-expanded": s,
          "aria-disabled": !this.collapsible && t.length < 2 && s,
        }),
          K(n, { role: "region", "aria-labelledby": i.id }),
          re(n, "ul") && K(mt(n), "role", "presentation");
      }
    },
    methods: {
      toggle(t, e) {
        let i = [(t = this.items[G(t, this.items)])];
        const n = ct(this.items, `.${this.clsOpen}`);
        if ((!this.multiple && !c(n, i[0]) && (i = i.concat(n)), !(!this.collapsible && n.length < 2 && c(n, t))))
          return Promise.all(
            i.map((t) =>
              this.toggleElement(t, !c(n, t), (t, i) => {
                if ((Kt(t, this.clsOpen, i), !1 !== e && this.animation))
                  return (async function (t, e, { content: i, duration: n, velocity: s, transition: o }) {
                    var r;
                    (i = (null == (r = t._wrapper) ? void 0 : r.firstElementChild) || Se(i, t)),
                      t._wrapper || (t._wrapper = me(i, "<div>"));
                    const a = t._wrapper;
                    Rt(a, "overflow", "hidden");
                    const l = _(Rt(a, "height"));
                    await ee.cancel(a), ls(i, !1);
                    const h = j(["marginTop", "marginBottom"], (t) => Rt(i, t)) + Te(i).height,
                      c = l / h;
                    (n = (s * h + n) * (e ? 1 - c : c)),
                      Rt(a, "height", l),
                      await ee.start(a, { height: e ? h : 0 }, n, o),
                      ve(i),
                      delete t._wrapper,
                      e || ls(i, !0);
                  })(t, i, this);
                ls(Se(this.content, t), !i);
              }),
            ),
          );
      },
    },
  };
  function ls(t, e) {
    t && (t.hidden = e);
  }
  var hs = {
    mixins: [Fn, jn],
    args: "animation",
    props: { animation: Boolean, close: String },
    data: { animation: !0, selClose: ".bdt-alert-close", duration: 150 },
    events: {
      name: "click",
      delegate() {
        return this.selClose;
      },
      handler(t) {
        t.preventDefault(), this.close();
      },
    },
    methods: {
      async close() {
        await this.toggleElement(this.$el, !1, cs), this.$destroy(!0);
      },
    },
  };
  function cs(t, e, { duration: i, transition: n, velocity: s }) {
    const o = _(Rt(t, "height"));
    return (
      Rt(t, "height", o),
      ee.start(
        t,
        {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0,
        },
        s * o + i,
        n,
      )
    );
  }
  var ds = {
      args: "autoplay",
      props: { automute: Boolean, autoplay: Boolean },
      data: { automute: !1, autoplay: !0 },
      connected() {
        (this.inView = "inview" === this.autoplay),
          this.inView && !Q(this.$el, "preload") && (this.$el.preload = "none"),
          re(this.$el, "iframe") && !Q(this.$el, "allow") && (this.$el.allow = "autoplay"),
          this.automute && pi(this.$el);
      },
      observe: [ts({ args: { intersecting: !1 } }), Qn()],
      update: {
        read({ visible: t }) {
          return !!mi(this.$el) && { prev: t, visible: st(this.$el), inView: this.inView && Ii(this.$el) };
        },
        write({ prev: t, visible: e, inView: i }) {
          !e || (this.inView && !i) ? fi(this.$el) : ((!0 === this.autoplay && !t) || i) && ui(this.$el);
        },
        events: ["resize"],
      },
    },
    us = {
      mixins: [ds],
      props: { width: Number, height: Number },
      data: { automute: !0 },
      events: {
        "load loadedmetadata"() {
          this.$emit("resize");
        },
      },
      observe: Qn({ target: ({ $el: t }) => [fs(t) || ht(t)] }),
      update: {
        read() {
          const { ratio: t, cover: e } = J,
            { $el: i, width: n, height: s } = this;
          let o = { width: n, height: s };
          if (!n || !s) {
            const e = {
              width: i.naturalWidth || i.videoWidth || i.clientWidth,
              height: i.naturalHeight || i.videoHeight || i.clientHeight,
            };
            o = n ? t(e, "width", n) : s ? t(e, "height", s) : e;
          }
          const { offsetHeight: r, offsetWidth: a } = fs(i) || ht(i),
            l = e(o, { width: a + (a % 2 ? 1 : 0), height: r + (r % 2 ? 1 : 0) });
          return !(!l.width || !l.height) && l;
        },
        write({ height: t, width: e }) {
          Rt(this.$el, { height: t, width: e });
        },
        events: ["resize"],
      },
    };
  function fs(t) {
    for (; (t = ht(t)); ) if ("static" !== Rt(t, "position")) return t;
  }
  var ps = {
    props: { pos: String, offset: null, flip: Boolean, shift: Boolean, inset: Boolean },
    data: { pos: "bottom-" + (Ve ? "right" : "left"), offset: !1, flip: !0, shift: !0, inset: !1 },
    connected() {
      (this.pos = this.$props.pos.split("-").concat("center").slice(0, 2)),
        ([this.dir, this.align] = this.pos),
        (this.axis = c(["top", "bottom"], this.dir) ? "y" : "x");
    },
    methods: {
      positionAt(t, e, i) {
        let n = [this.getPositionOffset(t), this.getShiftOffset(t)];
        const s = [this.flip && "flip", this.shift && "shift"],
          o = { element: [this.inset ? this.dir : Oe(this.dir), this.align], target: [this.dir, this.align] };
        if ("y" === this.axis) {
          for (const t in o) o[t].reverse();
          n.reverse(), s.reverse();
        }
        const r = (function (t) {
            const e = Ei(t),
              { scrollTop: i } = e;
            return () => {
              i !== e.scrollTop && (e.scrollTop = i);
            };
          })(t),
          a = Te(t);
        Rt(t, { top: -a.height, left: -a.width }),
          Di(t, e, { attach: o, offset: n, boundary: i, placement: s, vieairortOffset: this.getVieairortOffset(t) }),
          r();
      },
      getPositionOffset(t) {
        return (
          Ne(
            !1 === this.offset ? Rt(t, "--bdt-position-offset") : this.offset,
            "x" === this.axis ? "width" : "height",
            t,
          ) *
          (c(["left", "top"], this.dir) ? -1 : 1) *
          (this.inset ? -1 : 1)
        );
      },
      getShiftOffset(t) {
        return "center" === this.align
          ? 0
          : Ne(Rt(t, "--bdt-position-shift-offset"), "y" === this.axis ? "width" : "height", t) *
              (c(["left", "top"], this.align) ? 1 : -1);
      },
      getVieairortOffset: (t) => Ne(Rt(t, "--bdt-position-vieairort-offset")),
    },
  };
  var ms = {
    props: { container: Boolean },
    data: { container: !0 },
    computed: {
      container({ container: t }) {
        return (!0 === t && this.$container) || (t && Se(t));
      },
    },
  };
  let gs, vs;
  function bs(t) {
    const e = Dt(
      t,
      "touchmove",
      (t) => {
        if (1 !== t.targetTouches.length || dt(t.target, 'input[type="range"')) return;
        let { scrollHeight: e, clientHeight: i } = Ei(t.target);
        i >= e && t.cancelable && t.preventDefault();
      },
      { passive: !1 },
    );
    if (gs) return e;
    gs = !0;
    const { scrollingElement: i } = document;
    return (
      Rt(i, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: Pe(window) - i.clientWidth || "",
      }),
      () => {
        (gs = !1), e(), Rt(i, { overflowY: "", touchAction: "", paddingRight: "" });
      }
    );
  }
  var ws = {
    mixins: [ms, ps, jn],
    args: "pos",
    props: {
      mode: "list",
      toggle: Boolean,
      boundary: Boolean,
      boundaryX: Boolean,
      boundaryY: Boolean,
      target: Boolean,
      targetX: Boolean,
      targetY: Boolean,
      stretch: Boolean,
      delayShow: Number,
      delayHide: Number,
      autoUpdate: Boolean,
      clsDrop: String,
      animateOut: Boolean,
      bgScroll: Boolean,
    },
    data: {
      mode: ["click", "hover"],
      toggle: "- *",
      boundary: !1,
      boundaryX: !1,
      boundaryY: !1,
      target: !1,
      targetX: !1,
      targetY: !1,
      stretch: !1,
      delayShow: 0,
      delayHide: 800,
      autoUpdate: !0,
      clsDrop: !1,
      animateOut: !1,
      bgScroll: !0,
      animation: ["bdt-animation-fade"],
      cls: "bdt-open",
      container: !1,
    },
    computed: {
      boundary: ({ boundary: t, boundaryX: e, boundaryY: i }, n) => [wt(e || t, n) || window, wt(i || t, n) || window],
      target({ target: t, targetX: e, targetY: i }, n) {
        return (
          e || (e = t || this.targetEl),
          i || (i = t || this.targetEl),
          [!0 === e ? window : wt(e, n), !0 === i ? window : wt(i, n)]
        );
      },
    },
    created() {
      this.tracker = new oi();
    },
    beforeConnect() {
      this.clsDrop = this.$props.clsDrop || `bdt-${this.$options.name}`;
    },
    connected() {
      Yt(this.$el, "bdt-drop", this.clsDrop),
        this.toggle &&
          !this.targetEl &&
          (this.targetEl = (function (t) {
            const { $el: e } = t.$create("toggle", wt(t.toggle, t.$el), { target: t.$el, mode: t.mode });
            return K(e, "aria-haspopup", !0), e;
          })(this)),
        (this._style = q(this.$el.style, ["width", "height"]));
    },
    disconnected() {
      this.isActive() && (this.hide(!1), (vs = null)), Rt(this.$el, this._style);
    },
    observe: is({ target: ({ toggle: t, $el: e }) => wt(t, e), targets: ({ $el: t }) => t }),
    events: [
      {
        name: "click",
        delegate: () => ".bdt-drop-close",
        handler(t) {
          t.preventDefault(), this.hide(!1);
        },
      },
      {
        name: "click",
        delegate: () => 'a[href*="#"]',
        handler({ defaultPrevented: t, current: e }) {
          const { hash: i } = e;
          !t && i && vt(e) && !ft(i, this.$el) && this.hide(!1);
        },
      },
      {
        name: "beforescroll",
        handler() {
          this.hide(!1);
        },
      },
      {
        name: "toggle",
        self: !0,
        handler(t, e) {
          t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(null == e ? void 0 : e.$el, !1);
        },
      },
      {
        name: "toggleshow",
        self: !0,
        handler(t, e) {
          t.preventDefault(), this.show(null == e ? void 0 : e.$el);
        },
      },
      {
        name: "togglehide",
        self: !0,
        handler(t) {
          t.preventDefault(), dt(this.$el, ":focus,:hover") || this.hide();
        },
      },
      {
        name: `${Ge} focusin`,
        filter() {
          return c(this.mode, "hover");
        },
        handler(t) {
          qt(t) || this.clearTimers();
        },
      },
      {
        name: `${Ze} focusout`,
        filter() {
          return c(this.mode, "hover");
        },
        handler(t) {
          !qt(t) && t.relatedTarget && this.hide();
        },
      },
      {
        name: "toggled",
        self: !0,
        handler(t, e) {
          K(this.targetEl, "aria-expanded", !!e || null), e && (this.clearTimers(), this.position());
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          (vs = this), this.tracker.init();
          const t = [$s(this), ys(this), Ss(this), this.autoUpdate && xs(this), !this.bgScroll && bs(this.$el)];
          Ot(this.$el, "hide", () => t.forEach((t) => t && t()), { self: !0 });
        },
      },
      {
        name: "beforehide",
        self: !0,
        handler() {
          this.clearTimers();
        },
      },
      {
        name: "hide",
        handler({ target: t }) {
          this.$el === t
            ? ((vs = this.isActive() ? null : vs), this.tracker.cancel())
            : (vs = null === vs && ft(t, this.$el) && this.isToggled() ? this : vs);
        },
      },
    ],
    update: {
      write() {
        this.isToggled() && !Zt(this.$el, this.clsEnter) && this.position();
      },
    },
    methods: {
      show(t = this.targetEl, e = !0) {
        if (
          (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1),
          (this.targetEl = t),
          this.clearTimers(),
          !this.isActive())
        ) {
          if (vs) {
            if (e && vs.isDelaying) return void (this.showTimer = setTimeout(() => dt(t, ":hover") && this.show(), 10));
            let i;
            for (; vs && i !== vs && !ft(this.$el, vs.$el); ) (i = vs), vs.hide(!1, !1);
          }
          this.container && ht(this.$el) !== this.container && ce(this.container, this.$el),
            (this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), (e && this.delayShow) || 0));
        }
      },
      hide(t = !0, e = !0) {
        const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
        this.clearTimers(),
          (this.isDelaying = (function (t) {
            const e = [];
            return ye(t, (t) => "static" !== Rt(t, "position") && e.push(t)), e;
          })(this.$el).some((t) => this.tracker.movesTo(t))),
          t && this.isDelaying
            ? (this.hideTimer = setTimeout(this.hide, 50))
            : t && this.delayHide
            ? (this.hideTimer = setTimeout(i, this.delayHide))
            : i();
      },
      clearTimers() {
        clearTimeout(this.showTimer),
          clearTimeout(this.hideTimer),
          (this.showTimer = null),
          (this.hideTimer = null),
          (this.isDelaying = !1);
      },
      isActive() {
        return vs === this;
      },
      position() {
        Xt(this.$el, "bdt-drop-stack"), Rt(this.$el, this._style), (this.$el.hidden = !0);
        const t = this.target.map((t) =>
            (function (t, e) {
              return Bi(Ai(e).find((e) => ft(t, e)));
            })(this.$el, t),
          ),
          e = this.getVieairortOffset(this.$el),
          i = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]],
          ];
        for (const [n, [s, o]] of i)
          this.axis !== s &&
            c([s, !0], this.stretch) &&
            Rt(this.$el, { [o]: Math.min(Ee(this.boundary[n])[o], t[n][o] - 2 * e), [`overflow-${s}`]: "auto" });
        const n = t[0].width - 2 * e;
        (this.$el.hidden = !1),
          Rt(this.$el, "maxWidth", ""),
          this.$el.offsetWidth > n && Yt(this.$el, "bdt-drop-stack"),
          Rt(this.$el, "maxWidth", n),
          this.positionAt(this.$el, this.target, this.boundary);
        for (const [n, [s, o, r, a]] of i)
          if (this.axis === s && c([s, !0], this.stretch)) {
            const i = Math.abs(this.getPositionOffset(this.$el)),
              l = Ee(this.target[n]),
              h = Ee(this.$el);
            Rt(this.$el, {
              [o]:
                (l[r] > h[r]
                  ? l[this.inset ? a : r] - Math.max(Ee(this.boundary[n])[r], t[n][r] + e)
                  : Math.min(Ee(this.boundary[n])[a], t[n][a] - e) - l[this.inset ? r : a]) - i,
              [`overflow-${s}`]: "auto",
            }),
              this.positionAt(this.$el, this.target, this.boundary);
          }
      },
    },
  };
  function $s(t) {
    const e = () => t.$emit(),
      i = [hi(e), li(Ai(t.$el).concat(t.target), e)];
    return () => i.map((t) => t.disconnect());
  }
  function xs(t) {
    return Dt([document, ...Ai(t.$el)], "scroll", () => t.$emit(), { passive: !0 });
  }
  function ys(t) {
    return Dt(document, "keydown", (e) => {
      e.keyCode === Rn && t.hide(!1);
    });
  }
  function Ss(t) {
    return Dt(document, Ye, ({ target: e }) => {
      ft(e, t.$el) ||
        Ot(
          document,
          `${Je} ${Ke} scroll`,
          ({ defaultPrevented: i, type: n, target: s }) => {
            !i && n === Je && e === s && (!t.targetEl || !ft(e, t.targetEl)) && t.hide(!1);
          },
          !0,
        );
    });
  }
  var Is = {
    mixins: [Fn, ms],
    props: {
      align: String,
      clsDrop: String,
      boundary: Boolean,
      dropbar: Boolean,
      dropbarAnchor: Boolean,
      duration: Number,
      mode: Boolean,
      offset: Boolean,
      stretch: Boolean,
      delayShow: Boolean,
      delayHide: Boolean,
      target: Boolean,
      targetX: Boolean,
      targetY: Boolean,
      animation: Boolean,
      animateOut: Boolean,
    },
    data: {
      align: Ve ? "right" : "left",
      clsDrop: "bdt-dropdown",
      clsDropbar: "bdt-dropnav-dropbar",
      boundary: !0,
      dropbar: !1,
      dropbarAnchor: !1,
      duration: 200,
      container: !1,
      selNavItem: "> li > a, > ul > li > a",
    },
    computed: {
      dropbarAnchor: ({ dropbarAnchor: t }, e) => wt(t, e) || e,
      dropbar({ dropbar: t }) {
        return t
          ? (t = this._dropbar || wt(t, this.$el) || Se(`+ .${this.clsDropbar}`, this.$el)) ||
              (this._dropbar = Se("<div></div>"))
          : null;
      },
      dropContainer(t, e) {
        return this.container || e;
      },
      dropdowns({ clsDrop: t }, e) {
        var i;
        const n = Ie(`.${t}`, e);
        if (this.dropContainer !== e)
          for (const e of Ie(`.${t}`, this.dropContainer)) {
            const t = null == (i = this.getDropdown(e)) ? void 0 : i.targetEl;
            !c(n, e) && t && ft(t, this.$el) && n.push(e);
          }
        return n;
      },
      items: ({ selNavItem: t }, e) => Ie(t, e),
    },
    watch: {
      dropbar(t) {
        Yt(t, "bdt-dropbar", "bdt-dropbar-top", this.clsDropbar, `bdt-${this.$options.name}-dropbar`);
      },
      dropdowns() {
        this.initializeDropdowns();
      },
    },
    connected() {
      this.initializeDropdowns();
    },
    disconnected() {
      pe(this._dropbar), delete this._dropbar;
    },
    events: [
      {
        name: "mouseover focusin",
        delegate() {
          return this.selNavItem;
        },
        handler({ current: t }) {
          const e = this.getActive();
          e && c(e.mode, "hover") && e.targetEl && !ft(e.targetEl, t) && !e.isDelaying && e.hide(!1);
        },
      },
      {
        name: "keydown",
        self: !0,
        delegate() {
          return this.selNavItem;
        },
        handler(t) {
          var e;
          const { current: i, keyCode: n } = t,
            s = this.getActive();
          n === Kn &&
            (null == s ? void 0 : s.targetEl) === i &&
            (t.preventDefault(), null == (e = Se(at, s.$el)) || e.focus()),
            ks(t, this.items, s);
        },
      },
      {
        name: "keydown",
        el() {
          return this.dropContainer;
        },
        delegate() {
          return `.${this.clsDrop}`;
        },
        handler(t) {
          var e;
          const { current: i, keyCode: n } = t;
          if (!c(this.dropdowns, i)) return;
          const s = this.getActive();
          let o = -1;
          if (
            (n === Xn
              ? (o = 0)
              : n === Yn
              ? (o = "last")
              : n === Gn
              ? (o = "previous")
              : n === Kn
              ? (o = "next")
              : n === Rn && (null == (e = s.targetEl) || e.focus()),
            ~o)
          ) {
            t.preventDefault();
            const e = Ie(at, i);
            e[
              G(
                o,
                e,
                d(e, (t) => dt(t, ":focus")),
              )
            ].focus();
          }
          ks(t, this.items, s);
        },
      },
      {
        name: "mouseleave",
        el() {
          return this.dropbar;
        },
        filter() {
          return this.dropbar;
        },
        handler() {
          const t = this.getActive();
          t && c(t.mode, "hover") && !this.dropdowns.some((t) => dt(t, ":hover")) && t.hide();
        },
      },
      {
        name: "beforeshow",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({ target: t }) {
          this.isDropbarDrop(t) &&
            (this.dropbar.previousElementSibling !== this.dropbarAnchor && ue(this.dropbarAnchor, this.dropbar),
            Yt(t, `${this.clsDrop}-dropbar`));
        },
      },
      {
        name: "show",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({ target: t }) {
          if (!this.isDropbarDrop(t)) return;
          const e = this.getDropdown(t),
            i = () => {
              const e = pt(t, `.${this.clsDrop}`)
                  .concat(t)
                  .map((t) => Ee(t)),
                i = Math.min(...e.map(({ top: t }) => t)),
                n = Math.max(...e.map(({ bottom: t }) => t)),
                s = Ee(this.dropbar);
              Rt(this.dropbar, "top", this.dropbar.offsetTop - (s.top - i)),
                this.transitionTo(n - i + _(Rt(t, "marginBottom")), t);
            };
          (this._observer = li([e.$el, ...e.target], i)), i();
        },
      },
      {
        name: "beforehide",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler(t) {
          const e = this.getActive();
          dt(this.dropbar, ":hover") &&
            e.$el === t.target &&
            !this.items.some((t) => e.targetEl !== t && dt(t, ":focus")) &&
            t.preventDefault();
        },
      },
      {
        name: "hide",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({ target: t }) {
          var e;
          if (!this.isDropbarDrop(t)) return;
          null == (e = this._observer) || e.disconnect();
          const i = this.getActive();
          (!i || i.$el === t) && this.transitionTo(0);
        },
      },
    ],
    methods: {
      getActive() {
        var t;
        return c(this.dropdowns, null == (t = vs) ? void 0 : t.$el) && vs;
      },
      async transitionTo(t, e) {
        const { dropbar: i } = this,
          n = _e(i);
        (e = n < t && e),
          await ee.cancel([e, i]),
          Rt(e, "clipPath", `polygon(0 0,100% 0,100% ${n}px,0 ${n}px)`),
          _e(i, n),
          await Promise.all([
            ee.start(i, { height: t }, this.duration),
            ee
              .start(e, { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` }, this.duration)
              .finally(() => Rt(e, { clipPath: "" })),
          ]).catch(V);
      },
      getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      },
      isDropbarDrop(t) {
        return this.getDropdown(t) && Zt(t, this.clsDrop);
      },
      initializeDropdowns() {
        this.$create(
          "drop",
          this.dropdowns.filter((t) => !this.getDropdown(t)),
          {
            ...this.$props,
            flip: !1,
            shift: !0,
            pos: `bottom-${this.align}`,
            boundary: !0 === this.boundary ? this.$el : this.boundary,
          },
        );
      },
    },
  };
  function ks(t, e, i) {
    var n, s, o;
    const { current: r, keyCode: a } = t;
    let l = -1;
    a === Xn
      ? (l = 0)
      : a === Yn
      ? (l = "last")
      : a === Jn
      ? (l = "previous")
      : a === Zn
      ? (l = "next")
      : a === Vn && (null == (n = i.targetEl) || n.focus(), null == (s = i.hide) || s.call(i, !1)),
      ~l && (t.preventDefault(), null == (o = i.hide) || o.call(i, !1), e[G(l, e, e.indexOf(i.targetEl || r))].focus());
  }
  var Cs = {
      mixins: [Fn],
      args: "target",
      props: { target: Boolean },
      data: { target: !1 },
      computed: {
        input: (t, e) => Se(ot, e),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return t && ((!0 === t && ht(this.input) === e && this.input.nextElementSibling) || Se(t, e));
        },
      },
      update() {
        var t;
        const { target: e, input: i } = this;
        if (!e) return;
        let n;
        const s = rt(e) ? "value" : "textContent",
          o = e[s],
          r =
            null != (t = i.files) && t[0]
              ? i.files[0].name
              : dt(i, "select") && (n = Ie("option", i).filter((t) => t.selected)[0])
              ? n.textContent
              : i.value;
        o !== r && (e[s] = r);
      },
      events: [
        {
          name: "change",
          handler() {
            this.$emit();
          },
        },
        {
          name: "reset",
          el() {
            return ut(this.$el, "form");
          },
          handler() {
            this.$emit();
          },
        },
      ],
    },
    Ts = {
      props: { margin: String, firstColumn: Boolean },
      data: { margin: "bdt-margin-small-top", firstColumn: "bdt-first-column" },
      observe: [
        es({ options: { childList: !0, attributes: !0, attributeFilter: ["style"] } }),
        Qn({ target: ({ $el: t }) => [t, ...mt(t)] }),
      ],
      update: {
        read() {
          const t = Es(this.$el.children);
          return { rows: t, columns: As(t) };
        },
        write({ columns: t, rows: e }) {
          for (const i of e)
            for (const n of i) Kt(n, this.margin, e[0] !== i), Kt(n, this.firstColumn, t[0].includes(n));
        },
        events: ["resize"],
      },
    };
  function Es(t) {
    return Bs(t, "top", "bottom");
  }
  function As(t) {
    const e = [];
    for (const i of t) {
      const t = Bs(i, "left", "right");
      for (let i = 0; i < t.length; i++) e[i] = e[i] ? e[i].concat(t[i]) : t[i];
    }
    return Ve ? e.reverse() : e;
  }
  function Bs(t, e, i) {
    const n = [[]];
    for (const s of t) {
      if (!st(s)) continue;
      let t = _s(s);
      for (let o = n.length - 1; o >= 0; o--) {
        const r = n[o];
        if (!r[0]) {
          r.push(s);
          break;
        }
        let a;
        if (
          (r[0].offsetParent === s.offsetParent ? (a = _s(r[0])) : ((t = _s(s, !0)), (a = _s(r[0], !0))),
          t[e] >= a[i] - 1 && t[e] !== a[e])
        ) {
          n.push([s]);
          break;
        }
        if (t[i] - 1 > a[e] || t[e] === a[e]) {
          r.push(s);
          break;
        }
        if (0 === o) {
          n.unshift([s]);
          break;
        }
      }
    }
    return n;
  }
  function _s(t, e = !1) {
    let { offsetTop: i, offsetLeft: n, offsetHeight: s, offsetWidth: o } = t;
    return e && ([i, n] = Be(t)), { top: i, left: n, bottom: i + s, right: n + o };
  }
  var Ps = {
    extends: Ts,
    mixins: [Fn],
    name: "grid",
    props: { masonry: Boolean, parallax: Number },
    data: { margin: "bdt-grid-margin", clsStack: "bdt-grid-stack", masonry: !1, parallax: 0 },
    connected() {
      this.masonry && Yt(this.$el, "bdt-flex-top bdt-flex-wrap-top");
    },
    observe: ss({ filter: ({ parallax: t }) => t }),
    update: [
      {
        write({ columns: t }) {
          Kt(this.$el, this.clsStack, t.length < 2);
        },
        events: ["resize"],
      },
      {
        read(t) {
          let { columns: e, rows: i } = t;
          if (!e.length || (!this.masonry && !this.parallax) || Ds(this.$el)) return (t.translates = !1), !1;
          let n = !1;
          const s = mt(this.$el),
            o = e.map((t) => j(t, "offsetHeight")),
            r =
              (function (t, e) {
                const [i] = t.filter((t) => Zt(t, e));
                return _(i ? Rt(i, "marginTop") : Rt(t[0], "paddingLeft"));
              })(s, this.margin) *
              (i.length - 1),
            a = Math.max(...o) + r;
          this.masonry &&
            ((e = e.map((t) => F(t, "offsetTop"))),
            (n = (function (t, e) {
              const i = t.map((t) => Math.max(...t.map((t) => t.offsetHeight)));
              return e.map((t) => {
                let e = 0;
                return t.map((n, s) => (e += s ? i[s - 1] - t[s - 1].offsetHeight : 0));
              });
            })(i, e)));
          let l = Math.abs(this.parallax);
          return (
            l && (l = o.reduce((t, e, i) => Math.max(t, e + r + (i % 2 ? l : l / 8) - a), 0)),
            { padding: l, columns: e, translates: n, height: n ? a : "" }
          );
        },
        write({ height: t, padding: e }) {
          Rt(this.$el, "paddingBottom", e || ""), !1 !== t && Rt(this.$el, "height", t);
        },
        events: ["resize"],
      },
      {
        read() {
          return (
            (!this.parallax || !Ds(this.$el)) && { scrolled: !!this.parallax && Ci(this.$el) * Math.abs(this.parallax) }
          );
        },
        write({ columns: t, scrolled: e, translates: i }) {
          (!1 === e && !i) ||
            t.forEach((t, n) =>
              t.forEach((t, s) =>
                Rt(t, "transform", e || i ? `translateY(${(i && -i[n][s]) + (e ? (n % 2 ? e : e / 8) : 0)}px)` : ""),
              ),
            );
        },
        events: ["scroll", "resize"],
      },
    ],
  };
  function Ds(t) {
    return mt(t).some((t) => "absolute" === Rt(t, "position"));
  }
  var Ms = {
    args: "target",
    props: { target: String, row: Boolean },
    data: { target: "> *", row: !0 },
    computed: { elements: ({ target: t }, e) => Ie(t, e) },
    observe: Qn({ target: ({ $el: t, elements: e }) => [t, ...e] }),
    update: {
      read() {
        return { rows: (this.row ? Es(this.elements) : [this.elements]).map(Os) };
      },
      write({ rows: t }) {
        for (const { heights: e, elements: i } of t) i.forEach((t, i) => Rt(t, "minHeight", e[i]));
      },
      events: ["resize"],
    },
  };
  function Os(t) {
    if (t.length < 2) return { heights: [""], elements: t };
    let e = t.map(Ns);
    const i = Math.max(...e);
    return { heights: t.map((t, n) => (e[n].toFixed(2) === i.toFixed(2) ? "" : i)), elements: t };
  }
  function Ns(t) {
    const e = q(t.style, ["display", "minHeight"]);
    st(t) || Rt(t, "display", "block", "important"), Rt(t, "minHeight", "");
    const i = Te(t).height - Me(t, "height", "content-box");
    return Rt(t, e), i;
  }
  var zs = {
      props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number },
      data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
      observe: Qn({ target: ({ $el: t }) => [t, ...Ti(t)] }),
      update: {
        read() {
          if (!st(this.$el)) return !1;
          let t = "";
          const e = Me(this.$el, "height", "content-box"),
            { body: i, scrollingElement: n } = document,
            s = Ei(this.$el),
            { height: o } = Bi(s === i ? n : s);
          if (this.expand) t = o - (Te(s).height - Te(this.$el).height) - e + "px";
          else {
            const r = n === s || i === s;
            if (((t = "calc(" + (r ? "100vh" : `${o}px`)), this.offsetTop))
              if (r) {
                const e = Be(this.$el)[0] - Be(s)[0];
                t += e > 0 && e < o / 2 ? ` - ${e}px` : "";
              } else t += ` - ${Rt(s, "paddingTop")}`;
            !0 === this.offsetBottom
              ? (t += ` - ${Te(this.$el.nextElementSibling).height}px`)
              : C(this.offsetBottom)
              ? (t += ` - ${this.offsetBottom}vh`)
              : this.offsetBottom && h(this.offsetBottom, "px")
              ? (t += ` - ${_(this.offsetBottom)}px`)
              : I(this.offsetBottom) && (t += ` - ${Te(wt(this.offsetBottom, this.$el)).height}px`),
              (t += (e ? ` - ${e}px` : "") + ")");
          }
          return { minHeight: t };
        },
        write({ minHeight: t }) {
          Rt(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"],
      },
    },
    Hs = {
      args: "src",
      props: { width: Number, height: Number, ratio: Number },
      data: { ratio: 1 },
      connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected) return;
          const e = (function (t, e) {
            if (nt(e) || re(e, "canvas")) {
              e.hidden = !0;
              const i = e.nextElementSibling;
              return Fs(t, i) ? i : ue(e, t);
            }
            const i = e.lastElementChild;
            return Fs(t, i) ? i : ce(e, t);
          })(t, this.$el);
          return this.svgEl && e !== this.svgEl && pe(this.svgEl), js.call(this, e, t), (this.svgEl = e);
        }, V);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (nt(this.$el) && (this.$el.hidden = !1), pe(t), (this.svgEl = null));
        }),
          (this.svg = null);
      },
      methods: { async getSvg() {} },
    };
  function Fs(t, e) {
    return re(t, "svg") && re(e, "svg") && t.innerHTML === e.innerHTML;
  }
  function js(t, e) {
    const i = ["width", "height"];
    let n = i.map((t) => this[t]);
    n.some((t) => t) || (n = i.map((t) => K(e, t)));
    const s = K(e, "viewBox");
    s && !n.some((t) => t) && (n = s.split(" ").slice(2)), n.forEach((e, n) => K(t, i[n], _(e) * this.ratio || null));
  }
  var Ls = {
    props: { i18n: Object },
    data: { i18n: null },
    methods: {
      t(t, ...e) {
        var i, n, s;
        let o = 0;
        return (
          (null == (s = (null == (i = this.i18n) ? void 0 : i[t]) || (null == (n = this.$options.i18n) ? void 0 : n[t]))
            ? void 0
            : s.replace(/%s/g, () => e[o++] || "")) || ""
        );
      },
    },
  };
  const qs = {
      spinner:
        '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
      totop:
        '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>',
      marker:
        '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
      "close-icon":
        '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
      "close-large":
        '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
      "drop-parent-icon":
        '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
      "nav-parent-icon":
        '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
      "nav-parent-icon-large":
        '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
      "navbar-parent-icon":
        '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
      "navbar-toggle-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20"><style>.bdt-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.bdt-navbar-toggle svg&gt;.line-3{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',
      "overlay-icon":
        '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
      "pagination-next":
        '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
      "pagination-previous":
        '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
      "search-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      "search-large":
        '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
      "search-navbar":
        '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
      "slidenav-next":
        '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>',
      "slidenav-next-large":
        '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>',
      "slidenav-previous":
        '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>',
      "slidenav-previous-large":
        '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>',
    },
    Ws = {
      install: function (t) {
        t.icon.add = (e, i) => {
          const n = I(e) ? { [e]: i } : e;
          H(n, (t, e) => {
            (qs[e] = t), delete io[e];
          }),
            t._initialized &&
              ye(document.body, (e) =>
                H(t.getComponents(e), (t) => {
                  t.$options.isIcon && t.icon in n && t.$reset();
                }),
              );
        };
      },
      mixins: [Hs],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        Yt(this.$el, "bdt-icon");
      },
      methods: {
        async getSvg() {
          const t = (function (t) {
            return qs[t]
              ? (io[t] ||
                  (io[t] = Se(
                    (
                      qs[
                        (function (t) {
                          return Ve ? N(N(t, "left", "right"), "previous", "next") : t;
                        })(t)
                      ] || qs[t]
                    ).trim(),
                  )),
                io[t].cloneNode(!0))
              : null;
          })(this.icon);
          if (!t) throw "Icon not found.";
          return t;
        },
      },
    },
    Vs = {
      args: !1,
      extends: Ws,
      data: (t) => ({ icon: s(t.constructor.options.name) }),
      beforeConnect() {
        Yt(this.$el, this.$options.id);
      },
    },
    Rs = {
      extends: Vs,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = ut(this.$el, ".bdt-nav-primary") ? `${t}-large` : t;
      },
    },
    Us = {
      extends: Vs,
      mixins: [Ls],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        if (
          ((this.icon =
            Zt(this.$el, "bdt-search-icon") && pt(this.$el, ".bdt-search-large").length
              ? "search-large"
              : pt(this.$el, ".bdt-search-navbar").length
              ? "search-navbar"
              : this.$props.icon),
          !Q(this.$el, "aria-label"))
        )
          if (Zt(this.$el, "bdt-search-toggle") || Zt(this.$el, "bdt-navbar-toggle")) {
            const t = this.t("toggle");
            K(this.$el, "aria-label", t);
          } else {
            const t = ut(this.$el, "a,button");
            if (t) {
              K(t, "aria-label", this.t("submit"));
            }
          }
      },
    },
    Ys = {
      extends: Vs,
      beforeConnect() {
        K(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await Ws.methods.getSvg.call(this);
          return 1 !== this.ratio && Rt(Se("circle", t), "strokeWidth", 1 / this.ratio), t;
        },
      },
    },
    Xs = {
      extends: Vs,
      mixins: [Ls],
      beforeConnect() {
        const t = ut(this.$el, "a,button");
        K(t, "role", null !== this.role && re(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !Q(t, "aria-label") && K(t, "aria-label", e);
      },
    },
    Js = {
      extends: Xs,
      beforeConnect() {
        Yt(this.$el, "bdt-slidenav");
        const t = this.$props.icon;
        this.icon = Zt(this.$el, "bdt-slidenav-large") ? `${t}-large` : t;
      },
    },
    Gs = { extends: Xs, i18n: { label: "Open menu" } },
    Zs = {
      extends: Xs,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = "close-" + (Zt(this.$el, "bdt-close-large") ? "large" : "icon");
      },
    },
    Ks = { extends: Xs, i18n: { label: "Open" } },
    Qs = { extends: Xs, i18n: { label: "Back to top" } },
    to = { extends: Xs, i18n: { label: "Next page" }, data: { role: null } },
    eo = { extends: Xs, i18n: { label: "Previous page" }, data: { role: null } },
    io = {};
  const no = We && "loading" in HTMLImageElement.prototype;
  var so = {
    args: "dataSrc",
    props: { dataSrc: String, sources: String, margin: String, target: String, loading: String },
    data: { dataSrc: "", sources: !1, margin: "50%", target: !1, loading: "lazy" },
    connected() {
      "lazy" === this.loading
        ? (no && lo(this.$el) && ((this.$el.loading = "lazy"), oo(this.$el)),
          (function (t) {
            lo(t) &&
              !Q(t, "src") &&
              K(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
          })(this.$el))
        : this.load();
    },
    disconnected() {
      this.img && (this.img.onload = ""), delete this.img;
    },
    observe: ts({
      target: ({ $el: t, $props: e }) => [t, ...$t(e.target, t)],
      handler(t, e) {
        this.load(), e.disconnect();
      },
      options: ({ margin: t }) => ({ rootMargin: t }),
      filter: ({ loading: t }) => "lazy" === t,
    }),
    methods: {
      load() {
        if (this.img) return this.img;
        const t = lo(this.$el)
          ? this.$el
          : (function (t, e, i) {
              const n = new Image();
              return (
                (function (t, e) {
                  if (
                    ((e = (function (t) {
                      if (!t) return [];
                      if (l(t, "["))
                        try {
                          t = JSON.parse(t);
                        } catch {
                          t = [];
                        }
                      else t = un(t);
                      return u(t) || (t = [t]), t.filter((t) => !T(t));
                    })(e)),
                    e.length)
                  ) {
                    const i = $e("<picture>");
                    for (const t of e) {
                      const e = $e("<source>");
                      K(e, t), ce(i, e);
                    }
                    ce(i, t);
                  }
                })(n, i),
                ao(t, n),
                (n.onload = () => {
                  oo(t, n.currentSrc);
                }),
                K(n, "src", e),
                n
              );
            })(this.$el, this.dataSrc, this.sources);
        return tt(t, "loading"), oo(this.$el, t.currentSrc), (this.img = t);
      },
    },
  };
  function oo(t, e) {
    if (lo(t)) {
      const e = ht(t);
      (re(e, "picture") ? mt(e) : [t]).forEach((t) => ao(t, t));
    } else e && !c(t.style.backgroundImage, e) && (Rt(t, "backgroundImage", `url(${Pt(e)})`), Nt(t, zt("load", !1)));
  }
  const ro = ["data-src", "data-srcset", "sizes"];
  function ao(t, e) {
    for (const i of ro) {
      const n = et(t, i);
      n && K(e, i.replace(/^(data-)+/, ""), n);
    }
  }
  function lo(t) {
    return re(t, "img");
  }
  var ho = {
    props: { media: Boolean },
    data: { media: !1 },
    connected() {
      const t = (function (t, e) {
        if (I(t))
          if (l(t, "@")) t = _(Rt(e, `--bdt-breakpoint-${t.substr(1)}`));
          else if (isNaN(t)) return t;
        return t && C(t) ? `(min-width: ${t}px)` : "";
      })(this.media, this.$el);
      if (((this.matchMedia = !0), t)) {
        this.mediaObj = window.matchMedia(t);
        const e = () => {
          (this.matchMedia = this.mediaObj.matches), Nt(this.$el, zt("mediachange", !1, !0, [this.mediaObj]));
        };
        (this.offMediaObj = Dt(this.mediaObj, "change", () => {
          e(), this.$emit("resize");
        })),
          e();
      }
    },
    disconnected() {
      var t;
      null == (t = this.offMediaObj) || t.call(this);
    },
  };
  var co = {
    mixins: [Fn, ho],
    props: { fill: String },
    data: { fill: "", clsWrapper: "bdt-leader-fill", clsHide: "bdt-leader-hide", attrFill: "data-fill" },
    computed: {
      fill({ fill: t }) {
        return t || Rt(this.$el, "--bdt-leader-fill-content");
      },
    },
    connected() {
      [this.wrapper] = ge(this.$el, `<span class="${this.clsWrapper}">`);
    },
    disconnected() {
      ve(this.wrapper.childNodes);
    },
    observe: Qn(),
    update: {
      read() {
        return { width: Math.trunc(this.$el.offsetWidth / 2), fill: this.fill, hide: !this.matchMedia };
      },
      write({ width: t, fill: e, hide: i }) {
        Kt(this.wrapper, this.clsHide, i), K(this.wrapper, this.attrFill, new Array(t).join(e));
      },
      events: ["resize"],
    },
  };
  const uo = [];
  var fo = {
    mixins: [Fn, ms, jn],
    props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean, role: String },
    data: { cls: "bdt-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1, role: "dialog" },
    computed: {
      panel: ({ selPanel: t }, e) => Se(t, e),
      transitionElement() {
        return this.panel;
      },
      bgClose({ bgClose: t }) {
        return t && this.panel;
      },
    },
    connected() {
      K(this.panel || this.$el, "role", this.role), this.overlay && K(this.panel || this.$el, "aria-modal", !0);
    },
    beforeDisconnect() {
      c(uo, this) && this.toggleElement(this.$el, !1, !1);
    },
    events: [
      {
        name: "click",
        delegate() {
          return `${this.selClose},a[href*="#"]`;
        },
        handler(t) {
          const { current: e, defaultPrevented: i } = t,
            { hash: n } = e;
          !i && n && vt(e) && !ft(n, this.$el) && Se(n, document.body)
            ? this.hide()
            : dt(e, this.selClose) && (t.preventDefault(), this.hide());
        },
      },
      {
        name: "toggle",
        self: !0,
        handler(t) {
          t.defaultPrevented || (t.preventDefault(), this.isToggled() === c(uo, this) && this.toggle());
        },
      },
      {
        name: "beforeshow",
        self: !0,
        handler(t) {
          if (c(uo, this)) return !1;
          !this.stack && uo.length
            ? (Promise.all(uo.map((t) => t.hide())).then(this.show), t.preventDefault())
            : uo.push(this);
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          this.stack && Rt(this.$el, "zIndex", _(Rt(this.$el, "zIndex")) + uo.length);
          const t = [
            this.overlay && mo(this),
            this.overlay && bs(this.$el),
            this.bgClose && go(this),
            this.escClose && vo(this),
          ];
          Ot(this.$el, "hidden", () => t.forEach((t) => t && t()), { self: !0 }),
            Yt(document.documentElement, this.clsPage);
        },
      },
      {
        name: "shown",
        self: !0,
        handler() {
          lt(this.$el) || K(this.$el, "tabindex", "-1"), dt(this.$el, ":focus-within") || this.$el.focus();
        },
      },
      {
        name: "hidden",
        self: !0,
        handler() {
          c(uo, this) && uo.splice(uo.indexOf(this), 1),
            Rt(this.$el, "zIndex", ""),
            uo.some((t) => t.clsPage === this.clsPage) || Xt(document.documentElement, this.clsPage);
        },
      },
    ],
    methods: {
      toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show() {
        return this.container && ht(this.$el) !== this.container
          ? (ce(this.container, this.$el), new Promise((t) => requestAnimationFrame(() => this.show().then(t))))
          : this.toggleElement(this.$el, !0, po);
      },
      hide() {
        return this.toggleElement(this.$el, !1, po);
      },
    },
  };
  function po(t, e, { transitionElement: i, _toggle: n }) {
    return new Promise((s, o) =>
      Ot(t, "show hide", () => {
        var r;
        null == (r = t._reject) || r.call(t), (t._reject = o), n(t, e);
        const a = Ot(
            i,
            "transitionstart",
            () => {
              Ot(i, "transitionend transitioncancel", s, { self: !0 }), clearTimeout(l);
            },
            { self: !0 },
          ),
          l = setTimeout(
            () => {
              a(), s();
            },
            (function (t) {
              return t ? (h(t, "ms") ? _(t) : 1e3 * _(t)) : 0;
            })(Rt(i, "transitionDuration")),
          );
      }),
    ).then(() => delete t._reject);
  }
  function mo(t) {
    return Dt(document, "focusin", (e) => {
      z(uo) === t && !ft(e.target, t.$el) && t.$el.focus();
    });
  }
  function go(t) {
    return Dt(document, Ye, ({ target: e }) => {
      z(uo) !== t ||
        (t.overlay && !ft(e, t.$el)) ||
        ft(e, t.panel) ||
        Ot(
          document,
          `${Je} ${Ke} scroll`,
          ({ defaultPrevented: i, type: n, target: s }) => {
            !i && n === Je && e === s && t.hide();
          },
          !0,
        );
    });
  }
  function vo(t) {
    return Dt(document, "keydown", (e) => {
      27 === e.keyCode && z(uo) === t && t.hide();
    });
  }
  var bo = {
    install: function ({ modal: t }) {
      function e(e, i, n = V, s = V) {
        i = { bgClose: !1, escClose: !0, ...i, i18n: { ...t.i18n, ...(null == i ? void 0 : i.i18n) } };
        const o = t.dialog(e(i), i);
        return p(
          new Promise((t) => {
            const e = Dt(o.$el, "hide", () => t(n()));
            Dt(o.$el, "submit", "form", (i) => {
              i.preventDefault(), t(s(o)), e(), o.hide();
            });
          }),
          { dialog: o },
        );
      }
      (t.dialog = function (e, i) {
        const n = t(`<div class="bdt-modal"> <div class="bdt-modal-dialog">${e}</div> </div>`, {
          stack: !0,
          role: "alertdialog",
          ...i,
        });
        return (
          n.show(),
          Dt(
            n.$el,
            "hidden",
            async () => {
              await Promise.resolve(), n.$destroy(!0);
            },
            { self: !0 },
          ),
          n
        );
      }),
        (t.alert = function (t, i) {
          return e(
            ({ i18n: e }) =>
              `<div class="bdt-modal-body">${
                I(t) ? t : le(t)
              }</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-primary bdt-modal-close" autofocus>${
                e.ok
              }</button> </div>`,
            i,
          );
        }),
        (t.confirm = function (t, i) {
          return e(
            ({ i18n: e }) =>
              `<form> <div class="bdt-modal-body">${
                I(t) ? t : le(t)
              }</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${
                e.cancel
              }</button> <button class="bdt-button bdt-button-primary" autofocus>${e.ok}</button> </div> </form>`,
            i,
            () => Promise.reject(),
          );
        }),
        (t.prompt = function (t, i, n) {
          const s = e(
              ({ i18n: e }) =>
                `<form class="bdt-form-stacked"> <div class="bdt-modal-body"> <label>${
                  I(t) ? t : le(t)
                }</label> <input class="bdt-input" value="${
                  i || ""
                }" autofocus> </div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${
                  e.cancel
                }</button> <button class="bdt-button bdt-button-primary">${e.ok}</button> </div> </form>`,
              n,
              () => null,
              () => r.value,
            ),
            { $el: o } = s.dialog,
            r = Se("input", o);
          return Dt(o, "show", () => r.select()), s;
        }),
        (t.i18n = { ok: "Ok", cancel: "Cancel" });
    },
    mixins: [fo],
    data: {
      clsPage: "bdt-modal-page",
      selPanel: ".bdt-modal-dialog",
      selClose: ".bdt-modal-close, .bdt-modal-close-default, .bdt-modal-close-outside, .bdt-modal-close-full",
    },
    events: [
      {
        name: "show",
        self: !0,
        handler() {
          Zt(this.panel, "bdt-margin-auto-vertical") ? Yt(this.$el, "bdt-flex") : Rt(this.$el, "display", "block"),
            _e(this.$el);
        },
      },
      {
        name: "hidden",
        self: !0,
        handler() {
          Rt(this.$el, "display", ""), Xt(this.$el, "bdt-flex");
        },
      },
    ],
  };
  var wo = { extends: as, data: { targets: "> .bdt-parent", toggle: "> a", content: "> ul" } },
    $o = {
      extends: Is,
      data: {
        clsDrop: "bdt-navbar-dropdown",
        selNavItem:
          ".bdt-navbar-nav > li > a,a.bdt-navbar-item,button.bdt-navbar-item,.bdt-navbar-item a,.bdt-navbar-item button,.bdt-navbar-toggle",
      },
      watch: {
        items() {
          const t = Zt(this.$el, "bdt-navbar-justify");
          for (const e of Ie(".bdt-navbar-nav, .bdt-navbar-left, .bdt-navbar-right", this.$el))
            Rt(e, "flexGrow", t ? Ie(".bdt-navbar-nav > li > a, .bdt-navbar-item, .bdt-navbar-toggle", e).length : "");
        },
      },
    },
    xo = {
      mixins: [fo],
      args: "mode",
      props: { mode: String, flip: Boolean, overlay: Boolean, swiping: Boolean },
      data: {
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "bdt-offcanvas-page",
        clsContainer: "bdt-offcanvas-container",
        selPanel: ".bdt-offcanvas-bar",
        clsFlip: "bdt-offcanvas-flip",
        clsContainerAnimation: "bdt-offcanvas-container-animation",
        clsSidebarAnimation: "bdt-offcanvas-bar-animation",
        clsMode: "bdt-offcanvas",
        clsOverlay: "bdt-offcanvas-overlay",
        selClose: ".bdt-offcanvas-close",
        container: !1,
        swiping: !0,
      },
      computed: {
        clsFlip: ({ flip: t, clsFlip: e }) => (t ? e : ""),
        clsOverlay: ({ overlay: t, clsOverlay: e }) => (t ? e : ""),
        clsMode: ({ mode: t, clsMode: e }) => `${e}-${t}`,
        clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e }) => ("none" === t || "reveal" === t ? "" : e),
        clsContainerAnimation: ({ mode: t, clsContainerAnimation: e }) => ("push" !== t && "reveal" !== t ? "" : e),
        transitionElement({ mode: t }) {
          return "reveal" === t ? ht(this.panel) : this.panel;
        },
      },
      observe: os({ filter: ({ swiping: t }) => t }),
      update: {
        read() {
          this.isToggled() && !st(this.$el) && this.hide();
        },
        events: ["resize"],
      },
      events: [
        {
          name: "touchmove",
          self: !0,
          passive: !1,
          filter() {
            return this.overlay;
          },
          handler(t) {
            t.cancelable && t.preventDefault();
          },
        },
        {
          name: "show",
          self: !0,
          handler() {
            "reveal" === this.mode &&
              !Zt(ht(this.panel), this.clsMode) &&
              (me(this.panel, "<div>"), Yt(ht(this.panel), this.clsMode));
            const { body: t, scrollingElement: e } = document;
            Yt(t, this.clsContainer, this.clsFlip),
              Rt(t, "touch-action", "pan-y pinch-zoom"),
              Rt(this.$el, "display", "block"),
              Rt(this.panel, "maxWidth", e.clientWidth),
              Yt(this.$el, this.clsOverlay),
              Yt(this.panel, this.clsSidebarAnimation, "reveal" === this.mode ? "" : this.clsMode),
              _e(t),
              Yt(t, this.clsContainerAnimation),
              this.clsContainerAnimation && (yo().content += ",user-scalable=0");
          },
        },
        {
          name: "hide",
          self: !0,
          handler() {
            Xt(document.body, this.clsContainerAnimation), Rt(document.body, "touch-action", "");
          },
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation &&
              (function () {
                const t = yo();
                t.content = t.content.replace(/,user-scalable=0$/, "");
              })(),
              "reveal" === this.mode && ve(this.panel),
              Xt(this.panel, this.clsSidebarAnimation, this.clsMode),
              Xt(this.$el, this.clsOverlay),
              Rt(this.$el, "display", ""),
              Rt(this.panel, "maxWidth", ""),
              Xt(document.body, this.clsContainer, this.clsFlip);
          },
        },
        {
          name: "swipeLeft swipeRight",
          handler(t) {
            this.isToggled() && h(t.type, "Left") ^ this.flip && this.hide();
          },
        },
      ],
    };
  function yo() {
    return Se('meta[name="vieairort"]', document.head) || ce(document.head, '<meta name="vieairort">');
  }
  var So = {
      mixins: [Fn],
      props: { selContainer: String, selContent: String, minHeight: Number },
      data: { selContainer: ".bdt-modal", selContent: ".bdt-modal-dialog", minHeight: 150 },
      computed: { container: ({ selContainer: t }, e) => ut(e, t), content: ({ selContent: t }, e) => ut(e, t) },
      observe: Qn({ target: ({ container: t, content: e }) => [t, e] }),
      update: {
        read() {
          return (
            !!(this.content && this.container && st(this.$el)) && {
              max: Math.max(this.minHeight, _e(this.container) - (Te(this.content).height - _e(this.$el))),
            }
          );
        },
        write({ max: t }) {
          Rt(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"],
      },
    },
    Io = {
      props: ["width", "height"],
      connected() {
        Yt(this.$el, "bdt-responsive-width");
      },
      observe: Qn({ target: ({ $el: t }) => [t, ht(t)] }),
      update: {
        read() {
          return !!(st(this.$el) && this.width && this.height) && { width: Pe(ht(this.$el)), height: this.height };
        },
        write(t) {
          _e(this.$el, J.contain({ height: this.height, width: this.width }, t).height);
        },
        events: ["resize"],
      },
    },
    ko = {
      props: { offset: Number },
      data: { offset: 0 },
      connected() {
        !(function (t) {
          Co.size || Dt(document, "click", To), Co.add(t);
        })(this);
      },
      disconnected() {
        !(function (t) {
          Co.delete(t), Co.size || Mt(document, "click", To);
        })(this);
      },
      methods: {
        async scrollTo(t) {
          (t = (t && Se(t)) || document.body),
            Nt(this.$el, "beforescroll", [this, t]) &&
              (await ki(t, { offset: this.offset }), Nt(this.$el, "scrolled", [this, t]));
        },
      },
    };
  const Co = new Set();
  function To(t) {
    if (!t.defaultPrevented)
      for (const e of Co)
        ft(t.target, e.$el) &&
          vt(e.$el) &&
          (t.preventDefault(),
          window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href),
          e.scrollTo(bt(e.$el)));
  }
  var Eo = {
      args: "cls",
      props: { cls: String, target: String, hidden: Boolean, margin: String, repeat: Boolean, delay: Number },
      data: () => ({
        cls: "",
        target: !1,
        hidden: !0,
        margin: "-1px",
        repeat: !1,
        delay: 0,
        inViewClass: "bdt-scrollspy-inview",
      }),
      computed: { elements: ({ target: t }, e) => (t ? Ie(t, e) : [e]) },
      watch: {
        elements(t) {
          this.hidden && Rt(ct(t, `:not(.${this.inViewClass})`), "opacity", 0);
        },
      },
      connected() {
        this.elementData = new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries()) Xt(t, this.inViewClass, (null == e ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: ts({
        target: ({ elements: t }) => t,
        handler(t) {
          const e = this.elementData;
          for (const { target: i, isIntersecting: n } of t) {
            e.has(i) || e.set(i, { cls: et(i, "bdt-scrollspy-class") || this.cls });
            const t = e.get(i);
            (!this.repeat && t.show) || (t.show = n);
          }
          this.$emit();
        },
        options: (t) => ({ rootMargin: t.margin }),
        args: { intersecting: !1 },
      }),
      update: [
        {
          write(t) {
            for (const [e, i] of this.elementData.entries())
              !i.show || i.inview || i.queued
                ? !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
                : ((i.queued = !0),
                  (t.promise = (t.promise || Promise.resolve())
                    .then(() => new Promise((t) => setTimeout(t, this.delay)))
                    .then(() => {
                      this.toggle(e, !0),
                        setTimeout(() => {
                          (i.queued = !1), this.$emit();
                        }, 300);
                    })));
          },
        },
      ],
      methods: {
        toggle(t, e) {
          var i;
          const n = this.elementData.get(t);
          if (n) {
            if (
              (null == (i = n.off) || i.call(n),
              Rt(t, "opacity", !e && this.hidden ? 0 : ""),
              Kt(t, this.inViewClass, e),
              Kt(t, n.cls),
              /\bbdt-animation-/.test(n.cls))
            ) {
              const i = () => Jt(t, "bdt-animation-[\\w-]+");
              e ? (n.off = Ot(t, "animationcancel animationend", i)) : i();
            }
            Nt(t, e ? "inview" : "outview"), (n.inview = e), this.$update(t);
          }
        },
      },
    },
    Ao = {
      props: { cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number },
      data: { cls: "bdt-active", closest: !1, scroll: !1, overflow: !0, offset: 0 },
      computed: {
        links: (t, e) => Ie('a[href*="#"]', e).filter((t) => t.hash && vt(t)),
        elements({ closest: t }) {
          return ut(this.links, t || "*");
        },
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset || 0 });
        },
      },
      observe: [ts(), ss()],
      update: [
        {
          read() {
            const t = this.links.map(bt).filter(Boolean),
              { length: e } = t;
            if (!e || !st(this.$el)) return !1;
            const i = Ei(t, !0),
              { scrollTop: n, scrollHeight: s } = i,
              o = Bi(i);
            let r = !1;
            if (n === s - o.height) r = e - 1;
            else {
              for (let e = 0; e < t.length && !(Ee(t[e]).top - o.top - this.offset > 0); e++) r = +e;
              !1 === r && this.overflow && (r = 0);
            }
            return { active: r };
          },
          write({ active: t }) {
            const e = !1 !== t && !Zt(this.elements[t], this.cls);
            this.links.forEach((t) => t.blur());
            for (let e = 0; e < this.elements.length; e++) Kt(this.elements[e], this.cls, +e === t);
            e && Nt(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"],
        },
      ],
    },
    Bo = {
      mixins: [Fn, ho],
      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number,
      },
      data: {
        position: "top",
        top: !1,
        bottom: !1,
        start: !1,
        end: !1,
        offset: 0,
        overflowFlip: !1,
        animation: "",
        clsActive: "bdt-active",
        clsInactive: "",
        clsFixed: "bdt-sticky-fixed",
        clsBelow: "bdt-sticky-below",
        selTarget: "",
        showOnUp: !1,
        targetOffset: !1,
      },
      computed: { selTarget: ({ selTarget: t }, e) => (t && Se(t, e)) || e },
      connected() {
        (this.start = Po(this.start || this.top)),
          (this.end = Po(this.end || this.bottom)),
          (this.placeholder =
            Se("+ .bdt-sticky-placeholder", this.$el) || Se('<div class="bdt-sticky-placeholder"></div>')),
          (this.isFixed = !1),
          this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), Xt(this.selTarget, this.clsInactive)),
          Do(this.$el),
          pe(this.placeholder),
          (this.placeholder = null);
      },
      observe: [Qn({ target: ({ $el: t }) => [t, document.scrollingElement] }), ns(), ss()],
      events: [
        {
          name: "load hashchange popstate",
          el: () => window,
          filter() {
            return !1 !== this.targetOffset;
          },
          handler() {
            const { scrollingElement: t } = document;
            !location.hash ||
              0 === t.scrollTop ||
              setTimeout(() => {
                const e = Ee(Se(location.hash)),
                  i = Ee(this.$el);
                this.isFixed &&
                  R(e, i) &&
                  (t.scrollTop =
                    e.top -
                    i.height -
                    Ne(this.targetOffset, "height", this.placeholder) -
                    Ne(this.offset, "height", this.placeholder));
              });
          },
        },
        {
          name: "transitionstart",
          capture: !0,
          handler() {
            this.transitionInProgress = Ot(
              this.$el,
              "transitionend transitioncancel",
              () => (this.transitionInProgress = null),
            );
          },
        },
      ],
      update: [
        {
          read({ height: t, width: e, margin: i, sticky: n }) {
            if (((this.inactive = !this.matchMedia || !st(this.$el)), this.inactive)) return;
            const s = this.isFixed && !this.transitionInProgress;
            s && (Mo(this.selTarget), this.hide()),
              this.active || (({ height: t, width: e } = Ee(this.$el)), (i = Rt(this.$el, "margin"))),
              s && this.show();
            const o = Ne("100vh", "height"),
              r = _e(window),
              a = document.scrollingElement.scrollHeight - o;
            let l = this.position;
            this.overflowFlip && t > o && (l = "top" === l ? "bottom" : "top");
            const h = this.isFixed ? this.placeholder : this.$el;
            let c = Ne(this.offset, "height", n ? this.$el : h);
            "bottom" === l && (t < r || this.overflowFlip) && (c += r - t);
            const d = this.overflowFlip ? 0 : Math.max(0, t + c - o),
              u = Ee(h).top,
              f = Ee(this.$el).height,
              p = (!1 === this.start ? u : _o(this.start, this.$el, u)) - c,
              m = !1 === this.end ? a : Math.min(a, _o(this.end, this.$el, u + t, !0) - f - c + d);
            return (
              (n =
                a &&
                !this.showOnUp &&
                p + c === u &&
                m === Math.min(a, _o("!*", this.$el, 0, !0) - f - c + d) &&
                "visible" === Rt(ht(this.$el), "overflowY")),
              {
                start: p,
                end: m,
                offset: c,
                overflow: d,
                topOffset: u,
                height: t,
                elHeight: f,
                width: e,
                margin: i,
                top: Be(h)[0],
                sticky: n,
              }
            );
          },
          write({ height: t, width: e, margin: i, offset: n, sticky: s }) {
            if (((this.inactive || s || !this.isFixed) && Do(this.$el), this.inactive)) return;
            s && ((t = e = i = 0), Rt(this.$el, { position: "sticky", top: n }));
            const { placeholder: o } = this;
            Rt(o, { height: t, width: e, margin: i }), ft(o, document) || (o.hidden = !0), (s ? de : ue)(this.$el, o);
          },
          events: ["resize"],
        },
        {
          read({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: n = 0, start: s, end: o }) {
            const r = document.scrollingElement.scrollTop;
            return {
              dir: t <= r ? "down" : "up",
              prevDir: e,
              scroll: r,
              prevScroll: t,
              offsetParentTop: Ee((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
              overflowScroll: W(n + W(r, s, o) - W(t, s, o), 0, i),
            };
          },
          write(t, e) {
            const i = e.has("scroll"),
              {
                initTimestamp: n = 0,
                dir: s,
                prevDir: o,
                scroll: r,
                prevScroll: a = 0,
                top: l,
                start: h,
                topOffset: c,
                height: d,
              } = t;
            if (r < 0 || (r === a && i) || (this.showOnUp && !i && !this.isFixed)) return;
            const u = Date.now();
            if (
              ((u - n > 300 || s !== o) && ((t.initScroll = r), (t.initTimestamp = u)),
              !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
            )
              if (
                this.inactive ||
                r < h ||
                (this.showOnUp && (r <= h || ("down" === s && i) || ("up" === s && !this.isFixed && r <= c + d)))
              ) {
                if (!this.isFixed) return void (oe.inProgress(this.$el) && l > r && (oe.cancel(this.$el), this.hide()));
                this.animation && r > c
                  ? (oe.cancel(this.$el), oe.out(this.$el, this.animation).then(() => this.hide(), V))
                  : this.hide();
              } else
                this.isFixed
                  ? this.update()
                  : this.animation && r > c
                  ? (oe.cancel(this.$el), this.show(), oe.in(this.$el, this.animation).catch(V))
                  : (Mo(this.selTarget), this.show());
          },
          events: ["resize", "resizeVieairort", "scroll"],
        },
      ],
      methods: {
        show() {
          (this.isFixed = !0), this.update(), (this.placeholder.hidden = !1);
        },
        hide() {
          const { offset: t, sticky: e } = this._data;
          this.setActive(!1),
            Xt(this.$el, this.clsFixed, this.clsBelow),
            e ? Rt(this.$el, "top", t) : Rt(this.$el, { position: "", top: "", width: "", marginTop: "" }),
            (this.placeholder.hidden = !0),
            (this.isFixed = !1);
        },
        update() {
          let {
            width: t,
            scroll: e = 0,
            overflow: i,
            overflowScroll: n = 0,
            start: s,
            end: o,
            offset: r,
            topOffset: a,
            height: l,
            elHeight: h,
            offsetParentTop: c,
            sticky: d,
          } = this._data;
          const u = 0 !== s || e > s;
          if (!d) {
            let i = "fixed";
            e > o && ((r += o - c), (i = "absolute")),
              Rt(this.$el, { position: i, width: t, marginTop: 0 }, "important");
          }
          i && (r -= n),
            Rt(this.$el, "top", r),
            this.setActive(u),
            Kt(this.$el, this.clsBelow, e > a + (d ? Math.min(l, h) : l)),
            Yt(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          (this.active = t),
            t
              ? (Gt(this.selTarget, this.clsInactive, this.clsActive), e !== t && Nt(this.$el, "active"))
              : (Gt(this.selTarget, this.clsActive, this.clsInactive), e !== t && Nt(this.$el, "inactive"));
        },
      },
    };
  function _o(t, e, i, n) {
    if (!t) return 0;
    if (C(t) || (I(t) && t.match(/^-?\d/))) return i + Ne(t, "height", e, !0);
    {
      const i = !0 === t ? ht(e) : wt(t, e);
      return Ee(i).bottom - (n && i && ft(e, i) ? _(Rt(i, "paddingBottom")) : 0);
    }
  }
  function Po(t) {
    return "true" === t || ("false" !== t && t);
  }
  function Do(t) {
    Rt(t, { position: "", top: "", marginTop: "", width: "" });
  }
  function Mo(t) {
    Rt(t, "transition", "0s"), requestAnimationFrame(() => Rt(t, "transition", ""));
  }
  function Oo(t) {
    return Math.ceil(
      Math.max(
        0,
        ...Ie("[stroke]", t).map((t) => {
          try {
            return t.getTotalLength();
          } catch {
            return 0;
          }
        }),
      ),
    );
  }
  var No = {
    mixins: [Hs],
    args: "src",
    props: { src: String, icon: String, attributes: "list", strokeAnimation: Boolean },
    data: { strokeAnimation: !1 },
    observe: [
      es({
        async handler() {
          const t = await this.svg;
          t && zo.call(this, t);
        },
        options: { attributes: !0, attributeFilter: ["id", "class", "style"] },
      }),
    ],
    async connected() {
      c(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
      const t = await this.svg;
      t &&
        (zo.call(this, t),
        this.strokeAnimation &&
          (function (t) {
            const e = Oo(t);
            e && Rt(t, "--bdt-animation-stroke", e);
          })(t));
    },
    methods: {
      async getSvg() {
        return re(this.$el, "img") && !this.$el.complete && "lazy" === this.$el.loading
          ? new Promise((t) => Ot(this.$el, "load", () => t(this.getSvg())))
          : (function (t, e) {
              return (
                e && c(t, "<symbol") && (t = jo(t)[e] || t),
                (t = Se(t.substr(t.indexOf("<svg")))),
                (null == t ? void 0 : t.hasChildNodes()) && t
              );
            })(await Ho(this.src), this.icon) || Promise.reject("SVG not found.");
      },
    },
  };
  function zo(t) {
    const { $el: e } = this;
    Yt(t, K(e, "class"), "bdt-svg");
    for (let i = 0; i < e.style.length; i++) {
      const n = e.style[i];
      Rt(t, n, Rt(e, n));
    }
    for (const e in this.attributes) {
      const [i, n] = this.attributes[e].split(":", 2);
      K(t, i, n);
    }
    this.$el.id || tt(t, "id");
  }
  const Ho = Z(async (t) =>
    t ? (l(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text()) : Promise.reject(),
  );
  const Fo = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
    jo = Z(function (t) {
      const e = {};
      let i;
      for (Fo.lastIndex = 0; (i = Fo.exec(t)); ) e[i[3]] = `<svg ${i[1]}svg>`;
      return e;
    });
  const Lo = ".bdt-disabled *, .bdt-disabled, [disabled]";
  var qo = {
      mixins: [jn],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
        followFocus: Boolean,
        swiping: Boolean,
      },
      data: {
        connect: "~.bdt-switcher",
        toggle: "> * > :first-child",
        itemNav: !1,
        active: 0,
        cls: "bdt-active",
        attrItem: "bdt-switcher-item",
        selVertical: ".bdt-nav",
        followFocus: !1,
        swiping: !0,
      },
      computed: {
        connects: ({ connect: t }, e) => $t(t, e),
        connectChildren() {
          return this.connects.map((t) => mt(t)).flat();
        },
        toggles: ({ toggle: t }, e) => Ie(t, e),
        children() {
          return mt(this.$el).filter((t) => this.toggles.some((e) => ft(e, t)));
        },
      },
      watch: {
        connects(t) {
          this.swiping && Rt(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects) mt(e).forEach((e, i) => Kt(e, this.cls, i === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        },
      },
      connected() {
        K(this.$el, "role", "tablist");
      },
      observe: [
        is({ targets: ({ connectChildren: t }) => t }),
        os({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t }),
      ],
      events: [
        {
          name: "click keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            !dt(t.current, Lo) &&
              ("click" === t.type || t.keyCode === Un) &&
              (t.preventDefault(), this.show(t.current));
          },
        },
        {
          name: "keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            const { current: e, keyCode: i } = t,
              n = dt(this.$el, this.selVertical);
            let s =
              i === Xn
                ? 0
                : i === Yn
                ? "last"
                : (i === Jn && !n) || (i === Gn && n)
                ? "previous"
                : (i === Zn && !n) || (i === Kn && n)
                ? "next"
                : -1;
            if (~s) {
              t.preventDefault();
              const i = this.toggles.filter((t) => !dt(t, Lo)),
                n = i[G(s, i, i.indexOf(e))];
              n.focus(), this.followFocus && this.show(n);
            }
          },
        },
        {
          name: "click",
          el() {
            return this.connects.concat(this.itemNav ? $t(this.itemNav, this.$el) : []);
          },
          delegate() {
            return `[${this.attrItem}],[data-${this.attrItem}]`;
          },
          handler(t) {
            ut(t.target, "a,button") && (t.preventDefault(), this.show(et(t.current, this.attrItem)));
          },
        },
        {
          name: "swipeRight swipeLeft",
          filter() {
            return this.swiping;
          },
          el() {
            return this.connects;
          },
          handler({ type: t }) {
            this.show(h(t, "Left") ? "next" : "previous");
          },
        },
      ],
      update() {
        var t;
        K(this.connects, "role", "presentation"), K(mt(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e],
            n = null == (t = this.connects[0]) ? void 0 : t.children[e];
          K(i, "role", "tab"),
            n &&
              ((i.id = _n(this, i, `-tab-${e}`)),
              (n.id = _n(this, n, `-tabpanel-${e}`)),
              K(i, "aria-controls", n.id),
              K(n, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        K(this.$el, "aria-orientation", dt(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return d(this.children, (t) => Zt(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((t) => !dt(t, Lo)),
            i = this.index(),
            n = G(!$(t) || c(e, t) ? t : 0, e, G(this.toggles[i], e)),
            s = G(e[n], this.toggles);
          this.children.forEach((t, e) => {
            Kt(t, this.cls, s === e), K(this.toggles[e], { "aria-selected": s === e, tabindex: s === e ? null : -1 });
          });
          const o = i >= 0 && i !== n;
          this.connects.forEach(async ({ children: t }) => {
            const e = f(t).filter((t, e) => e !== s && Zt(t, this.cls));
            await this.toggleElement(e, !1, o), await this.toggleElement(t[s], !0, o);
          });
        },
      },
    },
    Wo = {
      mixins: [Fn],
      extends: qo,
      props: { media: Boolean },
      data: { media: 960, attrItem: "bdt-tab-item", selVertical: ".bdt-tab-left,.bdt-tab-right" },
      connected() {
        const t = Zt(this.$el, "bdt-tab-left") ? "bdt-tab-left" : !!Zt(this.$el, "bdt-tab-right") && "bdt-tab-right";
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      },
    };
  var Vo = {
    mixins: [ho, jn],
    args: "target",
    props: { href: String, target: null, mode: "list", queued: Boolean },
    data: { href: !1, target: !1, mode: "click", queued: !0 },
    computed: { target: ({ target: t }, e) => ((t = $t(t || e.hash, e)).length && t) || [e] },
    connected() {
      c(this.mode, "media") ||
        (lt(this.$el) || K(this.$el, "tabindex", "0"), !this.cls && re(this.$el, "a") && K(this.$el, "role", "button"));
    },
    observe: is({ target: ({ target: t }) => t }),
    events: [
      {
        name: Ye,
        filter() {
          return c(this.mode, "hover");
        },
        handler(t) {
          (this._preventClick = null),
            qt(t) &&
              !S(this._showState) &&
              !this.$el.disabled &&
              (Nt(this.$el, "focus"),
              Ot(
                document,
                Ye,
                () => Nt(this.$el, "blur"),
                !0,
                (t) => !ft(t.target, this.$el),
              ),
              c(this.mode, "click") && (this._preventClick = !0));
        },
      },
      {
        name: `${Ge} ${Ze} focus blur`,
        filter() {
          return c(this.mode, "hover");
        },
        handler(t) {
          if (qt(t) || this.$el.disabled) return;
          const e = c([Ge, "focus"], t.type),
            i = this.isToggled(this.target);
          e ||
          !(
            !S(this._showState) ||
            (t.type === Ze && dt(this.$el, ":focus")) ||
            ("blur" === t.type && dt(this.$el, ":hover"))
          )
            ? (e && S(this._showState) && i !== this._showState) ||
              ((this._showState = e ? i : null), this.toggle("toggle" + (e ? "show" : "hide")))
            : i === this._showState && (this._showState = null);
        },
      },
      {
        name: "keydown",
        filter() {
          return c(this.mode, "click") && !re(this.$el, "input");
        },
        handler(t) {
          32 === t.keyCode && (t.preventDefault(), this.$el.click());
        },
      },
      {
        name: "click",
        filter() {
          return ["click", "hover"].some((t) => c(this.mode, t));
        },
        handler(t) {
          let e;
          (this._preventClick ||
            ut(t.target, 'a[href="#"], a[href=""]') ||
            ((e = ut(t.target, "a[href]")) && (!this.isToggled(this.target) || (e.hash && dt(this.target, e.hash))))) &&
            t.preventDefault(),
            !this._preventClick && c(this.mode, "click") && this.toggle();
        },
      },
      {
        name: "mediachange",
        filter() {
          return c(this.mode, "media");
        },
        el() {
          return this.target;
        },
        handler(t, e) {
          e.matches ^ this.isToggled(this.target) && this.toggle();
        },
      },
    ],
    methods: {
      async toggle(t) {
        if (!Nt(this.target, t || "toggle", [this])) return;
        if ((Q(this.$el, "aria-expanded") && K(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued))
          return this.toggleElement(this.target);
        const e = this.target.filter((t) => Zt(t, this.clsLeave));
        if (e.length) {
          for (const t of this.target) {
            const i = c(e, t);
            this.toggleElement(t, i, i);
          }
          return;
        }
        const i = this.target.filter(this.isToggled);
        (await this.toggleElement(i, !1)) &&
          (await this.toggleElement(
            this.target.filter((t) => !c(i, t)),
            !0,
          ));
      },
    },
  };
  H(
    Object.freeze({
      __proto__: null,
      Accordion: as,
      Alert: hs,
      Close: Zs,
      Cover: us,
      Drop: ws,
      DropParentIcon: Vs,
      Dropdown: ws,
      Dropnav: Is,
      FormCustom: Cs,
      Grid: Ps,
      HeightMatch: Ms,
      HeightVieairort: zs,
      Icon: Ws,
      Img: so,
      Leader: co,
      Margin: Ts,
      Marker: Ks,
      Modal: bo,
      Nav: wo,
      NavParentIcon: Rs,
      Navbar: $o,
      NavbarParentIcon: Vs,
      NavbarToggleIcon: Gs,
      Offcanvas: xo,
      OverflowAuto: So,
      OverlayIcon: Vs,
      PaginationNext: to,
      PaginationPrevious: eo,
      Responsive: Io,
      Scroll: ko,
      Scrollspy: Eo,
      ScrollspyNav: Ao,
      SearchIcon: Us,
      SlidenavNext: Js,
      SlidenavPrevious: Js,
      Spinner: Ys,
      Sticky: Bo,
      Svg: No,
      Switcher: qo,
      Tab: Wo,
      Toggle: Vo,
      Totop: Qs,
      Video: ds,
    }),
    (t, e) => xn.component(e, t),
  ),
    (function (t) {
      We &&
        window.MutationObserver &&
        (document.body
          ? requestAnimationFrame(() => Dn(t))
          : new MutationObserver((e, i) => {
              document.body && (Dn(t), i.disconnect());
            }).observe(document.documentElement, { childList: !0 }));
    })(xn);
  const Ro = ["days", "hours", "minutes", "seconds"];
  var Uo = {
    mixins: [Fn],
    props: { date: String, clsWrapper: String, role: String },
    data: { date: "", clsWrapper: ".bdt-countdown-%unit%", role: "timer" },
    connected() {
      K(this.$el, "role", this.role), (this.date = _(Date.parse(this.$props.date))), (this.end = !1), this.start();
    },
    disconnected() {
      this.stop();
    },
    events: {
      name: "visibilitychange",
      el: () => document,
      handler() {
        document.hidden ? this.stop() : this.start();
      },
    },
    methods: {
      start() {
        this.stop(),
          this.update(),
          this.timer || (Nt(this.$el, "countdownstart"), (this.timer = setInterval(this.update, 1e3)));
      },
      stop() {
        this.timer && (clearInterval(this.timer), Nt(this.$el, "countdownstop"), (this.timer = null));
      },
      update() {
        const t = (function (t) {
          const e = Math.max(0, t - Date.now()) / 1e3;
          return {
            total: e,
            seconds: e % 60,
            minutes: (e / 60) % 60,
            hours: (e / 60 / 60) % 24,
            days: e / 60 / 60 / 24,
          };
        })(this.date);
        t.total || (this.stop(), this.end || (Nt(this.$el, "countdownend"), (this.end = !0)));
        for (const e of Ro) {
          const i = Se(this.clsWrapper.replace("%unit%", e), this.$el);
          if (!i) continue;
          let n = String(Math.trunc(t[e]));
          (n = n.length < 2 ? `0${n}` : n),
            i.textContent !== n &&
              ((n = n.split("")),
              n.length !== i.children.length && le(i, n.map(() => "<span></span>").join("")),
              n.forEach((t, e) => (i.children[e].textContent = t)));
        }
      },
    },
  };
  const Yo = "bdt-transition-leave",
    Xo = "bdt-transition-enter";
  function Jo(t, e, i, n = 0) {
    const s = Go(e, !0),
      o = { opacity: 1 },
      r = { opacity: 0 },
      a = (t) => () => s === Go(e) ? t() : Promise.reject(),
      l = a(async () => {
        Yt(e, Yo),
          await Promise.all(
            Ko(e).map((t, e) => new Promise((s) => setTimeout(() => ee.start(t, r, i / 2, "ease").then(s), e * n))),
          ),
          Xt(e, Yo);
      }),
      h = a(async () => {
        const a = _e(e);
        Yt(e, Xo), t(), Rt(mt(e), { opacity: 0 }), await new Promise((t) => requestAnimationFrame(t));
        const l = mt(e),
          h = _e(e);
        Rt(e, "alignContent", "flex-start"), _e(e, a);
        const c = Ko(e);
        Rt(l, r);
        const d = c.map(async (t, e) => {
          await (function (t) {
            return new Promise((e) => setTimeout(e, t));
          })(e * n),
            await ee.start(t, o, i / 2, "ease");
        });
        a !== h && d.push(ee.start(e, { height: h }, i / 2 + c.length * n, "ease")),
          await Promise.all(d).then(() => {
            Xt(e, Xo),
              s === Go(e) &&
                (Rt(e, { height: "", alignContent: "" }), Rt(l, { opacity: "" }), delete e.dataset.transition);
          });
      });
    return Zt(e, Yo) ? Zo(e).then(h) : Zt(e, Xo) ? Zo(e).then(l).then(h) : l().then(h);
  }
  function Go(t, e) {
    return e && (t.dataset.transition = 1 + Go(t)), B(t.dataset.transition) || 0;
  }
  function Zo(t) {
    return Promise.all(
      mt(t)
        .filter(ee.inProgress)
        .map((t) => new Promise((e) => Ot(t, "transitionend transitioncanceled", e))),
    );
  }
  function Ko(t) {
    return Es(mt(t)).reduce(
      (t, e) =>
        t.concat(
          F(
            e.filter((t) => Ii(t)),
            "offsetLeft",
          ),
        ),
      [],
    );
  }
  async function Qo(t, e, i) {
    await ir();
    let n = mt(e);
    const s = n.map((t) => tr(t, !0)),
      o = { ...Rt(e, ["height", "padding"]), display: "block" };
    await Promise.all(n.concat(e).map(ee.cancel)),
      t(),
      (n = n.concat(mt(e).filter((t) => !c(n, t)))),
      await Promise.resolve(),
      Qe.flush();
    const r = K(e, "style"),
      a = Rt(e, ["height", "padding"]),
      [l, h] = (function (t, e, i) {
        const n = e.map(
            (t, e) => !(!ht(t) || !(e in i)) && (i[e] ? (st(t) ? er(t) : { opacity: 0 }) : { opacity: st(t) ? 1 : 0 }),
          ),
          s = n.map((n, s) => {
            const o = ht(e[s]) === t && (i[s] || tr(e[s]));
            if (!o) return !1;
            if (n) {
              if (!("opacity" in n)) {
                const { opacity: t } = o;
                t % 1 ? (n.opacity = 1) : delete o.opacity;
              }
            } else delete o.opacity;
            return o;
          });
        return [n, s];
      })(e, n, s),
      d = n.map((t) => ({ style: K(t, "style") }));
    n.forEach((t, e) => h[e] && Rt(t, h[e])), Rt(e, o), Nt(e, "scroll"), Qe.flush(), await ir();
    const u = n.map((t, n) => ht(t) === e && ee.start(t, l[n], i, "ease")).concat(ee.start(e, a, i, "ease"));
    try {
      await Promise.all(u),
        n.forEach((t, i) => {
          K(t, d[i]), ht(t) === e && Rt(t, "display", 0 === l[i].opacity ? "none" : "");
        }),
        K(e, "style", r);
    } catch {
      K(n, "style", ""),
        (function (t, e) {
          for (const i in e) Rt(t, i, "");
        })(e, o);
    }
  }
  function tr(t, e) {
    const i = Rt(t, "zIndex");
    return (
      !!st(t) && {
        display: "",
        opacity: e ? Rt(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: "auto" === i ? gt(t) : i,
        ...er(t),
      }
    );
  }
  function er(t) {
    const { height: e, width: i } = Ee(t);
    return { height: e, width: i, transform: "", ...Ae(t), ...Rt(t, ["marginTop", "marginLeft"]) };
  }
  function ir() {
    return new Promise((t) => requestAnimationFrame(t));
  }
  var nr = {
      props: { duration: Number, animation: Boolean },
      data: { duration: 150, animation: "slide" },
      methods: {
        animate(t, e = this.$el) {
          const i = this.animation;
          return (
            "fade" === i ? Jo : "delayed-fade" === i ? (...t) => Jo(...t, 40) : i ? Qo : () => (t(), Promise.resolve())
          )(t, e, this.duration).catch(V);
        },
      },
    },
    sr = {
      mixins: [nr],
      args: "target",
      props: { target: String, selActive: Boolean },
      data: { target: "", selActive: !1, attrItem: "bdt-filter-control", cls: "bdt-active", duration: 250 },
      computed: {
        toggles: ({ attrItem: t }, e) => Ie(`[${t}],[data-${t}]`, e),
        children: ({ target: t }, e) => Ie(`${t} > *`, e),
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = Ie(this.selActive, this.$el);
          for (const i of t) {
            !1 !== this.selActive && Kt(i, this.cls, c(e, i));
            const t = lr(i);
            re(t, "a") && K(t, "role", "button");
          }
        },
        children(t, e) {
          e && this.updateState();
        },
      },
      events: {
        name: "click keydown",
        delegate() {
          return `[${this.attrItem}],[data-${this.attrItem}]`;
        },
        handler(t) {
          ("keydown" === t.type && t.keyCode !== Un) ||
            (ut(t.target, "a,button") && (t.preventDefault(), this.apply(t.current)));
        },
      },
      methods: {
        apply(t) {
          const e = this.getState(),
            i = rr(t, this.attrItem, this.getState());
          (function (t, e) {
            return ["filter", "sort"].every((i) => O(t[i], e[i]));
          })(e, i) || this.setState(i);
        },
        getState() {
          return this.toggles
            .filter((t) => Zt(t, this.cls))
            .reduce((t, e) => rr(e, this.attrItem, t), { filter: { "": "" }, sort: [] });
        },
        async setState(t, e = !0) {
          (t = { filter: { "": "" }, sort: [], ...t }), Nt(this.$el, "beforeFilter", [this, t]);
          for (const e of this.toggles) Kt(e, this.cls, ar(e, this.attrItem, t));
          await Promise.all(
            Ie(this.target, this.$el).map((i) => {
              const n = () => {
                (function (t, e, i) {
                  const n = (function ({ filter: t }) {
                    let e = "";
                    return H(t, (t) => (e += t || "")), e;
                  })(t);
                  i.forEach((t) => Rt(t, "display", n && !dt(t, n) ? "none" : ""));
                  const [s, o] = t.sort;
                  if (s) {
                    const t = (function (t, e, i) {
                      return [...t].sort(
                        (t, n) => et(t, e).localeCompare(et(n, e), void 0, { numeric: !0 }) * ("asc" === i || -1),
                      );
                    })(i, s, o);
                    O(t, i) || ce(e, t);
                  }
                })(t, i, mt(i)),
                  this.$update(this.$el);
              };
              return e ? this.animate(n, i) : n();
            }),
          ),
            Nt(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Qe.write(() => this.setState(this.getState(), !1));
        },
      },
    };
  function or(t, e) {
    return un(et(t, e), ["filter"]);
  }
  function rr(t, e, i) {
    const { filter: n, group: s, sort: o, order: r = "asc" } = or(t, e);
    return (
      (n || E(o)) &&
        (s
          ? n
            ? (delete i.filter[""], (i.filter[s] = n))
            : (delete i.filter[s], (T(i.filter) || "" in i.filter) && (i.filter = { "": n || "" }))
          : (i.filter = { "": n || "" })),
      E(o) || (i.sort = [o, r]),
      i
    );
  }
  function ar(t, e, { filter: i = { "": "" }, sort: [n, s] }) {
    const { filter: o = "", group: r = "", sort: a, order: l = "asc" } = or(t, e);
    return E(a) ? (r in i && o === i[r]) || (!o && r && !(r in i) && !i[""]) : n === a && s === l;
  }
  function lr(t) {
    return Se("a,button", t) || t;
  }
  var hr = {
    slide: {
      show: (t) => [{ transform: dr(-100 * t) }, { transform: dr() }],
      percent: (t) => cr(t),
      translate: (t, e) => [{ transform: dr(-100 * e * t) }, { transform: dr(100 * e * (1 - t)) }],
    },
  };
  function cr(t) {
    return Math.abs(Rt(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }
  function dr(t = 0, e = "%") {
    return `translate3d(${(t += t ? e : "")}, 0, 0)`;
  }
  function ur(t) {
    return `scale3d(${t}, ${t}, 1)`;
  }
  var fr = {
    ...hr,
    fade: {
      show: () => [{ opacity: 0 }, { opacity: 1 }],
      percent: (t) => 1 - Rt(t, "opacity"),
      translate: (t) => [{ opacity: 1 - t }, { opacity: t }],
    },
    scale: {
      show: () => [
        { opacity: 0, transform: ur(0.8) },
        { opacity: 1, transform: ur(1) },
      ],
      percent: (t) => 1 - Rt(t, "opacity"),
      translate: (t) => [
        { opacity: 1 - t, transform: ur(1 - 0.2 * t) },
        { opacity: t, transform: ur(0.8 + 0.2 * t) },
      ],
    },
  };
  function pr(t, e, i) {
    Nt(t, zt(e, !1, !1, i));
  }
  var mr = {
    i18n: {
      next: "Next slide",
      previous: "Previous slide",
      slideX: "Slide %s",
      slideLabel: "%s of %s",
      role: "String",
    },
    data: { selNav: !1, role: "region" },
    computed: {
      nav: ({ selNav: t }, e) => Se(t, e),
      navChildren() {
        return mt(this.nav);
      },
      selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
      navItems(t, e) {
        return Ie(this.selNavItem, e);
      },
    },
    watch: {
      nav(t, e) {
        K(t, "role", "tablist"), e && this.$emit();
      },
      list(t) {
        K(t, "role", "presentation");
      },
      navChildren(t) {
        K(t, "role", "presentation");
      },
      navItems(t) {
        for (const e of t) {
          const t = et(e, this.attrItem),
            i = Se("a,button", e) || e;
          let n,
            s = null;
          if (C(t)) {
            const e = B(t),
              o = this.slides[e];
            o && (o.id || (o.id = _n(this, o, `-item-${t}`)), (s = o.id)),
              (n = this.t("slideX", _(t) + 1)),
              K(i, "role", "tab");
          } else
            this.list && (this.list.id || (this.list.id = _n(this, this.list, "-items")), (s = this.list.id)),
              (n = this.t(t));
          K(i, { "aria-controls": s, "aria-label": K(i, "aria-label") || n });
        }
      },
      slides(t) {
        t.forEach((t, e) =>
          K(t, {
            role: this.nav ? "tabpanel" : "group",
            "aria-label": this.t("slideLabel", e + 1, this.length),
            "aria-roledescription": this.nav ? null : "slide",
          }),
        );
      },
      length(t) {
        const e = this.navChildren.length;
        if (this.nav && t !== e) {
          ae(this.nav);
          for (let e = 0; e < t; e++) ce(this.nav, `<li ${this.attrItem}="${e}"><a href></a></li>`);
        }
      },
    },
    connected() {
      K(this.$el, { role: this.role, "aria-roledescription": "carousel" });
    },
    update: [
      {
        write() {
          this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
        },
        events: ["resize"],
      },
    ],
    events: [
      {
        name: "click keydown",
        delegate() {
          return this.selNavItem;
        },
        handler(t) {
          ut(t.target, "a,button") &&
            ("click" === t.type || t.keyCode === Un) &&
            (t.preventDefault(), this.show(et(t.current, this.attrItem)));
        },
      },
      { name: "itemshow", handler: "updateNav" },
      {
        name: "keydown",
        delegate() {
          return this.selNavItem;
        },
        handler(t) {
          const { current: e, keyCode: i } = t;
          if (!C(et(e, this.attrItem))) return;
          let n = i === Xn ? 0 : i === Yn ? "last" : i === Jn ? "previous" : i === Zn ? "next" : -1;
          ~n && (t.preventDefault(), this.show(n));
        },
      },
    ],
    methods: {
      updateNav() {
        const t = this.getValidIndex();
        let e, i;
        for (const n of this.navItems) {
          const s = et(n, this.attrItem),
            o = Se("a,button", n) || n;
          if (C(s)) {
            const r = B(s) === t;
            Kt(n, this.clsActive, r),
              K(o, { "aria-selected": r, tabindex: r ? null : -1 }),
              r && (i = o),
              e || (e = dt(o, ":focus"));
          } else
            Kt(
              n,
              "bdt-invisible",
              this.finite && (("previous" === s && 0 === t) || ("next" === s && t >= this.maxIndex)),
            );
          e && i && i.focus();
        }
      },
    },
  };
  const gr = { passive: !1, capture: !0 },
    vr = { passive: !0, capture: !0 },
    br = "touchmove mousemove",
    wr = "touchend touchcancel mouseup click input scroll";
  var $r = {
    props: { draggable: Boolean },
    data: { draggable: !0, threshold: 10 },
    created() {
      for (const t of ["start", "move", "end"]) {
        const e = this[t];
        this[t] = (t) => {
          const i = Wt(t).x * (Ve ? -1 : 1);
          (this.prevPos = i === this.pos ? this.prevPos : this.pos), (this.pos = i), e(t);
        };
      }
    },
    events: [
      {
        name: "touchstart mousedown",
        passive: !0,
        delegate() {
          return `${this.selList} > *`;
        },
        handler(t) {
          !this.draggable ||
            (!qt(t) &&
              (function (t) {
                return (
                  "none" !== Rt(t, "userSelect") &&
                  f(t.childNodes).some((t) => 3 === t.nodeType && t.textContent.trim())
                );
              })(t.target)) ||
            ut(t.target, ot) ||
            t.button > 0 ||
            this.length < 2 ||
            this.start(t);
        },
      },
      {
        name: "dragstart",
        handler(t) {
          t.preventDefault();
        },
      },
      {
        name: br,
        el() {
          return this.list;
        },
        handler: V,
        ...gr,
      },
    ],
    methods: {
      start() {
        (this.drag = this.pos),
          this._transitioner
            ? ((this.percent = this._transitioner.percent()),
              (this.drag += this._transitioner.getDistance() * this.percent * this.dir),
              this._transitioner.cancel(),
              this._transitioner.translate(this.percent),
              (this.dragging = !0),
              (this.stack = []))
            : (this.prevIndex = this.index),
          Dt(document, br, this.move, gr),
          Dt(document, wr, this.end, vr),
          Rt(this.list, "userSelect", "none");
      },
      move(t) {
        const e = this.pos - this.drag;
        if (0 === e || this.prevPos === this.pos || (!this.dragging && Math.abs(e) < this.threshold)) return;
        Rt(this.list, "pointerEvents", "none"),
          t.cancelable && t.preventDefault(),
          (this.dragging = !0),
          (this.dir = e < 0 ? 1 : -1);
        let { slides: i, prevIndex: n } = this,
          s = Math.abs(e),
          o = this.getIndex(n + this.dir),
          r = this._getDistance(n, o);
        for (; o !== n && s > r; )
          (this.drag -= r * this.dir),
            (n = o),
            (s -= r),
            (o = this.getIndex(n + this.dir)),
            (r = this._getDistance(n, o));
        this.percent = s / r;
        const a = i[n],
          l = i[o],
          h = this.index !== o,
          d = n === o;
        let u;
        for (const t of [this.index, this.prevIndex])
          c([o, n], t) || (Nt(i[t], "itemhidden", [this]), d && ((u = !0), (this.prevIndex = n)));
        ((this.index === n && this.prevIndex !== n) || u) && Nt(i[this.index], "itemshown", [this]),
          h &&
            ((this.prevIndex = n),
            (this.index = o),
            !d && Nt(a, "beforeitemhide", [this]),
            Nt(l, "beforeitemshow", [this])),
          (this._transitioner = this._translate(Math.abs(this.percent), a, !d && l)),
          h && (!d && Nt(a, "itemhide", [this]), Nt(l, "itemshow", [this]));
      },
      end() {
        if ((Mt(document, br, this.move, gr), Mt(document, wr, this.end, vr), this.dragging))
          if (((this.dragging = null), this.index === this.prevIndex))
            (this.percent = 1 - this.percent),
              (this.dir *= -1),
              this._show(!1, this.index, !0),
              (this._transitioner = null);
          else {
            const t = (Ve ? this.dir * (Ve ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
            (this.index = t ? this.index : this.prevIndex),
              t && (this.percent = 1 - this.percent),
              this.show((this.dir > 0 && !t) || (this.dir < 0 && t) ? "next" : "previous", !0);
          }
        Rt(this.list, { userSelect: "", pointerEvents: "" }), (this.drag = this.percent = null);
      },
      _getDistance(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
      },
    },
  };
  var xr = {
    mixins: [
      {
        props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean },
        data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
        connected() {
          K(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
        },
        disconnected() {
          this.stopAutoplay();
        },
        update() {
          K(this.slides, "tabindex", "-1");
        },
        events: [
          {
            name: "visibilitychange",
            el: () => document,
            filter() {
              return this.autoplay;
            },
            handler() {
              document.hidden ? this.stopAutoplay() : this.startAutoplay();
            },
          },
        ],
        methods: {
          startAutoplay() {
            this.stopAutoplay(),
              (this.interval = setInterval(() => {
                this.stack.length ||
                  (this.draggable && dt(this.$el, ":focus-within")) ||
                  (this.pauseOnHover && dt(this.$el, ":hover")) ||
                  this.show("next");
              }, this.autoplayInterval));
          },
          stopAutoplay() {
            clearInterval(this.interval);
          },
        },
      },
      $r,
      mr,
      Ls,
    ],
    props: { clsActivated: Boolean, easing: String, index: Number, finite: Boolean, velocity: Number },
    data: () => ({
      easing: "ease",
      finite: !1,
      velocity: 1,
      index: 0,
      prevIndex: -1,
      stack: [],
      percent: 0,
      clsActive: "bdt-active",
      clsActivated: !1,
      Transitioner: !1,
      transitionOptions: {},
    }),
    connected() {
      (this.prevIndex = -1), (this.index = this.getValidIndex(this.$props.index)), (this.stack = []);
    },
    disconnected() {
      Xt(this.slides, this.clsActive);
    },
    computed: {
      duration: ({ velocity: t }, e) => yr(e.offsetWidth / t),
      list: ({ selList: t }, e) => Se(t, e),
      maxIndex() {
        return this.length - 1;
      },
      slides() {
        return mt(this.list);
      },
      length() {
        return this.slides.length;
      },
    },
    watch: {
      slides(t, e) {
        e && this.$emit();
      },
    },
    observe: Qn(),
    methods: {
      show(t, e = !1) {
        var i;
        if (this.dragging || !this.length) return;
        const { stack: n } = this,
          s = e ? 0 : n.length,
          o = () => {
            n.splice(s, 1), n.length && this.show(n.shift(), !0);
          };
        if ((n[e ? "unshift" : "push"](t), !e && n.length > 1))
          return void (2 === n.length && (null == (i = this._transitioner) || i.forward(Math.min(this.duration, 200))));
        const r = this.getIndex(this.index),
          a = Zt(this.slides, this.clsActive) && this.slides[r],
          l = this.getIndex(t, this.index),
          h = this.slides[l];
        if (a === h) return void o();
        if (
          ((this.dir = (function (t, e) {
            return "next" === t ? 1 : "previous" === t || t < e ? -1 : 1;
          })(t, r)),
          (this.prevIndex = r),
          (this.index = l),
          (a && !Nt(a, "beforeitemhide", [this])) || !Nt(h, "beforeitemshow", [this, a]))
        )
          return (this.index = this.prevIndex), void o();
        const c = this._show(a, h, e).then(() => {
          a && Nt(a, "itemhidden", [this]),
            Nt(h, "itemshown", [this]),
            n.shift(),
            (this._transitioner = null),
            requestAnimationFrame(() => n.length && this.show(n.shift(), !0));
        });
        return a && Nt(a, "itemhide", [this]), Nt(h, "itemshow", [this]), c;
      },
      getIndex(t = this.index, e = this.index) {
        return W(G(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
      },
      getValidIndex(t = this.index, e = this.prevIndex) {
        return this.getIndex(t, e);
      },
      _show(t, e, i) {
        if (
          ((this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: i
              ? e.offsetWidth < 600
                ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "cubic-bezier(0.165, 0.84, 0.44, 1)"
              : this.easing,
            ...this.transitionOptions,
          })),
          !i && !t)
        )
          return this._translate(1), Promise.resolve();
        const { length: n } = this.stack;
        return this._transitioner[n > 1 ? "forward" : "show"](
          n > 1 ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration,
          this.percent,
        );
      },
      _translate(t, e = this.prevIndex, i = this.index) {
        const n = this._getTransitioner(e !== i && e, i);
        return n.translate(t), n;
      },
      _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, n = this.transitionOptions) {
        return new this.Transitioner(k(t) ? this.slides[t] : t, k(e) ? this.slides[e] : e, i * (Ve ? -1 : 1), n);
      },
    },
  };
  function yr(t) {
    return 0.5 * t + 300;
  }
  var Sr = {
      mixins: [xr],
      props: { animation: String },
      data: {
        animation: "slide",
        clsActivated: "bdt-transition-active",
        Animations: hr,
        Transitioner: function (t, e, i, { animation: n, easing: s }) {
          const { percent: o, translate: r, show: a = V } = n,
            l = a(i);
          let h;
          return {
            dir: i,
            show(n, o = 0, r) {
              const a = r ? "linear" : s;
              return (
                (n -= Math.round(n * W(o, -1, 1))),
                this.translate(o),
                pr(e, "itemin", { percent: o, duration: n, timing: a, dir: i }),
                pr(t, "itemout", { percent: 1 - o, duration: n, timing: a, dir: i }),
                new Promise((i) => {
                  h || (h = i),
                    Promise.all([ee.start(e, l[1], n, a), ee.start(t, l[0], n, a)]).then(() => {
                      this.reset(), h();
                    }, V);
                })
              );
            },
            cancel: () => ee.cancel([e, t]),
            reset() {
              for (const i in l[0]) Rt([e, t], i, "");
            },
            async forward(t, e = this.percent()) {
              return await this.cancel(), this.show(t, e, !0);
            },
            translate(n) {
              this.reset();
              const s = r(n, i);
              Rt(e, s[1]),
                Rt(t, s[0]),
                pr(e, "itemtranslatein", { percent: n, dir: i }),
                pr(t, "itemtranslateout", { percent: 1 - n, dir: i });
            },
            percent: () => o(t || e, e, i),
            getDistance: () => (null == t ? void 0 : t.offsetWidth),
          };
        },
      },
      computed: {
        animation: ({ animation: t, Animations: e }) => ({ ...(e[t] || e.slide), name: t }),
        transitionOptions() {
          return { animation: this.animation };
        },
      },
      events: {
        beforeitemshow({ target: t }) {
          Yt(t, this.clsActive);
        },
        itemshown({ target: t }) {
          Yt(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          Xt(t, this.clsActive, this.clsActivated);
        },
      },
    },
    Ir = {
      mixins: [fo, Sr],
      functional: !0,
      props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String },
      data: () => ({
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "bdt-open",
        clsPage: "bdt-lightbox-page",
        selList: ".bdt-lightbox-items",
        attrItem: "bdt-lightbox-item",
        selClose: ".bdt-close-large",
        selCaption: ".bdt-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: fr,
        template:
          '<div class="bdt-lightbox bdt-overflow-hidden"> <ul class="bdt-lightbox-items"></ul> <div class="bdt-lightbox-toolbar bdt-position-top bdt-text-right bdt-transition-slide-top bdt-transition-opaque"> <button class="bdt-lightbox-toolbar-icon bdt-close-large" type="button" bdt-close></button> </div> <a class="bdt-lightbox-button bdt-position-center-left bdt-position-medium bdt-transition-fade" href bdt-slidenav-previous bdt-lightbox-item="previous"></a> <a class="bdt-lightbox-button bdt-position-center-right bdt-position-medium bdt-transition-fade" href bdt-slidenav-next bdt-lightbox-item="next"></a> <div class="bdt-lightbox-toolbar bdt-lightbox-caption bdt-position-bottom bdt-text-center bdt-transition-slide-bottom bdt-transition-opaque"></div> </div>',
      }),
      created() {
        const t = Se(this.template),
          e = Se(this.selList, t);
        this.items.forEach(() => ce(e, "<li>"));
        const i = Se("[bdt-close]", t),
          n = this.t("close");
        i && n && (i.dataset.i18n = JSON.stringify({ label: n })), this.$mount(ce(this.container, t));
      },
      computed: { caption: ({ selCaption: t }, e) => Se(t, e) },
      events: [
        { name: `${Xe} ${Ye} keydown`, handler: "showControls" },
        {
          name: "click",
          self: !0,
          delegate() {
            return `${this.selList} > *`;
          },
          handler(t) {
            t.defaultPrevented || this.hide();
          },
        },
        {
          name: "shown",
          self: !0,
          handler() {
            this.showControls();
          },
        },
        {
          name: "hide",
          self: !0,
          handler() {
            this.hideControls(), Xt(this.slides, this.clsActive), ee.stop(this.slides);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.$destroy(!0);
          },
        },
        {
          name: "keyup",
          el: () => document,
          handler({ keyCode: t }) {
            if (!this.isToggled(this.$el) || !this.draggable) return;
            let e = -1;
            t === Jn ? (e = "previous") : t === Zn ? (e = "next") : t === Xn ? (e = 0) : t === Yn && (e = "last"),
              ~e && this.show(e);
          },
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() ||
              ((this.draggable = !1),
              t.preventDefault(),
              this.toggleElement(this.$el, !0, !1),
              (this.animation = fr.scale),
              Xt(t.target, this.clsActive),
              this.stack.splice(1, 0, this.index));
          },
        },
        {
          name: "itemshow",
          handler() {
            le(this.caption, this.getItem().caption || "");
            for (let t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t);
          },
        },
        {
          name: "itemshown",
          handler() {
            this.draggable = this.$props.draggable;
          },
        },
        {
          name: "itemload",
          async handler(t, e) {
            const { source: i, type: n, alt: s = "", poster: o, attrs: r = {} } = e;
            if ((this.setItem(e, "<span bdt-spinner></span>"), !i)) return;
            let a;
            const l = {
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "bdt-responsive": "",
              "bdt-video": `${this.videoAutoplay}`,
            };
            if ("image" === n || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
              const t = kr("img", { src: i, alt: s, ...r });
              Dt(t, "load", () => this.setItem(e, t)), Dt(t, "error", () => this.setError(e));
            } else if ("video" === n || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const t = kr("video", {
                src: i,
                poster: o,
                controls: "",
                playsinline: "",
                "bdt-video": `${this.videoAutoplay}`,
                ...r,
              });
              Dt(t, "loadedmetadata", () => this.setItem(e, t)), Dt(t, "error", () => this.setError(e));
            } else if ("iframe" === n || i.match(/\.(html|php)($|\?)/i))
              this.setItem(e, kr("iframe", { src: i, allowfullscreen: "", class: "bdt-lightbox-iframe", ...r }));
            else if (
              (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
            )
              this.setItem(
                e,
                kr("iframe", {
                  src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                  width: 1920,
                  height: 1080,
                  ...l,
                  ...r,
                }),
              );
            else if ((a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)))
              try {
                const { height: t, width: n } = await (
                  await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                    credentials: "omit",
                  })
                ).json();
                this.setItem(
                  e,
                  kr("iframe", {
                    src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                    width: n,
                    height: t,
                    ...l,
                    ...r,
                  }),
                );
              } catch {
                this.setError(e);
              }
          },
        },
      ],
      methods: {
        loadItem(t = this.index) {
          const e = this.getItem(t);
          this.getSlide(e).childElementCount || Nt(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[G(t, this.slides)];
        },
        setItem(t, e) {
          Nt(this.$el, "itemloaded", [this, le(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span bdt-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer),
            (this.controlsTimer = setTimeout(this.hideControls, this.delayControls)),
            Yt(this.$el, "bdt-active", "bdt-transition-active");
        },
        hideControls() {
          Xt(this.$el, "bdt-active", "bdt-transition-active");
        },
      },
    };
  function kr(t, e) {
    const i = $e(`<${t}>`);
    return K(i, e), i;
  }
  var Cr = {
    install: function (t, e) {
      t.lightboxPanel || t.component("lightboxPanel", Ir), p(e.props, t.component("lightboxPanel").options.props);
    },
    props: { toggle: String },
    data: { toggle: "a" },
    computed: { toggles: ({ toggle: t }, e) => Ie(t, e) },
    watch: {
      toggles(t) {
        this.hide();
        for (const e of t) re(e, "a") && K(e, "role", "button");
      },
    },
    disconnected() {
      this.hide();
    },
    events: {
      name: "click",
      delegate() {
        return `${this.toggle}:not(.bdt-disabled)`;
      },
      handler(t) {
        t.preventDefault(), this.show(t.current);
      },
    },
    methods: {
      show(t) {
        const e = L(this.toggles.map(Tr), "source");
        if (x(t)) {
          const { source: i } = Tr(t);
          t = d(e, ({ source: t }) => i === t);
        }
        return (
          (this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e })),
          Dt(this.panel.$el, "hidden", () => (this.panel = null)),
          this.panel.show(t)
        );
      },
      hide() {
        var t;
        return null == (t = this.panel) ? void 0 : t.hide();
      },
    },
  };
  function Tr(t) {
    const e = {};
    for (const i of ["href", "caption", "type", "poster", "alt", "attrs"]) e["href" === i ? "source" : i] = et(t, i);
    return (e.attrs = un(e.attrs)), e;
  }
  var Er = {
    mixins: [ms],
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "bdt-notification",
      clsClose: "bdt-notification-close",
      clsMsg: "bdt-notification-message",
    },
    install: function (t) {
      t.notification.closeAll = function (e, i) {
        ye(document.body, (n) => {
          const s = t.getComponent(n, "notification");
          s && (!e || e === s.group) && s.close(i);
        });
      };
    },
    computed: {
      marginProp: ({ pos: t }) => "margin" + (l(t, "top") ? "Top" : "Bottom"),
      startProps() {
        return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
      },
    },
    created() {
      const t = `${this.clsContainer}-${this.pos}`;
      let e = Se(`.${t}`, this.container);
      (!e || !st(e)) && (e = ce(this.container, `<div class="${this.clsContainer} ${t}"></div>`)),
        this.$mount(
          ce(
            e,
            `<div class="${this.clsMsg}${
              this.status ? ` ${this.clsMsg}-${this.status}` : ""
            }" role="alert"> <a href class="${this.clsClose}" data-bdt-close></a> <div>${this.message}</div> </div>`,
          ),
        );
    },
    async connected() {
      const t = _(Rt(this.$el, this.marginProp));
      await ee.start(Rt(this.$el, this.startProps), { opacity: 1, [this.marginProp]: t }),
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    },
    events: {
      click(t) {
        ut(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      },
      [Ge]() {
        this.timer && clearTimeout(this.timer);
      },
      [Ze]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      },
    },
    methods: {
      async close(t) {
        this.timer && clearTimeout(this.timer),
          t || (await ee.start(this.$el, this.startProps)),
          ((t) => {
            const e = ht(t);
            Nt(t, "close", [this]), pe(t), (null != e && e.hasChildNodes()) || pe(e);
          })(this.$el);
      },
    },
  };
  const Ar = {
      x: Pr,
      y: Pr,
      rotate: Pr,
      scale: Pr,
      color: Dr,
      backgroundColor: Dr,
      borderColor: Dr,
      blur: Mr,
      hue: Mr,
      fopacity: Mr,
      grayscale: Mr,
      invert: Mr,
      saturate: Mr,
      sepia: Mr,
      opacity: function (t, e, i) {
        return (
          1 === i.length && i.unshift(Rr(e, t, "")),
          (i = jr(i)),
          (e, n) => {
            e[t] = qr(i, n);
          }
        );
      },
      stroke: function (t, e, i) {
        1 === i.length && i.unshift(0);
        const n = Vr(i),
          s = Oo(e);
        return (i = jr(i.reverse(), (t) => ((t = _(t)), "%" === n ? (t * s) / 100 : t))).some(([t]) => t)
          ? (Rt(e, "strokeDasharray", s),
            (t, e) => {
              t.strokeDashoffset = qr(i, e);
            })
          : V;
      },
      bgx: Or,
      bgy: Or,
    },
    { keys: Br } = Object;
  var _r = {
    mixins: [ho],
    props: Ur(Br(Ar), "list"),
    data: Ur(Br(Ar), void 0),
    computed: {
      props(t, e) {
        const i = {};
        for (const e in t) e in Ar && !E(t[e]) && (i[e] = t[e].slice());
        const n = {};
        for (const t in i) n[t] = Ar[t](t, e, i[t], i);
        return n;
      },
    },
    events: {
      load() {
        this.$emit();
      },
    },
    methods: {
      reset() {
        for (const t in this.getCss(0)) Rt(this.$el, t, "");
      },
      getCss(t) {
        const e = { transform: "", filter: "" };
        for (const i in this.props) this.props[i](e, W(t));
        return (
          (e.willChange = Object.keys(e)
            .filter((t) => "" !== e[t])
            .map(Ut)
            .join(",")),
          e
        );
      },
    },
  };
  function Pr(t, e, i) {
    let n,
      s = Vr(i) || { x: "px", y: "px", rotate: "deg" }[t] || "";
    return (
      "x" === t || "y" === t
        ? ((t = `translate${a(t)}`), (n = (t) => _(_(t).toFixed("px" === s ? 0 : 6))))
        : "scale" === t && ((s = ""), (n = (t) => (Vr([t]) ? Ne(t, "width", e, !0) / e.offsetWidth : t))),
      1 === i.length && i.unshift("scale" === t ? 1 : 0),
      (i = jr(i, n)),
      (e, n) => {
        e.transform += ` ${t}(${qr(i, n)}${s})`;
      }
    );
  }
  function Dr(t, e, i) {
    return (
      1 === i.length && i.unshift(Rr(e, t, "")),
      (i = jr(i, (t) =>
        (function (t, e) {
          return Rr(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(_);
        })(e, t),
      )),
      (e, n) => {
        const [s, o, r] = Lr(i, n),
          a = s.map((t, e) => ((t += r * (o[e] - t)), 3 === e ? _(t) : parseInt(t, 10))).join(",");
        e[t] = `rgba(${a})`;
      }
    );
  }
  function Mr(t, e, i) {
    1 === i.length && i.unshift(0);
    const n = Vr(i) || { blur: "px", hue: "deg" }[t] || "%";
    return (
      (t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t),
      (i = jr(i)),
      (e, s) => {
        const o = qr(i, s);
        e.filter += ` ${t}(${o + n})`;
      }
    );
  }
  function Or(t, e, i, n) {
    1 === i.length && i.unshift(0);
    const s = "bgy" === t ? "height" : "width";
    n[t] = jr(i, (t) => Ne(t, s, e));
    const o = ["bgx", "bgy"].filter((t) => t in n);
    if (2 === o.length && "bgx" === t) return V;
    if ("cover" === Rr(e, "backgroundSize", ""))
      return (function (t, e, i, n) {
        const s = (function (t) {
          const e = Rt(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
          if (Hr[e]) return Hr[e];
          const i = new Image();
          return e && ((i.src = e), !i.naturalWidth)
            ? ((i.onload = () => {
                (Hr[e] = Fr(i)), Nt(t, zt("load", !1));
              }),
              Fr(i))
            : (Hr[e] = Fr(i));
        })(e);
        if (!s.width) return V;
        const o = { width: e.offsetWidth, height: e.offsetHeight },
          r = ["bgx", "bgy"].filter((t) => t in n),
          a = {};
        for (const t of r) {
          const e = n[t].map(([t]) => t),
            i = Math.min(...e),
            s = Math.max(...e),
            r = e.indexOf(i) < e.indexOf(s),
            l = s - i;
          (a[t] = (r ? -l : 0) - (r ? i : s) + "px"), (o["bgy" === t ? "height" : "width"] += l);
        }
        const l = J.cover(s, o);
        for (const t of r) {
          const i = "bgy" === t ? "height" : "width",
            n = l[i] - o[i];
          a[t] = `max(${Nr(e, t)},-${n}px) + ${a[t]}`;
        }
        const h = zr(r, a, n);
        return (t, e) => {
          h(t, e), (t.backgroundSize = `${l.width}px ${l.height}px`), (t.backgroundRepeat = "no-repeat");
        };
      })(0, e, 0, n);
    const r = {};
    for (const t of o) r[t] = Nr(e, t);
    return zr(o, r, n);
  }
  function Nr(t, e) {
    return Rr(t, `background-position-${e.substr(-1)}`, "");
  }
  function zr(t, e, i) {
    return function (n, s) {
      for (const o of t) {
        const t = qr(i[o], s);
        n[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${t}px)`;
      }
    };
  }
  const Hr = {};
  function Fr(t) {
    return { width: t.naturalWidth, height: t.naturalHeight };
  }
  function jr(t, e = _) {
    const i = [],
      { length: n } = t;
    let s = 0;
    for (let o = 0; o < n; o++) {
      let [r, a] = I(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
      if (
        ((r = e(r)),
        (a = a ? _(a) / 100 : null),
        0 === o
          ? null === a
            ? (a = 0)
            : a && i.push([r, 0])
          : o === n - 1 && (null === a ? (a = 1) : 1 !== a && (i.push([r, a]), (a = 1))),
        i.push([r, a]),
        null === a)
      )
        s++;
      else if (s) {
        const t = i[o - s - 1][1],
          e = (a - t) / (s + 1);
        for (let n = s; n > 0; n--) i[o - n][1] = t + e * (s - n + 1);
        s = 0;
      }
    }
    return i;
  }
  function Lr(t, e) {
    const i = d(t.slice(1), ([, t]) => e <= t) + 1;
    return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
  }
  function qr(t, e) {
    const [i, n, s] = Lr(t, e);
    return k(i) ? i + Math.abs(i - n) * s * (i < n ? 1 : -1) : +n;
  }
  const Wr = /^-?\d+(\S+)?/;
  function Vr(t, e) {
    var i;
    for (const e of t) {
      const t = null == (i = e.match) ? void 0 : i.call(e, Wr);
      if (t) return t[1];
    }
    return e;
  }
  function Rr(t, e, i) {
    const n = t.style[e],
      s = Rt(Rt(t, e, i), e);
    return (t.style[e] = n), s;
  }
  function Ur(t, e) {
    return t.reduce((t, i) => ((t[i] = e), t), {});
  }
  var Yr = {
    mixins: [_r],
    props: { target: String, vieairort: Number, easing: Number, start: String, end: String },
    data: { target: !1, vieairort: 1, easing: 1, start: 0, end: 0 },
    computed: {
      target: ({ target: t }, e) => Xr((t && wt(t, e)) || e),
      start({ start: t }) {
        return Ne(t, "height", this.target, !0);
      },
      end({ end: t, vieairort: e }) {
        return Ne(t || ((e = 100 * (1 - e)) && `${e}vh+${e}%`), "height", this.target, !0);
      },
    },
    observe: [Qn({ target: ({ $el: t, target: e }) => [t, e, Ei(e, !0)] }), ss(), ns()],
    update: {
      read({ percent: t }, e) {
        if ((e.has("scroll") || (t = !1), !st(this.$el))) return !1;
        if (!this.matchMedia) return;
        const i = t;
        return (
          (t = (function (t, e) {
            return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
          })(Ci(this.target, this.start, this.end), this.easing)),
          { percent: t, style: i !== t && this.getCss(t) }
        );
      },
      write({ style: t }) {
        this.matchMedia ? t && Rt(this.$el, t) : this.reset();
      },
      events: ["scroll", "resize"],
    },
  };
  function Xr(t) {
    return t ? ("offsetTop" in t ? t : Xr(ht(t))) : document.documentElement;
  }
  var Jr = {
      update: {
        write() {
          if (this.stack.length || this.dragging) return;
          const t = this.getValidIndex(this.index);
          ~this.prevIndex && this.index === t ? this._translate(1, this.prevIndex, this.index) : this.show(t);
        },
        events: ["resize"],
      },
    },
    Gr = { observe: is({ target: ({ slides: t }) => t, targets: (t) => t.getAdjacentSlides() }) };
  function Zr(t, e, i) {
    const n = ta(t, e);
    return i
      ? n -
          (function (t, e) {
            return Te(e).width / 2 - Te(t).width / 2;
          })(t, e)
      : Math.min(n, Kr(e));
  }
  function Kr(t) {
    return Math.max(0, Qr(t) - Te(t).width);
  }
  function Qr(t) {
    return j(mt(t), (t) => Te(t).width);
  }
  function ta(t, e) {
    return (t && (Ae(t).left + (Ve ? Te(t).width - Te(e).width : 0)) * (Ve ? -1 : 1)) || 0;
  }
  function ea(t, e) {
    e -= 1;
    const i = Te(t).width,
      n = e + i + 2;
    return mt(t).filter((s) => {
      const o = ta(s, t),
        r = o + Math.min(Te(s).width, i);
      return o >= e && r <= n;
    });
  }
  function ia(t, e, i) {
    Nt(t, zt(e, !1, !1, i));
  }
  var na = {
    mixins: [Fn, xr, Jr, Gr],
    props: { center: Boolean, sets: Boolean },
    data: {
      center: !1,
      sets: !1,
      attrItem: "bdt-slider-item",
      selList: ".bdt-slider-items",
      selNav: ".bdt-slider-nav",
      clsContainer: "bdt-slider-container",
      Transitioner: function (t, e, i, { center: n, easing: s, list: o }) {
        const r = t ? Zr(t, o, n) : Zr(e, o, n) + Te(e).width * i,
          a = e ? Zr(e, o, n) : r + Te(t).width * i * (Ve ? -1 : 1);
        let l;
        return {
          dir: i,
          show(e, n = 0, r) {
            const h = r ? "linear" : s;
            return (
              (e -= Math.round(e * W(n, -1, 1))),
              this.translate(n),
              (n = t ? n : W(n, 0, 1)),
              ia(this.getItemIn(), "itemin", { percent: n, duration: e, timing: h, dir: i }),
              t && ia(this.getItemIn(!0), "itemout", { percent: 1 - n, duration: e, timing: h, dir: i }),
              new Promise((t) => {
                l || (l = t), ee.start(o, { transform: dr(-a * (Ve ? -1 : 1), "px") }, e, h).then(l, V);
              })
            );
          },
          cancel: () => ee.cancel(o),
          reset() {
            Rt(o, "transform", "");
          },
          async forward(t, e = this.percent()) {
            return await this.cancel(), this.show(t, e, !0);
          },
          translate(n) {
            const s = this.getDistance() * i * (Ve ? -1 : 1);
            Rt(o, "transform", dr(W(s - s * n - a, -Qr(o), Te(o).width) * (Ve ? -1 : 1), "px"));
            const r = this.getActives(),
              l = this.getItemIn(),
              h = this.getItemIn(!0);
            n = t ? W(n, -1, 1) : 0;
            for (const s of mt(o)) {
              const a = c(r, s),
                d = s === l,
                u = s === h;
              ia(
                s,
                "itemtranslate" +
                  (d || (!u && (a || (i * (Ve ? -1 : 1) == -1) ^ (ta(s, o) > ta(t || e)))) ? "in" : "out"),
                { dir: i, percent: u ? 1 - n : d ? n : a ? 1 : 0 },
              );
            }
          },
          percent: () => Math.abs((Rt(o, "transform").split(",")[4] * (Ve ? -1 : 1) + r) / (a - r)),
          getDistance: () => Math.abs(a - r),
          getItemIn(i = !1) {
            let s = this.getActives(),
              r = ea(o, Zr(e || t, o, n));
            if (i) {
              const t = s;
              (s = r), (r = t);
            }
            return r[d(r, (t) => !c(s, t))];
          },
          getActives: () => ea(o, Zr(t || e, o, n)),
        };
      },
    },
    computed: {
      avgWidth() {
        return Qr(this.list) / this.length;
      },
      finite({ finite: t }) {
        return (
          t ||
          (function (t, e) {
            if (!t || t.length < 2) return !0;
            const { width: i } = Te(t);
            if (!e)
              return (
                Math.ceil(Qr(t)) <
                Math.trunc(
                  i +
                    (function (t) {
                      return Math.max(0, ...mt(t).map((t) => Te(t).width));
                    })(t),
                )
              );
            const n = mt(t),
              s = Math.trunc(i / 2);
            for (const t in n) {
              const e = n[t],
                i = Te(e).width,
                o = new Set([e]);
              let r = 0;
              for (const e of [-1, 1]) {
                let a = i / 2,
                  l = 0;
                for (; a < s; ) {
                  const i = n[G(+t + e + l++ * e, n)];
                  if (o.has(i)) return !0;
                  (a += Te(i).width), o.add(i);
                }
                r = Math.max(r, i / 2 + Te(n[G(+t + e, n)]).width / 2 - (a - s));
              }
              if (
                r >
                j(
                  n.filter((t) => !o.has(t)),
                  (t) => Te(t).width,
                )
              )
                return !0;
            }
            return !1;
          })(this.list, this.center)
        );
      },
      maxIndex() {
        if (!this.finite || (this.center && !this.sets)) return this.length - 1;
        if (this.center) return z(this.sets);
        let t = 0;
        const e = Kr(this.list),
          i = d(this.slides, (i) => {
            if (t >= e) return !0;
            t += Te(i).width;
          });
        return ~i ? i : this.length - 1;
      },
      sets({ sets: t }) {
        if (!t) return;
        let e = 0;
        const i = [],
          n = Te(this.list).width;
        for (let t = 0; t < this.length; t++) {
          const s = Te(this.slides[t]).width;
          e + s > n && (e = 0),
            this.center
              ? e < n / 2 && e + s + Te(G(+t + 1, this.slides)).width / 2 > n / 2 && (i.push(+t), (e = n / 2 - s / 2))
              : 0 === e && i.push(Math.min(+t, this.maxIndex)),
            (e += s);
        }
        return i.length ? i : void 0;
      },
      transitionOptions() {
        return { center: this.center, list: this.list };
      },
      slides() {
        return mt(this.list).filter(st);
      },
    },
    connected() {
      Kt(this.$el, this.clsContainer, !Se(`.${this.clsContainer}`, this.$el));
    },
    observe: Qn({ target: ({ slides: t }) => t }),
    update: {
      write() {
        for (const t of this.navItems) {
          const e = B(et(t, this.attrItem));
          !1 !== e && (t.hidden = !this.maxIndex || e > this.maxIndex || (this.sets && !c(this.sets, e)));
        }
        this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)),
          this.updateActiveClasses();
      },
      events: ["resize"],
    },
    events: {
      beforeitemshow(t) {
        !this.dragging &&
          this.sets &&
          this.stack.length < 2 &&
          !c(this.sets, this.index) &&
          (this.index = this.getValidIndex());
        const e = Math.abs(
          this.index -
            this.prevIndex +
            ((this.dir > 0 && this.index < this.prevIndex) || (this.dir < 0 && this.index > this.prevIndex)
              ? (this.maxIndex + 1) * this.dir
              : 0),
        );
        if (!this.dragging && e > 1) {
          for (let t = 0; t < e; t++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          return void t.preventDefault();
        }
        const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
        (this.duration = yr(this.avgWidth / this.velocity) * (Te(this.slides[i]).width / this.avgWidth)),
          this.reorder();
      },
      itemshow() {
        ~this.prevIndex && Yt(this._getTransitioner().getItemIn(), this.clsActive);
      },
      itemshown() {
        this.updateActiveClasses();
      },
    },
    methods: {
      reorder() {
        if (this.finite) return void Rt(this.slides, "order", "");
        const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        if (
          (this.slides.forEach((e, i) =>
            Rt(e, "order", this.dir > 0 && i < t ? 1 : this.dir < 0 && i >= this.index ? -1 : ""),
          ),
          !this.center)
        )
          return;
        const e = this.slides[t];
        let i = Te(this.list).width / 2 - Te(e).width / 2,
          n = 0;
        for (; i > 0; ) {
          const e = this.getIndex(--n + t, t),
            s = this.slides[e];
          Rt(s, "order", e > t ? -2 : -1), (i -= Te(s).width);
        }
      },
      updateActiveClasses() {
        const t = this._getTransitioner(this.index).getActives(),
          e = [this.clsActive, ((!this.sets || c(this.sets, _(this.index))) && this.clsActivated) || ""];
        for (const n of this.slides) {
          const s = c(t, n);
          Kt(n, e, s), K(n, "aria-hidden", !s);
          for (const t of Ie(at, n))
            i(t, "_tabindex") || (t._tabindex = K(t, "tabindex")), K(t, "tabindex", s ? t._tabindex : -1);
        }
      },
      getValidIndex(t = this.index, e = this.prevIndex) {
        if (((t = this.getIndex(t, e)), !this.sets)) return t;
        let i;
        do {
          if (c(this.sets, t)) return t;
          (i = t), (t = this.getIndex(t + this.dir, e));
        } while (t !== i);
        return t;
      },
      getAdjacentSlides() {
        const { width: t } = Te(this.list),
          e = -t,
          i = 2 * t,
          n = Te(this.slides[this.index]).width,
          s = this.center ? t / 2 - n / 2 : 0,
          o = new Set();
        for (const t of [-1, 1]) {
          let r = s + (t > 0 ? n : 0),
            a = 0;
          do {
            const e = this.slides[this.getIndex(this.index + t + a++ * t)];
            (r += Te(e).width * t), o.add(e);
          } while (this.length > a && r > e && r < i);
        }
        return Array.from(o);
      },
    },
  };
  var sa = {
    mixins: [_r],
    data: { selItem: "!li" },
    beforeConnect() {
      this.item = wt(this.selItem, this.$el);
    },
    disconnected() {
      this.item = null;
    },
    events: [
      {
        name: "itemin itemout",
        self: !0,
        el() {
          return this.item;
        },
        handler({ type: t, detail: { percent: e, duration: i, timing: n, dir: s } }) {
          Qe.read(() => {
            if (!this.matchMedia) return;
            const o = this.getCss(ra(t, s, e)),
              r = this.getCss(oa(t) ? 0.5 : s > 0 ? 1 : 0);
            Qe.write(() => {
              Rt(this.$el, o), ee.start(this.$el, r, i, n).catch(V);
            });
          });
        },
      },
      {
        name: "transitioncanceled transitionend",
        self: !0,
        el() {
          return this.item;
        },
        handler() {
          ee.cancel(this.$el);
        },
      },
      {
        name: "itemtranslatein itemtranslateout",
        self: !0,
        el() {
          return this.item;
        },
        handler({ type: t, detail: { percent: e, dir: i } }) {
          Qe.read(() => {
            if (!this.matchMedia) return void this.reset();
            const n = this.getCss(ra(t, i, e));
            Qe.write(() => Rt(this.$el, n));
          });
        },
      },
    ],
  };
  function oa(t) {
    return h(t, "in");
  }
  function ra(t, e, i) {
    return (i /= 2), oa(t) ^ (e < 0) ? i : 1 - i;
  }
  var aa = {
      ...hr,
      fade: {
        show: () => [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }],
        percent: (t) => 1 - Rt(t, "opacity"),
        translate: (t) => [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }],
      },
      scale: {
        show: () => [{ opacity: 0, transform: ur(1.5), zIndex: 0 }, { zIndex: -1 }],
        percent: (t) => 1 - Rt(t, "opacity"),
        translate: (t) => [{ opacity: 1 - t, transform: ur(1 + 0.5 * t), zIndex: 0 }, { zIndex: -1 }],
      },
      pull: {
        show: (t) =>
          t < 0
            ? [
                { transform: dr(30), zIndex: -1 },
                { transform: dr(), zIndex: 0 },
              ]
            : [
                { transform: dr(-100), zIndex: 0 },
                { transform: dr(), zIndex: -1 },
              ],
        percent: (t, e, i) => (i < 0 ? 1 - cr(e) : cr(t)),
        translate: (t, e) =>
          e < 0
            ? [
                { transform: dr(30 * t), zIndex: -1 },
                { transform: dr(-100 * (1 - t)), zIndex: 0 },
              ]
            : [
                { transform: dr(100 * -t), zIndex: 0 },
                { transform: dr(30 * (1 - t)), zIndex: -1 },
              ],
      },
      push: {
        show: (t) =>
          t < 0
            ? [
                { transform: dr(100), zIndex: 0 },
                { transform: dr(), zIndex: -1 },
              ]
            : [
                { transform: dr(-30), zIndex: -1 },
                { transform: dr(), zIndex: 0 },
              ],
        percent: (t, e, i) => (i > 0 ? 1 - cr(e) : cr(t)),
        translate: (t, e) =>
          e < 0
            ? [
                { transform: dr(100 * t), zIndex: 0 },
                { transform: dr(-30 * (1 - t)), zIndex: -1 },
              ]
            : [
                { transform: dr(-30 * t), zIndex: -1 },
                { transform: dr(100 * (1 - t)), zIndex: 0 },
              ],
      },
    },
    la = {
      mixins: [Fn, Sr, Jr, Gr],
      props: { ratio: String, minHeight: Number, maxHeight: Number },
      data: {
        ratio: "16:9",
        minHeight: !1,
        maxHeight: !1,
        selList: ".bdt-slideshow-items",
        attrItem: "bdt-slideshow-item",
        selNav: ".bdt-slideshow-nav",
        Animations: aa,
      },
      update: {
        read() {
          if (!this.list) return !1;
          let [t, e] = this.ratio.split(":").map(Number);
          return (
            (e = (e * this.list.offsetWidth) / t || 0),
            this.minHeight && (e = Math.max(this.minHeight, e)),
            this.maxHeight && (e = Math.min(this.maxHeight, e)),
            { height: e - Me(this.list, "height", "content-box") }
          );
        },
        write({ height: t }) {
          t > 0 && Rt(this.list, "minHeight", t);
        },
        events: ["resize"],
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        },
      },
    },
    ha = {
      mixins: [Fn, nr],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String,
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "bdt-sortable-item",
        clsPlaceholder: "bdt-sortable-placeholder",
        clsDrag: "bdt-sortable-drag",
        clsDragState: "bdt-drag",
        clsBase: "bdt-sortable",
        clsNoDrag: "bdt-sortable-nodrag",
        clsEmpty: "bdt-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {},
      },
      created() {
        for (const t of ["init", "start", "move", "end"]) {
          const e = this[t];
          this[t] = (t) => {
            p(this.pos, Wt(t)), e(t);
          };
        }
      },
      events: { name: Ye, passive: !1, handler: "init" },
      computed: {
        target() {
          return (this.$el.tBodies || [this.$el])[0];
        },
        items() {
          return mt(this.target);
        },
        isEmpty() {
          return T(this.items);
        },
        handles({ handle: t }, e) {
          return t ? Ie(t, e) : this.items;
        },
      },
      watch: {
        isEmpty(t) {
          Kt(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          Rt(e, { touchAction: "", userSelect: "" }), Rt(t, { touchAction: Re ? "none" : "", userSelect: "none" });
        },
      },
      update: {
        write(t) {
          if (!this.drag || !ht(this.placeholder)) return;
          const {
            pos: { x: e, y: i },
            origin: { offsetTop: n, offsetLeft: s },
            placeholder: o,
          } = this;
          Rt(this.drag, { top: i - n, left: e - s });
          const r = this.getSortable(document.elementFromPoint(e, i));
          if (!r) return;
          const { items: a } = r;
          if (a.some(ee.inProgress)) return;
          const l = (function (t, e) {
            return t[d(t, (t) => U(e, t.getBoundingClientRect()))];
          })(a, { x: e, y: i });
          if (a.length && (!l || l === o)) return;
          const h = this.getSortable(o),
            c = (function (t, e, i, n, s, o) {
              if (!mt(t).length) return;
              const r = e.getBoundingClientRect();
              if (!o)
                return (function (t, e) {
                  const i = 1 === mt(t).length;
                  i && ce(t, e);
                  const n = mt(t),
                    s = n.some((t, e) => {
                      const i = t.getBoundingClientRect();
                      return n.slice(e + 1).some((t) => {
                        const e = t.getBoundingClientRect();
                        return !da([i.left, i.right], [e.left, e.right]);
                      });
                    });
                  return i && pe(e), s;
                })(t, i) || s < r.top + r.height / 2
                  ? e
                  : e.nextElementSibling;
              const a = i.getBoundingClientRect(),
                l = da([r.top, r.bottom], [a.top, a.bottom]),
                [h, c, d, u] = l ? [n, "width", "left", "right"] : [s, "height", "top", "bottom"],
                f = a[c] < r[c] ? r[c] - a[c] : 0;
              return a[d] < r[d] ? !(f && h < r[d] + f) && e.nextElementSibling : !(f && h > r[u] - f) && e;
            })(r.target, l, o, e, i, r === h && t.moved !== l);
          !1 !== c &&
            ((c && o === c) ||
              (r !== h ? (h.remove(o), (t.moved = l)) : delete t.moved, r.insert(o, c), this.touched.add(r)));
        },
        events: ["move"],
      },
      methods: {
        init(t) {
          const { target: e, button: i, defaultPrevented: n } = t,
            [s] = this.items.filter((t) => ft(e, t));
          !s ||
            n ||
            i > 0 ||
            rt(e) ||
            ft(e, `.${this.clsNoDrag}`) ||
            (this.handle && !ft(e, this.handle)) ||
            (t.preventDefault(),
            (this.touched = new Set([this])),
            (this.placeholder = s),
            (this.origin = { target: e, index: gt(s), ...this.pos }),
            Dt(document, Xe, this.move),
            Dt(document, Je, this.end),
            this.threshold || this.start(t));
        },
        start(t) {
          this.drag = (function (t, e) {
            let i;
            if (re(e, "li", "tr")) {
              (i = Se("<div>")), ce(i, e.cloneNode(!0).children);
              for (const t of e.getAttributeNames()) K(i, t, e.getAttribute(t));
            } else i = e.cloneNode(!0);
            return (
              ce(t, i),
              Rt(i, "margin", "0", "important"),
              Rt(i, {
                boxSizing: "border-box",
                width: e.offsetWidth,
                height: e.offsetHeight,
                padding: Rt(e, "padding"),
              }),
              _e(i.firstElementChild, _e(e.firstElementChild)),
              i
            );
          })(this.$container, this.placeholder);
          const { left: e, top: i } = this.placeholder.getBoundingClientRect();
          p(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }),
            Yt(this.drag, this.clsDrag, this.clsCustom),
            Yt(this.placeholder, this.clsPlaceholder),
            Yt(this.items, this.clsItem),
            Yt(document.documentElement, this.clsDragState),
            Nt(this.$el, "start", [this, this.placeholder]),
            (function (t) {
              let e = Date.now();
              ca = setInterval(() => {
                let { x: i, y: n } = t;
                n += document.scrollingElement.scrollTop;
                const s = 0.3 * (Date.now() - e);
                (e = Date.now()),
                  Ti(document.elementFromPoint(i, t.y))
                    .reverse()
                    .some((t) => {
                      let { scrollTop: e, scrollHeight: i } = t;
                      const { top: o, bottom: r, height: a } = Bi(t);
                      if (o < n && o + 35 > n) e -= s;
                      else {
                        if (!(r > n && r - 35 < n)) return;
                        e += s;
                      }
                      if (e > 0 && e < i - a) return (t.scrollTop = e), !0;
                    });
              }, 15);
            })(this.pos),
            this.move(t);
        },
        move(t) {
          this.drag
            ? this.$emit("move")
            : (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
              this.start(t);
        },
        end() {
          if ((Mt(document, Xe, this.move), Mt(document, Je, this.end), !this.drag)) return;
          clearInterval(ca);
          const t = this.getSortable(this.placeholder);
          this === t
            ? this.origin.index !== gt(this.placeholder) && Nt(this.$el, "moved", [this, this.placeholder])
            : (Nt(t.$el, "added", [t, this.placeholder]), Nt(this.$el, "removed", [this, this.placeholder])),
            Nt(this.$el, "stop", [this, this.placeholder]),
            pe(this.drag),
            (this.drag = null);
          for (const { clsPlaceholder: t, clsItem: e } of this.touched) for (const i of this.touched) Xt(i.items, t, e);
          (this.touched = null), Xt(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          Yt(this.items, this.clsItem);
          this.animate(() => (e ? de(e, t) : ce(this.target, t)));
        },
        remove(t) {
          ft(t, this.target) && this.animate(() => pe(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || (!1 !== this.group && e.group === this.group))) return e;
          } while ((t = ht(t)));
        },
      },
    };
  let ca;
  function da(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }
  var ua = {
    mixins: [ms, jn, ps],
    args: "title",
    props: { delay: Number, title: String },
    data: { pos: "top", title: "", delay: 0, animation: ["bdt-animation-scale-up"], duration: 100, cls: "bdt-active" },
    beforeConnect() {
      (this.id = _n(this, {})),
        (this._hasTitle = Q(this.$el, "title")),
        K(this.$el, { title: "", "aria-describedby": this.id }),
        (function (t) {
          lt(t) || K(t, "tabindex", "0");
        })(this.$el);
    },
    disconnected() {
      this.hide(), K(this.$el, "title") || K(this.$el, "title", this._hasTitle ? this.title : null);
    },
    methods: {
      show() {
        this.isToggled(this.tooltip || null) ||
          !this.title ||
          (clearTimeout(this.showTimer), (this.showTimer = setTimeout(this._show, this.delay)));
      },
      async hide() {
        dt(this.$el, "input:focus") ||
          (clearTimeout(this.showTimer),
          this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1)),
          pe(this.tooltip),
          (this.tooltip = null));
      },
      async _show() {
        (this.tooltip = ce(
          this.container,
          `<div id="${this.id}" class="bdt-${this.$options.name}" role="tooltip"> <div class="bdt-${this.$options.name}-inner">${this.title}</div> </div>`,
        )),
          Dt(this.tooltip, "toggled", (t, e) => {
            if (!e) return;
            const i = () => this.positionAt(this.tooltip, this.$el);
            i();
            const [n, s] = (function (t, e, [i, n]) {
              const s = Ee(t),
                o = Ee(e),
                r = [
                  ["left", "right"],
                  ["top", "bottom"],
                ];
              for (const t of r) {
                if (s[t[0]] >= o[t[1]]) {
                  i = t[1];
                  break;
                }
                if (s[t[1]] <= o[t[0]]) {
                  i = t[0];
                  break;
                }
              }
              const a = c(r[0], i) ? r[1] : r[0];
              return (n = s[a[0]] === o[a[0]] ? a[0] : s[a[1]] === o[a[1]] ? a[1] : "center"), [i, n];
            })(this.tooltip, this.$el, this.pos);
            this.origin = "y" === this.axis ? `${Oe(n)}-${s}` : `${s}-${Oe(n)}`;
            const o = [
              Ot(
                document,
                `keydown ${Ye}`,
                this.hide,
                !1,
                (t) => (t.type === Ye && !ft(t.target, this.$el)) || ("keydown" === t.type && t.keyCode === Rn),
              ),
              Dt([document, ...Ai(this.$el)], "scroll", i, { passive: !0 }),
            ];
            Ot(this.tooltip, "hide", () => o.forEach((t) => t()), { self: !0 });
          }),
          (await this.toggleElement(this.tooltip, !0)) || this.hide();
      },
    },
    events: {
      focus: "show",
      blur: "hide",
      [`${Ge} ${Ze}`](t) {
        qt(t) || this[t.type === Ge ? "show" : "hide"]();
      },
      [Ye](t) {
        qt(t) && this.show();
      },
    },
  };
  var fa = {
    mixins: [Ls],
    i18n: {
      invalidMime: "Invalid File Type: %s",
      invalidName: "Invalid File Name: %s",
      invalidSize: "Invalid File Size: %s Kilobytes Max",
    },
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String,
    },
    data: {
      allow: !1,
      clsDragover: "bdt-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: V,
      beforeAll: V,
      beforeSend: V,
      complete: V,
      completeAll: V,
      error: V,
      fail: V,
      load: V,
      loadEnd: V,
      loadStart: V,
      progress: V,
    },
    events: {
      change(t) {
        dt(t.target, 'input[type="file"]') &&
          (t.preventDefault(), t.target.files && this.upload(t.target.files), (t.target.value = ""));
      },
      drop(t) {
        ma(t);
        const e = t.dataTransfer;
        null != e && e.files && (Xt(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter(t) {
        ma(t);
      },
      dragover(t) {
        ma(t), Yt(this.$el, this.clsDragover);
      },
      dragleave(t) {
        ma(t), Xt(this.$el, this.clsDragover);
      },
    },
    methods: {
      async upload(t) {
        if (!(t = f(t)).length) return;
        Nt(this.$el, "upload", [t]);
        for (const e of t) {
          if (this.maxSize && 1e3 * this.maxSize < e.size) return void this.fail(this.t("invalidSize", this.maxSize));
          if (this.allow && !pa(this.allow, e.name)) return void this.fail(this.t("invalidName", this.allow));
          if (this.mime && !pa(this.mime, e.type)) return void this.fail(this.t("invalidMime", this.mime));
        }
        this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
        const e = (function (t, e) {
            const i = [];
            for (let n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
            return i;
          })(t, this.concurrent),
          i = async (t) => {
            const n = new FormData();
            t.forEach((t) => n.append(this.name, t));
            for (const t in this.params) n.append(t, this.params[t]);
            try {
              const t = await (function (t, e) {
                const i = {
                  data: null,
                  method: "GET",
                  headers: {},
                  xhr: new XMLHttpRequest(),
                  beforeSend: V,
                  responseType: "",
                  ...e,
                };
                return Promise.resolve()
                  .then(() => i.beforeSend(i))
                  .then(() =>
                    (function (t, e) {
                      return new Promise((i, n) => {
                        const { xhr: s } = e;
                        for (const t in e)
                          if (t in s)
                            try {
                              s[t] = e[t];
                            } catch {}
                        s.open(e.method.toUpperCase(), t);
                        for (const t in e.headers) s.setRequestHeader(t, e.headers[t]);
                        Dt(s, "load", () => {
                          0 === s.status || (s.status >= 200 && s.status < 300) || 304 === s.status
                            ? i(s)
                            : n(p(Error(s.statusText), { xhr: s, status: s.status }));
                        }),
                          Dt(s, "error", () => n(p(Error("Network Error"), { xhr: s }))),
                          Dt(s, "timeout", () => n(p(Error("Network Timeout"), { xhr: s }))),
                          s.send(e.data);
                      });
                    })(t, i),
                  );
              })(this.url, {
                data: n,
                method: this.method,
                responseType: this.type,
                beforeSend: (t) => {
                  const { xhr: e } = t;
                  Dt(e.upload, "progress", this.progress);
                  for (const t of ["loadStart", "load", "loadEnd", "abort"]) Dt(e, t.toLowerCase(), this[t]);
                  return this.beforeSend(t);
                },
              });
              this.complete(t), e.length ? await i(e.shift()) : this.completeAll(t);
            } catch (t) {
              this.error(t);
            }
          };
        await i(e.shift());
      },
    },
  };
  function pa(t, e) {
    return e.match(
      new RegExp(
        `^${t
          .replace(/\//g, "\\/")
          .replace(/\*\*/g, "(\\/[^\\/]+)*")
          .replace(/\*/g, "[^\\/]+")
          .replace(/((?!\\))\?/g, "$1.")}$`,
        "i",
      ),
    );
  }
  function ma(t) {
    t.preventDefault(), t.stopPropagation();
  }
  return (
    H(
      Object.freeze({
        __proto__: null,
        Countdown: Uo,
        Filter: sr,
        Lightbox: Cr,
        LightboxPanel: Ir,
        Notification: Er,
        Parallax: Yr,
        Slider: na,
        SliderParallax: sa,
        Slideshow: la,
        Slideshoairarallax: sa,
        Sortable: ha,
        Tooltip: ua,
        Upload: fa,
      }),
      (t, e) => xn.component(e, t),
    ),
    xn
  );
});
