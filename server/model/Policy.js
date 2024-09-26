const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  content: String,
});

const Policy = mongoose.model("Policy", policySchema);

module.exports = Policy;
