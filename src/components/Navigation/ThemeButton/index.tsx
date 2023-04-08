'use client'
import Image from 'next/image'

export default function ThemeButton() {
  const onClick = () => {
    if (localStorage.theme !== 'dark') {
      handleTheme('dark')
    } else {
      handleTheme('light')
    }
  }
  const handleTheme = (theme: string): void => {
    const documentClassList: DOMTokenList = document.documentElement.classList
    localStorage.theme = theme
    if (theme === 'dark') documentClassList.add('dark')
    else documentClassList.remove('dark')
  }
  return (
    <button
      className="hover:bg-gray-100 min-w-32 h-32 flex items-center justify-center rounded-full"
      onClick={onClick}
    >
      <Image src={'/sun.svg'} alt={'sun'} width={24} height={24} priority />
    </button>
  )
}
