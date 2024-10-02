const cors = require("cors");
require("dotenv").config();

// const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
const signuproutes = require("./router/signup");
const loginRoutes = require("./router/login");
const profileRoutes = require("./router/profile");
const projectRoutes = require("./router/project");
const aboutRoutes = require("./router/about");
const termsRoutes = require("./router/terms");
const contactRoutes = require("./router/contact");
const policyRoutes = require("./router/policy");
const faqRoutes = require("./router/faq");
const contactsRoutes = require("./router/contacts");
const notificationRoutes = require("./router/notification");
const passportStrategy=require('./passport')
// dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", signuproutes);
app.use("/", loginRoutes);
app.use("/", profileRoutes);
app.use("/", projectRoutes);
app.use("/", aboutRoutes);
app.use("/", termsRoutes);
app.use("/", contactRoutes);
app.use("/", policyRoutes);
app.use("/", faqRoutes);
app.use("/", contactsRoutes);
app.use("/", notificationRoutes);

const port = process.env.PORT || 5001;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.post("/send-email", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email field is required.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).send("Invalid email format.");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Message from ${email}`,
    html: `<h1>This person wants to send an email to your account because they like your things.</h1>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error); // Log the complete error object
    res
      .status(500)
      .send({ error: "Error sending email", details: error.message }); // Send the error details
  }
});

app.listen(port, () => {
  console.log(`IFP's Server is running on port ${port}`);
});
