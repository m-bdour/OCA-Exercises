"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var person =
/*#__PURE__*/
function () {
  function person(id, name, age) {
    _classCallCheck(this, person);

    this.id = id;
    this.name = name;
    this.age = age;
  }

  _createClass(person, [{
    key: "Greeting",
    value: function Greeting() {
      return "I hope you've had your coffee already";
    }
  }]);

  return person;
}();

var Trainer = new person(101, 'Mohammad Shwaiki', '27');
var Student = new person(114, 'Mohammad Bdour', '23');
Student.Game = 'Dark Souls';
document.write('<br/>', 'My name is: ', Trainer.name, '  ', ' , ', ' with ', Trainer.id, ' id ', ' , ', 'and age is:', Trainer.age);
document.write(person.Greeting(), '<br/>', 'My name is: ', Student.name, '  ', ' , ', ' with ', Student.id, ' id ', ' , ', 'and age is:', Student.age, '. ', 'also the most game i have spent time playing with is ', Student.Game);

var anime =
/*#__PURE__*/
function () {
  function anime(Name, Main, Genre) {
    _classCallCheck(this, anime);

    this.Name = Name;
    this.Main = Main;
    this.Genre = Genre;
  }

  _createClass(anime, [{
    key: "Running",
    value: function Running() {
      document.write("Good Anime");
    }
  }]);

  return anime;
}();

var OnePiece = new anime('One Piece', 'Lofy', 'Adventure');
var Akame = new anime('Acame ga kill', 'Akame', 'Action');
document.write(OnePiece);
document.write(Akame.name, Akame.Main, Akame.Genre);

var Animal =
/*#__PURE__*/
function () {
  function Animal(id, name, isPet) {
    _classCallCheck(this, Animal);

    this.id = id;
    this.name = name;
    this.isPet = isPet;
  }

  _createClass(Animal, [{
    key: "homeAnimal",
    value: function homeAnimal() {
      if (name != "Cat" || "Horse" || "Sheep") {
        document.write('<br/>', 'This animal is Dangerous');
      } else {
        document.write('<br/>', 'This animal is a pet ');
      }
    }
  }]);

  return Animal;
}();

var Teacher =
/*#__PURE__*/
function (_person) {
  _inherits(Teacher, _person);

  function Teacher(Felid, id, age) {
    var _this;

    _classCallCheck(this, Teacher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Teacher).call(this, id, name, age));
    _this.Felid = Felid;
    return _this;
  }

  return Teacher;
}(person);

Shwaiki = function Shwaiki() {
  return Greeting + '<br/>';
};

var Ashraf = new Teacher('21A', 'Ashraf', 26, 'Host');
document.write(Shwaiki, '<br/>', Ashraf.id, Ashraf.name, Ashraf.age, Ashraf.Felid);