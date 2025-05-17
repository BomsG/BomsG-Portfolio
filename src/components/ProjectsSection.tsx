import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online stores with analytics, inventory management, and order processing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['react', 'typescript', 'tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }, {
    id: 2,
    title: 'Social Media App',
    description: 'A mobile-first social platform allowing users to connect, share content, and engage with communities.',
    image: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['react-native', 'typescript'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }, {
    id: 3,
    title: 'Personal Blog',
    description: 'A customized WordPress blog with a modern design, optimized for performance and SEO.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['wordpress', 'html-css'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }, {
    id: 4,
    title: 'Weather App',
    description: 'A responsive weather application with real-time forecasts, location-based services, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['react', 'nextjs'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }, {
    id: 5,
    title: 'Task Management Platform',
    description: 'A collaborative task management tool with drag-and-drop interfaces, team assignments, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    tags: ['react', 'typescript', 'tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }, {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A mobile app for tracking workouts, nutrition, and progress with personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['react-native', 'typescript'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }];
  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'react',
    label: 'React'
  }, {
    id: 'typescript',
    label: 'TypeScript'
  }, {
    id: 'tailwind',
    label: 'Tailwind'
  }, {
    id: 'nextjs',
    label: 'Next.js'
  }, {
    id: 'react-native',
    label: 'React Native'
  }, {
    id: 'wordpress',
    label: 'WordPress'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.tags.includes(activeFilter));
  return <section id="projects" className="py-24 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Check out some of my recent work. Each project represents different
            challenges and solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => <button key={filter.id} className={`px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.id ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`} onClick={() => setActiveFilter(filter.id)}>
              {filter.label}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 transition-all duration-500 hover:transform hover:scale-[1.02]">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-400">
                      {tag}
                    </span>)}
                </div>
                <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors duration-300">
                    <GithubIcon size={18} />
                    Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
                    <ExternalLinkIcon size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs rounded-full bg-slate-700 text-gray-300">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};