'use strict';

var express = require('express');
var route = express.Router();
var studentDB = require('../db/studentDB');
var Student = require('../model/Student');
//查询所有
route.get('/findAll', function (req, resp) {
  studentDB.findAll().then(function (data) {
    var result = [];
    for (var index in data) {
      var item = data[index];
      item.s.class = item.c;
      result.push(item.s);
    }
    resp.send(result);
  }).catch(function (error) {
    resp.send(error);
  });
});
//通过id查询
route.get('/findById', function (req, resp) {
  studentDB.findById(req.query.id).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//模糊查询
route.get('/query/:keys', function (req, resp) {
  studentDB.query(req.params.keys).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(err);
  });
});
//录入
route.post('/save', function (req, resp) {
  var student = new Student();
  Object.assign(student, req.body);
  studentDB.save(student).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//修改
route.post("/update", function (req, resp) {
  var student = new Student();
  Object.assign(student, req.body);
  studentDB.update(student).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//批量删除  {ids:'[1,2,3]'}
route.post('/batchDelete', function (req, resp) {
  // var ids = JSON.parse(req.body.ids);
  console.log(req.body.ids);
  studentDB.batchDelete(JSON.parse(req.body.ids)).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});

//登录
route.get('/login', function (req, resp) {
  studentDB.findByName(req.body.name).then(function (data) {
    if (data.length > 0) {
      var student = data[0];
      if (student.password == req.body.password) {
        //登录成功
        resp.send(student);
      }
    }
  }).catch(function (error) {
    resp.send(error);
  });
});

module.exports = route;