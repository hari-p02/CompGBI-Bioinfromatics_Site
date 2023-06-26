import React from 'react'
import "../styles/componenet_styles/Navbar.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div class="container">
        <div class="tabs">
            <Link class="tab link-1" to="/">Home</Link>
            <Link class="tab link-2" to="/modules">Modules</Link>
            <Link class="tab link-3" to="/about">About</Link>
            <span class="glider"></span>
        </div>
    </div>
  )
}

export default Navbar