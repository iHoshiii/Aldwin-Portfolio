import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full py-6 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold font-outfit text-black">
                    Aldwin Loreto<span className="text-black/40">'s Portfolio</span>
                </div>
                <ul className="hidden md:flex gap-10">
                    {['Home', 'Background', 'Projects', 'Contacts'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-bold text-black border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
