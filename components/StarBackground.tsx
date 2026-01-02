import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [asteroids, setAsteroids] = useState<{ id: number; top: string; left: string; delay: number }[]>([]);

  // Canvas Stars Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; opacity: number; speed: number; offset: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      // Calculate star count based on screen area to maintain density without overcrowding
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 4000); 
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          speed: Math.random() * 0.02 + 0.005,
          offset: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#FFFFFF';
      stars.forEach((star) => {
        // Efficient sine-wave based twinkling
        const alpha = 0.4 + 0.4 * Math.sin(Date.now() * star.speed * 0.1 + star.offset);
        
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Asteroids Logic - Made more subtle and rare
  useEffect(() => {
    const newAsteroids = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 30}%`, // Start closer to top
      left: `${60 + Math.random() * 40}%`, // Start mainly right
      delay: Math.random() * 10,
    }));
    setAsteroids(newAsteroids);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#05010D]">
      {/* Optimized Gradient Background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.3), transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.15), transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(124, 58, 237, 0.1), transparent 50%)
          `,
          willChange: 'transform'
        }} 
      />

      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Asteroids */}
      {asteroids.map((asteroid) => (
        <motion.div
          key={`asteroid-${asteroid.id}`}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: -1000, 
            y: 1000, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 5, // Slower speed (was 2.5)
            repeat: Infinity,
            delay: asteroid.delay,
            repeatDelay: Math.random() * 30 + 25, // Much rarer occurrence (25s-55s intervals)
            ease: "easeIn"
          }}
          style={{
            position: 'absolute',
            top: asteroid.top,
            left: asteroid.left,
            width: '140px', // Long trail relative to small head
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(165, 243, 252, 0.5), transparent)', // More subtle trail opacity
            rotate: '-45deg',
            boxShadow: '0 0 10px rgba(103, 232, 249, 0.2)', // Subtle glow
            willChange: 'transform, opacity'
          }}
        >
           {/* Smaller Head */}
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,0.8)]" />
        </motion.div>
      ))}
    </div>
  );
};

export default StarBackground;