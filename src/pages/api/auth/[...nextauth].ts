import { createUserAmount } from '@/services/userAmount'
import { checkExist, signUp } from '@/services/user'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false
      }
      try {
        //계정 존재하지 체크
        const existFlag = await checkExist(user.email)
        if (!existFlag) {
          //계정이 없으면 계정 생성
          const newUser = await signUp(user.name || '', user.email)
          //계정의 기본 금액 생성
          await createUserAmount(newUser.id)
        }
      } catch (error) {
        console.log('error ## ', error)
      }

      return true
    },
    async session({ session }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // console.log('session::', session)
      return session
    },
  },
}
export default NextAuth(authOptions)
