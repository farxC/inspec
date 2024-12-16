import { Router } from "express";
import { osRoutes } from "./os.routes";

const router = Router();
router.get("/api", (req,res) =>{
    res.status(200).send({
        success: 'true',
        message: 'Welcome to the application!',
        available_endpoints: ["/api/os", "/api/os/all"],
        version: '1.0.0',
      });
})

//Using Photos Routes endpoint
router.use('/api', osRoutes)

export {router}