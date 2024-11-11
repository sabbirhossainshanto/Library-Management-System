import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { memberValidation } from "./member.validation";
import { memberController } from "./member.controller";

const router = Router();

router.post(
  "/",
  validateRequest(memberValidation.createMemberValidationSchema),
  memberController.createMember
);
router.get("/", memberController.getAllMember);
router.get("/:memberId", memberController.getSingleMember);
router.put(
  "/:memberId",
  validateRequest(memberValidation.updateMemberValidationSchema),
  memberController.updateSingleMember
);
router.delete("/:memberId", memberController.deleteSingleMember);

export const memberRoutes = router;
