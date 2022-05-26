import React, { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../state";

const Checkout:React.FC = () => {

  const restaurant = useSelector((state: State)=> state.restaurant)
  const cart = useSelector((state:State) => state.cart)
  const user = useSelector((state:State) => state.user)
  const displayCart: React.ReactNode[] = []
  let subtotal = 0




  function handleClick(e:any){
    if(e.target.id === 'place-order'){
      console.log(user.id)
      fetch('http://localhost:4000/orders', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          description: cart,
          price: subtotal.toFixed(2),
          userId: user.id,
          restaurantId: restaurant.id
        })
      })
      .then(response => response.json())
      .then(response => console.log(response))
    }
  }

  function displayItems(){
    for (const [food, info] of Object.entries(cart)) {
      subtotal += (info.price * info.quantity)
      displayCart.push(
        <ListGroup variant="flush">
          <ListGroupItem style={{borderWidth: '.5px'}}>
            <ul className="no-bullets centered-list spaced-list" style={{margin:'auto'}}>
              <li className="inline">{info.quantity} {food}</li>
              <li className="inline">{(info.price * info.quantity).toFixed(2)}</li>
            </ul>
          </ListGroupItem>
        </ListGroup>
      )

    }
    return displayCart
  }

  return(
    <div>
      <h1 style={{padding:'2%', textAlign:'center'}}>Checkout</h1>
      <div>
        <Card
          bg='light'
          key='totalOrder'
          text='dark'
          style={{ width: '30rem', margin:'auto', display:'flex', justifyContent:'space-between'}}
          className='mb-2'>
          <Card.Header style={{padding:'2%', textAlign:'center'}}>
            <b>{restaurant.name}</b>
          </Card.Header>
          <Card.Body>
            {displayItems()}
            <ListGroup variant="flush">
              <ListGroupItem>Subtotal: {subtotal.toFixed(2)}</ListGroupItem>
              <Button style={{marginTop:'1%'}}onClick={handleClick} id='place-order'>Place Order</Button>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Checkout