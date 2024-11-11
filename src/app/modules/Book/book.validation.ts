import { z } from "zod";

const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is required",
      message: "title should be in string",
    }),
    genre: z.string({
      required_error: "genre is required",
      message: "genre should be in string",
    }),
    publishedYear: z.number({
      required_error: "publishedYear is required",
      message: "publishedYear should be in number",
    }),
    totalCopies: z.number({
      required_error: "totalCopies is required",
      message: "totalCopies should be in number",
    }),
    availableCopies: z.number({
      required_error: "availableCopies is required",
      message: "availableCopies should be in number",
    }),
  }),
});
const updateBookValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "title is required",
        message: "title should be in string",
      })
      .optional(),
    genre: z
      .string({
        required_error: "genre is required",
        message: "genre should be in string",
      })
      .optional(),
    publishedYear: z
      .number({
        required_error: "publishedYear is required",
        message: "publishedYear should be in number",
      })
      .optional(),
    totalCopies: z
      .number({
        required_error: "totalCopies is required",
        message: "totalCopies should be in number",
      })
      .optional(),
    availableCopies: z
      .number({
        required_error: "availableCopies is required",
        message: "availableCopies should be in number",
      })
      .optional(),
  }),
});

export const bookValidation = {
  createBookValidationSchema,
  updateBookValidationSchema,
};
