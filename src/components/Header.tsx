import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="py-24 border-t border-white/10 container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-outfit">
                Let's <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="flex justify-center gap-6 mb-12">
                {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Mail, href: "mailto:contact@example.com" }
                ].map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        className="w-14 h-14 flex justify-center items-center bg-white/5 border border-white/10 rounded-full hover:bg-indigo-500 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
                    >
                        <social.icon size={24} />
                    </a>
                ))}
            </div>
            <p className="text-gray-500 text-sm font-medium">
                © {new Date().getFullYear()} Aldwin. Built with React, TypeScript, Tailwind & Vercel.
            </p>
        </footer>
    );
};

export default Footer;
