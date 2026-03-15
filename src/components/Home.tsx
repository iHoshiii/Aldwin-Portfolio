import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Home: React.FC = () => {
    const [isAboutOpen, setIsAboutOpen] = React.useState(false);

    return (
        <header id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
            {/* Decorative Background Glow - Minimal Dark */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px] -z-10"></div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl font-bold font-outfit leading-[1.1] mb-6 max-w-5xl"
            >
                Good <span className="text-black">Day</span> Everyone!
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
            >
                Hi, I am Aldwin Bernard V. Loreto, a Computer Science student at Nueva Vizcaya State University. I spend most of my time building websites and making games, trying to create things that are actually useful and fun to use.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <button
                    onClick={() => setIsAboutOpen(true)}
                    className="px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                    More About me
                </button>
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
                            className="absolute inset-0 bg-white/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white border-2 border-black rounded-3xl shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-black/5 flex justify-between items-center bg-gray-50">
                                <h2 className="text-2xl font-bold font-outfit text-black">About Aldwin</h2>
                                <button
                                    onClick={() => setIsAboutOpen(false)}
                                    className="p-2 hover:bg-black hover:text-white rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto space-y-8">
                                <section className="text-center">
                                    <div className="mb-4 text-black">
                                        <h3 className="text-xl font-bold">Education</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Currently pursuing a Bachelor of Science in Computer Science at Nueva Vizcaya State University.
                                        My academic journey has shaped my logical thinking and provided a strong foundation in software engineering principles.
                                    </p>
                                </section>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                                    <section>
                                        <div className="mb-4 text-black">
                                            <h3 className="text-xl font-bold">Web Development</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            I am passionate about creating modern web applications using React, TypeScript, and Tailwind CSS.
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mb-4 text-black">
                                            <h3 className="text-xl font-bold">Game Development</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            When I'm not coding for the web, I'm diving into game mechanics and interactive experiences, exploring the cross-section of art and logic.
                                        </p>
                                    </section>
                                </div>

                                <section className="p-6 bg-gray-50 rounded-2xl border border-black/5 text-center">
                                    <div className="mb-4 text-black">
                                        <h3 className="text-xl font-bold">Interests</h3>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {['Open Source', 'UI/UX Design', 'AI', 'Game Jams', 'Coding'].map((item) => (
                                            <span key={item} className="px-4 py-1.5 border border-black/10 rounded-full text-xs font-semibold text-black bg-white">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Home;
