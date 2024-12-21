/*
 * This file has the commitment store the photo in the Server Hard Disk and then
 * sent to the Database the O.S number and the photo path URL.
 * Author: Rafael Ortiz Nunes
 * Created in: 02/12/2024
 */
import { Request, Response } from "express"
import { ImagesReportField, Report } from "../interfaces/ReportData"
import * as fs from 'node:fs/promises';
import { connection } from "../config/database"
import { QueryError } from "mysql2"
import { PoolConnection } from "mysql2/typings/mysql/lib/PoolConnection"
import path from "node:path";


export const storeImages = async (images: Report["images_report"], os: Report["os"]) => {

    if (!images) {
        throw new Error("No images provided")
    }

    if (!images.optionalImages) {
        const savedPaths: Record<string, string> = {}

        let path = ''

        for (const [key, data] of Object.entries(images)) {
            try {
                //Removing data URI prefix 
                const base64Data = data.replace(/^data:image\/\w+;base64,/, "")

                //Decode the base64 str
                const buffer = Buffer.from(base64Data, 'base64')

                //Saving into images path
                path = `images/${os}_${key}.jpeg`

                fs.writeFile(path, buffer)
             
                savedPaths[key] = path
            } catch (error) {
                console.error("Empty object")
            };

        };
        return savedPaths
    }

}



export const storePhoto = async (req: Request<{}, {}, Report>, res: Response): Promise<void> => {
    const { images_report: images, date, os, images_subtitles: subtitles } = req.body

    if (!images || !date || !os) {
        res.status(400).json({
            message: "Missing required fields",
        });
        return;
    }

    const paths = await storeImages(images, os)

    const query = `INSERT INTO OS (id, report_date, imagePathIdentifier, imagePathOverview, imagePathFailureEvidence)
    VALUES (?, ?, ?, ?, ?)`;


    // connection.query(
    //     query,
    //     [os, date],
    // );


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


export const getAll = (req: Request, res: Response) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
        conn.query("select * from OS", (err, result) => {
            conn.release();
            if (err) {
                res.status(500).send({
                    message: "Internal server error. Please contact the responsible.",
                    result: null,
                    error: err
                })
            } else {
                res.status(200).send({
                    message: "The query has been successfully",
                    result: result
                });
            }
        });
    });
}