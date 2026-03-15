import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <div
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="h-60 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="p-8 flex-grow flex flex-col">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3 font-outfit">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                <div className="mt-auto flex justify-between items-center">
                    <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors group/link">
                        View Project <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <div className="flex gap-4 text-gray-500">
                        <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
                        <ExternalLink size={20} className="hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
