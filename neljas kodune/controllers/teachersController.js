const database = require('../database');
const teachersService = require('../services/teachersServices');

const teachersController = {};

teachersController.getTeachers = async (req, res) => {
  const serviceRes = await teachersService.getTeachers();
  res.status(200).json(serviceRes);
};

teachersController.getTeacher = async (req, res) => {
  const serviceRes = await teachersService.getTeacher(req);
  res.status(200).json(serviceRes);
};


teachersController.updateTeacher = async (req, res) => {
  const serviceRes = await teachersService.updateTeacher(req);
  res.status(200).json(serviceRes);
};

teachersController.deleteTeacher = async (req, res) => {
  const serviceRes = await teachersService.deleteTeacher(req);
  res.status(200).json(serviceRes);
};

teachersController.createTeacher = async(req, res) => {
  const serviceRes = await teachersService.createTeacher(req);
  res.status(200).json(serviceRes);
};

module.exports = teachersController;