import express from "express";
import model from "../models/clothing.js";
import model1 from "../models/accessories.js";

const router = express.Router();

router.post("/insert",async (req,res)=>{
    const {name,brand,size,rating,dod,stock,price,img} = req.body;
    // console.log(req.body);
    const response= await model.create({name, brand,size,rating,dod,stock,price,img})
    // console.log(response);
    res.send("success")
})
router.post('/register',(req,res)=>{
    const {email, password} = req.body

})

router.post('/login',(req,res)=>{
    const {email, password} = req.body

})

router.post('/filter',(req,res)=>{
    const {data} = req.body
    
})