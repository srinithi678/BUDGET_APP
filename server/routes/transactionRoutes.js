const { Router } = require("express");
const router = Router();
const transactionController = require("../controllers/transactionController");

router.get("/transactions/", transactionController.getWithJoin);

router.get("/description/transactions", transactionController.getDescription);

router.post("/transaction/add", transactionController.addJoinModels);

router.put("/transaction/update/:id", transactionController.update);

router.delete("/transaction/delete/:id", transactionController.delete);

module.exports = router;
