import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Home: React.FC = () => {
    const [isAboutOpen, setIsAboutOpen] = React.useState(false);

    const categories = [
        {
            title: 'Web Development',
            skills: ['React', 'Next.js', 'Node.js', 'Supabase', 'Tailwind CSS']
        },
        {
            title: 'Game Development',
            skills: ['Godot Engine', 'Unity Engine', 'Blender', 'Photoshop']
        },
        {
            title: 'Languages',
            skills: ['Python', 'C#', 'C++', 'Java', 'JavaScript', 'Kotlin', 'GDScript', 'TypeScript']
        }
    ];

    return (
        <header id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden transition-colors duration-300">
            {/* Decorative Background Glow - Minimal Dark */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 dark:bg-white/5 rounded-full blur-[120px] -z-10"></div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl font-bold font-outfit leading-[1.1] mb-6 max-w-5xl text-black dark:text-white"
            >
                Good Day<span className="text-black/50 dark:text-white/50"></span> Everyone!
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed"
            >
                Hi, I am Aldwin Bernard V. Loreto, a Computer Science student at Nueva Vizcaya State University. I spend most of my time building websites and making games, trying to create things that are actually useful and fun to use.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center gap-10"
            >
                <button
                    onClick={() => setIsAboutOpen(true)}
                    className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                    More About me
                </button>

                {/* Quick Stats Bar */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4 text-black dark:text-white">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-bold font-outfit">2+</span>
                        <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-bold">Years Coding</span>
                    </div>
                    <div className="w-px h-12 bg-black/10 dark:bg-white/10 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-bold font-outfit">10+</span>
                        <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-bold">Projects Done</span>
                    </div>
                    <div className="w-px h-12 bg-black/10 dark:bg-white/10 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-bold font-outfit">6+</span>
                        <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-bold">Tech Stack</span>
                    </div>
                </div>
            </motion.div>

            {/* About Me Modal */}
            <AnimatePresence>
                {isAboutOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsAboutOpen(false)}
                            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white rounded-3xl shadow-2xl sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] sm:dark:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-black/5 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                                <h2 className="text-2xl font-bold font-outfit text-black dark:text-white">About Aldwin</h2>
                                <button
                                    onClick={() => setIsAboutOpen(false)}
                                    className="p-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full transition-colors"
                                >
                                    <X size={24} className="text-black dark:text-white hover:text-white dark:hover:text-black" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto space-y-12">
                                {/* Philosophy Section */}
                                <section className="text-center px-4">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                                        "I believe in the power of simplicity. My approach to design and development is rooted in the 'Less is More',
                                        focusing on high-contrast aesthetics and greater user experience."
                                    </p>
                                </section>

                                {/* Skills & Meta Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-center px-4">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold border-b-2 border-black/5 dark:border-white/5 pb-2 inline-block text-black dark:text-white">Web Development</h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {categories[0].skills.map(skill => (
                                                <span key={skill} className="px-4 py-1.5 border border-black/10 dark:border-white/10 rounded-full text-xs font-semibold text-black dark:text-white bg-white dark:bg-white/5">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold border-b-2 border-black/5 dark:border-white/5 pb-2 inline-block text-black dark:text-white">Game Development</h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {categories[1].skills.map(skill => (
                                                <span key={skill} className="px-4 py-1.5 border border-black/10 dark:border-white/10 rounded-full text-xs font-semibold text-black dark:text-white bg-white dark:bg-white/5">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold border-b-2 border-black/5 dark:border-white/5 pb-2 inline-block text-black dark:text-white">Languages</h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {categories[2].skills.map(skill => (
                                                <span key={skill} className="px-4 py-1.5 border border-black/10 dark:border-white/10 rounded-full text-xs font-semibold text-black dark:text-white bg-white dark:bg-white/5">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold border-b-2 border-black/5 dark:border-white/5 pb-2 inline-block text-black dark:text-white">Interests</h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {['Open Source', 'UI/UX Design', 'AI', 'Game Jams', 'Coding'].map((item) => (
                                                <span key={item} className="px-4 py-1.5 border border-black/10 dark:border-white/10 rounded-full text-xs font-semibold text-black dark:text-white bg-white dark:bg-white/5">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Home;
