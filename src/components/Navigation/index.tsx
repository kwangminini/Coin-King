//공통 layoout Navi
'use client'
import ThemeButton from '@/components/Navigation/ThemeButton'
import Menu from './Menu'
import { useSession, signIn, signOut } from 'next-auth/react'
import Logo from '@/components/icons/Logo'

export default function Navigation() {
  const { data: session } = useSession()

  const handleLogin = () => {
    if (session) {
      console.log('로그아웃')
      signOut()
    } else {
      console.log('로그인')
      signIn()
    }
  }
  return (
    <nav className="w-full h-60 flex border-solid border-main-border-color border-b items-center px-40 dark:border-white">
      <Logo />
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
