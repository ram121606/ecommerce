import mongoose from 'mongoose'

const data = new mongoose.Schema({
    name: String, 
    brand: String,
    size: Array,
    rating: Number,
    dod: Date,
    stock: Boolean,
    price: Number,
    img: String
}) 

const model1 = mongoose.model('accessories',data)
export default model1