import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Credentials: React.FC = () => {
    return (
        <section id="credentials" className="py-32 bg-gray-50 border-y border-black/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-16 font-outfit text-black text-center"
                    >
                        My <span className="text-black/50">Credentials</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="p-8 bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6 text-black">
                                <GraduationCap size={32} />
                                <h3 className="text-2xl font-bold">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-bold text-black/40 uppercase tracking-widest">Graduated</p>
                                    <h4 className="text-xl font-bold text-black">BS in Computer Science</h4>
                                    <p className="text-gray-600 font-medium">Nueva Vizcaya State University</p>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    My academic journey has shaped my logical thinking and provided a strong foundation in software engineering principles, algorithms, and system architecture.
                                </p>
                            </div>
                        </motion.div>

                        {/* Certifications or Other (Optional placeholder) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-8 bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6 text-black">
                                <Award size={32} />
                                <h3 className="text-2xl font-bold">Goals</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-bold text-black/40 uppercase tracking-widest">Future Focus</p>
                                    <h4 className="text-xl font-bold text-black">Full-Stack Expertise</h4>
                                    <p className="text-gray-600 font-medium">Continuous Learning</p>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Compiling expertise in cloud-native technologies and AI integration. I aim to create scalable solutions that bridge the gap between complex logic and human interaction.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Brief Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 flex flex-col items-center text-center space-y-4"
                    >
                        <BookOpen size={24} className="text-black/20" />
                        <p className="text-gray-400 text-sm italic">
                            Building a portfolio of excellence, one project at a time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Credentials;
