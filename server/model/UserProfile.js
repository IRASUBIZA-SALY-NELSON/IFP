const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
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
  },
  profileImageUrl: {
    type: String,
  },
});
const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;
