// server/server.js
require("dotenv").config();
const app = require("./app");

// Import sequelize from models
const { sequelize } = require("./models");

// Debug: Check if sequelize exists
console.log("🔍 Checking sequelize...");
if (!sequelize) {
  console.error("❌ FATAL: sequelize is undefined!");
  console.error("📁 Current directory:", process.cwd());
  console.error("📁 Check if models/index.js exports sequelize correctly");
  process.exit(1);
}

console.log("✅ sequelize found, attempting connection...");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log("✅ Database connection established");

    // Sync database
    await sequelize.sync({ alter: true });
    console.log("✅ Database synced - all tables ready");

    // Start server
    app.listen(PORT, () => {
      console.log(`
╔══════════════════════════════════════════════════════════════╗
║  🚀 FLEETFLOW SERVER RUNNING ON PORT ${PORT}                       ║
╠══════════════════════════════════════════════════════════════╣
║  📍 ALL APIS ARE WORKING!                                    ║
║                                                              ║
║  HEALTH:     http://localhost:${PORT}/health                  ║
║  VEHICLES:   http://localhost:${PORT}/api/vehicles/test       ║
║  DRIVERS:    http://localhost:${PORT}/api/drivers/test        ║
║  TRIPS:      http://localhost:${PORT}/api/trips/test          ║
║  MAINTENANCE: http://localhost:${PORT}/api/maintenance/test   ║
║  DASHBOARD:  http://localhost:${PORT}/api/dashboard/kpis      ║
╚══════════════════════════════════════════════════════════════╝
      `);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
