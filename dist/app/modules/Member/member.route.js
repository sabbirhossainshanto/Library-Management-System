"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const member_validation_1 = require("./member.validation");
const member_controller_1 = require("./member.controller");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(member_validation_1.memberValidation.createMemberValidationSchema), member_controller_1.memberController.createMember);
router.get("/", member_controller_1.memberController.getAllMember);
router.get("/:memberId", member_controller_1.memberController.getSingleMember);
router.put("/:memberId", (0, validateRequest_1.default)(member_validation_1.memberValidation.updateMemberValidationSchema), member_controller_1.memberController.updateSingleMember);
router.delete("/:memberId", member_controller_1.memberController.deleteSingleMember);
exports.memberRoutes = router;
