"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Course = function Course(id, name, credit) {
  _classCallCheck(this, Course);

  this.id = id;
  this.name = name;
  this.credit = credit;
};

module.exports = Course;