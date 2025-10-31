import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { readData } from '../data/mockData'
import { motion } from 'framer-motion'
import { User, ShieldCheck } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const data = readData()
  const [role, setRole] = useState('student')
  const [userId, setUserId] = useState(data.users.find(u => u.role === 'student').id)
  const [flipped, setFlipped] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    setFlipped(true)
    setTimeout(() => {
      if (role === 'student') navigate('/student', { state: { userId } })
      else navigate('/admin', { state: { userId } })
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-sky-500 to-emerald-400 flex items-center justify-center px-4">
      <motion.div
        className="relative w-full max-w-md h-[450px] perspective"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={`absolute inset-0 bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl border border-white/30 p-8 text-center transform-gpu`}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* --- FRONT SIDE --- */}
          <div className="absolute inset-0 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden' }}>
            {/* Interactive Header */}
            <motion.h1
              whileHover={{ scale: 1.05, textShadow: '0px 0px 15px rgba(255,255,255,0.8)' }}
              className="text-5xl font-extrabold bg-gradient-to-r from-indigo-300 via-sky-400 to-green-300 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move mb-3"
            >
              Joineazy
            </motion.h1>
            <p className="text-gray-100 text-sm mb-6 tracking-wide">Login to access your assignments</p>

            {/* Role Switch */}
            <div className="flex justify-center gap-6 mb-6">
              <button
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  role === 'student'
                    ? 'bg-white text-indigo-700 font-semibold shadow-md'
                    : 'bg-transparent text-white border border-white/40 hover:bg-white/10'
                }`}
                onClick={() => {
                  setRole('student')
                  setUserId(data.users.find(u => u.role === 'student').id)
                }}
              >
                <User size={18} />
                Student
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  role === 'admin'
                    ? 'bg-white text-indigo-700 font-semibold shadow-md'
                    : 'bg-transparent text-white border border-white/40 hover:bg-white/10'
                }`}
                onClick={() => {
                  setRole('admin')
                  setUserId(data.users.find(u => u.role === 'admin').id)
                }}
              >
                <ShieldCheck size={18} />
                Admin
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4 px-4">
              <div>
                <label className="block text-sm text-white mb-1">Select User</label>
                <select
                  className="w-full px-3 py-2 rounded-md border border-white/40 bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-white/60 focus:outline-none"
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                >
                  {data.users
                    .filter(u => u.role === role)
                    .map(u => (
                      <option key={u.id} value={u.id} className="text-gray-800">
                        {u.name}
                      </option>
                    ))}
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-white text-indigo-700 font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-100 transition-all"
              >
                Continue
              </motion.button>
            </form>

            <p className="text-xs text-gray-100 text-center mt-6 opacity-90">
              Designed with 💙 for Joineazy Internship Task
            </p>
          </div>

          {/* --- BACK SIDE --- */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mb-4">
                <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
              </div>
              <h2 className="text-xl font-semibold mb-2">Redirecting...</h2>
              <p className="text-sm text-gray-100">Please wait while we prepare your dashboard ✨</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
