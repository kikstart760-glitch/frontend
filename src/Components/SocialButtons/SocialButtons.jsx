import React from 'react'
import '../../Styles/global.css'
import GoogleIcon from '../../assets/google-symbol.png'
import FacebookIcon from  '../../assets/facebook.png'
import GitIcon from'../../assets/github.png'

function SocialButtons() {
  return (
    <div className="social-buttons">
        <button className="btn btn-social">
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