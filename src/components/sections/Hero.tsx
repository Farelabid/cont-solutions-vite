import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  const typingTexts = [
    'Transform Your Business with Technology',
    'Innovative Solutions for Modern Challenges', 
    'Professional Development, Exceptional Results',
    'Your Success is Our Mission'
  ];

  const currentText = useTypingEffect(typingTexts, 3000);

  useEffect(() => {
    // Simple animations
    gsap.fromTo('.hero-content > *', 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300">
              Welcome to the Future
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="block">Cont Solutions</span>
          <span className="block text-3xl md:text-4xl bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Indonesia
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Continuous Development, Innovative Solutions
        </p>

        <div className="h-12 mb-12">
          <p className="text-lg md:text-xl text-gray-400">
            {currentText}
            <span className="inline-block w-0.5 h-5 bg-primary-500 ml-1 animate-pulse" />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center group"
          >
            <span>Explore Services</span>
            <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400">Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;