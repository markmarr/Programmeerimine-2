const database = require('../database');
const durationsService = require('../services/durationsServices');

const durationsController = {};

durationsController.getDurations = (req, res) => {
    const serviceRes = durationsService.getDurations();
    res.status(200).json(serviceRes);
};

durationsController.getDuration = (req, res) => {
  const serviceRes = durationsService.getDuration(req);
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

durationsController.updateDuration = (req, res) => {
  const serviceRes = durationsService.updateDuration(req);
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

durationsController.deleteDuration = (req, res) => {
  const serviceRes = durationsService.deleteDuration(req);
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

durationsController.createDuration = (req, res) => {
  const serviceRes = durationsService.createDuration(req);
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

module.exports = durationsController;