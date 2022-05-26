import React from 'react'


const RestaurantSearchNavbar: React.FC = () => {

  function handleClick(e:any) {
    switch(e.target.id){
      case ('pizza'):
      
      case ('ramen'):

      case('ice-cream'):

      default:
        return
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex', justifyContent:'space-between', paddingLeft:'2%',paddingRight:'2%' }}>
          <figure className='filter-food' id='pizza' onClick={handleClick}>
            <img src='https://i.pinimg.com/originals/bd/83/75/bd8375b4bb1a6b22583acdd99be81ed0.png' height='100rem'/>
            <figcaption style={{textAlign:'center'}}>Pizza</figcaption>
          </figure>
          <figure className='filter-food' id='ramen'>
            <img src='https://freesvg.org/img/1545519939.png' height='100rem' />
            <figcaption style={{textAlign:'center'}}>Ramen</figcaption>
          </figure>

          <figure className='filter-food' id='ice-cream'>
            <img src='https://vignette.wikia.nocookie.net/clubpenguin/images/8/8b/CPNext_Emoticon_-_Chocolate_Ice_Cream_Cone.png/revision/latest?cb=20140214221938' height='100rem' />
            <figcaption style={{textAlign:'center'}}>Ice Cream</figcaption>
          </figure>
        </div>
      </nav>
    </div>
  )
} 

export default RestaurantSearchNavbar