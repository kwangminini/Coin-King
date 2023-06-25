import { atom, selectorFamily } from 'recoil'

export interface ICoinState {
  tp?: number //현재가
  c?: 'RISE' | 'EVEN' | 'FALL' //전일대비 비교 (RISE => 상승, EVEN => 보합, FALL => 하락)
  scr?: number //전일대비 퍼센트
  op?: number //시가
  hp?: number //고가
  lp?: number //저가
}

export type CoinId = 'btc' | 'eth' | 'etc' | 'ada' | 'xrp' | 'doge'

type ICoinStateObj = {
  [key in CoinId]: ICoinState
}

const atomKey = {
  coin: 'coinState',
  coinSelector: 'coinSelector',
}

const defaultState = {
  tp: undefined,
  c: undefined,
  scr: undefined,
  op: undefined,
  hp: undefined,
  lp: undefined,
}
export const coinStateObj = atom<ICoinStateObj>({
  key: atomKey.coin,
  default: {
    btc: defaultState,
    eth: defaultState,
    etc: defaultState,
    ada: defaultState,
    xrp: defaultState,
    doge: defaultState,
  },
})

export const getCoinState = selectorFamily<ICoinState, CoinId>({
  key: atomKey.coinSelector,
  get:
    (coinId: CoinId) =>
    ({ get }) => {
      const _coinStateObj = get(coinStateObj)
      return _coinStateObj[coinId]
    },
})
