// server/models/Maintenance.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Maintenance = sequelize.define(
  "Maintenance",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "scheduled",
    },
  },
  {
    timestamps: true,
  },
);

console.log("✅ Maintenance model defined and exported");

module.exports = Maintenance;
