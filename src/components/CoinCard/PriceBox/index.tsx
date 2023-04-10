'use client'

import useGetCoinState from '@/hooks/useGetCoinState'
import { getTextColor } from '@/util/getTextColor'
import Skeleton from 'react-loading-skeleton'

interface IProps {
  coinId: string
}

export default function PriceBox({ coinId }: IProps) {
  const { coinState } = useGetCoinState(coinId)

  return (
    <div className="ml-auto flex flex-col items-end">
      <p className={`text-base font-semibold ${getTextColor(coinState)}`}>
        {coinState.tp != null ? (
          coinState.tp?.toLocaleString('ko-KR')
        ) : (
          <Skeleton width={100} height={20} count={1} />
        )}
      </p>
      <p className={`font-semibold text-sm ${getTextColor(coinState)}`}>
        {coinState.scr != null ? (
          `${coinState.scr}%`
        ) : (
          <Skeleton width={50} height={20} count={1} />
        )}
      </p>
    </div>
  )
}
