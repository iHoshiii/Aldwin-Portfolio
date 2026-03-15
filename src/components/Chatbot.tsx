import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChatResponse } from '../data/gemini';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: "Hi there! I'm Aldwin's AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        // Prepare history for Gemini
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const response = await getChatResponse(userMsg, history);

        setMessages(prev => [...prev, { role: 'model', text: response }]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-black border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div>
                                <h3 className="font-bold text-white">Chat with Aldwin AI</h3>
                                <p className="text-xs text-gray-500">Ask me anything about my work</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-white text-black rounded-tr-none'
                                        : 'bg-white/10 text-white rounded-tl-none border border-white/10'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 text-white p-4 rounded-2xl rounded-tl-none border border-white/10 italic text-sm flex items-center gap-2">
                                        <Loader2 size={16} className="animate-spin" /> Thinking...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a message..."
                                    className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:border-white/40 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white hover:text-gray-400 transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
