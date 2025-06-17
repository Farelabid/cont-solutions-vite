import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cpu, 
  Palette, 
  Camera, 
  Video,
  Filter,
  Sparkles,
  X,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { services } from '@/data';
import type { Service } from '@/types';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'it' | 'creative'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const serviceIcons: { [key: string]: React.ElementType } = {
    'it-manpower': Code,
    'product-dev': Cpu,
    'web-dev': Globe,
    'app-dev': Code,
    'mobile-dev': Smartphone,
    'iot-dev': Cpu,
    'data-analysis': Database,
    'network-install': Globe,
    'ai-dev': Cpu,
    'ui-ux': Palette,
    'logo-design': Palette,
    'social-media': Smartphone,
    'photo-production': Camera,
    'video-ads': Video
  };

  useEffect(() => {
    // Simple scroll animation
    gsap.fromTo('.service-item', 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#services',
          start: 'top 80%',
          once: true
        }
      }
    );
  }, []);

  const filteredServices = services.filter(service => 
    activeFilter === 'all' || service.category === activeFilter
  );

  return (
    <section id="services" className="py-20 relative bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Premium
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From cutting-edge IT solutions to creative services
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-dark-800 rounded-full p-1 shadow-lg">
            {[
              { value: 'all', label: 'All Services', icon: Filter },
              { value: 'it', label: 'IT Solutions', icon: Code },
              { value: 'creative', label: 'Creative Studio', icon: Palette }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value as any)}
                className={clsx(
                  'flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all',
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                )}
              >
                <filter.icon className="w-5 h-5" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = serviceIcons[service.id] || Code;
            
            return (
              <div
                key={service.id}
                className="service-item"
              >
                <div 
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 border border-gray-200/50 dark:border-dark-700/50 h-full glass"
                  onClick={() => setSelectedService(service)}
                >
                  <div className={clsx(
                    'w-16 h-16 rounded-xl flex items-center justify-center mb-6',
                    'bg-gradient-to-br',
                    service.category === 'it' 
                      ? 'from-primary-500 to-secondary-600' 
                      : 'from-accent-400 to-orange-500'
                  )}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)}
          serviceIcons={serviceIcons}
        />
      )}
    </section>
  );
};

// Separate Modal Component
const ServiceModal: React.FC<{
  service: Service;
  onClose: () => void;
  serviceIcons: any;
}> = ({ service, onClose, serviceIcons }) => {
  const Icon = serviceIcons[service.id] || Code;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-dark-800 rounded-2xl max-w-2xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-4">
              <div className={clsx(
                'w-16 h-16 rounded-xl flex items-center justify-center',
                'bg-gradient-to-br',
                service.category === 'it' 
                  ? 'from-primary-500 to-secondary-600' 
                  : 'from-accent-400 to-orange-500'
              )}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <span className="text-sm text-gray-500">
                  {service.category === 'it' ? 'IT Solution' : 'Creative Service'}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Overview</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Key Features</h4>
              <div className="space-y-3">
                {['Professional expertise', 'Customized solutions', 'Timely delivery', 'Competitive pricing', 'Quality assurance'].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 pt-6 border-t">
              <button
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-lg"
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </button>
              <button
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg"
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

export default Services;