'use client'
import { ImageWidthDark } from '@/components/common/ImageWidthDark'
import { useTheme } from 'next-themes'

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
      <ImageWidthDark
        src={'/sun.svg'}
        alt={'sun'}
        darkAlt={'moon'}
        darkSrc={'/moon.svg'}
        width={24}
        height={24}
      />
    </button>
  )
}
