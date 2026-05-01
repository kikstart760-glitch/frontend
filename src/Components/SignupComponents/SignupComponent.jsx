import React from 'react'
import '../SignupComponents/SignupComponents.css'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import SocialButtons from '../SocialButtons/SocialButtons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

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

        <form>
          <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-2">
            <Form.Control 
              type="name" 
              placeholder="John Doe" 
              name='Name' 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-2">
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              name='Email' 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-2">
            <Form.Control 
              type="tel" 
              placeholder="123-456-7890" 
              name='Phone' 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Location" className="mb-2">
            <Form.Control 
              type="text" 
              placeholder="City, State" 
              name='Location' 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Passcode" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Enter passcode"
              maxLength={6}
              pattern="[0-9]*"
              inputMode="numeric"
              name='Passcode'
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Password" className="mb-2">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name='Password' 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Confirm Password" className="mb-2">
            <Form.Control 
              type="password" 
              placeholder="Confirm Password" 
              name='ConfirmPassword'
            />
          </FloatingLabel>

          <Form.Check
            type="checkbox"
            aria-label="radio 1"
            label="I agree to the Terms and Conditions"
            className="mb-2"
            name='Terms'
          />

          <ButtonComponent text="Sign Up" variant="signup" />
        </form>


        <SocialButtons />

        <div className="dont" style={{ textAlign: 'center', paddingTop: '20px' }}>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent