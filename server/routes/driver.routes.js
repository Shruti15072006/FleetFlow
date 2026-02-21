// server/routes/driver.routes.js
const express = require("express");
const router = express.Router();

// TEST ROUTE - MUST BE BEFORE PARAMETERIZED ROUTES
router.get("/test", (req, res) => {
  console.log("✅ Driver test route hit");
  res.json({
    message: "✅ Driver API is working!",
    timestamp: new Date().toISOString(),
  });
});

// GET all drivers
router.get("/", async (req, res) => {
  try {
    const { Driver } = require("../models");
    const drivers = await Driver.findAll();
    res.json({ drivers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET driver by ID
router.get("/:id", async (req, res) => {
  try {
    const { Driver } = require("../models");
    const driver = await Driver.findByPk(req.params.id);
    if (!driver) return res.status(404).json({ error: "Driver not found" });
    res.json({ driver });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create driver
router.post("/", async (req, res) => {
  try {
    const { Driver } = require("../models");
    const driver = await Driver.create(req.body);
    res.status(201).json({ message: "Driver created", driver });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
