import React, { useState } from 'react';
import { ExternalLink, Github, Plus } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'EMSystem',
      category: 'web',
      image: '/portfolio/images/1.png',
      description: 'Complete business management solution with sales, inventory, finance, and reporting modules.',
      technologies: ['React', 'TypeScript', 'JavaScript', 'CSS', 'PostgreSQL'],
      liveLink: '/portfolio/images/1.png',
      githubLink: '#'
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' }
  ];

  return (
    <section id="projects" className="section-container opacity-0">
      <SectionTitle 
        title="Projects" 
        subtitle="Explore my recent projects and creative work"
        align="center"
      />
      
      <div className="flex justify-center mb-10 opacity-0 animate-on-scroll">
        <div className="inline-flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-silver text-black' 
                  : 'bg-dark-gray text-white hover:bg-medium-gray'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-dark-gray rounded-lg overflow-hidden opacity-0 animate-on-scroll"
          >
            <div className="relative overflow-hidden h-64">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-silver flex items-center justify-center hover:bg-white transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="text-black" />
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-silver flex items-center justify-center hover:bg-white transition-colors duration-300"
                  >
                    <Github size={20} className="text-black" />
                  </a>
                )}
                <button
                  className="w-12 h-12 rounded-full bg-silver flex items-center justify-center hover:bg-white transition-colors duration-300"
                  aria-label={`View details for ${project.title}`}
                >
                  <Plus size={20} className="text-black" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-3 py-1 bg-medium-gray rounded-full text-silver"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;