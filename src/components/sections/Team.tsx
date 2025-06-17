import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  Github, 
  Linkedin, 
  Twitter,
  Mail,
  Briefcase,
  MapPin,
  Heart,
  Code,
  Award,
  X
} from 'lucide-react';
import { teamMembers } from '@/data';
import type { TeamMember } from '@/types';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const memberDetails: { [key: string]: any } = {
    'muhammad-iqbal': {
      bio: 'Experienced software engineer specializing in IoT solutions and embedded systems. Passionate about creating innovative technology that bridges the physical and digital worlds.',
      skills: ['IoT Development', 'Embedded Systems', 'C++', 'Python', 'Arduino', 'Raspberry Pi'],
      experience: '3+ years',
      location: 'Yogyakarta',
      hobby: 'Electronics & Robotics',
      achievements: ['Built 10+ IoT projects', 'Smart Home Expert', 'Arduino Certified']
    },
    'muhammad-islakha': {
      bio: 'AI enthusiast and data scientist with expertise in machine learning and predictive analytics. Turning complex data into actionable business insights.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analysis', 'SQL', 'Deep Learning'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'AI Research & Gaming',
      achievements: ['ML Competition Winner', 'Published Research Paper', 'Data Science Certified']
    },
    'rizky-gustiantoro': {
      bio: 'Full-stack developer with a focus on mobile and web applications. Creating seamless user experiences across all platforms with modern technologies.',
      skills: ['React Native', 'Flutter', 'JavaScript', 'PHP', 'MySQL', 'Node.js'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Mobile Tech & Travel',
      achievements: ['20+ Apps Developed', 'Google Play Publisher', 'Full Stack Certified']
    },
    'rizal-hanifa': {
      bio: 'Strategic project manager ensuring successful delivery of complex projects. Expert in agile methodologies and team leadership with a focus on client satisfaction.',
      skills: ['Project Management', 'Agile/Scrum', 'Business Strategy', 'Leadership', 'Risk Management'],
      experience: '4+ years',
      location: 'Yogyakarta',
      hobby: 'Business Strategy & Sports',
      achievements: ['PMP Certified', 'Scrum Master', '95% Project Success Rate']
    },
    'seva-giantama': {
      bio: 'Creative UI/UX designer and mobile developer. Bridging the gap between beautiful design and functional technology to create memorable user experiences.',
      skills: ['UI/UX Design', 'Figma', 'React Native', 'Adobe XD', 'Prototyping', 'User Research'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Design & Photography',
      achievements: ['Design Award Winner', '50+ UI Projects', 'Google UX Certified']
    },
    'refanda-dicky': {
      bio: 'Network engineer specializing in infrastructure design and security. Building robust and secure network solutions for modern businesses.',
      skills: ['Network Security', 'Cisco', 'Routing & Switching', 'Firewall', 'VPN', 'Cloud Networking'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Tech Innovation & Gaming',
      achievements: ['CCNA Certified', 'Security Specialist', 'Cloud Network Expert']
    },
    'farel-abid': {
      bio: 'Creative developer exploring the intersection of art and technology. Bringing creative visions to life through interactive experiences and stunning visuals.',
      skills: ['Creative Coding', 'Three.js', 'WebGL', 'Animation', 'Interactive Design', 'p5.js'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Digital Art & Music',
      achievements: ['Creative Coding Expert', 'Interactive Art Shows', 'WebGL Specialist']
    },
    'aditya-alex': {
      bio: 'Network specialist focused on optimization and troubleshooting. Ensuring smooth and efficient network operations for maximum uptime.',
      skills: ['Network Administration', 'Troubleshooting', 'Linux', 'Security', 'Monitoring', 'Automation'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Technology & Sports',
      achievements: ['Linux Certified', 'Network Optimizer', '99.9% Uptime Record']
    },
    'husnan-maulana': {
      bio: 'Graphic designer with a keen eye for visual aesthetics. Creating compelling visual narratives that communicate brand stories effectively.',
      skills: ['Adobe Creative Suite', 'Branding', 'Typography', 'Illustration', 'Motion Graphics', '3D Design'],
      experience: '2+ years',
      location: 'Yogyakarta',
      hobby: 'Art & Photography',
      achievements: ['Design Portfolio 100+', 'Brand Identity Expert', 'Adobe Certified']
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.team-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.team-header',
          start: 'top 80%'
        }
      });

      // Cards stagger animation
      gsap.from('.team-card', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-20 relative bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="team-header text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/20 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold">Our Amazing Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Talented professionals ready to bring your ideas to life with passion and expertise
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Team Members', value: '9', icon: Users },
            { label: 'Projects Done', value: '50+', icon: Code },
            { label: 'Technologies', value: '5+', icon: Award },
            { label: 'Dedication', value: '100%', icon: Heart }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200/50 dark:border-dark-700/50 glass">
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="team-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const details = memberDetails[member.id] || {};
            
            return (
              <div
                key={member.id}
                className="team-card group"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div 
                  className={clsx(
                    "bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/50 dark:border-dark-700/50 glass",
                    "hover:shadow-2xl transition-all cursor-pointer",
                    hoveredMember === member.id && "transform -translate-y-2"
                  )}
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Avatar */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 dark:border-dark-700 group-hover:border-primary-500 transition-colors">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={clsx(
                        "w-full h-full bg-gradient-to-br from-primary-400 to-secondary-600 flex items-center justify-center",
                        member.image ? "hidden" : ""
                      )}>
                        <span className="text-3xl font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-dark-800 animate-pulse" />
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>

                  {/* Quick Info */}
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{details.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{details.location}</span>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {details.skills?.slice(0, 3).map((skill: string, idx: number) => (
                      <span key={idx} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                    {details.skills?.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{details.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-600 text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all hover:shadow-lg">
                    View Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Member Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            
            <div 
              className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-lg rounded-2xl max-w-2xl w-full shadow-2xl border border-gray-200/50 dark:border-dark-700/50 glass"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-600 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {selectedMember.initials}
                        </span>
                      </div>
                    </div>
                    
                    {/* Basic Info */}
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{selectedMember.name}</h3>
                      <p className="text-primary-600 dark:text-primary-400 mb-2">{selectedMember.role}</p>
                      <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {memberDetails[selectedMember.id]?.experience}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {memberDetails[selectedMember.id]?.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-dark-700/50"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {memberDetails[selectedMember.id]?.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {memberDetails[selectedMember.id]?.skills.map((skill: string, idx: number) => (
                      <span key={idx} className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Achievements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {memberDetails[selectedMember.id]?.achievements.map((achievement: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Award className="w-4 h-4 text-primary-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex space-x-3">
                    {selectedMember.socialMedia?.linkedin && (
                      <a 
                        href={selectedMember.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100/50 dark:bg-dark-700/50 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember.socialMedia?.github && (
                      <a 
                        href={selectedMember.socialMedia.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100/50 dark:bg-dark-700/50 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <button className="p-2 bg-gray-100/50 dark:bg-dark-700/50 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>

                  <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-full hover:shadow-lg transition-all">
                    Contact {selectedMember.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;