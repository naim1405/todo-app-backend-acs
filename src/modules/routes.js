import exppress from "express";

const router = exppress.Router();
const moduleRoue = [
  {
    path: "/",
    route: "hi",
  },
];

moduleRoue.map((route) => router.use(route.path, route.route));
export const routes = router;
