/**
 * Mock data and helper functions.
 * Data saved to localStorage under 'joineazy_data'
 */

const initial = {
  users: [
    { id: 's1', name: 'Alice Student', role: 'student' },
    { id: 's2', name: 'Bob Student', role: 'student' },
    { id: 'a1', name: 'Prof. John', role: 'admin' }
  ],
  assignments: [
    { id: 'as1', title: 'Assignment 1', desc: 'Intro to React', due: '2025-11-05', createdBy: 'a1', driveLink: '' },
    { id: 'as2', title: 'Assignment 2', desc: 'Managerial Economics', due: '2025-11-10', createdBy: 'a1', driveLink: '' }
  ],
  submissions: {
    // assignmentId: { studentId: { submitted: boolean, confirmed: boolean } }
  }
}

export function loadMockData(){
  const key = 'joineazy_data'
  if(!localStorage.getItem(key)){
    localStorage.setItem(key, JSON.stringify(initial, null, 2))
  }
}

export function readData(){
  return JSON.parse(localStorage.getItem('joineazy_data'))
}

export function writeData(data){
  localStorage.setItem('joineazy_data', JSON.stringify(data, null, 2))
}

export function addAssignment(newAssign){
  const data = readData()
  data.assignments.push(newAssign)
  writeData(data)
}

export function setSubmission(assignmentId, studentId, payload){
  const data = readData()
  if(!data.submissions[assignmentId]) data.submissions[assignmentId] = {}
  data.submissions[assignmentId][studentId] = { ...(data.submissions[assignmentId][studentId] || {}), ...payload }
  writeData(data)
}
 