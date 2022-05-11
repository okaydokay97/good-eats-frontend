import React, { SyntheticEvent, useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap'

interface FoodQuantity {
  [key: string]: {
    quantity: number,
    price: number
  }
}

interface Props {
  foodQuantity: FoodQuantity
  totalItems: number
  setFoodQuantity: React.Dispatch<React.SetStateAction<FoodQuantity>>
  setTotalItems: React.Dispatch<React.SetStateAction<number>>
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}




const ShoppingCart: React.FC<Props> = ({
  foodQuantity,
  totalItems,
  setFoodQuantity,
  setTotalItems,
  show,
  setShow
}) => {

  const handleShow = () => {setShow(!show)}
  

  


  function showCartEntries(): JSX.Element {
    const subtotalArray: number[] = []
    let totalItemCost = 0
    let foodList = []
    if (Object.entries(foodQuantity).length === 0){
      foodList.push(
        <div>
          <h1>Your cart is empty</h1>
        </div>
      )
    } else {
      for (const [k,v] of Object.entries(foodQuantity)){
        totalItemCost =(Number(v.price)) * v.quantity
        subtotalArray.push(totalItemCost)
        foodList.push(
          <div style={{display:'flex', justifyContent:'space-between', paddingBottom:'4%'}}>
            <h3 style={{display:'inline-block'}}>{v.quantity}  {k}</h3>
            <h6 style={{display:'inline-block', paddingTop:'1.5%'}}>{totalItemCost.toFixed(2)}</h6>
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
        
        <p style={{borderTop:'3px dashed grey', textAlign:'right', paddingTop:'2%'}}>Subtotal: {calculateSubtotal(subtotalArray).toFixed(2)}</p>
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
          <Modal.Footer style={{display:'flex', justifyContent:'space-between'}}>
            <Button style={{display:'inline-block'}} variant="secondary" onClick={handleShow}>
              Close
            </Button>
            <Button  href='/checkout' style={{display:'inline-block'}} variant="primary">
              Check Out
            </Button>
          </Modal.Footer>
        </Modal>
  
    </div>
  )
}

export default ShoppingCart