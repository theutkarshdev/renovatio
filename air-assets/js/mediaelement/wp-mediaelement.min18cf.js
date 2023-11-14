!(function (e, n) {
  (e.air = e.air || {}),
    (e.air.mediaelement = new (function () {
      var t = {};
      return {
        initialize: function () {
          var e = [];
          ((t = "undefined" != typeof _airmejsSettings ? n.extend(!0, {}, _airmejsSettings) : t).classPrefix = "mejs-"),
            (t.success =
              t.success ||
              function (e) {
                var t, n;
                e.rendererName &&
                  -1 !== e.rendererName.indexOf("flash") &&
                  ((t = e.attributes.autoplay && "false" !== e.attributes.autoplay),
                  (n = e.attributes.loop && "false" !== e.attributes.loop),
                  t &&
                    e.addEventListener(
                      "canplay",
                      function () {
                        e.play();
                      },
                      !1,
                    ),
                  n) &&
                  e.addEventListener(
                    "ended",
                    function () {
                      e.play();
                    },
                    !1,
                  );
              }),
            (t.customError = function (e, t) {
              if (-1 !== e.rendererName.indexOf("flash") || -1 !== e.rendererName.indexOf("flv"))
                return '<a href="' + t.src + '">' + mejsL10n.strings["mejs.download-file"] + "</a>";
            }),
            (void 0 !== t.videoShortcodeLibrary && "mediaelement" !== t.videoShortcodeLibrary) ||
              e.push(".air-video-shortcode"),
            (void 0 !== t.audioShortcodeLibrary && "mediaelement" !== t.audioShortcodeLibrary) ||
              e.push(".air-audio-shortcode"),
            e.length &&
              n(e.join(", "))
                .not(".mejs-container")
                .filter(function () {
                  return !n(this).parent().hasClass("mejs-mediaelement");
                })
                .mediaelementplayer(t);
        },
      };
    })()),
    n(e.air.mediaelement.initialize);
})(window, jQuery);
