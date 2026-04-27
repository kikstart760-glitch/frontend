import React from 'react'
import '../SignupComponents/SignupComponents.css'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import SocialButtons from '../SocialButtons/SocialButtons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


function SignupComponent() {
  return (
    <div className="cover">
      <div className='wrapper'>
        <h1>Sign Up</h1>
        <p>Please fill in the details below to create an account.</p>
        <form>
          <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-2">
            <Form.Control type="name" placeholder="John Doe" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-2">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-2">
            <Form.Control type="tel" placeholder="123-456-7890" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Location" className="mb-2">
            <Form.Control type="text" placeholder="City, State" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Passcode" className="mb-2">
            <Form.Control type="text" placeholder="Enter passcode" maxLength={6} pattern="[0-9]*" inputMode="numeric" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Password" className="mb-2">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Confirm Password" className="mb-2">
            <Form.Control type="password" placeholder="Confirm Password" />
          </FloatingLabel>
          <Form.Check type="checkbox" aria-label="radio 1" label="I agree to the Terms and Conditions" className="mb-2" />
          <ButtonComponent text="Sign Up" variant="signup" />
        </form>
        <SocialButtons />
        <div className="dont" style={{ textAlign: 'center', paddingTop: '20px' }}>
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignupComponent
