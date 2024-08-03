const { Category } = require("../database");
const ModelCrud = require("../controllers/index");

const categoryController = new ModelCrud(Category);

module.exports = categoryController;
