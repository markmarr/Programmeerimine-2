const database = require('../database');
const starttimesService = require('../services/starttimesServices');

const starttimesController = {};

starttimesController.getStarttimes = (req, res) => {
    const serviceRes = starttimesService.getStarttimes();
    
  res.status(200).json(serviceRes);
};

starttimesController.getStarttime = (req, res) => {
  const serviceRes = starttimesService.getStarttime(req);
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

starttimesController.updateStarttime = (req, res) => {
  const serviceRes = starttimesService.updateStarttime(req);
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

starttimesController.deleteStarttime = (req, res) => {
  const serviceRes = starttimesService.deleteStarttime(req);
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

starttimesController.createStarttime = (req, res) => {
  const serviceRes = starttimesService.createStarttime(req);
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

module.exports = starttimesController;