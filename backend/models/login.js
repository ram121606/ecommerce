import mongoose from mongoose

const data = new mongoose.schema({
    name: String,
    email: String,
    password: String

}) 

const model = mongoose.model('users',data)
export default model