var nameflag,
  emailflag,
  phoneflag,
  requireflag = false;

function nameValidate(uName, nameErr) {
  var nameRegex = /^[a-zA-Z0-9 ]{3,30}$/;
  if (uName.value !== "" && nameRegex.test(uName.value)) {
    nameErr.innerHTML = "";
    uName.style.borderColor = "#ccc";
    nameflag = true;
  } else {
    uName.style.borderColor = "#d9534f";
    nameErr.innerHTML = "*Invalid Name";
    nameflag = false;
  }
}
function emailValidate(email, emailErr) {
  var emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  if (email.value !== "" && emailRegex.test(email.value)) {
    emailErr.innerHTML = "";
    email.style.borderColor = "#ccc";
    emailflag = true;
  } else {
    email.style.borderColor = "#d9534f";
    emailErr.innerHTML = "*Invalid Email";
    emailflag = false;
  }
}
function phoneValidate(phone, phoneErr) {
  var phoneRegex = /^\d{10}$/;
  if (phone.value !== "" && phoneRegex.test(phone.value)) {
    phoneErr.innerHTML = "";
    phone.style.borderColor = "#ccc";
    phoneflag = true;
  } else {
    phone.style.borderColor = "#d9534f";
    phoneErr.innerHTML = "*Invalid Contact";
    phoneflag = false;
  }
}

function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

function forceLower(strInput) {
  strInput.value=strInput.value.toLowerCase();
}

function validateTextarea(txt, txtErr) {
  var txtRegex = /http|\.([a-z]|[0-9])|\//gi;
  if (txtRegex.test(txt.value)) {
    txtErr.innerHTML = "*Links are Not valid";
    txt.style.borderColor = "#d9534f";
    messegeflag = false;
  } else {
    txtErr.innerHTML = "";
    messegeflag = true;
  }
}

function RequiredField(field, Err) {
  if (field.value === "") {
    Err.innerHTML = "*This field is required";
    field.style.borderColor = "#d9534f";
    requireflag = false;
  } else {
    Err.innerHTML = "";
    field.style.borderColor = "#ccc";
    requireflag = true;
  }
}

$(document).ready(function () {
  $("#leadSubmitButton").click(function (event) {
    event.preventDefault();
    var leadUName = document.getElementById("lead-fullname");
    var leadEmail = document.getElementById("lead-email");
    var leadContact = document.getElementById("lead-phone");
    var leadNameErr = document.getElementById("lead-nameErr");
    var leadEmailErr = document.getElementById("lead-emailErr");
    var leadPhoneErr = document.getElementById("lead-phoneErr");

    var leadBudget = document.getElementById("lead-budget");
    var leadSize = document.getElementById("lead-size");
    var leadLocation = document.getElementById("lead-location");
    var leadBudgetErr = document.getElementById("lead-budgetErr");
    var leadSizeErr = document.getElementById("lead-sizeErr");
    var leadLocationErr = document.getElementById("lead-locationErr");

    nameValidate(leadUName, leadNameErr);
    emailValidate(leadEmail, leadEmailErr);
    phoneValidate(leadContact, leadPhoneErr);

    RequiredField(leadBudget, leadBudgetErr);
    RequiredField(leadSize, leadSizeErr);
    RequiredField(leadLocation, leadLocationErr);

    if (nameflag && emailflag && phoneflag && requireflag) {
      $("#successModalOverlay").show();
      $("#successModal").slideDown();
      var formData = $("#lead-Form").serialize();
      $.ajax({
        type: "POST",
        url: "lead_mail.php",
        dataType: "json",
        data: formData,
        success: function (response) {
          console.log("Code working fine");
        },
      });
      $("#lead-Form")[0].reset();
      return true;
    } else {
      return false;
    }
  });

  $("#contactSubmitButton").click(function (event) {
    event.preventDefault();
    var contactUName = document.getElementById("contact-fullname");
    var contactEmail = document.getElementById("contact-email");
    var contactPhone = document.getElementById("contact-phone");
    var contactNameErr = document.getElementById("contact-nameErr");
    var contactEmailErr = document.getElementById("contact-emailErr");
    var contactPhoneErr = document.getElementById("contact-phoneErr");

    nameValidate(contactUName, contactNameErr);
    emailValidate(contactEmail, contactEmailErr);
    phoneValidate(contactPhone, contactPhoneErr);

    if (nameflag && emailflag && phoneflag) {
      $("#successModalOverlay").show();
      $("#successModal").slideDown();
      var formData = $("#contact-Form").serialize();
      $.ajax({
        type: "POST",
        url: "contact_mail.php",
        dataType: "json",
        data: formData,
        success: function (response) {
          console.log("Code working fine");
        },
      });
      $("#contact-Form")[0].reset();
      return true;
    } else {
      return false;
    }
  });

  $("#closeSuccessModal").click(function () {
    $("#successModal").slideUp();
    $("#successModalOverlay").hide();
  });

  $(".brand-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".brand-carousel-2").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
