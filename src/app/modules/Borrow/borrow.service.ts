import { Borrow } from "@prisma/client";
import prisma from "../../../helpers/prisma";

const borrowBook = async (payload: Borrow) => {
  const result = await prisma.borrow.create({
    data: payload,
  });
  return result;
};

export const borrowService = {
  borrowBook,
};
