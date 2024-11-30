// require(dotenv).config({ path: "./env" }); //if i want use this symtext but this syntext give me of poblemp consenctence that's whay i won't use this symtext, i use import symtext


import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then((app) => {
    app.listen(process.env.P0RT || 8000, () => {
      console.log(`Server is rening Port:  ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONATION Error !!!!", error);
  });








// Red below this Line
// This is First approse

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("Error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is Listning on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error
//   }
// })();
