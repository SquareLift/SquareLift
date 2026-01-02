import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
             {/* Brand Logo matching Navbar */}
             <a href="#" className="flex items-center gap-2 mb-4 group">
               <div className="w-8 h-8 bg-gradient-to-tr from-bright-accent to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                 <span className="text-white font-bold text-lg">S</span>
               </div>
               <span className="text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                 SquareLift Technologies
               </span>
             </a>
             <p className="text-gray-500 text-sm max-w-xs">
               Tech that uplifts.
             </p>
          </div>
          
          <div className="flex gap-6">
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
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-8">
          <p>&copy; 2026 SquareLift Technologies. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;