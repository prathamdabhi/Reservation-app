import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express();
const port = 8800;
dotenv.config();





async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connection successfull")
  } catch (error) {
    throw error
  }
};
mongoose.connection.on("disconnected",()=>{
  console.log("mongodb is disconnected!")
})
mongoose.connection.on("connected",()=>{
  console.log("mongodb is connected!")
})

app.get("/users",(req,res)=>{
  res.send("i am user response")
})

app.listen(port, () => {
    connect()
    console.log(`connected to backend port ${port}`)
  })