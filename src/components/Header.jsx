import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, UserCog } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg shadow-lg border-b border-white/30"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ---- Left: Joineazy Logo ---- */}
        <Link
          to="/"
          className="flex items-center gap-2 group select-none"
        >
          <motion.h1
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 20px rgba(79,70,229,0.8)',
            }}
            className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-sky-400 to-green-400 bg-clip-text text-transparent animate-gradient-move"
          >
            Joineazy
          </motion.h1>
        </Link>

        {/* ---- Right: Navigation ---- */}
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/student"
            icon={<GraduationCap size={16} />}
            label="Student"
            active={isActive('/student')}
          />
          <NavLink
            to="/admin"
            icon={<UserCog size={16} />}
            label="Admin"
            active={isActive('/admin')}
          />
        </nav>
      </div>
    </motion.header>
  )
}

// ---- Reusable Navigation Button Component ----
function NavLink({ to, label, icon, active }) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{
          scale: 1.1,
          color: '#4f46e5',
          textShadow: '0px 0px 10px rgba(79,70,229,0.6)',
        }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 ${
          active
            ? 'bg-indigo-600 text-white shadow-md'
            : 'text-gray-700 hover:text-indigo-600 hover:bg-white/30'
        }`}
      >
        {icon}
        <span className="font-medium">{label}</span>
      </motion.div>
    </Link>
  )
}
