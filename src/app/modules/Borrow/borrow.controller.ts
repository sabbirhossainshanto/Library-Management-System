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
const getAllBorrowBook = catchAsync(async (req, res) => {
  const result = await borrowService.getAllBorrowBook();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Borrow book retrieved successfully!",
    data: result,
  });
});
const returnBook = catchAsync(async (req, res) => {
  const { borrowId } = req.body;
  const result = await borrowService.returnBook(borrowId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is returned successfully!",
    data: result,
  });
});
const getAllOverdueBorrowList = catchAsync(async (req, res) => {
  const result = await borrowService.getAllOverdueBorrowList();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result.message,
    data: result.overdueData,
  });
});

export const borrowController = {
  borrowBook,
  returnBook,
  getAllOverdueBorrowList,
  getAllBorrowBook,
};
