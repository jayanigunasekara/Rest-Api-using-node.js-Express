import controlCages from "./cages.controller.js";
import Express from "express";

const router = Express.Router();

router.get(
  "/chickenCount/:Cage_id",
  controlCages.getNoOfChickensInCageByCageId
);

export default router;
