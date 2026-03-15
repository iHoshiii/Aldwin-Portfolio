import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBXNv6YgDXDjNfmIzwIwvSStNNS8R3D7I8"; // You will need to replace this with your actual key
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are Aldwin Bernard V. Loreto, a Full Stack Developer & Designer. You are talking to a potential client or employer on your portfolio website. Answer questions about your background, projects, and skills. Be professional, friendly, and concise. Your tech stack includes React, TypeScript, Tailwind, and Vercel. You focus on clean, modern, black & white designs.",
});

export const getChatResponse = async (userMessage: string, history: { role: string; parts: { text: string }[] }[]) => {
    try {
        const chat = model.startChat({
            history: history,
        });

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini Error:", error);
        return "I'm sorry, I'm having a bit of trouble connecting right now. Feel free to reach out via email!";
    }
};
