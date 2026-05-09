import React, { useState } from 'react'
import '../../Styles/global.css'
import '../ResetpasswordComonent/ResetpasswordComponent.css'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { resetPassword } from '../../Api/Authapi'

function Resetpassword() {

    const navigate = useNavigate();

    const { token } = useParams();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });

    // 🔁 Handle Input
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // ✅ TanStack Mutation
    const { mutate, isPending } = useMutation({

        mutationFn: resetPassword,

        onSuccess: (data) => {
            toast.success(data.message);
            navigate("/login");
        },

        onError: (err) => {

            toast.error(
                err?.response?.data?.message ||
                "Something went wrong"
            );
        }
    });

    // ✅ Submit
    const handleSubmit = (e) => {

        e.preventDefault();

        const {
            password,
            confirmPassword
        } = formData;

        if (!password || !confirmPassword) {

            return toast.error(
                "Please fill all fields"
            );
        }

        if (password !== confirmPassword) {

            return toast.error(
                "Passwords do not match"
            );
        }

        mutate({
            token,
            password,
            confirmPassword
        });
    };

    return (
        <div className='cover'>

            <div className='wrapper'>

                <h1>Reset Password</h1>

                <p>
                    Please enter your new password.
                </p>

                <form onSubmit={handleSubmit}>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="New Password"
                        className="mb-3"
                    >

                        <Form.Control
                            type="password"
                            placeholder="New Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingConfirmPassword"
                        label="Confirm Password"
                        className="mb-3"
                    >

                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />

                    </FloatingLabel>

                    <ButtonComponent
                        text={
                            isPending
                                ? "Resetting..."
                                : "Reset Password"
                        }
                        variant="reset"
                        type="submit"
                        disabled={isPending}
                    />

                </form>

            </div>

        </div>
    )
}

export default Resetpassword;