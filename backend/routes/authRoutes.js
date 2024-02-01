import express  from 'express';
import cors from 'cors'
import { registerUser,loginUser,getPrfile,getAllUsers} from '../controllers/AuthController.js';

const router=express.Router();

//middleware
router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

// router.get('/',test);
router.post('/register',registerUser) 
router.post('/login',loginUser)
router.get('/profile',getPrfile)
router.get('/users',getAllUsers)

// module.exports = 
export {router} 