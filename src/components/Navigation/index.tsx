//공통 layoout Navi
import ThemeButton from '@/components/Navigation/ThemeButton'
import Menu from './Menu'
export default function Navigation() {
  return (
    <nav className="w-full h-60 flex border-solid border-main-border-color border-b items-center px-40 dark:bg-black">
      <span className="text-xl font-bold text-main-font-color whitespace-nowrap dark:text-white">
        코인왕
      </span>
      <Menu />
      <ThemeButton />
    </nav>
  )
}
