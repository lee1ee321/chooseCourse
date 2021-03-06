"use strict";

var pool = require('./pool');
module.exports = {
  //选课
  selectCourse: function selectCourse(studentId, courseId) {
    var sql = "insert into xk_studentcourse values(null,0," + studentId + "," + courseId + ")";
    return pool.execute(sql);
  },
  //取消选课
  cancelCourse: function cancelCourse(studentId, courseId) {
    var sql = 'delete from xk_studentcourse where student_id=' + studentId + ' and course_id=' + courseId;
    return pool.execute(sql);
  },
  //查询所有选课关系
  findSelectedCourse: function findSelectedCourse() {
    var sql = 'select s.*,c.*,sc.*' + ' from xk_student as s,xk_studentcourse as sc,xk_course as c' + ' where s.id = sc.student_id' + ' and c.id = sc.course_id';
    return pool.execute({ sql: sql, nestTables: true });
  },
  //通过学生ID查询已经选课信息
  findSelectedCourseByStudentId: function findSelectedCourseByStudentId(studentId) {
    var sql = 'select s.*,c.*,sc.*' + ' from xk_student as s,xk_studentcourse as sc,xk_course as c' + ' where s.id = sc.student_id' + ' and c.id = sc.course_id' + ' and s.id = ' + studentId;
    return pool.execute({ sql: sql, nestTables: true });
  },
  //打分
  score: function score(id, _score) {
    var sql = 'update xk_studentcourse set grade =' + _score + ' where id = ' + id;
    return pool.execute(sql);
  }
};