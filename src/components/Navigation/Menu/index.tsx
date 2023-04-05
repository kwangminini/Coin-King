'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IMenu {
  href: string
  title: string
  searchParam?: string
}
export default function Menu() {
  const pathName = usePathname()

  const menu: IMenu[] = [
    {
      href: '/',
      title: '시세 정보',
    },
    {
      href: '/investing',
      title: '모의투자',
      searchParam: 'coin=btc',
    },
  ]

  return (
    <div className="flex w-full h-full justify-center">
      {menu.map(({ href, title, searchParam }: IMenu) => (
        <Link
          key={href}
          href={searchParam ? `${href}?${searchParam}` : href}
          className="h-full"
        >
          <div className="w-[105px] flex items-center justify-center relative h-full">
            {title}
            {href === pathName && (
              <div className="w-full h-[5px] bg-[#666] absolute bottom-0" />
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
