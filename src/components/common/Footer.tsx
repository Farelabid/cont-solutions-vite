// src/components/common/Footer.tsx - Updated Address & Google Maps

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
  Sparkles,
  Globe,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMap, setShowMap] = useState(false);
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

  // Social media links
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

  const itServices = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Software Development', href: '#services' },
    { name: 'AI Development', href: '#services' },
    { name: 'IoT Solutions', href: '#services' }
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
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3 group">
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
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="35" 
                    fill="url(#footerLogoGradient)"
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
                
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                    Cont Solutions
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-teal-300 transition-colors duration-300">
                    Continuous Development, Innovative Solutions
                  </span>
                </div>
              </div>

              {/* Company Description */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                Established in 2023, we provide comprehensive IT solutions and creative services 
                to help businesses transform and grow through innovative technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <a href="mailto:contsolhelp@gmail.com" className="hover:underline">
                    contsolhelp@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <a href="https://wa.me/6288225444313" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    +62 882-2544-4313
                  </a>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-semibold text-white mb-1">Cont Solutions Indonesia Headquarter</div>
                      <div>
                        Jl. Persatuan 3 No.28, RT.07/RW.20, Demangan, Maguwoharjo,<br />
                        Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps Links */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-3 ml-8">
                    <a
                      href="https://maps.app.goo.gl/4AWxLtv976tT4eGJ9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View on Google Maps</span>
                    </a>
                    
                    <button
                      onClick={() => setShowMap(!showMap)}
                      className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{showMap ? 'Hide Map' : 'Show Map'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              {showMap && (
                <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.2896593167768!2d110.42469092851486!3d-7.772997370730892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a69000fca3%3A0xb9d808a228857200!2sCont%20Solutions%20Indonesia%20Headquarter!5e0!3m2!1sen!2sid!4v1750058417344!5m2!1sen!2sid" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              )}

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Globe className="w-5 h-5 text-teal-400" />
                <span>Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Code className="w-5 h-5 text-teal-400" />
                <span>IT Solutions</span>
              </h3>
              <ul className="space-y-3">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.href.replace('#', ''))}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creative Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span>Creative Studio</span>
              </h3>
              <ul className="space-y-3">
                {creativeServices.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.href.replace('#', ''))}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-teal-400" />
                <span>Stay Updated</span>
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Get the latest updates on our services and technology insights.
              </p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>© {currentYear} Cont Solution Indonesia.</span>
                <span>All rights reserved.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-400 flex items-center space-x-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>and</span>
                  <Coffee className="w-4 h-4 text-yellow-500" />
                </span>
                
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>Built with:</span>
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">TypeScript</span>
                    <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full">Tailwind</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">GSAP</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Sitemap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;