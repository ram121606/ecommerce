import mongoose from 'mongoose'

const data = new mongoose.Schema({
    name: String, 
    brand: String,
    size: String,
    rating: Number,
    dod: Date,
    stock: Boolean,
    price: Number,
    img: String
}) 

const model = mongoose.model('clothing',data)
export default model