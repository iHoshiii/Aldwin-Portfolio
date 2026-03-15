import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full py-6 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold font-outfit">
                    ALD<span className="text-black">WIN.</span>
                </div>
                <ul className="hidden md:flex gap-10">
                    {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
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
