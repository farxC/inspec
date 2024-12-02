import { Router } from "express";

const router = Router();
router.get("/api", (req,res) =>{
    res.status(200).send({
        success: 'true',
        message: 'Welcome to the application!!!',
        version: '1.0.0',
      });
})

export {router}