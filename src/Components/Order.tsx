import React, { useState, useEffect } from 'react'
import ShowOrderCourse, { FoodQuantity } from './ShowOrderCourse'
import ShoppingCart from './ShoppingCart'
import { Button } from 'react-bootstrap'
import {MdOutlineShoppingBag} from 'react-icons/md'


const Order: React.FC = () => {

  const [foodQuantity, setFoodQuantity] = useState<FoodQuantity>({})
  const [show, setShow] = useState<boolean>(false)
  const handleShow = () => {setShow(!show)}
  const [totalItems, setTotalItems] = useState<number>(0)



  
  return(
    
    <div style={{paddingTop:'1%'}}>
      <h1 style={{textAlign: 'center'}}>Order</h1>
      <div style={{display:'flex', justifyContent:'right', paddingRight:'2.5%'}}>
        <Button style={{position:'absolute'}} onClick={handleShow}>
          <MdOutlineShoppingBag style={{fontSize:'3.5em', position:'relative', zIndex:1}}/>
          <p style={{position:'relative',zIndex:2}}>{totalItems}</p>
        </Button>
      </div>
      <>
        <ShoppingCart 
          foodQuantity={foodQuantity} 
          setFoodQuantity={setFoodQuantity}
          setTotalItems={setTotalItems}
          totalItems={totalItems}
          show={show}
          setShow={setShow}
        />
        <ShowOrderCourse 
          foodQuantity={foodQuantity} 
          setFoodQuantity={setFoodQuantity}
          setTotalItems={setTotalItems}
          totalItems={totalItems}
        />
      </>
    
    </div>
  )
} 

export default Order