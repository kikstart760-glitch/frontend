import React, { useState } from "react";
import "../SignupComponents/SignupComponents.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import SocialButtons from "../SocialButtons/SocialButtons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../Api/Authapi";
import { toast } from "react-toastify";

function SignupComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    passcode: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Signup successful 🎉");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Signup failed");
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    if (!formData.name) return "Name required";
    if (!formData.email) return "Email required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email";
    if (!formData.phone) return "Phone required";
    if (formData.passcode.length !== 6) return "Passcode must be 6 digits";
    if (formData.password.length < 6) return "Password too short";
    if (formData.password !== formData.confirmPassword)
      return "Passwords do not match";
    if (!formData.terms) return "Accept terms first";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED");

    const error = validate();
    if (error) {
      console.log("VALIDATION ERROR:", error);
      return toast.error(error);
    }

    console.log("API CALL:", formData);
    mutation.mutate(formData);
  };

  return (
    <div className="cover">
      <div className="wrapper">
        <h1>Sign Up</h1>
        <p>Please fill in the details below to create an account.</p>
        <form onSubmit={handleSubmit}>
          <FloatingLabel label="Full Name" className="mb-2">
            <Form.Control
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Email" className="mb-2">
            <Form.Control
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Phone" className="mb-2">
            <Form.Control
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Location" className="mb-2">
            <Form.Control
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Passcode" className="mb-2">
            <Form.Control
              name="passcode"
              value={formData.passcode}
              maxLength={6}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-2">
            <Form.Control
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Confirm Password" className="mb-2">
            <Form.Control
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FloatingLabel>

          <Form.Check
            type="checkbox"
            label="I agree to Terms and Conditions"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mb-2"
          />

          <ButtonComponent
            type="submit"
            text="Sign Up"
            loading={mutation.isPending}
          />
        </form>

        <SocialButtons />

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupComponent;