// server/test-vehicles.js
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
app.use(express.json());

// Simple in-memory database for testing
let vehicles = [];
let nextId = 1;

// TEST ROUTES - These will DEFINITELY work
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Test server running" });
});

// Vehicle routes
app.get("/api/vehicles/test", (req, res) => {
  res.json({ message: "✅ Vehicle test route works!" });
});

app.get("/api/vehicles", (req, res) => {
  res.json({ vehicles });
});

app.post("/api/vehicles", (req, res) => {
  const { name, capacity, status } = req.body;

  if (!name || !capacity) {
    return res.status(400).json({ error: "Name and capacity required" });
  }

  const newVehicle = {
    id: nextId++,
    name,
    capacity,
    status: status || "available",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  vehicles.push(newVehicle);
  res.status(201).json({ message: "Vehicle created", vehicle: newVehicle });
});

app.get("/api/vehicles/:id", (req, res) => {
  const vehicle = vehicles.find((v) => v.id === parseInt(req.params.id));
  if (!vehicle) {
    return res.status(404).json({ error: "Vehicle not found" });
  }
  res.json({ vehicle });
});

const PORT = 5007;
app.listen(PORT, () => {
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ TEST SERVER RUNNING ON PORT ${PORT}
📡 TEST THESE URLS:
   └─► http://localhost:${PORT}/health
   └─► http://localhost:${PORT}/api/vehicles/test
   └─► http://localhost:${PORT}/api/vehicles (GET)
   └─► http://localhost:${PORT}/api/vehicles (POST)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
});
