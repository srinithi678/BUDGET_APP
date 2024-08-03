const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "transaction",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      type: {
        type: DataTypes.ENUM("Incomes", "Expenses"),
        defaultValue: "Incomes",
      },
    },
    {
      timestamps: false,
    }
  );
};
