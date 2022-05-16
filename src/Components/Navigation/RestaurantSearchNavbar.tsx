import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantSearchNavbar: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className='nav-link' to=''>Cuisine Filter Types...(not implemented)<span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
} 

export default RestaurantSearchNavbar