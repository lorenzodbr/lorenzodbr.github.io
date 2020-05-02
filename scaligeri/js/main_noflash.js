! function(e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            exports: {},
            id: s,
            loaded: !1
        };
        return e[s].call(n.exports, n, n.exports, i), n.loaded = !0, n.exports
    }
    i.m = e, i.c = t, i.p = "", i(0)
}([function(e, t, i) {
    "use strict";
    i(1), i(2);
    var s, n = (s = i(3)) && s.__esModule ? s : {
        default: s
    };
    document.addEventListener("DOMContentLoaded", function() {
        [].slice.call(document.querySelectorAll("select")).forEach(function(e) {
            e.classList.add("cs-select"), new SelectFx(e)
        })
    }), new n.default
}, function(e, t, i) {
    var s, n;
    ! function(r) {
        "use strict";

        function o(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var a, l, c;

        function u(e, t) {
            (a(e, t) ? c : l)(e, t)
        }
        c = "classList" in document.documentElement ? (a = function(e, t) {
            return e.classList.contains(t)
        }, l = function(e, t) {
            e.classList.add(t)
        }, function(e, t) {
            e.classList.remove(t)
        }) : (a = function(e, t) {
            return o(t).test(e.className)
        }, l = function(e, t) {
            a(e, t) || (e.className = e.className + " " + t)
        }, function(e, t) {
            e.className = e.className.replace(o(t), " ")
        });
        var d = {
            hasClass: a,
            addClass: l,
            removeClass: c,
            toggleClass: u,
            has: a,
            add: l,
            remove: c,
            toggle: u
        };

        function h(e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }

        function f(e, t) {
            this.el = e, this.options = h({}, this.options), h(this.options, t), this._init()
        }
        void 0 === (n = "function" == typeof(s = d) ? s.call(t, i, t, e) : s) || (e.exports = n), f.prototype.options = {
            newTab: !0,
            stickyPlaceholder: !0,
            onChange: function(e) {
                return !1
            }
        }, f.prototype._init = function() {
            var e = this.el.querySelector("option[selected]");
            this.hasDefaultPlaceholder = e && e.disabled, this.selectedOpt = e || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
        }, f.prototype._createSelectEl = function() {
            function e(e) {
                var t = "",
                    i = "",
                    s = "";
                return !e.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (i += "cs-selected ", this.foundSelected = !0), e.getAttribute("data-class") && (i += e.getAttribute("data-class")), e.getAttribute("data-link") && (s = "data-link=" + e.getAttribute("data-link")), "" !== i && (t = 'class="' + i + '" '), "<li " + t + s + ' data-option data-value="' + e.value + '"><span>' + e.textContent + "</span></li>"
            }
            var t = "";
            [].slice.call(this.el.children).forEach(function(i) {
                if (!i.disabled) {
                    var s = i.tagName.toLowerCase();
                    "option" === s ? t += e(i) : "optgroup" === s && (t += '<li class="cs-optgroup"><span>' + i.label + "</span><ul>", [].slice.call(i.children).forEach(function(i) {
                        t += e(i)
                    }), t += "</ul></li>")
                }
            });
            var i = '<div class="cs-options"><ul>' + t + "</ul></div>";
            this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + i, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
        }, f.prototype._initEvents = function() {
            var e = this;
            this.selPlaceholder.addEventListener("click", function() {
                e._toggleSelect()
            }), this.selOpts.forEach(function(t, i) {
                t.addEventListener("click", function() {
                    e.current = i, e._changeOption(), e._toggleSelect()
                })
            }), document.addEventListener("click", function(t) {
                var i = t.target;
                e._isOpen() && i !== e.selEl && ! function(e, t) {
                    if (!e) return !1;
                    for (var i = e.target || e.srcElement || e || !1; i && i != t;) i = i.parentNode || !1;
                    return !1 !== i
                }(i, e.selEl) && e._toggleSelect()
            }), this.selEl.addEventListener("keydown", function(t) {
                switch (t.keyCode || t.which) {
                    case 38:
                        t.preventDefault(), e._navigateOpts("prev");
                        break;
                    case 40:
                        t.preventDefault(), e._navigateOpts("next");
                        break;
                    case 32:
                        t.preventDefault(), e._isOpen() && void 0 !== e.preSelCurrent && -1 !== e.preSelCurrent && e._changeOption(), e._toggleSelect();
                        break;
                    case 13:
                        t.preventDefault(), e._isOpen() && void 0 !== e.preSelCurrent && -1 !== e.preSelCurrent && (e._changeOption(), e._toggleSelect());
                        break;
                    case 27:
                        t.preventDefault(), e._isOpen() && e._toggleSelect()
                }
            })
        }, f.prototype._navigateOpts = function(e) {
            this._isOpen() || this._toggleSelect();
            var t = void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent ? this.preSelCurrent : this.current;
            ("prev" === e && 0 < t || "next" === e && t < this.selOptsCount - 1) && (this.preSelCurrent = "next" === e ? t + 1 : t - 1, this._removeFocus(), d.add(this.selOpts[this.preSelCurrent], "cs-focus"))
        }, f.prototype._toggleSelect = function() {
            this._removeFocus(), this._isOpen() ? (-1 !== this.current && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), d.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), d.add(this.selEl, "cs-active"))
        }, f.prototype._changeOption = function() {
            void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
            var e = this.selOpts[this.current];
            this.selPlaceholder.textContent = e.textContent, this.el.value = e.getAttribute("data-value");
            var t = this.selEl.querySelector("li.cs-selected");
            t && d.remove(t, "cs-selected"), d.add(e, "cs-selected"), e.getAttribute("data-link") && (this.options.newTab ? r.open(e.getAttribute("data-link"), "_blank") : r.location = e.getAttribute("data-link")), this.options.onChange(this.el.value)
        }, f.prototype._isOpen = function(e) {
            return d.has(this.selEl, "cs-active")
        }, f.prototype._removeFocus = function(e) {
            var t = this.selEl.querySelector("li.cs-focus");
            t && d.remove(t, "cs-focus")
        }, r.SelectFx = f
    }(window)
}, function(e, t) {
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
        "use strict";
        if ("Element" in e) {
            var t = "classList",
                i = "prototype",
                s = e.Element[i],
                n = Object,
                r = String[i].trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                o = Array[i].indexOf || function(e) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                a = function(e, t) {
                    this.name = e, this.code = DOMException[e], this.message = t
                },
                l = function(e, t) {
                    if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return o.call(e, t)
                },
                c = function(e) {
                    for (var t = r.call(e.getAttribute("class") || ""), i = t ? t.split(/\s+/) : [], s = 0, n = i.length; s < n; s++) this.push(i[s]);
                    this._updateClassName = function() {
                        e.setAttribute("class", this.toString())
                    }
                },
                u = c[i] = [],
                d = function() {
                    return new c(this)
                };
            if (a[i] = Error[i], u.item = function(e) {
                    return this[e] || null
                }, u.contains = function(e) {
                    return -1 !== l(this, e += "")
                }, u.add = function() {
                    for (var e, t = arguments, i = 0, s = t.length, n = !1; - 1 === l(this, e = t[i] + "") && (this.push(e), n = !0), ++i < s;);
                    n && this._updateClassName()
                }, u.remove = function() {
                    var e, t, i = arguments,
                        s = 0,
                        n = i.length,
                        r = !1;
                    do {
                        for (t = l(this, e = i[s] + ""); - 1 !== t;) this.splice(t, 1), r = !0, t = l(this, e)
                    } while (++s < n);
                    r && this._updateClassName()
                }, u.toggle = function(e, t) {
                    e += "";
                    var i = this.contains(e),
                        s = i ? !0 !== t && "remove" : !1 !== t && "add";
                    return s && this[s](e), !0 === t || !1 === t ? t : !i
                }, u.toString = function() {
                    return this.join(" ")
                }, n.defineProperty) {
                var h = {
                    get: d,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    n.defineProperty(s, t, h)
                } catch (e) {
                    void 0 !== e.number && -2146823252 !== e.number || (h.enumerable = !1, n.defineProperty(s, t, h))
                }
            } else n[i].__defineGetter__ && s.__defineGetter__(t, d)
        }
    }(window.self), function() {
        "use strict";
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function(e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function(e) {
                    var i, s = arguments.length;
                    for (i = 0; i < s; i++) e = arguments[i], t.call(this, e)
                }
            };
            t("add"), t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var i = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : i.call(this, e)
            }
        }
        e = null
    }())
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n = g(i(4)),
        r = i(6),
        o = g(i(5)),
        a = g(i(7)),
        l = g(i(19)),
        c = g(i(20)),
        u = g(i(17)),
        d = i(13),
        h = g(i(16)),
        f = g(i(21));
    i(24), i(25);
    var p = i(26),
        m = i(28),
        v = g(i(29));

    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var y = (function(e, t, i) {
        t && s(e.prototype, t), i && s(e, i)
    }(w, [{
        key: "init",
        value: function() {
            this.Preloader = new l.default, this.Nav = new n.default, this.projectPreview = new a.default, this.allProjects = new c.default, new f.default(".contact-form", "php/index.php", "contact"), new f.default(".subscribe-form", "php/index.php", "subscribe"), this.scroll = new u.default(o.default.main), this.initEvents()
        }
    }, {
        key: "initEvents",
        value: function() {
            var e = this;
            window.addEventListener("load", function() {
                e.slider = new v.default, e.allProjects.init(), e.scroll.init(), o.default.windowIsLoad = !0, e.Preloader.showAtail(), setTimeout(function() {
                    (0, h.default)(".intro-demo-image img"), (0, h.default)(".atail-text-logo img"), (0, h.default)(".atail-slider-item img"), (0, h.default)(".preview-images-item img"), (0, h.default)(".atail-post-title  img"), (0, h.default)(".atail-brands-item a img"), (0, h.default)(".atail-post-title img"), (0, h.default)(".figure-extended img"), (0, h.default)(".atail-post-most-likes img"), (0, h.default)(".widget_recent_entries img"), (0, h.default)(".widget_atail_recent_posts_widget img")
                }, 0)
            }), r.optimizedResize.add(function() {
                new d.Promise(function(e, t) {
                    e(!0)
                }).then(function(t) {
                    return o.default.resize(), e.Preloader.resize(), !0
                }).then(function(t) {
                    return e.Nav.resize(), t
                }).then(function(t) {
                    return e.projectPreview.resize(), t
                }).then(function(t) {
                    return e.allProjects.resize(), t
                }).then(function(t) {
                    return e.scroll.resize(), t
                }).then(function(e) {
                    return e
                }).catch(function(e) {
                    console.error("Error when window was resizing!", e)
                })
            }), document.addEventListener("click", function(t) {
                var i = t.target,
                    s = i.getAttribute("data-action"),
                    n = "A" === i.tagName,
                    r = "BODY" === i.tagName;
                if (!n && !s)
                    for (; !(n && s || 9 === (i = i.parentNode).nodeType);) {
                        if ("BODY" === i.tagName) {
                            r = !0;
                            break
                        }
                        if (s = i.getAttribute("data-action"), n = "A" === i.tagName, null !== s || n) break
                    }
                if (r) return !1;
                if (n) {
                    var o = i.getAttribute("href"),
                        a = o && -1 !== o.indexOf("#"),
                        l = i.getAttribute("onClick");
                    if (!a && !s) {
                        if (!l) {
                            var c = i.getAttribute("target");
                            if (c && -1 !== c.indexOf("_blank")) return !1;
                            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) return e.Nav.closeNav(), !1;
                            t.preventDefault(), document.body.classList.add("atail-hide-body"), setTimeout(function() {
                                location.href = o
                            }, 300)
                        }
                        return
                    }
                    if (a && !s) return
                }
                if (s) switch (s) {
                    case "show-nav":
                        e.Nav.showNav();
                        break;
                    case "close-nav":
                        e.Nav.closeNav();
                        break;
                    case "open-full-post":
                        e.projectPreview.openFullPost(i);
                        break;
                    case "full-post-close":
                        e.projectPreview.closeFullPost(i);
                        break;
                    case "full-post-next-slide":
                        e.projectPreview.nextSlide();
                        break;
                    case "full-post-prev-slide":
                        e.projectPreview.prevSlide();
                        break;
                    case "full-post-show-info":
                        t.stopPropagation(), e.projectPreview.fullPostShowInfo();
                        break;
                    case "show-category":
                        e.allProjects.showCategory(i);
                        break;
                    case "like":
                        (0, p.blogPostLike)(i);
                        break;
                    case "dislike":
                        (0, m.blogPostDislike)(i);
                        break;
                    case "slider-prev-slide":
                        e.slider.goPrev(!0);
                        break;
                    case "slider-next-slide":
                        e.slider.goNext(!0);
                        break;
                    case "all-projects":
                        e.allProjects.showProjects(i);
                        break;
                    case "all-projects-close":
                        e.allProjects.closeProjects()
                }
            });
            var t = document.documentElement,
                i = document.body;
            document.addEventListener("scroll", function() {
                var s = t.scrollTop || i && i.scrollTop || 0;
                o.default.ww < 992 && e.allProjects.onScroll(s)
            })
        }
    }]), w);

    function w() {
        ! function(e, t) {
            if (!(e instanceof w)) throw new TypeError("Cannot call a class as a function")
        }(this), this.init()
    }
    t.default = y
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n, r = (n = i(5)) && n.__esModule ? n : {
            default: n
        },
        o = (function(e, t, i) {
            t && s(e.prototype, t), i && s(e, i)
        }(a, [{
            key: "init",
            value: function() {
                var e = this,
                    t = e.navList = document.querySelector(".nav-list");
                if (!t) return !1;
                if (this.atailHeader = document.querySelector(".atail"), !this.atailHeader) return console.error('Dont find node with class ".atail"'), !1;
                this.showNavBtn = document.querySelector('[data-action="show-nav"]');
                var i = e.navListli = t.children;
                return !!i && ([].forEach.call(i, function(e, t) {
                    var i = document.createElement("span");
                    i.className = "nav-list-counter";
                    var s = e.children[0];
                    i.innerHTML = "0" + (t + 1), s.insertBefore(i, s.firstChild)
                }), !((e.navListLiLength = i.length) <= e.maxLinksCount) && (e._createLink(), e._hideExcessives(), this.isInit = !0))
            }
        }, {
            key: "showNav",
            value: function() {
                this.atailHeader.classList.add("atail-header-opened"), this.showNavBtn.setAttribute("data-action", "close-nav"), document.body.style.overflow = "hidden"
            }
        }, {
            key: "closeNav",
            value: function() {
                this.atailHeader.classList.remove("atail-header-opened"), this.showNavBtn.setAttribute("data-action", "show-nav"), document.body.style.overflow = ""
            }
        }, {
            key: "_hideExcessives",
            value: function() {
                if (r.default.ww < 992) return !1;
                var e = this;
                if (e.excessives) return !1;
                e.excessives = !0;
                var t = e.maxLinksCount;
                return !(e.navListLiLength < e.maxLinksCount || ((e.remnant = [].slice.call(e.navListli, t - 1)).forEach(function(t) {
                    e.moreUl.appendChild(t)
                }), e.navList.appendChild(this.more), this.closeNav(), 0))
            }
        }, {
            key: "_showExcessives",
            value: function() {
                var e = this,
                    t = this;
                return !(!t.excessives || (t.excessives = !1, t.navListLiLength < t.maxLinksCount || (this.navList.removeChild(t.more), t.remnant.forEach(function(t) {
                    e.navList.appendChild(t)
                }), 0)))
            }
        }, {
            key: "_createLink",
            value: function() {
                var e = this.more = document.createElement("li");
                e.className = "col-xs-2 more-links menu-item-has-children", e.innerHTML = '<a href="#"><span>More</span></a><ul></ul>', this.moreUl = e.querySelector("ul")
            }
        }, {
            key: "resize",
            value: function() {
                return !!this.isInit && (992 <= r.default.ww ? this._hideExcessives() : this._showExcessives(), !0)
            }
        }]), a);

    function a() {
        ! function(e, t) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }(this), this.maxLinksCount = 5, this.excessives = !1, this.isInit = !1, this.init()
    }
    t.default = o
}, function(e, t) {
    "use strict";

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (function(e, t, s) {
        t && i(e.prototype, t)
    }(n, [{
        key: "setScrollWidth",
        value: function() {
            var e = document.createElement("div");
            e.style.visibility = "hidden", e.style.width = "100px", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
            var t = e.offsetWidth;
            e.style.overflow = "scroll";
            var i = document.createElement("div");
            i.style.width = "100%", e.appendChild(i);
            var s = i.offsetWidth;
            e.parentNode.removeChild(e), this.scrollWidth = t - s
        }
    }, {
        key: "resize",
        value: function() {
            this.ww = window.innerWidth, this.wh = window.innerHeight, this.mainClientWidth = this.main.clientWidth, this.setScrollWidth()
        }
    }]), n);

    function n() {
        ! function(e, t) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this), this.ww = window.innerWidth, this.wh = window.innerHeight, this.atailMain = document.querySelector(".atail"), this.atailMainClientWidth = this.atailMain.clientWidth, this.main = document.querySelector(".main-scroll"), this.mainClientWidth = this.main.clientWidth, this.sides = document.querySelector(".sides"), this.header = document.querySelector(".atail-header"), this.lang = document.querySelector(".widget-lang"), this.windowIsLoad = !1, this.setScrollWidth(), this.main.ontouchstart = function(e) {
            e.stopPropagation()
        }
    }
    t.default = new s
}, function(e, t) {
    "use strict";
    var i, s;

    function n() {
        s || (s = !0, window.requestAnimationFrame ? window.requestAnimationFrame(r) : setTimeout(r, 66))
    }

    function r() {
        i.forEach(function(e) {
            e()
        }), s = !1
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.optimizedResize = (s = !(i = []), {
        add: function(e) {
            i.length || window.addEventListener("resize", n),
                function(e) {
                    e && i.push(e)
                }(e)
        }
    })
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n = i(8),
        r = i(9),
        o = i(10),
        a = i(11),
        l = i(12),
        c = h(i(5)),
        u = h(i(16)),
        d = h(i(17));

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = (function(e, t, i) {
        t && s(e.prototype, t), i && s(e, i)
    }(p, [{
        key: "init",
        value: function() {
            var e = this,
                t = this.projectPreview = document.querySelector(".project-preview");
            if (!t) return !1;
            this.scroll = new d.default(t), this.scroll.init(), this.projectPreviewParent = t.parentNode, document.body.classList.add("window-height"), t.focus();
            var i = this.projects = t.children;
            if (!i.length) return !1;
            this.projectsLength = i.length;
            var s = this.projectsImagesBox = document.querySelector(".preview-images-item");
            this.projectsImages = [], this.fullPostSliderImages = [], i[0].classList.add("projects-item-active"), i[0].classList.add("projects-item-animate"), [].forEach.call(i, function(t) {
                t.classList.add("projects-item");
                var i = t.querySelector('[id^="project-"]');
                if (i && (i = i.getAttribute("id")), s) {
                    var n = s.querySelector("." + i);
                    n ? e.projectsImages.push(n) : e.projectsImages.push(!1)
                }
            }), this.projectsImages && this.projectsImages[0] && this.projectsImages[0].classList.add("images-item-active"), this.currentProject = i[0], this.currentProjectIndex = 0, this.prevProjectIndex = 0, this.animateBoxBot(), this.checkScroll(), this.initMouseWheel(), this.onKeyPress(), this.onTouch(), this.createFullPost(), this.scroll.createScroll(), this.isInit = !0
        }
    }, {
        key: "initMouseWheel",
        value: function() {
            function e(e) {
                if ((e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1, t.isAnimating) return e.preventDefault(), !1;
                var n = e.currentTarget,
                    r = e.deltaY || e.detail || e.wheelDelta;
                if ((/rv:11.0/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent)) && (r = -r), r < 100 && 0 < r ? r = 100 : -100 < r && r < 0 && (r = -100), t.hasScroll) {
                    var o = n;
                    0 === o.scrollTop && r < 0 ? s = !0 : o.scrollTop >= t.maxScrollHeight && 0 < r ? i = !0 : (t.isAnimating = !0, t.startPosition = o.scrollTop, t.endPosition = t.startPosition + 2 * r, t.path = t.endPosition - t.startPosition, (0, a.jsAnimation)({
                        duration: 300,
                        timing: function(e) {
                            return e
                        },
                        draw: function(e) {
                            if (o.scrollTop = t.startPosition + t.path * e, 992 <= c.default.ww) {
                                var i = (t.startPosition + t.path * e) * t.scroll.precent;
                                i < 0 ? i = 0 : i > o.clientHeight - t.scroll.lineHeight && (i = o.clientHeight - t.scroll.lineHeight), t.scroll.scrollLine.style.top = i + "px"
                            }
                            1 <= e && (t.isAnimating = !1)
                        }
                    }))
                } else 0 < r ? i = !0 : r < 0 && (s = !0);
                i && (t.showNextProject(), i = !1), s && (t.showPrevProject(), s = !1)
            }
            var t = this,
                i = !1,
                s = !1,
                n = this.projectPreview;
            n.addEventListener ? "onwheel" in document ? n.addEventListener("wheel", e) : "onmousewheel" in document ? n.addEventListener("mousewheel", e) : n.addEventListener("MozMousePixelScroll", e) : n.attachEvent("onmousewheel", e)
        }
    }, {
        key: "onKeyPress",
        value: function() {
            var e = this,
                t = !1,
                i = !1,
                s = !1;
            this.projectPreview.addEventListener("keydown", function() {
                if (s) return !1;
                s = !0, e.maxScrollHeight || e.checkScroll(), e.hasScroll && (t = 0 === e.projectPreview.scrollTop, i = e.projectPreview.scrollTop >= e.maxScrollHeight)
            }), this.projectPreview.addEventListener("keyup", function(n) {
                if (e.fullPostIsOpen || e.isAnimating) return !1;
                e.hasScroll ? t && 0 === e.projectPreview.scrollTop ? 38 === n.keyCode && e.showPrevProject() : i && e.projectPreview.scrollTop >= e.maxScrollHeight && 40 === n.keyCode && e.showNextProject() : (38 === n.keyCode && e.showPrevProject(), 40 === n.keyCode && e.showNextProject()), s = i = t = !1
            })
        }
    }, {
        key: "onTouch",
        value: function() {
            var e = this,
                t = !1,
                i = !1,
                s = null,
                n = null,
                r = 0;
            this.projectPreview.addEventListener("touchstart", function(n) {
                if (e.isAnimating) return !1;
                e.maxScrollHeight || e.checkScroll(), e.hasScroll && (t = 0 === e.projectPreview.scrollTop, i = e.projectPreview.scrollTop === e.maxScrollHeight);
                var r = n.touches[0];
                s = r.clientY
            }), this.projectPreview.addEventListener("touchmove", function(t) {
                if (e.isAnimating) return !1;
                var i = t.touches[0];
                n = i.clientY, r = s - n
            }), this.projectPreview.addEventListener("touchend", function() {
                if (e.isAnimating) return !1;
                e.hasScroll || (r < -20 ? t = !0 : 20 < r && (i = !0)), 0 === e.projectPreview.scrollTop && t && r < -20 && e.showPrevProject(), e.projectPreview.scrollTop === e.maxScrollHeight && i && 20 < r && e.showNextProject(), i = t = !1, r = 0
            })
        }
    }, {
        key: "showNextProject",
        value: function() {
            if (this.isAnimating) return !1;
            this.prevProjectIndex = this.currentProjectIndex;
            var e = this.currentProjectIndex + 1;
            if (e >= this.projectsLength && (e = 0), this.currentProjectIndex = e, this.prevProjectIndex === this.currentProjectIndex) return !1;
            this.fromBottom = !0, this.showProject()
        }
    }, {
        key: "showPrevProject",
        value: function() {
            if (this.isAnimating) return !1;
            this.prevProjectIndex = this.currentProjectIndex;
            var e = this.currentProjectIndex - 1;
            if (e < 0 && (e = this.projectsLength - 1), this.currentProjectIndex = e, this.prevProjectIndex === this.currentProjectIndex) return !1;
            this.fromTop = !0, this.showProject()
        }
    }, {
        key: "showProject",
        value: function() {
            if (this.isAnimating = !0, !o.animationSupport) {
                var e = this.projects,
                    t = this.projectsImages,
                    i = this.currentProjectIndex,
                    s = this.prevProjectIndex;
                return e[i].classList.add("projects-item-active"), e[s].classList.remove("projects-item-active"), e[i].classList.add("projects-item-animate"), e[s].classList.remove("projects-item-animate"), this.projectPreview.scrollTop = 0, t[s] && t[s].classList.remove("images-item-active"), t[i] && t[i].classList.add("images-item-active"), this.checkScroll(), this.isAnimating = !1
            }
            this.animateWrap.classList.add("z-index-3"), this.projects[this.prevProjectIndex].classList.add("projects-count-hide"), this.projects[this.prevProjectIndex].classList.remove("projects-item-animate"), this.fromBottom && this.animateBoxBot.classList.add("from-bottom"), this.fromTop && this.animateBoxTop.classList.add("from-top")
        }
    }, {
        key: "checkScroll",
        value: function() {
            var e = this.offsetHeight = this.projectPreview.offsetHeight,
                t = this.fullHeight = this.projectPreview.scrollHeight;
            this.maxScrollHeight = t - e, this.hasScroll = e + 1 < t
        }
    }, {
        key: "animateBoxBot",
        value: function() {
            var e = this,
                t = this.animateBoxBot = document.createElement("DIV"),
                i = this.animateBoxTop = document.createElement("DIV"),
                s = this.animateWrap = document.createElement("DIV");

            function r() {
                var n = e.projects,
                    r = e.projectsImages,
                    a = e.currentProjectIndex,
                    l = e.prevProjectIndex;
                1 == ++o ? (n[a].classList.add("projects-item-active"), n[l].classList.remove("projects-item-active"), n[l].classList.remove("projects-count-hide"), setTimeout(function() {
                    n[a].classList.add("projects-item-animate")
                }, 0), e.projectPreview.scrollTop = 0, r[l] && r[l].classList.remove("images-item-active"), r[a] && r[a].classList.add("images-item-active"), e.checkScroll(), e.fromBottom ? t.classList.add("from-bottom-end") : e.fromTop && i.classList.add("from-top-end"), e.scroll.setScrollSize()) : 2 === o && (s.classList.remove("z-index-3"), o = 0, e.fromBottom ? (t.classList.remove("from-bottom"), t.classList.remove("from-bottom-end"), e.fromBottom = !1) : e.fromTop && (i.classList.remove("from-top"), i.classList.remove("from-top-end"), e.fromTop = !1), e.isAnimating = !1)
            }
            t.className = "animate-box-bot", i.className = "animate-box-top", s.className = "animate-wrap", t.innerHTML = "<div></div><div></div><div></div>", i.innerHTML = "<div></div><div></div><div></div>", s.appendChild(t), s.appendChild(i), this.projectsImagesBox.appendChild(s);
            var o = 0;
            t.addEventListener(n.transitionEvent, r), i.addEventListener(n.transitionEvent, r)
        }
    }, {
        key: "openFullPost",
        value: function(e) {
            var t = this;
            if (this.isAnimating) return !1;
            this.isAnimating = !0, e.classList.add("is-loading"), (0, l.httpGet)("jsons/atail_get_popup_project/", e).then(function(i) {
                return e.classList.remove("is-loading"), c.default.atailMain.appendChild(t.fullPost), t.fullPostIsOpen = !0, JSON.parse(i)
            }, function() {
                return !1
            }).then(function(e) {
                if (!e) return !1;
                var i = t.projectsImages[t.currentProjectIndex] && t.projectsImages[t.currentProjectIndex].cloneNode(!0);
                if (i) {
                    i.classList.add("active");
                    var s = document.createElement("DIV");
                    s.className = "post-slider-image-item", s.appendChild(i), t.postSliderImages.appendChild(s), t.fullPostSliderImages.push(s), i.getAttribute("src")
                }
                e.slides && e.slides.forEach(function(e) {
                    var i = e.type;
                    if ("image" === i) {
                        var s = new Image,
                            n = e.src.img,
                            r = e.src.title;
                        s.onload = function() {
                            (0, u.default)(s)
                        };
                        var o = document.createElement("DIV");
                        o.className = "post-slider-image-item";
                        var a = e.fit;
                        switch (a) {
                            case "contain":
                                o.classList.add("contain-fit");
                                break;
                            case "full":
                                o.classList.add("full-fit")
                        }
                        s.src = n, s.alt = r;
                        var l = null;
                        "full" === a ? ((l = document.createElement("DIV")).className = "post-slider-item-scroll", l.appendChild(s), o.appendChild(l)) : o.appendChild(s), t.postSliderImages.appendChild(o), t.fullPostSliderImages.push(o), "full" === a && t.scrollItem.push(new d.default(l))
                    } else if ("video" === i) {
                        var c = document.createElement("IFRAME");
                        c.setAttribute("frameborder", 0), setTimeout(function() {
                            c.setAttribute("src", e.src)
                        }, 2e3);
                        var h = document.createElement("DIV");
                        h.className = "post-slider-video-item", h.appendChild(c), t.postSliderImages.appendChild(h), t.fullPostSliderImages.push(h)
                    }
                }), t.fullPostSliderImages && 0 < t.fullPostSliderImages.length && (t.fullPostCurrentIndex = 0, t.fullPostPrevIndex = 0, t.fullPostSliderImages[0].classList.add("active"), 1 < t.fullPostSliderImages.length && (t.fullPostNextSlide.innerHTML = t.arrowTemplate, t.fullPostPrevSlide.innerHTML = t.arrowTemplate, t.postSliderImages.appendChild(t.fullPostNextSlide), t.postSliderImages.appendChild(t.fullPostPrevSlide)));
                var n = e.date_start ? e.date_start : "",
                    r = e.date_finish ? e.date_finish : "";
                t.contentHeader.innerHTML = "<h4>" + e.title + "</h4>" + n + r + "<p>" + e.content + "</p>";
                var o = e.positions ? e.participants : "",
                    a = e.positions;
                for (var l in e.positions) a.hasOwnProperty(l) && (o += '<span class="small-title">' + a[l].title + "<span>" + a[l].url + "</span></span>");
                return t.contentFooter.innerHTML = o, t.createShares(e.link, e.title), c.default.lang && c.default.lang.classList.add("hide-lang"), !0
            }).then(function(e) {
                return setTimeout(function() {
                    t.fullPost.classList.add("show-post-content"), o.animationSupport || t.fullPost.classList.add("no-animating")
                }, 1e3 / 60), e
            }).then(function(e) {
                return t.isAnimating = !1, e
            }).catch(function() {
                t.isAnimating = !1
            })
        }
    }, {
        key: "closeFullPost",
        value: function() {
            this.fullPost.classList.add("close-post-content"), this.fullPost.classList.remove("show-post-content"), this.fullPost.classList.remove("show-in-mobile"), c.default.main.parentNode.style.opacity = "";
            var e = this.projectsImages,
                t = this.fullPostSliderImages,
                i = this.currentProjectIndex,
                s = this.fullPostCurrentIndex;
            if (!e[i] || !t[s]) return !1;
            if (this.scrollItem.forEach(function(e) {
                    e.remove()
                }), this.scrollItem = [], this.scrollItemIsInited = !1, !o.animationSupport) {
                for (this.fullPost.classList.remove("no-animating"), this.fullPost.classList.remove("close-post-content"), this.fullPost.classList.remove("show-post-content"), this.fullPost.parentNode.removeChild(this.fullPost); this.postSliderImages.firstChild;) this.postSliderImages.removeChild(this.postSliderImages.firstChild);
                this.fullPostSliderImages = [], this.fullPostIsOpen = !1, this.projectPreview.focus(), c.default.lang && c.default.lang.classList.remove("hide-lang")
            }
        }
    }, {
        key: "createFullPost",
        value: function() {
            var e = this,
                t = this.fullPost = document.createElement("DIV");
            t.className = "full-post row", t.style.width = c.default.main.offsetWidth + "px";
            var i = this.fullPostSlider = document.createElement("DIV");
            i.className = "full-post-slider col-xs-10";
            var s = this.postSliderImages = document.createElement("DIV");
            s.className = "post-slider-images";
            var o = void 0,
                a = void 0,
                l = void 0;
            s.addEventListener("touchstart", function(e) {
                var t = e.touches[0];
                o = t.clientX
            }), s.addEventListener("touchmove", function(e) {
                var t = e.touches[0];
                a = t.clientX
            }), s.addEventListener("touchend", function() {
                if (l = o - a, e.fullPostSliderImages.length <= 1) return !1;
                50 <= l ? e.nextSlide() : l <= -50 && e.prevSlide()
            }), i.appendChild(s);
            var u = this.arrowTemplate = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width = "57.143px" height = "34.454px" viewBox = "0 0 57.143 34.454" enable - background = "new 0 0 57.143 34.454" xml: space = "preserve"><g><g><polygon points ="51.908,17.599 46.891,13.1 46.891,17.094 6.904,17.094 6.904,18.094 46.891,18.094 46.891,22.099"/></g></g></svg>';
            this.fullPostNextSlide = document.createElement("SPAN"), this.fullPostNextSlide.className = "full-post-next-slide", this.fullPostNextSlide.setAttribute("data-action", "full-post-next-slide"), this.fullPostNextSlide.innerHTML = u, this.fullPostPrevSlide = document.createElement("SPAN"), this.fullPostPrevSlide.className = "full-post-prev-slide", this.fullPostPrevSlide.setAttribute("data-action", "full-post-prev-slide"), this.fullPostPrevSlide.innerHTML = u;
            var h = this.fullPostContent = document.createElement("DIV");
            h.className = "full-post-content col-xs-2";
            var f = this.contentTableWrapper = document.createElement("DIV");
            f.className = "post-content-table-wrapper";
            var p = this.contentTable = document.createElement("DIV");
            p.className = "post-content-table";
            var m = this.contentHeader = document.createElement("DIV");
            m.className = "post-content-header";
            var v = this.contentFooter = document.createElement("DIV");
            v.className = "post-content-footer", f.appendChild(p), p.appendChild(m), p.appendChild(v), h.appendChild(f), t.appendChild(i), t.appendChild(h), h.addEventListener(n.transitionEvent, function() {
                e.fullPost.classList.contains("show-post-content") && (c.default.main.parentNode.style.opacity = "0")
            });
            var g = document.createElement("DIV"),
                y = document.createElement("BUTTON"),
                w = document.createElement("DIV");
            g.className = "full-post-mobile-menu";
            var b = this.mobileMenuCloseBtn = document.createElement("SPAN");
            b.className = "mobile-menu-close-btn", b.setAttribute("data-action", "full-post-show-info"), y.className = "full-post-mobile-info", y.setAttribute("data-action", "full-post-show-info"), y.innerHTML = "info", g.appendChild(y), g.appendChild(w), t.appendChild(g), t.appendChild(b);
            var P = this.closeBtn = document.createElement("SPAN");
            P.className = "full-post-close", P.setAttribute("data-action", "full-post-close"), t.appendChild(P), this.scrollItem = [], this.scrollItemIsInited = !1, s.addEventListener(r.animationEvent, function() {
                e.isAnimating = !1, e.fullPost.classList.contains("close-post-content") ? (e.fullPost.classList.remove("close-post-content"), e.fullPost.classList.remove("show-post-content"), e.fullPost.parentNode.removeChild(e.fullPost), e.postSliderImages.innerHTML = "", e.fullPostSliderImages = [], e.scrollItem = [], e.fullPostIsOpen = !1, e.projectPreview.focus(), c.default.lang && c.default.lang.classList.remove("hide-lang")) : e.fullPost.classList.contains("show-post-content") && (e.scrollItemIsInited ? e.scrollItemIsInited && e.scrollItem.forEach(function(e) {
                    e.resize()
                }) : (e.scrollItemIsInited = !0, e.scrollItem.push(new d.default(e.contentTableWrapper)), e.scrollItem.forEach(function(e) {
                    e.init()
                })))
            });
            var L = this.fullPostAnimateBox = document.createElement("DIV"),
                x = this.animateBoxRight = document.createElement("DIV"),
                S = this.animateBoxLeft = document.createElement("DIV");

            function j() {
                e.fullPostAnimateBox.classList.contains("from-right") ? e.fullPostAnimateBox.classList.contains("from-right-end") ? (e.fullPostAnimateBox.classList.remove("from-right-end"), e.fullPostAnimateBox.classList.remove("from-right")) : (e.fullPostSliderImages[e.fullPostCurrentIndex].classList.add("active"), e.fullPostSliderImages[e.fullPostPrevIndex].classList.remove("active"), e.fullPostAnimateBox.classList.add("from-right-end")) : e.fullPostAnimateBox.classList.contains("from-left") && (e.fullPostAnimateBox.classList.contains("from-left-end") ? (e.fullPostAnimateBox.classList.remove("from-left-end"), e.fullPostAnimateBox.classList.remove("from-left")) : (e.fullPostSliderImages[e.fullPostCurrentIndex].classList.add("active"), e.fullPostSliderImages[e.fullPostPrevIndex].classList.remove("active"), e.fullPostAnimateBox.classList.add("from-left-end")))
            }
            L.className = "full-post-animate-box", x.className = "animate-box-right", S.className = "animate-box-left", L.appendChild(S), L.appendChild(x), x.addEventListener(n.transitionEvent, j), S.addEventListener(n.transitionEvent, j), i.appendChild(L)
        }
    }, {
        key: "nextSlide",
        value: function() {
            var e = this.fullPostCurrentIndex;
            this.fullPostPrevIndex = e, ++e >= this.fullPostSliderImages.length && (e = 0), this.fullPostCurrentIndex = e, o.animationSupport ? this.fullPostAnimateBox.classList.add("from-right") : (this.fullPostSliderImages[this.fullPostCurrentIndex].classList.add("active"), this.fullPostSliderImages[this.fullPostPrevIndex].classList.remove("active"))
        }
    }, {
        key: "prevSlide",
        value: function() {
            var e = this.fullPostCurrentIndex;
            this.fullPostPrevIndex = e, --e < 0 && (e = this.fullPostSliderImages.length - 1), this.fullPostCurrentIndex = e, o.animationSupport ? this.fullPostAnimateBox.classList.add("from-left") : (this.fullPostSliderImages[this.fullPostCurrentIndex].classList.add("active"), this.fullPostSliderImages[this.fullPostPrevIndex].classList.remove("active"))
        }
    }, {
        key: "showSlide",
        value: function() {
            o.animationSupport || (this.fullPostSliderImages[this.fullPostCurrentIndex].classList.add("active"), this.fullPostSliderImages[this.fullPostPrevIndex].classList.remove("active"), this.scroll.setScrollSize())
        }
    }, {
        key: "fullPostShowInfo",
        value: function() {
            this.fullPost.classList.contains("show-in-mobile") ? this.fullPost.classList.remove("show-in-mobile") : this.fullPost.classList.add("show-in-mobile")
        }
    }, {
        key: "resize",
        value: function() {
            if (!this.isInit) return !1;
            this.checkScroll(), this.fullPost.style.width = c.default.main.offsetWidth + "px", this.scroll.resize(), this.scrollItem.forEach(function(e) {
                e.resize()
            })
        }
    }, {
        key: "createShares",
        value: function(e, t) {
            var i = document.createElement("DIV");
            i.classList.add("atail-project-shares"), this.contentHeader.appendChild(i);
            var s = JSON.parse(document.body.getAttribute("data-share"));
            jQuery(i).jsSocials({
                url: e,
                text: t,
                showLabel: !1,
                showCount: !0,
                shares: s
            })
        }
    }]), p);

    function p() {
        ! function(e, t) {
            if (!(e instanceof p)) throw new TypeError("Cannot call a class as a function")
        }(this), this.isInit = !1, this.init()
    }
    t.default = f
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.transitionEvent = function() {
        var e, t = document.createElement("fakeelement"),
            i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
        for (e in i)
            if (void 0 !== t.style[e]) return i[e]
    }()
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.animationEvent = function() {
        var e, t = document.createElement("fakeelement"),
            i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (e in i)
            if (void 0 !== t.style[e]) return i[e]
    }()
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = !1,
        s = "Webkit Moz O ms Khtml".split(" "),
        n = document.createElement("div");
    if (void 0 !== n.style.animationName && (i = !0), !1 === i)
        for (var r = 0; r < s.length; r++)
            if (void 0 !== n.style[s[r] + "AnimationName"]) {
                s[r].toLowerCase(), i = !0;
                break
            } t.animationSupport = i
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.jsAnimation = function(e) {
        var t = performance.now();
        requestAnimationFrame(function i(s) {
            var n = (s - t) / e.duration;
            1 < n && (n = 1);
            var r = e.timing(n);
            e.draw(r), n < 1 && requestAnimationFrame(i)
        })
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.httpGet = function(e, t) {
        var i = t.getAttribute("data-post");
        return i = i ? i + ".json" : "", new s.Promise(function(t, s) {
            var n = new XMLHttpRequest;
            n.open("GET", e + i + "?nochashe=" + (new Date).getTime(), !0), n.onload = function() {
                if (200 == this.status) t(this.response);
                else {
                    var e = new Error(this.statusText);
                    e.code = this.status, s(e)
                }
            }, n.onerror = function() {
                s(new Error("Network Error"))
            }, n.send()
        })
    }, t.httpPost = function(e, t, i) {
        return new s.Promise(function(s, n) {
            var r = new XMLHttpRequest;
            r.open("POST", e, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.onload = function() {
                if (200 == this.status) s(this.response);
                else {
                    var e = new Error(this.statusText);
                    e.code = this.status, n(e)
                }
            }, r.onerror = function() {
                n(new Error("Network Error"))
            };
            var o = "action=" + i;
            for (var a in t) t.hasOwnProperty(a) && (o += o ? "&" + a + "=" + t[a] : a + "=" + t[a]);
            r.send(o)
        })
    };
    var s = i(13)
}, function(e, t, i) {
    (function(t, s) {
        var n;
        n = function() {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }
            var n = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                r = 0,
                o = void 0,
                a = void 0,
                l = function(e, t) {
                    m[r] = e, m[r + 1] = t, 2 === (r += 2) && (a ? a(v) : P())
                },
                c = "undefined" != typeof window ? window : void 0,
                u = c || {},
                d = u.MutationObserver || u.WebKitMutationObserver,
                h = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function p() {
                var e = setTimeout;
                return function() {
                    return e(v, 1)
                }
            }
            var m = new Array(1e3);

            function v() {
                for (var e = 0; e < r; e += 2)(0, m[e])(m[e + 1]), m[e] = void 0, m[e + 1] = void 0;
                r = 0
            }
            var g, y, w, b, P = void 0;

            function L(e, t) {
                var i = arguments,
                    s = this,
                    n = new this.constructor(j);
                void 0 === n[S] && F(n);
                var r, o = s._state;
                return o ? (r = i[o - 1], l(function() {
                    return q(o, n, r, s._result)
                })) : H(s, n, e, t), n
            }

            function x(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(j);
                return C(t, e), t
            }
            P = h ? function() {
                return t.nextTick(v)
            } : d ? (y = 0, w = new d(v), b = document.createTextNode(""), w.observe(b, {
                characterData: !0
            }), function() {
                b.data = y = ++y % 2
            }) : f ? ((g = new MessageChannel).port1.onmessage = v, function() {
                return g.port2.postMessage(0)
            }) : void 0 === c ? function() {
                try {
                    var e = i(15);
                    return o = e.runOnLoop || e.runOnContext,
                        function() {
                            o(v)
                        }
                } catch (e) {
                    return p()
                }
            }() : p();
            var S = Math.random().toString(36).substring(16);

            function j() {}
            var I = void 0,
                A = 1,
                E = 2,
                T = new D;

            function _(e) {
                try {
                    return e.then
                } catch (e) {
                    return T.error = e, T
                }
            }

            function k(t, i, s) {
                i.constructor === t.constructor && s === L && i.constructor.resolve === x ? function(e, t) {
                    t._state === A ? O(e, t._result) : t._state === E ? M(e, t._result) : H(t, void 0, function(t) {
                        return C(e, t)
                    }, function(t) {
                        return M(e, t)
                    })
                }(t, i) : s === T ? M(t, T.error) : void 0 === s ? O(t, i) : e(s) ? function(e, t, i) {
                    l(function(e) {
                        var s = !1,
                            n = function(e, t, i, s) {
                                try {
                                    e.call(t, i, s)
                                } catch (e) {
                                    return e
                                }
                            }(i, t, function(i) {
                                s || (s = !0, t !== i ? C(e, i) : O(e, i))
                            }, function(t) {
                                s || (s = !0, M(e, t))
                            }, e._label);
                        !s && n && (s = !0, M(e, n))
                    }, e)
                }(t, i, s) : O(t, i)
            }

            function C(e, t) {
                e === t ? M(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof t || "object" == typeof t && null !== t ? k(e, t, _(t)) : O(e, t)
            }

            function N(e) {
                e._onerror && e._onerror(e._result), B(e)
            }

            function O(e, t) {
                e._state === I && (e._result = t, e._state = A, 0 !== e._subscribers.length && l(B, e))
            }

            function M(e, t) {
                e._state === I && (e._state = E, e._result = t, l(N, e))
            }

            function H(e, t, i, s) {
                var n = e._subscribers,
                    r = n.length;
                e._onerror = null, n[r] = t, n[r + A] = i, n[r + E] = s, 0 === r && e._state && l(B, e)
            }

            function B(e) {
                var t = e._subscribers,
                    i = e._state;
                if (0 !== t.length) {
                    for (var s = void 0, n = void 0, r = e._result, o = 0; o < t.length; o += 3) s = t[o], n = t[o + i], s ? q(i, s, n, r) : n(r);
                    e._subscribers.length = 0
                }
            }

            function D() {
                this.error = null
            }
            var W = new D;

            function q(t, i, s, n) {
                var r = e(s),
                    o = void 0,
                    a = void 0,
                    l = void 0,
                    c = void 0;
                if (r) {
                    if ((o = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return W.error = e, W
                            }
                        }(s, n)) === W ? (c = !0, a = o.error, o = null) : l = !0, i === o) return void M(i, new TypeError("A promises callback cannot return that same promise."))
                } else o = n, l = !0;
                i._state !== I || (r && l ? C(i, o) : c ? M(i, a) : t === A ? O(i, o) : t === E && M(i, o))
            }
            var z = 0;

            function F(e) {
                e[S] = z++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function R(e, t) {
                this._instanceConstructor = e, this.promise = new e(j), this.promise[S] || F(this.promise), n(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && O(this.promise, this._result))) : M(this.promise, new Error("Array Methods must be provided an Array"))
            }

            function V(e) {
                this[S] = z++, this._result = this._state = void 0, this._subscribers = [], j !== e && ("function" != typeof e && function() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }(), this instanceof V ? function(e, t) {
                    try {
                        t(function(t) {
                            C(e, t)
                        }, function(t) {
                            M(e, t)
                        })
                    } catch (t) {
                        M(e, t)
                    }
                }(this, e) : function() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }())
            }

            function U() {
                var e = void 0;
                if (void 0 !== s) e = s;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var i = null;
                    try {
                        i = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === i && !t.cast) return
                }
                e.Promise = V
            }
            return R.prototype._enumerate = function() {
                for (var e = this.length, t = this._input, i = 0; this._state === I && i < e; i++) this._eachEntry(t[i], i)
            }, R.prototype._eachEntry = function(e, t) {
                var i = this._instanceConstructor,
                    s = i.resolve;
                if (s === x) {
                    var n = _(e);
                    if (n === L && e._state !== I) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof n) this._remaining--, this._result[t] = e;
                    else if (i === V) {
                        var r = new i(j);
                        k(r, e, n), this._willSettleAt(r, t)
                    } else this._willSettleAt(new i(function(t) {
                        return t(e)
                    }), t)
                } else this._willSettleAt(s(e), t)
            }, R.prototype._settledAt = function(e, t, i) {
                var s = this.promise;
                s._state === I && (this._remaining--, e === E ? M(s, i) : this._result[t] = i), 0 === this._remaining && O(s, this._result)
            }, R.prototype._willSettleAt = function(e, t) {
                var i = this;
                H(e, void 0, function(e) {
                    return i._settledAt(A, t, e)
                }, function(e) {
                    return i._settledAt(E, t, e)
                })
            }, V.all = function(e) {
                return new R(this, e).promise
            }, V.race = function(e) {
                var t = this;
                return n(e) ? new t(function(i, s) {
                    for (var n = e.length, r = 0; r < n; r++) t.resolve(e[r]).then(i, s)
                }) : new t(function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }, V.resolve = x, V.reject = function(e) {
                var t = new this(j);
                return M(t, e), t
            }, V._setScheduler = function(e) {
                a = e
            }, V._setAsap = function(e) {
                l = e
            }, V._asap = l, V.prototype = {
                constructor: V,
                then: L,
                catch: function(e) {
                    return this.then(null, e)
                }
            }, U(), V.polyfill = U, V.Promise = V
        }, e.exports = n()
    }).call(t, i(14), function() {
        return this
    }())
}, function(e, t) {
    var i, s, n = e.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (i === setTimeout) return setTimeout(e, 0);
        if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
        try {
            return i(e, 0)
        } catch (t) {
            try {
                return i.call(null, e, 0)
            } catch (t) {
                return i.call(this, e, 0)
            }
        }
    }! function() {
        try {
            i = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            i = r
        }
        try {
            s = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            s = o
        }
    }();
    var l, c = [],
        u = !1,
        d = -1;

    function h() {
        u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && f())
    }

    function f() {
        if (!u) {
            var e = a(h);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++d < t;) l && l[d].run();
                d = -1, t = c.length
            }
            l = null, u = !1,
                function(e) {
                    if (s === clearTimeout) return clearTimeout(e);
                    if ((s === o || !s) && clearTimeout) return s = clearTimeout, clearTimeout(e);
                    try {
                        s(e)
                    } catch (t) {
                        try {
                            return s.call(null, e)
                        } catch (t) {
                            return s.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        c.push(new p(e, t)), 1 !== c.length || u || a(f)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
        return []
    }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}, function(e, t) {}, function(e, t) {
    "use strict";
    var i = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        s = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        n = new Image,
        r = "object-fit" in n.style,
        o = "object-position" in n.style,
        a = "string" == typeof n.currentSrc,
        l = n.getAttribute,
        c = n.setAttribute,
        u = !1;

    function d(e, t) {
        if (!e[i].parsingSrcset) {
            var n = function(e) {
                for (var t, i = getComputedStyle(e).fontFamily, n = {}; null !== (t = s.exec(i));) n[t[1]] = t[2];
                return n
            }(e);
            if (n["object-fit"] = n["object-fit"] || "fill", !e[i].s) {
                if ("fill" === n["object-fit"]) return;
                if (!e[i].skipTest && r && !n["object-position"]) return
            }
            var o = e[i].ios7src || e.currentSrc || e.src;
            if (t) o = t;
            else if (e.srcset && !a && window.picturefill) {
                var c = window.picturefill._;
                e[i].parsingSrcset = !0, e[c.ns] && e[c.ns].evaled || c.fillImg(e, {
                    reselect: !0
                }), e[c.ns].curSrc || (e[c.ns].supported = !1, c.fillImg(e, {
                    reselect: !0
                })), delete e[i].parsingSrcset, o = e[c.ns].curSrc || o
            }
            if (e[i].s) e[i].s = o, t && (e[i].srcAttr = t);
            else {
                e[i] = {
                    s: o,
                    srcAttr: t || l.call(e, "src"),
                    srcsetAttr: e.srcset
                }, e.src = i;
                try {
                    e.srcset && (e.srcset = "", Object.defineProperty(e, "srcset", {
                            value: e[i].srcsetAttr
                        })),
                        function(e) {
                            var t = {
                                get: function() {
                                    return e[i].s
                                },
                                set: function(t) {
                                    return delete e[i].i, d(e, t), t
                                }
                            };
                            Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
                                get: t.get
                            })
                        }(e)
                } catch (t) {
                    e[i].ios7src = o
                }
            }
            e.style.backgroundImage = 'url("' + o + '")', e.style.backgroundPosition = n["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", /scale-down/.test(n["object-fit"]) ? (e[i].i || (e[i].i = new Image, e[i].i.src = o), function t() {
                e[i].i.naturalWidth ? e[i].i.naturalWidth > e.width || e[i].i.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto" : setTimeout(t, 100)
            }()) : e.style.backgroundSize = n["object-fit"].replace("none", "auto").replace("fill", "100% 100%")
        }
    }

    function h(e, t) {
        var s = !u && !e;
        if (t = t || {}, e = e || "img", o && !t.skipTest) return !1;
        "string" == typeof e ? e = document.querySelectorAll("img") : "length" in e || (e = [e]);
        for (var n = 0; n < e.length; n++) e[n][i] = e[n][i] || t, d(e[n]);
        s && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && h(e.target, {
                skipTest: t.skipTest
            })
        }, !0), u = !0, e = "img"), t.watchMQ && window.addEventListener("resize", h.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    h.supportsObjectFit = r, (h.supportsObjectPosition = o) || (HTMLImageElement.prototype.getAttribute = function(e) {
        return !this[i] || "src" !== e && "srcset" !== e ? l.call(this, e) : this[i][e + "Attr"]
    }, HTMLImageElement.prototype.setAttribute = function(e, t) {
        !this[i] || "src" !== e && "srcset" !== e ? c.call(this, e, t) : this["src" === e ? "src" : e + "Attr"] = String(t)
    }), e.exports = h
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n = o(i(5)),
        r = o(i(18));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = (function(e, t, i) {
        t && s(e.prototype, t), i && s(e, i)
    }(l, [{
        key: "init",
        value: function() {
            this.scrollIsInit = !0, this.createScroll(), this.onScroll()
        }
    }, {
        key: "createScroll",
        value: function() {
            var e = this;
            if (!this.scrollIsInit) return !1;
            this.currentTop = 0;
            var t = this.scroll = document.createElement("DIV");
            t.className = "atail-scroll";
            var i = this.scrollLine = document.createElement("SPAN");
            i.className = "atail-scroll-line", t.appendChild(i), this.isMainScroll || this.isAllProjects ? document.body.appendChild(t) : this.parent && this.parent.appendChild(t);
            var s, n, r, o = !1,
                a = !1,
                l = function t() {
                    a = o = !1, e.scrollLine.style.transition = "", e.scrollLine.style.WebkitTransition = "", document.removeEventListener("mouseup", t)
                };
            t.addEventListener("mouseenter", function() {
                t.classList.add("hovered")
            }), t.addEventListener("mouseleave", function() {
                t.classList.remove("hovered")
            }), t.addEventListener("click", function(t) {
                t.preventDefault(), t.stopPropagation(), a || (e.box.scrollTop = t.clientY / e.precent, a = !1)
            }), i.addEventListener("click", function(t) {
                t.preventDefault(), t.stopPropagation(), o = !1, e.scrollLine.style.transition = "", e.scrollLine.style.WebkitTransition = "", document.removeEventListener("mouseup", l)
            }), i.addEventListener("mousedown", function(t) {
                o = !0, t.preventDefault(), s = t.clientY, e.currentScrollTop = e.box.scrollTop, e.scrollLine.style.transition = "top 0s ease, height .3s ease, border-right-width .2s ease, opacity .3s ease", e.scrollLine.style.WebkitTransition = "top 0s ease, height .3s ease, border-right-width .2s ease, opacity .3s ease"
            }), document.addEventListener("mousemove", function(t) {
                if (!o) return !1;
                a = !0, n = t.clientY, r = n - s, e.box.scrollTop = e.currentScrollTop + r / e.precent, document.addEventListener("mouseup", l)
            }), this.setBoxWidth(), this.setScrollSize(), this.animateScroll()
        }
    }, {
        key: "setBoxWidth",
        value: function() {}
    }, {
        key: "setScrollSize",
        value: function() {
            if (this.isIos) return !1;
            if (!this.scrollIsInit) return !1;
            getComputedStyle(this.box);
            var e = this.minTop = 0,
                t = this.offsetHeight = this.box.offsetHeight,
                i = this.fullHeight = this.box.scrollHeight,
                s = 0;
            if (!this.isProjectPreview) {
                var r = document.body.offsetHeight;
                s = this.n = r - t
            }
            if (t = this.offsetHeight = t, i = this.fullHeight = i, this.maxScrollHeight = i - t, this.hasScroll = t + 1 < i, this.hasScroll)
                if (this.scroll.classList.remove("display-none"), n.default.ww < 992) this.scrollLine.style.height = 0, this.box.style.width = "";
                else {
                    var o = this.box.clientHeight - e,
                        a = this.box.scrollHeight - e;
                    this.precent = o / a, this.lineHeight = o * this.precent + s, this.scrollLine.style.height = this.lineHeight + "px", this.scrollLine.style.top = this.minTop + "px", this.box.style.width = n.default.scrollWidth + this.parent.clientWidth + "px"
                }
            else this.scrollLine.style.height = 0, this.box.style.width = "", this.scroll.classList.add("display-none")
        }
    }, {
        key: "animateScroll",
        value: function() {
            if (n.default.ww < 992) return !1;
            var e = this.box.scrollTop * this.precent + this.minTop,
                t = this.box.clientHeight;
            e < 0 ? e = this.minTop : e > t + this.n - this.lineHeight && (e = t + this.n - this.lineHeight), this.currentTop = e, this.scrollLine.style.top = e + "px"
        }
    }, {
        key: "onScroll",
        value: function() {
            var e = this;
            if (!this.scrollIsInit) return !1;
            var t = (0, r.default)(function(t) {
                if (e.isIos) return !1;
                t.stopPropagation(), e.animateScroll()
            }, 100);
            this.box.addEventListener("scroll", t)
        }
    }, {
        key: "remove",
        value: function() {
            this.scroll && this.scroll.parentNode && this.scroll.parentNode.removeChild(this.scroll)
        }
    }, {
        key: "resize",
        value: function() {
            if (!this.scrollIsInit) return !1;
            this.setBoxWidth(), this.setScrollSize()
        }
    }]), l);

    function l(e) {
        if (function(e, t) {
                if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function")
            }(this), !e || !e.nodeType) return !1;
        if (this.box = e, this.parent = e.parentNode, this.boxWithScroll = e, this.hasScroll = !1, this.isProjectPreview = !1, this.isAjaxProject = !1, this.isAjaxProjectTableWrapper = !1, this.isMainScroll = !1, this.isAllProjects = !1, this.box.classList.contains("all-atail-projects")) {
            if (this.isAllProjects = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("main-scroll")) {
            if (this.isMainScroll = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("project-preview")) {
            if (this.isProjectPreview = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("post-slider-item-scroll")) {
            if (this.isAjaxProject = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (this.box.classList.contains("post-content-table-wrapper")) {
            if (this.isAjaxProjectTableWrapper = !0, this.parent.querySelector(".atail-scroll")) return !1
        } else if (document.body.querySelector(".atail-scroll")) return !1;
        this.isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, this.scrollIsInit = !1
    }
    t.default = a
}, function(e, t) {
    (function(t) {
        var i = "Expected a function",
            s = NaN,
            n = "[object Symbol]",
            r = /^\s+|\s+$/g,
            o = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            c = parseInt,
            u = "object" == typeof t && t && t.Object === Object && t,
            d = "object" == typeof self && self && self.Object === Object && self,
            h = u || d || Function("return this")(),
            f = Object.prototype.toString,
            p = Math.max,
            m = Math.min,
            v = function() {
                return h.Date.now()
            };

        function g(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function y(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && f.call(e) == n
                }(e)) return s;
            if (g(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = g(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(r, "");
            var i = a.test(e);
            return i || l.test(e) ? c(e.slice(2), i ? 2 : 8) : o.test(e) ? s : +e
        }
        e.exports = function(e, t, s) {
            var n = !0,
                r = !0;
            if ("function" != typeof e) throw new TypeError(i);
            return g(s) && (n = "leading" in s ? !!s.leading : n, r = "trailing" in s ? !!s.trailing : r),
                function(e, t, s) {
                    var n, r, o, a, l, c, u = 0,
                        d = !1,
                        h = !1,
                        f = !0;
                    if ("function" != typeof e) throw new TypeError(i);

                    function w(t) {
                        var i = n,
                            s = r;
                        return n = r = void 0, u = t, a = e.apply(s, i)
                    }

                    function b(e) {
                        var i = e - c;
                        return void 0 === c || t <= i || i < 0 || h && o <= e - u
                    }

                    function P() {
                        var e = v();
                        if (b(e)) return L(e);
                        l = setTimeout(P, function(e) {
                            var i = t - (e - c);
                            return h ? m(i, o - (e - u)) : i
                        }(e))
                    }

                    function L(e) {
                        return l = void 0, f && n ? w(e) : (n = r = void 0, a)
                    }

                    function x() {
                        var e = v(),
                            i = b(e);
                        if (n = arguments, r = this, c = e, i) {
                            if (void 0 === l) return function(e) {
                                return u = e, l = setTimeout(P, t), d ? w(e) : a
                            }(c);
                            if (h) return l = setTimeout(P, t), w(c)
                        }
                        return void 0 === l && (l = setTimeout(P, t)), a
                    }
                    return t = y(t) || 0, g(s) && (d = !!s.leading, o = (h = "maxWait" in s) ? p(y(s.maxWait) || 0, t) : o, f = "trailing" in s ? !!s.trailing : f), x.cancel = function() {
                        void 0 !== l && clearTimeout(l), n = c = r = l = void(u = 0)
                    }, x.flush = function() {
                        return void 0 === l ? a : L(v())
                    }, x
                }(e, t, {
                    leading: n,
                    maxWait: t,
                    trailing: r
                })
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n, r = (n = i(5)) && n.__esModule ? n : {
            default: n
        },
        o = i(8),
        a = i(10),
        l = (function(e, t, i) {
            t && s(e.prototype, t), i && s(e, i)
        }(c, [{
            key: "init",
            value: function() {
                var e = this;
                if (this.preloaderWrap) {
                    var t = this.preloaderWrap.querySelectorAll(".atail-dot");
                    setTimeout(function() {
                        t[0].classList.add("start-animation"), t[3].classList.add("start-animation"), setTimeout(function() {
                            t[1].classList.add("start-animation"), t[4].classList.add("start-animation"), setTimeout(function() {
                                t[2].classList.add("start-animation"), t[5].classList.add("start-animation")
                            }, 200)
                        }, 200)
                    }, 0), this.preloader.classList.add("atail-loading");
                    var i = document.querySelectorAll("img"),
                        s = i.length,
                        n = 0;
                    if (s) {
                        var o = 100 / s,
                            l = 0;
                        return [].forEach.call(i, function(t) {
                            var i = new Image,
                                c = t.src;
                            i.onload = function() {
                                ++n === s ? (e.preloader.classList.add("full-preloader"), e.preloader.style.width = "", a.animationSupport || (e.preloader.classList.add("atail-preloader-loaded"), r.default.atailMain.classList.add("atail-opacity-1"))) : (l += o, e.preloader.style.width = l + o + "%")
                            }, i.onerror = function() {
                                ++n === s ? (e.preloader.classList.add("full-preloader"), e.preloader.style.width = "", a.animationSupport || (e.preloader.classList.add("atail-preloader-loaded"), r.default.atailMain.classList.add("atail-opacity-1"))) : (l += o, e.preloader.style.width = l + o + "%")
                            }, i.src = c
                        }), !0
                    }
                    this.preloader.classList.add("full-preloader"), this.preloader.style.width = "", a.animationSupport || (this.preloader.classList.add("atail-preloader-loaded"), r.default.atailMain.classList.add("atail-opacity-1"))
                }
            }
        }, {
            key: "showAtail",
            value: function() {
                var e = this;
                this.preloaderWrap ? setTimeout(function() {
                    e.preloader.classList.contains("atail-preloader-loaded") || (e.preloader.classList.add("atail-preloader-loaded"), r.default.atailMain.classList.add("atail-opacity-1"), e.span.classList.add("display-none"), setTimeout(function() {
                        e.vis() && e.preloaderWrap.classList.add("display-none")
                    }, 600))
                }, 1800) : r.default.atailMain.classList.add("atail-opacity-1")
            }
        }, {
            key: "resize",
            value: function() {
                this.preloaderWrap && (this.cloneSpan.style.width = window.innerWidth + "px")
            }
        }, {
            key: "vis",
            value: function() {
                var e, t, i = {
                    hidden: "visibilitychange",
                    webkitHidden: "webkitvisibilitychange",
                    mozHidden: "mozvisibilitychange",
                    msHidden: "msvisibilitychange"
                };
                for (e in i)
                    if (e in document) {
                        t = i[e];
                        break
                    } return function(i) {
                    return i && document.addEventListener(t, i), !document[e]
                }
            }
        }]), c);

    function c() {
        var e = this;
        ! function(e, t) {
            if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function")
        }(this);
        var t = this.preloaderWrap = document.querySelector(".atail-preloader-wrapper");
        if (t) {
            var i = this.preloader = t.querySelector(".atail-preloader");
            this.span = t.querySelector("span"), this.cloneSpan = i.querySelector("span"), this.cloneSpan.style.width = window.innerWidth + "px", i.addEventListener(o.transitionEvent, function t() {
                if (i.classList.contains("atail-preloader-loaded")) return e.preloaderWrap.classList.add("display-none"), !1;
                if (i.classList.contains("full-preloader")) {
                    if (!r.default.windowIsLoad) return setTimeout(t, 100), !1;
                    r.default.atailMain.classList.add("atail-opacity-1"), i.classList.add("atail-preloader-loaded"), e.span.classList.add("display-none")
                }
            }), setTimeout(function() {
                e.init()
            }, 0)
        }
    }
    t.default = l
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n = u(i(5)),
        r = i(8),
        o = u(i(17)),
        a = i(10),
        l = i(12),
        c = u(i(18));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = (function(e, t, i) {
        t && s(e.prototype, t), i && s(e, i)
    }(h, [{
        key: "init",
        value: function() {
            var e = this,
                t = this.allProjects = document.querySelector(".all-atail-projects");
            if (!t) return !1;
            this.atailProjectsParent = document.querySelector(".all-atail-projects-wrapper");
            var i = this.allProjectsArray = t.querySelectorAll(".all-atail-projects-single");
            if (!i) return !1;
            this.allProjectsArrayIE = [], [].forEach.call(i, function(t) {
                var i = t.cloneNode(!0);
                e.allProjectsArrayIE.push(i)
            }), this.currentCategoryArray = [].slice.call(this.allProjectsArray, 0), this.projectsCategoryWrapper = this.currentCategoryArray[0].parentNode, this.allProjectsLength = i.length, this.projectCategory = document.querySelector(".all-atail-projects-category");
            var s = 0,
                a = .3333333;
            991 < n.default.ww && (a = .1666667, s = 1400 < n.default.ww ? 100 : 70), this.projectCategory.style.cssText = "width: " + n.default.mainClientWidth * a + "px; right: " + ((n.default.ww - n.default.atailMainClientWidth) / 2 + s) + "px", this.categoryWrapper = this.projectCategory.querySelector(".all-atail-projects-category-wrapper"), this.projectsCategoryWrapperScroll = new o.default(this.categoryWrapper), this.projectsCategoryWrapperScroll.init();
            var l = this.projectInfo = [];
            l.top = [], l.bot = [], l.height = [], [].forEach.call(i, function(e) {
                l.top.push(e.offsetTop), l.bot.push(e.offsetTop + e.clientHeight), l.height.push(e.clientHeight)
            }), this.scrollHeight = this.allProjects.scrollHeight;
            var u = this.style = document.createElement("STYLE");
            document.body.appendChild(u);
            var d = this.animateBox = document.createElement("DIV");
            d.className = "all-projects-animate-box", d.innerHTML = "<div></div><div></div><div></div><div></div><div></div>", n.default.sides.querySelector("div").appendChild(d), d.addEventListener(r.transitionEvent, this.categoryAnimating.bind(this)), this.isInit = !0, this.currentTarget = this.projectCategory.querySelector('.active[data-action="show-category"]');
            var h = this.allProjects.scrollTop;
            this.onScroll(h), this.scroll = new o.default(t), this.scroll.init();
            var f = (0, c.default)(function(i) {
                i.stopPropagation();
                var s = t.scrollTop;
                e.onScroll(s)
            }, 150);
            t.addEventListener("scroll", f)
        }
    }, {
        key: "load",
        value: function() {
            this.isInit && this.scroll.resize()
        }
    }, {
        key: "onScroll",
        value: function(e) {
            if (!this.isInit) return !1;
            for (var t = e + .85 * n.default.wh, i = this.currentCategoryArray.length, s = this.projectInfo, r = this.currentCategoryArray, o = 0; o < i; o++) a.animationSupport ? s.top[o] < t ? (s.bot[o] < e ? r[o].classList.add("is-visible-bot") : r[o].classList.remove("is-visible-bot"), r[o].classList.add("is-visible")) : r[o].classList.remove("is-visible") : r[o].classList.add("is-visible")
        }
    }, {
        key: "showCategory",
        value: function(e) {
            if (e.classList.contains("active")) return !1;
            this.currentTarget || (this.currentTarget = e), this.currentTarget.classList.remove("active"), (this.currentTarget = e).classList.add("active"), this.categoryId = e.getAttribute("data-category"), a.animationSupport ? n.default.sides.classList.add("all-projects-box-animating") : (n.default.sides.classList.add("all-projects-box-animating"), this.categoryAnimating())
        }
    }, {
        key: "categoryAnimating",
        value: function() {
            var e = this,
                t = n.default.sides,
                i = this.categoryId;
            if (t.classList.contains("all-projects-box-animating"))
                if (t.classList.contains("box-animating")) t.classList.remove("all-projects-box-animating"), t.classList.remove("box-animating"), this.categoryId = null;
                else {
                    this.currentCategoryArray = [], this.fragment = document.createDocumentFragment(), this.allProjectsArray = [], [].forEach.call(this.allProjectsArrayIE, function(t) {
                        var i = t.cloneNode(!0);
                        e.allProjectsArray.push(i)
                    }), [].forEach.call(this.allProjectsArray, function(t) {
                        var s = t.cloneNode(!0);
                        s.classList.remove("is-visible"), s.classList.remove("is-visible-bot");
                        var n = s.getAttribute("data-categories"); - 1 !== i.indexOf("cat-all") ? (e.currentCategoryArray.push(s), e.fragment.appendChild(s)) : -1 !== n.indexOf(i) && (e.currentCategoryArray.push(s), e.fragment.appendChild(s))
                    }), this.projectsCategoryWrapper.innerHTML = "", this.projectsCategoryWrapper.appendChild(this.fragment);
                    var s = this.projectInfo = [];
                    s.top = [], s.bot = [], s.height = [], [].forEach.call(this.currentCategoryArray, function(e) {
                        var t = e.offsetTop,
                            i = e.clientHeight;
                        s.top.push(t), s.bot.push(t + i), s.height.push(i)
                    }), setTimeout(function() {
                        e.scrollHeight = e.allProjects.scrollHeight, e.allProjects.scrollTop = 0, document.body.scrollTop = 0, e.onScroll(0), e.scroll.resize(), a.animationSupport ? t.classList.add("box-animating") : (t.classList.remove("all-projects-box-animating"), t.classList.remove("box-animating"), e.categoryId = null)
                    }, 100)
                }
        }
    }, {
        key: "showProjects",
        value: function(e) {
            var t = this;
            if (this.isOpened) return !1;
            this.isOpened = !0, (0, l.httpGet)("jsons/atail_get_all_projects/all_projects.html", e).then(function(e) {
                n.default.main.classList.add("all-projects-loading");
                var i = t.closeProjectsBtn = document.createElement("DIV");
                i.className = "close-projects-btn", i.setAttribute("data-action", "all-projects-close"), i.innerHTML = "<span></span><span></span>", n.default.header.appendChild(t.closeProjectsBtn), n.default.lang && n.default.lang.classList.add("hide-lang"), setTimeout(function() {
                    n.default.main.classList.add("all-projects-loaded"), document.body.classList.remove("window-height"), n.default.main.insertAdjacentHTML("beforeend", e), t.closeProjectsBtn.classList.add("close-projects-btn-loaded");
                    var i = n.default.main.querySelector(".all-atail-projects-wrapper");
                    if (!i) return !1;
                    i.style.opacity = 0;
                    var s = i.querySelectorAll("img");
                    if (s.length <= 0) i.style.opacity = "", t.init();
                    else {
                        var r = s.length,
                            o = 0,
                            a = function() {
                                ++o === r && (i.style.opacity = "", t.init())
                            };
                        [].forEach.call(s, function(e) {
                            var t = new Image;
                            t.onload = function() {
                                a()
                            }, t.onerror = function() {
                                a()
                            }, t.src = e.src
                        })
                    }
                    setTimeout(function() {
                        var e = 0,
                            i = .3333333;
                        991 < n.default.ww && (i = .1666667, e = 1400 < n.default.ww ? 100 : 70), t.projectCategory.style.width = n.default.main.clientWidth * i + "px", t.projectCategory.style.right = (n.default.ww - n.default.atailMain.clientWidth) / 2 + e + "px"
                    }, 100)
                }, 100)
            }).catch(function() {
                t.isAnimating = !1
            })
        }
    }, {
        key: "closeProjects",
        value: function() {
            var e = this;
            this.closeProjectsBtn.classList.remove("close-projects-btn-loaded"), n.default.main.classList.add("all-projects-closing"), setTimeout(function() {
                document.body.classList.add("window-height"), n.default.main.removeChild(e.atailProjectsParent), n.default.header.removeChild(e.closeProjectsBtn), n.default.main.classList.remove("all-projects-loaded"), setTimeout(function() {
                    n.default.main.classList.remove("all-projects-loading")
                }, 0), n.default.main.classList.remove("all-projects-closing"), n.default.main.classList.remove("atail-disable-decoration"), n.default.lang && n.default.lang.classList.remove("hide-lang"), e.scroll.remove(), e.isOpened = !1
            }, 600)
        }
    }, {
        key: "resize",
        value: function() {
            var e = this;
            clearTimeout(this.timeOver), this.timeOver = setTimeout(function() {
                if (!e.isInit) return !1;
                var t = e.projectInfo = [];
                t.top = [], t.bot = [], t.height = [], [].forEach.call(e.currentCategoryArray, function(e) {
                    t.top.push(e.offsetTop), t.bot.push(e.offsetTop + e.clientHeight), t.height.push(e.clientHeight)
                }), setTimeout(function() {
                    992 <= n.default.ww ? (e.scrollHeight = e.allProjects.scrollHeight, e.onScroll(e.allProjects.scrollTop)) : (e.scrollHeight = document.body.scrollHeight, e.onScroll(document.body.scrollTop)), e.scroll.resize();
                    var t = 0,
                        i = .3333333;
                    991 < n.default.ww && (i = .1666667, t = 1400 < n.default.ww ? 100 : 70), e.projectCategory.style.width = n.default.main.clientWidth * i + "px", e.projectCategory.style.right = (n.default.ww - n.default.atailMain.clientWidth) / 2 + t + "px", e.projectsCategoryWrapperScroll.resize()
                }, 0)
            }, 200)
        }
    }]), h);

    function h() {
        ! function(e, t) {
            if (!(e instanceof h)) throw new TypeError("Cannot call a class as a function")
        }(this), this.isInit = !1, this.timeOver = null
    }
    t.default = d
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n = i(12),
        r = i(22),
        o = i(23),
        a = (function(e, t, i) {
            t && s(e.prototype, t), i && s(e, i)
        }(l, [{
            key: "init",
            value: function() {
                var e = this;
                if (this.forms.length <= 0) return !1;
                var t = this.forms;
                [].forEach.call(t, function(t) {
                    t.onsubmit = function(i) {
                        i.preventDefault();
                        var s = t.querySelector('[type="submit"]'),
                            a = t.querySelector('[name="comment"]'),
                            l = t.querySelector('[name="email"]'),
                            c = t.querySelector('[name="name"]'),
                            u = !0;
                        if (a && (a.value ? a.classList.remove("error") : (a.classList.add("error"), u = !1)), l && (l.value && e.validateEmail(l.value) ? l.classList.remove("error") : (l.classList.add("error"), u = !1)), c && (c.value ? c.classList.remove("error") : (c.classList.add("error"), u = !1)), !u) return !1;
                        (0, n.httpPost)(e.fileUrl, (0, r.form_serialize)(t), e.action).then(function(e) {
                            "success" === (e = JSON.parse(e)).status ? (t.classList.add("form-success"), s && s.setAttribute("disabled", "disabled"), (0, o.clean_form)(t), setTimeout(function() {
                                t.classList.remove("form-success")
                            }, 300)) : (e.commentMissed && a && a.classList.add("error"), e.emailMissed && l && l.classList.add("error"), e.nameMissed && c && c.classList.add("error"))
                        })
                    }
                })
            }
        }, {
            key: "validateEmail",
            value: function(e) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }
        }]), l);

    function l(e, t, i) {
        ! function(e, t) {
            if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function")
        }(this), e && t && (this.fileUrl = t || null, this.forms = document.querySelectorAll(e), this.action = i || "contact", this.init())
    }
    t.default = a
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.form_serialize = function(e) {
        if (e && "FORM" === e.nodeName) {
            var t, i, s = {};
            for (t = e.elements.length - 1; 0 <= t; t -= 1)
                if ("" !== e.elements[t].name) switch (e.elements[t].nodeName) {
                    case "INPUT":
                        switch (e.elements[t].type) {
                            case "text":
                            case "hidden":
                            case "password":
                            case "button":
                            case "reset":
                            case "submit":
                                s[e.elements[t].name] = encodeURIComponent(e.elements[t].value);
                                break;
                            case "email":
                                s[e.elements[t].name] = e.elements[t].value;
                                break;
                            case "checkbox":
                            case "radio":
                                e.elements[t].checked && (s[e.elements[t].name] = encodeURIComponent(e.elements[t].value))
                        }
                        break;
                    case "TEXTAREA":
                        s[e.elements[t].name] = encodeURIComponent(e.elements[t].value);
                        break;
                    case "SELECT":
                        switch (e.elements[t].type) {
                            case "select-one":
                                s[e.elements[t].name] = encodeURIComponent(e.elements[t].value);
                                break;
                            case "select-multiple":
                                for (i = e.elements[t].options.length - 1; 0 <= i; i -= 1) e.elements[t].options[i].selected && (s[e.elements[t].name] = encodeURIComponent(e.elements[t].options[i].value))
                        }
                        break;
                    case "BUTTON":
                        switch (e.elements[t].type) {
                            case "reset":
                            case "submit":
                            case "button":
                                s[e.elements[t].name] = encodeURIComponent(e.elements[t].value)
                        }
                }
            return s
        }
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clean_form = function(e) {
        var t;
        if (e && "FORM" === e.nodeName)
            for (t = e.elements.length - 1; 0 <= t; t -= 1)
                if ("" !== e.elements[t].name) switch (e.elements[t].nodeName) {
                    case "INPUT":
                        switch (e.elements[t].type) {
                            case "text":
                            case "hidden":
                            case "password":
                            case "button":
                            case "reset":
                            case "submit":
                            case "email":
                                e.elements[t].value = ""
                        }
                        break;
                    case "TEXTAREA":
                        e.elements[t].value = ""
                }
    }
}, function(e, t) {
    "use strict";
    ! function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, i) {
            var s = (new Date).getTime(),
                n = Math.max(0, 16 - (s - e)),
                r = window.setTimeout(function() {
                    t(s + n)
                }, n);
            return e = s + n, r
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }()
}, function(e, t) {
    "use strict";
    ! function() {
        if ("performance" in window == 0 && (window.performance = {}), Date.now = Date.now || function() {
                return (new Date).getTime()
            }, "now" in window.performance == 0) {
            var e = Date.now();
            performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
                return Date.now() - e
            }
        }
    }()
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blogPostLike = function(e) {
        wp.ajax.send("atail_add_like", {
            data: {
                token: (0, s.getCookie)("atail_xslt"),
                post_id: e.getAttribute("data-post")
            },
            success: function(t) {
                var i = '<i class="fa fa-heart-o" aria-hidden="true"></i>' + t.likes;
                e.innerHTML = i, (0, s.setCookie)("atail_xslt", t.token)
            },
            error: function(e) {
                console.error(e)
            }
        })
    };
    var s = i(27)
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setCookie = function(e, t, i) {
        var s = (i = i || {}).expires;
        if ("number" == typeof s && s) {
            var n = new Date;
            n.setTime(n.getTime() + 1e3 * s), s = i.expires = n
        }
        s && s.toUTCString && (i.expires = s.toUTCString());
        var r = e + "=" + (t = encodeURIComponent(t));
        for (var o in i) {
            r += "; " + o;
            var a = i[o];
            !0 !== a && (r += "=" + a)
        }
        document.cookie = r
    }, t.getCookie = function(e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blogPostDislike = function(e) {
        wp.ajax.send("atail_add_dislike", {
            data: {
                token: (0, s.getCookie)("atail_xslt"),
                post_id: e.getAttribute("data-post")
            },
            success: function(t) {
                var i = '<span class="comments-icon">&#207;</span>' + t.dislikes;
                e.innerHTML = i, (0, s.setCookie)("atail_xslt", t.token)
            },
            error: function(e) {
                console.error(e)
            }
        })
    };
    var s = i(27)
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var n = i(10),
        r = i(8),
        o = (function(e, t, i) {
            t && s(e.prototype, t), i && s(e, i)
        }(a, [{
            key: "init",
            value: function(e) {
                var t = this,
                    i = this.slider = document.querySelector(e);
                if (!i) return !1;
                i.classList.add("atail-slider");
                var s = this.sliderItems = i.children;
                return this.sliderItems = [], !(s.length <= 0) && (s[0].classList.add("active"), [].forEach.call(s, function(e) {
                    t.sliderItems.push(e), e.classList.add("atail-slider-item")
                }), this.currentItem = 0, this.prevItem = 0, this.createAnimateBox(), this.mouseEvent(), this.onTouch(), this.isInited = !0, (!this.autoplay || !this.isMouseOver) && void 0)
            }
        }, {
            key: "createAnimateBox",
            value: function() {
                var e = this;
                if (this.sliderItems.length <= 1) return !1;
                var t = this.sliderAnimateBox = document.createElement("DIV"),
                    i = this.animateBoxRight = document.createElement("DIV"),
                    s = this.animateBoxLeft = document.createElement("DIV");

                function n(t) {
                    if (clearTimeout(e.setTimeout), t.currentTarget, e.sliderAnimateBox.classList.contains("from-right"))
                        if (e.sliderAnimateBox.classList.contains("from-right-end")) {
                            if (e.sliderAnimateBox.classList.remove("from-right-end"), e.sliderAnimateBox.classList.remove("from-right"), e.isAnimating = !1, e.autoplay) {
                                if (e.isMouseOver) return !1;
                                e.setTimeout = setTimeout(function() {
                                    e.goNext()
                                }, 2500)
                            }
                        } else e.sliderItems[e.prevItem].classList.remove("active"), e.sliderItems[e.currentItem].classList.add("active"), e.sliderAnimateBox.classList.add("from-right-end");
                    else if (e.sliderAnimateBox.classList.contains("from-left"))
                        if (e.sliderAnimateBox.classList.contains("from-left-end")) {
                            if (e.sliderAnimateBox.classList.remove("from-left-end"), e.sliderAnimateBox.classList.remove("from-left"), e.isAnimating = !1, e.autoplay) {
                                if (e.isMouseOver) return !1;
                                e.setTimeout = setTimeout(function() {
                                    e.goNext()
                                }, 2500)
                            }
                        } else e.sliderItems[e.prevItem].classList.remove("active"), e.sliderItems[e.currentItem].classList.add("active"), e.sliderAnimateBox.classList.add("from-left-end")
                }
                t.className = "slider-animate-box", i.className = "animate-box-right", s.className = "animate-box-left", t.appendChild(s), t.appendChild(i), this.setTimeout = setTimeout(function() {
                    e.goNext()
                }, 2500), i.addEventListener(r.transitionEvent, n), s.addEventListener(r.transitionEvent, n);
                var o = this.arrowTemplate = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width = "57.143px" height = "34.454px" viewBox = "0 0 57.143 34.454" enable - background = "new 0 0 57.143 34.454" xml: space = "preserve"><g><g><polygon points ="51.908,17.599 46.891,13.1 46.891,17.094 6.904,17.094 6.904,18.094 46.891,18.094 46.891,22.099"/></g></g></svg>';
                this.fullPostNextSlide = document.createElement("SPAN"), this.fullPostNextSlide.className = "slider-next-slide", this.fullPostNextSlide.setAttribute("data-action", "slider-next-slide"), this.fullPostNextSlide.innerHTML = o, this.fullPostPrevSlide = document.createElement("SPAN"), this.fullPostPrevSlide.className = "slider-prev-slide", this.fullPostPrevSlide.setAttribute("data-action", "slider-prev-slide"), this.fullPostPrevSlide.innerHTML = o, this.slider.appendChild(t), this.slider.appendChild(this.fullPostNextSlide), this.slider.appendChild(this.fullPostPrevSlide)
            }
        }, {
            key: "goNext",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e && e;
                return !(this.sliderItems.length <= 1) && !(!t && this.isMouseOver) && !this.isAnimating && (this.prevItem = this.currentItem, this.currentItem++, this.currentItem >= this.sliderItems.length && (this.currentItem = 0), void(n.animationSupport ? (this.isAnimating = !0, this.sliderAnimateBox.classList.add("from-right")) : this.changeSlide()))
            }
        }, {
            key: "goPrev",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e && e;
                return !(this.sliderItems.length <= 1) && !(!t && this.isMouseOver) && !this.isAnimating && (this.prevItem = this.currentItem, this.currentItem--, this.currentItem < 0 && (this.currentItem = this.sliderItems.length - 1), void(n.animationSupport ? (this.isAnimating = !0, this.sliderAnimateBox.classList.add("from-left")) : this.changeSlide()))
            }
        }, {
            key: "changeSlide",
            value: function() {
                this.sliderItems[this.prevItem].classList.remove("active"), this.sliderItems[this.currentItem].classList.add("active")
            }
        }, {
            key: "mouseEvent",
            value: function() {
                var e = this;
                if (this.sliderItems.length <= 1) return !1;
                var t = this.slider;
                t.onmouseenter = function(t) {
                    e.isMouseOver = !0, clearTimeout(e.setTimeout)
                }, t.onmouseleave = function(t) {
                    e.isMouseOver = !1, e.autoplay && setTimeout(function() {
                        e.goNext()
                    }, 2500)
                }, t.onmousedown = function(e) {}
            }
        }, {
            key: "onTouch",
            value: function() {
                var e = this;
                if (this.sliderItems.length <= 1) return !1;
                var t = null,
                    i = null,
                    s = 0;
                this.slider.addEventListener("touchstart", function(e) {
                    var i = e.touches[0];
                    t = i.clientX
                }), this.slider.addEventListener("touchmove", function(e) {
                    var n = e.touches[0];
                    i = n.clientX, s = t - i
                }), this.slider.addEventListener("touchend", function(t) {
                    s < -20 && e.goPrev(!0), 20 < s && e.goNext(!0), s = 0
                })
            }
        }]), a);

    function a() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".atail-slider",
            t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        ! function(e, t) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }(this), this.isInited = !1, this.isMouseOver = !1, this.autoplay = t, this.init(e)
    }
    t.default = o
}]);