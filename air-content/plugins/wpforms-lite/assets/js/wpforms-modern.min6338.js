"use strict";
var airForms = window.airForms || {};
(airForms.FrontendModern =
  airForms.FrontendModern ||
  (function (n, o) {
    let i = {
      init: function () {
        o(i.ready);
      },
      ready: function () {
        i.updateGBBlockAccentColors(), i.initPageBreakButtons(), i.events();
      },
      events: function () {
        o("form.airforms-form")
          .on("airformsCombinedUploadsSizeError", i.combinedUploadsSizeError)
          .on("airformsFormSubmitButtonDisable", i.formSubmitButtonDisable)
          .on("airformsFormSubmitButtonRestore", i.formSubmitButtonRestore)
          .on("airformsPageChange", i.pageChange),
          o("form.airforms-form .airforms-submit").on("keydown click", i.disabledButtonPress);
      },
      updateGBBlockAccentColors: function () {
        o(".airforms-block.airforms-container-full, .elementor-widget-airforms .airforms-container-full").each(
          function () {
            var r = o(this);
            i.updateGBBlockPageIndicatorColor(r), i.updateGBBlockIconChoicesColor(r), i.updateGBBlockRatingColor(r);
          },
        );
      },
      updateGBBlockPageIndicatorColor: function (r) {
        var r = r.find(".airforms-page-indicator"),
          o = r.find(
            ".airforms-page-indicator-page-progress, .airforms-page-indicator-page.active .airforms-page-indicator-page-number",
          ),
          e = o.find(".airforms-page-indicator-page-triangle");
        r.data("indicator-color", "var( --airforms-button-background-color )"),
          o.css("background-color", "var( --airforms-button-background-color )"),
          e.css("border-top-color", "var( --airforms-button-background-color )");
      },
      updateGBBlockPageIndicatorColorF: function (r) {
        var o,
          e,
          r = r.querySelector(".airforms-page-indicator");
        r &&
          ((e = (o = r.querySelector(
            ".airforms-page-indicator-page-progress, .airforms-page-indicator-page.active .airforms-page-indicator-page-number",
          )).querySelector(".airforms-page-indicator-page-triangle")),
          (r.dataset.indicatorColor = "var( --airforms-button-background-color )"),
          o && o.style.setProperty("background-color", "var( --airforms-button-background-color )"),
          e) &&
          e.style.setProperty("border-top-color", "var( --airforms-button-background-color )");
      },
      updateGBBlockIconChoicesColor: function (r) {
        r.find(".airforms-icon-choices").css(
          "--airforms-icon-choices-color",
          "var( --airforms-button-background-color )",
        );
      },
      updateGBBlockRatingColor: function (r) {
        r.find(".airforms-field-rating-item svg").css("color", "var( --airforms-button-background-color )");
      },
      initPageBreakButtons: function () {
        o(".airforms-page-button")
          .removeClass("airforms-disabled")
          .attr("aria-disabled", "false")
          .attr("aria-describedby", "");
      },
      combinedUploadsSizeError: function (r, o, e) {
        var t = o.data("formid"),
          a = o.attr("aria-errormessage") || "",
          t = `airforms-${t}-footer-error`,
          n = o.find(".airforms-submit");
        o.attr({ "aria-invalid": "true", "aria-errormessage": a + " " + t }),
          e.attr({ role: "alert", id: t }),
          e.find("> .airforms-hidden:first-child").remove(),
          e.prepend(`<span class="airforms-hidden">${airforms_settings.formErrorMessagePrefix}</span>`),
          n.attr("aria-describedby", t);
      },
      combinedUploadsSizeOk: function (r, o, e) {
        console.warn(
          'WARNING! Function "airForms.FrontendModern( e, $form, $errorCnt )" has been deprecated, please use the new "formSubmitButtonDisable: function( e, $form, $submitBtn )" function instead!',
        ),
          o
            .find(".airforms-submit")
            .removeClass("airforms-disabled")
            .attr("aria-disabled", "false")
            .attr("aria-describedby", "");
      },
      formSubmitButtonDisable: function (r, o, e) {
        o = o.attr("id") + "-submit-btn-disabled";
        e.before(`<div class="airforms-hidden" id="${o}">${airforms_settings.submitBtnDisabled}</div>`),
          e
            .prop("disabled", !1)
            .addClass("airforms-disabled")
            .attr("aria-disabled", "true")
            .attr("aria-describedby", o);
      },
      formSubmitButtonRestore: function (r, o, e) {
        var t = o.attr("id") + "-submit-btn-disabled";
        o.find("#" + t).remove(),
          e.removeClass("airforms-disabled").attr("aria-disabled", "false").attr("aria-describedby", "");
      },
      disabledButtonPress: function (r) {
        !o(this).hasClass("airforms-disabled") ||
          ("Enter" !== r.key && "click" !== r.type) ||
          (r.preventDefault(), r.stopPropagation());
      },
      pageChange: function (r, e, t) {
        var a = t.find(".airforms-page-indicator");
        if (airforms_settings.indicatorStepsPattern && a.length) {
          t = t.find(".airforms-page").length;
          let r = airforms_settings.indicatorStepsPattern,
            o;
          (r = r.replace("{current}", e).replace("{total}", t)),
            (o = a.hasClass("progress")
              ? a.find(".airforms-page-indicator-page-title").data(`page-${e}-title`)
              : a.find(`.airforms-page-indicator-page-${e} .airforms-page-indicator-page-title`).text()),
            (r = o ? o + ". " + r : r),
            a.attr("aria-valuenow", e),
            i.screenReaderAnnounce(r, "polite");
        }
      },
      screenReaderAnnounce: function (r, o) {
        var e = n.createElement("div"),
          t = "airforms-screen-reader-announce-" + Date.now();
        e.setAttribute("id", t),
          e.setAttribute("aria-live", o || "polite"),
          e.classList.add("airforms-screen-reader-announce");
        let a = n.body.appendChild(e);
        setTimeout(function () {
          a.innerHTML = r;
        }, 100),
          setTimeout(function () {
            n.body.removeChild(a);
          }, 1e3);
      },
      getColorWithOpacity: function (r, o) {
        r = r.trim();
        var e = i.getColorAsRGBArray(r);
        if (!e) return r;
        o = o && 0 !== o.length ? o.toString() : "1";
        (r = 4 === e.length ? parseFloat(e[3]) : 1), (o = parseFloat(o) * r);
        return `rgba(${e[0]},${e[1]},${e[2]},${o})`.replace(/\s+/g, "");
      },
      getSolidColor: function (r) {
        r = r.trim();
        var o = i.getColorAsRGBArray(r);
        return o ? `rgb(${o[0]},${o[1]},${o[2]})` : r;
      },
      isValidColor: function (r) {
        var o = new Option().style;
        return (o.color = r), "" !== o.color;
      },
      getColorAsRGBArray: function (r) {
        if (!i.isValidColor(r)) return !1;
        r = r.replace(/^#/, "");
        let o;
        return (
          r.match(/[0-9a-f]{6,8}$/gi)
            ? ((o = r.match(/\w\w/g).map((r) => parseInt(r, 16)))[3] = o[3] ? (o[3] / 255).toFixed(2) : 1)
            : (o = r.split("(")[1].split(")")[0].split(",")),
          o
        );
      },
      getCssVar: function (r, o) {
        if (!r || "function" != typeof r.getPropertyValue) return null;
        let e = r.getPropertyValue(o).trim();
        return (e = o.includes("color") ? e.replace(/\s/g, "") : e);
      },
      getCssVars: function (r) {
        if (!r || !r.length) return null;
        for (
          var r = r.hasClass("airforms-container") ? r : r.closest(".airforms-container"),
            o = getComputedStyle(r.get(0)),
            e = airforms_settings.css_vars,
            t = {},
            a = 0;
          a < e.length;
          a++
        )
          t[e[a]] = i.getCssVar(o, "--airforms-" + e[a]);
        return t;
      },
    };
    return i;
  })(document, (window, jQuery))),
  airForms.FrontendModern.init();
