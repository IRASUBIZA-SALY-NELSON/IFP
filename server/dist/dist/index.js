"use strict";

require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var helmet = require("helmet");
var rateLimit = require("express-rate-limit");
var mongoSanitize = require("express-mongo-sanitize");
var xss = require("xss-clean");
var hpp = require("hpp");
var cors = require("cors");
var registrationRoutes = require("./router/router");
var app = express();
var connectDB = require("./config/config");
connectDB();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json());
app.use("/", registrationRoutes);
var PORT = process.env.PORT || 5001;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});