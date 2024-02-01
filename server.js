import express from 'express'
// import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from '../backend/routes/routes.js'


dotenv.config()
const db = process.env.MONGO_URI

const app=express()
app.use(express.json())

mongoose.connect(db)
    .then(()=>{console.log("<>S")})
        .catch((err)=>{console.log(err)})

app.use("/",router)

app.listen(3000,()=>{
    console.log(3000);
})