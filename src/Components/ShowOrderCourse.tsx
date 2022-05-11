import React, { useState, useEffect, } from "react";
import { Card, ListGroup, Button } from 'react-bootstrap'
import {Foods, MenuItemInterface, menuItems} from '../test data/menuInfo'

export interface FoodQuantity {
  [key: string]: {
    quantity: number,
    price: number
  }
}

export interface Props {
  foodQuantity: FoodQuantity
  totalItems: number
  setFoodQuantity: React.Dispatch<React.SetStateAction<FoodQuantity>>
  setTotalItems: React.Dispatch<React.SetStateAction<number>>
}



const ShowOrderCourse: React.FC<Props> = ({foodQuantity, setFoodQuantity, setTotalItems, totalItems}) => {
  
  
  const [shownCourse,  setShownCourse] = useState<string>('')
  
  
  


  function handleClick(e: any){
    let button:any = e.target
    if (button.innerText === '-' && Number(button.nextSibling.innerText) > 0){
      setFoodQuantity({
        ...foodQuantity,
        [button.parentElement.id]: {
          quantity: (button.nextSibling.innerText = Number(button.nextSibling.innerText) - 1),
          price: document.getElementById(`${button.parentElement.id} price`)?.innerText
        }
      })
      setTotalItems(totalItems - 1)
      
    }
    if (button.innerText === '+'){
      setFoodQuantity({
        ...foodQuantity,
        [button.parentElement.id]: {
          quantity: (button.previousSibling.innerText = Number(button.previousSibling.innerText) + 1),
          price: document.getElementById(`${button.parentElement.id} price`)?.innerText
        }
      })
      setTotalItems(totalItems + 1)
    }
  }

  function getFoods(foodsArray:Foods): any[] {
    let listFood = foodsArray.map((food) => {
      if (food.course === shownCourse){

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
              <ul style={{listStyleType:'none', display:'flex', justifyContent:'space-between', padding:0}}>
                <li style={{display:'inline-block'}}>{food.name}</li>
                <li id={`${food.name} price`}style={{display:'inline-block'}}>{food.price.toFixed(2)}</li>
              </ul>
              <div id={`${food.name}`} style={{display:'flex', justifyContent:'space-between'}}>
                <Button onClick={handleClick} style={{height:'3rem', width:'3rem', borderRadius:'100%'}}>-</Button>
                <h1>{food.name in foodQuantity ? foodQuantity[food.name].quantity : 0}</h1>
                <Button onClick={handleClick} style={{height:'3rem', width:'3rem', borderRadius:'100%'}}>+</Button>
              </div>
            </Card.Header>
          </Card>
        
        )
      }
    })
   
    return listFood
  }
  
  

  function showCoursesOrFoods (menu:MenuItemInterface) {
    let courseList: any[] =[]
    let foodsList: any[] = []
    if (shownCourse !== '') {
      for (const [k,v] of Object.entries(menu)) {
        if (k === shownCourse) {
          foodsList.push(
            getFoods(v)
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
      for (const [k,v] of Object.entries(menu)) {
        
        courseList.push(
            <Card
              id={`${k}`}
              bg='light'
              key='Light'
              text='dark'
              style={{ width: '30rem', margin:'auto', cursor:'pointer' }}
              className="mb-2"
              onClick={(e:any) => {setShownCourse(e.currentTarget.id)}}
            >
              <Card.Header style={{height:'5rem', display:'flex', flexDirection:'column',justifyContent:'center'}}>
                <ul style={{listStyleType:'none', display:'flex', justifyContent:'space-between'}}>
                  <li style={{display:'inline-block'}}><b>{k.toUpperCase()}</b></li>
                  <li style={{display:'inline-block'}}> {'>'} </li>
                </ul>
              </Card.Header>
            </Card>
        )
      }
    }
    return courseList   
  }
  
  return ( 
    <div>
      {showCoursesOrFoods(menuItems)}
    </div>
  )
}

export default ShowOrderCourse