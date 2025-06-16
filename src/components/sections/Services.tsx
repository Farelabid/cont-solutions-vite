// src/components/sections/Services.tsx - Simple GSAP Only

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Filter, 
  ChevronRight, 
  Sparkles, 
  X,
  Users,
  Globe,
  Smartphone,
  Database,
  Wifi,
  Brain,
  Camera,
  Share2,
  Video,
  Target
} from 'lucide-react';
import type { Service } from '../../types';

gsap.registerPlugin(ScrollTrigger);

// Services data
const services: Service[] = [
  // IT Solutions
  { id: 'it-manpower', title: 'IT Manpower Sharing', description: 'Providing skilled IT professionals to supplement your team and ensure project success.', icon: '👥', category: 'it' },
  { id: 'product-dev', title: 'Product Development', description: 'Offering comprehensive product development services, from concept to launch, tailored to your business needs.', icon: '🚀', category: 'it' },
  { id: 'web-dev', title: 'Website Development', description: 'Building responsive, user-friendly, and engaging websites to enhance your online presence.', icon: '🌐', category: 'it' },
  { id: 'app-dev', title: 'Application Development', description: 'Developing custom software applications designed to solve your unique business challenges.', icon: '💻', category: 'it' },
  { id: 'mobile-dev', title: 'Mobile App Development', description: 'Creating high-performance, cross-platform mobile apps for iOS and Android.', icon: '📱', category: 'it' },
  { id: 'iot-dev', title: 'IoT Development', description: 'Innovating and connecting your devices through seamless IoT solutions for smarter operations.', icon: '🔗', category: 'it' },
  { id: 'data-analysis', title: 'Data Analysis', description: 'Turning raw data into actionable insights through advanced data analysis techniques.', icon: '📊', category: 'it' },
  { id: 'network-install', title: 'Network Installation', description: 'Designing and implementing robust, secure network infrastructures for your business.', icon: '🔧', category: 'it' },
  { id: 'ai-dev', title: 'AI Development', description: 'Integrating AI technologies to automate tasks and improve business efficiency.', icon: '🤖', category: 'it' },
  { id: 'ui-ux', title: 'UI/UX Design', description: 'Designing intuitive user interfaces and creating seamless user experiences.', icon: '🎨', category: 'it' },
  // Creative Studio
  { id: 'logo-design', title: 'Logo Design', description: 'Creating unique and memorable logos that define your brand identity and make lasting impressions.', icon: '🎯', category: 'creative' },
  { id: 'social-media', title: 'Social Media Management', description: 'Managing your social media presence to engage and grow your audience across all platforms.', icon: '📱', category: 'creative' },
  { id: 'photo-production', title: 'Photo Production', description: 'Professional photography services to showcase your products or services in the best light.', icon: '📸', category: 'creative' },
  { id: 'video-ads', title: 'Video Ads Production', description: 'Creating compelling video advertisements that capture attention and drive conversions.', icon: '🎬', category: 'creative' }
];

type FilterType = 'all' | 'it' | 'creative';

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick: (service: Service) => void;
}

const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);

  // Service icons mapping
  const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    'it-manpower': Users,
    'product-dev': Target,
    'web-dev': Globe,
    'app-dev': Code,
    'mobile-dev': Smartphone,
    'iot-dev': Wifi,
    'data-analysis': Database,
    'network-install': Wifi,
    'ai-dev': Brain,
    'ui-ux': Palette,
    'logo-design': Target,
    'social-media': Share2,
    'photo-production': Camera,
    'video-ads': Video
  };

  // Filtered services
  const filteredServices = services.filter(service => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  // 🎯 SIMPLE GSAP Animation for filter change
  const animateFilter = (newFilter: FilterType): void => {
    if (newFilter === activeFilter) return;

    // Simple fade out
    gsap.to('.service-card', {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setActiveFilter(newFilter);
        
        // Simple fade in
        gsap.fromTo('.service-card', 
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
      }
    });
  };

  // Modal functions
  const openServiceModal = (service: Service): void => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = (): void => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  // 🎯 SIMPLE Service card component - GSAP only
  const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const card = cardRef.current;
      if (!card) return;

      // Simple GSAP scroll animation
      const ctx = gsap.context(() => {
        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 20 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Simple hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            y: -8, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            y: 0, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
      });

      return () => ctx.revert();
    }, [index]);

    const isCreative = service.category === 'creative';
    const IconComponent = serviceIcons[service.id] || Code;

    return (
      <div
        ref={cardRef}
        onClick={() => onClick(service)}
        className={`
          service-card bg-white rounded-2xl p-8 shadow-lg cursor-pointer
          ${isCreative ? 'border-l-4 border-yellow-400' : 'border border-gray-100'}
        `}
      >
        <div className={`
          w-16 h-16 rounded-2xl flex items-center justify-center mb-6
          ${isCreative 
            ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
            : 'bg-gradient-to-br from-teal-400 to-blue-900'
          }
        `}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {service.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>

        <div className="mt-6">
          <span className={`
            inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
            ${isCreative 
              ? 'bg-yellow-100 text-yellow-700' 
              : 'bg-teal-100 text-teal-700'
            }
          `}>
            {isCreative ? 'Creative Studio' : 'IT Solutions'}
          </span>
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
                    relative px-6 py-3 rounded-xl font-semibold flex items-center space-x-2
                    transition-all duration-300
                    ${activeFilter === filter.id
                      ? 'bg-white text-gray-900 shadow-lg'
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

        {/* Services Grid */}
        <div 
          ref={servicesGridRef}
          className="services-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
          style={{ minHeight: '500px' }}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={`${service.id}-${activeFilter}`}
              service={service} 
              index={index}
              onClick={openServiceModal}
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

      {/* Simple Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeServiceModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center
                  ${selectedService.category === 'creative' 
                    ? 'bg-gradient-to-br from-yellow-500 to-orange-600' 
                    : 'bg-gradient-to-br from-teal-500 to-blue-600'
                  }
                `}>
                  {React.createElement(serviceIcons[selectedService.id] || Code, { className: "w-8 h-8 text-white" })}
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
                onClick={closeServiceModal}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
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

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={closeServiceModal}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-700 transition-all"
                  >
                    Get Started
                  </button>
                  <button 
                    onClick={closeServiceModal}
                    className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
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