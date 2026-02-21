const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");
const Trip = require("../models/Trip");

router.get("/kpis", async (req, res) => {
  const activeFleet = await Vehicle.count({ where: { status: "available" } });
  const inShop = await Vehicle.count({ where: { status: "in_shop" } });
  const inTrip = await Vehicle.count({ where: { status: "in_trip" } });
  const pendingTrips = await Trip.count({ where: { status: "in_progress" } });

  res.json({ activeFleet, inShop, inTrip, pendingTrips });
});

module.exports = router;
