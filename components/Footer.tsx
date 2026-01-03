import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md pt-12 md:pt-16 pb-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
             {/* Brand Logo matching Navbar */}
             <a href="#" className="flex items-center gap-3 mb-4 group justify-center md:justify-start">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-bright-accent to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                 <span className="text-white font-bold text-lg md:text-xl">S</span>
               </div>
               <div className="flex flex-col justify-center h-8 md:h-10 text-left">
                  <span className="text-white font-display font-bold text-lg md:text-xl leading-none tracking-tight group-hover:text-purple-300 transition-colors">
                    SquareLift
                  </span>
                  <span className="text-white/70 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase leading-none group-hover:text-white transition-colors mt-0.5 md:mt-1">
                    Technologies
                  </span>
               </div>
             </a>
             <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
               Tech that uplifts.
             </p>
          </div>
          
          <div className="flex gap-4 md:gap-6">
            <a href="https://x.com/SquareLift_in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/SquareLift_in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://github.com/squarelift" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-8 gap-4 md:gap-0">
          <p className="text-center md:text-left">&copy; 2026 SquareLift Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;