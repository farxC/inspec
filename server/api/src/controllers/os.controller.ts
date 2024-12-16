/*
 * This file has the commitment store the photo in the Server Hard Disk and then
 * sent to the Database the O.S number and the photo path URL.
 * Author: Rafael Ortiz Nunes
 * Created in: 02/12/2024
 */
import { Request, Response } from "express"
import { report_data } from "../@types/report_data"

import fs from 'fs'
//TO DO..

export const storePhoto = async (req: Request<{}, {}, report_data>, res: Response): Promise<void> => {

    const images = req.body.images_report
    const date = req.body.date
    const os = req.body.os
    const subtitles = req.body.images_subtitles

    if (!images.optionalImages) {

        for (const [key, data] of Object.entries(images)) {
            //Removing data URI prefix 
            const base64Data = data.replace(/^data:image\/\w+;base64,/, "")

            //Decode the base64 str
            const buffer = Buffer.from(base64Data, 'base64')

            //Saving into images path
            fs.writeFile(`images/${os}_${key}.jpeg`, buffer, (err) => {
                if (err) {
                    console.error('Error saving the image', err);
                } else {
                    console.log("Image saved successfully")
                }
            })
        }
    }
  

    try {
        res.status(201).json({
            message: "OS sent",
            os: { os },
            date: { date },

        })
    } catch (error) {
        console.log(error)
    }
}