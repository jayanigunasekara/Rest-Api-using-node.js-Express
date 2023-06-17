import controlUser from "./user.controller.js";
import Express from "express";

const router = Express.Router();

router.post("/", controlUser.createUser);
router.get("/", controlUser.getUsers);
router.get("/:id", controlUser.getUserByUserId);
router.patch("/", controlUser.updateUser);
router.delete("/", controlUser.deleteUser);

// router.get("/", controlUser.createUser);

//module.exports = router;
export default router;
