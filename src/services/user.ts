import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 최초 로그인 시 회원가입
 * @param name 이름
 * @param email 이메일
 * @returns newUser
 */
export async function signUp(name: string, email: string) {
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  })

  return newUser
}

/**
 * 이미 가입되어있는 계정인지 확인
 * @param email 이메일
 * @returns {boolean}
 */
export async function checkExist(email: string): Promise<boolean> {
  const user = await prisma.user.findFirst({
    where: {
      email,
      is_del: false,
    },
  })
  return user ? true : false
}

/**
 * 이메일로 가입되어있는 유저 반환
 * @param email 유저 이일
 * @returns
 */
export async function fetchUser(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email,
      is_del: false,
    },
  })

  return user
}
