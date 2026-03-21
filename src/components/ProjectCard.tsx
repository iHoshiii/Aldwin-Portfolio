import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, X, Play, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="group bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
            >
                <div className="h-60 overflow-hidden bg-gray-200 dark:bg-zinc-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-3 font-outfit text-black dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">{project.description}</p>

                    {project.tech && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-[10px] font-bold text-black/60 dark:text-white/60 uppercase">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-auto flex justify-between items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group/link"
                        >
                            View Project <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex gap-4 text-gray-500 dark:text-gray-400">
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors" title={project.secondaryLinkLabel || 'Repository'}>
                                    {project.secondaryLinkLabel === 'Documentation' || project.secondaryLinkLabel === 'Game Paper' ? <FileText size={20} /> : <Github size={20} />}
                                </a>
                            )}
                            {project.link !== "#" && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors" title={project.primaryLinkLabel || 'Website Link'}>
                                    {project.primaryLinkLabel === 'Game Video' ? <Play size={20} /> : <ExternalLink size={20} />}
                                </a>
                            )}
                            {project.tertiaryLink && (
                                <a href={project.tertiaryLink} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors" title={project.tertiaryLinkLabel || 'Documentation'}>
                                    {project.tertiaryLinkLabel === 'Documentation' || project.tertiaryLinkLabel === 'Game Paper' ? <FileText size={20} /> : <ExternalLink size={20} />}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 lg:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-white/80 dark:bg-black/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            className="relative w-full max-w-6xl bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white rounded-[2rem] shadow-2xl sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] sm:dark:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-black/5 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                                <div>
                                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-1 block">{project.category}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold font-outfit text-black dark:text-white">{project.title}</h2>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-110 transition-transform"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-5 sm:p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16">

                                    {/* Left Column: Description & Gallery */}
                                    <div className="lg:col-span-8 space-y-12">
                                        <div className="space-y-6">
                                            <h3 className="text-xl sm:text-2xl font-bold border-b-2 border-black dark:border-white pb-3 inline-block">Description</h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-xl font-medium">
                                                {project.fullDescription || project.description}
                                            </p>
                                        </div>

                                        {/* Grid Gallery */}
                                        {project.gallery && project.gallery.length > 0 && (
                                            <div className="space-y-6 sm:space-y-8">
                                                <h3 className="text-xl sm:text-2xl font-bold border-b-2 border-black dark:border-white pb-3 inline-block">Sample Images</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {project.gallery.map((img, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                            className="rounded-2xl overflow-hidden border-2 border-black/5 dark:border-white/10 group/img shadow-md hover:shadow-xl transition-all duration-500"
                                                        >
                                                            <img
                                                                src={img}
                                                                alt={`${project.title} snapshot ${idx + 1}`}
                                                                className="w-full h-auto object-cover group-hover/img:scale-105 transition-transform duration-700"
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Column: Links & Tech */}
                                    <div className="lg:col-span-4 space-y-10 lg:space-y-12">
                                        <div className="lg:sticky lg:top-0 space-y-8 lg:space-y-10">
                                            <div className="space-y-6">
                                                <h3 className="text-xl sm:text-2xl font-bold border-b-2 border-black dark:border-white pb-3 inline-block">Resources</h3>
                                                <div className="flex flex-col gap-4">
                                                    {project.githubLink && (
                                                        <a
                                                            href={project.githubLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-between group/btn px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:-translate-y-1 transition-all duration-300"
                                                        >
                                                            <span className="flex items-center gap-3">
                                                                {project.secondaryLinkLabel === 'Documentation' || project.secondaryLinkLabel === 'Game Paper' ? <FileText size={22} /> : <Github size={22} />}
                                                                {project.secondaryLinkLabel || 'Repository'}
                                                            </span>
                                                            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                                        </a>
                                                    )}
                                                    {project.link !== "#" && (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-between group/btn px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-2xl font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                                                        >
                                                            <span className="flex items-center gap-3">
                                                                {project.primaryLinkLabel === 'Game Video' ? <Play size={22} /> : <ExternalLink size={22} />}
                                                                {project.primaryLinkLabel || 'Website Link'}
                                                            </span>
                                                            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                                        </a>
                                                    )}
                                                    {project.tertiaryLink && (
                                                        <a
                                                            href={project.tertiaryLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-between group/btn px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-2xl font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                                                        >
                                                            <span className="flex items-center gap-3">
                                                                {project.tertiaryLinkLabel === 'Documentation' || project.tertiaryLinkLabel === 'Game Paper' ? <FileText size={22} /> : <ExternalLink size={22} />}
                                                                {project.tertiaryLinkLabel || 'Documentation'}
                                                            </span>
                                                            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <h3 className="text-xl sm:text-2xl font-bold border-b-2 border-black dark:border-white pb-3 inline-block">Built With</h3>
                                                <div className="flex flex-wrap gap-3">
                                                    {project.tech?.map((t) => (
                                                        <span key={t} className="px-5 py-2 bg-gray-100 dark:bg-white/5 rounded-xl text-sm font-bold text-black dark:text-white border border-black/5 dark:border-white/5">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
