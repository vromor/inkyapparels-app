import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../content/Breadcrums/Breadcrum';
import ProductDisplay from '../content/ProductDisplay/ProductDisplay';
import {ShopContext} from '../Context/ShopContext';


const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product= all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}
export default Product;