import dotenv from "dotenv";
import express from "express";
//import userRouter from "./api/users/user.router.js";
import chickenRouter from "./api/chickens/chicken.router.js";
import cageRouter from "./api/cages/cages.router.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/webservice/chicken", chickenRouter);
app.use("/webservice/chicken", cageRouter);

// app.listen(process.env.APP_PORT, () => {
//   console.log("Server is running");
// });
app.listen(5000, () => {
  console.log("Server is running");
});
