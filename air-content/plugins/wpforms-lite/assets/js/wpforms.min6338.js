"use strict";
var airforms =
  window.airforms ||
  (function (i, s, l) {
    var p = {
      init: function () {
        l(p.ready),
          l(s).on("load", function () {
            "function" == typeof l.ready.then ? l.ready.then(p.load) : p.load();
          }),
          p.bindUIActions(),
          p.bindOptinMonster();
      },
      ready: function () {
        p.clearUrlQuery(),
          p.setUserIndentifier(),
          p.loadValidation(),
          p.loadDatePicker(),
          p.loadTimePicker(),
          p.loadInputMask(),
          p.loadSmartPhoneField(),
          p.loadPayments(),
          p.loadMailcheck(),
          p.loadChoicesJS(),
          l(".airforms-randomize").each(function () {
            for (var e = l(this), t = e.children(); t.length; )
              e.append(t.splice(Math.floor(Math.random() * t.length), 1)[0]);
          }),
          l(".airforms-page-button").prop("disabled", !1),
          l(i).trigger("airformsReady");
      },
      load: function () {},
      clearUrlQuery: function () {
        var e = s.location,
          t = e.search;
        -1 !== t.indexOf("airforms_form_id=") &&
          ((t = t.replace(
            /([&?]airforms_form_id=[0-9]*$|airforms_form_id=[0-9]*&|[?&]airforms_form_id=[0-9]*(?=#))/,
            "",
          )),
          history.replaceState({}, null, e.origin + e.pathname + t));
      },
      loadValidation: function () {
        void 0 !== l.fn.validate &&
          (l(".airforms-input-temp-name").each(function (e, t) {
            var r = Math.floor(9999 * Math.random()) + 1;
            l(this).attr("name", "airf-temp-" + r);
          }),
          l(i).on("change", ".airforms-validate input[type=url]", function () {
            var e = l(this).val();
            if (!e) return !1;
            "http://" !== e.substr(0, 7) && "https://" !== e.substr(0, 8) && l(this).val("https://" + e);
          }),
          (l.validator.messages.required = airforms_settings.val_required),
          (l.validator.messages.url = airforms_settings.val_url),
          (l.validator.messages.email = airforms_settings.val_email),
          (l.validator.messages.number = airforms_settings.val_number),
          void 0 !== l.fn.payment &&
            l.validator.addMethod(
              "creditcard",
              function (e, t) {
                e = l.payment.validateCardNumber(e);
                return this.optional(t) || e;
              },
              airforms_settings.val_creditcard,
            ),
          l.validator.addMethod(
            "extension",
            function (e, t, r) {
              return (
                (r = "string" == typeof r ? r.replace(/,/g, "|") : "png|jpe?g|gif"),
                this.optional(t) || e.match(new RegExp("\\.(" + r + ")$", "i"))
              );
            },
            airforms_settings.val_fileextension,
          ),
          l.validator.addMethod(
            "maxsize",
            function (e, t, r) {
              var a,
                o,
                n = r,
                r = this.optional(t);
              if (r) return r;
              if (t.files && t.files.length)
                for (a = 0, o = t.files.length; a < o; a++) if (t.files[a].size > n) return !1;
              return !0;
            },
            airforms_settings.val_filesize,
          ),
          l.validator.addMethod("step", function (e, t, r) {
            n = r;
            const a = (Math.floor(n) !== n && n.toString().split(".")[1].length) || 0;
            function o(e) {
              return Math.round(e * Math.pow(10, a));
            }
            var n = o(l(t).attr("min"));
            return (e = o(e) - n), this.optional(t) || o(e) % o(r) == 0;
          }),
          (l.validator.methods.email = function (e, t) {
            return (
              this.optional(t) ||
              (function (e) {
                if ("string" != typeof e) return !1;
                var t = e.indexOf("@", 1);
                if (e.length < 6 || 254 < e.length || -1 === t) return !1;
                if (-1 !== e.indexOf("@", t + 1)) return !1;
                var [t, e] = e.split("@");
                if (!t || !e) return !1;
                if (!/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(t) || 63 < t.length) return !1;
                if (/\.{2,}/.test(e) || e.trim(" \t\n\r\0\v.") !== e) return !1;
                t = e.split(".");
                if (t.length < 2) return !1;
                var r = /^[a-z0-9-]+$/i;
                for (const a of t) if (63 < a.length || a.trim(" \t\n\r\0\v-") !== a || !r.test(a)) return !1;
                return !0;
              })(e)
            );
          }),
          l.validator.addMethod(
            "restricted-email",
            function (e, r) {
              var a = this,
                t = l(r),
                o = t.closest(".airforms-field"),
                n = t.closest(".airforms-form"),
                i = "pending";
              return (
                !t.val().length ||
                (this.startRequest(r),
                l.post({
                  url: airforms_settings.ajaxurl,
                  type: "post",
                  async: !1,
                  data: {
                    action: "airforms_restricted_email",
                    form_id: n.data("formid"),
                    field_id: o.data("field-id"),
                    email: t.val(),
                  },
                  dataType: "json",
                  success: function (e) {
                    var t = {};
                    (i = e.success && e.data)
                      ? ((a.toHide = a.errorsFor(r)), a.showErrors())
                      : ((t[r.name] = airforms_settings.val_email_restricted), a.showErrors(t)),
                      a.stopRequest(r, i);
                  },
                }),
                i)
              );
            },
            airforms_settings.val_email_restricted,
          ),
          l.validator.addMethod(
            "confirm",
            function (e, t, r) {
              t = l(t).closest(".airforms-field");
              return l(t.find("input")[0]).val() === l(t.find("input")[1]).val();
            },
            airforms_settings.val_confirm,
          ),
          l.validator.addMethod(
            "required-payment",
            function (e, t) {
              return 0 < p.amountSanitize(e);
            },
            airforms_settings.val_requiredpayment,
          ),
          l.validator.addMethod(
            "time12h",
            function (e, t) {
              return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e);
            },
            airforms_settings.val_time12h,
          ),
          l.validator.addMethod(
            "time24h",
            function (e, t) {
              return this.optional(t) || /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(\ ?[AP]M)?$/i.test(e);
            },
            airforms_settings.val_time24h,
          ),
          l.validator.addMethod(
            "turnstile",
            function (e) {
              return e;
            },
            airforms_settings.val_turnstile_fail_msg,
          ),
          l.validator.addMethod(
            "time-limit",
            function (e, t) {
              var t = l(t),
                r = t.data("min-time"),
                a = t.data("max-time"),
                t = t.prop("required");
              return (
                void 0 === r ||
                !(t || !p.empty(e)) ||
                (p.compareTimesGreaterThan(a, r)
                  ? p.compareTimesGreaterThan(e, r) && p.compareTimesGreaterThan(a, e)
                  : (p.compareTimesGreaterThan(e, r) && p.compareTimesGreaterThan(e, a)) ||
                    (p.compareTimesGreaterThan(r, e) && p.compareTimesGreaterThan(a, e)))
              );
            },
            function (e, t) {
              var t = l(t),
                r = t.data("min-time"),
                t = t.data("max-time"),
                r = r.replace(/^00:([0-9]{2})pm$/, "12:$1pm"),
                t = t.replace(/^00:([0-9]{2})pm$/, "12:$1pm");
              return (
                (r = r.replace(/(am|pm)/g, " $1").toUpperCase()),
                (t = t.replace(/(am|pm)/g, " $1").toUpperCase()),
                airforms_settings.val_time_limit.replace("{minTime}", r).replace("{maxTime}", t)
              );
            },
          ),
          l.validator.addMethod(
            "check-limit",
            function (e, t) {
              var t = l(t).closest("ul"),
                r = t.find('input[type="checkbox"]:checked'),
                t = parseInt(t.attr("data-choice-limit") || 0, 10);
              return 0 === t || r.length <= t;
            },
            function (e, t) {
              t = parseInt(l(t).closest("ul").attr("data-choice-limit") || 0, 10);
              return airforms_settings.val_checklimit.replace("{#}", t);
            },
          ),
          void 0 !== l.fn.intlTelInput &&
            l.validator.addMethod(
              "smart-phone-field",
              function (e, t) {
                return !e.match(/[^\d()\-+\s]/) && (this.optional(t) || l(t).intlTelInput("isValidNumber"));
              },
              airforms_settings.val_phone,
            ),
          l.validator.addMethod(
            "inputmask-incomplete",
            function (e, t) {
              return 0 === e.length || void 0 === l.fn.inputmask || l(t).inputmask("isComplete");
            },
            airforms_settings.val_inputmask_incomplete,
          ),
          l.validator.addMethod(
            "required-positive-number",
            function (e, t) {
              return 0 < p.amountSanitize(e);
            },
            airforms_settings.val_number_positive,
          ),
          l.validator.addMethod(
            "us-phone-field",
            function (e, t) {
              return !e.match(/[^\d()\-+\s]/) && (this.optional(t) || 10 === e.replace(/[^\d]/g, "").length);
            },
            airforms_settings.val_phone,
          ),
          l.validator.addMethod(
            "int-phone-field",
            function (e, t) {
              return !e.match(/[^\d()\-+\s]/) && (this.optional(t) || 0 < e.replace(/[^\d]/g, "").length);
            },
            airforms_settings.val_phone,
          ),
          l.validator.addMethod(
            "password-strength",
            function (e, t) {
              var r = l(t);
              return (
                ("" === r.val().trim() && !r.hasClass("airforms-field-required")) ||
                airFormsPasswordField.passwordStrength(e, t) >= Number(r.data("password-strength-level"))
              );
            },
            airforms_settings.val_password_strength,
          ),
          l(".airforms-validate").each(function () {
            var e = l(this),
              t = e.data("formid"),
              t =
                void 0 !== s["airforms_" + t] && s["airforms_" + t].hasOwnProperty("validate")
                  ? s["airforms_" + t].validate
                  : "undefined" != typeof airforms_validate
                  ? airforms_validate
                  : {
                      errorElement: p.isModernMarkupEnabled() ? "em" : "label",
                      errorClass: "airforms-error",
                      validClass: "airforms-valid",
                      ignore:
                        ":hidden:not(textarea.air-editor-area), .airforms-conditional-hide textarea.air-editor-area",
                      errorPlacement: function (e, t) {
                        p.isLikertScaleField(t)
                          ? (t.closest("table").hasClass("single-row")
                              ? t.closest(".airforms-field")
                              : t.closest("tr").find("th")
                            ).append(e)
                          : p.isWrappedField(t)
                          ? t.closest(".airforms-field").append(e)
                          : p.isDateTimeField(t)
                          ? p.dateTimeErrorPlacement(t, e)
                          : p.isFieldInColumn(t) || p.isFieldHasHint(t)
                          ? t.parent().append(e)
                          : p.isLeadFormsSelect(t) || p.isCoupon(t)
                          ? t.parent().parent().append(e)
                          : e.insertAfter(t),
                          p.isModernMarkupEnabled() &&
                            e.attr({ role: "alert", "aria-label": airforms_settings.errorMessagePrefix, for: "" });
                      },
                      highlight: function (e, t, r) {
                        var a = l(e),
                          o = a.closest(".airforms-field"),
                          n = a.attr("name");
                        ("radio" === a.attr("type") || "checkbox" === a.attr("type")
                          ? o.find('input[name="' + n + '"]')
                          : a
                        )
                          .addClass(t)
                          .removeClass(r),
                          "password" === a.attr("type") &&
                            "" === a.val().trim() &&
                            s.airFormsPasswordField &&
                            a.data("rule-password-strength") &&
                            a.hasClass("airforms-field-required") &&
                            airFormsPasswordField.passwordStrength("", e),
                          o.addClass("airforms-has-error");
                      },
                      unhighlight: function (e, t, r) {
                        var e = l(e),
                          a = e.closest(".airforms-field"),
                          o = e.attr("name");
                        ("radio" === e.attr("type") || "checkbox" === e.attr("type")
                          ? a.find('input[name="' + o + '"]')
                          : e
                        )
                          .addClass(r)
                          .removeClass(t),
                          a.find(":input.airforms-error,[data-dz-errormessage]:not(:empty)").length ||
                            a.removeClass("airforms-has-error"),
                          p.isModernMarkupEnabled() && e.parent().find("em.airforms-error").remove();
                      },
                      submitHandler: function (r) {
                        function e() {
                          var a = l(r),
                            o = a.find(".airforms-submit"),
                            e = o.data("alt-text"),
                            t = o.get(0).recaptchaID;
                          if (
                            (a.data("token") &&
                              0 === l(".airforms-token", a).length &&
                              l('<input type="hidden" class="airforms-token" name="airforms[token]" />')
                                .val(a.data("token"))
                                .appendTo(a),
                            a.find("#airforms-field_recaptcha-error").remove(),
                            o.prop("disabled", !0),
                            airFormsUtils.triggerEvent(a, "airformsFormSubmitButtonDisable", [a, o]),
                            e && o.text(e),
                            !p.empty(t) || 0 === t)
                          )
                            return (
                              grecaptcha.execute(t).then(null, function (e) {
                                let t = "label",
                                  r = "";
                                p.isModernMarkupEnabled() && ((t = "em"), (r = 'role="alert"')),
                                  (e = null === e ? "" : "<br>" + e);
                                e = `<${t} id="airforms-field_recaptcha-error" class="airforms-error" ${r}> ${airforms_settings.val_recaptcha_fail_msg}${e}</${t}>`;
                                a.find(".airforms-recaptcha-container").append(e), o.prop("disabled", !1);
                              }),
                              !1
                            );
                          l(".airforms-input-temp-name").removeAttr("name"), p.formSubmit(a);
                        }
                        return "function" == typeof airformsRecaptchaV3Execute ? airformsRecaptchaV3Execute(e) : e();
                      },
                      invalidHandler: function (e, t) {
                        void 0 !== t.errorList[0] && p.scrollToError(l(t.errorList[0].element));
                      },
                      onkeyup: airFormsUtils.debounce(function (e, t) {
                        l(e).hasClass("airforms-novalidate-onkeyup") ||
                          (9 === t.which && "" === this.elementValue(e)) ||
                          -1 !== l.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) ||
                          ((e.name in this.submitted || e.name in this.invalid) && this.element(e));
                      }, 1e3),
                      onfocusout: function (e) {
                        var t = !1;
                        l(e).hasClass("airforms-novalidate-onkeyup") && !e.value && (t = !0),
                          (t = this.checkable(e) || (!(e.name in this.submitted) && this.optional(e)) ? t : !0) &&
                            this.element(e);
                      },
                      onclick: function (e) {
                        var t = !1,
                          r = (e || {}).type,
                          a = l(e);
                        -1 < ["checkbox", "radio"].indexOf(r) &&
                          ((a = a.hasClass("airforms-likert-scale-option")
                            ? a.closest("tr")
                            : a.closest(".airforms-field"))
                            .find("label.airforms-error, em.airforms-error")
                            .remove(),
                          (t = !0)),
                          t && this.element(e);
                      },
                    };
            e.validate(t);
          }));
      },
      isFieldInColumn: function (e) {
        return (
          e.parent().hasClass("airforms-one-half") ||
          e.parent().hasClass("airforms-two-fifths") ||
          e.parent().hasClass("airforms-one-fifth")
        );
      },
      isFieldHasHint: function (e) {
        return (
          0 <
          e.nextAll(
            ".airforms-field-sublabel, .airforms-field-description, .airforms-field-limit-text, .airforms-pass-strength-result",
          ).length
        );
      },
      isDateTimeField: function (e) {
        return (
          e.hasClass("airforms-timepicker") ||
          e.hasClass("airforms-datepicker") ||
          (e.is("select") && e.attr("class").match(/date-month|date-day|date-year/))
        );
      },
      isWrappedField: function (e) {
        return (
          "checkbox" === e.attr("type") ||
          "radio" === e.attr("type") ||
          "range" === e.attr("type") ||
          "select" === e.is("select") ||
          1 === e.data("is-wrapped-field") ||
          e.parent().hasClass("iti") ||
          e.hasClass("airforms-validation-group-member") ||
          e.hasClass("choicesjs-select") ||
          e.hasClass("airforms-net-promoter-score-option")
        );
      },
      isLikertScaleField: function (e) {
        return e.hasClass("airforms-likert-scale-option");
      },
      isLeadFormsSelect: function (e) {
        return e.parent().hasClass("airforms-lead-forms-select");
      },
      isCoupon: function (e) {
        return e.closest(".airforms-field").hasClass("airforms-field-payment-coupon");
      },
      dateTimeErrorPlacement: function (e, t) {
        var r = e.closest(".airforms-field-row-block, .airforms-field-date-time");
        r.length
          ? r.find("label.airforms-error, em.airforms-error").length || r.append(t)
          : e.closest(".airforms-field").append(t);
      },
      loadDatePicker: function () {
        void 0 !== l.fn.flatpickr &&
          l(".airforms-datepicker-wrap").each(function () {
            var a = l(this),
              e = a.find("input"),
              t = a.closest(".airforms-form").data("formid"),
              r = a.closest(".airforms-field").data("field-id"),
              r =
                void 0 !== s["airforms_" + t + "_" + r] && s["airforms_" + t + "_" + r].hasOwnProperty("datepicker")
                  ? s["airforms_" + t + "_" + r].datepicker
                  : void 0 !== s["airforms_" + t] && s["airforms_" + t].hasOwnProperty("datepicker")
                  ? s["airforms_" + t].datepicker
                  : "undefined" != typeof airforms_datepicker
                  ? airforms_datepicker
                  : { disableMobile: !0 },
              o =
                (!r.hasOwnProperty("locale") &&
                  "undefined" != typeof airforms_settings &&
                  airforms_settings.hasOwnProperty("locale") &&
                  (r.locale = airforms_settings.locale),
                (r.wrap = !0),
                (r.dateFormat = e.data("date-format")),
                1 === e.data("disable-past-dates") && (r.minDate = "today"),
                e.data("limit-days")),
              n = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            o &&
              "" !== o &&
              ((o = o.split(",")),
              (r.disable = [
                function (e) {
                  for (var t in o) if (n.indexOf(o[t]) === e.getDay()) return !1;
                  return !0;
                },
              ])),
              (r.onChange = function (e, t, r) {
                t = "" === t ? "none" : "block";
                a.find(".airforms-datepicker-clear").css("display", t);
              }),
              a.flatpickr(r);
          });
      },
      loadTimePicker: function () {
        void 0 !== l.fn.timepicker &&
          l(".airforms-timepicker").each(function () {
            var e = l(this),
              t = e.closest(".airforms-form").data("formid"),
              r = e.closest(".airforms-field").data("field-id"),
              r =
                void 0 !== s["airforms_" + t + "_" + r] && s["airforms_" + t + "_" + r].hasOwnProperty("timepicker")
                  ? s["airforms_" + t + "_" + r].timepicker
                  : void 0 !== s["airforms_" + t] && s["airforms_" + t].hasOwnProperty("timepicker")
                  ? s["airforms_" + t].timepicker
                  : "undefined" != typeof airforms_timepicker
                  ? airforms_timepicker
                  : { scrollDefault: "now", forceRoundTime: !0 };
            e.timepicker(r);
          });
      },
      loadInputMask: function () {
        void 0 !== l.fn.inputmask && l(".airforms-masked-input").inputmask({ rightAlign: !1 });
      },
      loadSmartPhoneField: function () {
        var a, e, t;
        void 0 !== l.fn.intlTelInput &&
          ((a = {}),
          airforms_settings.gdpr || (a.geoIpLookup = p.currentIpToCountry),
          airforms_settings.gdpr &&
            ((e = this.getFirstBrowserLanguage()), (t = -1 < e.indexOf("-") ? e.split("-").pop() : "")),
          (t =
            t &&
            (s.intlTelInputGlobals.getCountryData().filter(function (e) {
              return e.iso2 === t.toLowerCase();
            }).length
              ? t
              : "")),
          (a.initialCountry = airforms_settings.gdpr && t ? t : "auto"),
          l(".airforms-smart-phone-field").each(function (e, t) {
            var r = l(t);
            (a.hiddenInput = r.closest(".airforms-field-phone").data("field-id")),
              (a.utilsScript =
                airforms_settings.airforms_plugin_url +
                "assets/pro/lib/intl-tel-input/jquery.intl-tel-input-utils.min.js"),
              r.intlTelInput(a),
              r.attr("name", "airf-temp-" + r.attr("name")),
              r.addClass("airforms-input-temp-name"),
              r.on("blur input", function () {
                (!r.intlTelInput("isValidNumber") && p.empty(s.airFormsEditEntry)) ||
                  r.siblings('input[type="hidden"]').val(r.intlTelInput("getNumber"));
              });
          }),
          l(".airforms-form").on("airformsBeforeFormSubmit", function () {
            l(this).find(".airforms-smart-phone-field").trigger("input");
          }));
      },
      loadPayments: function () {
        l(".airforms-payment-total").each(function (e, t) {
          p.amountTotal(this);
        }),
          void 0 !== l.fn.payment &&
            (l(".airforms-field-credit-card-cardnumber").payment("formatCardNumber"),
            l(".airforms-field-credit-card-cardcvc").payment("formatCardCVC"));
      },
      loadMailcheck: function () {
        airforms_settings.mailcheck_enabled &&
          void 0 !== l.fn.mailcheck &&
          (0 < airforms_settings.mailcheck_domains.length &&
            (Mailcheck.defaultDomains = Mailcheck.defaultDomains.concat(airforms_settings.mailcheck_domains)),
          0 < airforms_settings.mailcheck_toplevel_domains.length &&
            (Mailcheck.defaultTopLevelDomains = Mailcheck.defaultTopLevelDomains.concat(
              airforms_settings.mailcheck_toplevel_domains,
            )),
          l(i).on("blur", ".airforms-field-email input", function () {
            var e = l(this),
              o = e.attr("id");
            e.mailcheck({
              suggested: function (e, t) {
                t.address.match(/^xn--/) &&
                  ((t.full = punycode.toUnicode(decodeURI(t.full))),
                  (r = t.full.split("@")),
                  (t.address = r[0]),
                  (t.domain = r[1])),
                  t.domain.match(/^xn--/) && (t.domain = punycode.toUnicode(decodeURI(t.domain)));
                var r = decodeURI(t.address)
                    .replaceAll(/[<>'"()/\\|:;=@%&\s]/gi, "")
                    .substr(0, 64),
                  a = decodeURI(t.domain).replaceAll(/[<>'"()/\\|:;=@%&+_\s]/gi, "");
                (t =
                  '<a href="#" class="mailcheck-suggestion" data-id="' +
                  o +
                  '" title="' +
                  airforms_settings.val_email_suggestion_title +
                  '">' +
                  r +
                  "@" +
                  a +
                  "</a>"),
                  (t = airforms_settings.val_email_suggestion.replace("{suggestion}", t)),
                  e
                    .closest(".airforms-field")
                    .find("#" + o + "_suggestion")
                    .remove(),
                  e
                    .parent()
                    .append(
                      '<label class="airforms-error mailcheck-error" id="' + o + '_suggestion">' + t + "</label>",
                    );
              },
              empty: function () {
                l("#" + o + "_suggestion").remove();
              },
            });
          }),
          l(i).on("click", ".airforms-field-email .mailcheck-suggestion", function (e) {
            var t = l(this),
              r = t.closest(".airforms-field"),
              a = t.data("id");
            e.preventDefault(), r.find("#" + a).val(t.text()), t.parent().remove();
          }));
      },
      loadChoicesJS: function () {
        "function" == typeof s.Choices &&
          (l(
            ".airforms-field-select-style-modern .choicesjs-select, .airforms-field-payment-select .choicesjs-select",
          ).each(function (e, t) {
            var r, a;
            l(t).data("choicesjs") ||
              ((r = s.airforms_choicesjs_config || {}),
              (a = l(t).data("search-enabled")),
              (r.searchEnabled = void 0 === a || a),
              (r.callbackOnInit = function () {
                var t = this,
                  r = l(t.passedElement.element),
                  a = l(t.input.element),
                  e = r.data("size-class");
                r.removeAttr("hidden").addClass(t.config.classNames.input + "--hidden"),
                  e && l(t.containerOuter.element).addClass(e),
                  r.prop("multiple") &&
                    (a.data("placeholder", a.attr("placeholder")), t.getValue(!0).length) &&
                    a.removeAttr("placeholder"),
                  r.on("change", function () {
                    var e;
                    r.prop("multiple") &&
                      (t.getValue(!0).length
                        ? a.removeAttr("placeholder")
                        : a.attr("placeholder", a.data("placeholder"))),
                      (e = r.closest("form").data("validator")) && e.element(r);
                  });
              }),
              (r.callbackOnCreateTemplates = function () {
                var r = l(this.passedElement.element);
                return {
                  option: function (e) {
                    var t = Choices.defaults.templates.option.call(this, e);
                    return (
                      void 0 !== e.placeholder && !0 === e.placeholder && t.classList.add("placeholder"),
                      r.hasClass("airforms-payment-price") &&
                        void 0 !== e.customProperties &&
                        null !== e.customProperties &&
                        (t.dataset.amount = e.customProperties),
                      t
                    );
                  },
                };
              }),
              l(t).data("choicesjs", new Choices(t, r)));
          }),
          l(i).on("click", ".choices", function (e) {
            var t = l(this),
              r = t.find("select").data("choicesjs");
            r &&
              t.hasClass("is-open") &&
              (e.target.classList.contains("choices__inner") || e.target.classList.contains("choices__arrow")) &&
              r.hideDropdown();
          }));
      },
      bindUIActions: function () {
        var e = l(i);
        e.on("click", ".airforms-page-button", function (e) {
          e.preventDefault(), p.pagebreakNav(this);
        }),
          e.on("change input", ".airforms-payment-price", function () {
            p.amountTotal(this, !0);
          }),
          e.on("input", ".airforms-payment-user-input", function () {
            var e = l(this),
              t = e.val();
            e.val(t.replace(/[^0-9.,]/g, ""));
          }),
          e.on("focusout", ".airforms-payment-user-input", function () {
            var e = l(this),
              t = e.val();
            if (!t) return t;
            (t = p.amountSanitize(t)), (t = p.amountFormat(t));
            e.val(t);
          }),
          e.on("airformsProcessConditionals", function (e, t) {
            p.amountTotal(t, !0);
          }),
          e
            .on("mouseenter", ".airforms-field-rating-item", function () {
              l(this).parent().find(".airforms-field-rating-item").removeClass("selected hover"),
                l(this).prevAll().addBack().addClass("hover");
            })
            .on("mouseleave", ".airforms-field-rating-item", function () {
              l(this).parent().find(".airforms-field-rating-item").removeClass("selected hover"),
                l(this).parent().find("input:checked").parent().prevAll().addBack().addClass("selected");
            }),
          l(i).on("change", ".airforms-field-rating-item input", function () {
            var e = l(this),
              t = e.closest(".airforms-field-rating-items").find(".airforms-field-rating-item");
            e.focus(), t.removeClass("hover selected"), e.parent().prevAll().addBack().addClass("selected");
          }),
          l(function () {
            l(".airforms-field-rating-item input:checked").trigger("change");
          }),
          e.on("keydown", ".airforms-image-choices-item label", function (e) {
            var t = l(this);
            if (t.closest(".airforms-field").hasClass("airforms-conditional-hide")) return e.preventDefault(), !1;
            32 === e.keyCode && (t.find("input").trigger("click"), e.preventDefault());
          }),
          s.document.documentMode &&
            e.on("click", ".airforms-image-choices-item img", function () {
              l(this).closest("label").find("input").trigger("click");
            }),
          e.on(
            "change",
            ".airforms-field-checkbox input, .airforms-field-radio input, .airforms-field-payment-multiple input, .airforms-field-payment-checkbox input, .airforms-field-gdpr-checkbox input",
            function (e) {
              var t = l(this);
              if (t.closest(".airforms-field").hasClass("airforms-conditional-hide")) return e.preventDefault(), !1;
              switch (t.attr("type")) {
                case "radio":
                  t
                    .closest("ul")
                    .find("li")
                    .removeClass("airforms-selected")
                    .find("input[type=radio]")
                    .removeProp("checked"),
                    t.prop("checked", !0).closest("li").addClass("airforms-selected");
                  break;
                case "checkbox":
                  t.is(":checked")
                    ? (t.closest("li").addClass("airforms-selected"), t.prop("checked", !0))
                    : (t.closest("li").removeClass("airforms-selected"), t.prop("checked", !1));
              }
            },
          ),
          e.on("input", ".airforms-field-file-upload", function () {
            var e = l(this),
              t = e.closest("form.airforms-form").find('.airforms-field-file-upload input:not(".dropzone-input")'),
              a = 0,
              r = Number(airforms_settings.post_max_size),
              o =
                '<div class="airforms-error-container-post_max_size">' + airforms_settings.val_post_max_size + "</div>",
              e = e.closest("form.airforms-form").find(".airforms-submit-container"),
              n = e.find("button.airforms-submit"),
              i = e.prev(),
              s = n.closest("form"),
              p = s.find(".airforms-page-next:visible");
            0 !== s.find(".airforms-page-indicator").length && 0 !== p.length && (n = p),
              t.each(function () {
                for (var e = l(this), t = 0, r = e[0].files.length; t < r; t++) a += e[0].files[t].size;
              }),
              a < r
                ? (i.find(".airforms-error-container-post_max_size").remove(),
                  n.prop("disabled", !1),
                  airFormsUtils.triggerEvent(s, "airformsFormSubmitButtonRestore", [s, n]),
                  airFormsUtils.triggerEvent(s, "airformsCombinedUploadsSizeOk", [s, i]))
                : ((a = Number((a / 1048576).toFixed(3))),
                  (r = Number((r / 1048576).toFixed(3))),
                  (o = o.replace(/{totalSize}/, a).replace(/{maxSize}/, r)),
                  i.hasClass("airforms-error-container")
                    ? (i.find(".airforms-error-container-post_max_size").remove(), i.append(o))
                    : (e.before('<div class="airforms-error-container">{errorMsg}</div>'.replace(/{errorMsg}/, o)),
                      (i = e.prev())),
                  n.prop("disabled", !0),
                  airFormsUtils.triggerEvent(s, "airformsFormSubmitButtonDisable", [s, n]),
                  airFormsUtils.triggerEvent(s, "airformsCombinedUploadsSizeError", [s, i]));
          }),
          e.on("change input", ".airforms-field-number-slider input[type=range]", function (e) {
            var t = l(e.target).siblings(".airforms-field-number-slider-hint");
            t.html(t.data("hint").replace("{value}", "<b>" + e.target.value + "</b>"));
          }),
          e.on("keydown", ".airforms-form input", function (e) {
            var t, r;
            13 !== e.keyCode ||
              0 === (r = (t = l(this)).closest(".airforms-page")).length ||
              ["text", "tel", "number", "email", "url", "radio", "checkbox"].indexOf(t.attr("type")) < 0 ||
              (t.hasClass("airforms-datepicker") && t.flatpickr("close"),
              e.preventDefault(),
              (r.hasClass("last")
                ? r.closest(".airforms-form").find(".airforms-submit")
                : r.find(".airforms-page-next")
              ).trigger("click"));
          }),
          e.on("keypress", ".airforms-field-number input", function (e) {
            return /^[-0-9.]+$/.test(String.fromCharCode(e.keyCode || e.which));
          }),
          e
            .one("input", ".airforms-field input, .airforms-field textarea, .airforms-field select", p.formChanged)
            .one("change", ".airforms-field-select-style-modern, .airforms-timepicker", p.formChanged)
            .one("focus", ".dropzone-input", p.formChanged)
            .one("click touchstart", ".airforms-signature-canvas", p.formChanged)
            .one("airformsRichTextContentChange", p.richTextContentChanged);
      },
      formChanged: function (e) {
        var t = l(this).closest(".airforms-form");
        p.maybeSetStartTime(t);
      },
      richTextContentChanged: function (e, t, r) {
        (r = r.getContainer()), (r = l(r).closest(".airforms-form"));
        p.maybeSetStartTime(r);
      },
      maybeSetStartTime: function (e) {
        e.data("timestamp") ||
          (e.hasClass("airforms-ajax-form") && "undefined" != typeof FormData
            ? e.data("timestamp", Date.now())
            : e.append('<input type="hidden" name="start_timestamp" value="' + Date.now() + '">'));
      },
      entryPreviewFieldPageChange: function (e, t, r) {
        console.warn(
          "WARNING! Obsolete function called. Function airforms.entryPreviewFieldPageChange has been deprecated, please use the airFormsEntryPreview.pageChange function instead!",
        ),
          airFormsEntryPreview.pageChange(e, t, r);
      },
      entryPreviewFieldUpdate: function (e, t) {
        console.warn(
          "WARNING! Obsolete function called. Function airforms.entryPreviewFieldUpdate has been deprecated, please use the airFormsEntryPreview.update function instead!",
        ),
          airFormsEntryPreview.update(e, t);
      },
      scrollToError: function (e) {
        var t, r;
        0 !== e.length &&
          0 !==
            (t = 0 === (t = e.find(".airforms-field.airforms-has-error")).length ? e.closest(".airforms-field") : t)
              .length &&
          void 0 !== (r = t.offset()) &&
          p.animateScrollTop(r.top - 75, 750).done(function () {
            var e = t.find(".airforms-error").first();
            "function" == typeof e.focus && e.trigger("focus");
          });
      },
      pagebreakNav: function (e) {
        const t = l(e),
          r = t.data("action"),
          a = t.data("page"),
          o = t.closest(".airforms-form"),
          n = o.find(".airforms-page-" + a);
        p.saveTinyMCE(),
          "next" === r && void 0 !== l.fn.validate
            ? p.checkForInvalidFields(o, n, function () {
                p.navigateToPage(t, r, a, o, n);
              })
            : ("prev" !== r && "next" !== r) || p.navigateToPage(t, r, a, o, n);
      },
      checkForInvalidFields: function (e, t, a) {
        var r = e.data("validator");
        if (r)
          if (0 < r.pendingRequest)
            setTimeout(function () {
              p.checkForInvalidFields(e, t, a);
            }, 800);
          else {
            let r = !0;
            t.find(":input").each(function (e, t) {
              !l(t).attr("name") || l(t).valid() || (r = !1);
            }),
              r ? a() : p.scrollToError(t);
          }
      },
      navigateToPage: function (t, r, a, o, e) {
        if (!t.hasClass("airforms-disabled")) {
          let e = a;
          "next" === r ? (e += 1) : "prev" === r && --e,
            airFormsUtils.triggerEvent(t, "airformsBeforePageChange", [e, o, r]).isDefaultPrevented() ||
              (o.find(".airforms-page").hide(),
              (a = o.find(".airforms-page-" + e)).show(),
              p.toggleReCaptchaAndSubmitDisplay(o, r, a),
              (a = p.getPageScroll(o)) && p.animateScrollTop(o.offset().top - a, 750, null),
              t.trigger("airformsPageChange", [e, o, r]),
              p.manipulateIndicator(e, o));
        }
      },
      toggleReCaptchaAndSubmitDisplay: function (e, t, r) {
        var a = e.find(".airforms-submit-container"),
          e = e.find(".airforms-recaptcha-container");
        "next" === t && r.hasClass("last") ? (e.show(), a.show()) : "prev" === t && (e.hide(), a.hide());
      },
      getPageScroll: function (e) {
        return (
          !1 !== s.airforms_pageScroll &&
          (p.empty(s.airform_pageScroll)
            ? 0 !== e.find(".airforms-page-indicator").data("scroll") && 75
            : s.airform_pageScroll)
        );
      },
      manipulateIndicator: function (e, t) {
        var r,
          a = t.find(".airforms-page-indicator");
        a &&
          ("connector" === (r = a.data("indicator")) || "circles" === r
            ? p.manipulateConnectorAndCirclesIndicator(a, r, e)
            : "progress" === r && p.manipulateProgressIndicator(a, t, e));
      },
      manipulateConnectorAndCirclesIndicator: function (e, t, r) {
        var a = e.data("indicator-color");
        e.find(".airforms-page-indicator-page").removeClass("active"),
          e.find(".airforms-page-indicator-page-" + r).addClass("active"),
          e.find(".airforms-page-indicator-page-number").removeAttr("style"),
          e.find(".active .airforms-page-indicator-page-number").css("background-color", a),
          "connector" === t &&
            (e.find(".airforms-page-indicator-page-triangle").removeAttr("style"),
            e.find(".active .airforms-page-indicator-page-triangle").css("border-top-color", a));
      },
      manipulateProgressIndicator: function (e, t, r) {
        var a = e.find(".airforms-page-indicator-page-title"),
          o = e.find(".airforms-page-indicator-page-title-sep"),
          t = (r / t.find(".airforms-page").length) * 100;
        e.find(".airforms-page-indicator-page-progress").css("width", t + "%"),
          e.find(".airforms-page-indicator-steps-current").text(r),
          a.data("page-" + r + "-title")
            ? (a.css("display", "inline").text(a.data("page-" + r + "-title")), o.css("display", "inline"))
            : (a.css("display", "none"), o.css("display", "none"));
      },
      bindOptinMonster: function () {
        i.addEventListener("om.Campaign.load", function (e) {
          p.ready(), p.optinMonsterRecaptchaReset(e.detail.Campaign.data.id);
        }),
          l(i).on("OptinMonsterOnShow", function (e, t, r) {
            p.ready(), p.optinMonsterRecaptchaReset(t.optin);
          });
      },
      optinMonsterRecaptchaReset: function (e) {
        var t,
          r,
          e = l("#om-" + e).find(".airforms-form"),
          a = e.find(".airforms-recaptcha-container"),
          o = e.find(".g-recaptcha");
        e.length &&
          o.length &&
          ((e = o.attr("data-sitekey")),
          (t = "recaptcha-" + Date.now()),
          (r = a.hasClass("airforms-is-hcaptcha") ? hcaptcha : grecaptcha),
          o.remove(),
          a.prepend('<div class="g-recaptcha" id="' + t + '" data-sitekey="' + e + '"></div>'),
          r.render(t, {
            sitekey: e,
            callback: function () {
              airformsRecaptchaCallback(l("#" + t));
            },
          }));
      },
      amountTotal: function (e, r) {
        r = r || !1;
        var a = l(e).closest(".airforms-form"),
          e = p.getCurrency(),
          t = p.amountTotalCalc(a),
          t = p.amountFormat(t),
          o = "left" === e.symbol_pos ? e.symbol + " " + t : t + " " + e.symbol;
        a.find(".airforms-payment-total").each(function (e, t) {
          "hidden" === l(this).attr("type") || "text" === l(this).attr("type")
            ? (l(this).val(o), "text" === l(this).attr("type") && r && a.data("validator") && l(this).valid())
            : l(this).text(o);
        });
      },
      amountTotalCalc: function (e) {
        var a = 0,
          t =
            (l(".airforms-payment-price", e).each(function () {
              var e = 0,
                t = l(this),
                r = t.attr("type");
              t.closest(".airforms-field-payment-single").hasClass("airforms-conditional-hide") ||
                ("text" === r || "hidden" === r
                  ? (e = t.val())
                  : ("radio" !== r && "checkbox" !== r) || !t.is(":checked")
                  ? t.is("select") &&
                    0 < t.find("option:selected").length &&
                    (e = t.find("option:selected").data("amount"))
                  : (e = t.data("amount")),
                p.empty(e)) ||
                ((e = p.amountSanitize(e)), (a = Number(a) + Number(e)));
            }),
            l(i)),
          r = airFormsUtils.triggerEvent(t, "airformsAmountTotalCalculate", [e, a]),
          a = void 0 !== r.result && 0 <= r.result ? r.result : a;
        return airFormsUtils.triggerEvent(t, "airformsAmountTotalCalculated", [e, a]), a;
      },
      amountSanitize: function (e) {
        var t = p.getCurrency();
        return (
          (e = e.toString().replace(/[^0-9.,]/g, "")),
          "," === t.decimal_sep
            ? ("." === t.thousands_sep && -1 !== e.indexOf(t.thousands_sep)
                ? (e = e.replace(new RegExp("\\" + t.thousands_sep, "g"), ""))
                : "" === t.thousands_sep && -1 !== e.indexOf(".") && (e = e.replace(/\./g, "")),
              (e = e.replace(t.decimal_sep, ".")))
            : "," === t.thousands_sep &&
              -1 !== e.indexOf(t.thousands_sep) &&
              (e = e.replace(new RegExp("\\" + t.thousands_sep, "g"), "")),
          p.numberFormat(e, t.decimals, ".", "")
        );
      },
      amountFormat: function (e) {
        var t,
          r = p.getCurrency();
        return (
          (e = String(e)),
          "," === r.decimal_sep &&
            -1 !== e.indexOf(r.decimal_sep) &&
            ((t = e.indexOf(r.decimal_sep)), (e = e.substr(0, t) + "." + e.substr(t + 1, e.length - 1))),
          "," === r.thousands_sep && -1 !== e.indexOf(r.thousands_sep) && (e = e.replace(/,/g, "")),
          p.empty(e) && (e = 0),
          p.numberFormat(e, r.decimals, r.decimal_sep, r.thousands_sep)
        );
      },
      getCurrency: function () {
        var e = { code: "USD", thousands_sep: ",", decimals: 2, decimal_sep: ".", symbol: "$", symbol_pos: "left" };
        return (
          void 0 !== airforms_settings.currency_code && (e.code = airforms_settings.currency_code),
          void 0 !== airforms_settings.currency_thousands && (e.thousands_sep = airforms_settings.currency_thousands),
          void 0 !== airforms_settings.currency_decimals && (e.decimals = airforms_settings.currency_decimals),
          void 0 !== airforms_settings.currency_decimal && (e.decimal_sep = airforms_settings.currency_decimal),
          void 0 !== airforms_settings.currency_symbol && (e.symbol = airforms_settings.currency_symbol),
          void 0 !== airforms_settings.currency_symbol_pos && (e.symbol_pos = airforms_settings.currency_symbol_pos),
          e
        );
      },
      numberFormat: function (e, t, r, a) {
        e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
        var o,
          n,
          e = isFinite(+e) ? +e : 0,
          t = isFinite(+t) ? Math.abs(t) : 0,
          a = void 0 === a ? "," : a,
          r = void 0 === r ? "." : r,
          i = (
            t ? ((i = e), (o = t), (n = Math.pow(10, o)), "" + (Math.round(i * n) / n).toFixed(o)) : "" + Math.round(e)
          ).split(".");
        return (
          3 < i[0].length && (i[0] = i[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)),
          (i[1] || "").length < t && ((i[1] = i[1] || ""), (i[1] += new Array(t - i[1].length + 1).join("0"))),
          i.join(r)
        );
      },
      empty: function (e) {
        for (var t, r = [void 0, null, !1, 0, "", "0"], a = 0, o = r.length; a < o; a++) if (e === r[a]) return !0;
        if ("object" != typeof e) return !1;
        for (t in e) if (e.hasOwnProperty(t)) return !1;
        return !0;
      },
      setUserIndentifier: function () {
        if (
          ((!s.hasRequiredConsent && "undefined" != typeof airforms_settings && airforms_settings.uuid_cookie) ||
            (s.hasRequiredConsent && s.hasRequiredConsent())) &&
          !p.getCookie("_airfuuid")
        ) {
          for (var e, t = new Array(36), r = "0123456789abcdef", a = 0; a < 36; a++)
            t[a] = r.substr(Math.floor(16 * Math.random()), 1);
          (t[14] = "4"),
            (t[19] = r.substr((3 & t[19]) | 8, 1)),
            (t[8] = t[13] = t[18] = t[23] = "-"),
            (e = t.join("")),
            p.createCookie("_airfuuid", e, 3999);
        }
      },
      createCookie: function (e, t, r) {
        var a,
          o = "",
          n = "";
        airforms_settings.is_ssl && (n = ";secure"),
          (o = r
            ? "-1" === r
              ? ""
              : ((a = new Date()).setTime(a.getTime() + 24 * r * 60 * 60 * 1e3), ";expires=" + a.toGMTString())
            : ";expires=Thu, 01 Jan 1970 00:00:01 GMT"),
          (i.cookie = e + "=" + t + o + ";path=/;samesite=strict" + n);
      },
      getCookie: function (e) {
        for (var t = e + "=", r = i.cookie.split(";"), a = 0; a < r.length; a++) {
          for (var o = r[a]; " " === o.charAt(0); ) o = o.substring(1, o.length);
          if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
        }
        return null;
      },
      removeCookie: function (e) {
        p.createCookie(e, "", -1);
      },
      getFirstBrowserLanguage: function () {
        var e,
          t,
          r = s.navigator,
          a = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
        if (Array.isArray(r.languages))
          for (e = 0; e < r.languages.length; e++) if ((t = r.languages[e]) && t.length) return t;
        for (e = 0; e < a.length; e++) if ((t = r[a[e]]) && t.length) return t;
        return "";
      },
      currentIpToCountry: function (r) {
        function t() {
          l.get("https://ipapi.co/jsonp", function () {}, "jsonp").always(function (e) {
            var t,
              e = e && e.country ? e.country : "";
            e || (e = -1 < (t = p.getFirstBrowserLanguage()).indexOf("-") ? t.split("-").pop() : ""), r(e);
          });
        }
        l.get("https://geo.airforms.com/v3/geolocate/json")
          .done(function (e) {
            e && e.country_iso ? r(e.country_iso) : t();
          })
          .fail(function (e) {
            t();
          });
      },
      formSubmit: function (e) {
        e instanceof jQuery || (e = l(e)),
          p.saveTinyMCE(),
          airFormsUtils.triggerEvent(e, "airformsBeforeFormSubmit", [e]).isDefaultPrevented()
            ? p.restoreSubmitButton(e, e.closest(".airforms-container"))
            : e.hasClass("airforms-ajax-form") && "undefined" != typeof FormData
            ? p.formSubmitAjax(e)
            : p.formSubmitNormal(e);
      },
      restoreSubmitButton: function (e, t) {
        var r = e.find(".airforms-submit"),
          a = r.data("submit-text");
        a && r.text(a),
          r.prop("disabled", !1),
          airFormsUtils.triggerEvent(e, "airformsFormSubmitButtonRestore", [e, r]),
          t.css("opacity", ""),
          e.find(".airforms-submit-spinner").hide();
      },
      formSubmitNormal: function (e) {
        var t, r;
        e.length &&
          ((r = (t = e.find(".airforms-submit")).get(0).recaptchaID),
          (p.empty(r) && 0 !== r) || (t.get(0).recaptchaID = !1),
          e.append('<input type="hidden" name="end_timestamp" value="' + Date.now() + '">'),
          e.get(0).submit());
      },
      formHasCaptcha: function (e) {
        return (
          !(
            !e ||
            !e.length ||
            ("undefined" == typeof hcaptcha && "undefined" == typeof grecaptcha && "undefined" == typeof turnstile)
          ) && ((e = e.find(".airforms-recaptcha-container")), Boolean(e.length))
        );
      },
      resetFormRecaptcha: function (e) {
        var t, r;
        p.formHasCaptcha(e) &&
          ((t = (t = e.find(".airforms-recaptcha-container")).hasClass("airforms-is-hcaptcha")
            ? hcaptcha
            : t.hasClass("airforms-is-turnstile")
            ? turnstile
            : grecaptcha),
          (r = e.find(".airforms-submit").get(0).recaptchaID),
          p.empty(r) && 0 !== r && (r = e.find(".g-recaptcha").data("recaptcha-id")),
          (p.empty(r) && 0 !== r) || t.reset(r));
      },
      consoleLogAjaxError: function (e) {
        e ? console.error("airForms AJAX submit error:\n%s", e) : console.error("airForms AJAX submit error");
      },
      displayFormAjaxErrors: function (e, t) {
        "string" == typeof t
          ? p.displayFormAjaxGeneralErrors(e, t)
          : ((t = t && "errors" in t ? t.errors : null),
            p.empty(t) || (p.empty(t.general) && p.empty(t.field))
              ? p.consoleLogAjaxError()
              : (p.empty(t.general) || p.displayFormAjaxGeneralErrors(e, t.general),
                p.empty(t.field) || p.displayFormAjaxFieldErrors(e, t.field)));
      },
      displayFormAjaxGeneralErrors: function (e, t) {
        var r, a, o;
        e &&
          e.length &&
          (p.empty(t) ||
            ((r = e.data("formid")),
            p.isModernMarkupEnabled() && e.attr({ "aria-invalid": "true", "aria-errormessage": "" }),
            "string" == typeof t
              ? ((a = p.isModernMarkupEnabled() ? ' role="alert"' : ""),
                (o = p.isModernMarkupEnabled()
                  ? `<span class="airforms-hidden">${airforms_settings.formErrorMessagePrefix}</span>`
                  : ""),
                e.find(".airforms-submit-container").before(`<div class="airforms-error-container"${a}>${o}${t}</div>`),
                p.setCurrentPage(e, {}))
              : p.printGeneralErrors(e, t, r)));
      },
      printGeneralErrors: function (a, e, o) {
        l.each(e, function (e, t) {
          switch (e) {
            case "header":
              a.prepend(t);
              break;
            case "footer":
              0 === a.find(".airforms-page-indicator").length
                ? a.find(".airforms-submit-container").before(t)
                : a.find(".airforms-page-1").append(t);
              break;
            case "recaptcha":
              a.find(".airforms-recaptcha-container").append(t);
          }
          var r;
          p.isModernMarkupEnabled() &&
            ((r = a.attr("aria-errormessage") || ""), a.attr("aria-errormessage", r + ` airforms-${o}-${e}-error`));
        });
      },
      clearFormAjaxGeneralErrors: function (e) {
        e.find(".airforms-error-container").remove(),
          e.find("#airforms-field_recaptcha-error").remove(),
          p.isModernMarkupEnabled() && e.attr({ "aria-invalid": "false", "aria-errormessage": "" });
      },
      displayFormAjaxFieldErrors: function (e, t) {
        var r;
        e &&
          e.length &&
          (p.empty(t) || ((r = e.data("validator")) && (r.showErrors(t), p.formHasCaptcha(e) || r.focusInvalid())));
      },
      formSubmitAjax: function (a) {
        var r, t, e;
        return a.length
          ? ((r = a.closest(".airforms-container")),
            (e = a.find(".airforms-submit-spinner")),
            r.css("opacity", 0.6),
            e.show(),
            p.clearFormAjaxGeneralErrors(a),
            (e = new FormData(a.get(0))).append("action", "airforms_submit"),
            e.append("page_url", s.location.href),
            e.append("page_title", airforms_settings.page_title),
            e.append("page_id", airforms_settings.page_id),
            e.append("start_timestamp", a.data("timestamp")),
            e.append("end_timestamp", Date.now()),
            (e = {
              type: "post",
              dataType: "json",
              url: airforms_settings.ajaxurl,
              data: e,
              cache: !1,
              contentType: !1,
              processData: !1,
              success: function (e) {
                e
                  ? e.data && e.data.action_required
                    ? a.trigger("airformsAjaxSubmitActionRequired", e)
                    : e.success
                    ? (a.trigger("airformsAjaxSubmitSuccess", e),
                      e.data &&
                        (e.data.redirect_url
                          ? (a.trigger("airformsAjaxSubmitBeforeRedirect", e), (s.location = e.data.redirect_url))
                          : e.data.confirmation &&
                            (r.html(e.data.confirmation),
                            (t = r.find("div.airforms-confirmation-scroll")),
                            r.trigger("airformsAjaxSubmitSuccessConfirmation", e),
                            t.length) &&
                            p.animateScrollTop(t.offset().top - 100)))
                    : (p.resetFormRecaptcha(a),
                      p.displayFormAjaxErrors(a, e.data),
                      a.trigger("airformsAjaxSubmitFailed", e),
                      p.setCurrentPage(a, e.data))
                  : p.consoleLogAjaxError();
              },
              error: function (e, t, r) {
                p.consoleLogAjaxError(r), a.trigger("airformsAjaxSubmitError", [e, t, r]);
              },
              complete: function (e, t) {
                (e.responseJSON &&
                  e.responseJSON.data &&
                  (e.responseJSON.data.action_required || ("success" === t && e.responseJSON.data.redirect_url))) ||
                  (p.restoreSubmitButton(a, r), a.trigger("airformsAjaxSubmitCompleted", [e, t]));
              },
            }),
            airFormsUtils.triggerEvent(a, "airformsAjaxBeforeSubmit", [a]).isDefaultPrevented()
              ? (p.restoreSubmitButton(a, r), l.Deferred().reject())
              : l.ajax(e))
          : l.Deferred().reject();
      },
      setCurrentPage: function (a, o) {
        if (0 !== a.find(".airforms-page-indicator").length) {
          let r = [];
          a.find(".airforms-page").each(function (e, t) {
            if (1 <= l(t).find(".airforms-has-error").length) return r.push(l(t));
          });
          var n = 0 < r.length ? r[0] : a.find(".airforms-page-1");
          let e,
            t = "prev";
          1 === n.data("page") || void 0 !== o.errors.general.footer
            ? (e = a.find(".airforms-page-1").next())
            : ((e = 0 !== n.next().length ? n.next() : n.prev()), (t = 0 !== n.next().length ? "prev" : "next"));
          (o = e.find(".airforms-page-next")), (n = e.data("page"));
          p.navigateToPage(o, t, n, a, l(".airforms-page-" + n));
        }
      },
      animateScrollTop: function (e, t, r) {
        return (
          (t = t || 1e3),
          (r = "function" == typeof r ? r : function () {}),
          l("html, body")
            .animate({ scrollTop: parseInt(e, 10) }, { duration: t, complete: r })
            .promise()
        );
      },
      saveTinyMCE: function () {
        "undefined" != typeof tinyMCE && tinyMCE.triggerSave();
      },
      isFunction: function (e) {
        return !!(e && e.constructor && e.call && e.apply);
      },
      compareTimesGreaterThan: function (e, t) {
        (e = e.replace(/(am|pm)/g, " $1").toUpperCase()), (t = t.replace(/(am|pm)/g, " $1").toUpperCase());
        e = Date.parse("01 Jan 2021 " + e);
        return Date.parse("01 Jan 2021 " + t) <= e;
      },
      isModernMarkupEnabled: function () {
        return !!airforms_settings.isModernMarkupEnabled;
      },
    };
    return p;
  })(document, window, jQuery);
airforms.init();
