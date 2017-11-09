'use strict';

var express = require('express');
var StudentCourseDB = require('../db/studentCourseDB');
var Student = require('../model/Student');
var Course = require('../model/Course');

var route = express.Router();
/*
  选课
  studentId 
  courseId
*/
route.get('/selectCourse', function (req, resp) {
  StudentCourseDB.selectCourse(+req.query.studentId, +req.query.courseId).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});

/*
  通过所有选课信息
*/
route.get('/findSelectedCourse', function (req, resp) {
  StudentCourseDB.findSelectedCourse().then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
/*
  通过学生ID查询已经选课信息
  @param studentId
*/
route.get('/findSelectedCourseByStudentId', function (req, resp) {
  StudentCourseDB.findSelectedCourseByStudentId(req.query.studentId).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});

/*
  取消选课
  @param studentId，courseId
*/
route.get('/cancelCourse', function (req, resp) {
  StudentCourseDB.cancelCourse(req.query.studentId, req.query.courseId).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});

/*
  打分
  @param 选课id，分数grade
*/
route.get('/mark', function (req, resp) {
  StudentCourseDB.score(req.query.id, req.query.grade).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});

module.exports = route;