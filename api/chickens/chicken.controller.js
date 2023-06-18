import queries from "./chicken.service.js";

const controlChickens = {
  /* create chicken  */
  createChicken: (req, res) => {
    const body = req.body;

    queries.create(body, (err, results) => {
      if (err) {
        console.log(err);

        return res.json({
          success: 0,
          message: "Database connection error" + err,
        });
      }

      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  /* Get chicken by ID */
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

  /* Get chickens */
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

  /* update chicken */
  updateChicken: (req, res) => {
    const body = req.body;
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

  /* Delete chicken  */
  deleteChicken: (req, res) => {
    const body = req.body;

    queries.deleteChicken(body, (err, results) => {
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

  /* Update the chicken steps */
  updateChickenSteps: (req, res) => {
    const body = req.body;

    queries.updateChickenSteps(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update chicken steps",
        });
      }
      return res.json({
        success: 1,
        message: "Succefully update the chicken steps",
      });
    });
  },
};

export default controlChickens;
