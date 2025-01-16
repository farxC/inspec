/*
 * This file has the commitment store the photo in the Server Hard Disk and then
 * sent to the Database the O.S number and the photo path URL.
 * Author: Rafael Ortiz Nunes
 * Created in: 02/12/2024
 */


import { Request, Response } from "express"
import { ImagesReportField, Report } from "../@types/reportData";
import * as fs from 'node:fs/promises';
import { connection } from "../database/database"
import { QueryError } from "mysql2"
import { PoolConnection } from "mysql2/typings/mysql/lib/PoolConnection"
import { getByOsParams } from "../@types/params";

export const storeImages = async (images: Report["images_report"], os: Report["os"]) => {

    if (!images.optionalImages) {
        const savedPaths: ImagesReportField = {...images}

        let filePath = ''
        try {
            for (const [key, data] of Object.entries(images)) {

                //Removing data URI prefix 
                const base64Data = data.replace(/^data:image\/\w+;base64,/, "")

                //Decode the base64 str
                const buffer = Buffer.from(base64Data, 'base64')

                //Images save path
                filePath = `images/${os}_${key}.jpeg`

                await fs.writeFile(filePath, buffer)

                savedPaths[key] = filePath
            }

        } catch (error) {
            console.error("Empty object")
        };
        return savedPaths
    };
};


export const createReport = async (req: Request<{}, {}, Report>, res: Response): Promise<void> => {
    const { images_report: images, date, os, images_subtitles: subtitles } = req.body
    const paths = await storeImages(images, os)

    if (!images || !date || !os) {
        res.status(400).json({
            message: "Missing required fields",
        });
        return;
    }

    const query = `INSERT INTO ServiceOrder (id, reportDate, imagePathIdentifier, imagePathOverview, imagePathFailureEvidence)
    VALUES (?, ?, ?, ?, ?)`;

    try {
        if (paths !== undefined) {
            connection.query(
                query,
                [os, date, paths["identifier"], paths["overview"], paths["failureEvidence"]],
                (err, res) => {
                    if (err) console.error(err)
                    console.log(res)
                }
            );
        }
        res.status(201).json({
            message: "OS sent",
            os: { os },
            date: { date },

        })

    } catch (error) {
        console.log(error)
    }
}


export const getReports = (req: Request, res: Response) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
        conn.query("SELECT * FROM ServiceOrder as so;", (err, result) => {
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
                    data: result
                });
            }
        });
    });
}


export const getReportByOs = (req: Request<getByOsParams>, res: Response) => {
    if (!req.params.os || isNaN(Number(req.params.os)) || Number(req.params.os) < 0) {
        res.status(400).send({
            message: "Número da Ordem de Serviço Inválido",
            result: null,
        })
    }

    connection.getConnection((err: QueryError, conn: PoolConnection) => {
        if (err) {
            res.status(500).send({
                message: "Failed to connect to the database.",
                result: null,
                error: err
            })
        }

        conn.query("SELECT * FROM ServiceOrder as so WHERE so.id = ?;", [req.params.os], (err, result) => {
            conn.release();
            if (err) {
                res.status(500).send({
                    message: "Internal server error. Please contact the responsible.",
                    result: null,
                    error: err
                })
            } else {
                res.status(200).send({
                    message: "Query has been successfully",
                    data: result
                })
            }
        })
    })
} 
