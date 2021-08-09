const express = require('express')
const teacherController = require("../controller/teacherController")
const teacherRoute = express.Router()

teacherRoute.get("/", teacherController.viewTeachers)
teacherRoute.post("/add", teacherController.addTeacher)

module.exports = teacherRoute;




//Tasks
// Create apis for the following
// 1. Add new teacher
// 2. List all teachers
// 3. List a teacher by object ID
// 4. Update a teacher
// 5. Delete a teacher

