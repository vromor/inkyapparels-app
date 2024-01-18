import React from 'react';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import './Sizechart.css';
function SizeChart() {
  return (
   
  <Popup className='popupchart' trigger={<button className='popbtn'> Know Your Sizes </button>} position="bottom">
    <div className='sizechart'>
    <h3><center>Size Chart</center></h3>
    <table className='sizeTable table'  cellPadding={35} cellSpacing={30}> 
        <tr>
        <th scope="col">Size</th>
        <th scope="col">To Fit Bust(in)</th>
        <th scope="col">Front Length(in)</th>
        <th scope="col">To Fit Waist(in)</th>
        </tr>
        <tr>
            <td>S</td>
            <td>34.0</td>
            <td>28.0</td>
            <td>32.0</td>
        </tr>
        <tr>
            <td>M</td>
            <td>36.0</td>
            <td>28.0</td>
            <td>34.0</td>
        </tr>
        <tr>
            <td>L</td>
            <td>38.0</td>
            <td>28.0</td>
            <td>36.0</td>
        </tr>
        <tr>
            <td>XL</td>
            <td>41.0</td>
            <td>28.0</td>
            <td>39.0</td>
        </tr>
        <tr>
            <td>XXL</td>
            <td>44.0</td>
            <td>28.0</td>
            <td>42.0</td>
        </tr>
    </table>

    </div>
  </Popup>
    
  )
}

export default SizeChart