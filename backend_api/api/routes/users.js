import express from 'express'
import User from '../models/User.js'
import { verifyToken,verifyUser,verifyAdmin } from '../utils/VerifyToken.js'

const router = express.Router()

// router.get("/authtoken",verifyToken,(req,res)=>{
//     res.send("Hello user you are logging")
// })

// router.get("/checkuser/:id",verifyUser,(req,res)=>{
//     res.send("Hello user you are logging and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res)=>{
//     res.send("Hello admin you are logging and you can delete all accounts")
// })

//update
router.put("/:id",verifyUser,async(req,res)=>{
    try {
       const updateUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body});
       res.status(200).json(updateUser);
       
    } catch (error) {
       res.status(500).json.apply(error)
    }
    })
    //delete
    router.delete("/:id",verifyUser, async(req,res)=>{
       try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("Hotel is delete successfully");
          
       } catch (error) {
          res.status(500).json.apply(error)
       }
       })
    
    //get
    router.get("/:id",verifyUser,async(req,res)=>{
       try {
          const user = await User.findById(req.params.id);
          res.status(200).json(user);
          
       } catch (error) {
          res.status(500).json.apply(error)
       }
       })
    //get all
    router.get("/",verifyAdmin,async(req,res)=>{
       try {
          const users = await User.find();
          res.status(200).json(users);
          
       } catch (error) {
          res.status(500).json.apply(error)
       }
       })

export default router