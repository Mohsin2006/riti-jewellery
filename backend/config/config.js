import mongoose from "mongoose"
import 'dotenv/config';

export const dbConnect=async()=>{
await mongoose.connect("mongodb://localhost:27017/riti_jewellery")
console.log("db connected");
}
