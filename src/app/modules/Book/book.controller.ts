import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookService } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await bookService.createBookInToDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is created successfully!",
    data: result,
  });
});
const getAllBook = catchAsync(async (req, res) => {
  const result = await bookService.getAllBooksFromBD();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book are retrieved successfully!",
    data: result,
  });
});
const getSingleBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookService.getSingleBookFromBD(bookId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is retrieved successfully!",
    data: result,
  });
});
const updateSingleBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookService.updateSingleBookInToDB(bookId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is updated successfully!",
    data: result,
  });
});
const deleteSingleBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookService.deleteSingleBookInToDB(bookId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is deleted successfully!",
    data: result,
  });
});

export const bookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
