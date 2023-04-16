import { atom, selectorFamily } from 'recoil'

export interface ICoinState {
  tp?: number //현재가
  c?: 'RISE' | 'EVEN' | 'FALL' //전일대비 비교 (RISE => 상승, EVEN => 보합, FALL => 하락)
  scr?: number //전일대비 퍼센트
  op?: number //시가
  hp?: number //고가
  lp?: number //저가
}

export interface ICoinStateObj {
  [key: string]: ICoinState
  btc: ICoinState
  eth: ICoinState
  xrp: ICoinState
}

const atomKey = {
  coin: 'coinState',
  coinSelector: 'coinSelector',
}

export const defaultState = {
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
    xrp: defaultState,
  },
})

export const getCoinState = selectorFamily<ICoinState, string>({
  key: atomKey.coinSelector,
  get:
    (coinId) =>
    ({ get }) => {
      const _coinStateObj = get(coinStateObj)
      return _coinStateObj[coinId]
    },
})
