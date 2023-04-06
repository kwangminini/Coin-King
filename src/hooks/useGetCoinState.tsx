'use client'

import { ICoinState, btcState, ethState, xrpState } from '@/atoms/coinsAtom'
import { useRecoilValue } from 'recoil'

export default function useGetCoinState(
  coinId: string
): ICoinState | undefined {
  const btcInfo = useRecoilValue(btcState)
  const ethInfo = useRecoilValue(ethState)
  const xrpInfo = useRecoilValue(xrpState)

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

  return getCoinState(coinId)
}
