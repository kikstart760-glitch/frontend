import React from 'react'
import '../../Styles/global.css'
import './ResetpasswordComponent.css'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

function Resetpassword() {
  return (
    <div className='cover'>
        <div className='wrapper'>
            <h1>Reset Password</h1>
            <p>Please enter your new password. </p>
            <form>
                <FloatingLabel controlId="floatingInput" label="New Password" className="mb-3">
                    <Form.Control type="password" placeholder="New Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Confirm Password" className="mb-3">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </FloatingLabel>
                <ButtonComponent text="Reset Password" variant="reset" />
            </form>
        </div>
    </div>
  )
}

export default Resetpassword