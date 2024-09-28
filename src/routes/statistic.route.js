const express = require("express");
const router = express.Router();
const statisticController = require("../app/controllers/statistic.controller");
const { getDataVal } = require("../validations/statistic.validation");
const { authMiddleWare } = require("../app/middlewares/auth.middleware");

// Create a new statistic
router.post("/", statisticController.createStatistic);
router.get("/", getDataVal, authMiddleWare, statisticController.getData);

module.exports = router;
