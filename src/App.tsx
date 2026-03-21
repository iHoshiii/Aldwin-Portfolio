import React from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './components/Home';
import Credentials from './components/Credentials';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <Home />
      <Credentials />
      <Projects />
      <Contacts />
      <Chatbot />
    </div>
  );
}

export default App;