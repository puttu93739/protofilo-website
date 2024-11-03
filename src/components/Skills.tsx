import React from 'react';
import { Code, Database, Terminal, Layout, Server, Brain } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: React.ElementType }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 mr-2" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "Data Structures"]
    },
    {
      title: "Web Technologies",
      icon: Layout,
      skills: ["React", "HTML", "CSS"]
    },
    {
      title: "Backend Technologies",
      icon: Server,
      skills: ["Spring Boot", "Django", "Flask"]
    },
    {
      title: "Database & OS",
      icon: Database,
      skills: ["MongoDB", "SQL", "Linux", "Ubuntu"]
    },
    {
      title: "Data Science",
      icon: Brain,
      skills: ["Machine Learning", "NumPy", "Pandas", "Keras", "Matlab", "EDA"]
    },
    {
      title: "Tools",
      icon: Terminal,
      skills: ["Microsoft Excel", "Microsoft PowerPoint", "PowerBI"]
    }
  ];

  return (
    <section id="skills" className="pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;