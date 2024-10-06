const express = require("express");
const router = express.Router();
const upload = require("../config/uploadConfig");
const {
  signupAndCreateProfile,
  getProfileById,
  getAllProfiles,
  updateProfile,
  deleteProfile,
  deleteAllProfiles,
} = require("../controller/UserProfileController");

// Logging the requests to this endpoint
router.post(
  "/signup-and-create-profile",
  upload.single("profileImage"),
  (req, res, next) => {
    console.log("Received request to /signup-and-create-profile");
    next();
  },
  signupAndCreateProfile
);

router.get("/profiles/:id", getProfileById);
router.get("/profiles", getAllProfiles);
router.put("/profiles/update/:id", updateProfile);
router.delete("/profiles/delete/:id", deleteProfile);
router.delete("/profiles/delete", deleteAllProfiles);

module.exports = router;
