import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import connectDB from './configs/db.js';
import userRoutes from './routes/userRoutes.js'

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user",userRoutes)

const db=connectDB();


app.listen(5000,()=>{
    console.log("Server is listening...")
})