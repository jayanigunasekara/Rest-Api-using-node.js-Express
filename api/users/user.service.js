import pool from "../../config/database.js";

const queries = {
  create: (data, callBack) => {
    pool.query(
      `insert into authentication(firstName, lastName, email, password) 
                values(?,?,?,?)`,
      [data.firstName, data.lastName, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(
      `select id,firstName,lastName,email,password from authentication `,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstName,lastName,email,password from authentication where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateUser: (data, callBack) => {
    pool.query(
      `update authentication set firstName=?, lastName=?,email=?, password=? where id = ?`,
      [data.firstName, data.lastName, data.email, data.password, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteUser: (body, callBack) => {
    pool.query(
      `delete from authentication  where id = ?`,
      [body.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByEmail: (email, callBack) => {
    pool.query(
      `select * from authentication where email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};

export default queries;
