import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '../services/authService'
import { toast } from 'react-toastify'
import PublicNavbar from '../components/PublicNavbar'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  

  const signin = async () => {
    if (!email) {
      toast.warn('Email is required')
    } else if (!password) {
      toast.warn('Password is required')
    } else {
      const result = await loginUser(email, password)

     if (result.status === 'success') {
  sessionStorage.setItem('token', result.data.token)
  sessionStorage.setItem('role', result.data.role)
  sessionStorage.setItem('email', result.data.email)


  toast.success('Login successful')

  if (result.data.role === 'admin') {
    navigate('/admin/dashboard')
  } else {
    navigate('/student/dashboard')
  }
}
 else {
        toast.error(result.error)
      }
    }
  }

  return (
    <>
      <PublicNavbar />

      <div className="container mt-5 w-50">
        <h4 className="mb-4 text-center">Sign In</h4>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={signin}>
          Login
        </button>

      </div>
    </>
  )
}

export default Login
