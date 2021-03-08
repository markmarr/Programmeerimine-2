const express = require('express');
const database = require('./database');
const config = require('./config');

const commentsRoutes = require('./routes/commentsRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const durationsRoutes = require('./routes/durationsRoutes');
const namesRoutes = require('./routes/namesRoutes');
const roomsRoutes = require('./routes/roomsRoutes');
const starttimesRoutes = require('./routes/starttimesRoutes');
const teachersRoutes = require('./routes/teachersRoutes');


const app = express();
const port = config.port || 3000;
// const { port } = config || 3000;

app.use(commentsRoutes);
app.use(coursesRoutes);
app.use(durationsRoutes);
app.use(namesRoutes);
app.use(roomsRoutes);
app.use(starttimesRoutes);
app.use(teachersRoutes);

app.use(express.json());

//Show (almost)all data
app.get('/weeks', (req, res) => {
    res.status(200).json({
       weeks: database.weeks
    });
});


//Show specific week
//required parameter: id
app.get('/weeks/:id', (req, res) => {
    res.status(200).json({
        week: database.weeks[req.params.id-1]
    });
});
 
//Insert a new lesson into a specific week
//example body arguments:
/*
note: for courseId, refer to variable 'courseNames', line 12
{
    "weekId": 10, 
    "courseId": 2,
    "name": "Vanatehnika restaureerimine",
    "teacher": "Laine Lemmik",
    "room": 301,
    "comment": "Toimub Google Meet kaudu",
    "startTime": "2021-02-25T08:00:00.000Z",
    "duration": 0.01
}
*/
//
app.post('/weeks', (req, res) => {    
    //Find if need to create a new week...
    for(i = 0; i < weeks.length; i++) {
        if(database.weeks[i].id == req.body.weekId) {
            database.weeks[i].lessons.push({
                id: database.weeks[i].lessons.length + 1,
                courseId: req.body.courseId,
                name: req.body.name,
                teacher: req.body.teacher,
                room: req.body.room,
                comment: req.body.comment,
                startTime: req.body.startTime,
                duration: req.body.duration
            });
            console.log("did not create new week");
            res.status(201).json({
                week: database.weeks[i],
                lesson: {
                    id: database.weeks[i].lessons.length + 1,
                    courseId: req.body.courseId,
                    name: req.body.name,
                    teacher: req.body.teacher,
                    room: req.body.room,
                    comment: req.body.comment,
                    startTime: req.body.startTime,
                    duration: req.body.duration
                },
                comment: "did not create new week in the process"
            });
            break;
        }
        if(database.weeks[i].id != req.body.weekId && i == database.weeks.length -1) {
            weeks.push( {
                id: req.body.weekId,
                lessons: [
                    {
                        id: 1,
                        courseId: req.body.courseId,
                        name: req.body.name,
                        teacher: req.body.teacher,
                        room: req.body.room,
                        comment: req.body.comment,
                        startTime: req.body.startTime,
                        duration: req.body.duration
                    }
                ]
            });
            res.status(201).json({
                week: database.weeks[i],
                lesson: {
                    id: database.weeks[i].lessons.length + 1,
                    courseId: req.body.courseId,
                    name: req.body.name,
                    teacher: req.body.teacher,
                    room: req.body.room,
                    comment: req.body.comment,
                    startTime: req.body.startTime,
                    duration: req.body.duration
                },
                comment: "created new week in the process"
            });
            break;
        } 
    }

});

//Delete a specific lesson
//required parameter: weekId, lessonId 
//
app.delete('/weeks/:weekId/:lessonId', (req, res) => {
    const weekId = parseInt(req.params.weekId);
    const lessonId = parseInt(req.params.lessonId);
    const weekIndex = weeks.findIndex(week => week.id === weekId);
    if (weekIndex !== -1) {
      const lessonIndex = database.weeks[weekIndex].lessons.findIndex(lesson => lesson.id === lessonId);
      if(lessonIndex !== -1){
        console.log("deleted! W:" + weekIndex + " L:" + lessonIndex);
        console.log(database.weeks[weekIndex].lessons[lessonIndex]);
        database.weeks[weekIndex].lessons.splice(lessonIndex, 1);
        res.status(204).end();
      }
      else {
        res.status(400).json({
            error: `can't find that lesson from weekId ${weekId}`
        });
      }

    } else {
        res.status(400).json({
            error: "can't find that week"
        });
    }
    
});

//Alter a specific lesson
//required parameters: weekId, lessonId
//example body arguments:
/*
note: for courseId, refer to variable 'courseNames', line 12
{
    "courseId": 2,
    "name": "Vanatehnika restaureerimine",
    "teacher": "Laine Lemmik",
    "room": 301,
    "comment": "Toimub Google Meet kaudu",
    "startTime": "2021-02-25T08:00:00.000Z",
    "duration": 2.5
}
*/
app.patch('/weeks/:weekId/:lessonId', (req, res) => {
    const weekId = parseInt(req.params.weekId);
    const lessonId = parseInt(req.params.lessonId);
    const weekIndex = weeks.findIndex(week => week.id === weekId);
    if (weekIndex !== -1) {
      const lessonIndex = database.weeks[weekIndex].lessons.findIndex(lesson => lesson.id == lessonId);
      if(lessonIndex !== -1){
        console.log("updating lesson");
        database.weeks[weekIndex].lessons[lessonIndex].courseId = req.body.courseId;
        database.weeks[weekIndex].lessons[lessonIndex].name = req.body.name;
        database.weeks[weekIndex].lessons[lessonIndex].teacher = req.body.teacher;
        database.weeks[weekIndex].lessons[lessonIndex].room = req.body.room;
        database.weeks[weekIndex].lessons[lessonIndex].comment = req.body.comment;
        database.weeks[weekIndex].lessons[lessonIndex].startTime = req.body.startTime;
        database.weeks[weekIndex].lessons[lessonIndex].duration = req.body.duration;
        res.status(204).json({
            success: true
        });
      }
      else {
        res.status(400).json({
            error: `can't find that lesson from weekId ${weekId}`
        });
      }

    } else {
        res.status(400).json({
            error: "can't find that week"
        });
    }
    
});

app.listen(port, () => {
    console.log("Server running on port:", port);
})