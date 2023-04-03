interface IProp {
  activeMenu: string
}

interface IMenu {
  [key: string]: string
}
export default function Menu({ activeMenu }: IProp) {
  const menu: IMenu = {
    priceInfo: '시세 정보',
    investment: '모의투자',
  }
  return (
    <div className="flex w-full h-full justify-center">
      {Object.keys(menu).map((item) => (
        <div
          className="w-[105px] flex items-center justify-center relative"
          key={item}
        >
          {menu[item]}
          {item === activeMenu && (
            <div className="w-full h-[5px] bg-[#666] absolute bottom-0" />
          )}
        </div>
      ))}
    </div>
  )
}
