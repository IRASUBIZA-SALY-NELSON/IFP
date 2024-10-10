const UserProfile = require("../model/UserProfile");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const signupAndCreateProfile = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      gender,
      province,
      district,
      bankAccountNumber,
    } = req.body;

    const existingUser = await UserProfile.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userProfile = new UserProfile({
      username,
      email,
      password: hashedPassword,
      gender,
      province,
      district,
      bankAccountNumber,
      profileImageUrl: req.file ? req.file.path : null,
    });

    await userProfile.save();
    res
      .status(201)
      .json({
        message: "User registered and profile created successfully",
        userProfile,
      });
  } catch (error) {
    console.error("Error during signup and profile creation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await UserProfile.findById(id);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await UserProfile.find();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { gender, province, district, bankAccountNumber } = req.body;
    const profileImageUrl = req.file ? req.file.path : null;

    const profile = await UserProfile.findByIdAndUpdate(
      id,
      {
        gender,
        province,
        district,
        bankAccountNumber,
        profileImageUrl,
      },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Profile updated successfully", profile });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await UserProfile.findByIdAndDelete(id);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteAllProfiles = async (req, res) => {
  try {
    await UserProfile.deleteMany({});
    res.json({ message: "All profiles deleted successfully" });
  } catch (error) {
    console.error("Error deleting all profiles:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  signupAndCreateProfile: upload.single("profileImage"), // Using multer middleware directly here
  getProfileById,
  getAllProfiles,
  updateProfile,
  deleteProfile,
  deleteAllProfiles,
};
