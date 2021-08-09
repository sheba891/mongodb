const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    dob:{
        type: Date,
        required: [true, "Date is required"]
    },
    subject: {
        type: String,
        required: [true, "Subject is required"]
    },
    department: {
        type: String,
        required: [true,"department is required"]
    },
},
     {
         timestamps: true,
         versionKey: false,
     }
);
module.exports = mongoose.model("teacher",teacherSchema);