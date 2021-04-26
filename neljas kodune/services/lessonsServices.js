const db = require('../db');

const lessonsService = {};

lessonsService.getLessons = async () => {
  const lessons = await db.query(
       `SELECT lessons.id, courses.name AS 'course', names.name, teachers.name AS 'teacher', lessons.room, lessons.comment, lessons.starttime, lessons.duration 
       FROM lessons
       left JOIN courses ON courses.id = lessons.courseid
       left join names on names.id = lessons.nameid
       left join teachers on teachers.id = lessons.teacherid WHERE lessons.deleted = 0;`
        );
  return lessons;
};

lessonsService.getLesson = async (req) => {
   const lessons = await db.query(
        `SELECT lessons.id, courses.name AS 'course', names.name, teachers.name AS 'teacher', lessons.room, lessons.comment, lessons.starttime, lessons.duration 
        FROM lessons
        left JOIN courses ON courses.id = lessons.courseid
        left join names on names.id = lessons.nameid
        left join teachers on teachers.id = lessons.teacherid WHERE lessons.deleted = 0 AND lessons.id = ?`, [req.params.id]);
   return lessons;
};

lessonsService.updateLesson = async (req) => {
    const lessonToUpdate = {};
    if (req.body.courseid) {
      lessonToUpdate.courseid = req.body.courseid;
    }
    if (req.body.nameid) {
        lessonToUpdate.nameid = req.body.nameid;
    }
    if (req.body.teacherid) {
        lessonToUpdate.teacherid = req.body.teacherid;
    }
    if (req.body.room) {
        lessonToUpdate.room = req.body.room;
    }
    if (req.body.comment) {
        lessonToUpdate.comment = req.body.comment;
    }
    if (req.body.starttime) {
        lessonToUpdate.starttime = req.body.starttime;
    }
    if (req.body.duration) {
        lessonToUpdate.duration = req.body.duration;
    }
    console.log(lessonToUpdate);
    await db.query('UPDATE lessons SET ? WHERE id = ?', [lessonToUpdate, req.params.id]);
    return lessonToUpdate;
};

lessonsService.deleteLesson = async (req) => {
  result = await db.query('UPDATE lessons SET deleted 1 WHERE id = ?', [req.params.id]);
  return result.id;
};

lessonsService.createLesson = async (req) => {

/**
 * You first need to create a formatting function to pad numbers to two digits…
 **/
 function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

/**
 * …and then create the method to output the date string as desired.
 * Some people hate using prototypes this way, but if you are going
 * to apply this to more than one Date object, having it as a prototype
 * makes sense.
 **/
Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

    const lessonToCreate = {};
    lessonToCreate.id = null;
    lessonToCreate.courseid = null;
    lessonToCreate.nameid = null;
    lessonToCreate.teacherid = null;
    lessonToCreate.room = null;
    lessonToCreate.comment = null;
    lessonToCreate.starttime = null;
    lessonToCreate.duration = null;
    lessonToCreate.dateCreated = Date.now();
    lessonToCreate.deleted = 0;
    lessonToCreate.createdById = null;
    if (req.body.courseid) {
        lessonToCreate.courseid = req.body.courseid;
    }
    if (req.body.nameid) {
        lessonToCreate.nameid = req.body.nameid;
    }
    if (req.body.teacherid) {
        lessonToCreate.teacherid = req.body.teacherid;
    }
    if (req.body.room) {
        lessonToCreate.room = req.body.room;
    }
    if (req.body.comment) {
        lessonToCreate.comment = req.body.comment;
    }
    if (req.body.starttime) {
        lessonToCreate.starttime = req.body.starttime;
    }
    if (req.body.duration) {
        lessonToCreate.duration = req.body.duration;
    }
    if (req.body.createdById) {
        lessonToCreate.createdById = req.body.createdById;
    }
    result = await db.query('INSERT INTO lessons (id, courseid, nameid, teacherid, comment, starttime, duration, room, createdById) VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?)', [lessonToCreate.courseid, lessonToCreate.nameid, lessonToCreate.teacherid, lessonToCreate.comment, lessonToCreate.starttime, lessonToCreate.duration, lessonToCreate.room, lessonToCreate.createdById]);
    //result = {id:{error: "incorrect input data"}};
    return result;
};

module.exports = lessonsService;