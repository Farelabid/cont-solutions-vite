// src/components/ui/TeamMember.tsx - Team Member Card Component

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { TeamMemberProps } from '../../types';

gsap.registerPlugin(ScrollTrigger);

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  const memberRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const memberElement = memberRef.current;
    const avatarElement = avatarRef.current;
    if (!memberElement || !avatarElement) return;

    // Animation on scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(memberElement,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: memberElement,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(memberElement, { y: -5, duration: 0.3 });
      gsap.to(avatarElement, { 
        scale: 1.1, 
        rotation: 5, 
        duration: 0.3 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(memberElement, { y: 0, duration: 0.3 });
      gsap.to(avatarElement, { 
        scale: 1, 
        rotation: 0, 
        duration: 0.3 
      });
    };

    memberElement.addEventListener('mouseenter', handleMouseEnter);
    memberElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      memberElement.removeEventListener('mouseenter', handleMouseEnter);
      memberElement.removeEventListener('mouseleave', handleMouseLeave);
      ctx.revert();
    };
  }, [index]);

  return (
    <div
      ref={memberRef}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
    >
      <div
        ref={avatarRef}
        className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold"
      >
        {member.avatar ? (
          <img 
            src={member.avatar} 
            alt={member.name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          member.initials
        )}
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {member.name}
      </h3>
      
      <p className="text-teal-500 font-medium text-sm">
        {member.role}
      </p>
    </div>
  );
};

export default TeamMember;