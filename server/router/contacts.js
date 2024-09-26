const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactsController");

router.post("/contacts", contactController.createContact);
router.get("/contacts", contactController.getAllContacts); // Fix: Correct method name
router.get("/contacts/:id", contactController.getContactById);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

router.post("/send-email", contactController.sendContactEmail);

module.exports = router;
