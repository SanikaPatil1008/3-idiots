import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Landing from './pages/Landing'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'
import RegisterToCourse from './pages/RegisterToCourse'
{/* <Route path="/course/details/:courseId" element={<CourseDetails />} /> */}




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/course/register/:courseId" element={<RegisterToCourse />} />


      </Routes>

      <ToastContainer position="top-center" />
    </>
  )
}

export default App
