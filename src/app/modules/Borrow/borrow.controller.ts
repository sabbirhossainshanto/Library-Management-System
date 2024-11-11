import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { borrowService } from "./borrow.service";

const borrowBook = catchAsync(async (req, res) => {
  const result = await borrowService.borrowBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book Borrowed successfully!",
    data: result,
  });
});

export const borrowController = {
  borrowBook,
};
