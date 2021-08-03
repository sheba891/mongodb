const express = require('express')
const studentController = require("../controller/studentController")
const studentRoute = express.Router()

studentRoute.get("/", studentController.viewStudents)
studentRoute.post("/add", studentController.addStudent)

module.exports = studentRoute;

