import { Router } from "express";
import { bookRoutes } from "../modules/Book/book.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: bookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
