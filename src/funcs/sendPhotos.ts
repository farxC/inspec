import { api } from "../services/api"
export const sendPhotos = async (data: string) => {
    const req = await api.post("/api/photos", data)
    console.log(req.data)
    return req
 }