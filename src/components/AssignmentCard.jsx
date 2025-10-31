import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import { setSubmission, readData } from '../data/mockData'

export default function AssignmentCard({ assignment, currentUser, role, onUpdate }) {
  const [showDialog, setShowDialog] = useState(false)
  const data = readData()
  const submissions = data.submissions[assignment.id] || {}
  const mySub = submissions[currentUser.id] || { submitted: false, confirmed: false }

  // --- STUDENT SUBMISSION HANDLERS ---
  const handleFirstClick = () => {
    // Step 1: Open confirmation dialog
    if (!mySub.confirmed) setShowDialog(true)
  }

  const handleConfirm = () => {
    // Step 2: Mark as submitted and confirmed
    setSubmission(assignment.id, currentUser.id, { submitted: true, confirmed: true })
    setShowDialog(false)
    onUpdate && onUpdate()
  }

  const handleCancel = () => {
    // Step 3: Cancel confirmation
    setShowDialog(false)
  }

  // --- ADMIN DASHBOARD PROGRESS ---
  const adminProgress = () => {
    const students = data.users.filter(u => u.role === 'student')
    const total = students.length
    const done = students.reduce((acc, s) => {
      const st = (data.submissions[assignment.id] || {})[s.id]
      return acc + (st && st.confirmed ? 1 : 0)
    }, 0)
    return total ? (done / total) * 100 : 0
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 relative">
      {/* Assignment Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{assignment.title}</h3>
          <p className="text-sm text-gray-600">{assignment.desc}</p>
          <p className="text-xs text-gray-500 mt-1">Due: {assignment.due}</p>

          {/* ✅ Integrated Drive Link */}
          {assignment.driveLink && (
            <a
              href={assignment.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-indigo-600 underline text-sm mt-2 hover:text-indigo-400 transition-colors"
            >
              🔗 View Drive Material
            </a>
          )}
        </div>

        {/* Status / Progress */}
        <div className="text-right">
         {role === 'admin' ? (
  <>
    <p className="text-sm text-gray-600 mb-1">Completion</p>
    <div className="w-24 mx-auto">
      <ProgressBar value={adminProgress()} size={90} strokeWidth={10} />
    </div>
    <p className="text-xs text-gray-500 mt-1">
      {Math.round(adminProgress())}%
    </p>
  </>
) : (

            <p
              className={`text-sm font-medium ${
                mySub.confirmed
                  ? 'text-green-600'
                  : mySub.submitted
                  ? 'text-yellow-600'
                  : 'text-gray-500'
              }`}
            >
              {mySub.confirmed
                ? '✅ Submitted'
                : mySub.submitted
                ? 'Pending Confirmation'
                : 'Not Submitted'}
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {role === 'student' && (
        <div className="mt-4">
          {!mySub.confirmed && (
            <button
              onClick={handleFirstClick}
              className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          )}
        </div>
      )}

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
          <div className="bg-white p-5 rounded-lg shadow-lg w-72 text-center">
            <h4 className="text-lg font-semibold mb-2">Confirm Submission</h4>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you’ve submitted your assignment?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleConfirm}
                className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Yes, Confirm
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
