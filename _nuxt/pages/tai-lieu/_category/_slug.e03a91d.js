(window.webpackJsonp = window.webpackJsonp || []).push([
  [74, 24, 25],
  {
    525: function (t, e, c) {
      "use strict";
      var n = c(48);
      e.a = {
        computed: {
          getAuthor: function () {
            var t;
            return (
              (null == this || null === (t = this.article) || void 0 === t
                ? void 0
                : t.author) || n.a.AUTHOR
            );
          },
        },
      };
    },
    526: function (t, e, c) {
      var content = c(533);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, c(4).default)("7a695b94", content, !0, { sourceMap: !1 });
    },
    527: function (t, e, c) {
      var content = c(535);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, c(4).default)("a391bd16", content, !0, { sourceMap: !1 });
    },
    528: function (t, e, c) {
      "use strict";
      var n = c(48);
      e.a = {
        computed: {
          getCategory: function () {
            var t;
            return (
              (null == this || null === (t = this.article) || void 0 === t
                ? void 0
                : t.category) || n.a.CATEGORY
            );
          },
        },
      };
    },
    529: function (t, e, c) {
      "use strict";
      var n = c(48);
      e.a = {
        computed: {
          getThumbnail: function () {
            var t, e, c, r;
            return null !== (t = this.article) &&
              void 0 !== t &&
              null !== (e = t.image) &&
              void 0 !== e &&
              e.url
              ? null === (c = this.article) ||
                void 0 === c ||
                null === (r = c.image) ||
                void 0 === r
                ? void 0
                : r.url
              : n.b.IMAGE_THUMBNAIL;
          },
        },
      };
    },
    532: function (t, e, c) {
      "use strict";
      c(526);
    },
    533: function (t, e, c) {
      var n = c(3)(!1);
      n.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-7c8ebb62],.fade-in-linear-leave-active[data-v-7c8ebb62]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-7c8ebb62],.fade-in-linear-leave[data-v-7c8ebb62],.fade-in-linear-leave-active[data-v-7c8ebb62]{opacity:0}.el-fade-in-linear-enter-active[data-v-7c8ebb62],.el-fade-in-linear-leave-active[data-v-7c8ebb62]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-7c8ebb62],.el-fade-in-linear-leave[data-v-7c8ebb62],.el-fade-in-linear-leave-active[data-v-7c8ebb62]{opacity:0}.el-fade-in-enter-active[data-v-7c8ebb62],.el-fade-in-leave-active[data-v-7c8ebb62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-7c8ebb62],.el-fade-in-leave-active[data-v-7c8ebb62]{opacity:0}.el-zoom-in-center-enter-active[data-v-7c8ebb62],.el-zoom-in-center-leave-active[data-v-7c8ebb62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-7c8ebb62],.el-zoom-in-center-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-7c8ebb62],.el-zoom-in-top-leave-active[data-v-7c8ebb62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-7c8ebb62],.el-zoom-in-top-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-7c8ebb62],.el-zoom-in-bottom-leave-active[data-v-7c8ebb62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-7c8ebb62],.el-zoom-in-bottom-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-7c8ebb62],.el-zoom-in-left-leave-active[data-v-7c8ebb62]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-7c8ebb62],.el-zoom-in-left-leave-active[data-v-7c8ebb62]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-7c8ebb62]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-7c8ebb62]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-7c8ebb62],.el-list-leave-active[data-v-7c8ebb62]{transition:all 1s}.el-list-enter[data-v-7c8ebb62],.el-list-leave-active[data-v-7c8ebb62]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-7c8ebb62]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-breadcrumb__separator[data-v-7c8ebb62]{margin:0 9px;font-weight:bold;color:#c0c4cc}.el-breadcrumb__separator[class*=icon][data-v-7c8ebb62]{margin:0 6px;font-weight:normal}.el-breadcrumb__item[data-v-7c8ebb62]{float:left}.el-breadcrumb__inner[data-v-7c8ebb62]{color:#606266}.el-breadcrumb__inner.is-white[data-v-7c8ebb62]{color:gray !important}.el-breadcrumb__inner.is-link[data-v-7c8ebb62],.el-breadcrumb__inner a[data-v-7c8ebb62]{font-weight:bold;text-decoration:none;transition:color .2s cubic-bezier(0.645, 0.045, 0.355, 1);color:#303133}.el-breadcrumb__inner.is-link[data-v-7c8ebb62]:hover,.el-breadcrumb__inner a[data-v-7c8ebb62]:hover{color:#38b2ac;cursor:pointer}.el-breadcrumb__item:last-child .el-breadcrumb__inner[data-v-7c8ebb62],.el-breadcrumb__item:last-child .el-breadcrumb__inner[data-v-7c8ebb62]:hover,.el-breadcrumb__item:last-child .el-breadcrumb__inner a[data-v-7c8ebb62],.el-breadcrumb__item:last-child .el-breadcrumb__inner a[data-v-7c8ebb62]:hover{font-weight:normal;color:#606266;cursor:text}.el-breadcrumb__item:last-child .el-breadcrumb__separator[data-v-7c8ebb62]{display:none}",
        "",
      ]),
        (t.exports = n);
    },
    534: function (t, e, c) {
      "use strict";
      c(527);
    },
    535: function (t, e, c) {
      var n = c(3)(!1);
      n.push([
        t.i,
        '.fade-in-linear-enter-active[data-v-279c40fc],.fade-in-linear-leave-active[data-v-279c40fc]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-279c40fc],.fade-in-linear-leave[data-v-279c40fc],.fade-in-linear-leave-active[data-v-279c40fc]{opacity:0}.el-fade-in-linear-enter-active[data-v-279c40fc],.el-fade-in-linear-leave-active[data-v-279c40fc]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-279c40fc],.el-fade-in-linear-leave[data-v-279c40fc],.el-fade-in-linear-leave-active[data-v-279c40fc]{opacity:0}.el-fade-in-enter-active[data-v-279c40fc],.el-fade-in-leave-active[data-v-279c40fc]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-279c40fc],.el-fade-in-leave-active[data-v-279c40fc]{opacity:0}.el-zoom-in-center-enter-active[data-v-279c40fc],.el-zoom-in-center-leave-active[data-v-279c40fc]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-279c40fc],.el-zoom-in-center-leave-active[data-v-279c40fc]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-279c40fc],.el-zoom-in-top-leave-active[data-v-279c40fc]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-279c40fc],.el-zoom-in-top-leave-active[data-v-279c40fc]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-279c40fc],.el-zoom-in-bottom-leave-active[data-v-279c40fc]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-279c40fc],.el-zoom-in-bottom-leave-active[data-v-279c40fc]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-279c40fc],.el-zoom-in-left-leave-active[data-v-279c40fc]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-279c40fc],.el-zoom-in-left-leave-active[data-v-279c40fc]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-279c40fc]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-279c40fc]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-279c40fc],.el-list-leave-active[data-v-279c40fc]{transition:all 1s}.el-list-enter[data-v-279c40fc],.el-list-leave-active[data-v-279c40fc]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-279c40fc]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-breadcrumb[data-v-279c40fc]{font-size:14px;line-height:1;margin-bottom:.5rem}.el-breadcrumb[data-v-279c40fc]::before,.el-breadcrumb[data-v-279c40fc]::after{display:table;content:""}.el-breadcrumb[data-v-279c40fc]::after{clear:both}',
        "",
      ]),
        (t.exports = n);
    },
    536: function (t, e, c) {
      "use strict";
      c(544)("link", function (t) {
        return function (e) {
          return t(this, "a", "href", e);
        };
      });
    },
    537: function (t, e, c) {
      "use strict";
      c.r(e);
      c(536), c(43);
      var n = {
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
            var t = this;
            (this.separator = this.elBreadcrumb.separator),
              (this.separatorClass = this.elBreadcrumb.separatorClass);
            var link = this.$refs.link;
            link.setAttribute("role", "link"),
              link.addEventListener("click", function (e) {
                var c = t.to,
                  n = t.$router;
                c && n && (t.replace ? n.replace(c) : n.push(c));
              });
          },
        },
        r = (c(532), c(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              c = t._self._c || e;
            return c("span", { staticClass: "el-breadcrumb__item" }, [
              c(
                "span",
                {
                  ref: "link",
                  class: [
                    "el-breadcrumb__inner",
                    t.to ? "is-link" : "",
                    t.isWhite ? "is-white" : "",
                  ],
                  attrs: { role: "link" },
                },
                [t._t("default")],
                2
              ),
              t._v(" "),
              t.separatorClass
                ? c("i", {
                    staticClass: "el-breadcrumb__separator",
                    class: t.separatorClass,
                  })
                : c(
                    "span",
                    {
                      staticClass: "el-breadcrumb__separator",
                      attrs: { role: "presentation" },
                    },
                    [t._v(t._s(t.separator))]
                  ),
            ]);
          },
          [],
          !1,
          null,
          "7c8ebb62",
          null
        );
      e.default = component.exports;
    },
    538: function (t, e, c) {
      "use strict";
      c.r(e);
      var n = {
          name: "ElBreadcrumb",
          props: {
            separator: { type: String, default: "/" },
            separatorClass: { type: String, default: "" },
          },
          provide: function () {
            return { elBreadcrumb: this };
          },
          mounted: function () {
            var t = this.$el.querySelectorAll(".el-breadcrumb__item");
            t.length && t[t.length - 1].setAttribute("aria-current", "page");
          },
        },
        r = (c(534), c(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)(
              "div",
              {
                staticClass: "el-breadcrumb",
                attrs: { "aria-label": "Breadcrumb", role: "navigation" },
              },
              [t._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          "279c40fc",
          null
        );
      e.default = component.exports;
    },
    544: function (t, e, c) {
      var n = c(7),
        r = c(23),
        o = c(57),
        l = /"/g,
        h = function (t, e, c, n) {
          var r = String(o(t)),
            h = "<" + e;
          return (
            "" !== c &&
              (h += " " + c + '="' + String(n).replace(l, "&quot;") + '"'),
            h + ">" + r + "</" + e + ">"
          );
        };
      t.exports = function (t, e) {
        var c = {};
        (c[t] = e(h)),
          n(
            n.P +
              n.F *
                r(function () {
                  var e = ""[t]('"');
                  return e !== e.toLowerCase() || e.split('"').length > 3;
                }),
            "String",
            c
          );
      };
    },
    836: function (t, e, c) {
      "use strict";
      c.r(e);
      var n = c(5),
        r =
          (c(98),
          c(25),
          {
            slug: "unknown",
            name: "Không xác định",
            thumbnail: "/thumbnail.png",
            count: 0,
            description: "Không tìm được thể loại",
            keywords: [],
          }),
        o = [
          {
            slug: "javascript",
            name: "Javascript",
            thumbnail: "/modules/core/background/javascript.png",
            cover: "/modules/core/cover/javascript.png",
            count: 1,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình javascript, tài liệu học javascript từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học javascript",
              "bộ tài liệu học lập trình Javascript",
              "các trang web học javascript",
              "cách học javascript",
              "ebook học javascript",
              "giáo trình học javascript",
              "hướng dẫn học javascript",
              "học lập trình javascript cơ bản",
              "học lập trình web javascript",
              "học viết code javascript",
              "sách học javascript",
              "học javascript pdf",
              "ebook học javascript",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học Javascript",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học Javascript.",
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
            count: 2,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình html, tài liệu học html từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học html",
              "bộ tài liệu học lập trình html",
              "các trang web học html",
              "cách học html",
              "ebook học html",
              "giáo trình học html",
              "hướng dẫn học html",
              "học lập trình html cơ bản",
              "học lập trình web html",
              "hướng dẫn tự học html",
              "học cắt html css",
              "sách học html",
              "học html pdf",
              "ebook học html",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học HTML",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học HTML.",
              logo: "/language/html.png",
              url: "/phong-van/html",
            },
          },
          {
            slug: "css",
            name: "CSS",
            thumbnail: "/modules/core/background/css.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 2,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình CSS, tài liệu học CSS từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học css",
              "bộ tài liệu học lập trình css",
              "các trang web học css",
              "cách học css",
              "ebook học css",
              "giáo trình học css",
              "hướng dẫn học css",
              "học lập trình css cơ bản",
              "học lập trình web css",
              "hướng dẫn tự học css",
              "học cắt html css",
              "học css cơ bản",
              "sách học css",
              "học css pdf",
              "ebook học css",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học CSS",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description: "Tổng hợp tài liệu, giáo trình, tài nguyên học CSS.",
              logo: "/language/css.png",
              url: "/phong-van/css",
            },
          },
          {
            slug: "reactjs",
            name: "ReactJs",
            thumbnail: "/modules/core/background/reactjs.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 2,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình reactjs, tài liệu học reactjs từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học reactjs",
              "bộ tài liệu học lập trình reactjs",
              "các trang web học reactjs",
              "cách học reactjs",
              "ebook học reactjs",
              "giáo trình học reactjs",
              "hướng dẫn học reactjs",
              "học lập trình reactjs cơ bản",
              "học lập trình web reactjs",
              "hướng dẫn tự học reactjs",
              "học reactjs cơ bản",
              "chia sẻ khóa học reactjs",
              "hướng dẫn học reactjs",
              "sách học reactjs",
              "học reactjs pdf",
              "ebook học reactjs",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học ReactJS",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học ReactJS.",
              logo: "/language/reactjs.png",
              url: "/phong-van/reactjs",
            },
          },
          {
            slug: "vuejs",
            name: "VueJS",
            thumbnail: "/modules/core/background/vuejs.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 1,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình vuejs, tài liệu học vuejs từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học vuejs",
              "bộ tài liệu học lập trình vuejs",
              "các trang web học vuejs",
              "cách học vuejs",
              "ebook học vuejs",
              "giáo trình học vuejs",
              "hướng dẫn học vuejs",
              "học lập trình vuejs cơ bản",
              "học lập trình web vuejs",
              "hướng dẫn tự học vuejs",
              "học vuejs cơ bản",
              "chia sẻ khóa học vuejs",
              "hướng dẫn học vuejs",
              "sách học vuejs",
              "học vuejs pdf",
              "ebook học vuejs",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học VueJS",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học VueJS.",
              logo: "/language/vuejs.png",
              url: "/phong-van/vuejs",
            },
          },
          {
            slug: "java",
            name: "Java",
            thumbnail: "/modules/core/background/java.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 2,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình java, tài liệu học java từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học java",
              "bộ tài liệu học lập trình java",
              "các trang web học java",
              "cách học java",
              "ebook học java",
              "giáo trình học java",
              "hướng dẫn học java",
              "học lập trình java cơ bản",
              "học lập trình web java",
              "hướng dẫn tự học java",
              "học java cơ bản",
              "chia sẻ khóa học java",
              "hướng dẫn học java",
              "sách học java",
              "học java pdf",
              "ebook học java",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học Java",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học Java.",
              logo: "/language/java.png",
              url: "/phong-van/java",
            },
          },
          {
            slug: "c",
            name: "C/C++",
            thumbnail: "/modules/core/background/c.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 1,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình C/C++, tài liệu học C/C++ từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học C/C++",
              "bộ tài liệu học lập trình C/C++",
              "các trang web học C/C++",
              "cách học C/C++",
              "ebook học C/C++",
              "giáo trình học C/C++",
              "hướng dẫn học C/C++",
              "học lập trình C/C++ cơ bản",
              "học lập trình web C/C++",
              "hướng dẫn tự học C/C++",
              "học C/C++ cơ bản",
              "chia sẻ khóa học C/C++",
              "hướng dẫn học C/C++",
              "sách học C/C++",
              "học C/C++ pdf",
              "ebook học C/C++",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học C/C++",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học C/C++.",
              logo: "/language/c.png",
              url: "/phong-van/c",
            },
          },
          {
            slug: "python",
            name: "Python",
            thumbnail: "/modules/core/background/python.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 1,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình python, tài liệu học python từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học vuejs",
              "bộ tài liệu học lập trình python",
              "các trang web học python",
              "cách học python",
              "ebook học python",
              "giáo trình học python",
              "hướng dẫn học python",
              "học lập trình python cơ bản",
              "học lập trình web python",
              "hướng dẫn tự học python",
              "học python cơ bản",
              "chia sẻ khóa học python",
              "hướng dẫn học python",
              "sách học python",
              "học python pdf",
              "ebook học python",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học Python",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học Python.",
              logo: "/language/python.png",
              url: "/phong-van/python",
            },
          },
          {
            slug: "nodejs",
            name: "NodeJs",
            thumbnail: "/modules/core/background/nodejs.png",
            cover:
              "https://user-images.githubusercontent.com/29374426/157360501-5441e0cf-039e-4bff-bbcd-05d91400f703.png",
            count: 1,
            description:
              "Tổng hợp các nguồn tài nguyên, giáo trình, sách, ebook học lập trình nodejs, tài liệu học nodejs từ cơ bản đến nâng cao cho mọi đối tượng",
            keywords: [
              "học vuejs",
              "bộ tài liệu học lập trình nodejs",
              "các trang web học nodejs",
              "cách học nodejs",
              "ebook học nodejs",
              "giáo trình học nodejs",
              "hướng dẫn học nodejs",
              "học lập trình nodejs cơ bản",
              "học lập trình web nodejs",
              "hướng dẫn tự học nodejs",
              "học nodejs cơ bản",
              "chia sẻ khóa học nodejs",
              "hướng dẫn học nodejs",
              "sách học nodejs",
              "học nodejs pdf",
              "ebook học nodejs",
            ],
            inArticle: {
              title: "Tổng hợp tài liệu học NodeJS",
              subTitle: "Chuyên mục chia sẻ tài liệu học lập trình",
              description:
                "Tổng hợp tài liệu, giáo trình, tài nguyên học NodeJS.",
              logo: "/language/nodejs.png",
              url: "/phong-van/nodejs",
            },
          },
        ],
        l = c(48),
        h = c(528),
        d = c(95),
        v = c(525),
        m = c(96),
        f = c(529),
        y = {
          mixins: [h.a, v.a, m.a, d.a, f.a],
          layout: "interview",
          asyncData: function (t) {
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                var c, n, article;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (c = t.$content),
                          (n = t.params),
                          (e.next = 3),
                          c(
                            "document/".concat(null == n ? void 0 : n.category),
                            null == n ? void 0 : n.slug
                          ).fetch()
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
          data: function () {
            var t,
              e,
              c =
                (null === (t = this.$route) ||
                void 0 === t ||
                null === (e = t.params) ||
                void 0 === e
                  ? void 0
                  : e.category) || "unknown";
            return {
              category:
                o.find(function (t) {
                  return t.slug === c;
                }) || r,
            };
          },
          head: function () {
            var t,
              e,
              c = this.category,
              n = this.getTitle,
              r = this.getDescription,
              o =
                null == c || null === (t = c.keywords) || void 0 === t
                  ? void 0
                  : t.join(", "),
              h = this.getThumbnail,
              d = l.c.ARTICLE,
              v =
                null === (e = this.getAuthor) || void 0 === e
                  ? void 0
                  : e.fullname,
              m = l.b.URL + this.$route.fullPath;
            return {
              title: n,
              meta: [
                { hid: "og:title", property: "og:title", content: n },
                { hid: "twitter:title", name: "twitter:title", content: n },
                { hid: "description", name: "description", content: r },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: r,
                },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: r,
                },
                { hid: "keywords", name: "keywords", content: o },
                { hid: "og:keywords", name: "keywords", content: o },
                { hid: "og:image", property: "og:image", content: h },
                { hid: "twitter:image", name: "twitter:image", content: h },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: n,
                },
                { hid: "og:type", property: "og:type", content: d },
                {
                  hid: "twitter:card",
                  name: "twitter:card",
                  content: l.b.IMAGE_THUMBNAIL,
                },
                { hid: "author", property: "author", content: v },
                { hid: "og:url", property: "og:url", content: m },
                { hid: "twitter:site", name: "twitter:site", content: m },
              ],
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    name: "Kungfu Tech",
                    alternateName: "TITLE",
                    url: m,
                    "@context": "http://schema.org",
                    "@type": "NewsArticle",
                    mainEntityOfPage: { "@type": "WebPage", "@id": m },
                    headline: n,
                    image: {
                      "@type": "ImageObject",
                      url: h,
                      width: 700,
                      height: 400,
                    },
                    author: { "@type": "Person", name: v },
                    publisher: {
                      "@type": "Organization",
                      name: "Kungfu Tech",
                      logo: {
                        "@type": "ImageObject",
                        url: h,
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
        j = c(10),
        component = Object(j.a)(
          y,
          function () {
            var t = this,
              e = t.$createElement,
              c = t._self._c || e;
            return c("div", { staticClass: "wrapper" }, [
              c(
                "div",
                { staticClass: "container" },
                [
                  c(
                    "el-row",
                    { staticClass: "wrap-interview", attrs: { gutter: 24 } },
                    [
                      c(
                        "el-col",
                        {
                          staticClass: "article article__top",
                          attrs: { md: 18, lg: 18, sm: 24 },
                        },
                        [
                          c(
                            "CoreBreadcrumb",
                            [
                              c(
                                "CoreBreadcrumbItem",
                                { attrs: { to: { path: "/tai-nguyen" } } },
                                [t._v("Tài nguyên")]
                              ),
                              t._v(" "),
                              c(
                                "CoreBreadcrumbItem",
                                {
                                  attrs: {
                                    to: {
                                      path:
                                        "/tai-lieu/tim-kiem?category=" +
                                        t.article.category.slug,
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "Tài liệu lập trình\n            " +
                                      t._s(t.article.category.slug)
                                  ),
                                ]
                              ),
                              t._v(" "),
                              c(
                                "CoreBreadcrumbItem",
                                {
                                  attrs: {
                                    to: {
                                      path:
                                        "/phong-van/" + t.article.category.slug,
                                    },
                                  },
                                },
                                [t._v("\n            Chi tiết bài viết")]
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          c("h1", { staticClass: "title-nuxt-content" }, [
                            t._v(t._s(t.getTitle)),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      c(
                        "el-col",
                        {
                          staticClass: "article",
                          attrs: { md: 18, lg: 18, sm: 24 },
                        },
                        [
                          c(
                            "article",
                            { staticClass: "article__content" },
                            [
                              c("nuxt-content", {
                                staticClass: "content-article nuxt-fpt mb-13",
                                attrs: {
                                  id: "content",
                                  document: t.article,
                                  "live-edit": !1,
                                },
                              }),
                              t._v(" "),
                              c("el-divider"),
                              t._v(" "),
                              c("LazySharedArticleDescription", {
                                attrs: {
                                  fullname: t.getAuthor.fullname,
                                  username: t.getAuthor.username,
                                  bio: t.getAuthor.bio,
                                  avatar: t.getAuthor.avatar,
                                  "category-title": t.category.inArticle.title,
                                  "category-sub-title":
                                    t.category.inArticle.subTitle,
                                  "category-url": t.category.inArticle.url,
                                  "category-description":
                                    t.category.inArticle.description,
                                  "category-logo": t.category.inArticle.logo,
                                },
                              }),
                              t._v(" "),
                              c("el-divider"),
                              t._v(" "),
                              c("LazySharedArticleComment"),
                            ],
                            1
                          ),
                        ]
                      ),
                      t._v(" "),
                      c(
                        "el-col",
                        { attrs: { md: 6, lg: 6, sm: 24 } },
                        [
                          c("LazyBaseSocialYoutube", {
                            attrs: { isArticle: "" },
                          }),
                          t._v(" "),
                          c("LazyBaseSocialFacebook", {
                            attrs: { isArticle: "" },
                          }),
                          t._v(" "),
                          c("LazyHomeHotNews"),
                          t._v(" "),
                          c("LazyBaseSocialFacebookMobile"),
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
      installComponents(component, {
        CoreBreadcrumbItem: c(537).default,
        CoreBreadcrumb: c(538).default,
      });
    },
  },
]);
