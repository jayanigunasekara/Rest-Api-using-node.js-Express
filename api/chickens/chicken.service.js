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
      `insert into chicken(name, birthday, weight, steps, isRunning, Cage_Id	) 
                values(?,?,?,?,?,?)`,
      [
        data.name,
        birthday,
        data.weight,
        data.steps,
        data.isRunning,
        data.Cage_Id,
      ],
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
      `select id, name, birthday, weight, steps, isRunning, Cage_Id from chicken `,
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
      `select  id, name, birthday, weight, steps, isRunning, Cage_Id from chicken where id = ?`,
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
      `update chicken set name=?, birthday=?, weight=?, steps=?, isRunning = ?, Cage_Id = ? where id = ?`,
      [
        data.name,
        data.birthday,
        data.weight,
        data.steps,
        data.isRunning,
        data.Cage_Id,
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

  deleteChicken: (data, callBack) => {
    pool.query(
      `delete from chicken where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateChickenSteps: (data, callBack) => {
    pool.query(
      `select steps from chicken where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        const newSteps = results[0].steps + 1;
        console.log("results------", results);
        pool.query(
          `update chicken set steps=? where id = ?`,
          [newSteps, data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );

        //return callBack(null, results.steps);
      }
    );
  },
};

export default queries;
