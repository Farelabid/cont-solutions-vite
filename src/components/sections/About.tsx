// src/components/sections/About.tsx - Advanced Interactive About

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { useScrollAnimation, useCounterAnimation } from '../../hooks/useScrollAnimation';
import { companyInfo } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Counter animations
  const projectsCounter = useCounterAnimation(50);
  const clientsCounter = useCounterAnimation(25);
  const experienceCounter = useCounterAnimation(2);

  // Advanced mouse tracking for 3D effects
  const handleMouseMove = (e: React.MouseEvent, cardId: string) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      duration: 0.3,
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      transformOrigin: "center center",
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    gsap.to(card, {
      duration: 0.5,
      rotationX: 0,
      rotationY: 0,
      ease: "power2.out"
    });
  };

  // Advanced scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for cards
      gsap.fromTo(".about-card", 
        { 
          opacity: 0, 
          y: 100,
          rotationX: -20
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".about-cards",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Timeline animation for vision/mission
      gsap.fromTo(".vision-mission-card",
        {
          opacity: 0,
          x: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vision-mission-card",
            start: "top 85%"
          }
        }
      );

      // Statistics reveal animation
      gsap.fromTo(".stats-container .stat-card",
        {
          opacity: 0,
          scale: 0.5,
          rotationY: 180
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      id: 'innovation',
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge solutions using latest technologies',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'teamwork',
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with diverse expertise',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'quality',
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'growth',
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Always learning and improving our services',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-gray-700">About Our Company</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Cont Solution</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions for the digital future with passion and expertise
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Company Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span>Our Story</span>
              </h3>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  {companyInfo.description}
                </p>
                <p className="leading-relaxed">
                  Helping students has been a proud moment for us. As we evolve to improve, 
                  we adapt to accommodate the needs of our clients, providing comprehensive 
                  digital solutions for businesses and organizations seeking technological transformation.
                </p>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="about-cards grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`about-card group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 ${
                    hoveredCard === achievement.id ? 'scale-105' : ''
                  }`}
                  onMouseMove={(e) => handleMouseMove(e, achievement.id)}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => setHoveredCard(achievement.id)}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="vision-mission-card bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Our Vision</h4>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 rounded-r-2xl">
                  <p className="text-teal-700 font-semibold italic text-lg leading-relaxed">
                    "{companyInfo.vision}"
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Our Mission</h4>
                </div>
                <ul className="space-y-4">
                  {companyInfo.mission.map((item, index) => (
                    <li key={index} className="flex items-start space-x-4 group">
                      <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-container">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Achievements</span>
            </h3>
            <p className="text-gray-600">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stat-card group text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <span 
                  ref={projectsCounter.ref}
                  className="text-5xl font-bold text-teal-600 block mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {projectsCounter.count}+
                </span>
                <span className="text-gray-700 font-semibold">Projects Completed</span>
                <p className="text-gray-500 text-sm mt-2">Successfully delivered</p>
              </div>
            </div>
            
            <div className="stat-card group text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤝</span>
                </div>
                <span 
                  ref={clientsCounter.ref}
                  className="text-5xl font-bold text-blue-600 block mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {clientsCounter.count}+
                </span>
                <span className="text-gray-700 font-semibold">Happy Clients</span>
                <p className="text-gray-500 text-sm mt-2">Satisfied customers</p>
              </div>
            </div>
            
            <div className="stat-card group text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⭐</span>
                </div>
                <span 
                  ref={experienceCounter.ref}
                  className="text-5xl font-bold text-orange-600 block mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {experienceCounter.count}
                </span>
                <span className="text-gray-700 font-semibold">Years Experience</span>
                <p className="text-gray-500 text-sm mt-2">And growing strong</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;