import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = (props) => {
  return (
    <div className='items'>
       <Link to={`/product/${props.id}`}><img className='itemImg' src={props.image} alt=""/></Link> 
        <p id='item-text'>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
            <text>{'\u20B9'}</text>{props.new_price}
            </div>
            <div className="item-price-old">
            ₹{props.old_price}
            </div>
        </div>
        <div className="itemDetail">
          
        </div>
    </div>
  )
}
export default Item