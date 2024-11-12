"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = require("express");
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const book_validation_1 = require("./book.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(book_validation_1.bookValidation.createBookValidationSchema), book_controller_1.bookController.createBook);
router.get("/", book_controller_1.bookController.getAllBook);
router.get("/:bookId", book_controller_1.bookController.getSingleBook);
router.put("/:bookId", (0, validateRequest_1.default)(book_validation_1.bookValidation.updateBookValidationSchema), book_controller_1.bookController.updateSingleBook);
router.delete("/:bookId", book_controller_1.bookController.deleteSingleBook);
exports.bookRoutes = router;
