const mongoose = require("mongoose");

const termsSchema = new mongoose.Schema({
  content: String,
});

const Terms = mongoose.model("Terms", termsSchema);

module.exports = Terms;
