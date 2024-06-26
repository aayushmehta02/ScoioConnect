import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarNew() {
  return (
    <div>
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/'><i className="fas fa-code"></i> SocioConnect</Link>
      </h1>
      <ul>
        <li><Link to='/profiles'>Developers</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li>
          |
          <Link to='/dashboard' title="Dashboard"
            ><i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span></Link>
        </li>
        
        <li>
          
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
        </li>
      </ul>
    </nav>
    </div>
  )
}
