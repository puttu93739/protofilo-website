import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationCard = ({ 
  institution, 
  degree, 
  location, 
  year, 
  grade 
}: { 
  institution: string; 
  degree: string; 
  location: string; 
  year: string;
  grade?: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
    <div className="flex items-start">
      <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-900">{institution}</h3>
        <p className="text-gray-700">{degree}</p>
        <p className="text-gray-600">{location}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-500">{year}</p>
          {grade && <p className="text-blue-600 font-medium">{grade}</p>}
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        
        <EducationCard
          institution="Sambhram Institute of Technology"
          degree="Computer Science and Engineering"
          location="Bangalore, Karnataka"
          year="2022"
          grade="CGPA: 7.8"
        />
        
        <EducationCard
          institution="Govt PU College"
          degree="Science"
          location="Gadag, Karnataka"
          year="2018"
        />
        
        <EducationCard
          institution="Shri Parshwanath English Medium High School"
          degree="Secondary Education Examination Board"
          location="Gadag, Karnataka"
          year="2016"
        />

        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Advanced Django Rest Framework at Coursera</li>
            <li>• Data Science Certification at Ekeeda</li>
            <li>• Web Development Certification</li>
            <li>• Machine Learning in Python</li>
            <li>• Spring Boot at Udemy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;