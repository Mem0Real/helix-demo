"use client"

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
      
      {/* 3D Floating Objects */}
      {/* Sphere 1 */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-32 w-24 h-24"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/50" 
          style={{ 
            boxShadow: '0 0 60px rgba(34, 211, 238, 0.6), inset -10px -10px 20px rgba(0, 0, 0, 0.3)',
          }}
        />
      </motion.div>

      {/* Cube */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotateX: [0, 360],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-48 left-24 w-20 h-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-cyan-600 shadow-2xl shadow-emerald-500/50"
          style={{ 
            transform: 'rotateX(45deg) rotateY(45deg)',
            boxShadow: '0 0 60px rgba(52, 211, 153, 0.6)',
          }}
        />
      </motion.div>

      {/* Torus/Ring */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
          rotateZ: [0, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-16 w-32 h-32"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full rounded-full border-8 border-blue-500 shadow-2xl shadow-blue-500/60"
          style={{ 
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.7), inset 0 0 30px rgba(59, 130, 246, 0.4)',
          }}
        />
      </motion.div>

      {/* Sphere 2 - smaller */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          rotateX: [0, -360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-16 h-16"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 shadow-2xl shadow-teal-500/50"
          style={{ 
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.6), inset -8px -8px 16px rgba(0, 0, 0, 0.3)',
          }}
        />
      </motion.div>

      {/* Pyramid */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 right-1/3 w-24 h-24"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-0 h-0 border-l-[48px] border-r-[48px] border-b-[80px] border-l-transparent border-r-transparent border-b-gradient-to-t from-indigo-500 to-blue-600"
          style={{ 
            filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.6))',
            borderBottomColor: '#6366f1',
          }}
        />
      </motion.div>
      
      {/* Floating 3D elements - original background shapes */}
      <motion.div
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-xl"
        style={{ transform: 'rotate3d(1, 1, 1, 45deg)' }}
      />
      
      <motion.div
        animate={{
          rotateZ: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"
        style={{ transform: 'rotate3d(1, -1, 1, 45deg)' }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-6 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Transform Your
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Digital Presence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          We craft immersive digital experiences that captivate audiences and drive measurable results through cutting-edge technology and creative innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-cyan-500/50 flex items-center gap-2 hover:cursor-pointer">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full text-lg font-semibold hover:bg-white/5 transition-all backdrop-blur-sm hover:cursor-pointer">
            View Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
