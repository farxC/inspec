import axios from "axios";
import {API_URL} from "@env"

if (!API_URL) {
    throw new Error("A variável API_URL não está definida no arquivo .env.");
}


export const api = axios.create({
    baseURL: API_URL
})
