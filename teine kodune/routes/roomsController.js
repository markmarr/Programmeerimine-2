const database = require('../database');
const roomsService = require('../services/roomsServices');

const roomsController = {};

roomsController.getRooms = (req, res) => {
  const serviceRes = roomsService.getRooms();
  res.status(200).json(serviceRes);
};

roomsController.getRoom = (req, res) => {
  const serviceRes = roomsService.getRoom(req);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      res.status(200).json(serviceRes);
    } else {
      res.status(404).json({
        error: "Cannot find the specific lesson"
      });
    }
  } else {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  }
};

roomsController.updateRoom = (req, res) => {
  const serviceRes = roomsService.updateRoom(req);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      res.status(200).json(serviceRes);
    } else {
      res.status(404).json({
        error: "Cannot find the specific lesson"
      });
    }
  } else {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  }
};

roomsController.deleteRoom = (req, res) => {
  const serviceRes = roomsService.deleteRoom(req);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      res.status(200).json(serviceRes);
    } else {
      res.status(404).json({
        error: "Cannot find the specific lesson"
      });
    }
  } else {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  }
};

roomsController.createRoom = (req, res) => {
  const serviceRes = roomsService.createRoom(req);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      res.status(200).json(serviceRes);
    } else {
      res.status(404).json({
        error: "Cannot find the specific lesson"
      });
    }
  } else {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  }
};

module.exports = roomsController;