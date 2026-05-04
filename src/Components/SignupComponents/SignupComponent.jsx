import React, { useState } from 'react';
import '../SignupComponents/SignupComponents.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SocialButtons from '../SocialButtons/SocialButtons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { toast } from 'react-toastify';
import target from '../../assets/target.png';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../Api/Authapi';
import { useNavigate } from 'react-router-dom';
import { FaEye,FaEyeSlash } from 'react-icons/fa';

function SignupComponent() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "pincode" && !/^\d*$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // ✅ FULL LOCATION FETCH
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          const address = data.address;

          const village = address.village || address.hamlet || "";
          const suburb = address.suburb || "";
          const city = address.city || address.town || "";
          const district = address.county || "";
          const state = address.state || "";
          const pincode = address.postcode || "";
          const country = address.country || "";

          const fullLocation = [
            village,
            suburb,
            city,
            district,
            state,
            pincode,
            country
          ]
            .filter(Boolean)
            .join(", ");

          setFormData(prev => ({
            ...prev,
            location: fullLocation,
            pincode: pincode
          }));

          toast.success("Full location fetched!");
        } catch (err) {
          toast.error("Failed to fetch location");
        }
      },
      () => {
        toast.error("Location permission denied");
      }
    );
  };
  
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Signup Successful!");
      navigate("/otp");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Signup Failed!");
    }
  });

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.terms) {
      toast.error("You must accept Terms and Conditions");
      return;
    }

    console.log("Form Submitted:", formData);
    mutate(
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        pincode: formData.pincode,
        password: formData.password,
      }
    );
      
  };


  return (
    <div className="cover">
      <div className="wrapper">
        <h1 className='big-text'>Sign Up</h1>
        <p className='sm-text'>
          Please fill in the details below to create an account.
        </p>

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
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          {/* LOCATION FIELD WITH IMAGE ICON */}
          <div style={{ position: 'relative' }}>
            <FloatingLabel label="Location" className="mb-2">
              <Form.Control 
                type="text"
                placeholder="City, State"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                style={{ paddingRight: '40px' }}
              />
            </FloatingLabel>

            <img
              src={target}
              alt="location"
              onClick={getCurrentLocation}
              title="Use current location"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                width: '20px',
                height: '20px'
              }}
            />
          </div>

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
                zIndex: 10,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
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
            label="I agree to the Terms of Service and Privacy Policy"
            className="mb-3"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />

          <ButtonComponent 
            text={isPending ? "Signing up..." : "Sign Up"}
            variant="signup"
            disabled={!formData.terms}
            loading={isPending}
          />

        </form>

        <SocialButtons />

        <div className="dont" style={{ textAlign: 'center' }}>
          <p>
            Already have an account? <Link className='custom-link' to="/login">Log in</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default SignupComponent;