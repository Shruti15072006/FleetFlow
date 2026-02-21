// server/test-all.js
const express = require("express");
const app = express();
app.use(express.json());

// ===== VEHICLE ROUTES =====
app.get("/api/vehicles/test", (req, res) => {
  res.json({ message: "VEHICLES WORKING" });
});

app.get("/api/vehicles", (req, res) => {
  res.json({ vehicles: [] });
});

app.get("/api/vehicles/:id", (req, res) => {
  res.json({ vehicle: { id: req.params.id } });
});

// ===== TRIP ROUTES =====
app.get("/api/trips/test", (req, res) => {
  res.json({ message: "TRIPS WORKING" });
});

app.get("/api/trips", (req, res) => {
  res.json({ trips: [] });
});

app.get("/api/trips/:id", (req, res) => {
  res.json({ trip: { id: req.params.id } });
});

app.listen(5000, () => {
  console.log("✅ TEST SERVER ON PORT 5000");
  console.log("Test: http://localhost:5000/api/vehicles/test");
  console.log("Test: http://localhost:5000/api/trips/1");
});
