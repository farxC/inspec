import cors from 'cors'
import express from 'express';
import { routes } from './routes';


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
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Routes
app.use(index)

export {app}