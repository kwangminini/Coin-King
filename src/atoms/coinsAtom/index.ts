import { atom } from 'recoil'

export interface ICoinState {
  tp?: number //현재가
  c?: 'RISE' | 'EVEN' | 'FALL' //전일대비 비교 (RISE => 상승, EVEN => 보합, FALL => 하락)
  scr?: number //전일대비 퍼센트
}

const suffix = 'InfoState'

const defaultState = {
  tp: undefined,
  c: undefined,
  scr: undefined,
}
const atomKey = {
  btc: 'btc' + suffix,
  eth: 'eth' + suffix,
  xrp: 'xrp' + suffix,
}

export const btcInfoState = atom<ICoinState>({
  key: atomKey.btc,
  default: defaultState,
})

export const ethInfoState = atom<ICoinState>({
  key: atomKey.eth,
  default: defaultState,
})

export const xrpInfoState = atom<ICoinState>({
  key: atomKey.xrp,
  default: defaultState,
})
