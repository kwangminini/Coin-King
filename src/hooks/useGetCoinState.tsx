'use client'

import { ICoinState, getCoinState } from '@/atoms/coinsAtom'
import { useRecoilValue } from 'recoil'

/**
 * 상황에 맞게 Recoil의 Coin Data를 가져올 수 있는 함수와 Data를 제공하는 Custom Hook
 * @param {string | undefined} coinId - 코인 Id (ex. btc, eth)
 * @returns Recoil의 Coin Data를 가져올 수 있는 함수, Recoil의 Coin Data
 */
export default function useGetCoinState(coinId: string): {
  coinState: ICoinState
} {
  const coinState = useRecoilValue(getCoinState(coinId))
  return {
    coinState,
  }
}
