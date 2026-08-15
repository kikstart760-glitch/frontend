import React from 'react'
import '../SocialButtons/SocialButtons.css'
import GoogleIcon from '../../assets/google-symbol.png'
import FacebookIcon from  '../../assets/facebook.png'
import GitIcon from'../../assets/github.png'

function SocialButtons() {

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3000/api/v1/google";
    }

  return (
    <div className="social-buttons">
        <button className="btn btn-social" onclick={handleGoogleLogin}>
            <img src={GoogleIcon} alt="Google" style={{ width: '20px'}} />
        </button>
        <button className="btn btn-social">
            <img src={FacebookIcon} alt="Facebook" style={{ width: '20px' }} />
        </button>
        <button className="btn btn-social">
            <img src={GitIcon} alt="GitHub" style={{ width: '20px' }} />
        </button>
    </div>
  )
}

export default SocialButtons