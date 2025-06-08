import React, { useState } from 'react';
import { ExternalLink, Github, Plus, X } from 'lucide-react';
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
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'EMSystem',
      category: 'web',
      image: '/portfolio/images/1.png',
      description: 'Complete business management solution with sales, inventory, finance, and reporting modules.',
      technologies: ['Python', 'HTML', 'JavaScript', 'CSS', 'Django', 'PostgreSQL'],
      liveLink: '/portfolio/images/1.png',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Foodary - A Recipe Sharing Platform',
      category: 'web',
      image: '/portfolio/images/2.png',
      description: 'Foodary is a platform for food enthusiasts to share and discover delicious recipes. It incorporates key features and concepts you have learned in previous tutorials, such as managing application state, creating reusable components, and implementing page navigation.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      liveLink: '/portfolio/images/2.png',
      githubLink: 'https://github.com/luisrpavanello/food-community-project/tree/main'
    },
    {
      id: 3,
      title: 'API Based Weather WebApp',
      category: 'web',
      image: '/portfolio/images/3.png',
      description: 'Weather web application that leverages APIs (Application Programming Interfaces) to obtain the user is location from the browser and fetch weather data from a Weather API service provider.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      liveLink: '/portfolio/images/3.png',
      githubLink: 'https://github.com/luisrpavanello/API-based-Weather-WebApp'
    },
    {
      id: 4,
      title: 'BodyCheck - BMI Calculator',
      category: 'web',
      image: '/portfolio/images/4.png',
      description: 'BodyCheck is an application developed in React Native using Expo, designed to calculate Body Mass Index (BMI) in a simple and efficient way.',
      technologies: ['React Native', 'HTML', 'JavaScript', 'CSS'],
      liveLink: '/portfolio/images/4.png',
      githubLink: 'https://github.com/luisrpavanello/React-Native-BodyCheck'
    },
    {
      id: 5,
      title: 'Signals Conference: Wisdom and Teaching 2023',
      category: 'web',
      image: '/portfolio/images/5.png',
      description: 'Comprehensive website highlighting Christian Conferences throughout the Americas.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      liveLink: '/portfolio/images/5.png',
      githubLink: 'https://github.com/luisrpavanello/Capstone-Project?tab=readme-ov-file'
    },
    {
      id: 6,
      title: 'Fintech Web Application',
      category: 'web',
      image: '/portfolio/images/6.png',
      description: 'Application allows listing, adding, and deleting products, adding a description, and marking them as available or unavailable.',
      technologies: ['Python', 'HTML', 'JavaScript', 'CSS', 'Django', 'PostgreSQL'],
      liveLink: '/portfolio/images/6.png',
      githubLink: 'https://github.com/luisrpavanello/Fintech'
    },
    
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                onClick={() => openModal(project.image)}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-silver flex items-center justify-center hover:bg-white transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(project.image);
                    }}
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

      {/* Modal to display the expanded image */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-silver flex items-center justify-center hover:bg-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={24} className="text-black" />
            </button>
            <img
              src={selectedImage}
              alt="Expanded project image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;