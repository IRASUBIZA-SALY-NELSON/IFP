const Notification = require("../model/Notification");

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications" });
  }
};

exports.createNotification = async (req, res) => {
  const { text, time } = req.body;
  try {
    const notification = new Notification({ text, time });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ message: "Error creating notification" });
  }
};

exports.markNotificationAsRead = async (req, res) => {
  const { id } = req.params;
  try {
    await Notification.findByIdAndUpdate(id, { isRead: true });
    res.status(200).json({ message: "Notification marked as read" });
  } catch (error) {
    res.status(500).json({ message: "Error marking notification as read" });
  }
};


exports.markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany({}, { isRead: true });
    res.status(200).json({ message: "All notifications marked as read" });
  } catch (error) {
    res.status(500).json({ message: "Error marking notifications as read" });
  }
};
