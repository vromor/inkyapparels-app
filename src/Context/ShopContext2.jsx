import React,{createContext} from "react";
import all_b_product from '../content/Assets/all_back_product';

export const ShopContext2=createContext(null);

const ShopContextProvider2 = (props) =>{
    const contextValue={all_b_product};
    return(
        <ShopContext2.Provider value={contextValue}>
            {props.children}
        </ShopContext2.Provider>
    ) 
}
export default ShopContextProvider2;