import React from 'react';
import { Link } from 'react-router-dom';
import './body.css';
import im from './im3.jpeg';
import im2 from './im2.jpeg';
import im3 from './Assets/capdp.png';

export default function Body() {
  return (
    
    <div id="body" class="container">
     
        <center><h2 id="head">Find your <span style={{color:'#f47216',fontFamily:'arabolical,sans-serif'}}>Apparels</span> here</h2></center>
        
      <div id='brow' class="row">
        <div className="bcol col lg-3">
            <div className='flip-card'>
            <div class="flip-card-inner">
            <div class="flip-card-front">
        <img a href="#" className="disppic" src={im} width="250" height="160"/> 
        </div>
    <div className="flip-card-back">
      <h3>Click the link below to see more products!!</h3>
    </div>
  </div>
        </div>
        
        {/* <a href="#" class="link"><h3 className='item'>T-Shirt</h3></a> */}
        <Link className="link" to='/T-shirt'><center><button className='itembtn' onClick={window.scrollTo({top:0,left:0})}>T-Shirt</button></center></Link>
       
         </div>
        <div className="bcol col lg-3">
        <div className='flip-card'>
            <div className="flip-card-inner">
            <div className="flip-card-front">
        <img a href="#" className="disppic" src={im2} width="250" height="160"/>
          
         </div>
         <div class="flip-card-back">
      <h3>Click the link below to see more products!!</h3>
    </div>
  </div>
        </div>
        
        <a href="/Hoodie" className="link"><center><button className='itembtn'>Hoodie</button></center></a>
         </div>
        
        {/* <div className="col lg-4">
        <div className='flip-card'>
            <div class="flip-card-inner">
            <div class="flip-card-front">
        <a href="#" class="link"><img a href="#" class="rounded circle" src={im2} width="250" height="160"/> </a>
          
         </div>
         <div class="flip-card-back">
      <h3>Click the link below to see more products!!</h3>
    </div>
  </div>
        </div>
        
        <a href="#" class="link"><button className='itembtn'>Jakcket</button></a>
         </div> */}
         <div className="bcol col lg-3">
         <div className='flip-card'>
            <div class="flip-card-inner">
            <div class="flip-card-front">
        <a href="#" class="link"><img a href="#" class="disppic" src={im3} width="250" height="160"/> </a>
          
         </div>
         <div class="flip-card-back">
      <h3>Click the link below to see more products!!</h3>
    </div>
  </div>
        </div>
        
        <a href="/Cap" class="link"><center><button className='itembtn'>Cap</button></center></a>
      </div>
      

    </div>
  </div>   
  )
}
