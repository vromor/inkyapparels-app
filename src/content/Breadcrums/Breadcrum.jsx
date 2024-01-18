import React from 'react'
import './Breadcrum.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Breadcrum = (props) => {
    const {product}=props;
    // const {cat}=(product.category);
  return (
    <div className='breadcrum'>
        <Link to='/' className='breadlink'>Home</Link> <i class='fa fa-chevron-right' style={{fontSize:'15px'}}></i><HashLink to='/#body' className='breadlink'>Shop</HashLink><i class='fa fa-chevron-right' style={{fontSize:'15px'}}></i><Link to={`/${product.category}`} className='breadlink'>{product.category}</Link><i class='fa fa-chevron-right' style={{fontSize:'15px'}}></i><Link to='#' className='breadlink'>{product.name}</Link>
    </div>
  )
}
export default Breadcrum;