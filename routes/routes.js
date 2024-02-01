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

    router.get("/getclothing", (req, res) => {
    model.find({}).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
    // console.log(data);
    // const {data}=model.find({})
    // console.log(data);
    });

router.get("/getaccessories", (req, res) => {
  const data = model1.find({});
  console.log(data);
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
});

router.post("/filter", (req, res) => {
  const { data } = req.body;
});

export default router;
