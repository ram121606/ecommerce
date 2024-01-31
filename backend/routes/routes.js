import express from express

const router = express.Router()

router.post('/register',(req,res)=>{
    const {email, password} = req.body

})

router.post('/login',(req,res)=>{
    const {email, password} = req.body

})

router.post('/filter',(req,res)=>{
    const {data} = req.body
    
})