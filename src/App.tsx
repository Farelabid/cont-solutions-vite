import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

// Import components
import Navigation from '@/components/common/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio'; 
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="text-white animate-pulse">Loading amazing things...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio /> {/* Added Portfolio Section */}
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster 
        position="top-right"
        toastOptions={{
          className: 'glass',
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#1f2937',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
    </div>
  );
};

export default App;