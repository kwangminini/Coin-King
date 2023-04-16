import Signin from '@/components/SignIn'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { getProviders } from 'next-auth/react'
import { redirect } from 'next/navigation'
export default async function SignPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  const providers = (await getProviders()) || {}
  return (
    <section className="flex justify-center h-full">
      <Signin providers={providers} />
    </section>
  )
}
