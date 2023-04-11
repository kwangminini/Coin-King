'use client'

import List from '@/components/common/List'
import useGetCoinState from '@/hooks/useGetCoinState'
import { coinList, ICoin } from '@/constants/coinList'
import { getSignedChangeRate } from '@/util/getSignedChangeRate'
import { getTextColor } from '@/util/getTextColor'
import { useRouter } from 'next/navigation'
import Skeleton from 'react-loading-skeleton'

export default function CoinList() {
  const router = useRouter()
  const { getCoinState } = useGetCoinState()
  return (
    <List>
      {coinList &&
        coinList.map(({ name, unit, id }: ICoin) => {
          const coinState = getCoinState(id)
          return (
            <List.Row
              style="h-50 border-b border-main-border-color px-25 cursor-pointer"
              key={name}
              onClick={() => router.push(`/investing?coin=${id}`)}
            >
              <List.Cell>
                <div className="flex flex-col">
                  <p className="font-semibold text-13 text-main-font-color">
                    {name}
                  </p>
                  <p className="text-[11px] text-gray-400">{unit}</p>
                </div>
              </List.Cell>
              <List.Cell
                style={`max-w-106 px-19 justify-end text-xs font-semibold ${getTextColor(
                  coinState
                )}`}
              >
                <span>
                  {coinState.tp != null ? (
                    coinState.tp.toLocaleString('ko-KR')
                  ) : (
                    <Skeleton count={1} width={70} height={20} />
                  )}
                </span>
              </List.Cell>
              <List.Cell
                style={`max-w-59 justify-end text-xs font-semibold ${getTextColor(
                  coinState
                )}`}
              >
                <span>
                  {coinState.scr != null ? (
                    getSignedChangeRate(coinState.scr)
                  ) : (
                    <Skeleton count={1} width={40} height={20} />
                  )}
                </span>
              </List.Cell>
            </List.Row>
          )
        })}
    </List>
  )
}
