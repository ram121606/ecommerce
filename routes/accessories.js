import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { isValidObjectId } from "mongoose";
import { ObjectId } from "mongodb";


const acc = express.Router();

const access = mongoose.connection.collection("accessories");


// view all products
acc.get("/:name", async (req, res) => {
    const name = req.params.name;
    console.log(name);
    try {
        const docs = await access.find({ name: name }).toArray();
        res.send(docs);
    } catch (err) {
        res.send(err);
    }
});


// single product view
acc.get("/:name/:id", async (req, res) => {
    const id = new ObjectId(req.params.id);
    const name = req.params.name;
    try {
        const accOne = await access.find({ _id: id }).toArray();
        // add a field id in database
        res.send(accOne);
    } catch (err) {
        res.send(err);
    }
});

acc.post("/buynow", async (req, res) => {
    const token = req.cookies;
    const id = req.body.id;
    if (token) {
        jwt.verify(token,process.env.JWT_SECRET,{},(err,) => {
            if (err) throw err;
            else{
                access.find(id, (err, response) => {
                    res.send(response);
                });
            }
        });
    }
    else{
        return res.send({ message: "Unauthorized" });
    }
});


export { acc };
