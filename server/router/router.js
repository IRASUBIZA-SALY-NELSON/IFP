const express = require("express");
const { registerUser } = require("../controller/controller");
const { login } = require("../controller/loginController");
const {
  createProject,
  getProjects,
  getProjectById,
} = require("../controller/projectController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/add-project", createProject);
router.get("/projects", getProjects);
router.get("/project/:id", getProjectById);

module.exports = router;
