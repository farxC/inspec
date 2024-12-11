import { Router } from "express";
import { photosRoutes } from "./photos.routes";

const router = Router();
router.get("/api", (req,res) =>{
    res.status(200).send({
        success: 'true',
        message: 'Welcome to the application!',
        available_endpoints: ["/api/photos", "/api/photos/all"],
        version: '1.0.0',
      });
})

//Using Photos Routes endpoint
router.use('/api', photosRoutes)

export {router}