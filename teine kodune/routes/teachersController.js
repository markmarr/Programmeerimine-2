const database = require('../database');
const teachersService = require('../services/teachersServices');

const teachersController = {};

teachersController.getTeachers = (req, res) => {
  const serviceRes = teachersService.getTeachers();
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

teachersController.getTeacher = (req, res) => {
  const serviceRes = teachersService.getTeacher();
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


teachersController.updateTeacher = (req, res) => {
  const serviceRes = teachersService.updateTeacher();
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

teachersController.deleteTeacher = (req, res) => {
  const serviceRes = teachersService.deleteTeacher();
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

teachersController.createTeacher = (req, res) => {
  const serviceRes = teachersService.createTeacher();
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

module.exports = teachersController;