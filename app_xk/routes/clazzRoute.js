'use strict';

var express = require('express');
var route = express.Router();
var clazzDB = require('../db/clazzDB');
var Clazz = require('../model/Clazz');
//查询所有
route.get('/findAll', function (req, resp) {
  clazzDB.findAll().then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//通过id查询
route.get('/findById', function (req, resp) {
  clazzDB.findById(req.query.id).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//模糊查询
route.get('/query/:keys', function (req, resp) {
  clazzDB.query(req.params.keys).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(err);
  });
});
//录入
route.post('/save', function (req, resp) {
  var clazz = new Clazz();
  Object.assign(clazz, req.body);
  clazzDB.save(clazz).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//修改
route.post("/update", function (req, resp) {
  var clazz = new Clazz();
  Object.assign(clazz, req.body);
  clazzDB.update(clazz).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});
//批量删除
route.post('/batchDelete', function (req, resp) {
  var ids = JSON.parse(req.body.ids);
  clazzDB.batchDelete(ids).then(function (data) {
    resp.send(data);
  }).catch(function (error) {
    resp.send(error);
  });
});

module.exports = route;