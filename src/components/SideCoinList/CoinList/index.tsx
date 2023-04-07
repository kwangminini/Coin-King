'use client'

import List from '@/components/common/List'
import Cell from '@/components/common/List/Cell'
import Row from '@/components/common/List/Row'
import { coinList, ICoin } from '@/model/coin'
import { useRouter } from 'next/navigation'

export default function CoinList() {
  const router = useRouter()
  return (
    <List>
      {coinList &&
        coinList.map(({ name, unit, id }: ICoin) => (
          <Row
            style="h-50 border-b border-main-border-color px-[25px] cursor-pointer"
            key={name}
            onClick={() => router.push(`/investing?coin=${id}`)}
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
  )
}
