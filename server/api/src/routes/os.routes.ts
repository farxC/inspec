import Router from "express"
import { getAll, storePhoto } from "../controllers/report.controller";


/**
 * This file has the responsibility of data route API related to the class "OS"
   Author: Rafael Ortiz Nunes
   Created in: 02/12/2024
*/

const router = Router();

// Responsible route for sent the Service Order (OS): (POST method): localhost:3000/api/os
router.post('/os', storePhoto)


// Responsible route for get all OS: (GET method): localhost:3000/api/os/all
router.get('/os/all', getAll)

export const osRoutes = router