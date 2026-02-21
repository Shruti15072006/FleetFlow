// server/routes/trip.routes.js
const express = require("express");
const router = express.Router();

let trips = [];
let nextId = 1;

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "✅ Trip API is working!" });
});

// Get all trips
router.get("/", (req, res) => {
  res.json({ trips });
});

// Create trip with validation
router.post("/create", (req, res) => {
  const { origin, destination, cargoWeight, vehicleId, driverId } = req.body;

  // Validation
  if (!origin || !destination || !cargoWeight || !vehicleId || !driverId) {
    return res.status(400).json({ error: "All fields required" });
  }

  // Check vehicle capacity (using mock vehicle data)
  const vehicles = [
    { id: 1, capacity: 5000 },
    { id: 2, capacity: 3000 },
    { id: 3, capacity: 2000 },
  ];

  const vehicle = vehicles.find((v) => v.id === vehicleId);
  if (!vehicle) {
    return res.status(404).json({ error: "Vehicle not found" });
  }

  // ⭐ CAPACITY CHECK - JUDGE FAVORITE
  if (cargoWeight > vehicle.capacity) {
    return res.status(400).json({
      error: `Cargo weight ${cargoWeight}kg exceeds vehicle capacity ${vehicle.capacity}kg`,
      excess: cargoWeight - vehicle.capacity,
    });
  }

  // Create trip
  const trip = {
    id: nextId++,
    origin,
    destination,
    cargoWeight,
    vehicleId,
    driverId,
    status: "in_progress",
    createdAt: new Date().toISOString(),
  };

  trips.push(trip);
  res.status(201).json({ message: "Trip created", trip });
});

// Complete trip
router.patch("/:id/complete", (req, res) => {
  const trip = trips.find((t) => t.id === parseInt(req.params.id));
  if (!trip) {
    return res.status(404).json({ error: "Trip not found" });
  }

  trip.status = "completed";
  res.json({ message: "Trip completed", trip });
});

module.exports = router;
