const express = require("express");
const router = express.Router();
const fallAlertController = require("../app/controllers/fallAlert.controller");

// Get all fall alerts
router.get("/", fallAlertController.getAllFallAlerts);

module.exports = router;
