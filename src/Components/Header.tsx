import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { Form, FormControl, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'



const Header: React.FC = () => {
  const restaurant = useSelector((state: State) => state.restaurant)
  const dispatch = useDispatch()
  // const {removeRestaurant} = bindActionCreators(actionCreators, dispatch)
  const navigate = useNavigate()

  function handleClick(){
    // removeRestaurant()
    let path = '/'
    navigate(path)
  } 

  return(
    <div style={{display:'flex'}} >
      <h1 style={{display:'inline-block', cursor:'pointer'}} onClick={handleClick} className='good-eats-header'>Good Eats</h1>
      <Form  style={{ display:'inline-block', height:'2.5em',margin:'auto', alignSelf:'end', marginBottom:'.8%'}}className="d-flex">
          <FormControl
            type="search"
            placeholder="Restaurants, Cuisine, Foods, etc..."
            className="me-2"
            aria-label="Search"
            style={{width: '35rem'}}
          />
          <Button variant="outline-secondary" ><FaSearch/></Button>
      </Form>
      <Button href='/login' style={{height:'2.5em', alignSelf:'center'}}>Login/Signup</Button>
    </div>
  )
  
}

export default Header