import React, { SyntheticEvent, useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { State } from '../state'
import { useNavigate } from 'react-router-dom'

interface Props {
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const ShoppingCart: React.FC<Props> = ({ show, setShow }) => {

  const handleShow = () => {setShow(!show)}
  const cart = useSelector((state:State)=> state.cart)
  const restaurant = useSelector((state:State) => state.restaurant)
  const user = useSelector((state:State) => state.user)
  const navigate = useNavigate()
  function handleClick() {
    if (user.id === 0) {
      navigate('/login')
    } else {
      navigate(`/${restaurant.id}/checkout`)
    }
  }


  function showCartEntries(): JSX.Element {
    const subtotalArray: number[] = []
    let totalItemCost = 0
    let foodList = []
    if (Object.entries(cart).length === 0){
      foodList.push(
        <div>
          <h1>Your cart is empty</h1>
        </div>
      )
    } else {
      for (const [food,foodInfo] of Object.entries(cart)){
        totalItemCost =(Number(foodInfo.price)) * foodInfo.quantity
        subtotalArray.push(totalItemCost)
        foodList.push(
          <div className='centered-list' style={{paddingBottom:'4%'}}>
            <h3 className='inline'>{foodInfo.quantity}  {food}</h3>
            <h6 className='inline' style={{ paddingTop:'1.5%'}}>{totalItemCost.toFixed(2)}</h6>
          </div>
        )
      }
    }
    function calculateSubtotal (priceList: number[]):number {
      return priceList.reduce((prevVal, curval)=>  prevVal + curval, 0)
    }

    

    return(
      <div>
        {foodList}
        <br/>
        <p id='subtotal'>Subtotal: {calculateSubtotal(subtotalArray).toFixed(2)}</p>
      </div>
    )
  }

  return (
    
    <div>
      <Modal show={show} onHide={handleShow} >
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              {showCartEntries()}
            </>
          </Modal.Body>
          {/* Need to figure out how to abstract below style */}
          <Modal.Footer style={{display:'flex', justifyContent:'space-between'}}>
            <Button className='inline' variant="secondary" onClick={handleShow}>
              Close
            </Button>
            <Button  onClick={handleClick} className='inline' variant="primary">
              Check Out
            </Button>
          </Modal.Footer>
        </Modal>
  
    </div>
  )
}

export default ShoppingCart