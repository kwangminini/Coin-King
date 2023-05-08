import { ICoinState } from '@/atoms/coinsAtom'
import { decreaseColor, increaseColor, mainFontColor } from '@/constants/color'

/**
 * 전일대비 비교 값을
 * @param {ICoinState} coinState - 코인 정보
 * @param {boolean} hex - color를 hex 값으로 받을지 유무
 * @returns 'text-increase-color'
 *        | 'text-decrease-color'
 *        | 'text-main-text-color'
 *        | '#C84A31'
 *        \ '#1261C4'
 *        \ '#333333'
 */
export function getTextColor(coinState: ICoinState, hex = false): string {
  if (coinState.c === 'RISE') {
    return hex ? increaseColor : 'text-increase-color'
  } else if (coinState.c === 'FALL') {
    return hex ? decreaseColor : 'text-decrease-color'
  }
  return hex ? mainFontColor : 'text-main-text-color'
}
