import React from 'react';
import { Code, Briefcase, GraduationCap, User } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Mobile Development', level: 80 },
    { name: 'DevOps', level: 70 }
  ];
  
  return (
    <section id="about" className="section-container opacity-0">
      <SectionTitle 
        title="About Me" 
        subtitle="Here you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="opacity-0 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <User className="mr-2 text-silver" size={24} />
            Get to know me!
          </h3>
          <div className="space-y-4 text-white/80">
            <p>
              I'm a <span className="text-silver font-medium">passionate Frontend Developer</span> with experience in creating 
              intuitive and responsive web applications that deliver exceptional user experiences.
            </p>
            <p>
              With a strong foundation in modern frontend technologies like <span className="text-silver font-medium">React, 
              TypeScript, and various CSS frameworks</span>, I specialize in building user-focused 
              interfaces that are both functional and aesthetically pleasing.
            </p>
            <p>
              In addition to my technical skills, I bring a creative mindset, strong problem-solving abilities, 
              and excellent communication to every project I work on. I'm constantly exploring new technologies 
              and approaches to enhance my craft.
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
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Git'].map((tech, index) => (
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