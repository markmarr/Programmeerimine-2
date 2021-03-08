const database = require('../database');
const roomsService = {};

roomsService.getRooms = () => {
  roomsList = [];
  for(i = 0; i < database.weeks.length; i++) {
      for(y = 0; y < database.weeks[i].lessons.length; y++) {
          roomsList.push(database.weeks[i].lessons[y].room);
      }
  }
  return roomsList;
};

roomsService.getRoom = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      return {
        room: lesson.room
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

roomsService.updateRoom = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldRoom = lesson.room;
      lesson.room = req.body.room;
      return {
        oldRoom: oldRoom,
        newRoom: lesson.room
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

roomsService.deleteRoom = (req, res) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldRoom = lesson.room;
      delete lesson.room;
      return {
        oldRoom: oldRoom,
        newRooms: 'undefined'
      };
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

roomsService.createRoom = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.room) {
        return {
          error: "Room already exists on this lesson, request not fulfilled"
        };
      } else {
        lesson.room = req.body.room;
        return {
          createdRoom: lesson.room
        };
      }
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

module.exports = roomsService;