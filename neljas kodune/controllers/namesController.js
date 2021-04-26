const database = require('../database');
const namesService = require('../services/namesServices');
const namesController = {};

namesController.getNames = (req, res) => {
  const serviceRes = namesService.getNames();
  res.status(200).json(serviceRes);
};

namesController.getName = (req, res) => {
  const serviceRes = namesService.getName(req);
  res.status(200).json(serviceRes);
};

namesController.updateName = (req, res) => {
  const serviceRes = namesService.updateName(req);
  res.status(200).json(serviceRes);
};

namesController.deleteName = (req, res) => {
  const serviceRes = namesService.deleteName(req);
  res.status(200).json(serviceRes);
};

namesController.createName = (req, res) => {
  const serviceRes = namesService.createName(req);
  res.status(200).json(serviceRes);
};

module.exports = namesController;