// src/components/sections/Team.tsx - Advanced Interactive Team

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  Coffee,
  Heart,
  Sparkles,
  Users,
  Camera
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { teamMembers } from '../../data';
import type { TeamMember } from '../../types';

gsap.registerPlugin(ScrollTrigger);

const Team: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);

  // Team member additional info (simulated)
  const memberDetails: { [key: string]: any } = {
    'muhammad-iqbal': {
      bio: 'Passionate software engineer with expertise in IoT systems and embedded programming. Loves building innovative solutions.',
      skills: ['Python', 'Arduino', 'React', 'Node.js', 'IoT'],
      experience: '3+ years',
      location: 'Yogyakarta',
      hobby: 'Electronics & Robotics',
      socialMedia: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    'muhammad-islakha': {
      bio: 'AI enthusiast and data scientist, specializing in machine learning and data visualization. Always exploring new AI trends.',
      skills: ['Python', 'TensorFlow', 'Data Science', 'ML', 'Analytics'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Machine Learning & Gaming',
      socialMedia: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    'rizky-gustiantoro': {
      bio: 'Full-stack developer with strong mobile development skills. Expert in creating responsive and user-friendly applications.',
      skills: ['React Native', 'Flutter', 'JavaScript', 'PHP', 'MySQL'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Mobile Apps & Travel',
      socialMedia: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    'rizal-hanifa': {
      bio: 'Strategic project manager with business development expertise. Ensures projects are delivered on time and exceed expectations.',
      skills: ['Project Management', 'Business Strategy', 'Agile', 'Leadership'],
      experience: '4+ years',
      location: 'Yogyakarta',
      hobby: 'Business Strategy & Sports',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    'seva-giantama': {
      bio: 'Creative UI/UX designer and mobile developer. Passionate about creating beautiful and intuitive user experiences.',
      skills: ['Figma', 'Adobe XD', 'React Native', 'UI/UX', 'Prototyping'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Design & Photography',
      socialMedia: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    'refanda-dicky': {
      bio: 'Network infrastructure specialist and field technician. Expert in network security and system administration.',
      skills: ['Network Security', 'System Admin', 'Linux', 'Cisco', 'Infrastructure'],
      experience: '3+ years',
      location: 'Yogyakarta',
      hobby: 'Networking & Cybersecurity',
      socialMedia: {
        linkedin: 'https://linkedin.com'
      }
    },
    'farel-abid': {
      bio: 'Creative developer with a passion for innovative digital solutions. Bridges the gap between design and development.',
      skills: ['JavaScript', 'Creative Coding', 'Animation', 'WebGL', 'Three.js'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Creative Coding & Music',
      socialMedia: {
        github: 'https://github.com',
        twitter: 'https://twitter.com'
      }
    },
    'aditya-alex': {
      bio: 'Network engineer focused on building robust and scalable network infrastructure for modern businesses.',
      skills: ['Network Engineering', 'Routing', 'Switching', 'VPN', 'Monitoring'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Tech Innovation & Gaming',
      socialMedia: {
        linkedin: 'https://linkedin.com'
      }
    },
    'husnan-maulana': {
      bio: 'Talented graphic designer with an eye for detail. Creates stunning visual content that communicates effectively.',
      skills: ['Adobe Creative Suite', 'Branding', 'Print Design', 'Digital Art', 'Typography'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Visual Arts & Photography',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  };

  // Team member hover effects
  const handleMemberHover = (memberId: string) => {
    setHoveredMember(memberId);
    const card = document.querySelector(`[data-member="${memberId}"]`);
    if (card) {
      gsap.to(card, {
        y: -15,
        rotationY: 5,
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const handleMemberLeave = (memberId: string) => {
    setHoveredMember(null);
    const card = document.querySelector(`[data-member="${memberId}"]`);
    if (card) {
      gsap.to(card, {
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  // Initial animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-card',
        {
          opacity: 0,
          y: 60,
          rotationX: -20
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
    const details = memberDetails[member.id] || {};
    
    return (
      <div
        data-member={member.id}
        className="team-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden"
        onMouseEnter={() => handleMemberHover(member.id)}
        onMouseLeave={() => handleMemberLeave(member.id)}
        onClick={() => setSelectedMember(member)}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating background elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-6 h-6 bg-teal-200 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Avatar / Photo Placeholder */}
          <div className="relative mx-auto mb-6">
            {member.avatar ? (
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-500 border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-all duration-500 shadow-lg relative">
                {member.initials}
                
                {/* Photo placeholder overlay */}
                <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            )}
            
            {/* Online status indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          </div>

          {/* Member Info */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
            {member.name}
          </h3>

          <p className="text-teal-600 font-medium text-sm mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {member.role}
          </p>

          {/* Quick Stats */}
          {details.experience && (
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{details.experience}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{details.location}</span>
              </div>
            </div>
          )}

          {/* Skills Preview */}
          {details.skills && (
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {details.skills.slice(0, 3).map((skill: string, index: number) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full group-hover:bg-teal-200 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
              {details.skills.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{details.skills.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Social Media Links */}
          <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {details.socialMedia?.github && (
              <a href={details.socialMedia.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
            {details.socialMedia?.linkedin && (
              <a href={details.socialMedia.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {details.socialMedia?.twitter && (
              <a href={details.socialMedia.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            <button className="text-gray-400 hover:text-green-600 transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>

          {/* View Profile Button */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold rounded-full hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
              View Profile
            </button>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
      </div>
    );
  };

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-gray-700">Our Amazing Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Expert Team</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Talented professionals ready to bring your ideas to life with passion and expertise
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-teal-600 mb-2">9</div>
            <div className="text-gray-600 font-medium">Team Members</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Specializations</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Dedication</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>

        {/* Team Grid */}
        <div 
          ref={teamGridRef}
          className="team-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
        >
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              index={index}
            />
          ))}
        </div>

        {/* Photo Upload Call-to-Action */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 text-center border border-teal-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📸 Team Photos Coming Soon!
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We're preparing professional photos of our amazing team members. 
            Real photos will be added here to showcase the talented individuals behind Cont Solutions.
          </p>
          <div className="inline-flex items-center space-x-2 text-teal-600 font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>Photo shoot scheduled this month!</span>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {selectedMember.initials}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedMember.name}
                  </h3>
                  <p className="text-teal-600 font-medium">{selectedMember.role}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            {memberDetails[selectedMember.id] && (
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {memberDetails[selectedMember.id].bio}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {memberDetails[selectedMember.id].skills?.map((skill: string, index: number) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Experience: {memberDetails[selectedMember.id].experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Location: {memberDetails[selectedMember.id].location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Hobby: {memberDetails[selectedMember.id].hobby}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Status: Available</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex space-x-4 mt-8">
              <button 
                onClick={() => setSelectedMember(null)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300"
              >
                Connect
              </button>
              <button 
                onClick={() => setSelectedMember(null)}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;