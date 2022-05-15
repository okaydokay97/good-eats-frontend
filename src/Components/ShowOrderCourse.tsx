import React, { useState} from "react";
import { Card, ListGroup, Button } from 'react-bootstrap'
import {Foods, RestaurantMenu} from '../test data/restaurantInfo'
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";
import { Cart } from "../state/actions";






const ShowOrderCourse: React.FC = () => {
  
  
  const [shownCourse,  setShownCourse] = useState<string>('')
  const restaurantMenu = useSelector((state: State) => state.restaurant.menu)
  const cart = useSelector((state:State) => state.cart)
  const dispatch = useDispatch()
  const { addItemToCart, removeItemFromCart } = bindActionCreators(actionCreators, dispatch)
  
  
  


  function handleClick(e:any, food:any){
    let originalQuantity = cart[food.name] ? cart[food.name].quantity : 0
    let button:any = e.target
    if (button.innerText === '-' && originalQuantity > 0){
      let removedItem = {[food.name]: {quantity: (originalQuantity - 1), price:food.price}}
      removeItemFromCart(removedItem)
      
    }
    if (button.innerText === '+'){
      let addedItem = {[food.name]: {quantity: (originalQuantity + 1), price:food.price}}
      addItemToCart(addedItem)
    }
  }

  function showCoursesOrFoods (menu:RestaurantMenu) {
    let courseList: any[] =[]
    let foodsList: any[] = []
    if (shownCourse !== '') {
      for (const [course, foods] of Object.entries(menu)) {
        if (course  === shownCourse) {
          foodsList.push(
            getFoods(course, foods)
          )
        }
      }
      return(
        <div >
          <Button  onClick={() => {setShownCourse('')}}>Return to Courses</Button>
          {foodsList}
        </div>
      )
    } else {
      for (const [course] of Object.entries(menu)) {
        
        courseList.push(
            <Card
              id={`${course}`}
              bg='light'
              key='Light'
              text='dark'
              style={{ width: '30rem', margin:'auto', cursor:'pointer' }}
              className="mb-2"
              onClick={(e:any) => {setShownCourse(e.currentTarget.id)}}
            >
              <Card.Header className='centered-list' style={{height:'5rem', flexDirection:'column',}}>
                <ul className='centered-list no-bullets' style={{listStyleType:'none'}}>
                  <li className="inline "><b>{course}</b></li>
                  <li className="inline"> {'>'} </li>
                </ul>
              </Card.Header>
            </Card>
        )
      }
    }
    return courseList   
  }

  function getFoods(course:string, foodsArray:Foods): any[] {
    let listFood = foodsArray.map((food) => {
      if (course === shownCourse){

        return(
    
          <Card
                id={`${food.name}`}
                bg='light'
                key='Light'
                text='dark'
                style={{ width: '20rem', margin:'auto' }}
                className="mb-2"
              >
            <Card.Header>
              <ul className="centered-list no-bullets">
                <li className = 'inline'>{food.name}</li>
                <li id={`${food.name} price`} className='inline'>{food.price.toFixed(2)}</li>
              </ul>
              <div id={`${food.name}`} className='centered-list'>
                <Button className='quantity-button' onClick={(e) => handleClick(e, food)}>-</Button>
                <h1>{food.name in cart ? cart[food.name].quantity : 0}</h1>
                <Button className='quantity-button' onClick={(e) => handleClick(e, food)}>+</Button>
              </div>
            </Card.Header>
          </Card>
        
        )
      }
    })
   
    return listFood
  }
  
  
  return ( 
    <div>
      {showCoursesOrFoods(restaurantMenu)}
    </div>
  )
}

export default ShowOrderCourse