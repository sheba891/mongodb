const teacherCollection = require("../models/teacher")
exports.viewTeachers = async (req, res, next) => {
    try{
        teacherCollection.find()
        .then(teachers => {
            res.status(200).send(teachers)
        })
        .catch(err => {
            res.status(400).send(err)
        });
    } catch (err) {
        res.status(400).send(err)
    }
}
exports.addTeacher = async (req, res, next) => {
    try{
        let newTeacher = new teacherCollection({
            name: req.body.name,
            dob: req.body.dob,
            subject: req.body.subject,
            department: req.body.department
        })

        newTeacher.save()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err =>{
            res.status(400).send(err)
        });
    } catch(err) {
        res.status(400).send(err)
    }
}