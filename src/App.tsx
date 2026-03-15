import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Instagram, Twitter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Analytics SaaS Dashboard",
    category: "Web Application",
    description: "A high-performance analytics platform with real-time data visualization and deep insights.",
    image: "/images/project1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Minimalist E-Commerce",
    category: "Frontend Design",
    description: "A sleek, fashion-focused shopping experience with seamless transitions and minimalist aesthetics.",
    image: "/images/project2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Real Estate Portal",
    category: "Full Stack",
    description: "Modern property discovery platform with interactive maps and high-resolution imagery.",
    image: "/images/project3.png",
    link: "#"
  },
  {
    id: 4,
    title: "Finance Tracker App",
    category: "Mobile Design",
    description: "Intuitive personal finance management app featuring beautiful dark-mode charts.",
    image: "/images/project4.png",
    link: "#"
  },
  {
    id: 5,
    title: "Web3 Exchange",
    category: "Blockchain",
    description: "Next-gen crypto trading interface with advanced trading tools and neon accents.",
    image: "/images/project5.png",
    link: "#"
  },
  {
    id: 6,
    title: "AI Healthcare Hub",
    category: "Artificial Intelligence",
    description: "Trustworthy medical assistant platform utilizing AI for patient diagnostics and health tracking.",
    image: "/images/project6.png",
    link: "#"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full py-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold font-outfit">
            ALD<span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">WIN.</span>
          </div>
          <ul className="hidden md:flex gap-10">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>

        <h1 className="text-5xl md:text-8xl font-bold font-outfit leading-[1.1] mb-6 max-w-5xl animate-fade-in">
          Building <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Digital Experiences</span> That Define The Future.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed animate-fade-in [animation-delay:200ms]">
          I'm a Full Stack Developer & Designer specializing in creating clean, modern, and high-performance applications.
        </p>
        <div className="animate-fade-in [animation-delay:400ms]">
          <a href="#projects" className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-lg shadow-[0_10px_20px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(99,102,241,0.5)] hover:-translate-y-1 transition-all duration-300">
            View My Work
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">
            Selected <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-gray-400 text-lg">A collection of projects built with precision and passion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 flex flex-col animate-fade-in"
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
                <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3 font-outfit">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-400 transition-colors group/link">
                    View Project <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex gap-4 text-gray-500">
                    <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink size={20} className="hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 border-t border-white/10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-outfit">
          Let's <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
        </h2>
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Mail, href: "mailto:contact@example.com" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="w-14 h-14 flex justify-center items-center bg-white/5 border border-white/10 rounded-full hover:bg-indigo-500 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Aldwin. Built with React, TypeScript, Tailwind & Vercel.
        </p>
      </footer>
    </div>
  );
}

export default App;
