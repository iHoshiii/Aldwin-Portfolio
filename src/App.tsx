import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Header';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;