import React from "react";
import PizzaCarousel from './PizzaCarousel'
import { useSelector } from "react-redux";
import { State } from "../state";

const Welcome: React.FC = () => {

  const restaurantName = useSelector((state:State) => state.restaurant.restaurantName)
  
  return (
    <div>
      <h1>{restaurantName}</h1>
      <PizzaCarousel />
    </div>
  )
}

export default Welcome