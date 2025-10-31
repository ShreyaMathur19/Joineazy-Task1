import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AssignmentCard from '../components/AssignmentCard'
import { readData, addAssignment } from '../data/mockData'
import { motion } from 'framer-motion'

export default function AdminDashboard() {
  const location = useLocation()
  const userId = location.state?.userId
  const [data, setData] = useState(readData())
  const [form, setForm] = useState({ title: '', desc: '', due: '', driveLink: '' })

  useEffect(() => {
    setData(readData())
  }, [])

  const refresh = () => setData(readData())

  const handleCreate = (e) => {
  e.preventDefault()

  const newAssign = {
    id: 'as' + Date.now(),
    title: form.title || 'Untitled Assignment',
    desc: form.desc || '',
    due: form.due || 'TBD',
    driveLink: form.driveLink || '', // ✅ Add Drive Link here
    createdBy: userId,
  }

  addAssignment(newAssign)
  setForm({ title: '', desc: '', due: '', driveLink: '' }) // clear form
  refresh()
}


  const myUser = data.users.find((u) => u.id === userId) || { name: 'Admin' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-sky-500 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto p-6"
      >
        <h1 className="text-3xl font-extrabold text-white mb-1">
          Hello, {myUser.name.split(' ')[0]} 👨‍🏫
        </h1>
        <p className="text-sm text-white/90 mb-8">
          Manage assignments and track student progress.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Create Assignment Card */}
     <motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/30"
>
  <h3 className="text-xl font-semibold text-white mb-4">Create Assignment</h3>

  <form onSubmit={handleCreate} className="space-y-3">
    <input
      value={form.title}
      onChange={(e) => setForm({ ...form, title: e.target.value })}
      placeholder="Title"
      className="w-full border border-white/30 rounded-md bg-white/30 text-white px-3 py-2 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
    />
    <input
      value={form.desc}
      onChange={(e) => setForm({ ...form, desc: e.target.value })}
      placeholder="Description"
      className="w-full border border-white/30 rounded-md bg-white/30 text-white px-3 py-2 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
    />
    <input
      value={form.due}
      onChange={(e) => setForm({ ...form, due: e.target.value })}
      placeholder="Due Date (YYYY-MM-DD)"
      className="w-full border border-white/30 rounded-md bg-white/30 text-white px-3 py-2 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
    />

    {/* Drive Link Input with validation and preview */}
    <div className="space-y-2">
      <input
        value={form.driveLink}
        onChange={(e) => setForm({ ...form, driveLink: e.target.value })}
        placeholder="Attach Google Drive Link (https://drive.google.com/...)"
        className="w-full border border-white/30 rounded-md bg-white/30 text-white px-3 py-2 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
      />

      {/* Live Preview if link exists */}
      {form.driveLink && (
        <motion.a
          href={form.driveLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          className="block text-center bg-gradient-to-r from-green-400 via-sky-400 to-indigo-500 text-white font-semibold py-1.5 rounded-md shadow-md hover:shadow-lg transition-all"
        >
          🔗 Open Attached Drive Link
        </motion.a>
      )}
    </div>

    {/* Submit Button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="w-full bg-white text-indigo-700 font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-100 transition-all"
    >
      Create Assignment
    </motion.button>
  </form>
</motion.div>


          {/* Assignment List */}
          <div className="space-y-6">
            {data.assignments.map((a) => (
              <motion.div key={a.id} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <AssignmentCard
                  assignment={a}
                  currentUser={myUser}
                  role="admin"
                  onUpdate={refresh}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
