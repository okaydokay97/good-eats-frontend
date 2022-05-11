import React from "react";
import {
  Link,
  BrowserRouter as Router
} from 'react-router-dom'


const Navbar: React.FC = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to='/'>Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to='/menu'>Menu<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to='/order'>Order<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <a href='/login'>Signup/Login</a>
      </div>
    </nav>
  )
}

export default Navbar