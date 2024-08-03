const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //   password: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //     validate: {
      //       isAlphanumeric: true,
      //     },
      //   },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      //   logged: {
      //     type: DataTypes.BOOLEAN,
      //     defaultValue: false,
      //   },
    },
    {
      timestamps: false,
    }
  );
};
