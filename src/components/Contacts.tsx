import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const Contacts: React.FC = () => {
    return (
        <footer id="contacts" className="py-24 border-t border-black/5 dark:border-white/5 container mx-auto px-6 text-center">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-12 font-outfit text-black dark:text-white"
            >
                Let's Connect<span className="text-black/50 dark:text-white/50"></span>
            </motion.h2>
            <div className="flex justify-center gap-6 mb-12">
                {[
                    { icon: Github, href: "https://github.com/iHoshiii" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/aldwin-loreto-16bb2430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                    { icon: Facebook, href: "https://www.facebook.com/aldwin.loreto" },
                    { icon: Instagram, href: "https://www.instagram.com/hoshi.iee/" },
                    { icon: Mail, href: "https://mail.google.com/mail/u/0/#sent?compose=DmwnWsdMVpLlqtRCrfprlhHrngmLKwDBwRbWQkRgVkSJFgGklmnNvwdQvmggQXQSTdZQlKCkgKqQ" }
                ].map((social, i) => (
                    <motion.a
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        href={social.href}
                        className="w-14 h-14 flex justify-center items-center bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white hover:-translate-y-2 transition-all duration-300"
                    >
                        <social.icon size={24} />
                    </motion.a>
                ))}
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-500 dark:text-gray-400 text-sm font-medium"
            >
                © {new Date().getFullYear()} Aldwin Bernard V. Loreto.
            </motion.p>
        </footer>
    );
};

export default Contacts;
