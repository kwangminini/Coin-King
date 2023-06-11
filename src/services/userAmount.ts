import { PrismaClient, UserAmount } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 최초 회원가입 시 유저 금액 생성
 * @param userId 유저 Id
 * @returns
 */
export async function createUserAmount(userId: number) {
  const newUserAmount = await prisma.userAmount.create({
    data: {
      userId,
    },
  })

  return newUserAmount
}

/**
 * 유저의 금액 가져오는 함수
 * @param userId 유저 id
 * @returns {UserAmount} 유저의 금액 정보
 */
export async function fetchUserAmount(userId: number) {
  const userAmount = await prisma.userAmount.findFirst({
    where: {
      userId,
    },
  })

  return userAmount
}
