import {Foods, RestaurantMenu} from '../test data/restaurantInfo'
import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { State } from '../state'



function createMenuCards (menu: RestaurantMenu) {
  let courseList: any[] =[]
  for (const [course,foods] of Object.entries(menu)) {
    
    courseList.push(
      <Card
        bg='light'
        key='Light'
        text='dark'
        style={{ width: '30rem', margin:'auto'}}
        className="mb-2"
      >
        <Card.Header><b>{course}</b></Card.Header>
        <Card.Body>
          <ListGroup variant='flush' style={{display:'flex', textAlign:'left'}}>
            {getFoods(foods)}
          </ListGroup>
        </Card.Body>
      </Card>
      
    )
  }
  return courseList   
}




export function getFoods(foodsArray:Foods): any[] {
  
  let listFood = foodsArray.map((food) => {
    return(
      <ListGroup.Item>
        <ul className='centered-list no-bullets'>
          <li className='inline'>{food.name}</li>
          <li className='inline'>{food.price.toFixed(2)}</li>
        </ul>
      </ListGroup.Item>
    )
  })
 
  return listFood
}





const Menu: React.FC = () => {

  const restaurantMenu = useSelector((state: State) => state.restaurant.menu)


  return (
    <div style={{textAlign:'center', margin:'auto'}}>
      <h1 style={{padding:'2%'}}>Menu</h1>
      <Button href='/order'>Order Now</Button>
      <br/><br/>
      <>
        {createMenuCards(restaurantMenu)}
      </>
      <Button href='/order'>Order Now</Button>
      <br/><br/>
    </div>
  )
} 

export default Menu