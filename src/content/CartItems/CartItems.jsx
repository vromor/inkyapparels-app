import React from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';
import { useContext } from 'react';

const CartItems = () => {
  const {all_product,cartItems,removeFromCart,handleChange }= useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
          <p>Remove</p>
        </div>
      <hr />
    
      {console.log(cartItems)}
     {/* {console.log(all_product)} */}
     
     {/* {console.log("ww",cartItems)}  */}
      {all_product.map((e)=>{
        // console.log(e.id,e)
        console.log(cartItems[e.id],cartItems)
        // if(cartItems[e.id]!==-1){
          if(cartItems[e.id]>=0){
            // console.log(cartItems[e.id])
          return <div>
                        <div className="cartitems-format cartitems-format-main">
                          <img src={e.image} alt='' className='carticon-product-icon'/>
                          <p>{e.name}</p>
                          <p>${e.new_price}</p>
                          <div className='cartItems-quantity'>
                           <button onClick={()=>handleChange(e,"+")} className='cartbtn'>+</button>
                            <button id='qtycart' className='cartbtn'>{cartItems[e.id]}</button>
                            <button className='cartbtn'>-</button>
                          </div>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <i id='trash' className="fa fa-trash-o" onClick={()=>{removeFromCart(e.id)}}></i>
                        </div>
                      <hr/>
                        
        </div>
        }
      })}
    </div>
  )
} 
export default CartItems