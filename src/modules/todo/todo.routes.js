import exppress from "express";
import authenticate from "../../middleware/authentication.js";
import { todoController } from "./todo.controller.js";

const router = exppress.Router();
router.get("/all", authenticate, todoController.getAllTodo);
router.get("/:id", authenticate, todoController.getTodo);
router.post("/", authenticate, todoController.createTodo);
router.put("/:id", authenticate, todoController.updateTodo);
router.delete("/:id", authenticate, todoController.deleteTodo);
export const todoRoutes = router;
