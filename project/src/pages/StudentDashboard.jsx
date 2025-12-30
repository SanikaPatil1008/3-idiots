import { useState } from 'react'
import { toast } from 'react-toastify'
import StudentNavbar from '../components/StudentNavbar'
import {
  getMyCourses,
  getMyCoursesWithVideos
} from '../services/studentService'

function StudentDashboard() {

  const [data, setData] = useState([])
  const token = sessionStorage.getItem('token')

  const loadMyCourses = async () => {
    const result = await getMyCourses(token)
    if (result.status === 'success') {
      setData(result.data)
    } else {
      toast.error(result.error)
    }
  }

  const loadMyCoursesWithVideos = async () => {
    const result = await getMyCoursesWithVideos(token)
    if (result.status === 'success') {
      setData(result.data)
    } else {
      toast.error(result.error)
    }
  }

  return (
    <>
      <StudentNavbar />

      <div className="container mt-4">

        <div className="mb-3">
          <button className="btn btn-primary me-3" onClick={loadMyCourses}>
            My Courses
          </button>

          <button className="btn btn-success" onClick={loadMyCoursesWithVideos}>
            My Courses with Videos
          </button>
        </div>

        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Course</th>
              <th>Description</th>
              <th>Video Title</th>
              <th>YouTube</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.course_name}</td>
                <td>{row.course_description || row.description}</td>
                <td>{row.title || '-'}</td>
                <td>
                  {row.youtube_url
                    ? <a href={row.youtube_url} target="_blank">Watch</a>
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default StudentDashboard
