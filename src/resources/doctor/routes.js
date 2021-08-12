const doctorRouter = require("express").Router()

const { createOneDoctor } = require("./controller")

doctorRouter.get("/", ()=>{})

doctorRouter.get("/:id", ()=>{})

doctorRouter.post("/", createOneDoctor)

doctorRouter.patch("/:id", ()=>{})

doctorRouter.delete("/:id", ()=>{})

module.exports = doctorRouter