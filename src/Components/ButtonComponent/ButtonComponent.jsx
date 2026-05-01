import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../ButtonComponent/ButtonComponent.css';

function ButtonComponent({
  text = "Click",
  type = "submit",
  onClick,
  variant = "signup",
  disabled = false,
  loading = false
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn-wrapper btn-${variant}`}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          <span style={{ marginLeft: "8px" }}>Please wait...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default ButtonComponent;