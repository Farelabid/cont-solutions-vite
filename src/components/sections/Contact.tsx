import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { contactInfo } from '@/data';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactItems = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: contactInfo.email,
      secondary: 'We\'ll respond within 24 hours',
      action: `mailto:${contactInfo.email}`
    },
    {
      icon: Phone,
      title: 'Call or WhatsApp',
      primary: contactInfo.whatsapp,
      secondary: 'Mon-Sat 9AM-6PM',
      action: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      primary: 'Yogyakarta Office',
      secondary: 'Click to view on maps',
      action: 'https://maps.app.goo.gl/mAW6LM52jGAHCFyL8'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-500 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your
            <span className="block text-yellow-400">Next Project</span>
          </h2>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-yellow-400" />
              Contact Information
            </h3>
            
            {/* Contact Items */}
            <div className="space-y-6 mb-8">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                      <p className="text-gray-100">{item.primary}</p>
                      <p className="text-gray-300 text-sm">{item.secondary}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-white mb-4">Find Us Here</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.280631997628!2d110.4252730151655!3d-7.77317990382199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a69000fca3%3A0xb9d808a228857200!2sCont%20Solutions%20Indonesia%20Headquarter!5e0!3m2!1sen!2sid!4v1750099253931!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Send className="w-6 h-6 mr-3 text-yellow-400" />
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;