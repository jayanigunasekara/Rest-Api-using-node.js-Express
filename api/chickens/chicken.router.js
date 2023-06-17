import controlChickens from "./chicken.controller.js";
import Express from "express";

const router = Express.Router();

router.post("/create", controlChickens.createChicken);
router.get("/", controlChickens.getChickens);
router.get("/:id", controlChickens.getChickenByChickenId);
router.patch("/update", controlChickens.updateChicken);
router.delete("/delete", controlChickens.deleteChicken);
router.patch("/run", controlChickens.updateChickenSteps);
//router.post("/login", controlChickens);

// router.get("/", controlUser.createUser);

//module.exports = router;
export default router;
