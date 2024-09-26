const Project = require("../model/Project");

exports.createProject = async (req, res) => {
  try {
    const { name, description, projectImageUrl, landSize, startDate, endDate } =
      req.body;
    const project = new Project({
      name,
      description,
      projectImageUrl,
      landSize,
      startDate,
      endDate,
    });
    await project.save();
    res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, projectImageUrl, landSize, startDate, endDate } =
      req.body;
    const project = await Project.findByIdAndUpdate(
      id,
      { name, description, projectImageUrl, landSize, startDate, endDate },
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Project.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.deleteMultipleProjects = async (req, res) => {
  try {
    const { ids } = req.body;
    const result = await Project.deleteMany({ _id: { $in: ids } });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No projects found to delete" });
    }
    res.status(200).json({ message: "Projects deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
