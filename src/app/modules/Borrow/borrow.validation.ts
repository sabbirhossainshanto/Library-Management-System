import { z } from "zod";

const createBorrowValidationSchema = z.object({
  body: z.object({
    bookId: z.string({
      required_error: "bookId is required",
      message: "bookId should be in string",
    }),
    memberId: z.string({
      required_error: "memberId is required",
      message: "memberId should be in string",
    }),
  }),
});

export const borrowValidation = {
  createBorrowValidationSchema,
};
