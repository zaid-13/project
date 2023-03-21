const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
    },
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true
    }
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
