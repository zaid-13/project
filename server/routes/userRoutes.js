const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");

router.post("/api/createUser", userController.createUser);
router.get("/api/getUsers", userController.getUsers);
router.post("/api/updateUser/:id", userController.updateUser);
router.delete("/api/deleteUser/:id", userController.deleteUser);

module.exports = router;
