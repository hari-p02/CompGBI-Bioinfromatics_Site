import React from 'react'
import "../styles/componenet_styles/Navbar.css"
const Navbar = () => {
  return (
    <div class="container">
        <div class="tabs">
            <input type="radio" id="radio-1" name="tabs" class="radio-1"/>
            <label class="tab" for="radio-1">Home</label>
            <input type="radio" id="radio-2" name="tabs" class="radio-2"/>
            <label class="tab" for="radio-2">Modules</label>
            <input type="radio" id="radio-3" name="tabs" class="radio-3"/>
            <label class="tab" for="radio-3">About</label>
            <span class="glider"></span>
        </div>
    </div>
  )
}

export default Navbar