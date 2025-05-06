import React from 'react';
import { Code, Briefcase, GraduationCap, User } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 }, // Advanced
    { name: 'Python', level: 90 }, // Advanced
    { name: 'ReactJS', level: 85 }, // Competent
    { name: 'NodeJS', level: 85 }, // Competent
    { name: 'PostgreSQL', level: 85 }, // Competent
    { name: 'Django', level: 85 }, // Competent
    { name: 'HTML/CSS', level: 90 }, // Advanced
    { name: 'Golang', level: 80 }, // Competent
    { name: 'Ruby', level: 75 }, // Intermediate
    { name: 'MongoDB', level: 75 }, // Intermediate
  ];
  
  return (
    <section id="about" className="section-container opacity-0">
      <SectionTitle 
        title="About Me" 
        subtitle="Here you'll find more information about me, what I do, and my current skills in programming and technology"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="opacity-0 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <User className="mr-2 text-silver" size={24} />
            Get to know me!
          </h3>
          <div className="space-y-4 text-white/80">
            <p>
              I'm a <span className="text-silver font-medium">Full Stack Developer</span> with over 7 years of experience, 
              specializing in creating robust and scalable web applications using modern frameworks.
            </p>
            <p>
              With expertise in <span className="text-silver font-medium">JavaScript, Python, ReactJS, NodeJS, PostgreSQL, 
              and Django</span>, I build efficient solutions that meet client needs. My experience spans the PERN stack, 
              Python-based backends, and agile development environments.
            </p>
            <p>
              I bring a strong focus on innovation, problem-solving, and collaboration to every project. Fluent in English, 
              Spanish, and Portuguese, I thrive in diverse teams and am always eager to learn new technologies.
            </p>
            <p>
              I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity 
              that matches my skills and experience, don't hesitate to contact me.
            </p>
            <a href="#contact" className="btn-primary mt-6">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="opacity-0 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Code className="mr-2 text-silver" size={24} />
            My Skills
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="opacity-0 animate-on-scroll">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-silver">{skill.level}%</span>
                </div>
                <div className="w-full bg-medium-gray rounded-full h-2.5">
                  <div 
                    className="silver-gradient h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 opacity-0 animate-on-scroll">
            {['JavaScript', 'Python', 'ReactJS', 'NodeJS', 'PostgreSQL', 'Django', 'HTML/CSS', 'Golang', 'Ruby', 'MongoDB'].map((tech, index) => (
              <div key={index} className="bg-dark-gray px-4 py-3 rounded-md text-center hover:bg-medium-gray transition-colors duration-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;