import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isInHero, setIsInHero] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Check if in hero
      const heroHeight = window.innerHeight;
      setIsInHero(scrollY < heroHeight - 100);

      // Detect active section
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const navbarStyle = isInHero && !isScrolled
    ? 'bg-transparent text-white'
    : 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-lg text-gray-900 dark:text-white';

  return (
    <>
      <nav className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        navbarStyle,
        isScrolled ? 'py-3' : 'py-4'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with text */}
            <div 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img 
                src="/assets/logo-contsol.png" 
                alt="Cont Solutions Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback if logo doesn't exist
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className={clsx(
                "text-xl font-bold",
                isInHero && !isScrolled ? "text-white" : "text-gray-900 dark:text-white"
              )}>
                ContsolDev
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={clsx(
                    'px-5 py-2.5 font-medium rounded-lg transition-all duration-200',
                    activeSection === link.id 
                      ? 'bg-primary-500 text-white' 
                      : isInHero && !isScrolled
                        ? 'text-white/90 hover:bg-white/10'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                  )}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={clsx(
                  'ml-4 p-2.5 rounded-lg transition-colors',
                  isInHero && !isScrolled
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700'
                )}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'lg:hidden p-2 rounded-lg',
                isInHero && !isScrolled
                  ? 'bg-white/10 text-white'
                  : 'bg-gray-100 dark:bg-dark-800'
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-dark-900 shadow-xl">
            <div className="p-6 pt-20">
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={clsx(
                      'w-full text-left px-4 py-3 rounded-lg font-medium transition-colors',
                      activeSection === link.id
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                    )}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;