import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeaple:{
        type:Number,
        
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:[{type:Number, unavailableDate:{type:[Date]}}]
},
{timestamps:true})
export default mongoose.model("Room",RoomSchema);