'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const onClick = () => {
    setTheme(theme !== 'dark' ? 'dark' : 'light')
  }

  return (
    <button
      className="hover:bg-gray-100 min-w-32 h-32 flex items-center justify-center rounded-full"
      onClick={onClick}
    >
      <Image
        src={theme === 'dark' ? '/moon.svg' : '/sun.svg'}
        alt={'sun'}
        width={24}
        height={24}
        priority
      />
    </button>
  )
}
