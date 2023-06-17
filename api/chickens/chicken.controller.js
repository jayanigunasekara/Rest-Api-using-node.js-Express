/* const { genSaltSync, hashSync } = require("bcrypt");
const { create } = require("../users.service"); */
import { genSaltSync, hashSync, compareSync } from "bcrypt";
import queries from "./chicken.service.js";
import pkg from "jsonwebtoken";
const { sign } = pkg;
//import { sign } from "jsonwebtoken";

const controlChickens = {
  createChicken: (req, res) => {
    const body = req.body;

    queries.create(body, (err, results) => {
      if (err) {
        console.log(err);
        //return res.status(500).json({
        return res.json({
          success: 0,
          message: "Database connection error" + err,
        });
      }
      //return res.status(200).json({
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getChickenByChickenId: (req, res) => {
    const { id } = req.params;
    queries.getChickenByChickenId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Data is not found",
        });
      }

      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getChickens: (req, res) => {
    queries.getChickens((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  updateChicken: (req, res) => {
    const body = req.body;
    //const id = req.param.id;
    //const salt = genSaltSync(10);
    //body.password = hashSync(body.password, salt);
    queries.updateChicken(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update chicken",
        });
      }
      return res.json({
        success: 1,
        message: "Succefully update the records",
      });
    });
  },

  deleteChicken: (req, res) => {
    //const { id } = req.params;
    const data = req.body;
    console.log("data  --------:", data);
    queries.deleteChicken(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      /*     if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      } */
      return res.json({
        success: 1,
        message: "Deleted successfully",
      });
    });
  },
};

export default controlChickens;
