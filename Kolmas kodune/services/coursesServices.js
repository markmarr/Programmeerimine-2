const database = require('../database');

const coursesService = {};

coursesService.getCourses = () => {
  courseList = [];
  for(i = 0; i < database.weeks.length; i++) {
      for(y = 0; y < database.weeks[i].lessons.length; y++) {
          courseList.push(database.courseNames[database.weeks[i].lessons[y].courseId-1]);
      }
  }
  return courseList;
};

coursesService.getCourse = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      return {
        courseId: lesson.courseId,
        course: database.courseNames[lesson.courseId-1]
      };
    } else return -1;
  } else return -2
};

coursesService.updateCourse = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
      lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
      if(lesson) {
          if(lesson.courseId) {
              const oldCourseId = lesson.courseId;
              lesson.courseId = req.body.courseId;
              return {
                oldCourseId: oldCourseId,
                newCourseId: lesson.courseId,
                oldCourse: database.courseNames[oldCourseId-1],
                newCourse: database.courseNames[lesson.courseId-1]
              };
          } else {
              return {
                note: "Course didn't exist, created course",
                courseId: newCourseId,
                course: database.courseNames[lesson.courseId-1]
              };
          }
      } else {
          return -2;
      }
  } else {
      return -1;
  }
};

coursesService.deleteCourse = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldCourseId = lesson.courseId;
      delete lesson.courseId;
      return {
        oldCourseId: oldCourseId,
        oldCourse: database.courseNames[oldCourseId-1],
        newCourseId: 'undefined'
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

coursesService.createCourse = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.courseId) {
        return {
          error: "Course already existed on this lesson, request not fulfilled"
        };
      } else {
        lesson.courseId = req.body.courseId;
        return {
          createdCourseId: lesson.courseId,
          createdCourse: database.courseNames[lesson.courseId-1]
        };
      }
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

module.exports = coursesService;