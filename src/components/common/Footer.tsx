// src/components/common/Footer.tsx - Advanced Interactive Footer

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  Code,
  Coffee,
  Zap,
  Sparkles
} from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: 0 },
      ease: "power2.inOut"
    });
  };

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

  // Animated social media links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/contsoldev',
      color: 'hover:bg-blue-600',
      hoverColor: 'group-hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/contsoldev',
      color: 'hover:bg-sky-500',
      hoverColor: 'group-hover:text-sky-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/contsoldev',
      color: 'hover:bg-blue-700',
      hoverColor: 'group-hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/contsoldev',
      color: 'hover:bg-pink-600',
      hoverColor: 'group-hover:text-pink-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/contsoldev',
      color: 'hover:bg-gray-800',
      hoverColor: 'group-hover:text-gray-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Software Development', href: '#services' },
    { name: 'AI Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' }
  ];

  const creativeServices = [
    { name: 'Logo Design', href: '#services' },
    { name: 'Social Media Management', href: '#services' },
    { name: 'Photo Production', href: '#services' },
    { name: 'Video Ads Production', href: '#services' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo and Company Name */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <svg 
                  className="w-12 h-12 transform group-hover:scale-110 transition-all duration-300" 
                  viewBox="0 0 100 100" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#4ECDC4', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#2c5f7a', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M15 25 Q25 15, 45 20 Q65 10, 85 25 Q75 45, 55 40 Q35 50, 15 25 Z" 
                    fill="url(#footerLogoGradient)"
                  />
                  <path 
                    d="M20 65 Q30 50, 50 55 Q70 45, 80 65 Q70 80, 50 75 Q30 85, 20 65 Z" 
                    fill="url(#footerLogoGradient)"
                  />
                  <circle cx="50" cy="35" r="3" fill="#fbbf24" className="animate-pulse" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-teal-400 group-hover:text-white transition-colors duration-300">
                    Cont Solutions
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Continuous Development, Innovative Solutions
                  </p>
                </div>
              </div>

              {/* Company Description */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                Your trusted partner for digital transformation. We help businesses thrive in the digital age 
                with innovative technology solutions and creative services.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:contsolhelp@gmail.com" className="hover:underline">
                    contsolhelp@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  <a href="https://wa.me/6288225444313" className="hover:underline">
                    +62 882-2544-4313
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p>Jl. Persatuan 3 No.28</p>
                    <p>Yogyakarta, Indonesia 55281</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className={`w-5 h-5 text-gray-400 transition-colors duration-300 ${social.hoverColor}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-teal-400" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Solutions */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Code className="w-5 h-5 text-blue-400" />
                <span>IT Solutions</span>
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creative Studio */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span>Creative Studio</span>
              </h4>
              <ul className="space-y-3">
                {creativeServices.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center justify-center space-x-2">
                <Mail className="w-6 h-6 text-teal-400" />
                <span>Stay Updated</span>
              </h4>
              <p className="text-gray-300 mb-6">
                Get the latest updates on our services and tech insights.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span>&copy; {currentYear} Cont Solution Indonesia.</span>
                <span>All rights reserved.</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-yellow-600" />
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Built with:</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-gray-800 rounded text-blue-400">React</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-blue-600">TypeScript</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-cyan-400">Tailwind</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-green-400">GSAP</span>
                </div>
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}
    </footer>
  );
};

export default Footer;