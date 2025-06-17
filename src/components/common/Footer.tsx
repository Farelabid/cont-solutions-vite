import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  Mail,
  Phone,
  MapPin,
  Heart,
  Coffee,
} from 'lucide-react';
import { contactInfo, companyInfo } from '@/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/contsoldev' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/contsoldev' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/contsoldev' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/contsoldev' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/contsoldev' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'AI Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' }
  ];

  return (
    <footer className="bg-dark-900 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cont Solutions</h3>
                  <p className="text-xs text-gray-400">Indonesia</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {companyInfo.tagline}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-primary-500 rounded-full" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-primary-500 rounded-full" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">{contactInfo.email}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">{contactInfo.whatsapp}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}<br />
                      {contactInfo.address.province} {contactInfo.address.postalCode}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} {companyInfo.name}. All rights reserved.
                </p>
              </div>

              {/* Built with */}
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-400 flex items-center space-x-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>and</span>
                  <Coffee className="w-4 h-4 text-yellow-500" />
                  <span>in Yogyakarta</span>
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 text-gray-400">
                <span className="text-sm">Built with:</span>
                <div className="flex items-center space-x-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">TypeScript</span>
                  <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;