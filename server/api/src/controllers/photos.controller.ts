/*
 * This file has the commitment store the photo in the Server Hard Disk and then
 * sent to the Database the O.S number and the photo path URL.
 * Author: Rafael Ortiz Nunes
 * Created in: 02/12/2024
 */
import { Request, Response } from "express"

//TO DO..

export const storePhoto = async(req: Request, res: Response) => {

    const req_data = req.body
    
    try{
        console.log(req_data)
        res.status(201).json({
            message: "Photos sent",
            photo: {req_data}
        })
    } catch(error){
        console.log(error)
    }
}