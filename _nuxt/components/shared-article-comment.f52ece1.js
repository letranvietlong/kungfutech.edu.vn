(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    671: function (t, e, n) {
      var content = n(803);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(4).default)("a8f7e504", content, !0, { sourceMap: !1 });
    },
    802: function (t, e, n) {
      "use strict";
      n(671);
    },
    803: function (t, e, n) {
      var r = n(3)(!1);
      r.push([
        t.i,
        "\n.utterances {\n  width: 100%;\n  margin: 0 !important;\n  max-width: 100%;\n}\n",
        "",
      ]),
        (t.exports = r);
    },
    880: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          mounted: function () {
            var t = document.createElement("SCRIPT");
            t.setAttribute("src", "https://utteranc.es/client.js"),
              t.setAttribute("repo", "techmely/hoc-lap-trinh"),
              t.setAttribute("issue-term", "pathname"),
              t.setAttribute("label", "Comment"),
              t.setAttribute("theme", "github-light"),
              t.setAttribute("crossorigin", "anonymous"),
              t.setAttribute("async", "async"),
              this.$el.append(t);
          },
        },
        c = (n(802), n(10)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement;
            t._self._c;
            return t._m(0);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", [
                n("h6", [
                  n("span"),
                  t._v(" "),
                  n("small", { staticClass: "text-xs" }),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);
