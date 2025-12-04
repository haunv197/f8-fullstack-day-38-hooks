import axios from "axios";
import { API_URL } from "../constants/url";

// Tạo 1 axios instance dùng chung (axiosClient)
const axiosClient = axios.create({
  baseURL: API_URL, // Đây là địa chỉ máy chủ
  timeout: 10000, // Nếu đợi quá 10 giây mà không trả lời → báo lỗi
  headers: {
    "Content-Type": "application/json",
  },
});

// // Thêm token vào mỗi request trước khi gửi
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // lấy token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // gắn token vào header
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý kết quả trả về
axiosClient.interceptors.response.use(
  (response) => response.data, // tự lấy luôn data, không cần .data nữa
  (error) => {
    console.error("API ERROR:", error.response?.data?.message || error);
    return Promise.reject(error);
  }
);

export default axiosClient;
