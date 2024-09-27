const express = require("express");
const router = express.Router();
const deviceController = require("../app/controllers/device.controller");
const { authMiddleWare } = require("../app/middlewares/auth.middleware");

// Create a new device
router.post("/", authMiddleWare, deviceController.createDevice);

// Get all devices
router.get("/", authMiddleWare, deviceController.getAllDevices);

// Get a device by ID
router.get("/:id", authMiddleWare, deviceController.getDeviceById);

// Update a device by ID
router.put("/:id", authMiddleWare, deviceController.updateDevice);

// Delete a device by ID
router.delete("/:id", authMiddleWare, deviceController.deleteDevice);

module.exports = router;
