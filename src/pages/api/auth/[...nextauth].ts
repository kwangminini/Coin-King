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
      const existFlag = await checkExist(user.email)
      if (!existFlag) {
        await signUp(user.name || '', user.email)
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
