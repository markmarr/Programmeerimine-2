const database = require('../database');
const coursesService = require('../services/coursesServices');
const coursesController = {};

coursesController.getCourses = async (req, res) => {
  const serviceRes = await coursesService.getCourses();
  res.status(200).json(serviceRes);
};

coursesController.getCourse = async (req, res) => {
  const serviceRes = await coursesService.getCourse(req);
  res.status(200).json(serviceRes);
};

coursesController.updateCourse = async (req, res) => {
  const serviceRes = await coursesService.updateCourse(req);
  res.status(200).json(serviceRes);
};

coursesController.deleteCourse = async (req, res) => {
  const serviceRes = await coursesService.deleteCourse(req);
  res.status(200).json(serviceRes);
};

coursesController.createCourse = async (req, res) => {
  const serviceRes = await coursesService.createCourse(req);
  res.status(200).json(serviceRes);
};

module.exports = coursesController;