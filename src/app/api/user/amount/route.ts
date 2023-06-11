import { fetchUserAmount } from '@/services/userAmount'
import { fetchUser } from '@/services/user'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (session?.user?.email) {
      const user = await fetchUser(session.user.email)
      if (user) {
        const userAmount = await fetchUserAmount(user.id)

        return new Response(JSON.stringify({ amount: userAmount?.amount }), {
          status: 200,
        })
      }
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server Error', error }), {
      status: 500,
    })
  }

  return new Response('Not Login', { status: 400 })
}
