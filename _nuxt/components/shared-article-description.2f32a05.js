(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    590: function (t, e, d) {
      t.exports = d.p + "img/sponsor.e746bf1.png";
    },
    672: function (t, e, d) {
      var content = d(805);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, d(4).default)("04ea4332", content, !0, { sourceMap: !1 });
    },
    804: function (t, e, d) {
      "use strict";
      d(672);
    },
    805: function (t, e, d) {
      var n = d(3)(!1);
      n.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-1d9f71d4],.fade-in-linear-leave-active[data-v-1d9f71d4]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-1d9f71d4],.fade-in-linear-leave[data-v-1d9f71d4],.fade-in-linear-leave-active[data-v-1d9f71d4]{opacity:0}.el-fade-in-linear-enter-active[data-v-1d9f71d4],.el-fade-in-linear-leave-active[data-v-1d9f71d4]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-1d9f71d4],.el-fade-in-linear-leave[data-v-1d9f71d4],.el-fade-in-linear-leave-active[data-v-1d9f71d4]{opacity:0}.el-fade-in-enter-active[data-v-1d9f71d4],.el-fade-in-leave-active[data-v-1d9f71d4]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-1d9f71d4],.el-fade-in-leave-active[data-v-1d9f71d4]{opacity:0}.el-zoom-in-center-enter-active[data-v-1d9f71d4],.el-zoom-in-center-leave-active[data-v-1d9f71d4]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-1d9f71d4],.el-zoom-in-center-leave-active[data-v-1d9f71d4]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-1d9f71d4],.el-zoom-in-top-leave-active[data-v-1d9f71d4]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-1d9f71d4],.el-zoom-in-top-leave-active[data-v-1d9f71d4]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-1d9f71d4],.el-zoom-in-bottom-leave-active[data-v-1d9f71d4]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-1d9f71d4],.el-zoom-in-bottom-leave-active[data-v-1d9f71d4]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-1d9f71d4],.el-zoom-in-left-leave-active[data-v-1d9f71d4]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-1d9f71d4],.el-zoom-in-left-leave-active[data-v-1d9f71d4]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-1d9f71d4]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-1d9f71d4]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-1d9f71d4],.el-list-leave-active[data-v-1d9f71d4]{transition:all 1s}.el-list-enter[data-v-1d9f71d4],.el-list-leave-active[data-v-1d9f71d4]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-1d9f71d4]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.avatar[data-v-1d9f71d4]{width:82px;height:82px;border-radius:82px;object-fit:cover}.txt-written[data-v-1d9f71d4]{font-size:14px;line-height:16px;color:#757575}.text-body[data-v-1d9f71d4]:hover{text-decoration:underline;cursor:pointer}.fullname[data-v-1d9f71d4]{font-size:22px;line-height:26px;font-weight:bold;letter-spacing:-0.04em;margin-top:4px}.fullname[data-v-1d9f71d4]:hover{text-decoration:none}.border-right[data-v-1d9f71d4]{border-right:1px solid #dcdfe6}@media(max-width: 992px){.border-right[data-v-1d9f71d4]{border-right:none}}.sponsor[data-v-1d9f71d4]{height:100vh}.wrap-author[data-v-1d9f71d4]{padding-top:42px;padding-bottom:42px;display:flex;flex-direction:column}@media(min-width: 768px){.wrap-author[data-v-1d9f71d4]{padding-top:32px;padding-bottom:32px;flex-direction:row;align-items:center;justify-content:space-between}}",
        "",
      ]),
        (t.exports = n);
    },
    881: function (t, e, d) {
      "use strict";
      d.r(e);
      var n = {
          props: {
            fullname: { type: String, required: !0 },
            username: { type: String, required: !0 },
            bio: { type: String, required: !0, default: "" },
            avatar: { type: String, required: !0 },
            categoryTitle: { type: String, required: !0 },
            categorySubTitle: { type: String, required: !0 },
            categoryDescription: { type: String, default: "" },
            categoryUrl: { type: String, default: "" },
            categoryLogo: {
              type: String,
              default: "/configs/category/logo.png",
            },
          },
          data: function () {
            return { drawer: !1 };
          },
          methods: {
            onClick: function () {
              this.drawer = !0;
            },
            redirect: function (t) {
              this.$router.push(t);
            },
          },
        },
        r = (d(804), d(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "el-row",
              { staticClass: "mt-4 mb-4", attrs: { gutter: 20 } },
              [
                n("el-col", { attrs: { sm: 24, md: 24 } }, [
                  n("div", { staticClass: "mb-3 wrap-author" }, [
                    n("div", { staticClass: "flex" }, [
                      n("img", {
                        staticClass: "mr-8 avatar",
                        attrs: { src: t.avatar, alt: "Avatar " + t.fullname },
                      }),
                      t._v(" "),
                      n(
                        "div",
                        {
                          staticClass:
                            "flex flex-direction-column justify-content-center",
                        },
                        [
                          n("span", { staticClass: "txt-written" }, [
                            t._v("VIẾT BỞI"),
                          ]),
                          t._v(" "),
                          n(
                            "p",
                            {
                              staticClass: "mb-0 text-body fullname",
                              on: { click: t.onClick },
                            },
                            [
                              t._v(
                                "\n            " +
                                  t._s(t.fullname) +
                                  "\n          "
                              ),
                            ]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            {
                              staticClass: "flex",
                              staticStyle: { "padding-right": "0.5rem" },
                            },
                            [t._v(t._s(t._f("randomBio")(t.bio)))]
                          ),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    n(
                      "div",
                      { on: { click: t.onClick } },
                      [
                        n(
                          "CoreButton",
                          {
                            staticStyle: { "margin-top": "0.5rem" },
                            attrs: { size: "medium", full: "" },
                          },
                          [t._v("Donate cho team")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                n(
                  "el-drawer",
                  {
                    attrs: {
                      title: "Ủng hộ tác giả",
                      size: "400px",
                      visible: t.drawer,
                      "with-header": !1,
                    },
                    on: {
                      "update:visible": function (e) {
                        t.drawer = e;
                      },
                    },
                  },
                  [
                    n("div", { staticClass: "pa-10" }, [
                      n("img", {
                        staticClass: "sponsor",
                        attrs: { src: d(590), alt: "Ủng hộ tác giả" },
                      }),
                    ]),
                  ]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "1d9f71d4",
          null
        );
      e.default = component.exports;
      installComponents(component, { CoreButton: d(276).default });
    },
  },
]);
