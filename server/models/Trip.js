// server/models/Trip.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Vehicle = require("./Vehicle");
const Driver = require("./Driver");

const Trip = sequelize.define("Trip", {
  origin: { type: DataTypes.STRING, allowNull: false },
  destination: { type: DataTypes.STRING, allowNull: false },
  cargoWeight: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "in_progress",
  },
});

// Associations
Vehicle.hasMany(Trip, { foreignKey: "vehicleId" });
Trip.belongsTo(Vehicle, { foreignKey: "vehicleId" });

Driver.hasMany(Trip, { foreignKey: "driverId" });
Trip.belongsTo(Driver, { foreignKey: "driverId" });

module.exports = Trip;
