import React from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './components/Home';
import Background from './components/Background';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Home />
      <Background />
      <Projects />
      <Contacts />
      <Chatbot />
    </div>
  );
}

export default App;