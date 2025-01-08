import axios from "axios"
import { Report } from "../@types/reportData";

export interface APIResponse{
    data: Report[];
}


export const retrieveReports = async (): Promise<APIResponse> => {
    const response = await axios.get<APIResponse>("http://localhost:3100/api/os/all")
    return response.data
}