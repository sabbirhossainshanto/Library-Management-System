import { Router } from "express";
import { bookRoutes } from "../modules/Book/book.route";
import { memberRoutes } from "../modules/Member/member.route";
import { borrowRoutes } from "../modules/Borrow/borrow.route";
import { returnRoute } from "../modules/Borrow/return.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/borrow",
    route: borrowRoutes,
  },
  {
    path: "/return",
    route: returnRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
