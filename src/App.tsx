// src/App.tsx - Complete Advanced Cont Solutions Website

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Import all advanced components
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Advanced loading animation
  useEffect(() => {
    // Simulate loading with progress
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          
          // Loading complete animation
          gsap.to('.loading-screen', {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setIsLoading(false);
              
              // Trigger entrance animations
              gsap.fromTo('body', 
                { overflow: 'hidden' },
                { overflow: 'auto', duration: 0.1 }
              );
            }
          });
          
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(loadingInterval);
  }, []);

  // Advanced scroll behavior
  useEffect(() => {
    if (isLoading) return;

    // Smooth scrolling setup
    const ctx = gsap.context(() => {
      // Section reveal animations
      ScrollTrigger.batch("section", {
        onEnter: (elements) => {
          gsap.fromTo(elements, 
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: "power2.out" }
          );
        },
        start: "top 90%"
      });

      // Parallax effect for backgrounds
      gsap.utils.toArray('.parallax-bg').forEach((bg: any) => {
        gsap.fromTo(bg, 
          { y: 0 },
          {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: bg,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });

      // Navigation highlight based on scroll position
      const sections = gsap.utils.toArray('section[id]');
      sections.forEach((section: any) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 100px",
          end: "bottom 100px",
          onEnter: () => updateActiveNav(section.id),
          onEnterBack: () => updateActiveNav(section.id)
        });
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  const updateActiveNav = (sectionId: string) => {
    // Update active navigation state
    // This would typically involve context or state management
    console.log('Active section:', sectionId);
  };

  // Loading screen component
  const LoadingScreen = () => (
    <div className="loading-screen fixed inset-0 bg-gradient-to-br from-teal-400 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center text-white">
        {/* Animated Logo */}
        <div className="mb-8">
          <svg 
            className="w-24 h-24 mx-auto animate-pulse" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="loadingLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.9}} />
                <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path 
              d="M15 25 Q25 15, 45 20 Q65 10, 85 25 Q75 45, 55 40 Q35 50, 15 25 Z" 
              fill="url(#loadingLogoGradient)"
            />
            <path 
              d="M20 65 Q30 50, 50 55 Q70 45, 80 65 Q70 80, 50 75 Q30 85, 20 65 Z" 
              fill="url(#loadingLogoGradient)"
            />
            <circle cx="50" cy="35" r="3" fill="#fbbf24" className="animate-bounce" />
          </svg>
        </div>

        {/* Company Name */}
        <h1 className="text-3xl font-bold mb-2">Cont Solutions</h1>
        <p className="text-xl text-yellow-400 font-semibold mb-8">
          Continuous Development, Innovative Solutions
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>Loading...</span>
            <span>{Math.round(loadingProgress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Team Section */}
        <Team />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />

      {/* Cursor Trail Effect (Optional) */}
      <CursorTrail />
      
      {/* Success Notification */}
      <SuccessToast />
    </div>
  );
};

// Advanced cursor trail effect
const CursorTrail: React.FC = () => {
  useEffect(() => {
    const trail: HTMLElement[] = [];
    const trailLength = 8;

    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail';
      dot.style.cssText = `
        position: fixed;
        width: ${8 - i}px;
        height: ${8 - i}px;
        background: linear-gradient(45deg, #4ECDC4, #2c5f7a);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i * 0.15};
        transition: transform 0.1s ease-out;
      `;
      document.body.appendChild(dot);
      trail.push(dot);
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      let currentX = mouseX;
      let currentY = mouseY;

      trail.forEach((dot, index) => {
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;

        currentX += (mouseX - currentX) * (0.7 - index * 0.08);
        currentY += (mouseY - currentY) * (0.7 - index * 0.08);

        dot.style.transform = `translate(${currentX - rect.width / 2}px, ${currentY - rect.height / 2}px)`;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trail.forEach(dot => document.body.removeChild(dot));
    };
  }, []);

  return null;
};

// Success toast notification
const SuccessToast: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show welcome toast after loading
    const timer = setTimeout(() => {
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className="bg-white shadow-2xl rounded-2xl p-6 border border-gray-100 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Welcome to Cont Solutions!</h4>
            <p className="text-gray-600 text-sm">
              Explore our innovative services and let's build something amazing together.
            </p>
          </div>
          <button 
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;