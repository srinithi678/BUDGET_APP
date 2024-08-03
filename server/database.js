const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// new Instance of Sequelize ---------------------------------------------------------------

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/budgetapp`,
  {
    logging: false,
    native: false,
  }
);

// Assign Sequelize to each model  ---------------------------------------------------------------

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Relations between Models  ---------------------------------------------------------------

const { User, Transaction, Category } = sequelize.models;

User.hasMany(Transaction);
Transaction.belongsTo(User);

Category.hasMany(Transaction);
Transaction.belongsTo(Category);

module.exports = {
  ...sequelize.models,
  database: sequelize,
};
