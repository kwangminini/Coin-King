//공통 layoout Navi
import Image from 'next/image'
import Menu from './Menu'
export default function Navigation() {
  return (
    <nav className="w-full h-[60px] flex border-solid border-main-border-color border-b items-center px-10">
      <span className="text-xl font-bold text-main-font-color whitespace-nowrap">
        코인왕
      </span>
      <Menu />
      <Image src={'/sun.svg'} alt={'sun'} width={24} height={24} priority />
    </nav>
  )
}
