"use client"

import { motion, useInView } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useRef } from 'react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Elevate
              </span>
              <br />
              Your Brand?
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let's create something extraordinary together. Our team is ready to transform your vision into reality with cutting-edge digital solutions.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, text: 'hello@digitalagency.com' },
                { icon: Phone, text: '+251912334455' },
                { icon: MapPin, text: 'Addis Ababa, Ethiopia' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/50 flex items-center gap-3 w-fit hover:cursor-pointer"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow hover:cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-gray-500">
            © 2026 Helix Digital Agency. Crafted with passion for innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
