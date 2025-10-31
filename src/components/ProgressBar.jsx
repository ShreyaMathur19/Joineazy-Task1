import React, { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'

export default function ProgressBar({ value = 0, size = 180, strokeWidth = 14 }) {
  const [progress, setProgress] = useState(0)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    // Animate the progress filling
    const controls = animate(progress, value, {
      duration: 1.5,
      ease: 'easeInOut',
      onUpdate: (latest) => {
        setProgress(latest)
        setDisplayValue(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [value])

  // Circle geometry
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative flex items-center justify-center">
      <motion.svg
        width={size}
        height={size}
        className="drop-shadow-md"
        initial={{ rotate: -90 }}
        animate={{ rotate: -90 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(0,0,0,0.15)"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="visibleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" /> {/* Indigo */}
            <stop offset="50%" stopColor="#8B5CF6" /> {/* Violet */}
            <stop offset="100%" stopColor="#EC4899" /> {/* Pink */}
          </linearGradient>
        </defs>

        {/* Animated Foreground Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#visibleGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(147,51,234,0.7))',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.svg>

      {/* Animated Count-up Text */}
      <motion.div
        className="absolute flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span
          key={displayValue}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-extrabold text-black drop-shadow-sm"
        >
          {displayValue}%
        </motion.span>
        <span className="text-xs text-gray-800/80">Completed</span>
      </motion.div>
    </div>
  )
}
