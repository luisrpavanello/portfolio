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

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A complete e-commerce solution with product catalog, cart functionality, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: 'https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Travel Companion App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A mobile application for travelers to plan itineraries, find attractions, and share experiences.',
      technologies: ['React Native', 'Google Maps API', 'Firestore'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Healthcare Dashboard',
      category: 'ui',
      image: 'https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An administrative dashboard for healthcare providers to monitor patient data and appointments.',
      technologies: ['React', 'D3.js', 'Material UI', 'GraphQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4482890/pexels-photo-4482890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A fitness application to track workouts, nutrition, and progress towards health goals.',
      technologies: ['React Native', 'Redux', 'Firebase'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Creative Agency Website',
      category: 'ui',
      image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A modern website for a creative agency showcasing their services, portfolio, and team.',
      technologies: ['React', 'GSAP', 'Styled Components'],
      liveLink: '#',
      githubLink: '#'
    }
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
    <section id="portfolio" className="section-container opacity-0">
      <SectionTitle 
        title="Portfolio" 
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

export default Portfolio;