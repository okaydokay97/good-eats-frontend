import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

const RestaurantSearchNavbar: React.FC = () => {

  const dispatch = useDispatch()
  const { addFilter } = bindActionCreators(actionCreators, dispatch)

  function handleClick(e:any) {
    
    switch(e.target.className){
      case ('pizza'):
        addFilter(e.target.className)
        return
      case ('ramen'):
        addFilter(e.target.className)
        return
      case('ice-cream'):
        addFilter(e.target.className)
        return
      default:
        return
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex', justifyContent:'space-between', paddingLeft:'2%',paddingRight:'2%' }}>
          <figure className='filter-food' id='pizza' onClick={handleClick}>
            <img className='pizza' src='https://i.pinimg.com/originals/bd/83/75/bd8375b4bb1a6b22583acdd99be81ed0.png' height='100rem'/>
            <figcaption className='pizza' style={{textAlign:'center'}}>Pizza</figcaption>
          </figure>
          <figure className='filter-food' id='ramen' onClick={handleClick} >
            <img className='ramen' src='https://freesvg.org/img/1545519939.png' height='100rem' />
            <figcaption className='ramen' style={{textAlign:'center'}}>Ramen</figcaption>
          </figure>

          <figure className='filter-food' id='ice-cream' onClick={handleClick} >
            <img className='ice-cream' src='https://vignette.wikia.nocookie.net/clubpenguin/images/8/8b/CPNext_Emoticon_-_Chocolate_Ice_Cream_Cone.png/revision/latest?cb=20140214221938' height='100rem' />
            <figcaption className='ice-cream' style={{textAlign:'center'}}>Ice Cream</figcaption>
          </figure>
        </div>
      </nav>
    </div>
  )
} 

export default RestaurantSearchNavbar