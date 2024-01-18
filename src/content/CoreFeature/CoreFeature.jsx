import React from 'react';
import crimg from '../Assets/CoreFeature.png';
import './CoreFeature.css'

function CoreFeature() {
  return (
    <div className='maincore'>
      <br/>
      {/* <h4 id='overlayfeat'>Explore Us</h4> */}
      <h3 id="headfeat">OUR CORE FEATURES</h3>
      <br/>
      
    <div className='coreprod'>
      
        <div className="crimg">
            <img src={crimg} className='imgCore'/>
        </div>
        <div className="corefeat">
          {/* <h3><center>Our Core Features</center></h3> */}
         <dl>
           <dt>DIGITAL PRINTING</dt>
             <dd> labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur! Eum ratione temporibus eveniet necessitatibus praesentium de</dd>
           <dt>DIRECT TO GARMENT PRINTING</dt>
             <dd> labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur! Eum ratione temporibus eveniet necessitatibus praesentium de</dd>
            <dt>SCREEN PRINTING</dt>
             <dd> labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur! Eum ratione temporibus eveniet necessitatibus praesentium de</dd>
            <dt>LOGO EMBRODERY</dt>
             <dd> labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur! Eum ratione temporibus eveniet necessitatibus praesentium de</dd>
         </dl>
        </div>
    </div>
    </div>
  )
}

export default CoreFeature;