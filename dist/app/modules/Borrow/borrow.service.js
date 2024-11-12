"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowService = void 0;
const prisma_1 = __importDefault(require("../../../helpers/prisma"));
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrow.create({
        data: payload,
    });
    return result;
});
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.borrow.findUniqueOrThrow({
        where: {
            borrowId,
        },
    });
    const result = yield prisma_1.default.borrow.update({
        where: {
            borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
    return result;
});
const getAllOverdueBorrowList = () => __awaiter(void 0, void 0, void 0, function* () {
    const BORROW_DURATION_DAYS = 14;
    const BORROW_DURATION_MS = BORROW_DURATION_DAYS * 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const overdueDate = new Date(currentDate.getTime() - BORROW_DURATION_MS);
    const overdueBorrowRecords = yield prisma_1.default.borrow.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: overdueDate,
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    if (overdueBorrowRecords.length === 0) {
        return {
            message: "No overdue books",
        };
    }
    const overdueData = overdueBorrowRecords.map((record) => {
        const overdueDays = Math.floor((currentDate.getTime() - record.borrowDate.getTime()) /
            (1000 * 60 * 60 * 24) -
            BORROW_DURATION_DAYS);
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays,
        };
    });
    return {
        overdueData,
        message: "Overdue Borrow List is retrieve successfully!",
    };
});
exports.borrowService = {
    borrowBook,
    returnBook,
    getAllOverdueBorrowList,
};
