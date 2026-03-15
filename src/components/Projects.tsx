import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-32 container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">
                    Selected <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Work</span>
                </h2>
                <p className="text-gray-400 text-lg">A collection of projects built with precision and passion.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
