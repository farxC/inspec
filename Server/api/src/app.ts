import cors from 'cors'
import express from 'express';
import { routes } from './routes';
import path from 'node:path';


// Create a new instance of express.
const app = express();

// ==> API ROUTES:
const index = routes

//Middleware Section

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse requests of content-type - application/json
app.use(express.json());

app.use(cors());

//Routes
app.use(index)

//Serve images from the dir
app.use('/images', express.static(path.join(process.cwd(), 'images')))


export {app}