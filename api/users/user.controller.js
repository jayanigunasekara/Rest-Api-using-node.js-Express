/* const { genSaltSync, hashSync } = require("bcrypt");
const { create } = require("../users.service"); */
import { genSaltSync, hashSync } from "bcrypt";
import queries from "./user.service.js";

const controlUser = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    // console.log(req);
    // return res.status(200).json({
    //   success: 1,
    //   data: req.body,
    // });

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

  getUserByUserId: (req, res) => {
    const id = req.param.id;
    queries.getUserByUserId(id, (err, results) => {
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

  getUsers: (req, res) => {
    queries.getUsers((err, results) => {
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

  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    queries.updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Succefully update the records",
      });
    });
  },

  deleteUser: (req, res) => {
    const data = req.body;
    queries.deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "Deleted successfully",
      });
    });
  },
};

export default controlUser;
