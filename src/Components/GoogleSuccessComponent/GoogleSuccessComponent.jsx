import {React, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function GoogleSuccessComponent() {
    const navigate = useNavigate();

    useEffect(() => {
      const getAccessToken = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/v1/refresh-token",
            {},
            {
              withCredentials: true,
            },
          );

          const { accessToken, role } = response.data;

          localStorage.setItem("accessToken", accessToken);

          localStorage.setItem("role", role);

          navigate("/dashboard");
        } catch (error) {
          console.error("Google session error:", error);

          navigate("/login");
        }
      };

      getAccessToken();
    }, [navigate]);
  return (
    <div>
        Signing you in with Google...
    </div>
  )
}

export default GoogleSuccessComponent