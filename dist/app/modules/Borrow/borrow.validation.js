"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowValidation = void 0;
const zod_1 = require("zod");
const createBorrowValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string({
            required_error: "bookId is required",
            message: "bookId should be in string",
        }),
        memberId: zod_1.z.string({
            required_error: "memberId is required",
            message: "memberId should be in string",
        }),
    }),
});
const returnBorrowValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string({
            required_error: "borrowId is required",
            message: "borrowId should be in string",
        }),
    }),
});
exports.borrowValidation = {
    createBorrowValidationSchema,
    returnBorrowValidationSchema,
};
