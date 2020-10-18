"use strict";

function clears() {
  document.getElementById('OutPut').value = '';
}

function Equa() {
  var x = document.getElementById("OutPut").value;
  var a = parseInt(x);
  var y = '(5 + 3) / 2';
  Number(y);
  document.getElementById('consol').textContent = y;
  document.getElementById('OutPut').innerText = a;
}

function leftK() {
  document.getElementById('OutPut').value += '(';
}

function wrightK() {
  document.getElementById('OutPut').value += ')';
}

function percent() {
  document.getElementById('OutPut').value += '%';
}

function Seven() {
  document.getElementById('OutPut').value += '7';
}

function Eight() {
  document.getElementById('OutPut').value += '8';
}

function Nine() {
  document.getElementById('OutPut').value += '9';
}

function divide() {
  document.getElementById('OutPut').value += '/';
}

function Four() {
  document.getElementById('OutPut').value += '4';
}

function Five() {
  document.getElementById('OutPut').value += '5';
}

function Six() {
  document.getElementById('OutPut').value += '6';
}

function Multi() {
  document.getElementById('OutPut').value += '*';
}

function One() {
  document.getElementById('OutPut').value += '1';
}

function Two() {
  document.getElementById('OutPut').value += '2';
}

function Three() {
  document.getElementById('OutPut').value += '3';
}

function Mines() {
  document.getElementById('OutPut').value += '-';
}

function Zero() {
  document.getElementById('OutPut').value += '0';
}

function Dota() {
  document.getElementById('OutPut').value += '.';
}

function Blus() {
  document.getElementById('OutPut').value += '+';
}