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
  const { removeRestaurant, removeUser } = bindActionCreators(actionCreators, dispatch)
  const user = useSelector((state:State) => state.user)

  function handleClick(e:any){
    console.log(e.target)
    if (e.target.id === 'login'){
      navigate('/login')
    } else if (e.target.id === 'logout'){
      removeUser()
      navigate('/login')
    } else if ( e.target.id === 'goodEatsLogo'){
      removeRestaurant()
      navigate('/')
    }
  } 

  function handleChange(e:any) {
    setSearchBar(e.target.value)
  }
  
  function handleSubmit(e:any){
    e.preventDefault()
    fetch('http://localhost:4000/restaurantSearch', {
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        query: searchBar
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  function displayLoginOrLogout(){
    if (user.id === 0) {
      return (<Button id="login" onClick={handleClick} style={{height:'2.5em', alignSelf:'center', marginTop:'.8%', marginRight:'1%'}}>Login/Signup</Button>)
    } else {
      return (<Button id='logout' onClick={handleClick} style={{height:'2.5em', alignSelf:'center', marginTop:'.8%', marginRight:'1%'}}>Logout</Button>)
    }
  }

  return(
    <div style={{display:'flex'}} >
      <h1 id='goodEatsLogo' style={{display:'inline-block', cursor:'pointer'}} onClick={handleClick} className='good-eats-header'>Good Eats</h1>
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
      {displayLoginOrLogout()}
    </div>
  )
  
}

export default Header