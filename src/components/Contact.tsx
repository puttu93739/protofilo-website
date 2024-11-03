import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactItem = ({ 
  icon: Icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string;
  href: string;
}) => (
  <a
    href={href}
    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
    <Icon className="w-6 h-6 text-blue-600" />
    <div className="ml-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactItem
            icon={Mail}
            label="Email"
            value="puttarajmh04@gmail.com"
            href="mailto:puttarajmh04@gmail.com"
          />
          
          <ContactItem
            icon={Phone}
            label="Phone"
            value="+91 9739172474"
            href="tel:+919739172474"
          />
          
          <ContactItem
            icon={MapPin}
            label="Location"
            value="Bangalore, Karnataka"
            href="https://maps.google.com/?q=Bangalore,Karnataka"
          />
          
          <ContactItem
            icon={Github}
            label="GitHub"
            value="github.com/puttu93739"
            href="https://github.com/puttu93739"
          />
          
          <ContactItem
            icon={Linkedin}
            label="LinkedIn"
            value="Puttaraj M H"
            href="https://www.linkedin.com/in/puttaraj-m-h-005855218"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;