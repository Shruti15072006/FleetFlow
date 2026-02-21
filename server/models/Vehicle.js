// server/models/Vehicle.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Vehicle = sequelize.define("Vehicle", {
  name: { type: DataTypes.STRING, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "available",
  },
});

module.exports = Vehicle;
