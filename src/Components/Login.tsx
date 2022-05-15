import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap'


  type Form = {
    value: string
  }

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleChange(e:any){
    let form = e.target
    
    if (form.id === 'loginEmail'){
      setEmail(form.value)
    } else if (form.id === 'loginPassword'){
      setPassword(form.value)
    }
  }

  function handleSubmit(event:any){
    event.preventDefault()
    console.log(email, password)
  }

  return (
    <div>
      <Form style={{
        width: '50rem',
        margin: 'auto',
        paddingTop: '5%'
        
      }}
      onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="loginEmail" placeholder="Enter email"  onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId='loginPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="loginPassword" placeholder="Password"  onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div className='centered-list'>
            <Form.Check type="checkbox" label="Remember this device" className='inline'/>
            <a href='/signup' className='inline'>Create Account</a>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login