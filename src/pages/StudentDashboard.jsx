import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AssignmentCard from '../components/AssignmentCard'
import { readData } from '../data/mockData'
import ProgressBar from '../components/ProgressBar'
import { motion } from 'framer-motion'

export default function StudentDashboard() {
  const location = useLocation()
  const userId = location.state?.userId
  const [data, setData] = useState(readData())

  useEffect(() => {
    setData(readData())
  }, [])

  const myUser = data.users.find(u => u.id === userId) || { name: 'Unknown' }
  const assignments = data.assignments
  const refresh = () => setData(readData())

  const completedCount = assignments.reduce((acc, a) => {
    const st = (data.submissions[a.id] || {})[userId]
    return acc + (st && st.confirmed ? 1 : 0)
  }, 0)
  const pct = assignments.length ? (completedCount / assignments.length) * 100 : 0

  return (
   <div className="min-h-screen bg-gradient-to-br from-sky-600 via-indigo-500 to-green-400 text-gray-800">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto p-6"
      >
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-white drop-shadow-md mb-1">
          Welcome, {myUser.name.split(' ')[0]} 👋
        </h1>
        <p className="text-sm text-white/90 mb-8">
          Here’s your progress and assignments overview.
        </p>

        {/* Overall Progress */}
     <motion.div
  whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
  transition={{ duration: 0.4, ease: 'easeInOut' }}
  className="relative overflow-hidden bg-gradient-to-r from-indigo-600/40 via-sky-500/30 to-green-400/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-[0_0_25px_rgba(0,0,0,0.2)] p-8 flex flex-col md:flex-row items-center justify-between mb-10"
>
  {/* Animated Glow Background */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-sky-300 to-green-300 opacity-20 blur-3xl"
    animate={{ opacity: [0.15, 0.35, 0.15] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  />

  {/* Left Text Section */}
  <div className="flex-1 relative z-10 text-center md:text-left space-y-3">
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white via-sky-100 to-green-100 bg-clip-text text-transparent"
    >
      🌟 Overall Progress
    </motion.h2>

    <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
      You’ve completed{' '}
      <span className="font-bold text-white">{completedCount}</span> of{' '}
      <span className="font-bold text-white">{assignments.length}</span> assignments.
    </p>

    <motion.p
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="text-sm italic text-white/80"
    >
      🚀 Keep going — excellence is built one step at a time!
    </motion.p>
  </div>

  {/* Right Circular Progress Section */}
  <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0 relative z-10">
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-indigo-400 via-sky-300 to-green-400 opacity-40 animate-pulse rounded-full"></div>
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0 relative z-10">
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="relative flex flex-col items-center"
  >
    {/* Glowing background */}
    <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-indigo-400 via-sky-300 to-green-400 opacity-40 animate-pulse rounded-full"></div>

    {/* Main Circular Progress */}
    <ProgressBar value={pct} size={200} strokeWidth={16} />

    {/* 🏅 Level Badge below the progress */}
    <motion.div
  key={Math.floor(pct / 10)}
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: [1.2, 1], opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className={`mt-4 px-4 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md border border-white/30 ${
    pct < 40
      ? 'bg-gradient-to-r from-red-400 to-orange-400 text-white'
      : pct < 70
      ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-white'
      : 'bg-gradient-to-r from-indigo-500 to-sky-400 text-white'
  }`}
>
  {pct < 40
    ? '🎯 Beginner Level'
    : pct < 70
    ? '🥈 Intermediate Level'
    : '🏆 Pro Level'}

    </motion.div>
  </motion.div>
</div>

    </motion.div>
  </div>
</motion.div>


        {/* Assignments Grid */}
        <h3 className="text-lg font-semibold text-white mb-4">Your Assignments</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((a) => (
            <motion.div key={a.id} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <AssignmentCard
                assignment={a}
                currentUser={myUser}
                role="student"
                onUpdate={refresh}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
