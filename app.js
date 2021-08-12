const express = require('express');
const logger = require('morgan');

const app = express();

const appointmentRouter = require("./src/resources/appointment/routes");
const doctorRouter = require('./src/resources/doctor/routes');

app.use(logger('dev'));
app.use(express.json());

app.use("/appointments", appointmentRouter)
app.use("/doctors", doctorRouter)

app.all("*", (req, res) => {
    res.status(404).send("<h1>Some things just aren't meant to be</h1>")
})

module.exports = app;
