import axios from "axios";

export const client = axios.create({
    baseURL: "https://pokemon-backend.onrender.com/api"
});

