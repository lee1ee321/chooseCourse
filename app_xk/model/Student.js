"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(id, name, gender, birth) {
  var class_id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  _classCallCheck(this, Student);

  this.id = id;
  this.name = name;
  this.gender = gender;
  this.birth = birth;
  this.class_id = class_id;
};

module.exports = Student;