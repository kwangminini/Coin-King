//공통 layoout Navi
'use client'
import ThemeButton from '@/components/Navigation/ThemeButton'
import Menu from './Menu'
import { signIn, signOut } from 'next-auth/react'
import Logo from '@/components/icons/Logo'
import Link from 'next/link'
import { Button } from '@/components/common/Button'
import { Session } from 'next-auth'

interface INavigationProps {
  session: Session | null
}

export default function Navigation({ session }: INavigationProps) {
  const handleLogin = async () => {
    if (session) {
      await signOut()
    } else {
      await signIn()
    }
  }

  return (
    <nav className="w-full h-60 flex border-solid border-main-border-color border-b items-center px-40 dark:border-white">
      <Link href={'/'} className="min-w-76">
        <Logo />
      </Link>
      <Menu />
      {session && (
        <span className="whitespace-nowrap mr-8">{session.user?.name}님</span>
      )}
      <Button onClick={handleLogin} className="h-34 mr-24 whitespace-nowrap">
        {session ? '로그아웃' : '로그인'}
      </Button>
      <ThemeButton />
    </nav>
  )
}
