const express = require("express");
const Project = require("../models/Project");

const router = express.Router();



// Get all projects

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Add new project

router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
