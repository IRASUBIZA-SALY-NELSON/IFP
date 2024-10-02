const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sponsorSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Sponsor = mongoose.model("Sponsors", sponsorSchema);
module.exports = Sponsor;
