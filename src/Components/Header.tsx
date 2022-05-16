import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { Form, FormControl, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'



const Header: React.FC = () => {
  const restaurant = useSelector((state: State) => state.restaurant)
  const dispatch = useDispatch()
  const [searchBar, setSearchBar] = useState<string>('')
  const navigate = useNavigate()

  function handleClick(){
    let path = '/'
    navigate(path)
  } 

  function handleChange(e:any) {
    setSearchBar(e.target.value)
  }
  
  function handleSubmit(e:any){
    e.preventDefault()
    console.log(searchBar)
  }

  return(
    <div style={{display:'flex'}} >
      <h1 style={{display:'inline-block', cursor:'pointer'}} onClick={handleClick} className='good-eats-header'>Good Eats</h1>
      <Form onSubmit={handleSubmit} style={{ display:'inline-block', height:'2.5em',margin:'auto', alignSelf:'end', marginBottom:'.8%'}}className="d-flex">
          <FormControl
            type="search"
            placeholder="Restaurants, Cuisine, Foods, etc..."
            className="me-2"
            aria-label="Search"
            style={{width: '35rem'}}
            onChange={handleChange}
          />
          <Button type='submit' variant="outline-secondary" ><FaSearch/></Button>
      </Form>
      <Button href='/login' style={{height:'2.5em', alignSelf:'center'}}>Login/Signup</Button>
    </div>
  )
  
}

export default Header