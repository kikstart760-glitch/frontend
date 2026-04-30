import React, { useState } from 'react'
import '../ForgetpasswordComponents/Forgetpassword.css'
import '../../Styles/global.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Link } from 'react-router-dom'

function ForgetPassword() {
    const [identifier, setIdentifier] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = identifier.trim();

        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone = /^[0-9]{10}$/.test(value);

            if (!isEmail && !isPhone) {
            alert("Enter valid email or phone number");
        return;
    }

        console.log("Valid Input:", value);

    // 👉 Call your API here
    // send OTP / reset link
    };

  return (
    <div className='cover'>
        <div className='wrapper'>
            <h1>Forget Password</h1>
            <p>Please enter your email address or phone number to reset your password.</p>

            <form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email or Phone Number"
                    className="mb-3"
                >
                <Form.Control
                type="text"
                placeholder="Email or Phone Number"
                name="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                />
                </FloatingLabel>

                <ButtonComponent text="Reset Password" variant="reset" onClick={handleSubmit} />
            </form>

            <Link to="/login">Back to Login</Link>
        </div>
    </div>
  )
}

export default ForgetPassword;