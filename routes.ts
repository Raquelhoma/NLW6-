import {Router} from "express";
import { CreateUserController } from "./src/controllers/CreatUserController";
import { CreateTagController } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import{AuthenticateUserController} from "./src/controllers/AuthenticateUserController"

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();


router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users",createUserController.handle);
router.post("/login", authenticateUserController.handle)


export {router};