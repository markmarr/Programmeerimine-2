const database = require('../database');

const teachersService = {};

teachersService.getTeachers = () => {
  teacherList = [];
  for(i = 0; i < database.weeks.length; i++) {
      for(y = 0; y < database.weeks[i].lessons.length; y++) {
          teacherList.push(database.weeks[i].lessons[y].teacher);
      }
  }
  return teacherList;
};

teachersService.getTeacher = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      return {
        teacher: lesson.teacher
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

teachersService.updateTeacher = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldTeacher = lesson.teacher;
      lesson.teacher = req.body.teacher;
      return {
        oldTeacher: oldTeacher,
        newTeacher: lesson.teacher
      };
    } else {
      return -2;
    }
  } else {
      return -1;
  }
};

teachersService.deleteTeacher = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldTeacher = lesson.teacher;
      delete lesson.teacher;
      return {
        oldTeacher: oldTeacher,
        newTeacher: 'undefined'
      };
    } else {
        return -2;
    }
  } else {
      return -1;
  }
};

teachersService.createTeacher = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.teacher) {
        return {
          error: "Teacher already exists on this lesson, request not fulfilled"
        };
      } else {
        lesson.teacher = req.body.teacher;
        return {
          createdTeacher: lesson.teacher
        };
      }
    } else {
        return -2;
    }
  } else {
    return -1;
  }
};

module.exports = teachersService;