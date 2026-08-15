import axios from "axios";
import { refreshToken } from "../Api/Authapi";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/v1",
});

// REQUEST - Attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
  (error) => {
    return Promise.reject(error);
  }
});

// RESPONSE
api.interceptors.response.use(
  (response) => response,

  async (error) => {

    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh-token")
    ) {

      originalRequest._retry = true;

      try {

        const res = await refreshToken();

        const newAccessToken = res.data.accessToken;

        localStorage.setItem(
          "accessToken",
          newAccessToken
        );

        originalRequest.headers={ ...originalRequest.headers,
          Authorization :`Bearer ${newAccessToken}`
        };

        return api(originalRequest);

      } catch (err) {

        localStorage.removeItem("accessToken");

        localStorage.removeItem("role");

        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;