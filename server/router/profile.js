const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfileById,
  getAllProfiles,
  updateProfile,
  deleteProfile,
  deleteAllProfiles,
} = require("../controller/profileController");
const upload = require("../config/uploadConfig");

router.post("/create", upload.single("profileImage"), createProfile);
router.get("/Profiles/:id", getProfileById);
router.get("/Profiles", getAllProfiles);
router.put("/update/:id", upload.single("profileImage"), updateProfile);
router.delete("/delete/:id", deleteProfile);
router.delete("/delete", deleteAllProfiles);

module.exports = router;
