import axios from "axios";

export const api = axios.create({
    baseURL: "https://projetopucmoviefinder.azurewebsites.net/v1/public"
})
