import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer both web and mobile app development?",
    answer: "Yes, we provide end-to-end development services. Whether you need a high-performance website, a progressive web app, or a native mobile application for iOS and Android, our team has the expertise to deliver."
  },
  {
    question: "How can Digital Marketing help my business?",
    answer: "Our digital marketing strategies are designed to increase your visibility and drive conversions. We utilize SEO, content marketing, and targeted advertising to connect you with your ideal audience and grow your brand."
  },
  {
    question: "Why should I choose a Custom CRM over existing software?",
    answer: "Off-the-shelf CRMs often come with unnecessary features or lack specific workflows you need. Our Custom CRM solutions are tailored exactly to your business processes, improving efficiency and user adoption."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on scope and complexity. A standard corporate website might take 4-6 weeks, while a complex custom platform or mobile app could range from 3 to 6 months. We provide detailed Gantt charts and timelines during our initial planning phase."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Absolutely. Technology evolves rapidly, and we ensure your digital assets evolve with it. We offer flexible maintenance packages that include security updates, performance monitoring, bug fixes, and feature enhancements to keep your systems running smoothly."
  },
  {
    question: "What technologies does your team specialize in?",
    answer: "We are agnostic but opinionated. We specialize in modern, scalable stacks including React, Next.js, and Tailwind CSS for front-end; Node.js, Python, and Go for back-end; and cloud infrastructure on AWS and Google Cloud. For mobile, we excel in React Native and Flutter for cross-platform efficiency."
  },
  {
    question: "How do you ensure data security in your applications?",
    answer: "Security is baked into our development process, not an afterthought. We implement industry-standard encryption, secure authentication protocols (OAuth/JWT), regular security audits, and follow GDPR/CCPA compliance guidelines to ensure your and your users' data remains protected."
  }
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ question, answer, isOpen, onHover, onLeave }) => {
  return (
    <div 
      className="border-b border-white/5 last:border-0"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="w-full flex items-center justify-between py-4 md:py-6 text-left group cursor-pointer"
      >
        <span className={`text-base md:text-lg font-medium transition-colors duration-300 pr-4 ${isOpen ? 'text-bright-accent' : 'text-gray-200 group-hover:text-purple-300'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 p-1 md:p-1.5 rounded-full border transition-all duration-300 ${isOpen ? 'border-bright-accent bg-bright-accent text-white shadow-[0_0_15px_rgba(112,0,255,0.4)]' : 'border-white/10 text-gray-400 group-hover:border-white/30 bg-white/5'}`}>
          {isOpen ? <Minus className="w-3 h-3 md:w-4 md:h-4" /> : <Plus className="w-3 h-3 md:w-4 md:h-4" />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base text-gray-400 pb-6 md:pb-8 leading-relaxed pr-4 md:pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 md:mb-4">
            Frequently Asked <span className="text-purple-400">Questions</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400">Everything you need to know about our process.</p>
        </div>

        {/* Unified Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          {/* Subtle internal gradients for premium feel */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none" />

          {/* Top highlight border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onHover={() => setOpenIndex(index)}
                onLeave={() => setOpenIndex(null)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;