import React from 'react'
import '../LoginComponents/LoginComponents.css'
import '../../Styles/global.css'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import SocialButtons from '../SocialButtons/SocialButtons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

function LoginComponent() {
  return (
      <div className='cover'>
          <div className='wrapper'>
              <h1>Login</h1>
              <p>Please enter your credentials to log in.</p>
              <form>
                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                      <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                      <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <ButtonComponent text="Log In" variant="login" />
              </form>
              <SocialButtons />
              <div className="under-text" style={{ textAlign: 'center', paddingTop: '20px' }}>
                  <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              </div>
          </div>
      </div>
  )
}

export default LoginComponent
