const database = require('../database');
const namesService = require('../services/namesServices');
const namesController = {};

namesController.getNames = (req, res) => {
  const serviceRes = namesService.getNames();
  res.status(200).json(serviceRes);
};

namesController.getName = (req, res) => {
  const serviceRes = namesService.getName(req);
  if(serviceRes === -1) {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  } else if (serviceRes === -2) {
    res.status(404).json({
      error: "Cannot find the lesson"
    });
  } else {
    res.status(200).json(serviceRes);
  }
};

namesController.updateName = (req, res) => {
  const serviceRes = namesService.updateName(req);
  if(serviceRes === -1) {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  } else if (serviceRes === -2) {
    res.status(404).json({
      error: "Cannot find the lesson"
    });
  } else {
    res.status(200).json(serviceRes);
  }
};

namesController.deleteName = (req, res) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldName = lesson.name;
      delete lesson.name;
      res.status(200).json({
        oldName: oldName,
        newName: 'undefined'
      });
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

namesController.createName = (req, res) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.name) {
        res.status(400).json({
          error: "Name already existed on this lesson, request not fulfilled"
        });
      } else {
        lesson.name = req.body.name;
        res.status(201).json({
          createdName: lesson.name
        });
      }
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

module.exports = namesController;