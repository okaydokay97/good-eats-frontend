import React from "react";
import FoodCarousel from './FoodCarousel'
import { useSelector } from "react-redux";
import { State } from "../state";

const Welcome: React.FC = () => {

  const restaurantName = useSelector((state:State) => state.restaurant.restaurantName)
  
  return (
    <div style={{textAlign:'center'}}>
      <ul className="no-bullets">
        <li style={{textAlign:'center'}}>
          <h1 style={{margin:'auto'}}>{restaurantName}</h1>
        </li>
        <li>
          <FoodCarousel />
        </li>
      </ul>
    </div>
  )
}

export default Welcome