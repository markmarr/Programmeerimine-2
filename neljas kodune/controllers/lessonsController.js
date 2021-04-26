const lessonsService = require('../services/lessonsServices');
const lessonsController = {};

lessonsController.getLessons = async (req, res) => {
  const serviceRes = await lessonsService.getLessons();
  res.status(200).json(serviceRes);
};

lessonsController.getLesson = async (req, res) => {
  const serviceRes = await lessonsService.getLesson(req);
  res.status(200).json(serviceRes);
};

lessonsController.updateLesson = async (req, res) => {
  const serviceRes = await lessonsService.updateLesson(req);
  res.status(200).json(serviceRes);
};

lessonsController.deleteLesson = async (req, res) => {
  const serviceRes = await lessonsService.deleteLesson(req);
  res.status(200).json(serviceRes);
};

lessonsController.createLesson = async (req, res) => {
  const serviceRes = await lessonsService.createLesson(req);
  res.status(200).json(serviceRes);
};

module.exports = lessonsController;
