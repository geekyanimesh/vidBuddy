import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async ()=>{
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
      console.log(`DB connected ${connectionInstance}`);
    } catch (error) {
        console.log("ERROR: ",error);
        throw error;  
    }
}

connectDB();