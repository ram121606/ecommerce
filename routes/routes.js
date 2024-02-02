import express from "express";
import model from "../models/clothing.js";
import model1 from "../models/accessories.js";

// mongoose.connect("mongodb+srv://sugisubbu123:navaneet@cluster0.uphzqod.mongodb.net/?retryWrites=true&w=majority");
const routerA = express.Router();

routerA.post("/insert",async (req,res)=>{
    const {name,brand,size,rating,dod,stock,price,img} = req.body;
    // console.log(req.body);
    const response= await model.create({name, brand,size,rating,dod,stock,price,img})
    // console.log(response);
    res.send("success")
})
routerA.post('/register',(req,res)=>{
    const {email, password} = req.body

})

routerA.post('/login',(req,res)=>{
    const {email, password} = req.body

})

routerA.post('/filter',(req,res)=>{
    const {data} = req.body
})


export { routerA }; 