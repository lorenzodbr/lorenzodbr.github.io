function cl(e) {
    window.console && console.log(e);
}
!(function () {
    "use strict";
    var y, e, b, x, w, t, n;
    "undefined" != typeof window &&
        window.addEventListener &&
        ((y = Object.create(null)),
        (b = function () {
            clearTimeout(e), (e = setTimeout(t, 100));
        }),
        (x = function () {}),
        (w = "http://www.w3.org/1999/xlink"),
        (t = function () {
            var e,
                t,
                n,
                o,
                i,
                r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                p = 0;
            function h() {
                var e;
                0 === --p &&
                    (x(),
                    window.addEventListener("resize", b, !1),
                    window.addEventListener("orientationchange", b, !1),
                    (x = window.MutationObserver
                        ? ((e = new MutationObserver(b)).observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }),
                          function () {
                              try {
                                  e.disconnect(), window.removeEventListener("resize", b, !1), window.removeEventListener("orientationchange", b, !1);
                              } catch (e) {}
                          })
                        : (document.documentElement.addEventListener("DOMSubtreeModified", b, !1),
                          function () {
                              document.documentElement.removeEventListener("DOMSubtreeModified", b, !1), window.removeEventListener("resize", b, !1), window.removeEventListener("orientationchange", b, !1);
                          })));
            }
            function g(e) {
                return function () {
                    !0 !== y[e.base] && (e.useEl.setAttributeNS(w, "xlink:href", "#" + e.hash), e.useEl.hasAttribute("href") && e.useEl.setAttribute("href", "#" + e.hash));
                };
            }
            function m(e) {
                return function () {
                    (e.onerror = null), (e.ontimeout = null), h();
                };
            }
            for (x(), s = document.getElementsByTagName("use"), i = 0; i < s.length; i += 1) {
                try {
                    t = s[i].getBoundingClientRect();
                } catch (e) {
                    t = !1;
                }
                (e = (a = (o = s[i].getAttribute("href") || s[i].getAttributeNS(w, "href") || s[i].getAttribute("xlink:href")) && o.split ? o.split("#") : ["", ""])[0]),
                    (n = a[1]),
                    (r = t && 0 === t.left && 0 === t.right && 0 === t.top && 0 === t.bottom),
                    t && 0 === t.width && 0 === t.height && !r
                        ? (s[i].hasAttribute("href") && s[i].setAttributeNS(w, "xlink:href", o),
                          e.length &&
                              (!0 !== (l = y[e]) && setTimeout(g({ useEl: s[i], base: e, hash: n }), 0),
                              void 0 === l &&
                                  ((c = e),
                                  (f = d = u = void 0),
                                  window.XMLHttpRequest && ((u = new XMLHttpRequest()), (d = v(location)), (f = v(c)), (u = void 0 === u.withCredentials && "" !== f && f !== d ? XDomainRequest || void 0 : XMLHttpRequest)),
                                  void 0 !== u &&
                                      ((l = new u()),
                                      ((y[e] = l).onload = (function (o) {
                                          return function () {
                                              var e,
                                                  t = document.body,
                                                  n = document.createElement("x");
                                              (o.onload = null),
                                                  (n.innerHTML = o.responseText),
                                                  (e = n.getElementsByTagName("svg")[0]) &&
                                                      (e.setAttribute("aria-hidden", "true"), (e.style.position = "absolute"), (e.style.width = 0), (e.style.height = 0), (e.style.overflow = "hidden"), t.insertBefore(e, t.firstChild)),
                                                  h();
                                          };
                                      })(l)),
                                      (l.onerror = m(l)),
                                      (l.ontimeout = m(l)),
                                      l.open("GET", e),
                                      l.send(),
                                      (p += 1)))))
                        : r
                        ? e.length && y[e] && setTimeout(g({ useEl: s[i], base: e, hash: n }), 0)
                        : void 0 === y[e]
                        ? (y[e] = !0)
                        : y[e].onload && (y[e].abort(), delete y[e].onload, (y[e] = !0));
            }
            function v(e) {
                var t;
                return void 0 !== e.protocol ? (t = e) : ((t = document.createElement("a")).href = e), t.protocol.replace(/:/g, "") + t.host;
            }
            (s = ""), (p += 1), h();
        }),
        (n = function () {
            window.removeEventListener("load", n, !1), (e = setTimeout(t, 0));
        }),
        "complete" !== document.readyState ? window.addEventListener("load", n, !1) : n());
})(),
    (function (e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = e.document
                  ? t(e, !0)
                  : function (e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return t(e);
                    })
            : t(e);
    })("undefined" != typeof window ? window : this, function (T, e) {
        "use strict";
        function g(e) {
            return null != e && e === e.window;
        }
        var t = [],
            o = Object.getPrototypeOf,
            s = t.slice,
            m = t.flat
                ? function (e) {
                      return t.flat.call(e);
                  }
                : function (e) {
                      return t.concat.apply([], e);
                  },
            l = t.push,
            i = t.indexOf,
            n = {},
            r = n.toString,
            v = n.hasOwnProperty,
            a = v.toString,
            c = a.call(Object),
            y = {},
            b = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType;
            },
            S = T.document,
            u = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function x(e, t, n) {
            var o,
                i,
                r = (n = n || S).createElement("script");
            if (((r.text = e), t)) for (o in u) (i = t[o] || (t.getAttribute && t.getAttribute(o))) && r.setAttribute(o, i);
            n.head.appendChild(r).parentNode.removeChild(r);
        }
        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e;
        }
        var k = function (e, t) {
            return new k.fn.init(e, t);
        };
        function d(e) {
            var t = !!e && "length" in e && e.length,
                n = w(e);
            return !b(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
        }
        (k.fn = k.prototype = {
            jquery: "3.5.1",
            constructor: k,
            length: 0,
            toArray: function () {
                return s.call(this);
            },
            get: function (e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function (e) {
                var t = k.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return k.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    k.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    k.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    k.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: l,
            sort: t.sort,
            splice: t.splice,
        }),
            (k.extend = k.fn.extend = function () {
                var e,
                    t,
                    n,
                    o,
                    i,
                    r,
                    a = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++), "object" == typeof a || b(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (o = e[t]),
                                "__proto__" !== t &&
                                    a !== o &&
                                    (c && o && (k.isPlainObject(o) || (i = Array.isArray(o)))
                                        ? ((n = a[t]), (r = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}), (i = !1), (a[t] = k.extend(c, r, o)))
                                        : void 0 !== o && (a[t] = o));
                return a;
            }),
            k.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== r.call(e) || ((t = o(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || a.call(n) !== c)));
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                globalEval: function (e, t, n) {
                    x(e, { nonce: t && t.nonce }, n);
                },
                each: function (e, t) {
                    var n,
                        o = 0;
                    if (d(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                    else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                    return e;
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : i.call(t, e, n);
                },
                merge: function (e, t) {
                    for (var n = +t.length, o = 0, i = e.length; o < n; o++) e[i++] = t[o];
                    return (e.length = i), e;
                },
                grep: function (e, t, n) {
                    for (var o = [], i = 0, r = e.length, a = !n; i < r; i++) !t(e[i], i) != a && o.push(e[i]);
                    return o;
                },
                map: function (e, t, n) {
                    var o,
                        i,
                        r = 0,
                        a = [];
                    if (d(e)) for (o = e.length; r < o; r++) null != (i = t(e[r], r, n)) && a.push(i);
                    else for (r in e) null != (i = t(e[r], r, n)) && a.push(i);
                    return m(a);
                },
                guid: 1,
                support: y,
            }),
            "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
            k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            });
        var f = (function (n) {
            function d(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            }
            function i() {
                C();
            }
            var e,
                p,
                x,
                r,
                a,
                h,
                f,
                g,
                w,
                l,
                c,
                C,
                T,
                s,
                S,
                m,
                u,
                v,
                y,
                k = "sizzle" + +new Date(),
                b = n.document,
                E = 0,
                o = 0,
                $ = le(),
                A = le(),
                P = le(),
                j = le(),
                L = function (e, t) {
                    return e === t && (c = !0), 0;
                },
                D = {}.hasOwnProperty,
                t = [],
                M = t.pop,
                O = t.push,
                q = t.push,
                N = t.slice,
                H = function (e, t) {
                    for (var n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
                    return -1;
                },
                I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                z = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                R = "\\[" + F + "*(" + z + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + F + "*\\]",
                _ = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                B = new RegExp(F + "+", "g"),
                W = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                X = new RegExp("^" + F + "*," + F + "*"),
                V = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                Y = new RegExp(F + "|>"),
                U = new RegExp(_),
                Q = new RegExp("^" + z + "$"),
                K = {
                    ID: new RegExp("^#(" + z + ")"),
                    CLASS: new RegExp("^\\.(" + z + ")"),
                    TAG: new RegExp("^(" + z + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + _),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i"),
                },
                Z = /HTML$/i,
                G = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                ee = /^[^{]+\{\s*\[native \w/,
                te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ne = /[+~]/,
                oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                re = function (e, t) {
                    return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                },
                ae = ye(
                    function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                q.apply((t = N.call(b.childNodes)), b.childNodes), t[b.childNodes.length].nodeType;
            } catch (e) {
                q = {
                    apply: t.length
                        ? function (e, t) {
                              O.apply(e, N.call(t));
                          }
                        : function (e, t) {
                              for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                              e.length = n - 1;
                          },
                };
            }
            function se(e, t, n, o) {
                var i,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d = t && t.ownerDocument,
                    f = t ? t.nodeType : 9;
                if (((n = n || []), "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))) return n;
                if (!o && (C(t), (t = t || T), S)) {
                    if (11 !== f && (l = te.exec(e)))
                        if ((i = l[1])) {
                            if (9 === f) {
                                if (!(a = t.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n;
                            } else if (d && (a = d.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n;
                        } else {
                            if (l[2]) return q.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(i)), n;
                        }
                    if (p.qsa && !j[e + " "] && (!m || !m.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                        if (((u = e), (d = t), 1 === f && (Y.test(e) || V.test(e)))) {
                            for (((d = (ne.test(e) && ge(t.parentNode)) || t) === t && p.scope) || ((s = t.getAttribute("id")) ? (s = s.replace(ie, re)) : t.setAttribute("id", (s = k))), r = (c = h(e)).length; r--; )
                                c[r] = (s ? "#" + s : ":scope") + " " + ve(c[r]);
                            u = c.join(",");
                        }
                        try {
                            return q.apply(n, d.querySelectorAll(u)), n;
                        } catch (t) {
                            j(e, !0);
                        } finally {
                            s === k && t.removeAttribute("id");
                        }
                    }
                }
                return g(e.replace(W, "$1"), t, n, o);
            }
            function le() {
                var o = [];
                return function e(t, n) {
                    return o.push(t + " ") > x.cacheLength && delete e[o.shift()], (e[t + " "] = n);
                };
            }
            function ce(e) {
                return (e[k] = !0), e;
            }
            function ue(e) {
                var t = T.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
            }
            function de(e, t) {
                for (var n = e.split("|"), o = n.length; o--; ) x.attrHandle[n[o]] = t;
            }
            function fe(e, t) {
                var n = t && e,
                    o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (o) return o;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function pe(t) {
                return function (e) {
                    return "form" in e
                        ? e.parentNode && !1 === e.disabled
                            ? "label" in e
                                ? "label" in e.parentNode
                                    ? e.parentNode.disabled === t
                                    : e.disabled === t
                                : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                            : e.disabled === t
                        : "label" in e && e.disabled === t;
                };
            }
            function he(a) {
                return ce(function (r) {
                    return (
                        (r = +r),
                        ce(function (e, t) {
                            for (var n, o = a([], e.length, r), i = o.length; i--; ) e[(n = o[i])] && (e[n] = !(t[n] = e[n]));
                        })
                    );
                });
            }
            function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }
            for (e in ((p = se.support = {}),
            (a = se.isXML = function (e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Z.test(t || (n && n.nodeName) || "HTML");
            }),
            (C = se.setDocument = function (e) {
                var t,
                    n,
                    o = e ? e.ownerDocument || e : b;
                return (
                    o != T &&
                        9 === o.nodeType &&
                        o.documentElement &&
                        ((s = (T = o).documentElement),
                        (S = !a(T)),
                        b != T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)),
                        (p.scope = ue(function (e) {
                            return s.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                        })),
                        (p.attributes = ue(function (e) {
                            return (e.className = "i"), !e.getAttribute("className");
                        })),
                        (p.getElementsByTagName = ue(function (e) {
                            return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
                        })),
                        (p.getElementsByClassName = ee.test(T.getElementsByClassName)),
                        (p.getById = ue(function (e) {
                            return (s.appendChild(e).id = k), !T.getElementsByName || !T.getElementsByName(k).length;
                        })),
                        p.getById
                            ? ((x.filter.ID = function (e) {
                                  var t = e.replace(oe, d);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }),
                              (x.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && S) {
                                      var n = t.getElementById(e);
                                      return n ? [n] : [];
                                  }
                              }))
                            : ((x.filter.ID = function (e) {
                                  var n = e.replace(oe, d);
                                  return function (e) {
                                      var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                      return t && t.value === n;
                                  };
                              }),
                              (x.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && S) {
                                      var n,
                                          o,
                                          i,
                                          r = t.getElementById(e);
                                      if (r) {
                                          if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                          for (i = t.getElementsByName(e), o = 0; (r = i[o++]); ) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                      }
                                      return [];
                                  }
                              })),
                        (x.find.TAG = p.getElementsByTagName
                            ? function (e, t) {
                                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
                              }
                            : function (e, t) {
                                  var n,
                                      o = [],
                                      i = 0,
                                      r = t.getElementsByTagName(e);
                                  if ("*" !== e) return r;
                                  for (; (n = r[i++]); ) 1 === n.nodeType && o.push(n);
                                  return o;
                              }),
                        (x.find.CLASS =
                            p.getElementsByClassName &&
                            function (e, t) {
                                if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e);
                            }),
                        (u = []),
                        (m = []),
                        (p.qsa = ee.test(T.querySelectorAll)) &&
                            (ue(function (e) {
                                var t;
                                (s.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + I + ")"),
                                    e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="),
                                    (t = T.createElement("input")).setAttribute("name", ""),
                                    e.appendChild(t),
                                    e.querySelectorAll("[name='']").length || m.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"),
                                    e.querySelectorAll(":checked").length || m.push(":checked"),
                                    e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]"),
                                    e.querySelectorAll("\\\f"),
                                    m.push("[\\r\\n\\f]");
                            }),
                            ue(function (e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = T.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="),
                                    2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                    (s.appendChild(e).disabled = !0),
                                    2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    m.push(",.*:");
                            })),
                        (p.matchesSelector = ee.test((v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector))) &&
                            ue(function (e) {
                                (p.disconnectedMatch = v.call(e, "*")), v.call(e, "[s!='']:x"), u.push("!=", _);
                            }),
                        (m = m.length && new RegExp(m.join("|"))),
                        (u = u.length && new RegExp(u.join("|"))),
                        (t = ee.test(s.compareDocumentPosition)),
                        (y =
                            t || ee.test(s.contains)
                                ? function (e, t) {
                                      var n = 9 === e.nodeType ? e.documentElement : e,
                                          o = t && t.parentNode;
                                      return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)));
                                  }
                                : function (e, t) {
                                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                      return !1;
                                  }),
                        (L = t
                            ? function (e, t) {
                                  if (e === t) return (c = !0), 0;
                                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                  return (
                                      n ||
                                      (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!p.sortDetached && t.compareDocumentPosition(e) === n)
                                          ? e == T || (e.ownerDocument == b && y(b, e))
                                              ? -1
                                              : t == T || (t.ownerDocument == b && y(b, t))
                                              ? 1
                                              : l
                                              ? H(l, e) - H(l, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1)
                                  );
                              }
                            : function (e, t) {
                                  if (e === t) return (c = !0), 0;
                                  var n,
                                      o = 0,
                                      i = e.parentNode,
                                      r = t.parentNode,
                                      a = [e],
                                      s = [t];
                                  if (!i || !r) return e == T ? -1 : t == T ? 1 : i ? -1 : r ? 1 : l ? H(l, e) - H(l, t) : 0;
                                  if (i === r) return fe(e, t);
                                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                                  for (; a[o] === s[o]; ) o++;
                                  return o ? fe(a[o], s[o]) : a[o] == b ? -1 : s[o] == b ? 1 : 0;
                              })),
                    T
                );
            }),
            (se.matches = function (e, t) {
                return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
                if ((C(e), p.matchesSelector && S && !j[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t))))
                    try {
                        var n = v.call(e, t);
                        if (n || p.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                    } catch (e) {
                        j(t, !0);
                    }
                return 0 < se(t, T, null, [e]).length;
            }),
            (se.contains = function (e, t) {
                return (e.ownerDocument || e) != T && C(e), y(e, t);
            }),
            (se.attr = function (e, t) {
                (e.ownerDocument || e) != T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                    o = n && D.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== o ? o : p.attributes || !S ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
            (se.escape = function (e) {
                return (e + "").replace(ie, re);
            }),
            (se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
                var t,
                    n = [],
                    o = 0,
                    i = 0;
                if (((c = !p.detectDuplicates), (l = !p.sortStable && e.slice(0)), e.sort(L), c)) {
                    for (; (t = e[i++]); ) t === e[i] && (o = n.push(i));
                    for (; o--; ) e.splice(n[o], 1);
                }
                return (l = null), e;
            }),
            (r = se.getText = function (e) {
                var t,
                    n = "",
                    o = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[o++]); ) n += r(t);
                return n;
            }),
            ((x = se.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: K,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(oe, d)), (e[3] = (e[3] || e[4] || e[5] || "").replace(oe, d)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return K.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && U.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(oe, d).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = $[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) &&
                                $(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (n, o, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t
                                ? "!=" === o
                                : !o ||
                                      ((t += ""),
                                      "=" === o
                                          ? t === i
                                          : "!=" === o
                                          ? t !== i
                                          : "^=" === o
                                          ? i && 0 === t.indexOf(i)
                                          : "*=" === o
                                          ? i && -1 < t.indexOf(i)
                                          : "$=" === o
                                          ? i && t.slice(-i.length) === i
                                          : "~=" === o
                                          ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                                          : "|=" === o && (t === i || t.slice(0, i.length + 1) === i + "-"));
                        };
                    },
                    CHILD: function (h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (e, t, n) {
                                  var o,
                                      i,
                                      r,
                                      a,
                                      s,
                                      l,
                                      c = v != y ? "nextSibling" : "previousSibling",
                                      u = e.parentNode,
                                      d = b && e.nodeName.toLowerCase(),
                                      f = !n && !b,
                                      p = !1;
                                  if (u) {
                                      if (v) {
                                          for (; c; ) {
                                              for (a = e; (a = a[c]); ) if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                              l = c = "only" === h && !l && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((l = [y ? u.firstChild : u.lastChild]), y && f)) {
                                          for (
                                              p = (s = (o = (i = (r = (a = u)[k] || (a[k] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === E && o[1]) && o[2], a = s && u.childNodes[s];
                                              (a = (++s && a && a[c]) || (p = s = 0) || l.pop());

                                          )
                                              if (1 === a.nodeType && ++p && a === e) {
                                                  i[h] = [E, s, p];
                                                  break;
                                              }
                                      } else if ((f && (p = s = (o = (i = (r = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === E && o[1]), !1 === p))
                                          for (
                                              ;
                                              (a = (++s && a && a[c]) || (p = s = 0) || l.pop()) &&
                                              ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (r = a[k] || (a[k] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] = [E, p]), a !== e));

                                          );
                                      return (p -= m) === g || (p % g == 0 && 0 <= p / g);
                                  }
                              };
                    },
                    PSEUDO: function (e, r) {
                        var t,
                            a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k]
                            ? a(r)
                            : 1 < a.length
                            ? ((t = [e, e, "", r]),
                              x.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? ce(function (e, t) {
                                        for (var n, o = a(e, r), i = o.length; i--; ) e[(n = H(e, o[i]))] = !(t[n] = o[i]);
                                    })
                                  : function (e) {
                                        return a(e, 0, t);
                                    })
                            : a;
                    },
                },
                pseudos: {
                    not: ce(function (e) {
                        var o = [],
                            i = [],
                            s = f(e.replace(W, "$1"));
                        return s[k]
                            ? ce(function (e, t, n, o) {
                                  for (var i, r = s(e, null, o, []), a = e.length; a--; ) (i = r[a]) && (e[a] = !(t[a] = i));
                              })
                            : function (e, t, n) {
                                  return (o[0] = e), s(o, null, n, i), (o[0] = null), !i.pop();
                              };
                    }),
                    has: ce(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length;
                        };
                    }),
                    contains: ce(function (t) {
                        return (
                            (t = t.replace(oe, d)),
                            function (e) {
                                return -1 < (e.textContent || r(e)).indexOf(t);
                            }
                        );
                    }),
                    lang: ce(function (n) {
                        return (
                            Q.test(n || "") || se.error("unsupported lang: " + n),
                            (n = n.replace(oe, d).toLowerCase()),
                            function (e) {
                                var t;
                                do {
                                    if ((t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                        return e === s;
                    },
                    focus: function (e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !x.pseudos.empty(e);
                    },
                    header: function (e) {
                        return J.test(e.nodeName);
                    },
                    input: function (e) {
                        return G.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: he(function () {
                        return [0];
                    }),
                    last: he(function (e, t) {
                        return [t - 1];
                    }),
                    eq: he(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: he(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: he(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: he(function (e, t, n) {
                        for (var o = n < 0 ? n + t : t < n ? t : n; 0 <= --o; ) e.push(o);
                        return e;
                    }),
                    gt: he(function (e, t, n) {
                        for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                        return e;
                    }),
                },
            }).pseudos.nth = x.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                x.pseudos[e] = (function (t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t;
                    };
                })(e);
            for (e in { submit: !0, reset: !0 })
                x.pseudos[e] = (function (n) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n;
                    };
                })(e);
            function me() {}
            function ve(e) {
                for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
                return o;
            }
            function ye(s, e, t) {
                var l = e.dir,
                    c = e.next,
                    u = c || l,
                    d = t && "parentNode" === u,
                    f = o++;
                return e.first
                    ? function (e, t, n) {
                          for (; (e = e[l]); ) if (1 === e.nodeType || d) return s(e, t, n);
                          return !1;
                      }
                    : function (e, t, n) {
                          var o,
                              i,
                              r,
                              a = [E, f];
                          if (n) {
                              for (; (e = e[l]); ) if ((1 === e.nodeType || d) && s(e, t, n)) return !0;
                          } else
                              for (; (e = e[l]); )
                                  if (1 === e.nodeType || d)
                                      if (((i = (r = e[k] || (e[k] = {}))[e.uniqueID] || (r[e.uniqueID] = {})), c && c === e.nodeName.toLowerCase())) e = e[l] || e;
                                      else {
                                          if ((o = i[u]) && o[0] === E && o[1] === f) return (a[2] = o[2]);
                                          if (((i[u] = a)[2] = s(e, t, n))) return !0;
                                      }
                          return !1;
                      };
            }
            function be(i) {
                return 1 < i.length
                    ? function (e, t, n) {
                          for (var o = i.length; o--; ) if (!i[o](e, t, n)) return !1;
                          return !0;
                      }
                    : i[0];
            }
            function xe(e, t, n, o, i) {
                for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (r = e[s]) && ((n && !n(r, o, i)) || (a.push(r), c && t.push(s)));
                return a;
            }
            function we(e) {
                for (
                    var i,
                        t,
                        n,
                        o = e.length,
                        r = x.relative[e[0].type],
                        a = r || x.relative[" "],
                        s = r ? 1 : 0,
                        l = ye(
                            function (e) {
                                return e === i;
                            },
                            a,
                            !0
                        ),
                        c = ye(
                            function (e) {
                                return -1 < H(i, e);
                            },
                            a,
                            !0
                        ),
                        u = [
                            function (e, t, n) {
                                var o = (!r && (n || t !== w)) || ((i = t).nodeType ? l : c)(e, t, n);
                                return (i = null), o;
                            },
                        ];
                    s < o;
                    s++
                )
                    if ((t = x.relative[e[s].type])) u = [ye(be(u), t)];
                    else {
                        if ((t = x.filter[e[s].type].apply(null, e[s].matches))[k]) {
                            for (n = ++s; n < o && !x.relative[e[n].type]; n++);
                            return (function e(p, h, g, m, v, t) {
                                return (
                                    m && !m[k] && (m = e(m)),
                                    v && !v[k] && (v = e(v, t)),
                                    ce(function (e, t, n, o) {
                                        var i,
                                            r,
                                            a,
                                            s = [],
                                            l = [],
                                            c = t.length,
                                            u =
                                                e ||
                                                (function (e, t, n) {
                                                    for (var o = 0, i = t.length; o < i; o++) se(e, t[o], n);
                                                    return n;
                                                })(h || "*", n.nodeType ? [n] : n, []),
                                            d = !p || (!e && h) ? u : xe(u, s, p, n, o),
                                            f = g ? (v || (e ? p : c || m) ? [] : t) : d;
                                        if ((g && g(d, f, n, o), m)) for (i = xe(f, l), m(i, [], n, o), r = i.length; r--; ) (a = i[r]) && (f[l[r]] = !(d[l[r]] = a));
                                        if (e) {
                                            if (v || p) {
                                                if (v) {
                                                    for (i = [], r = f.length; r--; ) (a = f[r]) && i.push((d[r] = a));
                                                    v(null, (f = []), i, o);
                                                }
                                                for (r = f.length; r--; ) (a = f[r]) && -1 < (i = v ? H(e, a) : s[r]) && (e[i] = !(t[i] = a));
                                            }
                                        } else (f = xe(f === t ? f.splice(c, f.length) : f)), v ? v(null, t, f, o) : q.apply(t, f);
                                    })
                                );
                            })(1 < s && be(u), 1 < s && ve(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(W, "$1"), t, s < n && we(e.slice(s, n)), n < o && we((e = e.slice(n))), n < o && ve(e));
                        }
                        u.push(t);
                    }
                return be(u);
            }
            return (
                (me.prototype = x.filters = x.pseudos),
                (x.setFilters = new me()),
                (h = se.tokenize = function (e, t) {
                    var n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        c = A[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, s = [], l = x.preFilter; a; ) {
                        for (r in ((n && !(o = X.exec(a))) || (o && (a = a.slice(o[0].length) || a), s.push((i = []))),
                        (n = !1),
                        (o = V.exec(a)) && ((n = o.shift()), i.push({ value: n, type: o[0].replace(W, " ") }), (a = a.slice(n.length))),
                        x.filter))
                            !(o = K[r].exec(a)) || (l[r] && !(o = l[r](o))) || ((n = o.shift()), i.push({ value: n, type: r, matches: o }), (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? a.length : a ? se.error(e) : A(e, s).slice(0);
                }),
                (f = se.compile = function (e, t) {
                    var n,
                        m,
                        v,
                        y,
                        b,
                        o,
                        i = [],
                        r = [],
                        a = P[e + " "];
                    if (!a) {
                        for (n = (t = t || h(e)).length; n--; ) (a = we(t[n]))[k] ? i.push(a) : r.push(a);
                        (a = P(
                            e,
                            ((m = r),
                            (y = 0 < (v = i).length),
                            (b = 0 < m.length),
                            (o = function (e, t, n, o, i) {
                                var r,
                                    a,
                                    s,
                                    l = 0,
                                    c = "0",
                                    u = e && [],
                                    d = [],
                                    f = w,
                                    p = e || (b && x.find.TAG("*", i)),
                                    h = (E += null == f ? 1 : Math.random() || 0.1),
                                    g = p.length;
                                for (i && (w = t == T || t || i); c !== g && null != (r = p[c]); c++) {
                                    if (b && r) {
                                        for (a = 0, t || r.ownerDocument == T || (C(r), (n = !S)); (s = m[a++]); )
                                            if (s(r, t || T, n)) {
                                                o.push(r);
                                                break;
                                            }
                                        i && (E = h);
                                    }
                                    y && ((r = !s && r) && l--, e && u.push(r));
                                }
                                if (((l += c), y && c !== l)) {
                                    for (a = 0; (s = v[a++]); ) s(u, d, t, n);
                                    if (e) {
                                        if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = M.call(o));
                                        d = xe(d);
                                    }
                                    q.apply(o, d), i && !e && 0 < d.length && 1 < l + v.length && se.uniqueSort(o);
                                }
                                return i && ((E = h), (w = f)), u;
                            }),
                            y ? ce(o) : o)
                        )).selector = e;
                    }
                    return a;
                }),
                (g = se.select = function (e, t, n, o) {
                    var i,
                        r,
                        a,
                        s,
                        l,
                        c = "function" == typeof e && e,
                        u = !o && h((e = c.selector || e));
                    if (((n = n || []), 1 === u.length)) {
                        if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && S && x.relative[r[1].type]) {
                            if (!(t = (x.find.ID(a.matches[0].replace(oe, d), t) || [])[0])) return n;
                            c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
                        }
                        for (i = K.needsContext.test(e) ? 0 : r.length; i-- && ((a = r[i]), !x.relative[(s = a.type)]); )
                            if ((l = x.find[s]) && (o = l(a.matches[0].replace(oe, d), (ne.test(r[0].type) && ge(t.parentNode)) || t))) {
                                if ((r.splice(i, 1), !(e = o.length && ve(r)))) return q.apply(n, o), n;
                                break;
                            }
                    }
                    return (c || f(e, u))(o, t, !S, n, !t || (ne.test(e) && ge(t.parentNode)) || t), n;
                }),
                (p.sortStable = k.split("").sort(L).join("") === k),
                (p.detectDuplicates = !!c),
                C(),
                (p.sortDetached = ue(function (e) {
                    return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
                })),
                ue(function (e) {
                    return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                }) ||
                    de("type|href|height|width", function (e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                    }),
                (p.attributes &&
                    ue(function (e) {
                        return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                    })) ||
                    de("value", function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                    }),
                ue(function (e) {
                    return null == e.getAttribute("disabled");
                }) ||
                    de(I, function (e, t, n) {
                        var o;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                    }),
                se
            );
        })(T);
        (k.find = f), (k.expr = f.selectors), (k.expr[":"] = k.expr.pseudos), (k.uniqueSort = k.unique = f.uniqueSort), (k.text = f.getText), (k.isXMLDoc = f.isXML), (k.contains = f.contains), (k.escapeSelector = f.escape);
        function p(e, t, n) {
            for (var o = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    o.push(e);
                }
            return o;
        }
        function h(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
        var C = k.expr.match.needsContext;
        function E(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function A(e, n, o) {
            return b(n)
                ? k.grep(e, function (e, t) {
                      return !!n.call(e, t, e) !== o;
                  })
                : n.nodeType
                ? k.grep(e, function (e) {
                      return (e === n) !== o;
                  })
                : "string" != typeof n
                ? k.grep(e, function (e) {
                      return -1 < i.call(n, e) !== o;
                  })
                : k.filter(n, e, o);
        }
        (k.filter = function (e, t, n) {
            var o = t[0];
            return (
                n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === o.nodeType
                    ? k.find.matchesSelector(o, e)
                        ? [o]
                        : []
                    : k.find.matches(
                          e,
                          k.grep(t, function (e) {
                              return 1 === e.nodeType;
                          })
                      )
            );
        }),
            k.fn.extend({
                find: function (e) {
                    var t,
                        n,
                        o = this.length,
                        i = this;
                    if ("string" != typeof e)
                        return this.pushStack(
                            k(e).filter(function () {
                                for (t = 0; t < o; t++) if (k.contains(i[t], this)) return !0;
                            })
                        );
                    for (n = this.pushStack([]), t = 0; t < o; t++) k.find(e, i[t], n);
                    return 1 < o ? k.uniqueSort(n) : n;
                },
                filter: function (e) {
                    return this.pushStack(A(this, e || [], !1));
                },
                not: function (e) {
                    return this.pushStack(A(this, e || [], !0));
                },
                is: function (e) {
                    return !!A(this, "string" == typeof e && C.test(e) ? k(e) : e || [], !1).length;
                },
            });
        var P,
            j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((k.fn.init = function (e, t, n) {
            var o, i;
            if (!e) return this;
            if (((n = n || P), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : b(e) ? (void 0 !== n.ready ? n.ready(e) : e(k)) : k.makeArray(e, this);
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!o[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (((t = t instanceof k ? t[0] : t), k.merge(this, k.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), $.test(o[1]) && k.isPlainObject(t))) for (o in t) b(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this;
            }
            return (i = S.getElementById(o[2])) && ((this[0] = i), (this.length = 1)), this;
        }).prototype = k.fn),
            (P = k(S));
        var L = /^(?:parents|prev(?:Until|All))/,
            D = { children: !0, contents: !0, next: !0, prev: !0 };
        function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
        }
        k.fn.extend({
            has: function (e) {
                var t = k(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
                });
            },
            closest: function (e, t) {
                var n,
                    o = 0,
                    i = this.length,
                    r = [],
                    a = "string" != typeof e && k(e);
                if (!C.test(e))
                    for (; o < i; o++)
                        for (n = this[o]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                                r.push(n);
                                break;
                            }
                return this.pushStack(1 < r.length ? k.uniqueSort(r) : r);
            },
            index: function (e) {
                return e ? ("string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
            k.each(
                {
                    parent: function (e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function (e) {
                        return p(e, "parentNode");
                    },
                    parentsUntil: function (e, t, n) {
                        return p(e, "parentNode", n);
                    },
                    next: function (e) {
                        return M(e, "nextSibling");
                    },
                    prev: function (e) {
                        return M(e, "previousSibling");
                    },
                    nextAll: function (e) {
                        return p(e, "nextSibling");
                    },
                    prevAll: function (e) {
                        return p(e, "previousSibling");
                    },
                    nextUntil: function (e, t, n) {
                        return p(e, "nextSibling", n);
                    },
                    prevUntil: function (e, t, n) {
                        return p(e, "previousSibling", n);
                    },
                    siblings: function (e) {
                        return h((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                        return h(e.firstChild);
                    },
                    contents: function (e) {
                        return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
                    },
                },
                function (o, i) {
                    k.fn[o] = function (e, t) {
                        var n = k.map(this, i, e);
                        return "Until" !== o.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (D[o] || k.uniqueSort(n), L.test(o) && n.reverse()), this.pushStack(n);
                    };
                }
            );
        var O = /[^\x20\t\r\n\f]+/g;
        function q(e) {
            return e;
        }
        function N(e) {
            throw e;
        }
        function H(e, t, n, o) {
            var i;
            try {
                e && b((i = e.promise)) ? i.call(e).done(t).fail(n) : e && b((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o));
            } catch (e) {
                n.apply(void 0, [e]);
            }
        }
        (k.Callbacks = function (o) {
            var n;
            o =
                "string" == typeof o
                    ? ((n = {}),
                      k.each(o.match(O) || [], function (e, t) {
                          n[t] = !0;
                      }),
                      n)
                    : k.extend({}, o);
            function i() {
                for (a = a || o.once, t = r = !0; l.length; c = -1) for (e = l.shift(); ++c < s.length; ) !1 === s[c].apply(e[0], e[1]) && o.stopOnFalse && ((c = s.length), (e = !1));
                o.memory || (e = !1), (r = !1), a && (s = e ? [] : "");
            }
            var r,
                e,
                t,
                a,
                s = [],
                l = [],
                c = -1,
                u = {
                    add: function () {
                        return (
                            s &&
                                (e && !r && ((c = s.length - 1), l.push(e)),
                                (function n(e) {
                                    k.each(e, function (e, t) {
                                        b(t) ? (o.unique && u.has(t)) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                                    });
                                })(arguments),
                                e && !r && i()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            k.each(arguments, function (e, t) {
                                for (var n; -1 < (n = k.inArray(t, s, n)); ) s.splice(n, 1), n <= c && c--;
                            }),
                            this
                        );
                    },
                    has: function (e) {
                        return e ? -1 < k.inArray(e, s) : 0 < s.length;
                    },
                    empty: function () {
                        return (s = s && []), this;
                    },
                    disable: function () {
                        return (a = l = []), (s = e = ""), this;
                    },
                    disabled: function () {
                        return !s;
                    },
                    lock: function () {
                        return (a = l = []), e || r || (s = e = ""), this;
                    },
                    locked: function () {
                        return !!a;
                    },
                    fireWith: function (e, t) {
                        return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), r || i()), this;
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!t;
                    },
                };
            return u;
        }),
            k.extend({
                Deferred: function (e) {
                    var r = [
                            ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                            ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"],
                        ],
                        i = "pending",
                        a = {
                            state: function () {
                                return i;
                            },
                            always: function () {
                                return s.done(arguments).fail(arguments), this;
                            },
                            catch: function (e) {
                                return a.then(null, e);
                            },
                            pipe: function () {
                                var i = arguments;
                                return k
                                    .Deferred(function (o) {
                                        k.each(r, function (e, t) {
                                            var n = b(i[t[4]]) && i[t[4]];
                                            s[t[1]](function () {
                                                var e = n && n.apply(this, arguments);
                                                e && b(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[t[0] + "With"](this, n ? [e] : arguments);
                                            });
                                        }),
                                            (i = null);
                                    })
                                    .promise();
                            },
                            then: function (t, n, o) {
                                var l = 0;
                                function c(i, r, a, s) {
                                    return function () {
                                        function e() {
                                            var e, t;
                                            if (!(i < l)) {
                                                if ((e = a.apply(n, o)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                                (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    b(t)
                                                        ? s
                                                            ? t.call(e, c(l, r, q, s), c(l, r, N, s))
                                                            : (l++, t.call(e, c(l, r, q, s), c(l, r, N, s), c(l, r, q, r.notifyWith)))
                                                        : (a !== q && ((n = void 0), (o = [e])), (s || r.resolveWith)(n, o));
                                            }
                                        }
                                        var n = this,
                                            o = arguments,
                                            t = s
                                                ? e
                                                : function () {
                                                      try {
                                                          e();
                                                      } catch (e) {
                                                          k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (a !== N && ((n = void 0), (o = [e])), r.rejectWith(n, o));
                                                      }
                                                  };
                                        i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), T.setTimeout(t));
                                    };
                                }
                                return k
                                    .Deferred(function (e) {
                                        r[0][3].add(c(0, e, b(o) ? o : q, e.notifyWith)), r[1][3].add(c(0, e, b(t) ? t : q)), r[2][3].add(c(0, e, b(n) ? n : N));
                                    })
                                    .promise();
                            },
                            promise: function (e) {
                                return null != e ? k.extend(e, a) : a;
                            },
                        },
                        s = {};
                    return (
                        k.each(r, function (e, t) {
                            var n = t[2],
                                o = t[5];
                            (a[t[1]] = n.add),
                                o &&
                                    n.add(
                                        function () {
                                            i = o;
                                        },
                                        r[3 - e][2].disable,
                                        r[3 - e][3].disable,
                                        r[0][2].lock,
                                        r[0][3].lock
                                    ),
                                n.add(t[3].fire),
                                (s[t[0]] = function () {
                                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                                }),
                                (s[t[0] + "With"] = n.fireWith);
                        }),
                        a.promise(s),
                        e && e.call(s, s),
                        s
                    );
                },
                when: function (e) {
                    function t(t) {
                        return function (e) {
                            (i[t] = this), (r[t] = 1 < arguments.length ? s.call(arguments) : e), --n || a.resolveWith(i, r);
                        };
                    }
                    var n = arguments.length,
                        o = n,
                        i = Array(o),
                        r = s.call(arguments),
                        a = k.Deferred();
                    if (n <= 1 && (H(e, a.done(t(o)).resolve, a.reject, !n), "pending" === a.state() || b(r[o] && r[o].then))) return a.then();
                    for (; o--; ) H(r[o], t(o), a.reject);
                    return a.promise();
                },
            });
        var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (k.Deferred.exceptionHook = function (e, t) {
            T.console && T.console.warn && e && I.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }),
            (k.readyException = function (e) {
                T.setTimeout(function () {
                    throw e;
                });
            });
        var F = k.Deferred();
        function z() {
            S.removeEventListener("DOMContentLoaded", z), T.removeEventListener("load", z), k.ready();
        }
        (k.fn.ready = function (e) {
            return (
                F.then(e).catch(function (e) {
                    k.readyException(e);
                }),
                this
            );
        }),
            k.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait) || F.resolveWith(S, [k]);
                },
            }),
            (k.ready.then = F.then),
            "complete" === S.readyState || ("loading" !== S.readyState && !S.documentElement.doScroll) ? T.setTimeout(k.ready) : (S.addEventListener("DOMContentLoaded", z), T.addEventListener("load", z));
        var R = function (e, t, n, o, i, r, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === w(n)) for (s in ((i = !0), n)) R(e, t, s, n[s], !0, r, a);
                else if (
                    void 0 !== o &&
                    ((i = !0),
                    b(o) || (a = !0),
                    c &&
                        (t = a
                            ? (t.call(e, o), null)
                            : ((c = t),
                              function (e, t, n) {
                                  return c.call(k(e), n);
                              })),
                    t)
                )
                    for (; s < l; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
                return i ? e : c ? t.call(e) : l ? t(e[0], n) : r;
            },
            _ = /^-ms-/,
            B = /-([a-z])/g;
        function W(e, t) {
            return t.toUpperCase();
        }
        function X(e) {
            return e.replace(_, "ms-").replace(B, W);
        }
        function V(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        }
        function Y() {
            this.expando = k.expando + Y.uid++;
        }
        (Y.uid = 1),
            (Y.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                },
                set: function (e, t, n) {
                    var o,
                        i = this.cache(e);
                    if ("string" == typeof t) i[X(t)] = n;
                    else for (o in t) i[X(o)] = t[o];
                    return i;
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
                },
                access: function (e, t, n) {
                    return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function (e, t) {
                    var n,
                        o = e[this.expando];
                    if (void 0 !== o) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in o ? [t] : t.match(O) || []).length;
                            for (; n--; ) delete o[t[n]];
                        }
                        (void 0 !== t && !k.isEmptyObject(o)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !k.isEmptyObject(t);
                },
            });
        var U = new Y(),
            Q = new Y(),
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;
        function G(e, t, n) {
            var o, i;
            if (void 0 === n && 1 === e.nodeType)
                if (((o = "data-" + t.replace(Z, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(o)))) {
                    try {
                        n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i));
                    } catch (e) {}
                    Q.set(e, t, n);
                } else n = void 0;
            return n;
        }
        k.extend({
            hasData: function (e) {
                return Q.hasData(e) || U.hasData(e);
            },
            data: function (e, t, n) {
                return Q.access(e, t, n);
            },
            removeData: function (e, t) {
                Q.remove(e, t);
            },
            _data: function (e, t, n) {
                return U.access(e, t, n);
            },
            _removeData: function (e, t) {
                U.remove(e, t);
            },
        }),
            k.fn.extend({
                data: function (n, e) {
                    var t,
                        o,
                        i,
                        r = this[0],
                        a = r && r.attributes;
                    if (void 0 !== n)
                        return "object" == typeof n
                            ? this.each(function () {
                                  Q.set(this, n);
                              })
                            : R(
                                  this,
                                  function (e) {
                                      var t;
                                      return r && void 0 === e
                                          ? void 0 !== (t = Q.get(r, n)) || void 0 !== (t = G(r, n))
                                              ? t
                                              : void 0
                                          : void this.each(function () {
                                                Q.set(this, n, e);
                                            });
                                  },
                                  null,
                                  e,
                                  1 < arguments.length,
                                  null,
                                  !0
                              );
                    if (this.length && ((i = Q.get(r)), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))) {
                        for (t = a.length; t--; ) a[t] && 0 === (o = a[t].name).indexOf("data-") && ((o = X(o.slice(5))), G(r, o, i[o]));
                        U.set(r, "hasDataAttrs", !0);
                    }
                    return i;
                },
                removeData: function (e) {
                    return this.each(function () {
                        Q.remove(this, e);
                    });
                },
            }),
            k.extend({
                queue: function (e, t, n) {
                    var o;
                    if (e) return (t = (t || "fx") + "queue"), (o = U.get(e, t)), n && (!o || Array.isArray(n) ? (o = U.access(e, t, k.makeArray(n))) : o.push(n)), o || [];
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = k.queue(e, t),
                        o = n.length,
                        i = n.shift(),
                        r = k._queueHooks(e, t);
                    "inprogress" === i && ((i = n.shift()), o--),
                        i &&
                            ("fx" === t && n.unshift("inprogress"),
                            delete r.stop,
                            i.call(
                                e,
                                function () {
                                    k.dequeue(e, t);
                                },
                                r
                            )),
                        !o && r && r.empty.fire();
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return (
                        U.get(e, n) ||
                        U.access(e, n, {
                            empty: k.Callbacks("once memory").add(function () {
                                U.remove(e, [t + "queue", n]);
                            }),
                        })
                    );
                },
            }),
            k.fn.extend({
                queue: function (t, n) {
                    var e = 2;
                    return (
                        "string" != typeof t && ((n = t), (t = "fx"), e--),
                        arguments.length < e
                            ? k.queue(this[0], t)
                            : void 0 === n
                            ? this
                            : this.each(function () {
                                  var e = k.queue(this, t, n);
                                  k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
                              })
                    );
                },
                dequeue: function (e) {
                    return this.each(function () {
                        k.dequeue(this, e);
                    });
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                    function n() {
                        --i || r.resolveWith(a, [a]);
                    }
                    var o,
                        i = 1,
                        r = k.Deferred(),
                        a = this,
                        s = this.length;
                    for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (o = U.get(a[s], e + "queueHooks")) && o.empty && (i++, o.empty.add(n));
                    return n(), r.promise(t);
                },
            });
        var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
            te = ["Top", "Right", "Bottom", "Left"],
            ne = S.documentElement,
            oe = function (e) {
                return k.contains(e.ownerDocument, e);
            },
            ie = { composed: !0 };
        ne.getRootNode &&
            (oe = function (e) {
                return k.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument;
            });
        function re(e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && oe(e) && "none" === k.css(e, "display"));
        }
        function ae(e, t, n, o) {
            var i,
                r,
                a = 20,
                s = o
                    ? function () {
                          return o.cur();
                      }
                    : function () {
                          return k.css(e, t, "");
                      },
                l = s(),
                c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (k.cssNumber[t] || ("px" !== c && +l)) && ee.exec(k.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; a--; ) k.style(e, t, u + c), (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0), (u /= r);
                (u *= 2), k.style(e, t, u + c), (n = n || []);
            }
            return n && ((u = +u || +l || 0), (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), o && ((o.unit = c), (o.start = u), (o.end = i))), i;
        }
        var se = {};
        function le(e, t) {
            for (var n, o, i, r, a, s, l = [], c = 0, u = e.length; c < u; c++)
                (o = e[c]).style &&
                    ((n = o.style.display),
                    t
                        ? ("none" === n && ((l[c] = U.get(o, "display") || null), l[c] || (o.style.display = "")),
                          "" === o.style.display &&
                              re(o) &&
                              (l[c] =
                                  ((s = r = i = void 0),
                                  (r = o.ownerDocument),
                                  (a = o.nodeName),
                                  (s = se[a]) || ((i = r.body.appendChild(r.createElement(a))), (s = k.css(i, "display")), i.parentNode.removeChild(i), "none" === s && (s = "block"), (se[a] = s)))))
                        : "none" !== n && ((l[c] = "none"), U.set(o, "display", n)));
            for (c = 0; c < u; c++) null != l[c] && (e[c].style.display = l[c]);
            return e;
        }
        k.fn.extend({
            show: function () {
                return le(this, !0);
            },
            hide: function () {
                return le(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          re(this) ? k(this).show() : k(this).hide();
                      });
            },
        });
        var ce,
            ue = /^(?:checkbox|radio)$/i,
            de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            fe = /^$|^module$|\/(?:java|ecma)script/i,
            pe = S.createDocumentFragment().appendChild(S.createElement("div"));
        (ce = S.createElement("input")).setAttribute("type", "radio"),
            ce.setAttribute("checked", "checked"),
            ce.setAttribute("name", "t"),
            pe.appendChild(ce),
            (y.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (pe.innerHTML = "<textarea>x</textarea>"),
            (y.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
            (pe.innerHTML = "<option></option>"),
            (y.option = !!pe.lastChild);
        var he = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function ge(e, t) {
            var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || (t && E(e, t)) ? k.merge([e], n) : n;
        }
        function me(e, t) {
            for (var n = 0, o = e.length; n < o; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"));
        }
        (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead), (he.th = he.td), y.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
        var ve = /<|&#?\w+;/;
        function ye(e, t, n, o, i) {
            for (var r, a, s, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === w(r)) k.merge(f, r.nodeType ? [r] : r);
                    else if (ve.test(r)) {
                        for (a = a || d.appendChild(t.createElement("div")), s = (de.exec(r) || ["", ""])[1].toLowerCase(), l = he[s] || he._default, a.innerHTML = l[1] + k.htmlPrefilter(r) + l[2], u = l[0]; u--; ) a = a.lastChild;
                        k.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
                    } else f.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; (r = f[p++]); )
                if (o && -1 < k.inArray(r, o)) i && i.push(r);
                else if (((c = oe(r)), (a = ge(d.appendChild(r), "script")), c && me(a), n)) for (u = 0; (r = a[u++]); ) fe.test(r.type || "") && n.push(r);
            return d;
        }
        var be = /^key/,
            xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            we = /^([^.]*)(?:\.(.+)|)/;
        function Ce() {
            return !0;
        }
        function Te() {
            return !1;
        }
        function Se(e, t) {
            return (
                (e ===
                    (function () {
                        try {
                            return S.activeElement;
                        } catch (e) {}
                    })()) ==
                ("focus" === t)
            );
        }
        function ke(e, t, n, o, i, r) {
            var a, s;
            if ("object" == typeof t) {
                for (s in ("string" != typeof n && ((o = o || n), (n = void 0)), t)) ke(e, s, n, o, t[s], r);
                return e;
            }
            if ((null == o && null == i ? ((i = n), (o = n = void 0)) : null == i && ("string" == typeof n ? ((i = o), (o = void 0)) : ((i = o), (o = n), (n = void 0))), !1 === i)) i = Te;
            else if (!i) return e;
            return (
                1 === r &&
                    ((a = i),
                    ((i = function (e) {
                        return k().off(e), a.apply(this, arguments);
                    }).guid = a.guid || (a.guid = k.guid++))),
                e.each(function () {
                    k.event.add(this, t, i, o, n);
                })
            );
        }
        function Ee(e, i, r) {
            r
                ? (U.set(e, i, !1),
                  k.event.add(e, i, {
                      namespace: !1,
                      handler: function (e) {
                          var t,
                              n,
                              o = U.get(this, i);
                          if (1 & e.isTrigger && this[i]) {
                              if (o.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();
                              else if (((o = s.call(arguments)), U.set(this, i, o), (t = r(this, i)), this[i](), o !== (n = U.get(this, i)) || t ? U.set(this, i, !1) : (n = {}), o !== n))
                                  return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                          } else o.length && (U.set(this, i, { value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                      },
                  }))
                : void 0 === U.get(e, i) && k.event.add(e, i, Ce);
        }
        (k.event = {
            global: {},
            add: function (t, e, n, o, i) {
                var r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d,
                    f,
                    p,
                    h,
                    g,
                    m = U.get(t);
                if (V(t))
                    for (
                        n.handler && ((n = (r = n).handler), (i = r.selector)),
                            i && k.find.matchesSelector(ne, i),
                            n.guid || (n.guid = k.guid++),
                            (l = m.events) || (l = m.events = Object.create(null)),
                            (a = m.handle) ||
                                (a = m.handle = function (e) {
                                    return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
                                }),
                            c = (e = (e || "").match(O) || [""]).length;
                        c--;

                    )
                        (p = g = (s = we.exec(e[c]) || [])[1]),
                            (h = (s[2] || "").split(".").sort()),
                            p &&
                                ((d = k.event.special[p] || {}),
                                (p = (i ? d.delegateType : d.bindType) || p),
                                (d = k.event.special[p] || {}),
                                (u = k.extend({ type: p, origType: g, data: o, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, r)),
                                (f = l[p]) || (((f = l[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(t, o, h, a)) || (t.addEventListener && t.addEventListener(p, a))),
                                d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)),
                                i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                                (k.event.global[p] = !0));
            },
            remove: function (e, t, n, o, i) {
                var r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d,
                    f,
                    p,
                    h,
                    g,
                    m = U.hasData(e) && U.get(e);
                if (m && (l = m.events)) {
                    for (c = (t = (t || "").match(O) || [""]).length; c--; )
                        if (((p = g = (s = we.exec(t[c]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
                            for (d = k.event.special[p] || {}, f = l[(p = (o ? d.delegateType : d.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--; )
                                (u = f[r]),
                                    (!i && g !== u.origType) ||
                                        (n && n.guid !== u.guid) ||
                                        (s && !s.test(u.namespace)) ||
                                        (o && o !== u.selector && ("**" !== o || !u.selector)) ||
                                        (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !f.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || k.removeEvent(e, p, m.handle), delete l[p]);
                        } else for (p in l) k.event.remove(e, p + t[c], n, o, !0);
                    k.isEmptyObject(l) && U.remove(e, "handle events");
                }
            },
            dispatch: function (e) {
                var t,
                    n,
                    o,
                    i,
                    r,
                    a,
                    s = new Array(arguments.length),
                    l = k.event.fix(e),
                    c = (U.get(this, "events") || Object.create(null))[l.type] || [],
                    u = k.event.special[l.type] || {};
                for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                    for (a = k.event.handlers.call(this, l, c), t = 0; (i = a[t++]) && !l.isPropagationStopped(); )
                        for (l.currentTarget = i.elem, n = 0; (r = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                            (l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace)) ||
                                ((l.handleObj = r), (l.data = r.data), void 0 !== (o = ((k.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (l.result = o) && (l.preventDefault(), l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l), l.result;
                }
            },
            handlers: function (e, t) {
                var n,
                    o,
                    i,
                    r,
                    a,
                    s = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[(i = (o = t[n]).selector + " ")] && (a[i] = o.needsContext ? -1 < k(i, this).index(c) : k.find(i, this, null, [c]).length), a[i] && r.push(o);
                            r.length && s.push({ elem: c, handlers: r });
                        }
                return (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s;
            },
            addProp: function (t, e) {
                Object.defineProperty(k.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: b(e)
                        ? function () {
                              if (this.originalEvent) return e(this.originalEvent);
                          }
                        : function () {
                              if (this.originalEvent) return this.originalEvent[t];
                          },
                    set: function (e) {
                        Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                    },
                });
            },
            fix: function (e) {
                return e[k.expando] ? e : new k.Event(e);
            },
            special: {
                load: { noBubble: !0 },
                click: {
                    setup: function (e) {
                        var t = this || e;
                        return ue.test(t.type) && t.click && E(t, "input") && Ee(t, "click", Ce), !1;
                    },
                    trigger: function (e) {
                        var t = this || e;
                        return ue.test(t.type) && t.click && E(t, "input") && Ee(t, "click"), !0;
                    },
                    _default: function (e) {
                        var t = e.target;
                        return (ue.test(t.type) && t.click && E(t, "input") && U.get(t, "click")) || E(t, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                    },
                },
            },
        }),
            (k.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }),
            (k.Event = function (e, t) {
                if (!(this instanceof k.Event)) return new k.Event(e, t);
                e && e.type
                    ? ((this.originalEvent = e),
                      (this.type = e.type),
                      (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Te),
                      (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                      (this.currentTarget = e.currentTarget),
                      (this.relatedTarget = e.relatedTarget))
                    : (this.type = e),
                    t && k.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[k.expando] = !0);
            }),
            (k.Event.prototype = {
                constructor: k.Event,
                isDefaultPrevented: Te,
                isPropagationStopped: Te,
                isImmediatePropagationStopped: Te,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                },
            }),
            k.each(
                {
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function (e) {
                        var t = e.button;
                        return null == e.which && be.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && xe.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                    },
                },
                k.event.addProp
            ),
            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                k.event.special[e] = {
                    setup: function () {
                        return Ee(this, e, Se), !1;
                    },
                    trigger: function () {
                        return Ee(this, e), !0;
                    },
                    delegateType: t,
                };
            }),
            k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
                k.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            o = e.handleObj;
                        return (n && (n === this || k.contains(this, n))) || ((e.type = o.origType), (t = o.handler.apply(this, arguments)), (e.type = i)), t;
                    },
                };
            }),
            k.fn.extend({
                on: function (e, t, n, o) {
                    return ke(this, e, t, n, o);
                },
                one: function (e, t, n, o) {
                    return ke(this, e, t, n, o, 1);
                },
                off: function (e, t, n) {
                    var o, i;
                    if (e && e.preventDefault && e.handleObj) return (o = e.handleObj), k(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                    if ("object" != typeof e)
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = Te),
                            this.each(function () {
                                k.event.remove(this, e, n, t);
                            })
                        );
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                },
            });
        var $e = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function je(e, t) {
            return (E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0]) || e;
        }
        function Le(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function De(e) {
            return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
        }
        function Me(e, t) {
            var n, o, i, r, a, s;
            if (1 === t.nodeType) {
                if (U.hasData(e) && (s = U.get(e).events)) for (i in (U.remove(t, "handle events"), s)) for (n = 0, o = s[i].length; n < o; n++) k.event.add(t, i, s[i][n]);
                Q.hasData(e) && ((r = Q.access(e)), (a = k.extend({}, r)), Q.set(t, a));
            }
        }
        function Oe(n, o, i, r) {
            o = m(o);
            var e,
                t,
                a,
                s,
                l,
                c,
                u = 0,
                d = n.length,
                f = d - 1,
                p = o[0],
                h = b(p);
            if (h || (1 < d && "string" == typeof p && !y.checkClone && Ae.test(p)))
                return n.each(function (e) {
                    var t = n.eq(e);
                    h && (o[0] = p.call(this, e, t.html())), Oe(t, o, i, r);
                });
            if (d && ((t = (e = ye(o, n[0].ownerDocument, !1, n, r)).firstChild), 1 === e.childNodes.length && (e = t), t || r)) {
                for (s = (a = k.map(ge(e, "script"), Le)).length; u < d; u++) (l = e), u !== f && ((l = k.clone(l, !0, !0)), s && k.merge(a, ge(l, "script"))), i.call(n[u], l, u);
                if (s)
                    for (c = a[a.length - 1].ownerDocument, k.map(a, De), u = 0; u < s; u++)
                        (l = a[u]),
                            fe.test(l.type || "") &&
                                !U.access(l, "globalEval") &&
                                k.contains(c, l) &&
                                (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && !l.noModule && k._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : x(l.textContent.replace(Pe, ""), l, c));
            }
            return n;
        }
        function qe(e, t, n) {
            for (var o, i = t ? k.filter(t, e) : e, r = 0; null != (o = i[r]); r++) n || 1 !== o.nodeType || k.cleanData(ge(o)), o.parentNode && (n && oe(o) && me(ge(o, "script")), o.parentNode.removeChild(o));
            return e;
        }
        k.extend({
            htmlPrefilter: function (e) {
                return e;
            },
            clone: function (e, t, n) {
                var o,
                    i,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u = e.cloneNode(!0),
                    d = oe(e);
                if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || k.isXMLDoc(e)))
                    for (a = ge(u), o = 0, i = (r = ge(e)).length; o < i; o++)
                        (s = r[o]), "input" === (c = (l = a[o]).nodeName.toLowerCase()) && ue.test(s.type) ? (l.checked = s.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = s.defaultValue);
                if (t)
                    if (n) for (r = r || ge(e), a = a || ge(u), o = 0, i = r.length; o < i; o++) Me(r[o], a[o]);
                    else Me(e, u);
                return 0 < (a = ge(u, "script")).length && me(a, !d && ge(e, "script")), u;
            },
            cleanData: function (e) {
                for (var t, n, o, i = k.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (V(n)) {
                        if ((t = n[U.expando])) {
                            if (t.events) for (o in t.events) i[o] ? k.event.remove(n, o) : k.removeEvent(n, o, t.handle);
                            n[U.expando] = void 0;
                        }
                        n[Q.expando] && (n[Q.expando] = void 0);
                    }
            },
        }),
            k.fn.extend({
                detach: function (e) {
                    return qe(this, e, !0);
                },
                remove: function (e) {
                    return qe(this, e);
                },
                text: function (e) {
                    return R(
                        this,
                        function (e) {
                            return void 0 === e
                                ? k.text(this)
                                : this.empty().each(function () {
                                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                  });
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                append: function () {
                    return Oe(this, arguments, function (e) {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || je(this, e).appendChild(e);
                    });
                },
                prepend: function () {
                    return Oe(this, arguments, function (e) {
                        var t;
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = je(this, e)).insertBefore(e, t.firstChild);
                    });
                },
                before: function () {
                    return Oe(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                },
                after: function () {
                    return Oe(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ge(e, !1)), (e.textContent = ""));
                    return this;
                },
                clone: function (e, t) {
                    return (
                        (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return k.clone(this, e, t);
                        })
                    );
                },
                html: function (e) {
                    return R(
                        this,
                        function (e) {
                            var t = this[0] || {},
                                n = 0,
                                o = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !$e.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = k.htmlPrefilter(e);
                                try {
                                    for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ge(t, !1)), (t.innerHTML = e));
                                    t = 0;
                                } catch (e) {}
                            }
                            t && this.empty().append(e);
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var n = [];
                    return Oe(
                        this,
                        arguments,
                        function (e) {
                            var t = this.parentNode;
                            k.inArray(this, n) < 0 && (k.cleanData(ge(this)), t && t.replaceChild(e, this));
                        },
                        n
                    );
                },
            }),
            k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
                k.fn[e] = function (e) {
                    for (var t, n = [], o = k(e), i = o.length - 1, r = 0; r <= i; r++) (t = r === i ? this : this.clone(!0)), k(o[r])[a](t), l.apply(n, t.get());
                    return this.pushStack(n);
                };
            });
        function Ne(e, t, n) {
            var o,
                i,
                r = {};
            for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((o = n.call(e)), t)) e.style[i] = r[i];
            return o;
        }
        var He,
            Ie,
            Fe,
            ze,
            Re,
            _e,
            Be,
            We,
            Xe = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
            Ve = function (e) {
                var t = e.ownerDocument.defaultView;
                return (t && t.opener) || (t = T), t.getComputedStyle(e);
            },
            Ye = new RegExp(te.join("|"), "i");
        function Ue(e, t, n) {
            var o,
                i,
                r,
                a,
                s = e.style;
            return (
                (n = n || Ve(e)) &&
                    ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
                    !y.pixelBoxStyles() && Xe.test(a) && Ye.test(t) && ((o = s.width), (i = s.minWidth), (r = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = o), (s.minWidth = i), (s.maxWidth = r))),
                void 0 !== a ? a + "" : a
            );
        }
        function Qe(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get;
                },
            };
        }
        function Ke() {
            var e;
            We &&
                ((Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (We.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                ne.appendChild(Be).appendChild(We),
                (e = T.getComputedStyle(We)),
                (He = "1%" !== e.top),
                (_e = 12 === Ze(e.marginLeft)),
                (We.style.right = "60%"),
                (ze = 36 === Ze(e.right)),
                (Ie = 36 === Ze(e.width)),
                (We.style.position = "absolute"),
                (Fe = 12 === Ze(We.offsetWidth / 3)),
                ne.removeChild(Be),
                (We = null));
        }
        function Ze(e) {
            return Math.round(parseFloat(e));
        }
        (Be = S.createElement("div")),
            (We = S.createElement("div")).style &&
                ((We.style.backgroundClip = "content-box"),
                (We.cloneNode(!0).style.backgroundClip = ""),
                (y.clearCloneStyle = "content-box" === We.style.backgroundClip),
                k.extend(y, {
                    boxSizingReliable: function () {
                        return Ke(), Ie;
                    },
                    pixelBoxStyles: function () {
                        return Ke(), ze;
                    },
                    pixelPosition: function () {
                        return Ke(), He;
                    },
                    reliableMarginLeft: function () {
                        return Ke(), _e;
                    },
                    scrollboxSize: function () {
                        return Ke(), Fe;
                    },
                    reliableTrDimensions: function () {
                        var e, t, n, o;
                        return (
                            null == Re &&
                                ((e = S.createElement("table")),
                                (t = S.createElement("tr")),
                                (n = S.createElement("div")),
                                (e.style.cssText = "position:absolute;left:-11111px"),
                                (t.style.height = "1px"),
                                (n.style.height = "9px"),
                                ne.appendChild(e).appendChild(t).appendChild(n),
                                (o = T.getComputedStyle(t)),
                                (Re = 3 < parseInt(o.height)),
                                ne.removeChild(e)),
                            Re
                        );
                    },
                }));
        var Ge = ["Webkit", "Moz", "ms"],
            Je = S.createElement("div").style,
            et = {};
        function tt(e) {
            return (
                k.cssProps[e] ||
                et[e] ||
                (e in Je
                    ? e
                    : (et[e] =
                          (function (e) {
                              for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; ) if ((e = Ge[n] + t) in Je) return e;
                          })(e) || e))
            );
        }
        var nt = /^(none|table(?!-c[ea]).+)/,
            ot = /^--/,
            it = { position: "absolute", visibility: "hidden", display: "block" },
            rt = { letterSpacing: "0", fontWeight: "400" };
        function at(e, t, n) {
            var o = ee.exec(t);
            return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
        }
        function st(e, t, n, o, i, r) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                l = 0;
            if (n === (o ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
                "margin" === n && (l += k.css(e, n + te[a], !0, i)),
                    o
                        ? ("content" === n && (l -= k.css(e, "padding" + te[a], !0, i)), "margin" !== n && (l -= k.css(e, "border" + te[a] + "Width", !0, i)))
                        : ((l += k.css(e, "padding" + te[a], !0, i)), "padding" !== n ? (l += k.css(e, "border" + te[a] + "Width", !0, i)) : (s += k.css(e, "border" + te[a] + "Width", !0, i)));
            return !o && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5)) || 0), l;
        }
        function lt(e, t, n) {
            var o = Ve(e),
                i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, o),
                r = i,
                a = Ue(e, t, o),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Xe.test(a)) {
                if (!n) return a;
                a = "auto";
            }
            return (
                ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && E(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === k.css(e, "display", !1, o))) &&
                    e.getClientRects().length &&
                    ((i = "border-box" === k.css(e, "boxSizing", !1, o)), (r = s in e) && (a = e[s])),
                (a = parseFloat(a) || 0) + st(e, t, n || (i ? "border" : "content"), r, o, a) + "px"
            );
        }
        function ct(e, t, n, o, i) {
            return new ct.prototype.init(e, t, n, o, i);
        }
        k.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ue(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i,
                        r,
                        a,
                        s = X(t),
                        l = ot.test(t),
                        c = e.style;
                    if ((l || (t = tt(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : c[t];
                    "string" == (r = typeof n) && (i = ee.exec(n)) && i[1] && ((n = ae(e, t, i)), (r = "number")),
                        null != n &&
                            n == n &&
                            ("number" !== r || l || (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
                            y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                            (a && "set" in a && void 0 === (n = a.set(e, n, o))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                }
            },
            css: function (e, t, n, o) {
                var i,
                    r,
                    a,
                    s = X(t);
                return (
                    ot.test(t) || (t = tt(s)),
                    (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                    void 0 === i && (i = Ue(e, t, o)),
                    "normal" === i && t in rt && (i = rt[t]),
                    "" === n || n ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i) : i
                );
            },
        }),
            k.each(["height", "width"], function (e, l) {
                k.cssHooks[l] = {
                    get: function (e, t, n) {
                        if (t)
                            return !nt.test(k.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                ? lt(e, l, n)
                                : Ne(e, it, function () {
                                      return lt(e, l, n);
                                  });
                    },
                    set: function (e, t, n) {
                        var o,
                            i = Ve(e),
                            r = !y.scrollboxSize() && "absolute" === i.position,
                            a = (r || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                            s = n ? st(e, l, n, a, i) : 0;
                        return (
                            a && r && (s -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(i[l]) - st(e, l, "border", !1, i) - 0.5)),
                            s && (o = ee.exec(t)) && "px" !== (o[3] || "px") && ((e.style[l] = t), (t = k.css(e, l))),
                            at(0, t, s)
                        );
                    },
                };
            }),
            (k.cssHooks.marginLeft = Qe(y.reliableMarginLeft, function (e, t) {
                if (t)
                    return (
                        (parseFloat(Ue(e, "marginLeft")) ||
                            e.getBoundingClientRect().left -
                                Ne(e, { marginLeft: 0 }, function () {
                                    return e.getBoundingClientRect().left;
                                })) + "px"
                    );
            })),
            k.each({ margin: "", padding: "", border: "Width" }, function (i, r) {
                (k.cssHooks[i + r] = {
                    expand: function (e) {
                        for (var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + te[t] + r] = o[t] || o[t - 2] || o[0];
                        return n;
                    },
                }),
                    "margin" !== i && (k.cssHooks[i + r].set = at);
            }),
            k.fn.extend({
                css: function (e, t) {
                    return R(
                        this,
                        function (e, t, n) {
                            var o,
                                i,
                                r = {},
                                a = 0;
                            if (Array.isArray(t)) {
                                for (o = Ve(e), i = t.length; a < i; a++) r[t[a]] = k.css(e, t[a], !1, o);
                                return r;
                            }
                            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                        },
                        e,
                        t,
                        1 < arguments.length
                    );
                },
            }),
            (((k.Tween = ct).prototype = {
                constructor: ct,
                init: function (e, t, n, o, i, r) {
                    (this.elem = e), (this.prop = n), (this.easing = i || k.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = o), (this.unit = r || (k.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                    var e = ct.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ct.propHooks._default.get(this);
                },
                run: function (e) {
                    var t,
                        n = ct.propHooks[this.prop];
                    return (
                        this.options.duration ? (this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                        (this.now = (this.end - this.start) * t + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : ct.propHooks._default.set(this),
                        this
                    );
                },
            }).init.prototype = ct.prototype),
            ((ct.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                    },
                    set: function (e) {
                        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!k.cssHooks[e.prop] && null == e.elem.style[tt(e.prop)]) ? (e.elem[e.prop] = e.now) : k.style(e.elem, e.prop, e.now + e.unit);
                    },
                },
            }).scrollTop = ct.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
            }),
            (k.easing = {
                linear: function (e) {
                    return e;
                },
                swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (k.fx = ct.prototype.init),
            (k.fx.step = {});
        var ut,
            dt,
            ft,
            pt,
            ht = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
        function mt() {
            dt && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(mt) : T.setTimeout(mt, k.fx.interval), k.fx.tick());
        }
        function vt() {
            return (
                T.setTimeout(function () {
                    ut = void 0;
                }),
                (ut = Date.now())
            );
        }
        function yt(e, t) {
            var n,
                o = 0,
                i = { height: e };
            for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = te[o])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
        }
        function bt(e, t, n) {
            for (var o, i = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), r = 0, a = i.length; r < a; r++) if ((o = i[r].call(n, t, e))) return o;
        }
        function xt(r, e, t) {
            var n,
                a,
                o = 0,
                i = xt.prefilters.length,
                s = k.Deferred().always(function () {
                    delete l.elem;
                }),
                l = function () {
                    if (a) return !1;
                    for (var e = ut || vt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), o = 0, i = c.tweens.length; o < i; o++) c.tweens[o].run(n);
                    return s.notifyWith(r, [c, n, t]), n < 1 && i ? t : (i || s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c]), !1);
                },
                c = s.promise({
                    elem: r,
                    props: k.extend({}, e),
                    opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: ut || vt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function (e, t) {
                        var n = k.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n;
                    },
                    stop: function (e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; t < n; t++) c.tweens[t].run(1);
                        return e ? (s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c, e])) : s.rejectWith(r, [c, e]), this;
                    },
                }),
                u = c.props;
            for (
                (function (e, t) {
                    var n, o, i, r, a;
                    for (n in e)
                        if (((i = t[(o = X(n))]), (r = e[n]), Array.isArray(r) && ((i = r[1]), (r = e[n] = r[0])), n !== o && ((e[o] = r), delete e[n]), (a = k.cssHooks[o]) && ("expand" in a)))
                            for (n in ((r = a.expand(r)), delete e[o], r)) (n in e) || ((e[n] = r[n]), (t[n] = i));
                        else t[o] = i;
                })(u, c.opts.specialEasing);
                o < i;
                o++
            )
                if ((n = xt.prefilters[o].call(c, r, u, c.opts))) return b(n.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return (
                k.map(u, bt, c),
                b(c.opts.start) && c.opts.start.call(r, c),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                k.fx.timer(k.extend(l, { elem: r, anim: c, queue: c.opts.queue })),
                c
            );
        }
        (k.Animation = k.extend(xt, {
            tweeners: {
                "*": [
                    function (e, t) {
                        var n = this.createTween(e, t);
                        return ae(n.elem, e, ee.exec(t), n), n;
                    },
                ],
            },
            tweener: function (e, t) {
                for (var n, o = 0, i = (e = b(e) ? ((t = e), ["*"]) : e.match(O)).length; o < i; o++) (n = e[o]), (xt.tweeners[n] = xt.tweeners[n] || []), xt.tweeners[n].unshift(t);
            },
            prefilters: [
                function (e, t, n) {
                    var o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        c,
                        u,
                        d = "width" in t || "height" in t,
                        f = this,
                        p = {},
                        h = e.style,
                        g = e.nodeType && re(e),
                        m = U.get(e, "fxshow");
                    for (o in (n.queue ||
                        (null == (a = k._queueHooks(e, "fx")).unqueued &&
                            ((a.unqueued = 0),
                            (s = a.empty.fire),
                            (a.empty.fire = function () {
                                a.unqueued || s();
                            })),
                        a.unqueued++,
                        f.always(function () {
                            f.always(function () {
                                a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                            });
                        })),
                    t))
                        if (((i = t[o]), ht.test(i))) {
                            if ((delete t[o], (r = r || "toggle" === i), i === (g ? "hide" : "show"))) {
                                if ("show" !== i || !m || void 0 === m[o]) continue;
                                g = !0;
                            }
                            p[o] = (m && m[o]) || k.style(e, o);
                        }
                    if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
                        for (o in (d &&
                            1 === e.nodeType &&
                            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                            null == (c = m && m.display) && (c = U.get(e, "display")),
                            "none" === (u = k.css(e, "display")) && (c ? (u = c) : (le([e], !0), (c = e.style.display || c), (u = k.css(e, "display")), le([e]))),
                            ("inline" === u || ("inline-block" === u && null != c)) &&
                                "none" === k.css(e, "float") &&
                                (l ||
                                    (f.done(function () {
                                        h.display = c;
                                    }),
                                    null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                                (h.display = "inline-block"))),
                        n.overflow &&
                            ((h.overflow = "hidden"),
                            f.always(function () {
                                (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                            })),
                        (l = !1),
                        p))
                            l ||
                                (m ? "hidden" in m && (g = m.hidden) : (m = U.access(e, "fxshow", { display: c })),
                                r && (m.hidden = !g),
                                g && le([e], !0),
                                f.done(function () {
                                    for (o in (g || le([e]), U.remove(e, "fxshow"), p)) k.style(e, o, p[o]);
                                })),
                                (l = bt(g ? m[o] : 0, o, f)),
                                o in m || ((m[o] = l.start), g && ((l.end = l.start), (l.start = 0)));
                },
            ],
            prefilter: function (e, t) {
                t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
            },
        })),
            (k.speed = function (e, t, n) {
                var o = e && "object" == typeof e ? k.extend({}, e) : { complete: n || (!n && t) || (b(e) && e), duration: e, easing: (n && t) || (t && !b(t) && t) };
                return (
                    k.fx.off ? (o.duration = 0) : "number" != typeof o.duration && (o.duration in k.fx.speeds ? (o.duration = k.fx.speeds[o.duration]) : (o.duration = k.fx.speeds._default)),
                    (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
                    (o.old = o.complete),
                    (o.complete = function () {
                        b(o.old) && o.old.call(this), o.queue && k.dequeue(this, o.queue);
                    }),
                    o
                );
            }),
            k.fn.extend({
                fadeTo: function (e, t, n, o) {
                    return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, o);
                },
                animate: function (t, e, n, o) {
                    function i() {
                        var e = xt(this, k.extend({}, t), a);
                        (r || U.get(this, "finish")) && e.stop(!0);
                    }
                    var r = k.isEmptyObject(t),
                        a = k.speed(e, n, o);
                    return (i.finish = i), r || !1 === a.queue ? this.each(i) : this.queue(a.queue, i);
                },
                stop: function (i, e, r) {
                    function a(e) {
                        var t = e.stop;
                        delete e.stop, t(r);
                    }
                    return (
                        "string" != typeof i && ((r = e), (e = i), (i = void 0)),
                        e && this.queue(i || "fx", []),
                        this.each(function () {
                            var e = !0,
                                t = null != i && i + "queueHooks",
                                n = k.timers,
                                o = U.get(this);
                            if (t) o[t] && o[t].stop && a(o[t]);
                            else for (t in o) o[t] && o[t].stop && gt.test(t) && a(o[t]);
                            for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
                            (!e && r) || k.dequeue(this, i);
                        })
                    );
                },
                finish: function (a) {
                    return (
                        !1 !== a && (a = a || "fx"),
                        this.each(function () {
                            var e,
                                t = U.get(this),
                                n = t[a + "queue"],
                                o = t[a + "queueHooks"],
                                i = k.timers,
                                r = n ? n.length : 0;
                            for (t.finish = !0, k.queue(this, a, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                            for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                            delete t.finish;
                        })
                    );
                },
            }),
            k.each(["toggle", "show", "hide"], function (e, o) {
                var i = k.fn[o];
                k.fn[o] = function (e, t, n) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(yt(o, !0), e, t, n);
                };
            }),
            k.each({ slideDown: yt("show"), slideUp: yt("hide"), slideToggle: yt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, o) {
                k.fn[e] = function (e, t, n) {
                    return this.animate(o, e, t, n);
                };
            }),
            (k.timers = []),
            (k.fx.tick = function () {
                var e,
                    t = 0,
                    n = k.timers;
                for (ut = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || k.fx.stop(), (ut = void 0);
            }),
            (k.fx.timer = function (e) {
                k.timers.push(e), k.fx.start();
            }),
            (k.fx.interval = 13),
            (k.fx.start = function () {
                dt || ((dt = !0), mt());
            }),
            (k.fx.stop = function () {
                dt = null;
            }),
            (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (k.fn.delay = function (o, e) {
                return (
                    (o = (k.fx && k.fx.speeds[o]) || o),
                    (e = e || "fx"),
                    this.queue(e, function (e, t) {
                        var n = T.setTimeout(e, o);
                        t.stop = function () {
                            T.clearTimeout(n);
                        };
                    })
                );
            }),
            (ft = S.createElement("input")),
            (pt = S.createElement("select").appendChild(S.createElement("option"))),
            (ft.type = "checkbox"),
            (y.checkOn = "" !== ft.value),
            (y.optSelected = pt.selected),
            ((ft = S.createElement("input")).value = "t"),
            (ft.type = "radio"),
            (y.radioValue = "t" === ft.value);
        var wt,
            Ct = k.expr.attrHandle;
        k.fn.extend({
            attr: function (e, t) {
                return R(this, k.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function (e) {
                return this.each(function () {
                    k.removeAttr(this, e);
                });
            },
        }),
            k.extend({
                attr: function (e, t, n) {
                    var o,
                        i,
                        r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return void 0 === e.getAttribute
                            ? k.prop(e, t, n)
                            : ((1 === r && k.isXMLDoc(e)) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? wt : void 0)),
                              void 0 !== n
                                  ? null === n
                                      ? void k.removeAttr(e, t)
                                      : i && "set" in i && void 0 !== (o = i.set(e, n, t))
                                      ? o
                                      : (e.setAttribute(t, n + ""), n)
                                  : !(i && "get" in i && null !== (o = i.get(e, t))) && null == (o = k.find.attr(e, t))
                                  ? void 0
                                  : o);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!y.radioValue && "radio" === t && E(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var n,
                        o = 0,
                        i = t && t.match(O);
                    if (i && 1 === e.nodeType) for (; (n = i[o++]); ) e.removeAttribute(n);
                },
            }),
            (wt = {
                set: function (e, t, n) {
                    return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
                },
            }),
            k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var a = Ct[t] || k.find.attr;
                Ct[t] = function (e, t, n) {
                    var o,
                        i,
                        r = t.toLowerCase();
                    return n || ((i = Ct[r]), (Ct[r] = o), (o = null != a(e, t, n) ? r : null), (Ct[r] = i)), o;
                };
            });
        var Tt = /^(?:input|select|textarea|button)$/i,
            St = /^(?:a|area)$/i;
        function kt(e) {
            return (e.match(O) || []).join(" ");
        }
        function Et(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function $t(e) {
            return Array.isArray(e) ? e : ("string" == typeof e && e.match(O)) || [];
        }
        k.fn.extend({
            prop: function (e, t) {
                return R(this, k.prop, e, t, 1 < arguments.length);
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[k.propFix[e] || e];
                });
            },
        }),
            k.extend({
                prop: function (e, t, n) {
                    var o,
                        i,
                        r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return (
                            (1 === r && k.isXMLDoc(e)) || ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                            void 0 !== n ? (i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e[t] = n)) : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = k.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Tt.test(e.nodeName) || (St.test(e.nodeName) && e.href) ? 0 : -1;
                        },
                    },
                },
                propFix: { for: "htmlFor", class: "className" },
            }),
            y.optSelected ||
                (k.propHooks.selected = {
                    get: function (e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                    },
                    set: function (e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                    },
                }),
            k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                k.propFix[this.toLowerCase()] = this;
            }),
            k.fn.extend({
                addClass: function (t) {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l = 0;
                    if (b(t))
                        return this.each(function (e) {
                            k(this).addClass(t.call(this, e, Et(this)));
                        });
                    if ((e = $t(t)).length)
                        for (; (n = this[l++]); )
                            if (((i = Et(n)), (o = 1 === n.nodeType && " " + kt(i) + " "))) {
                                for (a = 0; (r = e[a++]); ) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                                i !== (s = kt(o)) && n.setAttribute("class", s);
                            }
                    return this;
                },
                removeClass: function (t) {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l = 0;
                    if (b(t))
                        return this.each(function (e) {
                            k(this).removeClass(t.call(this, e, Et(this)));
                        });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = $t(t)).length)
                        for (; (n = this[l++]); )
                            if (((i = Et(n)), (o = 1 === n.nodeType && " " + kt(i) + " "))) {
                                for (a = 0; (r = e[a++]); ) for (; -1 < o.indexOf(" " + r + " "); ) o = o.replace(" " + r + " ", " ");
                                i !== (s = kt(o)) && n.setAttribute("class", s);
                            }
                    return this;
                },
                toggleClass: function (i, t) {
                    var r = typeof i,
                        a = "string" == r || Array.isArray(i);
                    return "boolean" == typeof t && a
                        ? t
                            ? this.addClass(i)
                            : this.removeClass(i)
                        : b(i)
                        ? this.each(function (e) {
                              k(this).toggleClass(i.call(this, e, Et(this), t), t);
                          })
                        : this.each(function () {
                              var e, t, n, o;
                              if (a) for (t = 0, n = k(this), o = $t(i); (e = o[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                              else (void 0 !== i && "boolean" != r) || ((e = Et(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", (!e && !1 !== i && U.get(this, "__className__")) || ""));
                          });
                },
                hasClass: function (e) {
                    for (var t, n = 0, o = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + kt(Et(t)) + " ").indexOf(o)) return !0;
                    return !1;
                },
            });
        var At = /\r/g;
        k.fn.extend({
            val: function (n) {
                var o,
                    e,
                    i,
                    t = this[0];
                return arguments.length
                    ? ((i = b(n)),
                      this.each(function (e) {
                          var t;
                          1 === this.nodeType &&
                              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                                  ? (t = "")
                                  : "number" == typeof t
                                  ? (t += "")
                                  : Array.isArray(t) &&
                                    (t = k.map(t, function (e) {
                                        return null == e ? "" : e + "";
                                    })),
                              ((o = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in o && void 0 !== o.set(this, t, "value")) || (this.value = t));
                      }))
                    : t
                    ? (o = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in o && void 0 !== (e = o.get(t, "value"))
                        ? e
                        : "string" == typeof (e = t.value)
                        ? e.replace(At, "")
                        : null == e
                        ? ""
                        : e
                    : void 0;
            },
        }),
            k.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = k.find.attr(e, "value");
                            return null != t ? t : kt(k.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type, a = r ? null : [], s = r ? i + 1 : o.length, l = i < 0 ? s : r ? i : 0; l < s; l++)
                                if (((n = o[l]).selected || l === i) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                    if (((t = k(n).val()), r)) return t;
                                    a.push(t);
                                }
                            return a;
                        },
                        set: function (e, t) {
                            for (var n, o, i = e.options, r = k.makeArray(t), a = i.length; a--; ) ((o = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(o), r)) && (n = !0);
                            return n || (e.selectedIndex = -1), r;
                        },
                    },
                },
            }),
            k.each(["radio", "checkbox"], function () {
                (k.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return (e.checked = -1 < k.inArray(k(e).val(), t));
                    },
                }),
                    y.checkOn ||
                        (k.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value;
                        });
            }),
            (y.focusin = "onfocusin" in T);
        function Pt(e) {
            e.stopPropagation();
        }
        var jt = /^(?:focusinfocus|focusoutblur)$/;
        k.extend(k.event, {
            trigger: function (e, t, n, o) {
                var i,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d = [n || S],
                    f = v.call(e, "type") ? e.type : e,
                    p = v.call(e, "namespace") ? e.namespace.split(".") : [],
                    h = (u = r = n = n || S);
                if (
                    3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !jt.test(f + k.event.triggered) &&
                    (-1 < f.indexOf(".") && ((f = (p = f.split(".")).shift()), p.sort()),
                    (s = f.indexOf(":") < 0 && "on" + f),
                    ((e = e[k.expando] ? e : new k.Event(f, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                    (e.namespace = p.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : k.makeArray(t, [e])),
                    (c = k.event.special[f] || {}),
                    o || !c.trigger || !1 !== c.trigger.apply(n, t))
                ) {
                    if (!o && !c.noBubble && !g(n)) {
                        for (a = c.delegateType || f, jt.test(a + f) || (h = h.parentNode); h; h = h.parentNode) d.push(h), (r = h);
                        r === (n.ownerDocument || S) && d.push(r.defaultView || r.parentWindow || T);
                    }
                    for (i = 0; (h = d[i++]) && !e.isPropagationStopped(); )
                        (u = h),
                            (e.type = 1 < i ? a : c.bindType || f),
                            (l = (U.get(h, "events") || Object.create(null))[e.type] && U.get(h, "handle")) && l.apply(h, t),
                            (l = s && h[s]) && l.apply && V(h) && ((e.result = l.apply(h, t)), !1 === e.result && e.preventDefault());
                    return (
                        (e.type = f),
                        o ||
                            e.isDefaultPrevented() ||
                            (c._default && !1 !== c._default.apply(d.pop(), t)) ||
                            !V(n) ||
                            (s &&
                                b(n[f]) &&
                                !g(n) &&
                                ((r = n[s]) && (n[s] = null),
                                (k.event.triggered = f),
                                e.isPropagationStopped() && u.addEventListener(f, Pt),
                                n[f](),
                                e.isPropagationStopped() && u.removeEventListener(f, Pt),
                                (k.event.triggered = void 0),
                                r && (n[s] = r))),
                        e.result
                    );
                }
            },
            simulate: function (e, t, n) {
                var o = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
                k.event.trigger(o, null, t);
            },
        }),
            k.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        k.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return k.event.trigger(e, t, n, !0);
                },
            }),
            y.focusin ||
                k.each({ focus: "focusin", blur: "focusout" }, function (n, o) {
                    function i(e) {
                        k.event.simulate(o, e.target, k.event.fix(e));
                    }
                    k.event.special[o] = {
                        setup: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = U.access(e, o);
                            t || e.addEventListener(n, i, !0), U.access(e, o, (t || 0) + 1);
                        },
                        teardown: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = U.access(e, o) - 1;
                            t ? U.access(e, o, t) : (e.removeEventListener(n, i, !0), U.remove(e, o));
                        },
                    };
                });
        var Lt = T.location,
            Dt = { guid: Date.now() },
            Mt = /\?/;
        k.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = new T.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
                t = void 0;
            }
            return (t && !t.getElementsByTagName("parsererror").length) || k.error("Invalid XML: " + e), t;
        };
        var Ot = /\[\]$/,
            qt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Ht = /^(?:input|select|textarea|keygen)/i;
        (k.param = function (e, t) {
            function n(e, t) {
                var n = b(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            }
            var o,
                i = [];
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
                k.each(e, function () {
                    n(this.name, this.value);
                });
            else
                for (o in e)
                    !(function n(o, e, i, r) {
                        var t;
                        if (Array.isArray(e))
                            k.each(e, function (e, t) {
                                i || Ot.test(o) ? r(o, t) : n(o + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r);
                            });
                        else if (i || "object" !== w(e)) r(o, e);
                        else for (t in e) n(o + "[" + t + "]", e[t], i, r);
                    })(o, e[o], t, n);
            return i.join("&");
        }),
            k.fn.extend({
                serialize: function () {
                    return k.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = k.prop(this, "elements");
                        return e ? k.makeArray(e) : this;
                    })
                        .filter(function () {
                            var e = this.type;
                            return this.name && !k(this).is(":disabled") && Ht.test(this.nodeName) && !Nt.test(e) && (this.checked || !ue.test(e));
                        })
                        .map(function (e, t) {
                            var n = k(this).val();
                            return null == n
                                ? null
                                : Array.isArray(n)
                                ? k.map(n, function (e) {
                                      return { name: t.name, value: e.replace(qt, "\r\n") };
                                  })
                                : { name: t.name, value: n.replace(qt, "\r\n") };
                        })
                        .get();
                },
            });
        var It = /%20/g,
            Ft = /#.*$/,
            zt = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            _t = /^(?:GET|HEAD)$/,
            Bt = /^\/\//,
            Wt = {},
            Xt = {},
            Vt = "*/".concat("*"),
            Yt = S.createElement("a");
        function Ut(r) {
            return function (e, t) {
                "string" != typeof e && ((t = e), (e = "*"));
                var n,
                    o = 0,
                    i = e.toLowerCase().match(O) || [];
                if (b(t)) for (; (n = i[o++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t);
            };
        }
        function Qt(t, i, r, a) {
            var s = {},
                l = t === Xt;
            function c(e) {
                var o;
                return (
                    (s[e] = !0),
                    k.each(t[e] || [], function (e, t) {
                        var n = t(i, r, a);
                        return "string" != typeof n || l || s[n] ? (l ? !(o = n) : void 0) : (i.dataTypes.unshift(n), c(n), !1);
                    }),
                    o
                );
            }
            return c(i.dataTypes[0]) || (!s["*"] && c("*"));
        }
        function Kt(e, t) {
            var n,
                o,
                i = k.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : (o = o || {}))[n] = t[n]);
            return o && k.extend(!0, e, o), e;
        }
        (Yt.href = Lt.href),
            k.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Lt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": Vt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                    return t ? Kt(Kt(e, k.ajaxSettings), t) : Kt(k.ajaxSettings, e);
                },
                ajaxPrefilter: Ut(Wt),
                ajaxTransport: Ut(Xt),
                ajax: function (e, t) {
                    "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                    var u,
                        d,
                        f,
                        n,
                        p,
                        o,
                        h,
                        g,
                        i,
                        r,
                        m = k.ajaxSetup({}, t),
                        v = m.context || m,
                        y = m.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                        b = k.Deferred(),
                        x = k.Callbacks("once memory"),
                        w = m.statusCode || {},
                        a = {},
                        s = {},
                        l = "canceled",
                        C = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (h) {
                                    if (!n) for (n = {}; (t = Rt.exec(f)); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = n[e.toLowerCase() + " "];
                                }
                                return null == t ? null : t.join(", ");
                            },
                            getAllResponseHeaders: function () {
                                return h ? f : null;
                            },
                            setRequestHeader: function (e, t) {
                                return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
                            },
                            overrideMimeType: function (e) {
                                return null == h && (m.mimeType = e), this;
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (h) C.always(e[C.status]);
                                    else for (t in e) w[t] = [w[t], e[t]];
                                return this;
                            },
                            abort: function (e) {
                                var t = e || l;
                                return u && u.abort(t), c(0, t), this;
                            },
                        };
                    if (
                        (b.promise(C),
                        (m.url = ((e || m.url || Lt.href) + "").replace(Bt, Lt.protocol + "//")),
                        (m.type = t.method || t.type || m.method || m.type),
                        (m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""]),
                        null == m.crossDomain)
                    ) {
                        o = S.createElement("a");
                        try {
                            (o.href = m.url), (o.href = o.href), (m.crossDomain = Yt.protocol + "//" + Yt.host != o.protocol + "//" + o.host);
                        } catch (e) {
                            m.crossDomain = !0;
                        }
                    }
                    if ((m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), Qt(Wt, m, t, C), h)) return C;
                    for (i in ((g = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                    (m.type = m.type.toUpperCase()),
                    (m.hasContent = !_t.test(m.type)),
                    (d = m.url.replace(Ft, "")),
                    m.hasContent
                        ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(It, "+"))
                        : ((r = m.url.slice(d.length)),
                          m.data && (m.processData || "string" == typeof m.data) && ((d += (Mt.test(d) ? "&" : "?") + m.data), delete m.data),
                          !1 === m.cache && ((d = d.replace(zt, "$1")), (r = (Mt.test(d) ? "&" : "?") + "_=" + Dt.guid++ + r)),
                          (m.url = d + r)),
                    m.ifModified && (k.lastModified[d] && C.setRequestHeader("If-Modified-Since", k.lastModified[d]), k.etag[d] && C.setRequestHeader("If-None-Match", k.etag[d])),
                    ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) && C.setRequestHeader("Content-Type", m.contentType),
                    C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : m.accepts["*"]),
                    m.headers))
                        C.setRequestHeader(i, m.headers[i]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || h)) return C.abort();
                    if (((l = "abort"), x.add(m.complete), C.done(m.success), C.fail(m.error), (u = Qt(Xt, m, t, C)))) {
                        if (((C.readyState = 1), g && y.trigger("ajaxSend", [C, m]), h)) return C;
                        m.async &&
                            0 < m.timeout &&
                            (p = T.setTimeout(function () {
                                C.abort("timeout");
                            }, m.timeout));
                        try {
                            (h = !1), u.send(a, c);
                        } catch (e) {
                            if (h) throw e;
                            c(-1, e);
                        }
                    } else c(-1, "No Transport");
                    function c(e, t, n, o) {
                        var i,
                            r,
                            a,
                            s,
                            l,
                            c = t;
                        h ||
                            ((h = !0),
                            p && T.clearTimeout(p),
                            (u = void 0),
                            (f = o || ""),
                            (C.readyState = 0 < e ? 4 : 0),
                            (i = (200 <= e && e < 300) || 304 === e),
                            n &&
                                (s = (function (e, t, n) {
                                    for (var o, i, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (o)
                                        for (i in s)
                                            if (s[i] && s[i].test(o)) {
                                                l.unshift(i);
                                                break;
                                            }
                                    if (l[0] in n) r = l[0];
                                    else {
                                        for (i in n) {
                                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                                r = i;
                                                break;
                                            }
                                            a = a || i;
                                        }
                                        r = r || a;
                                    }
                                    if (r) return r !== l[0] && l.unshift(r), n[r];
                                })(m, C, n)),
                            !i && -1 < k.inArray("script", m.dataTypes) && (m.converters["text script"] = function () {}),
                            (s = (function (e, t, n, o) {
                                var i,
                                    r,
                                    a,
                                    s,
                                    l,
                                    c = {},
                                    u = e.dataTypes.slice();
                                if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                                for (r = u.shift(); r; )
                                    if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = u.shift())))
                                        if ("*" === r) r = l;
                                        else if ("*" !== l && l !== r) {
                                            if (!(a = c[l + " " + r] || c["* " + r]))
                                                for (i in c)
                                                    if ((s = i.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                        !0 === a ? (a = c[i]) : !0 !== c[i] && ((r = s[0]), u.unshift(s[1]));
                                                        break;
                                                    }
                                            if (!0 !== a)
                                                if (a && e.throws) t = a(t);
                                                else
                                                    try {
                                                        t = a(t);
                                                    } catch (e) {
                                                        return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r };
                                                    }
                                        }
                                return { state: "success", data: t };
                            })(m, s, C, i)),
                            i
                                ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (k.lastModified[d] = l), (l = C.getResponseHeader("etag")) && (k.etag[d] = l)),
                                  204 === e || "HEAD" === m.type ? (c = "nocontent") : 304 === e ? (c = "notmodified") : ((c = s.state), (r = s.data), (i = !(a = s.error))))
                                : ((a = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
                            (C.status = e),
                            (C.statusText = (t || c) + ""),
                            i ? b.resolveWith(v, [r, c, C]) : b.rejectWith(v, [C, c, a]),
                            C.statusCode(w),
                            (w = void 0),
                            g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [C, m, i ? r : a]),
                            x.fireWith(v, [C, c]),
                            g && (y.trigger("ajaxComplete", [C, m]), --k.active || k.event.trigger("ajaxStop")));
                    }
                    return C;
                },
                getJSON: function (e, t, n) {
                    return k.get(e, t, n, "json");
                },
                getScript: function (e, t) {
                    return k.get(e, void 0, t, "script");
                },
            }),
            k.each(["get", "post"], function (e, i) {
                k[i] = function (e, t, n, o) {
                    return b(t) && ((o = o || n), (n = t), (t = void 0)), k.ajax(k.extend({ url: e, type: i, dataType: o, data: t, success: n }, k.isPlainObject(e) && e));
                };
            }),
            k.ajaxPrefilter(function (e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
            }),
            (k._evalUrl = function (e, t, n) {
                return k.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: { "text script": function () {} },
                    dataFilter: function (e) {
                        k.globalEval(e, t, n);
                    },
                });
            }),
            k.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return (
                        this[0] &&
                            (b(e) && (e = e.call(this[0])),
                            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                            this[0].parentNode && t.insertBefore(this[0]),
                            t
                                .map(function () {
                                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                    return e;
                                })
                                .append(this)),
                        this
                    );
                },
                wrapInner: function (n) {
                    return b(n)
                        ? this.each(function (e) {
                              k(this).wrapInner(n.call(this, e));
                          })
                        : this.each(function () {
                              var e = k(this),
                                  t = e.contents();
                              t.length ? t.wrapAll(n) : e.append(n);
                          });
                },
                wrap: function (t) {
                    var n = b(t);
                    return this.each(function (e) {
                        k(this).wrapAll(n ? t.call(this, e) : t);
                    });
                },
                unwrap: function (e) {
                    return (
                        this.parent(e)
                            .not("body")
                            .each(function () {
                                k(this).replaceWith(this.childNodes);
                            }),
                        this
                    );
                },
            }),
            (k.expr.pseudos.hidden = function (e) {
                return !k.expr.pseudos.visible(e);
            }),
            (k.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (k.ajaxSettings.xhr = function () {
                try {
                    return new T.XMLHttpRequest();
                } catch (e) {}
            });
        var Zt = { 0: 200, 1223: 204 },
            Gt = k.ajaxSettings.xhr();
        (y.cors = !!Gt && "withCredentials" in Gt),
            (y.ajax = Gt = !!Gt),
            k.ajaxTransport(function (i) {
                var r, a;
                if (y.cors || (Gt && !i.crossDomain))
                    return {
                        send: function (e, t) {
                            var n,
                                o = i.xhr();
                            if ((o.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) o[n] = i.xhrFields[n];
                            for (n in (i.mimeType && o.overrideMimeType && o.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) o.setRequestHeader(n, e[n]);
                            (r = function (e) {
                                return function () {
                                    r &&
                                        ((r = a = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
                                        "abort" === e
                                            ? o.abort()
                                            : "error" === e
                                            ? "number" != typeof o.status
                                                ? t(0, "error")
                                                : t(o.status, o.statusText)
                                            : t(
                                                  Zt[o.status] || o.status,
                                                  o.statusText,
                                                  "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? { binary: o.response } : { text: o.responseText },
                                                  o.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (o.onload = r()),
                                (a = o.onerror = o.ontimeout = r("error")),
                                void 0 !== o.onabort
                                    ? (o.onabort = a)
                                    : (o.onreadystatechange = function () {
                                          4 === o.readyState &&
                                              T.setTimeout(function () {
                                                  r && a();
                                              });
                                      }),
                                (r = r("abort"));
                            try {
                                o.send((i.hasContent && i.data) || null);
                            } catch (e) {
                                if (r) throw e;
                            }
                        },
                        abort: function () {
                            r && r();
                        },
                    };
            }),
            k.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
            }),
            k.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (e) {
                        return k.globalEval(e), e;
                    },
                },
            }),
            k.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            k.ajaxTransport("script", function (n) {
                var o, i;
                if (n.crossDomain || n.scriptAttrs)
                    return {
                        send: function (e, t) {
                            (o = k("<script>")
                                .attr(n.scriptAttrs || {})
                                .prop({ charset: n.scriptCharset, src: n.url })
                                .on(
                                    "load error",
                                    (i = function (e) {
                                        o.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                    })
                                )),
                                S.head.appendChild(o[0]);
                        },
                        abort: function () {
                            i && i();
                        },
                    };
            });
        var Jt,
            en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = en.pop() || k.expando + "_" + Dt.guid++;
                return (this[e] = !0), e;
            },
        }),
            k.ajaxPrefilter("json jsonp", function (e, t, n) {
                var o,
                    i,
                    r,
                    a = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0])
                    return (
                        (o = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                        a ? (e[a] = e[a].replace(tn, "$1" + o)) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                        (e.converters["script json"] = function () {
                            return r || k.error(o + " was not called"), r[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (i = T[o]),
                        (T[o] = function () {
                            r = arguments;
                        }),
                        n.always(function () {
                            void 0 === i ? k(T).removeProp(o) : (T[o] = i), e[o] && ((e.jsonpCallback = t.jsonpCallback), en.push(o)), r && b(i) && i(r[0]), (r = i = void 0);
                        }),
                        "script"
                    );
            }),
            (y.createHTMLDocument = (((Jt = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Jt.childNodes.length)),
            (k.parseHTML = function (e, t, n) {
                return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                      t || (y.createHTMLDocument ? (((o = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href), t.head.appendChild(o)) : (t = S)),
                      (r = !n && []),
                      (i = $.exec(e)) ? [t.createElement(i[1])] : ((i = ye([e], t, r)), r && r.length && k(r).remove(), k.merge([], i.childNodes)));
                var o, i, r;
            }),
            (k.fn.load = function (e, t, n) {
                var o,
                    i,
                    r,
                    a = this,
                    s = e.indexOf(" ");
                return (
                    -1 < s && ((o = kt(e.slice(s))), (e = e.slice(0, s))),
                    b(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                    0 < a.length &&
                        k
                            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                            .done(function (e) {
                                (r = arguments), a.html(o ? k("<div>").append(k.parseHTML(e)).find(o) : e);
                            })
                            .always(
                                n &&
                                    function (e, t) {
                                        a.each(function () {
                                            n.apply(this, r || [e.responseText, t, e]);
                                        });
                                    }
                            ),
                    this
                );
            }),
            (k.expr.pseudos.animated = function (t) {
                return k.grep(k.timers, function (e) {
                    return t === e.elem;
                }).length;
            }),
            (k.offset = {
                setOffset: function (e, t, n) {
                    var o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        c = k.css(e, "position"),
                        u = k(e),
                        d = {};
                    "static" === c && (e.style.position = "relative"),
                        (s = u.offset()),
                        (r = k.css(e, "top")),
                        (l = k.css(e, "left")),
                        (i = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? ((a = (o = u.position()).top), o.left) : ((a = parseFloat(r) || 0), parseFloat(l) || 0)),
                        b(t) && (t = t.call(e, n, k.extend({}, s))),
                        null != t.top && (d.top = t.top - s.top + a),
                        null != t.left && (d.left = t.left - s.left + i),
                        "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d));
                },
            }),
            k.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t
                            ? this
                            : this.each(function (e) {
                                  k.offset.setOffset(this, t, e);
                              });
                    var e,
                        n,
                        o = this[0];
                    return o ? (o.getClientRects().length ? ((e = o.getBoundingClientRect()), (n = o.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            n,
                            o = this[0],
                            i = { top: 0, left: 0 };
                        if ("fixed" === k.css(o, "position")) t = o.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"); ) e = e.parentNode;
                            e && e !== o && 1 === e.nodeType && (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)), (i.left += k.css(e, "borderLeftWidth", !0)));
                        }
                        return { top: t.top - i.top - k.css(o, "marginTop", !0), left: t.left - i.left - k.css(o, "marginLeft", !0) };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === k.css(e, "position"); ) e = e.offsetParent;
                        return e || ne;
                    });
                },
            }),
            k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
                var r = "pageYOffset" === i;
                k.fn[t] = function (e) {
                    return R(
                        this,
                        function (e, t, n) {
                            var o;
                            return g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === n ? (o ? o[i] : e[t]) : void (o ? o.scrollTo(r ? o.pageXOffset : n, r ? n : o.pageYOffset) : (e[t] = n));
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }),
            k.each(["top", "left"], function (e, n) {
                k.cssHooks[n] = Qe(y.pixelPosition, function (e, t) {
                    if (t) return (t = Ue(e, n)), Xe.test(t) ? k(e).position()[n] + "px" : t;
                });
            }),
            k.each({ Height: "height", Width: "width" }, function (a, s) {
                k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (o, r) {
                    k.fn[r] = function (e, t) {
                        var n = arguments.length && (o || "boolean" != typeof e),
                            i = o || (!0 === e || !0 === t ? "margin" : "border");
                        return R(
                            this,
                            function (e, t, n) {
                                var o;
                                return g(e)
                                    ? 0 === r.indexOf("outer")
                                        ? e["inner" + a]
                                        : e.document.documentElement["client" + a]
                                    : 9 === e.nodeType
                                    ? ((o = e.documentElement), Math.max(e.body["scroll" + a], o["scroll" + a], e.body["offset" + a], o["offset" + a], o["client" + a]))
                                    : void 0 === n
                                    ? k.css(e, t, i)
                                    : k.style(e, t, n, i);
                            },
                            s,
                            n ? e : void 0,
                            n
                        );
                    };
                });
            }),
            k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                k.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }),
            k.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, n, o) {
                    return this.on(t, e, n, o);
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
                k.fn[n] = function (e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                };
            });
        var nn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (k.proxy = function (e, t) {
            var n, o, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
                return (
                    (o = s.call(arguments, 2)),
                    ((i = function () {
                        return e.apply(t || this, o.concat(s.call(arguments)));
                    }).guid = e.guid = e.guid || k.guid++),
                    i
                );
        }),
            (k.holdReady = function (e) {
                e ? k.readyWait++ : k.ready(!0);
            }),
            (k.isArray = Array.isArray),
            (k.parseJSON = JSON.parse),
            (k.nodeName = E),
            (k.isFunction = b),
            (k.isWindow = g),
            (k.camelCase = X),
            (k.type = w),
            (k.now = Date.now),
            (k.isNumeric = function (e) {
                var t = k.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            (k.trim = function (e) {
                return null == e ? "" : (e + "").replace(nn, "");
            }),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return k;
                });
        var on = T.jQuery,
            rn = T.$;
        return (
            (k.noConflict = function (e) {
                return T.$ === k && (T.$ = rn), e && T.jQuery === k && (T.jQuery = on), k;
            }),
            void 0 === e && (T.jQuery = T.$ = k),
            k
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.AOS = t()) : (e.AOS = t());
    })(this, function () {
        return (
            (i = {}),
            (n.m = o = [
                function (e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : { default: e };
                    }
                    function i() {
                        if ((0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (m = !0), m)) return (g = (0, p.default)(g, v)), (0, f.default)(g, v.once), g;
                    }
                    function r() {
                        (g = (0, h.default)()), i();
                    }
                    var a =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            },
                        s = (o(n(1)), n(6)),
                        l = o(s),
                        c = o(n(7)),
                        u = o(n(8)),
                        d = o(n(9)),
                        f = o(n(10)),
                        p = o(n(11)),
                        h = o(n(14)),
                        g = [],
                        m = !1,
                        v = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 };
                    e.exports = {
                        init: function (e) {
                            (v = a(v, e)), (g = (0, h.default)());
                            var t,
                                n = document.all && !window.atob;
                            return !0 === (t = v.disable) || ("mobile" === t && d.default.mobile()) || ("phone" === t && d.default.phone()) || ("tablet" === t && d.default.tablet()) || ("function" == typeof t && !0 === t()) || n
                                ? void g.forEach(function (e, t) {
                                      e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                                  })
                                : (v.disableMutationObserver ||
                                      u.default.isSupported() ||
                                      (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                                      (v.disableMutationObserver = !0)),
                                  document.querySelector("body").setAttribute("data-aos-easing", v.easing),
                                  document.querySelector("body").setAttribute("data-aos-duration", v.duration),
                                  document.querySelector("body").setAttribute("data-aos-delay", v.delay),
                                  "DOMContentLoaded" === v.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState)
                                      ? i(!0)
                                      : "load" === v.startEvent
                                      ? window.addEventListener(v.startEvent, function () {
                                            i(!0);
                                        })
                                      : document.addEventListener(v.startEvent, function () {
                                            i(!0);
                                        }),
                                  window.addEventListener("resize", (0, c.default)(i, v.debounceDelay, !0)),
                                  window.addEventListener("orientationchange", (0, c.default)(i, v.debounceDelay, !0)),
                                  window.addEventListener(
                                      "scroll",
                                      (0, l.default)(function () {
                                          (0, f.default)(g, v.once);
                                      }, v.throttleDelay)
                                  ),
                                  v.disableMutationObserver || u.default.ready("[data-aos]", r),
                                  g);
                        },
                        refresh: i,
                        refreshHard: r,
                    };
                },
                function (e, t) {},
                ,
                ,
                ,
                ,
                function (g, e) {
                    (function (e) {
                        "use strict";
                        function r(o, i, e) {
                            function r(e) {
                                var t = c,
                                    n = u;
                                return (c = u = void 0), (g = e), (f = o.apply(n, t));
                            }
                            function a(e) {
                                var t = e - h;
                                return void 0 === h || i <= t || t < 0 || (v && d <= e - g);
                            }
                            function s() {
                                var e,
                                    t,
                                    n = T();
                                return a(n) ? l(n) : void (p = setTimeout(s, ((t = i - ((e = n) - h)), v ? C(t, d - (e - g)) : t)));
                            }
                            function l(e) {
                                return (p = void 0), n && c ? r(e) : ((c = u = void 0), f);
                            }
                            function t() {
                                var e,
                                    t = T(),
                                    n = a(t);
                                if (((c = arguments), (u = this), (h = t), n)) {
                                    if (void 0 === p) return (g = e = h), (p = setTimeout(s, i)), m ? r(e) : f;
                                    if (v) return (p = setTimeout(s, i)), r(h);
                                }
                                return void 0 === p && (p = setTimeout(s, i)), f;
                            }
                            var c,
                                u,
                                d,
                                f,
                                p,
                                h,
                                g = 0,
                                m = !1,
                                v = !1,
                                n = !0;
                            if ("function" != typeof o) throw new TypeError(x);
                            return (
                                (i = b(i) || 0),
                                y(e) && ((m = !!e.leading), (v = "maxWait" in e), (d = v ? w(b(e.maxWait) || 0, i) : d), (n = "trailing" in e ? !!e.trailing : n)),
                                (t.cancel = function () {
                                    void 0 !== p && clearTimeout(p), (c = h = u = p = void (g = 0));
                                }),
                                (t.flush = function () {
                                    return void 0 === p ? f : l(T());
                                }),
                                t
                            );
                        }
                        function y(e) {
                            var t = void 0 === e ? "undefined" : n(e);
                            return e && ("object" == t || "function" == t);
                        }
                        function o(e) {
                            return "symbol" == (void 0 === e ? "undefined" : n(e)) || ((t = e) && "object" == (void 0 === t ? "undefined" : n(t)) && h.call(e) == a);
                            var t;
                        }
                        function b(e) {
                            if ("number" == typeof e) return e;
                            if (o(e)) return i;
                            var t;
                            if ((y(e) && (e = y((t = "function" == typeof e.valueOf ? e.valueOf() : e)) ? t + "" : t), "string" != typeof e)) return 0 === e ? e : +e;
                            e = e.replace(s, "");
                            var n = c.test(e);
                            return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? i : +e;
                        }
                        var n =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      },
                            x = "Expected a function",
                            i = NaN,
                            a = "[object Symbol]",
                            s = /^\s+|\s+$/g,
                            l = /^[-+]0x[0-9a-f]+$/i,
                            c = /^0b[01]+$/i,
                            u = /^0o[0-7]+$/i,
                            d = parseInt,
                            t = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
                            f = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                            p = t || f || Function("return this")(),
                            h = Object.prototype.toString,
                            w = Math.max,
                            C = Math.min,
                            T = function () {
                                return p.Date.now();
                            };
                        g.exports = function (e, t, n) {
                            var o = !0,
                                i = !0;
                            if ("function" != typeof e) throw new TypeError(x);
                            return y(n) && ((o = "leading" in n ? !!n.leading : o), (i = "trailing" in n ? !!n.trailing : i)), r(e, t, { leading: o, maxWait: t, trailing: i });
                        };
                    }.call(
                        e,
                        (function () {
                            return this;
                        })()
                    ));
                },
                function (h, e) {
                    (function (e) {
                        "use strict";
                        function y(e) {
                            var t = void 0 === e ? "undefined" : n(e);
                            return e && ("object" == t || "function" == t);
                        }
                        function o(e) {
                            return "symbol" == (void 0 === e ? "undefined" : n(e)) || ((t = e) && "object" == (void 0 === t ? "undefined" : n(t)) && p.call(e) == r);
                            var t;
                        }
                        function b(e) {
                            if ("number" == typeof e) return e;
                            if (o(e)) return i;
                            var t;
                            if ((y(e) && (e = y((t = "function" == typeof e.valueOf ? e.valueOf() : e)) ? t + "" : t), "string" != typeof e)) return 0 === e ? e : +e;
                            e = e.replace(a, "");
                            var n = l.test(e);
                            return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? i : +e;
                        }
                        function x() {
                            return f.Date.now();
                        }
                        var n =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      },
                            i = NaN,
                            r = "[object Symbol]",
                            a = /^\s+|\s+$/g,
                            s = /^[-+]0x[0-9a-f]+$/i,
                            l = /^0b[01]+$/i,
                            c = /^0o[0-7]+$/i,
                            u = parseInt,
                            t = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
                            d = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                            f = t || d || Function("return this")(),
                            p = Object.prototype.toString,
                            w = Math.max,
                            C = Math.min;
                        h.exports = function (o, i, e) {
                            function r(e) {
                                var t = c,
                                    n = u;
                                return (c = u = void 0), (g = e), (f = o.apply(n, t));
                            }
                            function a(e) {
                                var t = e - h;
                                return void 0 === h || i <= t || t < 0 || (v && d <= e - g);
                            }
                            function s() {
                                var e,
                                    t,
                                    n = x();
                                return a(n) ? l(n) : void (p = setTimeout(s, ((t = i - ((e = n) - h)), v ? C(t, d - (e - g)) : t)));
                            }
                            function l(e) {
                                return (p = void 0), n && c ? r(e) : ((c = u = void 0), f);
                            }
                            function t() {
                                var e,
                                    t = x(),
                                    n = a(t);
                                if (((c = arguments), (u = this), (h = t), n)) {
                                    if (void 0 === p) return (g = e = h), (p = setTimeout(s, i)), m ? r(e) : f;
                                    if (v) return (p = setTimeout(s, i)), r(h);
                                }
                                return void 0 === p && (p = setTimeout(s, i)), f;
                            }
                            var c,
                                u,
                                d,
                                f,
                                p,
                                h,
                                g = 0,
                                m = !1,
                                v = !1,
                                n = !0;
                            if ("function" != typeof o) throw new TypeError("Expected a function");
                            return (
                                (i = b(i) || 0),
                                y(e) && ((m = !!e.leading), (v = "maxWait" in e), (d = v ? w(b(e.maxWait) || 0, i) : d), (n = "trailing" in e ? !!e.trailing : n)),
                                (t.cancel = function () {
                                    void 0 !== p && clearTimeout(p), (c = h = u = p = void (g = 0));
                                }),
                                (t.flush = function () {
                                    return void 0 === p ? f : l(x());
                                }),
                                t
                            );
                        };
                    }.call(
                        e,
                        (function () {
                            return this;
                        })()
                    ));
                },
                function (e, t) {
                    "use strict";
                    function i() {
                        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    }
                    function r(e) {
                        e &&
                            e.forEach(function (e) {
                                var t = Array.prototype.slice.call(e.addedNodes),
                                    n = Array.prototype.slice.call(e.removedNodes);
                                if (
                                    (function e(t) {
                                        for (var n, o = void 0, o = 0; o < t.length; o += 1) {
                                            if ((n = t[o]).dataset && n.dataset.aos) return !0;
                                            if (n.children && e(n.children)) return !0;
                                        }
                                        return !1;
                                    })(t.concat(n))
                                )
                                    return a();
                            });
                    }
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var a = function () {};
                    t.default = {
                        isSupported: function () {
                            return !!i();
                        },
                        ready: function (e, t) {
                            var n = window.document,
                                o = new (i())(r);
                            (a = t), o.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
                        },
                    };
                },
                function (e, t) {
                    "use strict";
                    function n() {
                        return navigator.userAgent || navigator.vendor || window.opera || "";
                    }
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        s =
                            ((function (e, t, n) {
                                return t && c(e.prototype, t), n && c(e, n), e;
                            })(l, [
                                {
                                    key: "phone",
                                    value: function () {
                                        var e = n();
                                        return !(!o.test(e) && !i.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "mobile",
                                    value: function () {
                                        var e = n();
                                        return !(!r.test(e) && !a.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "tablet",
                                    value: function () {
                                        return this.mobile() && !this.phone();
                                    },
                                },
                            ]),
                            l);
                    function l() {
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, l);
                    }
                    function c(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }
                    t.default = new s();
                },
                function (e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    t.default = function (e, a) {
                        var s = window.pageYOffset,
                            l = window.innerHeight;
                        e.forEach(function (e, t) {
                            var n, o, i, r;
                            (o = l + s),
                                (i = a),
                                (r = (n = e).node.getAttribute("data-aos-once")),
                                o > n.position ? n.node.classList.add("aos-animate") : void 0 === r || ("false" !== r && (i || "true" === r)) || n.node.classList.remove("aos-animate");
                        });
                    };
                },
                function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var o,
                        i = n(12),
                        r = (o = i) && o.__esModule ? o : { default: o };
                    t.default = function (e, n) {
                        return (
                            e.forEach(function (e, t) {
                                e.node.classList.add("aos-init"), (e.position = (0, r.default)(e.node, n.offset));
                            }),
                            e
                        );
                    };
                },
                function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var o,
                        i = n(13),
                        a = (o = i) && o.__esModule ? o : { default: o };
                    t.default = function (e, t) {
                        var n = 0,
                            o = 0,
                            i = window.innerHeight,
                            r = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                        switch ((r.offset && !isNaN(r.offset) && (o = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), (n = (0, a.default)(e).top), r.anchorPlacement)) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                n += e.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                n += e.offsetHeight;
                                break;
                            case "top-center":
                                n += i / 2;
                                break;
                            case "bottom-center":
                                n += i / 2 + e.offsetHeight;
                                break;
                            case "center-center":
                                n += i / 2 + e.offsetHeight / 2;
                                break;
                            case "top-top":
                                n += i;
                                break;
                            case "bottom-top":
                                n += e.offsetHeight + i;
                                break;
                            case "center-top":
                                n += e.offsetHeight / 2 + i;
                        }
                        return r.anchorPlacement || r.offset || isNaN(t) || (o = t), n + o;
                    };
                },
                function (e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    t.default = function (e) {
                        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                            (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
                        return { top: n, left: t };
                    };
                },
                function (e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    t.default = function (e) {
                        return (
                            (e = e || document.querySelectorAll("[data-aos]")),
                            Array.prototype.map.call(e, function (e) {
                                return { node: e };
                            })
                        );
                    };
                },
            ]),
            (n.c = i),
            (n.p = "dist/"),
            n(0)
        );
        function n(e) {
            if (i[e]) return i[e].exports;
            var t = (i[e] = { exports: {}, id: e, loaded: !1 });
            return o[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports;
        }
        var o, i;
    }),
    (function (l, d, g) {
        "use strict";
        function n(e, t) {
            var n,
                o,
                i,
                r = [],
                a = 0;
            (e && e.isDefaultPrevented()) ||
                (e.preventDefault(),
                (t = t || {}),
                e && e.data && (t = u(e.data.options, t)),
                (n = t.$target || g(e.currentTarget).trigger("blur")),
                ((i = g.fancybox.getInstance()) && i.$trigger && i.$trigger.is(n)) ||
                    ((r = t.selector ? g(t.selector) : (o = n.attr("data-fancybox") || "") ? ((r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : g('[data-fancybox="' + o + '"]')) : [n]),
                    (a = g(r).index(n)) < 0 && (a = 0),
                    ((i = g.fancybox.open(r, t, a)).$trigger = n)));
        }
        if (((l.console = l.console || { info: function (e) {} }), g)) {
            if (g.fn.fancybox) return console.info("fancyBox already initialized");
            var e = {
                    closeExisting: !1,
                    loop: !1,
                    gutter: 50,
                    keyboard: !0,
                    preventCaptionOverlap: !0,
                    arrows: !0,
                    infobar: !0,
                    smallBtn: "auto",
                    toolbar: "auto",
                    buttons: ["zoom", "slideShow", "thumbs", "close"],
                    idleTime: 3,
                    protect: !1,
                    modal: !1,
                    image: { preload: !1 },
                    ajax: { settings: { data: { fancybox: !0 } } },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: { scrolling: "auto" },
                    },
                    video: {
                        tpl:
                            '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                        format: "",
                        autoStart: !0,
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl:
                        '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                    btnTpl: {
                        download:
                            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                        zoom:
                            '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                        close:
                            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                        arrowLeft:
                            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                        arrowRight:
                            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                        smallBtn:
                            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                    },
                    parentEl: "body",
                    hideScrollbar: !0,
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: { autoStart: !1 },
                    touch: { vertical: !0, momentum: !0 },
                    hash: null,
                    media: {},
                    slideShow: { autoStart: !1, speed: 3e3 },
                    thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                    wheel: "auto",
                    onInit: g.noop,
                    beforeLoad: g.noop,
                    afterLoad: g.noop,
                    beforeShow: g.noop,
                    afterShow: g.noop,
                    beforeClose: g.noop,
                    afterClose: g.noop,
                    onActivate: g.noop,
                    onDeactivate: g.noop,
                    clickContent: function (e, t) {
                        return "image" === e.type && "zoom";
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        preventCaptionOverlap: !1,
                        idleTime: !1,
                        clickContent: function (e, t) {
                            return "image" === e.type && "toggleControls";
                        },
                        clickSlide: function (e, t) {
                            return "image" === e.type ? "toggleControls" : "close";
                        },
                        dblclickContent: function (e, t) {
                            return "image" === e.type && "zoom";
                        },
                        dblclickSlide: function (e, t) {
                            return "image" === e.type && "zoom";
                        },
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom",
                        },
                        de: {
                            CLOSE: "Schlie&szlig;en",
                            NEXT: "Weiter",
                            PREV: "Zur&uuml;ck",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Vergr&ouml;&szlig;ern",
                        },
                    },
                },
                i = g(l),
                a = g(d),
                r = 0,
                f =
                    l.requestAnimationFrame ||
                    l.webkitRequestAnimationFrame ||
                    l.mozRequestAnimationFrame ||
                    l.oRequestAnimationFrame ||
                    function (e) {
                        return l.setTimeout(e, 1e3 / 60);
                    },
                t =
                    l.cancelAnimationFrame ||
                    l.webkitCancelAnimationFrame ||
                    l.mozCancelAnimationFrame ||
                    l.oCancelAnimationFrame ||
                    function (e) {
                        l.clearTimeout(e);
                    },
                c = (function () {
                    var e,
                        t = d.createElement("fakeelement"),
                        n = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                    for (e in n) if (void 0 !== t.style[e]) return n[e];
                    return "transitionend";
                })(),
                p = function (e) {
                    return e && e.length && e[0].offsetHeight;
                },
                u = function (e, t) {
                    var n = g.extend(!0, {}, e, t);
                    return (
                        g.each(t, function (e, t) {
                            g.isArray(t) && (n[e] = t);
                        }),
                        n
                    );
                },
                o = function (e, t, n) {
                    var o = this;
                    (o.opts = u({ index: n }, g.fancybox.defaults)),
                        g.isPlainObject(t) && (o.opts = u(o.opts, t)),
                        g.fancybox.isMobile && (o.opts = u(o.opts, o.opts.mobile)),
                        (o.id = o.opts.id || ++r),
                        (o.currIndex = parseInt(o.opts.index, 10) || 0),
                        (o.prevIndex = null),
                        (o.prevPos = null),
                        (o.currPos = 0),
                        (o.firstRun = !0),
                        (o.group = []),
                        (o.slides = {}),
                        o.addContent(e),
                        o.group.length && o.init();
                };
            g.extend(o.prototype, {
                init: function () {
                    var t,
                        n,
                        o = this,
                        i = o.group[o.currIndex].opts;
                    i.closeExisting && g.fancybox.close(!0),
                        g("body").addClass("fancybox-active"),
                        !g.fancybox.getInstance() &&
                            !1 !== i.hideScrollbar &&
                            !g.fancybox.isMobile &&
                            d.body.scrollHeight > l.innerHeight &&
                            (g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - d.documentElement.clientWidth) + "px;}</style>"),
                            g("body").addClass("compensate-for-scrollbar")),
                        (n = ""),
                        g.each(i.buttons, function (e, t) {
                            n += i.btnTpl[t] || "";
                        }),
                        (t = g(o.translate(o, i.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", i.btnTpl.arrowLeft + i.btnTpl.arrowRight)))
                            .attr("id", "fancybox-container-" + o.id)
                            .addClass(i.baseClass)
                            .data("FancyBox", o)
                            .appendTo(i.parentEl)),
                        (o.$refs = { container: t }),
                        ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
                            o.$refs[e] = t.find(".fancybox-" + e);
                        }),
                        o.trigger("onInit"),
                        o.activate(),
                        o.jumpTo(o.currIndex);
                },
                translate: function (e, t) {
                    var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                    return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
                        return void 0 === n[t] ? e : n[t];
                    });
                },
                addContent: function (e) {
                    var t,
                        c = this,
                        n = g.makeArray(e);
                    g.each(n, function (e, t) {
                        var n,
                            o,
                            i,
                            r,
                            a,
                            s = {},
                            l = {};
                        g.isPlainObject(t)
                            ? (l = (s = t).opts || t)
                            : "object" === g.type(t) && g(t).length
                            ? ((l = (n = g(t)).data() || {}), ((l = g.extend(!0, {}, l, l.options)).$orig = n), (s.src = c.opts.src || l.src || n.attr("href")), s.type || s.src || ((s.type = "inline"), (s.src = t)))
                            : (s = { type: "html", src: t + "" }),
                            (s.opts = g.extend(!0, {}, c.opts, l)),
                            g.isArray(l.buttons) && (s.opts.buttons = l.buttons),
                            g.fancybox.isMobile && s.opts.mobile && (s.opts = u(s.opts, s.opts.mobile)),
                            (o = s.type || s.opts.type),
                            (r = s.src || ""),
                            !o &&
                                r &&
                                ((i = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                    ? ((o = "video"), s.opts.video.format || (s.opts.video.format = "video/" + ("ogv" === i[1] ? "ogg" : i[1])))
                                    : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                    ? (o = "image")
                                    : r.match(/\.(pdf)((\?|#).*)?$/i)
                                    ? ((o = "iframe"), (s = g.extend(!0, s, { contentType: "pdf", opts: { iframe: { preload: !1 } } })))
                                    : "#" === r.charAt(0) && (o = "inline")),
                            o ? (s.type = o) : c.trigger("objectNeedsType", s),
                            s.contentType || (s.contentType = -1 < g.inArray(s.type, ["html", "inline", "ajax"]) ? "html" : s.type),
                            (s.index = c.group.length),
                            "auto" == s.opts.smallBtn && (s.opts.smallBtn = -1 < g.inArray(s.type, ["html", "inline", "ajax"])),
                            "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn),
                            (s.$thumb = s.opts.$thumb || null),
                            s.opts.$trigger && s.index === c.opts.index && ((s.$thumb = s.opts.$trigger.find("img:first")), s.$thumb.length && (s.opts.$orig = s.opts.$trigger)),
                            (s.$thumb && s.$thumb.length) || !s.opts.$orig || (s.$thumb = s.opts.$orig.find("img:first")),
                            s.$thumb && !s.$thumb.length && (s.$thumb = null),
                            (s.thumb = s.opts.thumb || (s.$thumb ? s.$thumb[0].src : null)),
                            "function" === g.type(s.opts.caption) && (s.opts.caption = s.opts.caption.apply(t, [c, s])),
                            "function" === g.type(c.opts.caption) && (s.opts.caption = c.opts.caption.apply(t, [c, s])),
                            s.opts.caption instanceof g || (s.opts.caption = void 0 === s.opts.caption ? "" : s.opts.caption + ""),
                            "ajax" !== s.type || (1 < (a = r.split(/\s+/, 2)).length && ((s.src = a.shift()), (s.opts.filter = a.shift()))),
                            s.opts.modal &&
                                (s.opts = g.extend(!0, s.opts, {
                                    trapFocus: !0,
                                    infobar: 0,
                                    toolbar: 0,
                                    smallBtn: 0,
                                    keyboard: 0,
                                    slideShow: 0,
                                    fullScreen: 0,
                                    thumbs: 0,
                                    touch: 0,
                                    clickContent: !1,
                                    clickSlide: !1,
                                    clickOutside: !1,
                                    dblclickContent: !1,
                                    dblclickSlide: !1,
                                    dblclickOutside: !1,
                                })),
                            c.group.push(s);
                    }),
                        Object.keys(c.slides).length && (c.updateControls(), (t = c.Thumbs) && t.isActive && (t.create(), t.focus()));
                },
                addEvents: function () {
                    var o = this;
                    o.removeEvents(),
                        o.$refs.container
                            .on("click.fb-close", "[data-fancybox-close]", function (e) {
                                e.stopPropagation(), e.preventDefault(), o.close(e);
                            })
                            .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
                                e.stopPropagation(), e.preventDefault(), o.previous();
                            })
                            .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
                                e.stopPropagation(), e.preventDefault(), o.next();
                            })
                            .on("click.fb", "[data-fancybox-zoom]", function (e) {
                                o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                            }),
                        i.on("orientationchange.fb resize.fb", function (e) {
                            e && e.originalEvent && "resize" === e.originalEvent.type
                                ? (o.requestId && t(o.requestId),
                                  (o.requestId = f(function () {
                                      o.update(e);
                                  })))
                                : (o.current && "iframe" === o.current.type && o.$refs.stage.hide(),
                                  setTimeout(
                                      function () {
                                          o.$refs.stage.show(), o.update(e);
                                      },
                                      g.fancybox.isMobile ? 600 : 250
                                  ));
                        }),
                        a.on("keydown.fb", function (e) {
                            var t = (g.fancybox ? g.fancybox.getInstance() : null).current,
                                n = e.keyCode || e.which;
                            if (9 != n)
                                return !t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || g(e.target).is("input,textarea,video,audio,select")
                                    ? void 0
                                    : 8 === n || 27 === n
                                    ? (e.preventDefault(), void o.close(e))
                                    : 37 === n || 38 === n
                                    ? (e.preventDefault(), void o.previous())
                                    : 39 === n || 40 === n
                                    ? (e.preventDefault(), void o.next())
                                    : void o.trigger("afterKeydown", e, n);
                            t.opts.trapFocus && o.focus(e);
                        }),
                        o.group[o.currIndex].opts.idleTime &&
                            ((o.idleSecondsCounter = 0),
                            a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
                                (o.idleSecondsCounter = 0), o.isIdle && o.showControls(), (o.isIdle = !1);
                            }),
                            (o.idleInterval = l.setInterval(function () {
                                ++o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && ((o.isIdle = !0), (o.idleSecondsCounter = 0), o.hideControls());
                            }, 1e3)));
                },
                removeEvents: function () {
                    i.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), (this.idleInterval = null));
                },
                previous: function (e) {
                    return this.jumpTo(this.currPos - 1, e);
                },
                next: function (e) {
                    return this.jumpTo(this.currPos + 1, e);
                },
                jumpTo: function (e, o) {
                    var t,
                        n,
                        i,
                        r,
                        a,
                        s,
                        l,
                        c,
                        u,
                        d = this,
                        f = d.group.length;
                    if (!(d.isDragging || d.isClosing || (d.isAnimating && d.firstRun))) {
                        if (((e = parseInt(e, 10)), !(i = d.current ? d.current.opts.loop : d.opts.loop) && (e < 0 || f <= e))) return !1;
                        if (
                            ((t = d.firstRun = !Object.keys(d.slides).length),
                            (a = d.current),
                            (d.prevIndex = d.currIndex),
                            (d.prevPos = d.currPos),
                            (r = d.createSlide(e)),
                            1 < f && ((i || r.index < f - 1) && d.createSlide(e + 1), (i || 0 < r.index) && d.createSlide(e - 1)),
                            (d.current = r),
                            (d.currIndex = r.index),
                            (d.currPos = r.pos),
                            d.trigger("beforeShow", t),
                            d.updateControls(),
                            (r.forcedDuration = void 0),
                            g.isNumeric(o) ? (r.forcedDuration = o) : (o = r.opts[t ? "animationDuration" : "transitionDuration"]),
                            (o = parseInt(o, 10)),
                            (n = d.isMoved(r)),
                            r.$slide.addClass("fancybox-slide--current"),
                            t)
                        )
                            return r.opts.animationEffect && o && d.$refs.container.css("transition-duration", o + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(r), void d.preload("image");
                        (s = g.fancybox.getTranslate(a.$slide)),
                            (l = g.fancybox.getTranslate(d.$refs.stage)),
                            g.each(d.slides, function (e, t) {
                                g.fancybox.stop(t.$slide, !0);
                            }),
                            a.pos !== r.pos && (a.isComplete = !1),
                            a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                            n
                                ? ((u = s.left - (a.pos * s.width + a.pos * a.opts.gutter)),
                                  g.each(d.slides, function (e, t) {
                                      t.$slide.removeClass("fancybox-animated").removeClass(function (e, t) {
                                          return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                      });
                                      var n = t.pos * s.width + t.pos * t.opts.gutter;
                                      g.fancybox.setTranslate(t.$slide, { top: 0, left: n - l.left + u }),
                                          t.pos !== r.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > r.pos ? "next" : "previous")),
                                          p(t.$slide),
                                          g.fancybox.animate(t.$slide, { top: 0, left: (t.pos - r.pos) * s.width + (t.pos - r.pos) * t.opts.gutter }, o, function () {
                                              t.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === d.currPos && d.complete();
                                          });
                                  }))
                                : o &&
                                  r.opts.transitionEffect &&
                                  ((c = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect),
                                  a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")),
                                  g.fancybox.animate(
                                      a.$slide,
                                      c,
                                      o,
                                      function () {
                                          a.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous");
                                      },
                                      !1
                                  )),
                            r.isLoaded ? d.revealContent(r) : d.loadSlide(r),
                            d.preload("image");
                    }
                },
                createSlide: function (e) {
                    var t,
                        n = this,
                        o = e % n.group.length;
                    return (
                        (o = o < 0 ? n.group.length + o : o),
                        !n.slides[e] && n.group[o] && ((t = g('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage)), (n.slides[e] = g.extend(!0, {}, n.group[o], { pos: e, $slide: t, isLoaded: !1 })), n.updateSlide(n.slides[e])),
                        n.slides[e]
                    );
                },
                scaleToActual: function (e, t, n) {
                    var o,
                        i,
                        r,
                        a,
                        s,
                        l = this,
                        c = l.current,
                        u = c.$content,
                        d = g.fancybox.getTranslate(c.$slide).width,
                        f = g.fancybox.getTranslate(c.$slide).height,
                        p = c.width,
                        h = c.height;
                    l.isAnimating ||
                        l.isMoved() ||
                        !u ||
                        "image" != c.type ||
                        !c.isLoaded ||
                        c.hasError ||
                        ((l.isAnimating = !0),
                        g.fancybox.stop(u),
                        (e = void 0 === e ? 0.5 * d : e),
                        (t = void 0 === t ? 0.5 * f : t),
                        ((o = g.fancybox.getTranslate(u)).top -= g.fancybox.getTranslate(c.$slide).top),
                        (o.left -= g.fancybox.getTranslate(c.$slide).left),
                        (a = p / o.width),
                        (s = h / o.height),
                        (i = 0.5 * d - 0.5 * p),
                        (r = 0.5 * f - 0.5 * h),
                        d < p && (0 < (i = o.left * a - (e * a - e)) && (i = 0), i < d - p && (i = d - p)),
                        f < h && (0 < (r = o.top * s - (t * s - t)) && (r = 0), r < f - h && (r = f - h)),
                        l.updateCursor(p, h),
                        g.fancybox.animate(u, { top: r, left: i, scaleX: a, scaleY: s }, n || 366, function () {
                            l.isAnimating = !1;
                        }),
                        l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
                },
                scaleToFit: function (e) {
                    var t,
                        n = this,
                        o = n.current,
                        i = o.$content;
                    n.isAnimating ||
                        n.isMoved() ||
                        !i ||
                        "image" != o.type ||
                        !o.isLoaded ||
                        o.hasError ||
                        ((n.isAnimating = !0),
                        g.fancybox.stop(i),
                        (t = n.getFitPos(o)),
                        n.updateCursor(t.width, t.height),
                        g.fancybox.animate(i, { top: t.top, left: t.left, scaleX: t.width / i.width(), scaleY: t.height / i.height() }, e || 366, function () {
                            n.isAnimating = !1;
                        }));
                },
                getFitPos: function (e) {
                    var t,
                        n,
                        o,
                        i,
                        r = e.$content,
                        a = e.$slide,
                        s = e.width || e.opts.width,
                        l = e.height || e.opts.height,
                        c = {};
                    return (
                        !!(e.isLoaded && r && r.length) &&
                        ((t = g.fancybox.getTranslate(this.$refs.stage).width),
                        (n = g.fancybox.getTranslate(this.$refs.stage).height),
                        (t -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight"))),
                        (n -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom"))),
                        (s && l) || ((s = t), (l = n)),
                        t - 0.5 < (s *= o = Math.min(1, t / s, n / l)) && (s = t),
                        n - 0.5 < (l *= o) && (l = n),
                        "image" === e.type
                            ? ((c.top = Math.floor(0.5 * (n - l)) + parseFloat(a.css("paddingTop"))), (c.left = Math.floor(0.5 * (t - s)) + parseFloat(a.css("paddingLeft"))))
                            : "video" === e.contentType && (s / (i = e.opts.width && e.opts.height ? s / l : e.opts.ratio || 16 / 9) < l ? (l = s / i) : l * i < s && (s = l * i)),
                        (c.width = s),
                        (c.height = l),
                        c)
                    );
                },
                update: function (n) {
                    var o = this;
                    g.each(o.slides, function (e, t) {
                        o.updateSlide(t, n);
                    });
                },
                updateSlide: function (e, t) {
                    var n = this,
                        o = e && e.$content,
                        i = e.width || e.opts.width,
                        r = e.height || e.opts.height,
                        a = e.$slide;
                    n.adjustCaption(e),
                        o && (i || r || "video" === e.contentType) && !e.hasError && (g.fancybox.stop(o), g.fancybox.setTranslate(o, n.getFitPos(e)), e.pos === n.currPos && ((n.isAnimating = !1), n.updateCursor())),
                        n.adjustLayout(e),
                        a.length &&
                            (a.trigger("refresh"), e.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)),
                        n.trigger("onUpdate", e, t);
                },
                centerSlide: function (e) {
                    var t = this,
                        n = t.current,
                        o = n.$slide;
                    !t.isClosing &&
                        n &&
                        (o.siblings().css({ transform: "", opacity: "" }),
                        o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                        g.fancybox.animate(
                            o,
                            { top: 0, left: 0, opacity: 1 },
                            void 0 === e ? 0 : e,
                            function () {
                                o.css({ transform: "", opacity: "" }), n.isComplete || t.complete();
                            },
                            !1
                        ));
                },
                isMoved: function (e) {
                    var t,
                        n,
                        o = e || this.current;
                    return !!o && ((n = g.fancybox.getTranslate(this.$refs.stage)), (t = g.fancybox.getTranslate(o.$slide)), !o.$slide.hasClass("fancybox-animated") && (0.5 < Math.abs(t.top - n.top) || 0.5 < Math.abs(t.left - n.left)));
                },
                updateCursor: function (e, t) {
                    var n,
                        o,
                        i = this,
                        r = i.current,
                        a = i.$refs.container;
                    r &&
                        !i.isClosing &&
                        i.Guestures &&
                        (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                        (o = !!(n = i.canPan(e, t)) || i.isZoomable()),
                        a.toggleClass("fancybox-is-zoomable", o),
                        g("[data-fancybox-zoom]").prop("disabled", !o),
                        n
                            ? a.addClass("fancybox-can-pan")
                            : o && ("zoom" === r.opts.clickContent || (g.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)))
                            ? a.addClass("fancybox-can-zoomIn")
                            : r.opts.touch && (r.opts.touch.vertical || 1 < i.group.length) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"));
                },
                isZoomable: function () {
                    var e,
                        t = this.current;
                    if (t && !this.isClosing && "image" === t.type && !t.hasError) {
                        if (!t.isLoaded) return !0;
                        if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0;
                    }
                    return !1;
                },
                isScaledDown: function (e, t) {
                    var n = !1,
                        o = this.current,
                        i = o.$content;
                    return void 0 !== e && void 0 !== t ? (n = e < o.width && t < o.height) : i && (n = (n = g.fancybox.getTranslate(i)).width < o.width && n.height < o.height), n;
                },
                canPan: function (e, t) {
                    var n = this.current,
                        o = null,
                        i = !1;
                    return (
                        "image" === n.type &&
                            (n.isComplete || (e && t)) &&
                            !n.hasError &&
                            ((i = this.getFitPos(n)),
                            void 0 !== e && void 0 !== t ? (o = { width: e, height: t }) : n.isComplete && (o = g.fancybox.getTranslate(n.$content)),
                            o && i && (i = 1.5 < Math.abs(o.width - i.width) || 1.5 < Math.abs(o.height - i.height))),
                        i
                    );
                },
                loadSlide: function (n) {
                    var e,
                        t,
                        o,
                        i = this;
                    if (!n.isLoading && !n.isLoaded) {
                        if (!(n.isLoading = !0) === i.trigger("beforeLoad", n)) return (n.isLoading = !1);
                        switch (((e = n.type), (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e)) {
                            case "image":
                                i.setImage(n);
                                break;
                            case "iframe":
                                i.setIframe(n);
                                break;
                            case "html":
                                i.setContent(n, n.src || n.content);
                                break;
                            case "video":
                                i.setContent(
                                    n,
                                    n.opts.video.tpl
                                        .replace(/\{\{src\}\}/gi, n.src)
                                        .replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "")
                                        .replace("{{poster}}", n.thumb || "")
                                );
                                break;
                            case "inline":
                                g(n.src).length ? i.setContent(n, g(n.src)) : i.setError(n);
                                break;
                            case "ajax":
                                i.showLoading(n),
                                    (o = g.ajax(
                                        g.extend({}, n.opts.ajax.settings, {
                                            url: n.src,
                                            success: function (e, t) {
                                                "success" === t && i.setContent(n, e);
                                            },
                                            error: function (e, t) {
                                                e && "abort" !== t && i.setError(n);
                                            },
                                        })
                                    )),
                                    t.one("onReset", function () {
                                        o.abort();
                                    });
                                break;
                            default:
                                i.setError(n);
                        }
                        return !0;
                    }
                },
                setImage: function (t) {
                    var e,
                        n = this;
                    setTimeout(function () {
                        var e = t.$image;
                        n.isClosing || !t.isLoading || (e && e.length && e[0].complete) || t.hasError || n.showLoading(t);
                    }, 50),
                        n.checkSrcset(t),
                        (t.$content = g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image"))),
                        !1 !== t.opts.preload &&
                            t.opts.width &&
                            t.opts.height &&
                            t.thumb &&
                            ((t.width = t.opts.width),
                            (t.height = t.opts.height),
                            ((e = d.createElement("img")).onerror = function () {
                                g(this).remove(), (t.$ghost = null);
                            }),
                            (e.onload = function () {
                                n.afterLoad(t);
                            }),
                            (t.$ghost = g(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb))),
                        n.setBigImage(t);
                },
                checkSrcset: function (e) {
                    var t,
                        n,
                        o,
                        i,
                        r = e.opts.srcset || e.opts.image.srcset;
                    if (r) {
                        (o = l.devicePixelRatio || 1),
                            (i = l.innerWidth * o),
                            (n = r.split(",").map(function (e) {
                                var o = {};
                                return (
                                    e
                                        .trim()
                                        .split(/\s+/)
                                        .forEach(function (e, t) {
                                            var n = parseInt(e.substring(0, e.length - 1), 10);
                                            if (0 === t) return (o.url = e);
                                            n && ((o.value = n), (o.postfix = e[e.length - 1]));
                                        }),
                                    o
                                );
                            })).sort(function (e, t) {
                                return e.value - t.value;
                            });
                        for (var a = 0; a < n.length; a++) {
                            var s = n[a];
                            if (("w" === s.postfix && s.value >= i) || ("x" === s.postfix && s.value >= o)) {
                                t = s;
                                break;
                            }
                        }
                        !t && n.length && (t = n[n.length - 1]), t && ((e.src = t.url), e.width && e.height && "w" == t.postfix && ((e.height = (e.width / e.height) * t.value), (e.width = t.value)), (e.opts.srcset = r));
                    }
                },
                setBigImage: function (t) {
                    var n = this,
                        e = d.createElement("img"),
                        o = g(e);
                    (t.$image = o
                        .one("error", function () {
                            n.setError(t);
                        })
                        .one("load", function () {
                            var e;
                            t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)),
                                n.isClosing ||
                                    (t.opts.srcset &&
                                        (((e = t.opts.sizes) && "auto" !== e) || (e = (1 < t.width / t.height && 1 < i.width() / i.height() ? "100" : Math.round((t.width / t.height) * 100)) + "vw"),
                                        o.attr("sizes", e).attr("srcset", t.opts.srcset)),
                                    t.$ghost &&
                                        setTimeout(function () {
                                            t.$ghost && !n.isClosing && t.$ghost.hide();
                                        }, Math.min(300, Math.max(1e3, t.height / 1600))),
                                    n.hideLoading(t));
                        })
                        .addClass("fancybox-image")
                        .attr("src", t.src)
                        .appendTo(t.$content)),
                        (e.complete || "complete" == e.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : e.error && o.trigger("error");
                },
                resolveImageSlideSize: function (e, t, n) {
                    var o = parseInt(e.opts.width, 10),
                        i = parseInt(e.opts.height, 10);
                    (e.width = t), (e.height = n), 0 < o && ((e.width = o), (e.height = Math.floor((o * n) / t))), 0 < i && ((e.width = Math.floor((i * t) / n)), (e.height = i));
                },
                setIframe: function (i) {
                    var r,
                        t = this,
                        a = i.opts.iframe,
                        s = i.$slide;
                    (i.$content = g('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>')
                        .css(a.css)
                        .appendTo(s)),
                        s.addClass("fancybox-slide--" + i.contentType),
                        (i.$iframe = r = g(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                            .attr(a.attr)
                            .appendTo(i.$content)),
                        a.preload
                            ? (t.showLoading(i),
                              r.on("load.fb error.fb", function (e) {
                                  (this.isReady = 1), i.$slide.trigger("refresh"), t.afterLoad(i);
                              }),
                              s.on("refresh.fb", function () {
                                  var e,
                                      t = i.$content,
                                      n = a.css.width,
                                      o = a.css.height;
                                  if (1 === r[0].isReady) {
                                      try {
                                          e = r.contents().find("body");
                                      } catch (e) {}
                                      e &&
                                          e.length &&
                                          e.children().length &&
                                          (s.css("overflow", "visible"),
                                          t.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                          void 0 === n && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))),
                                          t.css("width", n || "").css("max-width", ""),
                                          void 0 === o && (o = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))),
                                          t.css("height", o || ""),
                                          s.css("overflow", "auto")),
                                          t.removeClass("fancybox-is-hidden");
                                  }
                              }))
                            : t.afterLoad(i),
                        r.attr("src", i.src),
                        s.one("onReset", function () {
                            try {
                                g(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                            } catch (e) {}
                            g(this).off("refresh.fb").empty(), (i.isLoaded = !1), (i.isRevealed = !1);
                        });
                },
                setContent: function (e, t) {
                    var n;
                    this.isClosing ||
                        (this.hideLoading(e),
                        e.$content && g.fancybox.stop(e.$content),
                        e.$slide.empty(),
                        (n = t) && n.hasOwnProperty && n instanceof g && t.parent().length
                            ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"),
                              (e.$placeholder = g("<div>").hide().insertAfter(t)),
                              t.css("display", "inline-block"))
                            : e.hasError || ("string" === g.type(t) && (t = g("<div>").append(g.trim(t)).contents()), e.opts.filter && (t = g("<div>").html(t).find(e.opts.filter))),
                        e.$slide.one("onReset", function () {
                            g(this).find("video,audio").trigger("pause"),
                                e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), (e.$placeholder = null)),
                                e.$smallBtn && (e.$smallBtn.remove(), (e.$smallBtn = null)),
                                e.hasError || (g(this).empty(), (e.isLoaded = !1), (e.isRevealed = !1));
                        }),
                        g(t).appendTo(e.$slide),
                        g(t).is("video,audio") &&
                            (g(t).addClass("fancybox-video"), g(t).wrap("<div></div>"), (e.contentType = "video"), (e.opts.width = e.opts.width || g(t).attr("width")), (e.opts.height = e.opts.height || g(t).attr("height"))),
                        (e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                        e.$content.siblings().hide(),
                        e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()),
                        e.$content.addClass("fancybox-content"),
                        e.$slide.addClass("fancybox-slide--" + e.contentType),
                        this.afterLoad(e));
                },
                setError: function (e) {
                    (e.hasError = !0),
                        e.$slide
                            .trigger("onReset")
                            .removeClass("fancybox-slide--" + e.contentType)
                            .addClass("fancybox-slide--error"),
                        (e.contentType = "html"),
                        this.setContent(e, this.translate(e, e.opts.errorTpl)),
                        e.pos === this.currPos && (this.isAnimating = !1);
                },
                showLoading: function (e) {
                    (e = e || this.current) && !e.$spinner && (e.$spinner = g(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"));
                },
                hideLoading: function (e) {
                    (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner);
                },
                afterLoad: function (e) {
                    var t = this;
                    t.isClosing ||
                        ((e.isLoading = !1),
                        (e.isLoaded = !0),
                        t.trigger("afterLoad", e),
                        t.hideLoading(e),
                        !e.opts.smallBtn || (e.$smallBtn && e.$smallBtn.length) || (e.$smallBtn = g(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)),
                        e.opts.protect &&
                            e.$content &&
                            !e.hasError &&
                            (e.$content.on("contextmenu.fb", function (e) {
                                return 2 == e.button && e.preventDefault(), !0;
                            }),
                            "image" === e.type && g('<div class="fancybox-spaceball"></div>').appendTo(e.$content)),
                        t.adjustCaption(e),
                        t.adjustLayout(e),
                        e.pos === t.currPos && t.updateCursor(),
                        t.revealContent(e));
                },
                adjustCaption: function (e) {
                    var t,
                        n = this,
                        o = e || n.current,
                        i = o.opts.caption,
                        r = o.opts.preventCaptionOverlap,
                        a = n.$refs.caption,
                        s = !1;
                    a.toggleClass("fancybox-caption--separate", r),
                        r &&
                            i &&
                            i.length &&
                            (o.pos !== n.currPos ? ((t = a.clone().appendTo(a.parent())).children().eq(0).empty().html(i), (s = t.outerHeight(!0)), t.empty().remove()) : n.$caption && (s = n.$caption.outerHeight(!0)),
                            o.$slide.css("padding-bottom", s || ""));
                },
                adjustLayout: function (e) {
                    var t,
                        n,
                        o,
                        i,
                        r = e || this.current;
                    r.isLoaded &&
                        !0 !== r.opts.disableLayoutFix &&
                        (r.$content.css("margin-bottom", ""),
                        r.$content.outerHeight() > r.$slide.height() + 0.5 &&
                            ((o = r.$slide[0].style["padding-bottom"]),
                            (i = r.$slide.css("padding-bottom")),
                            0 < parseFloat(i) && ((t = r.$slide[0].scrollHeight), r.$slide.css("padding-bottom", 0), Math.abs(t - r.$slide[0].scrollHeight) < 1 && (n = i), r.$slide.css("padding-bottom", o))),
                        r.$content.css("margin-bottom", n));
                },
                revealContent: function (e) {
                    var t,
                        n,
                        o,
                        i,
                        r = this,
                        a = e.$slide,
                        s = !1,
                        l = !1,
                        c = r.isMoved(e),
                        u = e.isRevealed;
                    return (
                        (e.isRevealed = !0),
                        (t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"]),
                        (o = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"]),
                        (o = parseInt(void 0 === e.forcedDuration ? o : e.forcedDuration, 10)),
                        (!c && e.pos === r.currPos && o) || (t = !1),
                        "zoom" === t && (e.pos === r.currPos && o && "image" === e.type && !e.hasError && (l = r.getThumbPos(e)) ? (s = r.getFitPos(e)) : (t = "fade")),
                        "zoom" === t
                            ? ((r.isAnimating = !0),
                              (s.scaleX = s.width / l.width),
                              (s.scaleY = s.height / l.height),
                              "auto" == (i = e.opts.zoomOpacity) && (i = 0.1 < Math.abs(e.width / e.height - l.width / l.height)),
                              i && ((l.opacity = 0.1), (s.opacity = 1)),
                              g.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l),
                              p(e.$content),
                              void g.fancybox.animate(e.$content, s, o, function () {
                                  (r.isAnimating = !1), r.complete();
                              }))
                            : (r.updateSlide(e),
                              t
                                  ? (g.fancybox.stop(a),
                                    (n = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t),
                                    a.addClass(n).removeClass("fancybox-slide--current"),
                                    e.$content.removeClass("fancybox-is-hidden"),
                                    p(a),
                                    "image" !== e.type && e.$content.hide().show(0),
                                    void g.fancybox.animate(
                                        a,
                                        "fancybox-slide--current",
                                        o,
                                        function () {
                                            a.removeClass(n).css({ transform: "", opacity: "" }), e.pos === r.currPos && r.complete();
                                        },
                                        !0
                                    ))
                                  : (e.$content.removeClass("fancybox-is-hidden"), u || !c || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void (e.pos === r.currPos && r.complete())))
                    );
                },
                getThumbPos: function (e) {
                    var t,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        c,
                        u = e.$thumb;
                    return (
                        !(
                            !u ||
                            !(s = u[0]) ||
                            s.ownerDocument !== d ||
                            (g(".fancybox-container").css("pointer-events", "none"),
                            (l = { x: s.getBoundingClientRect().left + s.offsetWidth / 2, y: s.getBoundingClientRect().top + s.offsetHeight / 2 }),
                            (c = d.elementFromPoint(l.x, l.y) === s),
                            g(".fancybox-container").css("pointer-events", ""),
                            !c)
                        ) &&
                        ((t = g.fancybox.getTranslate(u)),
                        (n = parseFloat(u.css("border-top-width") || 0)),
                        (o = parseFloat(u.css("border-right-width") || 0)),
                        (i = parseFloat(u.css("border-bottom-width") || 0)),
                        (r = parseFloat(u.css("border-left-width") || 0)),
                        (a = { top: t.top + n, left: t.left + r, width: t.width - o - r, height: t.height - n - i, scaleX: 1, scaleY: 1 }),
                        0 < t.width && 0 < t.height && a)
                    );
                },
                complete: function () {
                    var e,
                        n = this,
                        t = n.current,
                        o = {};
                    !n.isMoved() &&
                        t.isLoaded &&
                        (t.isComplete ||
                            ((t.isComplete = !0),
                            t.$slide.siblings().trigger("onReset"),
                            n.preload("inline"),
                            p(t.$slide),
                            t.$slide.addClass("fancybox-slide--complete"),
                            g.each(n.slides, function (e, t) {
                                t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? (o[t.pos] = t) : t && (g.fancybox.stop(t.$slide), t.$slide.off().remove());
                            }),
                            (n.slides = o)),
                        (n.isAnimating = !1),
                        n.updateCursor(),
                        n.trigger("afterShow"),
                        t.opts.video.autoStart &&
                            t.$slide
                                .find("video,audio")
                                .filter(":visible:first")
                                .trigger("play")
                                .one("ended", function () {
                                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next();
                                }),
                        t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)),
                        t.$slide.scrollTop(0).scrollLeft(0));
                },
                preload: function (e) {
                    var t,
                        n,
                        o = this;
                    o.group.length < 2 || ((n = o.slides[o.currPos + 1]), (t = o.slides[o.currPos - 1]) && t.type === e && o.loadSlide(t), n && n.type === e && o.loadSlide(n));
                },
                focus: function (e, t) {
                    var n,
                        o,
                        i = this,
                        r = [
                            "a[href]",
                            "area[href]",
                            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                            "select:not([disabled]):not([aria-hidden])",
                            "textarea:not([disabled]):not([aria-hidden])",
                            "button:not([disabled]):not([aria-hidden])",
                            "iframe",
                            "object",
                            "embed",
                            "video",
                            "audio",
                            "[contenteditable]",
                            '[tabindex]:not([tabindex^="-"])',
                        ].join(",");
                    i.isClosing ||
                        ((n = (n = !e && i.current && i.current.isComplete ? i.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : i.$refs.container.find("*:visible")).filter(r).filter(function () {
                            return "hidden" !== g(this).css("visibility") && !g(this).hasClass("disabled");
                        })).length
                            ? ((o = n.index(d.activeElement)),
                              e && e.shiftKey ? (o < 0 || 0 == o) && (e.preventDefault(), n.eq(n.length - 1).trigger("focus")) : (o < 0 || o == n.length - 1) && (e && e.preventDefault(), n.eq(0).trigger("focus")))
                            : i.$refs.container.trigger("focus"));
                },
                activate: function () {
                    var t = this;
                    g(".fancybox-container").each(function () {
                        var e = g(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
                    }),
                        (t.isVisible = !0),
                        (t.current || t.isIdle) && (t.update(), t.updateControls()),
                        t.trigger("onActivate"),
                        t.addEvents();
                },
                close: function (e, t) {
                    function n() {
                        u.cleanUp(e);
                    }
                    var o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        c,
                        u = this,
                        d = u.current;
                    return (
                        !u.isClosing &&
                        (!(u.isClosing = !0) === u.trigger("beforeClose", e)
                            ? ((u.isClosing = !1),
                              f(function () {
                                  u.update();
                              }),
                              !1)
                            : (u.removeEvents(),
                              (r = d.$content),
                              (o = d.opts.animationEffect),
                              (i = g.isNumeric(t) ? t : o ? d.opts.animationDuration : 0),
                              d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                              !0 !== e ? g.fancybox.stop(d.$slide) : (o = !1),
                              d.$slide.siblings().trigger("onReset").remove(),
                              i &&
                                  u.$refs.container
                                      .removeClass("fancybox-is-open")
                                      .addClass("fancybox-is-closing")
                                      .css("transition-duration", i + "ms"),
                              u.hideLoading(d),
                              u.hideControls(!0),
                              u.updateCursor(),
                              "zoom" !== o || (r && i && "image" === d.type && !u.isMoved() && !d.hasError && (c = u.getThumbPos(d))) || (o = "fade"),
                              "zoom" === o
                                  ? (g.fancybox.stop(r),
                                    (l = { top: (a = g.fancybox.getTranslate(r)).top, left: a.left, scaleX: a.width / c.width, scaleY: a.height / c.height, width: c.width, height: c.height }),
                                    "auto" == (s = d.opts.zoomOpacity) && (s = 0.1 < Math.abs(d.width / d.height - c.width / c.height)),
                                    s && (c.opacity = 0),
                                    g.fancybox.setTranslate(r, l),
                                    p(r),
                                    g.fancybox.animate(r, c, i, n))
                                  : o && i
                                  ? g.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, n)
                                  : !0 === e
                                  ? setTimeout(n, i)
                                  : n(),
                              !0))
                    );
                },
                cleanUp: function (e) {
                    var t,
                        n,
                        o,
                        i = this,
                        r = i.current.opts.$orig;
                    i.current.$slide.trigger("onReset"),
                        i.$refs.container.empty().remove(),
                        i.trigger("afterClose", e),
                        i.current.opts.backFocus && ((r && r.length && r.is(":visible")) || (r = i.$trigger), r && r.length && ((n = l.scrollX), (o = l.scrollY), r.trigger("focus"), g("html, body").scrollTop(o).scrollLeft(n))),
                        (i.current = null),
                        (t = g.fancybox.getInstance()) ? t.activate() : (g("body").removeClass("fancybox-active compensate-for-scrollbar"), g("#fancybox-style-noscroll").remove());
                },
                trigger: function (e, t) {
                    var n,
                        o = Array.prototype.slice.call(arguments, 1),
                        i = this,
                        r = t && t.opts ? t : i.current;
                    if ((r ? o.unshift(r) : (r = i), o.unshift(i), g.isFunction(r.opts[e]) && (n = r.opts[e].apply(r, o)), !1 === n)) return n;
                    "afterClose" !== e && i.$refs ? i.$refs.container.trigger(e + ".fb", o) : a.trigger(e + ".fb", o);
                },
                updateControls: function () {
                    var e = this,
                        t = e.current,
                        n = t.index,
                        o = e.$refs.container,
                        i = e.$refs.caption,
                        r = t.opts.caption;
                    t.$slide.trigger("refresh"),
                        r && r.length ? (e.$caption = i).children().eq(0).html(r) : (e.$caption = null),
                        e.hasHiddenControls || e.isIdle || e.showControls(),
                        o.find("[data-fancybox-count]").html(e.group.length),
                        o.find("[data-fancybox-index]").html(n + 1),
                        o.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0),
                        o.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1),
                        "image" === t.type
                            ? o
                                  .find("[data-fancybox-zoom]")
                                  .show()
                                  .end()
                                  .find("[data-fancybox-download]")
                                  .attr("href", t.opts.image.src || t.src)
                                  .show()
                            : t.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                        g(d.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus");
                },
                hideControls: function (e) {
                    var t = ["infobar", "toolbar", "nav"];
                    (!e && this.current.opts.preventCaptionOverlap) || t.push("caption"),
                        this.$refs.container.removeClass(
                            t
                                .map(function (e) {
                                    return "fancybox-show-" + e;
                                })
                                .join(" ")
                        ),
                        (this.hasHiddenControls = !0);
                },
                showControls: function () {
                    var e = this,
                        t = e.current ? e.current.opts : e.opts,
                        n = e.$refs.container;
                    (e.hasHiddenControls = !1),
                        (e.idleSecondsCounter = 0),
                        n
                            .toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons))
                            .toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length))
                            .toggleClass("fancybox-show-caption", !!e.$caption)
                            .toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length))
                            .toggleClass("fancybox-is-modal", !!t.modal);
                },
                toggleControls: function () {
                    this.hasHiddenControls ? this.showControls() : this.hideControls();
                },
            }),
                (g.fancybox = {
                    version: "3.5.7",
                    defaults: e,
                    getInstance: function (e) {
                        var t = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                            n = Array.prototype.slice.call(arguments, 1);
                        return t instanceof o && ("string" === g.type(e) ? t[e].apply(t, n) : "function" === g.type(e) && e.apply(t, n), t);
                    },
                    open: function (e, t, n) {
                        return new o(e, t, n);
                    },
                    close: function (e) {
                        var t = this.getInstance();
                        t && (t.close(), !0 === e && this.close(e));
                    },
                    destroy: function () {
                        this.close(!0), a.add("body").off("click.fb-start", "**");
                    },
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: ((h = d.createElement("div")), l.getComputedStyle && l.getComputedStyle(h) && l.getComputedStyle(h).getPropertyValue("transform") && !(d.documentMode && d.documentMode < 11)),
                    getTranslate: function (e) {
                        var t;
                        return !(!e || !e.length) && { top: (t = e[0].getBoundingClientRect()).top || 0, left: t.left || 0, width: t.width, height: t.height, opacity: parseFloat(e.css("opacity")) };
                    },
                    setTranslate: function (e, t) {
                        var n = "",
                            o = {};
                        if (e && t)
                            return (
                                (void 0 === t.left && void 0 === t.top) ||
                                    ((n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px"), (n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")")),
                                void 0 !== t.scaleX && void 0 !== t.scaleY ? (n += " scale(" + t.scaleX + ", " + t.scaleY + ")") : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"),
                                n.length && (o.transform = n),
                                void 0 !== t.opacity && (o.opacity = t.opacity),
                                void 0 !== t.width && (o.width = t.width),
                                void 0 !== t.height && (o.height = t.height),
                                e.css(o)
                            );
                    },
                    animate: function (t, n, o, i, r) {
                        var a,
                            s = this;
                        g.isFunction(o) && ((i = o), (o = null)),
                            s.stop(t),
                            (a = s.getTranslate(t)),
                            t.on(c, function (e) {
                                (e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName)) ||
                                    (s.stop(t),
                                    g.isNumeric(o) && t.css("transition-duration", ""),
                                    g.isPlainObject(n)
                                        ? void 0 !== n.scaleX && void 0 !== n.scaleY && s.setTranslate(t, { top: n.top, left: n.left, width: a.width * n.scaleX, height: a.height * n.scaleY, scaleX: 1, scaleY: 1 })
                                        : !0 !== r && t.removeClass(n),
                                    g.isFunction(i) && i(e));
                            }),
                            g.isNumeric(o) && t.css("transition-duration", o + "ms"),
                            g.isPlainObject(n)
                                ? (void 0 !== n.scaleX && void 0 !== n.scaleY && (delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), g.fancybox.setTranslate(t, n))
                                : t.addClass(n),
                            t.data(
                                "timer",
                                setTimeout(function () {
                                    t.trigger(c);
                                }, o + 33)
                            );
                    },
                    stop: function (e, t) {
                        e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(c), e.off(c).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"));
                    },
                }),
                (g.fn.fancybox = function (e) {
                    var t;
                    return (t = (e = e || {}).selector || !1) ? g("body").off("click.fb-start", t).on("click.fb-start", t, { options: e }, n) : this.off("click.fb-start").on("click.fb-start", { items: this, options: e }, n), this;
                }),
                a.on("click.fb-start", "[data-fancybox]", n),
                a.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
                    g('[data-fancybox="' + g(this).attr("data-fancybox-trigger") + '"]')
                        .eq(g(this).attr("data-fancybox-index") || 0)
                        .trigger("click.fb-start", { $trigger: g(this) });
                }),
                (s = null),
                a.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
                    switch (e.type) {
                        case "mousedown":
                            s = g(this);
                            break;
                        case "mouseup":
                            s = null;
                            break;
                        case "focusin":
                            g(".fancybox-button").removeClass("fancybox-focus"), g(this).is(s) || g(this).is("[disabled]") || g(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            g(".fancybox-button").removeClass("fancybox-focus");
                    }
                });
        }
        var s, h;
    })(window, document, jQuery),
    (function (p) {
        "use strict";
        function h(n, e, t) {
            if (n)
                return (
                    (t = t || ""),
                    "object" === p.type(t) && (t = p.param(t, !0)),
                    p.each(e, function (e, t) {
                        n = n.replace("$" + e, t || "");
                    }),
                    t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t),
                    n
                );
        }
        var o = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
            },
            vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
            instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (e) {
                    return (
                        "//maps.google." +
                        e[2] +
                        "/?ll=" +
                        (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") +
                        "&output=" +
                        (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
                    );
                },
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                },
            },
        };
        p(document).on("objectNeedsType.fb", function (e, t, i) {
            var r,
                a,
                s,
                l,
                c,
                u,
                d = i.src || "",
                f = !1,
                n = p.extend(!0, {}, o, i.opts.media);
            p.each(n, function (e, t) {
                if ((a = d.match(t.matcher))) {
                    if (((f = t.type), (u = e), (c = {}), t.paramPlace && a[t.paramPlace])) {
                        "?" == (l = a[t.paramPlace])[0] && (l = l.substring(1)), (l = l.split("&"));
                        for (var n = 0; n < l.length; ++n) {
                            var o = l[n].split("=", 2);
                            2 == o.length && (c[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")));
                        }
                    }
                    return (
                        (s = p.extend(!0, {}, t.params, i.opts[e], c)),
                        (d = "function" === p.type(t.url) ? t.url.call(this, a, s, i) : h(t.url, a, s)),
                        (r = "function" === p.type(t.thumb) ? t.thumb.call(this, a, s, i) : h(t.thumb, a)),
                        "youtube" === e
                            ? (d = d.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, o) {
                                  return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
                              }))
                            : "vimeo" === e && (d = d.replace("&%23", "#")),
                        !1
                    );
                }
            }),
                f
                    ? (i.opts.thumb || (i.opts.$thumb && i.opts.$thumb.length) || (i.opts.thumb = r),
                      "iframe" === f && (i.opts = p.extend(!0, i.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                      p.extend(i, { type: f, src: d, origSrc: i.src, contentSource: u, contentType: "image" === f ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video" }))
                    : d && (i.type = i.opts.defaultType);
        });
        var i = {
            youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
            vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
            load: function (e) {
                var t,
                    n = this;
                this[e].loaded
                    ? setTimeout(function () {
                          n.done(e);
                      })
                    : this[e].loading ||
                      ((this[e].loading = !0),
                      ((t = document.createElement("script")).type = "text/javascript"),
                      (t.src = this[e].src),
                      "youtube" === e
                          ? (window.onYouTubeIframeAPIReady = function () {
                                (n[e].loaded = !0), n.done(e);
                            })
                          : (t.onload = function () {
                                (n[e].loaded = !0), n.done(e);
                            }),
                      document.body.appendChild(t));
            },
            done: function (e) {
                var t, n;
                "youtube" === e && delete window.onYouTubeIframeAPIReady,
                    (t = p.fancybox.getInstance()) &&
                        ((n = t.current.$content.find("iframe")),
                        "youtube" === e && void 0 !== YT && YT
                            ? new YT.Player(n.attr("id"), {
                                  events: {
                                      onStateChange: function (e) {
                                          0 == e.data && t.next();
                                      },
                                  },
                              })
                            : "vimeo" === e &&
                              void 0 !== Vimeo &&
                              Vimeo &&
                              new Vimeo.Player(n).on("ended", function () {
                                  t.next();
                              }));
            },
        };
        p(document).on({
            "afterShow.fb": function (e, t, n) {
                1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (g, l, m) {
        "use strict";
        function u(e) {
            var t = [];
            for (var n in (e = (e = e.originalEvent || e || g.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]))
                e[n].pageX ? t.push({ x: e[n].pageX, y: e[n].pageY }) : e[n].clientX && t.push({ x: e[n].clientX, y: e[n].clientY });
            return t;
        }
        function v(e, t, n) {
            return t && e ? ("x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))) : 0;
        }
        function c(e) {
            if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || m.isFunction(e.get(0).onclick) || e.data("selectable")) return 1;
            for (var t = 0, n = e[0].attributes, o = n.length; t < o; t++) if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1;
        }
        function d(e) {
            for (
                var t, n, o, i, r, a = !1;
                ((t = e.get(0)),
                (r = i = o = n = void 0),
                (n = g.getComputedStyle(t)["overflow-y"]),
                (o = g.getComputedStyle(t)["overflow-x"]),
                (i = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight),
                (r = ("scroll" === o || "auto" === o) && t.scrollWidth > t.clientWidth),
                !(a = i || r)) &&
                (e = e.parent()).length &&
                !e.hasClass("fancybox-stage") &&
                !e.is("body");

            );
            return a;
        }
        function n(e) {
            var t = this;
            (t.instance = e), (t.$bg = e.$refs.bg), (t.$stage = e.$refs.stage), (t.$container = e.$refs.container), t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(t, "ontouchstart"));
        }
        var y =
                g.requestAnimationFrame ||
                g.webkitRequestAnimationFrame ||
                g.mozRequestAnimationFrame ||
                g.oRequestAnimationFrame ||
                function (e) {
                    return g.setTimeout(e, 1e3 / 60);
                },
            b =
                g.cancelAnimationFrame ||
                g.webkitCancelAnimationFrame ||
                g.mozCancelAnimationFrame ||
                g.oCancelAnimationFrame ||
                function (e) {
                    g.clearTimeout(e);
                };
        (n.prototype.destroy = function () {
            var e = this;
            e.$container.off(".fb.touch"), m(l).off(".fb.touch"), e.requestId && (b(e.requestId), (e.requestId = null)), e.tapped && (clearTimeout(e.tapped), (e.tapped = null));
        }),
            (n.prototype.ontouchstart = function (e) {
                var t = this,
                    n = m(e.target),
                    o = t.instance,
                    i = o.current,
                    r = i.$slide,
                    a = i.$content,
                    s = "touchstart" == e.type;
                if (
                    (s && t.$container.off("mousedown.fb.touch"),
                    (!e.originalEvent || 2 != e.originalEvent.button) && r.length && n.length && !c(n) && !c(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left)))
                ) {
                    if (!i || o.isAnimating || i.$slide.hasClass("fancybox-animated")) return e.stopPropagation(), void e.preventDefault();
                    (t.realPoints = t.startPoints = u(e)),
                        t.startPoints.length &&
                            (i.touch && e.stopPropagation(),
                            (t.startEvent = e),
                            (t.canTap = !0),
                            (t.$target = n),
                            (t.$content = a),
                            (t.opts = i.opts.touch),
                            (t.isPanning = !1),
                            (t.isSwiping = !1),
                            (t.isZooming = !1),
                            (t.isScrolling = !1),
                            (t.canPan = o.canPan()),
                            (t.startTime = new Date().getTime()),
                            (t.distanceX = t.distanceY = t.distance = 0),
                            (t.canvasWidth = Math.round(r[0].clientWidth)),
                            (t.canvasHeight = Math.round(r[0].clientHeight)),
                            (t.contentLastPos = null),
                            (t.contentStartPos = m.fancybox.getTranslate(t.$content) || { top: 0, left: 0 }),
                            (t.sliderStartPos = m.fancybox.getTranslate(r)),
                            (t.stagePos = m.fancybox.getTranslate(o.$refs.stage)),
                            (t.sliderStartPos.top -= t.stagePos.top),
                            (t.sliderStartPos.left -= t.stagePos.left),
                            (t.contentStartPos.top -= t.stagePos.top),
                            (t.contentStartPos.left -= t.stagePos.left),
                            m(l)
                                .off(".fb.touch")
                                .on(s ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(t, "ontouchend"))
                                .on(s ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(t, "ontouchmove")),
                            m.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0),
                            (((t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length)) || (n.is(".fancybox-image") && e.preventDefault(), m.fancybox.isMobile && n.parents(".fancybox-caption").length)) &&
                                ((t.isScrollable = d(n) || d(n.parent())),
                                (m.fancybox.isMobile && t.isScrollable) || e.preventDefault(),
                                (1 !== t.startPoints.length && !i.hasError) || (t.canPan ? (m.fancybox.stop(t.$content), (t.isPanning = !0)) : (t.isSwiping = !0), t.$container.addClass("fancybox-is-grabbing")),
                                2 === t.startPoints.length &&
                                    "image" === i.type &&
                                    (i.isLoaded || i.$ghost) &&
                                    ((t.canTap = !1),
                                    (t.isSwiping = !1),
                                    (t.isPanning = !1),
                                    (t.isZooming = !0),
                                    m.fancybox.stop(t.$content),
                                    (t.centerPointStartX = 0.5 * (t.startPoints[0].x + t.startPoints[1].x) - m(g).scrollLeft()),
                                    (t.centerPointStartY = 0.5 * (t.startPoints[0].y + t.startPoints[1].y) - m(g).scrollTop()),
                                    (t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width),
                                    (t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height),
                                    (t.startDistanceBetweenFingers = v(t.startPoints[0], t.startPoints[1])))));
                }
            }),
            (n.prototype.onscroll = function (e) {
                (this.isScrolling = !0), l.removeEventListener("scroll", this.onscroll, !0);
            }),
            (n.prototype.ontouchmove = function (e) {
                var t = this;
                return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons
                    ? void t.ontouchend(e)
                    : t.isScrolling
                    ? void (t.canTap = !1)
                    : ((t.newPoints = u(e)),
                      void (
                          (t.opts || t.canPan) &&
                          t.newPoints.length &&
                          t.newPoints.length &&
                          ((t.isSwiping && !0 === t.isSwiping) || e.preventDefault(),
                          (t.distanceX = v(t.newPoints[0], t.startPoints[0], "x")),
                          (t.distanceY = v(t.newPoints[0], t.startPoints[0], "y")),
                          (t.distance = v(t.newPoints[0], t.startPoints[0])),
                          0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))
                      ));
            }),
            (n.prototype.onSwipe = function (e) {
                var t,
                    i = this,
                    r = i.instance,
                    n = i.isSwiping,
                    o = i.sliderStartPos.left || 0;
                if (!0 !== n)
                    "x" == n &&
                        (0 < i.distanceX && (i.instance.group.length < 2 || (0 === i.instance.current.index && !i.instance.current.opts.loop))
                            ? (o += Math.pow(i.distanceX, 0.8))
                            : i.distanceX < 0 && (i.instance.group.length < 2 || (i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop))
                            ? (o -= Math.pow(-i.distanceX, 0.8))
                            : (o += i.distanceX)),
                        (i.sliderLastPos = { top: "x" == n ? 0 : i.sliderStartPos.top + i.distanceY, left: o }),
                        i.requestId && (b(i.requestId), (i.requestId = null)),
                        (i.requestId = y(function () {
                            i.sliderLastPos &&
                                (m.each(i.instance.slides, function (e, t) {
                                    var n = t.pos - i.instance.currPos;
                                    m.fancybox.setTranslate(t.$slide, { top: i.sliderLastPos.top, left: i.sliderLastPos.left + n * i.canvasWidth + n * t.opts.gutter });
                                }),
                                i.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (10 < Math.abs(i.distance)) {
                    if (
                        ((i.canTap = !1),
                        r.group.length < 2 && i.opts.vertical
                            ? (i.isSwiping = "y")
                            : r.isDragging || !1 === i.opts.vertical || ("auto" === i.opts.vertical && 800 < m(g).width())
                            ? (i.isSwiping = "x")
                            : ((t = Math.abs((180 * Math.atan2(i.distanceY, i.distanceX)) / Math.PI)), (i.isSwiping = 45 < t && t < 135 ? "y" : "x")),
                        "y" === i.isSwiping && m.fancybox.isMobile && i.isScrollable)
                    )
                        return void (i.isScrolling = !0);
                    (r.isDragging = i.isSwiping),
                        (i.startPoints = i.newPoints),
                        m.each(r.slides, function (e, t) {
                            var n, o;
                            m.fancybox.stop(t.$slide),
                                (n = m.fancybox.getTranslate(t.$slide)),
                                (o = m.fancybox.getTranslate(r.$refs.stage)),
                                t.$slide
                                    .css({ transform: "", opacity: "", "transition-duration": "" })
                                    .removeClass("fancybox-animated")
                                    .removeClass(function (e, t) {
                                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    }),
                                t.pos === r.current.pos && ((i.sliderStartPos.top = n.top - o.top), (i.sliderStartPos.left = n.left - o.left)),
                                m.fancybox.setTranslate(t.$slide, { top: n.top - o.top, left: n.left - o.left });
                        }),
                        r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
                }
            }),
            (n.prototype.onPan = function () {
                var e = this;
                v(e.newPoints[0], e.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5)
                    ? (e.startPoints = e.newPoints)
                    : ((e.canTap = !1),
                      (e.contentLastPos = e.limitMovement()),
                      e.requestId && b(e.requestId),
                      (e.requestId = y(function () {
                          m.fancybox.setTranslate(e.$content, e.contentLastPos);
                      })));
            }),
            (n.prototype.limitMovement = function () {
                var e = this,
                    t = e.canvasWidth,
                    n = e.canvasHeight,
                    o = e.distanceX,
                    i = e.distanceY,
                    r = e.contentStartPos,
                    a = r.left,
                    s = r.top,
                    l = r.width,
                    c = r.height,
                    u = t < l ? a + o : a,
                    d = s + i,
                    f = Math.max(0, 0.5 * t - 0.5 * l),
                    p = Math.max(0, 0.5 * n - 0.5 * c),
                    h = Math.min(t - l, 0.5 * t - 0.5 * l),
                    g = Math.min(n - c, 0.5 * n - 0.5 * c);
                return (
                    0 < o && f < u && (u = f - 1 + Math.pow(-f + a + o, 0.8) || 0),
                    o < 0 && u < h && (u = h + 1 - Math.pow(h - a - o, 0.8) || 0),
                    0 < i && p < d && (d = p - 1 + Math.pow(-p + s + i, 0.8) || 0),
                    i < 0 && d < g && (d = g + 1 - Math.pow(g - s - i, 0.8) || 0),
                    { top: d, left: u }
                );
            }),
            (n.prototype.limitPosition = function (e, t, n, o) {
                var i = this.canvasWidth,
                    r = this.canvasHeight;
                return (e = i < n ? ((e = 0 < e ? 0 : e) < i - n ? i - n : e) : Math.max(0, i / 2 - n / 2)), { top: (t = r < o ? ((t = 0 < t ? 0 : t) < r - o ? r - o : t) : Math.max(0, r / 2 - o / 2)), left: e };
            }),
            (n.prototype.onZoom = function () {
                var e = this,
                    t = e.contentStartPos,
                    n = t.width,
                    o = t.height,
                    i = t.left,
                    r = t.top,
                    a = v(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                    s = Math.floor(n * a),
                    l = Math.floor(o * a),
                    c = (n - s) * e.percentageOfImageAtPinchPointX,
                    u = (o - l) * e.percentageOfImageAtPinchPointY,
                    d = (e.newPoints[0].x + e.newPoints[1].x) / 2 - m(g).scrollLeft(),
                    f = (e.newPoints[0].y + e.newPoints[1].y) / 2 - m(g).scrollTop(),
                    p = d - e.centerPointStartX,
                    h = { top: r + (u + (f - e.centerPointStartY)), left: i + (c + p), scaleX: a, scaleY: a };
                (e.canTap = !1),
                    (e.newWidth = s),
                    (e.newHeight = l),
                    (e.contentLastPos = h),
                    e.requestId && b(e.requestId),
                    (e.requestId = y(function () {
                        m.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (n.prototype.ontouchend = function (e) {
                var t = this,
                    n = t.isSwiping,
                    o = t.isPanning,
                    i = t.isZooming,
                    r = t.isScrolling;
                if (
                    ((t.endPoints = u(e)),
                    (t.dMs = Math.max(new Date().getTime() - t.startTime, 1)),
                    t.$container.removeClass("fancybox-is-grabbing"),
                    m(l).off(".fb.touch"),
                    l.removeEventListener("scroll", t.onscroll, !0),
                    t.requestId && (b(t.requestId), (t.requestId = null)),
                    (t.isSwiping = !1),
                    (t.isPanning = !1),
                    (t.isZooming = !1),
                    (t.isScrolling = !1),
                    (t.instance.isDragging = !1),
                    t.canTap)
                )
                    return t.onTap(e);
                (t.speed = 100), (t.velocityX = (t.distanceX / t.dMs) * 0.5), (t.velocityY = (t.distanceY / t.dMs) * 0.5), o ? t.endPanning() : i ? t.endZooming() : t.endSwiping(n, r);
            }),
            (n.prototype.endSwiping = function (e, t) {
                var n = this,
                    o = !1,
                    i = n.instance.group.length,
                    r = Math.abs(n.distanceX),
                    a = "x" == e && 1 < i && ((130 < n.dMs && 10 < r) || 50 < r);
                (n.sliderLastPos = null),
                    "y" == e && !t && 50 < Math.abs(n.distanceY)
                        ? (m.fancybox.animate(n.instance.current.$slide, { top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY, opacity: 0 }, 200), (o = n.instance.close(!0, 250)))
                        : a && 0 < n.distanceX
                        ? (o = n.instance.previous(300))
                        : a && n.distanceX < 0 && (o = n.instance.next(300)),
                    !1 !== o || ("x" != e && "y" != e) || n.instance.centerSlide(200),
                    n.$container.removeClass("fancybox-is-sliding");
            }),
            (n.prototype.endPanning = function () {
                var e,
                    t,
                    n,
                    o = this;
                o.contentLastPos &&
                    ((t = !1 === o.opts.momentum || 350 < o.dMs ? ((e = o.contentLastPos.left), o.contentLastPos.top) : ((e = o.contentLastPos.left + 500 * o.velocityX), o.contentLastPos.top + 500 * o.velocityY)),
                    ((n = o.limitPosition(e, t, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width),
                    (n.height = o.contentStartPos.height),
                    m.fancybox.animate(o.$content, n, 366));
            }),
            (n.prototype.endZooming = function () {
                var e,
                    t,
                    n,
                    o,
                    i = this,
                    r = i.instance.current,
                    a = i.newWidth,
                    s = i.newHeight;
                i.contentLastPos &&
                    ((e = i.contentLastPos.left),
                    (o = { top: (t = i.contentLastPos.top), left: e, width: a, height: s, scaleX: 1, scaleY: 1 }),
                    m.fancybox.setTranslate(i.$content, o),
                    a < i.canvasWidth && s < i.canvasHeight
                        ? i.instance.scaleToFit(150)
                        : a > r.width || s > r.height
                        ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150)
                        : ((n = i.limitPosition(e, t, a, s)), m.fancybox.animate(i.$content, n, 150)));
            }),
            (n.prototype.onTap = function (n) {
                function e(e) {
                    var t = a.opts[e];
                    if ((m.isFunction(t) && (t = t.apply(r, [a, n])), t))
                        switch (t) {
                            case "close":
                                r.close(o.startEvent);
                                break;
                            case "toggleControls":
                                r.toggleControls();
                                break;
                            case "next":
                                r.next();
                                break;
                            case "nextOrClose":
                                1 < r.group.length ? r.next() : r.close(o.startEvent);
                                break;
                            case "zoom":
                                "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(l, c) : r.group.length < 2 && r.close(o.startEvent));
                        }
                }
                var t,
                    o = this,
                    i = m(n.target),
                    r = o.instance,
                    a = r.current,
                    s = (n && u(n)) || o.startPoints,
                    l = s[0] ? s[0].x - m(g).scrollLeft() - o.stagePos.left : 0,
                    c = s[0] ? s[0].y - m(g).scrollTop() - o.stagePos.top : 0;
                if ((!n.originalEvent || 2 != n.originalEvent.button) && (i.is("img") || !(l > i[0].clientWidth + i.offset().left))) {
                    if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
                    else if (i.is(".fancybox-slide")) t = "Slide";
                    else {
                        if (!r.current.$content || !r.current.$content.find(i).addBack().filter(i).length) return;
                        t = "Content";
                    }
                    if (o.tapped) {
                        if ((clearTimeout(o.tapped), (o.tapped = null), 50 < Math.abs(l - o.tapX) || 50 < Math.abs(c - o.tapY))) return this;
                        e("dblclick" + t);
                    } else
                        (o.tapX = l),
                            (o.tapY = c),
                            a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t]
                                ? (o.tapped = setTimeout(function () {
                                      (o.tapped = null), r.isAnimating || e("click" + t);
                                  }, 500))
                                : e("click" + t);
                    return this;
                }
            }),
            m(l)
                .on("onActivate.fb", function (e, t) {
                    t && !t.Guestures && (t.Guestures = new n(t));
                })
                .on("beforeClose.fb", function (e, t) {
                    t && t.Guestures && t.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (a, s) {
        "use strict";
        s.extend(!0, s.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        function n(e) {
            (this.instance = e), this.init();
        }
        s.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var e = this,
                    t = e.instance,
                    n = t.group[t.currIndex].opts.slideShow;
                (e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    e.toggle();
                })),
                    t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = s('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner));
            },
            set: function (e) {
                var t = this,
                    n = t.instance,
                    o = n.current;
                o && (!0 === e || o.opts.loop || n.currIndex < n.group.length - 1)
                    ? t.isActive &&
                      "video" !== o.contentType &&
                      (t.$progress && s.fancybox.animate(t.$progress.show(), { scaleX: 1 }, o.opts.slideShow.speed),
                      (t.timer = setTimeout(function () {
                          n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0);
                      }, o.opts.slideShow.speed)))
                    : (t.stop(), (n.idleSecondsCounter = 0), n.showControls());
            },
            clear: function () {
                clearTimeout(this.timer), (this.timer = null), this.$progress && this.$progress.removeAttr("style").hide();
            },
            start: function () {
                var e = this,
                    t = e.instance.current;
                t &&
                    (e.$button
                        .attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    (e.isActive = !0),
                    t.isComplete && e.set(!0),
                    e.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var e = this,
                    t = e.instance.current;
                e.clear(),
                    e.$button
                        .attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (e.isActive = !1),
                    e.instance.trigger("onSlideShowChange", !1),
                    e.$progress && e.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                this.isActive ? this.stop() : this.start();
            },
        }),
            s(a).on({
                "onInit.fb": function (e, t) {
                    t && !t.SlideShow && (t.SlideShow = new n(t));
                },
                "beforeShow.fb": function (e, t, n, o) {
                    var i = t && t.SlideShow;
                    o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
                },
                "afterShow.fb": function (e, t, n) {
                    var o = t && t.SlideShow;
                    o && o.isActive && o.set();
                },
                "afterKeydown.fb": function (e, t, n, o, i) {
                    var r = t && t.SlideShow;
                    !r || !n.opts.slideShow || (80 !== i && 32 !== i) || s(a.activeElement).is("button,a,input") || (o.preventDefault(), r.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (e, t) {
                    var n = t && t.SlideShow;
                    n && n.stop();
                },
            }),
            s(a).on("visibilitychange", function () {
                var e = s.fancybox.getInstance(),
                    t = e && e.SlideShow;
                t && t.isActive && (a.hidden ? t.clear() : t.set());
            });
    })(document, jQuery),
    (function (r, n) {
        "use strict";
        var o,
            i = (function () {
                for (
                    var e = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                        ],
                        t = {},
                        n = 0;
                    n < e.length;
                    n++
                ) {
                    var o = e[n];
                    if (o && o[1] in r) {
                        for (var i = 0; i < o.length; i++) t[e[0][i]] = o[i];
                        return t;
                    }
                }
                return !1;
            })();
        i &&
            ((o = {
                request: function (e) {
                    (e = e || r.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    r[i.exitFullscreen]();
                },
                toggle: function (e) {
                    (e = e || r.documentElement), this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function () {
                    return Boolean(r[i.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(r[i.fullscreenEnabled]);
                },
            }),
            n.extend(!0, n.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
            n(r).on(i.fullscreenchange, function () {
                var e = o.isFullscreen(),
                    t = n.fancybox.getInstance();
                t &&
                    (t.current && "image" === t.current.type && t.isAnimating && ((t.isAnimating = !1), t.update(!0, !0, 0), t.isComplete || t.complete()),
                    t.trigger("onFullscreenChange", e),
                    t.$refs.container.toggleClass("fancybox-is-fullscreen", e),
                    t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e));
            })),
            n(r).on({
                "onInit.fb": function (e, t) {
                    i
                        ? t && t.group[t.currIndex].opts.fullScreen
                            ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
                                  e.stopPropagation(), e.preventDefault(), o.toggle();
                              }),
                              t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && o.request(),
                              (t.FullScreen = o))
                            : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                        : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                },
                "afterKeydown.fb": function (e, t, n, o, i) {
                    t && t.FullScreen && 70 === i && (o.preventDefault(), t.FullScreen.toggle());
                },
                "beforeClose.fb": function (e, t) {
                    t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
                },
            });
    })(document, jQuery),
    (function (e, r) {
        "use strict";
        var a = "fancybox-thumbs";
        r.fancybox.defaults = r.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            r.fancybox.defaults
        );
        function o(e) {
            this.init(e);
        }
        r.extend(o.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (e) {
                var t = this,
                    n = e.group,
                    o = 0;
                (t.instance = e), (t.opts = n[e.currIndex].opts.thumbs), ((e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (var i = 0, r = n.length; i < r && (n[i].thumb && o++, !(1 < o)); i++);
                1 < o && t.opts
                    ? (t.$button.removeAttr("style").on("click", function () {
                          t.toggle();
                      }),
                      (t.isActive = !0))
                    : t.$button.hide();
            },
            create: function () {
                var n,
                    e = this,
                    t = e.instance,
                    o = e.opts.parentEl,
                    i = [];
                e.$grid ||
                    ((e.$grid = r('<div class="' + a + " " + a + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(o).addBack().filter(o))),
                    e.$grid.on("click", "a", function () {
                        t.jumpTo(r(this).attr("data-index"));
                    })),
                    e.$list || (e.$list = r('<div class="' + a + '__list">').appendTo(e.$grid)),
                    r.each(t.group, function (e, t) {
                        (n = t.thumb) || "image" !== t.type || (n = t.src),
                            i.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                    }),
                    (e.$list[0].innerHTML = i.join("")),
                    "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (e) {
                var t,
                    n,
                    o = this,
                    i = o.$list,
                    r = o.$grid;
                o.instance.current &&
                    ((n = (t = i
                        .children()
                        .removeClass("fancybox-thumbs-active")
                        .filter('[data-index="' + o.instance.current.index + '"]')
                        .addClass("fancybox-thumbs-active")).position()),
                    "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - t.outerHeight())
                        ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, e)
                        : "x" === o.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - t.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, e));
            },
            update: function () {
                var e = this;
                e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"),
                    e.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            r(e).on({
                "onInit.fb": function (e, t) {
                    var n;
                    !t || t.Thumbs || ((n = new o(t)).isActive && !0 === n.opts.autoStart && n.show());
                },
                "beforeShow.fb": function (e, t, n, o) {
                    var i = t && t.Thumbs;
                    i && i.isVisible && i.focus(o ? 0 : 250);
                },
                "afterKeydown.fb": function (e, t, n, o, i) {
                    var r = t && t.Thumbs;
                    r && r.isActive && 71 === i && (o.preventDefault(), r.toggle());
                },
                "beforeClose.fb": function (e, t) {
                    var n = t && t.Thumbs;
                    n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (e, r) {
        "use strict";
        r.extend(!0, r.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (e, t) {
                    return (!e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src)) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            r(e).on("click", "[data-fancybox-share]", function () {
                var e,
                    t,
                    n,
                    o = r.fancybox.getInstance(),
                    i = o.current || null;
                i &&
                    ("function" === r.type(i.opts.share.url) && (e = i.opts.share.url.apply(i, [o, i])),
                    (t = i.opts.share.tpl
                        .replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "")
                        .replace(/\{\{url\}\}/g, encodeURIComponent(e))
                        .replace(
                            /\{\{url_raw\}\}/g,
                            ((n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }),
                            String(e).replace(/[&<>"'`=\/]/g, function (e) {
                                return n[e];
                            }))
                        )
                        .replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : "")),
                    r.fancybox.open({
                        src: o.translate(o, t),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (e, t) {
                                o.$refs.container.one("beforeClose.fb", function () {
                                    e.close(null, 0);
                                }),
                                    t.$content.find(".fancybox-share__button").click(function () {
                                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (r, a, i) {
        "use strict";
        function s() {
            var e = r.location.hash.substr(1),
                t = e.split("-"),
                n = (1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10)) || 1;
            return { hash: e, index: n < 1 ? 1 : n, gallery: t.join("-") };
        }
        function t(e) {
            "" !== e.gallery &&
                i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']")
                    .eq(e.index - 1)
                    .focus()
                    .trigger("click.fb-start");
        }
        function l(e) {
            var t, n;
            return !!e && "" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n;
        }
        i.escapeSelector ||
            (i.escapeSelector = function (e) {
                return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
                    return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                });
            }),
            i(function () {
                !1 !== i.fancybox.defaults.hash &&
                    (i(a).on({
                        "onInit.fb": function (e, t) {
                            var n, o;
                            !1 !== t.group[t.currIndex].opts.hash && ((n = s()), (o = l(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1));
                        },
                        "beforeShow.fb": function (e, t, n, o) {
                            var i;
                            n &&
                                !1 !== n.opts.hash &&
                                (i = l(t)) &&
                                ((t.currentHash = i + (1 < t.group.length ? "-" + (n.index + 1) : "")),
                                r.location.hash !== "#" + t.currentHash &&
                                    (o && !t.origHash && (t.origHash = r.location.hash),
                                    t.hashTimer && clearTimeout(t.hashTimer),
                                    (t.hashTimer = setTimeout(function () {
                                        "replaceState" in r.history
                                            ? (r.history[o ? "pushState" : "replaceState"]({}, a.title, r.location.pathname + r.location.search + "#" + t.currentHash), o && (t.hasCreatedHistory = !0))
                                            : (r.location.hash = t.currentHash),
                                            (t.hashTimer = null);
                                    }, 300))));
                        },
                        "beforeClose.fb": function (e, t, n) {
                            n &&
                                !1 !== n.opts.hash &&
                                (clearTimeout(t.hashTimer),
                                t.currentHash && t.hasCreatedHistory
                                    ? r.history.back()
                                    : t.currentHash && ("replaceState" in r.history ? r.history.replaceState({}, a.title, r.location.pathname + r.location.search + (t.origHash || "")) : (r.location.hash = t.origHash)),
                                (t.currentHash = null));
                        },
                    }),
                    i(r).on("hashchange.fb", function () {
                        var e = s(),
                            o = null;
                        i.each(i(".fancybox-container").get().reverse(), function (e, t) {
                            var n = i(t).data("FancyBox");
                            if (n && n.currentHash) return (o = n), !1;
                        }),
                            o ? o.currentHash === e.gallery + "-" + e.index || (1 === e.index && o.currentHash == e.gallery) || ((o.currentHash = null), o.close()) : "" !== e.gallery && t(e);
                    }),
                    setTimeout(function () {
                        i.fancybox.getInstance() || t(s());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (e, t) {
        "use strict";
        var i = new Date().getTime();
        t(e).on({
            "onInit.fb": function (e, o, t) {
                o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
                    var t = o.current,
                        n = new Date().getTime();
                    o.group.length < 2 ||
                        !1 === t.opts.wheel ||
                        ("auto" === t.opts.wheel && "image" !== t.type) ||
                        (e.preventDefault(),
                        e.stopPropagation(),
                        t.$slide.hasClass("fancybox-animated") || ((e = e.originalEvent || e), n - i < 250 || ((i = n), o[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())));
                });
            },
        });
    })(document, jQuery),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define("simpleParallax", [], t)
            : "object" == typeof exports
            ? (exports.simpleParallax = t())
            : (e.simpleParallax = t());
    })(window, function () {
        return (
            (o = {}),
            (i.m = n = [
                function (e, t, n) {
                    "use strict";
                    n.r(t),
                        n.d(t, "default", function () {
                            return C;
                        });
                    var r = function () {
                        return Element.prototype.closest && "IntersectionObserver" in window;
                    };
                    function o(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }
                    var i =
                            (o(c.prototype, [
                                {
                                    key: "setViewportTop",
                                    value: function (e) {
                                        return (this.positions.top = e ? e.scrollTop : window.pageYOffset), this.positions;
                                    },
                                },
                                {
                                    key: "setViewportBottom",
                                    value: function () {
                                        return (this.positions.bottom = this.positions.top + this.positions.height), this.positions;
                                    },
                                },
                                {
                                    key: "setViewportAll",
                                    value: function (e) {
                                        return (
                                            (this.positions.top = e ? e.scrollTop : window.pageYOffset),
                                            (this.positions.height = e ? e.clientHeight : document.documentElement.clientHeight),
                                            (this.positions.bottom = this.positions.top + this.positions.height),
                                            this.positions
                                        );
                                    },
                                },
                            ]),
                            new c()),
                        a = function (e) {
                            return NodeList.prototype.isPrototypeOf(e) || HTMLCollection.prototype.isPrototypeOf(e) ? Array.from(e) : "string" == typeof e || e instanceof String ? document.querySelectorAll(e) : [e];
                        },
                        s = (function () {
                            for (var e, t = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === e; ) (e = void 0 !== document.createElement("div").style[t[n]] ? t[n] : void 0), (n += 1);
                            return e;
                        })(),
                        l = function (e) {
                            return "video" === e.tagName.toLowerCase() || (!!e && !!e.complete && (void 0 === e.naturalWidth || 0 !== e.naturalWidth));
                        };
                    function c() {
                        !(function (e) {
                            if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function");
                        })(this),
                            (this.positions = { top: 0, bottom: 0, height: 0 });
                    }
                    function u(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                        return o;
                    }
                    function d(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }
                    var f =
                        (d(p.prototype, [
                            {
                                key: "init",
                                value: function (e) {
                                    var t = this;
                                    this.isInit ||
                                        (e && (this.rangeMax = null),
                                        this.element.closest(".simpleParallax") ||
                                            (!1 === this.settings.overflow && this.wrapElement(this.element),
                                            this.setTransformCSS(),
                                            this.getElementOffset(),
                                            this.intersectionObserver(),
                                            this.getTranslateValue(),
                                            this.animate(),
                                            0 < this.settings.delay &&
                                                setTimeout(function () {
                                                    t.setTransitionCSS();
                                                }, 10),
                                            (this.isInit = !0)));
                                },
                            },
                            {
                                key: "wrapElement",
                                value: function () {
                                    var e = this.settings.customWrapper && this.element.closest(this.settings.customWrapper),
                                        t = this.element.closest("picture") || this.element,
                                        n = document.createElement("div");
                                    e && (n = this.element.closest(this.settings.customWrapper)),
                                        n.classList.add("simpleParallax"),
                                        (n.style.overflow = "hidden"),
                                        e || (t.parentNode.insertBefore(n, t), n.appendChild(t)),
                                        (this.elementContainer = n);
                                },
                            },
                            {
                                key: "unWrapElement",
                                value: function () {
                                    var e,
                                        t = this.elementContainer;
                                    this.settings.customWrapper && this.element.closest(this.settings.customWrapper)
                                        ? (t.classList.remove("simpleParallax"), (t.style.overflow = ""))
                                        : t.replaceWith.apply(
                                              t,
                                              (function (e) {
                                                  if (Array.isArray(e)) return u(e);
                                              })((e = t.childNodes)) ||
                                                  (function (e) {
                                                      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                                                  })(e) ||
                                                  (function (e) {
                                                      if (e) {
                                                          if ("string" == typeof e) return u(e, void 0);
                                                          var t = Object.prototype.toString.call(e).slice(8, -1);
                                                          return (
                                                              "Object" === t && e.constructor && (t = e.constructor.name),
                                                              "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? u(e, void 0) : void 0
                                                          );
                                                      }
                                                  })(e) ||
                                                  (function () {
                                                      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                  })()
                                          );
                                },
                            },
                            {
                                key: "setTransformCSS",
                                value: function () {
                                    !1 === this.settings.overflow && (this.element.style[s] = "scale(".concat(this.settings.scale, ")")), (this.element.style.willChange = "transform");
                                },
                            },
                            {
                                key: "setTransitionCSS",
                                value: function () {
                                    this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
                                },
                            },
                            {
                                key: "unSetStyle",
                                value: function () {
                                    (this.element.style.willChange = ""), (this.element.style[s] = ""), (this.element.style.transition = "");
                                },
                            },
                            {
                                key: "getElementOffset",
                                value: function () {
                                    var e,
                                        t = this.elementContainer.getBoundingClientRect();
                                    (this.elementHeight = t.height),
                                        (this.elementTop = t.top + i.positions.top),
                                        this.settings.customContainer && ((e = this.settings.customContainer.getBoundingClientRect()), (this.elementTop = t.top - e.top + i.positions.top)),
                                        (this.elementBottom = this.elementHeight + this.elementTop);
                                },
                            },
                            {
                                key: "buildThresholdList",
                                value: function () {
                                    for (var e = [], t = 1; t <= this.elementHeight; t++) {
                                        var n = t / this.elementHeight;
                                        e.push(n);
                                    }
                                    return e;
                                },
                            },
                            {
                                key: "intersectionObserver",
                                value: function () {
                                    var e = { root: null, threshold: this.buildThresholdList() };
                                    (this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), e)), this.observer.observe(this.element);
                                },
                            },
                            {
                                key: "intersectionObserverCallback",
                                value: function (e) {
                                    var t = this;
                                    e.forEach(function (e) {
                                        e.isIntersecting ? (t.isVisible = !0) : (t.isVisible = !1);
                                    });
                                },
                            },
                            {
                                key: "checkIfVisible",
                                value: function () {
                                    return this.elementBottom > i.positions.top && this.elementTop < i.positions.bottom;
                                },
                            },
                            {
                                key: "getRangeMax",
                                value: function () {
                                    var e = this.element.clientHeight;
                                    this.rangeMax = e * this.settings.scale - e;
                                },
                            },
                            {
                                key: "getTranslateValue",
                                value: function () {
                                    var e = ((i.positions.bottom - this.elementTop) / ((i.positions.height + this.elementHeight) / 100)).toFixed(1),
                                        e = Math.min(100, Math.max(0, e));
                                    return (
                                        0 !== this.settings.maxTransition && e > this.settings.maxTransition && (e = this.settings.maxTransition),
                                        this.oldPercentage !== e &&
                                            (this.rangeMax || this.getRangeMax(),
                                            (this.translateValue = ((e / 100) * this.rangeMax - this.rangeMax / 2).toFixed(0)),
                                            this.oldTranslateValue !== this.translateValue && ((this.oldPercentage = e), (this.oldTranslateValue = this.translateValue), !0))
                                    );
                                },
                            },
                            {
                                key: "animate",
                                value: function () {
                                    var e,
                                        t = 0,
                                        n = 0;
                                    (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) &&
                                        (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")),
                                        (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) &&
                                            (t = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")),
                                        (e = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(t, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(t, ", 0)")),
                                        (this.element.style[s] = e);
                                },
                            },
                        ]),
                        p);
                    function p(e, t) {
                        var n = this;
                        !(function (e) {
                            if (!(e instanceof p)) throw new TypeError("Cannot call a class as a function");
                        })(this),
                            (this.element = e),
                            (this.elementContainer = e),
                            (this.settings = t),
                            (this.isVisible = !0),
                            (this.isInit = !1),
                            (this.oldTranslateValue = -1),
                            (this.init = this.init.bind(this)),
                            l(e)
                                ? this.init()
                                : this.element.addEventListener("load", function () {
                                      setTimeout(function () {
                                          n.init(!0);
                                      }, 50);
                                  });
                    }
                    function h(e) {
                        return (
                            (function (e) {
                                if (Array.isArray(e)) return m(e);
                            })(e) ||
                            (function (e) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                            })(e) ||
                            g(e) ||
                            (function () {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            })()
                        );
                    }
                    function g(e, t) {
                        if (e) {
                            if ("string" == typeof e) return m(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0;
                        }
                    }
                    function m(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                        return o;
                    }
                    function v(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }
                    var y,
                        b,
                        x = !1,
                        w = [],
                        C =
                            (v(T.prototype, [
                                {
                                    key: "init",
                                    value: function () {
                                        var t = this;
                                        i.setViewportAll(this.customContainer),
                                            (w = [].concat(
                                                h(
                                                    this.elements.map(function (e) {
                                                        return new f(e, t.settings);
                                                    })
                                                ),
                                                h(w)
                                            )),
                                            x || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), (x = !0));
                                    },
                                },
                                {
                                    key: "resizeIsDone",
                                    value: function () {
                                        clearTimeout(b), (b = setTimeout(this.refresh, 200));
                                    },
                                },
                                {
                                    key: "proceedRequestAnimationFrame",
                                    value: function () {
                                        var t = this;
                                        i.setViewportTop(this.customContainer),
                                            this.lastPosition !== i.positions.top
                                                ? (i.setViewportBottom(),
                                                  w.forEach(function (e) {
                                                      t.proceedElement(e);
                                                  }),
                                                  (y = window.requestAnimationFrame(this.proceedRequestAnimationFrame)),
                                                  (this.lastPosition = i.positions.top))
                                                : (y = window.requestAnimationFrame(this.proceedRequestAnimationFrame));
                                    },
                                },
                                {
                                    key: "proceedElement",
                                    value: function (e) {
                                        (this.customContainer ? e.checkIfVisible() : e.isVisible) && e.getTranslateValue() && e.animate();
                                    },
                                },
                                {
                                    key: "refresh",
                                    value: function () {
                                        i.setViewportAll(this.customContainer),
                                            w.forEach(function (e) {
                                                e.getElementOffset(), e.getRangeMax();
                                            }),
                                            (this.lastPosition = -1);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        var t = this,
                                            n = [];
                                        (w = w.filter(function (e) {
                                            return t.elements.includes(e.element) ? (n.push(e), !1) : e;
                                        })),
                                            n.forEach(function (e) {
                                                e.unSetStyle(), !1 === t.settings.overflow && e.unWrapElement();
                                            }),
                                            w.length || (window.cancelAnimationFrame(y), window.removeEventListener("resize", this.refresh));
                                    },
                                },
                            ]),
                            T);
                    function T(e, t) {
                        var n, o, i;
                        (function (e) {
                            if (!(e instanceof T)) throw new TypeError("Cannot call a class as a function");
                        })(this),
                            e &&
                                r() &&
                                ((this.elements = a(e)),
                                (this.defaults = { delay: 0, orientation: "up", scale: 1.3, overflow: !1, transition: "cubic-bezier(0,0,0,1)", customContainer: !1, customWrapper: !1, maxTransition: 0 }),
                                (this.settings = Object.assign(this.defaults, t)),
                                this.settings.customContainer &&
                                    ((o = a(this.settings.customContainer)),
                                    (i = 1),
                                    (n =
                                        (function (e) {
                                            if (Array.isArray(e)) return e;
                                        })(o) ||
                                        (function (e, t) {
                                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                                var n = [],
                                                    o = !0,
                                                    i = !1,
                                                    r = void 0;
                                                try {
                                                    for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                                                } catch (e) {
                                                    (i = !0), (r = e);
                                                } finally {
                                                    try {
                                                        o || null == s.return || s.return();
                                                    } finally {
                                                        if (i) throw r;
                                                    }
                                                }
                                                return n;
                                            }
                                        })(o, i) ||
                                        g(o, i) ||
                                        (function () {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })()),
                                    (this.customContainer = n[0])),
                                (this.lastPosition = -1),
                                (this.resizeIsDone = this.resizeIsDone.bind(this)),
                                (this.refresh = this.refresh.bind(this)),
                                (this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this)),
                                this.init());
                    }
                },
            ]),
            (i.c = o),
            (i.d = function (e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (i.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function (t, e) {
                if ((1 & e && (t = i(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var o in t)
                        i.d(
                            n,
                            o,
                            function (e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return n;
            }),
            (i.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = ""),
            i((i.s = 0)).default
        );
        function i(e) {
            if (o[e]) return o[e].exports;
            var t = (o[e] = { i: e, l: !1, exports: {} });
            return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
        }
        var n, o;
    }),
    (function () {
        var c,
            s,
            l,
            r,
            n = { frameRate: 150, animationTime: 400, stepSize: 100, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !0, arrowScroll: 50, fixedBackground: !0, excluded: "" },
            m = n,
            u = !1,
            d = !1,
            a = { x: 0, y: 0 },
            f = !1,
            p = document.documentElement,
            h = [],
            g = /^Mac/.test(navigator.platform),
            v = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
            y = { 37: 1, 38: 1, 39: 1, 40: 1 };
        function b() {
            var e, t, n, o, i, r, a;
            !f &&
                document.body &&
                ((f = !0),
                (e = document.body),
                (t = document.documentElement),
                (n = window.innerHeight),
                (o = e.scrollHeight),
                (p = 0 <= document.compatMode.indexOf("CSS") ? t : e),
                (c = e),
                m.keyboardSupport && q("keydown", S),
                top != self
                    ? (d = !0)
                    : Z &&
                      n < o &&
                      (e.offsetHeight <= n || t.offsetHeight <= n) &&
                      (((i = document.createElement("div")).style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + p.scrollHeight + "px"),
                      document.body.appendChild(i),
                      (l = function () {
                          r =
                              r ||
                              setTimeout(function () {
                                  u || ((i.style.height = "0"), (i.style.height = p.scrollHeight + "px"), (r = null));
                              }, 500);
                      }),
                      setTimeout(l, 10),
                      q("resize", l),
                      (s = new _(l)).observe(e, { attributes: !0, childList: !0, characterData: !1 }),
                      p.offsetHeight <= n && (((a = document.createElement("div")).style.clear = "both"), e.appendChild(a))),
                m.fixedBackground || u || ((e.style.backgroundAttachment = "scroll"), (t.style.backgroundAttachment = "scroll")));
        }
        var x = [],
            w = !1,
            C = Date.now();
        function T(d, f, p) {
            var e, t, n, o, i, h, g;
            (e = 0 < (e = f) ? 1 : -1),
                (t = 0 < (t = p) ? 1 : -1),
                (a.x === e && a.y === t) || ((a.x = e), (a.y = t), (x = []), (C = 0)),
                1 != m.accelerationMax && ((n = Date.now() - C) < m.accelerationDelta && 1 < (o = (1 + 50 / n) / 2) && ((o = Math.min(o, m.accelerationMax)), (f *= o), (p *= o)), (C = Date.now())),
                x.push({ x: f, y: p, lastX: f < 0 ? 0.99 : -0.99, lastY: p < 0 ? 0.99 : -0.99, start: Date.now() }),
                w ||
                    ((i = B()),
                    (h = d === i || d === document.body),
                    null == d.$scrollBehavior &&
                        (function (e) {
                            var t = k(e);
                            {
                                var n;
                                null == A[t] && ((n = getComputedStyle(e, "")["scroll-behavior"]), (A[t] = "smooth" == n));
                            }
                            return A[t];
                        })(d) &&
                        ((d.$scrollBehavior = d.style.scrollBehavior), (d.style.scrollBehavior = "auto")),
                    (g = function (e) {
                        for (var t = Date.now(), n = 0, o = 0, i = 0; i < x.length; i++) {
                            var r = x[i],
                                a = t - r.start,
                                s = a >= m.animationTime,
                                l = s ? 1 : a / m.animationTime;
                            m.pulseAlgorithm &&
                                (l = (function (e) {
                                    if (1 <= e) return 1;
                                    if (e <= 0) return 0;
                                    1 == m.pulseNormalize && (m.pulseNormalize /= W(1));
                                    return W(e);
                                })(l));
                            var c = (r.x * l - r.lastX) >> 0,
                                u = (r.y * l - r.lastY) >> 0;
                            (n += c), (o += u), (r.lastX += c), (r.lastY += u), s && (x.splice(i, 1), i--);
                        }
                        h ? window.scrollBy(n, o) : (n && (d.scrollLeft += n), o && (d.scrollTop += o)),
                            f || p || (x = []),
                            x.length ? R(g, d, 1e3 / m.frameRate + 1) : ((w = !1), null != d.$scrollBehavior && ((d.style.scrollBehavior = d.$scrollBehavior), (d.$scrollBehavior = null)));
                    }),
                    R(g, d, 0),
                    (w = !0));
        }
        function e(e) {
            f || b();
            var t = e.target;
            if (e.defaultPrevented || e.ctrlKey) return !0;
            if (H(c, "embed") || (H(t, "embed") && /\.pdf/i.test(t.src)) || H(c, "object") || t.shadowRoot) return !0;
            var n = -e.wheelDeltaX || e.deltaX || 0,
                o = -e.wheelDeltaY || e.deltaY || 0;
            g && (e.wheelDeltaX && I(e.wheelDeltaX, 120) && (n = (e.wheelDeltaX / Math.abs(e.wheelDeltaX)) * -120), e.wheelDeltaY && I(e.wheelDeltaY, 120) && (o = (e.wheelDeltaY / Math.abs(e.wheelDeltaY)) * -120)),
                n || o || (o = -e.wheelDelta || 0),
                1 === e.deltaMode && ((n *= 40), (o *= 40));
            var i = L(t);
            return i
                ? !!(function (e) {
                      if (!e) return;
                      h.length || (h = [e, e, e]);
                      (e = Math.abs(e)),
                          h.push(e),
                          h.shift(),
                          clearTimeout(r),
                          (r = setTimeout(function () {
                              try {
                                  localStorage.SS_deltaBuffer = h.join(",");
                              } catch (e) {}
                          }, 1e3));
                      var t = 120 < e && F(e),
                          n = !F(120) && !F(100) && !t;
                      return e < 50 || n;
                  })(o) || (1.2 < Math.abs(n) && (n *= m.stepSize / 120), 1.2 < Math.abs(o) && (o *= m.stepSize / 120), T(i, n, o), e.preventDefault(), void P())
                : !d || !Y || (Object.defineProperty(e, "target", { value: window.frameElement }), parent.wheel(e));
        }
        function S(e) {
            var t = e.target,
                n = e.ctrlKey || e.altKey || e.metaKey || (e.shiftKey && e.keyCode !== v.spacebar);
            document.body.contains(c) || (c = document.activeElement);
            var o = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (
                e.defaultPrevented ||
                /^(textarea|select|embed|object)$/i.test(t.nodeName) ||
                (H(t, "input") && !o.test(t.type)) ||
                H(c, "video") ||
                (function (e) {
                    var t = e.target,
                        n = !1;
                    if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                        do {
                            if ((n = t.classList && t.classList.contains("html5-video-controls"))) break;
                        } while ((t = t.parentNode));
                    return n;
                })(e) ||
                t.isContentEditable ||
                n
            )
                return !0;
            if ((H(t, "button") || (H(t, "input") && o.test(t.type))) && e.keyCode === v.spacebar) return !0;
            if (H(t, "input") && "radio" == t.type && y[e.keyCode]) return !0;
            var i = 0,
                r = 0,
                a = L(c);
            if (!a) return !d || !Y || parent.keydown(e);
            var s = a.clientHeight;
            switch ((a == document.body && (s = window.innerHeight), e.keyCode)) {
                case v.up:
                    r = -m.arrowScroll;
                    break;
                case v.down:
                    r = m.arrowScroll;
                    break;
                case v.spacebar:
                    r = -(e.shiftKey ? 1 : -1) * s * 0.9;
                    break;
                case v.pageup:
                    r = 0.9 * -s;
                    break;
                case v.pagedown:
                    r = 0.9 * s;
                    break;
                case v.home:
                    a == document.body && document.scrollingElement && (a = document.scrollingElement), (r = -a.scrollTop);
                    break;
                case v.end:
                    var l = a.scrollHeight - a.scrollTop - s,
                        r = 0 < l ? 10 + l : 0;
                    break;
                case v.left:
                    i = -m.arrowScroll;
                    break;
                case v.right:
                    i = m.arrowScroll;
                    break;
                default:
                    return !0;
            }
            T(a, i, r), e.preventDefault(), P();
        }
        function t(e) {
            c = e.target;
        }
        var o,
            i,
            k =
                ((o = 0),
                function (e) {
                    return e.uniqueID || (e.uniqueID = o++);
                }),
            E = {},
            $ = {},
            A = {};
        function P() {
            clearTimeout(i),
                (i = setInterval(function () {
                    E = $ = A = {};
                }, 1e3));
        }
        function j(e, t, n) {
            for (var o = n ? E : $, i = e.length; i--; ) o[k(e[i])] = t;
            return t;
        }
        function L(e) {
            var t = [],
                n = document.body,
                o = p.scrollHeight;
            do {
                var i = (!1 ? E : $)[k(e)];
                if (i) return j(t, i);
                if ((t.push(e), o === e.scrollHeight)) {
                    var r = (M(p) && M(n)) || O(p);
                    if ((d && D(p)) || (!d && r)) return j(t, B());
                } else if (D(e) && O(e)) return j(t, e);
            } while ((e = e.parentElement));
        }
        function D(e) {
            return e.clientHeight + 10 < e.scrollHeight;
        }
        function M(e) {
            return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
        }
        function O(e) {
            var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return "scroll" === t || "auto" === t;
        }
        function q(e, t, n) {
            window.addEventListener(e, t, n || !1);
        }
        function N(e, t, n) {
            window.removeEventListener(e, t, n || !1);
        }
        function H(e, t) {
            return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
        }
        if (window.localStorage && localStorage.SS_deltaBuffer)
            try {
                h = localStorage.SS_deltaBuffer.split(",");
            } catch (e) {}
        function I(e, t) {
            return Math.floor(e / t) == e / t;
        }
        function F(e) {
            return I(h[0], e) && I(h[1], e) && I(h[2], e);
        }
        var z,
            R =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (e, t, n) {
                    window.setTimeout(e, n || 1e3 / 60);
                },
            _ = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            B =
                ((z = document.scrollingElement),
                function () {
                    var e, t;
                    return (
                        z ||
                            (((e = document.createElement("div")).style.cssText = "height:10000px;width:1px;"),
                            document.body.appendChild(e),
                            (t = document.body.scrollTop),
                            document.documentElement.scrollTop,
                            window.scrollBy(0, 3),
                            (z = document.body.scrollTop != t ? document.body : document.documentElement),
                            window.scrollBy(0, -3),
                            document.body.removeChild(e)),
                        z
                    );
                });
        function W(e) {
            var t;
            return ((e *= m.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (--e, (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * m.pulseNormalize;
        }
        var X = window.navigator.userAgent,
            V = /Edge/.test(X),
            Y = /chrome/i.test(X) && !V,
            U = /safari/i.test(X) && !V,
            Q = /mobile/i.test(X),
            K = /Windows NT 6.1/i.test(X) && /rv:11/i.test(X),
            Z = U && (/Version\/8/i.test(X) || /Version\/9/i.test(X)),
            G = (Y || U || K) && !Q,
            J = !1;
        try {
            window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", {
                    get: function () {
                        J = !0;
                    },
                })
            );
        } catch (e) {}
        var ee = !!J && { passive: !1 },
            te = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
        function ne(e) {
            for (var t in e) n.hasOwnProperty(t) && (m[t] = e[t]);
        }
        te && G && (q(te, e, ee), q("mousedown", t), q("load", b)),
            (ne.destroy = function () {
                s && s.disconnect(), N(te, e), N("mousedown", t), N("keydown", S), N("resize", l), N("load", b);
            }),
            window.SmoothScrollOptions && ne(window.SmoothScrollOptions),
            "function" == typeof define && define.amd
                ? define(function () {
                      return ne;
                  })
                : "object" == typeof exports
                ? (module.exports = ne)
                : (window.SmoothScroll = ne);
    })(),
    AOS.init({ offset: 100, delay: 0, duration: 900, easing: "ease-in-out-quad", once: !1, mirror: !0 }),
    window.addEventListener("load", function () {
        AOS.refresh(), document.documentElement.classList.add("document-loaded");
    }),
    (function (e) {
        var t = document.getElementById("cursor"),
            n = [".dark-lightbox", ".warning-lightbox", ".site-footer", ".video-player", ".primary-nav__wrapper", ".button"],
            o = [".video-player__button"],
            i = ["button", ".faq__question", "a:not(.primary-nav__main-nav-submenu-link,.primary-nav__main-nav-link)", ".video-player", ".section__primary-title .letter-by-letter > span"],
            r = "cursor--pointer",
            a = "cursor--light",
            s = e("body"),
            l = !1;
        function c(e) {
            (t.style.top = e.clientY + "px"), (t.style.left = e.clientX + "px"), l || ((l = !0), (t.style.display = "block"));
        }
        function u() {
            t.classList.add(a);
        }
        function d() {
            t.classList.remove(a);
        }
        function f() {
            t.classList.remove(a);
        }
        function p() {
            t.classList.add(a);
        }
        function h() {
            t.classList.add(r);
        }
        function g() {
            t.classList.remove(r);
        }
        e(document).ready(function () {
            Modernizr.touchevents ||
                (document.addEventListener("mousemove", c),
                s.hasClass("body-home") ? t.classList.add(a) : (s.on("mouseenter", n.join(", "), u), s.on("mouseleave", n.join(", "), d), s.on("mouseenter", o.join(", "), f), s.on("mouseleave", o.join(", "), p)),
                s.on("mouseenter", i.join(", "), h),
                s.on("mouseleave", i.join(", "), g));
        });
    })(jQuery),
    (function (o) {
        o(document).ready(function () {
            var e, t, n;
            0 < o(".faq").length &&
                ((e = o(".faq")),
                (t = e.find(".faq__question")),
                e.find(".faq__answer"),
                (n = "faq-opened"),
                t.on("click", function () {
                    var e = o(this);
                    e.hasClass(n)
                        ? e.add(e.next()).removeClass(n)
                        : (t
                              .filter("." + n)
                              .removeClass(n)
                              .next()
                              .removeClass(n),
                          e.add(e.next()).addClass(n));
                }));
        });
    })(jQuery),
    (function (o) {
        o(document).ready(function () {
            o(".site-header__title .letter-by-letter, #introducao .text__intro.title-02").each(function () {
                var e = o(this).find("span.c"),
                    t = 0,
                    n = setInterval(function () {
                        e.eq(t).css("opacity", 1), ++t >= e.length && (clearInterval(n), (n = null));
                    }, 80);
            }),
                (function () {
                    for (var e = ["foto-artista"], t = 0; t < e.length; t++) {
                        var n = document.getElementById(e[t]);
                        new simpleParallax(n, { delay: 0.6, transition: "cubic-bezier(0,0,0,1)" });
                    }
                })();
        });
    })(jQuery),
    (function (n) {
        n(document).ready(function () {
            var e;
            (e = n(".obras__item .unloaded")),
                n(e).each(function () {
                    var e = n(this),
                        t = new Image();
                    t.classList.add("loading"),
                        t.classList.add("obras__thumb"),
                        (t.alt = "Obra da exposição Em Nome das Rosas de Eugênia França"),
                        (t.onload = function () {
                            t.classList.remove("loading");
                        }),
                        e.append(t).removeClass("unloaded"),
                        (t.src = e.attr("data-img"));
                });
        });
    })(jQuery),
    (function (n) {
        var o,
            i = "lightbox-opened",
            e = document.getElementById("cursor");
        function t(e) {
            e.preventDefault(), n.fancybox.open({ src: "#modal-copyright", type: "inline", opts: { closeExisting: !1, smallBtn: !0, baseClass: "warning-lightbox" } });
        }
        function r(e) {
            e.preventDefault();
            var t = n(this);
            n.fancybox.open({ src: t.attr("data-src"), type: "inline", opts: { closeExisting: !0, smallBtn: !1, toolbar: !0, buttons: ["close"], baseClass: "dark-lightbox" } });
        }
        function a() {
            n(".fancybox-caption").addClass("show");
        }
        function s() {
            n(".fancybox-caption").removeClass("show");
        }
        function l() {
            n(".fancybox-caption").toggleClass("show");
        }
        n(document).ready(function () {
            (o = n("html")),
                (n.fancybox.defaults.closeExisting = !0),
                (n.fancybox.defaults.closeClickOutside = !0),
                (n.fancybox.defaults.infobar = !1),
                (n.fancybox.defaults.baseClass = "light-lightbox"),
                (n.fancybox.defaults.gutter = 20),
                (n.fancybox.defaults.slideShow = { autoStart: !1, speed: 4e3 }),
                (n.fancybox.defaults.btnTpl = {
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom"><svg class="icon icon--search"><use xlink:href="#icon-search"></use></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close"><svg class="icon icon--close"><use xlink:href="#icon-close"></use></svg></button>',
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen"><svg class="icon icon--resize"><use xlink:href="#icon-resize"></use></svg></button>',
                    slideShow:
                        '<button data-fancybox-play class="fancybox-button fancybox-button--play"><svg class="icon icon--play"><use xlink:href="#icon-play"></use></svg><svg class="icon icon--pause"><use xlink:href="#icon-pause"></use></svg></button>',
                    caption: '<button data-fancybox-caption class="fancybox-button fancybox-button--caption"><svg class="icon icon--caption"><use xlink:href="#icon-caption"></use></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left"><div><svg class="icon icon--chevron-left"><use xlink:href="#icon-chevron-left"></use></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right"><div><svg class="icon icon--chevron-right"><use xlink:href="#icon-chevron-right"></use></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small"><svg class="icon icon--close"><use xlink:href="#icon-close-bold"></use></svg></button>',
                }),
                (n.fancybox.defaults.buttons = ["close", "fullScreen", "zoom", "slideShow", "caption"]),
                (n.fancybox.defaults.beforeShow = function (e, t) {
                    o.addClass(i), o.toggleClass("fancybox-slide-has-caption", 0 < t.opts.caption.length);
                }),
                (n.fancybox.defaults.afterClose = function () {
                    o.removeClass(i), e.classList.remove("cursor--light");
                }),
                n("body").on("contextmenu", "img", t),
                n(".cartas__link-transcricao").on("click", r),
                Modernizr.touchevents ? n("body").on("click", ".fancybox-button--caption", l) : (n("body").on("mouseenter", ".fancybox-button--caption", a), n("body").on("mouseleave", ".fancybox-button--caption", s));
        });
    })(jQuery),
    (function (e) {
        var t,
            n,
            o,
            i = !1,
            r = "menu-opened",
            a = !1,
            s = "share-opened";
        function l(e) {
            i ? c() : (a && d(), (i = !0), t.addClass(r));
        }
        function c() {
            (i = !1), t.removeClass(r), n.blur();
        }
        function u(e) {
            a ? d() : (i && c(), (a = !0), t.addClass(s));
        }
        function d() {
            (a = !1), t.removeClass(s), o.blur();
        }
        e(document).ready(function () {
            (t = e("html")),
                (n = e(".primary-nav__toggle")).on("click", l),
                (o = e(".share__toggle")).on("click", u),
                e('.primary-nav a[href^="#"]').on("click", function () {
                    i && c();
                }),
                e(window).on("resize", function () {
                    d();
                });
        });
    })(jQuery),
    SmoothScroll({
        frameRate: 150,
        animationTime: 400,
        stepSize: 120,
        accelerationDelta: 70,
        accelerationMax: 5,
        keyboardSupport: !0,
        arrowScroll: 50,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        touchpadSupport: !1,
        fixedBackground: !0,
        excluded: "",
    }),
    (function (o) {
        var a,
            s,
            t,
            n,
            l,
            i,
            c,
            u,
            r = o("html, body"),
            d = o("html"),
            f = o(window),
            e = o("body"),
            p = o(".site-header"),
            h = o("section"),
            g = o(".site-header__title-section"),
            m = o(".section-direction-buttons__item--top"),
            v = o(".section-direction-buttons__item--bottom"),
            y = o(".scroll-progress-bar"),
            b = y.find(".scroll-progress-bar__marker"),
            x = 0,
            w = 0,
            C = [],
            T = ["institucional", "texto"],
            S = !1,
            k = !1,
            E = "current-section";
        function $() {
            (t = f.height()), (i = Math.round(t / 3));
            for (var e = 0; e < h.length; e++) C[e] = [h.eq(e).offset().top, h.eq(e).outerHeight()];
        }
        function A() {
            (n = x < f.scrollTop()), (x = f.scrollTop()), d.toggleClass("scrolled", 360 < x);
            for (var e = 0; e < C.length; e++)
                x >= C[e][0] && x <= C[e][0] + C[e][1] - t
                    ? (h.eq(e).addClass("exactly-on-viewport"),
                      x <= C[e][0] + 300 ? h.eq(e).addClass("entering-viewport") : h.eq(e).removeClass("entering-viewport"),
                      x >= C[e][0] + C[e][1] - t - 300 ? h.eq(e).addClass("leaving-viewport") : h.eq(e).removeClass("leaving-viewport"))
                    : h.eq(e).removeClass("exactly-on-viewport entering-viewport leaving-viewport"),
                    x >= C[e][0] - t + i &&
                        x <= C[e][0] + C[e][1] - i &&
                        (w != e &&
                            ((n && w < e) || (!n && e < w)) &&
                            ((function (e, t) {
                                var n,
                                    o = h.eq(t),
                                    i = h.eq(e);
                                d.toggleClass("current-section-not-cover", 0 < e),
                                    o.removeClass(E),
                                    a.parent("li.".currentSectionClass).removeClass(E),
                                    i.addClass(E),
                                    (n = a.filter('[href="' + l + "/#" + i.get(0).id + '"]').parent("li")).addClass(E),
                                    s && (clearTimeout(s), d.removeClass("section-changed"));
                                if (
                                    (g.text(n.text()),
                                    d.addClass("section-changed"),
                                    (s = setTimeout(function () {
                                        d.removeClass("section-changed");
                                    }, 1700)),
                                    m.toggleClass("disabled", 0 == e),
                                    v.toggleClass("disabled", e >= h.length - 1),
                                    !S)
                                )
                                    for (var r = 0; r < T.length; r++) {
                                        if (T[r] == i.get(0).id) {
                                            P(e);
                                            break;
                                        }
                                        k && (y.removeClass("active"), b.removeAttr("style"), (c = u = 0), (k = !1));
                                    }
                            })(e, w),
                            (w = e)),
                        k && j());
            S && j();
        }
        function P(e) {
            y.addClass("active"), (u = S ? ((c = 0), document.body.clientHeight) : ((c = C[e][0] - t + i), C[e][1])), (k = !0);
        }
        function j() {
            var e = S ? x / (document.body.clientHeight - t) : (x - c) / u;
            b.css("transform", "scaleX(" + e + ")");
        }
        function L(e) {
            e.preventDefault(), 0 <= w - 1 && M(h.eq(w - 1));
        }
        function D(e) {
            e.preventDefault(), w + 1 < h.length && M(h.eq(w + 1));
        }
        function M(e) {
            e && 0 < e.length && r.animate({ scrollTop: e.offset().top - p.outerHeight() }, 300);
        }
        function O(e) {
            e.preventDefault();
            var t = o(this).attr("href"),
                n = t.substring(t.indexOf("#"));
            n.length <= 1 || M(o(n));
        }
        o(document).ready(function () {
            0 <= (l = window.location.href).indexOf("#") && (l = l.substr(0, l.indexOf("#"))),
                h.length &&
                    ((a = o('.primary-nav a[href^="' + l + '/#"], .section-indicator a[href^="' + l + '/#"]')).on("click", O),
                    m.on("click", L),
                    v.on("click", D),
                    e.hasClass("body-numeros-da-violencia-domestica") && ((S = !0), P(-1)),
                    f.on({ resize: $, scroll: A }).trigger("resize").trigger("scroll"));
        });
    })(jQuery),
    (function (e) {
        var t,
            n = 480,
            o = 520;
        function i(e) {
            return !(
                (t = window.open(
                    this.href,
                    "compartilhar",
                    "width=" +
                        n +
                        ",height=" +
                        o +
                        ",top=" +
                        (function () {
                            var e = (screen.height - o) / 2;
                            e < 0 && (e = 0);
                            return e;
                        })() +
                        ",left=" +
                        (function () {
                            var e = (screen.width - n) / 2;
                            e < 0 && (e = 0);
                            return e;
                        })()
                )) &&
                !t.closed &&
                void 0 !== t.closed
            );
        }
        e(document).ready(function () {
            e(".popup-link").on("click", i);
        });
    })(jQuery),
    (function (i) {
        var t = ".video-player__element",
            r = ".video-player",
            a = "playing",
            s = i(r),
            l = !1,
            c = !1;
        function e() {
            i(this).parents(r).addClass("enabled");
        }
        function n() {
            var e,
                t = i(this),
                n = t.parent(r).eq(0),
                o = parseInt(n.attr("data-ix"));
            c ? (l == o ? (f((e = o)).pause(), (l = c = !1), s.eq(e).removeClass(a)) : (d(l), u(o))) : u(o), console.log(o);
        }
        function u(e) {
            f(e).play(), (c = !0), (l = e), s.eq(e).addClass(a);
        }
        function d(e) {
            var t = f(e);
            t.pause(), (t.currentTime = 0), (l = c = !1), s.eq(e).removeClass(a);
        }
        function o() {
            d(l);
        }
        function f(e) {
            return s.eq(e).find(t).get(0);
        }
        i(document).ready(function () {
            s.find(".video-player__button").on("click", n),
                s
                    .find(t)
                    .on("click", n)
                    .each(function () {
                        this.addEventListener("canplay", e), this.addEventListener("canplaythrough", e), this.addEventListener("ended", o);
                    });
        });
    })(jQuery);
