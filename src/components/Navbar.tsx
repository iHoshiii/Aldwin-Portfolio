import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'credentials', 'projects', 'contacts'];

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the screen
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
        <nav className="fixed top-0 left-0 w-full py-6 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold font-outfit text-black">
                    Aldwin Loreto<span className="text-black/40">'s Portfolio</span>
                </div>
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
                                    className={`text-sm font-bold border-2 border-black px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                            ? 'bg-black text-white'
                                            : 'text-black hover:bg-black hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
