const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Vehicle = sequelize.define(
  "Vehicle",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    capacityKg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("available", "on_trip", "in_shop"),
      defaultValue: "available",
    },
  },
  { timestamps: true },
);

module.exports = Vehicle;
