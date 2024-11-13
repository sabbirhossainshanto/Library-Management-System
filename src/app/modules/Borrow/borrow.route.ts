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
router.get("/", borrowController.getAllBorrowBook);
router.get("/overdue", borrowController.getAllOverdueBorrowList);

export const borrowRoutes = router;
