// src/components/sections/Services.tsx - Fixed All Issues

import React, { useState, useEffect, useRef } from 'react';
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
  ChevronRight,
  Sparkles,
  Zap,
  X
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { services } from '../../data';
import type { Service } from '../../types';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<'all' | 'it' | 'creative'>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);

  // Icon mapping for each service
  const serviceIcons: { [key: string]: React.ElementType } = {
    'it-manpower': Code,
    'product-dev': Zap,
    'web-dev': Globe,
    'app-dev': Smartphone,
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

  // Filter services based on active filter
  const filteredServices = services.filter(service => 
    activeFilter === 'all' || service.category === activeFilter
  );

  // Fixed filter animation - no layout jump
  const animateFilter = (newFilter: 'all' | 'it' | 'creative') => {
    if (newFilter === activeFilter) return;
    
    // Immediate filter change to prevent layout jump
    setActiveFilter(newFilter);
    
    // Simple fade animation
    gsap.fromTo('.service-card', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
    );
  };

  // Simple hover effects
  const handleServiceHover = (serviceId: string) => {
    setHoveredService(serviceId);
  };

  const handleServiceLeave = (serviceId: string) => {
    setHoveredService(null);
  };

  // Initial animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const IconComponent = serviceIcons[service.id] || Code;
    const isCreative = service.category === 'creative';
    
    return (
      <div
        data-service={service.id}
        className={`service-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 ${
          hoveredService === service.id ? 'transform -translate-y-2 scale-105' : ''
        }`}
        onMouseEnter={() => handleServiceHover(service.id)}
        onMouseLeave={() => handleServiceLeave(service.id)}
        onClick={() => setSelectedService(service)}
      >
        {/* Background gradient overlay */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl
          ${isCreative 
            ? 'bg-gradient-to-br from-yellow-50 to-orange-50' 
            : 'bg-gradient-to-br from-teal-50 to-blue-50'
          }
        `}></div>

        <div className="relative z-10">
          {/* Icon */}
          <div className={`
            w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300
            ${isCreative 
              ? 'bg-gradient-to-br from-yellow-500 to-orange-600' 
              : 'bg-gradient-to-br from-teal-500 to-blue-600'
            }
          `}>
            <IconComponent className="w-8 h-8" />
          </div>

          {/* Service Info */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span className={`
              px-3 py-1 text-xs font-semibold rounded-full
              ${isCreative 
                ? 'bg-yellow-100 text-yellow-700' 
                : 'bg-teal-100 text-teal-700'
              }
            `}>
              {isCreative ? 'Creative Studio' : 'IT Solutions'}
            </span>

            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors duration-300" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-gray-700">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Digital Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cutting-edge IT solutions to creative design services, we provide comprehensive digital solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-2">
            {[
              { id: 'all' as const, label: 'All Services', icon: Filter },
              { id: 'it' as const, label: 'IT Solutions', icon: Code },
              { id: 'creative' as const, label: 'Creative Studio', icon: Palette }
            ].map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => animateFilter(filter.id)}
                  className={`
                    relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2
                    ${activeFilter === filter.id
                      ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid - Fixed height to prevent layout jump */}
        <div 
          ref={servicesGridRef}
          className="services-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
          style={{ minHeight: '600px' }}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* Service Categories Summary */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* IT Solutions Summary */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">IT Solutions</h3>
                <p className="text-teal-600 font-medium">10 Services Available</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive technology services including web development, mobile apps, IoT solutions, AI integration, and network infrastructure.
            </p>
            <button 
              onClick={() => animateFilter('it')}
              className="inline-flex items-center space-x-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Creative Studio Summary */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Creative Studio</h3>
                <p className="text-yellow-600 font-medium">4 Services Available</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Creative services including logo design, social media management, professional photography, and video advertising production.
            </p>
            <button 
              onClick={() => animateFilter('creative')}
              className="inline-flex items-center space-x-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Modal - Perfect Center on Screen */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-8 pb-6 border-b border-gray-100">
              <div className="flex items-center space-x-4">
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center text-white
                  ${selectedService.category === 'creative' 
                    ? 'bg-gradient-to-br from-yellow-500 to-orange-600' 
                    : 'bg-gradient-to-br from-teal-500 to-blue-600'
                  }
                `}>
                  {React.createElement(serviceIcons[selectedService.id] || Code, { className: "w-8 h-8" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedService.title}
                  </h3>
                  <p className="text-teal-600 font-medium">
                    {selectedService.category === 'creative' ? 'Creative Studio' : 'IT Solutions'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 pt-6">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedService.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Professional consultation and planning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Custom solution development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Quality assurance and testing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Choose Us?</h4>
                  <p className="text-gray-600">
                    Our experienced team delivers high-quality solutions tailored to your specific needs. 
                    We use the latest technologies and best practices to ensure your project's success.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Quote
                  </button>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;