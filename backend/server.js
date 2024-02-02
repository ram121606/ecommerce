import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import {router} from './routes/authRoutes.js'

import dotenv from 'dotenv'
dotenv.config()
const db = process.env.URI
const port=process.env.PORT

const app=express()
app.use(bodyParser.json())
app.use(express.json())
app.use('/auth',router)

mongoose.connect(db)
app.listen(port,()=>{
    console.log(`connected on ${port}`);
})
