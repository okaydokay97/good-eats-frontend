import React from "react";
import FoodCarousel from './FoodCarousel'
import { useSelector } from "react-redux";
import { State } from "../state";

const Welcome: React.FC = () => {

  const restaurant = useSelector((state:State) => state.restaurant)


  return (
    <div style={{textAlign:'center'}}>
      <ul className="no-bullets">
        <li style={{textAlign:'center'}}>
          <h1 style={{margin:'auto'}}>{restaurant.restaurantName}</h1>
        </li>
        <li>
          <FoodCarousel name={restaurant.restaurantName}/>
        </li>
      </ul>
    </div>
  )
}

export default Welcome