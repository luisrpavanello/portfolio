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
      year: '2023 - 2025',
      title: 'Senior React Developer',
      organization: 'University of Pacific',
      description: 'Led projects utilizing the PERN stack (PostgreSQL, Express, ReactJS, Node.js), contributing to the development of robust and efficient web applications. Participated in a project integrated with Python, Django, and other technologies to meet university needs.',
      icon: <Briefcase size={20} />
    },
    {
      year: '2023 - 2023',
      title: 'Full Stack Developer',
      organization: 'Microverse',
      description: 'Designed, developed, and maintained software applications powering Microverse’s online learning platform, leveraging full stack technologies to enhance user experience.',
      icon: <Briefcase size={20} />
    },
    {
      year: '2020 - 2022',
      title: 'Full Stack Developer',
      organization: 'NexusTech Solutions',
      description: 'Specialized in the PERN stack and Python with Django, designing and implementing scalable web applications, optimizing PostgreSQL database performance, and collaborating with cross-functional teams to deliver high-quality solutions.',
      icon: <Briefcase size={20} />
    },
    {
      year: '2017 - 2019',
      title: 'Mid-Level Python Developer',
      organization: 'Revolut',
      description: 'Developed features for banking services, including currency exchange accounts and secure deposit systems, using Python and related technologies in a fintech environment.',
      icon: <Briefcase size={20} />
    },
    {
      year: '2015 - 2017',
      title: 'Junior Python Developer',
      organization: 'Lauzon',
      description: 'Built customized financial software for local companies and startups, utilizing Python and Golang to deliver tailored solutions.',
      icon: <Briefcase size={20} />
    }
  ];
  
  const education = [
    {
      year: '2009 - 2014',
      title: 'Bachelor of Engineering, Industrial Engineering',
      organization: 'University of Santa Catarina',
      description: 'Focused on engineering principles, with coursework in programming and software development, laying the foundation for a career in technology.',
      icon: <GraduationCap size={20} />
    }
  ];
  
  const certifications = [
    {
      year: '2020',
      title: 'DevOps Essentials Professional Certificate (DEPC)',
      organization: 'CertiProf',
      description: 'Gained expertise in DevOps practices, including CI/CD pipelines and infrastructure as code.',
      icon: <Award size={20} />
    },
    {
      year: '2020',
      title: 'Python Essentials 1',
      organization: 'Cisco',
      description: 'Mastered foundational Python programming concepts and techniques.',
      icon: <Award size={20} />
    },
    {
      year: '2020',
      title: 'Python Essentials 2',
      organization: 'Cisco',
      description: 'Advanced Python skills, focusing on data structures, APIs, and automation.',
      icon: <Award size={20} />
    },
    {
      year: '2020',
      title: 'Front End Development Libraries',
      organization: 'FreeCodeCamp',
      description: 'Developed proficiency in front-end technologies, including React and Bootstrap.',
      icon: <Award size={20} />
    },
    {
      year: '2020',
      title: 'Back End Development and APIs',
      organization: 'FreeCodeCamp',
      description: 'Learned to build and manage APIs and backend services using Node.js and Express.',
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
          href="/pdf/resume.pdf" 
          className="btn-primary flex items-center"
          download="resume.pdf"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;