import axios from "axios";

export const api = axios.create({
    baseURL: "https://notesmovies-api.onrender.com"
});

