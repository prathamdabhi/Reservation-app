import express from 'express'
import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utils/VerifyToken.js'


const router = express.Router()

//create
router.post("/:hotelid",async (req,res)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)
    try {
        const saveRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:saveRoom._id}})
        } catch (error) {
            res.send(error)
        }
        res.status(200).json(saveRoom);
    } catch (error) {
        res.send(error)
    }
})



//Update
router.put("/:id",verifyAdmin,async(req,res)=>{
    try {
       const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set: req.body});
       res.status(200).json(updateRoom);
       
    } catch (error) {
       res.status(500).json.apply(error)
    }
    })
//update Room
router.put("/availablety/:id",async(req,res)=>{
   try {
     await Room.updateOne({"roomNumbers._id":req.params.id},{
      $push:{"roomNumbers.$.unavailableDate":req.body.dates},
     })
      res.status(200).json("hotel room date is update successfully");
      
   } catch (error) {
      res.status(500).json.apply(error)
   }
   })


 //delete
    router.delete("/:id/:hotelid",verifyAdmin,async(req,res)=>{
       try {
        const hotelId = req.params.hotelid;
          await Room.findByIdAndDelete(req.params.id);
           try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
        } catch (error) {
            res.send("new room is not created")
        }
          res.status(200).json("Room is delete successfully");
          
       } catch (error) {
          res.status(500).json.apply(error)
       }
       })
    
//get
   //  router.get("/:id",async(req,res)=>{
   //     try {
   //        const room = await Room.findById(req.params.id);
   //        res.status(200).json(room);
          
   //     } catch (error) {
   //        res.status(500).json.apply(error)
   //     }
   //     })
//get all
    router.get("/",async(req,res)=>{
       try {
          const rooms = await Room.find();
          res.status(200).json(rooms);
          
       } catch (error) {
          res.status(500).json.apply(error)
       }
       })
//room report
      router.get('/report', async (req, res) => {
   try {
     // Fetch all rooms from the database
     const roomsall = await Room.find();
 
     // Return the room data as JSON
     res.status(200).json(roomsall);
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 });

export default router