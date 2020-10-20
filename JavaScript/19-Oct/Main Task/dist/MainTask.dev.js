"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var person = function person(name, age, degree) {
  _classCallCheck(this, person);

  this.name = name;
  this.age = age;
  this.degree = degree;
};

var clothes =
/*#__PURE__*/
function (_person) {
  _inherits(clothes, _person);

  function clothes(name, shirt, pants) {
    var _this;

    _classCallCheck(this, clothes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(clothes).call(this, name));
    _this.shirt = shirt;
    _this.pants = pants;
    return _this;
  }

  return clothes;
}(person);

;
var firsPerson = new person('Mohammad', '23', 'Civil Engineering');
var secondPerson = new person('Ahmad', '26', 'Industrial Engineering');
var thirdPerson = new clothes('Ahmad', 'red', ' blue');
console.log('name: ', firsPerson.name, 'age: ' + firsPerson.age, ' degree: ', firsPerson.degree);
console.log('name: ', secondPerson.name, 'age: ' + secondPerson.age, ' degree: ', secondPerson.degree);
console.log('name: ', thirdPerson.name, 'shirt: ' + thirdPerson.shirt, ' pants: ', thirdPerson.pants);

var car = function car() {
  _classCallCheck(this, car);
};

;

var animal = function animal() {
  _classCallCheck(this, animal);
};

;