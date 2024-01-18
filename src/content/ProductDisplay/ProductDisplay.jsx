import React from "react";
import "./ProductDisplay.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import ReactWhatsapp from "react-whatsapp";
import SizeChart from "../SizeChart";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext);
  //console.log(addToCart)
  return (
    <div className="productdisplay container">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="t-shirt" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">Lorem Ipsum</div>
        <div className="productdisplay-right-size">
          <h2>Our Available Sizes</h2>
          <div className="productdisplay-right-sizes">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="productdisplay-right-colors">
          <h2>Our Available Colors</h2>
          <div className="productdisplay-right-color">
            <div id='dispred' className="colorCode"> </div>
            <div id='dispblue' className="colorCode"> </div>
            <div id='dispgreen' className="colorCode"> </div>
          </div>
        </div>
        <button id="cartbtn" onClick={()=>{addToCart(product.id)}}>Contact Us</button>
        {/* <button id="wpbtn" >Chat With Designer</button> */}
        <ReactWhatsapp number="+91 6289725217" message="Hi,I want to know about InkyApparel" id='wpbtn'>Chat With our Designer</ReactWhatsapp>
        <p className="productdisplay-right-category">
          <span>Category: </span> Top, T-shirt, Kid
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span> Latest, Stylish
        </p>
        <SizeChart/>
      </div>
    </div>
  );
};
export default ProductDisplay;
