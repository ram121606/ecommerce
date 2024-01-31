import express from 'express'
// import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const db = process.env.URI

const app=express()

mongoose.connect(db).then(()=>{console.log("<>S")}).catch((err)=>{console.log(err)})
app.listen(3000,()=>{
    console.log(3000);
})