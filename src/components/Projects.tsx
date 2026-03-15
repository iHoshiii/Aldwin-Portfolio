import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-32 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-black dark:text-white">
                    Selected <span className="text-black/50 dark:text-white/50">Work</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">A collection of projects built with precision and passion.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
