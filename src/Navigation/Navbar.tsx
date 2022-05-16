import React from "react";
import {
  Link,
  BrowserRouter as Router
} from 'react-router-dom'

import { useSelector } from "react-redux";
import { State } from "../state";




const Navbar: React.FC = () => {
  const selectedRestaurant = useSelector((state:State) => state.restaurant).id
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={`/${selectedRestaurant}/home`}>Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to={`/${selectedRestaurant}/menu`}>Menu<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to={`/${selectedRestaurant}/order`}>Order<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar