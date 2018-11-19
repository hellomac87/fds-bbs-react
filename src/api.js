import axios from "axios";

const api = axios.create({
    baseURL: "https://fds-bbs-react.glitch.me"
});

// axios request interceptors
api.interceptors.request.use(function (config) {
    // indicator show
    const token = localStorage.getItem("token");
    if (token) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
});

export default api;
