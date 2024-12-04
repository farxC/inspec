import Router from "express-promise-router"
import { storePhoto } from "../controllers/photos.controller";


/**
 * This file has the responsibility of photos route API related to the class "Photos"
   Author: Rafael Ortiz Nunes
   Created in: 02/12/2024
*/


const router = Router();

// Responsible route for sent the "Photos": (POST method): localhost:3000/api/photos
router.post('/photos', storePhoto)

export const photosRoutes = router