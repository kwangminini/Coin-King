'use client'

import {
  ICoinState,
  btcState,
  ethState,
  xrpState,
  defaultState,
} from '@/atoms/coinsAtom'
import { useRecoilValue } from 'recoil'

/**
 * 상황에 맞게 Recoil의 Coin Data를 가져올 수 있는 함수와 Data를 제공하는 Custom Hook
 * @param {string | undefined} coinId - 코인 Id (ex. btc, eth)
 * @returns Recoil의 Coin Data를 가져올 수 있는 함수, Recoil의 Coin Data
 */
export default function useGetCoinState(coinId?: string): {
  getCoinState: (coinId: string) => ICoinState
  coinState: ICoinState
} {
  const btcInfo = useRecoilValue(btcState)
  const ethInfo = useRecoilValue(ethState)
  const xrpInfo = useRecoilValue(xrpState)

  const getCoinState = (coinId: string): ICoinState => {
    switch (coinId) {
      case 'btc':
        return btcInfo
      case 'eth':
        return ethInfo
      case 'xrp':
        return xrpInfo
      default:
        return defaultState
    }
  }

  return {
    getCoinState,
    coinState: coinId ? getCoinState(coinId) : defaultState,
  }
}
