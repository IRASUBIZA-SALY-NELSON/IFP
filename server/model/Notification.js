const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    time: { type: String, required: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
