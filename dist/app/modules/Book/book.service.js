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
exports.bookService = void 0;
const prisma_1 = __importDefault(require("../../../helpers/prisma"));
const createBookInToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data: payload,
    });
    return result;
});
const getAllBooksFromBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany();
    return result;
});
const getSingleBookFromBD = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    return result;
});
const updateSingleBookInToDB = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_1.default.book.update({
        where: {
            bookId,
        },
        data: payload,
    });
    return result;
});
const deleteSingleBookInToDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.borrow.deleteMany({
            where: {
                bookId,
            },
        });
        const deletedBook = yield tx.book.delete({
            where: {
                bookId,
            },
        });
        return deletedBook;
    }));
    return result;
});
exports.bookService = {
    createBookInToDB,
    getAllBooksFromBD,
    getSingleBookFromBD,
    updateSingleBookInToDB,
    deleteSingleBookInToDB,
};
