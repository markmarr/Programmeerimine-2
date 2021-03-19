const commentsService = require('../services/commentsServices');
const commentsController = {};

commentsController.getComments = (req, res) => {
  const serviceRes = commentsService.getComments();
  res.status(200).json(serviceRes);
};

commentsController.getComment = (req, res) => {
  const serviceRes = commentsService.getComment(req);
  if(serviceRes === -1) {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  } else if (serviceRes === -2) {
    res.status(404).json({
      error: "Cannot find the lesson"
    });
  } else {
    res.status(200).json({
      comment: serviceRes
    });
  }
};

commentsController.updateComment = (req, res) => {
  const serviceRes = commentsService.updateComment(req);
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

commentsController.deleteComment = (req, res) => {
  const serviceRes = commentsService.deleteComment(req);
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

commentsController.createComment = (req, res) => {
  const serviceRes = commentsService.createComment(req);
  if(serviceRes === -1) {
    res.status(404).json({
      error: "Cannot find the specific week"
    });
  } else if (serviceRes === -2) {
    res.status(404).json({
      error: "Cannot find the lesson"
    });
  } else if (serviceRes === -3) {
    res.status(404).json({
      error: "Comment already existed, no changes were made"
    });
  }
    else {
      res.status(200).json(serviceRes);
    }
};

module.exports = commentsController;