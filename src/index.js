import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants";

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URL}/
            ${DB_NAME}`)
    } catch (error) {
        console.log("ERROR: ",error);
        throw err
    }
})() 

