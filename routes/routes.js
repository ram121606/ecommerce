import express from "express";
import model from "../models/clothing.js";
import model1 from "../models/accessories.js";

// mongoose.connect("mongodb+srv://sugisubbu123:navaneet@cluster0.uphzqod.mongodb.net/?retryWrites=true&w=majority");
const routerA = express.Router();

routerA.post("/insertcloth", async (req, res) => {
  const { name, brand, size, rating, dod, stock, price, img } = req.body;
  // console.log(req.body);
  const response = await model.create({
    name,
    brand,
    size,
    rating,
    dod,
    stock,
    price,
    img,
  });
  // console.log(response);
  res.send("success");
});

routerA.post("/insertacc", async (req, res) => {
  const { name, brand, size, rating, dod, stock, price, img } = req.body;
  // console.log(req.body);
  const response = await model1.create({
    name,
    brand,
    size,
    rating,
    dod,
    stock,
    price,
    img,
  });
  // console.log(response);
  res.send("success");
});

// routerA.get("/products", (req,res)=>{
//     const keyword = req.body.
// })

routerA.get("/clothing", (req, res) => {
  model.find({}).then((data)=>{res.send(data)}).catch((err)=>{console.log(err);})
});

routerA.get("/accessories", (req, res) => {
    model1.find({}).then((data)=>{res.send(data)}).catch((err)=>{console.log(err);})
  });

routerA.post("/register", (req, res) => {
  const { email, password } = req.body;
});

routerA.post("/login", (req, res) => {
  const { email, password } = req.body;
});

export { routerA };
