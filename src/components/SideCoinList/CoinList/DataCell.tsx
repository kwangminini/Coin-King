'use client'
import List from '@/components/common/List'
import useGetCoinState from '@/hooks/useGetCoinState'
import { getSignedChangeRate } from '@/utils/coinUtil/getSignedChangeRate'
import { getTextColor } from '@/utils/coinUtil/getTextColor'
import Skeleton from 'react-loading-skeleton'

export default function DataCell({ coinId }: { coinId: string }) {
  const { coinState } = useGetCoinState(coinId)
  return (
    <>
      <List.Cell
        data={coinState.tp?.toLocaleString('ko-KR')}
        style={`max-w-106 px-19 justify-end text-xs font-semibold ${getTextColor(
          coinState
        )}`}
        realTimeUpdate
        realTimeUpdateColor={getTextColor(coinState, true)}
      >
        {!coinState.tp && <Skeleton count={1} width={70} height={20} />}
      </List.Cell>
      <List.Cell
        data={
          coinState.scr != null ? getSignedChangeRate(coinState.scr) : undefined
        }
        style={`max-w-59 justify-end text-xs font-semibold ${getTextColor(
          coinState
        )}`}
      >
        {coinState.scr == null && <Skeleton count={1} width={40} height={20} />}
      </List.Cell>
    </>
  )
}
