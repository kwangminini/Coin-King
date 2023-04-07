//공통 layoout Navi
import Image from 'next/image'
import Menu from './Menu'
export default function Navigation() {
  return (
    <nav className="w-full h-60 flex border-solid border-main-border-color border-b items-center px-40">
      <span className="text-xl font-bold text-main-font-color whitespace-nowrap">
        코인왕
      </span>
      <Menu />
      <button className="hover:bg-gray-100">
        <Image src={'/sun.svg'} alt={'sun'} width={24} height={24} priority />
      </button>
    </nav>
  )
}
