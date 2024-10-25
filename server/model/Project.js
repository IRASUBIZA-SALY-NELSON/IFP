const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, 
    required: true },
    description: { type: String,
     required: true },
    images: { type: [String],
     required: true },
    startDate: { type: Date, 
    required: true }, 
    endDate: { type: Date, 
    required: true }, 
    landSize: { type: Number,
    required: true },
    createdAt: { type: Date,
       default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
