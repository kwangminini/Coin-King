import { ICoinState } from '@/atoms/coinsAtom'

/**
 * 전일대비 비교 값을
 * @param {ICoinState} coinState - 코인 정보
 * @returns 'text-increase-color' | 'text-decrease-color' | 'text-main-text-color'
 */
export function getTextColor(coinState: ICoinState): string {
  if (coinState.c === 'RISE') {
    return 'text-increase-color'
  } else if (coinState.c === 'FALL') {
    return 'text-decrease-color'
  } else {
    return 'text-main-text-color'
  }
}
