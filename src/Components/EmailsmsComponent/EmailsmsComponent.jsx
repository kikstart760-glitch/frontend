import React from "react";
import "../EmailsmsComponent/EmailsmsComponent.css";

function EmailsmsComponent() {

  const handleOpenEmail = () => {
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div className='cover'>
      <div className='wrapper'>
          {/* SUCCESS ANIMATION */}
        <div className="animation-box">
          <iframe
            src="https://lottie.host/embed/2bf1aed5-42fa-4277-8545-2e51a0839bf7/yzqIkeHoby.lottie"
            title="success-animation"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* TEXT */}
        <h2 className="email-title">Success</h2>
        <p className="email-subtitle">
          Please check your email for further instructions
        </p>

        {/* BUTTON */}
        <button className="open-btn" onClick={handleOpenEmail}>
          Open my email
        </button>
      </div>

    </div>
  );
}

export default EmailsmsComponent;