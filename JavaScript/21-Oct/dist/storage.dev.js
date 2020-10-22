"use strict";

function localFun() {
  var key = document.getElementById('key').value;
  var value = document.getElementById('value').value;
  localStorage.setItem(key, value);
  document.getElementById("localText").innerHTML = "Hello World!";
}

function SessionFun() {
  var key = document.getElementById('key').value;
  var value = document.getElementById('value').value;
  sessionStorage.setItem(key, value);
}

function clearFun() {
  sessionStorage.clear();
  localStorage.clear();
}