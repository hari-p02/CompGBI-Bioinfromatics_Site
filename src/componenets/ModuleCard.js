import React from 'react'
import "../styles/componenet_styles/ModuleCard.css"
const ModuleCard = () => {
  return (
    <div class="card">
        <div className='lesson-num'> Module 1</div>
        <h1>Introduction to Python</h1>
        <div className='duration'>Duration: 80 mins</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='highlight'>sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint <span className='highlight'>occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt</span> mollit anim id est laborum. 
        </p>
    </div>
  )
}

export default ModuleCard