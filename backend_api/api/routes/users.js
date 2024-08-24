import express from 'express'

const router = express.Router()

router.get("/",(req,res)=>{
    res.send("you are connected to user")
})

export default router