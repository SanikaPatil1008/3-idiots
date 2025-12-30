import { useEffect, useState } from 'react'
import { getActiveCourses } from '../services/courseService'
import { toast } from 'react-toastify'
import PublicNavbar from '../components/PublicNavbar'
import CourseCard from '../components/CourseCard'

function Landing() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    const result = await getActiveCourses()
    if (result.status === 'success') {
      setCourses(result.data)
    } else {
      toast.error('Failed to load courses')
    }
  }

  return (
    <>
      <PublicNavbar />

      <div className="container mt-4">
        <h3 className="text-center mb-4">
          Available Courses
        </h3>

        <div className="row">
          {courses.map(course => (
            <CourseCard
              key={course.course_id}
              course={course}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Landing
