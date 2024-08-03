const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
