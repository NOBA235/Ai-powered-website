
// Importing Dependencies

const express = require("express");
const router = express.Router();

// Google Generative AI SDK (Gemini API)
const { GoogleGenerativeAI } = require("@google/generative-ai");


// Initialize Gemini AI Client
// GEMINI_API_KEY is stored securely in the .env file
// This allows my backend to send prompts to the gemini model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// Sends a user message to Gemini and returns the AI response.
router.post("/", async (req, res) => {
  try {
      // Extract incoming message and chat history from frontend
    const { message, chatHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

//here are my documentation for the codes below 
     // -------------------------------------------------------
    // Configure the Gemini model
    // model:        AI model version used
    // temperature:  creativity level of responses
    // topP, topK:   sampling parameters
    // maxOutputTokens:Its the maximum response length
    // systemInstruction: defines AI’s personality
    // -------------------------------------------------------

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1000,
      },
      systemInstruction:
        "You are Noba a passionate full-stack developer skilled in React, JavaScript ,Node.js, and AI Integration.",
    });


    //  Start chat session with predefined personality + history
    // history[] → this will stores all previous messages for context and this is how context is handled
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: "You are Noba. Stay friendly, confident, and helpful.",
            },
          ],
        },
        {
          role: "model",
          parts: [
            { text: "Got it! Noba here — I'm ready to help " },
          ],
        },
        ...chatHistory, // Append past messages to maintain ongoing conversation
      ],
    });

    const result = await chat.sendMessage(message);
    const aiResponse = result.response.text();

    res.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ error: "AI response failed", details: error.message });
  }
});

module.exports = router;

 