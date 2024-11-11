import { z } from "zod";

const createMemberValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is required",
      message: "name should be in string",
    }),
    email: z.string({
      required_error: "email is required",
      message: "email should be in string",
    }),
    phone: z.string({
      required_error: "phone is required",
      message: "phone should be in string",
    }),
    membershipDate: z.string({
      required_error: "membershipDate is required",
      message: "membershipDate should be in DateTime",
    }),
  }),
});
const updateMemberValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
        message: "name should be in string",
      })
      .optional(),
    email: z
      .string({
        required_error: "email is required",
        message: "email should be in string",
      })
      .optional(),
    phone: z
      .string({
        required_error: "phone is required",
        message: "phone should be in string",
      })
      .optional(),
    membershipDate: z
      .string({
        required_error: "membershipDate is required",
        message: "membershipDate should be in DateTime",
      })
      .optional(),
  }),
});

export const memberValidation = {
  createMemberValidationSchema,
  updateMemberValidationSchema,
};
