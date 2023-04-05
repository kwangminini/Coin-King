import List from '@/components/List'
import Cell from '@/components/List/Cell'
import Row from '@/components/List/Row'
import { coins } from '@/constants/coins'

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
      <List>
        {coins &&
          coins.map(({ name, unit }: { name: string; unit: string }) => (
            <Row
              style="h-[50px] border-b border-main-border-color px-[25px]"
              key={name}
            >
              <Cell>
                <div className="flex flex-col">
                  <p className="font-semibold text-[13px] text-main-font-color">
                    {name}
                  </p>
                  <p className="text-[11px] text-gray-400">{unit}</p>
                </div>
              </Cell>
              <Cell
                data="37,000,000"
                style="max-w-[106px] px-[19px] justify-end text-xs text-increase-color"
              />
              <Cell
                data="+2.58%"
                style="max-w-[59px] justify-end text-xs text-increase-color"
              />
            </Row>
          ))}
      </List>
    </section>
  )
}

function getListHeaderStyle(): string {
  return 'w-full text-xs text-sub-font-color'
}
