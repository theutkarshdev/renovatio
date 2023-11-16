var nameflag,emailflag,phoneflag,requireflag = false;

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
  var phoneRegex = /[0-9]/;
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
  $("#submitButton").click(function (event) {
    event.preventDefault();
    var contactUName = document.getElementById("contact-fullname");
    var contactEmail = document.getElementById("contact-email");
    var contactContact = document.getElementById("contact-phone");
    var contactNameErr = document.getElementById("contact-nameErr");
    var contactEmailErr = document.getElementById("contact-emailErr");
    var contactPhoneErr = document.getElementById("contact-phoneErr");

    var contactBudget = document.getElementById("contact-budget");
    var contactSize = document.getElementById("contact-size");
    var contactLocation = document.getElementById("contact-location");
    var contactBudgetErr = document.getElementById("contact-budgetErr");
    var contactSizeErr = document.getElementById("contact-sizeErr");
    var contactLocationErr = document.getElementById("contact-locationErr");

    nameValidate(contactUName, contactNameErr);
    emailValidate(contactEmail, contactEmailErr);
    phoneValidate(contactContact, contactPhoneErr);

    RequiredField(contactBudget, contactBudgetErr);
    RequiredField(contactSize, contactSizeErr);
    RequiredField(contactLocation, contactLocationErr);

    if (nameflag && emailflag && phoneflag && requireflag) {
      $("#successModalOverlay").show();
      $("#successModal").slideDown();
      var formData = $("#myForm").serialize();
      $.ajax({
        type: "POST",
        url: "mail.php",
        dataType: "json",
        data: formData,
        success: function (response) {
          console.log("Code working fine");
        },
      });
      $("#myForm")[0].reset();
      return true;
    } else {
      return false;
    }
  });

  $("#closeSuccessModal").click(function () {
    $("#successModal").slideUp();
    $("#successModalOverlay").hide();
  });
});
