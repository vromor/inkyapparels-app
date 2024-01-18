import React from 'react';
import all_men from '../content/Assets/all_men';
import Item from '../content/Item/Item';

function Men(props) {
  console.log(props.data)
  console.log(all_men);
  // console.log(men)
  return (
    <div>
      <h1>Hi</h1>
        {all_men.map((item,i)=>{
          if(props.data===item.category){
          
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
    </div>
  )
}

export default Men