import React, { useContext } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Item from "../content/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import {BrowserRouter,Routes,Route } from 'react-router-dom';


// import { ShopContext2 } from '../Context/ShopContext2';
//import all_product from '../content/Assets/all_front_product';

import "./Css/ShopCategory.css";

import Men from "./Men";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // const {filter}=useContext(Filter);
  // const navigate = useNavigate();
  // console.log(all_product)
  // const [data,setData]=useState(all_product);
  //console.log(data)
  const filterResult = () => {
    //   const result=all_product.filter((curData)=>{
    //     console.log(all_product)
    //       return  curData.sex===sex;
    //   });
    //  setData(result);
    //  console.log(setData)
    // console.log(sex)
    // {all_product.map((item,i)=>{
    //   //console.log(item.sex)
    //   if(sex===item.sex && props.category===item.category){
    //     console.log("yes")
    //       return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    //   }
    //   else{
    //     return null;
    //   }


    // })}


   <BrowserRouter>
   <Routes>
   <Route path='/T-shirt/Men' element={<Men data="props.category" />}/>
   </Routes>
   </BrowserRouter>
 
    // <Men data={props.category} />;
  };
  return (
    <div className="shop-category">
      {/* <Men data={props.category}/> */}
      <div className="shopcategory-indexsort">
        {/* <p id="shop"><span>Showing 1-2</span > out of 4</p> */}
      </div>
      <div className="row mt-5 mx-2">
        <div className="productDisplay">
          <div className="Quck-lnk">
            <span id="filter">Choose Your Category</span>
            <ul>
              <Link to={`/${props.category}/Men`}>
                <button className="fillist" onClick={() => filterResult(props.category)}>
                  Men
                </button>
              </Link>
              <li className="fillist">
                <a className="fillink" href="#">
                  Women
                </a>
              </li>
              <li className="fillist">
                <a className="fillink" href="#">
                  KIDs
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="prd"> */}
          {/* <div className="prdrow"> */}
          <div className="shopcategory-products">
            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        {/* </div>  */}
      </div>
  
    </div>
    // </div>
  );
};
export default ShopCategory;
