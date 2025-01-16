import dotenv from 'dotenv'
import {app} from './src/app'

dotenv.config();

const port = process.env.PORT || 3100;


app.listen(port, () => {
    return console.log(`Server running at http://localhost:${port}`);
});