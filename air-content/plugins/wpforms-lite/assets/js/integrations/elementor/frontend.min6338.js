"use strict";
var airFormsElementorFrontend =
  window.airFormsElementorFrontend ||
  (function (o, e, n) {
    var r = {
      init: function () {
        r.events();
      },
      events: function () {
        e.addEventListener("elementor/popup/show", function (e) {
          e = n("#elementor-popup-modal-" + e.detail.id).find(".airforms-form");
          e.length && r.initFields(e);
        });
      },
      initFields: function (e) {
        airforms.ready(),
          "undefined" != typeof airformsModernFileUpload && airformsModernFileUpload.init(),
          "undefined" != typeof airformsRecaptchaLoad &&
            ("recaptcha" === airformsElementorVars.captcha_provider && "v3" === airformsElementorVars.recaptcha_type
              ? "undefined" != typeof grecaptcha && grecaptcha.ready(airformsRecaptchaLoad)
              : airformsRecaptchaLoad()),
          n(o).trigger("airforms_elementor_form_fields_initialized", [e]);
      },
    };
    return r;
  })(document, window, jQuery);
airFormsElementorFrontend.init();
