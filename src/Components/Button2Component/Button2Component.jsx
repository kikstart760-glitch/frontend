import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Button2Component/Button2Component.css';

function Button2Component({ text, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className="custom-btn2" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button2Component;