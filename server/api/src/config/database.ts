import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();


const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
})


// connection.connect((error) => {
//     if (error) throw Error
//     console.log("Successfully connected to the database.")
// })

export {connection}