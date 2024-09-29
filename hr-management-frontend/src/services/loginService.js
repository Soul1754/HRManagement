// src/services/loginService.js

import API from "./api";

// Function to register a new user
export const register = async (userData) => {
  try {
    const response = await API.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Function to login a user
export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/auth/login", {
      email,
      password,
    });
    return response.data; // return the response data
  } catch (error) {
    console.error("Error logging in:", error.response.data); // log error for debugging
    throw error; // rethrow to be caught in component
  }
};

// Function to logout a user
export const logout = () => {
  localStorage.removeItem("token");
};

// Function to get the current user's profile
export const getProfile = async () => {
  try {
    const response = await API.get("/auth/profile");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
