const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/categoryController");

router.get("/categories", categoryController.getAll);

router.post("/category/add", categoryController.add);

router.delete("/category/delete", categoryController.delete);

module.exports = router;
