const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    dob: {
        type: Date,
        required: [true, "Date is required"]
    },
    admissionNo: {
        type: Number,
        required: [true, "AdmissionNumber is required"],
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("student", studentSchema);


