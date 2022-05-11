import React from "react";
import {Form, Button} from 'react-bootstrap'

const Signup: React.FC = () => {
  return (
    <div>
      <Form style={{
        width: '50rem',
        margin: 'auto'
      }}>
        <div id='signupName' style={{paddingTop: '5%'}}>
          <Form.Group className='mb-3' style={{width:'25rem',display:'inline-block', paddingRight:'2.5%'}}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder="First Name"/>
          </Form.Group>

          <Form.Group className='mb-3' style={{width:'25rem', display:'inline-block', paddingLeft:'2.5%'}}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder="Last Name"/>
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <div>
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:'25rem',paddingRight:'2.5%', display:'inline-block'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword" style={{width:'25rem',paddingLeft:'2.5%', display: 'inline-block'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        </div>
          <Button variant="primary" type="submit">
            Create Account
          </Button>
      </Form>
    </div>
  )
}

export default Signup