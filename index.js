import dotenv from "dotenv";
import express from "express";
import userRouter from "./api/users/user.router.js";
import bodyParser from "body-parser";

//require("dotenv").config();
dotenv.config();

//const express = require("express");
const app = express();

app.use(bodyParser.json());

//const userRouter = require("./api/users/user.router.js");

app.use("/api/users", userRouter);

// app.listen(process.env.APP_PORT, () => {
//   console.log("Server is running");
// });
app.listen(5000, () => {
  console.log("Server is running");
});
