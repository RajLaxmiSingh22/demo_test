import { Router } from "express";
import { addUserMiddleware } from "../middleware/addUser.middleware.js";
import { welcomeUser, homePage, createUser, getUsers, addUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/", homePage);
router.post("/create-user", createUser);

router.get("/welcome/:username", addUserMiddleware, welcomeUser);

router.get("/users", getUsers);
router.post("/users", addUser);

export default router;
