const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");


const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],//This is the url of the frontend and cors here is allowing to talk to my frontend
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse incoming JSON requests
app.use(express.json());

//Serve uploaded images from the "uploads" folder
app.use("/uploads", express.static("uploads"));//This lines allows me to upload imgaes to the mongodb 


// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)// MONGODB_URL is the file path to my datbase and is stored inthe .env file
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// IMPORTING MY  ROUTES HERE
const chatRoutes = require("./routes/chatRoutes");
const projectRoutes = require("./routes/projectRoutes");
const certificationRoutes = require("./routes/certificationRoutes");

// Registering  Routes
app.use("/api/chat", chatRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/certifications", certificationRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
