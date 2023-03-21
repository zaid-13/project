const { Router } = require("express");
const studentRouter = Router();
const studentController = require("../controllers/studentController");

studentRouter.post("/api/createStudent", studentController.createStudent);
studentRouter.get("/api/getStudents", studentController.getStudents);
studentRouter.post("/api/updateStudent/:id", studentController.updateStudent);
studentRouter.delete("/api/deleteStudent/:id", studentController.deleteStudent);

studentRouter.post("/api/loginStudent", studentController.loginStudent);

module.exports = studentRouter;
