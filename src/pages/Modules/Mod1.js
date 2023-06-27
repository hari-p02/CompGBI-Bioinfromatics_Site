import React from 'react';
import "../../styles/pages_styles/module_styles/Mod1.css";

const Mod1 = () => {
  return (
    <div className='mod1'>
      <div className='card-mod1'>
        <div className='circles'>
          <div className='c'></div>
          <div className='c'></div>
          <div className='c'></div>
        </div>

        <div className='browser'>
          <div className='chevrons'>
            <svg viewBox='0 0 20 20' height='16' width='16' xmlns='http://www.w3.org/2000/svg' data-name='20' id='_20'>
              <path
                transform='translate(6.25 3.75)'
                d='M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z'
                id='Fill'
              ></path>
            </svg>
            <svg viewBox='0 0 20 20' height='16' width='16' xmlns='http://www.w3.org/2000/svg' data-name='20' id='_20'>
              <path
                transform='translate(6.625 3.75)'
                d='M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z'
                id='Fill'
              ></path>
            </svg>
          </div>
          <div className='search-bar'>
            <svg xmlns='http://www.w3.org/2000/svg' width='7.89' height='7.887' viewBox='0 0 16.89 16.887'>
              <path id='Fill' d='M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z' transform='translate(0.003 0)'></path>
            </svg>
            Introduction to Python
          </div>
        </div>
        <div className='video-player'>
            <iframe
            src="https://www.youtube.com/embed/DKh7C-TeokU"
            title="placeholder"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="video"
            style={{ borderRadius: '30px', border: 'none', width: '100%', height: '100%' }}
            ></iframe>
            <div className='players'>
                <div class="info">
                    <div className='num'>1</div>
                    <img src="https://i.ytimg.com/vi/DKh7C-TeokU/hqdefault.jpg" alt="Video Thumbnail" />
                    <div>
                        <div className='title'>Installing Python</div>
                        <div className='account'>CompGBI Lab</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};



export default Mod1;
