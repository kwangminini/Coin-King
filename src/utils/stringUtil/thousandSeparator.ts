import { comma } from '@/utils/stringUtil/comma'
import { unComma } from '@/utils/stringUtil/unComma'

/**
 * input value에 천단위 , 포함하는 문자열 리턴 하는 함수
 * @param {string} str input value
 * @returns {string} 천단위 , 포함한 문자열
 */
export const thousandSeparator = (str: string): string => {
  return comma(unComma(str))
}
