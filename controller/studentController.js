const studentCollection = require("../models/student")

exports.viewStudents = async (req, res, next) => {
    try {
        studentCollection.find()
            .then(students => {
                res.status(200).send(students)
            })
            .catch(err => {
                res.status(400).send(err)
            });
    } catch (err) {
        res.status(400).send(err)
    }
}
exports.addStudent = async (req, res, next) => {
    try {

        let newStudent = new studentCollection({
            name: req.body.name,
            age: req.body.age,
            dob: req.body.dob,
            admissionNo: req.body.admissionNo
        })

        newStudent.save()
            .then(data => {
                res.status(200).send(data)
            })
            .catch(err => {
                res.status(400).send(err)
            });
    } catch (err) {
        res.status(400).send(err)
    }
}