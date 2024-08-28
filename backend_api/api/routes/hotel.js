import express from 'express'
import Hotel from '../models/Hotel.js'
import Room from '../models/Room.js'
import { verifyAdmin } from '../utils/VerifyToken.js'

const router = express.Router()
// create
router.post("/",verifyAdmin,async(req,res)=>{

    const newHotel = new Hotel(req.body)
    
 try {
    const saveHotel = await newHotel.save()
    res.status(200).json(saveHotel);
    
 } catch (error) {
    res.status(500).json.apply(error)
 }
})
//update
router.put("/:id",verifyAdmin,async(req,res)=>{
try {
   const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body});
   res.status(200).json(updateHotel);
   
} catch (error) {
   res.status(500).json.apply(error)
}
})
//delete
router.delete("/:id",verifyAdmin,async(req,res)=>{
   try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel is delete successfully");
      
   } catch (error) {
      res.status(500).json.apply(error)
   }
   })

//get
router.get("/find/:id",async(req,res)=>{
   try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
      
   } catch (error) {
      res.status(500).json.apply(error)
   }
   })
//get all
   router.get("/",async(req,res)=>{
      try {
         const {limit,featured,min,max, ...others}=req.query
      const hotels = await Hotel.find({...others,cheapestprice: {$gt:min || 1,$lt:max ||9999}}).limit(limit);
      res.status(200).json(hotels);
      
   } catch (error) {
      res.status(500).json.apply(error)
   }
   })


   router.get("/countbycity",async(req,res)=>{
      const cities = req.query.cities.split(",");
      try {
      const list = await Promise.all(cities.map(city=>{
         return Hotel.countDocuments({city:city});
      }))
      res.status(200).json(list);
      
   } catch (error) {
      res.status(500).json.apply(error)
   }
   })

   router.get("/countbytype",async(req,res)=>{
      try {
         const hotelCount = await Hotel.countDocuments({type:"hotel"})
         const apartmentCount = await Hotel.countDocuments({type:"apartment"})
         const resortCount = await Hotel.countDocuments({type:"resort"})
         const villaCount = await Hotel.countDocuments({type:"villa"})
         const cabinCount = await Hotel.countDocuments({type:"cabin"})
    
      res.status(200).json([
         {type:"hotel",count:hotelCount},
         {type:"apartment",count:apartmentCount},
         {type:"resort",count:resortCount},
         {type:"villa",count:villaCount},
         {type:"cabin",count:cabinCount},
      ]);
      
   } catch (error) {
      res.status(500).json.apply(error)
   }
   })
   //Get Hotel Rooms
   router.get("/room/:id",async(req,res,next)=>{
      try {
         const hotel = await Hotel.findById(req.params.id)
         const list = await Promise.all(hotel.rooms.map(rooms=>{
             return Room.findById(rooms);
         }))
         res.status(200).json(list);
      } catch (error) {
         res.status(401).json(error)
      }
   })

export default router