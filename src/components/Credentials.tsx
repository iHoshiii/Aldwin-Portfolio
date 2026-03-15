import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, BookOpen, X, FileText, FileBadge } from 'lucide-react';

const Credentials: React.FC = () => {
    const [isEduModalOpen, setIsEduModalOpen] = useState(false);
    const [isGoalsModalOpen, setIsGoalsModalOpen] = useState(false);

    return (
        <section id="credentials" className="py-32 bg-gray-50 dark:bg-white/5 border-y border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-16 font-outfit text-black dark:text-white text-center"
                    >
                        My Credentials<span className="text-black/50 dark:text-white/50"></span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education Card */}
                        <motion.button
                            onClick={() => setIsEduModalOpen(true)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-left w-full p-8 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] transition-all group cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4 text-black dark:text-white">
                                    <GraduationCap size={32} />
                                    <h3 className="text-2xl font-bold">Education</h3>
                                </div>
                                <span className="text-sm font-bold bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Details
                                </span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">Graduated</p>
                                    <h4 className="text-xl font-bold text-black dark:text-white">BS in Computer Science</h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">Nueva Vizcaya State University</p>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    My academic journey has shaped my logical thinking and provided a strong foundation in software engineering principles, algorithms, and system architecture.
                                </p>
                            </div>
                        </motion.button>

                        {/* Goals Card */}
                        <motion.button
                            onClick={() => setIsGoalsModalOpen(true)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-left w-full p-8 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] transition-all group cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4 text-black dark:text-white">
                                    <Award size={32} />
                                    <h3 className="text-2xl font-bold">Goals</h3>
                                </div>
                                <span className="text-sm font-bold bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Details
                                </span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">Future Focus</p>
                                    <h4 className="text-xl font-bold text-black dark:text-white">Cloud Engineer</h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">Continuous Learning</p>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Compiling expertise in cloud-native technologies and AI integration. I aim to create scalable solutions that bridge the gap between complex logic and human interaction.
                                </p>
                            </div>
                        </motion.button>
                    </div>

                    {/* Brief Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 flex flex-col items-center text-center space-y-4"
                    >
                        <BookOpen size={24} className="text-black/20 dark:text-white/20" />
                        <p className="text-gray-400 dark:text-gray-500 text-sm italic">
                            Building a portfolio of excellence, one project at a time.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Education Details Modal */}
            <AnimatePresence>
                {isEduModalOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsEduModalOpen(false)}
                            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white rounded-3xl shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden"
                        >
                            <div className="p-6 border-b border-black/5 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                                <div className="flex items-center gap-3 text-black dark:text-white">
                                    <GraduationCap size={24} />
                                    <h2 className="text-xl font-bold font-outfit">Education Details</h2>
                                </div>
                                <button
                                    onClick={() => setIsEduModalOpen(false)}
                                    className="p-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8 space-y-6">
                                <a
                                    href="#"
                                    className="flex items-center gap-4 p-6 border-2 border-black dark:border-white rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                                >
                                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-xl group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors">
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">View Grades</h3>
                                        <p className="text-sm opacity-70">Academic transcript and records</p>
                                    </div>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-4 p-6 border-2 border-black dark:border-white rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                                >
                                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-xl group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors">
                                        <FileBadge size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Journey</h3>
                                        <p className="text-sm opacity-70">Photos of my college journey</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Goals Details Modal */}
            <AnimatePresence>
                {isGoalsModalOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsGoalsModalOpen(false)}
                            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white rounded-3xl shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden"
                        >
                            <div className="p-6 border-b border-black/5 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                                <div className="flex items-center gap-3 text-black dark:text-white">
                                    <Award size={24} />
                                    <h2 className="text-xl font-bold font-outfit">Certifications</h2>
                                </div>
                                <button
                                    onClick={() => setIsGoalsModalOpen(false)}
                                    className="p-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8 space-y-6">
                                <a
                                    href="#"
                                    className="flex items-center gap-4 p-6 border-2 border-black dark:border-white rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                                >
                                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-xl group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors">
                                        <FileBadge size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Certificates</h3>
                                        <p className="text-sm opacity-70">Physical awards and certifications</p>
                                    </div>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-4 p-6 border-2 border-black dark:border-white rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                                >
                                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-xl group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors">
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">E-certificates</h3>
                                        <p className="text-sm opacity-70">Digital credentials and courses</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Credentials;
