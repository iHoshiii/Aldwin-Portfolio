import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
    return (
        <section id="background" className="py-32 bg-gray-50 border-y border-black/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-12 font-outfit text-black"
                    >
                        My <span className="text-black/50">Background</span>
                    </motion.h2>

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-black"></span>
                                Philosophy
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                I believe in the power of simplicity. My approach to design and development is rooted in the "Less is More" philosophy,
                                focusing on high-contrast aesthetics and intuitive user experiences. I specialize in building robust full-stack applications
                                that are as fast as they are beautiful.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-xl font-bold mb-6">Expertise</h3>
                                <ul className="space-y-3">
                                    {['Full Stack Development', 'UI/UX Design', 'AI Integration', 'Cloud Architecture'].map((skill) => (
                                        <li key={skill} className="flex items-center gap-3 text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-xl font-bold mb-6">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node.js', 'PostgreSQL', 'Vercel', 'Gemini AI'].map((tech) => (
                                        <span key={tech} className="px-4 py-2 border border-black/10 rounded-full text-xs font-medium text-black bg-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Background;
