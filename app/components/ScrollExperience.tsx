"use client"

import { motion, useScroll, useTransform } from "motion/react"

const paths = [
  {
    // left-to-right looping path
    d: "M -100 200 C 200 300 400 100 700 250 S 1200 400 1600 250",
    speed: 1,
    particleRadius: 4,
  },
  {
    // vertical diagonal on right side
    d: "M 1800 100 C 1700 400 1600 600 1700 900 S 1800 1100 1900 900",
    speed: 1,
    particleRadius: 4,
  },
]

function EnergyPath({
  d,
  speed,
  particleRadius,
  scrollYProgress,
}: {
  d: string
  speed: number
  particleRadius: number
  scrollYProgress: any
}) {
  // path length drives the draw effect
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  // particle moves exactly along the path
  const offsetDistance = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.35, 0.35, 0])

  return (
    <g>
      {/* subtle blurred path behind */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#subtleGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        style={{
          pathLength,
          opacity,
          filter: "blur(5px)",
        }}
      />

      {/* thin main line */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#subtleGradient)"
        strokeWidth="1.4"
        strokeLinecap="round"
        style={{
          pathLength,
          opacity,
        }}
      />

      {/* particle strictly follows the path */}
      <motion.circle
        r={particleRadius}
        fill="#22d3ee"
        style={{
          offsetPath: `path("${d}")`,
          offsetDistance,
          opacity,
          filter: "drop-shadow(0 0 6px rgba(34,211,238,0.8))",
        }}
      />
    </g>
  )
}

export function ScrollExperience() {
  const { scrollYProgress } = useScroll()

  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 2000 1200"
      preserveAspectRatio="none"
      style={{ mixBlendMode: "screen" }}
    >
      <defs>
        <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {paths.map((p, i) => (
        <EnergyPath
          key={i}
          d={p.d}
          speed={p.speed}
          particleRadius={p.particleRadius}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </svg>
  )
}
