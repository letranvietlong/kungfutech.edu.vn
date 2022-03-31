(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    576: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return v;
        });
      n(12);
      var r = n(58),
        o = n
          .n(r)
          .a.create({
            baseURL: "".concat(
              "https://api.kungfutech.edu.vn/",
              "/wp-json/api/v1"
            ),
            timeout: 1e4,
          });
      o.interceptors.request.use(
        function (t) {
          return (t.headers["Content-Type"] = "application/json"), t;
        },
        function (t) {
          return Promise.reject(t);
        }
      ),
        o.interceptors.response.use(
          function (t) {
            var e = t.data || t.datas;
            return Promise.resolve(e);
          },
          function (t) {
            return Promise.reject(t);
          }
        );
      var c = o;
      function l(t) {
        return c({ url: "/articles/detail", method: "get", params: t });
      }
      function d(t) {
        return c({ url: "/articles/news", method: "get", params: t });
      }
      function v(t) {
        return c({ url: "/articles/tags", method: "get", params: t });
      }
    },
    626: function (t, e, n) {
      var content = n(708);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("8afb16f0", content, !0, { sourceMap: !1 });
    },
    707: function (t, e, n) {
      "use strict";
      n(626);
    },
    708: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-59a54b62],.fade-in-linear-leave-active[data-v-59a54b62]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-59a54b62],.fade-in-linear-leave[data-v-59a54b62],.fade-in-linear-leave-active[data-v-59a54b62]{opacity:0}.el-fade-in-linear-enter-active[data-v-59a54b62],.el-fade-in-linear-leave-active[data-v-59a54b62]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-59a54b62],.el-fade-in-linear-leave[data-v-59a54b62],.el-fade-in-linear-leave-active[data-v-59a54b62]{opacity:0}.el-fade-in-enter-active[data-v-59a54b62],.el-fade-in-leave-active[data-v-59a54b62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-59a54b62],.el-fade-in-leave-active[data-v-59a54b62]{opacity:0}.el-zoom-in-center-enter-active[data-v-59a54b62],.el-zoom-in-center-leave-active[data-v-59a54b62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-59a54b62],.el-zoom-in-center-leave-active[data-v-59a54b62]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-59a54b62],.el-zoom-in-top-leave-active[data-v-59a54b62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-59a54b62],.el-zoom-in-top-leave-active[data-v-59a54b62]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-59a54b62],.el-zoom-in-bottom-leave-active[data-v-59a54b62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-59a54b62],.el-zoom-in-bottom-leave-active[data-v-59a54b62]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-59a54b62],.el-zoom-in-left-leave-active[data-v-59a54b62]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-59a54b62],.el-zoom-in-left-leave-active[data-v-59a54b62]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-59a54b62]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-59a54b62]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-59a54b62],.el-list-leave-active[data-v-59a54b62]{transition:all 1s}.el-list-enter[data-v-59a54b62],.el-list-leave-active[data-v-59a54b62]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-59a54b62]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.home-page[data-v-59a54b62]{background-color:#fff}",
        "",
      ]),
        (t.exports = r);
    },
    847: function (t, e, n) {
      "use strict";
      n.r(e);
      n(21), n(11), n(19), n(27), n(28);
      var r = n(6),
        o = n(5),
        c = (n(25), n(48)),
        l = n(576);
      function d(object, t) {
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
      function v(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? d(Object(source), !0).forEach(function (e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : d(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var h = {
          asyncData: function (t) {
            var e = t.query,
              n = t.params;
            return {
              currentPage: parseInt(null == e ? void 0 : e.page) || 1,
              tag: (null == n ? void 0 : n.slug) || "",
            };
          },
          data: function () {
            return { loading: !0, currentPage: 1, totalItems: 0, news: [] };
          },
          watch: {
            $route: function () {
              this.fetchData();
            },
          },
          mounted: function () {
            this.fetchData();
          },
          methods: {
            fetchData: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r, o, c, data, d;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t.loading = !0),
                            (t.currentPage =
                              parseInt(
                                null === (n = t.$route) ||
                                  void 0 === n ||
                                  null === (r = n.query) ||
                                  void 0 === r
                                  ? void 0
                                  : r.page
                              ) || 1),
                            (e.next = 4),
                            Object(l.c)({
                              page: t.currentPage,
                              category: "news",
                              tag:
                                null === (o = t.$route.params) || void 0 === o
                                  ? void 0
                                  : o.slug,
                            })
                          );
                        case 4:
                          (c = e.sent),
                            (data = c.data),
                            (d = c.totalItems),
                            (t.totalItems = d),
                            (t.news = data),
                            (t.loading = !1);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            handleCurrentChange: function (t) {
              this.$router.push({
                path: this.$route.currentPath,
                query: v(v({}, this.$route.query), {}, { page: t }),
              });
            },
          },
          head: function () {
            var t,
              e =
                null === (t = this.$route.params) || void 0 === t
                  ? void 0
                  : t.slug,
              n = "Bản tin ".concat(e),
              r = "Chia sẻ kiến thức công nghệ "
                .concat(
                  e,
                  ", kiến thức lập trình 24/7, cập nhật thông tin về công nghệ "
                )
                .concat(
                  e,
                  ", các bài viết nổi bật trong giới công nghệ, các tips giúp bạn cải thiện lập trình "
                )
                .concat(e),
              o = [
                "chia sẻ kiến thức công nghệ ".concat(e),
                "chia sẻ kiến thức lập trình ".concat(e),
                "bản tin kungfu tech news",
                "bản tin kungfu tech",
                "bản tin công nghệ kungfu tech ".concat(e),
                "cập nhật hàng ngày thông tin ".concat(e),
                "tips giúp cải thiện lập trình ".concat(e),
                "tips lập trình ".concat(e),
                "các bản tin về công nghệ ".concat(e),
                "bản tin dành cho lập trình viên",
                "bản tin dành cho coder ".concat(e),
              ].join(", "),
              l = c.b.IMAGE_THUMBNAIL,
              d = c.c.NEWS,
              v = c.b.URL + this.$route.fullPath;
            return {
              title: n,
              meta: [
                { hid: "title", name: "title", content: n },
                { hid: "twitter:site", name: "twitter:site", content: n },
                { hid: "twitter:title", name: "twitter:title", content: n },
                { hid: "description", name: "description", content: r },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: r,
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: r,
                },
                { hid: "keywords", name: "keywords", content: o },
                { hid: "og:keywords", name: "og:keywords", content: o },
                { hid: "og:image", property: "og:image", content: l },
                { hid: "og:type", property: "og:type", content: c.c.HOME },
                { hid: "twitter:card", name: "twitter:card", content: l },
                { hid: "twitter:image", name: "twitter:image", content: l },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: n,
                },
              ],
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org/",
                    "@type": d,
                    name: n,
                    alternateName: c.b.URL,
                    url: v,
                    mainEntityOfPage: { "@type": d, "@id": v },
                    headline: n,
                    image: {
                      "@type": "ImageObject",
                      url: l,
                      width: 700,
                      height: 400,
                    },
                    author: { "@type": "Person", name: c.b.ORGANIZATION },
                    publisher: {
                      "@type": "Organization",
                      name: c.b.ORGANIZATION,
                      logo: {
                        "@type": "ImageObject",
                        url: l,
                        width: 160,
                        height: 160,
                      },
                    },
                    description: r,
                  },
                },
              ],
            };
          },
        },
        m = (n(707), n(10)),
        component = Object(m.a)(
          h,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "home-page" }, [
              n(
                "div",
                { staticClass: "container mt-10" },
                [
                  n("h1", { staticClass: "mt-0" }, [
                    t._v('\n      Thể loại: "'),
                    n("span", { staticClass: "font-text" }, [
                      t._v(t._s(t.tag)),
                    ]),
                    t._v('"\n    '),
                  ]),
                  t._v(" "),
                  n(
                    "el-row",
                    { attrs: { gutter: 40 } },
                    t._l(t.news, function (t) {
                      return n(
                        "el-col",
                        { key: t.slug, attrs: { md: 8, sm: 12, xs: 24 } },
                        [
                          n("LazyNewCard", {
                            attrs: {
                              slug: t.slug,
                              title: t.title,
                              image: t.image,
                              author: t.author,
                              tags: t.tags,
                            },
                          }),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "flex justify-content-center" },
                    [
                      n("el-pagination", {
                        staticClass: "pt-5 pb-13",
                        attrs: {
                          layout: "prev, pager, next",
                          background: "",
                          "current-page": t.currentPage,
                          "page-size": 12,
                          total: t.totalItems,
                        },
                        on: {
                          "update:currentPage": function (e) {
                            t.currentPage = e;
                          },
                          "update:current-page": function (e) {
                            t.currentPage = e;
                          },
                          "current-change": t.handleCurrentChange,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "59a54b62",
          null
        );
      e.default = component.exports;
    },
  },
]);
