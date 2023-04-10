'use client'

import { IMenu } from '@/components/TradingForm'

interface IProps {
  activeMenu: IMenu
  handleActiveMenu: (menu: IMenu) => void
  menu: IMenu[]
}
export default function TabBar({ activeMenu, handleActiveMenu, menu }: IProps) {
  return (
    <header className="h-45">
      <ul className="flex h-full">
        {menu.map((menuItem: IMenu) => (
          <li
            key={menuItem.key}
            className="flex items-center font-bold justify-center relative cursor-pointer flex-1 max-w-120 border-b border-main-border-color"
            onClick={() => handleActiveMenu(menuItem)}
            style={{
              color: menuItem === activeMenu ? menuItem.activeColor : undefined,
            }}
          >
            {menuItem.value}
            {menuItem === activeMenu && (
              <div
                className="h-3 w-full absolute bottom-0 left-0"
                style={{ backgroundColor: menuItem.activeColor }}
              />
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
