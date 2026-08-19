import React from 'react'
import '../SocialButtons/SocialButtons.css'
import GoogleIcon from '../../assets/google-symbol.png'
import FacebookIcon from  '../../assets/facebook.png'
import GitIcon from'../../assets/github.png'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function SocialButtons() {

    const GoogleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/google`, {
                    accessToken: response.access_token,
                });
                console.log(res.data);
                // Handle successful login, e.g., store user data, redirect, etc.

                const { accessToken, role, user } = res.data;
                // Store the access token in local storage or state management
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('role', role);
                localStorage.setItem('user', JSON.stringify(user));
                // Redirect to the dashboard or any other page
                window.location.href = '/dashboard';

            } catch (error) {
                console.error('Google login error:', error);
                // Handle error, e.g., show notification to the user
            }
        },
        onError: (error) => {
            console.error('Google login error:', error);
            // Handle error, e.g., show notification to the user
        }
    });

  return (
    <div className="social-buttons">
        <button className="btn btn-social" onClick={() => GoogleLogin()}>
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