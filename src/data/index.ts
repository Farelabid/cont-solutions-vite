// src/data/index.ts

// src/data/index.ts
import type { Service, TeamMember, ContactInfo } from '../types';
export const services: Service[] = [
  // IT Solutions
  {
    id: 'it-manpower',
    title: 'IT Manpower Sharing',
    description: 'Providing skilled IT professionals to supplement your team and ensure project success.',
    icon: '👥',
    category: 'it'
  },
  {
    id: 'product-dev',
    title: 'Product Development',
    description: 'Offering comprehensive product development services, from concept to launch, tailored to your business needs.',
    icon: '🚀',
    category: 'it'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Building responsive, user-friendly, and engaging websites to enhance your online presence.',
    icon: '🌐',
    category: 'it'
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    description: 'Developing custom software applications designed to solve your unique business challenges.',
    icon: '💻',
    category: 'it'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Creating high-performance, cross-platform mobile apps for iOS and Android.',
    icon: '📱',
    category: 'it'
  },
  {
    id: 'iot-dev',
    title: 'IoT Development',
    description: 'Innovating and connecting your devices through seamless IoT solutions for smarter operations.',
    icon: '🔗',
    category: 'it'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Turning raw data into actionable insights through advanced data analysis techniques.',
    icon: '📊',
    category: 'it'
  },
  {
    id: 'network-install',
    title: 'Network Installation',
    description: 'Designing and implementing robust, secure network infrastructures for your business.',
    icon: '🔧',
    category: 'it'
  },
  {
    id: 'ai-dev',
    title: 'AI Development',
    description: 'Integrating AI technologies to automate tasks and improve business efficiency.',
    icon: '🤖',
    category: 'it'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and creating seamless user experiences.',
    icon: '🎨',
    category: 'it'
  },
  // Creative Studio
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Creating unique and memorable logos that define your brand identity and make lasting impressions.',
    icon: '🎯',
    category: 'creative'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Managing your social media presence to engage and grow your audience across all platforms.',
    icon: '📱',
    category: 'creative'
  },
  {
    id: 'photo-production',
    title: 'Photo Production',
    description: 'Professional photography services to showcase your products or services in the best light.',
    icon: '📸',
    category: 'creative'
  },
  {
    id: 'video-ads',
    title: 'Video Ads Production',
    description: 'Creating compelling video advertisements to promote your brand and products effectively.',
    icon: '🎬',
    category: 'creative'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'muhammad-iqbal',
    name: 'Muhammad Iqbal G.',
    role: 'Software Engineer & IoT Engineer',
    initials: 'MIG'
  },
  {
    id: 'muhammad-islakha',
    name: 'Muhammad Islakha',
    role: 'AI Engineer & Data Analyst',
    initials: 'MI'
  },
  {
    id: 'rizky-gustiantoro',
    name: 'Rizky Gustiantoro',
    role: 'Mobile Developer & Website Developer',
    initials: 'RG'
  },
  {
    id: 'rizal-hanifa',
    name: 'Rizal Hanifa P.',
    role: 'Project Manager & Business Development',
    initials: 'RHP'
  },
  {
    id: 'seva-giantama',
    name: 'Seva Giantama F.',
    role: 'UI/UX Design & Mobile Developer',
    initials: 'SGF'
  },
  {
    id: 'refanda-dicky',
    name: 'Refanda Dicky P.',
    role: 'Network Engineer & Field Technician',
    initials: 'RDP'
  },
  {
    id: 'farel-abid',
    name: 'Farel Abid Y.',
    role: 'Creative Developer',
    initials: 'FAY'
  },
  {
    id: 'aditya-alex',
    name: 'Aditya "Alex" P.',
    role: 'Network Engineer',
    initials: 'AP'
  },
  {
    id: 'husnan-maulana',
    name: 'Husnan Maulana S.',
    role: 'Graphic Designer',
    initials: 'HMS'
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
  ]
};