import React from 'react';

const Navbar: React.FC = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
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
                        { name: 'Background', href: '#background' },
                        { name: 'Projects', href: '#projects' },
                        { name: 'Contacts', href: '#contacts' },
                        { name: 'Repository', href: 'https://github.com/iHoshiii', external: true }
                    ].map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                className="text-sm font-bold text-black border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
