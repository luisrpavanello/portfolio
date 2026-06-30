import React from 'react';
import { Code, Languages, User } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'AngularJS', 'Vue.js', 'React Native', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      items: ['PHP', 'Laravel', 'Python', 'Django', 'Node.js', 'Express', 'Flask', 'REST APIs', 'JWT']
    },
    {
      title: 'Data & Delivery',
      items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB', 'Docker', 'Git', 'PHPUnit', 'PHPStan', 'CI/CD basics', 'Agile collaboration', 'DevOps fundamentals']
    },
    {
      title: 'Additional Technologies',
      items: ['Livewire', 'Blade', 'Bootstrap', 'jQuery', 'DataTables', 'Chart.js', 'Svelte', 'Ruby', 'Mongoose']
    }
  ];

  const workingStyle = [
    'Translate business requirements into dependable product features',
    'Design maintainable frontend and backend flows instead of one-off fixes',
    'Communicate clearly with distributed teams in English, Spanish, and Portuguese'
  ];
  
  return (
    <section id="about" className="section-container opacity-0">
      <SectionTitle 
        title="About" 
        subtitle="A full stack developer with a practical engineering mindset and experience across product, operations, and internal business systems."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="opacity-0 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <User className="mr-2 text-silver" size={24} />
            What I bring
          </h3>
          <div className="space-y-4 text-white/80">
            <p>
              I'm a <span className="text-silver font-medium">Full Stack Developer</span> with over 9 years of experience building
              fintech platforms, web applications, university systems, learning platforms, and business management workflows.
            </p>
            <p>
              My core stack is <span className="text-silver font-medium">React, Next.js, PHP, Laravel, Python, Django, Node.js, PostgreSQL, and MySQL</span>.
              I enjoy work where the frontend, backend, and data model need to fit together cleanly.
            </p>
            <p>
              My current fintech work includes high-availability APIs, merchant administration tools, complex database
              architecture, and integrations with more than 70 external payment and telecom providers.
            </p>
            <p>
              I care about clarity: clear user flows, readable code, realistic delivery, and communication that helps teams move
              without unnecessary friction.
            </p>
            <a href="#contact" className="btn-primary mt-6">
              Contact Me
            </a>
          </div>

          <div className="mt-10 opacity-0 animate-on-scroll">
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <Languages className="mr-2 text-silver" size={22} />
              Collaboration
            </h4>
            <ul className="space-y-3 text-white/75">
              {workingStyle.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-silver flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="opacity-0 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Code className="mr-2 text-silver" size={24} />
            Technical toolkit
          </h3>
          <div className="grid grid-cols-1 gap-5">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-dark-gray border border-white/8 p-6 rounded-md opacity-0 animate-on-scroll">
                <h4 className="text-lg font-semibold text-silver mb-4">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-sm px-3 py-1.5 bg-medium-gray rounded-md text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
