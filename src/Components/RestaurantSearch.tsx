import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";
// import { RestaurantInfo } from "../state/actions";
import pizza1 from '../photos/pizza1.jpg'
import { restaurant1 } from "../test data/restaurantInfo";
import { useNavigate } from "react-router-dom";



const RestaurantSearch = () => {
  

  // const [restaurantList, setRestaurantList] = useState<RestaurantInfo[]>([])
  // const restaurant = useSelector((state: State)=> state.restaurant)
  const dispatch = useDispatch()
  const { addRestaurant } = bindActionCreators(actionCreators, dispatch)
  const navigate = useNavigate()
  

  function handleClick() {
    addRestaurant(restaurant1)
    let path = `/${restaurant1.id}/home`
    navigate(path)
  }

  return(
    <Card 
      onClick={handleClick}
      style={{ width: '18rem', cursor:'pointer' }}>
      <Card.Img variant="top" src={pizza1} />
      <Card.Body>
        <Card.Title>{restaurant1.restaurantName}</Card.Title>
        <Card.Text>
          Cuisine: {restaurant1.cuisine.join(', ')}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RestaurantSearch