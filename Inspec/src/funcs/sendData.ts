import { api } from "../services/api"
import {report_data } from "../types/report_data"
export const sendData = async (data: report_data) => {
    const req = await api.post(
        "/api/os",
        data
    )
    return req
 }