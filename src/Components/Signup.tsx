import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";
import { useNavigate } from "react-router-dom";


const Signup: React.FC = () => {

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { addUser } = bindActionCreators( actionCreators, dispatch )
  const navigate = useNavigate()

  function handleChange(e:any){
    if (e.target.id === 'email') {
      setEmail(e.target.value)
    } else if (e.target.id === 'first-name') {
      setFirstName(e.target.value)
    } else if (e.target.id === 'last-name') {
      setLastName(e.target.value)
    } else if (e.target.id === 'password') {
      setPassword(e.target.value)
    } else if (e.target.id === 'confirm-password') {
      setConfirmPassword(e.target.value)
    } else if (e.target.id === 'admin') {
      setAdmin(!admin)
    }
  }

  function handleSubmit(e:any) {
    e.preventDefault()
    if (password === confirmPassword){
      fetch('http://localhost:4000/users',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          name: `${firstName} ${lastName}`,
          password: password,
          admin: admin
        })
      })
      .then(response => response.json())
      .then(data => {addUser(data)})
      navigate('/')
    }
  }


  return (
    <div>
      <Form onChange={handleChange} onSubmit={handleSubmit} style={{ width: '50rem', margin: 'auto'}}>
        <Form.Group style={{paddingTop: '5%'}} className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" id='email' placeholder="Enter email" />
        </Form.Group>
        <div id='signupName'>
          <Form.Group className='mb-3' style={{width:'25rem',display:'inline-block', paddingRight:'2.5%'}}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' id='first-name'placeholder="First Name"/>
          </Form.Group>

          <Form.Group className='mb-3' style={{width:'25rem', display:'inline-block', paddingLeft:'2.5%'}}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' id='last-name' placeholder="Last Name"/>
          </Form.Group>
        </div>
        
        <div>
          <Form.Group className="mb-3"  style={{width:'25rem',paddingRight:'2.5%', display:'inline-block'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id='password' placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3"  style={{width:'25rem',paddingLeft:'2.5%', display: 'inline-block'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id='confirm-password' placeholder="Confirm Password" />
          </Form.Group>
        </div>
        <div className="centered-list" style={{paddingTop:'1%'}}>
          <Button variant="primary" type="submit">
              Create Account
          </Button>
          <div className="form-check">
            <input onClick={handleChange}className='form-check-input'type='checkbox' id='admin'/>
            <label className="form-check-label" htmlFor='ownerId'>
              Restaurant Owner
            </label>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Signup