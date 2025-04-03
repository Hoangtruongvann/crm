import axios from "axios";

// Public Axios instance (no authentication)
const axiosPublic = axios.create({
  baseURL: process.env.APP_API_ENDPOINT || "http://localhost:3000/api/v1",
});

const axiosPrivate = axios.create({
  baseURL: process.env.APP_API_ENDPOINT || "http://localhost:3000/api/v1",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // Important for sending cookies (if using JWT sessions)
});

// Add interceptor for private requests (auto-attach tokens)
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Adjust based on your auth strategy
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export { axiosPublic, axiosPrivate };
