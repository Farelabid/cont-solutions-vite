// src/types/index.ts - Complete TypeScript Interfaces

import React from 'react';

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
  category?: string;
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

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  vision: string;
  mission: string[];
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface LoadingState {
  isLoading: boolean;
  progress: number;
}

export interface FormErrors {
  [key: string]: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

export interface ScrollTriggerConfig {
  trigger: string | HTMLElement;
  start: string;
  end?: string;
  scrub?: boolean;
  toggleActions?: string;
}