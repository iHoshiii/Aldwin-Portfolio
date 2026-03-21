import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'Web Development' | 'Game Development'>('Web Development');

    const filteredProjects = projects.filter(project => project.category === activeTab);

    return (
        <section id="projects" className="py-32 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-black dark:text-white">
                    Top Projects <span className="text-black/50 dark:text-white/50"></span>
                </h2>
            </motion.div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-20 px-4">
                {(['Web Development', 'Game Development'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${activeTab === tab
                            ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-lg sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]'
                            : 'bg-white dark:bg-transparent text-black dark:text-white border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                            hidden: {},
                            exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                        }}
                        className={`grid gap-12 ${filteredProjects.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
