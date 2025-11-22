const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  duration: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Certification", certificationSchema);

