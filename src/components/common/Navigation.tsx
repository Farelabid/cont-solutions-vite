// src/components/common/Navigation.tsx - Fixed Hover Underline Position

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Safe Cont Solutions Logo Component
  const ContSolutionsLogo = () => (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="relative">
        <svg 
          className="w-12 h-12 transform group-hover:scale-110 transition-all duration-300" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#4ECDC4', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#2c5f7a', stopOpacity: 1}} />
            </linearGradient>
            <filter id="logoGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <circle 
            cx="50" 
            cy="50" 
            r="35" 
            fill="url(#logoGradient)"
            filter="url(#logoGlow)"
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <text 
            x="50" 
            y="58" 
            textAnchor="middle" 
            fontSize="20" 
            fontWeight="bold" 
            fill="white"
          >
            CS
          </text>
          
          <circle 
            cx="70" 
            cy="30" 
            r="3" 
            fill="#fbbf24"
            className="animate-pulse group-hover:animate-bounce"
          />
        </svg>
        
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-900 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
          Cont Solutions
        </span>
        <span className="text-xs text-gray-500 group-hover:text-teal-500 transition-colors duration-300 -mt-1">
          Continuous Development
        </span>
      </div>
    </div>
  );

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '📖' },
    { id: 'services', label: 'Services', icon: '⚡' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <>
      <nav className={`
        fixed top-0 w-full z-50 transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' 
          : 'bg-white/90 backdrop-blur-md py-4'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div onClick={() => scrollToSection('home')}>
              <ContSolutionsLogo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    relative px-4 py-2 rounded-full font-medium transition-all duration-300 group
                    ${activeSection === link.id 
                      ? 'text-white bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg' 
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                    }
                  `}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                  
                  {/* Fixed Animated underline - proper positioning */}
                  {activeSection !== link.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-3/4 transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          lg:hidden transition-all duration-300 ease-out overflow-hidden
          ${isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
          }
        `}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 px-4 py-4">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200
                    ${activeSection === link.id 
                      ? 'text-white bg-gradient-to-r from-teal-500 to-blue-600' 
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                    }
                  `}
                  style={{ 
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;