import React from 'react';
import { Bus, Music, ShoppingCart, Eye, Code } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  icon: Icon,
  current = false
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  current?: boolean;
}) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${current ? 'border-2 border-blue-500' : ''}`}>
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
      <div className="ml-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {current && (
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
            Current Project
          </span>
        )}
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Wagotail Open Source Project",
      description: "Currently contributing to an open source project focused on enhancing web application development and security implementations.",
      icon: Code,
      current: true
    },
    {
      title: "Bus Management System",
      description: "Designed a system for generating unique tickets and seat confirmation. Users can get their seats prior to travel through this efficient booking system.",
      icon: Bus
    },
    {
      title: "Music Player Application",
      description: "Developed an Android-based music player application supporting mainstream file formats, designed to enhance user experience in music playback.",
      icon: Music
    },
    {
      title: "E-commerce Website",
      description: "Created an online book sales platform with a comprehensive catalog system, allowing users to browse and purchase books efficiently.",
      icon: ShoppingCart
    },
    {
      title: "Diabetic Retinopathy Detection",
      description: "Implemented Local Binary Pattern analysis to differentiate between pathological and healthy fundus images, focusing on diabetic retinopathy and age-related macular degeneration.",
      icon: Eye
    }
  ];

  return (
    <section id="projects" className="pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              icon={project.icon}
              current={project.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;