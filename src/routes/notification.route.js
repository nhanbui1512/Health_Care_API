const express = require("express");
const notificationController = require("../app/controllers/notification.controller");
const { authMiddleWare } = require("../app/middlewares/auth.middleware");
const router = express.Router();
router.get("/", authMiddleWare, notificationController.getNotifications);

module.exports = router;
