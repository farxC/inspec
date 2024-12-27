import { api } from "../services/api"
import {report_data } from "../types/report_data"
export const sendData = async (data: report_data) => {
    try{
        const req = await api.post(
            "/api/os",
            data
        )
        return "Registro enviado com sucesso!"
    } catch(error){
        throw Error("Servidor inacessível, contate os administradores.")
    }
   
 }