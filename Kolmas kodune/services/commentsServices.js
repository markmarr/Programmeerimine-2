const database = require('../database');

const commentsService = {};


commentsService.getComments = () => {
  commentList = [];
  for(i = 0; i < database.weeks.length; i++) {
    for(y = 0; y < database.weeks[i].lessons.length; y++) {
        commentList.push(database.weeks[i].lessons[y].comment);
    }
  }
  return commentList;
}

commentsService.getComment = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      return lesson.comment;
    } else {
      return -2;
    }
  } else {
    return -1;
  }
}

commentsService.updateComment = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldComment = lesson.comment;
      lesson.comment = req.body.comment;
      return {
        oldComment: oldComment,
        newComment: lesson.comment
      }
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

commentsService.deleteComment = (req) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      const oldComment = lesson.comment;
      delete lesson.comment;
      return {
        oldComment: oldComment,
        newComment: 'undefined'
      }
    } else {
        return -2;
    }
  } else {
      return -1;
  }
};

commentsService.createComment = (req, res) => {
  week = database.weeks.find((element) => element.id === parseInt(req.params.weekId));
  console.log(req.params.weekId);
  console.log(req.params.lessonId);
  if(week){
    lesson = week.lessons.find((element) => element.id === parseInt(req.params.lessonId))
    if(lesson) {
      if(lesson.comment) {
        return -3;
      } else {
        lesson.comment = req.body.comment;
        return {
          createdComment: lesson.comment
        };
      }
    } else {
      return -2;
    }
  } else {
    return -1;
  }
};

module.exports = commentsService;