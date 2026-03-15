import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
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
        <section id="background" className="py-32 bg-gray-50 border-y border-black/5">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-12 font-outfit text-black text-center"
                    >
                        My Background
                    </motion.h2>

                    <div className="space-y-20">
                        {/* Philosophy Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
                                I believe in the power of simplicity. My approach to design and development is rooted in the "Less is More",
                                focusing on high-contrast aesthetics and greater user experience.
                            </p>
                        </motion.div>

                        {/* All Skills Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {categories.map((category, catIndex) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.1 }}
                                    className="flex flex-col items-center"
                                >
                                    <h3 className="text-xl font-bold mb-6 text-black border-b-2 border-black pb-2 px-4">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-4 py-2 border-2 border-black rounded-xl text-xs font-bold text-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Background;
