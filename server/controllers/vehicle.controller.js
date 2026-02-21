const { Vehicle } = require("../models");

exports.createVehicle = async (req, res) => {
  try {
    const { name, capacity, status } = req.body;

    if (!name || !capacity) {
      return res.status(400).json({ error: "Name and capacity required" });
    }

    const vehicle = await Vehicle.create({
      name,
      capacity,
      status: status || "available",
    });

    res.status(201).json({ message: "Vehicle created", vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json({ vehicles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
    res.json({ vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
    await vehicle.update(req.body);
    res.json({ message: "Vehicle updated", vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
