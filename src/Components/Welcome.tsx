
import React from "react";
import { Carousel } from 'react-bootstrap';
import PizzaCarousel from './PizzaCarousel'
const util = require('util')

const Welcome: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <PizzaCarousel />
    </div>
  )
}

export default Welcome