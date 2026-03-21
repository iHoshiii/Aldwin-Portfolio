import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim();
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `You are Aldwin Bernard V. Loreto, speaking as the AI version of yourself on your portfolio website.
Education: Computer Science student at Nueva Vizcaya State University.
Role: Full Stack Developer & Game Developer.
Philosophy: "Less is More" – focusing on simplicity, high-contrast aesthetics, and superior user experience.
Skills:
- Web: React, Next.js, Node.js, Supabase, Tailwind CSS.
- Game Dev: Godot (GDScript), Unity (C#), Blender, Photoshop.
- Languages: Python, C#, C++, Java, JavaScript, Kotlin, TypeScript.
Projects:
1. Kasal-Link: Marriage License System for LGU Solano (React, Next.js, Supabase).
2. PacMad: 3D Pacman recreation where Pacman is the enemy (Unity, C#).
Interests: Open Source, UI/UX Design, AI, Game Jams.
Contact: iHoshiii on GitHub, LinkedIn (Aldwin Loreto), Facebook, and Instagram (@hoshi.iee).

Instructions:
- Answer questions about yourself, your work, and your skills concisely and naturally.
- Be friendly, professional, and helpful.
- If someone asks for your contact, provide the relevant social links.
- If you don't know something specifically about Aldwin's life outside of this context, stay in character but be humble.`;

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
    systemInstruction: SYSTEM_PROMPT,
});

export const getChatResponse = async (userMessage: string, history: any[]) => {
    try {
        if (!API_KEY) {
            console.error("Gemini API Key is missing. Check your .env file.");
            return "Connection Error: API Key is missing. Please check your environment variables.";
        }

        console.log("Connecting to Gemini AI...");

        // FIX: The first message in Gemini 'startChat' history MUST be 'user'.
        // Any initial messages from the 'model' are filtered out from the API history.
        const validHistory = history.map(h => ({
            role: h.role,
            parts: [{ text: h.parts[0].text }]
        })).filter((h, idx) => idx > 0 || h.role === 'user');

        let chat = model.startChat({
            history: validHistory,
            generationConfig: {
                maxOutputTokens: 600,
            },
        });

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const text = response.text();

        console.log("Gemini Response Success!");
        return text;
    } catch (error: any) {
        console.error("FULL GEMINI ERROR LOG:", error);
        const errorMessage = error.message || error.toString() || "";

        // Fallback Logic: If 1.5-flash is not found, try gemini-pro (1.0)
        if (errorMessage.includes("404") || errorMessage.includes("not found")) {
            console.warn("Attempting fallback to gemini-pro...");
            try {
                const fallbackModel = genAI.getGenerativeModel({ model: "gemini-pro" });
                const result = await fallbackModel.generateContent(userMessage);
                return result.response.text();
            } catch (fallbackError: any) {
                return `Connection Error (404): The models are not accessible with this key. Please ensure you created your key at aistudio.google.com and NOT the Google Cloud Console. Or, your region might have restricted access to Gemini 1.5.`;
            }
        }

        if (errorMessage.includes("API key not valid")) {
            return "Connection Error: Your Gemini API Key is invalid. Please get a new one from Google AI Studio and update your .env file.";
        }

        if (errorMessage.includes("quota")) {
            return "Connection Error: You've reached the free tier quota. Please wait a bit or upgrade.";
        }

        // Return the actual error for easier debugging if it's not standard
        return `I'm sorry, I'm having a bit of trouble connecting (${errorMessage}). Feel free to reach out via email!`;
    }
};
