import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Header from './components/Header'
import { loadMockData } from './data/mockData'

loadMockData()

function App(){
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/student' element={<StudentDashboard />} />
          <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
