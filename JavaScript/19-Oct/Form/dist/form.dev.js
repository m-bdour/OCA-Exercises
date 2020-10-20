"use strict";

var Numbers = document.getElementsByClassName('Numbers').value;
var checkBox = document.getElementById('checkBox').value;
var Password = document.getElementsByClassName('Password').value;
var CreateAccount = document.getElementById('CreateAccount').value;
var name = document.getElementsByClassName('name').value;
var nameObject = {
  draw: function draw() {
    var name = document.getElementsByClassName('name').value;
    return name.replace(/[a-z]{4,}/);
  }
};
console.log(draw);

function validateForm() {
  var x, text;
  x = document.getElementById("name").value;

  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }

  document.getElementById("demo").innerHTML = text;
}

function formValidation() {
  var uid = document.registration.NameName;
  var uzip = document.registration.NumberName;
  var uemail = document.registration.EmailName;
  var passid = document.registration.PasswordName;
  var uname = document.registration.NameName;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;

  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
          if (countryselect(ucountry)) {
            if (allnumeric(uzip)) {
              if (ValidateEmail(uemail)) {
                if (validsex(umsex, ufsex)) {}
              }
            }
          }
        }
      }
    }
  }

  return false;
}

function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;

  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert("User Id should not be empty / length be between " + mx + " to " + my);
    uid.focus();
    return false;
  }

  return true;
}

function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;

  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert("Password should not be empty / length be between " + mx + " to " + my);
    passid.focus();
    return false;
  }

  return true;
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;

  if (uname.value.match(letters)) {
    return true;
  } else {
    alert('Username must have alphabet characters only');
    uname.focus();
    return false;
  }
}

function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;

  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert('ZIP code must have numeric characters only');
    uzip.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}