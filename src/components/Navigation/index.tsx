//공통 layoout Navi
'use client'
import ThemeButton from '@/components/Navigation/ThemeButton'
import Menu from './Menu'
import { useSession, signIn, signOut } from 'next-auth/react'

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
    <nav className="w-full h-60 flex border-solid border-main-border-color border-b items-center px-40 dark:bg-black">
      <span className="text-xl font-bold text-main-font-color whitespace-nowrap dark:text-white">
        코인왕
      </span>
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
