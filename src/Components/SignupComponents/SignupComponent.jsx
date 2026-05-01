import React, { useState } from 'react';
import '../SignupComponents/SignupComponents.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SocialButtons from '../SocialButtons/SocialButtons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { toast } from 'react-toastify';

function SignupComponent() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Only allow numbers in pincode
    if (name === "pincode" && !/^\d*$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.terms) {
      toast.error("You must accept Terms and Conditions");
      return;
    }

    console.log("Form Submitted:", formData);
    toast.success("Signup Successful!");
  };

  return (
    <div className="cover">
      <div className="wrapper">
        <h1 className='big-text'>Sign Up</h1>
        <p className='sm-text'>Please fill in the details below to create an account.</p>

        <form onSubmit={handleSubmit}>

          <FloatingLabel label="Full Name" className="mb-2">
            <Form.Control 
              type="text"
              placeholder="John Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Email address" className="mb-2">
            <Form.Control 
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Phone Number" className="mb-2">
            <Form.Control 
              type="tel"
              placeholder="1234567890"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Location" className="mb-2">
            <Form.Control 
              type="text"
              placeholder="City, State"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Pincode (6 digits)" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Enter pincode"
              maxLength={6}
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-2">
            <Form.Control 
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Confirm Password" className="mb-2">
            <Form.Control 
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <Form.Check
            type="checkbox"
            label="I agree to the Terms and Conditions"
            className="mb-3"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />

          {/* Make sure ButtonComponent uses type="submit" */}
          <ButtonComponent 
            text="Sign Up" 
            variant="signup"
            disabled={!formData.terms}
          />

        </form>

        <SocialButtons />

        <div className="dont" style={{ textAlign: 'center' }}>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default SignupComponent;