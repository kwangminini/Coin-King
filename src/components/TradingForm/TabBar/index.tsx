'use client'

import { IMenu } from '@/components/TradingForm'

interface IProp {
  activeMenu: IMenu
  handleActiveMenu: (menu: IMenu) => void
  menu: IMenu[]
}
export default function TabBar({ activeMenu, handleActiveMenu, menu }: IProp) {
  return (
    <header className="h-45">
      <ul className="flex h-full">
        {menu.map((_menu: IMenu) => (
          <li
            key={_menu.key}
            className="flex items-center font-bold justify-center relative cursor-pointer flex-1 max-w-120 border-b border-main-border-color"
            onClick={() => handleActiveMenu(_menu)}
            style={{
              color: _menu === activeMenu ? _menu.activeColor : undefined,
            }}
          >
            {_menu.value}
            {_menu === activeMenu && (
              <div
                className="h-3 w-full absolute bottom-0 left-0"
                style={{ backgroundColor: _menu.activeColor }}
              />
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
