// src/components/ui/ServiceCard.tsx - Service Card Component

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceCardProps } from '../../types';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Animation on scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, { scale: 1.02, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { scale: 1, duration: 0.3 });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      ctx.revert();
    };
  }, [index]);

  const isCreative = service.category === 'creative';

  return (
    <div
      ref={cardRef}
      className={`
        bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
        transition-all duration-300 cursor-pointer
        ${isCreative ? 'border-l-4 border-yellow-400' : 'border border-gray-100'}
      `}
    >
      <div className={`
        w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6
        ${isCreative 
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
          : 'bg-gradient-to-br from-teal-400 to-blue-900'
        }
      `}>
        <span className="text-white">{service.icon}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {service.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;