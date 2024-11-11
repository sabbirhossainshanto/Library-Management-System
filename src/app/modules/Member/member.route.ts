import { Router } from "express";
import { bookController } from "./book.controller";
import validateRequest from "../../utils/validateRequest";
import { bookValidation } from "./book.validation";

const router = Router();

router.post(
  "/",
  validateRequest(bookValidation.createBookValidationSchema),
  bookController.createBook
);
router.get("/", bookController.getAllBook);
router.get("/:bookId", bookController.getSingleBook);
router.put(
  "/:bookId",
  validateRequest(bookValidation.updateBookValidationSchema),
  bookController.updateSingleBook
);
router.delete("/:bookId", bookController.deleteSingleBook);

export const bookRoutes = router;
