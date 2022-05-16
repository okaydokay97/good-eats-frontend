import pizza1 from '../photos/pizza1.jpg'
import photo4 from '../photos/photo4.jpeg'
import React from "react";
import {Carousel} from 'react-bootstrap'

interface Props {
  name: string
}
const FoodCarousel: React.FC<Props> = ({name}) => {
  return(
    <Carousel style={{width:'50%', margin:'auto'}}>
    <Carousel.Item>
      <img
      style={{
        width: '50vh',
        height: '50vh'
      }}
        className="d-block w-100"
        src={name === 'Ramen Party'? photo4 : pizza1}
        alt="First slide"
      />
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