(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    637: function (t, e, o) {
      var content = o(721);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(4).default)("f1470c68", content, !0, { sourceMap: !1 });
    },
    720: function (t, e, o) {
      "use strict";
      o(637);
    },
    721: function (t, e, o) {
      var n = o(3)(!1);
      n.push([
        t.i,
        ".home-page[data-v-80e9a088]{background-color:#fff;padding-top:0}",
        "",
      ]),
        (t.exports = n);
    },
    853: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(48),
        r = {
          scrollToTop: !0,
          head: function () {
            var t = "Lập Trình Không Khó",
              e = n.b.URL + this.$route.fullPath,
              o = n.b.DESCRIPTION,
              r = n.b.KEYWORDS.join(", "),
              c = n.b.IMAGE_THUMBNAIL,
              l = n.c.HOME;
            return {
              title: t,
              meta: [
                { hid: "title", name: "title", content: t },
                { hid: "twitter:site", name: "twitter:site", content: t },
                { hid: "twitter:title", name: "twitter:title", content: t },
                { hid: "description", name: "description", content: o },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: o,
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: o,
                },
                { hid: "keywords", name: "keywords", content: r },
                { hid: "og:keywords", name: "og:keywords", content: r },
                { hid: "og:image", property: "og:image", content: c },
                { hid: "og:type", property: "og:type", content: l },
                { hid: "twitter:card", name: "twitter:card", content: c },
                { hid: "twitter:image", name: "twitter:image", content: c },
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
                    "@type": l,
                    name: t,
                    alternateName: n.b.URL,
                    url: e,
                    mainEntityOfPage: { "@type": l, "@id": e },
                    headline: t,
                    image: {
                      "@type": "ImageObject",
                      url: c,
                      width: 700,
                      height: 400,
                    },
                    author: { "@type": "Person", name: n.b.ORGANIZATION },
                    publisher: {
                      "@type": "Organization",
                      name: n.b.ORGANIZATION,
                      logo: {
                        "@type": "ImageObject",
                        url: c,
                        width: 160,
                        height: 160,
                      },
                    },
                    description: o,
                  },
                },
              ],
            };
          },
        },
        c = (o(720), o(10)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "div",
              { staticClass: "home-page" },
              [
                o("LazyHomeSlide"),
                t._v(" "),
                o(
                  "div",
                  { staticClass: "container" },
                  [
                    o("LazyHomeBlog"),
                    t._v(" "),
                    o("LazyHomeTrend"),
                    t._v(" "),
                    o(
                      "el-row",
                      { staticClass: "mt-12", attrs: { gutter: 33 } },
                      [
                        o(
                          "el-col",
                          { attrs: { md: 18, lg: 18, sm: 24 } },
                          [
                            o("LazyHomeCourse"),
                            t._v(" "),
                            o("LazyHomeQuestionInterview"),
                            t._v(" "),
                            o("LazyHomeQuote"),
                            t._v(" "),
                            o("LazyHomeRegister"),
                          ],
                          1
                        ),
                        t._v(" "),
                        o(
                          "el-col",
                          { attrs: { md: 6, lg: 6, sm: 24 } },
                          [
                            o("LazyBaseSocialYoutube"),
                            t._v(" "),
                            o("LazyBaseSocialFacebook"),
                            t._v(" "),
                            o("LazyHomeHotNews"),
                            t._v(" "),
                            o("LazyBaseSocialFacebookMobile"),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
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
          "80e9a088",
          null
        );
      e.default = component.exports;
    },
  },
]);
