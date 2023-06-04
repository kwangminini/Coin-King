/**
 * 문자열에서 , 제거하는 함수
 * @param {string} str
 * @returns {string} , 제거된 문자열
 */
export const unComma = (str: string): string => {
  return str.replace(/,/gi, '')
}
