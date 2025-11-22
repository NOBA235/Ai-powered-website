const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  category: String,
  img: String,
  github: String,
  live: String,
  featured: Boolean,
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);

