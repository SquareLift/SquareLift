import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    // Construct mailto link to open user's default email client
    const subject = `Inquiry from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}`;

    window.location.href = `mailto:squarelift.in@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputFocusStyle = {
    borderColor: "#7000FF",
    boxShadow: "0 0 20px rgba(112, 0, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  };

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-accent to-pink-500">
                Impossible
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Ready to elevate your business with stellar technology? Reach out to our team of experts today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">squarelift.in@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">+91 9090909090</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                <div className="p-2 rounded-lg bg-pink-500/20 text-pink-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">HQ</h4>
                  <p className="text-gray-400 text-sm">Indiranagar, Bangalore, 560008</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-void-black/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                  <motion.input
                    whileFocus={inputFocusStyle}
                    transition={{ duration: 0.3 }}
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none placeholder-gray-600"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                  <motion.input
                    whileFocus={inputFocusStyle}
                    transition={{ duration: 0.3 }}
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none placeholder-gray-600"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <motion.input
                  whileFocus={inputFocusStyle}
                  transition={{ duration: 0.3 }}
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none placeholder-gray-600"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <motion.textarea
                  whileFocus={inputFocusStyle}
                  transition={{ duration: 0.3 }}
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none placeholder-gray-600 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-bright-accent to-purple-600 text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;