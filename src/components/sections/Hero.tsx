// src/components/sections/Hero.tsx - Advanced Interactive Hero

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Sparkles, Zap, Rocket } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const typingTexts = [
    'Transform your business with cutting-edge technology',
    'Innovative IT solutions for modern businesses', 
    'Creative digital services for your brand',
    'Professional development with expert team',
    'Continuous development, innovative solutions'
  ];

  const currentText = useTypingEffect(typingTexts, 3000);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced entrance animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Dramatic entrance sequence
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    )
    .add(() => setIsLoaded(true));

    // Floating animation untuk scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Particle system
  useEffect(() => {
    if (!particlesRef.current || !isLoaded) return;

    const particles: HTMLElement[] = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-60';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particlesRef.current.appendChild(particle);
      particles.push(particle);

      // Animate particles
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: Math.random() * 2
      });
    }

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, [isLoaded]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-blue-900 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(78, 205, 196, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #4ECDC4 0%, #3B82F6 50%, #2c5f7a 100%)
        `
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>

      {/* Particle System */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              <span className="text-sm font-semibold">Established 2023 • Growing Strong</span>
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              Cont Solution Indonesia
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-3xl font-bold text-yellow-400 mb-4"
          >
            Continuous Development, Innovative Solutions
          </p>
          
          {/* Dynamic Tagline */}
          <div 
            ref={taglineRef}
            className="text-lg md:text-xl mb-12 text-gray-100 min-h-[80px] flex items-center justify-center max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-2">
              <Rocket className="w-6 h-6 text-yellow-400 animate-bounce" />
              <span className="text-yellow-400 font-semibold">
                {currentText}
                <span className="animate-pulse text-white">|</span>
              </span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="group relative px-8 py-4 bg-yellow-400 text-gray-800 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-yellow-400/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Our Services</span>
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-transparent text-white border-2 border-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get In Touch</span>
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute inset-0 group-hover:text-teal-600 transition-colors duration-300"></span>
            </button>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">50+</div>
              <div className="text-gray-200 font-medium">Projects Completed</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">25+</div>
              <div className="text-gray-200 font-medium">Happy Clients</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">2</div>
              <div className="text-gray-200 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center space-y-2 text-white hover:text-yellow-400 transition-colors duration-300">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-medium">
        <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-fast">
        <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(270deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;