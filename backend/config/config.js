import mongoose from "mongoose"

export const dbConnect=async(req,res)=>{
await mongoose.connect("mongodb://localhost:27017/riti_jewellery")
console.log("db connected");
}
