import express from 'express'
// import mysql from 'mysql'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user",userRoutes)




app.listen(8081,()=>{
    console.log("Server is listening...")
})