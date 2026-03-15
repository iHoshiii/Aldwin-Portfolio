import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const Contacts: React.FC = () => {
    return (
        <footer id="contacts" className="py-24 border-t border-black/5 container mx-auto px-6 text-center">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-12 font-outfit text-black"
            >
                Let's <span className="text-black/50">Connect</span>
            </motion.h2>
            <div className="flex justify-center gap-6 mb-12">
                {[
                    { icon: Github, href: "https://github.com/iHoshiii" },
                    { icon: Linkedin, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Mail, href: "mailto:aldwinloreto690@gmail.com" }
                ].map((social, i) => (
                    <motion.a
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        href={social.href}
                        className="w-14 h-14 flex justify-center items-center bg-gray-50 border border-black/5 rounded-full text-black hover:bg-black hover:text-white hover:border-black hover:-translate-y-2 transition-all duration-300"
                    >
                        <social.icon size={24} />
                    </motion.a>
                ))}
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-500 text-sm font-medium"
            >
                © {new Date().getFullYear()} Aldwin Bernard V. Loreto.
            </motion.p>
        </footer>
    );
};

export default Contacts;
