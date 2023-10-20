import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const mongoDBURL = process.env.MONGO_URI;

//Middleware for parsing request body
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Middleware for handling CORS policy
app.use(cors()); // Allow all origins with default of cors(*)

app.get("/", (request, response) => {
  return response.status(200).send("ICDS Server");
});

mongoose
  .connect(mongoDBURL)
  .then((val) => {
    console.log("App connected to Database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
