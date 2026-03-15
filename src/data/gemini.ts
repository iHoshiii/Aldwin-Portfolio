import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDSijmtcepLenm06b69xcOUF-_zOBwDEBs";
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const SYSTEM_PROMPT = "You are Aldwin Bernard V. Loreto, a Full Stack Developer. Answer questions about your portfolio and skills concisely.";

export const getChatResponse = async (userMessage: string, history: any[]) => {
    try {
        console.log("Connecting to Gemini AI...");

        let fullPrompt = SYSTEM_PROMPT + "\n\nConversation History:\n";
        history.forEach(m => {
            fullPrompt += `${m.role === 'user' ? 'Client' : 'Aldwin'}: ${m.parts[0].text}\n`;
        });
        fullPrompt += `Client: ${userMessage}\nAldwin:`;

        const result = await model.generateContent(fullPrompt);
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
