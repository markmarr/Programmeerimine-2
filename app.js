const express = require('express');
const bodyParser = require('body-parser');

//const commentsRoutes = require('./routes/commentsRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const lessonsRoutes = require('./routes/lessonsRoutes');
//const durationsRoutes = require('./routes/durationsRoutes');
const namesRoutes = require('./routes/namesRoutes');
//const roomsRoutes = require('./routes/roomsRoutes');
//const starttimesRoutes = require('./routes/starttimesRoutes');
const teachersRoutes = require('./routes/teachersRoutes');
const usersRoutes = require('./routes/usersRoutes');


const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))


//app.use(commentsRoutes);
app.use(coursesRoutes);
app.use(lessonsRoutes);
//app.use(durationsRoutes);
app.use(namesRoutes);
//app.use(roomsRoutes);
//app.use(starttimesRoutes);
app.use(teachersRoutes);
app.use(usersRoutes);

app.use(express.json());

module.exports = app;
