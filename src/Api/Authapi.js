import api from "../Api/Axios";
import { Auth_ENDPOINTS } from "../Api/Endpoints";

export const signUp = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.SIGNUP, data);
    return res.data;
  } catch (error) {
    console.error("Signup API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const login = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.LOGIN, data);
    return res.data;
  } catch (error) {
    console.error("Login API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  };
};

export const forgotPassword = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.FORGOT_PASSWORD, data);
    return res.data;
  } catch (error) {
    console.error("Forgot Password API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const resetPassword = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.RESET_PASSWORD, data);
    return res.data;
  } catch (error) {
    console.error("Reset Password API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const resendOtp = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.RESEND_OTP, data);
    return res.data;
  } catch (error) {
    console.error("Resend OTP API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const verifySignupOTP = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.SIGNUP_OTP, data);
    return res.data;
  } catch (error) {
    console.error("Verify Signup OTP API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const verifyLoginOTP = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.LOGIN_OTP, data);
    return res.data;
  } catch (error) {
    console.error("Verify Login OTP API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const verifyOtp = async (data) => {
  try {
    const res = await api.post(Auth_ENDPOINTS.VERIFY_OTP, data);
    return res.data;
  } catch (error) {
    console.error("Verify OTP API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const res = await api.post(Auth_ENDPOINTS.REFRESH_TOKEN);
    return res.data;
  } catch (error) {
    console.error("Refresh Token API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const logout = async () => {
  try {
    const res = await api.post(Auth_ENDPOINTS.LOGOUT);
    return res.data;
  } catch (error) {
    console.error("Logout API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};

export const logoutAll = async () => {
  try {
    const res = await api.post(Auth_ENDPOINTS.LOGOUT_ALL);
    return res.data;
  } catch (error) {
    console.error("Logout All API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    throw error;
  }
};