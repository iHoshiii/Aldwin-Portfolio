import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeMode/Modes';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            setIsMenuOpen(false);
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

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Credentials', href: '#credentials' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contacts', href: '#contacts' },
        { name: 'Repository', href: 'https://github.com/iHoshiii', external: true }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full py-5 z-[200] bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-all duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold font-outfit text-black dark:text-white">
                    Aldwin Loreto<span className="text-black/40 dark:text-white/40 hidden sm:inline">'s Portfolio</span>
                </div>

                <div className="flex items-center gap-3">
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-3">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '');
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                        className={`text-xs font-bold border-2 border-black dark:border-white px-5 py-2.5 rounded-full transition-all duration-300 ${isActive
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
                        className="p-2.5 border-2 border-black dark:border-white rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2.5 border-2 border-black dark:border-white rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                        aria-label="Toggle mobile menu"
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 top-[76px] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-lg lg:hidden z-[150]"
                        >
                            <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pb-20">
                                {navItems.map((item, idx) => {
                                    const isActive = activeSection === item.href.replace('#', '');
                                    return (
                                        <motion.a
                                            key={item.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            href={item.href}
                                            onClick={(e) => scrollToSection(e, item.href)}
                                            target={item.external ? "_blank" : undefined}
                                            rel={item.external ? "noopener noreferrer" : undefined}
                                            className={`text-2xl font-bold font-outfit border-2 border-black dark:border-white w-full max-w-xs py-4 rounded-3xl text-center transition-all ${isActive
                                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                                : 'text-black dark:text-white'
                                                }`}
                                        >
                                            {item.name}
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
