import api from "./Axios";
import { Auth_ENDPOINTS } from "./Endpoints";
import { toast } from "react-toastify";

export const signUp = (data) => {
  return api.post(AUTH_ENDPOINTS.SIGN_UP, data);
};

export const login = (data) => {
  return api.post(AUTH_ENDPOINTS.LOGIN, data);
};

export const forgotPassword = (data) => {
  return api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);
};

export const resetPassword = (data) => {
  return api.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);
};

export const resendOtp = (data) => {
  return api.post(AUTH_ENDPOINTS.RESEND_OTP, data);
};

export const verifySignupOTP = (data) => {
  return api.post(AUTH_ENDPOINTS.SIGNUP_OTP, data);
};

export const verifyLoginOTP = (data) => {
  return api.post(AUTH_ENDPOINTS.LOGIN_OTP, data);
};

export const verifyOtp = (data) => {
  return api.post(AUTH_ENDPOINTS.VERIFY_OTP, data);
};

export const refreshToken = () => {
  return api.post(AUTH_ENDPOINTS.REFRESH_TOKEN);
};

export const logout = () => {
  return api.post(AUTH_ENDPOINTS.LOGOUT);
};

export const logoutAll = () => {
  return api.post(AUTH_ENDPOINTS.LOGOUT_ALL);
};