import { atom } from 'recoil'

const suffix = 'InfoState'

const atomKey = {
  btc: 'btc' + suffix,
  eth: 'eth' + suffix,
  xrp: 'xrp' + suffix,
}

export interface ICoinState {
  tp?: number //현재가
  c?: 'RISE' | 'EVEN' | 'FALL' //전일대비 비교 (RISE => 상승, EVEN => 보합, FALL => 하락)
  scr?: number //전일대비 퍼센트
}
export const btcInfoState = atom<ICoinState>({
  key: atomKey.btc,
  default: {
    tp: undefined,
    c: undefined,
    scr: undefined,
  },
})

export const ethInfoState = atom<ICoinState>({
  key: atomKey.eth,
  default: {
    tp: undefined,
    c: undefined,
    scr: undefined,
  },
})
export const xrpInfoState = atom<ICoinState>({
  key: atomKey.xrp,
  default: {
    tp: undefined,
    c: undefined,
    scr: undefined,
  },
})
