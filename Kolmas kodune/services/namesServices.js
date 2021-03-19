const database = require('../database');

const namesService = {};

namesService.getNames = () => {
  namesList = [];
  for(i = 0; i < database.weeks.length; i++) {
      for(y = 0; y < database.weeks[i].lessons.length; y++) {
          namesList.push(database.weeks[i].lessons[y].name);
     }
  }
  return namesList;
};

namesService.getName = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      return {
        name: lesson.name
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

namesService.updateName = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldName = lesson.name;
      lesson.name = req.body.name;
      return {
        oldName: oldName,
        newName: lesson.name
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

namesService.deleteName = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldName = lesson.name;
      delete lesson.name;
      return {
        oldName: oldName,
        newName: 'undefined'
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

namesService.createName = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.name) {
        return {
          error: "Name already existed on this lesson, request not fulfilled"
        };
      } else {
        lesson.name = req.body.name;
        return {
          createdName: lesson.name
        };
      }
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};


module.exports = namesService;