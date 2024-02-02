import express from "express";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const cloth = express.Router();

const col = mongoose.connection.collection("clothings");
cloth.get("/:name", async (req, res) => {
    const name = req.params.name;
    console.log(name);
    try {
        const docs = await col.find({ name: name }).toArray();
        res.send(docs);
    } catch (err) {
        res.send(err);
    }
});


// single product view
cloth.get("/:name/:id", async (req, res) => {
    const id = new ObjectId(req.params.id);
    try {
        const accOne = await col.find({ _id:id }).toArray();
        console.log(id)
        res.send(accOne);
    } catch (err) {
        res.send(err);
    }
});


cloth.post("/buynow", async (req, res) => {
    const token = req.cookies;
    const id = req.body.id;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err) => {
            if (err) throw err;
            else {
                col.find(id, (err, response) => {
                    res.send(response);
                });
            }
        });
    } else {
        return res.send({ message: "Unauthorized" });
    }
});

export { cloth };
