(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    132: function (t, e, n) {
      "use strict";
      n(100),
        n(49),
        n(34),
        n(19),
        n(12),
        n(35),
        n(16),
        n(11),
        n(30),
        n(31),
        n(32);
      var o = n(0);
      function r(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return c(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          l = !0,
          m = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (m = !0), (r = t);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (m) throw r;
            }
          },
        };
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var l =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        m =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        d =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: o.default.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = l(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          m(this.handleId),
            this.__observed &&
              (d.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            d &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              d.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default;
              })
              .filter(function (t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              d.unobserve(this.$el);
              var t,
                e = r(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    o = n();
                  o instanceof Promise && o.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            }
          },
        },
      };
    },
    180: function (t, e, n) {
      "use strict";
      e.a = {};
    },
    184: function (t, e, n) {
      var o = n(388);
      function r() {
        return (r = o(
          regeneratorRuntime.mark(function t() {
            var e, o, r;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!(!1 in navigator)) {
                      t.next = 2;
                      break;
                    }
                    throw new Error(
                      "serviceWorker is not supported in current browser!"
                    );
                  case 2:
                    return (t.next = 4), n.e(108).then(n.bind(null, 511));
                  case 4:
                    return (
                      (e = t.sent),
                      (o = e.Workbox),
                      (r = new o("/sw.js", { scope: "/" })),
                      (t.next = 9),
                      r.register()
                    );
                  case 9:
                    return t.abrupt("return", r);
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      n(25),
        (window.$workbox = (function () {
          return r.apply(this, arguments);
        })().catch(function (t) {}));
    },
    2: function (t, e, n) {
      "use strict";
      n.d(e, "k", function () {
        return y;
      }),
        n.d(e, "m", function () {
          return w;
        }),
        n.d(e, "l", function () {
          return k;
        }),
        n.d(e, "e", function () {
          return j;
        }),
        n.d(e, "b", function () {
          return _;
        }),
        n.d(e, "s", function () {
          return z;
        }),
        n.d(e, "g", function () {
          return M;
        }),
        n.d(e, "h", function () {
          return O;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "r", function () {
          return T;
        }),
        n.d(e, "j", function () {
          return S;
        }),
        n.d(e, "t", function () {
          return D;
        }),
        n.d(e, "o", function () {
          return I;
        }),
        n.d(e, "q", function () {
          return E;
        }),
        n.d(e, "f", function () {
          return $;
        }),
        n.d(e, "c", function () {
          return B;
        }),
        n.d(e, "i", function () {
          return L;
        }),
        n.d(e, "p", function () {
          return P;
        }),
        n.d(e, "a", function () {
          return G;
        }),
        n.d(e, "v", function () {
          return W;
        }),
        n.d(e, "n", function () {
          return K;
        }),
        n.d(e, "u", function () {
          return Z;
        });
      n(11), n(30), n(27), n(28);
      var o = n(15),
        r = n(5),
        c = n(6),
        l = n(18),
        m =
          (n(25),
          n(19),
          n(153),
          n(12),
          n(16),
          n(34),
          n(21),
          n(31),
          n(32),
          n(35),
          n(43),
          n(67),
          n(137),
          n(313),
          n(77),
          n(78),
          n(316),
          n(100),
          n(49),
          n(0)),
        d = n(9);
      function f(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function h(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? f(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : f(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function v(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return x(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return x(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (r = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function y(t) {
        m.default.config.errorHandler && m.default.config.errorHandler(t);
      }
      function w(t) {
        return t.then(function (t) {
          return t.default || t;
        });
      }
      function k(t) {
        return (
          t.$options &&
          "function" == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }
      function j(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          o = t.$children || [],
          r = v(o);
        try {
          for (r.s(); !(e = r.n()).done; ) {
            var c = e.value;
            c.$fetch ? n.push(c) : c.$children && j(c, n);
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
        return n;
      }
      function _(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                h(h({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function z(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = m.default.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }
      function M(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, o) {
            return Object.keys(t[n]).map(function (r) {
              return e && e.push(o), t[n][r];
            });
          })
        );
      }
      function O(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return M(t, e, "instances");
      }
      function C(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (o, r) {
              return (
                t.components[r]
                  ? o.push(e(t.components[r], t.instances[r], t, r, n))
                  : delete t.components[r],
                o
              );
            }, []);
          })
        );
      }
      function T(t, e) {
        return Promise.all(
          C(
            t,
            (function () {
              var t = Object(r.a)(
                regeneratorRuntime.mark(function t(n, o, r, c) {
                  var l, m;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof n || n.options) {
                              t.next = 11;
                              break;
                            }
                            return (t.prev = 1), (t.next = 4), n();
                          case 4:
                            (n = t.sent), (t.next = 11);
                            break;
                          case 7:
                            throw (
                              ((t.prev = 7),
                              (t.t0 = t.catch(1)),
                              t.t0 &&
                                "ChunkLoadError" === t.t0.name &&
                                "undefined" != typeof window &&
                                window.sessionStorage &&
                                ((l = Date.now()),
                                (!(m = parseInt(
                                  window.sessionStorage.getItem("nuxt-reload")
                                )) ||
                                  m + 6e4 < l) &&
                                  (window.sessionStorage.setItem(
                                    "nuxt-reload",
                                    l
                                  ),
                                  window.location.reload(!0))),
                              t.t0)
                            );
                          case 11:
                            return (
                              (r.components[c] = n = z(n)),
                              t.abrupt(
                                "return",
                                "function" == typeof e ? e(n, o, r, c) : n
                              )
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (e, n, o, r) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function S(t) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), T(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      h(
                        h({}, e),
                        {},
                        {
                          meta: M(e).map(function (t, n) {
                            return h(
                              h({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function D(t, e) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var r, c, m, f;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !1,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: e.router.options.base,
                          env: {
                            API_URL: "https://api.kungfutech.edu.vn/",
                            API_CONTRIBUTE:
                              "https://script.google.com/macros/s/AKfycbyP5yxl9qk83cpGvM6MZcDm2qjKkcmxvSK6ALUnwnbbQf7Lh1TgZ77nIZnE4QzlKdb-yA/exec",
                          },
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var r = Object(o.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== r && "object" !== r) ||
                                ((n = path || {}),
                                (path = t),
                                (r = Object(o.a)(path)),
                                (t = 302)),
                              "object" === r &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = Object(d.i)(path, n)),
                                window.location.replace(path),
                                new Error("ERR_REDIRECT"))
                              );
                            e.context.next({ path: path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([S(n.route), S(n.from)])
                    );
                  case 3:
                    (r = t.sent),
                      (c = Object(l.a)(r, 2)),
                      (m = c[0]),
                      (f = c[1]),
                      n.route && (e.context.route = m),
                      n.from && (e.context.from = f),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function I(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : E(t[0], e).then(function () {
              return I(t.slice(1), e);
            });
      }
      function E(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function $(base, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || "/") + window.location.search + window.location.hash;
        return Object(d.f)(e);
      }
      function B(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(o.a)(t[i]) &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", H(e)));
          return function (e, o) {
            for (
              var path = "",
                data = e || {},
                r = (o || {}).pretty ? Y : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ("string" != typeof l) {
                var m = data[l.name || "pathMatch"],
                  d = void 0;
                if (null == m) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + l.name + '" to be defined'
                  );
                }
                if (Array.isArray(m)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(m) +
                        "`"
                    );
                  if (0 === m.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (var f = 0; f < m.length; f++) {
                    if (((d = r(m[f])), !n[c].test(d)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(d) +
                          "`"
                      );
                    path += (0 === f ? l.prefix : l.delimiter) + d;
                  }
                } else {
                  if (((d = l.asterisk ? U(m) : r(m)), !n[c].test(d)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        d +
                        '"'
                    );
                  path += l.prefix + d;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function (t, e) {
            var n,
              o = [],
              r = 0,
              c = 0,
              path = "",
              l = (e && e.delimiter) || "/";
            for (; null != (n = R.exec(t)); ) {
              var m = n[0],
                d = n[1],
                f = n.index;
              if (((path += t.slice(c, f)), (c = f + m.length), d))
                path += d[1];
              else {
                var h = t[c],
                  v = n[2],
                  x = n[3],
                  y = n[4],
                  w = n[5],
                  k = n[6],
                  j = n[7];
                path && (o.push(path), (path = ""));
                var _ = null != v && null != h && h !== v,
                  z = "+" === k || "*" === k,
                  M = "?" === k || "*" === k,
                  O = n[2] || l,
                  pattern = y || w;
                o.push({
                  name: x || r++,
                  prefix: v || "",
                  delimiter: O,
                  optional: M,
                  repeat: z,
                  partial: _,
                  asterisk: Boolean(j),
                  pattern: pattern
                    ? Q(pattern)
                    : j
                    ? ".*"
                    : "[^" + F(O) + "]+?",
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && o.push(path);
            return o;
          })(t, e),
          e
        );
      }
      function L(t, e) {
        var n = {},
          o = h(h({}, t), e);
        for (var r in o) String(t[r]) !== String(e[r]) && (n[r] = !0);
        return n;
      }
      function P(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return h(
          h({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t);
        });
      var R = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function Y(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function U(t) {
        return Y(t, !0);
      }
      function F(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function Q(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function H(t) {
        return t && t.sensitive ? "" : "i";
      }
      function G(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      var W = d.e,
        K = (d.j, d.d);
      function Z(t) {
        try {
          window.history.scrollRestoration = t;
        } catch (t) {}
      }
    },
    212: function (t, e, n) {
      var content = n(319);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("d9ef4e44", content, !0, { sourceMap: !1 });
    },
    213: function (t, e, n) {
      var content = n(341);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("8328fafa", content, !0, { sourceMap: !1 });
    },
    214: function (t, e, n) {
      var content = n(343);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("0adaf406", content, !0, { sourceMap: !1 });
    },
    215: function (t, e, n) {
      var content = n(345);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("a998169c", content, !0, { sourceMap: !1 });
    },
    216: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNyAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0Ljc1NzggMi45NDFlLTA4SDEuNzQ3NzRDMC45NTk4NDQgMC4wMDA0NzYxMDYgMC4zMjExMzEgMC42NDI4NTkgMC4zMjEyODkgMS40MzUyVjI0LjU2NjFDMC4zMjE3NjMgMjUuMzU4MSAwLjk2MDc5MSAyNi4wMDAyIDEuNzQ5IDI2SDE0LjEzNzRWMTUuOTQ1M0gxMC43NzgxVjEyLjAwOThIMTQuMTM3NFY5LjExMzQ5QzE0LjEzNzQgNS43NTQ3OSAxNi4xNzcyIDMuOTI2NjYgMTkuMTU3NiAzLjkyNjY2QzIwLjU4NTIgMy45MjY2NiAyMS44MTE5IDQuMDMzNjIgMjIuMTY5NSA0LjA4MTM4VjcuNTkxOEgyMC4xMTQzQzE4LjQ5MjcgNy41OTE4IDE4LjE3ODcgOC4zNjYzNyAxOC4xNzg3IDkuNTAzMjNWMTIuMDA5OEgyMi4wNTU4TDIxLjU1MDcgMTUuOTQ1M0gxOC4xNzg3VjI2SDI0Ljc1NzhDMjUuNTQ2MiAyNi4wMDAyIDI2LjE4NTQgMjUuMzU3OSAyNi4xODU1IDI0LjU2NTRDMjYuMTg1NSAyNC41NjUzIDI2LjE4NTUgMjQuNTY1MSAyNi4xODU1IDI0LjU2NDhWMS40MzM5NEMyNi4xODUyIDAuNjQxOTA3IDI1LjU0NiAtMC4wMDAxNTg2NjIgMjQuNzU3OCAyLjk0MWUtMDhaIiBmaWxsPSIjNkI3MjgwIi8+Cjwvc3ZnPgo=";
    },
    217: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNyAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjgyOTQgMEgyLjY5NTkxQzEuNjY1NjYgMCAwLjgzMDU2NiAwLjgzOTQ3OCAwLjgzMDU2NiAxLjg3NTE0VjI0LjEyNDlDMC44MzA1NjYgMjUuMTYwNSAxLjY2NTY2IDI2IDIuNjk1OTEgMjZIMjQuODI5NEMyNS44NTk3IDI2IDI2LjY5NDggMjUuMTYwNSAyNi42OTQ4IDI0LjEyNDlWMS44NzUxNEMyNi42OTQ4IDAuODM5NDc4IDI1Ljg1OTcgMCAyNC44Mjk0IDBWMFpNMTAuMDA0OCAxOS42NTIzSDYuODU1MlYxMC4xMjcxSDEwLjAwNDhWMTkuNjUyM1pNOC40MzAwOCA4LjgyNjQySDguNDA5NTZDNy4zNTI2NiA4LjgyNjQyIDYuNjY5MTIgOC4wOTUwNSA2LjY2OTEyIDcuMTgwOThDNi42NjkxMiA2LjI0NjI5IDcuMzczNTggNS41MzUxNiA4LjQ1MDk5IDUuNTM1MTZDOS41Mjg0MSA1LjUzNTE2IDEwLjE5MTQgNi4yNDYyOSAxMC4yMTIgNy4xODA5OEMxMC4yMTIgOC4wOTUwNSA5LjUyODQxIDguODI2NDIgOC40MzAwOCA4LjgyNjQyWk0yMS4zNjE0IDE5LjY1MjNIMTguMjEyMlYxNC41NTY2QzE4LjIxMjIgMTMuMjc1OSAxNy43NTYyIDEyLjQwMjUgMTYuNjE2NiAxMi40MDI1QzE1Ljc0NjYgMTIuNDAyNSAxNS4yMjg0IDEyLjk5MTcgMTUuMDAwNyAxMy41NjA0QzE0LjkxNzQgMTMuNzYzOSAxNC44OTcxIDE0LjA0ODQgMTQuODk3MSAxNC4zMzNWMTkuNjUyM0gxMS43NDc4QzExLjc0NzggMTkuNjUyMyAxMS43ODkgMTEuMDIwNyAxMS43NDc4IDEwLjEyNzFIMTQuODk3MVYxMS40NzU4QzE1LjMxNTcgMTAuODI2NyAxNi4wNjQ1IDkuOTAzNTMgMTcuNzM1NSA5LjkwMzUzQzE5LjgwNzYgOS45MDM1MyAyMS4zNjE0IDExLjI2NDkgMjEuMzYxNCAxNC4xOTA2VjE5LjY1MjNaIiBmaWxsPSIjNkI3MjgwIi8+Cjwvc3ZnPgo=";
    },
    218: function (t, e, n) {
      t.exports = n.p + "img/tw-mb.b34540f.svg";
    },
    219: function (t, e, n) {
      var content = n(348);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("e6bf390a", content, !0, { sourceMap: !1 });
    },
    22: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "e", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return m;
        });
      var o = !1,
        r = "/var/www/kungfutech-fe/.nuxt/static-json",
        c = "/",
        l = "__NUXT__",
        m = "$nuxt";
    },
    229: function (t, e, n) {
      var content = n(368);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("100c9104", content, !0, { sourceMap: !1 });
    },
    230: function (t, e, n) {
      var content = n(370);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("6b432a98", content, !0, { sourceMap: !1 });
    },
    231: function (t, e, n) {
      var content = n(372);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("3f2ef73c", content, !0, { sourceMap: !1 });
    },
    232: function (t, e, n) {
      var content = n(374);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("2e916192", content, !0, { sourceMap: !1 });
    },
    260: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(5),
        r = (n(25), n(16), n(220)),
        c = n.n(r),
        l = n(58),
        m = n.n(l),
        d = {
          data: function () {
            return {
              keyword: "",
              handler: "hover",
              isModalVisible: !1,
              loading: !1,
              form: { name: "", email: "", phone: "", content: "" },
              rulesContribute: {
                name: [
                  {
                    validator: function (t, e, n) {
                      if (!e.trim()) return n(new Error("Hãy nhập họ tên"));
                      n();
                    },
                    trigger: "change",
                  },
                ],
                content: [
                  {
                    validator: function (t, e, n) {
                      if (!e.trim()) return n(new Error("Hãy nhập nội dung"));
                      n();
                    },
                    trigger: "change",
                  },
                ],
                phone: [
                  {
                    validator: function (t, e, n) {
                      if (!e.trim())
                        return n(new Error("Hãy nhập số điện thoại"));
                      n();
                    },
                    trigger: "change",
                  },
                  {
                    pattern: /^((03|07|08|09|01[2|6|8|9])+([0-9]{8})\b)/,
                    message: "Số điện thoại không đúng định dạng",
                    trigger: ["change"],
                  },
                ],
                email: [
                  {
                    validator: function (t, e, n) {
                      if (!e.trim()) return n(new Error("Hãy nhập email"));
                      n();
                    },
                    trigger: "change",
                  },
                  {
                    type: "email",
                    message: "Vui lòng nhập đúng địa chỉ email",
                    trigger: "change",
                  },
                ],
              },
              menu: [
                {
                  title: "Trang chủ",
                  element: "nuxt-link",
                  attributes: { to: "/" },
                },
                {
                  title: "Khóa học",
                  dropdown: "khoa-hoc",
                  element: "nuxt-link",
                  attributes: { to: "/khoa-hoc" },
                  content: "BaseNavbarCourse",
                },
                {
                  title: "Tài nguyên",
                  dropdown: "tai-nguyen",
                  element: "nuxt-link",
                  attributes: { to: "/tai-nguyen" },
                  content: "BaseNavbarResource",
                },
                {
                  title: "Tin tức",
                  element: "nuxt-link",
                  attributes: { to: "/tin-tuc" },
                },
                {
                  title: "Cộng đồng",
                  attributes: {
                    href: "https://www.facebook.com/groups/devs.vietnam",
                    target: "_blank",
                    rel: "noreferrer",
                  },
                },
                {
                  title: "Youtube",
                  attributes: {
                    href: "https://www.youtube.com/c/TechMely?sub_confirmation=1",
                    target: "_blank",
                    rel: "noreferrer",
                  },
                },
              ],
            };
          },
          methods: {
            onClick: function () {
              this.handler = "hover" === this.handler ? "click" : "hover";
            },
            closeModal: function () {
              this.$refs.header.closeDropdown();
            },
            closeModalMobile: function () {
              this.$refs.mobile.closeDropdown();
            },
            onClickSearch: c()(function () {
              if (!this.keyword)
                return this.$notify.warning({
                  message: "Vui lòng nhập từ khóa muốn tìm kiếm.",
                  title: "Trạng thái",
                  duration: 2e3,
                });
              this.$router.push(
                "/khoa-hoc/tim-kiem?tu-khoa=".concat(this.keyword)
              ),
                (this.keyword = "");
            }, 300),
            handleRegister: function (t) {
              var e = this;
              this.$refs[t].validate(
                (function () {
                  var n = Object(o.a)(
                    regeneratorRuntime.mark(function n(o) {
                      return regeneratorRuntime.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (!o) {
                                  n.next = 18;
                                  break;
                                }
                                return (
                                  (e.loading = !0),
                                  (n.prev = 2),
                                  (n.next = 5),
                                  m.a.get(
                                    "https://script.google.com/macros/s/AKfycbyP5yxl9qk83cpGvM6MZcDm2qjKkcmxvSK6ALUnwnbbQf7Lh1TgZ77nIZnE4QzlKdb-yA/exec",
                                    {
                                      params: {
                                        fullname: e.form.name.trim(),
                                        email: e.form.email.trim(),
                                        phone: e.form.phone.trim(),
                                        content: e.form.content.trim(),
                                      },
                                    }
                                  )
                                );
                              case 5:
                                n.next = 10;
                                break;
                              case 7:
                                (n.prev = 7),
                                  (n.t0 = n.catch(2)),
                                  e.$notify.error({
                                    message:
                                      "Có lỗi xảy ra. Vui lòng thử lại sau",
                                    title: "Trạng thái",
                                    duration: 2e3,
                                  });
                              case 10:
                                return (
                                  (n.prev = 10),
                                  (e.loading = !1),
                                  (e.dialogFormVisible = !1),
                                  e.$refs[t].resetFields(),
                                  e.$notify.success({
                                    message: "Gửi thông tin thành công",
                                    title: "Trạng thái",
                                    duration: 2e3,
                                  }),
                                  n.finish(10)
                                );
                              case 16:
                                n.next = 19;
                                break;
                              case 18:
                                return n.abrupt("return", !1);
                              case 19:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[2, 7, 10, 16]]
                      );
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })()
              );
            },
            handleOpenModal: function () {
              this.isModalVisible = !0;
            },
          },
        },
        f = d,
        h = (n(367), n(369), n(10)),
        component = Object(h.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "div",
              [
                o("vsm-menu", {
                  ref: "header",
                  staticStyle: { width: "100vw" },
                  attrs: {
                    menu: t.menu,
                    handler: t.handler,
                    "screen-offset": 15,
                  },
                  scopedSlots: t._u([
                    {
                      key: "before-nav",
                      fn: function () {
                        return [
                          o(
                            "nuxt-link",
                            { staticClass: "logo", attrs: { to: "/" } },
                            [
                              o("img", {
                                staticClass: "navbar__left__logo__image",
                                attrs: {
                                  width: "173",
                                  height: "30",
                                  alt: "logo kunfutech",
                                  src: n(282),
                                },
                              }),
                            ]
                          ),
                          t._v(" "),
                          o(
                            "div",
                            { staticClass: "search hidden-md-and-down" },
                            [
                              o("img", {
                                staticClass: "search__icon",
                                attrs: {
                                  alt: "Tìm kiếm",
                                  width: "16",
                                  height: "15",
                                  src: n(283),
                                },
                              }),
                              t._v(" "),
                              o("label", [
                                o("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.keyword,
                                      expression: "keyword",
                                    },
                                  ],
                                  staticClass: "search__input",
                                  attrs: { placeholder: "Tìm kiếm" },
                                  domProps: { value: t.keyword },
                                  on: {
                                    keyup: function (e) {
                                      return !e.type.indexOf("key") &&
                                        t._k(
                                          e.keyCode,
                                          "enter",
                                          13,
                                          e.key,
                                          "Enter"
                                        )
                                        ? null
                                        : t.onClickSearch.apply(
                                            null,
                                            arguments
                                          );
                                    },
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.keyword = e.target.value);
                                    },
                                  },
                                }),
                              ]),
                            ]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "default",
                      fn: function (data) {
                        return [
                          o(data.item.content, {
                            tag: "component",
                            staticClass: "content",
                            on: { closeModal: t.closeModal },
                          }),
                          t._v(" "),
                          o(data.item.secondary, {
                            tag: "component",
                            staticClass: "content--secondary",
                            on: { closeModal: t.closeModal },
                          }),
                        ];
                      },
                    },
                    {
                      key: "after-nav",
                      fn: function () {
                        return [
                          o(
                            "div",
                            { staticClass: "navbar__right hidden-sm-and-down" },
                            [
                              o(
                                "CoreButton",
                                {
                                  staticStyle: { "font-size": "1rem" },
                                  on: { click: t.handleOpenModal },
                                },
                                [t._v("\n          Đóng góp\n        ")]
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          o(
                            "vsm-mob",
                            { ref: "mobile" },
                            [
                              o("LazyBaseNavbarMobileContent", {
                                on: { closeModal: t.closeModalMobile },
                              }),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
                t._v(" "),
                o(
                  "el-dialog",
                  {
                    attrs: { visible: t.isModalVisible },
                    on: {
                      "update:visible": function (e) {
                        t.isModalVisible = e;
                      },
                    },
                  },
                  [
                    o(
                      "el-row",
                      { staticClass: "contribute" },
                      [
                        o(
                          "el-col",
                          {
                            staticClass: "contribute__left",
                            attrs: { sm: 12, md: 12, lg: 12 },
                          },
                          [
                            o("img", {
                              attrs: { alt: "Đóng góp", src: n(280) },
                            }),
                          ]
                        ),
                        t._v(" "),
                        o(
                          "el-col",
                          {
                            staticClass: "contribute__right",
                            attrs: { sm: 12, md: 12, lg: 12 },
                          },
                          [
                            o(
                              "h3",
                              { staticClass: "contribute__right__title" },
                              [
                                t._v(
                                  "\n          Đóng góp của bạn sẽ giúp cải thiện trang web\n        "
                                ),
                              ]
                            ),
                            t._v(" "),
                            o(
                              "el-form",
                              {
                                ref: "formContribute",
                                attrs: {
                                  model: t.form,
                                  rules: t.rulesContribute,
                                },
                              },
                              [
                                o(
                                  "el-form-item",
                                  {
                                    attrs: {
                                      prop: "name",
                                      label: "Họ tên của bạn (*)",
                                    },
                                  },
                                  [
                                    o("el-input", {
                                      model: {
                                        value: t.form.name,
                                        callback: function (e) {
                                          t.$set(t.form, "name", e);
                                        },
                                        expression: "form.name",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                o(
                                  "el-form-item",
                                  {
                                    attrs: {
                                      prop: "email",
                                      label: "Email của bạn (*)",
                                    },
                                  },
                                  [
                                    o("el-input", {
                                      model: {
                                        value: t.form.email,
                                        callback: function (e) {
                                          t.$set(t.form, "email", e);
                                        },
                                        expression: "form.email",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                o(
                                  "el-form-item",
                                  {
                                    attrs: {
                                      prop: "phone",
                                      label: "Số điện thoại của bạn (*)",
                                    },
                                  },
                                  [
                                    o("el-input", {
                                      model: {
                                        value: t.form.phone,
                                        callback: function (e) {
                                          t.$set(t.form, "phone", e);
                                        },
                                        expression: "form.phone",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                o(
                                  "el-form-item",
                                  {
                                    attrs: {
                                      prop: "content",
                                      label:
                                        "Hãy viết cho chúng tôi bạn muốn gì nhé! (*)",
                                    },
                                  },
                                  [
                                    o("el-input", {
                                      attrs: { rows: 4, type: "textarea" },
                                      model: {
                                        value: t.form.content,
                                        callback: function (e) {
                                          t.$set(t.form, "content", e);
                                        },
                                        expression: "form.content",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                o(
                                  "el-form-item",
                                  [
                                    o(
                                      "CoreButton",
                                      {
                                        staticClass:
                                          "button button--teal button--contribute",
                                        attrs: {
                                          icon: "el-icon-s-promotion",
                                          loading: t.loading,
                                        },
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.preventDefault(),
                                              t.handleRegister("formContribute")
                                            );
                                          },
                                        },
                                      },
                                      [t._v("Gửi đóng góp")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "674c6903",
          null
        );
      e.default = component.exports;
      installComponents(component, { CoreButton: n(276).default });
    },
    265: function (t, e) {},
    266: function (t) {
      t.exports = JSON.parse(
        '{"title":"Lập Trình Không Khó - KungFu Tech","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-capable","name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-status-bar-style","name":"apple-mobile-web-app-status-bar-style","content":"default"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Lập Trình Không Khó - KungFu Tech"},{"hid":"author","name":"author","content":"thaycacac"},{"hid":"description","name":"description","content":"Kungfu Tech Home Website"},{"hid":"theme-color","name":"theme-color","content":"#319795"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Lập Trình Không Khó - KungFu Tech"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Lập Trình Không Khó - KungFu Tech"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Kungfu Tech Home Website"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/_nuxt/icons/icon_64x64.77c29a.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512x512.77c29a.png","sizes":"512x512"},{"href":"/_nuxt/icons/splash_iphonese_640x1136.77c29a.png","media":"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonese"},{"href":"/_nuxt/icons/splash_iphone6_50x1334.77c29a.png","media":"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphone6"},{"href":"/_nuxt/icons/splash_iphoneplus_1080x1920.77c29a.png","media":"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphoneplus"},{"href":"/_nuxt/icons/splash_iphonex_1125x2436.77c29a.png","media":"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonex"},{"href":"/_nuxt/icons/splash_iphonexr_828x1792.77c29a.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonexr"},{"href":"/_nuxt/icons/splash_iphonexsmax_1242x2688.77c29a.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonexsmax"},{"href":"/_nuxt/icons/splash_ipad_1536x2048.77c29a.png","media":"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipad"},{"media":"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro1"},{"media":"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro2"},{"media":"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro3"},{"rel":"manifest","href":"/_nuxt/manifest.0fcd191d.json","hid":"manifest"}],"htmlAttrs":{"lang":"vi"}}'
      );
    },
    272: function (t, e, n) {
      "use strict";
      var o = n(5),
        r = (n(25), n(12), n(0)),
        c = n(2),
        l = window.__NUXT__;
      function m() {
        if (!this._hydrated) return this.$fetch();
      }
      function d() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = l.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) r.default.set(this.$data, e, data[e]);
        }
      }
      function f() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = h.call(this).then(function () {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function h() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(o.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              o,
              r = this;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0));
                    case 15:
                      if (!((o = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, o);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return r.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function () {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            r.default.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = f.bind(this)),
            Object(c.a)(this, "created", d),
            Object(c.a)(this, "beforeMount", m));
        },
      };
    },
    276: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          name: "ElButton",
          inject: { elForm: { default: "" }, elFormItem: { default: "" } },
          props: {
            type: { type: String, default: "default" },
            size: String,
            icon: { type: String, default: "" },
            nativeType: { type: String, default: "button" },
            loading: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            uppercase: { type: Boolean, default: !1 },
            full: { type: Boolean, default: !1 },
            autofocus: Boolean,
          },
          computed: {
            _elFormItemSize: function () {
              return (this.elFormItem || {}).elFormItemSize;
            },
            buttonSize: function () {
              return (
                this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
              );
            },
            buttonDisabled: function () {
              return this.$options.propsData.hasOwnProperty("disabled")
                ? this.disabled
                : (this.elForm || {}).disabled;
            },
          },
          methods: {
            handleClick: function (t) {
              this.$emit("click", t);
            },
          },
        },
        r = (n(371), n(10)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "button",
              {
                staticClass: "el-button",
                class: [
                  t.type ? "el-button--" + t.type : "",
                  t.buttonSize ? "el-button--" + t.buttonSize : "",
                  {
                    "is-disabled": t.buttonDisabled,
                    "is-loading": t.loading,
                    "is-uppercase": t.uppercase,
                    "is-full": t.full,
                  },
                ],
                attrs: {
                  disabled: t.buttonDisabled || t.loading,
                  autofocus: t.autofocus,
                  type: t.nativeType,
                },
                on: { click: t.handleClick },
              },
              [
                t.loading ? n("i", { staticClass: "el-icon-loading" }) : t._e(),
                t._v(" "),
                t.icon && !t.loading ? n("i", { class: t.icon }) : t._e(),
                t._v(" "),
                t.$slots.default ? n("span", [t._t("default")], 2) : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "06d16e04",
          null
        );
      e.default = component.exports;
    },
    279: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljk1MTIgMi4xNDkxOWUtMDhIMS4wNDc4OEMwLjQ2OTA4NiAwLjAwMDM0NzkyMyAtMC4wMDAxMTU5NDUgMC40Njk3ODEgMi4xNDkxOWUtMDggMS4wNDg4VjE3Ljk1MjFDMC4wMDAzNDc5MjMgMTguNTMwOSAwLjQ2OTc4MSAxOS4wMDAxIDEuMDQ4OCAxOUgxMC4xNDk0VjExLjY1MjNINy42ODE2NFY4Ljc3NjM3SDEwLjE0OTRWNi42NTk4NkMxMC4xNDk0IDQuMjA1NDIgMTEuNjQ3OCAyLjg2OTQ4IDEzLjgzNzMgMi44Njk0OEMxNC44ODYgMi44Njk0OCAxNS43ODcxIDIuOTQ3NjQgMTYuMDQ5OCAyLjk4MjU1VjUuNTQ3ODVIMTQuNTRDMTMuMzQ4OCA1LjU0Nzg1IDEzLjExODIgNi4xMTM4OSAxMy4xMTgyIDYuOTQ0NjdWOC43NzYzN0gxNS45NjYzTDE1LjU5NTIgMTEuNjUyM0gxMy4xMTgyVjE5SDE3Ljk1MTJDMTguNTMwMyAxOS4wMDAxIDE4Ljk5OTkgMTguNTMwOCAxOSAxNy45NTE3QzE5IDE3Ljk1MTUgMTkgMTcuOTUxNCAxOSAxNy45NTEyVjEuMDQ3ODhDMTguOTk5OCAwLjQ2OTA4NiAxOC41MzAyIC0wLjAwMDExNTk0NSAxNy45NTEyIDIuMTQ5MTllLTA4WiIgZmlsbD0iIzc0NzQ3NCIvPgo8L3N2Zz4K";
    },
    280: function (t, e, n) {
      t.exports = n.p + "img/contribute.24ab52e.svg";
    },
    282: function (t, e, n) {
      t.exports = n.p + "img/logo-kungfutech.8162f19.svg";
    },
    283: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE0OTggMTFIMTEuMzgxOUwxMS4xMDk4IDEwLjczQzEyLjA2MjMgOS41OSAxMi42MzU4IDguMTEgMTIuNjM1OCA2LjVDMTIuNjM1OCAyLjkxIDkuODA3MzIgMCA2LjMxNzkgMEMyLjgyODQ3IDAgMCAyLjkxIDAgNi41QzAgMTAuMDkgMi44Mjg0NyAxMyA2LjMxNzkgMTNDNy44ODI3OSAxMyA5LjMyMTMzIDEyLjQxIDEwLjQyOTQgMTEuNDNMMTAuNjkxOCAxMS43MVYxMi41TDE1LjU1MTcgMTcuNDlMMTcgMTZMMTIuMTQ5OCAxMVpNNi4zMTc5IDExQzMuODk3NjYgMTEgMS45NDM5NyA4Ljk5IDEuOTQzOTcgNi41QzEuOTQzOTcgNC4wMSAzLjg5NzY2IDIgNi4zMTc5IDJDOC43MzgxNCAyIDEwLjY5MTggNC4wMSAxMC42OTE4IDYuNUMxMC42OTE4IDguOTkgOC43MzgxNCAxMSA2LjMxNzkgMTFaIiBmaWxsPSIjNjA2NzcwIiBmaWxsLW9wYWNpdHk9IjAuODciLz4KPC9zdmc+Cg==";
    },
    289: function (t, e, n) {
      n(290), n(291), (t.exports = n(294));
    },
    291: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(0),
        r = n(1);
      o.default.use(r.c), (e.default = function () {});
    },
    294: function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          n(35), n(11), n(30);
          var e = n(15),
            o = n(5),
            r =
              (n(201),
              n(301),
              n(306),
              n(307),
              n(25),
              n(16),
              n(19),
              n(21),
              n(100),
              n(49),
              n(34),
              n(31),
              n(12),
              n(32),
              n(0)),
            c = n(261),
            l = n(180),
            m = n(2),
            d = n(47),
            f = n(272),
            h = n(132);
          function v(t, e) {
            var n =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!n) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return;
                  if ("string" == typeof t) return x(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === n && t.constructor && (n = t.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return x(t, e);
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                n && (t = n);
                var i = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var r,
              c = !0,
              l = !1;
            return {
              s: function () {
                n = n.call(t);
              },
              n: function () {
                var t = n.next();
                return (c = t.done), t;
              },
              e: function (t) {
                (l = !0), (r = t);
              },
              f: function () {
                try {
                  c || null == n.return || n.return();
                } finally {
                  if (l) throw r;
                }
              },
            };
          }
          function x(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
          }
          r.default.__nuxt__fetch__mixin__ ||
            (r.default.mixin(f.a), (r.default.__nuxt__fetch__mixin__ = !0)),
            r.default.component(h.a.name, h.a),
            r.default.component("NLink", h.a),
            t.fetch || (t.fetch = c.a);
          var y,
            w,
            k = [],
            j = window.__NUXT__ || {},
            _ = j.config || {};
          _._app && (n.p = Object(m.v)(_._app.cdnURL, _._app.assetsPath)),
            Object.assign(r.default.config, { silent: !0, performance: !1 });
          var z = r.default.config.errorHandler || console.error;
          function M(t, e, n) {
            for (
              var o = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ("function" == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            o = 2;
                          o < e;
                          o++
                        )
                          n[o - 2] = arguments[o];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, "transition", e, n) || {};
                  return "string" == typeof t ? { name: t } : t;
                },
                r = n ? Object(m.g)(n) : [],
                c = Math.max(t.length, r.length),
                l = [],
                d = function (i) {
                  var e = Object.assign({}, o(t[i])),
                    n = Object.assign({}, o(r[i]));
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (t) {
                      n[t] = e[t];
                    }),
                    l.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              d(i);
            return l;
          }
          function O(t, e, n) {
            return C.apply(this, arguments);
          }
          function C() {
            return (C = Object(o.a)(
              regeneratorRuntime.mark(function t(e, n, o) {
                var r,
                  c,
                  l,
                  d,
                  f = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(y.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(m.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(m.r)(e, function (t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 9:
                          (r = t.sent),
                            r.some(function (t) {
                              var o = t.Component,
                                r = t.instance,
                                c = o.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return f._diffQuery[t];
                                    })
                                  : "function" == typeof c &&
                                    c.apply(r, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          o(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (d = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(d))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 23:
                          this.error({ statusCode: l, message: d }),
                            this.$nuxt.$emit("routeChanged", e, n, c),
                            o();
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function T(t, e) {
            return j.serverRendered && e && Object(m.b)(t, e), (t._Ctor = t), t;
          }
          function S(t) {
            return Object(m.d)(
              t,
              (function () {
                var t = Object(o.a)(
                  regeneratorRuntime.mark(function t(e, n, o, r, c) {
                    var l;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (l = T(
                                Object(m.s)(e),
                                j.data ? j.data[c] : null
                              )),
                              (o.components[r] = l),
                              t.abrupt("return", l)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, o, r, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function N(t, e, n) {
            var o = this,
              r = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((r = []),
                (n = Object(m.s)(n)).options.middleware &&
                  (r = r.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (r = r.concat(t.options.middleware));
                })),
              (r = r.map(function (t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof l.a[t] &&
                      ((c = !0),
                      o.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t,
                      })),
                    l.a[t]);
              })),
              !c)
            )
              return Object(m.o)(r, e);
          }
          function D(t, e, n) {
            return A.apply(this, arguments);
          }
          function A() {
            return (
              (A = Object(o.a)(
                regeneratorRuntime.mark(function t(e, n, r) {
                  var c,
                    l,
                    f,
                    h,
                    x,
                    w,
                    j,
                    _,
                    z,
                    O,
                    C,
                    T,
                    S,
                    D,
                    A,
                    I = this;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !1 !== this._routeChanged ||
                              !1 !== this._paramChanged ||
                              !1 !== this._queryChanged
                            ) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return", r());
                          case 2:
                            return (
                              !1,
                              e === n
                                ? ((k = []), !0)
                                : ((c = []),
                                  (k = Object(m.g)(n, c).map(function (t, i) {
                                    return Object(m.c)(n.matched[c[i]].path)(
                                      n.params
                                    );
                                  }))),
                              (l = !1),
                              (f = function (path) {
                                n.path === path.path &&
                                  I.$loading.finish &&
                                  I.$loading.finish(),
                                  n.path !== path.path &&
                                    I.$loading.pause &&
                                    I.$loading.pause(),
                                  l || ((l = !0), r(path));
                              }),
                              (t.next = 8),
                              Object(m.t)(y, {
                                route: e,
                                from: n,
                                next: f.bind(this),
                              })
                            );
                          case 8:
                            if (
                              ((this._dateLastError = y.nuxt.dateErr),
                              (this._hadError = Boolean(y.nuxt.err)),
                              (h = []),
                              (x = Object(m.g)(e, h)).length)
                            ) {
                              t.next = 27;
                              break;
                            }
                            return (t.next = 15), N.call(this, x, y.context);
                          case 15:
                            if (!l) {
                              t.next = 17;
                              break;
                            }
                            return t.abrupt("return");
                          case 17:
                            return (
                              (w = (d.a.options || d.a).layout),
                              (t.next = 20),
                              this.loadLayout(
                                "function" == typeof w
                                  ? w.call(d.a, y.context)
                                  : w
                              )
                            );
                          case 20:
                            return (
                              (j = t.sent),
                              (t.next = 23),
                              N.call(this, x, y.context, j)
                            );
                          case 23:
                            if (!l) {
                              t.next = 25;
                              break;
                            }
                            return t.abrupt("return");
                          case 25:
                            return (
                              y.context.error({
                                statusCode: 404,
                                message: "This page could not be found",
                              }),
                              t.abrupt("return", r())
                            );
                          case 27:
                            return (
                              x.forEach(function (t) {
                                t._Ctor &&
                                  t._Ctor.options &&
                                  ((t.options.asyncData =
                                    t._Ctor.options.asyncData),
                                  (t.options.fetch = t._Ctor.options.fetch));
                              }),
                              this.setTransitions(M(x, e, n)),
                              (t.prev = 29),
                              (t.next = 32),
                              N.call(this, x, y.context)
                            );
                          case 32:
                            if (!l) {
                              t.next = 34;
                              break;
                            }
                            return t.abrupt("return");
                          case 34:
                            if (!y.context._errored) {
                              t.next = 36;
                              break;
                            }
                            return t.abrupt("return", r());
                          case 36:
                            return (
                              "function" == typeof (_ = x[0].options.layout) &&
                                (_ = _(y.context)),
                              (t.next = 40),
                              this.loadLayout(_)
                            );
                          case 40:
                            return (
                              (_ = t.sent),
                              (t.next = 43),
                              N.call(this, x, y.context, _)
                            );
                          case 43:
                            if (!l) {
                              t.next = 45;
                              break;
                            }
                            return t.abrupt("return");
                          case 45:
                            if (!y.context._errored) {
                              t.next = 47;
                              break;
                            }
                            return t.abrupt("return", r());
                          case 47:
                            (z = !0),
                              (t.prev = 48),
                              (O = v(x)),
                              (t.prev = 50),
                              O.s();
                          case 52:
                            if ((C = O.n()).done) {
                              t.next = 63;
                              break;
                            }
                            if (
                              "function" ==
                              typeof (T = C.value).options.validate
                            ) {
                              t.next = 56;
                              break;
                            }
                            return t.abrupt("continue", 61);
                          case 56:
                            return (t.next = 58), T.options.validate(y.context);
                          case 58:
                            if ((z = t.sent)) {
                              t.next = 61;
                              break;
                            }
                            return t.abrupt("break", 63);
                          case 61:
                            t.next = 52;
                            break;
                          case 63:
                            t.next = 68;
                            break;
                          case 65:
                            (t.prev = 65), (t.t0 = t.catch(50)), O.e(t.t0);
                          case 68:
                            return (t.prev = 68), O.f(), t.finish(68);
                          case 71:
                            t.next = 77;
                            break;
                          case 73:
                            return (
                              (t.prev = 73),
                              (t.t1 = t.catch(48)),
                              this.error({
                                statusCode: t.t1.statusCode || "500",
                                message: t.t1.message,
                              }),
                              t.abrupt("return", r())
                            );
                          case 77:
                            if (z) {
                              t.next = 80;
                              break;
                            }
                            return (
                              this.error({
                                statusCode: 404,
                                message: "This page could not be found",
                              }),
                              t.abrupt("return", r())
                            );
                          case 80:
                            return (
                              (t.next = 82),
                              Promise.all(
                                x.map(
                                  (function () {
                                    var t = Object(o.a)(
                                      regeneratorRuntime.mark(function t(o, i) {
                                        var r, c, l, d, f, v, x, w, p;
                                        return regeneratorRuntime.wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (
                                                    ((o._path = Object(m.c)(
                                                      e.matched[h[i]].path
                                                    )(e.params)),
                                                    (o._dataRefresh = !1),
                                                    (r = o._path !== k[i]),
                                                    I._routeChanged && r
                                                      ? (o._dataRefresh = !0)
                                                      : I._paramChanged && r
                                                      ? ((c =
                                                          o.options.watchParam),
                                                        (o._dataRefresh =
                                                          !1 !== c))
                                                      : I._queryChanged &&
                                                        (!0 ===
                                                        (l =
                                                          o.options.watchQuery)
                                                          ? (o._dataRefresh =
                                                              !0)
                                                          : Array.isArray(l)
                                                          ? (o._dataRefresh =
                                                              l.some(function (
                                                                t
                                                              ) {
                                                                return I
                                                                  ._diffQuery[
                                                                  t
                                                                ];
                                                              }))
                                                          : "function" ==
                                                              typeof l &&
                                                            (S ||
                                                              (S = Object(m.h)(
                                                                e
                                                              )),
                                                            (o._dataRefresh =
                                                              l.apply(S[i], [
                                                                e.query,
                                                                n.query,
                                                              ])))),
                                                    I._hadError ||
                                                      !I._isMounted ||
                                                      o._dataRefresh)
                                                  ) {
                                                    t.next = 6;
                                                    break;
                                                  }
                                                  return t.abrupt("return");
                                                case 6:
                                                  return (
                                                    (d = []),
                                                    (f =
                                                      o.options.asyncData &&
                                                      "function" ==
                                                        typeof o.options
                                                          .asyncData),
                                                    (v =
                                                      Boolean(
                                                        o.options.fetch
                                                      ) &&
                                                      o.options.fetch.length),
                                                    (x = f && v ? 30 : 45),
                                                    f &&
                                                      ((w = Object(m.q)(
                                                        o.options.asyncData,
                                                        y.context
                                                      )).then(function (t) {
                                                        Object(m.b)(o, t),
                                                          I.$loading.increase &&
                                                            I.$loading.increase(
                                                              x
                                                            );
                                                      }),
                                                      d.push(w)),
                                                    (I.$loading.manual =
                                                      !1 === o.options.loading),
                                                    v &&
                                                      (((p = o.options.fetch(
                                                        y.context
                                                      )) &&
                                                        (p instanceof Promise ||
                                                          "function" ==
                                                            typeof p.then)) ||
                                                        (p =
                                                          Promise.resolve(p)),
                                                      p.then(function (t) {
                                                        I.$loading.increase &&
                                                          I.$loading.increase(
                                                            x
                                                          );
                                                      }),
                                                      d.push(p)),
                                                    t.abrupt(
                                                      "return",
                                                      Promise.all(d)
                                                    )
                                                  );
                                                case 14:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t
                                        );
                                      })
                                    );
                                    return function (e, n) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              )
                            );
                          case 82:
                            l ||
                              (this.$loading.finish &&
                                !this.$loading.manual &&
                                this.$loading.finish(),
                              r()),
                              (t.next = 99);
                            break;
                          case 85:
                            if (
                              ((t.prev = 85),
                              (t.t2 = t.catch(29)),
                              "ERR_REDIRECT" !== (D = t.t2 || {}).message)
                            ) {
                              t.next = 90;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              this.$nuxt.$emit("routeChanged", e, n, D)
                            );
                          case 90:
                            return (
                              (k = []),
                              Object(m.k)(D),
                              "function" ==
                                typeof (A = (d.a.options || d.a).layout) &&
                                (A = A(y.context)),
                              (t.next = 96),
                              this.loadLayout(A)
                            );
                          case 96:
                            this.error(D),
                              this.$nuxt.$emit("routeChanged", e, n, D),
                              r();
                          case 99:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [
                      [29, 85],
                      [48, 73],
                      [50, 65, 68, 71],
                    ]
                  );
                })
              )),
              A.apply(this, arguments)
            );
          }
          function I(t, n) {
            Object(m.d)(t, function (t, n, o, c) {
              return (
                "object" !== Object(e.a)(t) ||
                  t.options ||
                  (((t = r.default.extend(t))._Ctor = t),
                  (o.components[c] = t)),
                t
              );
            });
          }
          function E(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1);
            var n = e
              ? (d.a.options || d.a).layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(y.context)), this.setLayout(n);
          }
          function $(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }
          function B(t, e) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var o = Object(m.h)(t),
                c = Object(m.g)(t),
                l = !1;
              r.default.nextTick(function () {
                o.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) r.default.set(t.$data, n, e[n]);
                    l = !0;
                  }
                }),
                  l &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  $(n);
              });
            }
          }
          function L(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              w.afterEach(function (e, n) {
                r.default.nextTick(function () {
                  return t.$nuxt.$emit("routeChanged", e, n);
                });
              });
          }
          function P() {
            return (P = Object(o.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, o, c, l, d;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (y = e.app),
                          (w = e.router),
                          e.store,
                          (n = new r.default(y)),
                          (o = j.layout || "default"),
                          (t.next = 7),
                          n.loadLayout(o)
                        );
                      case 7:
                        return (
                          n.setLayout(o),
                          (c = function () {
                            n.$mount("#__nuxt"),
                              w.afterEach(I),
                              w.afterEach(E.bind(n)),
                              w.afterEach(B.bind(n)),
                              r.default.nextTick(function () {
                                L(n);
                              });
                          }),
                          (t.next = 11),
                          Promise.all(S(y.context.route))
                        );
                      case 11:
                        if (
                          ((l = t.sent),
                          (n.setTransitions =
                            n.$options.nuxt.setTransitions.bind(n)),
                          l.length &&
                            (n.setTransitions(M(l, w.currentRoute)),
                            (k = w.currentRoute.matched.map(function (t) {
                              return Object(m.c)(t.path)(w.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          j.error && n.error(j.error),
                          w.beforeEach(O.bind(n)),
                          w.beforeEach(D.bind(n)),
                          !j.serverRendered ||
                            !Object(m.n)(j.routePath, n.context.route.path))
                        ) {
                          t.next = 20;
                          break;
                        }
                        return t.abrupt("return", c());
                      case 20:
                        return (
                          (d = function () {
                            I(w.currentRoute, w.currentRoute),
                              E.call(n, w.currentRoute),
                              $(n),
                              c();
                          }),
                          (t.next = 23),
                          new Promise(function (t) {
                            return setTimeout(t, 0);
                          })
                        );
                      case 23:
                        D.call(
                          n,
                          w.currentRoute,
                          w.currentRoute,
                          function (path) {
                            if (path) {
                              var t = w.afterEach(function (e, n) {
                                t(), d();
                              });
                              w.push(path, void 0, function (t) {
                                t && z(t);
                              });
                            } else d();
                          }
                        );
                      case 24:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(d.b)(null, j.config)
            .then(function (t) {
              return P.apply(this, arguments);
            })
            .catch(z);
        }.call(this, n(44));
    },
    318: function (t, e, n) {
      "use strict";
      n(212);
    },
    319: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 3px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: #07A3B2;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n",
        "",
      ]),
        (t.exports = o);
    },
    320: function (t, e, n) {
      var content = n(321);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("096fa58c", content, !0, { sourceMap: !1 });
    },
    321: function (t, e, n) {
      var o = n(3),
        r = n(322),
        c = n(323),
        l = n(324),
        m = n(325),
        d = n(326),
        f = n(327),
        h = n(328),
        v = n(329),
        x = n(330),
        y = n(331),
        w = n(332),
        k = n(333),
        j = o(!1),
        _ = r(c),
        z = r(l),
        M = r(m),
        O = r(d),
        C = r(f),
        T = r(h),
        S = r(v),
        N = r(x),
        D = r(y),
        A = r(w),
        I = r(k);
      j.push([
        t.i,
        '.table{margin-bottom:0px}.table th,.table td{padding:10px 20px}.table thead th{border-top:0;border-bottom:2px solid #9ca3af;color:#4b5563;font-weight:500}.table td{cursor:pointer;color:#4b5563;font-weight:500}.table tbody tr:not(:last-child){border-bottom:2px solid #9ca3af}.table tbody tr:hover{background-color:#6b7280}svg{vertical-align:inherit}.material-design-icon.icon-2x{height:24px;width:24px;bottom:0}.material-design-icon.icon-2x>.material-design-icon__svg{height:24px;width:24px;bottom:0}.el-menu{overflow:hidden;border-bottom:none !important;border-right:none !important}.el-menu-item,.el-submenu__title{margin-right:4px !important;color:#505e77 !important;padding:0 9px;font-size:14px;line-height:34px !important;border-radius:4px !important;height:34px !important;border:none !important;display:flex;align-items:center;transition:background .1s ease-out,box-shadow .15s cubic-bezier(0.47, 0.03, 0.49, 1.38);padding-left:25px !important;background:#fff;margin-right:0 !important}.el-menu-item:hover,.el-submenu__title:hover{color:#495569 !important;background-color:#ebecf0 !important}.el-submenu__title{font-weight:500 !important}.el-menu-item.is-active{background-color:#e6fffa !important;color:#2c7a7b !important}.el-menu-item.is-active .item-course{font-weight:500 !important}.el-submenu{border-radius:4px !important}.number.active{background-color:#38b2ac !important}.el-pager li:hover:not(.active){color:#38b2ac !important}.navbar__search__input .el-input__inner{background:#e5e7eb !important;border:none !important;height:34px;border-radius:18px;padding-left:2.5rem}.el-drawer__header{margin-bottom:.5rem !important}.el-drawer__body{overflow-y:scroll}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.window{background:#f8f8ff;margin:1.5rem 0;border-radius:.3rem;overflow:hidden}.window .window-header{height:37px;background:#dcdcdc;position:relative}.window .window-header .action-buttons{position:absolute;top:50%;left:10px;margin-top:-5px;width:10px;height:10px;background:crimson;border-radius:50%;box-shadow:15px 0 0 orange,30px 0 0 #32cd32}.window .window-header .title-popup{position:absolute;left:calc(50% - 25px);top:calc(50% - 2px);margin-top:-10px;color:dimgray}.window .window-body{position:relative;min-height:100px;padding:5px 10px}.window .window-body code{background:none;margin:0;padding:0}.title-nuxt-content{text-align:left;font-family:"Roboto",-apple-system,BlinkMacSystemFont,Segoe UI,Arial,Ubuntu,Roboto,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:3rem;line-height:4rem;font-weight:900}@media(max-width: 768px){.title-nuxt-content{font-size:2rem;line-height:2.5rem}}.nuxt-content,.content-article{overflow-x:hidden}.nuxt-content h2,.content-article h2{font-size:2rem;line-height:3rem}@media(max-width: 768px){.nuxt-content h2,.content-article h2{font-size:1.725rem;line-height:2rem}}.nuxt-content h3,.content-article h3{font-size:1.875rem;line-height:2rem}@media(max-width: 768px){.nuxt-content h3,.content-article h3{font-size:1.5rem;line-height:1.725rem}}.nuxt-content h4,.content-article h4{font-size:1.725rem;line-height:2rem}@media(max-width: 768px){.nuxt-content h4,.content-article h4{font-size:1rem;line-height:1.5rem}}.nuxt-content h5,.content-article h5{font-size:1.5rem;line-height:1.725rem}@media(max-width: 768px){.nuxt-content h5,.content-article h5{font-size:1rem;line-height:1.5rem;font-style:italic}}.nuxt-content img,.content-article img{border-radius:8px;width:100%}.nuxt-content p,.nuxt-content code,.nuxt-content .note,.nuxt-content .example,.nuxt-content .question,.content-article p,.content-article code,.content-article .note,.content-article .example,.content-article .question{font-size:1.125rem;line-height:1.6;color:#1f2937;font-family:"Pridi",-apple-system,sans-serif;text-align:justify}@media(max-width: 768px){.nuxt-content p,.nuxt-content code,.nuxt-content .note,.nuxt-content .example,.nuxt-content .question,.content-article p,.content-article code,.content-article .note,.content-article .example,.content-article .question{font-size:1rem;line-height:1.5rem;color:#1f2937;font-family:"Pridi",-apple-system,sans-serif}}.nuxt-content blockquote,.content-article blockquote{border-left:4px #38b2ac solid;margin-left:0;padding-left:1.5rem}.nuxt-content ul,.nuxt-content li,.content-article ul,.content-article li{font-size:1.125rem;line-height:1.6;font-family:"Pridi",-apple-system,sans-serif;text-align:justify}.nuxt-content code,.content-article code{font-family:"Source Code Pro",monospace;background:#afb8c133;color:#31353a;padding:.2em .4em;margin:2px;border-radius:5px}.nuxt-content pre,.content-article pre{-ms-overflow-style:none;scrollbar-width:none}.nuxt-content pre::-webkit-scrollbar,.content-article pre::-webkit-scrollbar{display:none}.nuxt-content pre,.content-article pre{border-radius:10px;font-family:"Courier New",Courier,monospace}.nuxt-content .nuxt-content-highlight,.content-article .nuxt-content-highlight{overflow:hidden}.nuxt-content .nuxt-content-highlight .line-numbers,.content-article .nuxt-content-highlight .line-numbers{padding:55px 25px 25px 25px;margin:1rem 0;font-size:1.125rem}.nuxt-content .nuxt-content-highlight .line-numbers:before,.content-article .nuxt-content-highlight .line-numbers:before{content:"";width:48px;height:12px;background:url("/images/macos.png");margin-top:-35px;position:absolute}.nuxt-content .nuxt-content-highlight .line-numbers code,.content-article .nuxt-content-highlight .line-numbers code{background:none;color:#54beb9;padding:0;font-size:1.15rem}.nuxt-content table,.content-article table{border-collapse:collapse;width:100%}.nuxt-content table td,.nuxt-content table th,.content-article table td,.content-article table th{border:1px solid #ddd;padding:8px}.nuxt-content table tr:nth-child(even),.content-article table tr:nth-child(even){background-color:#f2f2f2}.nuxt-content table tr:hover,.content-article table tr:hover{background-color:#e6fffa}.nuxt-content table th,.content-article table th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#285e61;color:#fff}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.window{background:#f8f8ff;margin:1.5rem 0;border-radius:.3rem;overflow:hidden}.window .window-header{height:37px;background:#dcdcdc;position:relative}.window .window-header .action-buttons{position:absolute;top:50%;left:10px;margin-top:-5px;width:10px;height:10px;background:crimson;border-radius:50%;box-shadow:15px 0 0 orange,30px 0 0 #32cd32}.window .window-header .title-popup{position:absolute;left:calc(50% - 25px);top:calc(50% - 2px);margin-top:-10px;color:dimgray}.window .window-body{position:relative;min-height:100px;padding:5px 10px}.window .window-body code{background:none;margin:0;padding:0}.title-nuxt-content{text-align:left;font-family:"Roboto",-apple-system,BlinkMacSystemFont,Segoe UI,Arial,Ubuntu,Roboto,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:3rem;line-height:4rem;font-weight:900}@media(max-width: 768px){.title-nuxt-content{font-size:2rem;line-height:2.5rem}}.nuxt-content,.content-article{overflow-x:hidden}.nuxt-content h2,.content-article h2{font-size:2rem;line-height:3rem}@media(max-width: 768px){.nuxt-content h2,.content-article h2{font-size:1.725rem;line-height:2rem}}.nuxt-content h3,.content-article h3{font-size:1.875rem;line-height:2rem}@media(max-width: 768px){.nuxt-content h3,.content-article h3{font-size:1.5rem;line-height:1.725rem}}.nuxt-content h4,.content-article h4{font-size:1.725rem;line-height:2rem}@media(max-width: 768px){.nuxt-content h4,.content-article h4{font-size:1rem;line-height:1.5rem}}.nuxt-content h5,.content-article h5{font-size:1.5rem;line-height:1.725rem}@media(max-width: 768px){.nuxt-content h5,.content-article h5{font-size:1rem;line-height:1.5rem;font-style:italic}}.nuxt-content img,.content-article img{border-radius:8px;width:100%}.nuxt-content p,.nuxt-content code,.nuxt-content .note,.nuxt-content .example,.nuxt-content .question,.content-article p,.content-article code,.content-article .note,.content-article .example,.content-article .question{font-size:1.125rem;line-height:1.6;color:#1f2937;font-family:"Pridi",-apple-system,sans-serif;text-align:justify}@media(max-width: 768px){.nuxt-content p,.nuxt-content code,.nuxt-content .note,.nuxt-content .example,.nuxt-content .question,.content-article p,.content-article code,.content-article .note,.content-article .example,.content-article .question{font-size:1rem;line-height:1.5rem;color:#1f2937;font-family:"Pridi",-apple-system,sans-serif}}.nuxt-content blockquote,.content-article blockquote{border-left:4px #38b2ac solid;margin-left:0;padding-left:1.5rem}.nuxt-content ul,.nuxt-content li,.content-article ul,.content-article li{font-size:1.125rem;line-height:1.6;font-family:"Pridi",-apple-system,sans-serif;text-align:justify}.nuxt-content code,.content-article code{font-family:"Source Code Pro",monospace;background:#afb8c133;color:#31353a;padding:.2em .4em;margin:2px;border-radius:5px}.nuxt-content pre,.content-article pre{-ms-overflow-style:none;scrollbar-width:none}.nuxt-content pre::-webkit-scrollbar,.content-article pre::-webkit-scrollbar{display:none}.nuxt-content pre,.content-article pre{border-radius:10px;font-family:"Courier New",Courier,monospace}.nuxt-content .nuxt-content-highlight,.content-article .nuxt-content-highlight{overflow:hidden}.nuxt-content .nuxt-content-highlight .line-numbers,.content-article .nuxt-content-highlight .line-numbers{padding:55px 25px 25px 25px;margin:1rem 0;font-size:1.125rem}.nuxt-content .nuxt-content-highlight .line-numbers:before,.content-article .nuxt-content-highlight .line-numbers:before{content:"";width:48px;height:12px;background:url("/images/macos.png");margin-top:-35px;position:absolute}.nuxt-content .nuxt-content-highlight .line-numbers code,.content-article .nuxt-content-highlight .line-numbers code{background:none;color:#54beb9;padding:0;font-size:1.15rem}.nuxt-content table,.content-article table{border-collapse:collapse;width:100%}.nuxt-content table td,.nuxt-content table th,.content-article table td,.content-article table th{border:1px solid #ddd;padding:8px}.nuxt-content table tr:nth-child(even),.content-article table tr:nth-child(even){background-color:#f2f2f2}.nuxt-content table tr:hover,.content-article table tr:hover{background-color:#e6fffa}.nuxt-content table th,.content-article table th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#285e61;color:#fff}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.button-enter-active,.button-leave-active{transition:all .1s ease-in-out}.button-enter,.button-leave-to{transform:scale(0.8);opacity:0}.page-enter-active,.page-leave-active{transition:all .25s ease-in-out}.page-enter,.page-leave-active{opacity:0;transform:translate3d(0, 5px, 0)}.list-enter-active,.list-leave-active{transition:all 1s}.list-enter,.list-leave-to{opacity:0;transform:translateX(30px)}html{scroll-behavior:smooth;line-height:1.65;-webkit-text-size-adjust:100%}body{font-family:"Roboto",-apple-system,BlinkMacSystemFont,Segoe UI,Arial,Ubuntu,Roboto,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;background-color:#fff;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;outline-color:#319795;margin:0}main{display:block}a{text-decoration:none}h1,h2,h3,h4,h5,h6{font-family:"Roboto",-apple-system,BlinkMacSystemFont,Segoe UI,Arial,Ubuntu,Roboto,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;color:#1f2937;font-weight:bold;display:block}h1{font-size:2rem;margin:.67rem 0}@media(max-width: 768px){h1{font-size:1.5rem;line-height:2rem}}hr{box-sizing:content-box;height:0;overflow:visible;height:1px;border:0;background-color:#4b5563}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:12px;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none;max-width:100%}[hidden]{display:none}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#b9b9b9;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#555}.scroll{scrollbar-width:thin}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;font-display:swap;src:url(' +
          _ +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:italic;font-weight:300;font-display:swap;src:url(' +
          z +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url(' +
          M +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:italic;font-weight:400;font-display:swap;src:url(' +
          O +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:500;font-display:swap;src:url(' +
          C +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:italic;font-weight:500;font-display:swap;src:url(' +
          T +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:500;font-display:swap;src:url(' +
          S +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:italic;font-weight:500;font-display:swap;src:url(' +
          N +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:900;font-display:swap;src:url(' +
          D +
          ') format("truetype")}@font-face{font-family:"Roboto";font-style:italic;font-weight:900;font-display:swap;src:url(' +
          A +
          ') format("truetype")}@font-face{font-family:"element-icons";src:url(' +
          I +
          ') format("truetype");font-weight:normal;font-display:swap;font-style:normal}[class^=el-icon-],[class*=" el-icon-"]{font-family:"element-icons" !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;vertical-align:baseline;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.el-icon-ice-cream-round:before{content:""}.el-icon-ice-cream-square:before{content:""}.el-icon-lollipop:before{content:""}.el-icon-potato-strips:before{content:""}.el-icon-milk-tea:before{content:""}.el-icon-ice-drink:before{content:""}.el-icon-ice-tea:before{content:""}.el-icon-coffee:before{content:""}.el-icon-orange:before{content:""}.el-icon-pear:before{content:""}.el-icon-apple:before{content:""}.el-icon-cherry:before{content:""}.el-icon-watermelon:before{content:""}.el-icon-grape:before{content:""}.el-icon-refrigerator:before{content:""}.el-icon-goblet-square-full:before{content:""}.el-icon-goblet-square:before{content:""}.el-icon-goblet-full:before{content:""}.el-icon-goblet:before{content:""}.el-icon-cold-drink:before{content:""}.el-icon-coffee-cup:before{content:""}.el-icon-water-cup:before{content:""}.el-icon-hot-water:before{content:""}.el-icon-ice-cream:before{content:""}.el-icon-dessert:before{content:""}.el-icon-sugar:before{content:""}.el-icon-tableware:before{content:""}.el-icon-burger:before{content:""}.el-icon-knife-fork:before{content:""}.el-icon-fork-spoon:before{content:""}.el-icon-chicken:before{content:""}.el-icon-food:before{content:""}.el-icon-dish-1:before{content:""}.el-icon-dish:before{content:""}.el-icon-moon-night:before{content:""}.el-icon-moon:before{content:""}.el-icon-cloudy-and-sunny:before{content:""}.el-icon-partly-cloudy:before{content:""}.el-icon-cloudy:before{content:""}.el-icon-sunny:before{content:""}.el-icon-sunset:before{content:""}.el-icon-sunrise-1:before{content:""}.el-icon-sunrise:before{content:""}.el-icon-heavy-rain:before{content:""}.el-icon-lightning:before{content:""}.el-icon-light-rain:before{content:""}.el-icon-wind-power:before{content:""}.el-icon-baseball:before{content:""}.el-icon-soccer:before{content:""}.el-icon-football:before{content:""}.el-icon-basketball:before{content:""}.el-icon-ship:before{content:""}.el-icon-truck:before{content:""}.el-icon-bicycle:before{content:""}.el-icon-mobile-phone:before{content:""}.el-icon-service:before{content:""}.el-icon-key:before{content:""}.el-icon-unlock:before{content:""}.el-icon-lock:before{content:""}.el-icon-watch:before{content:""}.el-icon-watch-1:before{content:""}.el-icon-timer:before{content:""}.el-icon-alarm-clock:before{content:""}.el-icon-map-location:before{content:""}.el-icon-delete-location:before{content:""}.el-icon-add-location:before{content:""}.el-icon-location-information:before{content:""}.el-icon-location-outline:before{content:""}.el-icon-location:before{content:""}.el-icon-place:before{content:""}.el-icon-discover:before{content:""}.el-icon-first-aid-kit:before{content:""}.el-icon-trophy-1:before{content:""}.el-icon-trophy:before{content:""}.el-icon-medal:before{content:""}.el-icon-medal-1:before{content:""}.el-icon-stopwatch:before{content:""}.el-icon-mic:before{content:""}.el-icon-copy-document:before{content:""}.el-icon-full-screen:before{content:""}.el-icon-switch-button:before{content:""}.el-icon-aim:before{content:""}.el-icon-crop:before{content:""}.el-icon-odometer:before{content:""}.el-icon-time:before{content:""}.el-icon-bangzhu:before{content:""}.el-icon-close-notification:before{content:""}.el-icon-microphone:before{content:""}.el-icon-turn-off-microphone:before{content:""}.el-icon-position:before{content:""}.el-icon-postcard:before{content:""}.el-icon-message:before{content:""}.el-icon-chat-line-square:before{content:""}.el-icon-chat-dot-square:before{content:""}.el-icon-chat-dot-round:before{content:""}.el-icon-chat-square:before{content:""}.el-icon-chat-line-round:before{content:""}.el-icon-chat-round:before{content:""}.el-icon-set-up:before{content:""}.el-icon-turn-off:before{content:""}.el-icon-open:before{content:""}.el-icon-connection:before{content:""}.el-icon-link:before{content:""}.el-icon-cpu:before{content:""}.el-icon-thumb:before{content:""}.el-icon-female:before{content:""}.el-icon-male:before{content:""}.el-icon-guide:before{content:""}.el-icon-news:before{content:""}.el-icon-price-tag:before{content:""}.el-icon-discount:before{content:""}.el-icon-wallet:before{content:""}.el-icon-coin:before{content:""}.el-icon-money:before{content:""}.el-icon-bank-card:before{content:""}.el-icon-box:before{content:""}.el-icon-present:before{content:""}.el-icon-sell:before{content:""}.el-icon-sold-out:before{content:""}.el-icon-shopping-bag-2:before{content:""}.el-icon-shopping-bag-1:before{content:""}.el-icon-shopping-cart-2:before{content:""}.el-icon-shopping-cart-1:before{content:""}.el-icon-shopping-cart-full:before{content:""}.el-icon-smoking:before{content:""}.el-icon-no-smoking:before{content:""}.el-icon-house:before{content:""}.el-icon-table-lamp:before{content:""}.el-icon-school:before{content:""}.el-icon-office-building:before{content:""}.el-icon-toilet-paper:before{content:""}.el-icon-notebook-2:before{content:""}.el-icon-notebook-1:before{content:""}.el-icon-files:before{content:""}.el-icon-collection:before{content:""}.el-icon-receiving:before{content:""}.el-icon-suitcase-1:before{content:""}.el-icon-suitcase:before{content:""}.el-icon-film:before{content:""}.el-icon-collection-tag:before{content:""}.el-icon-data-analysis:before{content:""}.el-icon-pie-chart:before{content:""}.el-icon-data-board:before{content:""}.el-icon-data-line:before{content:""}.el-icon-reading:before{content:""}.el-icon-magic-stick:before{content:""}.el-icon-coordinate:before{content:""}.el-icon-mouse:before{content:""}.el-icon-brush:before{content:""}.el-icon-headset:before{content:""}.el-icon-umbrella:before{content:""}.el-icon-scissors:before{content:""}.el-icon-mobile:before{content:""}.el-icon-attract:before{content:""}.el-icon-monitor:before{content:""}.el-icon-search:before{content:""}.el-icon-takeaway-box:before{content:""}.el-icon-paperclip:before{content:""}.el-icon-printer:before{content:""}.el-icon-document-add:before{content:""}.el-icon-document:before{content:""}.el-icon-document-checked:before{content:""}.el-icon-document-copy:before{content:""}.el-icon-document-delete:before{content:""}.el-icon-document-remove:before{content:""}.el-icon-tickets:before{content:""}.el-icon-folder-checked:before{content:""}.el-icon-folder-delete:before{content:""}.el-icon-folder-remove:before{content:""}.el-icon-folder-add:before{content:""}.el-icon-folder-opened:before{content:""}.el-icon-folder:before{content:""}.el-icon-edit-outline:before{content:""}.el-icon-edit:before{content:""}.el-icon-date:before{content:""}.el-icon-c-scale-to-original:before{content:""}.el-icon-view:before{content:""}.el-icon-loading:before{content:""}.el-icon-rank:before{content:""}.el-icon-sort-down:before{content:""}.el-icon-sort-up:before{content:""}.el-icon-sort:before{content:""}.el-icon-finished:before{content:""}.el-icon-refresh-left:before{content:""}.el-icon-refresh-right:before{content:""}.el-icon-refresh:before{content:""}.el-icon-video-play:before{content:""}.el-icon-video-pause:before{content:""}.el-icon-d-arrow-right:before{content:""}.el-icon-d-arrow-left:before{content:""}.el-icon-arrow-up:before{content:""}.el-icon-arrow-down:before{content:""}.el-icon-arrow-right:before{content:""}.el-icon-arrow-left:before{content:""}.el-icon-top-right:before{content:""}.el-icon-top-left:before{content:""}.el-icon-top:before{content:""}.el-icon-bottom:before{content:""}.el-icon-right:before{content:""}.el-icon-back:before{content:""}.el-icon-bottom-right:before{content:""}.el-icon-bottom-left:before{content:""}.el-icon-caret-top:before{content:""}.el-icon-caret-bottom:before{content:""}.el-icon-caret-right:before{content:""}.el-icon-caret-left:before{content:""}.el-icon-d-caret:before{content:""}.el-icon-share:before{content:""}.el-icon-menu:before{content:""}.el-icon-s-grid:before{content:""}.el-icon-s-check:before{content:""}.el-icon-s-data:before{content:""}.el-icon-s-opportunity:before{content:""}.el-icon-s-custom:before{content:""}.el-icon-s-claim:before{content:""}.el-icon-s-finance:before{content:""}.el-icon-s-comment:before{content:""}.el-icon-s-flag:before{content:""}.el-icon-s-marketing:before{content:""}.el-icon-s-shop:before{content:""}.el-icon-s-open:before{content:""}.el-icon-s-management:before{content:""}.el-icon-s-ticket:before{content:""}.el-icon-s-release:before{content:""}.el-icon-s-home:before{content:""}.el-icon-s-promotion:before{content:""}.el-icon-s-operation:before{content:""}.el-icon-s-unfold:before{content:""}.el-icon-s-fold:before{content:""}.el-icon-s-platform:before{content:""}.el-icon-s-order:before{content:""}.el-icon-s-cooperation:before{content:""}.el-icon-bell:before{content:""}.el-icon-message-solid:before{content:""}.el-icon-video-camera:before{content:""}.el-icon-video-camera-solid:before{content:""}.el-icon-camera:before{content:""}.el-icon-camera-solid:before{content:""}.el-icon-download:before{content:""}.el-icon-upload2:before{content:""}.el-icon-upload:before{content:""}.el-icon-picture-outline-round:before{content:""}.el-icon-picture-outline:before{content:""}.el-icon-picture:before{content:""}.el-icon-close:before{content:""}.el-icon-check:before{content:""}.el-icon-plus:before{content:""}.el-icon-minus:before{content:""}.el-icon-help:before{content:""}.el-icon-s-help:before{content:""}.el-icon-circle-close:before{content:""}.el-icon-circle-check:before{content:""}.el-icon-circle-plus-outline:before{content:""}.el-icon-remove-outline:before{content:""}.el-icon-zoom-out:before{content:""}.el-icon-zoom-in:before{content:""}.el-icon-error:before{content:""}.el-icon-success:before{content:""}.el-icon-circle-plus:before{content:""}.el-icon-remove:before{content:""}.el-icon-info:before{content:""}.el-icon-question:before{content:""}.el-icon-warning-outline:before{content:""}.el-icon-warning:before{content:""}.el-icon-goods:before{content:""}.el-icon-s-goods:before{content:""}.el-icon-star-off:before{content:""}.el-icon-star-on:before{content:""}.el-icon-more-outline:before{content:""}.el-icon-more:before{content:""}.el-icon-phone-outline:before{content:""}.el-icon-phone:before{content:""}.el-icon-user:before{content:""}.el-icon-user-solid:before{content:""}.el-icon-setting:before{content:""}.el-icon-s-tools:before{content:""}.el-icon-delete:before{content:""}.el-icon-delete-solid:before{content:""}.el-icon-eleme:before{content:""}.el-icon-platform-eleme:before{content:""}.el-icon-loading{animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}',
        "",
      ]),
        (t.exports = j);
    },
    323: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-Thin.1711b41.ttf";
    },
    324: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-ThinItalic.026cbce.ttf";
    },
    325: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-Light.8be2d14.ttf";
    },
    326: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-LightItalic.43cbee7.ttf";
    },
    327: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-Regular.a8d6ac0.ttf";
    },
    328: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-Italic.beb7fe1.ttf";
    },
    329: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-Medium.7429a63.ttf";
    },
    330: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-MediumItalic.56a8235.ttf";
    },
    331: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-Black.2a42858.ttf";
    },
    332: function (t, e, n) {
      t.exports = n.p + "fonts/Roboto-BlackItalic.77e50ab.ttf";
    },
    333: function (t, e, n) {
      t.exports = n.p + "fonts/element-icons.4520188.ttf";
    },
    334: function (t, e, n) {
      var content = n(335);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("88871ad6", content, !0, { sourceMap: !1 });
    },
    335: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        ".none{display:none}.inline{display:inline}.block{display:block}.flex{display:flex}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.mt-0{margin-top:0rem !important}.mb-0{margin-bottom:0rem !important}.mr-0{margin-right:0rem !important}.ml-0{margin-left:0rem !important}.mx-0{margin-left:0rem !important;margin-right:0rem !important}.my-0{margin-top:0rem !important;margin-bottom:0rem !important}.ma-0{margin:0rem !important}.mt-1{margin-top:.125rem !important}.mb-1{margin-bottom:.125rem !important}.mr-1{margin-right:.125rem !important}.ml-1{margin-left:.125rem !important}.mx-1{margin-left:.125rem !important;margin-right:.125rem !important}.my-1{margin-top:.125rem !important;margin-bottom:.125rem !important}.ma-1{margin:.125rem !important}.mt-2{margin-top:.25rem !important}.mb-2{margin-bottom:.25rem !important}.mr-2{margin-right:.25rem !important}.ml-2{margin-left:.25rem !important}.mx-2{margin-left:.25rem !important;margin-right:.25rem !important}.my-2{margin-top:.25rem !important;margin-bottom:.25rem !important}.ma-2{margin:.25rem !important}.mt-3{margin-top:.375rem !important}.mb-3{margin-bottom:.375rem !important}.mr-3{margin-right:.375rem !important}.ml-3{margin-left:.375rem !important}.mx-3{margin-left:.375rem !important;margin-right:.375rem !important}.my-3{margin-top:.375rem !important;margin-bottom:.375rem !important}.ma-3{margin:.375rem !important}.mt-4{margin-top:.5rem !important}.mb-4{margin-bottom:.5rem !important}.mr-4{margin-right:.5rem !important}.ml-4{margin-left:.5rem !important}.mx-4{margin-left:.5rem !important;margin-right:.5rem !important}.my-4{margin-top:.5rem !important;margin-bottom:.5rem !important}.ma-4{margin:.5rem !important}.mt-5{margin-top:.675rem !important}.mb-5{margin-bottom:.675rem !important}.mr-5{margin-right:.675rem !important}.ml-5{margin-left:.675rem !important}.mx-5{margin-left:.675rem !important;margin-right:.675rem !important}.my-5{margin-top:.675rem !important;margin-bottom:.675rem !important}.ma-5{margin:.675rem !important}.mt-6{margin-top:.75rem !important}.mb-6{margin-bottom:.75rem !important}.mr-6{margin-right:.75rem !important}.ml-6{margin-left:.75rem !important}.mx-6{margin-left:.75rem !important;margin-right:.75rem !important}.my-6{margin-top:.75rem !important;margin-bottom:.75rem !important}.ma-6{margin:.75rem !important}.mt-7{margin-top:.875rem !important}.mb-7{margin-bottom:.875rem !important}.mr-7{margin-right:.875rem !important}.ml-7{margin-left:.875rem !important}.mx-7{margin-left:.875rem !important;margin-right:.875rem !important}.my-7{margin-top:.875rem !important;margin-bottom:.875rem !important}.ma-7{margin:.875rem !important}.mt-8{margin-top:1rem !important}.mb-8{margin-bottom:1rem !important}.mr-8{margin-right:1rem !important}.ml-8{margin-left:1rem !important}.mx-8{margin-left:1rem !important;margin-right:1rem !important}.my-8{margin-top:1rem !important;margin-bottom:1rem !important}.ma-8{margin:1rem !important}.mt-9{margin-top:1.25rem !important}.mb-9{margin-bottom:1.25rem !important}.mr-9{margin-right:1.25rem !important}.ml-9{margin-left:1.25rem !important}.mx-9{margin-left:1.25rem !important;margin-right:1.25rem !important}.my-9{margin-top:1.25rem !important;margin-bottom:1.25rem !important}.ma-9{margin:1.25rem !important}.mt-10{margin-top:1.5rem !important}.mb-10{margin-bottom:1.5rem !important}.mr-10{margin-right:1.5rem !important}.ml-10{margin-left:1.5rem !important}.mx-10{margin-left:1.5rem !important;margin-right:1.5rem !important}.my-10{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.ma-10{margin:1.5rem !important}.mt-11{margin-top:1.75rem !important}.mb-11{margin-bottom:1.75rem !important}.mr-11{margin-right:1.75rem !important}.ml-11{margin-left:1.75rem !important}.mx-11{margin-left:1.75rem !important;margin-right:1.75rem !important}.my-11{margin-top:1.75rem !important;margin-bottom:1.75rem !important}.ma-11{margin:1.75rem !important}.mt-12{margin-top:2rem !important}.mb-12{margin-bottom:2rem !important}.mr-12{margin-right:2rem !important}.ml-12{margin-left:2rem !important}.mx-12{margin-left:2rem !important;margin-right:2rem !important}.my-12{margin-top:2rem !important;margin-bottom:2rem !important}.ma-12{margin:2rem !important}.mt-13{margin-top:3rem !important}.mb-13{margin-bottom:3rem !important}.mr-13{margin-right:3rem !important}.ml-13{margin-left:3rem !important}.mx-13{margin-left:3rem !important;margin-right:3rem !important}.my-13{margin-top:3rem !important;margin-bottom:3rem !important}.ma-13{margin:3rem !important}.mt-14{margin-top:4rem !important}.mb-14{margin-bottom:4rem !important}.mr-14{margin-right:4rem !important}.ml-14{margin-left:4rem !important}.mx-14{margin-left:4rem !important;margin-right:4rem !important}.my-14{margin-top:4rem !important;margin-bottom:4rem !important}.ma-14{margin:4rem !important}.mt-15{margin-top:5rem !important}.mb-15{margin-bottom:5rem !important}.mr-15{margin-right:5rem !important}.ml-15{margin-left:5rem !important}.mx-15{margin-left:5rem !important;margin-right:5rem !important}.my-15{margin-top:5rem !important;margin-bottom:5rem !important}.ma-15{margin:5rem !important}.mt-16{margin-top:6rem !important}.mb-16{margin-bottom:6rem !important}.mr-16{margin-right:6rem !important}.ml-16{margin-left:6rem !important}.mx-16{margin-left:6rem !important;margin-right:6rem !important}.my-16{margin-top:6rem !important;margin-bottom:6rem !important}.ma-16{margin:6rem !important}.mt-17{margin-top:7rem !important}.mb-17{margin-bottom:7rem !important}.mr-17{margin-right:7rem !important}.ml-17{margin-left:7rem !important}.mx-17{margin-left:7rem !important;margin-right:7rem !important}.my-17{margin-top:7rem !important;margin-bottom:7rem !important}.ma-17{margin:7rem !important}.mt-18{margin-top:8rem !important}.mb-18{margin-bottom:8rem !important}.mr-18{margin-right:8rem !important}.ml-18{margin-left:8rem !important}.mx-18{margin-left:8rem !important;margin-right:8rem !important}.my-18{margin-top:8rem !important;margin-bottom:8rem !important}.ma-18{margin:8rem !important}.mt-19{margin-top:9rem !important}.mb-19{margin-bottom:9rem !important}.mr-19{margin-right:9rem !important}.ml-19{margin-left:9rem !important}.mx-19{margin-left:9rem !important;margin-right:9rem !important}.my-19{margin-top:9rem !important;margin-bottom:9rem !important}.ma-19{margin:9rem !important}.mt-20{margin-top:10rem !important}.mb-20{margin-bottom:10rem !important}.mr-20{margin-right:10rem !important}.ml-20{margin-left:10rem !important}.mx-20{margin-left:10rem !important;margin-right:10rem !important}.my-20{margin-top:10rem !important;margin-bottom:10rem !important}.ma-20{margin:10rem !important}.pt-0{padding-top:0rem !important}.pb-0{padding-bottom:0rem !important}.pr-0{padding-right:0rem !important}.pl-0{padding-left:0rem !important}.px-0{padding-left:0rem !important;padding-right:0rem !important}.py-0{padding-top:0rem !important;padding-bottom:0rem !important}.pa-0{padding:0rem !important}.pt-1{padding-top:.125rem !important}.pb-1{padding-bottom:.125rem !important}.pr-1{padding-right:.125rem !important}.pl-1{padding-left:.125rem !important}.px-1{padding-left:.125rem !important;padding-right:.125rem !important}.py-1{padding-top:.125rem !important;padding-bottom:.125rem !important}.pa-1{padding:.125rem !important}.pt-2{padding-top:.25rem !important}.pb-2{padding-bottom:.25rem !important}.pr-2{padding-right:.25rem !important}.pl-2{padding-left:.25rem !important}.px-2{padding-left:.25rem !important;padding-right:.25rem !important}.py-2{padding-top:.25rem !important;padding-bottom:.25rem !important}.pa-2{padding:.25rem !important}.pt-3{padding-top:.375rem !important}.pb-3{padding-bottom:.375rem !important}.pr-3{padding-right:.375rem !important}.pl-3{padding-left:.375rem !important}.px-3{padding-left:.375rem !important;padding-right:.375rem !important}.py-3{padding-top:.375rem !important;padding-bottom:.375rem !important}.pa-3{padding:.375rem !important}.pt-4{padding-top:.5rem !important}.pb-4{padding-bottom:.5rem !important}.pr-4{padding-right:.5rem !important}.pl-4{padding-left:.5rem !important}.px-4{padding-left:.5rem !important;padding-right:.5rem !important}.py-4{padding-top:.5rem !important;padding-bottom:.5rem !important}.pa-4{padding:.5rem !important}.pt-5{padding-top:.675rem !important}.pb-5{padding-bottom:.675rem !important}.pr-5{padding-right:.675rem !important}.pl-5{padding-left:.675rem !important}.px-5{padding-left:.675rem !important;padding-right:.675rem !important}.py-5{padding-top:.675rem !important;padding-bottom:.675rem !important}.pa-5{padding:.675rem !important}.pt-6{padding-top:.75rem !important}.pb-6{padding-bottom:.75rem !important}.pr-6{padding-right:.75rem !important}.pl-6{padding-left:.75rem !important}.px-6{padding-left:.75rem !important;padding-right:.75rem !important}.py-6{padding-top:.75rem !important;padding-bottom:.75rem !important}.pa-6{padding:.75rem !important}.pt-7{padding-top:.875rem !important}.pb-7{padding-bottom:.875rem !important}.pr-7{padding-right:.875rem !important}.pl-7{padding-left:.875rem !important}.px-7{padding-left:.875rem !important;padding-right:.875rem !important}.py-7{padding-top:.875rem !important;padding-bottom:.875rem !important}.pa-7{padding:.875rem !important}.pt-8{padding-top:1rem !important}.pb-8{padding-bottom:1rem !important}.pr-8{padding-right:1rem !important}.pl-8{padding-left:1rem !important}.px-8{padding-left:1rem !important;padding-right:1rem !important}.py-8{padding-top:1rem !important;padding-bottom:1rem !important}.pa-8{padding:1rem !important}.pt-9{padding-top:1.25rem !important}.pb-9{padding-bottom:1.25rem !important}.pr-9{padding-right:1.25rem !important}.pl-9{padding-left:1.25rem !important}.px-9{padding-left:1.25rem !important;padding-right:1.25rem !important}.py-9{padding-top:1.25rem !important;padding-bottom:1.25rem !important}.pa-9{padding:1.25rem !important}.pt-10{padding-top:1.5rem !important}.pb-10{padding-bottom:1.5rem !important}.pr-10{padding-right:1.5rem !important}.pl-10{padding-left:1.5rem !important}.px-10{padding-left:1.5rem !important;padding-right:1.5rem !important}.py-10{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.pa-10{padding:1.5rem !important}.pt-11{padding-top:1.75rem !important}.pb-11{padding-bottom:1.75rem !important}.pr-11{padding-right:1.75rem !important}.pl-11{padding-left:1.75rem !important}.px-11{padding-left:1.75rem !important;padding-right:1.75rem !important}.py-11{padding-top:1.75rem !important;padding-bottom:1.75rem !important}.pa-11{padding:1.75rem !important}.pt-12{padding-top:2rem !important}.pb-12{padding-bottom:2rem !important}.pr-12{padding-right:2rem !important}.pl-12{padding-left:2rem !important}.px-12{padding-left:2rem !important;padding-right:2rem !important}.py-12{padding-top:2rem !important;padding-bottom:2rem !important}.pa-12{padding:2rem !important}.pt-13{padding-top:3rem !important}.pb-13{padding-bottom:3rem !important}.pr-13{padding-right:3rem !important}.pl-13{padding-left:3rem !important}.px-13{padding-left:3rem !important;padding-right:3rem !important}.py-13{padding-top:3rem !important;padding-bottom:3rem !important}.pa-13{padding:3rem !important}.pt-14{padding-top:4rem !important}.pb-14{padding-bottom:4rem !important}.pr-14{padding-right:4rem !important}.pl-14{padding-left:4rem !important}.px-14{padding-left:4rem !important;padding-right:4rem !important}.py-14{padding-top:4rem !important;padding-bottom:4rem !important}.pa-14{padding:4rem !important}.pt-15{padding-top:5rem !important}.pb-15{padding-bottom:5rem !important}.pr-15{padding-right:5rem !important}.pl-15{padding-left:5rem !important}.px-15{padding-left:5rem !important;padding-right:5rem !important}.py-15{padding-top:5rem !important;padding-bottom:5rem !important}.pa-15{padding:5rem !important}.pt-16{padding-top:6rem !important}.pb-16{padding-bottom:6rem !important}.pr-16{padding-right:6rem !important}.pl-16{padding-left:6rem !important}.px-16{padding-left:6rem !important;padding-right:6rem !important}.py-16{padding-top:6rem !important;padding-bottom:6rem !important}.pa-16{padding:6rem !important}.pt-17{padding-top:7rem !important}.pb-17{padding-bottom:7rem !important}.pr-17{padding-right:7rem !important}.pl-17{padding-left:7rem !important}.px-17{padding-left:7rem !important;padding-right:7rem !important}.py-17{padding-top:7rem !important;padding-bottom:7rem !important}.pa-17{padding:7rem !important}.pt-18{padding-top:8rem !important}.pb-18{padding-bottom:8rem !important}.pr-18{padding-right:8rem !important}.pl-18{padding-left:8rem !important}.px-18{padding-left:8rem !important;padding-right:8rem !important}.py-18{padding-top:8rem !important;padding-bottom:8rem !important}.pa-18{padding:8rem !important}.pt-19{padding-top:9rem !important}.pb-19{padding-bottom:9rem !important}.pr-19{padding-right:9rem !important}.pl-19{padding-left:9rem !important}.px-19{padding-left:9rem !important;padding-right:9rem !important}.py-19{padding-top:9rem !important;padding-bottom:9rem !important}.pa-19{padding:9rem !important}.pt-20{padding-top:10rem !important}.pb-20{padding-bottom:10rem !important}.pr-20{padding-right:10rem !important}.pl-20{padding-left:10rem !important}.px-20{padding-left:10rem !important;padding-right:10rem !important}.py-20{padding-top:10rem !important;padding-bottom:10rem !important}.pa-20{padding:10rem !important}.justify-content-between{justify-content:space-between}.justify-content-end{justify-content:flex-end}.justify-content-center{justify-content:center}.align-items-center{align-items:center}.align-items-baseline{align-items:baseline}.flex-direction-column{flex-direction:column}@media(min-width: 576px){.container,.el-container{max-width:540px}}@media(min-width: 768px){.container,.el-container{max-width:720px}}@media(min-width: 992px){.container,.el-container{max-width:960px}}@media(min-width: 1200px){.container,.el-container{max-width:1286px}}.container,.el-container{margin-right:auto;margin-left:auto}@media(max-width: 576px){.container,.el-container{padding-right:5%;padding-left:5%}}@media(min-width: 576px){.container,.el-container{padding-right:0;padding-left:0}}",
        "",
      ]),
        (t.exports = o);
    },
    340: function (t, e, n) {
      "use strict";
      n(213);
    },
    341: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        ".app[data-v-9f38e65e]{min-height:calc(100vh - 300px);overflow-x:hidden;margin-top:31px}@media(max-width: 768px){.app[data-v-9f38e65e]{margin-top:25px}}",
        "",
      ]),
        (t.exports = o);
    },
    342: function (t, e, n) {
      "use strict";
      n(214);
    },
    343: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        ".app[data-v-17c3e597]{min-height:calc(100vh - 300px);margin-top:62px}@media(max-width: 414px){.app[data-v-17c3e597]{margin-top:25px}}",
        "",
      ]),
        (t.exports = o);
    },
    344: function (t, e, n) {
      "use strict";
      n(215);
    },
    345: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-03a5cea8],.fade-in-linear-leave-active[data-v-03a5cea8]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-03a5cea8],.fade-in-linear-leave[data-v-03a5cea8],.fade-in-linear-leave-active[data-v-03a5cea8]{opacity:0}.el-fade-in-linear-enter-active[data-v-03a5cea8],.el-fade-in-linear-leave-active[data-v-03a5cea8]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-03a5cea8],.el-fade-in-linear-leave[data-v-03a5cea8],.el-fade-in-linear-leave-active[data-v-03a5cea8]{opacity:0}.el-fade-in-enter-active[data-v-03a5cea8],.el-fade-in-leave-active[data-v-03a5cea8]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-03a5cea8],.el-fade-in-leave-active[data-v-03a5cea8]{opacity:0}.el-zoom-in-center-enter-active[data-v-03a5cea8],.el-zoom-in-center-leave-active[data-v-03a5cea8]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-03a5cea8],.el-zoom-in-center-leave-active[data-v-03a5cea8]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-03a5cea8],.el-zoom-in-top-leave-active[data-v-03a5cea8]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-03a5cea8],.el-zoom-in-top-leave-active[data-v-03a5cea8]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-03a5cea8],.el-zoom-in-bottom-leave-active[data-v-03a5cea8]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-03a5cea8],.el-zoom-in-bottom-leave-active[data-v-03a5cea8]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-03a5cea8],.el-zoom-in-left-leave-active[data-v-03a5cea8]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-03a5cea8],.el-zoom-in-left-leave-active[data-v-03a5cea8]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-03a5cea8]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-03a5cea8]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-03a5cea8],.el-list-leave-active[data-v-03a5cea8]{transition:all 1s}.el-list-enter[data-v-03a5cea8],.el-list-leave-active[data-v-03a5cea8]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-03a5cea8]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.app[data-v-03a5cea8]{background-color:#e5e7eb;height:100vh}",
        "",
      ]),
        (t.exports = o);
    },
    346: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE5IiBoZWlnaHQ9IjE5IiByeD0iMiIgZmlsbD0iIzc0NzQ3NCIvPgo8cGF0aCBkPSJNMTIuNTc4OSAzSDQuMzY4NDJDMy42MTU3OSAzIDMgMy40OTA5MSAzIDQuMDkwOTFWMTEuNzI3M0g0LjM2ODQyVjQuMDkwOTFIMTIuNTc4OVYzWk0xNC42MzE2IDUuMTgxODJINy4xMDUyNkM2LjM1MjYzIDUuMTgxODIgNS43MzY4NCA1LjY3MjczIDUuNzM2ODQgNi4yNzI3M1YxMy45MDkxQzUuNzM2ODQgMTQuNTA5MSA2LjM1MjYzIDE1IDcuMTA1MjYgMTVIMTQuNjMxNkMxNS4zODQyIDE1IDE2IDE0LjUwOTEgMTYgMTMuOTA5MVY2LjI3MjczQzE2IDUuNjcyNzMgMTUuMzg0MiA1LjE4MTgyIDE0LjYzMTYgNS4xODE4MlpNMTQuNjMxNiAxMy45MDkxSDcuMTA1MjZWNi4yNzI3M0gxNC42MzE2VjEzLjkwOTFaIiBmaWxsPSIjRTVFNUU1IiBzdHJva2U9IiNFNUU1RTUiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=";
    },
    347: function (t, e, n) {
      "use strict";
      n(219);
    },
    348: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        ".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.item{transition:all .3s ease}.wrap-all .app{margin-top:82px;min-height:calc(100vh - 300px)}.wrap-all .menu{border-right:1px solid #d1d5db;height:100vh;overflow-y:scroll;background:#fff;padding-top:1rem;overflow-x:hidden;z-index:1000}.wrap-all .sidebar{position:fixed;top:30vh;left:calc((100% - 1286px)/2 - 3vw);z-index:999}.wrap-all .sidebar__share{border-radius:8px;padding:10px;box-shadow:0 0 1px rgba(0,0,0,.32),0 2px 4px rgba(0,0,0,.08)}.wrap-all .sidebar--mobile{position:fixed;bottom:0;left:0;width:100vw;background:#fff;z-index:3000;box-shadow:0 -2px 3px 0 rgba(0,0,0,.05);display:flex;align-items:center;justify-content:space-between;padding-top:7px;padding-bottom:7px}.wrap-all .sidebar--mobile .icon{width:2.5rem;height:2.5rem;border-radius:5px;box-shadow:.3rem .3rem .6rem #c8d0e7,-0.2rem -0.2rem .5rem #fff;display:flex;cursor:pointer;justify-content:center;align-items:center;font-size:18px;color:#9baacf;transition:all .5s ease;margin:.5rem .5rem}.wrap-all .sidebar--mobile .icon:focus{outline:none}.wrap-all .sidebar--mobile .icon:active{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.wrap-all .sidebar--mobile .icon:hover{color:#319795}.wrap-all .sidebar .icon{width:3rem;height:3rem;border-radius:50%;box-shadow:.3rem .3rem .6rem #c8d0e7,-0.2rem -0.2rem .5rem #fff;display:flex;cursor:pointer;justify-content:center;align-items:center;font-size:18px;color:#9baacf;transition:all .5s ease;margin-bottom:15px}.wrap-all .sidebar .icon:focus{outline:none}.wrap-all .sidebar .icon:active{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.wrap-all .sidebar .icon:hover{color:#319795}.wrap-all .sidebar__items{cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center}.wrap-all .sidebar__items--title{margin-top:5px;font-size:12px;line-height:12px;text-align:center;letter-spacing:-0.24px;color:#999}",
        "",
      ]),
        (t.exports = o);
    },
    367: function (t, e, n) {
      "use strict";
      n(229);
    },
    368: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        '.fade-in-linear-enter-active[data-v-674c6903],.fade-in-linear-leave-active[data-v-674c6903]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-674c6903],.fade-in-linear-leave[data-v-674c6903],.fade-in-linear-leave-active[data-v-674c6903]{opacity:0}.el-fade-in-linear-enter-active[data-v-674c6903],.el-fade-in-linear-leave-active[data-v-674c6903]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-674c6903],.el-fade-in-linear-leave[data-v-674c6903],.el-fade-in-linear-leave-active[data-v-674c6903]{opacity:0}.el-fade-in-enter-active[data-v-674c6903],.el-fade-in-leave-active[data-v-674c6903]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-674c6903],.el-fade-in-leave-active[data-v-674c6903]{opacity:0}.el-zoom-in-center-enter-active[data-v-674c6903],.el-zoom-in-center-leave-active[data-v-674c6903]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-674c6903],.el-zoom-in-center-leave-active[data-v-674c6903]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-674c6903],.el-zoom-in-top-leave-active[data-v-674c6903]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-674c6903],.el-zoom-in-top-leave-active[data-v-674c6903]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-674c6903],.el-zoom-in-bottom-leave-active[data-v-674c6903]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-674c6903],.el-zoom-in-bottom-leave-active[data-v-674c6903]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-674c6903],.el-zoom-in-left-leave-active[data-v-674c6903]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-674c6903],.el-zoom-in-left-leave-active[data-v-674c6903]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-674c6903]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-674c6903]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-674c6903],.el-list-leave-active[data-v-674c6903]{transition:all 1s}.el-list-enter[data-v-674c6903],.el-list-leave-active[data-v-674c6903]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-674c6903]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.logo[data-v-674c6903]{display:flex;align-items:center;margin-right:10px}.contribute[data-v-674c6903]{display:flex;margin-bottom:2rem}.contribute__left[data-v-674c6903]{display:flex;justify-content:center;align-items:center}.contribute__right[data-v-674c6903]{background:#fff}.contribute__right__title[data-v-674c6903]{margin-top:0;margin-bottom:.5rem;font-size:2rem;font-family:"Roboto",-apple-system,BlinkMacSystemFont,Segoe UI,Arial,Ubuntu,Roboto,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.search[data-v-674c6903]{position:relative}.search__icon[data-v-674c6903]{position:absolute;top:9px;left:9px}.search__input[data-v-674c6903]{border:none;background:#f3f4f6;color:#151516;border-radius:4px;height:32px;font-size:14px;padding:0 10px 0 30px}.search__input[data-v-674c6903]:focus{outline-color:#319795;background:#efefef}',
        "",
      ]),
        (t.exports = o);
    },
    369: function (t, e, n) {
      "use strict";
      n(230);
    },
    370: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        '.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.vsm-menu{top:0;position:fixed;height:62px;background:#fff;z-index:999;box-shadow:0px 2px 10px rgba(0,0,0,.1),0px 10px 40px rgba(0,0,0,.06);border-bottom:1px solid #ccc;padding:0 15px}@media(max-width: 768px){.vsm-menu{height:50px}}@media(min-width: 992px){.vsm-menu{padding:0}}@media(min-width: 1200px){.vsm-menu{padding:0}}.vsm-menu nav{height:62px}@media(max-width: 768px){.vsm-menu nav{height:50px}}.vsm-menu ul{padding:0;margin:0 auto 0 auto;height:62px}@media(max-width: 768px){.vsm-menu ul{height:50px}}@media(min-width: 576px){.vsm-menu ul{max-width:540px}}@media(min-width: 768px){.vsm-menu ul{max-width:720px}}@media(min-width: 992px){.vsm-menu ul{max-width:960px}}@media(min-width: 1200px){.vsm-menu ul{max-width:1286px}}.vsm-root{display:flex;align-items:center;justify-content:space-between}.vsm-section_menu{flex:1 1 auto;justify-content:center}.vsm-section_menu>*{padding:0 25px;font-weight:500;font-family:inherit}.content{padding:30px}.content--secondary{padding:30px}.rnd--open{cursor:pointer;user-select:none}.vsm-menu{-webkit-perspective:2000px;perspective:2000px}.vsm-menu,.vsm-menu *{-webkit-box-sizing:border-box;box-sizing:border-box}.vsm-menu .vsm-dropdown{position:absolute;z-index:1000;left:0;right:0;top:50px;pointer-events:none;-webkit-transform:rotateX(-15deg);transform:rotateX(-15deg);-webkit-transform-origin:50% -50px;transform-origin:50% -50px;opacity:0;will-change:transform,opacity;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.25s;transition-duration:.25s}.vsm-menu.vsm-dropdown-active .vsm-dropdown{opacity:1;pointer-events:auto;-webkit-transform:none;transform:none}.vsm-menu.vsm-dropdown-active .vsm-dropdown-section.vsm-active{pointer-events:auto}.vsm-section{display:-webkit-box;display:-ms-flexbox;display:flex;list-style:none}.vsm-section_menu a{text-decoration:none;-webkit-tap-highlight-color:transparent}.vsm-section_menu button{background:none;border:none;outline:none}.vsm-link{cursor:pointer;display:inline-block;height:50px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:17px;line-height:50px;font-weight:500;margin:0;padding:0 10px;color:#484848;-webkit-transition:color .1s ease;transition:color .1s ease}.vsm-link.vsm-active,.vsm-link:hover{color:#2c7a7b}.vsm-link>*{position:relative;display:block}.vsm-background,.vsm-background-alt{position:absolute;top:0;left:0;will-change:transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.25s;transition-duration:.25s}.vsm-background{background:#fff;border-radius:4px;overflow:hidden;-webkit-box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3),0 -18px 60px -10px rgba(0,0,0,.025);box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3),0 -18px 60px -10px rgba(0,0,0,.025);width:380px;height:400px;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:0 0;transform-origin:0 0}.vsm-background-alt{right:0;height:1000px;background:#f6f9fc}.vsm-arrow,.vsm-dropdown-container{position:absolute;left:0;-webkit-transition-duration:.25s;transition-duration:.25s}.vsm-arrow{top:-6px;margin:0 0 0 -6px;width:12px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:4px 0 0 0;background:#fff;-webkit-box-shadow:-3px -3px 5px rgba(82,95,127,.04);box-shadow:-3px -3px 5px rgba(82,95,127,.04);will-change:transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;pointer-events:none}.vsm-dropdown-container{overflow:hidden;width:500px;top:0;-webkit-transform:translateX(0);transform:translateX(0);will-change:transform,width,height;border-radius:6px;-webkit-transition-property:width,height,-webkit-transform;transition-property:width,height,-webkit-transform;transition-property:transform,width,height;transition-property:transform,width,height,-webkit-transform}.vsm-dropdown-section{opacity:0;pointer-events:none;will-change:transform,opacity;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.25s;transition-duration:.25s}.vsm-dropdown-section.vsm-active{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.vsm-dropdown-section.vsm-left{-webkit-transform:translateX(-150px);transform:translateX(-150px)}.vsm-dropdown-section.vsm-right{-webkit-transform:translateX(150px);transform:translateX(150px)}.vsm-dropdown-content{position:absolute;top:0;left:0}.vsm-section_mob{display:none;margin-left:10px}.vsm-section_mob.vsm-open .vsm-mob{pointer-events:none}.vsm-mob__hamburger,.vsm-section_mob.vsm-open .vsm-mob-content{display:-webkit-box;display:-ms-flexbox;display:flex}.vsm-mob__hamburger{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:50px;height:50px;cursor:pointer}.vsm-mob__hamburger:hover .vsm-mob-line{background:#2c7a7b}.vsm-mob-line{width:24px;height:3px;background:#319795;-webkit-transition:background .1s ease;transition:background .1s ease}.vsm-mob-line:nth-child(2){margin-top:5px;margin-bottom:5px}.vsm-mob-content{position:absolute;left:10px;top:10px;right:10px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-perspective:2000px;perspective:2000px}.vsm-mob-content__wrap{background:#fff;-webkit-box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3),0 -18px 60px -10px rgba(0,0,0,.025);box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3),0 -18px 60px -10px rgba(0,0,0,.025);border-radius:4px;overflow:hidden;position:relative;font-size:17px;line-height:40px;white-space:nowrap;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-transform-origin:100% 0;transform-origin:100% 0;will-change:transform,opacity;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.25s;transition-duration:.25s}.vsm-mob-close{position:absolute;right:15px;top:5px;width:50px;height:50px;cursor:pointer;padding-top:5px}.vsm-mob-close:hover:after,.vsm-mob-close:hover:before{background:#2c7a7b}.vsm-mob-close:after,.vsm-mob-close:before{content:"";position:absolute;background:#319795;border-radius:1px;left:14px;right:14px;top:24px;height:3px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:background .1s ease;transition:background .1s ease}.vsm-mob-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vsm-mob-anim{-webkit-transition:.25s;transition:.25s}.vsm-mob-anim-enter-active{opacity:0;-webkit-transform:scale(0.95);transform:scale(0.95)}.vsm-mob-anim-enter-to{opacity:1}.vsm-mob-anim-enter-to,.vsm-mob-anim-leave-active,.vsm-mob-anim-leave-enter{-webkit-transform:scale(1);transform:scale(1)}.vsm-mob-anim-leave-to{-webkit-transform:scale(0.95);transform:scale(0.95);opacity:0}.vsm-no-transition .vsm-arrow,.vsm-no-transition .vsm-background,.vsm-no-transition .vsm-background-alt,.vsm-no-transition .vsm-dropdown-container,.vsm-no-transition .vsm-dropdown-section{-webkit-transition:none;transition:none}@media screen and (max-width: 768px){.vsm-section_mob{display:block}.vsm-mob-hide{display:none}.vsm-mob-full{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}}',
        "",
      ]),
        (t.exports = o);
    },
    371: function (t, e, n) {
      "use strict";
      n(231);
    },
    372: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        '.fade-in-linear-enter-active[data-v-06d16e04],.fade-in-linear-leave-active[data-v-06d16e04]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-06d16e04],.fade-in-linear-leave[data-v-06d16e04],.fade-in-linear-leave-active[data-v-06d16e04]{opacity:0}.el-fade-in-linear-enter-active[data-v-06d16e04],.el-fade-in-linear-leave-active[data-v-06d16e04]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-06d16e04],.el-fade-in-linear-leave[data-v-06d16e04],.el-fade-in-linear-leave-active[data-v-06d16e04]{opacity:0}.el-fade-in-enter-active[data-v-06d16e04],.el-fade-in-leave-active[data-v-06d16e04]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-06d16e04],.el-fade-in-leave-active[data-v-06d16e04]{opacity:0}.el-zoom-in-center-enter-active[data-v-06d16e04],.el-zoom-in-center-leave-active[data-v-06d16e04]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-06d16e04],.el-zoom-in-center-leave-active[data-v-06d16e04]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-06d16e04],.el-zoom-in-top-leave-active[data-v-06d16e04]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-06d16e04],.el-zoom-in-top-leave-active[data-v-06d16e04]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-06d16e04],.el-zoom-in-bottom-leave-active[data-v-06d16e04]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-06d16e04],.el-zoom-in-bottom-leave-active[data-v-06d16e04]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-06d16e04],.el-zoom-in-left-leave-active[data-v-06d16e04]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-06d16e04],.el-zoom-in-left-leave-active[data-v-06d16e04]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-06d16e04]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-06d16e04]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-06d16e04],.el-list-leave-active[data-v-06d16e04]{transition:all 1s}.el-list-enter[data-v-06d16e04],.el-list-leave-active[data-v-06d16e04]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-06d16e04]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-button[data-v-06d16e04]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#e5e7eb;border:1px solid #dcdfe6;border-color:#e5e7eb;color:#4b5563;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:none;margin:0;transition:.1s;font-weight:700;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 12px;font-size:14px;border-radius:6px}.el-button+.el-button[data-v-06d16e04]{margin-left:10px}.el-button[data-v-06d16e04]:hover,.el-button[data-v-06d16e04]:focus{color:#1f2937;border-color:#d1d5db;background-color:#d1d5db}.el-button[data-v-06d16e04]:active{color:#1f2937;border-color:#1f2937;outline:none}.el-button[data-v-06d16e04]::-moz-focus-inner{border:0}.el-button [class*=el-icon-]+span[data-v-06d16e04]{margin-left:5px}.el-button.is-active[data-v-06d16e04]{color:#1a232f;border-color:#1a232f}.el-button.is-disabled[data-v-06d16e04],.el-button.is-disabled[data-v-06d16e04]:hover,.el-button.is-disabled[data-v-06d16e04]:focus{color:#c0c4cc;cursor:not-allowed;background-image:none;background-color:#fff;border-color:#ebeef5}.el-button.is-loading[data-v-06d16e04]{position:relative;pointer-events:none}.el-button.is-loading[data-v-06d16e04]:before{pointer-events:none;content:"";position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px;border-radius:inherit;background-color:rgba(255,255,255,.35)}.el-button.is-uppercase[data-v-06d16e04]{text-transform:uppercase}.el-button.is-full[data-v-06d16e04]{width:100%}.el-button--text[data-v-06d16e04]{border-color:transparent;color:#2c7a7b;background:transparent;padding-left:0;padding-right:0}.el-button--text[data-v-06d16e04]:hover,.el-button--text[data-v-06d16e04]:focus{color:#537e81;border-color:transparent;background-color:transparent}.el-button--text[data-v-06d16e04]:active{color:#309792;border-color:transparent;background-color:transparent}.el-button--text.is-disabled[data-v-06d16e04],.el-button--text.is-disabled[data-v-06d16e04]:hover,.el-button--text.is-disabled[data-v-06d16e04]:focus{border-color:transparent}.el-button--success[data-v-06d16e04]{color:#fff;background-color:#67c23a;border-color:#67c23a}.el-button--success[data-v-06d16e04]:hover,.el-button--success[data-v-06d16e04]:focus{background:#85ce61;border-color:#85ce61;color:#fff}.el-button--success[data-v-06d16e04]:active{background:#58a531;border-color:#58a531;color:#fff;outline:none}.el-button--success.is-active[data-v-06d16e04]{background:#58a531;border-color:#58a531;color:#fff}.el-button--success.is-disabled[data-v-06d16e04],.el-button--success.is-disabled[data-v-06d16e04]:hover,.el-button--success.is-disabled[data-v-06d16e04]:focus,.el-button--success.is-disabled[data-v-06d16e04]:active{color:#fff;background-color:#b3e19d;border-color:#b3e19d}.el-button--danger[data-v-06d16e04]{color:#fff;background-color:#f56c6c;border-color:#f56c6c}.el-button--danger[data-v-06d16e04]:hover,.el-button--danger[data-v-06d16e04]:focus{background:#f78989;border-color:#f78989;color:#fff}.el-button--danger[data-v-06d16e04]:active{background:#d05c5c;border-color:#d05c5c;color:#fff;outline:none}.el-button--danger.is-active[data-v-06d16e04]{background:#d05c5c;border-color:#d05c5c;color:#fff}.el-button--danger.is-disabled[data-v-06d16e04],.el-button--danger.is-disabled[data-v-06d16e04]:hover,.el-button--danger.is-disabled[data-v-06d16e04]:focus,.el-button--danger.is-disabled[data-v-06d16e04]:active{color:#fff;background-color:#fab6b6;border-color:#fab6b6}.el-button--medium[data-v-06d16e04]{padding:10px 20px;font-size:14px;border-radius:6px}.el-button--small[data-v-06d16e04]{padding:9px 15px;font-size:12px;border-radius:5px}.el-button--mini[data-v-06d16e04]{padding:7px 15px;font-size:12px;border-radius:5px}',
        "",
      ]),
        (t.exports = o);
    },
    373: function (t, e, n) {
      "use strict";
      n(232);
    },
    374: function (t, e, n) {
      var o = n(3)(!1);
      o.push([
        t.i,
        ".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.wrap-all .app{margin-top:82px;min-height:calc(100vh - 300px)}@media(max-width: 414px){.wrap-all main{padding-left:0}}.wrap-all .menu{width:300px;position:fixed;display:block;overflow-y:auto;z-index:2;top:62px;left:0;right:auto}.wrap-all .sidebar{position:fixed;top:30vh;z-index:999}.wrap-all .sidebar--mobile{position:fixed;bottom:0;left:0;width:100vw;background:#fff;z-index:3000;box-shadow:0 -2px 3px 0 rgba(0,0,0,.05);display:flex;align-items:center;justify-content:space-between;padding-top:7px;padding-bottom:7px}.wrap-all .sidebar--mobile .icon{width:2.5rem;height:2.5rem;border-radius:5px;box-shadow:.3rem .3rem .6rem #c8d0e7,-0.2rem -0.2rem .5rem #fff;display:flex;cursor:pointer;justify-content:center;align-items:center;font-size:18px;color:#9baacf;transition:all .5s ease;margin:.5rem .5rem}.wrap-all .sidebar--mobile .icon:focus{outline:none}.wrap-all .sidebar--mobile .icon:active{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.wrap-all .sidebar--mobile .icon:hover{color:#319795}.wrap-all .sidebar .icon{width:3rem;height:3rem;border-radius:50%;box-shadow:.3rem .3rem .6rem #c8d0e7,-0.2rem -0.2rem .5rem #fff;display:flex;cursor:pointer;justify-content:center;align-items:center;font-size:18px;color:#9baacf;transition:all .5s ease;margin-bottom:15px}.wrap-all .sidebar .icon:focus{outline:none}.wrap-all .sidebar .icon:active{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.wrap-all .sidebar .icon:hover{color:#319795}.wrap-all .sidebar__items{cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center}.wrap-all .sidebar__items--title{margin-top:5px;font-size:12px;line-height:12px;text-align:center;letter-spacing:-0.24px;color:#999}",
        "",
      ]),
        (t.exports = o);
    },
    375: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function () {
          return r;
        }),
        n.d(e, "getters", function () {
          return c;
        }),
        n.d(e, "mutations", function () {
          return l;
        }),
        n.d(e, "actions", function () {
          return m;
        });
      var o = n(5),
        r =
          (n(16),
          n(25),
          function () {
            return { user: null, token: null };
          }),
        c = {
          user: function (s) {
            return s.user;
          },
        },
        l = {
          setUser: function (t, e) {
            t.user = e;
          },
          setToken: function (t, e) {
            (t.token = e), this.$http.setToken(e, "Bearer");
          },
          clear: function (t) {
            (t.user = null), (t.token = null), this.$cookiz.remove("token");
          },
        },
        m = {
          login: function (t, e) {
            var n = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var r, c, l, m, d, f, h;
                return regeneratorRuntime.wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (r = t.commit),
                            (c = t.dispatch),
                            (l = e.username),
                            (m = e.password),
                            (o.prev = 2),
                            c("wait/start", "auth.login", { root: !0 }),
                            (o.next = 6),
                            n.$http.$post("auth/login", {
                              username: l,
                              password: m,
                            })
                          );
                        case 6:
                          return (
                            (d = o.sent),
                            (f = d.token),
                            (h = d.data),
                            r("setUser", h),
                            r("setToken", f),
                            n.$cookiz.set("token", f),
                            c("organization/userOrgs", null, { root: !0 }),
                            c("wait/end", "auth.login", { root: !0 }),
                            o.abrupt("return", !0)
                          );
                        case 16:
                          throw (
                            ((o.prev = 16),
                            (o.t0 = o.catch(2)),
                            c("wait/end", "auth.login", { root: !0 }),
                            o.t0)
                          );
                        case 20:
                        case "end":
                          return o.stop();
                      }
                  },
                  o,
                  null,
                  [[2, 16]]
                );
              })
            )();
          },
          register: function (t, e) {
            var n = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var r, c, l, m, d, f, h, v, x;
                return regeneratorRuntime.wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (r = t.commit),
                            (c = t.dispatch),
                            (l = e.username),
                            (m = e.password),
                            (d = e.name),
                            (f = e.email),
                            (o.prev = 2),
                            c("wait/start", "auth.register", { root: !0 }),
                            (o.next = 6),
                            n.$http.$post("auth/register", {
                              username: l,
                              email: f,
                              name: d,
                              password: m,
                            })
                          );
                        case 6:
                          return (
                            (h = o.sent),
                            (v = h.token),
                            (x = h.data),
                            r("setUser", x),
                            r("setToken", v),
                            n.$cookiz.set("token", v),
                            c("organization/userOrgs", null, { root: !0 }),
                            c("wait/end", "auth.register", { root: !0 }),
                            o.abrupt("return", !0)
                          );
                        case 16:
                          throw (
                            ((o.prev = 16),
                            (o.t0 = o.catch(2)),
                            c("wait/end", "auth.register", { root: !0 }),
                            o.t0)
                          );
                        case 20:
                        case "end":
                          return o.stop();
                      }
                  },
                  o,
                  null,
                  [[2, 16]]
                );
              })
            )();
          },
          update: function (t, e) {
            var n = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var r, c, l, m, d;
                return regeneratorRuntime.wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (r = t.state),
                            (c = t.commit),
                            (l = t.dispatch),
                            (o.prev = 1),
                            l("wait/start", "auth.update", { root: !0 }),
                            n.$http.setHeader("Accept", "application/json"),
                            (o.next = 6),
                            n.$http.$put(
                              "users/".concat(r.user.username),
                              e.submit
                            )
                          );
                        case 6:
                          return (
                            (m = o.sent),
                            (d = m.data),
                            c("setUser", d),
                            l("wait/end", "auth.update", { root: !0 }),
                            o.abrupt("return", !0)
                          );
                        case 13:
                          return (
                            (o.prev = 13),
                            (o.t0 = o.catch(1)),
                            l("wait/end", "auth.update", { root: !0 }),
                            o.abrupt("return", !1)
                          );
                        case 17:
                        case "end":
                          return o.stop();
                      }
                  },
                  o,
                  null,
                  [[1, 13]]
                );
              })
            )();
          },
          updatePass: function (t, data) {
            var e = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (o = t.dispatch),
                            (n.prev = 1),
                            o("wait/start", "auth.updatePass", { root: !0 }),
                            e.$http.setHeader("Accept", "application/json"),
                            (n.next = 6),
                            e.$http.$put("users/change-password", data)
                          );
                        case 6:
                          return (
                            o("wait/end", "auth.updatePass", { root: !0 }),
                            n.abrupt("return", !0)
                          );
                        case 10:
                          return (
                            (n.prev = 10),
                            (n.t0 = n.catch(1)),
                            o("wait/end", "auth.updatePass", { root: !0 }),
                            n.abrupt("return", !1)
                          );
                        case 14:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
        };
    },
    47: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return ho;
      }),
        n.d(e, "a", function () {
          return I;
        });
      var o = {};
      n.r(o),
        n.d(o, "ContentExample", function () {
          return mt;
        }),
        n.d(o, "ContentInfo", function () {
          return ft;
        }),
        n.d(o, "ContentResult", function () {
          return ht;
        }),
        n.d(o, "ContentWarning", function () {
          return bt;
        }),
        n.d(o, "CourseCategory", function () {
          return gt;
        }),
        n.d(o, "CourseOverview", function () {
          return vt;
        }),
        n.d(o, "NewCard", function () {
          return xt;
        }),
        n.d(o, "NewHeader", function () {
          return yt;
        }),
        n.d(o, "ResourceCard", function () {
          return wt;
        }),
        n.d(o, "ResourceNavigationAside", function () {
          return kt;
        }),
        n.d(o, "ResourceSlider", function () {
          return jt;
        }),
        n.d(o, "SearchArticle", function () {
          return _t;
        }),
        n.d(o, "BaseErrorNotFound", function () {
          return zt;
        }),
        n.d(o, "BaseErrorOops", function () {
          return Mt;
        }),
        n.d(o, "BaseFooter", function () {
          return Ot;
        }),
        n.d(o, "BaseNavbarCourse", function () {
          return Ct;
        }),
        n.d(o, "BaseNavbarMobileContent", function () {
          return Tt;
        }),
        n.d(o, "BaseNavbarResource", function () {
          return St;
        }),
        n.d(o, "BaseNavbar", function () {
          return Nt;
        }),
        n.d(o, "BaseShare", function () {
          return Dt;
        }),
        n.d(o, "BaseSocialDonate", function () {
          return At;
        }),
        n.d(o, "BaseSocialFacebook", function () {
          return It;
        }),
        n.d(o, "BaseSocialFacebookMobile", function () {
          return Et;
        }),
        n.d(o, "BaseSocialYoutube", function () {
          return $t;
        }),
        n.d(o, "CoreBreadcrumbItem", function () {
          return Bt;
        }),
        n.d(o, "CoreBreadcrumb", function () {
          return Lt;
        }),
        n.d(o, "CoreButton", function () {
          return Pt;
        }),
        n.d(o, "CoreCarouselItem", function () {
          return Rt;
        }),
        n.d(o, "CoreCarousel", function () {
          return Yt;
        }),
        n.d(o, "CoreImage", function () {
          return Ut;
        }),
        n.d(o, "CoreRadio", function () {
          return Ft;
        }),
        n.d(o, "CoreTabsBar", function () {
          return Qt;
        }),
        n.d(o, "CoreTabsNav", function () {
          return Ht;
        }),
        n.d(o, "CoreTabsPane", function () {
          return qt;
        }),
        n.d(o, "CoreTabs", function () {
          return Gt;
        }),
        n.d(o, "CoreTag", function () {
          return Wt;
        }),
        n.d(o, "HomeBlogCardMobile", function () {
          return Kt;
        }),
        n.d(o, "HomeBlogSwiper", function () {
          return Zt;
        }),
        n.d(o, "HomeBlogCommonNews", function () {
          return Vt;
        }),
        n.d(o, "HomeBlogHotNews", function () {
          return Xt;
        }),
        n.d(o, "HomeBlogRightNews", function () {
          return Jt;
        }),
        n.d(o, "HomeBlog", function () {
          return te;
        }),
        n.d(o, "HomeCourse", function () {
          return ee;
        }),
        n.d(o, "HomeHotNewItem", function () {
          return ne;
        }),
        n.d(o, "HomeHotNews", function () {
          return oe;
        }),
        n.d(o, "HomeQuestionInterview", function () {
          return re;
        }),
        n.d(o, "HomeQuote", function () {
          return ie;
        }),
        n.d(o, "HomeRegister", function () {
          return ae;
        }),
        n.d(o, "HomeSlide", function () {
          return ce;
        }),
        n.d(o, "HomeTrendInterview", function () {
          return le;
        }),
        n.d(o, "HomeTrendInterviewItem", function () {
          return se;
        }),
        n.d(o, "HomeTrendItem", function () {
          return ue;
        }),
        n.d(o, "HomeTrend", function () {
          return pe;
        }),
        n.d(o, "ResourceDocument", function () {
          return me;
        }),
        n.d(o, "ResourceFeedbackCard", function () {
          return de;
        }),
        n.d(o, "ResourceFeedback", function () {
          return fe;
        }),
        n.d(o, "ResourceInterview", function () {
          return he;
        }),
        n.d(o, "SharedArticleComment", function () {
          return be;
        }),
        n.d(o, "SharedArticleDescription", function () {
          return ge;
        });
      n(21), n(11), n(19), n(27), n(28);
      var r = n(5),
        c = n(6),
        l = (n(25), n(16), n(34), n(12), n(43), n(0)),
        m = n(94),
        d = n(262),
        f = n(181),
        h = n.n(f),
        v = n(75),
        x = n.n(v),
        y = n(182),
        w = n(9),
        k = n(2);
      "scrollRestoration" in window.history &&
        (Object(k.u)("manual"),
        window.addEventListener("beforeunload", function () {
          Object(k.u)("auto");
        }),
        window.addEventListener("load", function () {
          Object(k.u)("manual");
        }));
      function j(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function z(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? j(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : j(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var M = function () {};
      l.default.use(y.a);
      var O = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "active",
        scrollBehavior: function (t, e, n) {
          var o = !1,
            r = t !== e;
          n
            ? (o = n)
            : r &&
              (function (t) {
                var e = Object(k.g)(t);
                if (1 === e.length) {
                  var n = e[0].options;
                  return !1 !== (void 0 === n ? {} : n).scrollToTop;
                }
                return e.some(function (t) {
                  var e = t.options;
                  return e && e.scrollToTop;
                });
              })(t) &&
              (o = { x: 0, y: 0 });
          var c = window.$nuxt;
          return (
            (!r || (t.path === e.path && t.hash !== e.hash)) &&
              c.$nextTick(function () {
                return c.$emit("triggerScroll");
              }),
            new Promise(function (e) {
              c.$once("triggerScroll", function () {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (o = { selector: n });
                  } catch (t) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                e(o);
              });
            })
          );
        },
        routes: [
          {
            path: "/cau-hoi-thuong-gap",
            component: function () {
              return Object(k.m)(n.e(65).then(n.bind(null, 882)));
            },
            name: "cau-hoi-thuong-gap",
          },
          {
            path: "/chinh-sach-bao-mat",
            component: function () {
              return Object(k.m)(n.e(66).then(n.bind(null, 837)));
            },
            name: "chinh-sach-bao-mat",
          },
          {
            path: "/fpt",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(1), n.e(67)]).then(n.bind(null, 838))
              );
            },
            name: "fpt",
          },
          {
            path: "/khoa-hoc",
            component: function () {
              return Object(k.m)(n.e(70).then(n.bind(null, 839)));
            },
            name: "khoa-hoc",
          },
          {
            path: "/tai-nguyen",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(0), n.e(76)]).then(n.bind(null, 840))
              );
            },
            name: "tai-nguyen",
          },
          {
            path: "/tin-tuc",
            component: function () {
              return Object(k.m)(n.e(81).then(n.bind(null, 841)));
            },
            name: "tin-tuc",
          },
          {
            path: "/khoa-hoc/tim-kiem",
            component: function () {
              return Object(k.m)(n.e(71).then(n.bind(null, 842)));
            },
            name: "khoa-hoc-tim-kiem",
          },
          {
            path: "/phong-van/tim-kiem",
            component: function () {
              return Object(k.m)(n.e(73).then(n.bind(null, 843)));
            },
            name: "phong-van-tim-kiem",
          },
          {
            path: "/tai-lieu/tim-kiem",
            component: function () {
              return Object(k.m)(n.e(75).then(n.bind(null, 844)));
            },
            name: "tai-lieu-tim-kiem",
          },
          {
            path: "/tai-nguyen/lo-trinh-tro-thanh-backend",
            component: function () {
              return Object(k.m)(n.e(77).then(n.bind(null, 845)));
            },
            name: "tai-nguyen-lo-trinh-tro-thanh-backend",
          },
          {
            path: "/tai-nguyen/lo-trinh-tro-thanh-frontend",
            component: function () {
              return Object(k.m)(n.e(78).then(n.bind(null, 846)));
            },
            name: "tai-nguyen-lo-trinh-tro-thanh-frontend",
          },
          {
            path: "/tin-tuc/the-loai/:slug",
            component: function () {
              return Object(k.m)(n.e(82).then(n.bind(null, 847)));
            },
            name: "tin-tuc-the-loai-slug",
          },
          {
            path: "/bai-viet/:slug?",
            component: function () {
              return Object(k.m)(n.e(64).then(n.bind(null, 848)));
            },
            name: "bai-viet-slug",
          },
          {
            path: "/khoa-hoc/:slug?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(5), n.e(69)]).then(n.bind(null, 849))
              );
            },
            name: "khoa-hoc-slug",
          },
          {
            path: "/tang-kinh-cac/:slug",
            component: function () {
              return Object(k.m)(n.e(79).then(n.bind(null, 850)));
            },
            name: "tang-kinh-cac-slug",
          },
          {
            path: "/tin-tuc/:slug?",
            component: function () {
              return Object(k.m)(n.e(80).then(n.bind(null, 835)));
            },
            name: "tin-tuc-slug",
          },
          {
            path: "/bai-viet/:category?/:slug?",
            component: function () {
              return Object(k.m)(
                Promise.all([n.e(5), n.e(63)]).then(n.bind(null, 851))
              );
            },
            name: "bai-viet-category-slug",
          },
          {
            path: "/phong-van/:category?/:slug?",
            component: function () {
              return Object(k.m)(n.e(72).then(n.bind(null, 852)));
            },
            name: "phong-van-category-slug",
          },
          {
            path: "/tai-lieu/:category?/:slug?",
            component: function () {
              return Object(k.m)(n.e(74).then(n.bind(null, 836)));
            },
            name: "tai-lieu-category-slug",
          },
          {
            path: "/",
            component: function () {
              return Object(k.m)(n.e(68).then(n.bind(null, 853)));
            },
            name: "index",
          },
        ],
        fallback: !1,
      };
      function C(t, e) {
        var base = (e._app && e._app.basePath) || O.base,
          n = new y.a(z(z({}, O), {}, { base: base })),
          o = n.push;
        n.push = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : M,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return o.call(this, t, e, n);
        };
        var r = n.resolve.bind(n);
        return (
          (n.resolve = function (t, e, n) {
            return "string" == typeof t && (t = Object(w.f)(t)), r(t, e, n);
          }),
          n
        );
      }
      var T = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              o = e.props,
              r = n.$createElement;
            data.nuxtChild = !0;
            for (
              var c = n,
                l = n.$nuxt.nuxt.transitions,
                m = n.$nuxt.nuxt.defaultTransition,
                d = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && d++, (n = n.$parent);
            data.nuxtChildDepth = d;
            var f = l[d] || m,
              h = {};
            S.forEach(function (t) {
              void 0 !== f[t] && (h[t] = f[t]);
            });
            var v = {};
            N.forEach(function (t) {
              "function" == typeof f[t] && (v[t] = f[t].bind(c));
            });
            var x = v.beforeEnter;
            if (
              ((v.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  x)
                )
                  return x.call(c, t);
              }),
              !1 === f.css)
            ) {
              var y = v.leave;
              (!y || y.length < 2) &&
                (v.leave = function (t, e) {
                  y && y.call(c, t), c.$nextTick(e);
                });
            }
            var w = r("routerView", data);
            return (
              o.keepAlive &&
                (w = r("keep-alive", { props: o.keepAliveProps }, [w])),
              r("transition", { props: h, on: v }, [w])
            );
          },
        },
        S = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        N = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        D = {
          props: { error: { type: Object, required: !0 } },
          head: function () {
            return { title: this.error.message };
          },
          layout: "default",
        },
        A = n(10),
        I = Object(A.a)(
          D,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "el-container",
              [
                404 === t.error.statusCode
                  ? n("LazyBaseErrorNotFound", {
                      attrs: { reason: t.error.message },
                    })
                  : n("LazyBaseErrorOops", {
                      attrs: { reason: t.error.message },
                    }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        E = n(18),
        $ =
          (n(77),
          n(78),
          {
            name: "Nuxt",
            components: { NuxtChild: T, NuxtError: I },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: "default" },
            },
            errorCaptured: function (t) {
              this.displayingNuxtError &&
                ((this.errorFromNuxtError = t), this.$forceUpdate());
            },
            computed: {
              routerViewKey: function () {
                if (
                  void 0 !== this.nuxtChildKey ||
                  this.$route.matched.length > 1
                )
                  return (
                    this.nuxtChildKey ||
                    Object(k.c)(this.$route.matched[0].path)(this.$route.params)
                  );
                var t = Object(E.a)(this.$route.matched, 1)[0];
                if (!t) return this.$route.path;
                var e = t.components.default;
                if (e && e.options) {
                  var n = e.options;
                  if (n.key)
                    return "function" == typeof n.key
                      ? n.key(this.$route)
                      : n.key;
                }
                return /\/$/.test(t.path)
                  ? this.$route.path
                  : this.$route.path.replace(/\/$/, "");
              },
            },
            beforeCreate: function () {
              l.default.util.defineReactive(
                this,
                "nuxt",
                this.$root.$options.nuxt
              );
            },
            render: function (t) {
              var e = this;
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (e.errorFromNuxtError = !1);
                    }),
                    t("div", {}, [
                      t("h2", "An error occurred while showing the error page"),
                      t(
                        "p",
                        "Unfortunately an error occurred and while showing the error page another error occurred"
                      ),
                      t(
                        "p",
                        "Error details: ".concat(
                          this.errorFromNuxtError.toString()
                        )
                      ),
                      t("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (e.displayingNuxtError = !1);
                    }),
                    t(I, { props: { error: this.nuxt.err } }))
                : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props,
                  });
            },
          }),
        B =
          (n(35),
          n(30),
          n(31),
          n(32),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (t.show = !1),
                      t.$nextTick(function () {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              },
            },
            render: function (t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed,
                    },
                    style: { width: this.percent + "%", left: this.left },
                  })),
                e
              );
            },
          }),
        L =
          (n(318),
          Object(A.a)(B, undefined, undefined, !1, null, null, null).exports),
        P =
          (n(320),
          n(334),
          n(336),
          n(338),
          n(340),
          Object(A.a)(
            {},
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "app" },
                [
                  n("LazyBaseNavbar"),
                  t._v(" "),
                  n("nuxt", { staticClass: "app" }),
                  t._v(" "),
                  n("LazyBaseFooter"),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "9f38e65e",
            null
          ).exports),
        R =
          (n(342),
          Object(A.a)(
            {},
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "app" },
                [
                  n("LazyBaseNavbar"),
                  t._v(" "),
                  n("nuxt", { staticClass: "app" }),
                  t._v(" "),
                  n("LazyBaseFooter"),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "17c3e597",
            null
          ).exports),
        Y =
          (n(344),
          Object(A.a)(
            {},
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "app" }, [e("nuxt")], 1);
            },
            [],
            !1,
            null,
            "03a5cea8",
            null
          ).exports),
        U = n(96),
        F = n(95),
        Q = n(48),
        H = {
          filters: {
            getChapterName: function (t) {
              var e, n;
              return (
                (null == t ||
                null === (e = t[0]) ||
                void 0 === e ||
                null === (n = e.chapter) ||
                void 0 === n
                  ? void 0
                  : n.name) || "Error"
              );
            },
          },
          mixins: [U.a, F.a],
          data: function () {
            return {
              courses: [],
              category: "bai-viet",
              isShow: !1,
              CONFIG_SEO: Q.b,
              message:
                "https://kungfutech.edu.vn/bai-viet/chia-se-kinh-nghiem-khi-di-phong-van",
            };
          },
          created: function () {
            this.$device.isMobile || (this.isShow = !0);
          },
          methods: {
            onClickBack: function () {
              this.isShow = !this.isShow;
            },
            handleSelect: function (t) {
              this.$device.isMobile && (this.isShow = !1),
                this.$router.push(
                  "/bai-viet/".concat(this.category, "/").concat(t)
                );
            },
            handleCopy: function () {
              this.$notify({ title: "Sao chép thành công", type: "success" });
            },
          },
        },
        G =
          (n(347),
          Object(A.a)(
            H,
            function () {
              var t = this,
                e = t.$createElement,
                o = t._self._c || e;
              return o(
                "div",
                { staticClass: "flex wrap-all" },
                [
                  o(
                    "el-main",
                    { staticClass: "pa-0" },
                    [
                      o("BaseNavbar"),
                      t._v(" "),
                      o(
                        "div",
                        { staticClass: "container" },
                        [
                          o(
                            "div",
                            { staticClass: "sidebar hidden-md-and-down" },
                            [
                              o(
                                "div",
                                {
                                  staticClass:
                                    "sidebar__share flex flex-direction-column justify-content-center align-items-center",
                                },
                                [
                                  o(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Copy link bài viết",
                                        placement: "left",
                                      },
                                    },
                                    [
                                      o("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.message,
                                            expression: "message",
                                          },
                                        ],
                                        attrs: { type: "text" },
                                        domProps: { value: t.message },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              (t.message = e.target.value);
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      o(
                                        "a",
                                        {
                                          directives: [
                                            {
                                              name: "clipboard",
                                              rawName: "v-clipboard:copy",
                                              value: t.message,
                                              expression: "message",
                                              arg: "copy",
                                            },
                                          ],
                                          on: { click: t.handleCopy },
                                        },
                                        [
                                          o("img", {
                                            staticClass: "article__share-copy",
                                            attrs: {
                                              src: n(346),
                                              alt: "copy",
                                              width: "23",
                                              height: "23",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  o(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content:
                                          "Chia sẻ bài viết lên facebook",
                                        placement: "left",
                                      },
                                    },
                                    [
                                      o(
                                        "a",
                                        {
                                          staticClass: "mt-4",
                                          attrs: {
                                            href:
                                              "https://www.facebook.com/share.php?u=" +
                                              t.CONFIG_SEO.URL +
                                              t.$route.fullPath +
                                              "&p[images][0]=&p[title]=" +
                                              t.getTitle +
                                              "&p[summary]=" +
                                              t.getDescription,
                                            target: "_blank",
                                          },
                                        },
                                        [
                                          o("img", {
                                            staticClass: "article__share-fb",
                                            attrs: {
                                              src: n(279),
                                              alt: "facebook",
                                              width: "23",
                                              height: "23",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          o(
                            "div",
                            { staticClass: "sidebar--mobile hidden-md-and-up" },
                            [
                              o(
                                "a",
                                {
                                  attrs: {
                                    rel: "noopener",
                                    target: "_blank",
                                    href:
                                      "https://www.facebook.com/share.php?u=" +
                                      t.CONFIG_SEO.URL +
                                      t.$route.fullPath +
                                      "&p[images][0]=&p[title]=" +
                                      t.getTitle +
                                      "&p[summary]=" +
                                      t.getDescription,
                                  },
                                },
                                [
                                  o(
                                    "div",
                                    { staticClass: "sidebar__items pl-10" },
                                    [
                                      o("img", {
                                        attrs: {
                                          src: n(216),
                                          alt: "Chia sẻ Facebook",
                                          width: "26",
                                          height: "26",
                                        },
                                      }),
                                      t._v(" "),
                                      o(
                                        "span",
                                        {
                                          staticClass: "sidebar__items--title",
                                        },
                                        [
                                          t._v("Chia sẻ "),
                                          o("br"),
                                          t._v("\n              Facebook"),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              o(
                                "a",
                                {
                                  attrs: {
                                    rel: "noopener",
                                    target: "_blank",
                                    href:
                                      "https://www.linkedin.com/share?url=" +
                                      t.CONFIG_SEO.URL +
                                      t.$route.fullPath +
                                      "&p[images][0]=&p[title]=" +
                                      t.getTitle +
                                      "&p[summary]=" +
                                      t.getDescription,
                                  },
                                },
                                [
                                  o("div", { staticClass: "sidebar__items" }, [
                                    o("img", {
                                      attrs: {
                                        src: n(217),
                                        alt: "Chia sẻ Linkedin",
                                        width: "26",
                                        height: "26",
                                      },
                                    }),
                                    t._v(" "),
                                    o(
                                      "span",
                                      { staticClass: "sidebar__items--title" },
                                      [
                                        t._v("Chia sẻ "),
                                        o("br"),
                                        t._v("\n              Linkedin"),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              o(
                                "a",
                                {
                                  attrs: {
                                    rel: "noopener",
                                    target: "_blank",
                                    href:
                                      "https://twitter.com/share?url=" +
                                      t.CONFIG_SEO.URL +
                                      t.$route.fullPath +
                                      "&p[images][0]=&p[title]=" +
                                      t.getTitle +
                                      "&p[summary]=" +
                                      t.getDescription,
                                  },
                                },
                                [
                                  o(
                                    "div",
                                    { staticClass: "sidebar__items pr-10" },
                                    [
                                      o("img", {
                                        attrs: {
                                          src: n(218),
                                          alt: "Chia sẻ Twitter",
                                          width: "26",
                                          height: "26",
                                        },
                                      }),
                                      t._v(" "),
                                      o(
                                        "span",
                                        {
                                          staticClass: "sidebar__items--title",
                                        },
                                        [
                                          t._v("Chia sẻ "),
                                          o("br"),
                                          t._v("\n              Twitter"),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          o("nuxt", { staticClass: "app" }),
                        ],
                        1
                      ),
                      t._v(" "),
                      o("LazyBaseFooter"),
                    ],
                    1
                  ),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          )),
        W = G.exports;
      installComponents(G, { BaseNavbar: n(260).default });
      var K = [
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o("div", { staticClass: "sidebar__items" }, [
              o("img", {
                attrs: {
                  src: n(216),
                  alt: "Chia sẻ Facebook",
                  width: "26",
                  height: "26",
                },
              }),
              t._v(" "),
              o("span", { staticClass: "sidebar__items--title" }, [
                t._v("Chia sẻ "),
                o("br"),
                t._v("\n              Facebook"),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o("div", { staticClass: "sidebar__items" }, [
              o("img", {
                attrs: {
                  src: n(217),
                  alt: "Chia sẻ Linkedin",
                  width: "26",
                  height: "26",
                },
              }),
              t._v(" "),
              o("span", { staticClass: "sidebar__items--title" }, [
                t._v("Chia sẻ "),
                o("br"),
                t._v("\n              Linkedin"),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o("div", { staticClass: "sidebar__items pr-10" }, [
              o("img", {
                attrs: {
                  src: n(218),
                  alt: "Chia sẻ Twitter",
                  width: "26",
                  height: "26",
                },
              }),
              t._v(" "),
              o("span", { staticClass: "sidebar__items--title" }, [
                t._v("Chia sẻ "),
                o("br"),
                t._v("\n              Twitter"),
              ]),
            ]);
          },
        ],
        Z = {
          mixins: [U.a, F.a],
          data: function () {
            return {
              courses: [],
              category: "bai-viet",
              isShow: !1,
              isShowMb: !1,
              CONFIG_SEO: Q.b,
            };
          },
          created: function () {
            this.$device.isMobile ? (this.isShowMb = !1) : (this.isShow = !0);
          },
          methods: {
            onClickBack: function () {
              (this.isShow = !this.isShow), (this.isShowMb = !this.isShowMb);
            },
          },
        },
        V =
          (n(373),
          Object(A.a)(
            Z,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "wrap-all" },
                [
                  n("BaseNavbar"),
                  t._v(" "),
                  n(
                    "main",
                    [
                      n(
                        "div",
                        { staticClass: "container" },
                        [
                          n(
                            "div",
                            { staticClass: "sidebar--mobile hidden-md-and-up" },
                            [
                              n(
                                "a",
                                {
                                  attrs: {
                                    rel: "noopener",
                                    target: "_blank",
                                    href:
                                      "https://www.facebook.com/share.php?u=" +
                                      t.CONFIG_SEO.URL +
                                      t.$route.fullPath +
                                      "&p[images][0]=&p[title]=" +
                                      t.getTitle +
                                      "&p[summary]=" +
                                      t.getDescription,
                                  },
                                },
                                [t._m(0)]
                              ),
                              t._v(" "),
                              n(
                                "a",
                                {
                                  attrs: {
                                    rel: "noopener",
                                    target: "_blank",
                                    href:
                                      "https://www.linkedin.com/share?url=" +
                                      t.CONFIG_SEO.URL +
                                      t.$route.fullPath +
                                      "&p[images][0]=&p[title]=" +
                                      t.getTitle +
                                      "&p[summary]=" +
                                      t.getDescription,
                                  },
                                },
                                [t._m(1)]
                              ),
                              t._v(" "),
                              n(
                                "a",
                                {
                                  attrs: {
                                    rel: "noopener",
                                    target: "_blank",
                                    href:
                                      "https://twitter.com/share?url=" +
                                      t.CONFIG_SEO.URL +
                                      t.$route.fullPath +
                                      "&p[images][0]=&p[title]=" +
                                      t.getTitle +
                                      "&p[summary]=" +
                                      t.getDescription,
                                  },
                                },
                                [t._m(2)]
                              ),
                            ]
                          ),
                          t._v(" "),
                          n("nuxt", { staticClass: "app" }),
                        ],
                        1
                      ),
                      t._v(" "),
                      n("LazyBaseFooter"),
                    ],
                    1
                  ),
                ],
                1
              );
            },
            K,
            !1,
            null,
            null,
            null
          )),
        X = V.exports;
      function J(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return tt(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tt(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (r = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function tt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      installComponents(V, { BaseNavbar: n(260).default });
      var et = {
          "_default.amp": Object(k.s)(P),
          _default: Object(k.s)(R),
          _empty: Object(k.s)(Y),
          _interview: Object(k.s)(W),
          _learning: Object(k.s)(X),
        },
        nt = {
          render: function (t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              o = t(this.layout || "nuxt"),
              r = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [o]
              ),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [r]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [n, c]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            l.default.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading;
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(k.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              t.$loading.start(),
                              (o = n.map(function (e) {
                                var p = [];
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(k.q)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var n,
                                    o = J(
                                      Object(k.e)(e.$vnode.componentInstance)
                                    );
                                  try {
                                    for (o.s(); !(n = o.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    o.e(t);
                                  } finally {
                                    o.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(k.q)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          l.default.set(e.$data, n, t[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(o)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(k.k)(e.t0),
                              t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var t = (I.options || I).layout;
                "function" == typeof t && (t = t(this.context)),
                  this.setLayout(t);
              }
            },
            setLayout: function (t) {
              return (
                (t && et["_" + t]) || (t = "default"),
                (this.layoutName = t),
                (this.layout = et["_" + t]),
                this.layout
              );
            },
            loadLayout: function (t) {
              return (
                (t && et["_" + t]) || (t = "default"),
                Promise.resolve(et["_" + t])
              );
            },
          },
          components: { NuxtLoading: L },
        };
      n(76), n(49);
      function ot(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return it(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return it(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (r = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function it(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      l.default.use(m.a);
      var at = ["state", "getters", "actions", "mutations"],
        ct = {};
      (ct.modules = ct.modules || {}),
        (function (t, e) {
          t = t.default || t;
          var n = e.replace(/\.(js|mjs)$/, "").split("/"),
            o = n[n.length - 1],
            r = "store/".concat(e);
          if (
            ((t =
              "state" === o
                ? (function (t, e) {
                    if ("function" != typeof t) {
                      console.warn(
                        "".concat(
                          e,
                          " should export a method that returns an object"
                        )
                      );
                      var n = Object.assign({}, t);
                      return function () {
                        return n;
                      };
                    }
                    return st(t, e);
                  })(t, r)
                : st(t, r)),
            at.includes(o))
          ) {
            var c = o;
            pt(ut(ct, n, { isProperty: !0 }), t, c);
          } else {
            "index" === o && (n.pop(), (o = n[n.length - 1]));
            var l,
              m = ut(ct, n),
              d = ot(at);
            try {
              for (d.s(); !(l = d.n()).done; ) {
                var f = l.value;
                pt(m, t[f], f);
              }
            } catch (t) {
              d.e(t);
            } finally {
              d.f();
            }
            !1 === t.namespaced && delete m.namespaced;
          }
        })(n(375), "auth.js");
      var lt =
        ct instanceof Function
          ? ct
          : function () {
              return new m.a.Store(Object.assign({ strict: !1 }, ct));
            };
      function st(t, e) {
        if (t.state && "function" != typeof t.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e)
          );
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function () {
              return n;
            },
          });
        }
        return t;
      }
      function ut(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = n.isProperty,
          r = void 0 !== o && o;
        if (!e.length || (r && 1 === e.length)) return t;
        var c = e.shift();
        return (
          (t.modules[c] = t.modules[c] || {}),
          (t.modules[c].namespaced = !0),
          (t.modules[c].modules = t.modules[c].modules || {}),
          ut(t.modules[c], e, { isProperty: r })
        );
      }
      function pt(t, e, n) {
        e &&
          ("state" === n
            ? (t.state = e || t.state)
            : (t[n] = Object.assign({}, t[n], e)));
      }
      n(100);
      var mt = function () {
          return n
            .e(20)
            .then(n.bind(null, 883))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ft = function () {
          return n
            .e(21)
            .then(n.bind(null, 884))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ht = function () {
          return n
            .e(22)
            .then(n.bind(null, 885))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        bt = function () {
          return n
            .e(23)
            .then(n.bind(null, 886))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        gt = function () {
          return n
            .e(34)
            .then(n.bind(null, 854))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        vt = function () {
          return n
            .e(35)
            .then(n.bind(null, 855))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        xt = function () {
          return n
            .e(51)
            .then(n.bind(null, 856))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        yt = function () {
          return n
            .e(52)
            .then(n.bind(null, 857))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        wt = function () {
          return n
            .e(53)
            .then(n.bind(null, 858))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        kt = function () {
          return n
            .e(58)
            .then(n.bind(null, 887))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        jt = function () {
          return n
            .e(59)
            .then(n.bind(null, 888))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        _t = function () {
          return n
            .e(60)
            .then(n.bind(null, 557))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        zt = function () {
          return n
            .e(9)
            .then(n.bind(null, 859))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Mt = function () {
          return n
            .e(10)
            .then(n.bind(null, 860))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Ot = function () {
          return n
            .e(11)
            .then(n.bind(null, 861))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Ct = function () {
          return n
            .e(12)
            .then(n.bind(null, 862))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Tt = function () {
          return n
            .e(13)
            .then(n.bind(null, 863))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        St = function () {
          return n
            .e(14)
            .then(n.bind(null, 864))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Nt = function () {
          return Promise.resolve()
            .then(n.bind(null, 260))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Dt = function () {
          return n
            .e(15)
            .then(n.bind(null, 865))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        At = function () {
          return n
            .e(16)
            .then(n.bind(null, 866))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        It = function () {
          return n
            .e(17)
            .then(n.bind(null, 867))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Et = function () {
          return n
            .e(18)
            .then(n.bind(null, 868))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        $t = function () {
          return n
            .e(19)
            .then(n.bind(null, 869))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Bt = function () {
          return n
            .e(25)
            .then(n.bind(null, 537))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Lt = function () {
          return n
            .e(24)
            .then(n.bind(null, 538))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Pt = function () {
          return Promise.resolve()
            .then(n.bind(null, 276))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Rt = function () {
          return n
            .e(27)
            .then(n.bind(null, 676))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Yt = function () {
          return n
            .e(26)
            .then(n.bind(null, 677))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Ut = function () {
          return n
            .e(28)
            .then(n.bind(null, 522))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Ft = function () {
          return n
            .e(29)
            .then(n.bind(null, 577))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Qt = function () {
          return n
            .e(31)
            .then(n.bind(null, 674))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Ht = function () {
          return n
            .e(1)
            .then(n.bind(null, 684))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        qt = function () {
          return n
            .e(32)
            .then(n.bind(null, 673))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Gt = function () {
          return Promise.all([n.e(1), n.e(30)])
            .then(n.bind(null, 683))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Wt = function () {
          return n
            .e(33)
            .then(n.bind(null, 545))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Kt = function () {
          return n
            .e(37)
            .then(n.bind(null, 579))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Zt = function () {
          return Promise.all([n.e(0), n.e(40)])
            .then(n.bind(null, 678))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Vt = function () {
          return n
            .e(38)
            .then(n.bind(null, 679))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Xt = function () {
          return n
            .e(3)
            .then(n.bind(null, 810))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        Jt = function () {
          return n
            .e(39)
            .then(n.bind(null, 680))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        te = function () {
          return Promise.all([n.e(0), n.e(3), n.e(36)])
            .then(n.bind(null, 870))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ee = function () {
          return Promise.all([n.e(0), n.e(2), n.e(41)])
            .then(n.bind(null, 871))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ne = function () {
          return n
            .e(4)
            .then(n.bind(null, 872))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        oe = function () {
          return n
            .e(42)
            .then(n.bind(null, 873))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        re = function () {
          return Promise.all([n.e(0), n.e(2), n.e(43)])
            .then(n.bind(null, 874))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ie = function () {
          return n
            .e(44)
            .then(n.bind(null, 889))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ae = function () {
          return n
            .e(45)
            .then(n.bind(null, 875))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ce = function () {
          return n
            .e(46)
            .then(n.bind(null, 876))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        le = function () {
          return n
            .e(48)
            .then(n.bind(null, 681))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        se = function () {
          return n
            .e(49)
            .then(n.bind(null, 580))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ue = function () {
          return n
            .e(50)
            .then(n.bind(null, 682))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        pe = function () {
          return Promise.all([n.e(2), n.e(47)])
            .then(n.bind(null, 877))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        me = function () {
          return n
            .e(54)
            .then(n.bind(null, 878))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        de = function () {
          return n
            .e(56)
            .then(n.bind(null, 578))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        fe = function () {
          return Promise.all([n.e(0), n.e(55)])
            .then(n.bind(null, 675))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        he = function () {
          return n
            .e(57)
            .then(n.bind(null, 879))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        be = function () {
          return n
            .e(61)
            .then(n.bind(null, 880))
            .then(function (t) {
              return ve(t.default || t);
            });
        },
        ge = function () {
          return n
            .e(62)
            .then(n.bind(null, 881))
            .then(function (t) {
              return ve(t.default || t);
            });
        };
      function ve(t) {
        if (!t || !t.functional) return t;
        var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
        return {
          render: function (n) {
            var o = {},
              r = {};
            for (var c in this.$attrs)
              e.includes(c) ? (r[c] = this.$attrs[c]) : (o[c] = this.$attrs[c]);
            return n(
              t,
              {
                on: this.$listeners,
                attrs: o,
                props: r,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          },
        };
      }
      for (var xe in o)
        l.default.component(xe, o[xe]), l.default.component("Lazy" + xe, o[xe]);
      var ye = n(97),
        we = ye.b;
      function ke(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function je(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ke(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : ke(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var _e = (function () {
        var t = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n, o, r;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (n = (e.$config && e.$config["google-adsense"]) || {}),
                      (o = je(
                        je(
                          {},
                          {
                            tag: "adsbygoogle",
                            id: "ca-pub-7091146456010058",
                            pageLevelAds: !1,
                            includeQuery: !1,
                            analyticsUacct: "",
                            analyticsDomainName: "",
                            overlayBottom: !1,
                            test: !1,
                            onPageLoad: !1,
                            pauseOnLoad: !1,
                          }
                        ),
                        n
                      )),
                      e.isDev,
                      o.test && (o.id = "ca-google"),
                      (r = {
                        render: function (t) {
                          return t("ins", {
                            class: ["adsbygoogle"],
                            style: this.adStyle,
                            attrs: {
                              "data-ad-client": this.adClient,
                              "data-ad-slot": this.adSlot || null,
                              "data-ad-format": this.adFormat,
                              "data-ad-region": this.show
                                ? this.adRegion()
                                : null,
                              "data-ad-layout": this.adLayout || null,
                              "data-ad-layout-key": this.adLayoutKey || null,
                              "data-page-url": this.pageUrl
                                ? this.pageUrl
                                : null,
                              "data-analytics-uacct": this.analyticsUacct
                                ? this.analyticsUacct
                                : null,
                              "data-analytics-domain-name": this
                                .analyticsDomainName
                                ? this.analyticsDomainName
                                : null,
                              "data-adtest": o.test ? "on" : null,
                              "data-adsbygoogle-status": this.show ? null : "",
                              "data-full-width-responsive":
                                this.adFullWidthResponsive || null,
                            },
                            domProps: { innerHTML: this.show ? "" : " " },
                            key: Math.random(),
                          });
                        },
                        props: {
                          adClient: { type: String, default: o.id },
                          adSlot: { type: String },
                          adFormat: { type: String, default: "auto" },
                          adLayout: { type: String },
                          adLayoutKey: { type: String },
                          adStyle: {
                            type: Object,
                            default: function () {
                              return { display: "block" };
                            },
                          },
                          adFullWidthResponsive: { type: Boolean, default: !1 },
                          pageUrl: { type: String },
                          analyticsUacct: {
                            type: String,
                            default: o.analyticsUacct,
                          },
                          analyticsDomainName: {
                            type: String,
                            default: o.analyticsDomainName,
                          },
                          includeQuery: {
                            type: Boolean,
                            default: o.includeQuery,
                          },
                        },
                        data: function () {
                          return { show: !0 };
                        },
                        mounted: function () {
                          this.showAd();
                        },
                        watch: {
                          $route: function (t, e) {
                            if (
                              (!this.$el || this.$el.isConnected) &&
                              t.fullPath !== e.fullPath
                            ) {
                              var n = Object.keys,
                                o = t.query,
                                r = e.query,
                                c = !1;
                              t.path !== e.path
                                ? (c = !0)
                                : this.includeQuery &&
                                  (c =
                                    n(o).length !== n(r).length ||
                                    !n(o).every(function (t) {
                                      return o[t] === r[t];
                                    })),
                                c && this.updateAd();
                            }
                          },
                        },
                        methods: {
                          adRegion: function () {
                            return "page-" + Math.random();
                          },
                          updateAd: function () {
                            this.isServer ||
                              ((this.show = !1), this.$nextTick(this.showAd));
                          },
                          showAd: function () {
                            (this.show = !0),
                              console.log("updateAd"),
                              this.$nextTick(function () {
                                try {
                                  (window.adsbygoogle =
                                    window.adsbygoogle || []).push({});
                                } catch (t) {
                                  console.error(t);
                                }
                              });
                          },
                        },
                      }),
                      l.default.component(o.tag, r);
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      n(98);
      var ze = "dataLayer",
        Me = "GTM-M8DSZDG";
      var Oe = function (t, e) {
          var n = "GTM-M8DSZDG",
            o = ((t.$config && t.$config.gtm) || {}).id,
            r = (function (t, e) {
              return {
                init: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Me;
                  !e[t] &&
                    window._gtm_inject &&
                    (window._gtm_inject(t), (e[t] = !0));
                },
                push: function (t) {
                  window[ze] || (window[ze] = []), window[ze].push(t);
                },
              };
            })(0, Object(c.a)({}, n, !0));
          o && o !== n && r.init(o),
            (t.$gtm = r),
            e("gtm", t.$gtm),
            (function (t) {
              t.app.router.afterEach(function (e) {
                setTimeout(function () {
                  t.$gtm.push(
                    e.gtm || {
                      routeName: e.name,
                      pageType: "PageView",
                      pageUrl: "" + e.fullPath,
                      pageTitle:
                        ("undefined" != typeof document && document.title) ||
                        "",
                      event: "nuxtRoute",
                    }
                  );
                }, 250);
              });
            })(t);
        },
        Ce = n(15),
        Te = (n(67), n(92)),
        Se = n(183),
        Ne = n.n(Se);
      function De(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Ae(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Ie(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ie(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (r = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function Ie(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var Ee = ["class-name", "class", "className", "style"],
        $e = /^@|^v-on:/,
        Be = /^:|^v-bind:/,
        Le = /^v-model/,
        Pe = ["select", "textarea", "input"];
      function Re(code, t) {
        return new Function("with(this) { return (" + code + ") }").call(t);
      }
      function Ye(t, e, n) {
        if ("text" === t.type) return t.value;
        var o,
          r = (function (t, e, n) {
            var data = {};
            return (
              (t.children || []).forEach(function (t) {
                if (Qe(t) && !Fe(t)) {
                  data.scopedSlots = data.scopedSlots || {};
                  var template = t,
                    o = He(template),
                    r = template.content.map(function (t) {
                      return Ye(t, e, n);
                    });
                  data.scopedSlots[o] = function () {
                    return r;
                  };
                }
              }),
              data
            );
          })(t || {}, e, n),
          c = (function (t, e) {
            var n = t.tag,
              o = t.props;
            return Object.keys(o).reduce(
              function (data, t) {
                var r = t.replace(/.*:/, ""),
                  c = Ee.includes(r) ? data : data.attrs,
                  l = o[t],
                  m = Ne.a.find(Ne.a.html, t).attribute,
                  d = Pe.includes(n);
                if (Le.test(t) && l in e && !d) {
                  var f = t
                      .replace(Le, "")
                      .split(".")
                      .filter(function (t) {
                        return t;
                      })
                      .reduce(function (t, e) {
                        return (t[e] = !0), t;
                      }, {}),
                    h = f.lazy ? "change" : "input",
                    v = f.number
                      ? function (t) {
                          return +t;
                        }
                      : f.trim
                      ? function (t) {
                          return t.trim();
                        }
                      : function (t) {
                          return t;
                        };
                  (c.value = Re(l, e)),
                    (data.on = data.on || {}),
                    (data.on[h] = function (t) {
                      return (e[l] = v(t));
                    });
                } else if ("v-bind" === t) {
                  var x = l in e ? e[l] : Re(l, e);
                  c = Object.assign(c, x);
                } else
                  $e.test(t)
                    ? ((t = t.replace($e, "")),
                      (data.on = data.on || {}),
                      (data.on[t] = Re(l, e)))
                    : Be.test(t)
                    ? (c[(t = t.replace(Be, ""))] = l in e ? e[l] : Re(l, e))
                    : Array.isArray(l)
                    ? (c[m] = l.join(" "))
                    : (c[m] = l);
                return data;
              },
              { attrs: {} }
            );
          })(t || {}, n),
          data = Object.assign({}, r, c),
          l = [],
          m = Ae(t.children);
        try {
          for (m.s(); !(o = m.n()).done; ) {
            var d = o.value;
            if (!Qe(d) || Fe(d)) {
              var f = Fe(d) ? d.content : [d];
              l.push.apply(
                l,
                Object(Te.a)(
                  f.map(function (t) {
                    return Ye(t, e, n);
                  })
                )
              );
            }
          }
        } catch (t) {
          m.e(t);
        } finally {
          m.f();
        }
        return e(t.tag, data, l);
      }
      var Ue = "default";
      function Fe(t) {
        return Qe(t) && He(t) === Ue;
      }
      function Qe(t) {
        return "template" === t.tag;
      }
      function He(t) {
        for (var e = "", n = 0, o = Object.keys(t.props); n < o.length; n++) {
          var r = o[n];
          if (r.startsWith("#") || r.startsWith("v-slot:")) {
            e = r.split(/[:#]/, 2)[1];
            break;
          }
        }
        return e || Ue;
      }
      var qe = {
          name: "NuxtContent",
          functional: !0,
          props: {
            document: { required: !0 },
            tag: { type: String, default: "div" },
          },
          render: function (t, e) {
            var data = e.data,
              n = e.props,
              o = n.document,
              r = n.tag,
              body = (o || {}).body;
            if (body && body.children && Array.isArray(body.children)) {
              var l = [];
              if (Array.isArray(data.class)) l = data.class;
              else if ("object" === Object(Ce.a)(data.class)) {
                l = Object.keys(data.class).filter(function (t) {
                  return data.class[t];
                });
              } else l = [data.class];
              return (
                (data.class = l.concat("nuxt-content")),
                (data.props = Object.assign(
                  (function (t) {
                    for (var i = 1; i < arguments.length; i++) {
                      var source = null != arguments[i] ? arguments[i] : {};
                      i % 2
                        ? De(Object(source), !0).forEach(function (e) {
                            Object(c.a)(t, e, source[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(source)
                          )
                        : De(Object(source)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(source, e)
                            );
                          });
                    }
                    return t;
                  })({}, body.props),
                  data.props
                )),
                t(
                  r,
                  data,
                  body.children.map(function (e) {
                    return Ye(e, t, o);
                  })
                )
              );
            }
          },
        },
        Ge = n(127),
        We = n(128),
        Ke =
          (n(137),
          (function () {
            function t(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                o = n.deep,
                r = void 0 !== o && o,
                c = n.text,
                text = void 0 !== c && c;
              Object(Ge.a)(this, t),
                (this.url = e),
                (this.params = { deep: r, text: text });
            }
            return (
              Object(We.a)(t, [
                {
                  key: "only",
                  value: function (t) {
                    return (this.params.only = t), this;
                  },
                },
                {
                  key: "without",
                  value: function (t) {
                    return (this.params.without = t), this;
                  },
                },
                {
                  key: "sortBy",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "asc";
                    return (
                      (this.params.sortBy = this.params.sortBy || []),
                      this.params.sortBy.push(Object(c.a)({}, t, e)),
                      this
                    );
                  },
                },
                {
                  key: "where",
                  value: function (t) {
                    return (this.params.where = t), this;
                  },
                },
                {
                  key: "search",
                  value: function (t, e) {
                    return (this.params.search = { query: t, value: e }), this;
                  },
                },
                {
                  key: "surround",
                  value: function (t, e) {
                    return (
                      (this.params.surround = { slugOrPath: t, options: e }),
                      this
                    );
                  },
                },
                {
                  key: "limit",
                  value: function (t) {
                    return (this.params.limit = t), this;
                  },
                },
                {
                  key: "skip",
                  value: function (t) {
                    return (this.params.skip = t), this;
                  },
                },
                {
                  key: "fetch",
                  value: (function (t) {
                    function e() {
                      return t.apply(this, arguments);
                    }
                    return (
                      (e.toString = function () {
                        return t.toString();
                      }),
                      e
                    );
                  })(function () {
                    return fetch(this.url, {
                      method: "POST",
                      body: JSON.stringify(this.params),
                      headers: { "Content-Type": "application/json" },
                    }).then(function (t) {
                      if (!t.ok) {
                        var e = new Error(t.statusText);
                        throw ((e.response = t), e);
                      }
                      return t.json();
                    });
                  }),
                },
              ]),
              t
            );
          })());
      l.default.component(qe.name, qe);
      var Ze = function (t, e) {
          var n = function () {
            var t,
              e = [];
            Array.from(arguments).forEach(function (n) {
              "string" == typeof n
                ? e.push(n)
                : "object" === Object(Ce.a)(n) && (t = n);
            });
            var path = e.join("/").replace(/\/+/g, "/");
            return (
              path.startsWith("/") || (path = "/".concat(path)),
              new Ke("/_content".concat(path), t)
            );
          };
          e("content", n), (t.$content = n);
        },
        Ve = (n(265), n(184)),
        Xe = n.n(Ve);
      function Je(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return tn(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tn(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (r = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function tn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function en(t, e, n) {
        return t.find(function (t) {
          return n ? t[e] === n : t[e];
        });
      }
      var meta = n(266),
        nn = function (t) {
          !(function (t, e) {
            if ("function" != typeof t)
              for (var n in e) {
                var o = e[n];
                if (Array.isArray(o)) {
                  t[n] = t[n] || [];
                  var r,
                    c = Je(o);
                  try {
                    for (c.s(); !(r = c.n()).done; ) {
                      var l = r.value;
                      (l.hid && en(t[n], "hid", l.hid)) ||
                        (l.name && en(t[n], "name", l.name)) ||
                        t[n].push(l);
                    }
                  } catch (t) {
                    c.e(t);
                  } finally {
                    c.f();
                  }
                } else if ("object" === Object(Ce.a)(o))
                  for (var m in ((t[n] = t[n] || {}), o)) t[n][m] = o[m];
                else void 0 === t[n] && (t[n] = o);
              }
            else
              console.warn(
                "Cannot merge meta. Avoid using head as a function!"
              );
          })(t.app.head, meta);
        },
        on = function (t, e) {
          return rn.apply(this, arguments);
        };
      function rn() {
        return (rn = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (o = {
                      "64x64": "/_nuxt/icons/icon_64x64.77c29a.png",
                      "120x120": "/_nuxt/icons/icon_120x120.77c29a.png",
                      "144x144": "/_nuxt/icons/icon_144x144.77c29a.png",
                      "152x152": "/_nuxt/icons/icon_152x152.77c29a.png",
                      "192x192": "/_nuxt/icons/icon_192x192.77c29a.png",
                      "384x384": "/_nuxt/icons/icon_384x384.77c29a.png",
                      "512x512": "/_nuxt/icons/icon_512x512.77c29a.png",
                      ipad_1536x2048:
                        "/_nuxt/icons/splash_ipad_1536x2048.77c29a.png",
                      ipadpro9_1536x2048:
                        "/_nuxt/icons/splash_ipadpro9_1536x2048.77c29a.png",
                      ipadpro10_1668x2224:
                        "/_nuxt/icons/splash_ipadpro10_1668x2224.77c29a.png",
                      ipadpro12_2048x2732:
                        "/_nuxt/icons/splash_ipadpro12_2048x2732.77c29a.png",
                      iphonese_640x1136:
                        "/_nuxt/icons/splash_iphonese_640x1136.77c29a.png",
                      iphone6_50x1334:
                        "/_nuxt/icons/splash_iphone6_50x1334.77c29a.png",
                      iphoneplus_1080x1920:
                        "/_nuxt/icons/splash_iphoneplus_1080x1920.77c29a.png",
                      iphonex_1125x2436:
                        "/_nuxt/icons/splash_iphonex_1125x2436.77c29a.png",
                      iphonexr_828x1792:
                        "/_nuxt/icons/splash_iphonexr_828x1792.77c29a.png",
                      iphonexsmax_1242x2688:
                        "/_nuxt/icons/splash_iphonexsmax_1242x2688.77c29a.png",
                    }),
                      n("icon", function (t) {
                        return o[t + "x" + t] || "";
                      });
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var an = n(58),
        cn = n.n(an),
        ln = n(64);
      function sn(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function un(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? sn(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : sn(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function pn(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return mn(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return mn(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (r = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function mn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      for (
        var dn = {
            setBaseURL: function (t) {
              this.defaults.baseURL = t;
            },
            setHeader: function (t, e) {
              var n,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = pn(Array.isArray(o) ? o : [o]);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var c = n.value;
                  e
                    ? (this.defaults.headers[c][t] = e)
                    : delete this.defaults.headers[c][t];
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
            },
            setToken: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                o = t ? (e ? e + " " : "") + t : null;
              this.setHeader("Authorization", o, n);
            },
            onRequest: function (t) {
              this.interceptors.request.use(function (e) {
                return t(e) || e;
              });
            },
            onResponse: function (t) {
              this.interceptors.response.use(function (e) {
                return t(e) || e;
              });
            },
            onRequestError: function (t) {
              this.interceptors.request.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onResponseError: function (t) {
              this.interceptors.response.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onError: function (t) {
              this.onRequestError(t), this.onResponseError(t);
            },
            create: function (t) {
              return vn(Object(ln.a)(t, this.defaults));
            },
          },
          fn = function () {
            var t = bn[hn];
            dn["$" + t] = function () {
              return this[t].apply(this, arguments).then(function (t) {
                return t && t.data;
              });
            };
          },
          hn = 0,
          bn = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch",
          ];
        hn < bn.length;
        hn++
      )
        fn();
      var gn,
        vn = function (t) {
          var e = cn.a.create(t);
          return (
            (e.CancelToken = cn.a.CancelToken),
            (e.isCancel = cn.a.isCancel),
            (function (t) {
              for (var e in dn) t[e] = dn[e].bind(t);
            })(e),
            e.onRequest(function (t) {
              t.headers = un(un({}, e.defaults.headers.common), t.headers);
            }),
            xn(e),
            e
          );
        },
        xn = function (t) {
          var e = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {},
            },
            n = function () {
              var t = "undefined" != typeof window && window.$nuxt;
              return t && t.$loading && t.$loading.set ? t.$loading : e;
            },
            o = 0;
          t.onRequest(function (t) {
            (t && !1 === t.progress) || o++;
          }),
            t.onResponse(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (--o <= 0 && ((o = 0), n().finish()));
            }),
            t.onError(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (o--,
                cn.a.isCancel(t)
                  ? o <= 0 && ((o = 0), n().finish())
                  : (n().fail(), n().finish()));
            });
          var r = function (t) {
            if (o && t.total) {
              var progress = (100 * t.loaded) / (t.total * o);
              n().set(Math.min(100, progress));
            }
          };
          (t.defaults.onUploadProgress = r),
            (t.defaults.onDownloadProgress = r);
        },
        yn = function (t, e) {
          var n = (t.$config && t.$config.axios) || {},
            o =
              n.browserBaseURL ||
              n.browserBaseUrl ||
              n.baseURL ||
              n.baseUrl ||
              "https://api.kungfutech.edu.vn/";
          var r = vn({
            baseURL: o,
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {},
            },
          });
          (t.$axios = r), e("axios", r);
        },
        wn = n(518),
        kn = n(133),
        jn = n(134),
        _n = n(267),
        zn = n(268),
        Mn = n(129),
        On = {
          screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            "2xl": 1536,
          },
          presets: {},
          provider: "ipx",
          domains: [],
          alias: {},
        };
      (On.providers =
        ((gn = {}),
        Object(c.a)(gn, "static", { provider: _n, defaults: {} }),
        Object(c.a)(gn, "cloudinary", {
          provider: zn,
          defaults: {
            baseURL: "https://res.cloudinary.com/techmely/image/upload/",
          },
        }),
        Object(c.a)(gn, "ipx", { provider: Mn, defaults: {} }),
        gn)),
        l.default.component(kn.a.name, kn.a),
        l.default.component(jn.a.name, jn.a),
        l.default.component("NImg", kn.a),
        l.default.component("NPicture", jn.a);
      var Cn = function (t, e) {
        e("img", Object(wn.a)(On, t));
      };
      function Tn(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Sn(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Sn(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (r = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function Sn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var Nn =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        Dn =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
      function An(a) {
        return Nn.test(a) || Dn.test(a.substr(0, 4));
      }
      var In =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        En =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        $n =
          /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;
      function Bn(a) {
        return In.test(a) || En.test(a.substr(0, 4));
      }
      function Ln(a) {
        return /iPad|iPhone|iPod/.test(a);
      }
      function Pn(a) {
        return /android/i.test(a);
      }
      function Rn(a) {
        return /Windows/.test(a);
      }
      function Yn(a) {
        return /Mac OS X/.test(a);
      }
      var Un = [
        { name: "Samsung", test: /SamsungBrowser/i },
        { name: "Edge", test: /edg([ea]|ios|)\//i },
        { name: "Firefox", test: /firefox|iceweasel|fxios/i },
        { name: "Chrome", test: /chrome|crios|crmo/i },
        { name: "Safari", test: /safari|applewebkit/i },
      ];
      function Fn(a) {
        var t,
          e = Tn(Un);
        try {
          for (e.s(); !(t = e.n()).done; ) {
            var b = t.value;
            if (b.test.test(a)) return b.name;
          }
        } catch (t) {
          e.e(t);
        } finally {
          e.f();
        }
        return null;
      }
      var Qn =
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36";
      function Hn(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qn,
          n = null,
          o = null,
          r = null,
          c = null;
        if ("Amazon CloudFront" === e)
          "true" === t.req.headers["cloudfront-is-mobile-viewer"] &&
            ((n = !0), (o = !0)),
            "true" === t.req.headers["cloudfront-is-tablet-viewer"] &&
              ((n = !1), (o = !0));
        else if (t.req && t.req.headers["cf-device-type"])
          switch (t.req.headers["cf-device-type"]) {
            case "mobile":
              (n = !0), (o = !0);
              break;
            case "tablet":
              (n = !1), (o = !0);
              break;
            case "desktop":
              (n = !1), (o = !1);
          }
        else (n = An(e)), (o = Bn(e)), (r = Ln(e)), (c = Pn(e));
        var l = Rn(e),
          m = Yn(e),
          d = Fn(e),
          f = "Safari" === d,
          h = "Firefox" === d,
          v = "Edge" === d,
          x = "Chrome" === d,
          y = "Samsung" === d,
          w = $n.test(e);
        return {
          mobile: n,
          mobileOrTablet: o,
          ios: r,
          android: c,
          windows: l,
          macOS: m,
          isSafari: f,
          isFirefox: h,
          isEdge: v,
          isChrome: x,
          isSamsung: y,
          isCrawler: w,
        };
      }
      var qn = function (t, e) {
        return Gn.apply(this, arguments);
      };
      function Gn() {
        return (Gn = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (o = (function () {
                      var t = "";
                      void 0 !== e.req
                        ? (t = e.req.headers["user-agent"])
                        : "undefined" != typeof navigator &&
                          (t = navigator.userAgent);
                      var n = Hn(e, t),
                        o = n.mobile,
                        r = n.mobileOrTablet;
                      return {
                        userAgent: t,
                        isMobile: o,
                        isMobileOrTablet: r,
                        isTablet: !o && r,
                        isDesktop: !r,
                        isIos: n.ios,
                        isAndroid: n.android,
                        isWindows: n.windows,
                        isMacOS: n.macOS,
                        isDesktopOrTablet: !o,
                        isSafari: n.isSafari,
                        isFirefox: n.isFirefox,
                        isEdge: n.isEdge,
                        isChrome: n.isChrome,
                        isSamsung: n.isSamsung,
                        isCrawler: n.isCrawler,
                      };
                    })()),
                      n("device", o);
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Wn = [
          "Thế giới bạn không bước vào được thì đừng cố chen vào, làm khó người khác, lỡ dở mình, hà tất chứ?",
          "Bạn cần sức mạnh, nghị lực nên cuộc sống đã đặt ra những khó khăn nghịch cảnh để bạn vượt qua và trở nên mạnh mẽ hơn.",
          "Đôi khi, không cẩn thận biết một số chuyện, mới phát hiện ra rằng những điều bản thân để tâm lại nực cười đến thế.",
          "Bạn cần sự hiểu biết và sáng tạo nên cuộc sống đã ban cho bạn đôi bàn tay và trí óc để khám phá và làm việc",
          "Bạn sẽ tìm thấy niềm vui khi giúp đỡ người khác bằng tất cả tấm lòng",
          "Lòng tin cũng giống như một tờ giấy, khi đã nhàu nát sẽ không bao giờ phẳng phiu được.",
          "Cuộc sống có quyền đẩy bạn ngã nhưng ngồi đó than khóc hay đứng dậy và tiếp tục là quyền của bạn.",
          "Chẳng có gì trở nên dễ dàng hơn. Chỉ là bạn trở nên mạnh mẽ hơn mà thôi.",
          "Ta không thể bắt đầu lại nhưng ta có thể mở đầu bây giờ và làm nên một kết thúc mới.",
          "Hãy giữ khuôn mặt bạn luôn hướng về ánh mặt trời, và bóng tối sẽ ngả phía sau bạn.",
          "Cuộc sống không phải là phim ảnh, không có nhiều đến thế... những lần không hẹn mà gặp.",
          "Cuộc sống quan trọng nhất là sự lựa chọn.",
          "Thiên Chúa ban cho tất cả mọi người 24 giờ, còn 24 giờ ấy có giá trị bao nhiêu là do mỗi người tự định lấy.",
          "Muốn đổi thói quen, phải thay hành động.",
          "Ở thực trạng xã hội hiện nay, sự thờ ơ của người tốt còn đáng sợ hơn những thứ xấu xí của xã hội.",
        ],
        Kn = n(273),
        Zn = n(274),
        Vn = n(517);
      l.default.filter("timeRead", function (source) {
        return source + " phút đọc";
      }),
        l.default.filter("randomBio", function (data) {
          return data ? Wn[_.random(Wn.length - 1)] : data;
        }),
        l.default.filter("formatTime", function (data) {
          return Object(Kn.a)(Object(Zn.a)(data), { locale: Vn.a });
        });
      var Xn = n(269),
        Jn = n.n(Xn),
        to = n(88),
        eo = n.n(to),
        no = n(270);
      n(443),
        n(445),
        n(447),
        n(449),
        n(451),
        n(453),
        n(455),
        n(457),
        n(459),
        n(461),
        n(463),
        n(465),
        n(467),
        n(469),
        n(471),
        n(473),
        n(475),
        n(477),
        n(479),
        n(481),
        n(259),
        n(484),
        n(486),
        n(488),
        n(490),
        n(492),
        n(494),
        n(496),
        n(498),
        n(500),
        n(502),
        n(504),
        n(506),
        n(508);
      eo.a.use(Jn.a),
        l.default.component("ElForm", function () {
          return n.e(98).then(n.t.bind(null, 812, 7));
        }),
        l.default.component("ElFormItem", function () {
          return n.e(97).then(n.t.bind(null, 813, 7));
        }),
        l.default.component("ElInput", function () {
          return Promise.resolve().then(n.t.bind(null, 139, 7));
        }),
        l.default.component("ElDialog", function () {
          return n.e(93).then(n.t.bind(null, 814, 7));
        }),
        l.default.component("ElTooltip", function () {
          return Promise.resolve().then(n.t.bind(null, 285, 7));
        }),
        l.default.component("ElCollapse", function () {
          return n.e(91).then(n.t.bind(null, 815, 7));
        }),
        l.default.component("ElSelect", function () {
          return Promise.resolve().then(n.t.bind(null, 286, 7));
        }),
        l.default.component("ElOption", function () {
          return Promise.resolve().then(n.t.bind(null, 287, 7));
        }),
        l.default.component("ElCollapseItem", function () {
          return n.e(90).then(n.t.bind(null, 816, 7));
        }),
        l.default.component("ElDrawer", function () {
          return n.e(95).then(n.t.bind(null, 817, 7));
        }),
        l.default.component("ElMenu", function () {
          return n.e(102).then(n.t.bind(null, 818, 7));
        }),
        l.default.component("ElSubmenu", function () {
          return n.e(107).then(n.t.bind(null, 819, 7));
        }),
        l.default.component("ElMenuItem", function () {
          return n.e(101).then(n.t.bind(null, 820, 7));
        }),
        l.default.component("ElMenuItemGroup", function () {
          return n.e(100).then(n.t.bind(null, 821, 7));
        }),
        l.default.component("ElCarouselItem", function () {
          return n.e(88).then(n.t.bind(null, 822, 7));
        }),
        l.default.component("ElRow", function () {
          return n.e(104).then(n.t.bind(null, 823, 7));
        }),
        l.default.component("ElCol", function () {
          return n.e(89).then(n.t.bind(null, 824, 7));
        }),
        l.default.component("ElCheckbox", function () {
          return Promise.resolve().then(n.t.bind(null, 246, 7));
        }),
        l.default.component("ElCheckboxGroup", function () {
          return Promise.resolve().then(n.t.bind(null, 399, 7));
        }),
        l.default.component("ElRate", function () {
          return n.e(6).then(n.t.bind(null, 825, 7));
        }),
        l.default.component("ElPagination", function () {
          return n.e(103).then(n.t.bind(null, 826, 7));
        }),
        l.default.component("ElBadge", function () {
          return n.e(87).then(n.t.bind(null, 827, 7));
        }),
        l.default.component("ElTag", function () {
          return Promise.resolve().then(n.t.bind(null, 248, 7));
        }),
        l.default.component("ElContainer", function () {
          return n.e(92).then(n.t.bind(null, 828, 7));
        }),
        l.default.component("ElDivider", function () {
          return n.e(94).then(n.t.bind(null, 829, 7));
        }),
        l.default.component("ElAside", function () {
          return n.e(86).then(n.t.bind(null, 830, 7));
        }),
        l.default.component("ElMain", function () {
          return n.e(99).then(n.t.bind(null, 831, 7));
        }),
        l.default.component("ElPopover", function () {
          return Promise.resolve().then(n.t.bind(null, 442, 7));
        }),
        l.default.component("ElSkeleton", function () {
          return n.e(106).then(n.t.bind(null, 832, 7));
        }),
        l.default.component("ElSkeletonItem", function () {
          return n.e(105).then(n.t.bind(null, 833, 7));
        }),
        l.default.component("ElEmpty", function () {
          return n.e(96).then(n.t.bind(null, 834, 7));
        }),
        l.default.component("ElRate", function () {
          return n.e(6).then(n.t.bind(null, 825, 7));
        }),
        (l.default.prototype.$notify = no.Notification);
      var oo = n(271),
        ro = n.n(oo);
      l.default.use(ro.a);
      var io = n(1);
      l.default.use(io.c);
      var ao = n(185),
        co = n.n(ao);
      (co.a.config.autoSetContainer = !0), l.default.use(co.a);
      var lo = ye.d;
      function so(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function uo(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? so(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : so(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      l.default.component(h.a.name, h.a),
        l.default.component(
          x.a.name,
          uo(
            uo({}, x.a),
            {},
            {
              render: function (t, e) {
                return (
                  x.a._warned ||
                    ((x.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  x.a.render(t, e)
                );
              },
            }
          )
        ),
        l.default.component(T.name, T),
        l.default.component("NChild", T),
        l.default.component($.name, $),
        Object.defineProperty(l.default.prototype, "$nuxt", {
          get: function () {
            var t = this.$root.$options.$nuxt;
            return t || "undefined" == typeof window ? t : window.$nuxt;
          },
          configurable: !0,
        }),
        l.default.use(d.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var po = {
          name: "page",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to",
        },
        mo = m.a.Store.prototype.registerModule;
      function fo(path, t) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = Array.isArray(path)
            ? !!path.reduce(function (t, path) {
                return t && t[path];
              }, this.state)
            : path in this.state;
        return mo.call(this, path, t, uo({ preserveState: n }, e));
      }
      function ho(t) {
        return bo.apply(this, arguments);
      }
      function bo() {
        return (
          (bo = Object(r.a)(
            regeneratorRuntime.mark(function t(e) {
              var n,
                o,
                c,
                m,
                d,
                f,
                path,
                h,
                v = arguments;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (h = function (t, e) {
                          if (!t)
                            throw new Error(
                              "inject(key, value) has no key provided"
                            );
                          if (void 0 === e)
                            throw new Error(
                              "inject('".concat(
                                t,
                                "', value) has no value provided"
                              )
                            );
                          (m[(t = "$" + t)] = e),
                            m.context[t] || (m.context[t] = e),
                            (c[t] = m[t]);
                          var n = "__nuxt_" + t + "_installed__";
                          l.default[n] ||
                            ((l.default[n] = !0),
                            l.default.use(function () {
                              Object.prototype.hasOwnProperty.call(
                                l.default.prototype,
                                t
                              ) ||
                                Object.defineProperty(l.default.prototype, t, {
                                  get: function () {
                                    return this.$root.$options[t];
                                  },
                                });
                            }));
                        }),
                        (n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                        (t.next = 4),
                        C(0, n)
                      );
                    case 4:
                      return (
                        (o = t.sent),
                        ((c = lt(e)).$router = o),
                        (c.registerModule = fo),
                        (m = uo(
                          {
                            head: {
                              htmlAttrs: { lang: "vi", amp: !0 },
                              title: "Lập Trình Không Khó",
                              titleTemplate: "%s - KungFu Tech",
                              meta: [
                                {
                                  name: "viewport",
                                  content:
                                    "width=device-width, initial-scale=1, viewport-fit=cover",
                                },
                                {
                                  hid: "og:description",
                                  property: "og:description",
                                  content:
                                    "Kungfu Tech là nơi giúp bạn học lập trình online, chia sẻ kiến thức lập trình bao gồm tài liệu học lập trình, các khóa học lập trình",
                                },
                                {
                                  hid: "og:keywords",
                                  name: "og:keywords",
                                  content:
                                    "kungfu tech, kungfutech, học lập trình, học lập trình online, ngôn ngữ lập trình, hoc lap trinh, tự học lập trình, tu hoc lap trinh, học lập trình web, tài liệu học lập trình, khóa học dạy lập trình, kiến thức lập trình, định hướng học lập trình",
                                },
                              ],
                              link: [
                                {
                                  rel: "icon",
                                  type: "image/x-icon",
                                  href: "/favicon.ico",
                                },
                              ],
                              script: [
                                {
                                  crossorigin: "anonymous",
                                  async: !0,
                                  src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7091146456010058",
                                },
                                {
                                  rel: "preconnect",
                                  href: "https://fonts.googleapis.com",
                                },
                                {
                                  rel: "preconnect",
                                  href: "https://fonts.gstatic.com",
                                  crossorigin: "anonymous",
                                },
                                {
                                  hid: "gtm-script",
                                  innerHTML:
                                    "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-M8DSZDG')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}",
                                },
                                {
                                  hid: "adsbygoogle-script",
                                  defer: !0,
                                  crossorigin: "anonymous",
                                  src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7091146456010058",
                                },
                                {
                                  hid: "adsbygoogle",
                                  innerHTML:
                                    'if (!window.__abg_called){ (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;\n         (window.adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: "ca-pub-7091146456010058",\n    enable_page_level_ads: false,\n    overlays: {bottom: false}\n  }); window.__abg_called = true;}',
                                },
                              ],
                              style: [],
                              noscript: [
                                {
                                  hid: "gtm-noscript",
                                  pbody: !0,
                                  innerHTML:
                                    '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8DSZDG&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>',
                                },
                              ],
                              __dangerouslyDisableSanitizersByTagID: {
                                "gtm-script": ["innerHTML"],
                                "gtm-noscript": ["innerHTML"],
                                adsbygoogle: ["innerHTML"],
                              },
                            },
                            store: c,
                            router: o,
                            nuxt: {
                              defaultTransition: po,
                              transitions: [po],
                              setTransitions: function (t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function (t) {
                                    return (t = t
                                      ? "string" == typeof t
                                        ? Object.assign({}, po, { name: t })
                                        : Object.assign({}, po, t)
                                      : po);
                                  })),
                                  (this.$options.nuxt.transitions = t),
                                  t
                                );
                              },
                              err: null,
                              dateErr: null,
                              error: function (t) {
                                (t = t || null),
                                  (m.context._errored = Boolean(t)),
                                  (t = t ? Object(k.p)(t) : null);
                                var n = m.nuxt;
                                return (
                                  this && (n = this.nuxt || this.$options.nuxt),
                                  (n.dateErr = Date.now()),
                                  (n.err = t),
                                  e && (e.nuxt.error = t),
                                  t
                                );
                              },
                            },
                          },
                          nt
                        )),
                        (c.app = m),
                        (d = e
                          ? e.next
                          : function (t) {
                              return m.router.push(t);
                            }),
                        e
                          ? (f = o.resolve(e.url).route)
                          : ((path = Object(k.f)(
                              o.options.base,
                              o.options.mode
                            )),
                            (f = o.resolve(path).route)),
                        (t.next = 14),
                        Object(k.t)(m, {
                          store: c,
                          route: f,
                          next: d,
                          error: m.nuxt.error.bind(m),
                          payload: e ? e.payload : void 0,
                          req: e ? e.req : void 0,
                          res: e ? e.res : void 0,
                          beforeRenderFns: e ? e.beforeRenderFns : void 0,
                          ssrContext: e,
                        })
                      );
                    case 14:
                      h("config", n),
                        window.__NUXT__ &&
                          window.__NUXT__.state &&
                          c.replaceState(window.__NUXT__.state),
                        (t.next = 20);
                      break;
                    case 20:
                      if ("function" != typeof we) {
                        t.next = 23;
                        break;
                      }
                      return (t.next = 23), we(m.context, h);
                    case 23:
                      if ("function" != typeof _e) {
                        t.next = 26;
                        break;
                      }
                      return (t.next = 26), _e(m.context, h);
                    case 26:
                      return (t.next = 29), Oe(m.context, h);
                    case 29:
                      return (t.next = 32), Ze(m.context, h);
                    case 32:
                      t.next = 35;
                      break;
                    case 35:
                      if ("function" != typeof Xe.a) {
                        t.next = 38;
                        break;
                      }
                      return (t.next = 38), Xe()(m.context, h);
                    case 38:
                      return (t.next = 41), nn(m.context);
                    case 41:
                      return (t.next = 44), on(m.context, h);
                    case 44:
                      return (t.next = 47), yn(m.context, h);
                    case 47:
                      return (t.next = 50), Cn(m.context, h);
                    case 50:
                      return (t.next = 53), qn(m.context, h);
                    case 53:
                      t.next = 56;
                      break;
                    case 56:
                      t.next = 59;
                      break;
                    case 59:
                      t.next = 62;
                      break;
                    case 62:
                      t.next = 65;
                      break;
                    case 65:
                      t.next = 68;
                      break;
                    case 68:
                      if ("function" != typeof lo) {
                        t.next = 71;
                        break;
                      }
                      return (t.next = 71), lo(m.context, h);
                    case 71:
                      return (
                        (t.next = 74),
                        new Promise(function (t, e) {
                          if (
                            !o.resolve(m.context.route.fullPath).route.matched
                              .length
                          )
                            return t();
                          o.replace(m.context.route.fullPath, t, function (n) {
                            if (!n._isRouter) return e(n);
                            if (2 !== n.type) return t();
                            var c = o.afterEach(
                              (function () {
                                var e = Object(r.a)(
                                  regeneratorRuntime.mark(function e(n, o) {
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 3), Object(k.j)(n);
                                          case 3:
                                            (m.context.route = e.sent),
                                              (m.context.params =
                                                n.params || {}),
                                              (m.context.query = n.query || {}),
                                              c(),
                                              t();
                                          case 8:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })
                                );
                                return function (t, n) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                          });
                        })
                      );
                    case 74:
                      return t.abrupt("return", {
                        store: c,
                        app: m,
                        router: o,
                      });
                    case 75:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          bo.apply(this, arguments)
        );
      }
    },
    48: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var o = {
          ORGANIZATION: "Kungfu Tech",
          URL: "https://kungfutech.edu.vn",
          TITLE: "Lập Trình Không Khó",
          DESCRIPTION:
            "Kungfu Tech là nơi giúp bạn học lập trình online, chia sẻ kiến thức lập trình bao gồm tài liệu học lập trình, các khóa học lập trình",
          KEYWORDS: [
            "kungfu tech",
            "kungfutech",
            "học lập trình",
            "học lập trình online",
            "ngôn ngữ lập trình",
            "hoc lap trinh",
            "tự học lập trình",
            "tu hoc lap trinh",
            "học lập trình web",
            "tài liệu học lập trình",
            "khóa học dạy lập trình",
            "kiến thức lập trình",
            "định hướng học lập trình",
          ],
          IMAGE_THUMBNAIL: "https://kungfutech.edu.vn/thumbnail.png",
          IMAGE_LOGO: "https://kungfutech.edu.vn/logo.png",
        },
        r = {
          ARTICLE: "Trang bài viết",
          CATEGORY: "Trang thể loại",
          HOME: "Trang chủ",
          WEBSITE: "Website",
          SHARE: "Trang Tài Nguyên",
          NEWS: "Trang tin tức",
        },
        c = {
          TITLE: "Lập Trình Không Khó",
          DESCRIPTION:
            "Kungfu Tech lập ra với mong muốn chia sẻ kiến thức lập trình dành cho mọi đối tượng để cộng đồng lập trình ở Việt Nam được lớn mạnh. Bao gồm các tài liệu học lập trình, tổng hợp các khóa học lập trình và tin tức về lập trình",
          KEYWORDS: [
            "kungfu tech",
            "kungfutech",
            "học Lập Trình Không Khó",
            "học lập trình",
            "hoc lap trinh",
            "tự học lập trình",
            "tu hoc lap trinh",
            "học lập trình web",
            "tài liệu học lập trình",
            "khóa học dạy lập trình",
            "kiến thức lập trình",
            "định hướng học lập trình",
          ],
          AUTHOR: {
            url: "https://thaycacac.github.io/",
            username: "techmely",
            fullname: "Techmely Team",
            avatar: "/configs/author/logo.jpg",
          },
          CATEGORY: {
            name: "Học lập trình",
            slug: "hoc-lap-trinh",
            avatar: "/configs/category/logo.png",
            description:
              "Tự học lập trình từ cơ bản đến thông thạo cho mọi đối tượng",
          },
        };
    },
    508: function (t, e, n) {
      var content = n(509);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("5cdf44ac", content, !0, { sourceMap: !1 });
    },
    509: function (t, e, n) {
      var o = n(3)(!1);
      o.push([t.i, "", ""]), (t.exports = o);
    },
    95: function (t, e, n) {
      "use strict";
      var o = n(48);
      e.a = {
        computed: {
          getDescription: function () {
            var t, e, n;
            return (
              (null === (t = this.article) || void 0 === t
                ? void 0
                : t.description) ||
              (null == this ||
              null === (e = this.article) ||
              void 0 === e ||
              null === (n = e.head) ||
              void 0 === n
                ? void 0
                : n.description) ||
              o.b.DESCRIPTION
            );
          },
        },
      };
    },
    96: function (t, e, n) {
      "use strict";
      var o = n(48);
      e.a = {
        computed: {
          getTitle: function () {
            var t;
            return (
              (null === (t = this.article) || void 0 === t
                ? void 0
                : t.title) || o.b.TITLE
            );
          },
        },
      };
    },
  },
  [[289, 83, 8, 84]],
]);
