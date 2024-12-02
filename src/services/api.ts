import axios from "axios";
import dotenv from 'dotenv'
dotenv.config();

if (!process.env.API_BASE_URL) {
    throw new Error("A variável API_BASE_URL não está definida no arquivo .env.");
}


export const api = axios.create({
    baseURL: process.env.API_BASE_URL
})