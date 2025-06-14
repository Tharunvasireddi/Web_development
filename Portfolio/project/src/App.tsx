import React from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Header />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;