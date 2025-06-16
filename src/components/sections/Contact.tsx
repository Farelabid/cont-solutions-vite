// src/components/sections/Contact.tsx - Advanced Interactive Contact

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  MessageCircle,
  Calendar,
  Globe,
  Zap,
  ChevronRight
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { contactInfo } from '../../data';
import type { ContactFormData } from '../../types';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Real-time validation
  const validateField = (name: keyof ContactFormData, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      
      case 'subject':
        if (!value.trim()) {
          newErrors.subject = 'Subject is required';
        } else if (value.trim().length < 5) {
          newErrors.subject = 'Subject must be at least 5 characters';
        } else {
          delete newErrors.subject;
        }
        break;
      
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.trim().length < 20) {
          newErrors.message = 'Message must be at least 20 characters';
        } else {
          delete newErrors.message;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Real-time validation
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const isValid = Object.keys(formData).every(key => 
      validateField(key as keyof ContactFormData, formData[key as keyof ContactFormData])
    );

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission with animation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Success animation
      gsap.fromTo('.success-message', 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Advanced form animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for contact items
      gsap.fromTo('.contact-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 90%'
          }
        }
      );

      // Form animation
      gsap.fromTo('.form-group',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 90%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const contactItems = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: contactInfo.email,
      secondary: 'We reply within 24 hours',
      action: `mailto:${contactInfo.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      primary: contactInfo.whatsapp,
      secondary: 'Available 9 AM - 6 PM',
      action: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Office',
      primary: 'Yogyakarta, Indonesia',
      secondary: `${contactInfo.address.street}`,
      action: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address.street)}`,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      primary: 'Book a consultation',
      secondary: 'Free 30-minute discovery call',
      action: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-teal-400 via-blue-500 to-blue-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/20">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your
            <span className="block text-yellow-400">Next Project</span>
          </h2>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gray-900" />
              </div>
              <span>Contact Information</span>
            </h3>
            
            {/* Contact Items */}
            <div className="space-y-6 mb-12">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item group block"
                >
                  <div className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-white text-lg mb-1 group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-100 font-medium">
                        {item.primary}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {item.secondary}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-900" />
                </div>
                <h4 className="font-semibold text-white text-lg">Business Hours</h4>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-gray-100">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-yellow-400 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-gray-900" />
                </div>
                <span>Send us a Message</span>
              </h3>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="success-message bg-green-500/20 border border-green-400/30 rounded-2xl p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-green-400 font-semibold">Message sent successfully!</p>
                    <p className="text-green-300 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-4 mb-6 flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="text-red-400 font-semibold">Failed to send message</p>
                    <p className="text-red-300 text-sm">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-400 focus:ring-red-400' 
                        : 'border-white/30 focus:ring-yellow-400 focus:border-yellow-400'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-400 focus:ring-red-400' 
                        : 'border-white/30 focus:ring-yellow-400 focus:border-yellow-400'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.subject 
                        ? 'border-red-400 focus:ring-red-400' 
                        : 'border-white/30 focus:ring-yellow-400 focus:border-yellow-400'
                    }`}
                    placeholder="What is this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition-all duration-300 resize-vertical ${
                      errors.message 
                        ? 'border-red-400 focus:ring-red-400' 
                        : 'border-white/30 focus:ring-yellow-400 focus:border-yellow-400'
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                  <p className="text-gray-300 text-sm mt-2">
                    {formData.message.length} / 500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting || Object.keys(errors).length > 0
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <Zap className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Form Footer */}
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                  By submitting this form, you agree to our privacy policy. 
                  We'll never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">&lt; 24h</div>
            <div className="text-gray-200 font-medium">Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-200 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">Free</div>
            <div className="text-gray-200 font-medium">Initial Consultation</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-200 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;