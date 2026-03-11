"use client"

import { motion, useInView } from 'motion/react';
import { Rocket, Palette, BarChart3, Smartphone, Search, Zap } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Rocket,
    title: 'Brand Strategy',
    description: 'Build a powerful brand identity that resonates with your audience and stands out in the market.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Stunning visuals and immersive experiences that capture attention and drive engagement.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Make informed decisions with comprehensive analytics and actionable insights.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Smartphone,
    title: 'Social Media',
    description: 'Amplify your reach with strategic social media campaigns that convert followers into customers.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings and increase organic traffic with cutting-edge SEO strategies.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Zap,
    title: 'Performance Marketing',
    description: 'ROI-focused campaigns that deliver measurable results and accelerate growth.',
    color: 'from-blue-500 to-cyan-500'
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
