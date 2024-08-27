import express from 'express'
import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//Register
const router = express.Router();
router.post("/register",async (req,res)=>{
   try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash
    });
    await newUser.save()
    res.status(200).json(newUser);
   } catch (error) {
    res.status(500).json(error)
   }
})

//Login

router.post("/login",async (req,res)=>{
   try {
    const user = await User.findOne({username:req.body.username})
    if(!user){
        res.send("user not found ");
    }
    const comparePass = await bcrypt.compareSync(req.body.password, user.password); // true
    if(!comparePass){
        res.send("user name and password is not correct");
    }
    const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)

    const {password,isAdmin, ...otherDetails} =user._doc;
    res.cookie("token",token,{
        httpOnly:true
    }).status(200).json({ ...otherDetails });


   } catch (error) {
    res.status(500).json(error)
   }
})


export default router