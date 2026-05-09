import React, { useState } from 'react'
import '../ForgetpasswordComponents/Forgetpassword.css'
import '../../Styles/global.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { forgotPassword } from '../../Api/Authapi'
import { useMutation } from '@tanstack/react-query'

function ForgetPassword() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        identifier: ""
    });

    // 🔁 Handle input
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // ✅ TanStack Mutation
    const { mutate, isPending } = useMutation({

        mutationFn: forgotPassword,

        onSuccess: (data) => {

            const value = formData.identifier.trim();

            const isEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

            const isPhone =
                /^[0-9]{10}$/.test(value);

            toast.success(data.message);

            navigate("/otp", {
                state: {
                    type: "forgot-password",
                    email: isEmail ? value : "",
                    phone: isPhone ? value : ""
                }
            });
        },

        onError: (err) => {

            toast.error(
                err?.response?.data?.message ||
                "Something went wrong"
            );
        }
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        const value = formData.identifier.trim();

        const isEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        const isPhone =
            /^[0-9]{10}$/.test(value);

        if (!isEmail && !isPhone) {

            return toast.error(
                "Enter valid email or phone number"
            );
        }

        mutate({
            email: isEmail ? value : "",
            phone: isPhone ? value : ""
        });
    };

    return (
        <div className='cover'>

            <div className='wrapper'>

                <h1 className='big-text'>
                    Forget Password
                </h1>

                <p className='sm-text'>
                    Please enter your email address or phone number to reset your password.
                </p>

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
                            value={formData.identifier}
                            onChange={handleChange}
                        />

                    </FloatingLabel>

                    <ButtonComponent
                        text={
                            isPending
                                ? "Processing..."
                                : "Reset Password"
                        }
                        variant="reset"
                        type="submit"
                        disabled={isPending}
                    />

                </form>

                <Link
                    className="custom-link"
                    to="/login"
                >
                    Back to Login
                </Link>

            </div>

        </div>
    )
}

export default ForgetPassword;