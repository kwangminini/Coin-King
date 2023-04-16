'use client'

import List from '@/components/common/List'
import { coinList, ICoin } from '@/constants/coinList'
import { useRouter } from 'next/navigation'
import DataCell from '@/components/SideCoinList/CoinList/DataCell'

export default function CoinList() {
  const router = useRouter()

  return (
    <List>
      {coinList &&
        coinList.map(({ name, unit, id }: ICoin) => {
          return (
            <List.Row
              style="h-50 border-b border-main-border-color px-25 cursor-pointer"
              key={name}
              onClick={() => router.push(`/investing?coin=${id}`)}
            >
              <List.Cell>
                <div className="flex flex-col">
                  <p className="font-semibold text-13 text-main-font-color dark:text-white">
                    {name}
                  </p>
                  <p className="text-11 text-gray-400">{unit}</p>
                </div>
              </List.Cell>
              <DataCell coinId={id} />
            </List.Row>
          )
        })}
    </List>
  )
}
