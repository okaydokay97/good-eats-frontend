import {Foods, MenuItemInterface, menuItems} from '../test data/menuInfo'
import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'






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




function createMenuCards (menu:MenuItemInterface) {
  let courseList: any[] =[]
  for (const [k,v] of Object.entries(menu)) {
    
    courseList.push(
      <Card
        bg='light'
        key='Light'
        text='dark'
        style={{ width: '30rem', margin:'auto'}}
        className="mb-2"
      >
        <Card.Header><b>{k.toUpperCase()}</b></Card.Header>
        <Card.Body>
          <ListGroup variant='flush' style={{display:'flex', textAlign:'left'}}>
            {getFoods(v)}
          </ListGroup>
        </Card.Body>
      </Card>
      
    )
  }
  return courseList   
}

const Menu: React.FC = () => {
  return (
    <div style={{textAlign:'center', margin:'auto'}}>
      <h1 style={{padding:'2%'}}>Menu</h1>
      <Button href='/order'>Order Now</Button>
      <br/><br/>
      <>
        {createMenuCards(menuItems)}
      </>
      <Button href='/order'>Order Now</Button>
      <br/><br/>
    </div>
  )
} 

export default Menu