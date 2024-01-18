import React, { useContext } from 'react';
import Item from '../content/Item/Item';

import { ShopContext2 } from '../Context/ShopContext2';
import './Css/ShopCategory.css';


const ShopCategory = (props) => {
  const {all_b_product} =useContext(ShopContext2);
  return (
    <div className='shop-category'>
      <div className="shopcategory-indexsort">
        <p id="shop"><span>Showing 1-2</span > out of 4</p>
        {/* <div className="shop-category sort">
          
        </div> */}
      </div>
      <div className="shopcategory-products">
        {all_b_product.map((item,i)=>{
          if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      
      
    </div>
  )
}
export default ShopCategory;