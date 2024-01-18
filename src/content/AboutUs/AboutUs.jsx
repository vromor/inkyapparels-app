import React from 'react';
import abimg from '../Assets/AboutPic.jpg'
import './AboutUs.css';
import img from '../Assets/logo8.jpg';

function AboutUs() {
  return (
      <div>
    <div id='main-aboimgdiv'>
        <img id='aboimg' src={abimg} />
       <div id='about-text'><h1>ABOUT    US</h1></div> 
        </div>
        <div className='aboutSec'></div>
      <div className="welcome-about">

          <div id='wlmHead' className="welcome-heading">
            <h3><center>Welcome To InkyApparels</center></h3>
          </div>
          <div id='wlmNote' className="welcome-note">
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore eos laboriosam doloremque maiores, asperiores voluptatibus ducimus eaque quo voluptatem. Aperiam magnam a cupiditate. Adipisci eum ea consequatur ullam. Nostrum.
          </p>
        </div>
        <div id='wlmTail' className="welcome-tail">
            <h3><center><b>More About Us</b></center></h3>
          </div>
      </div>
      {/* <div className="who-we-are">
        <div className="who-right">
          <img className='imgAb' src={'https://img.freepik.com/free-vector/flat-people-asking-questions-illustrated_23-2148898772.jpg'}/>
        </div>
        <div className="who-left">
          <h3>Who We Are</h3>
        </div>
      </div> */}
      <div id="who">
        <div id='who-img'></div>
        <div id='who-cont'></div>
      </div>
      <div id="what">
        <div id='who-cont'></div>
        <div id='who-img'></div>
      </div>
      <div id="our">
        <div id=''></div>
        <div id=''></div>
      </div>
    </div>
  )
}

export default AboutUs