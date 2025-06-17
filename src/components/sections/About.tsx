import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Lightbulb, 
  Users, 
  TrendingUp,
  CheckCircle,
  Award,
  Sparkles,
  Building
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { companyInfo } from '@/data';
import GlassCard from '@/components/common/GlassCard';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline animation
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats counter animation
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const endValue = parseInt(stat.getAttribute('data-value') || '0');
        
        ScrollTrigger.create({
          trigger: stat,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(stat, {
              innerHTML: endValue,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: "power2.out"
            });
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on delivering solutions that make a real difference'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Embracing cutting-edge technology to solve complex challenges'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority, always putting clients first'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Always learning, improving, and evolving with technology'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Started with a vision to help students and businesses with technology solutions'
    },
    {
      year: '2023',
      title: 'First Major Projects',
      description: 'Successfully delivered PKM systems and student creativity programs'
    },
    {
      year: '2024',
      title: 'Team Expansion',
      description: 'Grew to 9 talented professionals across various specializations'
    },
    {
      year: '2025',
      title: 'Service Diversification',
      description: 'Expanded into comprehensive IT solutions and creative services'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-dark-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/20 rounded-full px-6 py-3 mb-6">
            <Building className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              About Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building the Future
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <GlassCard>
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg italic">
                "{companyInfo.vision}"
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <ul className="space-y-3">
                {companyInfo.mission.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} className="group">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { value: 50, suffix: '+', label: 'Projects Completed' },
            { value: 25, suffix: '+', label: 'Happy Clients' },
            { value: 9, suffix: '', label: 'Team Members' },
            { value: 2, suffix: '+', label: 'Years Experience' }
          ].map((stat, index) => (
            <GlassCard key={index}>
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  <span className="stat-number" data-value={stat.value}>0</span>
                  {stat.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Company Timeline */}
        <div ref={timelineRef} className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-600"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white dark:bg-dark-800 rounded-full border-4 border-primary-500 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-600">
                        {milestone.year.slice(-2)}
                      </span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary-500/50 to-transparent"></div>
                    )}
                  </div>
                  <GlassCard className="flex-grow">
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <GlassCard className="inline-block">
            <div className="p-8 md:p-12">
              <Award className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Journey With Us?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                Let's work together to transform your ideas into reality with innovative solutions.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default About;