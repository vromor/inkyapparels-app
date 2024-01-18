import React from 'react';
import './GoToTop.css';

const GoToTop = () => {
    const gotoBtn=()=>{
        window.scrollTo({top:0,left:0,behaviour:"smooth"});
    };
  return (
      <div>
  <div className='top-btn' onClick={gotoBtn}>
  <i className="fa fa-angle-up arwup"></i>
      {/* ClickMe */}
      </div>
      </div>
      )
  
};

export default GoToTop