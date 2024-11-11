import { Router } from "express";
import { borrowController } from "./borrow.controller";
import validateRequest from "../../utils/validateRequest";
import { borrowValidation } from "./borrow.validation";

const router = Router();

router.post(
  "/",
  validateRequest(borrowValidation.createBorrowValidationSchema),
  borrowController.borrowBook
);

export const borrowRoutes = router;
