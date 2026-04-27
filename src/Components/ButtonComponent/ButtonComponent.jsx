import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../ButtonComponent/ButtonComponent.css";

function ButtonComponent({
  text = "Click",
  type = "button",
  onClick,
  variant = "signup",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;