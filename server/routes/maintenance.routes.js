// server/routes/maintenance.routes.js
const express = require("express");
const router = express.Router();
const maintenanceController = require("../controllers/maintenance.controller");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "✅ Maintenance API working!" });
});

// Get all
router.get("/", maintenanceController.getAllMaintenance);

// Create
router.post("/create", maintenanceController.createMaintenance);

// Complete
router.patch("/:id/complete", maintenanceController.completeMaintenance);

module.exports = router;
