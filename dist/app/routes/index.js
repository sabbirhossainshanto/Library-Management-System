"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_route_1 = require("../modules/Book/book.route");
const member_route_1 = require("../modules/Member/member.route");
const borrow_route_1 = require("../modules/Borrow/borrow.route");
const return_route_1 = require("../modules/Borrow/return.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/books",
        route: book_route_1.bookRoutes,
    },
    {
        path: "/members",
        route: member_route_1.memberRoutes,
    },
    {
        path: "/borrow",
        route: borrow_route_1.borrowRoutes,
    },
    {
        path: "/return",
        route: return_route_1.returnRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
