(window.webpackJsonp = window.webpackJsonp || []).push([
  [76, 28, 55, 56],
  {
    519: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(0);
      function o(t) {
        return "[object String]" === Object.prototype.toString.call(t);
      }
      function c(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function l(t) {
        return t && t.nodeType === Node.ELEMENT_NODE;
      }
      let d = (t) => t && "[object Function]" === {}.toString.call(t);
      "object" == typeof Int8Array ||
        (!r.default.prototype.$isServer && document.childNodes);
    },
    520: function (t, e, n) {
      var content = n(524);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("064988c4", content, !0, { sourceMap: !1 });
    },
    521: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return l;
        });
      n(0), n(519);
      const r = Object.prototype.hasOwnProperty;
      function o(t, e) {
        return r.call(t, e);
      }
      const c = function (t, e) {
          const n = (function (t, e) {
            for (let i = 0; i !== t.length; ++i) if (e(t[i])) return i;
            return -1;
          })(t, e);
          return -1 !== n ? t[n] : void 0;
        },
        l = function (style) {
          if ("object" != typeof style) return style;
          const t = ["ms-", "webkit-"];
          return (
            ["transform", "transition", "animation"].forEach((e) => {
              const n = style[e];
              e &&
                n &&
                t.forEach((t) => {
                  style[t + e] = n;
                });
            }),
            style
          );
        };
    },
    522: function (t, e, n) {
      "use strict";
      n.r(e);
      n(275), n(21);
      var r = n(0),
        o = n(277),
        c = n.n(o),
        l = n(521);
      const d = /(%|)\{([0-9a-zA-Z_]+)\}/g;
      const f =
        (r.default,
        function (t, ...e) {
          return (
            1 === e.length && "object" == typeof e[0] && (e = e[0]),
            (e && e.hasOwnProperty) || (e = {}),
            t.replace(d, (n, r, i, o) => {
              let c;
              return "{" === t[o - 1] && "}" === t[o + n.length]
                ? i
                : ((c = Object(l.c)(e, i) ? e[i] : null), null == c ? "" : c);
            })
          );
        });
      let h = {
          el: {
            colorpicker: { confirm: "确定", clear: "清空" },
            datepicker: {
              now: "此刻",
              today: "今天",
              cancel: "取消",
              clear: "清空",
              confirm: "确定",
              selectDate: "选择日期",
              selectTime: "选择时间",
              startDate: "开始日期",
              startTime: "开始时间",
              endDate: "结束日期",
              endTime: "结束时间",
              prevYear: "前一年",
              nextYear: "后一年",
              prevMonth: "上个月",
              nextMonth: "下个月",
              year: "年",
              month1: "1 月",
              month2: "2 月",
              month3: "3 月",
              month4: "4 月",
              month5: "5 月",
              month6: "6 月",
              month7: "7 月",
              month8: "8 月",
              month9: "9 月",
              month10: "10 月",
              month11: "11 月",
              month12: "12 月",
              weeks: {
                sun: "日",
                mon: "一",
                tue: "二",
                wed: "三",
                thu: "四",
                fri: "五",
                sat: "六",
              },
              months: {
                jan: "一月",
                feb: "二月",
                mar: "三月",
                apr: "四月",
                may: "五月",
                jun: "六月",
                jul: "七月",
                aug: "八月",
                sep: "九月",
                oct: "十月",
                nov: "十一月",
                dec: "十二月",
              },
            },
            select: {
              loading: "加载中",
              noMatch: "无匹配数据",
              noData: "无数据",
              placeholder: "请选择",
            },
            cascader: {
              noMatch: "无匹配数据",
              loading: "加载中",
              placeholder: "请选择",
              noData: "暂无数据",
            },
            pagination: {
              goto: "前往",
              pagesize: "条/页",
              total: "共 {total} 条",
              pageClassifier: "页",
            },
            messagebox: {
              title: "提示",
              confirm: "确定",
              cancel: "取消",
              error: "输入的数据不合法!",
            },
            upload: {
              deleteTip: "按 delete 键可删除",
              delete: "删除",
              preview: "查看图片",
              continue: "继续上传",
            },
            table: {
              emptyText: "暂无数据",
              confirmFilter: "筛选",
              resetFilter: "重置",
              clearFilter: "全部",
              sumText: "合计",
            },
            tree: { emptyText: "暂无数据" },
            transfer: {
              noMatch: "无匹配数据",
              noData: "无数据",
              titles: ["列表 1", "列表 2"],
              filterPlaceholder: "请输入搜索内容",
              noCheckedFormat: "共 {total} 项",
              hasCheckedFormat: "已选 {checked}/{total} 项",
            },
            image: { error: "加载失败" },
            pageHeader: { title: "返回" },
            popconfirm: { confirmButtonText: "确定", cancelButtonText: "取消" },
            empty: { description: "暂无数据" },
          },
        },
        m = !1,
        v = function () {
          const t = Object.getPrototypeOf(this || r.default).$t;
          if ("function" == typeof t && r.default.locale)
            return (
              m ||
                ((m = !0),
                r.default.locale(
                  r.default.config.lang,
                  c()(h, r.default.locale(r.default.config.lang) || {}, {
                    clone: !0,
                  })
                )),
              t.apply(this, arguments)
            );
        };
      const _ = function (path, t) {
        let e = v.apply(this, arguments);
        if (null != e) return e;
        const n = path.split(".");
        let r = h;
        for (let i = 0, o = n.length; i < o; i++) {
          if (((e = r[n[i]]), i === o - 1)) return f(e, t);
          if (!e) return "";
          r = e;
        }
        return "";
      };
      var y = {
        methods: {
          t(...t) {
            return _.apply(this, t);
          },
        },
      };
      const w = r.default.prototype.$isServer,
        k = /([\:\-\_]+(.))/g,
        z = /^moz([A-Z])/,
        x = w ? 0 : Number(document.documentMode),
        C = function (t) {
          return t
            .replace(k, function (t, e, n, r) {
              return r ? n.toUpperCase() : n;
            })
            .replace(z, "Moz$1");
        },
        S =
          !w && document.addEventListener
            ? function (element, t, e) {
                element && t && e && element.addEventListener(t, e, !1);
              }
            : function (element, t, e) {
                element && t && e && element.attachEvent("on" + t, e);
              },
        j =
          !w && document.removeEventListener
            ? function (element, t, e) {
                element && t && element.removeEventListener(t, e, !1);
              }
            : function (element, t, e) {
                element && t && element.detachEvent("on" + t, e);
              };
      const L =
        x < 9
          ? function (element, t) {
              if (!w) {
                if (!element || !t) return null;
                "float" === (t = C(t)) && (t = "styleFloat");
                try {
                  if ("opacity" === t)
                    try {
                      return element.filters.item("alpha").opacity / 100;
                    } catch (t) {
                      return 1;
                    }
                  return element.style[t] || element.currentStyle
                    ? element.currentStyle[t]
                    : null;
                } catch (e) {
                  return element.style[t];
                }
              }
            }
          : function (element, t) {
              if (!w) {
                if (!element || !t) return null;
                "float" === (t = C(t)) && (t = "cssFloat");
                try {
                  var e = document.defaultView.getComputedStyle(element, "");
                  return element.style[t] || e ? e[t] : null;
                } catch (e) {
                  return element.style[t];
                }
              }
            };
      const T = (t, e) => {
        if (w) return;
        return L(
          t,
          null != e ? (e ? "overflow-y" : "overflow-x") : "overflow"
        ).match(/(scroll|auto|overlay)/);
      };
      var E = n(519),
        O = n(135),
        A = n.n(O),
        M = function () {
          return void 0 !== document.documentElement.style.objectFit;
        },
        N = "none",
        D = "contain",
        $ = "cover",
        F = "fill",
        I = "scale-down",
        H = "",
        R = {
          name: "ElImage",
          mixins: [y],
          inheritAttrs: !1,
          props: {
            src: String,
            fit: { type: String, default: "cover" },
            lazy: Boolean,
            scrollContainer: {},
            previewSrcList: {
              type: Array,
              default: function () {
                return [];
              },
            },
            zIndex: { type: Number, default: 2e3 },
          },
          data: function () {
            return {
              loading: !0,
              error: !1,
              show: !this.lazy,
              imageWidth: 0,
              imageHeight: 0,
              showViewer: !1,
            };
          },
          computed: {
            imageStyle: function () {
              var t = this.fit;
              return !this.$isServer && t
                ? M()
                  ? { "object-fit": t }
                  : this.getImageStyle(t)
                : {};
            },
            alignCenter: function () {
              return !this.$isServer && !M() && this.fit !== F;
            },
            preview: function () {
              var t = this.previewSrcList;
              return Array.isArray(t) && t.length > 0;
            },
            imageIndex: function () {
              var t = 0,
                e = this.previewSrcList.indexOf(this.src);
              return e >= 0 && (t = e), t;
            },
          },
          watch: {
            src: function (t) {
              this.show && this.loadImage();
            },
            show: function (t) {
              t && this.loadImage();
            },
          },
          mounted: function () {
            this.lazy ? this.addLazyLoadListener() : this.loadImage();
          },
          beforeDestroy: function () {
            this.lazy && this.removeLazyLoadListener();
          },
          methods: {
            loadImage: function () {
              var t = this;
              if (!this.$isServer) {
                (this.loading = !0), (this.error = !1);
                var img = new Image();
                (img.onload = function (e) {
                  return t.handleLoad(e, img);
                }),
                  (img.onerror = this.handleError.bind(this)),
                  Object.keys(this.$attrs).forEach(function (e) {
                    var n = t.$attrs[e];
                    img.setAttribute(e, n);
                  }),
                  (img.src = this.src);
              }
            },
            handleLoad: function (t, img) {
              (this.imageWidth = img.width),
                (this.imageHeight = img.height),
                (this.loading = !1),
                (this.error = !1);
            },
            handleError: function (t) {
              (this.loading = !1), (this.error = !0), this.$emit("error", t);
            },
            handleLazyLoad: function () {
              ((t, e) => {
                if (w || !t || !e) return !1;
                const n = t.getBoundingClientRect();
                let r;
                return (
                  (r = [
                    window,
                    document,
                    document.documentElement,
                    null,
                    void 0,
                  ].includes(e)
                    ? {
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                        left: 0,
                      }
                    : e.getBoundingClientRect()),
                  n.top < r.bottom &&
                    n.bottom > r.top &&
                    n.right > r.left &&
                    n.left < r.right
                );
              })(this.$el, this._scrollContainer) &&
                ((this.show = !0), this.removeLazyLoadListener());
            },
            addLazyLoadListener: function () {
              if (!this.$isServer) {
                var t = this.scrollContainer,
                  e = null;
                (e = Object(E.a)(t)
                  ? t
                  : Object(E.c)(t)
                  ? document.querySelector(t)
                  : ((t, e) => {
                      if (w) return;
                      let n = t;
                      for (; n; ) {
                        if (
                          [window, document, document.documentElement].includes(
                            n
                          )
                        )
                          return window;
                        if (T(n, e)) return n;
                        n = n.parentNode;
                      }
                      return n;
                    })(this.$el)) &&
                  ((this._scrollContainer = e),
                  (this._lazyLoadHandler = A()(200, this.handleLazyLoad)),
                  S(e, "scroll", this._lazyLoadHandler),
                  this.handleLazyLoad());
              }
            },
            removeLazyLoadListener: function () {
              var t = this._scrollContainer,
                e = this._lazyLoadHandler;
              !this.$isServer &&
                t &&
                e &&
                (j(t, "scroll", e),
                (this._scrollContainer = null),
                (this._lazyLoadHandler = null));
            },
            getImageStyle: function (t) {
              var e = this.imageWidth,
                n = this.imageHeight,
                r = this.$el,
                o = r.clientWidth,
                c = r.clientHeight;
              if (!(e && n && o && c)) return {};
              var l = e / n,
                d = o / c;
              t === I && (t = e < o && n < c ? N : D);
              switch (t) {
                case N:
                  return { width: "auto", height: "auto" };
                case D:
                  return l < d ? { width: "auto" } : { height: "auto" };
                case $:
                  return l < d ? { height: "auto" } : { width: "auto" };
                default:
                  return {};
              }
            },
            clickHandler: function () {
              this.preview &&
                ((H = document.body.style.overflow),
                (document.body.style.overflow = "hidden"),
                (this.showViewer = !0));
            },
            closeViewer: function () {
              (document.body.style.overflow = H), (this.showViewer = !1);
            },
          },
        },
        B = (n(523), n(10)),
        component = Object(B.a)(
          R,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "el-image" },
              [
                t.loading
                  ? t._t("placeholder", function () {
                      return [
                        n("div", { staticClass: "el-image__placeholder" }),
                      ];
                    })
                  : t.error
                  ? t._t("error", function () {
                      return [
                        n("div", { staticClass: "el-image__error" }, [
                          t._v(t._s(t.t("el.image.error"))),
                        ]),
                      ];
                    })
                  : n(
                      "img",
                      t._g(
                        t._b(
                          {
                            staticClass: "el-image__inner",
                            class: {
                              "el-image__inner--center": t.alignCenter,
                              "el-image__preview": t.preview,
                            },
                            style: t.imageStyle,
                            attrs: { src: t.src },
                            on: { click: t.clickHandler },
                          },
                          "img",
                          t.$attrs,
                          !1
                        ),
                        t.$listeners
                      )
                    ),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "12dcbf65",
          null
        );
      e.default = component.exports;
    },
    523: function (t, e, n) {
      "use strict";
      n(520);
    },
    524: function (t, e, n) {
      var r = n(3)(!1);
      r.push([t.i, ".el-image[data-v-12dcbf65]{width:100%}", ""]),
        (t.exports = r);
    },
    549: function (t, e, n) {
      var content = n(561);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("739044b2", content, !0, { sourceMap: !1 });
    },
    560: function (t, e, n) {
      "use strict";
      n(549);
    },
    561: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        '.feedback__container[data-v-16dff6b4]{background:#f9f9f9;border-radius:30px;margin-right:2.5rem;padding:1.5rem 2.5rem;height:222px}.feedback__rate[data-v-16dff6b4]{display:flex;align-items:center;font-size:1rem}.feedback__content[data-v-16dff6b4]{display:flex;justify-content:space-between}.feedback__description[data-v-16dff6b4]{font-family:"Roboto";font-size:20px;line-height:24px}.feedback__image[data-v-16dff6b4]{object-fit:cover;width:50px;height:50px;border-radius:50px}.feedback__info[data-v-16dff6b4]{display:flex;margin-top:10px}.feedback__name[data-v-16dff6b4]{margin-top:0;font-size:1rem;margin-bottom:0;font-weight:550}.feedback__private[data-v-16dff6b4]{padding:0 10px;display:flex;flex-direction:column;justify-content:space-between}.feedback__job[data-v-16dff6b4]{color:#676767;font-size:.875rem;font-style:italic}',
        "",
      ]),
        (t.exports = r);
    },
    562: function (t, e, n) {
      var content = n(586);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("15144f05", content, !0, { sourceMap: !1 });
    },
    578: function (t, e, n) {
      "use strict";
      n.r(e);
      n(275);
      var r = {
          props: {
            content: { type: String, default: "" },
            avatar: { type: String, default: "" },
            name: { type: String, default: "" },
            position: { type: String, default: "" },
            rate: { type: Number, default: 5 },
          },
        },
        o = (n(560), n(10)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticStyle: { "margin-right": "1rem" } }, [
              n("div", { staticClass: "feedback__container" }, [
                n("p", { staticClass: "feedback__description" }, [
                  t._v("\n      " + t._s(t.content) + "\n    "),
                ]),
                t._v(" "),
                n("div", { staticClass: "feedback__content" }, [
                  n("div", { staticClass: "feedback__info" }, [
                    n("img", {
                      staticClass: "feedback__image",
                      attrs: { alt: t.name, src: t.avatar },
                    }),
                    t._v(" "),
                    n("div", { staticClass: "feedback__private" }, [
                      n("p", { staticClass: "feedback__name" }, [
                        t._v(t._s(t.name)),
                      ]),
                      t._v(" "),
                      n("span", { staticClass: "feedback__job" }, [
                        t._v(t._s(t.position)),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "feedback__rate" },
                    [
                      n("el-rate", {
                        attrs: {
                          "score-template": "{value}",
                          "show-score": "",
                          disabled: "",
                          "text-color": "#333",
                        },
                        model: {
                          value: t.rate,
                          callback: function (e) {
                            t.rate = e;
                          },
                          expression: "rate",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "16dff6b4",
          null
        );
      e.default = component.exports;
    },
    585: function (t, e, n) {
      "use strict";
      n(562);
    },
    586: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        ".fade-in-linear-enter-active[data-v-02187fc0],.fade-in-linear-leave-active[data-v-02187fc0]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-02187fc0],.fade-in-linear-leave[data-v-02187fc0],.fade-in-linear-leave-active[data-v-02187fc0]{opacity:0}.el-fade-in-linear-enter-active[data-v-02187fc0],.el-fade-in-linear-leave-active[data-v-02187fc0]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-02187fc0],.el-fade-in-linear-leave[data-v-02187fc0],.el-fade-in-linear-leave-active[data-v-02187fc0]{opacity:0}.el-fade-in-enter-active[data-v-02187fc0],.el-fade-in-leave-active[data-v-02187fc0]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-02187fc0],.el-fade-in-leave-active[data-v-02187fc0]{opacity:0}.el-zoom-in-center-enter-active[data-v-02187fc0],.el-zoom-in-center-leave-active[data-v-02187fc0]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-02187fc0],.el-zoom-in-center-leave-active[data-v-02187fc0]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-02187fc0],.el-zoom-in-top-leave-active[data-v-02187fc0]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-02187fc0],.el-zoom-in-top-leave-active[data-v-02187fc0]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-02187fc0],.el-zoom-in-bottom-leave-active[data-v-02187fc0]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-02187fc0],.el-zoom-in-bottom-leave-active[data-v-02187fc0]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-02187fc0],.el-zoom-in-left-leave-active[data-v-02187fc0]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-02187fc0],.el-zoom-in-left-leave-active[data-v-02187fc0]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-02187fc0]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-02187fc0]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-02187fc0],.el-list-leave-active[data-v-02187fc0]{transition:all 1s}.el-list-enter[data-v-02187fc0],.el-list-leave-active[data-v-02187fc0]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-02187fc0]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}@media(min-width: 1024px){.slide[data-v-02187fc0]{min-height:500px}}@media(max-width: 776px){.slide[data-v-02187fc0]{min-height:500px;background:#4fd1c5}}.feedback[data-v-02187fc0]{background:#f3f4f6;padding:3rem 0 8rem 0;border-radius:10px}.feedback__heading[data-v-02187fc0]{text-align:center;font-size:2rem}",
        "",
      ]),
        (t.exports = r);
    },
    675: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(555),
        o = n.n(r),
        c =
          (n(556),
          {
            components: { FeedbackCard: n(578).default, VueSlickCarousel: o.a },
            data: function () {
              return {
                settings: {
                  arrows: !1,
                  focusOnSelect: !0,
                  centerPadding: "50px",
                  autoplay: !0,
                  slidesToShow: 2,
                  dot: !0,
                  infinite: !0,
                  initialSlide: 0,
                  responsive: [
                    {
                      breakpoint: 2400,
                      settings: { slidesToShow: 2, centerMode: !1 },
                    },
                    {
                      breakpoint: 992,
                      settings: { slidesToShow: 2, centerMode: !1 },
                    },
                    {
                      breakpoint: 768,
                      settings: { slidesToShow: 2, centerMode: !1 },
                    },
                    { breakpoint: 600, settings: { slidesToShow: 1 } },
                  ],
                },
                customers: [
                  {
                    content:
                      "Sau gần 6 tháng miệt mài học tập và đọc tài liệu trên Kungfu Tech giờ đây mình đã tìm cho mình được 1 công việc đúng như mong muốn. Cảm ơn Kungfu Tech rất nhiều",
                    avatar:
                      "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/238649090_860707354857720_4422118592718097314_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=-QaT1zyWNbUAX-0BRSS&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-b9xF1NQzpi9f1qNvJ5ZfmMWwxT4PZFEmDknPXyrW81w&oe=623A0823",
                    name: "Quốc Huy",
                    position: "Front-end Developer",
                    rate: 5,
                  },
                  {
                    content:
                      "Lộ trình rất rõ ràng, chi tiết phù hợp với các bạn học trái ngành như mình có cái nhìn từ bao quát đến cụ thể tất tần tật những thứ cần biết để trở thành một Frontend Developer",
                    avatar:
                      "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/271708690_1869481793247818_3295230314015171984_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=_D0tCaHYgDkAX-dqfgb&_nc_ht=scontent.fhan15-1.fna&oh=00_AT93gK1dbqfTSUUkd6lHjspeJomAZEcXA9VxTMyairGhCw&oe=6239B351",
                    name: "Nguyễn Tiến Dũng",
                    position: "Developer",
                    rate: 5,
                  },
                  {
                    content:
                      "Lần đầu ra trường lớ ngớ vấp ngay phải khóa Java trên Kungfu Tech, học hỏi thêm được rất nhiều thứ ",
                    avatar:
                      "https://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg",
                    name: "Code_Nhạt_Nhòa",
                    position: "Fullstack",
                    rate: 5,
                  },
                  {
                    content:
                      "Biết đến Kungfu Tech qua một người bạn giới thiệu, cũng đã 2 năm rồi chưa bỏ lỡ video nào. Cảm ơn đội ngũ admin đã xây dựng môi trường học tập bổ ích",
                    avatar:
                      "https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-1/65859949_913033485701656_1289360482318155776_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=QDLDBxjxmtgAX_TqBzO&_nc_ht=scontent.fhan15-2.fna&oh=00_AT-2g0Wq9EicZrrxaTJyRtRgjMg7iejNN1LPUGKfpQRIbQ&oe=6259E243",
                    name: "quangpt98@gmail.com",
                    position: "Backend Developer",
                    rate: 5,
                  },
                  {
                    content:
                      "Nhớ hồi đi phỏng vấn cứ hùng hục ôn theo bộ câu hỏi phỏng vấn của Kungfu Tech cuối cùng phỏng vấn 3 công ty pass cả 3, có gửi mail cảm ơn mà chưa thấy Kungfu Tech trả lời :(",
                    avatar:
                      "https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/182787730_1898065200361588_5010707794559797475_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-5&_nc_sid=da31f3&_nc_ohc=os69Ca9dwngAX8fbNz3&_nc_ht=scontent.fhan15-2.fna&oh=00_AT_aWJWhcjWY8VqrQgDLy0vfJchKS-jutDpv406TdXHdYQ&oe=625CBD56",
                    name: "Coder (^_^)",
                    position: "Fullstack",
                    rate: 4.5,
                  },
                ],
              };
            },
          }),
        l = (n(585), n(10)),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "feedback" }, [
              n(
                "div",
                { staticClass: "container" },
                [
                  n("h3", { staticClass: "feedback__heading" }, [
                    t._v("Mọi người nói gì về Kungfu Tech"),
                  ]),
                  t._v(" "),
                  n(
                    "VueSlickCarousel",
                    t._b({}, "VueSlickCarousel", t.settings, !1),
                    t._l(t.customers, function (t) {
                      return n("FeedbackCard", {
                        key: t.name,
                        attrs: {
                          content: t.content,
                          avatar: t.avatar,
                          name: t.name,
                          position: t.position,
                          rate: t.rate,
                        },
                      });
                    }),
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
          "02187fc0",
          null
        );
      e.default = component.exports;
    },
    840: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(48),
        o = {
          scrollToTop: !0,
          data: function () {
            return { image: "/v1646847900/assets/techmely_jyggur.png" };
          },
          computed: {
            imageUrl: function () {
              return this.$img(
                this.image,
                { format: "webp", quality: 100 },
                { format: "webp", provider: "cloudinary" }
              );
            },
          },
          head: function () {
            var t = "Tài nguyên cho Developer",
              e =
                "Tài nguyên là nơi chia sẻ tài liệu, các câu hỏi phỏng vấn dành cho lập trình thông qua việc chia sẻ các bài viết, tổng hợp các kiến thức ở nhiều nguồn uy tín",
              n =
                "Kungfu tech , Kungfutech, tài liệu học lập trình, giáo trình học lập trình, các câu hỏi phỏng vấn lập trình viên, các câu hỏi phỏng vấn lập trình cơ bản, bộ câu hỏi phỏng vấn lập trình",
              o = "https://kungfutech.edu.vn/thumbnail.png",
              c = "Trang con",
              l = r.b.URL + this.$route.fullPath;
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
                { hid: "og:image", property: "og:image", content: o },
                { hid: "og:type", property: "og:type", content: c },
                { hid: "twitter:card", name: "twitter:card", content: o },
                { hid: "twitter:image", name: "twitter:image", content: o },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: t,
                },
              ],
              script: [
                {
                  href: "https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,700;1,300&family=Pridi:wght@300&display=swap",
                  rel: "stylesheet",
                },
                {
                  type: "application/ld+json",
                  json: {
                    "@context": "https://schema.org/",
                    "@type": c,
                    name: t,
                    alternateName: r.b.URL,
                    url: l,
                    mainEntityOfPage: { "@type": r.c.HOME, "@id": l },
                    headline: t,
                    image: {
                      "@type": "ImageObject",
                      url: o,
                      width: 700,
                      height: 400,
                    },
                    author: { "@type": "Person", name: r.b.ORGANIZATION },
                    publisher: {
                      "@type": "Organization",
                      name: r.b.ORGANIZATION,
                      logo: {
                        "@type": "ImageObject",
                        url: o,
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
        c = n(10),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                n("LazyResourceSlider"),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "container" },
                  [
                    n(
                      "el-row",
                      { staticClass: "mt-12", attrs: { gutter: 33 } },
                      [
                        n(
                          "el-col",
                          { attrs: { md: 18, lg: 18, sm: 24 } },
                          [
                            n("LazyResourceInterview"),
                            t._v(" "),
                            n(
                              "a",
                              {
                                staticClass: "link",
                                attrs: {
                                  rel: "noopener",
                                  target: "_blank",
                                  href: "https://www.youtube.com/c/TechMely?sub_confirmation=1",
                                },
                              },
                              [
                                n(
                                  "CoreImage",
                                  {
                                    staticClass: "image",
                                    attrs: {
                                      fit: "container",
                                      lazy: "",
                                      src: t.imageUrl,
                                      alt: "Đăng ký techmely",
                                    },
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        attrs: { slot: "placeholder" },
                                        slot: "placeholder",
                                      },
                                      [
                                        n(
                                          "el-skeleton",
                                          {
                                            staticStyle: { width: "100%" },
                                            attrs: { animated: "" },
                                          },
                                          [
                                            n(
                                              "template",
                                              { slot: "template" },
                                              [
                                                n("el-skeleton-item", {
                                                  staticStyle: {
                                                    width: "100%",
                                                    height: "166px",
                                                    "border-radius": "10px",
                                                  },
                                                  attrs: { variant: "image" },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          2
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            n("LazyResourceDocument"),
                          ],
                          1
                        ),
                        t._v(" "),
                        n(
                          "el-col",
                          { attrs: { md: 6, lg: 6, sm: 24 } },
                          [
                            n("div", {
                              staticClass: "hidden-md-and-down",
                              staticStyle: { height: "14.6rem" },
                            }),
                            t._v(" "),
                            n("LazyBaseSocialYoutube", {
                              attrs: { isArticle: "" },
                            }),
                            t._v(" "),
                            n("LazyBaseSocialFacebook", {
                              attrs: { isArticle: "" },
                            }),
                            t._v(" "),
                            n("LazyHomeHotNews"),
                            t._v(" "),
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
                t._v(" "),
                n("ResourceFeedback"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        CoreImage: n(522).default,
        ResourceFeedback: n(675).default,
      });
    },
  },
]);
