'use client'

import {
  btcInfoState,
  ethInfoState,
  ICoinState,
  xrpInfoState,
} from '@/atoms/coinsAtom'
import useWebsocket from '@/hooks/useWebsocket'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

interface IProp {
  coinId: string
}

export default function PriceBox({ coinId }: IProp) {
  const { socket, isConnected, socketData } = useWebsocket()
  const btcInfo = useRecoilValue(btcInfoState)
  const ethInfo = useRecoilValue(ethInfoState)
  const xrpInfo = useRecoilValue(xrpInfoState)

  const getCoinState = (coinId: string): ICoinState | undefined => {
    switch (coinId) {
      case 'btc':
        return btcInfo
      case 'eth':
        return ethInfo
      case 'xrp':
        return xrpInfo
      default:
        return
    }
  }

  return (
    <div className="ml-auto flex flex-col items-end">
      <p
        className={`text-base font-semibold ${getTextColor(
          getCoinState(coinId)
        )}`}
      >
        {getCoinState(coinId)?.tp?.toLocaleString('ko-KR')}
      </p>
      <p
        className={`font-semibold text-sm ${getTextColor(
          getCoinState(coinId)
        )}`}
      >
        {getCoinState(coinId)?.scr}%
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
