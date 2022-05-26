import {Foods, RestaurantMenu} from '../test data/restaurantInfo'
import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { State } from '../state'
import { useNavigate } from 'react-router-dom'



function createMenuCards (menu: RestaurantMenu) {

  let courseList: any[] =[]
  for (const [course,foods] of Object.entries(menu)) {
    
    courseList.push(
      <Card
        bg='light'
        key={course}
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
      <ListGroup.Item key={food.name}style={{borderWidth:'1px'}}>
        <ul className='centered-list no-bullets' style={{margin:'auto', padding:'2%'}}>
          <li className='inline'>{food.name}</li>
          <li className='inline'>{food.price.toFixed(2)}</li>
        </ul>
      </ListGroup.Item>
    )
  })
 
  return listFood
}





const Menu: React.FC = () => {

  const navigate = useNavigate()
  const restaurant = useSelector((state: State) => state.restaurant)

  function handleClick() {
    let path = `/${restaurant.id}/order`
    navigate(path)
  }

  return (
    <div style={{textAlign:'center', margin:'auto'}}>
      <h1 style={{padding:'2%'}}>Menu</h1>
      <Button onClick={handleClick}>Order Now</Button>
      <br/><br/>
      <>
        {createMenuCards(restaurant.menu)}
      </>
      <Button onClick={handleClick}>Order Now</Button>
      <br/><br/>
    </div>
  )
} 

export default Menu