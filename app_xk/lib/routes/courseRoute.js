'use strict';

var express = require('express');
var route = express.Router();
var courseDB = require('../db/courseDB');
var Course = require('../model/Course');
//查询所有
route.get('/findAll', function (req, resp) {
  courseDB.findAll().then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//通过id查询
route.get('/findById', function (req, resp) {
  courseDB.findById(req.query.id).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//模糊查询
route.get('/query/:keys', function (req, resp) {
  courseDB.query(req.params.keys).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(err);
  });
});
//录入
route.post('/save', function (req, resp) {
  var course = new Course();
  Object.assign(course, req.body);
  courseDB.save(course).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//修改
route.post("/update", function (req, resp) {
  var course = new Course();
  Object.assign(course, req.body);
  courseDB.update(course).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//批量删除
route.post('/batchDelete', function (req, resp) {
  var ids = JSON.parse(req.body.ids);
  courseDB.batchDelete(ids).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});

module.exports = route;