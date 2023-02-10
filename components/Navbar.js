import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/pages/Context/AuthContext'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user ? (
              <>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => {
                  logout()
                  router.push("/login")
                }}>Logout</a>
              </li>
          </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar