import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeMode/Modes';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const sections = ['home', 'credentials', 'projects', 'contacts'];

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full py-6 z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold font-outfit text-black dark:text-white">
                    Aldwin Loreto<span className="text-black/40 dark:text-white/40">'s Portfolio</span>
                </div>
                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex gap-4">
                        {[
                            { name: 'Home', href: '#home' },
                            { name: 'Credentials', href: '#credentials' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'Contacts', href: '#contacts' },
                            { name: 'Repository', href: 'https://github.com/iHoshiii', external: true }
                        ].map((item) => {
                            const isActive = activeSection === item.href.replace('#', '');

                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                        className={`text-sm font-bold border-2 border-black dark:border-white px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                            ? 'bg-black text-white dark:bg-white dark:text-black'
                                            : 'text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 border-2 border-black dark:border-white rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
