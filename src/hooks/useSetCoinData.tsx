'use client'
import { CoinId, coinStateObj } from '@/atoms/coinsAtom'
import { IUpbitCoin } from '@/types/upbit/coin'
import { useSetRecoilState } from 'recoil'

export default function useSetCoinData() {
  const setCoinStateObj = useSetRecoilState(coinStateObj)
  /**
   * 필요한 데이터만 formatting 하는 func
   * @param data websocket으로 받은 upbit data
   * @returns ICoinState
   */
  const handleDataFormat = (data: IUpbitCoin) => {
    return {
      c: data.c,
      scr: Number((data.scr * 100).toFixed(2)),
      tp: data.tp,
      op: data.op,
      hp: data.hp,
      lp: data.lp,
    }
  }

  /**
   * recoil에 저장된 코인 값과 websocket으로 넘어온 값이 다를 때에만 recoil update
   * @param data websocket으로 받은 upbit data
   */
  const setCoinData = (data: IUpbitCoin) => {
    const coinId = data.cd.split('-')[1].toLowerCase() as CoinId

    setCoinStateObj((coinData) => {
      if (coinData[coinId].tp !== data.tp) {
        return {
          ...coinData,
          [coinId]: handleDataFormat(data),
        }
      }
      return coinData
    })
  }

  return { setCoinData }
}
