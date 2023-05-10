'use client'
import { DefaultButton } from '@/components/common/Button'
import Logo from '@/components/icons/Logo'
import { ClientSafeProvider } from 'next-auth/react'
import { signIn } from 'next-auth/react'
interface ISigninProps {
  providers: Record<string, ClientSafeProvider>
}

export default function Signin({ providers }: ISigninProps) {
  return (
    <article className="w-400 flex flex-col items-center">
      <Logo width={180} height={60} className="mt-150" />
      <div className="mt-150">
        {Object.values(providers).map((provider) => (
          <DefaultButton
            key={provider.id}
            onClick={() => signIn(provider.id)}
            className="h-40 w-250 text-16 font-semibold"
          >
            구글 로그인
          </DefaultButton>
        ))}
      </div>
    </article>
  )
}
