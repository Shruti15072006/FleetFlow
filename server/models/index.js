// server/models/index.js
const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

// Import models
const Vehicle = require("./Vehicle");
const Driver = require("./Driver");
const Trip = require("./Trip");
const Maintenance = require("./Maintenance");
const Expense = require("./Expense");

// Check if sequelize is defined
if (!sequelize) {
  console.error("❌ CRITICAL ERROR: sequelize is undefined in models/index.js");
  console.error("🔍 Check config/db.js export");
  process.exit(1);
}

console.log("✅ Sequelize instance loaded in models");

// Export everything
module.exports = {
  sequelize, // THIS MUST BE FIRST
  Vehicle,
  Driver,
  Trip,
  Maintenance,
  Expense,
};
