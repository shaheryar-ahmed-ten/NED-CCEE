import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

123456
// Request interceptor to add the token to the headers
api.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem("authToken"));
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
