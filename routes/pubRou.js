const router=require('express').Router();
const {register, getDetails}=require('../controllers/pubCon');

//Register
router.post('/register',register);

//Login
router.get('/getdetails/:userID',getDetails);

module.exports=router;