import React,{useState} from "react";
import img from "./favicon.png";
import "./header.css";
import './Assets/all_front_product';
// import { Link } from "react-router-dom";
import all_product from "./Assets/all_front_product";

const Header=()=> {
 // const [searchTerm,setSearchTerm]=useState("");
 //onChange={(event)=>{
 // setSearchTerm(event.target.value)
//}} 
  return <div id="navbar" className="fixed-top">
     
   
    <div id="img">
    <img src={img} style={{width:150,height:80}} />


    </div>
    <div id="search" >
      
        <form>
          <input id="input"  placeholder="Search your product" type="search"></input>
          <button id="search-icon" type="submit"><i className="fa fa-search"></i></button>
        </form>
    </div>
     {/* <div className='templateContainer'>
      {
        all_product
          .filter((val)=>{
            if(searchTerm==""){
                return val;
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          })
      }
    </div>  */}
    <div id="icon">
    <ul>
      <li className="li-icon"><a href="#"><i className="fa fa-user" style={{color:'skyblue'}}></i></a></li>
      <li className="li-icon"><a href="#"><i className="fa fa-heart colored" style={{color:'skyblue'}}></i></a></li>
    {/* <li className="li-icon"><Link to='/cart'><i className="fa fa-shopping-cart" style={{color:'skyblue'}}></i></Link></li> */}
    <li className="li-icon"><a href="/cart"><i className="fa fa-shopping-cart" style={{color:'skyblue'}}></i></a></li>
    {/* <span id="numcart">{size}</span> */}
    </ul>

    </div>
    <input type="checkbox" id="check"></input>
     <label htmlFor="check" className="checkbtn">
     <i className="fa fa-bars" id="menu"></i>
     <i className="fa fa-close" id="close"></i>
     </label>
  </div>
}


  /* <nav className="navbar navbar-expand-sm fixed-top " id="nav2" style={{padding:10 }}>
<div className="mx-auto">
<img style={{ width:150, height: 50}} src={img} id="img1"/>

</div>
<div id='search' >	    


<form> 
<input className='search' type="search" placeholder='Search your product' style={{margin:20}} aria-label="Search"/>
<button type="submit"><i className="fa fa-search"></i></button>
</form>

</div>
<div activeKey="/home" class="link">

<ul class="navbar-nav  ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Experiences</a>
          </li>
         
      </ul>
</div>


</nav> */

export default Header;