const database = require('../database');
const coursesService = require('../services/coursesServices');
const coursesController = {};

coursesController.getCourses = (req, res) => {
  const serviceRes = coursesService.getCourses();
  res.status(200).json({serviceRes});
};

coursesController.getCourse = (req, res) => {
  const serviceRes = coursesService.getCourse(req);
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

coursesController.updateCourse = (req, res) => {
  const serviceRes = coursesService.updateCourse(req);
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

coursesController.deleteCourse = (req, res) => {
  const serviceRes = coursesService.deleteCourse(req);
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

coursesController.createCourse = (req, res) => {
    week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
    console.log(req.params.weekId);
    console.log(req.params.lessonId);
    if(week){
      lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
      if(lesson) {
        if(lesson.courseId) {
          res.status(400).json({
            error: "Course already existed on this lesson, request not fulfilled"
          });
        } else {
          lesson.courseId = req.body.courseId;
          res.status(201).json({
            createdCourseId: lesson.courseId,
            createdCourse: database.courseNames[lesson.courseId-1]
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

module.exports = coursesController;