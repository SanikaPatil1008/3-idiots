import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { registerToCourse } from '../services/studentService'
import PublicNavbar from '../components/PublicNavbar'

function RegisterToCourse() {

  const { courseId } = useParams()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const submit = async () => {

    if (!name) toast.warn('Name is required')
    else if (!email) toast.warn('Email is required')
    else if (!mobile) toast.warn('Mobile number is required')
    else {
      const result = await registerToCourse({
        course_id: courseId,
        name,
        email,
        mobile_no: mobile
      })

      if (result.status === 'success') {
        toast.success('Registered successfully. Default password is sunbeam')
      } else {
        toast.error(result.error)
      }
    }
  }

  return (
    <>
      <PublicNavbar />

      <div className="container mt-4 w-50">
        <h4 className="mb-4 text-center">Course Registration</h4>

        <label className="form-label">Enter Name</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter name"
          onChange={e => setName(e.target.value)}
        />

        <label className="form-label">Enter Email</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter email"
          onChange={e => setEmail(e.target.value)}
        />

        <label className="form-label">Enter Mobile Number</label>
        <input
          type="tel"
          className="form-control mb-4"
          placeholder="Enter mobile number"
          onChange={e => setMobile(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={submit}>
          Register
        </button>
      </div>
    </>
  )
}

export default RegisterToCourse
