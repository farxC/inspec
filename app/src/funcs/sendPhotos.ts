import { api } from "../services/api"
import { ImagesReportField } from "../types/reportData"
export const sendPhotos = async (data: ImagesReportField) => {
    const req = await api.post("/api/photos", data)
    return req
 }