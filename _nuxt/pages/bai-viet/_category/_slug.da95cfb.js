(window.webpackJsonp = window.webpackJsonp || []).push([
  [63, 24],
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
    526: function (t, e, n) {
      var content = n(533);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("7a695b94", content, !0, { sourceMap: !1 });
    },
    527: function (t, e, n) {
      var content = n(535);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("a391bd16", content, !0, { sourceMap: !1 });
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
            var t, e, n, c;
            return null !== (t = this.article) &&
              void 0 !== t &&
              null !== (e = t.image) &&
              void 0 !== e &&
              e.url
              ? null === (n = this.article) ||
                void 0 === n ||
                null === (c = n.image) ||
                void 0 === c
                ? void 0
                : c.url
              : r.b.IMAGE_THUMBNAIL;
          },
        },
      };
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
    532: function (t, e, n) {
      "use strict";
      n(526);
    },
    533: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-7c8ebb62],.fade-in-linear-leave-active[data-v-7c8ebb62]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-7c8ebb62],.fade-in-linear-leave[data-v-7c8ebb62],.fade-in-linear-leave-active[data-v-7c8ebb62]{opacity:0}.el-fade-in-linear-enter-active[data-v-7c8ebb62],.el-fade-in-linear-leave-active[data-v-7c8ebb62]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-7c8ebb62],.el-fade-in-linear-leave[data-v-7c8ebb62],.el-fade-in-linear-leave-active[data-v-7c8ebb62]{opacity:0}.el-fade-in-enter-active[data-v-7c8ebb62],.el-fade-in-leave-active[data-v-7c8ebb62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-7c8ebb62],.el-fade-in-leave-active[data-v-7c8ebb62]{opacity:0}.el-zoom-in-center-enter-active[data-v-7c8ebb62],.el-zoom-in-center-leave-active[data-v-7c8ebb62]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-7c8ebb62],.el-zoom-in-center-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-7c8ebb62],.el-zoom-in-top-leave-active[data-v-7c8ebb62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-7c8ebb62],.el-zoom-in-top-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-7c8ebb62],.el-zoom-in-bottom-leave-active[data-v-7c8ebb62]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-7c8ebb62],.el-zoom-in-bottom-leave-active[data-v-7c8ebb62]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-7c8ebb62],.el-zoom-in-left-leave-active[data-v-7c8ebb62]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-7c8ebb62],.el-zoom-in-left-leave-active[data-v-7c8ebb62]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-7c8ebb62]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-7c8ebb62]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-7c8ebb62],.el-list-leave-active[data-v-7c8ebb62]{transition:all 1s}.el-list-enter[data-v-7c8ebb62],.el-list-leave-active[data-v-7c8ebb62]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-7c8ebb62]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-breadcrumb__separator[data-v-7c8ebb62]{margin:0 9px;font-weight:bold;color:#c0c4cc}.el-breadcrumb__separator[class*=icon][data-v-7c8ebb62]{margin:0 6px;font-weight:normal}.el-breadcrumb__item[data-v-7c8ebb62]{float:left}.el-breadcrumb__inner[data-v-7c8ebb62]{color:#606266}.el-breadcrumb__inner.is-white[data-v-7c8ebb62]{color:gray !important}.el-breadcrumb__inner.is-link[data-v-7c8ebb62],.el-breadcrumb__inner a[data-v-7c8ebb62]{font-weight:bold;text-decoration:none;transition:color .2s cubic-bezier(0.645, 0.045, 0.355, 1);color:#303133}.el-breadcrumb__inner.is-link[data-v-7c8ebb62]:hover,.el-breadcrumb__inner a[data-v-7c8ebb62]:hover{color:#38b2ac;cursor:pointer}.el-breadcrumb__item:last-child .el-breadcrumb__inner[data-v-7c8ebb62],.el-breadcrumb__item:last-child .el-breadcrumb__inner[data-v-7c8ebb62]:hover,.el-breadcrumb__item:last-child .el-breadcrumb__inner a[data-v-7c8ebb62],.el-breadcrumb__item:last-child .el-breadcrumb__inner a[data-v-7c8ebb62]:hover{font-weight:normal;color:#606266;cursor:text}.el-breadcrumb__item:last-child .el-breadcrumb__separator[data-v-7c8ebb62]{display:none}",
        "",
      ]),
        (t.exports = r);
    },
    534: function (t, e, n) {
      "use strict";
      n(527);
    },
    535: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        '.fade-in-linear-enter-active[data-v-279c40fc],.fade-in-linear-leave-active[data-v-279c40fc]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-279c40fc],.fade-in-linear-leave[data-v-279c40fc],.fade-in-linear-leave-active[data-v-279c40fc]{opacity:0}.el-fade-in-linear-enter-active[data-v-279c40fc],.el-fade-in-linear-leave-active[data-v-279c40fc]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-279c40fc],.el-fade-in-linear-leave[data-v-279c40fc],.el-fade-in-linear-leave-active[data-v-279c40fc]{opacity:0}.el-fade-in-enter-active[data-v-279c40fc],.el-fade-in-leave-active[data-v-279c40fc]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-279c40fc],.el-fade-in-leave-active[data-v-279c40fc]{opacity:0}.el-zoom-in-center-enter-active[data-v-279c40fc],.el-zoom-in-center-leave-active[data-v-279c40fc]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-279c40fc],.el-zoom-in-center-leave-active[data-v-279c40fc]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-279c40fc],.el-zoom-in-top-leave-active[data-v-279c40fc]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-279c40fc],.el-zoom-in-top-leave-active[data-v-279c40fc]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-279c40fc],.el-zoom-in-bottom-leave-active[data-v-279c40fc]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-279c40fc],.el-zoom-in-bottom-leave-active[data-v-279c40fc]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-279c40fc],.el-zoom-in-left-leave-active[data-v-279c40fc]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-279c40fc],.el-zoom-in-left-leave-active[data-v-279c40fc]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-279c40fc]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-279c40fc]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-279c40fc],.el-list-leave-active[data-v-279c40fc]{transition:all 1s}.el-list-enter[data-v-279c40fc],.el-list-leave-active[data-v-279c40fc]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-279c40fc]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-breadcrumb[data-v-279c40fc]{font-size:14px;line-height:1;margin-bottom:.5rem}.el-breadcrumb[data-v-279c40fc]::before,.el-breadcrumb[data-v-279c40fc]::after{display:table;content:""}.el-breadcrumb[data-v-279c40fc]::after{clear:both}',
        "",
      ]),
        (t.exports = r);
    },
    537: function (t, e, n) {
      "use strict";
      n.r(e);
      n(536), n(43);
      var r = {
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
                var n = t.to,
                  r = t.$router;
                n && r && (t.replace ? r.replace(n) : r.push(n));
              });
          },
        },
        c = (n(532), n(10)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("span", { staticClass: "el-breadcrumb__item" }, [
              n(
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
                ? n("i", {
                    staticClass: "el-breadcrumb__separator",
                    class: t.separatorClass,
                  })
                : n(
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
    538: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
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
        c = (n(534), n(10)),
        component = Object(c.a)(
          r,
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
    546: function (t, e, n) {
      "use strict";
      e.a = {
        computed: {
          getSlug: function () {
            var t, e, n;
            return "/bai-viet/"
              .concat(
                null === (t = this.article) ||
                  void 0 === t ||
                  null === (e = t.category) ||
                  void 0 === e
                  ? void 0
                  : e.slug,
                "/"
              )
              .concat(
                (null === (n = this.article) || void 0 === n
                  ? void 0
                  : n.slug) || "/"
              );
          },
        },
      };
    },
    548: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = {
          java: {
            pathContent: "java-core",
            path: "java",
            title: "Java từ cơ bản đến nâng cao",
            description:
              "Java là một trong những ngôn ngữ lập trình hướng đối tượng. Nó được sử dụng trong phát triển phần mềm, trang web, game hay ứng dụng trên các thiết bị di động. Cuốn Java được viết một cách bài bản, chi tiết từ những kiến thức nền tảng giành cho mọi đối tượng",
            keywords: [
              "học lập trình java từ cơ bản đến nâng cao",
              "học lập trình java cho người mới bắt đầu",
              "tài liệu học java cho người mới bắt đầu",
              "học java từ cơ bản đến nâng cao",
              "học java cho người mới bắt đầu",
              "java cơ bản đến nâng cao",
              "java căn bản",
              "học java core",
              "học lập trình java",
              "tự học java cơ bản",
              "java cho người mới bắt đầu",
              "lộ trình học java",
            ],
            chapters: [
              {
                link: "/bai-viet/java/gioi-thieu-ngon-ngu-lap-trinh-java",
                title: "Chương 1: Giới thiệu Java",
              },
              {
                link: "/bai-viet/java/bo-ky-tu-dung-trong-java",
                title: "Chương 2: Nhập môn Java",
              },
              {
                link: "/bai-viet/java/lap-trinh-huong-doi-tuong",
                title: "Chương 3: Lập trình hướng đối tượng",
              },
              {
                link: "/bai-viet/java/collections-trong-java",
                title: "Chương 4: Java collections",
              },
              {
                link: "/bai-viet/java/exception-trong-java",
                title: "Chương 5: Xử lý ngoại lệ",
              },
              {
                link: "/bai-viet/java/da-luong-trong-java",
                title: "Chương 6: Lập trình đa tuyến",
              },
            ],
            category: ["backend"],
            colors: { background1: "#adadad", background2: "#3a3a3a" },
            bookTitle: "JAVA CƠ BẢN",
            bookDescription: "kungfutech.edu.vn",
            bookContent: "Khám phá",
          },
          javascript: {
            pathContent: "javascript",
            path: "javascript",
            title: "Javascript từ cơ bản đến nâng cao",
            description:
              "Javascript (thường hay viết tắt là JS) là ngôn ngữ lập trình kịch bản (scripting language) cho client-side, sau này còn cho cả server-side (Nodejs). Javascript được sử dụng chủ yếu để nâng cao sự tương tác của người dùng với trang web. Nói cách khác, bạn có thể làm cho trang web trở nên sinh động và tăng tính tương tác hơn.",
            keywords: [
              "học lập trình javascript từ cơ bản đến nâng cao",
              "học lập trình javascript cho người mới bắt đầu",
              "tài liệu học javascript cho người mới bắt đầu",
              "học javascript từ cơ bản đến nâng cao",
              "học javascript cho người mới bắt đầu",
              "javascript cơ bản đến nâng cao",
              "javascript căn bản",
              "học javascript core",
              "học lập trình javascript",
              "tự học javascript cơ bản",
              "javascript cho người mới bắt đầu",
              "lộ trình học javascript",
            ],
            chapters: [
              {
                title: "Chương 1: Giới thiệu Javascript",
                link: "/bai-viet/javascript/gioi-thieu-javascript",
              },
              {
                title: "Chương 2: Javascript cơ bản",
                link: "/bai-viet/javascript/chuong-trinh-javascript-dau-tien",
              },
            ],
            bookTitle: "JAVASCRIPT TRỌN BỘ",
            bookDescription: "kungfutech.edu.vn",
            bookContent: "Khám phá",
            category: ["backend", "frontend"],
            colors: { background1: "#ffd400", background2: "#f39f86" },
          },
          docker: {
            pathContent: "docker",
            path: "docker",
            title: "Docker cơ bản",
            description:
              "Docker là một nền tảng để cung cấp cách để building, deploying và running ứng dụng dễ dàng hơn bằng cách sử dụng các containers (trên nền tảng ảo hóa). Ban đầu viết bằng Python, hiện tại đã chuyển sang Golang.",
            keywords: [
              "học lập trình docker từ cơ bản đến nâng cao",
              "học lập trình docker cho người mới bắt đầu",
              "tài liệu học docker cho người mới bắt đầu",
              "học docker từ cơ bản đến nâng cao",
              "học docker cho người mới bắt đầu",
              "docker cơ bản đến nâng cao",
              "docker căn bản",
              "học docker core",
              "học lập trình docker",
              "tự học docker cơ bản",
              "docker cho người mới bắt đầu",
              "lộ trình học docker",
            ],
            chapters: [
              {
                link: "/khoa-hoc/docker",
                title: "Chương 1: Giới thiệu Docker",
              },
            ],
            bookTitle: "DOCKER CƠ BẢN",
            bookDescription: "kungfutech.edu.vn",
            bookContent: "Khám phá",
            category: ["devops"],
            colors: { background1: "#6776c1", background2: "#3346a7" },
          },
          aws: {
            pathContent: "aws",
            path: "aws",
            title: "Amazon Web Service cơ bản",
            description:
              "Aamazon Web Services là nền tảng điện toán mây được cung cấp bởi Amazon và đang chiếm thị phần lớn nhất thế giới tính đến thời điểm hiện tại. AWS cung cấp những giải pháp về storage, computing, database...",
            keywords: [
              "học lập trình Amazon Web Service cho người mới bắt đầu",
              "tài liệu học Amazon Web Service cho người mới bắt đầu",
              "học Amazon Web Service từ cơ bản đến nâng cao",
              "học Amazon Web Service cho người mới bắt đầu",
              "Amazon Web Service cơ bản đến nâng cao",
              "Amazon Web Service căn bản",
              "học Amazon Web Service core",
              "học lập trình Amazon Web Service",
              "tự học Amazon Web Service cơ bản",
              "Amazon Web Service cho người mới bắt đầu",
              "lộ trình học Amazon Web Service",
            ],
            chapters: [
              {
                title: "Chương 1: Giới thiệu AWS",
                link: "/bai-viet/aws/gioi-thieu",
              },
              {
                title: "Chương 2: Elastic Compute Cloud",
                link: "/bai-viet/aws/ec2-gioi-thieu",
              },
              {
                title: "Chương 3: High Avalability",
                link: "/bai-viet/aws/gioi-thieu-ha",
              },
              {
                title: "Chương 4: Virtual Private Cloud",
                link: "/bai-viet/aws/vpc-gioi-thieu",
              },
              {
                title: "Chương 5: Database",
                link: "/bai-viet/aws/database-rds",
              },
              {
                title: "Chương 6: Simple Storage Serivce",
                link: "/bai-viet/aws/s3-gioi-thieu",
              },
            ],
            bookTitle: "AWS CƠ BẢN",
            bookDescription: "kungfutech.edu.vn",
            bookContent: "Khám phá",
            category: ["devops"],
            colors: { background1: "#df8f3d", background2: "#974d02" },
          },
        },
        c = [
          {
            id: 1,
            title: "Java cơ bản cho người mới bắt đầu",
            url: "/khoa-hoc/java",
            image: "/v1638645920/assets/course1_ry7c38.png",
            chapters: [
              {
                id: 1.1,
                name: "Chương 1: Giới thiệu Java",
                link: "/bai-viet/java/gioi-thieu-ngon-ngu-lap-trinh-java",
              },
              {
                id: 1.2,
                name: "Chương 2: Nhập môn Java",
                link: "/bai-viet/java/bo-ky-tu-dung-trong-java",
              },
              {
                id: 1.3,
                name: "Chương 3: Lập trình hướng đối tượng",
                link: "/bai-viet/java/lap-trinh-huong-doi-tuong",
              },
              {
                id: 1.4,
                name: "Chương 4: Xử lý ngoại lệ",
                link: "/bai-viet/java/collections-trong-java",
              },
              {
                id: 1.5,
                name: "Chương 5: Lập trình đa tuyến",
                link: "/bai-viet/java/exception-trong-java",
              },
              {
                id: 1.6,
                name: "Chương 6: Nhập xuất",
                link: "/bai-viet/java/da-luong-trong-java",
              },
            ],
          },
          {
            id: 2,
            title: "Amazon Web Service cơ bản",
            url: "/khoa-hoc/aws",
            image: "/v1638645920/assets/course2_viye7a.png",
            chapters: [
              {
                id: 2.1,
                name: "Chương 1: Giới thiệu AWS?",
                link: "/bai-viet/aws/gioi-thieu",
              },
              {
                id: 2.2,
                name: "Chương 2: Elastic Compute Cloud",
                link: "/bai-viet/aws/ec2-gioi-thieu",
              },
              {
                id: 2.3,
                name: "Chương 3: High Avalability",
                link: "/bai-viet/aws/gioi-thieu-ha",
              },
              {
                id: 2.4,
                name: "Chương 4: Virtual Private Cloud",
                link: "/bai-viet/aws/vpc-gioi-thieu",
              },
              {
                id: 2.5,
                name: "Chương 5: Database",
                link: "/bai-viet/aws/database-rds",
              },
              {
                id: 2.6,
                name: "Chương 6: Simple Storage Serivce",
                link: "/bai-viet/aws/s3-gioi-thieu",
              },
            ],
          },
        ];
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
    633: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDguMTI0NTlMMTEuMTIgMTIuMDA0NkwxNSAxNS44ODQ2QzE1LjM5IDE2LjI3NDYgMTUuMzkgMTYuOTA0NiAxNSAxNy4yOTQ2QzE0LjYxIDE3LjY4NDYgMTMuOTggMTcuNjg0NiAxMy41OSAxNy4yOTQ2TDguOTk5OTggMTIuNzA0NkM4LjYwOTk4IDEyLjMxNDYgOC42MDk5OCAxMS42ODQ2IDguOTk5OTggMTEuMjk0NkwxMy41OSA2LjcwNDU5QzEzLjc3NjggNi41MTczNCAxNC4wMzA1IDYuNDEyMTEgMTQuMjk1IDYuNDEyMTFDMTQuNTU5NSA2LjQxMjExIDE0LjgxMzEgNi41MTczNCAxNSA2LjcwNDU5QzE1LjM4IDcuMDk0NTkgMTUuMzkgNy43MzQ1OSAxNSA4LjEyNDU5WiIgZmlsbD0iIzFGMjkzNyIvPgo8L3N2Zz4K";
    },
    634: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMTUuODc0NkwxMi44OCAxMS45OTQ2TDkuMDAwMDEgOC4xMTQ2MUM4LjgxMjc1IDcuOTI3NzggOC43MDc1MiA3LjY3NDEzIDguNzA3NTIgNy40MDk2MUM4LjcwNzUyIDcuMTQ1MDkgOC44MTI3NSA2Ljg5MTQ0IDkuMDAwMDEgNi43MDQ2MUM5LjM5MDAxIDYuMzE0NjEgMTAuMDIgNi4zMTQ2MSAxMC40MSA2LjcwNDYxTDE1IDExLjI5NDZDMTUuMzkgMTEuNjg0NiAxNS4zOSAxMi4zMTQ2IDE1IDEyLjcwNDZMMTAuNDEgMTcuMjk0NkMxMC4wMiAxNy42ODQ2IDkuMzkwMDEgMTcuNjg0NiA5LjAwMDAxIDE3LjI5NDZDOC42MjAwMSAxNi45MDQ2IDguNjEwMDEgMTYuMjY0NiA5LjAwMDAxIDE1Ljg3NDZaIiBmaWxsPSIjMUYyOTM3Ii8+Cjwvc3ZnPgo=";
    },
    635: function (t, e, n) {
      var content = n(717);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("b001a004", content, !0, { sourceMap: !1 });
    },
    715: function (t, e, n) {
      "use strict";
      var r = n(7),
        c = n(79)(6),
        o = "findIndex",
        l = !0;
      o in [] &&
        Array(1)[o](function () {
          l = !1;
        }),
        r(r.P + r.F * l, "Array", {
          findIndex: function (t) {
            return c(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(136)(o);
    },
    716: function (t, e, n) {
      "use strict";
      n(635);
    },
    717: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        '.fade-in-linear-enter-active[data-v-369d8854],.fade-in-linear-leave-active[data-v-369d8854]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-369d8854],.fade-in-linear-leave[data-v-369d8854],.fade-in-linear-leave-active[data-v-369d8854]{opacity:0}.el-fade-in-linear-enter-active[data-v-369d8854],.el-fade-in-linear-leave-active[data-v-369d8854]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-369d8854],.el-fade-in-linear-leave[data-v-369d8854],.el-fade-in-linear-leave-active[data-v-369d8854]{opacity:0}.el-fade-in-enter-active[data-v-369d8854],.el-fade-in-leave-active[data-v-369d8854]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-369d8854],.el-fade-in-leave-active[data-v-369d8854]{opacity:0}.el-zoom-in-center-enter-active[data-v-369d8854],.el-zoom-in-center-leave-active[data-v-369d8854]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-369d8854],.el-zoom-in-center-leave-active[data-v-369d8854]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-369d8854],.el-zoom-in-top-leave-active[data-v-369d8854]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-369d8854],.el-zoom-in-top-leave-active[data-v-369d8854]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-369d8854],.el-zoom-in-bottom-leave-active[data-v-369d8854]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-369d8854],.el-zoom-in-bottom-leave-active[data-v-369d8854]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-369d8854],.el-zoom-in-left-leave-active[data-v-369d8854]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-369d8854],.el-zoom-in-left-leave-active[data-v-369d8854]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-369d8854]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-369d8854]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-369d8854],.el-list-leave-active[data-v-369d8854]{transition:all 1s}.el-list-enter[data-v-369d8854],.el-list-leave-active[data-v-369d8854]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-369d8854]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.wrap-course[data-v-369d8854]{margin-top:65px}@media(min-width: 768px){.wrap-course[data-v-369d8854]{margin-top:130px}}.sticky-left[data-v-369d8854]{position:sticky;top:265px}.roadmap[data-v-369d8854]{margin-top:130px}.article[data-v-369d8854]{border-radius:8px}@media(max-width: 768px){.article__content[data-v-369d8854]{padding:.5rem}}.article__social[data-v-369d8854]{font-family:"Merriweather",serif;display:flex;align-items:center;justify-content:space-between;margin-top:0}.article__dot[data-v-369d8854]{padding:1px;border-radius:9999px;margin:0 4px;background-color:#515151}.article__datetime[data-v-369d8854]{display:flex;align-items:center;font-size:14px;line-height:22px;color:#515151}.article__top[data-v-369d8854]{padding:0;margin-bottom:33px}@media(min-width: 768px){.article__top[data-v-369d8854]{margin-bottom:1rem}}.article__toc[data-v-369d8854]{font-family:"Merriweather",serif;background:#f3f4f6;border:1px solid #e5e7eb;box-sizing:border-box;border-radius:7px;padding:24px 13px}@media(min-width: 768px){.article__toc[data-v-369d8854]{padding:35px}}.article__toc-title[data-v-369d8854]{margin:0 0 .5rem 0;font-weight:700;font-size:1.5rem;line-height:150%;color:#1f2937;font-family:"Exo",-apple-system,sans-serif}@media(min-width: 768px){.article__toc-title[data-v-369d8854]{font-size:1.5rem;line-height:150%}}.article ol[data-v-369d8854]{margin:0;padding:0 10px;line-height:160%;color:#6b7280;list-style:none}.article ol li[data-v-369d8854]{margin-top:2px;font-size:1.125rem;line-height:1.6;color:#6b7280;font-style:italic;font-family:"Exo",-apple-system,sans-serif}.article ol a[data-v-369d8854]{text-decoration:underline;color:#1f2937}.article ol a[data-v-369d8854]:visited{color:#1f2937}.article__continue[data-v-369d8854]{margin-top:140px;border-radius:10px;background:#f3f4f6;padding:8px 18px;display:flex;align-items:flex-start;justify-content:space-between}@media(min-width: 768px){.article__continue[data-v-369d8854]{padding:32px 40px}}.article__continue-mb[data-v-369d8854]{display:flex;align-items:center;justify-content:space-between}.article__continue-nav[data-v-369d8854]{max-width:50%;display:flex;flex-direction:column}.article__continue-left[data-v-369d8854]{align-items:flex-start}.article__continue-left .article__continue-link[data-v-369d8854]{text-align:left}.article__continue-prev[data-v-369d8854]{color:#1f2937;font-size:12px;line-height:20px;font-style:italic;letter-spacing:.2px;padding-left:1.7rem}.article__continue-next[data-v-369d8854]{font-size:12px;color:#1f2937;line-height:20px;font-style:italic;letter-spacing:.2px;text-align:right;padding-right:1.7rem}.article__continue-title[data-v-369d8854]{font-weight:bold;font-size:20px;line-height:32px;color:#1f2937;display:none}@media(min-width: 768px){.article__continue-title[data-v-369d8854]{display:flex;align-items:center;text-align:left}}.article__continue-link[data-v-369d8854]{color:#1f2937;font-weight:bold;font-size:20px;line-height:32px;text-align:right}.sidebar[data-v-369d8854]{position:fixed;top:30vh;z-index:999}.sidebar--mobile[data-v-369d8854]{position:fixed;bottom:0;width:100vw;background:#fff;z-index:2;box-shadow:0 -2px 3px 0 rgba(0,0,0,.05)}.sidebar .icon[data-v-369d8854]{width:3rem;height:3rem;border-radius:50%;box-shadow:.3rem .3rem .6rem #c8d0e7,-0.2rem -0.2rem .5rem #fff;display:flex;cursor:pointer;justify-content:center;align-items:center;font-size:18px;color:#9baacf;transition:all .5s ease;margin-bottom:15px}.sidebar .icon[data-v-369d8854]:focus{outline:none}.sidebar .icon[data-v-369d8854]:active{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.sidebar .icon[data-v-369d8854]:hover{color:#319795}.menu-enter-active[data-v-369d8854]{animation:bounce-in .5s}.menu-leave-active[data-v-369d8854]{animation:bounce-in .5s reverse}@keyframes menu-in-data-v-369d8854{0%{transform:scale(0)}50%{transform:scale(1.5)}100%{transform:scale(1)}}.my-tag[data-v-369d8854]{cursor:default !important}',
        "",
      ]),
        (t.exports = r);
    },
    851: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5),
        c = (n(25), n(16), n(76), n(715), n(48)),
        o = n(548),
        l = n(546),
        d = n(528),
        v = n(96),
        h = n(525),
        m = n(531),
        f = n(95),
        _ = n(539),
        y = n(589),
        x = n(529),
        k = n(630),
        z = n.n(k),
        C = n(628),
        w = n.n(C),
        M = {
          scrollToTop: !0,
          layout: "learning",
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
          mixins: [l.a, v.a, d.a, h.a, v.a, m.a, f.a, _.a, y.a, x.a],
          fetch: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, c, l, d, v;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (c =
                            (null == t ||
                            null === (n = t.$route) ||
                            void 0 === n ||
                            null === (r = n.params) ||
                            void 0 === r
                              ? void 0
                              : r.category) || ""),
                          (l = o.a[c].pathContent),
                          (e.next = 4),
                          t
                            .$content("/hoc-lap-trinh/".concat(l), { deep: !0 })
                            .only([
                              "title",
                              "chapter",
                              "category",
                              "slug",
                              "position",
                            ])
                            .fetch()
                        );
                      case 4:
                        (d = e.sent),
                          (v = z()(d, "position")),
                          (t.listNotGroup = z()(v, "chapter.slug")),
                          (t.courses = w()(v, "chapter.slug")),
                          t.calcContinue();
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          asyncData: function (t) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, c, o, l, article;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.$content),
                          (r = t.params),
                          (c = (null == r ? void 0 : r.category) || ""),
                          (o = (null == r ? void 0 : r.slug) || "index"),
                          (e.next = 5),
                          n("/", { deep: !0 }).where({ slug: o }).fetch()
                        );
                      case 5:
                        return (
                          (l = e.sent),
                          (article = l[0]),
                          e.abrupt("return", {
                            slug: o,
                            category: c,
                            article: article,
                          })
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          data: function () {
            return {
              minutes: 0,
              CONFIG_SEO: c.b,
              prev: null,
              next: null,
              listNotGroup: [],
              courses: [],
            };
          },
          mounted: function () {
            this.readingTime();
          },
          methods: {
            readingTime: function () {
              var t = document
                  .getElementById("content")
                  .textContent.trim()
                  .split(/\s+/).length,
                time = Math.ceil(t / 225);
              this.minutes = time;
            },
            calcContinue: function () {
              var t = this,
                e = this.listNotGroup.findIndex(function (e) {
                  return e.slug === t.$route.params.slug;
                }),
                n = this.listNotGroup.length;
              (this.prev = 0 !== e ? this.listNotGroup[(e + n - 1) % n] : null),
                (this.next =
                  e === n - 1 ? null : this.listNotGroup[(e + 1) % n]);
            },
            handleSelect: function (t) {
              this.$device.isMobile &&
                ((this.isShow = !1), (this.isShowMb = !1)),
                this.$router.push(
                  "/bai-viet/".concat(this.category, "/").concat(t)
                );
            },
          },
          head: function () {
            var t,
              e = this.getTitle,
              n = this.getDescription,
              r = this.getKeywords,
              o = this.getThumbnail,
              l = c.c.ARTICLE,
              d =
                null === (t = this.getAuthor) || void 0 === t
                  ? void 0
                  : t.fullname,
              v = c.b.URL + this.$route.fullPath;
            return {
              title: e,
              meta: [
                { hid: "og:title", property: "og:title", content: e },
                { hid: "twitter:title", name: "twitter:title", content: e },
                { hid: "description", name: "description", content: n },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: n,
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: n,
                },
                { hid: "keywords", name: "keywords", content: r },
                { hid: "og:keywords", name: "og:keywords", content: r },
                { hid: "og:image", property: "og:image", content: o },
                { hid: "twitter:image", name: "twitter:image", content: o },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: this.getAltThumbnail,
                },
                { hid: "twitter:card", name: "twitter:card", content: o },
                { hid: "og:type", property: "og:type", content: l },
                { hid: "author", property: "author", content: d },
                { hid: "og:url", property: "og:url", content: v },
                { hid: "twitter:site", name: "twitter:site", content: v },
              ],
              link: [
                {
                  rel: "stylesheet",
                  href: "https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,700;1,300&family=Pridi:wght@300&display=swap",
                },
              ],
              script: [
                {
                  type: "application/ld+json",
                  json: {
                    name: "KungFu Tech",
                    alternateName: "Tech Mely",
                    url: v,
                    "@context": "http://schema.org",
                    "@type": "Article",
                    mainEntityOfPage: { "@type": "WebPage", "@id": v },
                    headline: e,
                    image: {
                      "@type": "ImageObject",
                      url: o,
                      width: 700,
                      height: 400,
                    },
                    datePublished: "".concat(this.getCreatedAt),
                    dateModified: "".concat(this.getUpdatedAt),
                    author: { "@type": "Person", url: c.a.AUTHOR.URL, name: d },
                    publisher: {
                      "@type": "Organization",
                      name: "Tech Mely",
                      logo: {
                        "@type": "ImageObject",
                        url: o,
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
        j = (n(716), n(10)),
        component = Object(j.a)(
          M,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "el-row",
              { staticClass: "mb-16 wrap-course" },
              [
                r(
                  "el-col",
                  {
                    staticClass: "sticky-left",
                    attrs: { offset: 2, md: 24, lg: 1, sm: 24 },
                  },
                  [r("LazyBaseShare")],
                  1
                ),
                t._v(" "),
                r(
                  "el-col",
                  { staticClass: "article", attrs: { md: 24, lg: 14, sm: 24 } },
                  [
                    r(
                      "CoreBreadcrumb",
                      { attrs: { separator: "/" } },
                      [
                        r(
                          "CoreBreadcrumbItem",
                          { attrs: { to: { path: "/khoa-hoc" } } },
                          [t._v("Khoá học")]
                        ),
                        t._v(" "),
                        r(
                          "CoreBreadcrumbItem",
                          {
                            attrs: {
                              to: {
                                path: "/khoa-hoc/" + t.article.category.slug,
                              },
                            },
                          },
                          [t._v("Khoá học " + t._s(t.article.category.name))]
                        ),
                        t._v(" "),
                        r("CoreBreadcrumbItem", [t._v("Chi tiết bài viết")]),
                      ],
                      1
                    ),
                    t._v(" "),
                    r("div", { staticClass: "article article__top" }, [
                      r("h1", { staticClass: "title-nuxt-content" }, [
                        t._v(t._s(t.getTitle)),
                      ]),
                      t._v(" "),
                      r("div", { staticClass: "article__social" }, [
                        r("div", { staticClass: "article__datetime" }, [
                          r("div", { staticClass: "article__createdAt" }, [
                            t._v(
                              "\n            " +
                                t._s(t._f("formatTime")(t.article.createdAt)) +
                                "\n          "
                            ),
                          ]),
                          t._v(" "),
                          r("div", { staticClass: "article__dot" }),
                          t._v(" "),
                          r("div", { staticClass: "article__read-time" }, [
                            t._v(t._s(t._f("timeRead")(t.minutes))),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    r(
                      "article",
                      { staticClass: "article__content" },
                      [
                        t.article.toc.length > 0
                          ? r("nav", { staticClass: "article__toc" }, [
                              r("h3", { staticClass: "article__toc-title" }, [
                                t._v("Nội dung bài viết"),
                              ]),
                              t._v(" "),
                              r(
                                "ol",
                                t._l(t.article.toc, function (link) {
                                  return r("li", { key: link.id }, [
                                    r("a", { attrs: { href: "#" + link.id } }, [
                                      t._v(t._s(link.text)),
                                    ]),
                                  ]);
                                }),
                                0
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        r("nuxt-content", {
                          staticClass: "mb-13",
                          attrs: {
                            id: "content",
                            document: t.article,
                            "live-edit": !1,
                          },
                        }),
                        t._v(" "),
                        r("div", { staticClass: "article__continue" }, [
                          r(
                            "div",
                            {
                              staticClass:
                                "article__continue-nav article__continue-left",
                            },
                            [
                              t.prev
                                ? r(
                                    "span",
                                    {
                                      staticClass:
                                        "article__continue-prev hidden-sm-and-down",
                                    },
                                    [t._v("Bài trước")]
                                  )
                                : t._e(),
                              t._v(" "),
                              t.prev
                                ? r(
                                    "div",
                                    {
                                      staticClass:
                                        "article__continue-mb hidden-sm-and-up",
                                    },
                                    [
                                      r("img", {
                                        attrs: {
                                          src: n(633),
                                          alt: "left",
                                          width: "24",
                                          height: "24",
                                        },
                                      }),
                                      t._v(" "),
                                      r(
                                        "nuxt-link",
                                        {
                                          staticClass: "article__continue-prev",
                                          attrs: {
                                            to:
                                              "/bai-viet/" +
                                              t.prev.category.slug +
                                              "/" +
                                              t.prev.slug,
                                          },
                                        },
                                        [t._v("Bài trước")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              t.prev
                                ? r(
                                    "div",
                                    { staticClass: "article__continue-title" },
                                    [
                                      r("img", {
                                        attrs: {
                                          src: n(633),
                                          alt: "left",
                                          width: "24",
                                          height: "24",
                                        },
                                      }),
                                      t._v(" "),
                                      r(
                                        "nuxt-link",
                                        {
                                          staticClass: "article__continue-link",
                                          attrs: {
                                            to:
                                              "/bai-viet/" +
                                              t.prev.category.slug +
                                              "/" +
                                              t.prev.slug,
                                          },
                                        },
                                        [t._v(t._s(t.prev.title))]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                            ]
                          ),
                          t._v(" "),
                          r(
                            "div",
                            {
                              staticClass:
                                "article__continue-nav rtice__continue-right",
                            },
                            [
                              t.next
                                ? r(
                                    "span",
                                    {
                                      staticClass:
                                        "article__continue-next hidden-sm-and-down",
                                    },
                                    [t._v("Bài tiếp theo")]
                                  )
                                : t._e(),
                              t._v(" "),
                              t.next
                                ? r(
                                    "div",
                                    { staticClass: "article__continue-title" },
                                    [
                                      r(
                                        "nuxt-link",
                                        {
                                          staticClass: "article__continue-link",
                                          attrs: {
                                            to:
                                              "/bai-viet/" +
                                              t.next.category.slug +
                                              "/" +
                                              t.next.slug,
                                          },
                                        },
                                        [t._v(t._s(t.next.title))]
                                      ),
                                      t._v(" "),
                                      r("img", {
                                        attrs: {
                                          src: n(634),
                                          alt: "right",
                                          width: "24",
                                          height: "24",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              t.next
                                ? r(
                                    "div",
                                    {
                                      staticClass:
                                        "article__continue-mb hidden-sm-and-up",
                                    },
                                    [
                                      r(
                                        "nuxt-link",
                                        {
                                          staticClass: "article__continue-next",
                                          attrs: {
                                            to:
                                              "/bai-viet/" +
                                              t.next.category.slug +
                                              "/" +
                                              t.next.slug,
                                          },
                                        },
                                        [t._v("Bài tiếp theo")]
                                      ),
                                      t._v(" "),
                                      r("img", {
                                        attrs: {
                                          src: n(634),
                                          alt: "right",
                                          width: "24",
                                          height: "24",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : t._e(),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        r("el-divider", {
                          staticClass: "mt-14 hidden-sm-and-down",
                        }),
                        t._v(" "),
                        r("LazySharedArticleDescription", {
                          attrs: {
                            fullname: t.getAuthor.fullname,
                            username: t.getAuthor.username,
                            bio: t.getAuthor.bio,
                            avatar: t.getAuthor.avatar,
                            "category-title": t.getCategory.name,
                            "category-sub-title": "Chuyên mục học lập trình",
                            "category-url": "/khoa-hoc/" + t.getCategory.slug,
                            "category-description": t.getCategory.description,
                            "category-logo": t.getCategory.logo,
                          },
                        }),
                        t._v(" "),
                        r("el-divider", { staticClass: "hidden-sm-and-down" }),
                        t._v(" "),
                        r("LazySharedArticleComment"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                r(
                  "el-col",
                  { attrs: { md: 24, lg: 5, sm: 24 } },
                  [
                    r(
                      "el-menu",
                      {
                        staticClass: "roadmap",
                        attrs: { "default-active": t.$route.params.slug },
                        on: { select: t.handleSelect },
                      },
                      t._l(t.courses, function (e, n) {
                        return r(
                          "el-submenu",
                          {
                            key: "chapter-" + n,
                            attrs: { index: "chapter-" + n },
                          },
                          [
                            r("template", { slot: "title" }, [
                              r("span", [
                                t._v(t._s(t._f("getChapterName")(e))),
                              ]),
                            ]),
                            t._v(" "),
                            t._l(e, function (article, i) {
                              return r(
                                "el-menu-item",
                                {
                                  key: article.slug,
                                  attrs: { index: article.slug },
                                },
                                [
                                  r("span", { staticClass: "item-course" }, [
                                    t._v(
                                      t._s(i + 1) + ". " + t._s(article.title)
                                    ),
                                  ]),
                                ]
                              );
                            }),
                          ],
                          2
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                r(
                  "el-col",
                  { attrs: { md: 0, lg: 5, sm: 24 } },
                  [
                    r("LazyBaseSocialYoutube", { attrs: { isArticle: "" } }),
                    t._v(" "),
                    r("LazyBaseSocialFacebook", { attrs: { isArticle: "" } }),
                    t._v(" "),
                    r("LazyBaseSocialFacebookMobile"),
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
          "369d8854",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        CoreBreadcrumbItem: n(537).default,
        CoreBreadcrumb: n(538).default,
      });
    },
  },
]);
