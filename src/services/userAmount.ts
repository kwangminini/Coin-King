import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUserAmount(userId: number) {
  const newUserAmount = await prisma.userAmount.create({
    data: {
      userId,
    },
  })

  return newUserAmount
}
