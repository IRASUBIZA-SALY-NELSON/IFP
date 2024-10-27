"use strict";

var mongoose = require("mongoose");
var RegistrationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function validator(value) {
        return /^[a-z0-9]+$/.test(value);
      },
      message: "Username must be in lowercase, with no spaces and no capital letters."
    }
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function validator(value) {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value) && value.length <= 254;
      },
      message: "Email must be a valid Gmail address and must not exceed 254 characters."
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function validator(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^ ]{8,}$/.test(value);
      },
      message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, one special character, and cannot contain spaces."
    }
  },
  province: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    "enum": ["Male", "Female", "Other"],
    required: true
  },
  profileImage: {
    type: String,
    required: false,
    validate: {
      validator: function validator(value) {
        return /^(http|https):\/\/[^ "]+$/.test(value);
      },
      message: "Profile image must be a valid URL."
    }
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Registration", RegistrationSchema);