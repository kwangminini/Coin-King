'use client'

import { CoinId, ICoinState, getCoinState } from '@/atoms/coinsAtom'
import { useRecoilValue } from 'recoil'

/**
 * 상황에 맞게 Recoil의 Coin Data를 가져올 수 있는 함수와 Data를 제공하는 Custom Hook
 * @param {CoinId} coinId - 코인 Id (ex. btc, eth)
 * @returns ICoinState
 */
export default function useGetCoinState(coinId: CoinId): {
  coinState: ICoinState
} {
  const coinState = useRecoilValue(getCoinState(coinId))
  return {
    coinState,
  }
}
