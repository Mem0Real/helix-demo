"use client"

import { motion, useScroll, useTransform } from 'motion/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent flex gap-2 items-center"
        >
				<span className="px-2">
					<Image src="/images/logo.webp" alt="Helix" width="50" height="50" className="rounded-full" />
				</span>

          Helix<span className="text-white">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {['Services', 'Portfolio', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:scale-105 transition-transform"
          >
            Get Started
          </motion.button>
        </div>

        <button className="md:hidden hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </div>
    </motion.nav>
  );
}
