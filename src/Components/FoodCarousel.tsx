import pizza1 from '../photos/pizza1.jpg'
import pizza2 from '../photos/pizza2.jpg'
import pizza3 from '../photos/pizza3.jpg'
import React from "react";
import {Carousel} from 'react-bootstrap'


const FoodCarousel: React.FC = () => {
  return(
    <Carousel style={{width:'50%', margin:'auto'}}>
    <Carousel.Item>
      <img
      style={{
        width: '50vh',
        height: '50vh'
      }}
        className="d-block w-100"
        src={pizza1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* <Carousel.Item>
      <img
      style={{width: '50% !important',
      height: '50vh'}}
        className="d-block w-100"
        src={pizza2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      style={{width: '50% !important',
      height: '50vh'}}
        className="d-block w-100"
        src={pizza3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption> */}
    {/* </Carousel.Item> */}
  </Carousel>
  )
}

export default FoodCarousel