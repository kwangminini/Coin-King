'use client'

import { IMenu } from '@/components/TradingForm'

interface ITabBarProps {
  activeMenu: IMenu
  handleActiveMenu: (menu: IMenu) => void
  menu: IMenu[]
}
export default function TabBar({
  activeMenu,
  handleActiveMenu,
  menu,
}: ITabBarProps) {
  const handleActiveColor = (menuItem: IMenu) => {
    if (activeMenu === menuItem) {
      const { key } = menuItem
      if (key === 'buy') {
        return 'text-increase-color'
      }
      if (key === 'sell') {
        return 'text-decrease-color'
      }
    }
    return ''
  }

  const handleActiveBgColor = (key: string) => {
    if (key === 'buy') {
      return 'bg-increase-color'
    }
    if (key === 'sell') {
      return 'bg-decrease-color'
    }
    return `bg-[#333]`
  }
  return (
    <header className="h-45">
      <ul className="flex h-full">
        {menu.map((menuItem: IMenu) => (
          <li
            key={menuItem.key}
            className={`flex items-center font-bold justify-center relative cursor-pointer flex-1 max-w-120 border-b border-main-border-color dark:text-white ${handleActiveColor(
              menuItem
            )}`}
            onClick={() => handleActiveMenu(menuItem)}
          >
            {menuItem.value}
            {menuItem === activeMenu && (
              <div
                className={`h-3 w-full absolute bottom-0 left-0 ${handleActiveBgColor(
                  menuItem.key
                )}`}
              />
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
