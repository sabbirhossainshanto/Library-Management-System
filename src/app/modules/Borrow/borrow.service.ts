import prisma from "../../../helpers/prisma";

const borrowBook = async (payload: { bookId: string; memberId: string }) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: payload.bookId,
    },
  });

  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: payload.memberId,
    },
  });
  const result = await prisma.borrow.create({
    data: payload,
  });
  return result;
};
const getAllBorrowBook = async () => {
  const result = await prisma.borrow.findMany();
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

const getAllOverdueBorrowList = async () => {
  const BORROW_DURATION_DAYS = 14;
  /* create millisecond of 14 days */
  const BORROW_DURATION_MS = BORROW_DURATION_DAYS * 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  const overdueDate = new Date(currentDate.getTime() - BORROW_DURATION_MS);

  const overdueBorrowRecords = await prisma.borrow.findMany({
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
    const overdueDays = Math.floor(
      (currentDate.getTime() - record.borrowDate.getTime()) /
        (1000 * 60 * 60 * 24) -
        BORROW_DURATION_DAYS
    );
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
};

export const borrowService = {
  borrowBook,
  returnBook,
  getAllOverdueBorrowList,
  getAllBorrowBook,
};
