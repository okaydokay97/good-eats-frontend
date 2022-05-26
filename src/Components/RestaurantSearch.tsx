import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantInfo } from "../state/actions";
import { useNavigate } from "react-router-dom";



const RestaurantSearch = () => {
  

  const restaurant = useSelector((state: State)=> state.restaurant)
  const dispatch = useDispatch()
  const { addRestaurant,removeRestaurant, clearItemsFromCart } = bindActionCreators(actionCreators, dispatch)
  const navigate = useNavigate()
  const [shownRestaurants, setShownRestaurants] = useState<RestaurantInfo[]>([])
  

  function handleClick(restaurant: RestaurantInfo) {
    removeRestaurant()
    clearItemsFromCart()
    addRestaurant(restaurant)
    let path = `/${restaurant.id}/home`
    navigate(path)
  }

  useEffect(() => {
    fetch('http://localhost:4000/restaurants')
    .then(response => response.json())
    .then(restaurants => setShownRestaurants(restaurants))
  },[])

  function createRestaurantCards(): any {
    let cards = []
    for (let i=0; i<shownRestaurants.length ;i++){
      console.log(shownRestaurants[i].picture)
      cards.push(
      <Card 
        onClick={() => {handleClick(shownRestaurants[i])}}
        style={{ width: '18rem', cursor:'pointer' }}>
        <Card.Img variant="top" src={shownRestaurants[i].picture} style={{height:'65%'}} />
        <Card.Body>
          <Card.Title>{shownRestaurants[i].name}</Card.Title>
          <Card.Text>
            Cuisine: {shownRestaurants[i].cuisine.join(', ')}
          </Card.Text>
        </Card.Body>
      </Card>
      )
    }
    return cards
  }

  return(
    <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'3%'}}>
      {createRestaurantCards()}
    </div>
  )
}

export default RestaurantSearch