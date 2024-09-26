const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;
