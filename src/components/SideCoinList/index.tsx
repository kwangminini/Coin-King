import CoinList from '@/components/SideCoinList/CoinList'

export default function SideCoinList() {
  return (
    <section className="w-full max-w-400 border-main-border-color border-r">
      <header className="px-25 h-30 flex items-center border-b border-main-border-color bg-[#F9FAFC] dark:bg-black">
        <p className={getListHeaderStyle()}>코인명</p>
        <p className={`${getListHeaderStyle()} max-w-106 text-right px-[19px]`}>
          현재가
        </p>
        <p className={`${getListHeaderStyle()} max-w-59 text-right`}>
          전일대비
        </p>
      </header>
      <CoinList />
    </section>
  )
}

function getListHeaderStyle(): string {
  return 'w-full text-xs text-sub-font-color dark:text-white'
}
