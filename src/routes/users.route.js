import { Router } from "express";
import { formatMiddleware } from "../middlewares/users.middlewares.js";
import {
    controller, 
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/usercontroller", formatMiddleware, controller)

// API CRUD
router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

