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

/*
    Author: Rafael Ortiz Nunes
    Here we define the base path and the router that's going to be called
    Using all the Report Routes endpoint.
*/
router.use('/api', osRoutes)

export {router as routes}