const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicle.controller");

router.get("/test", (req, res) => {
  res.json({ message: "✅ Vehicle API working" });
});

router.get("/", vehicleController.getAllVehicles);
router.get("/:id", vehicleController.getVehicleById);
router.post("/", vehicleController.createVehicle);
router.patch("/:id", vehicleController.updateVehicle);

module.exports = router;
