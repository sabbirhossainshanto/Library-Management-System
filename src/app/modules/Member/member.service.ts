import { Member } from "@prisma/client";
import prisma from "../../../helpers/prisma";

const createMemberInToDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};
const getAllMembersFromBD = async () => {
  const result = await prisma.member.findMany();
  return result;
};
const getSingleMemberFromBD = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return result;
};
const updateSingleMemberInToDB = async (
  memberId: string,
  payload: Partial<Member>
) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: payload,
  });
  return result;
};
const deleteSingleMemberInToDB = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });
  return result;
};

export const memberService = {
  createMemberInToDB,
  getAllMembersFromBD,
  getSingleMemberFromBD,
  updateSingleMemberInToDB,
  deleteSingleMemberInToDB,
};
