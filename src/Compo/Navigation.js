import React from 'react'
import { Link,useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  return (
    <div>
      <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className={`nav-link px-2 ${location.pathname === "/" ? "text-secondary" : "text-white"}`}>Resume</Link></li>
          <li><Link to="/search" className={`nav-link px-2 ${location.pathname === "/search" ? "text-secondary" : "text-white"}`}>Search</Link></li>
          <li><Link to="/table" className={`nav-link px-2 ${location.pathname === "/table" ? "text-secondary" : "text-white"}`}>Table</Link></li>          
          <li><Link to="/crud" className={`nav-link px-2 ${location.pathname === "/crud" ? "text-secondary" : "text-white"}`}>Crud</Link></li>          
              
          </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}
