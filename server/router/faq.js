const express = require("express");
const router = express.Router();
const faqController = require("../controller/faqController");

router.post("/faq", faqController.createFaq);
router.get("/faq", faqController.getAllFaqs);
router.get("/faq/:id", faqController.getFaqById);
router.put("/faq/:id", faqController.updateFaq);
router.delete("/faq/:id", faqController.deleteFaq);
router.delete("/faqs", faqController.deleteAllFaqs);

module.exports = router;
