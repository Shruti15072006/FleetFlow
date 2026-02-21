// server/controllers/maintenance.controller.js
const { Maintenance, Vehicle } = require("../models");

// Debug
console.log("🔧 Maintenance controller initialized");
console.log("   Maintenance available:", !!Maintenance);
console.log("   Vehicle available:", !!Vehicle);

if (!Maintenance) {
  console.error("❌ CRITICAL: Maintenance model is undefined!");
}

// Create maintenance
const createMaintenance = async (req, res) => {
  try {
    console.log("📝 Creating maintenance with:", req.body);

    const { vehicleId, description, cost, status } = req.body;

    // Validation
    if (!vehicleId || !description || !cost) {
      return res.status(400).json({
        error: "vehicleId, description, and cost are required",
      });
    }

    // Check vehicle
    const vehicle = await Vehicle.findByPk(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    // Create maintenance
    const maintenance = await Maintenance.create({
      vehicleId,
      description,
      cost,
      status: status || "scheduled",
    });

    // Update vehicle status
    await vehicle.update({ status: "in_shop" });

    res.status(201).json({
      message: "Maintenance scheduled",
      maintenance,
      vehicle: {
        id: vehicle.id,
        name: vehicle.name,
        status: vehicle.status,
      },
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all maintenance
const getAllMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findAll({
      include: [Vehicle],
    });
    res.json({ maintenance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Complete maintenance
const completeMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByPk(req.params.id, {
      include: [Vehicle],
    });

    if (!maintenance) {
      return res.status(404).json({ error: "Maintenance not found" });
    }

    maintenance.status = "completed";
    await maintenance.save();

    if (maintenance.Vehicle) {
      await maintenance.Vehicle.update({ status: "available" });
    }

    res.json({ message: "Maintenance completed", maintenance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMaintenance,
  getAllMaintenance,
  completeMaintenance,
};
