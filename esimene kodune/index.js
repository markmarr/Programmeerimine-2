const express = require('express');
const config = require('./config');
//const database = require('./data');'


const app = express();
const port = 3000;
app.use(express.json());


//This shows which courseId's are related to which course names [not currently used]
const courseNames = [
    "Käsitöötehnoloogiad ja disain 2",
    "Käsitöötehnoloogiad ja disain 3",
    "Tervisejuht 2"
];

//
weeks = [
    {
        id: 1,
        lessons: [
            {
                id: 1,
                courseId: 1,
                name: "Vanatehnika restaureerimine",
                comment: "Kontaktõpe individuaalse graafiku järgi",
                startTime: new Date("2021-02-25T10:00+02:00"),
                duration: 7.3,
            },
            {
                id: 2,
                courseId: 2,
                name: "Meistritöökoja praktika 2",
                comment: "Kontaktõpe individuaalse graafiku järgi",
                startTime: new Date("2021-02-25T10:00+02:00"),
                duration: 7.3,
            },
            {
                id: 3,
                courseId: 3,
                name: "Loomeettevõtlus",
                comment: "Zoom",
                startTime: new Date("2021-02-25T17:30+02:00"),
                duration: 2.5,
            }
        ]
    },
    {
        id: 2,
        lessons: [
            {
                id: 1,
                courseId: 1,
                name: "Vanatehnika restaureerimine",
                comment: "Kontaktõpe individuaalse graafiku järgi",
                startTime: new Date("2021-02-25T10:00+02:00"),
                duration: 7.3,
            },
            {
                id: 2,
                courseId: 2,
                name: "Meistritöökoja praktika 2",
                comment: "Kontaktõpe individuaalse graafiku järgi",
                startTime: new Date("2021-02-25T10:00+02:00"),
                duration: 7.3,
            },
            {
                id: 3,
                courseId: 3,
                name: "Loomeettevõtlus",
                comment: "Zoom",
                startTime: new Date("2021-02-25T17:30+02:00"),
                duration: 2.5,
            }
        ]
    }
];

//Test...
app.get('/hello', (req, res) => {
    res.status(200).json({message: 'appi!'});
});

//Show all data
app.get('/weeks', (req, res) => {
    res.status(200).json({
       weeks: weeks
    });
});

//Show specific week
//required parameter: id
app.get('/weeks/:id', (req, res) => {
    res.status(200).json({
        week: weeks[req.params.id-1]
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
    "comment": "Toimub Google Meet kaudu",
    "startTime": "2021-02-25T08:00:00.000Z",
    "duration": 0.01
}
*/
//
app.post('/weeks', (req, res) => {    
    //Find if need to create a new week...
    for(i = 0; i < weeks.length; i++) {
        if(weeks[i].id == req.body.weekId) {
            weeks[i].lessons.push({
                id: weeks[i].lessons.length + 1,
                courseId: req.body.courseId,
                name: req.body.name,
                comment: req.body.comment,
                startTime: req.body.startTime,
                duration: req.body.duration
            });
            console.log("did not create new week");
            res.status(201).json({
                week: weeks[i],
                lesson: {
                    id: weeks[i].lessons.length + 1,
                    courseId: req.body.courseId,
                    name: req.body.name,
                    comment: req.body.comment,
                    startTime: req.body.startTime,
                    duration: req.body.duration
                },
                comment: "did not create new week in the process"
            });
            break;
        }
        if(weeks[i].id != req.body.weekId && i == weeks.length -1) {
            weeks.push( {
                id: req.body.weekId,
                lessons: [
                    {
                        id: 1,
                        courseId: req.body.courseId,
                        name: req.body.name,
                        comment: req.body.comment,
                        startTime: req.body.startTime,
                        duration: req.body.duration
                    }
                ]
            });
            res.status(201).json({
                week: weeks[i],
                lesson: {
                    id: weeks[i].lessons.length + 1,
                    courseId: req.body.courseId,
                    name: req.body.name,
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
      const lessonIndex = weeks[weekIndex].lessons.findIndex(lesson => lesson.id === lessonId);
      if(lessonIndex !== -1){
        console.log("deleted! W:" + weekIndex + " L:" + lessonIndex);
        console.log(weeks[weekIndex].lessons[lessonIndex]);
        weeks[weekIndex].lessons.splice(lessonIndex, 1);
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
      const lessonIndex = weeks[weekIndex].lessons.findIndex(lesson => lesson.id == lessonId);
      if(lessonIndex !== -1){
        console.log("found the lesson, should delete now");
        weeks[weekIndex].lessons[lessonIndex].courseId = req.body.courseId;
        weeks[weekIndex].lessons[lessonIndex].name = req.body.name;
        weeks[weekIndex].lessons[lessonIndex].comment = req.body.comment;
        weeks[weekIndex].lessons[lessonIndex].startTime = req.body.startTime;
        weeks[weekIndex].lessons[lessonIndex].duration = req.body.duration;
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
