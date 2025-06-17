// API Endpoints
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.contsoldev.com';

export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  QUOTE: '/api/quote'
};

// External Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/contsoldev',
  TWITTER: 'https://twitter.com/contsoldev',
  LINKEDIN: 'https://linkedin.com/company/contsoldev',
  INSTAGRAM: 'https://instagram.com/contsoldev',
  GITHUB: 'https://github.com/contsoldev'
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'contsolhelp@gmail.com',
  WHATSAPP: '+62 882-2544-4313',
  WHATSAPP_LINK: 'https://wa.me/6288225444313',
  MAPS_LINK: 'https://maps.app.goo.gl/mAW6LM52jGAHCFyL8'
};

// Google Maps Embed
export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.280631997628!2d110.4252730151655!3d-7.77317990382199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a69000fca3%3A0xb9d808a228857200!2sCont%20Solutions%20Indonesia%20Headquarter!5e0!3m2!1sen!2sid!4v1750099253931!5m2!1sen!2sid';

// Office Coordinates
export const OFFICE_COORDINATES = {
  lat: -7.773180,
  lng: 110.425273
};

// SEO Configuration
export const SEO_CONFIG = {
  SITE_NAME: 'Cont Solution Indonesia',
  DEFAULT_TITLE: 'Cont Solution Indonesia - Continuous Development, Innovative Solutions',
  DEFAULT_DESCRIPTION: 'Professional IT services, web development, mobile apps, and creative studio services. Transform your business with innovative technology solutions.',
  DEFAULT_KEYWORDS: 'IT solutions, web development, mobile apps, software development, IoT, AI development, UI/UX design, Yogyakarta, Indonesia',
  DEFAULT_IMAGE: '/og-image.png',
  SITE_URL: 'https://contsoldev.com'
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1,
  VERY_SLOW: 1.5
};

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
};

// Form Validation Rules
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\d\s\-\+\(\)]+$/,
  MESSAGE_MIN_LENGTH: 10,
  MESSAGE_MAX_LENGTH: 1000
};

// Theme Colors
export const COLORS = {
  PRIMARY: '#14b8a6',
  SECONDARY: '#3b82f6',
  ACCENT: '#fbbf24',
  DARK: '#0f172a',
  LIGHT: '#ffffff'
};

// Default Meta Tags
export const DEFAULT_META_TAGS = {
  'og:type': 'website',
  'og:site_name': SEO_CONFIG.SITE_NAME,
  'twitter:card': 'summary_large_image',
  'twitter:site': '@contsoldev'
};