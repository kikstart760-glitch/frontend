import React, { useState } from 'react';
import '../LoginComponents/LoginComponents.css';
import '../../Styles/global.css';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SocialButtons from '../SocialButtons/SocialButtons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../Api/Authapi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginComponent() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        identifier: "",
        password: ""
    });

    // 🔁 Handle input
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 🚀 React Query Mutation
    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            const identifier = formData.identifier.trim();
            // detect email / phone
            const isEmail = identifier.includes("@");
            const isPhone = /^\d{10}$/.test(identifier);

            const otpData = {
                type: "login",
                email: isEmail ? identifier : "",
                phone: isPhone ? identifier : ""
            };

            const updatedOtpData = {
                ...otpData,
                type: "signup" // or "login" based on your flow,
            };

            localStorage.setItem("otpData", JSON.stringify(otpData));

            if (data?.redirectToOtp) {
                toast.info(data.message);
                navigate("/otp",{
                    state: updatedOtpData
                });
            } else {
                toast.success("Login successful!");
                navigate("/otp", {
                    state: otpData
                }); // or dashboard
            }
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Login failed!");
        }
    });

    // 🧠 Detect email or phone + submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const identifier = formData.identifier.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let payload = {
        password: formData.password
        };

        // 📧 Email case
        if (emailRegex.test(identifier)) {
            payload.email = identifier;
        } 
        // 📱 Phone case
        else {
        // remove everything except digits
        const cleaned = identifier.replace(/\D/g, "");

        let phone = "";

        if (cleaned.length === 10) {
            phone = cleaned;
        } 
        else if (cleaned.length === 12 && cleaned.startsWith("91")) {
            phone = cleaned.slice(2);
        } 
        else if (cleaned.length === 11 && cleaned.startsWith("0")) {
            phone = cleaned.slice(1);
        }

        // final validation
        if (/^[6-9]\d{9}$/.test(phone)) {
            payload.phone = phone;
        } else {
                toast.error("Enter valid email or phone number");
            return;
        }
        }

        console.log("Sending Payload:", payload);
        mutate(payload);
    };

    return (
    <div className='cover'>
        <div className='wrapper'>
            <h1 className='big-text'>Login</h1>
            <p className='sm-text'>Please enter your credentials to log in.</p>
            <form onSubmit={handleSubmit}>
                {/* 🔥 Email OR Phone */}
                <FloatingLabel label="Email or Phone" className="mb-3">
                    <Form.Control 
                        type="text"
                        placeholder="Enter email or phone"
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        required
                    />
                </FloatingLabel>
                {/* 🔐 Password */}
                <FloatingLabel label="Password" className="mb-2 position-relative">
                    <Form.Control 
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ paddingRight: "45px" }}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center"
                        }}
                    >
                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </span>
                </FloatingLabel>
                {/* Forgot Password */}
                <Link className='custom-link' to="/forgot-password">Forgot Password?</Link>
                {/* Submit Button */}
                <ButtonComponent 
                    text={isPending ? "Logging in..." : "Log In"} 
                    variant="login"
                    loading={isPending}
                    disabled={isPending}
                />
            </form>
            <SocialButtons />
            <div className="under-text" style={{ textAlign: 'center', paddingTop: '20px' }}>
                <p>
                    Don't have an account? <Link className='custom-link' to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    </div>
  );
}

export default LoginComponent;