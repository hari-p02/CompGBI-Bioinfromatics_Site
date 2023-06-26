import React from 'react'
import "../styles/pages_styles/Home.css"
import mod2 from "../images/mod2.png"
const Home = () => {
  return (
    <div className='front-intro'>
        <div class="front-card">
            <div className='images'>
                <div class="card">
                    <div class="card__content">
                        <img src={mod2} alt="things you will learn" />
                    </div>
                </div>
            </div>
            <div className='intro-content'>
                <h1>Welcome to Our Bioinformatics Course</h1>
                <i>Discover the Power of Data Driven Biology </i>
            </div>
        </div>
    </div>
  )
}

export default Home