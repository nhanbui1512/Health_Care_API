const express = require("express");
const router = express.Router();
const heartRateReadingController = require("../app/controllers/heartRateReading.controller");
const { authMiddleWare } = require("../app/middlewares/auth.middleware");

// Create a new heart rate reading
router.post(
  "/",
  authMiddleWare,
  heartRateReadingController.createHeartRateReading
);
router.get("/", authMiddleWare, heartRateReadingController.getData);
module.exports = router;
