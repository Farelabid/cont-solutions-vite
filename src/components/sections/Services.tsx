// src/components/sections/Services.tsx - Advanced Interactive Services

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
  Zap
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

  // Advanced filter animation
  const animateFilter = (newFilter: 'all' | 'it' | 'creative') => {
    if (newFilter === activeFilter) return;

    // Animate out current services
    gsap.to('.service-card', {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveFilter(newFilter);
        
        // Animate in new services
        gsap.fromTo('.service-card', 
          { 
            opacity: 0, 
            scale: 0.8,
            y: 30
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.7)",
            delay: 0.2
          }
        );
      }
    });
  };

  // Service card hover effects
  const handleServiceHover = (serviceId: string) => {
    setHoveredService(serviceId);
    const card = document.querySelector(`[data-service="${serviceId}"]`);
    if (card) {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleServiceLeave = (serviceId: string) => {
    setHoveredService(null);
    const card = document.querySelector(`[data-service="${serviceId}"]`);
    if (card) {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  // Initial animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
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
        className={`service-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden ${
          isCreative ? 'border-l-4 border-l-yellow-400' : ''
        }`}
        onMouseEnter={() => handleServiceHover(service.id)}
        onMouseLeave={() => handleServiceLeave(service.id)}
        onClick={() => setSelectedService(service)}
      >
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
          isCreative 
            ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
            : 'bg-gradient-to-br from-teal-400 to-blue-600'
        }`}></div>

        {/* Floating background elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className={`w-8 h-8 rounded-full ${
            isCreative ? 'bg-yellow-200' : 'bg-teal-200'
          } animate-pulse`}></div>
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
            isCreative 
              ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
              : 'bg-gradient-to-br from-teal-400 to-blue-600'
          }`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
            {service.description}
          </p>

          {/* Learn More Button */}
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-2 text-sm font-semibold ${
              isCreative ? 'text-yellow-600' : 'text-teal-600'
            } group-hover:translate-x-2 transition-transform duration-300`}>
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </div>

            {/* Category badge */}
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              isCreative 
                ? 'bg-yellow-100 text-yellow-700' 
                : 'bg-teal-100 text-teal-700'
            }`}>
              {service.category === 'it' ? 'IT Solutions' : 'Creative Studio'}
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className={`absolute -inset-1 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl ${
          isCreative 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
            : 'bg-gradient-to-r from-teal-400 to-blue-600'
        }`}></div>
      </div>
    );
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-gray-700">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for your business needs, from IT development to creative services
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
            {[
              { key: 'all', label: 'All Services', icon: Filter },
              { key: 'it', label: 'IT Solutions', icon: Code },
              { key: 'creative', label: 'Creative Studio', icon: Palette }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => animateFilter(filter.key as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                <filter.icon className="w-5 h-5" />
                <span>{filter.label}</span>
                {activeFilter === filter.key && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesGridRef}
          className="services-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          {/* IT Solutions Summary */}
          <div className="group relative bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-6 right-6">
              <Code className="w-8 h-8 text-teal-600 group-hover:animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive technology services including web development, mobile apps, 
              IoT solutions, AI integration, and network infrastructure.
            </p>
            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              <span>10 Services Available</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </div>
          </div>

          {/* Creative Studio Summary */}
          <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-100 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-6 right-6">
              <Palette className="w-8 h-8 text-yellow-600 group-hover:animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Studio</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creative services including logo design, social media management, 
              professional photography, and video advertising production.
            </p>
            <div className="flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              <span>4 Services Available</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal (if selected) */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedService.title}
                </h3>
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                  selectedService.category === 'creative'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-teal-100 text-teal-700'
                }`}>
                  {selectedService.category === 'it' ? 'IT Solutions' : 'Creative Studio'}
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>
            
            <div className="flex space-x-4">
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
      )}
    </section>
  );
};

export default Services;