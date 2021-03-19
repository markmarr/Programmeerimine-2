const database = require('../database');

const starttimesService = {};

starttimesService.getStarttimes = () => {
  starttimesList = [];
  for(i = 0; i < database.weeks.length; i++) {
    for(y = 0; y < database.weeks[i].lessons.length; y++) {
      starttimesList.push(database.weeks[i].lessons[y].startTime);
    }
  } 
  return starttimesList;
};

starttimesService.getStarttime = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      return {
        startTime: lesson.startTime
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

starttimesService.updateStarttime = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldStarttime = lesson.startTime;
      lesson.startTime = req.body.startTime;
      return {
        oldStartTime: oldStarttime,
        newStartTime: lesson.startTime
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

starttimesService.deleteStarttime = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldStartTime = lesson.startTime;
      delete lesson.startTime;
      return {
        oldStartTime: oldStartTime,
        newStartTime: 'undefined'
      };
    } else {
      return -2;
    }
  } else {
      return -1;
  }
};

starttimesService.createStarttime = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.startTime) {
        return {
          error: "startTime already exists on this lesson, request not fulfilled"
        };
      } else {
        lesson.startTime = req.body.startTime;
        return {
          createdStartTime: lesson.startTime
        };
      }
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

module.exports = starttimesService;