/*
 * This file has the outcome store the photo in the Server Hard Disk and then
 * sent to the Database the O.S number and the photo path URL.
 * Author: Rafael Ortiz Nunes
 * Created in: 02/12/2024
 */

import { Response } from "express";
import { OS } from "../items/photos.interface";

//TO DO..

export const storePhoto = async(req, res) => {
    try{
        console.log(req)
        res.status(201).send({
            success: 'true',
            message: "Photos sent",
            body:{
                container: {req}
            }
        })
    } catch(error){
        console.log(error)
    }
}