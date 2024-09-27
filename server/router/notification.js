const express = require("express");
const router = express.Router();
const notificationController = require("../controller/notificationController");

router.get("/notification", notificationController.getNotifications);
router.post("/notification", notificationController.createNotification);
router.put("/:id", notificationController.markNotificationAsRead);
router.put("/mark-all-as-read", notificationController.markAllAsRead);

module.exports = router;
