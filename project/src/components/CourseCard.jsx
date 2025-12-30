import { useNavigate } from 'react-router-dom'
import Login from '../pages/Login';


function CourseCard({ course }) {

    const navigate = useNavigate()
    const startDate = new Date(course.start_date).toLocaleDateString('en-IN');
    const endDate = new Date(course.end_date).toLocaleDateString('en-IN');

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body d-flex flex-column justify-content-between">
          {/* Course Title */}
          <h5 className="card-title text-primary mb-3">
            {course.course_name}
          </h5>

          {/* Description */}
          <p className="card-text mb-3">
            {course.description}
          </p>

          {/* Fees */}
          <p className="fw-bold mb-3">
            Fees: ₹{course.fees}
          </p>
           
           {/* Fees */}
          <p className="text-muted small">Start Date: {startDate}</p>

           <p className="text-muted small">End Date: {endDate}</p>
          

          <button
             className="btn btn-outline-success w-100"
             onClick={() => navigate(`/course/register/${course.course_id}`)}
             >
                 View More
          </button>

        </div>
      </div>
    </div>
  )
}

export default CourseCard
