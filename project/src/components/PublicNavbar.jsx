import { Link } from 'react-router-dom'

function PublicNavbar() {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold text-primary">
          Sunbeam Academy
        </span>

        {/* Single Login Button */}
        <Link to="/login" className="btn btn-outline-primary">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default PublicNavbar
