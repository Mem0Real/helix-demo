"use client"

import { motion, useInView } from "motion/react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const projects = [
  {
    title: "E-Commerce Revolution",
    category: "Digital Marketing",
    description: "Increased online sales by 300% through strategic campaigns",
    image: "/images/project1.jpg",
  },
  {
    title: "Brand Transformation",
    category: "Branding & Design",
    description: "Complete brand refresh for a Fortune 500 company",
    image: "/images/project2.jpg",
  },
  {
    title: "Tech Startup Launch",
    category: "Full Stack Marketing",
    description: "Zero to 1M users in 6 months with integrated campaigns",
    image: "/images/project3.jpg",
  },
  {
    title: "Global Campaign",
    category: "Social Media",
    description: "Viral campaign reaching 50M+ across 20 countries",
    image: "/images/project4.jpg",
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="portfolio" ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Success stories that speak louder than words. Real results for real businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full h-full group rounded-2xl overflow-hidden cursor-pointer">
							{/* Image */}
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
							/>

							{/* Sliding dark overlay */}
							<div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl" />

							{/* Text content */}
							<div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
								<div className="translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
									<div className="text-sm font-semibold text-white/80 mb-2">{project.category}</div>
									<h3 className="text-3xl font-bold mb-3 flex items-center gap-2">
										{project.title}
										<ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
									</h3>
									<p className="text-white/90 text-lg">{project.description}</p>
								</div>
							</div>

							{/* Optional border highlight */}
							<div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-colors pointer-events-none" />
						</div>
					</motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
