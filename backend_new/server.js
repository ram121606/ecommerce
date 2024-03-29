import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import cookieParser from 'cookie-parser'
import {router} from './routes/authRoutes.js'
import { routerA } from './routes/routes.js'
import { cloth } from './routes/clothing.js'
import { acc } from './routes/accessories.js'

import dotenv from 'dotenv'
dotenv.config()
const db = process.env.MONGO_URI
// const port=process.env.PORT

const app=express()
// app.use(bodyParser.json())
app.use(express.json())
app.use('/auth',router)
app.use("/",routerA)
app.use("/cloth",cloth)
app.use("/acc",acc)

mongoose.connect(db).then(()=>{console.log("<s>");}).catch((err)=>{console.log(err);})
app.listen(3000,()=>{
    console.log(`connected on 3000`);
})