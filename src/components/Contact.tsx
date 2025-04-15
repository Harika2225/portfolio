import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-900"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
              Contact Me
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_2rem_0_rgba(156,163,175,0.1)]">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <a
                  href="mailto:harikasree2k@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-gray-100 transition-colors duration-300 group/item"
                >
                  <div className="p-3 rounded-lg bg-gray-700/50 group-hover/item:bg-gray-600/50 transition-colors duration-300">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <span>harikasree2k@gmail.com</span>
                </a>
                <a
                  href="tel:+918143200530"
                  className="flex items-center gap-4 text-gray-300 hover:text-gray-100 transition-colors duration-300 group/item"
                >
                  <div className="p-3 rounded-lg bg-gray-700/50 group-hover/item:bg-gray-600/50 transition-colors duration-300">
                    <FaPhone className="text-xl" />
                  </div>
                  <span>+91 8143200530</span>
                </a>
                <a
                  href="https://github.com/harikasree2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-gray-100 transition-colors duration-300 group/item"
                >
                  <div className="p-3 rounded-lg bg-gray-700/50 group-hover/item:bg-gray-600/50 transition-colors duration-300">
                    <FaGithub className="text-xl" />
                  </div>
                  <span>github.com/harikasree2k</span>
                </a>
                <a
                  href="https://linkedin.com/in/harika-sree-tummalakuntla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-gray-100 transition-colors duration-300 group/item"
                >
                  <div className="p-3 rounded-lg bg-gray-700/50 group-hover/item:bg-gray-600/50 transition-colors duration-300">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <span>linkedin.com/in/harika-sree-tummalakuntla</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_2rem_0_rgba(156,163,175,0.1)]"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 text-gray-200 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 text-gray-200 transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 text-gray-200 transition-colors duration-300 resize-none"
                  placeholder="Your message"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <span className="text-green-400">Message sent successfully!</span>
                )}
                {submitStatus === 'error' && (
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 