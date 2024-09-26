const express = require("express");
const router = express.Router();
const aboutController = require("../controller/aboutController");

router.post("/about", aboutController.createAbout);
router.get("/about", aboutController.getAllAbouts);
router.get("/about/:id", aboutController.getAboutById);
router.put("/about/:id", aboutController.updateAbout);
router.delete("/about/:id", aboutController.deleteAbout);

module.exports = router;
