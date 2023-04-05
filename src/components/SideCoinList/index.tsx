import CoinList from '@/components/SideCoinList/CoinList'

export default function SideCoinList() {
  return (
    <section className="w-full max-w-[400px] border-main-border-color border-r">
      <header className="px-[25px] h-[30px] flex items-center border-b border-main-border-color bg-[#F9FAFC]">
        <p className={getListHeaderStyle()}>코인명</p>
        <p
          className={`${getListHeaderStyle()} max-w-[106px] text-right px-[19px]`}
        >
          현재가
        </p>
        <p className={`${getListHeaderStyle()} max-w-[59px] text-right`}>
          전일대비
        </p>
      </header>
      <CoinList />
    </section>
  )
}

function getListHeaderStyle(): string {
  return 'w-full text-xs text-sub-font-color'
}
