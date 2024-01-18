import React from 'react';
import Carousel from '../content/Carousel';
import Section from '../content/Section';
import Body from '../content/Body';
import Carousel_N from '../content/Carousel_N';
import CoreFeature from '../content/CoreFeature/CoreFeature';

const Shop = () => {
  return (
    <div>
      <Carousel_N />
      <br/>
      <CoreFeature/>
      <br/>
      <br/>
      <Body />
      <Section/>
    </div>
  )
}
export default Shop
