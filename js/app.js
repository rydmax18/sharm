(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (e[n] = s[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            i = t && "classList" in document.createElement("p"),
            a = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            o = function (t) {
              return e({}, r, t);
            },
            l = function (e, t) {
              var s,
                n = "LazyLoad::Initialized",
                i = new e(t);
              try {
                s = new CustomEvent(n, { detail: { instance: i } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            p = "sizes",
            u = "poster",
            h = "llOriginalAttrs",
            f = "loading",
            m = "loaded",
            g = "applied",
            v = "error",
            w = "native",
            b = "data-",
            y = "ll-status",
            C = function (e, t) {
              return e.getAttribute(b + t);
            },
            E = function (e) {
              return C(e, y);
            },
            S = function (e, t) {
              return (function (e, t, s) {
                var n = "data-ll-status";
                null !== s ? e.setAttribute(n, s) : e.removeAttribute(n);
              })(e, 0, t);
            },
            T = function (e) {
              return S(e, null);
            },
            x = function (e) {
              return null === E(e);
            },
            k = function (e) {
              return E(e) === w;
            },
            L = [f, m, g, v],
            M = function (e, t, s, n) {
              e &&
                (void 0 === n ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, n));
            },
            _ = function (e, t) {
              i
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            $ = function (e, t) {
              i
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (e) {
              return e.llTempImage;
            },
            A = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            O = function (e, t) {
              e && (e.loadingCount += t);
            },
            I = function (e, t) {
              e && (e.toLoadCount = t);
            },
            z = function (e) {
              for (var t, s = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            D = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && z(s).forEach(t);
            },
            N = function (e, t) {
              z(e).forEach(t);
            },
            G = [d],
            B = [d, u],
            W = [d, c, p],
            H = function (e) {
              return !!e[h];
            },
            j = function (e) {
              return e[h];
            },
            q = function (e) {
              return delete e[h];
            },
            V = function (e, t) {
              if (!H(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[h] = s);
              }
            },
            F = function (e, t) {
              if (H(e)) {
                var s = j(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            R = function (e, t, s) {
              _(e, t.class_loading),
                S(e, f),
                s && (O(s, 1), M(t.callback_loading, e, s));
            },
            X = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Y = function (e, t) {
              X(e, p, C(e, t.data_sizes)),
                X(e, c, C(e, t.data_srcset)),
                X(e, d, C(e, t.data_src));
            },
            U = {
              IMG: function (e, t) {
                D(e, function (e) {
                  V(e, W), Y(e, t);
                }),
                  V(e, W),
                  Y(e, t);
              },
              IFRAME: function (e, t) {
                V(e, G), X(e, d, C(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  V(e, G), X(e, d, C(e, t.data_src));
                }),
                  V(e, B),
                  X(e, u, C(e, t.data_poster)),
                  X(e, d, C(e, t.data_src)),
                  e.load();
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO"],
            K = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                M(e.callback_finish, t);
            },
            Z = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            J = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var n = t[s];
                  J(e, s, n);
                }
                delete e.llEvLisnrs;
              }
            },
            se = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                O(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                $(e, t.class_loading),
                t.unobserve_completed && A(e, s);
            },
            ne = function (e, t, s) {
              var n = P(e) || e;
              ee(n) ||
                (function (e, t, s) {
                  ee(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  Z(e, n, t), Z(e, "error", s);
                })(
                  n,
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = k(t);
                      se(t, s, n),
                        _(t, s.class_loaded),
                        S(t, m),
                        M(s.callback_loaded, t, n),
                        i || K(s, n);
                    })(0, e, t, s),
                      te(n);
                  },
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = k(t);
                      se(t, s, n),
                        _(t, s.class_error),
                        S(t, v),
                        M(s.callback_error, t, n),
                        i || K(s, n);
                    })(0, e, t, s),
                      te(n);
                  }
                );
            },
            ie = function (e, t, s) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                ne(e, t, s),
                (function (e) {
                  H(e) || (e[h] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, s) {
                  var n = C(e, t.data_bg),
                    i = C(e, t.data_bg_hidpi),
                    r = a && i ? i : n;
                  r &&
                    ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                    P(e).setAttribute(d, r),
                    R(e, t, s));
                })(e, t, s),
                (function (e, t, s) {
                  var n = C(e, t.data_bg_multi),
                    i = C(e, t.data_bg_multi_hidpi),
                    r = a && i ? i : n;
                  r &&
                    ((e.style.backgroundImage = r),
                    (function (e, t, s) {
                      _(e, t.class_applied),
                        S(e, g),
                        s &&
                          (t.unobserve_completed && A(e, t),
                          M(t.callback_applied, e, s));
                    })(e, t, s));
                })(e, t, s);
            },
            ae = function (e, t, s) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? ie(e, t, s)
                : (function (e, t, s) {
                    ne(e, t, s),
                      (function (e, t, s) {
                        var n = U[e.tagName];
                        n && (n(e, t), R(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            re = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(p);
            },
            oe = function (e) {
              D(e, function (e) {
                F(e, W);
              }),
                F(e, W);
            },
            le = {
              IMG: oe,
              IFRAME: function (e) {
                F(e, G);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  F(e, G);
                }),
                  F(e, B),
                  e.load();
              },
            },
            de = function (e, t) {
              (function (e) {
                var t = le[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (H(e)) {
                        var t = j(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  x(e) ||
                    k(e) ||
                    ($(e, t.class_entered),
                    $(e, t.class_exited),
                    $(e, t.class_applied),
                    $(e, t.class_loading),
                    $(e, t.class_loaded),
                    $(e, t.class_error));
                })(e, t),
                T(e),
                q(e);
            },
            ce = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            ue = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, n) {
                      var i = (function (e) {
                        return L.indexOf(E(e)) >= 0;
                      })(e);
                      S(e, "entered"),
                        _(e, s.class_entered),
                        $(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && A(e, s);
                        })(e, s, n),
                        M(s.callback_enter, e, t, n),
                        i || ae(e, s, n);
                    })(e.target, e, t, s)
                  : (function (e, t, s, n) {
                      x(e) ||
                        (_(e, s.class_exited),
                        (function (e, t, s, n) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return E(e) === f;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              D(e, function (e) {
                                re(e);
                              }),
                                re(e);
                            })(e),
                            oe(e),
                            $(e, s.class_loading),
                            O(n, -1),
                            T(e),
                            M(s.callback_cancel, e, t, n));
                        })(e, t, s, n),
                        M(s.callback_exit, e, t, n));
                    })(e.target, e, t, s);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            me = function (e) {
              return (function (e) {
                return E(e) === v;
              })(e);
            },
            ge = function (e, t) {
              return (function (e) {
                return he(e).filter(x);
              })(e || fe(t));
            },
            ve = function (e, s) {
              var i = o(e);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        ue(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(i, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = fe(e)), he(s).filter(me)).forEach(function (t) {
                          $(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(i, this),
                this.update(s);
            };
          return (
            (ve.prototype = {
              update: function (e) {
                var t,
                  i,
                  a = this._settings,
                  r = ge(e, a);
                I(this, r.length),
                  !s && n
                    ? pe(a)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== ce.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ne(e, t, s),
                                  (function (e, t) {
                                    var s = U[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  S(e, w);
                              })(e, t, s);
                          }),
                            I(s, 0);
                        })(r, a, this)
                      : ((i = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, i))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  fe(this._settings).forEach(function (e) {
                    q(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ge(e, s).forEach(function (e) {
                  A(e, t), ae(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  de(t, e);
                });
              },
            }),
            (ve.load = function (e, t) {
              var s = o(t);
              ae(e, s);
            }),
            (ve.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, n = 0; (s = t[n]); n += 1) l(e, s);
                  else l(e, t);
              })(ve, window.lazyLoadOptions),
            ve
          );
        })();
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var a = (t[n] = { exports: {} });
    return e[n].call(a.exports, a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      n = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let n = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = n + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      i = !0,
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      },
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      };
    function o(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function l(e, t) {
      const s = Array.from(e).filter(function (e, s, n) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const n = {},
            i = s.dataset[t].split(",");
          (n.value = i[0]),
            (n.type = i[1] ? i[1].trim() : "max"),
            (n.item = s),
            e.push(n);
        });
        let n = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        n = o(n);
        const i = [];
        if (n.length)
          return (
            n.forEach((t) => {
              const s = t.split(","),
                n = s[1],
                a = s[2],
                r = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === n && e.type === a) return !0;
                });
              i.push({ itemsArray: o, matchMedia: r });
            }),
            i
          );
      }
    }
    function d(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function c(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : d(t[s]) && d(e[s]) && Object.keys(t[s]).length > 0 && c(e[s], t[s]);
      });
    }
    const p = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function u() {
      const e = "undefined" != typeof document ? document : {};
      return c(e, p), e;
    }
    const h = {
      document: p,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function f() {
      const e = "undefined" != typeof window ? window : {};
      return c(e, h), e;
    }
    class m extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function g(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...g(e)) : t.push(e);
        }),
        t
      );
    }
    function v(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function w(e, t) {
      const s = f(),
        n = u();
      let i = [];
      if (!t && e instanceof m) return e;
      if (!e) return new m(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof m) return e;
        i = e;
      }
      return new m(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    w.fn = m.prototype;
    const b = "resize scroll".split(" ");
    function y(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            b.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : w(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    y("click"),
      y("blur"),
      y("focus"),
      y("focusin"),
      y("focusout"),
      y("keyup"),
      y("keydown"),
      y("keypress"),
      y("submit"),
      y("change"),
      y("mousedown"),
      y("mousemove"),
      y("mouseup"),
      y("mouseenter"),
      y("mouseleave"),
      y("mouseout"),
      y("mouseover"),
      y("touchstart"),
      y("touchend"),
      y("touchmove"),
      y("resize"),
      y("scroll");
    const C = {
      addClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          v(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, i] = e;
        function a(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), w(t).is(s))) n.apply(t, i);
          else {
            const e = w(t).parents();
            for (let t = 0; t < e.length; t += 1)
              w(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: a }),
                t.addEventListener(e, a, i);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          for (let e = 0; e < this.length; e += 1) {
            const a = this[e];
            let r;
            if (
              (!s && a.dom7Listeners
                ? (r = a.dom7Listeners[t])
                : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (a.removeEventListener(t, s.proxyListener, i),
                    r.splice(e, 1))
                  : n ||
                    (a.removeEventListener(t, s.proxyListener, i),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = f(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const a = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(a, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = f();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = f(),
            t = u(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            a = s.clientTop || i.clientTop || 0,
            r = s.clientLeft || i.clientLeft || 0,
            o = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + o - a, left: n.left + l - r };
        }
        return null;
      },
      css: function (e, t) {
        const s = f();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = f(),
          s = u(),
          n = this[0];
        let i, a;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = w(e), a = 0; a < i.length; a += 1) if (i[a] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof m) {
          for (i = e.nodeType ? [e] : e, a = 0; a < i.length; a += 1)
            if (i[a] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return w([]);
        if (e < 0) {
          const s = t + e;
          return w(s < 0 ? [] : [this[s]]);
        }
        return w([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = u();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof m)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = u();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof m)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(e)
              ? w([this[0].nextElementSibling])
              : w([])
            : this[0].nextElementSibling
            ? w([this[0].nextElementSibling])
            : w([])
          : w([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return w([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? w(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return w(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && w(t.previousElementSibling).is(e)
              ? w([t.previousElementSibling])
              : w([])
            : t.previousElementSibling
            ? w([t.previousElementSibling])
            : w([]);
        }
        return w([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return w([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? w(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return w(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? w(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return w(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? w(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return w(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? w([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return w(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !w(n[s]).is(e)) || t.push(n[s]);
        }
        return w(t);
      },
      filter: function (e) {
        return w(v(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(C).forEach((e) => {
      Object.defineProperty(w.fn, e, { value: C[e], writable: !0 });
    });
    const E = w;
    function S(e, t = 0) {
      return setTimeout(e, t);
    }
    function T() {
      return Date.now();
    }
    function x(e, t = "x") {
      const s = f();
      let n, i, a;
      const r = (function (e) {
        const t = f();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = r.transform || r.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((a =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = a.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? a.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? a.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        i || 0
      );
    }
    function k(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function L(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const a = e[i];
        if (
          null != a &&
          ((n = a),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, n = e.length; s < n; s += 1) {
            const n = e[s],
              i = Object.getOwnPropertyDescriptor(a, n);
            void 0 !== i &&
              i.enumerable &&
              (k(t[n]) && k(a[n])
                ? a[n].__swiper__
                  ? (t[n] = a[n])
                  : L(t[n], a[n])
                : !k(t[n]) && k(a[n])
                ? ((t[n] = {}), a[n].__swiper__ ? (t[n] = a[n]) : L(t[n], a[n]))
                : (t[n] = a[n]));
          }
        }
      }
      var n;
      return t;
    }
    function M(e, t, s) {
      e.style.setProperty(t, s);
    }
    function _({ swiper: e, targetPosition: t, side: s }) {
      const n = f(),
        i = -e.translate;
      let a,
        r = null;
      const o = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > i ? "next" : "prev",
        d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        c = () => {
          (a = new Date().getTime()), null === r && (r = a);
          const l = Math.max(Math.min((a - r) / o, 1), 0),
            p = 0.5 - Math.cos(l * Math.PI) / 2;
          let u = i + p * (t - i);
          if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: u });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(c);
        };
      c();
    }
    let $, P, A;
    function O() {
      return (
        $ ||
          ($ = (function () {
            const e = f(),
              t = u();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        $
      );
    }
    function I(e = {}) {
      return (
        P ||
          (P = (function ({ userAgent: e } = {}) {
            const t = O(),
              s = f(),
              n = s.navigator.platform,
              i = e || s.navigator.userAgent,
              a = { ios: !1, android: !1 },
              r = s.screen.width,
              o = s.screen.height,
              l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = i.match(/(iPad).*OS\s([\d_]+)/);
            const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              u = "Win32" === n;
            let h = "MacIntel" === n;
            return (
              !d &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${o}`) >= 0 &&
                ((d = i.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !u && ((a.os = "android"), (a.android = !0)),
              (d || p || c) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        P
      );
    }
    function z() {
      return (
        A ||
          (A = (function () {
            const e = f();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        A
      );
    }
    const D = {
      on(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][i](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        function i(...s) {
          n.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy,
            t.apply(n, s);
        }
        return (i.__emitterProxy = t), n.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, i) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let s, n, i;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
          : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
          n.unshift(i);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(i, [e, ...n]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          t
        );
      },
    };
    const N = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          { $wrapperEl: i, size: a, rtlTranslate: r, wrongRTL: o } = e,
          l = e.virtual && n.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = i.children(`.${e.params.slideClass}`),
          p = l ? e.virtual.slides.length : c.length;
        let u = [];
        const h = [],
          f = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          w = e.slidesGrid.length;
        let b = n.spaceBetween,
          y = -m,
          C = 0,
          E = 0;
        if (void 0 === a) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * a),
          (e.virtualSize = -b),
          r
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
            M(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const S = n.grid && n.grid.rows > 1 && e.grid;
        let T;
        S && e.grid.initSlides(p);
        const x =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < p; i += 1) {
          T = 0;
          const r = c.eq(i);
          if (
            (S && e.grid.updateSlide(i, r, p, t), "none" !== r.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              x && (c[i].style[t("width")] = "");
              const a = getComputedStyle(r[0]),
                o = r[0].style.transform,
                l = r[0].style.webkitTransform;
              if (
                (o && (r[0].style.transform = "none"),
                l && (r[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                T = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else {
                const e = s(a, "width"),
                  t = s(a, "padding-left"),
                  n = s(a, "padding-right"),
                  i = s(a, "margin-left"),
                  o = s(a, "margin-right"),
                  l = a.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + i + o;
                else {
                  const { clientWidth: s, offsetWidth: a } = r[0];
                  T = e + t + n + i + o + (a - s);
                }
              }
              o && (r[0].style.transform = o),
                l && (r[0].style.webkitTransform = l),
                n.roundLengths && (T = Math.floor(T));
            } else
              (T = (a - (n.slidesPerView - 1) * b) / n.slidesPerView),
                n.roundLengths && (T = Math.floor(T)),
                c[i] && (c[i].style[t("width")] = `${T}px`);
            c[i] && (c[i].swiperSlideSize = T),
              f.push(T),
              n.centeredSlides
                ? ((y = y + T / 2 + C / 2 + b),
                  0 === C && 0 !== i && (y = y - a / 2 - b),
                  0 === i && (y = y - a / 2 - b),
                  Math.abs(y) < 0.001 && (y = 0),
                  n.roundLengths && (y = Math.floor(y)),
                  E % n.slidesPerGroup == 0 && u.push(y),
                  h.push(y))
                : (n.roundLengths && (y = Math.floor(y)),
                  (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(y),
                  h.push(y),
                  (y = y + T + b)),
              (e.virtualSize += T + b),
              (C = T),
              (E += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + g),
          r &&
            o &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          S && e.grid.updateWrapperSize(T, u, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < u.length; s += 1) {
            let i = u[s];
            n.roundLengths && (i = Math.floor(i)),
              u[s] <= e.virtualSize - a && t.push(i);
          }
          (u = t),
            Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - a);
        }
        if ((0 === u.length && (u = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - a;
          u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < a)
          ) {
            const t = (a - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          M(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
            M(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        p !== d && e.emit("slidesLengthChange"),
          u.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== w && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let i,
          a = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !n) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            a = e > a ? e : a;
          }
        (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: i, snapGrid: a } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        i && (r = e),
          n.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const o = n[e];
          let l = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
          const d =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            c =
              (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            p = -(r - l),
            u = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (p <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(s.slideVisibleClass)),
            (o.progress = i ? -d : d),
            (o.originalProgress = i ? -c : c);
        }
        t.visibleSlides = E(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: a, isEnd: r } = t;
        const o = a,
          l = r;
        0 === n
          ? ((i = 0), (a = !0), (r = !0))
          : ((i = (e - t.minTranslate()) / n), (a = i <= 0), (r = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: a, isEnd: r }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !o && t.emit("reachBeginning toEdge"),
          r && !l && t.emit("reachEnd toEdge"),
          ((o && !a) || (l && !r)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: n,
            activeIndex: i,
            realIndex: a,
          } = e,
          r = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (o = r
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          o.addClass(s.slideActiveClass),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: i,
            params: a,
            activeIndex: r,
            realIndex: o,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (c = e)
                : s >= n[e] && s < n[e + 1] && (c = e + 1)
              : s >= n[e] && (c = e);
          a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (i.indexOf(s) >= 0) d = i.indexOf(s);
        else {
          const e = Math.min(a.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / a.slidesPerGroup);
        }
        if ((d >= i.length && (d = i.length - 1), c === r))
          return void (
            d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const p = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: p,
          previousIndex: r,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = E(e).closest(`.${s.slideClass}`)[0];
        let i,
          a = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (a = !0), (i = e);
              break;
            }
        if (!n || !a)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                E(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const G = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: n,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let a = x(i[0], e);
        return s && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: n,
            params: i,
            $wrapperEl: a,
            wrapperEl: r,
            progress: o,
          } = s;
        let l,
          d = 0,
          c = 0;
        s.isHorizontal() ? (d = n ? -e : e) : (c = e),
          i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          i.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -d : -c)
            : i.virtualTranslate ||
              a.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? d : c);
        const p = s.maxTranslate() - s.minTranslate();
        (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
          l !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, n = !0, i) {
        const a = this,
          { params: r, wrapperEl: o } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        const l = a.minTranslate(),
          d = a.maxTranslate();
        let c;
        if (
          ((c = n && e > l ? l : n && e < d ? d : e),
          a.updateProgress(c),
          r.cssMode)
        ) {
          const e = a.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!a.support.smoothScroll)
              return (
                _({ swiper: a, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, i),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, i),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      s && a.emit("transitionEnd"));
                  }),
                a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function B({ swiper: e, runCallbacks: t, direction: s, step: n }) {
      const { activeIndex: i, previousIndex: a } = e;
      let r = s;
      if (
        (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && i !== a)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === r
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const W = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const a = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: f,
        } = a;
        if (
          (a.animating && o.preventInteractionOnTransition) ||
          (!f && !n && !i)
        )
          return !1;
        const m = Math.min(a.params.slidesPerGroupSkip, r);
        let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (p || o.initialSlide || 0) === (c || 0) &&
            s &&
            a.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((a.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              n = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (r = e)
                : t >= s && t < n && (r = e + 1)
              : t >= s && (r = e);
          }
        if (a.initialized && r !== p) {
          if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
            return !1;
          if (
            !a.allowSlidePrev &&
            v > a.translate &&
            v > a.maxTranslate() &&
            (p || 0) !== r
          )
            return !1;
        }
        let w;
        if (
          ((w = r > p ? "next" : r < p ? "prev" : "reset"),
          (u && -v === a.translate) || (!u && v === a.translate))
        )
          return (
            a.updateActiveIndex(r),
            o.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== o.effect && a.setTranslate(v),
            "reset" !== w && (a.transitionStart(s, w), a.transitionEnd(s, w)),
            !1
          );
        if (o.cssMode) {
          const e = a.isHorizontal(),
            s = u ? v : -v;
          if (0 === t) {
            const t = a.virtual && a.params.virtual.enabled;
            t &&
              ((a.wrapperEl.style.scrollSnapType = "none"),
              (a._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (a.wrapperEl.style.scrollSnapType = ""),
                    (a._swiperImmediateVirtual = !1);
                });
          } else {
            if (!a.support.smoothScroll)
              return (
                _({ swiper: a, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          a.setTransition(t),
          a.setTranslate(v),
          a.updateActiveIndex(r),
          a.updateSlidesClasses(),
          a.emit("beforeTransitionStart", t, n),
          a.transitionStart(s, w),
          0 === t
            ? a.transitionEnd(s, w)
            : a.animating ||
              ((a.animating = !0),
              a.onSlideToWrapperTransitionEnd ||
                (a.onSlideToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, w));
                }),
              a.$wrapperEl[0].addEventListener(
                "transitionend",
                a.onSlideToWrapperTransitionEnd
              ),
              a.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                a.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
        const i = this;
        let a = e;
        return i.params.loop && (a += i.loopedSlides), i.slideTo(a, t, s, n);
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const n = this,
          { animating: i, enabled: a, params: r } = n;
        if (!a) return n;
        let o = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : o;
        if (r.loop) {
          if (i && r.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return r.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const n = this,
          {
            params: i,
            animating: a,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: d,
          } = n;
        if (!d) return n;
        if (i.loop) {
          if (a && i.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = c(l ? n.translate : -n.translate),
          u = r.map((e) => c(e));
        let h = r[u.indexOf(p) - 1];
        if (void 0 === h && i.cssMode) {
          let e;
          r.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        return (
          void 0 !== h &&
            ((f = o.indexOf(h)),
            f < 0 && (f = n.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          i.rewind && n.isBeginning
            ? n.slideTo(n.slides.length - 1, e, t, s)
            : n.slideTo(f, e, t, s)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
        const i = this;
        let a = i.activeIndex;
        const r = Math.min(i.params.slidesPerGroupSkip, a),
          o = r + Math.floor((a - r) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[o]) {
          const e = i.snapGrid[o];
          l - e > (i.snapGrid[o + 1] - e) * n && (a += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[o - 1];
          l - e <= (i.snapGrid[o] - e) * n && (a -= i.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, i.slidesGrid.length - 1)),
          i.slideTo(a, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          a = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(E(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? a < e.loopedSlides - n / 2 ||
                a > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (a = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  S(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - n
              ? (e.loopFix(),
                (a = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                S(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    const H = {
      loopCreate: function () {
        const e = this,
          t = u(),
          { params: s, $wrapperEl: n } = e,
          i = n.children().length > 0 ? E(n.children()[0].parentNode) : n;
        i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let a = i.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (a.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = E(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              i.append(e);
            }
            a = i.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = a.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > a.length && (e.loopedSlides = a.length);
        const r = [],
          o = [];
        a.each((t, s) => {
          const n = E(t);
          s < e.loopedSlides && o.push(t),
            s < a.length && s >= a.length - e.loopedSlides && r.push(t),
            n.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < o.length; e += 1)
          i.append(E(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = r.length - 1; e >= 0; e -= 1)
          i.prepend(E(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: i,
          allowSlideNext: a,
          snapGrid: r,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -r[t] - e.getTranslate();
        if (t < n) {
          (l = s.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        } else if (t >= s.length - n) {
          (l = -s.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = a), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function j(e) {
      const t = this,
        s = u(),
        n = f(),
        i = t.touchEventsData,
        { params: a, touches: r, enabled: o } = t;
      if (!o) return;
      if (t.animating && a.preventInteractionOnTransition) return;
      !t.animating && a.cssMode && a.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = E(l.target);
      if ("wrapper" === a.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!a.noSwipingClass &&
        "" !== a.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (d = E(e.path[0]));
      const c = a.noSwipingSelector
          ? a.noSwipingSelector
          : `.${a.noSwipingClass}`,
        p = !(!l.target || !l.target.shadowRoot);
      if (
        a.noSwiping &&
        (p
          ? (function (e, t = this) {
              return (function t(s) {
                return s && s !== u() && s !== f()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t);
            })(c, l.target)
          : d.closest(c)[0])
      )
        return void (t.allowClick = !0);
      if (a.swipeHandler && !d.closest(a.swipeHandler)[0]) return;
      (r.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (r.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const h = r.currentX,
        m = r.currentY,
        g = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
        v = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
      if (g && (h <= v || h >= n.innerWidth - v)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (r.startX = h),
        (r.startY = m),
        (i.touchStartTime = T()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        a.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        d.is(i.focusableElements) && (e = !1),
          s.activeElement &&
            E(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== d[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && a.touchStartPreventDefault;
        (!a.touchStartForcePreventDefault && !n) ||
          d[0].isContentEditable ||
          l.preventDefault();
      }
      t.emit("touchStart", l);
    }
    function q(e) {
      const t = u(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: a, rtlTranslate: r, enabled: o } = s;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const d =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        c = "touchmove" === l.type ? d.pageX : l.pageX,
        p = "touchmove" === l.type ? d.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (a.startX = c), void (a.startY = p);
      if (!s.allowTouchMove)
        return (
          (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(a, {
              startX: c,
              startY: p,
              currentX: c,
              currentY: p,
            }),
            (n.touchStartTime = T()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (p < a.startY && s.translate <= s.maxTranslate()) ||
            (p > a.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (c < a.startX && s.translate <= s.maxTranslate()) ||
          (c > a.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        E(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (a.currentX = c), (a.currentY = p);
      const h = a.currentX - a.startX,
        f = a.currentY - a.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) ||
        (s.isVertical() && a.currentX === a.startX)
          ? (n.isScrolling = !1)
          : h * h + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (n.isMoved = !0);
      let m = s.isHorizontal() ? h : f;
      (a.diff = m),
        (m *= i.touchRatio),
        r && (m = -m),
        (s.swipeDirection = m > 0 ? "prev" : "next"),
        (n.currentTranslate = m + n.startTranslate);
      let g = !0,
        v = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (v = 0),
        m > 0 && n.currentTranslate > s.minTranslate()
          ? ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + m) ** v))
          : m < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - m) ** v)),
        g && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(m) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (n.currentTranslate = n.startTranslate),
            void (a.diff = s.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function V(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: a,
          slidesGrid: r,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = T(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = T()),
        S(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = n.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let u = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== r[e + t]
          ? p >= r[e] && p < r[e + t] && ((u = e), (h = r[e + t] - r[e]))
          : p >= r[e] && ((u = e), (h = r[r.length - 1] - r[r.length - 2]));
      }
      const f = (p - r[u]) / h,
        m = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (c > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (f >= n.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (f > 1 - n.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(u + m)
            : t.slideTo(u)
          : ("next" === t.swipeDirection && t.slideTo(u + m),
            "prev" === t.swipeDirection && t.slideTo(u));
      }
    }
    function F() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: a } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function R(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function X() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let Y = !1;
    function U() {}
    const Q = (e, t) => {
      const s = u(),
        {
          params: n,
          touchEvents: i,
          el: a,
          wrapperEl: r,
          device: o,
          support: l,
        } = e,
        d = !!n.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        a[c](i.start, e.onTouchStart, t),
          a[c](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: d } : d
          ),
          a[c](i.end, e.onTouchEnd, t),
          i.cancel && a[c](i.cancel, e.onTouchEnd, t);
      } else
        a[c](i.start, e.onTouchStart, !1),
          s[c](i.move, e.onTouchMove, d),
          s[c](i.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        a[c]("click", e.onClick, !0),
        n.cssMode && r[c]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[p](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              F,
              !0
            )
          : e[p]("observerUpdate", F, !0);
    };
    const K = {
        attachEvents: function () {
          const e = this,
            t = u(),
            { params: s, support: n } = e;
          (e.onTouchStart = j.bind(e)),
            (e.onTouchMove = q.bind(e)),
            (e.onTouchEnd = V.bind(e)),
            s.cssMode && (e.onScroll = X.bind(e)),
            (e.onClick = R.bind(e)),
            n.touch && !Y && (t.addEventListener("touchstart", U), (Y = !0)),
            Q(e, "on");
        },
        detachEvents: function () {
          Q(this, "off");
        },
      },
      Z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const J = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: n = 0,
            params: i,
            $el: a,
          } = e,
          r = i.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in r ? r[o] : void 0) || e.originalParams,
          d = Z(e, i),
          c = Z(e, l),
          p = i.enabled;
        d && !c
          ? (a.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (a.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              a.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const u = l.direction && l.direction !== i.direction,
          h = i.loop && (l.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), L(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          p && !f ? e.disable() : !p && f && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", l),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let n = !1;
        const i = f(),
          a = "window" === t ? i.innerHeight : s.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: a * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: a, value: o } = r[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${o}px)`).matches && (n = a)
            : o <= s.clientWidth && (n = a);
        }
        return n || "max";
      },
    };
    const ee = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: n,
            $el: i,
            device: a,
            support: r,
          } = e,
          o = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && s.push(t + n);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !r.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: n },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: a.android },
              { ios: a.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const te = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function se(e, t) {
      return function (s = {}) {
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                L(t, s))
              : L(t, s))
          : L(t, s);
      };
    }
    const ne = {
        eventsEmitter: D,
        update: N,
        translate: G,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              B({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                B({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: W,
        loop: H,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: K,
        breakpoints: J,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ee,
        images: {
          loadImage: function (e, t, s, n, i, a) {
            const r = f();
            let o;
            function l() {
              a && a();
            }
            E(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((o = new r.Image()),
                (o.onload = l),
                (o.onerror = l),
                n && (o.sizes = n),
                s && (o.srcset = s),
                t && (o.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ie = {};
    class ae {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = L({}, s)),
          t && !s.el && (s.el = t),
          s.el && E(s.el).length > 1)
        ) {
          const e = [];
          return (
            E(s.el).each((t) => {
              const n = L({}, s, { el: t });
              e.push(new ae(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = O()),
          (n.device = I({ userAgent: s.userAgent })),
          (n.browser = z()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const i = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: se(s, i),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const a = L({}, te, i);
        return (
          (n.params = L({}, a, ie, s)),
          (n.originalParams = L({}, n.params)),
          (n.passedParams = L({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = E),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: E(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: T(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: a,
          size: r,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[o].swiperSlideSize;
          for (let s = o + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > r && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < n.length; e += 1) {
            (t ? i[e] + a[e] - i[o] < r : i[e] - i[o] < r) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            i[o] - i[e] < r && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = E(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = E(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = u().createElement("div");
          (i = E(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: n, $el: i, $wrapperEl: a, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              a.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        L(ie, e);
      }
      static get extendedDefaults() {
        return ie;
      }
      static get defaults() {
        return te;
      }
      static installModule(e) {
        ae.prototype.__modules__ || (ae.prototype.__modules__ = []);
        const t = ae.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ae.installModule(e)), ae)
          : (ae.installModule(e), ae);
      }
    }
    Object.keys(ne).forEach((e) => {
      Object.keys(ne[e]).forEach((t) => {
        ae.prototype[t] = ne[e][t];
      });
    }),
      ae.use([
        function ({ swiper: e, on: t, emit: s }) {
          const n = f();
          let i = null;
          const a = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            r = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  const { width: s, height: n } = e;
                  let i = s,
                    r = n;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: n }) => {
                      (n && n !== e.el) ||
                        ((i = s ? s.width : (t[0] || t).inlineSize),
                        (r = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (i === s && r === n) || a();
                })),
                i.observe(e.el))
              : (n.addEventListener("resize", a),
                n.addEventListener("orientationchange", r));
          }),
            t("destroy", () => {
              i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                n.removeEventListener("resize", a),
                n.removeEventListener("orientationchange", r);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: n }) {
          const i = [],
            a = f(),
            r = (e, t = {}) => {
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.$el[0], { childList: e.params.observeSlideChildren }),
                  r(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const re = ae;
    function oe(e, t, s, n) {
      const i = u();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((a) => {
            if (!s[a] && !0 === s.auto) {
              let r = e.$el.children(`.${n[a]}`)[0];
              r ||
                ((r = i.createElement("div")),
                (r.className = n[a]),
                e.$el.append(r)),
                (s[a] = r),
                (t[a] = r);
            }
          }),
        s
      );
    }
    function le({ swiper: e, extendParams: t, on: s, emit: n }) {
      function i(t) {
        let s;
        return (
          t &&
            ((s = E(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.$el.find(t).length &&
              (s = e.$el.find(t))),
          s
        );
      }
      function a(t, s) {
        const n = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[s ? "addClass" : "removeClass"](n.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function r() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        a(s, e.isBeginning && !e.params.rewind),
          a(t, e.isEnd && !e.params.rewind);
      }
      function o(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
      }
      function l(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
      }
      function d() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = oe(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const s = i(t.nextEl),
          n = i(t.prevEl);
        s && s.length > 0 && s.on("click", l),
          n && n.length > 0 && n.on("click", o),
          Object.assign(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          e.enabled ||
            (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass));
      }
      function c() {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", o),
            s.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          d(), r();
        }),
        s("toEdge fromEdge lock unlock", () => {
          r();
        }),
        s("destroy", () => {
          c();
        }),
        s("enable disable", () => {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        s("click", (t, s) => {
          const { $nextEl: i, $prevEl: a } = e.navigation,
            r = s.target;
          if (e.params.navigation.hideOnClick && !E(r).is(a) && !E(r).is(i)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === r || e.pagination.el.contains(r))
            )
              return;
            let t;
            i
              ? (t = i.hasClass(e.params.navigation.hiddenClass))
              : a && (t = a.hasClass(e.params.navigation.hiddenClass)),
              n(!0 === t ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(e.params.navigation.hiddenClass),
              a && a.toggleClass(e.params.navigation.hiddenClass);
          }
        }),
        Object.assign(e.navigation, { update: r, init: d, destroy: c });
    }
    function de(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ce({ swiper: e, extendParams: t, on: s, emit: n }) {
      const i = "swiper-pagination";
      let a;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let r = 0;
      function o() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, s) {
        const { bulletActiveClass: n } = e.params.pagination;
        t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
      }
      function d() {
        const t = e.rtl,
          s = e.params.pagination;
        if (o()) return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          d = e.pagination.$el;
        let c;
        const p = e.params.loop
          ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((c = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides),
              c > p - 1 && (c -= p),
              c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
            : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const n = e.pagination.bullets;
          let i, o, p;
          if (
            (s.dynamicBullets &&
              ((a = n
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              d.css(
                e.isHorizontal() ? "width" : "height",
                a * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((r += c - (e.previousIndex - e.loopedSlides || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (i = Math.max(c - r, 0)),
              (o = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (p = (o + i) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            d.length > 1)
          )
            n.each((e) => {
              const t = E(e),
                n = t.index();
              n === c && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (n >= i &&
                    n <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  n === i && l(t, "prev"),
                  n === o && l(t, "next"));
            });
          else {
            const t = n.eq(c),
              a = t.index();
            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const t = n.eq(i),
                r = n.eq(o);
              for (let e = i; e <= o; e += 1)
                n.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop)
                if (a >= n.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                  n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(r, "next");
              else l(t, "prev"), l(r, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              r = (a * i - a) / 2 - p * a,
              o = t ? "right" : "left";
            n.css(e.isHorizontal() ? o : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (d.find(de(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
            d.find(de(s.totalClass)).text(s.formatFractionTotal(p))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (c + 1) / p;
          let i = 1,
            a = 1;
          "horizontal" === t ? (i = n) : (a = n),
            d
              .find(de(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (d.html(s.renderCustom(e, c + 1, p)), n("paginationRender", d[0]))
          : n("paginationUpdate", d[0]),
          e.params.watchOverflow &&
            e.enabled &&
            d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function c() {
        const t = e.params.pagination;
        if (o()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          i = e.pagination.$el;
        let a = "";
        if ("bullets" === t.type) {
          let n = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            n > s &&
            (n = s);
          for (let s = 0; s < n; s += 1)
            t.renderBullet
              ? (a += t.renderBullet.call(e, s, t.bulletClass))
              : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          i.html(a), (e.pagination.bullets = i.find(de(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((a = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          i.html(a)),
          "progressbar" === t.type &&
            ((a = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            i.html(a)),
          "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
      }
      function p() {
        e.params.pagination = oe(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s = E(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            ((s = e.$el.find(t.el)),
            s.length > 1 &&
              (s = s.filter((t) => E(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (r = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", de(t.bulletClass), function (t) {
              t.preventDefault();
              let s = E(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function u() {
        const t = e.params.pagination;
        if (o()) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", de(t.bulletClass));
      }
      s("init", () => {
        p(), c(), d();
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && d();
        }),
        s("snapIndexChange", () => {
          e.params.loop || d();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (c(), d());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (c(), d());
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          d();
        }),
        s("click", (t, s) => {
          const i = s.target,
            { $el: a } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            a.length > 0 &&
            !E(i).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                (e.navigation.prevEl && i === e.navigation.prevEl))
            )
              return;
            const t = a.hasClass(e.params.pagination.hiddenClass);
            n(!0 === t ? "paginationShow" : "paginationHide"),
              a.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: c,
          update: d,
          init: p,
          destroy: u,
        });
    }
    function pe({ swiper: e, extendParams: t, on: s, emit: n }) {
      t({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (e.lazy = {});
      let i = !1,
        a = !1;
      function r(t, s = !0) {
        const i = e.params.lazy;
        if (void 0 === t) return;
        if (0 === e.slides.length) return;
        const a =
            e.virtual && e.params.virtual.enabled
              ? e.$wrapperEl.children(
                  `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                )
              : e.slides.eq(t),
          o = a.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
        !a.hasClass(i.elementClass) ||
          a.hasClass(i.loadedClass) ||
          a.hasClass(i.loadingClass) ||
          o.push(a[0]),
          0 !== o.length &&
            o.each((t) => {
              const o = E(t);
              o.addClass(i.loadingClass);
              const l = o.attr("data-background"),
                d = o.attr("data-src"),
                c = o.attr("data-srcset"),
                p = o.attr("data-sizes"),
                u = o.parent("picture");
              e.loadImage(o[0], d || l, c, p, !1, () => {
                if (null != e && e && (!e || e.params) && !e.destroyed) {
                  if (
                    (l
                      ? (o.css("background-image", `url("${l}")`),
                        o.removeAttr("data-background"))
                      : (c &&
                          (o.attr("srcset", c), o.removeAttr("data-srcset")),
                        p && (o.attr("sizes", p), o.removeAttr("data-sizes")),
                        u.length &&
                          u.children("source").each((e) => {
                            const t = E(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        d && (o.attr("src", d), o.removeAttr("data-src"))),
                    o.addClass(i.loadedClass).removeClass(i.loadingClass),
                    a.find(`.${i.preloaderClass}`).remove(),
                    e.params.loop && s)
                  ) {
                    const t = a.attr("data-swiper-slide-index");
                    if (a.hasClass(e.params.slideDuplicateClass)) {
                      r(
                        e.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      r(
                        e.$wrapperEl
                          .children(
                            `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  n("lazyImageReady", a[0], o[0]),
                    e.params.autoHeight && e.updateAutoHeight();
                }
              }),
                n("lazyImageLoad", a[0], o[0]);
            });
      }
      function o() {
        const { $wrapperEl: t, params: s, slides: n, activeIndex: i } = e,
          o = e.virtual && s.virtual.enabled,
          l = s.lazy;
        let d = s.slidesPerView;
        function c(e) {
          if (o) {
            if (
              t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                .length
            )
              return !0;
          } else if (n[e]) return !0;
          return !1;
        }
        function p(e) {
          return o ? E(e).attr("data-swiper-slide-index") : E(e).index();
        }
        if (
          ("auto" === d && (d = 0), a || (a = !0), e.params.watchSlidesProgress)
        )
          t.children(`.${s.slideVisibleClass}`).each((e) => {
            r(o ? E(e).attr("data-swiper-slide-index") : E(e).index());
          });
        else if (d > 1) for (let e = i; e < i + d; e += 1) c(e) && r(e);
        else r(i);
        if (l.loadPrevNext)
          if (d > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
            const e = l.loadPrevNextAmount,
              t = d,
              s = Math.min(i + t + Math.max(e, t), n.length),
              a = Math.max(i - Math.max(t, e), 0);
            for (let e = i + d; e < s; e += 1) c(e) && r(e);
            for (let e = a; e < i; e += 1) c(e) && r(e);
          } else {
            const e = t.children(`.${s.slideNextClass}`);
            e.length > 0 && r(p(e));
            const n = t.children(`.${s.slidePrevClass}`);
            n.length > 0 && r(p(n));
          }
      }
      function l() {
        const t = f();
        if (!e || e.destroyed) return;
        const s = e.params.lazy.scrollingElement
            ? E(e.params.lazy.scrollingElement)
            : E(t),
          n = s[0] === t,
          a = n ? t.innerWidth : s[0].offsetWidth,
          r = n ? t.innerHeight : s[0].offsetHeight,
          d = e.$el.offset(),
          { rtlTranslate: c } = e;
        let p = !1;
        c && (d.left -= e.$el[0].scrollLeft);
        const u = [
          [d.left, d.top],
          [d.left + e.width, d.top],
          [d.left, d.top + e.height],
          [d.left + e.width, d.top + e.height],
        ];
        for (let e = 0; e < u.length; e += 1) {
          const t = u[e];
          if (t[0] >= 0 && t[0] <= a && t[1] >= 0 && t[1] <= r) {
            if (0 === t[0] && 0 === t[1]) continue;
            p = !0;
          }
        }
        const h = !(
          "touchstart" !== e.touchEvents.start ||
          !e.support.passiveListener ||
          !e.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        p
          ? (o(), s.off("scroll", l, h))
          : i || ((i = !0), s.on("scroll", l, h));
      }
      s("beforeInit", () => {
        e.params.lazy.enabled &&
          e.params.preloadImages &&
          (e.params.preloadImages = !1);
      }),
        s("init", () => {
          e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o());
        }),
        s("scroll", () => {
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.freeMode.sticky &&
            o();
        }),
        s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o());
        }),
        s("transitionStart", () => {
          e.params.lazy.enabled &&
            (e.params.lazy.loadOnTransitionStart ||
              (!e.params.lazy.loadOnTransitionStart && !a)) &&
            (e.params.lazy.checkInView ? l() : o());
        }),
        s("transitionEnd", () => {
          e.params.lazy.enabled &&
            !e.params.lazy.loadOnTransitionStart &&
            (e.params.lazy.checkInView ? l() : o());
        }),
        s("slideChange", () => {
          const {
            lazy: t,
            cssMode: s,
            watchSlidesProgress: n,
            touchReleaseOnEdges: i,
            resistanceRatio: a,
          } = e.params;
          t.enabled && (s || (n && (i || 0 === a))) && o();
        }),
        Object.assign(e.lazy, { load: o, loadInSlide: r });
    }
    function ue({ swiper: e, extendParams: t, on: s, emit: n }) {
      let i;
      function a() {
        const t = e.slides.eq(e.activeIndex);
        let s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(i),
          (i = S(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  n("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    n("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), n("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                n("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), n("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), n("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) && a();
          }, s));
      }
      function r() {
        return (
          void 0 === i &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), n("autoplayStart"), a(), !0)
        );
      }
      function o() {
        return (
          !!e.autoplay.running &&
          void 0 !== i &&
          (i && (clearTimeout(i), (i = void 0)),
          (e.autoplay.running = !1),
          n("autoplayStop"),
          !0)
        );
      }
      function l(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (i && clearTimeout(i),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, c);
                })
              : ((e.autoplay.paused = !1), a())));
      }
      function d() {
        const t = u();
        "hidden" === t.visibilityState && e.autoplay.running && l(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (a(), (e.autoplay.paused = !1));
      }
      function c(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, c);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? a() : o());
      }
      function p() {
        e.params.autoplay.disableOnInteraction ? o() : l(),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, c);
          });
      }
      function h() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), a());
      }
      (e.autoplay = { running: !1, paused: !1 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        s("init", () => {
          if (e.params.autoplay.enabled) {
            r();
            u().addEventListener("visibilitychange", d),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", p), e.$el.on("mouseleave", h));
          }
        }),
        s("beforeTransitionStart", (t, s, n) => {
          e.autoplay.running &&
            (n || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(s)
              : o());
        }),
        s("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? o() : l());
        }),
        s("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            a();
        }),
        s("destroy", () => {
          e.$el.off("mouseenter", p),
            e.$el.off("mouseleave", h),
            e.autoplay.running && o();
          u().removeEventListener("visibilitychange", d);
        }),
        Object.assign(e.autoplay, { pause: l, run: a, start: r, stop: o });
    }
    window.addEventListener("load", function (e) {
      document.querySelector(".reviews__slider") &&
        new re(".reviews__slider", {
          modules: [le, pe, ce],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: !0,
          speed: 800,
          lazy: !0,
          pagination: {
            el: ".reviews-top__numeration",
            clickable: !0,
            type: "fraction",
          },
          navigation: {
            nextEl: ".reviews-top__arrow-next",
            prevEl: ".reviews-top__arrow-prev",
          },
          on: {},
        }),
        document.querySelector(".masters__slider") &&
          new re(".masters__slider", {
            modules: [ue, ce, le, pe],
            autoplay: {
              delay: 3e3,
              disableOnInteraction: !1,
              pauseOnMouseEnter: !0,
            },
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 30,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            lazy: !0,
            pagination: {
              el: ".masters-top__numeration",
              type: "fraction",
              clickable: !0,
            },
            navigation: {
              nextEl: ".masters-top__arrow-next",
              prevEl: ".masters-top__arrow-prev",
            },
            breakpoints: {
              320: { slidesPerView: "auto", spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
            },
            on: {},
          });
    });
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
          ),
            o(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                n = { root: s[0], margin: s[1], threshold: s[2] },
                i = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    i = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === n.root &&
                    String(s) === n.margin &&
                    String(i) === n.threshold
                  )
                    return e;
                }),
                a = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(i, a);
            });
        } else
          this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging &&
          (function (e) {
            setTimeout(() => {
              window.FLS && console.log(e);
            }, 0);
          })(`[??????????????????????]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let he = !1;
    function fe(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (he) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (fe.prototype.init = function () {
        const e = this;
        (this.??bjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            n = {};
          (n.element = t),
            (n.parent = t.parentNode),
            (n.destination = document.querySelector(s[0].trim())),
            (n.breakpoint = s[1] ? s[1].trim() : "767"),
            (n.place = s[2] ? s[2].trim() : "last"),
            (n.index = this.indexInParent(n.parent, n.element)),
            this.??bjects.push(n);
        }
        this.arraySort(this.??bjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.??bjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            n = String.prototype.split.call(s, ","),
            i = window.matchMedia(n[0]),
            a = n[1],
            r = Array.prototype.filter.call(this.??bjects, function (e) {
              return e.breakpoint === a;
            });
          i.addListener(function () {
            e.mediaHandler(i, r);
          }),
            this.mediaHandler(i, r);
        }
      }),
      (fe.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (fe.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (fe.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (fe.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (fe.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new fe("max").init();
    const me = document.querySelector(".welcome__video");
    me &&
      (document.addEventListener("watcherCallback", function (e) {
        const t = e.detail.entry,
          s = t.target;
        "video" !== s.dataset.watch ||
          s.classList.contains("_init") ||
          (t.isIntersecting
            ? s.querySelector("video").play()
            : s.querySelector("video").pause());
      }),
      me.addEventListener("click", function (e) {
        me.classList.contains("_init")
          ? (me.querySelector("video").paused
              ? me.querySelector("video").play()
              : me.querySelector("video").pause(),
            me.classList.toggle("_active"))
          : ((me.querySelector("video").src =
              me.querySelector("video").dataset.full),
            me.classList.add("_active"),
            me.classList.add("_init"),
            me.querySelector("video").play(),
            (me.querySelector("video").muted = !1));
      })),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      document.querySelector(".icon-menu") &&
        document.addEventListener("click", function (e) {
          i &&
            e.target.closest(".icon-menu") &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? a(e) : r(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        }),
      window.addEventListener("load", function (e) {
        const s = document.querySelectorAll("[data-showmore]");
        let i, a;
        function r(e) {
          e.forEach((e) => {
            o(e.itemsArray, e.matchMedia);
          });
        }
        function o(e, s) {
          e.forEach((e) => {
            !(function (e, s = !1) {
              let i = (e = s ? e.item : e).querySelectorAll(
                  "[data-showmore-content]"
                ),
                a = e.querySelectorAll("[data-showmore-button]");
              (i = Array.from(i).filter(
                (t) => t.closest("[data-showmore]") === e
              )[0]),
                (a = Array.from(a).filter(
                  (t) => t.closest("[data-showmore]") === e
                )[0]);
              const r = d(e, i);
              (s.matches || !s) &&
              r <
                (function (e) {
                  let t,
                    s = e.offsetHeight;
                  e.style.removeProperty("height"),
                    e.closest("[hidden]") &&
                      ((t = e.closest("[hidden]")), (t.hidden = !1));
                  let n = e.offsetHeight;
                  return t && (t.hidden = !0), (e.style.height = `${s}px`), n;
                })(i)
                ? (t(i, 0, r), (a.hidden = !1))
                : (n(i, 0, r), (a.hidden = !0));
            })(e, s);
          });
        }
        function d(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              n = t.children;
            for (
              let t = 1;
              t < n.length && ((s += n[t - 1].offsetHeight), t != e);
              t++
            );
          } else s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          return s;
        }
        function c(e) {
          const s = e.target,
            l = e.type;
          if ("click" === l) {
            if (s.closest("[data-showmore-button]")) {
              const e = s
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                i = e.querySelector("[data-showmore-content]"),
                a = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                r = d(e, i);
              i.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? t(i, a, r)
                  : n(i, a, r),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === l && (i && i.length && o(i), a && a.length && r(a));
        }
        s.length &&
          ((i = Array.from(s).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          i.length && o(i),
          document.addEventListener("click", c),
          window.addEventListener("resize", c),
          (a = l(s, "showmoreMedia")),
          a &&
            a.length &&
            (a.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                o(e.itemsArray, e.matchMedia);
              });
            }),
            r(a)));
      }),
      (function () {
        he = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          n = e.dataset.scroll ? e.dataset.scroll : 1;
        let i,
          a = 0;
        document.addEventListener("windowScroll", function (r) {
          const o = window.scrollY;
          clearTimeout(i),
            o >= n
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (o > a
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (i = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (a = o <= 0 ? 0 : o);
        });
      })();
  })();
})();
