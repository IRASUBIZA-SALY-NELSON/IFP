const express = require("express");
const router = express.Router();
const termsController = require("../controller/termsController");

router.post("/terms", termsController.createTerms);
router.get("/terms", termsController.getAllTerms);
router.get("/terms/:id", termsController.getTermsById);
router.put("/terms/:id", termsController.updateTerms);
router.delete("/terms/:id", termsController.deleteTerms);

module.exports = router;
