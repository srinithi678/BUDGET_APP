const { Router } = require("express");

// Routes Files

const transactionRoutes = require("./transactionRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./usersRoutes");

const router = Router();

// Routes Middlewares

router.use("/", transactionRoutes);
router.use("/", categoryRoutes);
router.use("/", userRoutes);

module.exports = router;
