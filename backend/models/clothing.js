import mongoose from mongoose

const data = new mongoose.schema({
    name: String, 
    brand: String,
    size: String,
    rating: Number,
    dod: Date,
    stock: Boolean,
    price: Number
}) 

const model = mongoose.model('clothing',data)
export default model