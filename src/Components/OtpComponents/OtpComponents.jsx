import React, { useRef, useState, useEffect } from "react";
import "./Otp.css";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
    verifySignupOTP,
    verifyLoginOTP,
    verifyOtp,
    resendOtp
} from "../../Api/Authapi";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function OtpComponents() {
  const length = 6;
  const RESEND_TIME = 60;

  const inputs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get state/localStorage data
  const stateData = location.state || {};
  const storedData = JSON.parse(localStorage.getItem("otpData")) || {};

  const type = stateData.type || storedData.type;
  const email = stateData.email || storedData.email;
  const phone = stateData.phone || storedData.phone;

  // ✅ OTP state
  const [otp, setOtp] = useState(Array(length).fill(""));

  // ✅ Timer state (persistent on refresh)
  const [timer, setTimer] = useState(() => {
    const savedTime = localStorage.getItem("otpTimer");

    if (savedTime) {
      const diff = Math.floor((Number(savedTime) - Date.now()) / 1000);

      return diff > 0 ? diff : 0;
    }

    return RESEND_TIME;
  });

  // ✅ Prevent direct access
  useEffect(() => {
    if (!type || (!email && !phone)) {
      navigate("/login", { replace: true });
    }
  }, [type, email, phone, navigate]);

  // ✅ Timer countdown
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // ✅ Save timer to localStorage
  useEffect(() => {
    if (timer > 0) {
      localStorage.setItem("otpTimer", Date.now() + timer * 1000);
    } else {
      localStorage.removeItem("otpTimer");
    }
  }, [timer]);

  // 🔥 Verify OTP Mutation
  const { mutate, isPending } = useMutation({
    mutationFn: async ({ otp }) => {
      if (type === "login") {
        return await verifyLoginOTP({
          email,
          phone,
          otp,
        });
      } else if (type === "signup") {
        return await verifySignupOTP({
          email,
          phone,
          otp,
        });
      } else if (type === "forgot-password") {
        return await verifyOtp({
          email,
          phone,
          otp,
        });
      }
    },

    onSuccess: (res) => {
      toast.success("OTP Verified!");

      // ✅ Save token
      const token = res?.accessToken || res?.token;

      if (token) {
        localStorage.setItem("accessToken", token);
      }

      // ✅ Save user data
      if (res?.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(res.user)
        );
      }

      // ✅ Cleanup
      localStorage.removeItem("otpData");
      localStorage.removeItem("otpTimer");

      if (type === "signup") {
        navigate("/login");
      }else if (type === "forgot-password") {
        navigate(`/reset-password/${res.resetToken}`);
      } else {
        navigate("/dashboard");
      }
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "Invalid OTP");
    },
  });

  // 🔥 Resend OTP Mutation
  const { mutate: resendMutate, isPending: resendPending } = useMutation({
    mutationFn: resendOtp,

    onSuccess: (res) => {
      toast.success(res?.message || "OTP Resent Successfully!");

      // ✅ restart timer
      setTimer(RESEND_TIME);
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "Failed to resend OTP");
    },
  });

  // 🔹 Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // allow only single digit
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // move forward
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // 🔹 Backspace focus
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // 🔹 Paste support
  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("text").trim().slice(0, length);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("");

    while (newOtp.length < length) {
      newOtp.push("");
    }

    setOtp(newOtp);

    const focusIndex =
      newOtp.findIndex((digit) => digit === "") === -1
        ? length - 1
        : newOtp.findIndex((digit) => digit === "");

    inputs.current[focusIndex]?.focus();
  };

  // 🔹 Submit OTP
  const handleSubmit = () => {
    const finalOtp = otp.join("");

    if (otp.includes("")) {
      toast.error("Enter complete OTP");
      return;
    }

    mutate({ otp: finalOtp });
  };

  // 🔹 Resend OTP
  const handleResendOtp = () => {
    if (timer > 0) return;

    resendMutate({
      email,
      phone,
      type,
    });
  };

  // ✅ Mask email/phone
  const maskedEmail = email ? email.replace(/(.{2}).+(@.+)/, "$1****$2") : "";

  const maskedPhone = phone
    ? phone.replace(/(\d{2})\d{6}(\d{2})/, "$1******$2")
    : "";

  return (
    <div className="cover">
      <div className="wrapper">
        <h1 className="big-text">OTP Verification</h1>

        <p className="sm-text">OTP sent to {maskedEmail || maskedPhone}</p>

        {/* OTP Inputs */}
        <div className="otp-container" onPaste={handlePaste}>
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputs.current[index] = el)}
              className="otp-input"
            />
          ))}
        </div>

        {/* Resend OTP */}
        <div className="resend-wrapper">
          {timer > 0 ? (
            <p className="timer-text">Resend OTP in {timer}s</p>
          ) : (
            <button
              type="button"
              className="resend-btn"
              onClick={handleResendOtp}
              disabled={resendPending}
            >
              {resendPending ? "Sending..." : "Resend OTP"}
            </button>
          )}
        </div>

        {/* Verify Button */}
        <ButtonComponent
          text={isPending ? "Verifying..." : "Verify OTP"}
          variant="otp"
          onClick={handleSubmit}
          disabled={isPending}
        />
      </div>
    </div>
  );
}

export default OtpComponents;