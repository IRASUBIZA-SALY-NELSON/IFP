const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.json({
        message: "Logged in as admin",
        token,
        dashboard: "admin-dashboard",
      });
    }

    if (
      username === process.env.SPONSOR_USERNAME &&
      password === process.env.SPONSOR_PASSWORD
    ) {
      const token = jwt.sign({ role: "sponsor" }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.json({
        message: "Logged in as sponsor",
        token,
        dashboard: "sponsor-dashboard",
      });
    }

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: "user" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      message: "Logged in as user",
      token,
      dashboard: "user-dashboard",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
