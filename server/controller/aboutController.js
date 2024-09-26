const About = require("../model/About");

exports.createAbout = async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAbouts = async (req, res) => {
  try {
    const abouts = await About.find();
    res.status(200).json(abouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAboutById = async (req, res) => {
  try {
    const about = await About.findById(req.params.id);
    if (!about) {
      return res.status(404).json({ message: "About not found" });
    }
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!about) {
      return res.status(404).json({ message: "About not found" });
    }
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndDelete(req.params.id);
    if (!about) {
      return res.status(404).json({ message: "About not found" });
    }
    res.status(200).json({ message: "About deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
