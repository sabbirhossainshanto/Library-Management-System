import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { memberService } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await memberService.createMemberInToDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member is created successfully!",
    data: result,
  });
});
const getAllMember = catchAsync(async (req, res) => {
  const result = await memberService.getAllMembersFromBD();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member are retrieved successfully!",
    data: result,
  });
});
const getSingleMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.getSingleMemberFromBD(memberId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member is retrieved successfully!",
    data: result,
  });
});
const updateSingleMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.updateSingleMemberInToDB(
    memberId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member is updated successfully!",
    data: result,
  });
});
const deleteSingleMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.deleteSingleMemberInToDB(memberId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member is deleted successfully!",
    data: result,
  });
});

export const bookController = {
  createMember,
  getAllMember,
  getSingleMember,
  updateSingleMember,
  deleteSingleMember,
};
