// src/App.tsx - Corrected for Vite + React + TypeScript + GSAP

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Import all components with proper TypeScript
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface LoadingState {
  isLoading: boolean;
  loadingProgress: number;
}

const App: React.FC = () => {
  const [{ isLoading, loadingProgress }, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    loadingProgress: 0
  });

  // Advanced loading animation
  useEffect(() => {
    // Simulate loading with progress
    const loadingInterval = setInterval(() => {
      setLoadingState(prev => {
        if (prev.loadingProgress >= 100) {
          clearInterval(loadingInterval);
          
          // Loading complete animation
          gsap.to('.loading-screen', {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setLoadingState(prevState => ({ ...prevState, isLoading: false }));
              
              // Trigger entrance animations
              gsap.fromTo('body', 
                { overflow: 'hidden' },
                { overflow: 'auto', duration: 0.1 }
              );
            }
          });
          
          return { ...prev, loadingProgress: 100 };
        }
        return { 
          ...prev, 
          loadingProgress: prev.loadingProgress + Math.random() * 15 + 5 
        };
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

  const updateActiveNav = (sectionId: string): void => {
    // Update active navigation state
    console.log('Active section:', sectionId);
  };

  // Loading screen component with Contsol PNG logo
  const LoadingScreen: React.FC = () => (
    <div className="loading-screen fixed inset-0 bg-gradient-to-br from-teal-400 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center text-white">
        {/* Animated Contsol Logo */}
        <div className="mb-8">
          <img 
            src="/assets/logo-contsol.png"
            alt="Contsol Logo"
            className="w-24 h-24 mx-auto animate-pulse drop-shadow-2xl"
            onError={(e) => {
              // Fallback to SVG if PNG not found
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          
          {/* Fallback SVG Logo */}
          <svg 
            className="w-24 h-24 mx-auto animate-pulse hidden" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="loadingLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.9}} />
                <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.6}} />
              </linearGradient>
              <filter id="loadingGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
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
              fill="url(#loadingLogoGradient)"
              filter="url(#loadingGlow)"
              className="animate-spin"
              style={{ animationDuration: '3s' }}
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
              r="4" 
              fill="#fbbf24"
              className="animate-bounce"
            />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 animate-pulse">Contsol</h1>
          <p className="text-lg text-blue-100">Continuous Development, Innovative Solutions</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-blue-100 mt-2">{Math.round(loadingProgress)}%</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );

  // Advanced cursor trail effect
  const CursorTrail: React.FC = () => {
    useEffect(() => {
      if (window.innerWidth < 768) return; // Disable on mobile

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
          will-change: transform;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
      }

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent): void => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const animate = (): void => {
        let currentX = mouseX;
        let currentY = mouseY;

        trail.forEach((dot, index) => {
          const rect = dot.getBoundingClientRect();
          const targetX = currentX - rect.width / 2;
          const targetY = currentY - rect.height / 2;

          dot.style.left = targetX + 'px';
          dot.style.top = targetY + 'px';

          currentX += (targetX - currentX) * 0.3;
          currentY += (targetY - currentY) * 0.3;
        });

        requestAnimationFrame(animate);
      };

      window.addEventListener('mousemove', handleMouseMove);
      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        trail.forEach(dot => dot.remove());
      };
    }, []);

    return null;
  };

  // Success notification component
  const SuccessToast: React.FC = () => {
    return null; // Implement as needed for contact form success
  };

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

      {/* Cursor Trail Effect (Optional - Desktop only) */}
      <CursorTrail />
      
      {/* Success Notification */}
      <SuccessToast />
    </div>
  );
};

export default App;