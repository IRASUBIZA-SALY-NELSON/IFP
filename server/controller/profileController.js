const Profile = require("../model/Profile");
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

exports.createProfile = async (req, res) => {
  try {
    const { gender, province, district, bankAccountNumber, profileImageUrl } =
      req.body;

    const Profile = new Profile({
      gender,
      province,
      district,
      bankAccountNumber,
      profileImageUrl,
    });

    await Profile.save();

    res.status(201).json({ message: "Profile created successfully", Profile });
  } catch (error) {
    console.error("Error creating Profile:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;

    const Profile = await Profile.findById(id);

    if (!Profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(Profile);
  } catch (error) {
    console.error("Error fetching Profile:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllProfiles = async (req, res) => {
  try {
    const Profiles = await Profile.find();

    res.json(Profiles);
  } catch (error) {
    console.error("Error fetching Profiles:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { gender, province, district, bankAccountNumber, profileImageUrl } =
      req.body;

    const Profile = await Profile.findByIdAndUpdate(
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

    if (!Profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Profile updated successfully", Profile });
  } catch (error) {
    console.error("Error updating Profile:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const Profile = await Profile.findByIdAndDelete(id);

    if (!Profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting Profile:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.deleteAllProfiles = async (req, res) => {
  try {
    await Profile.deleteMany({});
    res.json({ message: "All Profiles deleted successfully" });
  } catch (error) {
    console.error("Error deleting all Profiles:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
