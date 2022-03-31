(window.webpackJsonp = window.webpackJsonp || []).push([
  [80, 33],
  {
    525: function (t, e, n) {
      "use strict";
      var r = n(48);
      e.a = {
        computed: {
          getAuthor: function () {
            var t;
            return (
              (null == this || null === (t = this.article) || void 0 === t
                ? void 0
                : t.author) || r.a.AUTHOR
            );
          },
        },
      };
    },
    528: function (t, e, n) {
      "use strict";
      var r = n(48);
      e.a = {
        computed: {
          getCategory: function () {
            var t;
            return (
              (null == this || null === (t = this.article) || void 0 === t
                ? void 0
                : t.category) || r.a.CATEGORY
            );
          },
        },
      };
    },
    529: function (t, e, n) {
      "use strict";
      var r = n(48);
      e.a = {
        computed: {
          getThumbnail: function () {
            var t, e, n, o;
            return null !== (t = this.article) &&
              void 0 !== t &&
              null !== (e = t.image) &&
              void 0 !== e &&
              e.url
              ? null === (n = this.article) ||
                void 0 === n ||
                null === (o = n.image) ||
                void 0 === o
                ? void 0
                : o.url
              : r.b.IMAGE_THUMBNAIL;
          },
        },
      };
    },
    530: function (t, e, n) {
      var content = n(542);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("2f4fa6d4", content, !0, { sourceMap: !1 });
    },
    531: function (t, e, n) {
      "use strict";
      var r = n(48);
      e.a = {
        computed: {
          getKeywords: function () {
            var t, e, n;
            return (
              (null === (t = this.article) || void 0 === t
                ? void 0
                : t.keywords) ||
              (null === (e = this.article) ||
              void 0 === e ||
              null === (n = e.head) ||
              void 0 === n
                ? void 0
                : n.keywords) ||
              r.b.KEYWORDS
            );
          },
        },
      };
    },
    539: function (t, e, n) {
      "use strict";
      e.a = {
        computed: {
          getCreatedAt: function () {
            var t,
              e =
                new Date(
                  null === (t = this.article) || void 0 === t
                    ? void 0
                    : t.createdAt
                ) || new Date();
            return ""
              .concat(e.getUTCDate(), " tháng ")
              .concat(e.getUTCMonth(), " năm ")
              .concat(e.getUTCFullYear());
          },
        },
      };
    },
    541: function (t, e, n) {
      "use strict";
      n(530);
    },
    542: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-478bbf23],.fade-in-linear-leave-active[data-v-478bbf23]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-478bbf23],.fade-in-linear-leave[data-v-478bbf23],.fade-in-linear-leave-active[data-v-478bbf23]{opacity:0}.el-fade-in-linear-enter-active[data-v-478bbf23],.el-fade-in-linear-leave-active[data-v-478bbf23]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-478bbf23],.el-fade-in-linear-leave[data-v-478bbf23],.el-fade-in-linear-leave-active[data-v-478bbf23]{opacity:0}.el-fade-in-enter-active[data-v-478bbf23],.el-fade-in-leave-active[data-v-478bbf23]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-478bbf23],.el-fade-in-leave-active[data-v-478bbf23]{opacity:0}.el-zoom-in-center-enter-active[data-v-478bbf23],.el-zoom-in-center-leave-active[data-v-478bbf23]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-478bbf23],.el-zoom-in-center-leave-active[data-v-478bbf23]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-478bbf23],.el-zoom-in-top-leave-active[data-v-478bbf23]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-478bbf23],.el-zoom-in-top-leave-active[data-v-478bbf23]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-478bbf23],.el-zoom-in-bottom-leave-active[data-v-478bbf23]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-478bbf23],.el-zoom-in-bottom-leave-active[data-v-478bbf23]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-478bbf23],.el-zoom-in-left-leave-active[data-v-478bbf23]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-478bbf23],.el-zoom-in-left-leave-active[data-v-478bbf23]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-478bbf23]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-478bbf23]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-478bbf23],.el-list-leave-active[data-v-478bbf23]{transition:all 1s}.el-list-enter[data-v-478bbf23],.el-list-leave-active[data-v-478bbf23]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-478bbf23]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.tag--custom[data-v-478bbf23]{background:#f3f4f6;padding:3px 8px;text-transform:uppercase;font-size:12px;color:#6b7280;font-weight:400;line-height:20px;border:none;border-radius:2px;cursor:pointer;letter-spacing:0;height:26px}",
        "",
      ]),
        (t.exports = r);
    },
    545: function (t, e, n) {
      "use strict";
      n.r(e);
      n(541);
      var r = n(10),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)(
              "el-tag",
              {
                staticClass: "tag--custom",
                attrs: { size: "small", type: "info" },
              },
              [t._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          "478bbf23",
          null
        );
      e.default = component.exports;
    },
    547: function (t, e, n) {
      "use strict";
      var r = n(48);
      e.a = {
        computed: {
          getAltThumbnail: function () {
            var t, e;
            return (
              (null === (t = this.article) ||
              void 0 === t ||
              null === (e = t.image) ||
              void 0 === e
                ? void 0
                : e.alt) ||
              this.article.title ||
              r.a.TITLE
            );
          },
        },
      };
    },
    576: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return f;
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
      var l = o;
      function c(t) {
        return l({ url: "/articles/detail", method: "get", params: t });
      }
      function d(t) {
        return l({ url: "/articles/news", method: "get", params: t });
      }
      function f(t) {
        return l({ url: "/articles/tags", method: "get", params: t });
      }
    },
    587: function (t, e, n) {
      t.exports = n.p + "img/twitter.10d21ed.svg";
    },
    588: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjYyOTcgMEgxLjM3MDI5QzAuNjEzNDY0IDAgMCAwLjYxMzQ2NCAwIDEuMzcwMjlWMTcuNjI5N0MwIDE4LjM4NjUgMC42MTM0NjQgMTkgMS4zNzAyOSAxOUgxNy42Mjk3QzE4LjM4NjUgMTkgMTkgMTguMzg2NSAxOSAxNy42Mjk3VjEuMzcwMjlDMTkgMC42MTM0NjQgMTguMzg2NSAwIDE3LjYyOTcgMFYwWk02LjczOTQxIDE0LjM2MTNINC40MjU3M1Y3LjQwMDU3SDYuNzM5NDFWMTQuMzYxM1pNNS41ODI2NCA2LjQ1MDA3SDUuNTY3NTdDNC43OTExNyA2LjQ1MDA3IDQuMjg5MDMgNS45MTU2MSA0LjI4OTAzIDUuMjQ3NjRDNC4yODkwMyA0LjU2NDYgNC44MDY1MyA0LjA0NDkyIDUuNTk4MDEgNC4wNDQ5MkM2LjM4OTQ4IDQuMDQ0OTIgNi44NzY1NCA0LjU2NDYgNi44OTE2MiA1LjI0NzY0QzYuODkxNjIgNS45MTU2MSA2LjM4OTQ4IDYuNDUwMDcgNS41ODI2NCA2LjQ1MDA3Wk0xNS4wODIxIDE0LjM2MTNIMTIuNzY4N1YxMC42Mzc1QzEyLjc2ODcgOS43MDE2NCAxMi40MzM3IDkuMDYzMzkgMTEuNTk2NSA5LjA2MzM5QzEwLjk1NzQgOS4wNjMzOSAxMC41NzY4IDkuNDkzOTEgMTAuNDA5NSA5LjkwOTUxQzEwLjM0ODMgMTAuMDU4MiAxMC4zMzM0IDEwLjI2NjEgMTAuMzMzNCAxMC40NzQxVjE0LjM2MTNIOC4wMTk4M0M4LjAxOTgzIDE0LjM2MTMgOC4wNTAxMyA4LjA1MzYgOC4wMTk4MyA3LjQwMDU3SDEwLjMzMzRWOC4zODYxNEMxMC42NDA4IDcuOTExODMgMTEuMTkwOSA3LjIzNzIgMTIuNDE4NCA3LjIzNzJDMTMuOTQwNyA3LjIzNzIgMTUuMDgyMSA4LjIzMjA1IDE1LjA4MjEgMTAuMzdWMTQuMzYxM1oiIGZpbGw9IiM3NDc0NzQiLz4KPC9zdmc+Cg==";
    },
    589: function (t, e, n) {
      "use strict";
      e.a = {
        computed: {
          getUpdatedAt: function () {
            var t;
            return (
              (null === (t = this.article) || void 0 === t
                ? void 0
                : t.updatedAt) || new Date()
            );
          },
        },
      };
    },
    632: function (t, e, n) {
      var content = n(714);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("b69c3656", content, !0, { sourceMap: !1 });
    },
    713: function (t, e, n) {
      "use strict";
      n(632);
    },
    714: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        '.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.sidebar{position:fixed;top:30vh;z-index:999}.sidebar--mobile{position:fixed;bottom:0;width:100%;background:#fff;z-index:2;box-shadow:0 -2px 3px 0 rgba(0,0,0,.05)}.sidebar .icon{width:3rem;height:3rem;border-radius:50%;box-shadow:.3rem .3rem .6rem #c8d0e7,-0.2rem -0.2rem .5rem #fff;display:flex;cursor:pointer;justify-content:center;align-items:center;font-size:18px;color:#9baacf;transition:all .5s ease;margin-bottom:15px}.sidebar .icon:focus{outline:none}.sidebar .icon:active{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.sidebar .icon:hover{color:#319795}.wrap-interview{margin-top:18px}@media(min-width: 768px){.wrap-interview{margin-top:33px}}@media(max-width: 768px){.article__content{padding:.5rem}}.article__category{padding:6px;background:#374151;border-radius:4px;color:rgba(255,255,255,.85);font-weight:500;font-size:14px;line-height:16px;text-align:center;cursor:pointer}.article__social{font-family:"Merriweather",serif;display:flex;align-items:center;justify-content:space-between;margin-top:10px}@media(min-width: 768px){.article__social{margin-top:26px}}.article__dot{padding:1px;border-radius:9999px;margin:0 4px;background-color:#515151}.article__datetime{display:flex;align-items:center;font-size:14px;line-height:22px;color:#515151}.article__sharing{display:flex;align-items:center}.article__toc{font-family:"Merriweather",serif;background:#f3f4f6;border:1px solid #e5e7eb;box-sizing:border-box;border-radius:7px;padding:24px 13px}@media(min-width: 768px){.article__toc{padding:35px}}.article__toc-title{margin:0 0 .5rem 0;font-weight:700;font-size:1.5rem;line-height:150%;color:#1f2937;font-family:"Exo",-apple-system,sans-serif}@media(min-width: 768px){.article__toc-title{font-size:1.5rem;line-height:150%}}.article ol{margin:0;padding:0 10px;line-height:160%;color:#6b7280;list-style:none}.article ol li{margin-top:2px;font-size:1.125rem;line-height:1.6;color:#6b7280;font-style:italic;font-family:"Exo",-apple-system,sans-serif}.article ol a{text-decoration:underline;color:#1f2937}.article ol a:visited{color:#1f2937}.article__continue{margin-top:140px;border-radius:10px;background:#f3f4f6;padding:8px 18px;display:flex;align-items:flex-start;justify-content:space-between}@media(min-width: 768px){.article__continue{padding:32px 40px}}.article__continue-mb{display:flex;align-items:center;justify-content:space-between}.article__continue-nav{display:flex;flex-direction:column}.article__continue-left{align-items:flex-end}.article__continue-prev{color:#1f2937;font-size:12px;line-height:20px;font-style:italic;letter-spacing:.2px}.article__continue-next{font-size:12px;color:#1f2937;line-height:20px;font-style:italic;letter-spacing:.2px}.article__continue-title{font-weight:bold;font-size:20px;line-height:32px;color:#1f2937;display:none}@media(min-width: 768px){.article__continue-title{display:flex;align-items:center;text-align:center}}.article__continue-link{color:#1f2937;font-weight:bold;font-size:20px;line-height:32px}.content-article img{border-radius:5px;width:100%}',
        "",
      ]),
        (t.exports = r);
    },
    835: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5),
        o = (n(76), n(25), n(48)),
        l = {
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
        },
        c = {
          computed: {
            getContent: function () {
              var t;
              return (
                (null == this || null === (t = this.article) || void 0 === t
                  ? void 0
                  : t.content) || "<div>Đã xảy ra lỗi</div>"
              );
            },
          },
        },
        d = n(528),
        f = n(525),
        m = n(531),
        v = n(529),
        h = n(547),
        M = n(539),
        x = n(589),
        y = n(95),
        z = n(576),
        w =
          (n(43),
          function (t) {
            var e = t.toLowerCase();
            return (e = (e =
              "@" +
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                e.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a")).replace(
                /é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi,
                "e"
              )).replace(/i|í|ì|ỉ|ĩ|ị/gi, "i")).replace(
                /ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi,
                "o"
              )).replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u")).replace(
                /ý|ỳ|ỷ|ỹ|ỵ/gi,
                "y"
              )).replace(/đ/gi, "d")).replace(
                /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
                ""
              )).replace(/ /gi, "-")).replace(/\-\-\-\-\-/gi, "-")).replace(
                /\-\-\-\-/gi,
                "-"
              )).replace(/\-\-\-/gi, "-")).replace(/\-\-/gi, "-")) +
              "@").replace(/\@\-|\-\@|\@/gi, ""));
          }),
        _ = {
          mixins: [l, c, d.a, f.a, m.a, x.a, M.a, h.a, v.a, y.a],
          asyncData: function (t) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var n, article;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.params),
                          (e.next = 3),
                          Object(z.a)({ slug: null == n ? void 0 : n.slug })
                        );
                      case 3:
                        return (
                          (article = e.sent),
                          e.abrupt("return", { article: article })
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          layout: "interview",
          data: function () {
            return {
              CONFIG_SEO: o.b,
              minutes: 0,
              newContent: "",
              roadmaps: [],
            };
          },
          mounted: function () {
            this.readingTime(),
              this.getTitleKungfu(this.getContent),
              this.getContentKungfu(this.getContent);
          },
          methods: {
            getContentKungfu: function (content) {
              var t = null == content ? void 0 : content.indexOf("<h2>"),
                e = null == content ? void 0 : content.indexOf("</h2>");
              if (t < 0 || e < 0)
                return (this.newContent = this.newContent + content);
              var title =
                null == content ? void 0 : content.substring(t + 4, e);
              this.newContent =
                this.newContent +
                (null == content ? void 0 : content.substring(0, t)) +
                '<h2 id="'.concat(w(title), '">') +
                title +
                "</h2>";
              var n = null == content ? void 0 : content.substring(e + 5);
              return this.getContentKungfu(n);
            },
            readingTime: function () {
              var t = document
                  .getElementById("content")
                  .textContent.trim()
                  .split(/\s+/).length,
                time = Math.ceil(t / 225);
              this.minutes = time;
            },
            getTitleKungfu: function (content) {
              var t = null == content ? void 0 : content.indexOf("<h2>"),
                e = null == content ? void 0 : content.indexOf("</h2>");
              if (!(t < 0 || e < 0)) {
                var title =
                  null == content ? void 0 : content.substring(t + 4, e);
                this.roadmaps.push({ title: title, slug: w(title) });
                var n = null == content ? void 0 : content.substring(e + 5);
                if (n) return this.getTitleKungfu(n);
              }
            },
          },
          head: function () {
            var t,
              e,
              n,
              r = this.getTitle,
              l = this.getDescription,
              c =
                null === (t = this.article) ||
                void 0 === t ||
                null === (e = t.head) ||
                void 0 === e
                  ? void 0
                  : e.keywords,
              d = this.getThumbnail,
              f = o.c.ARTICLE,
              m =
                null === (n = this.getAuthor) || void 0 === n
                  ? void 0
                  : n.fullname,
              v = o.b.URL + this.$route.fullPath;
            return {
              title: r,
              meta: [
                { hid: "og:title", property: "og:title", content: r },
                { hid: "twitter:title", name: "twitter:title", content: r },
                { hid: "description", name: "description", content: l },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: l,
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: l,
                },
                { hid: "keywords", name: "keywords", content: c },
                { hid: "og:keywords", name: "keywords", content: c },
                { hid: "og:image", property: "og:image", content: d },
                { hid: "twitter:image", name: "twitter:image", content: d },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: r,
                },
                { hid: "twitter:card", name: "twitter:card", content: d },
                { hid: "og:type", property: "og:type", content: f },
                { hid: "author", property: "author", content: m },
                { hid: "twitter:site", name: "twitter:site", content: v },
              ],
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "http://schema.org",
                    "@type": o.c.ARTICLE,
                    mainEntityOfPage: { "@type": "WebPage", "@id": v },
                    headline: r,
                    image: {
                      "@type": "ImageObject",
                      url: d,
                      width: 700,
                      height: 400,
                    },
                    datePublished: "".concat(this.getCreatedAt),
                    dateModified: "".concat(this.getUpdatedAt),
                    author: { "@type": "Person", name: m },
                    publisher: {
                      "@type": "Organization",
                      name: "Kungfu Tech",
                      logo: {
                        "@type": "ImageObject",
                        url: d,
                        width: 162,
                        height: 177,
                      },
                    },
                    description: l,
                  },
                },
              ],
            };
          },
        },
        T = (n(713), n(10)),
        component = Object(T.a)(
          _,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", { staticClass: "wrapper" }, [
              r(
                "div",
                { staticClass: "container" },
                [
                  r(
                    "el-row",
                    { staticClass: "wrap-interview", attrs: { gutter: 24 } },
                    [
                      r(
                        "el-col",
                        {
                          staticClass: "article article__top",
                          attrs: { md: 18, lg: 18, sm: 24 },
                        },
                        [
                          r("h1", { staticClass: "title-nuxt-content" }, [
                            t._v(
                              "\n          " + t._s(t.getTitle) + "\n        "
                            ),
                          ]),
                          t._v(" "),
                          r("div", { staticClass: "article__social" }, [
                            r("div", { staticClass: "article__datetime" }, [
                              r("div", { staticClass: "article__createdAt" }, [
                                t._v(
                                  "\n              " +
                                    t._s(
                                      t._f("formatTime")(t.article.createdAt)
                                    ) +
                                    "\n            "
                                ),
                              ]),
                              t._v(" "),
                              r("div", { staticClass: "article__dot" }),
                              t._v(" "),
                              r("div", { staticClass: "article__read-time" }, [
                                t._v(t._s(t._f("timeRead")(t.minutes))),
                              ]),
                            ]),
                            t._v(" "),
                            r("div", { staticClass: "article__sharing" }, [
                              r(
                                "a",
                                {
                                  attrs: {
                                    href:
                                      "https://twitter.com/share?url=" +
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
                                  r("img", {
                                    attrs: {
                                      src: n(587),
                                      alt: "twitter",
                                      width: "23",
                                      height: "23",
                                    },
                                  }),
                                ]
                              ),
                              t._v(" "),
                              r(
                                "a",
                                {
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
                                  r("img", {
                                    staticStyle: { margin: "0 7px" },
                                    attrs: {
                                      src: n(279),
                                      alt: "facebook",
                                      width: "23",
                                      height: "23",
                                    },
                                  }),
                                ]
                              ),
                              t._v(" "),
                              r(
                                "a",
                                {
                                  attrs: {
                                    href:
                                      "https://www.linkedin.com/share?url=" +
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
                                  r("img", {
                                    attrs: {
                                      src: n(588),
                                      alt: "linkedin",
                                      width: "23",
                                      height: "23",
                                    },
                                  }),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      r(
                        "el-col",
                        {
                          staticClass: "article",
                          attrs: { md: 18, lg: 18, sm: 24 },
                        },
                        [
                          r(
                            "article",
                            [
                              t.roadmaps.length > 0
                                ? r("nav", { staticClass: "article__toc" }, [
                                    r(
                                      "h3",
                                      { staticClass: "article__toc-title" },
                                      [t._v("Nội dung bài viết")]
                                    ),
                                    t._v(" "),
                                    r(
                                      "ol",
                                      t._l(t.roadmaps, function (e) {
                                        return r("li", { key: e.slug }, [
                                          r(
                                            "a",
                                            { attrs: { href: "#" + e.slug } },
                                            [t._v(t._s(e.title))]
                                          ),
                                        ]);
                                      }),
                                      0
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              r("div", {
                                staticClass: "content-article mb-13",
                                attrs: { id: "content" },
                                domProps: { innerHTML: t._s(t.newContent) },
                              }),
                              t._v(" "),
                              r("el-divider"),
                              t._v(" "),
                              r("span", [t._v("Từ khóa:")]),
                              t._v(" "),
                              t._l(t.getKeywords, function (e, n) {
                                return r(
                                  "CoreTag",
                                  {
                                    key: n,
                                    staticClass: "mt-1 mr-1 button",
                                    attrs: { type: "default", size: "xs" },
                                  },
                                  [t._v(t._s(e))]
                                );
                              }),
                              t._v(" "),
                              r("el-divider"),
                              t._v(" "),
                              r("LazySharedArticleDescription", {
                                attrs: {
                                  fullname: t.getAuthor.fullname,
                                  username: t.getAuthor.username,
                                  bio: t.getAuthor.bio,
                                  avatar: t.getAuthor.avatar,
                                  "category-title": t.getCategory.name,
                                  "category-sub-title":
                                    "Chuyên mục bản tin Dev hàng ngày",
                                  "category-url": "/" + t.getCategory.slug,
                                  "category-description":
                                    t.getCategory.description,
                                },
                              }),
                              t._v(" "),
                              r("el-divider"),
                              t._v(" "),
                              r("LazySharedArticleComment"),
                            ],
                            2
                          ),
                        ]
                      ),
                      t._v(" "),
                      r(
                        "el-col",
                        {
                          staticClass: "mt-12",
                          attrs: { md: 6, lg: 6, sm: 24 },
                        },
                        [
                          r("LazyBaseSocialYoutube"),
                          t._v(" "),
                          r("LazyBaseSocialFacebook"),
                          t._v(" "),
                          r("LazyHomeHotNews"),
                          t._v(" "),
                          r("LazyBaseSocialFacebookMobile"),
                        ],
                        1
                      ),
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
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { CoreTag: n(545).default });
    },
  },
]);
