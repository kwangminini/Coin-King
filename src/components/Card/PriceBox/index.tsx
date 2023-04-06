'use client'

import { ICoinState } from '@/atoms/coinsAtom'
import useGetCoinState from '@/hooks/useGetCoinState'

interface IProp {
  coinId: string
}

export default function PriceBox({ coinId }: IProp) {
  const curCoin = useGetCoinState(coinId)

  return (
    <div className="ml-auto flex flex-col items-end">
      <p className={`text-base font-semibold ${getTextColor(curCoin)}`}>
        {curCoin?.tp?.toLocaleString('ko-KR')}
      </p>
      <p className={`font-semibold text-sm ${getTextColor(curCoin)}`}>
        {curCoin?.scr}%
      </p>
    </div>
  )
}

function getTextColor(curCoinInfo: ICoinState | undefined): string {
  if (curCoinInfo?.c === 'RISE') {
    return 'text-increase-color'
  } else if (curCoinInfo?.c === 'FALL') {
    return 'text-decrease-color'
  } else {
    return 'text-main-text-color'
  }
}
