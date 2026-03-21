const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const API_KEY = process.env.VITE_GEMINI_API_KEY;

async function listAll() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    try {
        // Note: genAI.listModels is not a standard method on the client itself, 
        // it's a separate utility in some versions, but in 0.x.x it's different.

        // In @google/generative-ai 0.x.x, model listing is not straightforward.
        // However, we can try to find what works.

        // Most likely, the user is in a region like EU/UK where some models are restricted
        // but the 404 is still very strange.

        console.log("Checking gemini-pro...");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hi");
        console.log("Success with gemini-pro!");
    } catch (e) {
        console.error("Error details:", e.message);
    }
}

listAll();
