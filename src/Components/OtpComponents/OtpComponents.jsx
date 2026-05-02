import React, { useRef, useState } from "react";
import "./Otp.css";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function OtpComponents() {
    const length = 6;
    const inputs = useRef([]);
    const [otp, setOtp] = useState(Array(length).fill(""));

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move forward
        if (value && index < length - 1) {
        inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Move back on empty backspace
        if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pasteData = e.clipboardData
        .getData("text")
        .trim()
        .slice(0, length);

        if (!/^\d+$/.test(pasteData)) return;

        const newOtp = pasteData.split("");

        // fill remaining if less than length
        while (newOtp.length < length) newOtp.push("");

        setOtp(newOtp);

        // focus next empty or last
        const nextIndex = newOtp.findIndex((v) => v === "");
        const focusIndex = nextIndex === -1 ? length - 1 : nextIndex;

        inputs.current[focusIndex]?.focus();
    };

    const handleSubmit = () => {
        const finalOtp = otp.join("");

        if (otp.some((digit) => digit === "")) {
        alert("Please enter complete OTP");
        return;
        }

        console.log("OTP Entered:", finalOtp);

        // 👉 Add your API call here
        alert("OTP Verified Successfully!");
    };

    return (
        <div className="cover">
            <div className="wrapper">
                <h1 className='big-text'>OTP Verification</h1>
                <p className='sm-text'>Please enter the 6-digit code sent to your email.</p>

                <div className="otp-container" onPaste={handlePaste}>
                {Array.from({ length }).map((_, index) => (
                    <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="otp-input"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                    />
                ))}
                </div>
 
                <p className="resend-otp">
                    Didn't receive the code? <Link to="/resend-otp">Resend OTP</Link>
                </p>

                <ButtonComponent
                text="Verify OTP"
                variant="otp"
                onClick={handleSubmit}
                />

            </div>
        </div>
    );
}

export default OtpComponents;