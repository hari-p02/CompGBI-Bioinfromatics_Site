import React from 'react'
import "../styles/pages_styles/Home.css";
import ModuleCard from '../componenets/ModuleCard';
const Modules = () => {
  const mods = [
    {
      moduleNum : "1",
      title: "Introduction to Python",
      duration: "80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='highlight'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <span className='highlight'>occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span> mollit anim id est laborum."
    },
    {
      moduleNum : "2",
      title: "Sequence Analysis",
      duration: "70",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='highlight'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <span className='highlight'>occaecat cupidatat non proident, sunt in culpa qui officia deserunt</span> mollit anim id est laborum."
    }
  ]
  return (
    <div>
        <ModuleCard />
    </div>
  )
}

export default Modules