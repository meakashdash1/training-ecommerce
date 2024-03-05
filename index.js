import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app=express();

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT,()=>{
    console.log(`App is running at PORT ${process.env.PORT}`)
})