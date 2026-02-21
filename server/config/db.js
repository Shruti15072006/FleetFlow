// server/config/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  },
);

// Test connection function
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected Successfully");
    console.log("📊 Database:", process.env.DB_NAME);
    console.log("👤 User:", process.env.DB_USER);
    return true;
  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
    return false;
  }
};

// Export both
module.exports = { sequelize, connectDB };
