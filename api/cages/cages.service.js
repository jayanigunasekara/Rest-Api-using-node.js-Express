import pool from "../../config/database.js";

const queries = {
  getNoOfChickenInCageByCageId: (Cage_Id, callBack) => {
    pool.query(
      `select distinct chicken.id, count(*) AS Count from chicken WHERE Cage_Id = ? GROUP BY chicken.Cage_Id`,
      [Cage_Id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }

        return callBack(null, [{ Count: results[0].Count }]);
      }
    );
  },
};

export default queries;
