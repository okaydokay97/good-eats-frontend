import React, { useState, useEffect } from 'react'
import ShowOrderCourse from './ShowOrderCourse'
import ShoppingCart from './ShoppingCart'
import { Button } from 'react-bootstrap'
import {MdOutlineShoppingBag} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { State } from '../state/'

const Order: React.FC = () => {

  const [show, setShow] = useState<boolean>(false)
  const handleShow = () => {setShow(!show)}
  const [totalItems, setTotalItems] = useState<number>(0)
  const cart = useSelector((state: State) => state.cart)


  function sumItems() {
    let total = 0
    for (const [food, foodInfo] of Object.entries(cart)) {
      total += foodInfo.quantity
    }
    return total
  }
  
  return(
    
    <div style={{paddingTop:'1%'}}>
      <h1 style={{textAlign: 'center'}}>Order</h1>
      <div style={{display:'flex', justifyContent:'right', paddingRight:'2.5%'}}>
        <Button style={{position:'absolute'}} onClick={handleShow}>
          <MdOutlineShoppingBag style={{fontSize:'3.5em', position:'relative', zIndex:1}}/>
          <p style={{position:'relative',zIndex:2}}>{sumItems()}</p>
        </Button>
      </div>
      <>
        <ShoppingCart 
          show={show}
          setShow={setShow}
        />
        <ShowOrderCourse />
      </>
    
    </div>
  )
} 

export default Order