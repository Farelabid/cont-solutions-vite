import type { Service, TeamMember, ContactInfo } from '@/types';

export const services: Service[] = [
  // IT Solutions
  {
    id: 'it-manpower',
    title: 'IT Manpower Sharing',
    description: 'Providing skilled IT professionals to supplement your team and ensure project success.',
    icon: '👨‍💻',
    category: 'it',
    features: [
      'Skilled developers and engineers',
      'Flexible engagement models',
      'Quick onboarding process',
      'Cost-effective solutions',
      'Experienced professionals'
    ],
    price: 'Starting from $500/month'
  },
  {
    id: 'product-dev',
    title: 'Product Development',
    description: 'Offering comprehensive product development services, from concept to launch, tailored to your business needs.',
    icon: '🚀',
    category: 'it',
    features: [
      'End-to-end development',
      'Agile methodology',
      'MVP development',
      'Scalable architecture',
      'Post-launch support'
    ],
    price: 'Custom pricing'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Building responsive, user-friendly, and engaging websites to enhance your online presence.',
    icon: '🌐',
    category: 'it',
    features: [
      'Responsive design',
      'SEO optimization',
      'Fast loading speed',
      'Modern frameworks',
      'CMS integration'
    ],
    price: 'Starting from $1,000'
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    description: 'Developing custom software applications designed to solve your unique business challenges.',
    icon: '💻',
    category: 'it',
    features: [
      'Custom solutions',
      'Cloud integration',
      'API development',
      'Database design',
      'Security focused'
    ],
    price: 'Starting from $2,500'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Creating high-performance, cross-platform mobile apps for iOS and Android.',
    icon: '📱',
    category: 'it',
    features: [
      'Cross-platform development',
      'Native performance',
      'Offline capabilities',
      'Push notifications',
      'App store deployment'
    ],
    price: 'Starting from $3,000'
  },
  {
    id: 'iot-dev',
    title: 'IoT Development',
    description: 'Innovating and connecting your devices through seamless IoT solutions for smarter operations.',
    icon: '🔌',
    category: 'it',
    features: [
      'Device connectivity',
      'Real-time monitoring',
      'Data analytics',
      'Cloud integration',
      'Security protocols'
    ],
    price: 'Custom pricing'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Turning raw data into actionable insights through advanced data analysis techniques.',
    icon: '📊',
    category: 'it',
    features: [
      'Data visualization',
      'Predictive analytics',
      'Business intelligence',
      'Report automation',
      'Machine learning'
    ],
    price: 'Starting from $1,500'
  },
  {
    id: 'network-install',
    title: 'Network Installation',
    description: 'Designing and implementing robust, secure network infrastructures for your business.',
    icon: '🔧',
    category: 'it',
    features: [
      'Network design',
      'Security implementation',
      'Performance optimization',
      'Monitoring setup',
      '24/7 support'
    ],
    price: 'Custom pricing'
  },
  {
    id: 'ai-dev',
    title: 'AI Development',
    description: 'Integrating AI technologies to automate tasks and improve business efficiency.',
    icon: '🤖',
    category: 'it',
    features: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision',
      'Automation solutions',
      'AI consultation'
    ],
    price: 'Starting from $5,000'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and creating seamless user experiences.',
    icon: '🎨',
    category: 'it',
    features: [
      'User research',
      'Wireframing',
      'Prototyping',
      'Visual design',
      'Usability testing'
    ],
    price: 'Starting from $800'
  },
  
  // Creative Studio
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Creating unique and memorable logos that define your brand identity.',
    icon: '🎯',
    category: 'creative',
    features: [
      'Brand identity design',
      'Multiple concepts',
      'Unlimited revisions',
      'Vector files',
      'Brand guidelines'
    ],
    price: 'Starting from $300'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Managing your social media presence to engage and grow your audience across all platforms.',
    icon: '📱',
    category: 'creative',
    features: [
      'Content creation',
      'Scheduling posts',
      'Community management',
      'Analytics reporting',
      'Campaign management'
    ],
    price: 'Starting from $500/month'
  },
  {
    id: 'photo-production',
    title: 'Photo Production',
    description: 'Professional photography services to showcase your products or services in the best light.',
    icon: '📸',
    category: 'creative',
    features: [
      'Product photography',
      'Event coverage',
      'Photo editing',
      'Studio/on-location',
      'High-resolution images'
    ],
    price: 'Starting from $400'
  },
  {
    id: 'video-ads',
    title: 'Video Ads Production',
    description: 'Creating compelling video advertisements to promote your brand and products effectively.',
    icon: '🎬',
    category: 'creative',
    features: [
      'Script writing',
      'Professional filming',
      'Video editing',
      'Motion graphics',
      'Multi-platform optimization'
    ],
    price: 'Starting from $1,000'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'muhammad-iqbal',
    name: 'Muhammad Iqbal G.',
    role: 'Software Engineer & IoT Engineer',
    initials: 'MIG',
    image: 'assets/team/iqbal.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/muhammad-iqbal',
      github: 'https://github.com/muhammadiqbal'
    }
  },
  {
    id: 'muhammad-islakha',
    name: 'Muhammad Islakha',
    role: 'AI Engineer & Data Analyst',
    initials: 'MI',
    image: 'assets/team/islakha.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/muhammad-islakha',
      github: 'https://github.com/muhammadislakha'
    }
  },
  {
    id: 'rizky-gustiantoro',
    name: 'Rizky Gustiantoro',
    role: 'Mobile Developer & Website Developer',
    initials: 'RG',
    image: 'assets/team/rizky.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/rizky-gustiantoro',
      github: 'https://github.com/rizkygustiantoro'
    }
  },
  {
    id: 'rizal-hanifa',
    name: 'Rizal Hanifa P.',
    role: 'Project Manager & Business Development',
    initials: 'RHP',
    image: 'assets/team/rizal.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/rizal-hanifa'
    }
  },
  {
    id: 'seva-giantama',
    name: 'Seva Giantama F.',
    role: 'UI/UX Design & Mobile Developer',
    initials: 'SGF',
    image: 'assets/team/seva.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/seva-giantama',
      github: 'https://github.com/sevagiantama'
    }
  },
  {
    id: 'refanda-dicky',
    name: 'Refanda Dicky P.',
    role: 'Network Engineer & Field Technician',
    initials: 'RDP',
    image: 'assets/team/refanda.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/refanda-dicky'
    }
  },
  {
    id: 'farel-abid',
    name: 'Farel Abid Y.',
    role: 'Creative Developer',
    initials: 'FAY',
    image: 'assets/team/farel.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/farel-abid',
      github: 'https://github.com/farelabid'
    }
  },
  {
    id: 'aditya-alex',
    name: 'Aditya "Alex" P.',
    role: 'Network Engineer',
    initials: 'AP',
    image: 'assets/team/aditya.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/aditya-alex'
    }
  },
  {
    id: 'husnan-maulana',
    name: 'Husnan Maulana S.',
    role: 'Graphic Designer',
    initials: 'HMS',
    image: 'assets/team/husnan.png',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/husnan-maulana',
      twitter: 'https://twitter.com/husnanmaulana'
    }
  }
];

export const contactInfo: ContactInfo = {
  email: 'contsolhelp@gmail.com',
  whatsapp: '+62 882-2544-4313',
  address: {
    street: 'Jl. Persatuan 3 No.28, RT.07/RW.20, Demangan, Maguwoharjo',
    city: 'Kec. Depok, Kabupaten Sleman',
    province: 'Daerah Istimewa Yogyakarta',
    postalCode: '55281'
  }
};

export const companyInfo = {
  name: 'Cont Solution Indonesia',
  tagline: 'Continuous Development, Innovative Solutions',
  description: 'Cont Solution was established in 2023. Initially, we focused on providing task assistance related to computer science, developing systems for Student Creativity Programs (PKM), and creating other systems needed by students to execute their creative ideas.',
  vision: 'To help solve problems through creative, innovative, and effective digital technology transformation.',
  mission: [
    'Providing Consultation Services for Problem Solving',
    'Empowering Productivity',
    'Optimizing Operations',
    'Offering Affordable and Sustainable Services'
  ],
  values: [
    'Innovation',
    'Quality',
    'Integrity',
    'Customer Focus'
  ]
};