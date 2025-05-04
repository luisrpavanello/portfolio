import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, title, organization, description, icon 
}) => {
  return (
    <div className="flex mb-12 opacity-0 animate-on-scroll">
      <div className="mr-4 mt-1">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-medium-gray text-silver">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-dark-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <span className="inline-block px-3 py-1 rounded-full bg-medium-gray text-silver text-sm mb-3">
            {year}
          </span>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <h4 className="text-silver mb-3">{organization}</h4>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  const experience = [
    {
      year: '2021 - Present',
      title: 'Senior Frontend Developer',
      organization: 'Tech Solutions Inc.',
      description: 'Led development of multiple React.js applications, improving user engagement by 35% and reducing loading times by 40% through performance optimizations.',
      icon: <Briefcase size={20} />
    },
    {
      year: '2018 - 2021',
      title: 'Frontend Developer',
      organization: 'Digital Innovations',
      description: 'Developed responsive web applications using React.js and implemented state management with Redux. Collaborated with UX designers to create intuitive interfaces.',
      icon: <Briefcase size={20} />
    },
    {
      year: '2016 - 2018',
      title: 'Web Developer',
      organization: 'Creative Agency',
      description: 'Built and maintained websites for various clients using HTML, CSS, JavaScript, and jQuery. Implemented responsive design principles for mobile-first experiences.',
      icon: <Briefcase size={20} />
    }
  ];
  
  const education = [
    {
      year: '2014 - 2016',
      title: 'Master in Computer Science',
      organization: 'Tech University',
      description: 'Specialized in web technologies and user interface design with focus on modern JavaScript frameworks and accessibility standards.',
      icon: <GraduationCap size={20} />
    },
    {
      year: '2010 - 2014',
      title: 'Bachelor in Computer Science',
      organization: 'State University',
      description: 'Core curriculum in programming fundamentals, data structures, algorithms, and software engineering principles.',
      icon: <GraduationCap size={20} />
    }
  ];
  
  const certifications = [
    {
      year: '2022',
      title: 'Advanced React and Redux',
      organization: 'Udemy',
      description: 'Deep dive into advanced React patterns, Redux middleware, and performance optimization techniques.',
      icon: <Award size={20} />
    },
    {
      year: '2020',
      title: 'UI/UX Design Fundamentals',
      organization: 'Design Academy',
      description: 'Comprehensive course on user experience principles, interface design, and prototyping techniques.',
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="resume" className="section-container bg-black/60 opacity-0">
      <SectionTitle 
        title="Resume" 
        subtitle="My education and professional experience journey"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center opacity-0 animate-on-scroll">
            <Briefcase className="mr-2 text-silver" size={24} />
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                organization={item.organization}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center opacity-0 animate-on-scroll">
            <GraduationCap className="mr-2 text-silver" size={24} />
            Education & Certifications
          </h3>
          
          <div>
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                organization={item.organization}
                description={item.description}
                icon={item.icon}
              />
            ))}
            
            {certifications.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                organization={item.organization}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-12 opacity-0 animate-on-scroll">
        <a 
          href="#" 
          className="btn-primary flex items-center"
          onClick={(e) => e.preventDefault()}
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;