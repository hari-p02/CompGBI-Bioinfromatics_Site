import React from 'react'
import "../styles/componenet_styles/Navbar.css"

const Navbar = () => {
  return (
    <div class="container">
        <div class="tabs">
            <a class="tab link-1" for="radio-1" href="/">Home</a>
            <a class="tab link-2" for="radio-2" href="/modules">Modules</a>
            <a class="tab link-3" for="radio-3" href="/about">About</a>
            <span class="glider"></span>
        </div>
    </div>
  )
}

export default Navbar