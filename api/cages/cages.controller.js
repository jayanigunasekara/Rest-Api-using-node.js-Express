import queries from "./cages.service.js";

const controlCages = {
  /* Get no of chickens in a cage by cage id */
  getNoOfChickensInCageByCageId: (req, res) => {
    queries.getNoOfChickenInCageByCageId(req.params.Cage_id, (err, results) => {
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
};

export default controlCages;
