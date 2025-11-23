import express from 'express'
import dotenv from 'dotenv'
// import { connect } from 'mongoose'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
dotenv.config()

let port =process.env.PORT || 6000

let app=express()

// app.get("/",(req,res)=>{
//     res.send("hello from server")
// })
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))




app.use("/api/auth",authRoutes)


app.listen(port,()=>{
    console.log("Hello from Server")
    connectDb();
})