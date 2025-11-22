const express = require("express");
const Certification = require("../models/Certification");

const router = express.Router();



// THIS LINES OF CODE IS GETTING ALL CERTICATIONS

router.get("/", async (req, res) => {
  try {
    const certs = await Certification.find();
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// THIS LINES OF CODE ADDS NEW CERTICATION

router.post("/", async (req, res) => {
  try {
    const cert = new Certification(req.body);
    const saved = await cert.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;


