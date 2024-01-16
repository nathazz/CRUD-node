import mysql from 'mysql2';
import dotenv from "dotenv"
dotenv.config()

//dotenv: protege informações do database

//conexao ao mysql
const conexao = mysql.createConnection({

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    
})

conexao.connect()


export default conexao