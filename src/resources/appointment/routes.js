const appointmentRouter = require("express").Router()

const { createOneAppointment, getAllAppointments } = require("./controller")

appointmentRouter.get("/", getAllAppointments)

appointmentRouter.get("/:id", ()=>{})

appointmentRouter.post("/", createOneAppointment)

appointmentRouter.patch("/:id", ()=>{})

appointmentRouter.delete("/:id", ()=>{})

module.exports = appointmentRouter