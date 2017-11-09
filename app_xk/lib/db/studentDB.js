"use strict";

var pool = require('./pool');

module.exports = {
  //通过关键字查询
  query: function query(keys) {
    var sql = "select * from xk_student where name like '%" + keys + "%' or gender like '%" + keys + "%'";
    return pool.execute(sql);
  },

  //通过id查询
  findById: function findById(id) {
    var sql = "select * from xk_student where id = " + id;
    return pool.execute(sql);
  },

  //通过姓名查找
  findByName: function findByName(name) {
    var sql = "select * from xk_student where name = '" + name + "'";
    return pool.execute(sql);
  },
  findAll: function findAll() {
    //var sql = "select * from xk_student";
    var sql = 'SELECT s.*,c.*' + ' FROM sms.xk_student as s left join xk_clazz as c' + ' ON c.id = s.class_id';
    return pool.execute({ sql: sql, nestTables: true });
  },
  batchDelete: function batchDelete(ids) {
    var sql = "delete from xk_student where id in (" + ids.join() + ")";
    return pool.execute(sql);
  },
  save: function save(student) {
    var d2 = Number(new Date(student.birth).toISOString().slice(8, 10)) - 2;
    var d1 = student.birth = new Date(student.birth).toISOString().slice(0, 8);
    student.birth = d1 + d2;
    student.birth = new Date(student.birth).toISOString().slice(0, 10);
    var sql = "insert into xk_student values(null,'" + student.name + "','" + student.gender + "','" + student.birth + "'," + student.class_id + ",'" + student.password + "')";
    return pool.execute(sql);
  },
  update: function update(student) {

    var d2 = Number(new Date(student.birth).toISOString().slice(8, 10)) + 2;
    var d1 = student.birth = new Date(student.birth).toISOString().slice(0, 8);
    student.birth = d1 + d2;
    var sql = "update xk_student set name = '" + student.name + "',gender = '" + student.gender + "',birth = '" + student.birth + "',class_id=" + student.class_id + ",password='" + student.password + "' where id =" + student.id;
    // console.log(sql);
    return pool.execute(sql);
  }
};