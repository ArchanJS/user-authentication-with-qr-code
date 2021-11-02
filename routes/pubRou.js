const router=require('express').Router();
const {register, login}=require('../controllers/pubCon');

//Register
router.post('/register',register);

//Login
router.post('/login',login);

module.exports=router;