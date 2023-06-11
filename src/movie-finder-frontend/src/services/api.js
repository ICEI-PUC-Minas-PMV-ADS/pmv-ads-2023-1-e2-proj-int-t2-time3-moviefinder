import axios from "axios";

export const api = axios.create({
    baseURL: "https://projetopucmoviefinder.azurewebsites.net/v1/public"
    // baseURL: "https://localhost:44307/v1/public"
})
