import cors from 'cors'
import express from 'express';
import { router } from './routes';
import { photosRoutes } from './routes/photos.routes';

const app = express();

// ==> API ROUTES:
const index = router

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(index)
export {app}