import { useNavigate } from 'react-router-dom'

function StudentNavbar() {
  const navigate = useNavigate()
  const email = sessionStorage.getItem('email')

  const logout = () => {
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold text-primary">
          Student Portal
        </span>

        <div className="d-flex align-items-center">
          <span className="me-3 text-muted">
            {email}
          </span>
          <button className="btn btn-outline-danger btn-sm" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default StudentNavbar
