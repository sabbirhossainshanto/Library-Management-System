"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberValidation = void 0;
const zod_1 = require("zod");
const createMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required",
            message: "name should be in string",
        }),
        email: zod_1.z.string({
            required_error: "email is required",
            message: "email should be in string",
        }),
        phone: zod_1.z.string({
            required_error: "phone is required",
            message: "phone should be in string",
        }),
        membershipDate: zod_1.z.string({
            required_error: "membershipDate is required",
            message: "membershipDate should be in DateTime",
        }),
    }),
});
const updateMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "name is required",
            message: "name should be in string",
        })
            .optional(),
        email: zod_1.z
            .string({
            required_error: "email is required",
            message: "email should be in string",
        })
            .optional(),
        phone: zod_1.z
            .string({
            required_error: "phone is required",
            message: "phone should be in string",
        })
            .optional(),
        membershipDate: zod_1.z
            .string({
            required_error: "membershipDate is required",
            message: "membershipDate should be in DateTime",
        })
            .optional(),
    }),
});
exports.memberValidation = {
    createMemberValidationSchema,
    updateMemberValidationSchema,
};
