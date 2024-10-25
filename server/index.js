require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const registrationRoutes = require("./router/router");
const app = express();
const connectDB=require("./config/config");
connectDB();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
}));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json()); 
app.use("/", registrationRoutes);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
