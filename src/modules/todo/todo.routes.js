import exppress from "express";
import authenticate from "../../middleware/authentication.js";
import { todoController } from "./todo.controller.js";
import validateRequest from "../../middleware/validateRequest.js";
import { todoValidationSchema } from "./todo.validation.js";

const router = exppress.Router();
router.get("/all", authenticate, todoController.getAllTodo);
router.get("/:id", authenticate, todoController.getTodo);
router.post(
  "/",
  validateRequest(todoValidationSchema),
  authenticate,
  todoController.createTodo,
);
router.put(
  "/:id",
  validateRequest(todoValidationSchema),
  authenticate,
  todoController.updateTodo,
);
router.delete("/:id", authenticate, todoController.deleteTodo);
export const todoRoutes = router;
