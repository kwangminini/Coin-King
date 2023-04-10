'use client'
import { ClientSafeProvider } from 'next-auth/react'
import { signIn } from 'next-auth/react'
interface IProp {
  providers: Record<string, ClientSafeProvider>
}

export default function Signin({ providers }: IProp) {
  return (
    <article className="w-400">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </article>
  )
}
