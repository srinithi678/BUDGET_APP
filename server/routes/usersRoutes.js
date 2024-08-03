const { Router } = require("express");
const router = Router();
const userController = require("../controllers/usersController");

router.get("/users", userController.getAll);

router.post("/users/add", userController.add);

router.delete("/users/delete", userController.delete);

module.exports = router;
