import { genSaltSync, hashSync, compareSync } from "bcrypt";
import queries from "./user.service.js";
import pkg from "jsonwebtoken";
const { sign } = pkg;

const controlUser = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

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
    const { id } = req.params;
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
    const id = req.param.id;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    queries.updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update user",
        });
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

  login: (req, res) => {
    const body = req.body;
    queries.getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log("Login error is:", err);
      }
      if (!results) {
        return res.jsont({
          success: 0,
          message: "Invalid email or password",
        });
      }

      console.log("result pw: ", results.password);
      console.log("req pw: ", body.password);

      const result = body.password === results.password;
      console.log("Result is : ", result);

      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          message: "Invalid user name or password",
        });
      }
    });
  },
};

export default controlUser;
