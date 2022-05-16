import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantInfo } from "../state/actions";
import pizza1 from '../photos/pizza1.jpg'
import ramen1 from '../photos/photo4.jpeg'
import { restaurant1 } from "../test data/restaurantInfo";
import { restaurant2 } from "../test data/restaurantInfo";
import { useNavigate } from "react-router-dom";



const RestaurantSearch = () => {
  

  // const [restaurantList, setRestaurantList] = useState<RestaurantInfo[]>([])
  const restaurant = useSelector((state: State)=> state.restaurant)
  const dispatch = useDispatch()
  const { addRestaurant,removeRestaurant, clearItemsFromCart } = bindActionCreators(actionCreators, dispatch)
  const navigate = useNavigate()
  

  function handleClick(restaurant: RestaurantInfo) {
    removeRestaurant()
    clearItemsFromCart()
    addRestaurant(restaurant)
    let path = `/${restaurant.id}/home`
    navigate(path)
  }

  return(
    <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'3%'}}>
      <Card 
        onClick={() => {handleClick(restaurant1)}}
        style={{ width: '18rem', cursor:'pointer' }}>
        <Card.Img variant="top" src={pizza1} />
        <Card.Body>
          <Card.Title>{restaurant1.restaurantName}</Card.Title>
          <Card.Text>
            Cuisine: {restaurant1.cuisine.join(', ')}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card 
        onClick={() => {handleClick(restaurant2)}}
        style={{ width: '18rem', cursor:'pointer' }}>
        <Card.Img variant="top" src={ramen1} />
        <Card.Body>
          <Card.Title>{restaurant2.restaurantName}</Card.Title>
          <Card.Text>
            Cuisine: {restaurant2.cuisine.join(', ')}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RestaurantSearch