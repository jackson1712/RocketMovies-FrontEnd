import axios from "axios";

export const api = axios.create({
    baseURL: "https://notesmovies-jmouradev.netlify.app/"
});

