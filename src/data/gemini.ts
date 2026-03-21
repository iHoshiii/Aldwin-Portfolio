import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
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
    model: "gemini-1.5-flash",
    systemInstruction: SYSTEM_PROMPT,
});

export const getChatResponse = async (userMessage: string, history: any[]) => {
    try {
        if (!API_KEY) {
            console.error("Gemini API Key is missing. Check your .env file.");
            return "Connection Error: API Key is missing. Please check your environment variables.";
        }

        console.log("Connecting to Gemini AI...");

        let chat = model.startChat({
            history: history.map(h => ({
                role: h.role,
                parts: [{ text: h.parts[0].text }]
            })),
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const text = response.text();

        console.log("Gemini Response Success!");
        return text;
    } catch (error: any) {
        console.error("FULL GEMINI ERROR LOG:", error);

        if (error.message?.includes("API key not valid")) {
            return "Connection Error: Your Gemini API Key is invalid. Please get a new one from Google AI Studio.";
        }

        return "I'm sorry, I'm having a bit of trouble connecting right now. Feel free to reach out via email!";
    }
};
