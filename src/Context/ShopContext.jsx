import React,{createContext,useState} from "react";
import all_product from '../content/Assets/all_front_product';
// import all_b_product from '../content/Assets/all_back_product';

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index < all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems]=useState(getDefaultCart());
    
    
    const addToCart =(itemId)=>{
        
        // console.log(itemId);
        // const newobj={...cartItems}
        // newobj[itemId]=1;
        // console.log(newobj);
        // setCartItems({...cartItems,...newobj})
        // console.log(cartItems,itemId);
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // setCartItems((prev) => {
        //     return { ...prev, [itemId]: prev[itemId] + 1 };
        // }); 
        console.log(cartItems);
        console.log(typeof(cartItems[itemId]))
        // console.log(itemId,cartItems)
        // setCartItems((prev) => ({
        //     ...prev, [itemId]: (parseInt(prev[itemId]) || 0) + 1
        // dig}

        // ))

    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const handleChange=(item,d)=>{
        console.log(item,d,item.id);
        let ind=-1;
        // cartItems.forEach((data)=>{
        //     console.log(data);
        // })
        // cartItems.forEach((data,index)=>{
        //     if(data.id === item.id){
        //         ind=index;
        //     }
        // });

    }
    {console.log(cartItems)}
    const contextValue={all_product,cartItems,addToCart,removeFromCart,handleChange};
    return(
        
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    ) 
}
export default ShopContextProvider;