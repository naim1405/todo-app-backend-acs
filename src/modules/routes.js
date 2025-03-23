import exppress from "express";
import { authRoutes } from "./auth/auth.router.js";

const router = exppress.Router();
const moduleRoue = [
  {
    path: "/auth",
    route: authRoutes,
  },
];

moduleRoue.map((route) => router.use(route.path, route.route));
export const routes = router;
