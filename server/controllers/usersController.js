const { User } = require("../database");
const ModelCrud = require("./index");

const userController = new ModelCrud(User);

module.exports = userController;
