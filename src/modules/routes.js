import exppress from "express";
import { authRoutes } from "./auth/auth.router.js";
import { todoRoutes } from "./todo/todo.routes.js";

const router = exppress.Router();
const moduleRoue = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/todo",
    route: todoRoutes,
  },
];

moduleRoue.map((route) => router.use(route.path, route.route));
export const routes = router;
