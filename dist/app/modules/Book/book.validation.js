"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidation = void 0;
const zod_1 = require("zod");
const createBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "title is required",
            message: "title should be in string",
        }),
        genre: zod_1.z.string({
            required_error: "genre is required",
            message: "genre should be in string",
        }),
        publishedYear: zod_1.z.number({
            required_error: "publishedYear is required",
            message: "publishedYear should be in number",
        }),
        totalCopies: zod_1.z.number({
            required_error: "totalCopies is required",
            message: "totalCopies should be in number",
        }),
        availableCopies: zod_1.z.number({
            required_error: "availableCopies is required",
            message: "availableCopies should be in number",
        }),
    }),
});
const updateBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "title is required",
            message: "title should be in string",
        })
            .optional(),
        genre: zod_1.z
            .string({
            required_error: "genre is required",
            message: "genre should be in string",
        })
            .optional(),
        publishedYear: zod_1.z
            .number({
            required_error: "publishedYear is required",
            message: "publishedYear should be in number",
        })
            .optional(),
        totalCopies: zod_1.z
            .number({
            required_error: "totalCopies is required",
            message: "totalCopies should be in number",
        })
            .optional(),
        availableCopies: zod_1.z
            .number({
            required_error: "availableCopies is required",
            message: "availableCopies should be in number",
        })
            .optional(),
    }),
});
exports.bookValidation = {
    createBookValidationSchema,
    updateBookValidationSchema,
};
