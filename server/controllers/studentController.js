const Student = require("../models/Student");

module.exports.createStudent = async (req, res) => {
    const { firstName, lastName, emailId, studentId, rollNo } = req.body;
    try {
        const createdUser = await Student.create({
            firstName,
            lastName,
            emailId,
            rollNo,
            studentId
        });
        res.json({ message: "success", data: createdUser });
    } catch (error) {
        res.json({ message: "fail", error })
        console.log("user not created: ", error);
    }
};

module.exports.getStudents = async (req, res) => {
    const allStudents = await Student.find();
    try {
        if (allStudents) {
            res.json({ data: allStudents });
        }
    } catch (err) {
        console.log("users not found: ", err);
    }
};

module.exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, emailId } = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            {
                firstName,
                lastName,
                emailId,
                rollNo
            },
            { new: true }
        );
        res.json({ updatedStudent });
    } catch (err) {
        console.log("student not updated: ", err);
    }
};

module.exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        res.json({ deletedStudent });
    } catch (error) {
        console.log("User has not been deleted: ", error);
    }
};

module.exports.loginStudent = async (req, res) => {
    const { email: emailId, password } = req.body;
    try {
        const student = await Student.findOne({ emailId });
        if (student && password === student.studentId) {
            res.json({ message: "success", data: student });
        } else {
            res.json({ message: "fail", data: "No such student found" });
        }
    } catch (error) {
        res.json({ message: "error", error })
    }
}
