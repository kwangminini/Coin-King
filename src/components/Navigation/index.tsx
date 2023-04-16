//공통 layoout Navi
'use client'
import ThemeButton from '@/components/Navigation/ThemeButton'
import Menu from './Menu'
import { useSession, signIn, signOut } from 'next-auth/react'
import Logo from '@/components/icons/Logo'
import Link from 'next/link'

export default function Navigation() {
  const { data: session } = useSession()

  const handleLogin = () => {
    if (session) {
      signOut()
    } else {
      signIn()
    }
  }
  return (
    <nav className="w-full h-60 flex border-solid border-main-border-color border-b items-center px-40 dark:border-white">
      <Link href={'/'} className="min-w-76">
        <Logo />
      </Link>
      <Menu />
      <button
        className="border border-main-border-color rounded-sm w-85 h-34 text-sm mr-24 dark:text-white"
        onClick={handleLogin}
      >
        {session ? '로그아웃' : '로그인'}
      </button>
      <ThemeButton />
    </nav>
  )
}
