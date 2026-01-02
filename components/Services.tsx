import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Smartphone, Globe, Users, Layout, Beaker, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "High-performance, responsive websites built with modern frameworks to ensure maximum speed and scalability."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Custom CRM",
    description: "Tailored Customer Relationship Management systems designed to streamline your unique business operations."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications delivering seamless user experiences on iOS and Android."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Digital Portfolio",
    description: "Stunning, interactive digital portfolios crafted to showcase your work and attract high-value clients."
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Strategic, data-driven campaigns across SEO, social media, and PPC to amplify your brand voice and maximize ROI."
  },
  {
    icon: <Beaker className="w-6 h-6" />,
    title: "R&D",
    description: "Cutting-edge exploration into emerging technologies to keep your business ahead of the curve."
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-gray-400">
            Comprehensive technology solutions tailored to navigate the complexities of the modern digital universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-bright-accent/30 transition-all duration-300 backdrop-blur-sm overflow-hidden w-full max-w-sm"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-bright-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;