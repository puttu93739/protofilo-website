import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ 
  title, 
  company, 
  location, 
  period, 
  responsibilities 
}: { 
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}) => (
  <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <Briefcase className="w-6 h-6 text-blue-600" />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{company} • {location}</p>
        <p className="text-gray-500 text-sm">{period}</p>
        
        <ul className="mt-4 space-y-2 text-gray-600">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Project Engineer",
      company: "Wipro Technologies",
      location: "Bangalore, Karnataka",
      period: "Present",
      responsibilities: [
        "Working as a Python Automation Test Engineer",
        "Conducting penetration testing and security assessments as part of the cybersecurity team",
        "Implementing security best practices and vulnerability remediation",
        "Collaborating with cross-functional teams to ensure robust security measures"
      ]
    },
    {
      title: "Trainee",
      company: "BHARAT ELECTRONICS LIMITED",
      location: "Bangalore, Karnataka",
      period: "December 2022 - December 2023",
      responsibilities: [
        "Worked on Smart City project as a backend developer, developing software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes",
        "Achieved growth for the Organization using Development, Communication, and Problem-solving skills",
        "Improved website performance and speed through optimization techniques"
      ]
    }
  ];

  return (
    <section id="experience" className="pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
        
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;