import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type PageType = 'home' | 'privacy' | 'terms';

interface NavbarProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'Services', sectionId: 'services' },
    { name: 'FAQ', sectionId: 'faq' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate('home', sectionId);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home', 'hero');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 md:py-4' : 'py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav
          className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-void-black/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-900/10'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-bright-accent to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/20">
              <span className="text-white font-bold text-lg md:text-xl">S</span>
            </div>
            <div className="flex flex-col justify-center h-8 md:h-10">
              <span className="text-white font-display font-bold text-lg md:text-xl leading-none tracking-tight group-hover:text-purple-300 transition-colors">
                SquareLift
              </span>
              <span className="text-white/70 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase leading-none group-hover:text-white transition-colors mt-0.5 md:mt-1">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.sectionId)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group focus:outline-none"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bright-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden z-50"
          >
            <div className="bg-void-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.sectionId)}
                  className="text-left text-lg font-medium text-gray-200 hover:text-bright-accent py-3 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full py-3 rounded-xl bg-bright-accent text-center text-white font-medium hover:bg-purple-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;