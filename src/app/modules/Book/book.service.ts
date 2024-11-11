import { Book } from "@prisma/client";
import prisma from "../../../helpers/prisma";

const createBookInToDB = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};
const getAllBooksFromBD = async () => {
  const result = await prisma.book.findMany();
  return result;
};
const getSingleBookFromBD = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });
  return result;
};
const updateSingleBookInToDB = async (
  bookId: string,
  payload: Partial<Book>
) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });
  return result;
};
const deleteSingleBookInToDB = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });
  return result;
};

export const bookService = {
  createBookInToDB,
  getAllBooksFromBD,
  getSingleBookFromBD,
  updateSingleBookInToDB,
  deleteSingleBookInToDB,
};
