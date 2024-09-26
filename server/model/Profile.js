const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    bankAccountNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[0-9]{8,12}$/.test(value);
        },
        message: "Bank account number must be between 8 and 12 digits.",
      },
    },
    profileImageUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", ProfileSchema);
