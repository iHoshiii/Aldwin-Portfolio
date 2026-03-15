import React from 'react';

const Hero: React.FC = () => {
    return (
        <header id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
            {/* Decorative Background Glow - Minimal Dark */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px] -z-10"></div>

            <h1 className="text-5xl md:text-8xl font-bold font-outfit leading-[1.1] mb-6 max-w-5xl animate-fade-in">
                Building <span className="text-black">Digital Experiences</span> That Define The Future.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed animate-fade-in [animation-delay:200ms]">
                I'm a Full Stack Developer & Designer specializing in creating clean, modern, and high-performance applications.
            </p>
            <div className="animate-fade-in [animation-delay:400ms]">
                <a href="#projects" className="px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                    View My Work
                </a>
            </div>
        </header>
    );
};

export default Hero;
