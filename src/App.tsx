import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;