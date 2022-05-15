import React from "react";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";



const Header: React.FC = () => {
  const restaurant = useSelector((state: State) => state.restaurant)
  return(
    <div>
      <h1 id='good-eats-header'>Good Eats</h1>
    </div>
  )
  
}

export default Header