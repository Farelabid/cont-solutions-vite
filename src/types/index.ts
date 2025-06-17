export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'it' | 'creative';
  features?: string[];
  price?: string;
}

export interface ServiceCardProps {
  service: {
    category: string;
    icon: string;
    title: string;
    description: string;
  };
  index: number;
}

export interface ServiceCategory {
  name: string;
  icon: string;
  services: Service[];
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialMediaLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
  bio?: string;
  skills?: string[];
  socialMedia?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
  };
}