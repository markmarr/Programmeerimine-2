const database = require('../database');

const durationsService = {};

durationsService.getDurations = () => {
  durationsList = [];
  for(i = 0; i < database.weeks.length; i++) {
      for(y = 0; y < database.weeks[i].lessons.length; y++) {
          durationsList.push(database.weeks[i].lessons[y].duration);
     }
  }
  return durationsList;
};

durationsService.getDuration = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      return {
        duration: lesson.duration
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

durationsService.updateDuration = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldDuration = lesson.duration;
      lesson.duration = req.body.duration;
      return {
        oldDuration: oldDuration,
        newDuration: lesson.duration
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

durationsService.deleteDuration = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldDuration = lesson.duration;
      delete lesson.duration;
      return {
        oldDuration: oldDuration,
        newDuration: 'undefined'
      };
    } else {
      return -2;
    }
  } else {
    return -3;
  }
};

durationsService.createDuration = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.duration) {
        return {
          error: "Duration already exists on this lesson, request not fulfilled"
        };
      } else {
        lesson.duration = req.body.duration;
        return {
          createdDuration: lesson.duration
        };
      }
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

module.exports = durationsService;