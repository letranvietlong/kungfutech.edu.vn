(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    576: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return v;
        });
      n(12);
      var r = n(58),
        c = n
          .n(r)
          .a.create({
            baseURL: "".concat(
              "https://api.kungfutech.edu.vn/",
              "/wp-json/api/v1"
            ),
            timeout: 1e4,
          });
      c.interceptors.request.use(
        function (t) {
          return (t.headers["Content-Type"] = "application/json"), t;
        },
        function (t) {
          return Promise.reject(t);
        }
      ),
        c.interceptors.response.use(
          function (t) {
            var e = t.data || t.datas;
            return Promise.resolve(e);
          },
          function (t) {
            return Promise.reject(t);
          }
        );
      var o = c;
      function d(t) {
        return o({ url: "/articles/detail", method: "get", params: t });
      }
      function l(t) {
        return o({ url: "/articles/news", method: "get", params: t });
      }
      function v(t) {
        return o({ url: "/articles/tags", method: "get", params: t });
      }
    },
    620: function (t, e, n) {
      var content = n(696);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("4be79a40", content, !0, { sourceMap: !1 });
    },
    695: function (t, e, n) {
      "use strict";
      n(620);
    },
    696: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-7cb1d618],.fade-in-linear-leave-active[data-v-7cb1d618]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-7cb1d618],.fade-in-linear-leave[data-v-7cb1d618],.fade-in-linear-leave-active[data-v-7cb1d618]{opacity:0}.el-fade-in-linear-enter-active[data-v-7cb1d618],.el-fade-in-linear-leave-active[data-v-7cb1d618]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-7cb1d618],.el-fade-in-linear-leave[data-v-7cb1d618],.el-fade-in-linear-leave-active[data-v-7cb1d618]{opacity:0}.el-fade-in-enter-active[data-v-7cb1d618],.el-fade-in-leave-active[data-v-7cb1d618]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-7cb1d618],.el-fade-in-leave-active[data-v-7cb1d618]{opacity:0}.el-zoom-in-center-enter-active[data-v-7cb1d618],.el-zoom-in-center-leave-active[data-v-7cb1d618]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-7cb1d618],.el-zoom-in-center-leave-active[data-v-7cb1d618]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-7cb1d618],.el-zoom-in-top-leave-active[data-v-7cb1d618]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-7cb1d618],.el-zoom-in-top-leave-active[data-v-7cb1d618]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-7cb1d618],.el-zoom-in-bottom-leave-active[data-v-7cb1d618]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-7cb1d618],.el-zoom-in-bottom-leave-active[data-v-7cb1d618]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-7cb1d618],.el-zoom-in-left-leave-active[data-v-7cb1d618]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-7cb1d618],.el-zoom-in-left-leave-active[data-v-7cb1d618]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-7cb1d618]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-7cb1d618]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-7cb1d618],.el-list-leave-active[data-v-7cb1d618]{transition:all 1s}.el-list-enter[data-v-7cb1d618],.el-list-leave-active[data-v-7cb1d618]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-7cb1d618]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.home-page[data-v-7cb1d618]{background-color:#fff;margin-top:2.3rem}",
        "",
      ]),
        (t.exports = r);
    },
    841: function (t, e, n) {
      "use strict";
      n.r(e);
      n(21), n(11), n(19), n(27), n(28);
      var r = n(6),
        c = n(5),
        o = (n(25), n(48)),
        d = n(576);
      function l(object, t) {
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
            ? l(Object(source), !0).forEach(function (e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : l(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var m = {
          asyncData: function (t) {
            var e,
              n = t.query;
            return {
              currentPage:
                null !== (e = parseInt(null == n ? void 0 : n.page)) &&
                void 0 !== e
                  ? e
                  : 1,
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
              return Object(c.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r, c, data, o;
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
                            Object(d.b)({ page: t.currentPage })
                          );
                        case 4:
                          (c = e.sent),
                            (data = c.data),
                            (o = c.totalItems),
                            (t.totalItems = o),
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
            var t = "Tin tức công nghệ",
              e =
                "Chia sẻ kiến thức công nghệ, kiến thức lập trình 24/7, cập nhật thông tin về công nghệ, các ngôn ngữ mới, các bài viết nổi bật trong giới công nghệ, các tips giúp bạn cải thiện lập trình",
              n = [
                "chia sẻ kiến thức công nghệ",
                "chia sẻ kiến thức lập trình",
                "bản tin công nghệ",
                "cập nhật hàng ngày",
                "tips giúp cải thiện lập trình",
                "tips lập trình",
                "các bản tin về công nghệ",
                "bản tin dành cho lập trình viên",
                "bản tin dành cho coder",
              ].join(", "),
              r = o.b.IMAGE_THUMBNAIL,
              c = o.c.NEWS,
              d = o.b.URL + this.$route.fullPath;
            return {
              title: t,
              meta: [
                { hid: "title", name: "title", content: t },
                { hid: "twitter:site", name: "twitter:site", content: t },
                { hid: "twitter:title", name: "twitter:title", content: t },
                { hid: "description", name: "description", content: e },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: e,
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: e,
                },
                { hid: "keywords", name: "keywords", content: n },
                { hid: "og:keywords", name: "og:keywords", content: n },
                { hid: "og:image", property: "og:image", content: r },
                { hid: "og:type", property: "og:type", content: o.c.HOME },
                { hid: "twitter:card", name: "twitter:card", content: r },
                { hid: "twitter:image", name: "twitter:image", content: r },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: t,
                },
              ],
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org/",
                    "@type": c,
                    name: t,
                    alternateName: o.b.URL,
                    url: d,
                    mainEntityOfPage: { "@type": c, "@id": d },
                    headline: t,
                    image: {
                      "@type": "ImageObject",
                      url: r,
                      width: 700,
                      height: 400,
                    },
                    author: { "@type": "Person", name: o.b.ORGANIZATION },
                    publisher: {
                      "@type": "Organization",
                      name: o.b.ORGANIZATION,
                      logo: {
                        "@type": "ImageObject",
                        url: r,
                        width: 160,
                        height: 160,
                      },
                    },
                    description: e,
                  },
                },
              ],
            };
          },
        },
        h = (n(695), n(10)),
        component = Object(h.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "home-page" }, [
              n(
                "div",
                { staticClass: "container" },
                [
                  n("LazyNewHeader"),
                  t._v(" "),
                  n(
                    "el-row",
                    { attrs: { gutter: 40 } },
                    t._l(t.news, function (e) {
                      return n(
                        "el-col",
                        { key: e.slug, attrs: { md: 8, sm: 12, xs: 24 } },
                        [
                          t.loading
                            ? n("card-loading")
                            : n("LazyNewCard", {
                                attrs: {
                                  slug: e.slug,
                                  title: e.title,
                                  image: e.image,
                                  author: e.author,
                                  tags: e.tags,
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
          "7cb1d618",
          null
        );
      e.default = component.exports;
    },
  },
]);
