// src/components/sections/Team.tsx - Simple GSAP Only

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  Award, 
  Coffee, 
  MapPin, 
  Heart, 
  X, 
  Sparkles,
  Code,
  Palette,
  Network,
  Camera,
  Briefcase
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Simplified interfaces
interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  category: string;
}

interface MemberDetails {
  bio: string;
  skills: string[];
  experience: string;
  location: string;
  hobby: string;
  photoPath?: string;
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 'iqbal',
      name: 'Muhammad Iqbal G.',
      role: 'Software Engineer & IoT Engineer',
      initials: 'IG',
      category: 'tech'
    },
    {
      id: 'islakha',
      name: 'Muhammad Islakha',
      role: 'AI Engineer & Data Analyst',
      initials: 'MI',
      category: 'tech'
    },
    {
      id: 'rizky',
      name: 'Rizky Gustiantoro',
      role: 'Mobile Developer & Website Developer',
      initials: 'RG',
      category: 'tech'
    },
    {
      id: 'rizal',
      name: 'Rizal Hanifa P.',
      role: 'Project Manager & Business Development',
      initials: 'RH',
      category: 'business'
    },
    {
      id: 'seva',
      name: 'Seva Giantama F.',
      role: 'UI/UX Design & Mobile Developer',
      initials: 'SG',
      category: 'design'
    },
    {
      id: 'refanda',
      name: 'Refanda Dicky P.',
      role: 'Network Engineer & Field Technician',
      initials: 'RD',
      category: 'tech'
    },
    {
      id: 'farel',
      name: 'Farel Abid Y.',
      role: 'Creative Developer',
      initials: 'FA',
      category: 'creative'
    },
    {
      id: 'aditya',
      name: 'Aditya "Alex" P.',
      role: 'Network Engineer',
      initials: 'AP',
      category: 'tech'
    },
    {
      id: 'husnan',
      name: 'Husnan Maulana S.',
      role: 'Graphic Designer',
      initials: 'HM',
      category: 'creative'
    }
  ];

  // Member details
  const memberDetails: Record<string, MemberDetails> = {
    'iqbal': {
      bio: 'Experienced software engineer specializing in IoT solutions and embedded systems. Passionate about creating smart, connected devices that solve real-world problems.',
      skills: ['IoT Development', 'Embedded Systems', 'Python', 'C++', 'Arduino'],
      experience: '4+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Electronics & Robotics',
      photoPath: '/assets/team/iqbal.png'
    },
    'islakha': {
      bio: 'AI engineer with expertise in machine learning and data analysis. Focused on building intelligent systems that drive business insights and automation.',
      skills: ['Machine Learning', 'Data Analysis', 'Python', 'TensorFlow', 'Statistical Modeling'],
      experience: '3+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Data Science Research',
      photoPath: '/assets/team/islakha.png'
    },
    'rizky': {
      bio: 'Full-stack developer with strong mobile and web development skills. Creates responsive, user-friendly applications across multiple platforms.',
      skills: ['React Native', 'Flutter', 'Node.js', 'React', 'MongoDB'],
      experience: '3+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Mobile Gaming',
      photoPath: '/assets/team/rizky.png'
    },
    'rizal': {
      bio: 'Strategic project manager and business development specialist. Leads teams to deliver successful projects while building strong client relationships.',
      skills: ['Project Management', 'Business Strategy', 'Client Relations', 'Agile', 'Leadership'],
      experience: '5+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Business Strategy',
      photoPath: '/assets/team/rizal.png'
    },
    'seva': {
      bio: 'Creative UI/UX designer and mobile developer. Bridges the gap between design and development to create beautiful, functional user experiences.',
      skills: ['UI/UX Design', 'Figma', 'React Native', 'Prototyping', 'User Research'],
      experience: '3+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Digital Art',
      photoPath: '/assets/team/seva.png'
    },
    'refanda': {
      bio: 'Network infrastructure specialist and field technician. Ensures robust, secure network solutions for optimal business operations.',
      skills: ['Network Administration', 'Cisco', 'Security', 'Troubleshooting', 'Infrastructure'],
      experience: '4+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Network Security',
      photoPath: '/assets/team/refanda.png'
    },
    'farel': {
      bio: 'Creative developer with a unique blend of artistic vision and technical skills. Specializes in innovative digital experiences and interactive media.',
      skills: ['Creative Coding', 'JavaScript', 'Animation', 'WebGL', 'Interactive Design'],
      experience: '2+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Digital Art & Animation',
      photoPath: '/assets/team/farel.png'
    },
    'aditya': {
      bio: 'Network engineer focused on designing and maintaining reliable network infrastructures. Passionate about emerging networking technologies.',
      skills: ['Network Design', 'Router Configuration', 'Network Security', 'Monitoring', 'Optimization'],
      experience: '3+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Tech Innovation',
      photoPath: '/assets/team/aditya.png'
    },
    'husnan': {
      bio: 'Talented graphic designer creating compelling visual communications. Transforms ideas into stunning visual designs that engage and inspire.',
      skills: ['Graphic Design', 'Adobe Creative Suite', 'Branding', 'Print Design', 'Digital Media'],
      experience: '3+ years',
      location: 'Yogyakarta, Indonesia',
      hobby: 'Visual Arts',
      photoPath: '/assets/team/husnan.png'
    }
  };

  const handleImageError = (memberId: string) => {
    setImageErrors(prev => ({ ...prev, [memberId]: true }));
  };

  // Modal functions
  const openMemberModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  // Get role icon
  const getRoleIcon = (category: string) => {
    switch (category) {
      case 'tech': return Code;
      case 'design': return Palette;
      case 'creative': return Camera;
      case 'business': return Briefcase;
      default: return Users;
    }
  };

  // 🎯 SIMPLE Team member card - GSAP only
  const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const card = cardRef.current;
      if (!card) return;

      // Simple GSAP scroll animation
      const ctx = gsap.context(() => {
        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 20 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Simple hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            y: -8, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            y: 0, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
      });

      return () => ctx.revert();
    }, [index]);

    const RoleIcon = getRoleIcon(member.category);
    const memberDetail = memberDetails[member.id];

    return (
      <div
        ref={cardRef}
        onClick={() => openMemberModal(member)}
        className="bg-white rounded-2xl p-8 shadow-lg text-center cursor-pointer"
      >
        {/* Avatar */}
        <div className="relative mb-6">
          {memberDetail?.photoPath && !imageErrors[member.id] ? (
            <img 
              src={memberDetail.photoPath}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
              onError={() => handleImageError(member.id)}
            />
          ) : (
            <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold shadow-lg">
              {member.initials}
            </div>
          )}
          
          {/* Role Icon */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <RoleIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {member.name}
        </h3>
        
        <p className="text-teal-500 font-medium text-sm mb-4">
          {member.role}
        </p>

        {/* View Profile Button */}
        <div className="mt-4">
          <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold rounded-full hover:from-teal-600 hover:to-blue-700 transition-all">
            View Profile
          </button>
        </div>
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
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">9</div>
            <div className="text-gray-600 font-medium">Team Members</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              index={index}
            />
          ))}
        </div>

        {/* Team Info Section */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 text-center border border-teal-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Meet Our Team?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our diverse team brings together expertise in technology, design, and business to deliver exceptional results. 
            Each member contributes unique skills and perspectives to every project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 max-w-4xl mx-auto">
            <div className="flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>Collaborative team environment</span>
            </div>
            <div className="flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>Continuous learning culture</span>
            </div>
            <div className="flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>Innovative problem solving</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeMemberModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                {memberDetails[selectedMember.id]?.photoPath && !imageErrors[selectedMember.id] ? (
                  <img 
                    src={memberDetails[selectedMember.id].photoPath}
                    alt={selectedMember.name}
                    className="w-16 h-16 rounded-full object-cover"
                    onError={() => handleImageError(selectedMember.id)}
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {selectedMember.initials}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedMember.name}
                  </h3>
                  <p className="text-teal-600 font-medium">{selectedMember.role}</p>
                </div>
              </div>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                onClick={closeMemberModal}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
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

                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-gray-50 rounded-lg p-4">
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

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button 
                      onClick={closeMemberModal}
                      className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all"
                    >
                      Connect
                    </button>
                    <button 
                      onClick={closeMemberModal}
                      className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      View Portfolio
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;