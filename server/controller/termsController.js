const Terms = require("../model/Terms");

exports.createTerms = async (req, res) => {
  try {
    const terms = new Terms(req.body);
    await terms.save();
    res.status(201).json(terms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTerms = async (req, res) => {
  try {
    const terms = await Terms.find();
    res.status(200).json(terms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTermsById = async (req, res) => {
  try {
    const terms = await Terms.findById(req.params.id);
    if (!terms) {
      return res.status(404).json({ message: "Terms not found" });
    }
    res.status(200).json(terms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTerms = async (req, res) => {
  try {
    const terms = await Terms.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!terms) {
      return res.status(404).json({ message: "Terms not found" });
    }
    res.status(200).json(terms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTerms = async (req, res) => {
  try {
    const terms = await Terms.findByIdAndDelete(req.params.id);
    if (!terms) {
      return res.status(404).json({ message: "Terms not found" });
    }
    res.status(200).json({ message: "Terms deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
