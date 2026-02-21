// server/app.js
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========== IMPORT ROUTES ==========
const vehicleRoutes = require("./routes/vehicle.routes");
const driverRoutes = require("./routes/driver.routes");
const tripRoutes = require("./routes/trip.routes");
const maintenanceRoutes = require("./routes/maintenance.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

// ========== MOUNT ROUTES ==========
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/dashboard", dashboardRoutes);

// ========== TEST ROUTES DIRECTLY IN APP.JS ==========
// These will DEFINITELY work even if route files have issues
app.get("/api/drivers/test-direct", (req, res) => {
  res.json({ message: "✅ Direct driver test working!" });
});

app.get("/api/maintenance/test-direct", (req, res) => {
  res.json({ message: "✅ Direct maintenance test working!" });
});

// ========== HEALTH CHECK ==========
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server running" });
});

// ========== ROOT ROUTE ==========
app.get("/", (req, res) => {
  res.json({
    name: "FleetFlow API",
    version: "1.0.0",
    endpoints: {
      "vehicles-test": "/api/vehicles/test",
      "drivers-test": "/api/drivers/test",
      "drivers-test-direct": "/api/drivers/test-direct",
      "trips-test": "/api/trips/test",
      "maintenance-test": "/api/maintenance/test",
      "maintenance-test-direct": "/api/maintenance/test-direct",
      dashboard: "/api/dashboard/kpis",
      health: "/health",
    },
  });
});

// ========== 404 HANDLER ==========
app.use((req, res) => {
  console.log(`❌ 404: ${req.method} ${req.url}`);
  res.status(404).json({
    error: "Route not found",
    method: req.method,
    url: req.url,
    availableEndpoints: {
      "vehicles-test": "/api/vehicles/test",
      "drivers-test": "/api/drivers/test",
      "drivers-test-direct": "/api/drivers/test-direct",
      "trips-test": "/api/trips/test",
      "maintenance-test": "/api/maintenance/test",
      "maintenance-test-direct": "/api/maintenance/test-direct",
    },
  });
});

module.exports = app;
