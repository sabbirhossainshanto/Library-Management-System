"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = require("express");
const borrow_controller_1 = require("./borrow.controller");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const borrow_validation_1 = require("./borrow.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(borrow_validation_1.borrowValidation.createBorrowValidationSchema), borrow_controller_1.borrowController.borrowBook);
router.get("/overdue", borrow_controller_1.borrowController.getAllOverdueBorrowList);
exports.borrowRoutes = router;
