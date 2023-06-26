import React from 'react'
import "../styles/componenet_styles/ModuleCard.css"
const ModuleCard = ( {moduleNum, title, duration, highlight, bgkfrom, bkgto, desc}) => {
const parts = desc.split(/(<span>|<\/span>)/);
// console.log("linear-gradient(135deg," + bgkfrom + " 0%, " + bkgto + " 100%)");
  return (
    <div class="card-mod" style={{background: "linear-gradient(135deg," + bgkfrom + " 0%, " + bkgto + " 100%)"}}>
        <div className='top-content'>
            <div className='cont'>
                <div className='lesson-num'> {"Module " + moduleNum}</div>
                <div class="box">
                    <div class="arrow right"></div>
                    <div class="text">Go To Module!</div>
                </div>
            </div>
            <h1>{title}</h1>
            <div className='duration'>{"Duration: " +  duration + " mins"}</div>
        </div>
        <p>
            {parts.map((part, index) => {
                if (part === "<span>") {
                return (
                    <span key={index} style={{backgroundColor: highlight, padding: "1.5px", borderRadius: "5px"}}>
                    {parts[index + 1]}
                    </span>
                );
                } else if (part !== "</span>") {
                return <span key={index}>{part}</span>;
                }
                return null;
            })}
        </p>
    </div>
  )
}

export default ModuleCard