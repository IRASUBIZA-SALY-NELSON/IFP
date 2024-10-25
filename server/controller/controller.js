const bcrypt = require("bcrypt");
const Registration = require("../model/Registration");

const registerUser = async (req, res) => {
  console.log(req.body);
  const { username, email, password, province, district, gender } = req.body;

  if (!username || !email || !password || !province || !district || !gender) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const usernamePattern = /^[a-z0-9]+$/;
  if (!usernamePattern.test(username)) {
    return res
      .status(400)
      .json({ message: "Username must be lowercase, no spaces." });
  }

  const existingUsername = await Registration.findOne({ username });
  if (existingUsername) {
    return res.status(400).json({ message: "Username already exists." });
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(email)) {
    return res
      .status(400)
      .json({ message: "Email must be a valid Gmail address." });
  }

  const existingEmail = await Registration.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ message: "Email already exists." });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long." });
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordPattern.test(password)) {
    return res.status(400).json({
      message:
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Registration({
    username,
    email,
    password: hashedPassword,
    province,
    district,
    gender,
  });

  await user.save();
  res.status(201).json({ message: "Registration successful", data: user });
};

module.exports = { registerUser };
