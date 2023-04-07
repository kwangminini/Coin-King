'use client'
import { btcState, ethState, ICoinState, xrpState } from '@/atoms/coinsAtom'
import { IUpbitCoin } from '@/model/upbitCoin'
import { useRecoilState, SetterOrUpdater } from 'recoil'

export default function useSetCoinData() {
  const [btcInfo, setBtcInfo] = useRecoilState<ICoinState>(btcState)
  const [ethInfo, setEthInfo] = useRecoilState<ICoinState>(ethState)
  const [xrpInfo, setXrpInfo] = useRecoilState<ICoinState>(xrpState)

  /**
   * 필요한 데이터만 formatting 하는 func
   * @param data websocket으로 받은 upbit data
   * @returns ICoinState
   */
  const handleDataFormat = (data: IUpbitCoin): ICoinState => {
    return {
      c: data.c,
      scr: Number((data.scr * 100).toFixed(2)),
      tp: data.tp,
    }
  }
  /**
   * recoil에 저장된 코인 값과 websocket으로 넘어온 값이 다를 때에만 recoil update
   * @param data websocket으로 받은 upbit data
   * @param coinState recoil coin data
   * @param func recoil coin update func
   */
  const handleSetData = (
    data: IUpbitCoin,
    coinState: ICoinState,
    func: SetterOrUpdater<ICoinState>
  ): void => {
    if (data.tp && data.tp !== coinState.tp) {
      func(handleDataFormat(data))
    }
  }
  /**
   * recoil update 로직을 담당하는 func
   * @param data websocket으로 받은 upbit data
   */
  const setCoinData = (data: IUpbitCoin) => {
    switch (data.cd) {
      case 'KRW-BTC':
        handleSetData(data, btcInfo, setBtcInfo)
        break
      case 'KRW-ETH':
        handleSetData(data, ethInfo, setEthInfo)
        break
      case 'KRW-XRP':
        handleSetData(data, xrpInfo, setXrpInfo)
        break
      default:
        console.log('setCoinData Error :::', data)
        break
    }
  }

  return { setCoinData }
}
