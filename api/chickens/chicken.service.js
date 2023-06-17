import pool from "../../config/database.js";

const queries = {
  create: (data, callBack) => {
    console.log("Birthday", data.birthday);
    const birthday = new Date(data.birthday)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    console.log("new birthday", birthday);
    pool.query(
      `insert into chicken(name, birthday, weight, steps, isRunning	) 
                values(?,?,?,?,?)`,
      [data.name, birthday, data.weight, data.steps, data.isRunning],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getChickens: (callBack) => {
    pool.query(
      `select id, name, birthday, weight, steps, isRunning from chicken `,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getChickenByChickenId: (id, callBack) => {
    pool.query(
      `select  id, name, birthday, weight, steps, isRunning from chicken where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateChicken: (data, callBack) => {
    pool.query(
      `update chicken set name=?, birthday=?, weight=?, steps=?, isRunning = ? where id = ?`,
      [
        data.name,
        data.birthday,
        data.weight,
        data.steps,
        data.isRunning,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteChicken: (body, callBack) => {
    pool.query(
      `delete from chicken where id = ?`,
      [body.id],
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
