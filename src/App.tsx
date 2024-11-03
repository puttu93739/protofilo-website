import React from 'react';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-pattern">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-900 bg-opacity-95 backdrop-blur-lg text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/puttu93739" className="hover:text-blue-400 transition-colors hover-lift">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/puttaraj-m-h-005855218" className="hover:text-blue-400 transition-colors hover-lift">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:puttarajmh04@gmail.com" className="hover:text-blue-400 transition-colors hover-lift">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+919739172474" className="hover:text-blue-400 transition-colors hover-lift">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Puttaraj Hanagalmath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;