import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Smartphone, 
  Globe, 
  Award, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Zap
} from 'lucide-react';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  name: string;
  type: 'mobile' | 'website';
  description: string;
  longDescription: string;
  image: string;
  color: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 'bacalagi',
    name: 'BacaLagi',
    type: 'mobile',
    description: 'Daily news and articles platform',
    longDescription: 'BacaLagi partnered with us to develop a mobile platform that delivers daily news and articles to its users. Our role was to create a scalable app architecture, smooth user experience, and ensure content synchronization across devices.',
    image: '/portfolio/bacalagi.png',
    color: 'from-blue-500 to-blue-600',
    tags: ['React Native', 'News Platform', 'Content Sync']
  },
  {
    id: 'healppy',
    name: 'Healppy',
    type: 'mobile',
    description: 'Mental and physical health assistant',
    longDescription: 'We collaborated with Healppy to build an intuitive mobile app that assists users in improving their mental and physical health. The app provides users with tailored wellness routines and tracks their progress daily.',
    image: '/portfolio/healppy.png',
    color: 'from-green-500 to-teal-600',
    tags: ['Health Tech', 'Wellness', 'Progress Tracking']
  },
  {
    id: 'dlhk',
    name: 'DLHK',
    type: 'website',
    description: 'Government environmental protection platform',
    longDescription: 'We designed and developed a website for DLHK to engage citizens in various green initiatives. The platform includes features like news updates, event management, and an eco-friendly project showcase.',
    image: '/portfolio/dlhk.png',
    color: 'from-emerald-500 to-green-600',
    tags: ['Government', 'Environment', 'Civic Engagement']
  },
  {
    id: 'reresyc',
    name: 'Reresyc',
    type: 'website',
    description: 'Online recycling platform',
    longDescription: 'For Reresyc, we created an online platform that simplifies the recycling process. Our project involved building a network where users can find the nearest recycling centers and get rewards for recycling.',
    image: '/portfolio/reresyc.png',
    color: 'from-lime-500 to-green-600',
    tags: ['Recycling', 'Rewards System', 'Location-based']
  },
  {
    id: 'terbangaja',
    name: 'TerbangAja',
    type: 'mobile',
    description: 'Seamless flight booking app',
    longDescription: 'We partnered with TerbangAja to build a seamless flight booking app with features like real-time pricing, flight tracking, and promotional deals. The app integrates with various travel agencies to offer the best deals.',
    image: '/portfolio/terbangaja.png',
    color: 'from-sky-500 to-blue-600',
    tags: ['Travel', 'Booking System', 'Real-time Data']
  },
  {
    id: 'ecosphere',
    name: 'EcoSphere',
    type: 'mobile',
    description: 'Carbon footprint tracking app',
    longDescription: 'For EcoSphere, we developed a mobile app that allows users to monitor their energy consumption and track their environmental impact. The app encourages users to adopt eco-friendly habits and provides tips for reducing their carbon footprint.',
    image: '/portfolio/ecosphere.png',
    color: 'from-teal-500 to-green-600',
    tags: ['Sustainability', 'Energy Tracking', 'Eco-friendly']
  },
  {
    id: 'sampahplus',
    name: 'Sampah+',
    type: 'mobile',
    description: 'Gamified waste management app',
    longDescription: 'Sampah+ approached us to develop an app that would encourage waste management through gamification and incentives. We built a platform where users can manage their waste efficiently and earn rewards for eco-friendly practices.',
    image: '/portfolio/sampahplus.png',
    color: 'from-orange-500 to-red-600',
    tags: ['Gamification', 'Waste Management', 'Rewards']
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'website'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.type === filter
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.portfolio-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.portfolio-header',
          start: 'top 80%'
        }
      });

      // Projects animation
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProjects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(filteredProjects.length / 3) - 1 : prev - 1
    );
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 relative bg-gray-50 dark:bg-dark-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300/30 dark:bg-primary-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary-300/30 dark:bg-secondary-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-300/20 dark:bg-accent-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="portfolio-header text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100/80 dark:bg-primary-900/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 glass">
            <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold">Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects We've
            <span className="block gradient-text">Delivered</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing our expertise through successful projects across various industries
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '7+', label: 'Completed Projects' },
            { value: '5+', label: 'Mobile Apps' },
            { value: '2+', label: 'Websites' },
            { value: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 glass rounded-2xl glass-hover">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex glass rounded-full p-1 shadow-lg">
            {[
              { value: 'all', label: 'All Projects', icon: Filter },
              { value: 'mobile', label: 'Mobile Apps', icon: Smartphone },
              { value: 'website', label: 'Websites', icon: Globe }
            ].map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value as any)}
                className={clsx(
                  'flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all',
                  filter === filterOption.value
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                <filterOption.icon className="w-5 h-5" />
                <span>{filterOption.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass rounded-2xl overflow-hidden cursor-pointer glass-hover h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={clsx(
                    'absolute inset-0 bg-gradient-to-br opacity-80',
                    project.color
                  )} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.type === 'mobile' ? (
                      <Smartphone className="w-24 h-24 text-white/50" />
                    ) : (
                      <Globe className="w-24 h-24 text-white/50" />
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.type === 'mobile' ? 'Mobile App' : 'Website'}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-dark-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 rounded-full text-xs font-medium">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Showcase */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-4">
                    <div className="glass rounded-2xl p-8 md:p-12 glass-hover">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="inline-flex items-center space-x-2 mb-4">
                            <Zap className="w-5 h-5 text-primary-600" />
                            <span className="text-sm font-semibold text-primary-600">
                              Featured Project
                            </span>
                          </div>
                          <h4 className="text-3xl font-bold mb-4">{project.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {project.longDescription}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <span key={idx} className="px-4 py-2 glass rounded-full text-sm font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className={clsx(
                          'h-64 rounded-2xl bg-gradient-to-br flex items-center justify-center',
                          project.color
                        )}>
                          {project.type === 'mobile' ? (
                            <Smartphone className="w-32 h-32 text-white/50" />
                          ) : (
                            <Globe className="w-32 h-32 text-white/50" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-white/80 dark:hover:bg-dark-700/80 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-white/80 dark:hover:bg-dark-700/80 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

// Project Modal Component
const ProjectModal: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="glass rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
              <div className="flex items-center space-x-2">
                <span className={clsx(
                  'px-3 py-1 rounded-full text-sm font-medium',
                  'bg-gradient-to-r text-white',
                  project.color
                )}>
                  {project.type === 'mobile' ? 'Mobile App' : 'Website'}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-dark-700/50"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Project Image */}
          <div className={clsx(
            'h-64 rounded-2xl mb-6 bg-gradient-to-br flex items-center justify-center',
            project.color
          )}>
            {project.type === 'mobile' ? (
              <Smartphone className="w-32 h-32 text-white/30" />
            ) : (
              <Globe className="w-32 h-32 text-white/30" />
            )}
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Project Overview</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 glass rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex space-x-4 pt-6 border-t">
              <button
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Similar Project
              </button>
              <button
                className="px-6 py-3 glass rounded-lg hover:bg-gray-100/50 dark:hover:bg-dark-700/50"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;