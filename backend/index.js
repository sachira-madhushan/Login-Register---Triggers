import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import connectDB from './configs/db.js';

const app=express();
app.use(cors());


const db=connectDB();


app.listen(5000,()=>{
    console.log("Server is listening...")
})