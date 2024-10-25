const Project = require("../model/Project");
const jwt = require("jsonwebtoken");

const getUserIdFromRequest = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("Token:", token);

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token", decoded.userId);
    return decoded.userId;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
};

const createProject = async (req, res) => {
  try {
    const userId = getUserIdFromRequest(req);
    const lastProject = await Project.findOne({ userId }).sort({
      createdAt: -1,
    });
    const currentTime = new Date();
    const twelveHoursAgo = new Date(
      currentTime.getTime() - 12 * 60 * 60 * 1000
    );

    if (lastProject && lastProject.createdAt > twelveHoursAgo) {
      return res.status(403).json({
        message: "You must wait 12 hours before creating another project.",
        waitTime:
          lastProject.createdAt.getTime() +
          12 * 60 * 60 * 1000 -
          currentTime.getTime(),
      });
    }

    const newProject = new Project({
      ...req.body,
      userId,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Error creating project", error });
  }
};

const getProjects = async (req, res) => {
  try {
    const userId = getUserIdFromRequest(req);

    // No authorization check, proceed to fetch projects
    const projects = await Project.find({ userId });
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Error fetching projects" });
  }
};

const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }
    res
      .status(200)
      .json({ message: "Project retrieved successfully.", data: project });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

module.exports = { createProject, getProjects, getProjectById };
