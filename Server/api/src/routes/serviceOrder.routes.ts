import Router from "express"
import { getReports, createReport, getReportByOs} from "../controllers/report.controller";


/**
 * This file has the responsibility of data route API related to the class "OS"
   Author: Rafael Ortiz Nunes
   Created in: 02/12/2024
*/

const router = Router();


// Responsible route for sent the Service Order (OS): (POST method): localhost:3100/api/os
router.post('/os', createReport)

// Responsible route for get all OS: (GET method): localhost:3100/api/os/all
router.get('/os/all', getReports)

//Reponsible route for get OS by ID: (GET method): localhost:3100/api/os/:os
router.get('/os/:os', getReportByOs)

export const serviceOrderRoutes = router