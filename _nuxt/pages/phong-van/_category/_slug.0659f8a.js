(window.webpackJsonp = window.webpackJsonp || []).push([
  [72, 24, 25],
  {
    525: function (e, t, n) {
      "use strict";
      var c = n(48);
      t.a = {
        computed: {
          getAuthor: function () {
            var e;
            return (
              (null == this || null === (e = this.article) || void 0 === e
                ? void 0
                : e.author) || c.a.AUTHOR
            );
          },
        },
      };
    },
    526: function (e, t, n) {
      var content = n(533);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("7a695b94", content, !0, { sourceMap: !1 });
    },
    527: function (e, t, n) {
      var content = n(535);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("a391bd16", content, !0, { sourceMap: !1 });
    },
    528: function (e, t, n) {
      "use strict";
      var c = n(48);
      t.a = {
        computed: {
          getCategory: function () {
            var e;
            return (
              (null == this || null === (e = this.article) || void 0 === e
                ? void 0
                : e.category) || c.a.CATEGORY
            );
          },
        },
      };
    },
    529: function (e, t, n) {
      "use strict";
      var c = n(48);
      t.a = {
        computed: {
          getThumbnail: function () {
            var e, t, n, r;
            return null !== (e = this.article) &&
              void 0 !== e &&
              null !== (t = e.image) &&
              void 0 !== t &&
              t.url
              ? null === (n = this.article) ||
                void 0 === n ||
                null === (r = n.image) ||
                void 0 === r
                ? void 0
                : r.url
              : c.b.IMAGE_THUMBNAIL;
          },
        },
      };
    },
    531: function (e, t, n) {
      "use strict";
      var c = n(48);
      t.a = {
        computed: {
          getKeywords: function () {
            var e, t, n;
            return (
              (null === (e = this.article) || void 0 === e
                ? void 0
                : e.keywords) ||
              (null === (t = this.article) ||
              void 0 === t ||
              null === (n = t.head) ||
              void 0 === n
                ? void 0
                : n.keywords) ||
              c.b.KEYWORDS
            );
          },
        },
      };
    },
    532: function (e, t, n) {
      "use strict";
      n(526);
    },
    533: function (e, t, n) {
      var c = n(3)(!1);
      c.push([
        e.i,
        ".fade-in-linear-enter-active[data-v-7c8ebb62],.fade-in-linear-leave-active[data-v-7c8ebb62]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-7c8ebb62],.fade-in-linear-leave[data-v-7c8ebb62],.fade-in-linear-leave-active[data-v-7c8ebb62]{opacity:0}.el-fade-in-linear-enter-active[data-v-7c8ebb62],.el-fade-in-linear-leave-active[data-v-7c8ebb62]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-7c8ebb62],.el-fade-in-linear-leave[data-v-7c8ebb62],.el-fade-in-linear-leave-active[data-v-7c8ebb62]{opacity:0}.el-fade-in-enter-active[data-v-7c8ebb62],.el-fade-in-leave-active[data-v-7c8ebb62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-7c8ebb62],.el-fade-in-leave-active[data-v-7c8ebb62]{opacity:0}.el-zoom-in-center-enter-active[data-v-7c8ebb62],.el-zoom-in-center-leave-active[data-v-7c8ebb62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-7c8ebb62],.el-zoom-in-center-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-7c8ebb62],.el-zoom-in-top-leave-active[data-v-7c8ebb62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-7c8ebb62],.el-zoom-in-top-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-7c8ebb62],.el-zoom-in-bottom-leave-active[data-v-7c8ebb62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-7c8ebb62],.el-zoom-in-bottom-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-7c8ebb62],.el-zoom-in-left-leave-active[data-v-7c8ebb62]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-7c8ebb62],.el-zoom-in-left-leave-active[data-v-7c8ebb62]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-7c8ebb62]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-7c8ebb62]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-7c8ebb62],.el-list-leave-active[data-v-7c8ebb62]{transition:all 1s}.el-list-enter[data-v-7c8ebb62],.el-list-leave-active[data-v-7c8ebb62]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-7c8ebb62]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-breadcrumb__separator[data-v-7c8ebb62]{margin:0 9px;font-weight:bold;color:#c0c4cc}.el-breadcrumb__separator[class*=icon][data-v-7c8ebb62]{margin:0 6px;font-weight:normal}.el-breadcrumb__item[data-v-7c8ebb62]{float:left}.el-breadcrumb__inner[data-v-7c8ebb62]{color:#606266}.el-breadcrumb__inner.is-white[data-v-7c8ebb62]{color:gray !important}.el-breadcrumb__inner.is-link[data-v-7c8ebb62],.el-breadcrumb__inner a[data-v-7c8ebb62]{font-weight:bold;text-decoration:none;transition:color .2s cubic-bezier(0.645, 0.045, 0.355, 1);color:#303133}.el-breadcrumb__inner.is-link[data-v-7c8ebb62]:hover,.el-breadcrumb__inner a[data-v-7c8ebb62]:hover{color:#38b2ac;cursor:pointer}.el-breadcrumb__item:last-child .el-breadcrumb__inner[data-v-7c8ebb62],.el-breadcrumb__item:last-child .el-breadcrumb__inner[data-v-7c8ebb62]:hover,.el-breadcrumb__item:last-child .el-breadcrumb__inner a[data-v-7c8ebb62],.el-breadcrumb__item:last-child .el-breadcrumb__inner a[data-v-7c8ebb62]:hover{font-weight:normal;color:#606266;cursor:text}.el-breadcrumb__item:last-child .el-breadcrumb__separator[data-v-7c8ebb62]{display:none}",
        "",
      ]),
        (e.exports = c);
    },
    534: function (e, t, n) {
      "use strict";
      n(527);
    },
    535: function (e, t, n) {
      var c = n(3)(!1);
      c.push([
        e.i,
        '.fade-in-linear-enter-active[data-v-279c40fc],.fade-in-linear-leave-active[data-v-279c40fc]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-279c40fc],.fade-in-linear-leave[data-v-279c40fc],.fade-in-linear-leave-active[data-v-279c40fc]{opacity:0}.el-fade-in-linear-enter-active[data-v-279c40fc],.el-fade-in-linear-leave-active[data-v-279c40fc]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-279c40fc],.el-fade-in-linear-leave[data-v-279c40fc],.el-fade-in-linear-leave-active[data-v-279c40fc]{opacity:0}.el-fade-in-enter-active[data-v-279c40fc],.el-fade-in-leave-active[data-v-279c40fc]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-279c40fc],.el-fade-in-leave-active[data-v-279c40fc]{opacity:0}.el-zoom-in-center-enter-active[data-v-279c40fc],.el-zoom-in-center-leave-active[data-v-279c40fc]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-279c40fc],.el-zoom-in-center-leave-active[data-v-279c40fc]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-279c40fc],.el-zoom-in-top-leave-active[data-v-279c40fc]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-279c40fc],.el-zoom-in-top-leave-active[data-v-279c40fc]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-279c40fc],.el-zoom-in-bottom-leave-active[data-v-279c40fc]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-279c40fc],.el-zoom-in-bottom-leave-active[data-v-279c40fc]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-279c40fc],.el-zoom-in-left-leave-active[data-v-279c40fc]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-279c40fc],.el-zoom-in-left-leave-active[data-v-279c40fc]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-279c40fc]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-279c40fc]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-279c40fc],.el-list-leave-active[data-v-279c40fc]{transition:all 1s}.el-list-enter[data-v-279c40fc],.el-list-leave-active[data-v-279c40fc]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-279c40fc]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-breadcrumb[data-v-279c40fc]{font-size:14px;line-height:1;margin-bottom:.5rem}.el-breadcrumb[data-v-279c40fc]::before,.el-breadcrumb[data-v-279c40fc]::after{display:table;content:""}.el-breadcrumb[data-v-279c40fc]::after{clear:both}',
        "",
      ]),
        (e.exports = c);
    },
    536: function (e, t, n) {
      "use strict";
      n(544)("link", function (e) {
        return function (t) {
          return e(this, "a", "href", t);
        };
      });
    },
    537: function (e, t, n) {
      "use strict";
      n.r(t);
      n(536), n(43);
      var c = {
          name: "ElBreadcrumbItem",
          props: {
            to: {},
            replace: Boolean,
            isWhite: { type: Boolean, default: !1 },
          },
          data: function () {
            return { separator: "", separatorClass: "" };
          },
          inject: ["elBreadcrumb"],
          mounted: function () {
            var e = this;
            (this.separator = this.elBreadcrumb.separator),
              (this.separatorClass = this.elBreadcrumb.separatorClass);
            var link = this.$refs.link;
            link.setAttribute("role", "link"),
              link.addEventListener("click", function (t) {
                var n = e.to,
                  c = e.$router;
                n && c && (e.replace ? c.replace(n) : c.push(n));
              });
          },
        },
        r = (n(532), n(10)),
        component = Object(r.a)(
          c,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n("span", { staticClass: "el-breadcrumb__item" }, [
              n(
                "span",
                {
                  ref: "link",
                  class: [
                    "el-breadcrumb__inner",
                    e.to ? "is-link" : "",
                    e.isWhite ? "is-white" : "",
                  ],
                  attrs: { role: "link" },
                },
                [e._t("default")],
                2
              ),
              e._v(" "),
              e.separatorClass
                ? n("i", {
                    staticClass: "el-breadcrumb__separator",
                    class: e.separatorClass,
                  })
                : n(
                    "span",
                    {
                      staticClass: "el-breadcrumb__separator",
                      attrs: { role: "presentation" },
                    },
                    [e._v(e._s(e.separator))]
                  ),
            ]);
          },
          [],
          !1,
          null,
          "7c8ebb62",
          null
        );
      t.default = component.exports;
    },
    538: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = {
          name: "ElBreadcrumb",
          props: {
            separator: { type: String, default: "/" },
            separatorClass: { type: String, default: "" },
          },
          provide: function () {
            return { elBreadcrumb: this };
          },
          mounted: function () {
            var e = this.$el.querySelectorAll(".el-breadcrumb__item");
            e.length && e[e.length - 1].setAttribute("aria-current", "page");
          },
        },
        r = (n(534), n(10)),
        component = Object(r.a)(
          c,
          function () {
            var e = this,
              t = e.$createElement;
            return (e._self._c || t)(
              "div",
              {
                staticClass: "el-breadcrumb",
                attrs: { "aria-label": "Breadcrumb", role: "navigation" },
              },
              [e._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          "279c40fc",
          null
        );
      t.default = component.exports;
    },
    543: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return r;
        });
      var c = [
          {
            slug: "javascript",
            name: "Javascript",
            thumbnail: "/modules/core/background/javascript.png",
            cover: "/modules/core/cover/javascript.png",
            count: 4,
            description:
              "Tổng hợp, sưu tầm các Bộ câu hỏi phỏng vấn về ngôn ngữ javascript: promise, hoisting, event loop,...",
            keywords: [
              "các Bộ câu hỏi phỏng vấn javascript",
              "các Bộ câu hỏi phỏng vấn về javascript",
              "Bộ câu hỏi phỏng vấn fresher javascript",
              "Bộ câu hỏi phỏng vấn javascript",
              "Bộ câu hỏi phỏng vấn javascript api",
              "Bộ câu hỏi phỏng vấn javascript app",
              "tuyển tập các Bộ câu hỏi phỏng vấn javascript",
              "phỏng vấn javascript",
              "interview javascript",
              "làm sao vượt qua phỏng vấn với javascript",
              "cac cau hoi phong van javascript",
              "cac cau hoi phong van senior javascript",
              "các Bộ câu hỏi phỏng vấn lập trình",
            ],
            inArticle: {
              title: "Bộ câu hỏi phỏng vấn Javascript",
              subTitle: "Chuyên mục các Bộ câu hỏi phỏng vấn",
              description: "Bộ câu hỏi phỏng vấn Javascript.",
              logo: "/language/javascript.png",
              url: "/phong-van/javascript",
            },
          },
          {
            slug: "html",
            name: "HTML",
            thumbnail: "/modules/core/background/html.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 0,
            description:
              "Tổng hợp, sưu tầm các Bộ câu hỏi phỏng vấn html, chia sẻ kiến thức và kỹ năng phỏng vấn với ngôn ngữ html, cách để vượt qua các nhà tuyển dụng",
            keywords: [
              "các Bộ câu hỏi phỏng vấn html",
              "các Bộ câu hỏi phỏng vấn về html",
              "Bộ câu hỏi phỏng vấn fresher html",
              "Bộ câu hỏi phỏng vấn html",
              "Bộ câu hỏi phỏng vấn html api",
              "Bộ câu hỏi phỏng vấn html junior",
              "tuyển tập các Bộ câu hỏi phỏng vấn html",
              "phỏng vấn html",
              "interview html",
              "làm sao vượt qua phỏng vấn với html",
              "cac cau hoi phong van html",
              "các Bộ câu hỏi phỏng vấn html senior",
              "các Bộ câu hỏi phỏng vấn lập trình",
            ],
            inArticle: {
              title: "Bộ câu hỏi phỏng vấn HTML",
              subTitle: "Chuyên mục các Bộ câu hỏi phỏng vấn",
              description: "Bộ câu hỏi phỏng vấn HTML.",
              logo: "/language/html.png",
              url: "/phong-van/html",
            },
          },
          {
            slug: "css",
            name: "CSS",
            thumbnail: "/modules/core/background/css.png",
            cover: "/modules/core/cover/css.png",
            count: 0,
            description:
              "Tổng hợp, sưu tầm các Bộ câu hỏi phỏng vấn css, chia sẻ kiến thức và kỹ năng phỏng vấn với ngôn ngữ css, cách để vượt qua các nhà tuyển dụng",
            keywords: [
              "các Bộ câu hỏi phỏng vấn css",
              "các Bộ câu hỏi phỏng vấn về css",
              "Bộ câu hỏi phỏng vấn fresher css",
              "Bộ câu hỏi phỏng vấn css",
              "Bộ câu hỏi phỏng vấn css api",
              "Bộ câu hỏi phỏng vấn css junior",
              "tuyển tập các Bộ câu hỏi phỏng vấn css",
              "phỏng vấn css",
              "interview css",
              "làm sao vượt qua phỏng vấn với css",
              "cac cau hoi phong van css",
              "các Bộ câu hỏi phỏng vấn css senior",
              "các Bộ câu hỏi phỏng vấn lập trình",
            ],
            inArticle: {
              title: "Bộ câu hỏi phỏng vấn CSS",
              subTitle: "Chuyên mục các Bộ câu hỏi phỏng vấn",
              description: "Bộ câu hỏi phỏng vấn CSS.",
              logo: "/language/css.png",
              url: "/phong-van/css",
            },
          },
          {
            slug: "reactjs",
            name: "ReactJS",
            thumbnail: "/modules/core/background/reactjs.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157366107-1185084f-40f9-4f20-b171-8433a6751b75.png",
            count: 0,
            description:
              "Tổng hợp, sưu tầm các Bộ câu hỏi phỏng vấn reactjs, chia sẻ kiến thức và kỹ năng phỏng vấn với ngôn ngữ reactjs, cách để vượt qua các nhà tuyển dụng",
            keywords: [
              "các Bộ câu hỏi phỏng vấn reactjs",
              "các Bộ câu hỏi phỏng vấn về reactjs",
              "Bộ câu hỏi phỏng vấn fresher reactjs",
              "Bộ câu hỏi phỏng vấn reactjs",
              "Bộ câu hỏi phỏng vấn reactjs api",
              "Bộ câu hỏi phỏng vấn reactjs junior",
              "tuyển tập các Bộ câu hỏi phỏng vấn reactjs",
              "phỏng vấn reactjs",
              "interview reactjs",
              "làm sao vượt qua phỏng vấn với reactjs",
              "cac cau hoi phong van reactjs",
              "các Bộ câu hỏi phỏng vấn reactjs senior",
              "các Bộ câu hỏi phỏng vấn lập trình",
            ],
            inArticle: {
              title: "Bộ câu hỏi phỏng vấn ReactJs",
              subTitle: "Chuyên mục các Bộ câu hỏi phỏng vấn",
              description: "Bộ câu hỏi phỏng vấn ReactJs.",
              logo: "/language/reactjs.png",
              url: "/phong-van/reactjs",
            },
          },
          {
            slug: "vuejs",
            name: "VueJS",
            thumbnail: "/modules/core/background/vuejs.png",
            cover: "/modules/core/cover/vuejs.png",
            count: 0,
            description:
              "Tổng hợp, sưu tầm các Bộ câu hỏi phỏng vấn vuejs, chia sẻ kiến thức và kỹ năng phỏng vấn với ngôn ngữ vuejs, cách để vượt qua các nhà tuyển dụng",
            keywords: [
              "các Bộ câu hỏi phỏng vấn vuejs",
              "các Bộ câu hỏi phỏng vấn về vuejs",
              "Bộ câu hỏi phỏng vấn fresher vuejs",
              "Bộ câu hỏi phỏng vấn vuejs",
              "Bộ câu hỏi phỏng vấn vuejs api",
              "Bộ câu hỏi phỏng vấn vuejs junior",
              "tuyển tập các Bộ câu hỏi phỏng vấn vuejs",
              "phỏng vấn vuejs",
              "interview vuejs",
              "làm sao vượt qua phỏng vấn với vuejs",
              "cac cau hoi phong van vuejs",
              "các Bộ câu hỏi phỏng vấn vuejs senior",
              "các Bộ câu hỏi phỏng vấn lập trình",
            ],
            inArticle: {
              title: "Bộ câu hỏi phỏng vấn VueJS",
              subTitle: "Chuyên mục các Bộ câu hỏi phỏng vấn",
              description: "Bộ câu hỏi phỏng vấn VueJS",
              logo: "/language/vuejs.png",
              url: "/phong-van/vuejs",
            },
          },
          {
            slug: "java",
            name: "Java",
            thumbnail: "/modules/core/background/java.png",
            cover: "/modules/core/cover/java.png",
            count: 0,
            description:
              "Tổng hợp, sưu tầm các Bộ câu hỏi phỏng vấn java, chia sẻ kiến thức và kỹ năng phỏng vấn với ngôn ngữ java, cách để vượt qua các nhà tuyển dụng",
            keywords: [
              "các Bộ câu hỏi phỏng vấn java",
              "các Bộ câu hỏi phỏng vấn về java",
              "Bộ câu hỏi phỏng vấn fresher java",
              "Bộ câu hỏi phỏng vấn java",
              "Bộ câu hỏi phỏng vấn java api",
              "Bộ câu hỏi phỏng vấn java junior",
              "tuyển tập các Bộ câu hỏi phỏng vấn java",
              "phỏng vấn java",
              "interview java",
              "làm sao vượt qua phỏng vấn với java",
              "cac cau hoi phong van java",
              "các Bộ câu hỏi phỏng vấn java senior",
              "các Bộ câu hỏi phỏng vấn lập trình",
            ],
            inArticle: {
              title: "Bộ câu hỏi phỏng vấn Java",
              subTitle: "Chuyên mục các Bộ câu hỏi phỏng vấn",
              description: "Bộ câu hỏi phỏng vấn Java.",
              logo: "/language/java.png",
              url: "/phong-van/java",
            },
          },
        ],
        r = [
          { name: "Tất cả", slug: "" },
          { name: "Javascript", slug: "/javascript" },
          { name: "ReactJs", slug: "/reactjs" },
          { name: "Java", slug: "/java" },
          { name: "HTML", slug: "/html" },
          { name: "CSS", slug: "/css" },
          { name: "PHP", slug: "/php" },
          { name: "Python", slug: "/python" },
          { name: "Typescript", slug: "/typescript" },
          { name: "VueJs", slug: "/vuejs" },
          { name: "C", slug: "/c" },
          { name: "NodeJs", slug: "/nodejs" },
          { name: "C#", slug: "/csharp" },
          { name: ".Net", slug: "/dotnet" },
          { name: "React Native", slug: "/reactnative" },
          { name: "SQL Server", slug: "/sqlserver" },
        ];
    },
    544: function (e, t, n) {
      var c = n(7),
        r = n(23),
        o = n(57),
        l = /"/g,
        v = function (e, t, n, c) {
          var r = String(o(e)),
            v = "<" + t;
          return (
            "" !== n &&
              (v += " " + n + '="' + String(c).replace(l, "&quot;") + '"'),
            v + ">" + r + "</" + t + ">"
          );
        };
      e.exports = function (e, t) {
        var n = {};
        (n[e] = t(v)),
          c(
            c.P +
              c.F *
                r(function () {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            n
          );
      };
    },
    636: function (e, t, n) {
      var content = n(719);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("49bb018d", content, !0, { sourceMap: !1 });
    },
    718: function (e, t, n) {
      "use strict";
      n(636);
    },
    719: function (e, t, n) {
      var c = n(3)(!1);
      c.push([
        e.i,
        '.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity 200ms linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity 200ms linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.wrap-interview{margin-top:18px}@media(min-width: 768px){.wrap-interview{margin-top:95px}}.question{padding:2rem;margin-top:2rem;background:linear-gradient(90deg, rgba(180, 180, 180, 0.12) 23%, rgba(151, 151, 151, 0.05) 90%);backdrop-filter:blur(140px);border-radius:24px}.question:first-child{margin-top:0}.question--basic::before{content:"Basic";position:absolute;right:0;top:40px;color:#3b82f6;background:#dbeafe;padding:1px 1rem;border-radius:10px;margin-right:2rem}.question--junior::before{content:"Junior";position:absolute;right:0;top:40px;color:#34d399;background:#d1fae5;padding:1px 1rem;border-radius:10px;margin-right:2rem}.question--middle::before{content:"Middle";position:absolute;right:0;top:40px;color:#f59e0b;background:#fef3c7;padding:1px 1rem;border-radius:10px;margin-right:2rem}.question--senior::before{content:"Senior";position:absolute;right:0;top:40px;color:#ec4899;background:#fce7f3;padding:1px 1rem;border-radius:10px;margin-right:2rem}.question--master::before{content:"Master";position:absolute;right:0;top:40px;color:#8b5cf6;background:#ede9fe;padding:1px 1rem;border-radius:10px;margin-right:2rem}.question h2{margin-top:0;margin-right:5.5rem}.question hr{background:#c4c4c49a}@media(max-width: 768px){.article__content{padding:.5rem}}.article__category{padding:6px;background:#6b7280;border-radius:4px;color:rgba(255,255,255,.85);font-weight:500;font-size:14px;line-height:16px;text-align:center;cursor:pointer}.article__social{font-family:"Merriweather",serif;display:flex;align-items:center;justify-content:space-between;margin-top:10px}@media(min-width: 768px){.article__social{margin-top:26px}}.article__dot{padding:1px;border-radius:9999px;margin:0 4px;background-color:#515151}.article__datetime{display:flex;align-items:center;font-size:14px;line-height:22px;color:#515151}.article__sharing{display:flex;align-items:center}.article__top{margin-bottom:33px}@media(min-width: 768px){.article__top{margin-bottom:39px}}.article__toc{font-family:"Merriweather",serif;background:#f3f4f6;border:1px solid #e5e7eb;box-sizing:border-box;border-radius:7px;padding:24px 13px}@media(min-width: 768px){.article__toc{padding:35px}}.article__toc-title{margin:0 0 .5rem 0;font-weight:700;font-size:1.5rem;line-height:150%;color:#1f2937;font-family:"Exo",-apple-system,sans-serif}@media(min-width: 768px){.article__toc-title{font-size:1.5rem;line-height:150%}}.article ol{margin:0;padding:0 10px;line-height:160%;color:#6b7280;list-style:none}.article ol li{margin-top:2px;font-size:1.125rem;line-height:1.6;color:#6b7280;font-style:italic;font-family:"Exo",-apple-system,sans-serif}.article ol a{text-decoration:underline;color:#1f2937}.article ol a:visited{color:#1f2937}.article__continue{margin-top:140px;border-radius:10px;background:#f3f4f6;padding:8px 18px;display:flex;align-items:flex-start;justify-content:space-between}@media(min-width: 768px){.article__continue{padding:32px 40px}}.article__continue-mb{display:flex;align-items:center;justify-content:space-between}.article__continue-nav{display:flex;flex-direction:column}.article__continue-left{align-items:flex-end}.article__continue-prev{color:#1f2937;font-size:12px;line-height:20px;font-style:italic;letter-spacing:.2px}.article__continue-next{font-size:12px;color:#1f2937;line-height:20px;font-style:italic;letter-spacing:.2px}.article__continue-title{font-weight:bold;font-size:20px;line-height:32px;color:#1f2937;display:none}@media(min-width: 768px){.article__continue-title{display:flex;align-items:center;text-align:center}}.article__continue-link{color:#1f2937;font-weight:bold;font-size:20px;line-height:32px}',
        "",
      ]),
        (e.exports = c);
    },
    852: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(5),
        r = (n(76), n(25), n(543)),
        o = n(48),
        l = n(528),
        v = n(525),
        d = n(96),
        h = n(531),
        m = n(95),
        f = n(529),
        y = {
          mixins: [l.a, v.a, d.a, f.a, m.a, h.a],
          asyncData: function (e) {
            return Object(c.a)(
              regeneratorRuntime.mark(function t() {
                var n, c, article;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.$content),
                          (c = e.params),
                          (t.next = 3),
                          n(
                            "/interview/".concat(
                              null == c ? void 0 : c.category
                            ),
                            null == c ? void 0 : c.slug
                          ).fetch()
                        );
                      case 3:
                        return (
                          (article = t.sent),
                          t.abrupt("return", { article: article })
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          layout: "interview",
          data: function () {
            return { category: r.a[1], minutes: 0, CONFIG_SEO: o.b };
          },
          mounted: function () {
            this.readingTime();
          },
          methods: {
            readingTime: function () {
              var e = document
                  .getElementById("content")
                  .textContent.trim()
                  .split(/\s+/).length,
                time = Math.ceil(e / 225);
              this.minutes = time;
            },
          },
          head: function () {
            var e,
              t = this.getTitle,
              n = this.getDescription,
              c = this.getKeywords,
              r = this.getThumbnail,
              l = o.c.ARTICLE,
              v =
                null === (e = this.getAuthor) || void 0 === e
                  ? void 0
                  : e.fullname,
              d = o.b.URL + this.$route.fullPath;
            return {
              title: t,
              meta: [
                { hid: "og:title", property: "og:title", content: t },
                { hid: "twitter:title", name: "twitter:title", content: t },
                { hid: "description", name: "description", content: n },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: n,
                },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: n,
                },
                { hid: "keywords", name: "keywords", content: c },
                { hid: "og:keywords", name: "og:keywords", content: c },
                { hid: "og:image", property: "og:image", content: r },
                { hid: "twitter:image", name: "twitter:image", content: r },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: t,
                },
                { hid: "og:type", property: "og:type", content: l },
                { hid: "twitter:card", name: "twitter:card", content: r },
                { hid: "author", property: "author", content: v },
                { hid: "og:url", property: "og:url", content: d },
                { hid: "twitter:site", name: "twitter:site", content: d },
              ],
              script: [
                {
                  href: "https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,700;1,300&family=Pridi:wght@300&display=swap",
                  rel: "stylesheet",
                },
                {
                  type: "application/ld+json",
                  json: {
                    name: "Kungfu Tech",
                    alternateName: "TITLE",
                    url: d,
                    "@context": "http://schema.org",
                    "@type": "NewsArticle",
                    mainEntityOfPage: { "@type": "WebPage", "@id": d },
                    headline: t,
                    image: {
                      "@type": "ImageObject",
                      url: r,
                      width: 700,
                      height: 400,
                    },
                    author: { "@type": "Person", name: v },
                    publisher: {
                      "@type": "Organization",
                      name: "Kungfu Tech",
                      logo: {
                        "@type": "ImageObject",
                        url: r,
                        width: 160,
                        height: 160,
                      },
                    },
                    description: n,
                  },
                },
              ],
            };
          },
        },
        _ = (n(718), n(10)),
        component = Object(_.a)(
          y,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n("div", { staticClass: "wrapper" }, [
              n(
                "div",
                { staticClass: "container" },
                [
                  n(
                    "el-row",
                    { staticClass: "wrap-interview", attrs: { gutter: 24 } },
                    [
                      n(
                        "el-col",
                        {
                          staticClass: "article article__top",
                          attrs: { md: 18, lg: 18, sm: 24 },
                        },
                        [
                          n(
                            "CoreBreadcrumb",
                            [
                              n(
                                "CoreBreadcrumbItem",
                                { attrs: { to: { path: "/tai-nguyen" } } },
                                [e._v("Tài nguyên")]
                              ),
                              e._v(" "),
                              n(
                                "CoreBreadcrumbItem",
                                {
                                  attrs: {
                                    to: {
                                      path:
                                        "/phong-van/tim-kiem?category=" +
                                        e.article.category.slug,
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "Câu hỏi phỏng vấn " +
                                      e._s(e.article.category.name)
                                  ),
                                ]
                              ),
                              e._v(" "),
                              n(
                                "CoreBreadcrumbItem",
                                {
                                  attrs: {
                                    to: {
                                      path:
                                        "/phong-van/" + e.article.category.slug,
                                    },
                                  },
                                },
                                [e._v("\n            Chi tiết bài viết")]
                              ),
                            ],
                            1
                          ),
                          e._v(" "),
                          n("h1", { staticClass: "title-nuxt-content" }, [
                            e._v(e._s(e.getTitle)),
                          ]),
                          e._v(" "),
                          n("div", { staticClass: "article__social" }, [
                            n("div", { staticClass: "article__datetime" }, [
                              n("div", { staticClass: "article__read-time" }, [
                                e._v(e._s(e._f("timeRead")(e.minutes))),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      e._v(" "),
                      n(
                        "el-col",
                        {
                          staticClass: "article",
                          attrs: { md: 18, lg: 18, sm: 24 },
                        },
                        [
                          n(
                            "article",
                            { staticClass: "article__content" },
                            [
                              n("nuxt-content", {
                                staticClass: "content-article nuxt-fpt mb-13",
                                attrs: {
                                  id: "content",
                                  document: e.article,
                                  "live-edit": !1,
                                },
                              }),
                              e._v(" "),
                              n("el-divider"),
                              e._v(" "),
                              n("LazySharedArticleDescription", {
                                attrs: {
                                  fullname: e.getAuthor.fullname,
                                  username: e.getAuthor.username,
                                  bio: e.getAuthor.bio,
                                  avatar: e.getAuthor.avatar,
                                  "category-title": e.category.inArticle.title,
                                  "category-sub-title":
                                    e.category.inArticle.subTitle,
                                  "category-url": e.category.inArticle.url,
                                  "category-description":
                                    e.category.inArticle.description,
                                  "category-logo": e.category.inArticle.logo,
                                },
                              }),
                              e._v(" "),
                              n("el-divider"),
                              e._v(" "),
                              n("LazySharedArticleComment"),
                            ],
                            1
                          ),
                        ]
                      ),
                      e._v(" "),
                      n(
                        "el-col",
                        { attrs: { md: 6, lg: 6, sm: 24 } },
                        [
                          n("LazyBaseSocialYoutube", {
                            attrs: { isArticle: "" },
                          }),
                          e._v(" "),
                          n("LazyBaseSocialFacebook", {
                            attrs: { isArticle: "" },
                          }),
                          e._v(" "),
                          n("LazyHomeHotNews"),
                          e._v(" "),
                          n("LazyBaseSocialFacebookMobile"),
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
      t.default = component.exports;
      installComponents(component, {
        CoreBreadcrumbItem: n(537).default,
        CoreBreadcrumb: n(538).default,
      });
    },
  },
]);
