// src/types/index.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'it' | 'creative';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
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

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}

export interface TeamMemberProps {
  member: TeamMember;
  index: number;
}