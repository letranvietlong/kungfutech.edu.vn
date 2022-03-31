(window.webpackJsonp = window.webpackJsonp || []).push([
  [45, 28],
  {
    519: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return c;
        });
      var r = n(0);
      function o(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }
      function l(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function c(e) {
        return e && e.nodeType === Node.ELEMENT_NODE;
      }
      let d = (e) => e && "[object Function]" === {}.toString.call(e);
      "object" == typeof Int8Array ||
        (!r.default.prototype.$isServer && document.childNodes);
    },
    520: function (e, t, n) {
      var content = n(524);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("064988c4", content, !0, { sourceMap: !1 });
    },
    521: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return c;
        });
      n(0), n(519);
      const r = Object.prototype.hasOwnProperty;
      function o(e, t) {
        return r.call(e, t);
      }
      const l = function (e, t) {
          const n = (function (e, t) {
            for (let i = 0; i !== e.length; ++i) if (t(e[i])) return i;
            return -1;
          })(e, t);
          return -1 !== n ? e[n] : void 0;
        },
        c = function (style) {
          if ("object" != typeof style) return style;
          const e = ["ms-", "webkit-"];
          return (
            ["transform", "transition", "animation"].forEach((t) => {
              const n = style[t];
              t &&
                n &&
                e.forEach((e) => {
                  style[e + t] = n;
                });
            }),
            style
          );
        };
    },
    522: function (e, t, n) {
      "use strict";
      n.r(t);
      n(275), n(21);
      var r = n(0),
        o = n(277),
        l = n.n(o),
        c = n(521);
      const d = /(%|)\{([0-9a-zA-Z_]+)\}/g;
      const m =
        (r.default,
        function (e, ...t) {
          return (
            1 === t.length && "object" == typeof t[0] && (t = t[0]),
            (t && t.hasOwnProperty) || (t = {}),
            e.replace(d, (n, r, i, o) => {
              let l;
              return "{" === e[o - 1] && "}" === e[o + n.length]
                ? i
                : ((l = Object(c.c)(t, i) ? t[i] : null), null == l ? "" : l);
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
        f = !1,
        v = function () {
          const e = Object.getPrototypeOf(this || r.default).$t;
          if ("function" == typeof e && r.default.locale)
            return (
              f ||
                ((f = !0),
                r.default.locale(
                  r.default.config.lang,
                  l()(h, r.default.locale(r.default.config.lang) || {}, {
                    clone: !0,
                  })
                )),
              e.apply(this, arguments)
            );
        };
      const y = function (path, e) {
        let t = v.apply(this, arguments);
        if (null != t) return t;
        const n = path.split(".");
        let r = h;
        for (let i = 0, o = n.length; i < o; i++) {
          if (((t = r[n[i]]), i === o - 1)) return m(t, e);
          if (!t) return "";
          r = t;
        }
        return "";
      };
      var _ = {
        methods: {
          t(...e) {
            return y.apply(this, e);
          },
        },
      };
      const w = r.default.prototype.$isServer,
        x = /([\:\-\_]+(.))/g,
        z = /^moz([A-Z])/,
        C = w ? 0 : Number(document.documentMode),
        L = function (e) {
          return e
            .replace(x, function (e, t, n, r) {
              return r ? n.toUpperCase() : n;
            })
            .replace(z, "Moz$1");
        },
        k =
          !w && document.addEventListener
            ? function (element, e, t) {
                element && e && t && element.addEventListener(e, t, !1);
              }
            : function (element, e, t) {
                element && e && t && element.attachEvent("on" + e, t);
              },
        S =
          !w && document.removeEventListener
            ? function (element, e, t) {
                element && e && element.removeEventListener(e, t, !1);
              }
            : function (element, e, t) {
                element && e && element.detachEvent("on" + e, t);
              };
      const E =
        C < 9
          ? function (element, e) {
              if (!w) {
                if (!element || !e) return null;
                "float" === (e = L(e)) && (e = "styleFloat");
                try {
                  if ("opacity" === e)
                    try {
                      return element.filters.item("alpha").opacity / 100;
                    } catch (e) {
                      return 1;
                    }
                  return element.style[e] || element.currentStyle
                    ? element.currentStyle[e]
                    : null;
                } catch (t) {
                  return element.style[e];
                }
              }
            }
          : function (element, e) {
              if (!w) {
                if (!element || !e) return null;
                "float" === (e = L(e)) && (e = "cssFloat");
                try {
                  var t = document.defaultView.getComputedStyle(element, "");
                  return element.style[e] || t ? t[e] : null;
                } catch (t) {
                  return element.style[e];
                }
              }
            };
      const $ = (e, t) => {
        if (w) return;
        return E(
          e,
          null != t ? (t ? "overflow-y" : "overflow-x") : "overflow"
        ).match(/(scroll|auto|overlay)/);
      };
      var j = n(519),
        O = n(135),
        I = n.n(O),
        H = function () {
          return void 0 !== document.documentElement.style.objectFit;
        },
        M = "none",
        T = "contain",
        A = "cover",
        D = "fill",
        N = "scale-down",
        F = "",
        R = {
          name: "ElImage",
          mixins: [_],
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
              var e = this.fit;
              return !this.$isServer && e
                ? H()
                  ? { "object-fit": e }
                  : this.getImageStyle(e)
                : {};
            },
            alignCenter: function () {
              return !this.$isServer && !H() && this.fit !== D;
            },
            preview: function () {
              var e = this.previewSrcList;
              return Array.isArray(e) && e.length > 0;
            },
            imageIndex: function () {
              var e = 0,
                t = this.previewSrcList.indexOf(this.src);
              return t >= 0 && (e = t), e;
            },
          },
          watch: {
            src: function (e) {
              this.show && this.loadImage();
            },
            show: function (e) {
              e && this.loadImage();
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
              var e = this;
              if (!this.$isServer) {
                (this.loading = !0), (this.error = !1);
                var img = new Image();
                (img.onload = function (t) {
                  return e.handleLoad(t, img);
                }),
                  (img.onerror = this.handleError.bind(this)),
                  Object.keys(this.$attrs).forEach(function (t) {
                    var n = e.$attrs[t];
                    img.setAttribute(t, n);
                  }),
                  (img.src = this.src);
              }
            },
            handleLoad: function (e, img) {
              (this.imageWidth = img.width),
                (this.imageHeight = img.height),
                (this.loading = !1),
                (this.error = !1);
            },
            handleError: function (e) {
              (this.loading = !1), (this.error = !0), this.$emit("error", e);
            },
            handleLazyLoad: function () {
              ((e, t) => {
                if (w || !e || !t) return !1;
                const n = e.getBoundingClientRect();
                let r;
                return (
                  (r = [
                    window,
                    document,
                    document.documentElement,
                    null,
                    void 0,
                  ].includes(t)
                    ? {
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                        left: 0,
                      }
                    : t.getBoundingClientRect()),
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
                var e = this.scrollContainer,
                  t = null;
                (t = Object(j.a)(e)
                  ? e
                  : Object(j.c)(e)
                  ? document.querySelector(e)
                  : ((e, t) => {
                      if (w) return;
                      let n = e;
                      for (; n; ) {
                        if (
                          [window, document, document.documentElement].includes(
                            n
                          )
                        )
                          return window;
                        if ($(n, t)) return n;
                        n = n.parentNode;
                      }
                      return n;
                    })(this.$el)) &&
                  ((this._scrollContainer = t),
                  (this._lazyLoadHandler = I()(200, this.handleLazyLoad)),
                  k(t, "scroll", this._lazyLoadHandler),
                  this.handleLazyLoad());
              }
            },
            removeLazyLoadListener: function () {
              var e = this._scrollContainer,
                t = this._lazyLoadHandler;
              !this.$isServer &&
                e &&
                t &&
                (S(e, "scroll", t),
                (this._scrollContainer = null),
                (this._lazyLoadHandler = null));
            },
            getImageStyle: function (e) {
              var t = this.imageWidth,
                n = this.imageHeight,
                r = this.$el,
                o = r.clientWidth,
                l = r.clientHeight;
              if (!(t && n && o && l)) return {};
              var c = t / n,
                d = o / l;
              e === N && (e = t < o && n < l ? M : T);
              switch (e) {
                case M:
                  return { width: "auto", height: "auto" };
                case T:
                  return c < d ? { width: "auto" } : { height: "auto" };
                case A:
                  return c < d ? { height: "auto" } : { width: "auto" };
                default:
                  return {};
              }
            },
            clickHandler: function () {
              this.preview &&
                ((F = document.body.style.overflow),
                (document.body.style.overflow = "hidden"),
                (this.showViewer = !0));
            },
            closeViewer: function () {
              (document.body.style.overflow = F), (this.showViewer = !1);
            },
          },
        },
        V = (n(523), n(10)),
        component = Object(V.a)(
          R,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { staticClass: "el-image" },
              [
                e.loading
                  ? e._t("placeholder", function () {
                      return [
                        n("div", { staticClass: "el-image__placeholder" }),
                      ];
                    })
                  : e.error
                  ? e._t("error", function () {
                      return [
                        n("div", { staticClass: "el-image__error" }, [
                          e._v(e._s(e.t("el.image.error"))),
                        ]),
                      ];
                    })
                  : n(
                      "img",
                      e._g(
                        e._b(
                          {
                            staticClass: "el-image__inner",
                            class: {
                              "el-image__inner--center": e.alignCenter,
                              "el-image__preview": e.preview,
                            },
                            style: e.imageStyle,
                            attrs: { src: e.src },
                            on: { click: e.clickHandler },
                          },
                          "img",
                          e.$attrs,
                          !1
                        ),
                        e.$listeners
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
      t.default = component.exports;
    },
    523: function (e, t, n) {
      "use strict";
      n(520);
    },
    524: function (e, t, n) {
      var r = n(3)(!1);
      r.push([e.i, ".el-image[data-v-12dcbf65]{width:100%}", ""]),
        (e.exports = r);
    },
    666: function (e, t, n) {
      var content = n(792);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(4).default)("2f05b33d", content, !0, { sourceMap: !1 });
    },
    791: function (e, t, n) {
      "use strict";
      n(666);
    },
    792: function (e, t, n) {
      var r = n(3)(!1);
      r.push([
        e.i,
        ".fade-in-linear-enter-active[data-v-7601e874],.fade-in-linear-leave-active[data-v-7601e874]{transition:opacity 200ms linear}.fade-in-linear-enter[data-v-7601e874],.fade-in-linear-leave[data-v-7601e874],.fade-in-linear-leave-active[data-v-7601e874]{opacity:0}.el-fade-in-linear-enter-active[data-v-7601e874],.el-fade-in-linear-leave-active[data-v-7601e874]{transition:opacity 200ms linear}.el-fade-in-linear-enter[data-v-7601e874],.el-fade-in-linear-leave[data-v-7601e874],.el-fade-in-linear-leave-active[data-v-7601e874]{opacity:0}.el-fade-in-enter-active[data-v-7601e874],.el-fade-in-leave-active[data-v-7601e874]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-fade-in-enter[data-v-7601e874],.el-fade-in-leave-active[data-v-7601e874]{opacity:0}.el-zoom-in-center-enter-active[data-v-7601e874],.el-zoom-in-center-leave-active[data-v-7601e874]{transition:all .3s cubic-bezier(0.55, 0, 0.1, 1)}.el-zoom-in-center-enter[data-v-7601e874],.el-zoom-in-center-leave-active[data-v-7601e874]{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active[data-v-7601e874],.el-zoom-in-top-leave-active[data-v-7601e874]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center top}.el-zoom-in-top-enter[data-v-7601e874],.el-zoom-in-top-leave-active[data-v-7601e874]{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active[data-v-7601e874],.el-zoom-in-bottom-leave-active[data-v-7601e874]{opacity:1;transform:scaleY(1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:center bottom}.el-zoom-in-bottom-enter[data-v-7601e874],.el-zoom-in-bottom-leave-active[data-v-7601e874]{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active[data-v-7601e874],.el-zoom-in-left-leave-active[data-v-7601e874]{opacity:1;transform:scale(1, 1);transition:transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);transform-origin:top left}.el-zoom-in-left-enter[data-v-7601e874],.el-zoom-in-left-leave-active[data-v-7601e874]{opacity:0;transform:scale(0.45, 0.45)}.collapse-transition[data-v-7601e874]{transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition[data-v-7601e874]{transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active[data-v-7601e874],.el-list-leave-active[data-v-7601e874]{transition:all 1s}.el-list-enter[data-v-7601e874],.el-list-leave-active[data-v-7601e874]{opacity:0;transform:translateY(-30px)}.el-opacity-transition[data-v-7601e874]{transition:opacity .3s cubic-bezier(0.55, 0, 0.1, 1)}.register[data-v-7601e874]{min-height:330px;position:relative;margin-bottom:2rem}.register__image[data-v-7601e874]{position:absolute;height:300px;border-radius:8px}@media(min-width: 576px){.register__image[data-v-7601e874]{height:300px}}@media(min-width: 768px){.register__image[data-v-7601e874]{height:350px}}@media(min-width: 992px){.register__image[data-v-7601e874]{height:350px}}@media(min-width: 1200px){.register__image[data-v-7601e874]{height:300px}}.register__content[data-v-7601e874]{left:1rem;width:90%;top:.5rem;position:absolute}@media(min-width: 576px){.register__content[data-v-7601e874]{width:65%;top:1rem;left:3rem}}@media(min-width: 768px){.register__content[data-v-7601e874]{width:65%;top:2rem;left:3rem}}@media(min-width: 992px){.register__content[data-v-7601e874]{width:65%;top:2rem;left:3rem}}@media(min-width: 1200px){.register__content[data-v-7601e874]{top:2.5rem}}.register__text[data-v-7601e874]{color:#fff;z-index:99}.register__text__title[data-v-7601e874]{font-weight:800;font-size:1.5rem;text-align:left}@media(min-width: 576px){.register__text__title[data-v-7601e874]{font-size:1.5rem}}@media(min-width: 768px){.register__text__title[data-v-7601e874]{font-size:2rem}}@media(min-width: 992px){.register__text__title[data-v-7601e874]{font-size:2.5rem}}.register__text__description[data-v-7601e874]{font-size:16px}.register__sends[data-v-7601e874]{position:relative;width:80%}.register__button[data-v-7601e874]{position:absolute;top:0;right:-30px}.register__button__btn-send[data-v-7601e874]{border:none;border-radius:0 6px 6px 0;background-color:#c23d00;color:#fff;cursor:pointer;padding:11px 40px 11px 40px}.register .input-area[data-v-7601e874]{position:absolute;color:#a0a3bd;border-radius:6px;border:none;width:100%;padding-left:24px}@media(max-width: 768px){.register .input-area[data-v-7601e874]{padding-left:14px}}.register .input-area[data-v-7601e874]:focus{outline:none}",
        "",
      ]),
        (e.exports = r);
    },
    875: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(5),
        o = (n(25), n(58)),
        l = n.n(o),
        c = {
          data: function () {
            return {
              form: { email: "" },
              rulesContribute: {
                email: [
                  {
                    validator: function (e, t, n) {
                      if (!t.trim()) return n(new Error("Hãy nhập email"));
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
              loading: !1,
              image: "/v1639368031/assets/register_opxesu.svg",
            };
          },
          methods: {
            handleRegister: function (e) {
              var t = this;
              this.$refs[e].validate(
                (function () {
                  var e = Object(r.a)(
                    regeneratorRuntime.mark(function e(n) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!n) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (t.loading = !0),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  l.a.get(
                                    "https://script.google.com/macros/s/AKfycbyP5yxl9qk83cpGvM6MZcDm2qjKkcmxvSK6ALUnwnbbQf7Lh1TgZ77nIZnE4QzlKdb-yA/exec",
                                    {
                                      params: {
                                        email: t.form.email.trim(),
                                        content:
                                          "Nhận tin khám phá tin công nghệ mới nhất",
                                      },
                                    }
                                  )
                                );
                              case 5:
                                e.next = 10;
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(2)),
                                  t.$notify.error({
                                    message:
                                      "Có lỗi xảy ra. Vui lòng thử lại sau",
                                    title: "Thông báo",
                                    duration: 2e3,
                                  });
                              case 10:
                                return (
                                  (e.prev = 10),
                                  (t.loading = !1),
                                  (t.form.email = ""),
                                  t.$notify.success({
                                    message:
                                      "Đăng ký nhận thông tin thành công",
                                    title: "Thông báo",
                                    duration: 2e3,
                                  }),
                                  e.finish(10)
                                );
                              case 15:
                                e.next = 18;
                                break;
                              case 17:
                                return e.abrupt("return", !1);
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 7, 10, 15]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            getUrlImage: function (e) {
              return this.$img(
                e,
                { format: "webp" },
                { format: "webp", provider: "cloudinary" }
              );
            },
          },
        },
        d = c,
        m = (n(791), n(10)),
        component = Object(m.a)(
          d,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "section",
              { staticClass: "register" },
              [
                n(
                  "CoreImage",
                  {
                    staticClass: "register__image",
                    attrs: {
                      src: e.getUrlImage(e.image),
                      lazy: "",
                      alt: "Đăng ký khám phá tin công nghệ mới nhất",
                    },
                  },
                  [
                    n(
                      "div",
                      { attrs: { slot: "placeholder" }, slot: "placeholder" },
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
                                    height: "330px",
                                    "border-radius": "8px",
                                  },
                                  attrs: { variant: "react" },
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
                e._v(" "),
                n("div", { staticClass: "register__content" }, [
                  e._m(0),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "register__sends" },
                    [
                      n(
                        "el-form",
                        {
                          ref: "formContribute",
                          attrs: { model: e.form, rules: e.rulesContribute },
                        },
                        [
                          n(
                            "el-form-item",
                            { attrs: { prop: "email", label: "" } },
                            [
                              n("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.form.email,
                                    expression: "form.email",
                                  },
                                ],
                                staticClass: "input-area py-5",
                                attrs: {
                                  type: "text",
                                  placeholder: "Nhập email của bạn",
                                },
                                domProps: { value: e.form.email },
                                on: {
                                  keypress: function (t) {
                                    return !t.type.indexOf("key") &&
                                      e._k(
                                        t.keyCode,
                                        "enter",
                                        13,
                                        t.key,
                                        "Enter"
                                      )
                                      ? null
                                      : (t.preventDefault(),
                                        e.handleRegister("formContribute"));
                                  },
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(e.form, "email", t.target.value);
                                  },
                                },
                              }),
                            ]
                          ),
                          e._v(" "),
                          n("div", { staticClass: "register__button" }, [
                            n(
                              "button",
                              {
                                staticClass: "register__button__btn-send",
                                attrs: { loading: e.loading },
                                on: {
                                  click: function (t) {
                                    return (
                                      t.preventDefault(),
                                      e.handleRegister("formContribute")
                                    );
                                  },
                                },
                              },
                              [e._v("\n            Gửi\n          ")]
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("div", { staticClass: "register__text" }, [
                n("div", { staticClass: "register__text__title" }, [
                  e._v("Khám phá tin công nghệ mới nhất"),
                ]),
                e._v(" "),
                n("p", { staticClass: "register__text__description" }, [
                  e._v(
                    "\n        Bạn muốn là người nắm bắt được các bản tin về công nghệ, lập trình\n        nhanh nhất? Hãy đăng ký ngay để cập nhật những case study và xu hướng\n        thiết kế mới nhất!\n      "
                  ),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "7601e874",
          null
        );
      t.default = component.exports;
      installComponents(component, { CoreImage: n(522).default });
    },
  },
]);
