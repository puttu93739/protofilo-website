import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 glass-card p-8 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
            Puttaraj Hanagalmath
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Python Automation Developer | Information Security Analyst | Project Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all hover-lift"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="glass-card rounded-xl shadow-lg p-8 hover-lift">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Motivated IT professional currently working as a Project Engineer at Wipro Technologies, specializing in Python development and information security. With a strong foundation in analytical and problem-solving techniques, I combine my expertise in backend development with security analysis skills to create secure and efficient software solutions. I am passionate about implementing robust security measures while delivering high-performance applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;