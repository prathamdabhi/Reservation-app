import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRout from './routes/auth.js'
import hotelRout from './routes/hotel.js'
import userRout from './routes/users.js'
import roomRout from './routes/room.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

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
app.use(cors())
// end points
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth",authRout);
app.use("/api/users",userRout);
app.use("/api/hotel",hotelRout);
app.use("/api/room",roomRout);

// app.use((err,req,res,next)=>{
//   return res.status(500).json("hello error are occured")
// })


app.listen(port, () => {
    connect()
    console.log(`connected to backend port ${port}`)
  })