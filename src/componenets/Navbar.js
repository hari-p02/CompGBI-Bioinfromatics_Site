import React, { useState } from "react";
import "../styles/componenet_styles/Navbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";
const Navbar = () => {
  // const [isClicked, setIsClicked] = useState([false, false, false]);
  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  console.log(segments);
  const bkstyle = {
    width: "100px",
    backgroundColor: "#e6eef9",
    transition: "0.25s ease-out",
    color: "#185ee0",
  };
  return (
    <div class="container">
      <div class="tabs">
        <Link
          class="tab link-1"
          to="/"
          style={segments[1] === "" ? bkstyle : {}}
          // onClick={() => {
          //   setIsClicked(
          //     isClicked[0] ? [false, false, false] : [true, false, false]
          //   );
          // }}
        >
          Home
        </Link>
        <Link
          class="tab link-2"
          to="/modules"
          style={segments[1] === "modules" ? bkstyle : {}}
          // onClick={() => {
          //   setIsClicked(
          //     isClicked[1] ? [false, false, false] : [false, true, false]
          //   );
          // }}
          // onMouseEnter={() => setIsDropdownVisible(true)}
          // onMouseLeave={() => setIsDropdownVisible(false)}
        >
          Modules
        </Link>

        {/* <div
          class="dropdown"
          // style={{ display: isDropdownVisible ? "block" : "none" }}
          // onMouseEnter={() => setIsDropdownVisible(true)}
          // onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <ul>
            <li>Dropdown Item 1</li>
            <li>Dropdown Item 2</li>
            <li>Dropdown Item 3</li>
          </ul>
        </div> */}

        <Link
          class="tab link-3"
          to="/about"
          style={segments[1] === "about" ? bkstyle : {}}
          // onClick={() => {
          //   setIsClicked(
          //     isClicked[2] ? [false, false, false] : [false, false, true]
          //   );
          // }}
        >
          About
        </Link>
        <span class="glider"></span>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
