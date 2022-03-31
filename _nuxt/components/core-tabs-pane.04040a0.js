(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    673: function (e, n, t) {
      "use strict";
      t.r(n);
      t(16);
      var l = {
          name: "ElTabPane",
          componentName: "ElTabPane",
          props: {
            label: String,
            labelContent: Function,
            name: String,
            closable: Boolean,
            disabled: Boolean,
            lazy: Boolean,
          },
          data: function () {
            return { index: null, loaded: !1 };
          },
          computed: {
            isClosable: function () {
              return this.closable || this.$parent.closable;
            },
            active: function () {
              var e = this.$parent.currentName === (this.name || this.index);
              return e && (this.loaded = !0), e;
            },
            paneName: function () {
              return this.name || this.index;
            },
          },
          updated: function () {
            this.$parent.$emit("tab-nav-update");
          },
        },
        o = t(10),
        component = Object(o.a)(
          l,
          function () {
            var e = this,
              n = e.$createElement,
              t = e._self._c || n;
            return !e.lazy || e.loaded || e.active
              ? t(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.active,
                        expression: "active",
                      },
                    ],
                    staticClass: "el-tab-pane",
                    attrs: {
                      role: "tabpanel",
                      "aria-hidden": !e.active,
                      id: "pane-" + e.paneName,
                      "aria-labelledby": "tab-" + e.paneName,
                    },
                  },
                  [e._t("default")],
                  2
                )
              : e._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
    },
  },
]);
