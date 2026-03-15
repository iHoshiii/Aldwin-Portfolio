import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const Contacts: React.FC = () => {
    return (
        <footer id="contacts" className="py-24 border-t border-black/5 container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-outfit text-black">
                Let's <span className="text-black/50">Connect</span>
            </h2>
            <div className="flex justify-center gap-6 mb-12">
                {[
                    { icon: Github, href: "https://github.com/iHoshiii" },
                    { icon: Linkedin, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Mail, href: "mailto:aldwinloreto690@gmail.com" }
                ].map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        className="w-14 h-14 flex justify-center items-center bg-gray-50 border border-black/5 rounded-full text-black hover:bg-black hover:text-white hover:border-black hover:-translate-y-2 transition-all duration-300"
                    >
                        <social.icon size={24} />
                    </a>
                ))}
            </div>
            <p className="text-gray-500 text-sm font-medium">
                © {new Date().getFullYear()} Aldwin Bernard V. Loreto.
            </p>
        </footer>
    );
};

export default Contacts;
