import React, {useState} from 'react'
import "../styles/componenet_styles/Navbar.css"
import {Link, Outlet} from 'react-router-dom'
const Navbar = () => {
  const [isClicked, setIsClicked] = useState([false, false, false]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const bkstyle = {
    width: "100px",
    backgroundColor: "#e6eef9",
    transition: "0.25s ease-out",
    color: "#185ee0"
  }
  return (
    <div class="container">
        <div class="tabs">
            <Link class="tab link-1" to="/" style={isClicked[0] ? bkstyle : {} } onClick={() => {setIsClicked(isClicked[0] ? [false, false, false] : [true, false, false])}}>Home</Link>
            <Link
              class="tab link-2"
              to="/modules"
              style={isClicked[1] ? bkstyle : {}}
              onClick={() => {
                setIsClicked(isClicked[1] ? [false, false, false] : [false, true, false]);
              }}
              onMouseEnter={() => setIsDropdownVisible(true)}
              // onMouseLeave={() => setIsDropdownVisible(false)}
            >
              Modules
            </Link>

            <div class="dropdown" style={{ display: isDropdownVisible ? 'block' : 'none' }} onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
              <ul>
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            </div>

            <Link class="tab link-3" to="/about" style={isClicked[2] ? bkstyle : {} } onClick={() => {setIsClicked(isClicked[2] ? [false, false, false] : [false, false, true])}}>About</Link>
            <span class="glider"></span>
        </div>
        <main>
          <Outlet />
        </main>
    </div>
  )
}

export default Navbar