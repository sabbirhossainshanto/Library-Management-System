import { Borrow } from "@prisma/client";
import prisma from "../../../helpers/prisma";

const borrowBook = async (payload: Borrow) => {
  const result = await prisma.borrow.create({
    data: payload,
  });
  return result;
};
const returnBook = async (borrowId: string) => {
  await prisma.borrow.findUniqueOrThrow({
    where: {
      borrowId,
    },
  });

  const result = await prisma.borrow.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};

export const borrowService = {
  borrowBook,
  returnBook,
};
