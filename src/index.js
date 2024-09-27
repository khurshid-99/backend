
import dotenv from 'dotenv'
import connedctDB from "./db/index.js";

dotenv.config({
    path: "./env"
})



connedctDB()























/*
import express from "express"
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR data bas is not tock to app", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        throw error
        
    }
})()

*/