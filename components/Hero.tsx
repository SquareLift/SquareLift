import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 text-center lg:text-left z-10 pt-8 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-purple-200 uppercase">
              Tech that uplifts.
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight">
            Elevating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_auto]">
              Future Tech
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light px-4 lg:px-0">
            SquareLift Technologies engineers the digital infrastructure of tomorrow. 
            We blend cosmic aesthetics with grounded performance to launch your brand into the stratosphere.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4 w-full sm:w-auto px-6 sm:px-0">
            <a 
              href="#contact"
              className="w-full sm:w-auto group relative px-8 py-4 rounded-full bg-bright-accent text-white font-semibold overflow-hidden shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all hover:shadow-[0_0_40px_rgba(112,0,255,0.6)] hover:scale-105 active:scale-95 flex justify-center items-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20 text-center"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center w-full"
        >
           {/* Abstract Floating UI Cards */}
           <div className="relative w-full max-w-[300px] md:max-w-md aspect-square perspective-[1000px] transform scale-[0.85] sm:scale-100">
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-bright-accent/20 rounded-full blur-[60px] md:blur-[80px]" />
              
              {/* Floating Card 1 (Back) */}
              <motion.div 
                animate={{ 
                  y: [-15, 15, -15], 
                  rotateX: [5, -5, 5],
                  rotateY: [-5, 5, -5]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="absolute top-0 right-0 w-40 h-56 md:w-56 md:h-72 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl z-10 p-4 md:p-5 shadow-2xl origin-bottom-left"
              >
                <div className="flex gap-2 mb-4 md:mb-6">
                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/50" />
                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2 md:space-y-3">
                   <div className="w-full h-1.5 md:h-2 bg-white/10 rounded animate-pulse" />
                   <div className="w-3/4 h-1.5 md:h-2 bg-white/10 rounded animate-pulse delay-75" />
                   <div className="w-5/6 h-1.5 md:h-2 bg-white/10 rounded animate-pulse delay-150" />
                </div>
              </motion.div>

              {/* Floating Card 2 (Front) */}
              <motion.div 
                animate={{ 
                  y: [15, -15, 15],
                  rotateX: [-5, 5, -5],
                  rotateY: [5, -5, 5]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
                className="absolute bottom-8 left-0 md:bottom-10 md:left-4 w-56 h-64 md:w-72 md:h-80 bg-black/40 backdrop-blur-2xl border border-white/15 rounded-2xl z-20 p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                 <h3 className="text-lg md:text-xl font-bold mb-1 font-display tracking-wide">Analytics</h3>
                 <p className="text-[10px] md:text-xs text-gray-500 mb-4 md:mb-6">Real-time data processing</p>
                 <div className="flex items-end gap-1.5 md:gap-2 h-24 md:h-32 mt-auto">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                        className="flex-1 bg-gradient-to-t from-bright-accent/40 to-cyan-400/60 rounded-t-sm hover:from-bright-accent hover:to-cyan-400 transition-colors cursor-pointer" 
                      />
                    ))}
                 </div>
              </motion.div>

              {/* Decorative Ring */}
              <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 style={{ willChange: 'transform' }}
                 className="absolute inset-[-10px] md:inset-[-20px] border border-dashed border-white/5 rounded-full z-0 pointer-events-none"
              />
           </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-gray-500/50"
      >
        <ChevronDown size={24} className="md:w-8 md:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;