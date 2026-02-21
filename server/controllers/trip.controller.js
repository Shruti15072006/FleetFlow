// server/controllers/trip.controller.js
const Trip = require("../models/Trip");
const Vehicle = require("../models/Vehicle");
const Driver = require("../models/Driver");

exports.createTrip = async (req, res) => {
  try {
    const {
      origin,
      destination,
      cargoWeight,
      driverId,
      vehicleId,
      startDate,
      endDate,
    } = req.body;

    if (
      !origin ||
      !destination ||
      !cargoWeight ||
      !driverId ||
      !vehicleId ||
      !startDate ||
      !endDate
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const vehicle = await Vehicle.findByPk(vehicleId);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

    const driver = await Driver.findByPk(driverId);
    if (!driver) return res.status(404).json({ error: "Driver not found" });

    if (vehicle.status !== "available")
      return res.status(400).json({ error: "Vehicle not available" });

    const ongoingTrip = await Trip.findOne({
      where: { driverId, status: "in_progress" },
    });
    if (ongoingTrip)
      return res
        .status(400)
        .json({ error: "Driver currently on another trip" });

    if (new Date(driver.licenseExpiry) < new Date())
      return res.status(400).json({ error: "Driver license expired" });

    if (cargoWeight > vehicle.capacity)
      return res.status(400).json({ error: "Cargo exceeds vehicle capacity" });

    const trip = await Trip.create({
      origin,
      destination,
      cargoWeight,
      driverId,
      vehicleId,
      startDate,
      endDate,
      status: "in_progress",
    });

    vehicle.status = "in_trip";
    await vehicle.save();

    res.status(201).json({ trip });
  } catch (error) {
    console.error("Trip creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
